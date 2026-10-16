# Registro de decisiones (RD)

Un registro de decisiones (RD) es una forma de iniciar, debatir y archivar una elección importante, junto con su contexto y sus consecuencias.

Contenido:

- [¿Qué es un registro de decisiones?](#qué-es-un-registro-de-decisiones)
- [Plantilla de registro de decisiones](#plantilla-de-registro-de-decisiones)
- [Cómo empezar a usar registros de decisiones](#cómo-empezar-a-usar-registros-de-decisiones)
- [¿Por qué son mejores los registros de decisiones que las simples notas?](#por-qué-son-mejores-los-registros-de-decisiones-que-las-simples-notas)
- [Cómo empezar a usar registros de decisiones con herramientas](#cómo-empezar-a-usar-registros-de-decisiones-con-herramientas)
- [Habilidades en IA](#habilidades-en-ia)
- [Sugerencias para escribir buenos registros de decisiones](#sugerencias-para-escribir-buenos-registros-de-decisiones)
- [Consejos de trabajo en equipo para los registros de decisiones](#consejos-de-trabajo-en-equipo-para-los-registros-de-decisiones)
- [Preguntas de trabajo en equipo para los registros de decisiones](#preguntas-de-trabajo-en-equipo-para-los-registros-de-decisiones)
- [Más información](#más-información)

Qué hay en este repositorio:

- [guía](guia): qué es un registro de decisiones, por qué lo usa la gente, ciclo de vida, gobernanza y más.
- [plantilla](plantilla): plantilla para copiar y pegar con formato Markdown y sugerencias paso a paso.
- [tutorial](tutorial): un recorrido práctico, paso a paso: escriba su primer registro de decisiones en menos de 20 minutos.
- [ejemplos](ejemplos): ejemplos desarrollados de decisiones de estrategia, ventas, marketing, producto, RR. HH., riesgo, proyectos y tecnología.
- [lista de verificación](lista-de-verificacion): listas de verificación para decidir si escribir uno, escribirlo bien, revisarlo y llevar la práctica a toda una organización.
- [ayuda](ayuda): preguntas frecuentes, solución de problemas y un glosario con las dudas habituales de los líderes al adoptar esto.
- [spec](https://github.com/decision-records/decision-records/tree/main/spec): la especificación de este repositorio: estructura, contenido, configuraciones regionales, sitio web y agentes.
- [locales](https://github.com/decision-records/decision-records/tree/main/locales): el contenido, un directorio por configuración regional; `en-us` es la fuente de verdad en inglés.
- [skills](https://github.com/decision-records/decision-records/tree/main/skills): habilidades de Claude que aplican las plantillas y listas de verificación de este repositorio en un asistente de IA: una para escribir un registro de decisiones y otra para mantener este repositorio.
- [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io): código fuente SvelteKit 3 de [decision-records.github.io](https://decision-records.github.io), que promociona las habilidades anteriores.

## ¿Qué es un registro de decisiones?

Un **registro de decisiones** (RD) es una forma de iniciar, debatir y archivar una elección importante, junto con su contexto y sus consecuencias.

Una **bitácora de decisiones** (BD) es la colección de todos los RD creados y mantenidos para un proyecto (u organización) concreto.

Una **decisión** en este contexto es la elección de una organización que responde a un requisito significativo.

Un **requisito significativo** (RS) es una necesidad de un proyecto que tiene un efecto medible en el sistema del proyecto.

Todos estos términos pertenecen al ámbito de la **gestión del conocimiento** (GC).

El objetivo de este documento es ofrecer una visión general rápida de los registros de decisiones.

## Los registros de decisiones son formas de trabajar para las organizaciones

Siempre que una elección sea difícil de revertir, afecte a otras personas o vaya a cuestionarse más adelante, merece un registro de decisiones.

- Estrategia: entrar en un mercado o salir de él, elegir entre una postura de crecimiento o de rentabilidad, fijar una apuesta a 3 años
- Ventas: cambiar el modelo de territorios, seleccionar un CRM, reestructurar la compensación
- Marketing: reposicionar una marca, elegir una mezcla de canales, escoger entre agencia o modelo interno
- Producto: fijar el modelo de precios, elegir entre construir o comprar, retirar una función o una línea de producto
- Finanzas: elegir una estructura de financiación, fijar una política de asignación de capital
- Recursos humanos: fijar una política de trabajo remoto, rediseñar los niveles y las bandas salariales
- Riesgo y legal: aceptar, mitigar o transferir un riesgo concreto; elegir un límite de concentración de proveedores
- Operaciones: construir o comprar, internalizar o externalizar, elegir una metodología de entrega
- Relaciones públicas: elegir una postura de comunicación en crisis, fijar una política de relación con los medios
- Desarrollo profesional: fijar una política de ascensos o de inversión en formación
- Tecnología: elegir la base de datos de un proveedor de nube, un patrón de integración, una metodología de software

Si puede imaginar a alguien de su equipo preguntando dentro de un año «un momento, ¿por qué lo hicimos así?», esa decisión es candidata a un registro de decisiones.

## Plantilla de registro de decisiones

Consulte nuestro archivo de [plantilla](plantilla/index.md), que usa estas secciones principales:

- **Título**: imperativo breve en presente de hasta 50 caracteres.

- **Estado**: solicitud de comentarios | propuesto | aceptado | rechazado | obsoleto | sustituido

- **Problema**: describa el problema que quiere abordar y no deje dudas sobre el porqué.

- **Supuestos**: describa cualquier supuesto, premisa, requisito entre proyectos, etc.

- **Restricciones**: recoja cualquier restricción del entorno que esta decisión pueda imponer.

- **Posiciones**: enumere las posibles opciones candidatas como hechos y datos, no como opiniones.

- **Opiniones**: del equipo y de las partes interesadas, y también de asesores y revisores externos.

- **Selección**: explique por qué eligió una posición, con propósito y responsabilidad.

- **Implicaciones**: exponga las implicaciones de su decisión, como cualquier necesidad de cambios.

- **Relacionado**: por ejemplo, referencias, trabajo entre proyectos y necesidades de seguimiento.

## Cómo empezar a usar registros de decisiones

Para empezar a usar registros de decisiones, hable con sus compañeros de equipo sobre estos ámbitos.

Identificación de decisiones:

- ¿Cómo de urgente y cómo de importante es la decisión?

- ¿Hay que tomarla ahora o puede esperar hasta saber más?

- Tanto la experiencia personal y colectiva como los métodos y prácticas de diseño reconocidos pueden ayudar a identificar decisiones.

- Idealmente, mantenga una lista de decisiones pendientes que complemente la lista de pendientes del producto.

Toma de decisiones:

- Existen varias técnicas de toma de decisiones, tanto generales como específicas del software, por ejemplo, el mapeo del diálogo.

- La toma de decisiones en grupo es un tema de investigación activo.

Promulgación y cumplimiento de las decisiones:

- Las decisiones deben comunicarse a las partes interesadas del sistema que lo financian, desarrollan y operan, y deben ser aceptadas por ellas.

- Los estilos de codificación arquitectónicamente evidentes y las revisiones de código centradas en las preocupaciones y decisiones arquitectónicas son dos prácticas relacionadas.

- Las decisiones pueden reconsiderarse al realizar cambios significativos en un sistema, como al evolucionarlo, actualizarlo o ajustarlo a requisitos cambiantes.

Compartir decisiones (opcional):

- Muchas decisiones se repiten en varios proyectos.

- Por ello, la experiencia con decisiones pasadas, buenas y malas, puede ser un activo reutilizable valioso al aplicar una estrategia explícita de gestión del conocimiento.

- La toma de decisiones en grupo es un tema de investigación activo.

Documentación de decisiones:

- Existen muchas plantillas y herramientas para planificar y capturar decisiones.

- Véanse las comunidades ágiles, p. ej., los registros de decisiones de arquitectura de M. Nygard.

- Véanse los procesos tradicionales de ingeniería de software y diseño de arquitectura, p. ej., los diseños de tabla sugeridos por IBM UMF y por Tyree y Akerman de CapitalOne.

Orientación sobre decisiones:

- Los pasos anteriores están adoptados de la entrada de Wikipedia sobre [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

- Existen varias técnicas de toma de decisiones, tanto generales como específicas del software y de la arquitectura de software, por ejemplo, el mapeo del diálogo.

## ¿Por qué son mejores los registros de decisiones que las simples notas?

Un registro de decisiones añade algo de estructura a las notas de formato libre.

Una plantilla de registro de decisiones añade una lista de elementos que cubrir, que funciona como lista de verificación.

El resultado importante es que los equipos pueden usar registros de decisiones y plantillas para mejorar el trabajo en equipo: ambos funcionan como listas de verificación que ayudan al equipo a asegurarse de cubrir todos los aspectos, y comunican de forma eficiente y eficaz.

Las ventajas de los registros de decisiones tienden a crecer con el tamaño del equipo, la expansión del proyecto, las oportunidades de integración, la participación de las partes interesadas, el mantenimiento a largo plazo y la evolución con el tiempo.

Por ejemplo, usamos registros de decisiones con equipos grandes, en varios departamentos, con varias organizaciones asociadas, en proyectos de varios años y con presupuestos de millones. Con este tamaño y alcance, preferimos usar cierta comunicación estructurada en lugar de notas de formato libre.

En la práctica, también nos gusta usar registros de decisiones porque fomentan una mayor participación de los compañeros remotos, más comunicación asincrónica, una evaluación más eficiente de las opciones y más síntesis a partir de ahí. Todos estos aspectos también ayudan a incorporar a nuevos compañeros porque las decisiones son claras, completas, concisas y quedan registradas.

## Cómo empezar a usar registros de decisiones con herramientas

Puede empezar a usar registros de decisiones con herramientas de la manera que quiera.

Por ejemplo:

- Si le gustan Google Drive y Google Docs, cree una carpeta `decisions` y un documento por registro de decisiones.

- Si le gusta el control de versiones del código fuente, cree un directorio `decisions` y un archivo de texto por registro de decisiones.

- Si le gustan las herramientas de planificación de proyectos, como Atlassian Jira, use el seguimiento de planificación de la herramienta.

- Si le gustan los wikis, como MediaWiki, cree un wiki de registros de decisiones, con una página de wiki por registro de decisiones.

## Habilidades en IA

Si usa [Claude Code](https://claude.com/claude-code) u otro agente compatible con las [habilidades de Claude](https://code.claude.com/docs/en/skills), este repositorio ofrece dos habilidades en IA en [skills](https://github.com/decision-records/decision-records/tree/main/skills):

- [decision-records-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-skill): para cualquiera que escriba un registro de decisiones. Guía sobre si una elección necesita uno, la elección entre la plantilla ligera o completa, su redacción, su archivo y la lista de verificación previa a la publicación.

- [decision-records-maintainer-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-maintainer-skill): para los mantenedores de este propio repositorio: añadir un ejemplo, mantener coherentes el índice de ejemplos y las referencias cruzadas, y las convenciones de archivos de este repositorio.

Para usar una, clone este repositorio y copie la carpeta de la habilidad que quiera en el lugar donde su agente carga las habilidades del proyecto (para Claude Code, normalmente `.claude/skills/<name>` en su propio proyecto); después pida a su asistente que la use. Véase [decision-records.github.io/skills](https://decision-records.github.io/skills/) para más información, y [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) para el código fuente de esa página.

## Sugerencias para escribir buenos registros de decisiones

Características de un buen registro de decisiones:

- Punto en el tiempo: identifique cuándo se tomó la decisión

- Racionalidad: explique el motivo de haber tomado la decisión concreta.

- Registro inmutable: las decisiones tomadas en un registro de decisiones ya publicado no deben alterarse.

- Especificidad: cada registro de decisiones debe tratar de una sola decisión.

Características de un buen contexto en un registro de decisiones:

- Explique la situación de su organización y sus prioridades de negocio

- Incluya la justificación y las consideraciones basadas en la composición social y de habilidades de sus equipos.

Características de unas buenas consecuencias en un registro de decisiones:

- Enfoque correcto: «Tenemos que empezar a hacer X en lugar de Y»

- Enfoque incorrecto: no explique la decisión en términos de «ventajas» e «inconvenientes» de haber tomado esa decisión concreta

Un nuevo registro de decisiones puede ocupar el lugar de uno anterior:

- Cuando se toma una decisión que sustituye o invalida un registro de decisiones previo, cree una decisión nueva y haga referencia a la antigua.

## Consejos de trabajo en equipo para los registros de decisiones

Si está pensando en usar registros de decisiones con su equipo, aquí tiene algunos consejos que hemos aprendido trabajando con muchos equipos.

Tiene la oportunidad de liderar a sus compañeros hablando juntos del «porqué», en lugar de imponer el «qué». Por ejemplo, los registros de decisiones son una forma de que los equipos piensen mejor y se comuniquen mejor; los registros de decisiones no tienen valor si son solo un requisito de papeleo forzado a posteriori.

Algunos equipos prefieren mucho el nombre «decisiones» a la abreviatura «registros de decisiones». Cuando algunos equipos usan el nombre de directorio «decisions», es como si se encendiera una bombilla y el equipo empieza a poner más información en el directorio, como decisiones de proveedores, decisiones de planificación, decisiones de calendario, etc. Todos estos tipos de información pueden usar la misma plantilla. Planteamos como hipótesis que las personas aprenden más rápido con palabras («decisiones») que con abreviaturas («registros de decisiones»), que están más motivadas para escribir documentos de trabajo en curso cuando se elimina la palabra «registro» y que, además, a algunos desarrolladores y gestores no les gusta la palabra «arquitectura».

En teoría, la inmutabilidad es ideal. En la práctica, la mutabilidad ha funcionado mejor para nuestros equipos. Insertamos la información nueva en el registro de decisiones existente, con una marca de fecha y una nota de que la información llegó después de la decisión. Este enfoque da lugar a un «documento vivo» que todos podemos actualizar. Las actualizaciones típicas se dan cuando obtenemos información gracias a nuevos compañeros, a nuevas ofertas o a resultados reales de nuestros usos, o tras cambios posteriores de terceros, como las capacidades de los proveedores, los planes de precios, los acuerdos de licencia, etc.

## Preguntas de trabajo en equipo para los registros de decisiones

### ¿Quién puede crear un registro de decisiones?

Considere ámbitos como personas concretas, roles concretos, equipos concretos o departamentos concretos; considere también si hay personas, roles, equipos o departamentos que puedan encargar un registro de decisiones, es decir, solicitar uno que escribirá otra persona.

Ejemplo de respuesta: cualquier persona de nuestra organización que haya leído la página README del registro de decisiones de arquitectura puede proponer un registro de decisiones, es decir, puede empezar a escribirlo y compartirlo con el equipo.

### ¿Qué justifica plantear un registro de decisiones?

Considere ámbitos como las formas de trabajo de equipo de su organización, la estructura de su sistema de software, la coordinación entre equipos, la mantenibilidad a largo plazo, las interfaces externas, a quién quiere beneficiar y similares.

Ejemplo de respuesta: queremos crear un registro de decisiones cuando queremos que los futuros desarrolladores entiendan el «porqué» de lo que hacemos.

### ¿Qué justifica no plantear un registro de decisiones?

Considere ámbitos como decisiones que no tratan de arquitectura, o que son minúsculas, como las de riesgo mínimo, autocontenidas o de un solo desarrollador, o que ya están totalmente cubiertas en otro lugar, como en estándares, políticas o documentación, o que son temporales, como soluciones provisionales, pruebas de concepto o experimentos.

Ejemplo de respuesta: queremos omitir un registro de decisiones cuando una decisión es limitada en alcance, tiempo, riesgo y coste, o ya está cubierta en otro lugar.

### ¿Cuál es el ciclo de vida de un registro de decisiones?

Considere ámbitos como el proceso de creación, el proceso de investigación, el proceso de decisión, el proceso de implantación y el proceso de retirada. Considere cómo hacer un seguimiento del ciclo de vida del registro de decisiones a lo largo del tiempo, por ejemplo, cómo pasar el registro de decisiones de un estado al siguiente y también cómo comunicarlo a las partes interesadas.

Ejemplo de respuesta: queremos que un registro de decisiones tenga cinco etapas de ciclo de vida: Iniciar → Investigar → Evaluar → Implantar → Mantener → Retirar.

### ¿Cuáles son los criterios para los pasos del ciclo de vida de un registro de decisiones?

Considere ámbitos como los criterios de aceptación de un registro de decisiones, es decir, ¿cómo sabe que es lo bastante bueno para avanzar de un paso del ciclo de vida al siguiente? ¿Está claramente formulado el problema? ¿Se han considerado las alternativas? ¿Se entienden y documentan suficientemente las compensaciones?
¿Está todo el contexto pertinente? ¿Participan todas las partes interesadas pertinentes? ¿Se han incorporado todos los comentarios?

Ejemplo de respuesta: queremos que las partes interesadas voten un registro de decisiones cuando el equipo activo haya 1) completado su investigación, 2) completado su evaluación, 3) publicado la propuesta de registro de decisiones a las partes interesadas con una solicitud de comentarios y un plazo de una semana, 4) incorporado y atendido todos los comentarios de las partes interesadas.

### ¿Qué roles y responsabilidades interactúan con un registro de decisiones?

Considere roles como proponente, investigador, evaluador, revisor, aprobador, mantenedor y similares. Considere responsabilidades como la comunicación con las partes interesadas, asegurar que se cumplen las expectativas, compartir en el sitio web o en la intranet y revisar el trabajo periódicamente y, en especial, cuando se produzcan cambios relevantes.

Ejemplo de respuesta: queremos que cada registro de decisiones tenga siempre una persona de contacto principal, una persona de contacto secundaria y un equipo responsable; estos se encargan de las comunicaciones, las publicaciones, el mantenimiento, la revisión periódica al menos una vez al año y la eventual retirada cuando sea necesario.

### ¿Cómo interactúa la gobernanza con un registro de decisiones?

Considere ámbitos como las formas de trabajo de su organización, cualquier necesidad especial de cumplimiento, por ejemplo en aspectos legales o de recursos humanos, y cómo quiere tratar el consenso frente al conflicto frente a la escalada. ¿Hay áreas, personas o equipos que puedan tener más influencia que otros en un registro de decisiones, por ejemplo, poder aprobarlo, votarlo o vetarlo?

Ejemplo de respuesta: la gobernanza de un registro de decisiones sigue este orden de prioridad: el CEO, el CTO, el director jurídico, el equipo que implementa un registro de decisiones y los expertos del equipo que mejor conocen el registro. Nadie más tiene gobernanza salvo que se describa en el registro de decisiones.

### ¿Qué principios interactúan con un registro de decisiones?

Considere ámbitos como las formas de trabajo de su organización, que incluyen moverse rápido o despacio, el consenso frente al conflicto en las decisiones, las preferencias de riesgo frente a las de seguridad, la discusión pública frente a la privada y similares.

Ejemplo de respuesta: usamos los principios de liderazgo de sesgo hacia la acción, discrepar y comprometerse, que unas estimaciones del 70 % son suficientemente buenas para decisiones fácilmente reversibles y fácilmente aislables, y formas de trabajo públicas con la excepción de la información confidencial según lo descrito en el acuerdo de confidencialidad de nuestra organización.

## Más información

Introducción:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Plantillas:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

En profundidad:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/): lección mensual gratuita de arquitectura de software

Herramientas:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

Guías específicas de empresas:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Ejemplos:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Vídeos:

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Pódcast:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)
