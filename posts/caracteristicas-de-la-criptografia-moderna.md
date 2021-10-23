---
title: 'Características de la criptografía moderna'
description: 'Funcionamiento de la criptografía simétrica y asimétrica'
date: 'Octubre 23, 2021'
image: '/images/posts/caracteristicas-de-la-criptografia-moderna.jpg'
author:
  name: 'Óscar Miranda'
  image: '/images/author.png'
tags: ['Informativo']
---

En la actualidad los sistemas de cifrado se dividen principalmente en dos: de
clave privada y de clave pública, también llamándose simétricos o asimétricos
respectivamente.

### Clave privada

Utiliza una única clave para el cifrado y el descifrado, por lo que se le llama
cifrado simétrico. Utilizado principalmente para la privacidad y la
confidencialidad.

Se debe emplear una clave muy difícil de adivinar, pues los ordenadores actuales
puedes probar bastantes combinaciones muy rápidamente hasta conseguir la
correcta.

### Clave pública

Utiliza dos claves, una para el cifrado y otra para el descifrado. Este método
es asimétrico. Suele ser utilizado para la autenticación y el intercambio de
claves.

Lo que se cifra con la clave secreta se puede descifrar con la clave pública y
viceversa. Esta caracteristica de los sistemas asimétricos permite otras
aplicaciones como la firma digital en las redes de telecomunicaciones.

Ofrece un nivel de seguridad superior, pues sin la clave privada ni siquiera el
usuario que cifró el mensaje podría descifrarlo.

### Usos de la criptografía de asimétrica

- Firma electrónica: Contenido firmado digitalmente.
- Autenticación: Los destinatarios pueden confiar en que el emisor fue quien
  realmente aplicó la firma.
- No repudio: El emisor no puede reclamar que no fue quien aplicó la firma.
- Integridad: La verificación de la firma valida que el contenido del mensaje es
  original.
- Encriptación: El contenido se cifra con la clave pública y solo se puede
  descifrar con su clave privada. Lo utilizan la mayoría de aplicaciones de
  mensajería.
