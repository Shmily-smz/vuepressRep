#### 问题背景

eclipse 运行一段时间后，经常出现 javax.servlet_3.1.0 插件找不到问题，现象为 plugin 配置页面出现了 out of sync 的提示

![Image](https://jihulab.com/413343176/image/raw/master/lisijia/20210615090447.png)

查看 eclipse 本地文件，发现 3.1 的文件丢失

![Image](https://jihulab.com/413343176/image/raw/master/lisijia/20210615090507.png)

但此文件在新下载的 eclipse 中是存在的

![Image](https://jihulab.com/413343176/image/raw/master/lisijia/20210615090518.png)

#### 问题分析

之前一直怀疑是 eclipse 在后台自动更新时，导致了该问题，遂把更新关掉，但后续该问题依旧存在

![Image](https://jihulab.com/413343176/image/raw/master/lisijia/20210615090541.png)

联想到 abc 在关闭时，会清理本地插件，猜测是否会清理时删除的，便在清理时增记录，日志显示，确实为 abc 关闭时清理导致

![Image](https://jihulab.com/413343176/image/raw/master/lisijia/20210615090552.png)

![Image](https://jihulab.com/413343176/image/raw/master/lisijia/20210615090557.png)

发现清理时，使用的路径，使用 Platform._getInstallLocation_() 方式获取，这种方式由于在 eclipse 中运行时，未进行配置，指向的为 eclipse 根目录，导致后续问题

![Image](https://jihulab.com/413343176/image/raw/master/lisijia/20210615090607.png)

#### 问题解决

把代码修改为通过工作路径获取方式，问题解决
siteDir = new File(Platform.getInstanceLocation().getURL().getFile()).getParentFile();
abcRootDir = new File(Platform.getInstanceLocation().getURL().getFile()).getParentFile();

#### 问题扩展

以下为在 eclipse 中源码运行时，获取路径的两种关系

![Image](https://jihulab.com/413343176/image/raw/master/lisijia/20210615090627.png)

![Image](https://jihulab.com/413343176/image/raw/master/lisijia/20210615090630.png)
