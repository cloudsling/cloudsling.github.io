---
title: URI与URL的区别
layout: page
toc: true
comments: true
categories: technology
description: 黑人问号:URL和URI到底有什么区别?
---

## Intro

在很多书上都看过URL和URI这两个概念,也曾很多次网上查阅过相关的资料,但还是会经常弄混这两个词,因此写下这篇博客提醒自己不要再忘了...

### URI: Uniform Resource Identifier

URI,即统一资源标示符.正如字面上的意思,URI就是用来标志某种资源或事物的名称,例如一个人的姓名,一本书的名字,或者一栋大楼的地址,都可以称为URI.从技术的角度讲,一个文件的文件名(无论是否包含具体路径),或者一串网址,都可以被称为URI.

但在之前的例子中,一个人的名字,一本书的名字可以被称为URI,但并不是一个URL.因为你无法只通过这个名字找到这个确定的人或这本书.

### URL: Uniform(Universal) Resource Locator

URL,统一资源定位符,就是定位一个资源确切地址的名称.它是URI的一个子集.例如天安门,中华人民共和国上海市xx路xx区xx单元xx号,都可以被称为URL,因为根据这个URL你可以确切的找到这个地方.从程序员的角度讲,C:/Windows/System32/Security/tokyo_cold.7z,/home/someone/Downloads/firefox.tar.bz2,https://www.zero-th.com/ 这些都可以被称为URL.而现在,URL更多的被用来表示一个网络上的资源或者说网址,格式如下:协议类型://服务器地址(:端口号)/路径/(文件名).

### 总结


所有的URL都是URI,但是URI不一定是URL.区别就是URI是一个对资源的标示,不一定能够根据这个标示找到这个资源的确切位置.但如果能找到某个资源的位置的话那这个URI也是一个URL.而现在,URL往往被用来描述一个网络上的资源,即网址.所以在讨论关于网址方面的时候使用URL更加确切.妈妈再也不用纠结是ServiceUri还是ServiceUrl了蛤哈哈.

### 引用

* [https://danielmiessler.com/study/url-uri/][1]
* http://stackoverflow.com/questions/176264/what-is-the-difference-between-a-uri-a-url-and-a-urn

维基百科:
* https://en.wikipedia.org/wiki/Uniform_Resource_Locator
* https://en.wikipedia.org/wiki/Uniform_Resource_Identifier

[1]: (https://danielmiessler.com/study/url-uri/)
