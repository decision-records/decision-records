# Tutorial: escreva o seu primeiro registro de decisão

Este é um passo a passo prático para um líder que nunca escreveu um registro de decisão. Ele usa um cenário de negócios realista — não um exemplo de software — porque os registros de decisão são uma ferramenta geral de liderança. Ao final, você terá escrito um registro de verdade e saberá como apresentar a prática à sua equipe.

Tempo estimado: 20 minutos para a Parte 1, mais prática contínua para as Partes 2 a 4.

Conteúdo:

* [Parte 1: escreva um registro de decisão (20 minutos)](#parte-1-escreva-um-registro-de-decisão-20-minutos)
* [Parte 2: obtenha revisão e aceitação](#parte-2-obtenha-revisão-e-aceitação)
* [Parte 3: comece um histórico de decisões](#parte-3-comece-um-histórico-de-decisões)
* [Parte 4: estabeleça um ritmo de revisão](#parte-4-estabeleça-um-ritmo-de-revisão)
* [O cenário completo](#o-cenário-completo)

## Parte 1: escreva um registro de decisão (20 minutos)

Escolha uma decisão real que você enfrenta agora — de preferência uma que já seja um pouco controversa, para sentir o valor de imediato. Se nada vier à mente, use o exemplo contínuo deste tutorial: **"Devemos trocar de fornecedor de folha de pagamento?"**

### Passo 1 — Título (2 minutos)

Escreva um título curto, no presente e ativo. Não uma pergunta, mas uma afirmação da decisão final:

> Trocar o fornecedor de folha de pagamento para [Fornecedor]

Não se preocupe em ter certeza ainda — você pode mudar o título quando a decisão for tomada.

### Passo 2 — Status e metadados (1 minuto)

```markdown
* Status: pedido de comentários
* Data: 2026-08-19
* Quem decide: Diretor financeiro
* Responsável: Chefe de Operações de Pessoas
```

Nomear quem decide agora — antes do debate — evita uma briga por autoridade depois que as opiniões já endureceram.

### Passo 3 — Contexto (5 minutos)

Escreva a situação como se a explicasse a um novo contratado sem nenhum conhecimento prévio:

> Nosso atual fornecedor de folha de pagamento perdeu dois prazos de entrega no último ano,
> causando multas por atraso em dois estados. Nosso contrato renova em 60 dias. Finanças e
> Operações de Pessoas concordam que o atual fornecedor é um risco, mas divergem sobre a
> urgência e sobre se vale a pena uma troca neste trimestre, dado o transtorno para a
> inscrição anual nos benefícios.

Observe que isto ainda não defende uma resposta específica — apenas expõe as forças em jogo.

### Passo 4 — Opções consideradas (5 minutos)

Liste as alternativas reais, incluindo "não fazer nada", com trade-offs honestos:

> * **Ficar com o fornecedor atual e renegociar os SLAs** — menor transtorno, mas não
>   resolve a causa raiz; o fornecedor não respondeu a escalonamentos anteriores.
> * **Trocar para o Fornecedor B** — histórico de conformidade mais forte, mas a
>   implantação coincide com a inscrição anual, somando risco a esse processo.
> * **Trocar para o Fornecedor C** — preço melhor, mas equipe de suporte visivelmente menor
>   e duas conversas de referência levantaram preocupações com tempos de resposta.

Se você perceber que está escrevendo só uma opção real e dois espantalhos, pare — é sinal de que a decisão já foi tomada informalmente e o registro está sendo usado para justificá-la em vez de afiá-la. Volte e peça uma segunda opinião sobre as alternativas primeiro.

### Passo 5 — Decisão (2 minutos)

Quando quem decide realmente decidir (isso pode não acontecer na mesma sessão dos passos 1 a 4), escreva em voz ativa e simples:

> Vamos trocar para o Fornecedor B, com a implantação começando depois do fim da inscrição anual.

### Passo 6 — Consequências (5 minutos)

Declare o que muda, e não uma repetição dos trade-offs já tratados acima:

> * O contrato atual deve ser encerrado com 30 dias de aviso antes do início do novo prazo.
> * Operações de Pessoas fará um ciclo de teste de folha em paralelo antes da virada.
> * O cronograma da inscrição anual fica protegido; a troca é sequenciada depois do seu fim.
> * Aceitamos uma janela de implantação comprimida em troca da redução do risco de
>   conformidade — este é o trade-off que escolhemos explicitamente.

Esse é um registro de decisão leve completo. Compare-o com o [modelo](../modelo/index.md#modelo-leve) — você deve conseguir relacionar cada seção.

## Parte 2: obtenha revisão e aceitação

1. Compartilhe o rascunho com as partes interessadas reais (aqui: Finanças, Operações de Pessoas e quem a troca afetar) com um pedido claro e um prazo: *"Comentários até sexta; depois disso marcarei como aceita, a menos que algo relevante mude."*
2. Registre qualquer informação nova como um acréscimo datado, em vez de reescrever em silêncio as seções anteriores — isso preserva o rastro do raciocínio.
3. Quando quem decide confirmar, mude o `Status` para `aceita` e registre a data final.

## Parte 3: comece um histórico de decisões

Um único registro de decisão é útil uma vez. Um **histórico de decisões** — a coleção de todos os registros da sua equipe — é útil para sempre.

1. Crie um local durável e compartilhado: uma pasta `decisions/` no drive compartilhado, no espaço de wiki ou no repositório versionado que a sua equipe já usa. Use o que a sua equipe já abre todo dia — a melhor ferramenta é a que as pessoas realmente vão usar.
2. Arquive cada novo registro com um nome claro e ordenável, por exemplo `2026-08-19-trocar-fornecedor-folha.md`.
3. Mantenha uma página de índice listando todos os registros com título, status e data — veja [examples/index.md](../exemplos/index.md) para um exemplo prático desse padrão.
4. Algumas equipes acham que a palavra "decisões" (omitindo "registro" por completo) faz a prática parecer nativa, e não emprestada da engenharia — use o nome que fizer a sua equipe realmente escrevê-los.

## Parte 4: estabeleça um ritmo de revisão

As decisões envelhecem. Defina um ritmo leve de governança para que o histórico continue confiável em vez de virar um cemitério de escolhas obsoletas:

* **O responsável de cada registro** revisa os próprios registros pelo menos uma vez por ano, ou sempre que a situação de fundo mudar de forma relevante.
* **Quando uma decisão for revertida ou substituída**, escreva um novo registro e defina o status do antigo como `substituída`, apontando para o substituto. Nunca apague em silêncio — o histórico de *por que mudamos de ideia* costuma valer mais do que a resposta atual.
* **Trimestral ou anualmente**, examine todo o histórico em busca de registros ainda marcados como `pedido de comentários` ou `proposta` que nunca foram resolvidos, e encerre-os ou arquive-os explicitamente.

Veja a [lista de verificação](../lista-de-verificacao/index.md) para uma versão condensada e repetível das quatro partes acima.

## O cenário completo

Para um exemplo preenchido de uma decisão comparável, veja [examples/index.md](../exemplos/index.md) — por exemplo, o exemplo [Construir ou comprar para um projeto](../exemplos/construir-ou-comprar/). Ele usa o modelo detalhado, em que Implicações corresponde à seção Consequências acima, e é um trabalho em andamento que mostra como uma equipe avança numa decisão, e não um registro finalizado.
