---
title: 'Detecta dispositivos desconocidos en tu red con nmap'
description: 'Descubre cuántos dispositivos hay conectados a tu red'
date: 'Octubre 21, 2021'
image: '/images/posts/detecta-dispositivos-desconocidos-en-tu-red-con-nmap.jpg'
author:
  name: 'Óscar Miranda'
  image: '/images/author.png'
tags: ['Tutorial']

---

Tener intrusos en la red puede ser peligroso, pues una persona con conocimientos
en redes podría escanear los datos de la red en busca de información personal.

Nmap es una herramienta de mapeo de red que funciona mandando mensajes de red a
las direcciones IP que se le indiquen, con esto se puede obtener información
como los dispositivos activos y puertos abiertos.

Lo primero es conocer la dirección IP local, en Windows se puede realizar con el
comando `ipconfig` y en Linux con `ip addr`. Para más información se recomienda
el siguiente artículo: [Cómo saber la IP local asignada en Windows 10, Linux y Mac](https://www.muycomputer.com/2018/09/24/ip-local-windows-10-linux-mac/)

El resultado de la dirección IP puede ser algo similar a `192.168.1.0/24`, la
parte de `/24` indica que el rango de direcciones puede ir de `192.168.1.0` a
`192.168.1.255`.

Para obtener la lista de dispositivos se usará el siguiente comando (en sistemas
Linux se requiere utilizar `sudo`):

```shell
nmap -sn 192.168.1.0/24
```

Esto arrojará una lista de dispositivos conectados, su dirección IP y el nombre
de su fabricante:

```plaintext
Starting Nmap 7.92 ( https://nmap.org ) at 2021-10-21 13:15 MDT
Nmap scan report for 192.168.1.64
Host is up (0.18s latency).
MAC Address: B8:94:36:5F:BC:D0 (Huawei Technologies)
Nmap scan report for 192.168.1.65
Host is up (0.18s latency).
MAC Address: A4:9B:4F:1B:82:21 (Huawei Technologies)
Nmap scan report for 192.168.1.66
Host is up (0.23s latency).
MAC Address: 9C:B7:0D:50:F1:99 (Liteon Technology)
Nmap scan report for 192.168.1.254
Host is up (0.023s latency).
MAC Address: A8:D3:F7:98:CF:52 (Arcadyan Technology)
Nmap scan report for 192.168.1.70
Host is up.
Nmap done: 256 IP addresses (5 hosts up) scanned in 6.87 seconds
```

Esta información puede bastar para detectar algún dispositivo desconocido, por
ejemplo, hay dos dispositivos Huawei y yo como usuario solo tengo uno, podría
comprobar si el otro dispositivo es un intruso y aplicar las medidas necesarias
para denegar el acceso a cierta dirección IP (puede hacerse desde la
configuración del router).
