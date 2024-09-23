<template><div><h4 id="配置提示" tabindex="-1"><a class="header-anchor" href="#配置提示"><span>配置提示</span></a></h4>
<p>在进行 springboot 开发进行配置时（如配置 application.yml）,根据输入的配置 IDE 将智能的进行提示（图 1），IDE 如何知道程序中所有的配置项的呢？</p>
<p>答案是本文提到的 spring jar 中 META-INF/ <code v-pre>spring-configuration-metadata.json</code> 文件。</p>
<p><img src="@source/allmd/images/平台/ABS5/aase/Spring配置提示生成实践/1.png" alt="image"></p>
<p>图 1</p>
<p><img src="@source/allmd/images/平台/ABS5/aase/Spring配置提示生成实践/2.png" alt="image"></p>
<p>图 2</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{"groups": [</span>
<span class="line">{</span>
<span class="line">"name": "server",</span>
<span class="line">"type": "org.springframework.boot.autoconfigure.web.ServerProperties",</span>
<span class="line">"sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties"</span>
<span class="line">},</span>
<span class="line">{</span>
<span class="line">"name": "spring.jpa.hibernate",</span>
<span class="line">"type": "org.springframework.boot.autoconfigure.orm.jpa.JpaProperties$Hibernate",</span>
<span class="line">"sourceType": "org.springframework.boot.autoconfigure.orm.jpa.JpaProperties",</span>
<span class="line">"sourceMethod": "getHibernate()"</span>
<span class="line">}</span>
<span class="line">...</span>
<span class="line">],"properties": [</span>
<span class="line">{</span>
<span class="line">"name": "server.port",</span>
<span class="line">"type": "java.lang.Integer",</span>
<span class="line">"sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties"</span>
<span class="line">},</span>
<span class="line">{</span>
<span class="line">"name": "server.address",</span>
<span class="line">"type": "java.net.InetAddress",</span>
<span class="line">"sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties"</span>
<span class="line">},</span>
<span class="line">{</span>
<span class="line">  "name": "spring.jpa.hibernate.ddl-auto",</span>
<span class="line">  "type": "java.lang.String",</span>
<span class="line">  "description": "DDL mode. This is actually a shortcut for the \"hibernate.hbm2ddl.auto\" property.",</span>
<span class="line">  "sourceType": "org.springframework.boot.autoconfigure.orm.jpa.JpaProperties$Hibernate"</span>
<span class="line">}</span>
<span class="line">...</span>
<span class="line">],"hints": [</span>
<span class="line">{</span>
<span class="line">"name": "spring.jpa.hibernate.ddl-auto",</span>
<span class="line">"values": [</span>
<span class="line">{</span>
<span class="line">"value": "none",</span>
<span class="line">"description": "Disable DDL handling."</span>
<span class="line">},</span>
<span class="line">{</span>
<span class="line">"value": "validate",</span>
<span class="line">"description": "Validate the schema, make no changes to the database."</span>
<span class="line">},</span>
<span class="line">{</span>
<span class="line">"value": "update",</span>
<span class="line">"description": "Update the schema if necessary."</span>
<span class="line">},</span>
<span class="line">{</span>
<span class="line">"value": "create",</span>
<span class="line">"description": "Create the schema and destroy previous data."</span>
<span class="line">},</span>
<span class="line">{</span>
<span class="line">"value": "create-drop",</span>
<span class="line">"description": "Create and then destroy the schema at the end of the session."</span>
<span class="line">}</span>
<span class="line">]</span>
<span class="line">}</span>
<span class="line">]}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>任意打开一个 <code v-pre>spring-configuration-metadata.json</code> 文件可以看到一个 Json 文件，主节点包含三个节点 ：groups，properties，hints。其中 groups 是对配置的 prefix 进行的提取，如 <code v-pre>server.port</code> and <code v-pre>server.address</code> 的 group 为 server；properties 为真正的配置项，hints 为配置项中可能的值。</p>
<p>** spring-configuration-metadata.json 的来源**</p>
<p>代码 compile 时期对 <code v-pre>@ConfigurationProperties</code> 类字段进行的处理生成，当然也可通过 <code v-pre>META-INF/additional-spring-configuration-metadata.json</code> 手动添加，编译时会自动合并到 <code v-pre>spring-configuration-metadata.json</code></p>
<p>生成方法：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">dependencies {</span>
<span class="line">annotationProcessor "org.springframework.boot:spring-boot-configuration-processor" // 自动生成spring-configuration-metadata.json</span>
<span class="line">        compileJava.dependsOn(processResources)  //如定义additional-spring-configuration-metadata.json 合并到spring-configuration-metadata.json</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实践" tabindex="-1"><a class="header-anchor" href="#实践"><span>实践</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">dependencies {</span>
<span class="line">    compile('org.springframework.boot:spring-boot-starter-web'){</span>
<span class="line">exclude group:'org.springframework.boot', module:'spring-boot-starter-tomcat'</span>
<span class="line">}</span>
<span class="line">annotationProcessor('org.springframework.boot:spring-boot-configuration-processor'){</span>
<span class="line">because "为了消除@ConfigurationProperties注入自定义配置属性时产生警告"</span>
<span class="line">}</span>
<span class="line">    // ……</span>
<span class="line"> }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成 jar 包（图 3）：</p>
<p><img src="@source/allmd/images/平台/ABS5/aase/Spring配置提示生成实践/3.png" alt="image"></p>
<p>图 3</p>
<p><code v-pre>spring-configuration-metadata.json</code> 内容：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{</span>
<span class="line">  "groups": [</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis",</span>
<span class="line">      "type": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties"</span>
<span class="line">    }</span>
<span class="line">  ],</span>
<span class="line">  "properties": [</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.address",</span>
<span class="line">      "type": "java.lang.String",</span>
<span class="line">      "description": "redis服务器地址",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": "127.0.0.1"</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.connect-timeout",</span>
<span class="line">      "type": "java.lang.Integer",</span>
<span class="line">      "description": "redisson连接超时时间，默认10000，单位ms",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": 10000</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.core-pool-size",</span>
<span class="line">      "type": "java.lang.Integer",</span>
<span class="line">      "description": "redisson核心线程数，默认4",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": 4</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.keep-alive",</span>
<span class="line">      "type": "java.lang.Boolean",</span>
<span class="line">      "description": "Enables TCP keepAlive for connection，默认false",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": false</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.master-connection-minimum-idle-size",</span>
<span class="line">      "type": "java.lang.Integer",</span>
<span class="line">      "description": "主节点最小空闲连接数，默认24",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": 24</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.master-connection-pool-size",</span>
<span class="line">      "type": "java.lang.Integer",</span>
<span class="line">      "description": "主节点连接池大小，默认64&lt;br> &lt;p> 多主节点的环境里，每个 主节点的连接池最大容量。连接池的连接数量自动弹性伸缩。",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": 64</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.master-name",</span>
<span class="line">      "type": "java.lang.String",</span>
<span class="line">      "description": "哨兵模式下监听的masterName，默认值为mymaster",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": "mymaster"</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.mode",</span>
<span class="line">      "type": "java.lang.String",</span>
<span class="line">      "description": "运行模式，单例（stand-alone）、集群（cluster）、哨兵（master-slave）",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": "stand-alone"</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.monitor-enable",</span>
<span class="line">      "type": "java.lang.Boolean",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": false</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.monitor-fails",</span>
<span class="line">      "type": "java.lang.Integer",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": 10</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.monitor-interval",</span>
<span class="line">      "type": "java.lang.Integer",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": 12000</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.password",</span>
<span class="line">      "type": "java.lang.String",</span>
<span class="line">      "description": "redis密码，默认为空",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": "000000"</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.read-mode",</span>
<span class="line">      "type": "java.lang.String",</span>
<span class="line">      "description": "redisson的节点读取模式，默认SLAVE",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": "SLAVE"</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.response-timeout",</span>
<span class="line">      "type": "java.lang.Integer",</span>
<span class="line">      "description": "redisson响应等待时间，默认5000，单位ms",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": 5000</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.retry-attempts",</span>
<span class="line">      "type": "java.lang.Integer",</span>
<span class="line">      "description": "失败重试次数，默认3次",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": 3</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.retry-interval",</span>
<span class="line">      "type": "java.lang.Integer",</span>
<span class="line">      "description": "失败重试时间间隔，默认1500，ms",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": 1500</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.slave-connection-minimum-idle-size",</span>
<span class="line">      "type": "java.lang.Integer",</span>
<span class="line">      "description": "从节点最小空闲连接数，默认24",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": 24</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.slave-connection-pool-size",</span>
<span class="line">      "type": "java.lang.Integer",</span>
<span class="line">      "description": "从节点连接池大小，默认64",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": 64</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.subscription-connection-minimum-idle-size",</span>
<span class="line">      "type": "java.lang.Integer",</span>
<span class="line">      "description": "节点发布和订阅连接的最小空闲连接数，默认1&lt;br>",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": 1</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.subscription-connection-pool-size",</span>
<span class="line">      "type": "java.lang.Integer",</span>
<span class="line">      "description": "节点发布和订阅连接池大小，默认50",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": 50</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.subscriptions-per-connection",</span>
<span class="line">      "type": "java.lang.Integer",</span>
<span class="line">      "description": "单个节点最大订阅数量，默认5",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": 5</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      "name": "agree.redis.tcp-no-delay",</span>
<span class="line">      "type": "java.lang.Boolean",</span>
<span class="line">      "description": "Enables TCP noDelay for connection，默认false",</span>
<span class="line">      "sourceType": "cn.com.agree.ab.redis.config.RedissonProperties",</span>
<span class="line">      "defaultValue": false</span>
<span class="line">    }</span>
<span class="line">  ],</span>
<span class="line">  "hints": []</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成 Json 文件说明：
name：来自@ConfigurationProperties 的类字段
type:字段的类型
description：字段的文档注释
sourceType：@ConfigurationProperties 的类
defaultValue：字段的默认值</p>
<p>详细信息访问 参考文献，官方文档。</p>
<h4 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献：</span></a></h4>
<p>https://docs.spring.io/spring-boot/docs/2.1.7.RELEASE/reference/html/configuration-metadata.html#configuration-metadata-additional-metadata</p>
</div></template>


