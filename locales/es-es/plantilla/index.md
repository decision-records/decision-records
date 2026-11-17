# Plantillas de registros de decisiones

Dos plantillas, ambas en Markdown sin formato: copie la que quiera en un archivo nuevo y rellénela.

## Elegir qué plantilla usar

Use por defecto la **plantilla ligera**: la mayoría de las decisiones solo necesitan sus seis campos, y una página que crece más allá de eso suele ser más de una decisión de todos modos.

Pase a la **plantilla completa** cuando una decisión sea de alto riesgo, tenga varias partes interesadas cuyas opiniones importen individualmente o necesite realmente un análisis estructurado de costes/DAFO/PEST para defender la elección más adelante. Consulte la [lista de verificación](../lista-de-verificacion/index.md#lista-de-verificación-necesita-esta-decisión-un-registro-de-decisiones) para la pregunta más amplia de si una decisión necesita un registro, y la [guía](../guia/index.md#la-anatomía-de-un-registro-de-decisiones) para ver cómo se corresponden los campos de ambas plantillas.

## Plantilla ligera

```markdown
# Título (breve, en presente, en voz activa, hasta ~50 caracteres)

- Estado: solicitud de comentarios | propuesto | aceptado | rechazado | obsoleto | sustituido
- Fecha: AAAA-MM-DD
- Quien(es) decide(n): [nombre(s) o rol(es) con autoridad para aceptar esto]
- Responsable: [quién mantiene y revisa periódicamente este registro]

## Contexto

Describa la situación y las restricciones que hicieron necesaria esta decisión, escrito de modo que un lector que no recuerde la reunión entienda por qué surgió la pregunta.

## Opciones consideradas

Enumere las alternativas realistas, incluida «no hacer nada» si procede, como hechos y compensaciones, no como una lista de hombres de paja que hace que la opción elegida parezca obviamente correcta.

## Decisión

Exprese la elección en lenguaje claro y activo: «Haremos X». No un resumen de ventajas e inconvenientes, sino una declaración clara de lo que se eligió.

## Consecuencias

Indique qué cambia como resultado: costes, riesgos, decisiones posteriores y todo aquello a lo que se renuncia al no elegir una alternativa. Que se lea como «ahora hacemos X en lugar de Y», no como un resumen de ventajas e inconvenientes de la decisión ya tomada.
```

Consulte el [tutorial](../tutorial/index.md) para un recorrido completo de esta plantilla, y [examples/index.md](../ejemplos/index.md) para ejemplos terminados y rellenados.

## Plantilla completa

```markdown
# Título (breve, en presente, en voz activa, hasta ~50 caracteres)

- Estado: solicitud de comentarios | propuesto | aceptado | rechazado | obsoleto | sustituido
- Fecha: AAAA-MM-DD
- Quien(es) decide(n): [nombre(s) o rol(es) con autoridad para aceptar esto]
- Responsable: [quién mantiene y revisa periódicamente este registro]

Resumen: una o dos frases sobre la posición actual y las necesidades pendientes.

## Problema

Describa el problema que quiere abordar. No deje dudas sobre por qué lo aborda ahora.

Siga un enfoque minimalista. Aborde solo los problemas que hay que abordar en distintos momentos del ciclo de vida.

Quizá quiera añadir información de agrupación, como etiquetas, palabras clave, enlaces a la base de conocimiento, etc.

## Supuestos

Describa cualquier supuesto subyacente del entorno en el que toma la decisión.

Asegúrese de abordar los atributos de calidad pertinentes, también llamados requisitos transversales.

Ejemplos de supuestos pueden referirse a alcance, coste, calendario, tecnología, disponibilidad de recursos, necesidades de calidad del servicio, acuerdos de nivel de servicio, etc.

Tenga en cuenta que las restricciones del entorno (como los estándares tecnológicos aceptados, la arquitectura empresarial, los patrones de uso común, etc.) pueden limitar las opciones que considere.

## Restricciones

Recoja cualquier restricción adicional del entorno que esta decisión pueda suponer.

Asegúrese de abordar los atributos de calidad pertinentes, también llamados requisitos transversales, como se indicó antes.

Ejemplos de restricciones pueden referirse a elecciones de plataforma, selección de proveedores, la facilidad para revertir la decisión, etc.

## Opciones consideradas (posiciones)

Enumere las posiciones, que son las opciones viables que está considerando o ha considerado.

Use hechos y datos, no opiniones. Las posiciones a menudo requieren explicaciones largas, a veces incluso modelos y diagramas.

No tiene que ser una lista exhaustiva; sin embargo, no quiere oír la pregunta «¿pensaron en...?» durante una revisión final, porque eso llevaría a una pérdida de credibilidad y a cuestionar otras decisiones de arquitectura.

Esta sección también ayuda a asegurar que escuchó las opiniones de los demás; exponer explícitamente otras opiniones ayuda a ganar a sus defensores para su decisión.

### Análisis de costes (opcional)

Resumen: explique brevemente esta sección y, idealmente, destaque cualquier valor atípico.

Ejemplos:

- Puesta en marcha, como costes de configuración, tiempo y recursos.

- Operación, como soporte y mantenimiento

- Formación, como capacitación y gestión del cambio

- Licencias, como acuerdos contractuales y compromisos legales

- Medición, como ancho de banda y uso de CPU

### Análisis DAFO (opcional)

Resumen: explique brevemente esta sección y, idealmente, destaque cualquier valor atípico.

- Fortalezas

- Debilidades

- Oportunidades

- Amenazas

### Análisis PEST (opcional)

Resumen: explique brevemente esta sección y, idealmente, destaque cualquier valor atípico.

- Factores políticos

- Factores económicos

- Factores sociales

- Factores tecnológicos

A algunos equipos les gusta añadir estos como categorías propias:

- Factores legales: preferimos incluirlos en los factores políticos.

- Factores regulatorios: preferimos incluirlos en los factores políticos.

- Factores medioambientales: preferimos incluirlos en los factores económicos.

- Factores demográficos: preferimos incluirlos en los factores sociales.

### Otros análisis (añada aquí sus propias ideas)

Añada aquí sus propias ideas...

## Opiniones

Resumen: explique brevemente esta sección y, idealmente, destaque cualquier valor atípico.

- Del equipo, escritas idealmente por el propio compañero.

- De otras partes interesadas internas, escritas idealmente por la propia parte interesada.

- De personas externas, como asesores, evaluadores o revisores de terceros, etc.

Para cada opinión, deje claro:

- Quién emite la opinión

- Qué otros candidatos se consideraron,

- ¿Cómo evaluó el autor a los candidatos?

- ¿Por qué eligió el autor al ganador?

- ¿Qué ha ocurrido desde entonces?

- Sabiendo lo que sabe ahora, ¿qué aconsejaría hacer de otra manera?

### Título de la opinión 1 (añada la suya aquí)

Resumen: explique brevemente esta sección y, idealmente, destaque cualquier valor atípico.

Explique aquí su opinión.

### Título de la opinión 2 (añada la suya aquí)

Resumen: explique brevemente esta sección y, idealmente, destaque cualquier valor atípico.

Explique aquí su opinión.

### Título de la opinión 3 (añada la suya aquí)

Resumen: explique brevemente esta sección y, idealmente, destaque cualquier valor atípico.

Explique aquí su opinión.

## Argumento

Resumen: explique brevemente esta sección y, idealmente, destaque cualquier valor atípico.

Explique por qué eligió una posición.

Las decisiones deben estar orientadas a un propósito. Para mostrar responsabilidad, relacione explícitamente sus decisiones con los objetivos o requisitos.

El argumento es probablemente tan importante como la propia decisión.

No tiene que ser una redacción exhaustiva; sin embargo, no quiere oír la pregunta «¿pensaron en...?» durante una revisión final, porque (como antes) eso llevaría a una pérdida de credibilidad y a cuestionar otras decisiones de arquitectura.

## Implicaciones

Resumen: explique brevemente esta sección y, idealmente, destaque cualquier valor atípico.

Exponga con claridad las implicaciones de su decisión. Esto puede ser muy eficaz para ganar apoyo y crear una hoja de ruta para la ejecución.

Por ejemplo, una decisión puede introducir la necesidad de tomar otras decisiones, crear nuevos requisitos o modificar los existentes; imponer restricciones adicionales al entorno; exigir renegociar el alcance o el calendario con los clientes; o requerir formación adicional del personal.

## Decisiones relacionadas

Resumen: explique brevemente esta sección y, idealmente, destaque cualquier valor atípico.

Enumere aquí cualquier decisión relacionada.

Hemos comprobado que, en la práctica, una matriz de trazabilidad, árboles de decisión o metamodelos son más útiles. Los metamodelos son útiles para mostrar relaciones complejas de forma diagramática (como los modelos Rose).

## Requisitos relacionados

Resumen: explique brevemente esta sección y, idealmente, destaque cualquier valor atípico.

Enumere aquí cualquier requisito relacionado.

Nos ha resultado más cómodo hacer referencia a una matriz de trazabilidad. Puede evaluar la contribución de cada decisión al cumplimiento de cada requisito y después evaluar cuán bien se cumple el requisito en el conjunto de las decisiones. Si una decisión no contribuye al cumplimiento de un requisito, no tome esa decisión.

## Artefactos relacionados

Enumere aquí cualquier artefacto relacionado.

Ejemplos son cualquier documento de alcance, documento de planificación, modelo de procesos de negocio, etc., a los que afecte esta decisión.

## Principios relacionados

Si la empresa tiene un conjunto de principios acordados, asegúrese de que la decisión sea coherente con uno o más de ellos. Esto ayuda a garantizar la alineación entre dominios o sistemas.

## Notas relacionadas

Como los procesos de toma de decisiones pueden llevar mucho tiempo, hemos comprobado que resulta útil recoger las notas y los problemas que el equipo comenta durante el proceso de socialización.
```
