# Introducir ITIL 5 por fases

* Estado: solicitud de comentarios
* Fecha: 2026-09-30
* Quien decide: director de Tecnología de la Información (por confirmar)
* Responsable: responsable de Gestión de Servicios de TI

Resumen: trabajo en curso. Este es un punto de partida para una organización de TI que está considerando cómo, y en qué orden, adoptar ITIL 5 para la gestión de servicios de TI. Muestra cómo un equipo puede enmarcar la cuestión, debatir las opciones y reunir información. No registra ninguna decisión ni repite lo que dice ITIL 5.

## Problema

La mesa de servicios de TI y los equipos que la rodean han crecido sin una forma de trabajo común: los incidentes, las solicitudes y los cambios se gestionan de manera distinta según el equipo, y los incidentes recurrentes rara vez se analizan. La dirección se interesa por basar la gestión de servicios de TI en ITIL, la guía ampliamente usada para ese fin, en su versión más reciente (ITIL 5), de modo que los equipos internos, los proveedores y los auditores compartan prácticas y vocabulario.

ITIL 5 es nueva y se publica por etapas, así que el equipo debe empezar por establecer qué está realmente disponible y estable. Las preguntas que hay que responder:

* ¿Qué problema intentamos resolver, y es ITIL 5 la forma adecuada de resolverlo, o le conviene más a la organización adoptar prácticas selectas, seguir con la versión que ya conoce o alinearse con la norma internacional ISO/IEC 20000-1?
* Si el equipo sigue adelante, ¿en qué orden y a qué ritmo?
* ¿Qué necesitamos poder hacer (capacidades, herramientas, datos) antes de cada paso?

## Supuestos

Cada supuesto es algo que hay que comprobar.

* **El dolor está sobre todo en unas pocas prácticas** (por ejemplo, la gestión de incidentes, solicitudes y cambios). Comprobación: revisar una muestra de incidentes y cambios recientes y ver dónde se pierden tiempo y calidad.
* **Las prácticas pueden adoptarse por separado** y no solo como paquete. Comprobación: leer la guía del marco y hablar con organizaciones que lo adoptaron por etapas.
* **La mesa de servicios puede capacitarse mientras presta el servicio.** Comprobación: estimar el tiempo que cada práctica exige al personal frente al tiempo del que dispone.
* **Los proveedores y los auditores valorarán un vocabulario común.** Comprobación: preguntar a los principales qué usan y qué esperan hoy.
* **Si el material de ITIL 5 está lo bastante maduro para adoptarlo ahora.** Comprobación: ver qué se ha publicado y certificado hasta ahora y qué falta.

## Restricciones

* El servicio debe seguir funcionando durante cualquier cambio; la mesa de servicios no puede detenerse para capacitarse.
* Los cambios de herramientas deben limitarse a lo que un paso requiera; un cambio de plataforma grande es una decisión aparte.
* Las formas de trabajo antiguas y nuevas convivirán un tiempo. El equipo debe decir cuánto tiempo es aceptable.
* Desconocido, por confirmar: los modelos de licencia y de costo de capacitación del marco, los términos de contratos con proveedores que remitan a un marco determinado y cualquier expectativa de auditoría o regulatoria.

## Opciones consideradas

Para cada opción, el equipo debe estimar el valor, los costos, el calendario y las capacidades necesarias, y anotar qué evidencia le haría cambiar de opinión.

* **Adoptarlo todo a la vez en todos los equipos.**
  * Valor: una forma de trabajo común lo antes posible.
  * Factores de costo: capacitación de todo el personal; rediseño de todos los procesos; cambios de herramientas; capacidad perdida mientras los equipos se capacitan; costo de revertir un mal comienzo.
  * Forma del calendario: plan corto, recuperación larga si sale mal.
  * Capacidades necesarias: liderazgo sólido del cambio y capacidad libre suficiente para absorberlo.
* **Introducirlo por práctica**, empezando donde el dolor es mayor y donde hay más usuarios afectados (con frecuencia la gestión de incidentes y solicitudes), luego los cambios, luego el análisis de problemas y la mejora continua, con medidas propias en cada fase.
  * Valor: cada fase enseña al equipo qué cambiar en la siguiente; logros tempranos visibles para los usuarios.
  * Factores de costo: un programa global más largo; prácticas antiguas y nuevas conviviendo; capacitaciones repetidas; mantenimiento de las medidas de salida.
  * Forma del calendario: una secuencia de fases, cada una lo bastante larga para ver un cambio medible antes de que empiece la siguiente.
  * Capacidades necesarias: datos de servicio fiables (tiempo de resolución, resolución al primer contacto, proporción de cambios que causan incidentes) y un responsable para cada práctica.
* **Introducirlo por equipo**: un equipo adopta todas las prácticas primero como piloto y luego siguen los demás.
  * Valor: un ejemplo completo y funcional desde pronto.
  * Factores de costo: un mismo servicio queda dividido entre dos formas de trabajo mientras dura el piloto; los traspasos entre el equipo piloto y los demás se vuelven más difíciles.
  * Riesgos: confunde a usuarios y proveedores; el contexto del equipo piloto puede no ser típico.
* **Alinearse con ISO/IEC 20000-1 en lugar de ITIL, o junto con él.** Una norma de requisitos certificable para un sistema de gestión de servicios, que algunas organizaciones prefieren para auditoría y garantía frente a proveedores.
  * Valor: reconocimiento externo; requisitos claros.
  * Factores de costo: esfuerzo de evaluación y certificación; documentación.
  * Riesgos: puede alentar una mentalidad de cumplimiento en vez de mejora.
* **No cambiar todavía de marco** y corregir directamente los problemas concretos. Una referencia real que conviene presupuestar con honestidad.

## Argumento

Puntos de debate que el equipo debería esperar:

* **¿Marco o problema?** ¿La meta es adoptar un marco, o reducir los incidentes repetidos y los cambios lentos? Elegir la opción que se juzgue por lo segundo.
* **Ritmo frente a capacidad.** Un programa más rápido da beneficios antes, pero ocupa a las mismas personas que mantienen el servicio.
* **Riesgo de versión.** Adoptar algo recién publicado trae menos ejemplos y menos material de formación; quedarse con una versión conocida es más seguro pero puede envejecer.
* **Vocabulario frente a práctica.** Usar las mismas palabras que los proveedores es más fácil que cambiar la forma de trabajar. ¿Qué importa más?

Cómo podría el equipo evaluar los costos y las compensaciones:

1. Construir un modelo de costos en los términos propios de la organización. Únicos: capacitación, diseño de procesos, cambio de herramientas, consultoría, reemplazos. Recurrentes: licencias, tiempo de los responsables de proceso, auditorías. Ocultos: menor rendimiento durante la transición, cambios en contratos de proveedores. Dar rangos, no cifras únicas.
2. Elegir las medidas de beneficio antes de empezar, para no definir el éxito después: tiempo de resolución, resolución al primer contacto, proporción de cambios que causan incidentes, tasa de incidentes repetidos, satisfacción de los usuarios, hallazgos de auditoría.
3. Estimar el retorno en escenarios optimista, probable y pesimista, y probar cuánto cambia la respuesta según los supuestos de los que el equipo está menos seguro.
4. Puntuar las opciones con una matriz ponderada (valor, costo, rapidez, riesgo, encaje con los proveedores, capacidad necesaria).
5. Preguntar qué hace cada opción con la reversibilidad: ¿cuáles pueden detenerse tras una fase sin desperdiciar el trabajo?

## Decisión

**Aún no se ha decidido.** Este es un punto de partida. Un equipo que lo use debe sustituir esta sección por su propia decisión.

Forma sugerida de llegar a una decisión:

* Confirmar quién decide y para cuándo.
* Fijar primero los criterios y sus ponderaciones.
* Reunir la evidencia indicada arriba, incluido lo que hay disponible hoy de ITIL 5.
* Publicar el borrador para comentarios con una fecha límite; luego decidir y actualizar el Estado.

## Implicaciones

Si el equipo elige un enfoque por fases, necesitaría:

* Publicar las medidas de salida de cada fase e informar regularmente al patrocinador.
* Capacitar al personal en cada práctica justo antes de su fase.
* Dejar que las prácticas aún no incluidas sigan funcionando como hoy, y decirlo.
* Aplazar cualquier compra grande de plataforma de gestión de servicios hasta contar con la evidencia de las primeras fases.
* Decidir qué ocurre cuando una fase no cumple sus medidas: repetir, ajustar o detenerse.

## Decisiones relacionadas

* [Introducir por fases un marco de negocio](../marcos-de-negocio/): el mismo patrón de fases aplicado a otro marco.
* [Elegir nuestros marcos de tecnología de la información](../marcos-de-tecnologia-de-la-informacion/): cómo encaja ITIL con otros marcos que considera el grupo.
* Decisiones aún no tomadas: herramientas; cambios en contratos con proveedores; certificación o no.

## Notas relacionadas

* Puntos abiertos: confirmar qué existe hoy de ITIL 5; enumerar las prácticas que hoy se hacen bien y mal; preguntar a los principales proveedores y auditores qué esperan.
* Más información:
  * Wikipedia: [ITIL](https://en.wikipedia.org/wiki/ITIL), [IT service management](https://en.wikipedia.org/wiki/IT_service_management), [Incident management](https://en.wikipedia.org/wiki/Incident_management), [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process), [Change management](https://en.wikipedia.org/wiki/Change_management)
  * ISO: [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC 38500:2024, Governance of IT for the organization](https://www.iso.org/standard/81684.html)
  * Vídeo: [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex)
  * Lectura: [PeopleCert](https://www.peoplecert.org/); [DORA](https://dora.dev/)
