---
title: 'Sistema de Detección de Intrusos (IDS) en una red'
description: 'Funcionamiento de un IDS y sus tipos'
date: 'Octubre 19, 2021'
image: '/images/posts/sistema-de-deteccion-de-intrusos-en-una-red.jpg'
author:
  name: 'Óscar Miranda'
  image: '/images/author.png'
tags: ['Informativo']

---

Un sistema de detección de intrusos, también conocido como IDS, es una defensa
proactiva que aplica todas las medidas administrativas, físicas y lógicas con el
fin de evitar que un ataque sea llevado a cabo. Existen dos tipos de IDS:

- Host (HIDS)
- De red (NIDS)

El sistema revela datos para analizarlos y obtener información que nos permita
predecir futuros ataques.

El IDS se compone de un sensor para la recopilación de datos, una consola para
procesar y correlacionar los datos y un protocolo de comunicación. Tiene la
función de capturar y analizar el tráfico, detectar anomalías o posibles ataques
y enviar una alarma al administrador, ya sea por correo electrónico, mensaje SMS
o cualquier otro método posible.

El sistema de detección de intrusos detecta a base de patrones que pueden
identificar ciertos eventos o acciones, anomalías en el comportamiento del
tráfico de la red.

### Tipos de IDS

**HIDS:** Monitorea los paquetes o archivos en un equipo para el control de la
firma de cada uno y revisar la integridad de los mismos. Es parecido a como lo
haría un firewall.

**NIDS:** Analiza el tráfico que circula en la red en tiempo real. Detecta
ataques de denegación de servicios, escaneo de puertos o intentos por tomar el
control del equipo. Monitorean el tráfico que sale y entra en la red.
