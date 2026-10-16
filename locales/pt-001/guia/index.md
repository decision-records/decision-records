# Guia: registros de decisão para líderes

Este guia explica o que é um registro de decisão, por que ele importa para líderes de todas as funções de uma empresa, como estruturá-lo e como conduzir bem essa prática.

Conteúdo:

* [O que é um registro de decisão?](#o-que-é-um-registro-de-decisão)
* [Por que os líderes — e não apenas os engenheiros — devem usar registros de decisão](#por-que-os-líderes--e-não-apenas-os-engenheiros--devem-usar-registros-de-decisão)
* [Os registros de decisão se aplicam a todas as áreas da empresa](#os-registros-de-decisão-se-aplicam-a-todas-as-áreas-da-empresa)
* [A anatomia de um registro de decisão](#a-anatomia-de-um-registro-de-decisão)
* [O ciclo de vida de um registro de decisão](#o-ciclo-de-vida-de-um-registro-de-decisão)
* [Papéis e governança](#papéis-e-governança)
* [Boas práticas](#boas-práticas)
* [Armadilhas comuns](#armadilhas-comuns)
* [Como começar na sua organização](#como-começar-na-sua-organização)
* [Leitura complementar](#leitura-complementar)

## O que é um registro de decisão?

Um **registro de decisão (RD)** captura uma escolha significativa: a situação que a motivou, as opções avaliadas, a escolha feita e as consequências esperadas. Um **histórico de decisões (HD)** é a coleção contínua de todos os registros de decisão de uma equipe, função ou organização — na prática, uma memória institucional do "por que fazemos as coisas assim".

Um registro de decisão não é:

* Uma ata de reunião (um registro do que foi *discutido*, não do que foi *decidido e por quê*).
* Um plano de projeto (um registro do *que acontece a seguir*, não de *por que este caminho foi escolhido em vez de outros*).
* Um documento de política (um registro de uma *regra permanente*, embora um registro de decisão muitas vezes produza uma).

Ele fica entre esses três: um artefato curto e duradouro, que existe justamente para que o raciocínio por trás de uma escolha sobreviva à reunião em que ela aconteceu.

## Por que os líderes — e não apenas os engenheiros — devem usar registros de decisão

As equipes de software adotaram essa prática primeiro porque o código é caro de desfazer e os novos engenheiros perguntam o tempo todo "por que foi construído assim?". Todo líder enfrenta exatamente a mesma dinâmica:

* **A memória institucional vai embora pela porta.** Quando o vice-presidente de Vendas que escolheu o modelo atual de territórios sai, o raciocínio sai com ele, a menos que tenha sido escrito.
* **Reorganizações e mudanças de liderança provocam rediscussões.** Sem um registro, um novo líder gasta semanas debatendo de novo uma decisão que já havia sido cuidadosamente tomada — ou, pior, a reverte sem perceber por que ela existia.
* **A integração é mais rápida com um "porquê", e não apenas com um "o quê".** Quem entra e pode ler as últimas dezenas de decisões da sua função entende o julgamento da organização, não só o seu estado atual.
* **Escrever melhora a própria decisão.** Colocar contexto, opções e trade-offs numa página — antes de decidir — revela lacunas e premissas não ditas que uma conversa falada deixa passar.
* **Cria responsabilização sem burocracia.** Um registro de decisão diz quem decidiu, quando e por quê, o que protege tanto quem decide (uma escolha documentada e fundamentada) quanto a organização (um responsável claro para revisitar se as circunstâncias mudarem).
* **Escala a comunicação no espaço e no tempo.** Para equipes remotas e assíncronas, e para partes interessadas que não estavam na sala, um registro de decisão bem escrito faz o trabalho que uma reunião ao vivo teria de repetir.

Nada disso é específico de software. É específico de *qualquer* decisão que seja cara de reverter, afete pessoas além de quem decide ou possa ser questionada mais tarde.

## Os registros de decisão se aplicam a todas as áreas da empresa

Trate "registro de decisão" como um gênero, não como a ferramenta de um departamento. A mesma estrutura de seis partes funciona quer a decisão seja arquitetural ou comercial:

* **Registro de decisão de estratégia** — entrada/saída de mercados, postura competitiva, apostas de vários anos.
* **Registro de decisão de vendas** — desenho de territórios, planos de remuneração, escolhas de CRM/ferramentas, estratégia de canais.
* **Registro de decisão de marketing** — posicionamento de marca, mix de canais, agência versus equipe interna, comunicação de preços.
* **Registro de decisão de produto** — modelo de preços, trade-offs do roadmap, construir ou comprar, decisões de descontinuação.
* **Registro de decisão de projeto** — metodologia de entrega, seleção de fornecedores, trade-offs de escopo.
* **Registro de decisão de risco** — aceitação, mitigação, transferência ou evitação de riscos, e a justificativa.
* **Registro de decisão de recursos humanos** — mudanças de política (trabalho remoto, níveis, faixas salariais), desenho organizacional.
* **Registro de decisão de relações públicas** — postura de comunicação em crises, política de porta-vozes, regras de relacionamento com a mídia.
* **Registro de decisão de desenvolvimento profissional** — investimento em treinamento, critérios de promoção, escolhas de sucessão.
* **Registro de decisão de design centrado no usuário** — escolhas de método de pesquisa, trade-offs de acessibilidade, direção de UX.
* **Registro de decisão de arquitetura de software / engenharia** — o caso de uso original: escolhas de tecnologia, plataforma e design.

O diretório de [exemplos](../exemplos/index.md) tem amostras práticas na maioria desses domínios. Muitas organizações que adotam registros de decisão na engenharia descobrem depois que as equipes de estratégia, RH ou vendas querem exatamente a mesma disciplina — muitas vezes o momento de "acender a lâmpada" descrito por equipes que simplesmente rebatizam a prática de "decisões" em vez de "registros de decisão", o que faz o padrão parecer nativo para equipes não técnicas, e não emprestado da engenharia.

## A anatomia de um registro de decisão

Dois modelos estão em [template/index.md](../modelo/index.md): uma versão **leve** de seis campos para decisões do dia a dia e uma versão **detalhada** para decisões de alto risco e muito escrutínio. Ambas compartilham a mesma lógica central:

1. **Título** — uma afirmação curta, no presente e ativa, da própria decisão (por exemplo, "Adotar OKRs trimestrais", e não "Discussão sobre OKRs"). Procure ficar abaixo de 50 caracteres.
2. **Status** — em que ponto da vida a decisão está: pedido de comentários, proposta, aceita, rejeitada, obsoleta ou substituída.
3. **Contexto (Problema)** — a situação, as forças e as restrições que tornaram esta decisão necessária. Escrito de modo que um leitor sem lembrança da reunião entenda por que a pergunta surgiu.
4. **Opções consideradas (Posições)** — as alternativas realistas, expostas como fatos e trade-offs, e não como uma lista de espantalhos que faz a opção escolhida parecer obviamente correta. Se alguém pode perguntar "vocês consideraram X?" e a resposta não está no registro, o registro está incompleto.
5. **Decisão** — a escolha, em linguagem simples e ativa: "Vamos fazer X." Não um resumo de prós e contras — uma declaração clara do que foi escolhido.
6. **Consequências (Implicações)** — o que muda como resultado, incluindo custos, riscos, decisões decorrentes e tudo o que se abre mão ao não escolher uma alternativa. Boas consequências soam como "agora fazemos X em vez de Y", e não como um resumo de prós e contras da decisão já tomada.

O modelo detalhado acrescenta campos úteis para decisões de maior risco: **Premissas**, **Restrições**, **Opiniões** (quem aconselhou o quê, e por quê), **Decisões/requisitos/artefatos/princípios relacionados** e subseções de análise estruturada (análise de custos, SWOT, PEST) para decisões que merecem escrutínio mais profundo.

## O ciclo de vida de um registro de decisão

Um registro de decisão costuma passar por cinco etapas:

**Iniciar → Pesquisar → Avaliar → Decidir → Manter (→ Encerrar)**

* *Iniciar* — alguém identifica que uma escolha é significativa o bastante para merecer um registro e abre um rascunho.
* *Pesquisar* — opções, restrições e premissas são reunidas; as partes interessadas são consultadas.
* *Avaliar* — o registro é compartilhado para comentários, normalmente com um prazo definido (uma semana é um padrão comum).
* *Decidir* — quem decide (pessoa ou grupo, conforme o seu modelo de governança) aceita, rejeita ou devolve para mais trabalho; o status é atualizado de acordo.
* *Manter* — o registro continua fácil de encontrar e é revisitado se as circunstâncias mudarem de forma relevante.
* *Encerrar* — se for substituído, o status do registro antigo muda para "substituído" e aponta para o novo. O registro antigo nunca é apagado — esse histórico é justamente o ponto.

## Papéis e governança

Para cada registro de decisão, indique:

* **Responsável / proponente** — redige o registro e o conduz até a decisão.
* **Quem decide** — a pessoa, o papel ou o comitê com autoridade para aceitá-lo. Diga isso explicitamente por tipo de decisão (por exemplo, "mudanças de preço: VP de Produto; entrada em mercado: CEO + Conselho").
* **Colaboradores** — pessoas cuja contribuição moldou de forma relevante as opções ou os trade-offs.
* **Responsável daqui em diante** — quem mantém a decisão, a revisa periodicamente (anualmente é um ritmo comum) e responde por aposentá-la um dia.

Questões de governança que vale resolver uma vez, por escrito, para a sua organização (veja também a [lista de verificação](../lista-de-verificacao/index.md)):

* Quem pode *propor* um registro de decisão? (Muitas vezes: qualquer pessoa.)
* Quem pode *aprovar* um, e isso varia conforme o tipo de decisão ou o limite de valor/risco?
* O que desempata ou resolve o desacordo — consenso, um aprovador nomeado ou escalonamento?
* Quão mutável é um registro depois de aceito? Muitas equipes preferem um modelo de "documento vivo": novas informações são acrescentadas com data e hora, em vez de reescrever a história em silêncio.

## Boas práticas

* **Uma decisão por registro.** Resista a juntar várias escolhas em um documento — fica impossível referenciar, substituir ou buscar depois.
* **Seja conciso.** Uma página, não um relatório. Se passar de uma página, a decisão provavelmente é mais de uma.
* **Escreva o contexto para um desconhecido.** Suponha que o leitor não tenha nada do contexto compartilhado da reunião e que não o terá daqui a dois anos também.
* **Declare a decisão na voz ativa.** "Vamos migrar para X", e não "X foi visto como a direção preferida".
* **Explique as consequências como o que muda, não como prós e contras.** O debate de trade-offs pertence a "Opções consideradas"; "Consequências" trata do que acontece a seguir.
* **Guarde os registros onde a equipe já trabalha.** Uma pasta `decisions/` sob controle de versão, um espaço de wiki, uma pasta de drive compartilhado — o melhor lugar é aquele que a sua equipe realmente vai abrir.
* **Reserve registros de decisão para decisões difíceis de reverter, transversais ou com probabilidade de serem questionadas mais tarde.** Nem toda escolha precisa de um — veja a [lista de verificação](../lista-de-verificacao/index.md#lista-esta-decisão-precisa-de-um-registro-de-decisão).
* **Substitua, não apague em silêncio.** Quando uma decisão mudar, escreva um novo registro e aponte de volta para o que ele substitui.

## Armadilhas comuns

* **Transformar em papelada posterior ao fato.** Se um registro de decisão é escrito para justificar uma escolha já tomada e anunciada, perde a maior parte do valor — o objetivo é afiar o raciocínio *antes* de se comprometer, não produzir um artefato de conformidade depois.
* **Fadiga do histórico.** Registrar toda escolha menor enterra as significativas e ensina as pessoas a parar de ler o histórico. Limite os registros a decisões realmente difíceis de reverter ou de amplo impacto.
* **Escrever prós e contras em vez de uma decisão.** Um registro que termina com uma lista de trade-offs e nenhum "vamos fazer X" claro não é um registro de decisão — é um memorando de opções.
* **Nenhum responsável.** Um registro de decisão sem decisor ou revisor nomeado tende a ficar desatualizado e perde a confiança.
* **Tratar o modelo como burocracia em vez de lista de verificação.** O valor do modelo é ser uma lista de verificação para pensar bem e se comunicar bem — não um formulário a preencher por si só.

## Como começar na sua organização

1. Escolha uma função ou equipe com uma decisão que já seja controversa ou difícil de reverter.
2. Redija essa decisão com o [modelo leve](../modelo/index.md#modelo-leve).
3. Converse sobre ela com quem realmente decide e com as partes interessadas; defina um prazo para o retorno.
4. Guarde-a em algum lugar durável e fácil de encontrar.
5. Quando a prática se provar útil uma vez, proponha-a como um padrão leve para a equipe — não como uma imposição de cima para baixo. Os registros de decisão funcionam melhor quando uma equipe os adota porque tornam a sua própria vida mais fácil, e não como papelada forçada.

Veja o [tutorial](../tutorial/index.md) para um passo a passo completo.

## Leitura complementar

* [spec/decision-record.md](https://github.com/decision-records/decision-records/blob/main/spec/decision-record.md) — a especificação condensada que este guia desenvolve.
* [Architectural decision (Wikipedia)](https://wikipedia.org/wiki/Architectural_decision)
* [Documenting architecture decisions — Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)
* [Markdown Architectural Decision Records (MADR)](https://adr.github.io/madr/)
* [AWS Prescriptive Guidance: ADR process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
* [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)
* [joelparkerhenderson/decision-record](https://github.com/joelparkerhenderson/decision-record) — o projeto-fonte mais completo que este guia generaliza para um público de negócios.
