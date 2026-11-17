# Programación Extrema

* Estado: solicitud de comentarios
* Fecha: 2025-10-06
* Quien decide: responsable de Ingeniería (por confirmar)
* Responsable: gerente de Ingeniería

Resumen: trabajo en curso. Este es un punto de partida para un equipo de ingeniería que está considerando cómo introducir prácticas de la Programación Extrema (XP), como el desarrollo guiado por pruebas, la programación en parejas, la integración continua y las versiones pequeñas. Muestra cómo un equipo puede enmarcar la cuestión, debatir las opciones y reunir información. No registra ninguna decisión.

## Problema

Los equipos de producto entregan funcionalidades en lotes grandes, y los defectos hallados tarde son caros: una parte notable de las versiones necesita una corrección urgente tras la entrega. Los líderes de ingeniería se interesan por prácticas de la Programación Extrema, un método ágil de desarrollo de software que hace hincapié en prácticas técnicas como el desarrollo guiado por pruebas, la programación en parejas, la integración continua, las versiones pequeñas, la refactorización y la propiedad colectiva del código.

Estas prácticas se apoyan entre sí, pero también cambian la forma en que los ingenieros trabajan cada día. Adoptarlas todas de una vez probablemente encuentre resistencia y se haga de forma superficial. Las preguntas que hay que responder:

* ¿Qué problemas queremos resolver (defectos tardíos, retroalimentación lenta, conocimiento en pocas manos) y qué prácticas los abordan?
* ¿En qué orden deben introducirse las prácticas y quién empieza?
* ¿Qué mediremos para saber que las prácticas ayudan?
* ¿Cuál es el equilibrio adecuado entre un estándar común y la elección de cada equipo?

## Supuestos

Cada supuesto es algo que hay que comprobar.

* **Los defectos tardíos se deben sobre todo a la falta de retroalimentación automatizada rápida.** Comprobación: rastrear una muestra de correcciones urgentes hasta el punto donde podría haberse detectado el defecto.
* **Las prácticas básicas (integración continua y pruebas automatizadas) hacen posibles las demás.** Comprobación: preguntar a equipos que las han probado qué prácticas dependían de cuáles.
* **Los ingenieros adoptarán prácticas que vean funcionar en un equipo cercano.** Comprobación: preguntarles qué los convencería y qué los preocupa.
* **La tasa de correcciones urgentes tras la entrega es una buena medida del avance.** Comprobación: acordar cómo se contará y comprobar que otras medidas (plazo de los cambios, tasa de fallo de los cambios) no cuenten otra historia.

## Restricciones

* Los equipos siguen teniendo que entregar funcionalidades mientras aprenden, así que la producción del primer período probablemente será menor.
* Los ingenieros deben conservar la elección de cómo hacer parejas y qué herramientas usar.
* La infraestructura actual de compilación y pruebas puede necesitar trabajo antes de que la integración continua sea útil.
* Desconocido, por confirmar: qué parte del código es comprobable hoy y si restricciones regulatorias o de clientes afectan la frecuencia de las versiones.

## Opciones consideradas

Para cada opción, estimar el valor, los costos, el calendario y las capacidades necesarias, y anotar qué evidencia haría cambiar de opinión al equipo.

* **Adoptar todas las prácticas a la vez en todos los equipos.**
  * Valor: las prácticas se refuerzan entre sí.
  * Factores de costo: capacitación; entrega más lenta durante el aprendizaje; trabajo de herramientas en todos los equipos a la vez.
  * Riesgos: cambio grande; los equipos sin las habilidades de base pueden abandonar las prácticas en semanas.
* **Introducir las prácticas en un orden elegido, equipo por equipo.** Por ejemplo, primero integración continua y pruebas automatizadas (los cimientos), luego versiones pequeñas y programación en parejas, y después desarrollo guiado por pruebas.
  * Valor: cada práctica tiene tiempo para asentarse; las primeras hacen posibles las siguientes; la experiencia del primer equipo guía a los demás.
  * Factores de costo: coaching; tiempo para parejas y para escribir pruebas incluido en los planes; trabajo de infraestructura en la cadena de entrega.
  * Forma del calendario: secuencial, con el siguiente equipo uniéndose cuando el anterior ha mantenido sana su cadena de entrega durante un período establecido.
  * Capacidades necesarias: un coach; una cadena de compilación fiable; apoyo de los gerentes ante la caída de producción.
  * Riesgos: lento; prácticas adoptadas de forma desigual.
* **Adoptar solo las prácticas fáciles.** Poco esfuerzo, pero puede dejar fuera las de mayor beneficio, como las pruebas automatizadas.
* **Adoptar otro conjunto de prácticas** (por ejemplo, las descritas por la investigación de DORA sobre el rendimiento de la entrega de software, como la entrega continua, el desarrollo basado en tronco y la arquitectura débilmente acoplada) y tratar XP como una fuente entre varias.
* **No hacer nada nuevo** y abordar directamente las causas concretas de los defectos. Una referencia real.

## Argumento

Puntos de debate que el equipo debería esperar:

* **Programación en parejas.** Una práctica que muchos ingenieros miran con recelo. ¿Dónde ayuda (intercambio de conocimiento, trabajo complejo) y dónde no?
* **¿Estandarizar o dejar elegir a los equipos?** ¿Resultados compartidos (menos correcciones urgentes, retroalimentación más rápida) con libertad de los equipos en el cómo, o un estándar más estricto?
* **Calidad frente a rapidez a corto plazo.** ¿Están dispuestos los líderes a aceptar menor producción mientras los equipos aprenden?
* **¿TDD, medio o fin?** Algunas prácticas (como el desarrollo guiado por pruebas) se debaten incluso entre profesionales con experiencia. El equipo debe decidir qué problema resuelve la práctica antes de adoptarla.

Cómo podría el equipo evaluar los costos y las compensaciones:

1. Valorar el enfoque actual: esfuerzo dedicado a correcciones urgentes, retrasos causados por defectos tardíos, impacto en los clientes. Usar rangos en los términos propios de la organización.
2. Valorar el programa: coaching, capacitación, tiempo para parejas y pruebas, infraestructura de la cadena y la caída temporal de la entrega.
3. Elegir primero las medidas: proporción de versiones que necesitan una corrección urgente, plazo de los cambios, frecuencia de despliegue, tiempo de restablecimiento del servicio (las medidas DORA) y opiniones de los ingenieros.
4. Comparar las opciones en escenarios optimista, probable y pesimista; preguntarse cómo cambia la respuesta si el beneficio llega más tarde o menor de lo esperado.
5. Usar una matriz ponderada y un pre-mortem.

## Decisión

**Aún no se ha decidido.** Este es un punto de partida. Un equipo que lo use debe sustituir esta sección por su propia decisión.

Forma sugerida de llegar a una decisión:

* Confirmar quién decide y para cuándo.
* Acordar primero los criterios y las ponderaciones.
* Reunir la evidencia indicada arriba y anotar lo que se encontró.
* Compartir para comentarios; luego decidir y actualizar el Estado.

## Implicaciones

Si el equipo elige un enfoque por fases, necesitaría:

* Designar a un coach y pedir al primer equipo que informe con honestidad de lo que ayudó y lo que no.
* Prever en los planes de entrega el tiempo para parejas y para escribir pruebas.
* Invertir en la cadena de compilación y pruebas antes de depender de ella.
* Acordar una regla de parada: si una práctica no ayuda tras un período establecido, el equipo puede proponer abandonarla y anotar por qué.
* Dejar a los ingenieros la elección de cómo hacer parejas y qué herramientas usar; las prácticas fijan el resultado, no cada detalle de cómo se logra.

## Decisiones relacionadas

* [El Manifiesto Ágil](../manifiesto-agil/): la decisión más amplia sobre los valores que estas prácticas apoyan.
* [Elegir nuestros marcos de tecnología de la información](../marcos-de-tecnologia-de-la-informacion/): cómo encaja XP con otros marcos.
* Decisiones aún no tomadas: inversión en la cadena y las herramientas; modelo de propiedad del código.

## Notas relacionadas

* Puntos abiertos: tomar una muestra de correcciones urgentes recientes; preguntar a los ingenieros por sus reservas sobre las parejas y las pruebas; comprobar qué puede hacer hoy la cadena de compilación.
* Más información:
  * Wikipedia: [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development), [Pair programming](https://en.wikipedia.org/wiki/Pair_programming), [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring), [Technical debt](https://en.wikipedia.org/wiki/Technical_debt)
  * ISO: [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html)
  * Vídeo: [What is Extreme Programming (XP)?](https://www.youtube.com/watch?v=5VpcuwW1mQ0) (Agilemania)
  * Lectura: [Extreme Programming: A gentle introduction](http://www.extremeprogramming.org/); Martin Fowler, [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html); [DORA](https://dora.dev/); *Extreme Programming Explained* (Kent Beck)
