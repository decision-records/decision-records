# Ajuda / Perguntas frequentes

Perguntas comuns que os líderes levantam ao adotar registros de decisão, além de um breve glossário.

Conteúdo:

* [Perguntas frequentes](#perguntas-frequentes)
* [Solução de problemas](#solução-de-problemas)
* [Glossário](#glossário)
* [Para onde ir em seguida](#para-onde-ir-em-seguida)

## Perguntas frequentes

**Qual é a diferença em relação a uma ata de reunião?**
A ata registra o que foi *discutido*; um registro de decisão captura o que foi *decidido e por quê*, escrito para ser entendido sozinho, sem o contexto da reunião. As atas são um bom insumo para um registro de decisão — raramente são um substituto.

**Quanto tempo isso deve realmente levar?**
Para um registro leve sobre uma decisão que você já entende, de 15 a 30 minutos. O tempo raramente é desperdiçado, porque é o tempo que você gastaria reexplicando o mesmo raciocínio em cada conversa futura sobre o assunto. Reserve os registros detalhados — com análise de custos, SWOT/PEST e várias opiniões documentadas — para decisões realmente de alto risco.

**Quem deve ser o responsável pelo nosso histórico de decisões?**
Alguém responsável pela equipe ou função que ele cobre — muitas vezes a mesma pessoa que, de outro modo, responderia "por que fizemos isso?" de memória um ano depois. Em organizações maiores, um responsável leve de governança (por exemplo, chefe de gabinete, chefe de estratégia ou um responsável rotativo por função) pode manter o índice sem aprovar cada decisão individual.

**E se quem decide e as partes interessadas discordarem?**
Resolva o *processo* antes da *decisão*: nomeie de antemão quem tem a palavra final (uma pessoa ou uma regra definida, como "consenso, escalonar ao CEO se não houver resolução em uma semana"). Registre as opiniões divergentes na seção "Opiniões" do modelo detalhado em vez de apagar o desacordo — uma divergência bem documentada é valiosa se a decisão for revisitada depois.

**E se mais tarde descobrirmos que a decisão estava errada?**
É exatamente para isso que serve o registro. Escreva um novo registro de decisão que substitua o antigo, explique o que mudou (informação nova, circunstâncias diferentes ou um erro de raciocínio) e aponte de volta. Estar errado não é motivo para apagar o rastro — é o motivo de o rastro existir.

**Precisamos de um software especial para isso?**
Não. Uma pasta de arquivos Markdown ou Word num drive compartilhado, um espaço de wiki ou um repositório versionado funcionam. Escolha o que a sua equipe já abre todo dia — a adoção falha muito mais por ferramentas desconhecidas do que por falta de um recurso.

**Um assistente de IA pode ajudar a redigir ou revisar isso?**
Sim, de forma produtiva, de duas maneiras: (1) redigir uma primeira versão de Contexto e Opções consideradas a partir de notas de reunião ou de uma transcrição, para que quem decide, uma pessoa, corrija e finalize; (2) revisar um rascunho com a [lista de verificação](../lista-de-verificacao/index.md) para apanhar opções ausentes, decisões vagas ou consequências que apenas repetem o debate. Um assistente de IA nunca deve ser quem decide, nominalmente — a responsabilização fica com uma pessoa ou um comitê.

**Isso não é só burocracia?**
Vira burocracia exatamente quando é imposto como papelada posterior ao fato, para decisões já tomadas e anunciadas. Continua valioso quando usado como uma *ferramenta de pensamento* antes de uma decisão, por quem realmente a toma. Veja as [Armadilhas comuns](../guia/index.md#armadilhas-comuns) no guia.

**Quantos registros de decisão são demais?**
Se as pessoas deixam de ler o histórico, você tem fadiga do histórico — está registrando decisões fáceis de reverter ou que afetavam só uma pessoa. Restrinja os registros a escolhas realmente difíceis de reverter, transversais ou com probabilidade de serem revisitadas. Veja a [lista de verificação](../lista-de-verificacao/index.md#lista-esta-decisão-precisa-de-um-registro-de-decisão).

**Nossa equipe não gosta da palavra "arquitetura" ou "registro" — o nome importa?**
Não para a mecânica. Algumas equipes têm uma adoção muito mais rápida só por chamar a pasta de `decisions/` em vez de `decision-records/` — o mesmo modelo funciona com qualquer nome. Use o que fizer a sua equipe realmente escrever isso.

**Um registro de decisão pode valer para várias unidades de negócio?**
Sim, se a decisão realmente for compartilhada (por exemplo, um fornecedor para a empresa toda). Mas mantenha *uma só decisão*: se duas unidades de negócio estão, na verdade, fazendo duas escolhas diferentes por duas razões diferentes, escreva dois registros e relacione-os.

## Solução de problemas

| Sintoma | Causa provável | Correção |
|---|---|---|
| Os registros se acumulam em "pedido de comentários" para sempre | Sem prazo ou sem quem decide nomeado | Acrescente ambos explicitamente; aceite por padrão se não houver objeção até uma data declarada |
| Ninguém lê o histórico | Registros demais de baixo risco; fadiga do histórico | Aplique com mais rigor a lista "isto precisa de um registro?" |
| Os registros parecem uma lista de prós e contras, sem decisão real | A seção de decisão foi escrita antes de a decisão realmente ser tomada | Não publique a "Decisão" como final até quem decide ter realmente decidido |
| A equipe vê isso como papelada e ressente escrevê-los | Introduzido de cima para baixo como mandato, ou usado só depois do fato para justificar escolhas anteriores | Reapresente como uma ferramenta que a equipe escolhe porque lhe poupa tempo depois, começando com um exemplo visivelmente útil |
| Ninguém acha os registros antigos | Sem local de armazenamento compartilhado e durável ou sem índice | Crie um único local `decisions/` com uma página de índice listando título, status e data |
| Decisões são revertidas em silêncio sem que ninguém perceba | Sem convenção de substituição | Quando uma decisão mudar, escreva sempre um novo registro com status `substituída` apontando de volta |

## Glossário

* **Registro de decisão (RD)** — um documento que captura uma escolha significativa, seu contexto, as opções consideradas, a decisão e suas consequências.
* **Histórico de decisões (HD)** — a coleção completa dos registros de decisão de uma equipe, função ou organização.
* **Registro de decisão de arquitetura (ADR)** — o ancestral específico de software deste padrão, focado em escolhas de tecnologia e design.
* **Status** — a etapa do ciclo de vida de uma decisão: pedido de comentários, proposta, aceita, rejeitada, obsoleta ou substituída.
* **Substituída** — uma decisão que foi trocada por uma mais nova; o registro antigo permanece no histórico com um link adiante, em vez de ser apagado.
* **Requisito significativo** — uma necessidade com efeito mensurável sobre o sistema ou a organização, o tipo de coisa que justifica escrever um registro de decisão.
* **Gestão do conhecimento (GC)** — a disciplina mais ampla a que os registros de decisão pertencem: capturar o conhecimento institucional para que sobreviva à memória de qualquer pessoa.

## Para onde ir em seguida

* Novo na prática? Comece pelo [guia](../guia/index.md).
* Pronto para escrever um? Siga o [tutorial](../tutorial/index.md).
* Precisa de um modelo para copiar? Veja [template/index.md](../modelo/index.md).
* Quer ver primeiro um na sua área? Navegue por [examples/index.md](../exemplos/index.md).
* Vai implantar isto numa equipe? Use a [lista de verificação](../lista-de-verificacao/index.md).
