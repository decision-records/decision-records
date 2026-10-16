# Tutorial: escriba su primer registro de decisiones

Este es un recorrido práctico para un líder que nunca ha escrito un registro de decisiones. Utiliza un escenario empresarial realista, no un ejemplo de software, porque los registros de decisiones son una herramienta general de liderazgo. Al final habrá escrito un registro real y sabrá cómo introducir la práctica en su equipo.

Tiempo estimado: 20 minutos para la Parte 1, más práctica continua para las Partes 2 a 4.

Contenido:

* [Parte 1: escribir un registro de decisiones (20 minutos)](#parte-1-escribir-un-registro-de-decisiones-20-minutos)
* [Parte 2: conseguir que se revise y se acepte](#parte-2-conseguir-que-se-revise-y-se-acepte)
* [Parte 3: crear una bitácora de decisiones](#parte-3-crear-una-bitácora-de-decisiones)
* [Parte 4: establecer una cadencia de revisión](#parte-4-establecer-una-cadencia-de-revisión)
* [El escenario completo desarrollado](#el-escenario-completo-desarrollado)

## Parte 1: escribir un registro de decisiones (20 minutos)

Elija una decisión real a la que se enfrente ahora, idealmente una que ya sea un poco polémica, para notar el valor de inmediato. Si no se le ocurre ninguna, use el ejemplo recurrente de este tutorial: **«¿Deberíamos cambiar de proveedor de nóminas?»**

### Paso 1: título (2 minutos)

Escriba un título breve, en presente y en voz activa. No una pregunta, sino una declaración de la decisión final:

> Cambiar el proveedor de nóminas a [Proveedor]

No se preocupe todavía por estar seguro: puede cambiar el título cuando la decisión se haya tomado.

### Paso 2: estado y metadatos (1 minuto)

```markdown
* Estado: solicitud de comentarios
* Fecha: 2026-08-19
* Quien decide: director financiero
* Responsable: jefe de Operaciones de Personal
```

Nombrar ahora a quien decide, antes del debate, evita una discusión sobre la autoridad cuando las opiniones ya se han endurecido.

### Paso 3: contexto (5 minutos)

Escriba la situación como si se la explicara a una persona recién incorporada sin ningún conocimiento previo:

> Nuestro actual proveedor de nóminas ha incumplido dos plazos de presentación en el último
> año, lo que ha causado multas por pago tardío en dos estados. Nuestro contrato se renueva
> en 60 días. Finanzas y Operaciones de Personal coinciden en que el proveedor actual es un
> riesgo, pero discrepan sobre la urgencia y sobre si cambiar este trimestre compensa la
> perturbación del periodo de inscripción abierta.

Observe que esto aún no defiende una respuesta concreta: solo expone las fuerzas en juego.

### Paso 4: opciones consideradas (5 minutos)

Enumere las alternativas reales, incluida «no hacer nada», con compensaciones honestas:

> * **Seguir con el proveedor actual y renegociar los acuerdos de nivel de servicio**: la menor
>   perturbación, pero no soluciona la causa raíz; el proveedor no ha respondido a escaladas previas.
> * **Cambiar al proveedor B**: mejor historial de cumplimiento, pero la implantación
>   coincide con la inscripción abierta, lo que añade riesgo a ese proceso.
> * **Cambiar al proveedor C**: mejor precio, pero un equipo de soporte notablemente más pequeño
>   y dos llamadas de referencia plantearon dudas sobre los tiempos de respuesta.

Si se sorprende escribiendo una sola opción real y dos hombres de paja, deténgase: es señal de que la decisión ya se tomó de manera informal y de que el registro se está usando para justificarla en lugar de afinarla. Vuelva atrás y busque primero una segunda opinión sobre las alternativas.

### Paso 5: decisión (2 minutos)

Cuando quien decide haya decidido de verdad (puede que no ocurra en la misma sesión que los pasos 1 a 4), escríbalo en voz activa y en lenguaje claro:

> Cambiaremos al proveedor B, con la implantación comenzando una vez que cierre la inscripción abierta.

### Paso 6: consecuencias (5 minutos)

Indique qué cambia, no un repaso de las compensaciones ya cubiertas arriba:

> * El contrato actual debe rescindirse con 30 días de preaviso antes de que comience el nuevo periodo.
> * Operaciones de Personal realizará un ciclo de prueba de nómina en paralelo antes del traspaso.
> * Se protege el calendario de la inscripción abierta; el cambio se programa después de su cierre.
> * Aceptamos una ventana de implantación comprimida a cambio de reducir el riesgo de cumplimiento;
>   esta es la compensación que elegimos explícitamente.

Eso es un registro de decisiones ligero completo. Compárelo con la [plantilla](../plantilla/index.md#plantilla-ligera): debería poder correlacionar cada sección.

## Parte 2: conseguir que se revise y se acepte

1. Comparta el borrador con las partes interesadas reales (aquí: Finanzas, Operaciones de Personal y cualquiera a quien afecte el cambio) con una petición clara y una fecha límite: *«Comentarios hasta el viernes; después lo marcaré como aceptado salvo que cambie algo sustancial».*
2. Recoja cualquier información nueva como un añadido fechado en lugar de reescribir en silencio las secciones anteriores: esto preserva el rastro del razonamiento.
3. Cuando quien decide lo confirme, cambie `Estado` a `aceptado` y anote la fecha final.

## Parte 3: crear una bitácora de decisiones

Un único registro de decisiones es útil una vez. Una **bitácora de decisiones**, la colección de todos los registros de su equipo, es útil para siempre.

1. Cree un lugar duradero y compartido: una carpeta `decisions/` en la unidad compartida, el espacio de wiki o el repositorio con control de versiones que su equipo ya use. Utilice lo que su equipo ya abre a diario: la mejor herramienta es la que la gente realmente utilizará.
2. Archive cada registro nuevo con un nombre claro y ordenable, p. ej. `2026-08-19-switch-payroll-provider.md`.
3. Mantenga una página de índice que enumere cada registro con su título, estado y fecha; véase [examples/index.md](../ejemplos/index.md) para un ejemplo funcional de este patrón.
4. Algunos equipos descubren que la palabra «decisiones» (omitiendo del todo «registro») hace que la práctica resulte natural en lugar de prestada de la ingeniería; use el nombre que consiga que su equipo realmente los escriba.

## Parte 4: establecer una cadencia de revisión

Las decisiones envejecen. Establezca un ritmo ligero de gobernanza para que la bitácora siga siendo fiable en lugar de convertirse en un cementerio de decisiones obsoletas:

* **El responsable de cada registro** revisa sus propios registros al menos una vez al año, o siempre que la situación de fondo cambie de forma sustancial.
* **Cuando una decisión se revierte o se sustituye**, escriba un nuevo registro y ponga el estado del antiguo en `sustituido`, enlazando con el sustituto. Nunca elimine en silencio: el historial de *por qué cambiamos de opinión* suele ser más valioso que la respuesta actual.
* **Trimestral o anualmente**, repase toda la bitácora en busca de registros que sigan marcados como `solicitud de comentarios` o `propuesto` y que nunca se resolvieron, y ciérrelos o archívelos de forma explícita.

Consulte la [lista de verificación](../lista-de-verificacion/index.md) para una versión condensada y repetible de las cuatro partes anteriores.

## El escenario completo desarrollado

Para un ejemplo completo y ya rellenado construido a partir del escenario de este tutorial, consulte un registro desarrollado comparable en [examples/index.md](../ejemplos/index.md); por ejemplo, el ejemplo [Construir o comprar para un proyecto](../ejemplos/construir-o-comprar/) sigue la misma estructura de principio a fin, incluida una sección de consecuencias completamente redactada.
