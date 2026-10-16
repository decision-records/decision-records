# Introducir Programación Extrema por fases

* Estado: aceptado
* Fecha: 2025-10-06
* Quien decide: responsable de Ingeniería
* Responsable: gerente de Ingeniería

## Contexto

Nuestros equipos de producto entregan funciones en lotes grandes, y los defectos hallados tarde son caros: una de cada cinco versiones necesita una corrección urgente. Queremos adoptar prácticas de la Programación Extrema (XP), como el desarrollo guiado por pruebas, la programación en parejas, la integración continua, las versiones pequeñas y la propiedad colectiva del código. Estas prácticas se apoyan unas en otras, pero también cambian la forma en que los ingenieros trabajan día a día, y adoptarlas todas a la vez probablemente encuentre resistencia y se haga de forma superficial.

## Opciones consideradas

* **Adoptar todas las prácticas a la vez en todos los equipos.** Las prácticas se refuerzan mutuamente, pero el cambio es grande y los equipos sin las habilidades de base probablemente las abandonarían en semanas.
* **Introducir las prácticas en un orden elegido, equipo por equipo.** Empezar con la integración continua y las pruebas automatizadas (los cimientos), luego las versiones pequeñas y la programación en parejas, y después el desarrollo guiado por pruebas, con los equipos adoptando las prácticas a su propio ritmo. Más lento, pero cada práctica tiene tiempo de asentarse y las primeras hacen posibles las posteriores.
* **Adoptar solo las prácticas fáciles.** Poco esfuerzo, pero se omitirían las prácticas que dan el mayor beneficio, como las pruebas automatizadas, y el beneficio sería pequeño.

## Decisión

Introduciremos las prácticas de XP por fases y en orden: primero la integración continua y las pruebas automatizadas, luego las versiones pequeñas y la programación en parejas, y después el desarrollo guiado por pruebas. Un equipo comienza en el primer trimestre, y cada equipo siguiente se incorpora cuando el anterior haya mantenido su canal de publicación en verde durante un mes.

## Consecuencias

* El gerente de Ingeniería acompañará al primer equipo, publicará lo que aprenda y hará un seguimiento de la proporción de versiones que necesitan una corrección urgente.
* Nuestro objetivo es reducir esa proporción de una de cada cinco a menos de una de cada veinte en un año.
* Los equipos tendrán tiempo para la programación en parejas y para escribir pruebas incluido en su planificación, y no se espera que entreguen el mismo número de funciones en el primer trimestre.
* Los ingenieros conservan la elección de cómo hacen parejas y qué herramientas usan; las prácticas fijan el resultado, no cada detalle de cómo se alcanza.
* Si una práctica no ayuda tras dos trimestres, el equipo puede proponer abandonarla y registraremos el motivo.

## Relacionado

* Véase [Introducir el Manifiesto Ágil por fases](../manifiesto-agil/) para la decisión más amplia sobre los valores que estas prácticas respaldan.
