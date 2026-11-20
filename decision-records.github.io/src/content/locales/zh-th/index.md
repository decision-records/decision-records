# 决策记录（DR）

决策记录（DR）是发起、辩论并归档一项重要选择及其背景和后果的一种方式。

目录：

- [什么是决策记录？](#什么是决策记录)
- [决策记录模板](#决策记录模板)
- [如何开始使用决策记录](#如何开始使用决策记录)
- [为什么决策记录比单纯的笔记更好？](#为什么决策记录比单纯的笔记更好)
- [如何借助工具开始使用决策记录](#如何借助工具开始使用决策记录)
- [AI 技能](#ai-技能)
- [撰写优质决策记录的建议](#撰写优质决策记录的建议)
- [决策记录的团队协作建议](#决策记录的团队协作建议)
- [决策记录的团队协作问题](#决策记录的团队协作问题)
- [更多信息](#更多信息)

本仓库包含：

- [指南](指南)：什么是决策记录、人们为什么使用它、生命周期、治理等等。
- [模板](模板)：可复制粘贴的模板，带有 Markdown 格式和分步建议。
- [教程](教程)：动手的分步演练，在 20 分钟内写出你的第一份决策记录。
- [示例](示例)：涵盖战略、销售、营销、产品、人力资源、风险、项目和技术决策的起点示例（进行中的工作，而非最终决策）。
- [检查清单](检查清单)：用于判断是否需要写一份、如何写好、如何评审，以及如何在整个组织中运行这项实践的检查清单。
- [帮助](帮助)：领导者在采用时常提出的问题的常见问题解答、故障排查和术语表。
- [spec](https://github.com/decision-records/decision-records/tree/main/spec)：本仓库的规范：布局、内容、语言区域、网站和智能体。
- [locales](https://github.com/decision-records/decision-records/tree/main/locales)：内容，每个语言区域一个目录；`en-us` 是英文的权威源。
- [skills](https://github.com/decision-records/decision-records/tree/main/skills)：在 AI 助手中应用本仓库的模板和检查清单的 Claude 技能：一个用于撰写决策记录，一个用于维护本仓库。
- [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io)：[decision-records.github.io](https://decision-records.github.io) 的 SvelteKit 3 源码，该网站介绍上述技能。

## 什么是决策记录？

**决策记录**（DR）是发起、辩论并归档一项重要选择及其背景和后果的一种方式。

**决策日志**（DL）是为某个特定项目（或组织）创建和维护的全部决策记录的汇编。

在此语境下，**决策**是组织针对某项重要需求所做出的选择。

**重要需求**（SR）是项目中对项目系统有可衡量影响的需要。

所有这些术语都属于**知识管理**（KM）这一主题。

本文档的目标是对决策记录做一个快速概览。

## 决策记录是组织的工作方式

凡是难以撤销、会影响他人或日后会被质疑的选择，都值得写一份决策记录。

- 战略：进入或退出某个市场、在增长与盈利之间选择姿态、设定三年期的押注
- 销售：改变区域模式、选择 CRM、重构薪酬
- 营销：重新定位品牌、选择渠道组合、在外包机构与内部团队之间做选择
- 产品：设定定价模式、选择自建还是外购、停止某项功能或产品线
- 财务：选择融资结构、制定资本配置政策
- 人力资源：制定远程办公政策、重新设计职级和薪酬带宽
- 风险与法务：接受、缓解或转移某项具体风险；选择供应商集中度上限
- 运营：自建还是外购、内包还是外包、选择交付方法
- 公共关系：选择危机沟通姿态、制定媒体互动政策
- 专业发展：制定晋升或培训投入政策
- 技术：选择云服务商数据库、集成模式、软件方法

如果你能想象一年后团队里有人问“等等，我们当初为什么这样做？”，那么这项决策就适合写一份决策记录。

## 决策记录模板

请参阅我们的[模板](模板/index.md)文件，它使用下列主要部分：

- **标题**：简短的现在时祈使句，最多 50 个字符。

- **状态**：征求意见 | 已提议 | 已接受 | 已否决 | 已弃用 | 已被取代

- **问题**：描述你想要解决的问题，不要让人对原因留有疑问。

- **假设**：描述任何假设、前提、跨项目需求等。

- **约束**：记录这项决策可能给环境带来的任何约束。

- **立场**：以事实和数据而不是意见的方式列出潜在的候选方案。

- **意见**：来自团队和利益相关方，也包括第三方顾问和评审人员。

- **选择**：说明你为什么选择某个立场，并体现目的和问责。

- **影响**：陈述你的决策的影响，例如是否需要变更。

- **相关**：例如参考资料、跨项目工作和后续需求。

## 如何开始使用决策记录

要开始使用决策记录，请与你的队友就下列方面进行讨论。

决策识别：

- 这项决策有多紧急、多重要？

- 它必须现在就做出，还是可以等到了解更多信息之后？

- 个人和集体的经验，以及公认的设计方法和实践，都有助于决策识别。

- 最好维护一份决策待办清单，作为产品待办清单的补充。

决策制定：

- 存在许多决策制定技术，既有通用的，也有针对软件的，例如对话映射。

- 群体决策是一个活跃的研究课题。

决策的实施与执行：

- 决策必须传达给出资、开发和运营该系统的利益相关方，并得到他们的接受。

- 体现架构的编码风格，以及关注架构问题和决策的代码评审，是两项相关的实践。

- 在对系统做出重大变更时，例如系统演进、升级或为适应需求变化而调整，可以重新考虑决策。

决策共享（可选）：

- 许多决策会在不同项目中反复出现。

- 因此，在采用明确的知识管理策略时，过去决策的经验，无论好坏，都可以成为有价值的可复用资产。

- 群体决策是一个活跃的研究课题。

决策文档化：

- 存在许多用于决策规划和决策记录的模板和工具。

- 参见敏捷社区，例如 M. Nygard 的架构决策记录。

- 参见传统的软件工程和架构设计流程，例如 IBM UMF 以及 CapitalOne 的 Tyree 和 Akerman 所建议的表格布局。

决策指引：

- 上述步骤取自维基百科词条 [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

- 存在许多决策制定技术，既有通用的，也有针对软件和软件架构的，例如对话映射。

## 为什么决策记录比单纯的笔记更好？

决策记录为自由格式的笔记增添了一些结构。

决策记录模板增加了一份需要涵盖的事项清单，起到检查清单的作用。

重要的结果是，团队可以使用决策记录和模板来改善团队协作：决策记录和模板都起到检查清单的作用，帮助团队确保面面俱到，并高效而有效地沟通。

决策记录的优势往往会随着团队规模、项目扩展、集成机会、利益相关方的参与、长期维护以及随时间的演进而增强。

例如，我们在大型团队中、跨多个部门、与多个合作组织一起、在多年期项目中以及在百万级预算的项目中使用决策记录。在这样的规模和范围下，我们更倾向于使用某种结构化的沟通，而不是单纯的自由格式笔记。

在实践中，我们也喜欢使用决策记录，因为它们鼓励远程队友更多地参与、更多的异步沟通、更高效的方案评估，以及今后更多的总结。所有这些方面也有助于新队友入职，因为决策清晰、完整、简明并有记录。

## 如何借助工具开始使用决策记录

你可以按自己喜欢的任何方式借助工具开始使用决策记录。

例如：

- 如果你喜欢 Google Drive 和 Google Docs，那就创建一个 `decisions` 文件夹，每份决策记录一个文档。

- 如果你喜欢源代码版本控制，那就创建一个 `decisions` 目录，每份决策记录一个文本文件。

- 如果你喜欢项目规划工具，例如 Atlassian Jira，那就使用该工具的规划跟踪器。

- 如果你喜欢维基，例如 MediaWiki，那就创建一个决策记录维基，每份决策记录一个维基页面。

## AI 技能

如果你使用 [Claude Code](https://claude.com/claude-code) 或其他支持 [Claude 技能](https://code.claude.com/docs/en/skills)的智能体，本仓库在 [skills](https://github.com/decision-records/decision-records/tree/main/skills) 中提供了两项 AI 技能：

- [decision-records-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-skill)：面向任何撰写决策记录的人。引导判断一项选择是否需要记录、选择轻量模板还是完整模板、起草、归档，以及发布前的检查清单。

- [decision-records-maintainer-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-maintainer-skill)：面向本仓库本身的维护者：添加实例、保持示例索引和交叉引用一致，以及本仓库的文件约定。

要使用其中一项，请克隆本仓库，并把你想要的技能文件夹复制到你的智能体加载项目技能的位置（对于 Claude Code，通常是你自己项目中的 `.claude/skills/<name>`），然后请你的助手使用它。更多内容请参阅 [decision-records.github.io/skills](https://decision-records.github.io/skills/)，该页面的源码见 [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io)。

## 撰写优质决策记录的建议

优质决策记录的特征：

- 时间点：写明决策是何时做出的

- 合理性：说明做出该特定决策的理由。

- 不可变的记录：已发布的决策记录中所做的决策不应被更改。

- 具体性：每份决策记录应只关于一项决策。

决策记录中优质背景的特征：

- 说明你的组织的情况和业务优先事项

- 包含基于团队的社会构成和技能构成的理由与考虑。

决策记录中优质后果的特征：

- 正确的做法：“我们需要开始做 X 而不是 Y”

- 错误的做法：不要用做出该特定决策的“优点”和“缺点”来解释这项决策

新的决策记录可以取代先前的决策记录：

- 当做出的决策取代或使先前的决策记录失效时，请创建一项新的决策，并引用旧的决策。

## 决策记录的团队协作建议

如果你正在考虑与你的团队一起使用决策记录，那么这里有一些我们在与许多团队合作中学到的建议。

你有机会通过与队友一起讨论“为什么”，而不是强制规定“做什么”，来引领你的队友。例如，决策记录是团队更聪明地思考、更好地沟通的一种方式；如果它们只是事后强制的文书工作要求，决策记录就没有价值。

有些团队更喜欢“决策”这个名称，而不是缩写“决策记录”。当一些团队使用目录名 `decisions` 时，就好像一盏灯泡亮了起来，团队开始往这个目录里放入更多信息，例如供应商决策、规划决策、排期决策等等。所有这些类型的信息都可以使用同一个模板。我们推测，人们用词语（“决策”）比用缩写（“决策记录”）学得更快，去掉“记录”一词后，人们更有动力撰写进行中的文档，而且一些开发者和一些管理者不喜欢“架构”这个词。

在理论上，不可变性是理想的。在实践中，可变性对我们的团队效果更好。我们把新信息插入现有的决策记录中，并加上日期戳，以及一条说明该信息是在决策之后才获得的备注。这种做法形成了一份我们都可以更新的“活文档”。典型的更新包括：由于新队友、新产品、使用中的真实结果而获得信息，或事后的第三方变化，例如供应商能力、定价方案、许可协议等。

## 决策记录的团队协作问题

### 谁可以创建决策记录？

考虑特定的人、特定的角色、特定的团队、特定的部门等方面；还要考虑是否有人、角色、团队或部门可以委托撰写决策记录，也就是由他们提出请求，由其他人来撰写。

示例答案：我们组织中任何阅读过架构决策记录 README 页面的人都可以提议一份决策记录，也就是说，这个人可以开始撰写，并与团队分享。

### 什么情况下值得提出决策记录？

考虑诸如你的组织的团队工作方式、你的软件系统结构、跨团队协调、长期可维护性、外部接口、你希望谁受益等方面。

示例答案：当我们希望未来的开发者理解我们所做事情的“为什么”时，我们就想创建一份决策记录。

### 什么情况下不值得提出决策记录？

考虑诸如与架构无关的决策，或微小的决策（例如风险极低、自成一体或仅涉及单个开发者），或已被其他地方（例如标准、政策或文档）完全涵盖的决策，或临时性的决策（例如变通办法、概念验证或实验）。

示例答案：当一项决策在范围、时间、风险和成本上都有限，或已被其他地方涵盖时，我们希望跳过决策记录。

### 决策记录的生命周期是什么？

考虑诸如创建流程、调研流程、决策流程、实施流程和终止流程等方面。考虑如何随时间跟踪决策记录的生命周期，例如如何把决策记录从一个状态推进到下一个状态，以及如何向利益相关方传达这一点。

示例答案：我们希望决策记录有五个生命周期阶段：发起 → 调研 → 评估 → 实施 → 维护 → 终止。

### 决策记录生命周期各步骤的标准是什么？

考虑诸如决策记录的验收标准等方面，也就是说，你如何知道它已经足够好，可以从一个生命周期步骤进入下一个？问题是否表述清楚？是否考虑过各备选方案？权衡是否被充分理解并记录？
所有相关背景是否齐备？所有相关的利益相关方是否都参与了？所有反馈是否都已纳入？

示例答案：当活跃团队 1）完成了调研，2）完成了评估，3）向利益相关方发布了决策记录提案，请求意见并设置一周的时间盒，4）所有利益相关方的意见都已纳入并处理之后，我们希望由利益相关方对决策记录进行表决。

### 哪些角色和职责与决策记录相关？

考虑诸如提议人、调研人、评估人、评审人、批准人、维护人等角色。考虑诸如与利益相关方沟通、确保满足期望、在网站或内部网上分享，以及定期复审工作（尤其是在相关变化发生时）等职责。

示例答案：我们希望每份决策记录始终有一位主要联系人、一位次要联系人和一个负责团队；他们负责沟通、发布、维护、至少每年一次的定期复审，以及必要时的最终终止。

### 治理如何与决策记录相互作用？

考虑诸如你的组织的工作方式、任何特殊的合规需求（例如法律方面或人力资源方面），以及你希望如何处理共识、冲突与升级。是否存在某些领域、人员或团队对决策记录拥有更大的影响力，例如可以批准、表决或否决它？

示例答案：决策记录的治理按以下优先顺序：CEO、CTO、首席法务官、实施决策记录的团队、团队中对该决策记录最了解的专家。除非在决策记录中另有说明，其他任何人都没有治理权。

### 哪些原则与决策记录相互作用？

考虑诸如你的组织的工作方式等方面，包括行动快还是行动慢、决策达成共识还是决策出现冲突、风险偏好还是安全偏好、公开讨论还是私下讨论等。

示例答案：我们采用的领导原则是崇尚行动、不同意但服从决定、对于容易撤销且容易隔离的决策，70% 的估计就足够了，以及公开的工作方式，但组织的保密协议中所述的机密信息除外。

## 更多信息

简介：

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

模板：

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

深入阅读：

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/)：免费的每月软件架构课程

工具：

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

特定公司的指引：

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

示例：

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

视频：

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

播客：

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

书籍：

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

另请参阅：

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework
