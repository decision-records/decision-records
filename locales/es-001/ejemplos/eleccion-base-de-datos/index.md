# Elegir la base de datos principal

* Estado: aceptado
* Fecha: 2026-03-22
* Quien decide: director de Tecnología
* Responsable: responsable de Ingeniería de Plataforma

## Contexto

Nuestra base de datos actual se aproxima a sus límites de escalabilidad con el crecimiento previsto a 12 meses, y el equipo de ingeniería necesita elegir su sustituta antes del próximo gran lanzamiento de producto. Se incluye aquí como el único ejemplo tecnológico de este conjunto, para mostrar que las decisiones de arquitectura siguen exactamente el mismo patrón que los ejemplos empresariales del resto de esta colección: la disciplina es general, no específica de un ámbito.

## Opciones consideradas

* **Escalar verticalmente la base de datos actual.** El menor riesgo de migración y no requiere cambios en las aplicaciones, pero ingeniería estima que esto solo da de 6 a 9 meses antes de volver a chocar con los mismos límites, dado el crecimiento previsto.
* **Migrar a la base de datos A (gestionada, escalable horizontalmente).** Resuelve el techo de escalabilidad con un sólido soporte del proveedor y una vía de migración bien documentada; añade un coste recurrente de servicio gestionado.
* **Migrar a la base de datos B (autoalojada, escalable horizontalmente).** Menor coste recurrente que la opción gestionada, pero exige desarrollar internamente una experiencia operativa de la que el equipo no dispone actualmente, y las comprobaciones de referencias con empresas homólogas señalaron una carga operativa superior a la esperada.

## Decisión

Migraremos a la base de datos A, la opción gestionada y escalable horizontalmente, priorizando la reducción del riesgo de migración y el soporte del proveedor sobre el menor coste recurrente del autoalojamiento.

## Consecuencias

* Ingeniería de Plataforma planificará una migración por fases con un periodo de ejecución en paralelo antes del traspaso completo, para no perturbar el próximo lanzamiento de producto.
* El coste recurrente de infraestructura aumenta; Finanzas lo ha aprobado como parte del presupuesto de inversión en crecimiento.
* Renunciamos al menor coste de la opción autoalojada a cambio de evitar el riesgo operativo de construir una experiencia interna que ahora no tenemos.
* Será necesaria una decisión de arquitectura posterior sobre la estrategia de agrupación de conexiones y de réplicas de lectura una vez completada la migración inicial.

## Relacionado

* Esta decisión responde a la misma proyección de crecimiento a 12 meses a la que se hace referencia en la planificación de capacidad del ejercicio en curso; no existe un registro de decisiones previo sobre bases de datos que sustituir.
