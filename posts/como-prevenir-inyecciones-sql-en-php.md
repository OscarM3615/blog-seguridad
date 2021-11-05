---
title: '¿Cómo prevenir inyecciones SQL en PHP?'
description: 'Buenas prácticas en tu código para evitar inyecciones SQL'
date: 'Noviembre 4, 2021'
image: '/images/posts/como-prevenir-inyecciones-sql-en-php.png'
author:
  name: 'Óscar Miranda'
  image: '/images/author.png'
tags: ['Tutorial']

---

Los ataques de tipo inyección SQL son muy comunes en los sistemas web cuando
utilizan bases de datos, es muy importante prevenir dichos ataques hoy en día.
Se debe recordar que las instrucciones SQL se generan como cadenas de texto
insertando valores que provienen generalmente de entradas del usuario, por lo
que es crucial proteger estas áreas para evitar vulnerabilidades en
nuestro sistema.

Ejemplo:

```php
$idUsuario = $_GET["userId"];
mysql_query("SELECT * FROM Usuarios WHERE id = $idUsuario");
```

Si un usuario intentara ingresar conscientemente un valor como `1; DROP TABLE
Usuarios;` el resultado de la consulta anterior sería:

```sql
SELECT * FROM Usuarios WHERE id = 1; DROP TABLE Usuarios;
```

Esta es una instrucción totalmente válida y dependiendo del sistema podría
realmente borrar la información de todos los usuarios. Es esta la importancia
de validar las entradas de los usuarios.

### ¿Cómo evitar este problema?

#### No utilizando sentencias dinámicas

- Evitar cada que sea posible utilizar valores dinámicos en las declaraciones
    SQL (aunque en una aplicación real es casi imposible no utilizarlas).
- Dejar de utilizar las funciones `mysql_*` de PHP, pues son obsoletas.

#### Dar menos privilegios a los usuarios de la base de datos

- No utilizar el usuario `root` con la contraseña vacía de la configuración por
    defecto.
- Crear un usuario desde el gestor de bases de datos especialmente para
    nuestra aplicación y solo darle los accesos necesarios.

#### Utilizar declaraciones preparadas (prepared statements)

La forma más recomendada es utilizando conexiones `PDO`. Estas conexiones se
manejan de forma orientada a objetos y provee de métodos que permiten tener
más seguridad a la hora de realizar sentencias.

Un ejemplo de cómo se utiliza:

```php
// Conexión con la base de datos.
$conn = new PDO("mysql:host=$host;dbname=$basedatos", $usuario, $password);

$idUsuario = $_GET["userId"];

// Forma segura de hacer el query.
$stmt = $conn->prepare("SELECT * FROM Usuarios WHERE id = :idUser");

// Se reemplaza el valor de forma segura indicando el tipo.
$stmt->bindParam(":idUser", $idUsuario, PDO::PARAM_INT);

$stmt->execute();
```

Utilizando esta forma las inyecciones SQL ya no pueden ser realizadas y por lo
tanto nuestro sistema es más seguro, sin embargo, aun así se debe mantener la
conciencia de seguir buenas prácticas de seguridad durante el desarrollo del
software.
