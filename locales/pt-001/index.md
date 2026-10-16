# Registro de decisão (RD)

Um registro de decisão (RD) é uma forma de iniciar, debater e arquivar uma escolha importante, junto com seu contexto e suas consequências.

Conteúdo:

- [O que é um registro de decisão?](#o-que-é-um-registro-de-decisão)
- [Modelo de registro de decisão](#modelo-de-registro-de-decisão)
- [Como começar a usar registros de decisão](#como-começar-a-usar-registros-de-decisão)
- [Por que os registros de decisão são melhores do que simples anotações?](#por-que-os-registros-de-decisão-são-melhores-do-que-simples-anotações)
- [Como começar a usar registros de decisão com ferramentas](#como-começar-a-usar-registros-de-decisão-com-ferramentas)
- [Skills de IA](#skills-de-ia)
- [Sugestões para escrever bons registros de decisão](#sugestões-para-escrever-bons-registros-de-decisão)
- [Conselhos de trabalho em equipe para registros de decisão](#conselhos-de-trabalho-em-equipe-para-registros-de-decisão)
- [Perguntas de trabalho em equipe para registros de decisão](#perguntas-de-trabalho-em-equipe-para-registros-de-decisão)
- [Para mais informações](#para-mais-informações)

O que há neste repositório:

- [guia](guia) - o que é um registro de decisão, por que as pessoas o usam, ciclo de vida, governança e muito mais.
- [modelo](modelo) - modelo para copiar e colar, com formatação Markdown e sugestões passo a passo.
- [tutorial](tutorial) - um passo a passo prático: escreva o seu primeiro registro de decisão em menos de 20 minutos.
- [exemplos](exemplos) - exemplos como pontos de partida (trabalhos em andamento, não decisões finalizadas) em decisões de estratégia, vendas, marketing, produto, RH, risco, projetos e tecnologia.
- [lista de verificação](lista-de-verificacao): listas para decidir se vale escrever um, escrevê-lo bem, revisá-lo e conduzir a prática em toda uma organização.
- [ajuda](ajuda) — perguntas frequentes, solução de problemas e um glossário com as dúvidas comuns que os líderes levantam ao adotar isto.
- [spec](https://github.com/decision-records/decision-records/tree/main/spec) — a especificação deste repositório: estrutura, conteúdo, locales, site e agentes.
- [locales](https://github.com/decision-records/decision-records/tree/main/locales) — o conteúdo, um diretório por locale; `en-us` é a fonte de verdade em inglês.
- [skills](https://github.com/decision-records/decision-records/tree/main/skills) — Claude Skills que aplicam os modelos e as listas de verificação deste repositório dentro de um assistente de IA: uma para escrever um registro de decisão, outra para manter este repositório.
- [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) — código-fonte em SvelteKit 3 de [decision-records.github.io](https://decision-records.github.io), que promove as skills acima.

## O que é um registro de decisão?

Um **registro de decisão** (RD) é uma forma de iniciar, debater e arquivar uma escolha importante, junto com seu contexto e suas consequências.

Um **histórico de decisões** (HD) é a coleção de todos os RDs criados e mantidos para um determinado projeto (ou organização).

Uma **decisão**, neste contexto, é a escolha de uma organização que atende a um requisito significativo.

Um **requisito significativo** (RS) é uma necessidade de um projeto que tem efeito mensurável sobre o sistema do projeto.

Todos esses termos pertencem ao tema da **gestão do conhecimento** (GC).

O objetivo deste documento é oferecer uma visão geral rápida dos registros de decisão.

## Registros de decisão são formas de trabalhar para organizações

Sempre que uma escolha é difícil de reverter, afeta outras pessoas ou será questionada mais tarde, ela merece um registro de decisão.

- Estratégia: entrar em um mercado ou sair dele, escolher entre crescimento e rentabilidade, definir uma aposta de 3 anos
- Vendas: mudar o modelo de territórios, selecionar um CRM, reestruturar a remuneração
- Marketing: reposicionar uma marca, escolher o mix de canais, optar entre agência e equipe interna
- Produto: definir o modelo de preços, escolher entre construir e comprar, descontinuar um recurso ou linha de produtos
- Finanças: escolher uma estrutura de financiamento, definir uma política de alocação de capital
- Recursos Humanos: definir uma política de trabalho remoto, redesenhar níveis e faixas salariais
- Risco e Jurídico: aceitar, mitigar ou transferir um risco específico; escolher um limite de concentração de fornecedores
- Operações: construir ou comprar, internalizar ou terceirizar, escolher uma metodologia de entrega
- Relações Públicas: escolher uma postura de comunicação em crises, definir uma política de relacionamento com a mídia
- Desenvolvimento Profissional: definir uma política de promoção ou de investimento em treinamento
- Tecnologia: escolher o banco de dados de um provedor de nuvem, um padrão de integração, uma metodologia de software

Se você consegue imaginar alguém da sua equipe perguntando "espera, por que fizemos assim?" daqui a um ano, essa decisão é candidata a um registro de decisão.

## Modelo de registro de decisão

Veja o nosso arquivo de [modelo](modelo/index.md), que usa estas seções principais:

- **Título**: imperativo curto no presente, com até 50 caracteres.

- **Status**: pedido de comentários | proposta | aceita | rejeitada | obsoleta | substituída

- **Problema**: descreva o problema que você quer resolver e não deixe dúvidas sobre o porquê.

- **Premissas**: descreva quaisquer premissas, pressupostos, requisitos entre projetos etc.

- **Restrições**: registre quaisquer restrições ao ambiente que esta decisão possa impor.

- **Posições**: liste os candidatos potenciais como fatos e dados, não como opiniões.

- **Opiniões**: da equipe e das partes interessadas, e também de consultores e revisores independentes.

- **Seleção**: explique por que você escolheu uma posição, com propósito e responsabilização.

- **Implicações**: declare as implicações da sua decisão, como qualquer necessidade de mudanças.

- **Relacionados**: como referências, trabalho entre projetos e necessidades decorrentes.

## Como começar a usar registros de decisão

Para começar a usar registros de decisão, converse com os colegas sobre estas áreas.

Identificação da decisão:

- Quão urgente e quão importante é a decisão?

- Ela precisa ser tomada agora ou pode esperar até que se saiba mais?

- Tanto a experiência pessoal e coletiva quanto métodos e práticas de design reconhecidos podem ajudar na identificação da decisão.

- O ideal é manter uma lista de decisões a tomar, que complemente a lista de tarefas do produto.

Tomada de decisão:

- Existem várias técnicas de tomada de decisão, tanto gerais quanto específicas de software, por exemplo, o mapeamento de diálogo.

- A tomada de decisão em grupo é um tema de pesquisa ativo.

Execução e cumprimento da decisão:

- As decisões precisam ser comunicadas às partes interessadas do sistema que o financiam, desenvolvem e operam, e por elas aceitas.

- Estilos de codificação arquiteturalmente evidentes e revisões de código focadas em questões e decisões arquiteturais são duas práticas relacionadas.

- As decisões podem ser reconsideradas diante de mudanças significativas num sistema, como evoluí-lo, atualizá-lo ou ajustá-lo a requisitos em mudança.

Compartilhamento de decisões (opcional):

- Muitas decisões se repetem entre projetos.

- Assim, as experiências com decisões passadas, boas e ruins, podem ser ativos reutilizáveis valiosos ao empregar uma estratégia explícita de gestão do conhecimento.

- A tomada de decisão em grupo é um tema de pesquisa ativo.

Documentação da decisão:

- Existem muitos modelos e ferramentas para planejar e registrar decisões.

- Veja as comunidades ágeis, por exemplo, os registros de decisão arquitetural de M. Nygard.

- Veja os processos tradicionais de engenharia de software e de design de arquitetura, por exemplo, os layouts de tabela sugeridos pelo IBM UMF e por Tyree e Akerman, da CapitalOne.

Orientação para decisões:

- Os passos acima foram adaptados do verbete da Wikipédia sobre [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

- Existem várias técnicas de tomada de decisão, tanto gerais quanto específicas de software e de arquitetura de software, por exemplo, o mapeamento de diálogo.

## Por que os registros de decisão são melhores do que simples anotações?

Um registro de decisão acrescenta alguma estrutura a anotações livres.

Um modelo de registro de decisão acrescenta uma lista de itens a cobrir, que funciona como uma lista de verificação.

O resultado importante é que as equipes podem usar registros de decisão e modelos para melhorar o trabalho em equipe: ambos funcionam como listas de verificação, ajudando a equipe a garantir que cobriu todos os pontos e a se comunicar de forma eficiente e eficaz.

As vantagens dos registros de decisão tendem a crescer com o tamanho da equipe, a expansão do projeto, as oportunidades de integração, o envolvimento das partes interessadas, a manutenção de longo prazo e a evolução ao longo do tempo.

Por exemplo, usamos registros de decisão com equipes grandes, em vários departamentos, com várias organizações parceiras, em projetos de vários anos e orçamentos de milhões. Com esse tamanho e escopo, preferimos algum tipo de comunicação estruturada a simples anotações livres.

Na prática, também gostamos de registros de decisão porque eles estimulam mais participação de colegas remotos, mais comunicação assíncrona, uma avaliação mais eficiente das opções e mais sínteses daqui para a frente. Todos esses aspectos também ajudam a integrar novos colegas, porque as decisões ficam claras, completas, sucintas e registradas.

## Como começar a usar registros de decisão com ferramentas

Você pode começar a usar registros de decisão com ferramentas do jeito que quiser.

Por exemplo:

- Se você gosta do Google Drive e do Google Docs, crie uma pasta `decisions` e um documento por registro de decisão.

- Se você gosta do controle de versão de código-fonte, crie um diretório `decisions` e um arquivo de texto por registro de decisão.

- Se você gosta de ferramentas de planejamento de projetos, como o Atlassian Jira, use o rastreador de planejamento da ferramenta.

- Se você gosta de wikis, como o MediaWiki, crie uma wiki de registros de decisão, com uma página de wiki por registro de decisão.

## Skills de IA

Se você usa o [Claude Code](https://claude.com/claude-code) ou outro agente que suporte as [Claude Skills](https://code.claude.com/docs/en/skills), este repositório traz duas skills de IA em [skills](https://github.com/decision-records/decision-records/tree/main/skills):

- [decision-records-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-skill) — para quem escreve um registro de decisão. Percorre se uma escolha precisa de um, a escolha entre o modelo leve ou o detalhado, a redação, o arquivamento e a lista de verificação de pré-publicação.

- [decision-records-maintainer-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-maintainer-skill) — para quem mantém este próprio repositório: adicionar um exemplo prático, manter consistentes o índice de exemplos e as referências cruzadas, e as convenções de arquivos deste repositório.

Para usar uma delas, clone este repositório e copie a pasta da skill desejada para onde o seu agente carrega as skills do projeto (no Claude Code, normalmente `.claude/skills/<nome>` no seu próprio projeto) — depois peça ao seu assistente que a use. Veja [decision-records.github.io/skills](https://decision-records.github.io/skills/) para mais, e [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) para o código-fonte dessa página.

## Sugestões para escrever bons registros de decisão

Características de um bom registro de decisão:

- Ponto no tempo - Identifique quando a decisão foi tomada

- Racionalidade - Explique o motivo de tomar a decisão específica.

- Registro imutável - As decisões tomadas em um registro de decisão já publicado não devem ser alteradas.

- Especificidade - Cada registro de decisão deve tratar de uma única decisão.

Características de um bom contexto em um registro de decisão:

- Explique a situação da sua organização e as prioridades de negócio

- Inclua justificativas e considerações baseadas na composição social e de habilidades das suas equipes.

Características de boas consequências em um registro de decisão:

- Abordagem certa - "Precisamos começar a fazer X em vez de Y"

- Abordagem errada - Não explique a decisão em termos de "prós" e "contras" de ter tomado a decisão específica

Um novo registro de decisão pode substituir um registro anterior:

- Quando uma decisão é tomada para substituir ou invalidar um registro de decisão anterior, crie uma nova decisão e referencie a antiga.

## Conselhos de trabalho em equipe para registros de decisão

Se você está pensando em usar registros de decisão com a sua equipe, eis alguns conselhos que aprendemos trabalhando com muitas equipes.

Você tem a oportunidade de liderar os colegas conversando em conjunto sobre o "porquê", em vez de impor o "quê". Por exemplo, os registros de decisão são uma forma de as equipes pensarem melhor e se comunicarem melhor; não têm valor se forem apenas uma exigência de papelada forçada depois do fato.

Algumas equipes preferem muito mais o nome "decisões" à expressão "registros de decisão". Quando algumas equipes usam o nome de diretório "decisions", é como se uma lâmpada se acendesse, e a equipe passa a colocar mais informações no diretório, como decisões de fornecedores, de planejamento, de cronograma etc. Todos esses tipos de informação podem usar o mesmo modelo. Nossa hipótese é que as pessoas aprendem mais rápido com palavras ("decisões") do que com expressões ("registros de decisão"), que ficam mais motivadas a escrever documentos em andamento quando a palavra "registro" é removida, e que alguns desenvolvedores e gerentes não gostam da palavra "arquitetura".

Em teoria, a imutabilidade é o ideal. Na prática, a mutabilidade funcionou melhor para as nossas equipes. Inserimos a nova informação no registro de decisão existente, com uma data e uma nota de que a informação chegou depois da decisão. Essa abordagem leva a um "documento vivo" que todos podemos atualizar. As atualizações típicas ocorrem quando recebemos informação graças a novos colegas, novas ofertas, resultados reais do nosso uso ou mudanças de terceiros depois do fato, como capacidades de fornecedores, planos de preços, contratos de licença etc.

</div>

## Perguntas de trabalho em equipe para registros de decisão

### Quem pode criar um registro de decisão?

Considere áreas como pessoas específicas, papéis específicos, equipes específicas ou departamentos específicos; considere também se há pessoas, papéis, equipes ou departamentos que possam encomendar um registro de decisão, ou seja, solicitar um que outra pessoa vai redigir.

Exemplo de resposta: Qualquer pessoa da nossa organização que tenha lido a página README de registros de decisão de arquitetura pode propor um registro de decisão, ou seja, pode começar a escrevê-lo e compartilhá-lo com a equipe.

### O que justifica abrir um registro de decisão?

Considere áreas como as formas de trabalhar das equipes da sua organização, a estrutura do seu sistema de software, a coordenação entre equipes, a manutenibilidade de longo prazo, as interfaces externas, quem você quer beneficiar e assim por diante.

Exemplo de resposta: Queremos criar um registro de decisão quando queremos que os desenvolvedores futuros entendam o "porquê" do que estamos fazendo.

### O que justifica não abrir um registro de decisão?

Considere áreas como decisões que não são sobre arquitetura, ou são minúsculas, como as de risco mínimo, autocontidas ou de um só desenvolvedor, ou já estão totalmente cobertas em outro lugar, como por padrões, políticas ou documentação, ou são temporárias, como paliativos, provas de conceito ou experimentos.

Exemplo de resposta: Queremos dispensar um registro de decisão quando uma decisão é limitada em escopo, tempo, risco e custo, ou já está coberta em outro lugar.

### Qual é o ciclo de vida de um registro de decisão?

Considere áreas como o processo de criação, o de pesquisa, o de decisão, o de implementação e o de encerramento. Considere como acompanhar o ciclo de vida do registro de decisão ao longo do tempo, como mover o registro de um estado para o seguinte e como comunicar isso às partes interessadas.

Exemplo de resposta: Queremos que um registro de decisão tenha cinco etapas de ciclo de vida: Iniciar → Pesquisar → Avaliar → Implementar → Manter → Encerrar.

### Quais são os critérios para as etapas do ciclo de vida de um registro de decisão?

Considere áreas como os critérios de aceitação de um registro de decisão, ou seja, como saber se ele está bom o bastante para avançar de uma etapa do ciclo de vida para a seguinte? O problema está claramente articulado? As alternativas foram consideradas? Os trade-offs estão bem compreendidos e documentados?
Todo o contexto relevante está presente? Todas as partes interessadas relevantes estão envolvidas? Todo o retorno foi incorporado?

Exemplo de resposta: Queremos que um registro de decisão seja votado pelas partes interessadas quando a equipe ativa tiver 1) concluído a pesquisa, 2) concluído a avaliação, 3) publicado a proposta de registro de decisão para as partes interessadas com um pedido de comentários e um prazo de uma semana, 4) incorporado e tratado todos os comentários das partes interessadas.

### Quais papéis e responsabilidades interagem com um registro de decisão?

Considere papéis como proponente, pesquisador, avaliador, revisor, aprovador, mantenedor e afins. Considere responsabilidades como a comunicação com as partes interessadas, garantir que as expectativas sejam atendidas, compartilhar no site ou na intranet e revisar o trabalho periodicamente e especialmente quando ocorrerem mudanças relevantes.

Exemplo de resposta: Queremos que cada registro de decisão tenha sempre uma pessoa de contato principal, uma pessoa de contato secundária e uma equipe responsável; elas respondem pelas comunicações, publicações, manutenção, revisão periódica pelo menos uma vez por ano e pelo eventual encerramento, quando necessário.

### Como a governança interage com um registro de decisão?

Considere áreas como as formas de trabalhar da sua organização, quaisquer necessidades especiais de conformidade, como aspectos legais ou de recursos humanos, e como você quer lidar com consenso versus conflito versus escalonamento. Há áreas, pessoas ou equipes que podem ter mais influência do que outras sobre um registro de decisão, como poder aprová-lo, votá-lo ou vetá-lo?

Exemplo de resposta: A governança de um registro de decisão segue esta ordem de prioridade: o CEO, o CTO, o diretor jurídico, a equipe que implementa o registro de decisão, os especialistas da equipe que mais conhecem o assunto. Ninguém mais tem governança, a menos que isso esteja descrito no registro de decisão.

### Quais princípios interagem com um registro de decisão?

Considere áreas como as formas de trabalhar da sua organização que incluem agir rápido versus devagar, consenso versus conflito nas decisões, preferências de risco versus preferências de segurança, discussão pública versus privada e afins.

Exemplo de resposta: Usamos os princípios de liderança de viés para a ação, discordar e comprometer-se, estimativas de 70% são suficientes para decisões facilmente reversíveis e isoláveis, e formas de trabalhar públicas, com a exceção das informações confidenciais descritas no acordo de confidencialidade da nossa organização.

## Para mais informações

Introdução:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Modelos:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Aprofundamento:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - free monthly software architecture lesson

Ferramentas:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

Orientações de empresas:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Exemplos:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Vídeos:

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcasts:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Livros:

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

Veja também:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework
