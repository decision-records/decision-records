# Reducir el riesgo de concentración en un solo proveedor

* Estado: solicitud de comentarios
* Fecha: 2026-05-20
* Quien decide: director de Operaciones (por confirmar)
* Responsable: responsable de Compras

Resumen: trabajo en curso. Este es un punto de partida para un equipo que está considerando cómo responder a una fuerte dependencia de un solo proveedor para servicios críticos. Muestra cómo un equipo puede enmarcar el riesgo, debatir las opciones y reunir información. No registra ninguna decisión.

## Problema

Una revisión interna de riesgos halló que una gran parte del gasto en infraestructura crítica va a un único proveedor. Ese proveedor tuvo una caída imprevista que interrumpió un servicio de cara a los clientes, y sus precios han subido sin un tope contractual. Seguir así expone a la organización a un riesgo de disponibilidad y a un aumento descontrolado de costos.

Las preguntas que hay que responder:

* ¿Cuánto de aquello de lo que dependemos está realmente concentrado y qué pasa con el negocio si el proveedor falla o vuelve a subir los precios?
* ¿Qué probabilidad y gravedad tienen esos hechos y qué estamos dispuestos a aceptar?
* ¿Cuáles son las formas realistas de reducir el riesgo, a qué costo y con qué rapidez?
* ¿Cómo sería una salida o un plan de respaldo seguros?

## Supuestos

Cada supuesto es algo que hay que comprobar.

* **La caída y el aumento de precios reflejan un patrón duradero**, no un hecho aislado. Comprobación: revisar el historial de incidentes, las comunicaciones del proveedor y los precios de mercado.
* **Un segundo proveedor puede ejecutar parte de la carga crítica con una calidad aceptable.** Comprobación: preseleccionar candidatos y hacer una prueba limitada.
* **El proveedor principal mejorará las condiciones si ve alternativas creíbles.** Comprobación: pedir una propuesta de renovación mientras se evalúan otras opciones.
* **Una migración por fases puede evitar interrupciones del servicio.** Comprobación: revisar las dependencias técnicas y los límites del contrato para mover carga.

## Restricciones

* El servicio de cara a los clientes no debe interrumpirse durante la transición.
* Los términos del contrato pueden limitar con qué rapidez puede moverse la carga sin penalización, y pueden incluir cargos por salir.
* Todo proveedor nuevo debe evaluarse con los mismos criterios que el original.
* Desconocido, por confirmar: portabilidad de los datos, servicios propietarios en uso, cargos de salida y expectativas regulatorias sobre el riesgo de terceros.

## Opciones consideradas

Para cada opción, estimar el valor, los costos, el calendario y las capacidades necesarias, y anotar qué evidencia haría cambiar de opinión al equipo.

* **Aceptar el riesgo y vigilar.**
  * Valor: ningún costo ni esfuerzo a corto plazo.
  * Riesgos: deja la exposición a caídas y a precios; puede que la revisión de riesgos no lo admita con el nivel de concentración actual.
* **Renegociar con el proveedor actual** niveles de servicio, un tope de precio y mejores condiciones de salida; seguir con un solo proveedor.
  * Valor: aborda el precio y la rendición de cuentas.
  * Riesgos: no elimina el punto único de fallo.
* **Diversificar: mover parte de la carga crítica a un segundo proveedor** y renegociar el contrato principal para el resto.
  * Valor: reduce la concentración; fortalece la posición negociadora.
  * Factores de costo: selección de proveedor; esfuerzo de migración; costos de operación duplicados durante un tiempo; mayor complejidad operativa (dos conjuntos de procedimientos y habilidades).
  * Forma del calendario: por fases, con puntos de control.
* **Reforzar la resiliencia sin un segundo proveedor**: copias de seguridad, procedimientos de recuperación probados y cambios de diseño que hagan posible cambiar más adelante.
* **Pasar por completo a otro proveedor.** La mayor perturbación; solo se justifica si el proveedor actual es inaceptable.

## Argumento

Puntos de debate que el equipo debería esperar:

* **Apetito de riesgo.** ¿Qué nivel de dependencia es aceptable? ¿Quién lo decide?
* **Costo de la resiliencia.** La redundancia tiene un precio continuo; ¿vale la pena el seguro y para qué servicios?
* **Complejidad.** Dos proveedores añaden complejidad operativa. ¿Tiene el equipo las habilidades?
* **Dependencia.** ¿Hasta qué punto depende la organización de las funciones propietarias de un proveedor y cuánto costaría cambiar?

Cómo podría el equipo evaluar los costos y las compensaciones:

1. Identificar los servicios críticos y sus dependencias. Para cada uno, estimar el impacto en el negocio de una caída de distinta duración, como rangos.
2. Estimar la probabilidad de fallo y de cambio de precio con el historial y la evidencia del proveedor, con su incertidumbre.
3. Valorar cada opción: migración, costos de operación duplicados, herramientas, capacitación, compras y la complejidad continua; incluir los costos de salida de ambos proveedores.
4. Comparar la reducción esperada del riesgo con el costo y probar la sensibilidad a las estimaciones de probabilidad.
5. Definir indicadores adelantados y puntos de activación, por ejemplo un incumplimiento de niveles de servicio, un cambio de precio o un evento de seguridad.

## Decisión

**Aún no se ha decidido.** Este es un punto de partida. Un equipo que lo use debe sustituir esta sección por su propia decisión.

Forma sugerida de llegar a una decisión:

* Confirmar quién decide y qué apetito de riesgo se aplica.
* Acordar primero los criterios y las ponderaciones.
* Reunir la evidencia indicada arriba y anotar lo que se encontró.
* Compartir para comentarios; luego decidir y actualizar el Estado.

## Implicaciones

Si el equipo decide diversificar, necesitaría:

* Hacer un proceso de selección de proveedor con los mismos criterios que el original.
* Planificar una migración por fases que evite interrupciones.
* Renegociar el contrato principal en paralelo.
* Aceptar la mayor complejidad operativa, con un manual de operación para cada proveedor.
* Informar con regularidad de la concentración y de los niveles de servicio hasta alcanzar el objetivo.

## Decisiones relacionadas

* [Elegir la base de datos principal](../eleccion-base-de-datos/): una instancia tecnológica de la misma cuestión de dependencia.
* [Construir o comprar para un proyecto](../construir-o-comprar/): decisiones de abastecimiento relacionadas.
* Decisiones aún no tomadas: plan de salida y de continuidad; selección de proveedor.

## Notas relacionadas

* Puntos abiertos: enumerar los servicios críticos y sus proveedores; reunir el historial de incidentes; leer el contrato para las condiciones de salida y de precios.
* Más información:
  * Wikipedia: [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in), [Concentration risk](https://en.wikipedia.org/wiki/Concentration_risk), [Single point of failure](https://en.wikipedia.org/wiki/Single_point_of_failure), [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning), [Disaster recovery](https://en.wikipedia.org/wiki/Disaster_recovery), [Multicloud](https://en.wikipedia.org/wiki/Multicloud), [Risk register](https://en.wikipedia.org/wiki/Risk_register)
  * ISO: [ISO 31000 family, Risk management](https://www.iso.org/standards/popular/iso-31000-family), [ISO 22301:2019, Business continuity management systems](https://www.iso.org/standard/75106.html), [ISO 20400:2017, Sustainable procurement guidance](https://www.iso.org/standard/63026.html)
  * Vídeo: [Preparing for Vendor Lock-In: The Importance of an Exit Strategy](https://www.youtube.com/watch?v=vtdprxMFlH8) (Razorwire)
  * Lectura: [NIST SP 800-161 Rev. 1, Cybersecurity Supply Chain Risk Management Practices](https://csrc.nist.gov/pubs/sp/800/161/r1/final)
