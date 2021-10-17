---
title: '¿Cómo funciona un firewall?'
description: 'Funciones que cumple un firewall en una red'
date: 'Octubre 18, 2021'
image: '/images/posts/como-funciona-un-firewall.jpg'
author:
  name: 'Óscar Miranda'
  image: '/images/author.png'
tags: ['Informativo']

---

Un firewall se encarga de proteger a un ordenador o bien a una red de
ordenadores contra intrusiones que provengan de redes externas, por lo general
desde Internet.

El firewall filtra los paquetes de datos que son intercambiados a través de
Internet:

- Autoriza conexiones
- Bloquea conexiones

Un firewall puede ser de hardware o de software, si uno es mejor opción que el
otro depende de:

- El tipo de protección deseada: uno o varios equipos
- El costo
- Los conocimientos informáticos
- El rendimiento del equipo

### Clasificación de firewalls

Los firewall se pueden clasificar según la capa del modelo OSI que protege,
aceptando o rechazando paquetes.

| # | Capa OSI        |
|:-:|:----------------|
| 5 | Aplicación      |
| 4 | TCP             |
| 3 | IP              |
| 2 | Enlace de datos |
| 1 | Física          |

- Packet Filters: Trabajan sobre la capa IP
- Circuit Level Gateways: Trabajan sobre la capa TCP
- Application Level Gateways: Trabajan sobre la capa de Aplicación
- Stateful Multilayer Firewall: Trabajan sobre las tres primeras capas
