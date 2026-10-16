# Construir o comprar para un proyecto

* Estado: solicitud de comentarios
* Fecha: 2026-06-01
* Quien decide: director de Operaciones (por confirmar)
* Responsable: director de Operaciones de Servicio

Resumen: trabajo en curso. Este es un punto de partida para un equipo que necesita una capacidad nueva, aquí una herramienta de programación de citas de cara a los clientes, y debe decidir si la construye, la compra o hace algo intermedio. Muestra cómo un equipo puede enmarcar la cuestión, debatir las opciones y reunir información. No registra ninguna decisión.

## Problema

Una empresa de servicios programa su trabajo con un proceso manual, basado en hojas de cálculo, que ha causado reservas duplicadas y dañado relaciones con clientes. Hace falta una solución en un plazo limitado, y el equipo debe decidir si construir una herramienta internamente o comprar una existente.

Las preguntas que hay que responder:

* ¿Qué debe hacer la herramienta (requisitos) y cuáles de ellos son esenciales?
* ¿En qué medida cumple cada vía los requisitos, en el tiempo disponible?
* ¿Cuál es el costo completo de cada vía a lo largo de su vida útil, incluido aquello a lo que el equipo renuncia al elegirla?
* ¿Qué ocurre si cambian los requisitos o si la vía elegida fracasa?

## Supuestos

Cada supuesto es algo que hay que comprobar.

* **La mayoría de las necesidades de programación son comunes a otras organizaciones, de modo que un producto existente puede cubrirlas.** Comprobación: enumerar los requisitos y pedir a los proveedores que muestren cómo se cumple cada uno.
* **Los casos inusuales son lo bastante pocos como para resolverlos con un procedimiento alternativo.** Comprobación: contar con qué frecuencia ocurren y escribir el procedimiento alternativo de cada uno.
* **Los ingenieros internos pueden construir y mantener la herramienta.** Comprobación: estimar el esfuerzo con las personas que lo harían y preguntar qué otra cosa no harían.
* **Los plazos de los proveedores son realistas.** Comprobación: hablar con clientes de referencia de tamaño similar, incluidos aquellos cuyos proyectos se retrasaron.

## Restricciones

* Hace falta una solución dentro de un plazo fijo.
* Otras iniciativas de producto comprometidas deben mantener sus calendarios, de modo que no se puede quitar capacidad de ingeniería a ellas sin más.
* La herramienta maneja datos de clientes, así que deben comprobarse la seguridad y la privacidad.
* Desconocido, por confirmar: necesidades de integración, crecimiento esperado y qué pasa al terminar un contrato con un proveedor.

## Opciones consideradas

Para cada opción, estimar el valor, los costos, el calendario y las capacidades necesarias, y anotar qué evidencia haría cambiar de opinión al equipo.

* **Construir internamente.**
  * Valor: ajuste exacto a las reglas de la organización; control total de la hoja de ruta.
  * Factores de costo: diseño, desarrollo, pruebas, alojamiento, soporte y mantenimiento durante toda la vida de la herramienta; el costo de oportunidad de lo que los ingenieros no construyen en su lugar.
  * Forma del calendario: a menudo más largo que las primeras estimaciones; el valor llega al final.
  * Capacidades necesarias: gestión de producto; ingeniería; operaciones.
* **Comprar un producto existente.**
  * Valor: más rápido; costos distribuidos; se beneficia de las mejoras del proveedor.
  * Factores de costo: licencias, implantación, configuración, capacitación, integración, administración y salida.
  * Riesgos: brechas frente a los requisitos; cambios del proveedor; dependencia.
* **Comprar un producto y encargar al proveedor trabajo a la medida.** Cierra las brechas, pero añade tiempo y costo y conlleva riesgo de entrega.
* **Armar la solución con herramientas más pequeñas** (por ejemplo, una plataforma de poco código o una combinación de servicios existentes).
* **Mejorar primero el proceso manual** con una solución transitoria, para ganar tiempo para una mejor decisión.

## Argumento

Puntos de debate que el equipo debería esperar:

* **Ajuste frente a rapidez.** Un ajuste perfecto que llega tarde puede valer menos que un buen ajuste ahora.
* **¿Núcleo o contexto?** ¿Forma parte la programación de lo que distingue al negocio? Si no, suele favorecerse la compra.
* **Costos ocultos.** Construir implica mantenimiento continuo; comprar implica licencias, integración y salida.
* **Reversibilidad.** ¿Qué opción es más fácil de deshacer si resulta equivocada?

Cómo podría el equipo evaluar los costos y las compensaciones:

1. Redactar los requisitos y clasificarlos. Puntuar cada vía frente a ellos y anotar las brechas.
2. Estimar el costo total de propiedad en un horizonte establecido, en los términos propios de la organización: costos únicos, costos recurrentes, tiempo del personal interno, integración, capacitación y salida. Dar rangos.
3. Estimar el costo del retraso: el efecto de cada período adicional de reservas duplicadas.
4. Comparar las opciones en escenarios optimista, probable y pesimista, y probar el efecto de cambios en los requisitos.
5. Usar una matriz ponderada (ajuste, rapidez, costo, riesgo, control, reversibilidad) y un pre-mortem.

## Decisión

**Aún no se ha decidido.** Este es un punto de partida. Un equipo que lo use debe sustituir esta sección por su propia decisión.

Forma sugerida de llegar a una decisión:

* Confirmar quién decide y quién debe estar de acuerdo.
* Acordar primero los requisitos y las ponderaciones.
* Reunir la evidencia indicada arriba y anotar lo que se encontró.
* Compartir para comentarios; luego decidir y actualizar el Estado.

## Implicaciones

Si el equipo decide comprar, necesitaría:

* Designar a un responsable de la implantación y planificar la capacitación dentro del plazo del proveedor.
* Documentar los procedimientos alternativos para los casos no cubiertos, llevar un registro de con qué frecuencia se usan y revisarlos tras un tiempo de uso real.
* Definir qué activaría una decisión posterior sobre trabajo a la medida.
* Confirmar que no se quita capacidad de ingeniería a las iniciativas comprometidas.

## Decisiones relacionadas

* [Seleccionar una plataforma CRM](../seleccion-proveedor-crm/): una elección parecida para otro sistema.
* [Elegir la base de datos principal](../eleccion-base-de-datos/): una instancia tecnológica de las cuestiones de construir o comprar y de dependencia.
* [Reducir el riesgo de concentración en un solo proveedor](../dependencia-proveedor-unico/): la dependencia de un proveedor.
* Decisiones aún no tomadas: trabajo de integración a la medida; conservación de datos.

## Notas relacionadas

* Puntos abiertos: redactar y clasificar los requisitos; pedir a los proveedores clientes de referencia; estimar con los ingenieros el esfuerzo de construcción.
* Más información:
  * Wikipedia: [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership), [Commercial off-the-shelf](https://en.wikipedia.org/wiki/Commercial_off-the-shelf), [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing), [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost), [Decision matrix](https://en.wikipedia.org/wiki/Decision_matrix), [Pre-mortem](https://en.wikipedia.org/wiki/Pre-mortem)
  * ISO: [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html)
  * Vídeo: [Making better build vs buy decisions](https://www.youtube.com/watch?v=sGOamUc0zM0) (Chris Bell, LeadDev)
