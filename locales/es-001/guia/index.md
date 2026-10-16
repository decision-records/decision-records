# Guía: registros de decisiones para líderes

Esta guía explica qué es un registro de decisiones, por qué importa a los líderes de todas las funciones de una empresa, cómo estructurar uno y cómo llevar bien la práctica.

Contenido:

* [¿Qué es un registro de decisiones?](#qué-es-un-registro-de-decisiones)
* [Por qué los líderes, y no solo los ingenieros, deberían usar registros de decisiones](#por-qué-los-líderes-y-no-solo-los-ingenieros-deberían-usar-registros-de-decisiones)
* [Los registros de decisiones se aplican a todas las áreas de la empresa](#los-registros-de-decisiones-se-aplican-a-todas-las-áreas-de-la-empresa)
* [La anatomía de un registro de decisiones](#la-anatomía-de-un-registro-de-decisiones)
* [El ciclo de vida de un registro de decisiones](#el-ciclo-de-vida-de-un-registro-de-decisiones)
* [Roles y gobernanza](#roles-y-gobernanza)
* [Buenas prácticas](#buenas-prácticas)
* [Errores comunes](#errores-comunes)
* [Cómo empezar en su organización](#cómo-empezar-en-su-organización)
* [Lecturas adicionales](#lecturas-adicionales)

## ¿Qué es un registro de decisiones?

Un **registro de decisiones (RD)** recoge una elección significativa: la situación que la motivó, las opciones sopesadas, la elección realizada y las consecuencias previstas. Una **bitácora de decisiones (BD)** es la colección continua de todos los registros de decisiones de un equipo, función u organización; en la práctica, una memoria institucional del «por qué hacemos las cosas así».

Un registro de decisiones no es:

* Un acta de reunión (un registro de lo que se *discutió*, no de lo que se *decidió y por qué*).
* Un plan de proyecto (un registro de *lo que ocurre después*, no de *por qué se eligió este camino frente a otros*).
* Un documento de política (un registro de una *regla permanente*, aunque un registro de decisiones suele producir una).

Se sitúa entre todos ellos: un artefacto breve y duradero que existe específicamente para que el razonamiento detrás de una elección sobreviva a la reunión en la que ocurrió.

## Por qué los líderes, y no solo los ingenieros, deberían usar registros de decisiones

Los equipos de software adoptaron esta práctica primero porque el código es costoso de deshacer y los nuevos ingenieros preguntan constantemente «¿por qué se construyó así?». Todo líder se enfrenta exactamente a la misma dinámica:

* **La memoria institucional se va por la puerta.** Cuando se marcha el vicepresidente de Ventas que eligió el modelo de territorios actual, el razonamiento se va con él, a menos que se haya puesto por escrito.
* **Las reorganizaciones y los cambios de liderazgo provocan que se vuelva a litigar.** Sin un registro, un nuevo líder pierde semanas en volver a debatir una decisión ya tomada con cuidado o, peor aún, la revierte sin darse cuenta de por qué existía.
* **La incorporación es más rápida con un «por qué», no solo con un «qué».** Quien se incorpora y puede leer las últimas doce decisiones de su función entiende el criterio de la organización, no solo su estado actual.
* **Escribirlo mejora la propia decisión.** Plasmar el contexto, las opciones y las compensaciones en una página, antes de decidir, saca a la luz lagunas y supuestos no declarados que una discusión verbal pasa por alto.
* **Crea responsabilidad sin burocracia.** Un registro de decisiones nombra quién decidió, cuándo y por qué, lo que protege tanto a quien decide (una elección documentada y razonada) como a la organización (un responsable claro al que acudir si cambian las circunstancias).
* **Escala la comunicación a través de la distancia y el tiempo.** Para equipos remotos y asincrónicos, y para partes interesadas que no estaban en la sala, un registro de decisiones bien escrito hace el trabajo que de otro modo tendría que repetir una reunión en vivo.

Nada de esto es específico del software. Es específico de *cualquier* decisión que sea costosa de revertir, que afecte a personas más allá de quien decide o que probablemente se cuestione más adelante.

## Los registros de decisiones se aplican a todas las áreas de la empresa

Trate el «registro de decisiones» como un género, no como la herramienta de un departamento. La misma estructura de seis partes funciona tanto si la decisión es arquitectónica como comercial:

* **Registro de decisiones de estrategia**: entrada o salida de mercados, postura competitiva, apuestas a varios años.
* **Registro de decisiones de ventas**: diseño de territorios, planes de compensación, elección de CRM y herramientas, estrategia de canales.
* **Registro de decisiones de marketing**: posicionamiento de marca, mezcla de canales, agencia frente a equipo interno, comunicación de precios.
* **Registro de decisiones de producto**: modelo de precios, compensaciones de la hoja de ruta, construir o comprar, decisiones de retirada.
* **Registro de decisiones de proyecto**: metodología de entrega, selección de proveedores, compensaciones de alcance.
* **Registro de decisiones de riesgo**: aceptación, mitigación, transferencia o evitación de riesgos, y su justificación.
* **Registro de decisiones de recursos humanos**: cambios de política (trabajo remoto, niveles, bandas salariales), diseño organizativo.
* **Registro de decisiones de relaciones públicas**: postura de comunicación en crisis, política de portavoces, reglas de relación con los medios.
* **Registro de decisiones de desarrollo profesional**: inversión en formación, criterios de ascenso, decisiones de sucesión.
* **Registro de decisiones de diseño centrado en el usuario**: elección de métodos de investigación, compensaciones de accesibilidad, dirección de la experiencia de usuario.
* **Registro de decisiones de arquitectura / ingeniería de software**: el caso de uso original: elecciones de tecnología, plataforma y diseño.

El directorio de [ejemplos](../ejemplos/index.md) contiene muestras prácticas en la mayoría de estos ámbitos. Muchas organizaciones que adoptan los registros de decisiones para la ingeniería descubren después que sus equipos de estrategia, RR. HH. o ventas quieren exactamente la misma disciplina; a menudo, el momento de revelación que describen los equipos que simplemente rebautizan la práctica como «decisiones» en lugar de «registros de decisiones», lo que hace que el patrón resulte natural para los equipos no técnicos en lugar de algo prestado de la ingeniería.

## La anatomía de un registro de decisiones

En [template/index.md](../plantilla/index.md) hay dos plantillas: una versión **ligera** de seis campos para las decisiones cotidianas y una versión **completa** para decisiones de alto riesgo y gran escrutinio. Ambas comparten la misma lógica central:

1. **Título**: una declaración breve, en presente y en voz activa, de la propia decisión (p. ej., «Adoptar OKR trimestrales», no «Debate sobre OKR»). Procure no superar los 50 caracteres.
2. **Estado**: en qué punto de su vida se encuentra la decisión: solicitud de comentarios, propuesta, aceptada, rechazada, obsoleta o sustituida.
3. **Contexto (problema)**: la situación, las fuerzas y las restricciones que hicieron necesaria esta decisión. Escrito de modo que un lector que no recuerde la reunión entienda por qué surgió la pregunta.
4. **Opciones consideradas (posiciones)**: las alternativas realistas, expresadas como hechos y compensaciones, no como una lista de hombres de paja que hace que la opción elegida parezca obviamente correcta. Si alguien puede preguntar «¿consideraron X?» y la respuesta no está en el registro, el registro está incompleto.
5. **Decisión**: la elección, en lenguaje claro y activo: «Haremos X». No un resumen de ventajas e inconvenientes, sino una declaración clara de lo que se eligió.
6. **Consecuencias (implicaciones)**: qué cambia como resultado, incluidos costes, riesgos, decisiones posteriores y todo aquello a lo que se renuncia al no elegir una alternativa. Las buenas consecuencias se leen como «ahora hacemos X en lugar de Y», no como un resumen de ventajas e inconvenientes de la decisión ya tomada.

La plantilla completa añade campos útiles para las decisiones de mayor riesgo: **Supuestos**, **Restricciones**, **Opiniones** (quién aconsejó qué y por qué), **Decisiones / requisitos / artefactos / principios relacionados** y subsecciones de análisis estructurado (análisis de costes, DAFO, PEST) para decisiones que merecen un escrutinio más profundo.

## El ciclo de vida de un registro de decisiones

Un registro de decisiones suele pasar por cinco etapas:

**Iniciar → Investigar → Evaluar → Decidir → Mantener (→ Retirar)**

* *Iniciar*: alguien identifica que una elección es lo bastante significativa como para justificar un registro y abre un borrador.
* *Investigar*: se reúnen opciones, restricciones y supuestos; se consulta a las partes interesadas.
* *Evaluar*: el registro se comparte para recibir comentarios, normalmente con un plazo definido (una semana es un valor habitual).
* *Decidir*: quien decide (una persona o un grupo, según su modelo de gobernanza) acepta, rechaza o lo devuelve para más trabajo; el estado se actualiza en consecuencia.
* *Mantener*: el registro sigue siendo localizable y se revisa si las circunstancias cambian de forma sustancial.
* *Retirar*: si es sustituido, el estado del registro antiguo pasa a «sustituido» y enlaza con el nuevo. El registro antiguo nunca se elimina; ese historial es precisamente el objetivo.

## Roles y gobernanza

Para cada registro de decisiones, nombre:

* **Responsable / proponente**: redacta el registro y lo lleva hasta una decisión.
* **Quien(es) decide(n)**: la persona, el rol o el comité con autoridad para aceptarlo. Indíquelo explícitamente por tipo de decisión (p. ej., «cambios de precios: vicepresidente de Producto; entrada en un mercado: CEO + Consejo»).
* **Colaboradores**: personas cuyas aportaciones moldearon de forma sustancial las opciones o las compensaciones.
* **Responsable a partir de ahora**: quien mantiene la decisión, la revisa periódicamente (anualmente es una cadencia habitual) y es responsable de retirarla finalmente.

Cuestiones de gobernanza que conviene resolver una sola vez, por escrito, para su organización (véase también la [lista de verificación](../lista-de-verificacion/index.md)):

* ¿Quién puede *proponer* un registro de decisiones? (A menudo: cualquiera.)
* ¿Quién puede *aprobar* uno, y varía eso según el tipo de decisión o el umbral de importe o riesgo?
* ¿Qué rompe un empate o resuelve un desacuerdo: el consenso, un aprobador designado o la escalada?
* ¿Hasta qué punto es modificable un registro tras su aceptación? Muchos equipos prefieren un modelo de «documento vivo»: la información nueva se añade con una marca de tiempo en lugar de reescribir el historial en silencio.

## Buenas prácticas

* **Una decisión por registro.** Resista la tentación de agrupar varias elecciones en un documento: se vuelve imposible de referenciar, sustituir o buscar más tarde.
* **Sea conciso.** Una página, no un informe. Si crece más de una página, la decisión probablemente es más de una decisión.
* **Escriba el contexto para un desconocido.** Suponga que el lector no tiene nada del contexto compartido de la reunión, y que tampoco lo tendrá dentro de dos años.
* **Exprese la decisión en voz activa.** «Migraremos a X», no «X se consideró la dirección preferida».
* **Explique las consecuencias como lo que cambia, no como ventajas e inconvenientes.** El debate de compensaciones pertenece a «Opciones consideradas»; «Consecuencias» trata de lo que ocurre después.
* **Guarde los registros donde el equipo ya trabaja.** Una carpeta `decisions/` bajo control de versiones, un espacio de wiki o una carpeta de unidad compartida: el mejor lugar de almacenamiento es el que su equipo realmente abrirá.
* **Reserve los registros de decisiones para decisiones difíciles de revertir, transversales o que probablemente se cuestionen más adelante.** No toda elección necesita uno; véase la [lista de verificación](../lista-de-verificacion/index.md#lista-de-verificación-necesita-esta-decisión-un-registro-de-decisiones).
* **Sustituya, no elimine en silencio.** Cuando una decisión cambie, escriba un nuevo registro y enlace con el que sustituye.

## Errores comunes

* **Convertirlo en papeleo a posteriori.** Si un registro de decisiones se escribe para justificar una elección ya tomada y anunciada, pierde la mayor parte de su valor: el objetivo es afinar el pensamiento *antes* de comprometerse, no producir un artefacto de cumplimiento después.
* **Fatiga de bitácora.** Registrar cada elección menor entierra las significativas y enseña a la gente a dejar de leer la bitácora. Limite los registros a decisiones realmente difíciles de revertir o de amplias consecuencias.
* **Escribir ventajas e inconvenientes en lugar de una decisión.** Un registro que termina con una lista de compensaciones y sin un claro «haremos X» no es un registro de decisiones, es un memorando de opciones.
* **Sin un responsable.** Un registro de decisiones sin una persona que decide o revisa nombrada tiende a quedar desactualizado y deja de inspirar confianza.
* **Tratar la plantilla como burocracia en lugar de como una lista de verificación.** El valor de la plantilla es que es una lista de verificación para pensar bien y comunicar bien, no un formulario que rellenar por rellenarlo.

## Cómo empezar en su organización

1. Elija una función o un equipo con una decisión que ya sea polémica o difícil de revertir.
2. Redacte esa decisión usando la [plantilla ligera](../plantilla/index.md#plantilla-ligera).
3. Compártala con quien decide y con las partes interesadas reales; establezca un plazo para los comentarios.
4. Guárdela en un lugar duradero y localizable.
5. Cuando la práctica haya demostrado su utilidad una vez, proponga adoptarla como un estándar ligero para el equipo, no como un mandato impuesto de arriba abajo. Los registros de decisiones funcionan mejor cuando un equipo los adopta porque le facilitan su propio trabajo, no como papeleo forzado.

Consulte el [tutorial](../tutorial/index.md) para un recorrido completo con un ejemplo.

## Lecturas adicionales

* [spec/decision-record.md](https://github.com/decision-records/decision-records/blob/main/spec/decision-record.md): la especificación resumida que esta guía desarrolla.
* [Architectural decision (Wikipedia)](https://wikipedia.org/wiki/Architectural_decision)
* [Documenting architecture decisions — Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)
* [Markdown Architectural Decision Records (MADR)](https://adr.github.io/madr/)
* [AWS Prescriptive Guidance: ADR process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
* [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)
* [joelparkerhenderson/decision-record](https://github.com/joelparkerhenderson/decision-record): el proyecto de origen, más completo, que esta guía generaliza para un público empresarial.
