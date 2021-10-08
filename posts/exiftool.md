---
title: 'ExifTool: ¿Qué tanto se puede saber de una imagen?'
description: 'Descubre cómo utilizar ExifTool para obtener los metadatos de una
imagen'
date: 'Octubre 7, 2021'
image: '/images/posts/exiftool.jpg'
author:
  name: 'Óscar Miranda'
  image: '/images/author.png'
tags: ['Tutorial']

---

Los archivos de las imágenes, además de contener la propia imagen, contienen
también más información que proviene de la cámara o del software que haya sido
utilizado para crearla o modificarla.

Estos datos se guardan en formato EXIF (exchangeable image file format), las
cámaras por lo general graban la posición GPS en caso de estar activada dicha
opción, el modelo de la cámara, orientación, exposición, etc.

Los datos **EXIF** de las imágenes pueden ser extraídos y modificados con un
software llamado [ExifTool](https://exiftool.org/) creado por Phil Harvey. Esta
aplicación puede utilizarse en Windows, MacOS y Linux, y puede ser instalada o
utilizarse en versión portable (el siguiente ejemplo utiliza Linux, pero los
comandos son iguales).

Para leer los datos de una imagen basta con pasarle el nombre al programa:

```sh
exiftool IMG_20210806_223811.jpg
```

El comando anterior mostrará un resultado similar al siguiente:

```plaintext
ExifTool Version Number         : 12.30
File Name                       : IMG_20210806_223811.jpg
Directory                       : .
File Size                       : 236 KiB
File Modification Date/Time     : 2021:10:07 13:50:23-06:00
File Access Date/Time           : 2021:10:07 13:50:23-06:00
File Inode Change Date/Time     : 2021:10:07 20:29:47-06:00
File Permissions                : -rw-r--r--
File Type                       : JPEG
File Type Extension             : jpg
MIME Type                       : image/jpeg
JFIF Version                    : 1.01
Exif Byte Order                 : Little-endian (Intel, II)
Image Description               :
Make                            : HUAWEI
Camera Model Name               : DRA-LX3
Orientation                     : Horizontal (normal)
X Resolution                    : 72
Y Resolution                    : 72
Resolution Unit                 : inches
Software                        : MediaTek Camera Application
Modify Date                     : 2021:08:06 22:38:12
Y Cb Cr Positioning             : Co-sited
Exposure Time                   : 1/10
F Number                        : 2.8
Exposure Program                : Not Defined
ISO                             : 1500
Exif Version                    : 0220
Date/Time Original              : 2021:08:06 22:38:12
Create Date                     : 2021:08:06 22:38:12
Components Configuration        : Y, Cb, Cr, -
Exposure Compensation           : 0
Metering Mode                   : Center-weighted average
Light Source                    : Other
Flash                           : No Flash
Focal Length                    : 3.5 mm
Maker Note Unknown Text         : Auto
Sub Sec Time                    : 32
Sub Sec Time Original           : 32
Sub Sec Time Digitized          : 32
Flashpix Version                : 0100
Color Space                     : sRGB
Exif Image Width                : 1632
Exif Image Height               : 3264
Interoperability Index          : R98 - DCF basic file (sRGB)
Interoperability Version        : 0100
Exposure Mode                   : Auto
White Balance                   : Auto
Digital Zoom Ratio              : 1
Scene Capture Type              : Standard
Compression                     : JPEG (old-style)
Thumbnail Offset                : 1298
Thumbnail Length                : 9189
Image Width                     : 1632
Image Height                    : 3264
Encoding Process                : Baseline DCT, Huffman coding
Bits Per Sample                 : 8
Color Components                : 3
Y Cb Cr Sub Sampling            : YCbCr4:2:0 (2 2)
Aperture                        : 2.8
Image Size                      : 1632x3264
Megapixels                      : 5.3
Shutter Speed                   : 1/10
Create Date                     : 2021:08:06 22:38:12.32
Date/Time Original              : 2021:08:06 22:38:12.32
Modify Date                     : 2021:08:06 22:38:12.32
Thumbnail Image                 : (Binary data 9189 bytes, use -b option to extract)
Focal Length                    : 3.5 mm
Light Value                     : 2.4
```

Como podemos ver, se puede obtener la fecha de creación, de edición y de acceso,
además del dispositivo (Huawei), el tipo de cámara (DRA-LX3), la orientación, si
se utilizó flash o no, etc. Es importante tener cuidado al subir imágenes a
redes sociales o a Internet en general, pues los cibercriminales pueden
aprovecharse de esta información para conocer mejor a su próxima víctima y
planear su ataque.

> Este post solamente tiene la intención de mostrar el uso de la aplicación para
> hacer conciencia sobre cuánta información se puede divulgar con una sola foto.
