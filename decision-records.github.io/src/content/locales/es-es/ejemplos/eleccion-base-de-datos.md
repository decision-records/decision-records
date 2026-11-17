# Elegir la base de datos principal

* Estado: solicitud de comentarios
* Fecha: 2026-03-22
* Quien decide: director de Tecnología (por confirmar)
* Responsable: responsable de Ingeniería de Plataforma

Resumen: trabajo en curso. Este es un punto de partida para un equipo que está eligiendo la base de datos principal de un producto en crecimiento. Es el único ejemplo tecnológico de este conjunto y muestra que las decisiones de arquitectura siguen el mismo patrón que las decisiones de negocio en el resto de esta colección. Muestra cómo un equipo puede enmarcar la cuestión, debatir las opciones y reunir información. No registra ninguna decisión.

## Problema

La base de datos actual se acerca a sus límites de escalado, y el equipo de ingeniería espera alcanzarlos en poco tiempo. Hay que elegir un reemplazo, u otra forma de escalar, antes del próximo lanzamiento importante del producto.

Las preguntas que hay que responder:

* ¿Cuáles son los límites reales hoy (lecturas, escrituras, almacenamiento, latencia, operación) y a qué velocidad nos acercamos a ellos?
* ¿Qué cualidades importan más (consistencia, disponibilidad, latencia, costo, operabilidad, cumplimiento) y en qué orden?
* ¿Escalamos lo que tenemos, pasamos a un servicio administrado u operamos algo por nuestra cuenta?
* ¿Cómo migraríamos y cómo saldríamos de nuevo si tuviéramos que hacerlo?

## Supuestos

Cada supuesto es algo que hay que comprobar.

* **La proyección de crecimiento es realista.** Comprobación: compararla con el crecimiento pasado y con los planes de ventas y de producto; considerar un caso alto y uno bajo.
* **La base de datos actual puede escalar más, a cierto precio.** Comprobación: preguntar al proveedor y al equipo cuánto margen queda y cuánto cuesta.
* **Nuestra carga de trabajo encaja en un diseño escalable horizontalmente.** Comprobación: estudiar consultas y transacciones; buscar operaciones que requieran consistencia fuerte entre registros.
* **El equipo puede operar la opción elegida.** Comprobación: enumerar las habilidades requeridas y quién las tiene.

## Restricciones

* El cambio debe estar listo antes del lanzamiento, con una migración por fases que no lo perturbe.
* El costo recurrente debe caber en el presupuesto aprobado.
* Las obligaciones de protección de datos y de seguridad se aplican a cualquier elección.
* Desconocido, por confirmar: volumen de datos, requisitos de conservación, requisitos regionales, integración con otros sistemas y compromisos con proveedores.

## Opciones consideradas

Para cada opción, estimar el valor, los costos, el calendario y las capacidades necesarias, y anotar qué evidencia haría cambiar de opinión al equipo.

* **Escalar verticalmente la base de datos actual** (una máquina o un plan mayor).
  * Valor: menor riesgo de migración; sin cambios en la aplicación.
  * Riesgos: compra una cantidad limitada de tiempo; el costo sube con fuerza.
* **Pasar a un servicio de base de datos administrado y escalable horizontalmente.**
  * Valor: elimina el escalado y gran parte del trabajo de operación; soporte del proveedor.
  * Factores de costo: cargos recurrentes del servicio; migración; cambios en la aplicación; cargos de salida de los datos.
  * Riesgos: dependencia de las funciones y los precios del proveedor.
* **Pasar a una base de datos autoalojada y escalable horizontalmente.**
  * Valor: costo recurrente potencialmente menor; más control.
  * Factores de costo: creación de habilidades de operación; carga de guardias; herramientas; actualizaciones.
  * Riesgos: la carga de operación puede ser mayor de lo esperado.
* **Rediseñar la capa de datos** (por ejemplo, caché, réplicas de lectura, particionado o separación de cargas) para extender la base actual.
* **Usar bases de datos distintas para cargas distintas** (persistencia políglota), a costa de más sistemas que operar.

## Argumento

Puntos de debate que el equipo debería esperar:

* **Consistencia frente a disponibilidad.** El teorema CAP dice que un sistema distribuido con particiones no puede garantizar ambas. ¿Cuál importa más en cada parte del producto? Muchas cargas toleran una consistencia diferida; algunas no.
* **Administrado frente a autoalojado.** Mayor costo de servicio frente a menor riesgo operativo. ¿Cómo debe valorar el equipo el tiempo de los ingenieros?
* **Dependencia.** ¿Qué se pierde al usar una función propia de un proveedor y qué se gana?
* **Estándares.** ¿Cuánto nos apoyamos en SQL (normalizado en ISO/IEC 9075) frente a un modelo de consulta propio de un proveedor?

Cómo podría el equipo evaluar los costos y las compensaciones:

1. Probar con la propia carga de trabajo: crear una prueba de rendimiento realista y medir cada candidato con carga esperada y máxima, incluidos escenarios de fallo.
2. Estimar el costo total de propiedad en un horizonte establecido, en los términos propios de la organización: cargos de servicio o licencias, alojamiento, migración, tiempo de ingeniería, guardias, capacitación, soporte y salida. Dar rangos.
3. Puntuar a los candidatos en una matriz ponderada de las cualidades que importan (el modelo de calidad del producto ISO/IEC 25010 ofrece un vocabulario para ello) y probar la sensibilidad a las ponderaciones.
4. Estimar cuánto tiempo gana cada opción y cuánto cuesta cuando se vuelva a alcanzar el límite.
5. Planificar la salida: ¿cómo se irían los datos y el código de cada opción?

## Decisión

**Aún no se ha decidido.** Este es un punto de partida. Un equipo que lo use debe sustituir esta sección por su propia decisión.

Forma sugerida de llegar a una decisión:

* Confirmar quién decide y a quién se debe consultar (seguridad, finanzas, producto).
* Acordar primero los criterios y las ponderaciones.
* Reunir la evidencia indicada arriba, incluidos los resultados de la prueba de rendimiento, y anotar lo que se encontró.
* Compartir para comentarios; luego decidir y actualizar el Estado.

## Implicaciones

Si el equipo decide migrar, necesitaría:

* Planificar una migración por fases con un período de funcionamiento en paralelo antes del cambio definitivo.
* Confirmar el presupuesto de los costos recurrentes.
* Prever decisiones posteriores, por ejemplo sobre la agrupación de conexiones y las réplicas de lectura.
* Anotar la ruta de salida prevista.

## Decisiones relacionadas

* [Construir o comprar para un proyecto](../construir-o-comprar/): razonamiento general de construir o comprar.
* [Reducir el riesgo de concentración en un solo proveedor](../dependencia-proveedor-unico/): la dependencia de un solo proveedor.
* Decisiones aún no tomadas: estrategia de caché y réplicas; conservación de datos.

## Notas relacionadas

* Puntos abiertos: reunir métricas de producción; describir las características de la carga; preseleccionar candidatos para una prueba de rendimiento.
* Más información:
  * Wikipedia: [Database](https://en.wikipedia.org/wiki/Database), [Relational database](https://en.wikipedia.org/wiki/Relational_database), [NoSQL](https://en.wikipedia.org/wiki/NoSQL), [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), [ACID](https://en.wikipedia.org/wiki/ACID), [Eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency), [Scalability](https://en.wikipedia.org/wiki/Scalability), [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning)
  * ISO: [ISO/IEC 9075-1:2023, SQL framework](https://www.iso.org/standard/76583.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC 27001:2022, Information security management](https://www.iso.org/standard/27001)
  * Vídeo: [CAP Theorem Explained](https://www.youtube.com/watch?v=9gfeDlQrvhs) (DatabaseTown)
