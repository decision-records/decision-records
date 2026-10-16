# Modelos de registro de decisão

Dois modelos, ambos em Markdown simples: copie o que quiser para um novo arquivo e preencha.

## Como escolher o modelo

Use por padrão o **modelo leve** — a maioria das decisões precisa apenas dos seus seis campos, e uma página que cresce além disso costuma ser mais de uma decisão.

Passe para o **modelo detalhado** quando a decisão for de alto risco, tiver várias partes interessadas cujas opiniões importam individualmente ou realmente precisar de análise estruturada de custos/SWOT/PEST para defender a escolha depois. Veja a [lista de verificação](../lista-de-verificacao/index.md#lista-esta-decisão-precisa-de-um-registro-de-decisão) para a pergunta mais ampla sobre se uma decisão precisa de um registro e o [guia](../guia/index.md#a-anatomia-de-um-registro-de-decisão) para ver como os campos dos dois modelos se correspondem.

## Modelo leve

```markdown
# Título (curto, no presente, ativo, até cerca de 50 caracteres)

- Status: pedido de comentários | proposta | aceita | rejeitada | obsoleta | substituída
- Data: AAAA-MM-DD
- Quem decide: [nome(s) ou papel(éis) com autoridade para aceitar isto]
- Responsável: [quem mantém e revisa periodicamente este registro]

## Contexto

Descreva a situação e as restrições que tornaram esta decisão necessária, escrevendo de modo que um leitor sem lembrança da reunião entenda por que a pergunta surgiu.

## Opções consideradas

Liste as alternativas realistas — incluindo "não fazer nada", se for relevante — como fatos e trade-offs, e não como uma lista de espantalhos que faz a opção escolhida parecer obviamente correta.

## Decisão

Declare a escolha em linguagem simples e ativa: "Vamos fazer X." Não um resumo de prós e contras — uma declaração clara do que foi escolhido.

## Consequências

Declare o que muda como resultado: custos, riscos, decisões decorrentes e tudo o que se abre mão ao não escolher uma alternativa. Escreva como "agora fazemos X em vez de Y", e não como um resumo de prós e contras da decisão já tomada.
```

Veja o [tutorial](../tutorial/index.md) para um passo a passo completo deste modelo e [examples/index.md](../exemplos/index.md) para exemplos de pontos de partida.

## Modelo detalhado

```markdown
# Título (curto, no presente, ativo, até cerca de 50 caracteres)

- Status: pedido de comentários | proposta | aceita | rejeitada | obsoleta | substituída
- Data: AAAA-MM-DD
- Quem decide: [nome(s) ou papel(éis) com autoridade para aceitar isto]
- Responsável: [quem mantém e revisa periodicamente este registro]

Resumo: uma ou duas frases sobre a posição atual e as necessidades em aberto.

## Problema

Descreva o problema que você quer resolver. Não deixe dúvidas sobre por que você o trata agora.

Siga uma abordagem minimalista. Trate apenas os problemas que precisam ser tratados em cada momento do ciclo de vida.

Talvez você queira acrescentar informações de agrupamento, como etiquetas, palavras-chave, links para a base de conhecimento etc.

## Premissas

Descreva quaisquer premissas subjacentes ao ambiente em que você toma a decisão.

Não deixe de tratar os atributos de qualidade relevantes, também chamados de requisitos transversais.

Exemplos de premissas envolvem escopo, custo, cronograma, tecnologia, disponibilidade de recursos, necessidades de qualidade de serviço, acordos de nível de serviço e assim por diante.

Observe que restrições do ambiente (como padrões tecnológicos aceitos, arquitetura corporativa, padrões comumente empregados e assim por diante) podem limitar as opções que você considera.

## Restrições

Registre quaisquer restrições adicionais ao ambiente que esta decisão possa impor.

Não deixe de tratar os atributos de qualidade relevantes, também chamados de requisitos transversais, como acima.

Exemplos de restrições envolvem escolhas de plataforma, seleção de fornecedores, a facilidade de reverter a decisão etc.

## Opções consideradas (Posições)

Liste as posições, que são as opções viáveis que você está considerando ou já considerou.

Use fatos e dados, não opiniões. As posições muitas vezes exigem explicações longas, às vezes até modelos e diagramas.

Isto não precisa ser uma lista exaustiva; porém, você não quer ouvir a pergunta "Vocês pensaram em...?" numa revisão final, pois isso levaria à perda de credibilidade e ao questionamento de outras decisões arquiteturais.

Esta seção também ajuda a garantir que você ouviu as opiniões dos outros; declarar explicitamente outras opiniões ajuda a conquistar quem as defende para a sua decisão.

### Análise de custos (opcional)

Resumo: explique brevemente esta seção e, idealmente, destaque quaisquer pontos fora da curva.

Exemplos:

- Início, como custos de implantação, tempo e recursos.

- Operação, como suporte e manutenção

- Treinamento, como capacitação e gestão da mudança

- Licenciamento, como contratos e compromissos legais

- Medição de uso, como largura de banda e uso de CPU

### Análise SWOT (opcional)

Resumo: explique brevemente esta seção e, idealmente, destaque quaisquer pontos fora da curva.

- Forças

- Fraquezas

- Oportunidades

- Ameaças

### Análise PEST (opcional)

Resumo: explique brevemente esta seção e, idealmente, destaque quaisquer pontos fora da curva.

- Fatores políticos

- Fatores econômicos

- Fatores sociais

- Fatores tecnológicos

Algumas equipes gostam de acrescentar estas como categorias próprias:

- Fatores legais - preferimos tê-los nos fatores políticos.

- Fatores regulatórios - preferimos tê-los nos fatores políticos.

- Fatores ambientais - preferimos tê-los nos fatores econômicos.

- Fatores demográficos - preferimos tê-los nos fatores sociais.

### Outras análises (acrescente aqui as suas ideias)

Acrescente aqui as suas ideias...

## Opiniões

Resumo: explique brevemente esta seção e, idealmente, destaque quaisquer pontos fora da curva.

- Da equipe, idealmente escritas pelo próprio colega.

- De outras partes interessadas internas, idealmente escritas pela própria parte interessada.

- De pessoas externas, como consultores, avaliadores e revisores independentes etc.

Para cada opinião, deixe claro:

- Quem está dando a opinião

- Que outros candidatos foram considerados,

- Como o autor avaliou os candidatos?

- Por que o autor escolheu o vencedor?

- O que tem acontecido desde então?

- Sabendo o que sabe agora, o que o autor aconselharia as pessoas a fazer de forma diferente?

### Título da opinião 1 (acrescente a sua aqui)

Resumo: explique brevemente esta seção e, idealmente, destaque quaisquer pontos fora da curva.

Explique aqui a sua opinião.

### Título da opinião 2 (acrescente a sua aqui)

Resumo: explique brevemente esta seção e, idealmente, destaque quaisquer pontos fora da curva.

Explique aqui a sua opinião.

### Título da opinião 3 (acrescente a sua aqui)

Resumo: explique brevemente esta seção e, idealmente, destaque quaisquer pontos fora da curva.

Explique aqui a sua opinião.

## Argumento

Resumo: explique brevemente esta seção e, idealmente, destaque quaisquer pontos fora da curva.

Explique por que você escolheu uma posição.

As decisões devem ser guiadas por um propósito. Para demonstrar responsabilização, relacione explicitamente as suas decisões aos objetivos ou requisitos.

O argumento é provavelmente tão importante quanto a própria decisão.

Isto não precisa ser um texto exaustivo; porém, você não quer ouvir a pergunta "Vocês pensaram em...?" numa revisão final, pois (como acima) isso levaria à perda de credibilidade e ao questionamento de outras decisões arquiteturais.

## Implicações

Resumo: explique brevemente esta seção e, idealmente, destaque quaisquer pontos fora da curva.

Declare claramente as implicações da sua decisão. Isso pode ser muito eficaz para obter adesão e criar um roteiro de execução.

Por exemplo, uma decisão pode criar a necessidade de tomar outras decisões, gerar novos requisitos ou modificar os existentes; impor restrições adicionais ao ambiente; exigir renegociar escopo ou cronograma com clientes; ou exigir treinamento adicional da equipe.

## Decisões relacionadas

Resumo: explique brevemente esta seção e, idealmente, destaque quaisquer pontos fora da curva.

Liste aqui quaisquer decisões relacionadas.

Descobrimos que, na prática, uma matriz de rastreabilidade, árvores de decisão ou metamodelos são mais úteis. Os metamodelos são úteis para mostrar relações complexas de forma diagramática (como os modelos Rose).

## Requisitos relacionados

Resumo: explique brevemente esta seção e, idealmente, destaque quaisquer pontos fora da curva.

Liste aqui quaisquer requisitos relacionados.

Achamos mais conveniente referenciar uma matriz de rastreabilidade. Você pode avaliar a contribuição de cada decisão para atender a cada requisito e depois avaliar o quanto o requisito é atendido por todas as decisões. Se uma decisão não contribui para atender a um requisito, não tome essa decisão.

## Artefatos relacionados

Liste aqui quaisquer artefatos relacionados.

Exemplos são documentos de escopo, documentos de planejamento, modelos de processos de negócio etc. que esta decisão afeta.

## Princípios relacionados

Se a empresa tem um conjunto de princípios acordado, garanta que a decisão seja coerente com um ou mais deles. Isso ajuda a garantir alinhamento entre domínios ou sistemas.

## Notas relacionadas

Como os processos de decisão podem levar bastante tempo, achamos útil registrar as notas e as questões que a equipe discute durante o processo de socialização.
```
