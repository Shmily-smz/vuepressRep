<template><div><p><strong>问题描述：</strong>
开启读取磁条后，在没有读取磁条的情况下，无法进行中断操作。
<strong>问题设想解决思路：</strong>
可能是由于线程之间发生了阻塞，导致中断按键不生效。
<strong>问题实际解决思路：</strong>
通过抓取线程dump查看是否有线程死锁，阻塞等一系列问题，从而导致中断键无效。检查读取前中断键是否生效。
<strong>问题解决方案一：</strong>
通过键盘钩子的方式监听键盘按键。
<strong>可能导致的延申问题：</strong>
使用键盘钩子的方式可能会耗费更多的系统资源。
<strong>问题解决：</strong>
<strong>安装钩子</strong>
<img src="@source/AB5/images/待评审文档/稠州银行—外设读取磁条时无法中断/1.png" alt="enter image description here">
<strong>设置钩子回调函数</strong>
<img src="@source/AB5/images/待评审文档/稠州银行—外设读取磁条时无法中断/2.png" alt="enter image description here">
<strong>卸载钩子</strong>
<img src="@source/AB5/images/待评审文档/稠州银行—外设读取磁条时无法中断/3.png" alt="enter image description here"></p>
</div></template>


