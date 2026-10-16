# Elegir nuestros marcos de tecnología de la información

* Estado: solicitud de comentarios
* Fecha: 2026-10-14
* Quien decide: director de Tecnología de la Información y director de Tecnología (por confirmar)
* Responsable: responsable de Operaciones de Tecnología

Resumen: trabajo en curso. Este es un punto de partida para un grupo tecnológico al que se ha pedido adoptar varios marcos (por ejemplo, ITIL, el Manifiesto Ágil, la Programación Extrema y Seis Sigma) y que debe decidir cuáles usar, para qué trabajo y en qué orden. Muestra cómo un equipo puede enmarcar la cuestión, debatir las opciones y reunir información. No registra ninguna decisión.

## Problema

Distintos líderes han pedido al grupo tecnológico que adopte ITIL para la gestión de servicios, el Manifiesto Ágil para la entrega, la Programación Extrema para la ingeniería y Seis Sigma para la calidad, a veces en los mismos equipos y en el mismo período. Cada petición es razonable por separado, pero juntas se solapan, usan vocabularios distintos y piden a la gente que cambie más rápido de lo que puede asimilar.

Las preguntas que hay que responder:

* ¿Qué problema resuelve cada marco y para qué tipo de trabajo?
* ¿Dónde se solapan o chocan y cuál debe prevalecer?
* ¿En qué orden introducirlos y cuántos cambios puede absorber un equipo a la vez?
* ¿Cómo sabremos si la combinación ayuda?

## Supuestos

Cada supuesto es algo que hay que comprobar.

* **Cada marco funciona mejor en el tipo de trabajo para el que fue diseñado.** Comprobación: leer las fuentes y hablar con personas que hayan usado cada marco.
* **Los equipos pueden absorber un marco nuevo a la vez**, no varios. Comprobación: preguntar a los equipos qué cambios ya están en marcha y qué capacidad tienen.
* **Los patrocinadores aceptarán esperar** si conocen el orden y la razón. Comprobación: hablar con ellos pronto.
* **Una frontera escrita entre marcos reducirá los conflictos.** Comprobación: redactar una y probarla con ejemplos reales de conflicto.

## Restricciones

* El grupo tiene una capacidad de cambio limitada en cada período.
* Los marcos usan vocabularios distintos, por lo que los términos comunes, como incidente, cambio, versión y defecto, deben definirse una sola vez.
* La adopción completa de varios marcos podría llevar años.
* Desconocido, por confirmar: las prácticas actuales, las expectativas contractuales o de auditoría y los marcos ya en uso.

## Opciones consideradas

Para cada opción, estimar el valor, los costos, el calendario y las capacidades necesarias, y anotar qué evidencia haría cambiar de opinión al equipo.

* **Adoptar en todas partes cada marco solicitado.**
  * Valor: cada patrocinador obtiene lo que pidió.
  * Riesgos: sobrecarga; orientaciones contradictorias (por ejemplo, aprobaciones de cambios fijas frente a entrega continua); imposible saber qué cambio causó qué resultado.
* **Adoptar un solo marco como estándar único.**
  * Valor: sencillo de explicar.
  * Riesgos: ningún marco cubre igual de bien la operación de servicios, la entrega de producto, la práctica de ingeniería y la calidad.
* **Asignar cada marco al tipo de trabajo al que conviene e introducirlos por fases, uno a uno.** Por ejemplo, las prácticas de ITIL para operar servicios en producción, los valores del Manifiesto Ágil para la forma en que los equipos de entrega planifican y trabajan, las prácticas de la Programación Extrema para construir software y Seis Sigma para procesos donde los defectos pueden medirse.
  * Valor: más claro para los equipos; más fácil de aprender.
  * Factores de costo: un documento de frontera escrito; coordinación; un programa largo.
* **Adoptar una norma o gobernanza paraguas** como ISO/IEC 38500 (gobernanza de las TI) o ISO/IEC 20000-1, y dejar que los equipos elijan métodos dentro de ella.
* **No adoptar ninguno en bloque**; elegir prácticas que atiendan los problemas medidos del grupo.

## Argumento

Puntos de debate que el equipo debería esperar:

* **¿Marcos o resultados?** El objetivo son mejores resultados para los clientes, no adoptar marcos. ¿Qué resultados importan más?
* **Conflictos.** Cuando las orientaciones chocan, ¿quién decide?
* **Orden.** ¿Cuál primero: el que más presión recibe de sus patrocinadores o el que apoya a los demás?
* **Vocabulario.** Las palabras comunes reducen la fricción, pero una falsa equivalencia oculta diferencias reales.

Cómo podría el equipo evaluar los costos y las compensaciones:

1. Enumerar primero los problemas y los resultados deseados, con medidas (por ejemplo, las de la investigación de DORA sobre el rendimiento de la entrega de software, además de medidas de servicio y de calidad).
2. Para cada marco, estimar los costos en los términos propios de la organización: capacitación, cambio de procesos, herramientas, tiempo perdido y soporte continuo. Dar rangos.
3. Estimar la capacidad de cambio de cada equipo y secuenciar para que ninguno cargue con más de lo que puede absorber.
4. Comparar las opciones en escenarios optimista, probable y pesimista; elegir la que sea más fácil de ajustar si la evidencia cambia.
5. Revisar tras los dos primeros marcos y reconsiderar el orden si la evidencia sugiere uno mejor.

## Decisión

**Aún no se ha decidido.** Este es un punto de partida. Un equipo que lo use debe sustituir esta sección por su propia decisión.

Forma sugerida de llegar a una decisión:

* Confirmar quién decide y a quién se debe consultar (incluidos los patrocinadores).
* Acordar primero los criterios y las ponderaciones.
* Reunir la evidencia indicada arriba y anotar lo que se encontró.
* Compartir para comentarios; luego decidir y actualizar el Estado.

## Implicaciones

Si el equipo decide asignar los marcos por tipo de trabajo e introducirlos por fases, necesitaría:

* Designar a un responsable del documento de frontera y una forma de resolver conflictos, con escalamiento.
* Iniciar solo un marco a la vez en un equipo y comenzar el siguiente únicamente cuando el anterior haya cumplido sus propias medidas de salida.
* Decir ya a los patrocinadores de los marcos posteriores el orden y la razón.
* Definir una sola vez los términos comunes, en el documento de frontera.
* Revisar todo el enfoque tras los dos primeros marcos.

## Decisiones relacionadas

* [Introducir el Manifiesto Ágil por fases](../manifiesto-agil/), [Introducir ITIL 5 por fases](../itil-5/), [Introducir Programación Extrema por fases](../programacion-extrema/) e [Introducir Seis Sigma por fases](../seis-sigma/): las decisiones sobre cada marco.
* [Introducir por fases un marco de negocio](../marcos-de-negocio/): el patrón general de fases.
* Decisiones aún no tomadas: herramientas; el orden de los marcos posteriores.

## Notas relacionadas

* Puntos abiertos: enumerar las prácticas actuales; preguntar a los patrocinadores qué resultados quieren; redactar un primer documento de frontera.
* Más información:
  * Wikipedia: [ITIL](https://en.wikipedia.org/wiki/ITIL), [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development), [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Six Sigma](https://en.wikipedia.org/wiki/Six_Sigma), [COBIT](https://en.wikipedia.org/wiki/COBIT), [Corporate governance of information technology](https://en.wikipedia.org/wiki/Corporate_governance_of_information_technology), [DevOps](https://en.wikipedia.org/wiki/DevOps)
  * ISO: [ISO/IEC 38500:2024, Governance of IT for the organization](https://www.iso.org/standard/81684.html), [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO 13053-1:2011, Six Sigma: DMAIC methodology](https://www.iso.org/standard/52901.html)
  * Vídeo: [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex); [Agile Product Ownership in a Nutshell](https://www.youtube.com/watch?v=502ILHjX9EE) (Henrik Kniberg)
  * Lectura: [DORA](https://dora.dev/); [Manifesto for Agile Software Development](https://agilemanifesto.org/)
