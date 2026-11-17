# Ayuda / preguntas frecuentes

Preguntas habituales que plantean los líderes al adoptar registros de decisiones, más un breve glosario.

Contenido:

* [Preguntas frecuentes](#preguntas-frecuentes)
* [Solución de problemas](#solución-de-problemas)
* [Glosario](#glosario)
* [Adónde ir a continuación](#adónde-ir-a-continuación)

## Preguntas frecuentes

**¿En qué se diferencia de un acta de reunión?**
Las actas recogen lo que se *discutió*; un registro de decisiones recoge lo que se *decidió y por qué*, escrito para valerse por sí solo sin el contexto de la reunión. Las actas son una buena aportación a un registro de decisiones, pero rara vez lo sustituyen.

**¿Cuánto tiempo debería llevar realmente?**
Para un registro ligero de una decisión que ya entiende, de 15 a 30 minutos. Ese tiempo rara vez se desperdicia, porque es el tiempo que de otro modo dedicaría a volver a explicar el mismo razonamiento en cada conversación futura sobre el tema. Reserve los registros completos, con análisis de costes, DAFO/PEST y varias opiniones documentadas, para decisiones realmente de alto riesgo.

**¿Quién debería ser responsable de nuestra bitácora de decisiones?**
Alguien que responda del equipo o de la función que abarca, a menudo la misma persona que de otro modo estaría contestando de memoria un año después a «¿por qué hicimos esto?». En organizaciones grandes, un responsable ligero de gobernanza (p. ej., jefe de gabinete, responsable de Estrategia o un responsable rotatorio por función) puede mantener el índice sin aprobar cada decisión individual.

**¿Y si quien decide y las partes interesadas no están de acuerdo?**
Resuelva el *proceso* antes que la *decisión*: nombre de antemano quién tiene la autoridad final (una persona o una regla definida, como «consenso, escalar al CEO si no se resuelve en una semana»). Registre las opiniones discrepantes en la sección «Opiniones» de la plantilla completa en lugar de borrar el desacuerdo: una disidencia bien documentada es valiosa si más adelante se vuelve a examinar la decisión.

**¿Y si más tarde descubrimos que la decisión fue un error?**
Para eso está precisamente el registro. Escriba un nuevo registro de decisiones que sustituya al antiguo, explique qué cambió (información nueva, circunstancias distintas o un error de razonamiento) y enlace hacia atrás. Equivocarse no es motivo para borrar el rastro: es la razón de que el rastro exista.

**¿Necesitamos un software especial para esto?**
No. Sirve una carpeta de archivos Markdown o Word en una unidad compartida, un espacio de wiki o un repositorio con control de versiones. Elija lo que su equipo ya abre a diario: la adopción fracasa mucho más a menudo por herramientas desconocidas que por la falta de una función.

**¿Puede ayudar un asistente de IA a redactarlos o revisarlos?**
Sí, y de forma productiva, de dos maneras: (1) redactando un primer borrador del contexto y las opciones consideradas a partir de notas de reunión o de una transcripción, para que quien decide lo corrija y lo finalice; (2) revisando un borrador con la [lista de verificación](../lista-de-verificacion/index.md) para detectar opciones que faltan, decisiones vagas o consecuencias que solo repiten el debate. Un asistente de IA nunca debería ser quien figure como responsable de la decisión: la responsabilidad sigue siendo de una persona o de un comité.

**¿No es esto simplemente burocracia?**
Se convierte en burocracia justo cuando se impone como papeleo a posteriori para decisiones ya tomadas y anunciadas. Sigue siendo valioso cuando lo usan como *herramienta de pensamiento* antes de una decisión las personas que realmente la toman. Véanse los [errores comunes](../guia/index.md#errores-comunes) en la guía.

**¿Cuántos registros de decisiones son demasiados?**
Si la gente deja de leer la bitácora, tiene fatiga de bitácora: está registrando decisiones fáciles de revertir o que afectaban a una sola persona. Limite los registros a elecciones realmente difíciles de revertir, transversales o con probabilidad de volver a examinarse. Véase la [lista de verificación](../lista-de-verificacion/index.md#lista-de-verificación-necesita-esta-decisión-un-registro-de-decisiones).

**A nuestro equipo no le gusta la palabra «arquitectura» o «registro»; ¿importa el nombre?**
No para la mecánica. Algunos equipos logran una adopción mucho más rápida con solo llamar a la carpeta `decisions/` en lugar de `decision-records/`: la misma plantilla funciona con cualquiera de los dos nombres. Use el que consiga que su equipo realmente lo ponga por escrito.

**¿Puede un registro de decisiones aplicarse a varias unidades de negocio?**
Sí, si la decisión es realmente compartida (p. ej., un proveedor para toda la empresa). Pero manténgalo en *una sola decisión*: si dos unidades de negocio en realidad toman dos elecciones distintas por dos motivos distintos, escriba dos registros y enlácelos como relacionados.

## Solución de problemas

| Síntoma | Causa probable | Solución |
|---|---|---|
| Los registros se acumulan para siempre en «solicitud de comentarios» | Sin plazo o sin quien decide nombrado | Añada ambos explícitamente; acepte por defecto si no hay objeciones en una fecha indicada |
| Nadie lee la bitácora | Demasiados registros de poca importancia; fatiga de bitácora | Aplique con más rigor la lista de verificación «¿necesita esto un registro?» |
| Los registros se leen como una lista de ventajas e inconvenientes, sin una decisión real | La sección Decisión se escribió antes de que la decisión se tomara de verdad | No publique la «Decisión» como definitiva hasta que quien decide haya decidido realmente |
| El equipo lo trata como papeleo y le molesta escribirlos | Se introdujo de arriba abajo como un mandato, o se usó solo a posteriori para justificar elecciones previas | Vuelva a presentarlo como una herramienta que el equipo elige porque le ahorra tiempo más adelante, empezando con un ejemplo claramente útil |
| Nadie encuentra los registros antiguos | No hay un lugar de almacenamiento compartido y duradero ni un índice | Cree un único lugar `decisions/` con una página de índice que enumere título, estado y fecha |
| Las decisiones se revierten en silencio sin que nadie lo note | No hay una convención de sustitución | Cuando una decisión cambie, escriba siempre un nuevo registro con estado `sustituido` que enlace hacia atrás |

## Glosario

* **Registro de decisiones (RD)**: un documento que recoge una elección significativa, su contexto, las opciones consideradas, la decisión y sus consecuencias.
* **Bitácora de decisiones (BD)**: la colección completa de registros de decisiones de un equipo, función u organización.
* **Registro de decisiones de arquitectura (ADR)**: el antecesor de este patrón específico del software, centrado en elecciones de tecnología y diseño.
* **Estado**: la etapa del ciclo de vida de una decisión: solicitud de comentarios, propuesta, aceptada, rechazada, obsoleta o sustituida.
* **Sustituido**: una decisión que ha sido reemplazada por otra más reciente; el registro antiguo permanece en la bitácora con un enlace hacia el nuevo, en lugar de eliminarse.
* **Requisito significativo**: una necesidad con un efecto medible en el sistema o la organización, el tipo de cosa que justifica escribir un registro de decisiones.
* **Gestión del conocimiento (KM)**: la disciplina más amplia a la que pertenecen los registros de decisiones: capturar el conocimiento institucional para que sobreviva a la memoria de cualquier persona.

## Adónde ir a continuación

* ¿Es nuevo en la práctica? Empiece con la [guía](../guia/index.md).
* ¿Listo para escribir uno? Siga el [tutorial](../tutorial/index.md).
* ¿Necesita una plantilla para copiar? Consulte [template/index.md](../plantilla/index.md).
* ¿Quiere ver primero uno de su ámbito? Explore [examples/index.md](../ejemplos/index.md).
* ¿Lo va a implantar en un equipo? Use la [lista de verificación](../lista-de-verificacion/index.md).
