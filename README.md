# Data Lovers

## Índice

* [Introducción](#introduccion)
* [Resumen del proyecto](#resumen-del-proyecto)
* [Proceso UX](#proceso-ux)
* [Diagrama de Flujo](#diagrama-de-flujo)

***
## Introducción

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas grandes cantidades de datos se conviertan en información fácil de leer para los usuarios, necesitamos entender y procesar estos datos.

Una manera simple de hacerlo es creando interfaces y visualizaciones.

## Resumen del proyecto

Transportation Security Administration es una web  para uso en el sector público, pero de acceso privado, que muestra el número de personas heridas en los accidentes por medio de transporte : tren, bicicleta,motocicleta, auto y bus.

Esta web podrá ser utilizada como fuente de información, consulta y como herramienta en  Sector público para iniciar una gestión en la prevención de accidentes en diversos tipos de transporte.

El usuario podrá acceder a data anual desde 1960 hasta 2016 a través de una interfaz amigable


## Proceso UX

### Descubrimiento e investigación:

![Descubrimiento](https://i.ibb.co/yRLt4LR/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f38376b6462483150664b4339413849696b384b73397a33736254677a4b4b7943505f44525548485539462d364654346c715155356341537237664d776f636466424746367a3162.png)

En esta etapa el propósito es identificar las necesidades,investigar y entender a los usuarios,ara ello en esta etapa inicial utilizamos encuestas y entrevistas que aterrizarán en las historias de usuario.

La data escogida para este proyecto fue INJURIES, por lo que el usuario debe residir en EEUU. Las preguntas de la encuesta estuvieron orientadas de manera general respecto a paginas web que contaran con una base datos y se aplicó a colaboradores que esten relacionados a webs de este tipo o a base de datos de manera general, así podremos saber que es lo prioritario para ellxs, cuales son sus intereses, rubro en el que laboran ,etc.

Si bien la cantidad de personas que respondieron la encuesta es pequeña , consideramos aplicarla a  una muestra realmente representativa que reflejaría datos importantes para nuestra investigación.

La encuesta nos ayudará a acotar el perfil del usuario final con el que tendremos la entrevista , para poder acceder a información más específica que será aplicada en el planteamiento de la interfaz de nuestra página web.

#### Gráfico # 1 Rango de edad

![Pregunta 1](https://i.ibb.co/cT6MLsn/FIRST.png)

En el gráfico 1 podemos observar el rango de edad de los encuestados . Es así que cerca del 57.1% de personas encuestadas no es mayor a 36 años ( 23,8% tiene de 25 a 30 años y 33,3% tiene de 31 a 36 años) y se encuentra en la PEA (población economicamente activa).
Tan solo el 9.5% de los encuestados tiene 50 años a más , pero aún continúan laborando.

#### Gráfico # 2 Sexo

![Pregunta 2](https://i.ibb.co/S0kMhkQ/SECOND.png)

En el gráfico 2 podemos observar el sexo de los encuestados, representado por porcentajes : 56.3% son mujeres y un 43.8% son hombres. Podemos observar que la diferencia no es muy amplia , lo que nos hace deducir que para ambos sexos el manejo y uso de data en su trabajo es relevante.


#### Gráfico # 3

![Pregunta 3](https://i.ibb.co/HdxS3tj/TERCERO.png)

En el gráfico 3 podemos observar el tiempo que nuestros encuestados invierten en internet. El 40.9% de los encuestados pasa de 7-9 horas de su día navegando en internet, cerca tenemos que el 31.8% pasa de 3-5 horas y tan solo el 9.1% pasa de 1-2 horas navegando en la web. Esto nos hace reflexionar que probablemente los colaboradores pasen tanto tiempo en la web buscando información que puedan aplciar en su trabajo. Es así que nace la idea de compilar esa información a través de una web que contenga datos específicos y que aporten valor .


#### Gráfico # 4

![Pregunta 4](https://i.ibb.co/nLwRTBt/CUARTA.png)

En el gráfico 4 podemos observar los sectores del mercado en los que laboran nuestrxs encuestadxs. Predomina el secto público con 31.8%
pertenece al sector público, tanto Seguridad y salud en el trabajo,Manufactura y Ventas con 18.2% y por último Tecnología con 13.6%.
El resultado de este gráfico nos ayudó a acotar a quien iba a dirigirse nuestra web y en consecuencia el propósito de la misma.


#### Gráfico # 5

![Pregunta 5](https://i.ibb.co/gtyPtfK/QUINTA.png)

En el gráfico 5 podemos observar que el 81.8% de encuestados usa en su día a día bases de datos y tan solo el 18.2% no las usa. El que casi la totalidad de encuestados uses bases de datos o acceda a data de alguna manera refleja que puede generarse una necesidad a partir de ello y que los perfiles seleccionados para aplicar la encuesta agregan valor a la propuesta que estamos tratando de generar.


#### Gráfico # 6

![Pregunta 6](https://i.ibb.co/FgS3P5Q/SEXTA2.png)


En el gráfico 6 podemos observar que al 86.4% de encuestados les sería útil poder acceder a una web que contenga una base de datos  y tan solo el 13.6% indicó que no .
Esto nos lleva a reafirmar que crear un producto web con acceso a data es factible y será realmente utilizado por los colaboradores ya que aporta valor y facilita sus tareas en el trabajo.


#### Gráfico # 7

![Pregunta 7](https://i.ibb.co/rHPVtxT/SEPTIMA.png)

En el gráfico 7 podemos observar los aspectos que son importantes para nuestros encuestadxs en una web.

-Estética: para el 45,45% de los encuestados la estética no es importante,para el 18.18% la estética si es importante y para el 36.36% es fundamental.

-Funcionalidad : para el 59.09% de los encuestadxs que la pagina sea funcional es fundamental y para el 40.90% es importante.

-Integración de redes sociales : para el 50% de los encuestadxs que las redes sociales esten presentes en la wen es fundamental, para el 22.72% es importante y para el 27.27% es poco importante.

-Seguridad : para el 63.63% de los encuestadxs que la página sea segura es fundamental , mientras que para el 36.36% es importante.

-Flujo claro y entendible: respecto a que la navegación sea clara , para el 68.18% de nuestrxs encuestadxs es fundamental,27.27% lo considera importante y solo un 4.54% lo considera poco importante.

-Secciones definidas: para el 59.09% de nuestrxs encuestadxs es fundamental tener secciones bien definidas,para el 27.27% es importante y para el 13.63% es poco importante.


### Síntesis y definición:

![Sintesis](https://i.ibb.co/Gd2BZj5/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f6e51495046686a533751746d6a75705073444845386855524d5a52646f776b756f70714973574d475952365943644e52643365446c4448667a31314e5a364d4743704733696956.png)

En esta fase se utilizaran los datos obtenidos en la encuesta previa para definir a nuestro público objetivo , lo que  contribuye al desarrollo del producto. Esto nos ayudar a entender las necesidades del usuario dirigido nuestro producto.

#### User persona

Según Alan Cooper ,padre del lenguaje de programación Visual Basic y autor de “The Inmates Are Running the Asylum” define la creación de User personas mediante arquetipos de usuarios basados en usuarios reales .

Nos ayuda a responder a las preguntas : ¿Para qué estamos diseñando? y ¿Para quién estamos diseñando?.

En base a nuestras encuestas se definió el siguiente User persona :

![User Persona](https://i.ibb.co/bsj6673/Captura-de-pantalla-2019-04-06-a-la-s-10-26-55.png)

#### Público Objetivo

Gerentx de Seguridad de la Alcaldía .

### Historias de usuario

En base a las encuestas, esbozo de User persona y definición de nuestro público objetivo pasamos a la etapa de entrevistas de las cuales obtuvimos las siguientes historias de usuario.

#### Historia de Usuario 1

Yo como gerente de Seguridad de la Alcaldía deseo tener un formulario de registro para mantener la confidencialidad del acceso a información.

DEFINICIÓN DE TERMINADO.- Crearemos una sección de LogIn en HTML que permita al usuario ingresar su user y contraseña que defina y lo lleve a la pantalla que permite visualizar los datos.


#### Historia de Usuario 2

Yo como gerente de Seguridad de la alcaldía deseo acceder a una vista para observar el total de accidentes que se dieron en un año en específico.

DEFINICIÓN DE TERMINADO.- Implementaremos un botón que permita seleccionar el año deseado y muestre en la web la relación de los tipos de de accidentes que se dieron en ese periodo de tiempo.

#### Historia de Usuario 3

Yo como agente de Seguridad y Salud en el trabajo deseo visualizar el total de heridos por categoría a lo largo de los años.

DEFINICIÓN DE TERMINADO.- Crearemos una sección en HTML donde se podrá visualizar una pequeña tabla de dos columnas con los datos solicitado y la funcionalidad correspondiente .


#### Historia de Usuario 4

Yo como gerente de Seguridad de la alcaldía deseo ordenar por año (del más reciente al más antiguo y viceversa) los valores de la tabla que muestren los años y valores de una categoría específica.

DEFINICIÓN DE TERMINADO.- Crearemos una función de ordenado , aplicandola posterormente en la tabla que muestra las categorías en específico.


#### Historia de Usuario 5

Yo como gerente de Seguridad de la alcaldia deseo visualizar la cantidad total de heridos de una categoría a lo largo de los años para saber cual fue el tipo de accidentes que tuvo mayor número de heridos.

DEFINICIÓN DE TERMINADO.- Al hacer clic en el botón de cualquier categoría, adicional a la tabla que muestre esos datos se añadirá una pequeña tabla con dos columnas que arroje el total de accidentes por categoría desde 1960 hasta 2016 , sin tomar el dato de "Register not found".

### Ideación:

![Ideación](https://i.ibb.co/njKQZHk/68747470733a2f2f6c68342e676f6f676c6575736572636f6e74656e742e636f6d2f4b55444332657a6f79365362626f64494d756e6a446a6c467664716a3831564f5836583877514266444173794f5a467934576e6a48424a5a704c6e583663464d305f6942543431.png)

En este punto corroboramos que información sería útil para los usuarios ,ya teniendo la data escogida.
El usuario requirió:

* Acceder de manera segura a la web.
* Contar con una descripción por cada tipo de accidente.
* Poder acceder a la data previamente clasificada.
* Acceder a una galería con noticias relevantes.
* Poder ver como fluctúa la data deacuerdo a los años.

### Prototipado:

![Prototipado](https://i.ibb.co/wwFj4JD/68747470733a2f2f6c68342e676f6f676c6575736572636f6e74656e742e636f6d2f4f30766134675364496e576134692d32674c674970615442436141656f4665716a7463314f715674534a707671566d6d34766e4334356a7a594e6b6653374a456e524a5930354a.png)

En esta etapa elaboramos un prototipo que nos permita probar nuestras ideas con usuarios para saber si estamos resolviendo sus necesidades con nuestro producto.

*Prototipo de baja fidelidad* : fue realizado en sketch, considerando solo dos vistas : logIn(pantalla de inicio)y Home(pantalla donde se muestra la data)
![propotipo de baja](https://user-images.githubusercontent.com/47749039/54940932-b90d7180-4ef9-11e9-9f88-a218acc558a6.png)

*Prototipo de alta fidelidad* : se adjuntan el link
![propotipo de alta](https://user-images.githubusercontent.com/47749039/54941652-62a13280-4efb-11e9-8ca2-7a7eb8602948.png)

LINK : https://app.zeplin.io/project/5c9a8f94e249f005dc65d42e?seid=5ca1b1147af93805d0d8dcef

### User Testing:

![User Testing](https://i.ibb.co/Mctnq33/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f516c6c4b34714236755a74673659464d7269514b6770674c524f36676e4e623148383865425a5f372d475576576c655a3147665872453842674664457951526770324f4d356247.png)

1) El primer user testing se realizó mostrando un Prototipo de baja fidelidad al usuario. Hubo comprensión de primer momento al recorrer el flujo , pero el feedbback que tenían los usuarios en común era que deseaban ver la data de manera detallada , es decir por categorías en lugar de ser mostrada en su totalidad en una sola vista.
Ante ello se adicionó 5 botones que permitan filtrar la data por tipo de accidente y que sea mostrada.

2) En el segundo user testing surgió la observación respecto al LogIn. Como el enfoque era el de realizar una web de consulta para acceder a data de una manera segura, se planteó el implementar el registro primero antes de acceder a la información. Ya que el proyecto debía ser realizada en vanilla Javascript , el registro cumple la funcionalidad de ingreso y captura de nombre .

3) Como parte del CodeReview , surgió la sugerencia de como estabamos presentando el dato "null" de los indicadores y como este se visualizaba la web. Al principio se convirtió el valor "null" a cero  , estando equivocada la interpretación.
Que el valor de un indicador en un año sea "null" no indica que no hayan existido accidentes , si no más bien que no hubo registros ; por ello en la tabla cambiamos el valor de "0" a "Register not found"( registro no encontrado).


## Diagrama de Flujo

Se realizó el digrama de flujo del proyecto en la plataforma web Lucidchart.

![Diagrama de Flujo](https://i.ibb.co/GMMp2Vd/Diagrama-SIPOC.png)
