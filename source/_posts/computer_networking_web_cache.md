---
title: 计算机网络.Web缓存
banner: 
comments: true
categories:
- 计算机网络
tags:
- web
- proxy
---
# Web缓存

Web缓存器（Web cache）也叫做代理服务器（proxy server），它能够代表初始Web服务器来满足HTTP请求的网络实体。当某个浏览器配置为指向某个web缓存器，那么这个浏览器的所有HTTP请求将重定向为改Web缓存器，Web缓存器将返回一个已经缓存的页面对象副本，或者返回重新请求的页面对象。因此，Web缓存器即使服务器也是客户。

## 一般过程

1. 浏览器建立一个到Web缓存器的TCP连接，并向Web缓存器中的对象发送一个HTTP请求。

1. Web缓存器检查本地是否储存了该对象副本。如果有，Web缓存器就发出HTTP响应报文返回该对象。

1. 如果Web缓存器没有该对象，它就打开一个与该对象的厨师服务器的TCP连接。Web缓存器将在这个TCP连接上发送一个该对象的HTTP请求，等待HTTP响应报文。

1. 当Web缓存器接收到该对象后，它将在本地储存一份该对象的副本，并向客户端浏览器用HTTP响应报文发送该副本，通过现有的TCP连接。

<!-- more -->

### Web缓存器应用-内容分发网络CDN

用过部署使用内容分发网络（Content Distribution Network，CDN），能够实现大量流量的本地化，使Web访问更加迅速。有共享的CDN，如Akamai，及专用的CDN，如谷歌和微软。

### 条件GET方法

虽然高速缓存可能存在缓存器中的对象副本已经过期的现象，但由于HTTP的条件GET方法，能够保证缓存器证实它的对象副本是最新的。在HTTP请求报文中常见的方法字段有GET,POST,PUT和DELET等，条件GET就是在HTTP请求报文中包含以一个If-Modified-Since:首部行。如果对象未过期，则返回的HTTP响应报文不包含响应体。

## Sock5

Sock5是一个代理协议，是目前广泛用于科学上网的一个协议，具体应用如shadows0cks和shadows0cksr。

## 引用

- 计算机网络-自顶向下方法

- [Socket Secure (SOCKS)](https://en.wikipedia.org/wiki/SOCKS)