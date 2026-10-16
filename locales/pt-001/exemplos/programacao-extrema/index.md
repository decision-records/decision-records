# Programação Extrema

* Status: pedido de comentários
* Data: 2025-10-06
* Quem decide: Chefe de Engenharia (a confirmar)
* Responsável: Gerente de Engenharia

Resumo: trabalho em andamento. Este é um ponto de partida para uma equipe de engenharia que avalia como introduzir práticas da Programação Extrema (XP), como desenvolvimento orientado a testes, programação em par, integração contínua e entregas pequenas. Mostra como uma equipe pode formular a questão, debater as opções e reunir informações. Não registra nenhuma decisão.

## Problema

As equipes de produto entregam funcionalidades em grandes lotes, e os defeitos encontrados tarde são caros: uma parcela perceptível das entregas precisa de uma correção urgente depois de publicada. Os líderes de engenharia se interessam por práticas da Programação Extrema, um método ágil de desenvolvimento de software que enfatiza práticas técnicas como desenvolvimento orientado a testes, programação em par, integração contínua, entregas pequenas, refatoração e propriedade coletiva do código.

Essas práticas se apoiam mutuamente, mas também mudam o modo como os engenheiros trabalham todos os dias. Adotar todas de uma vez provavelmente encontrará resistência e será feito de forma superficial. As perguntas a responder:

* Que problemas queremos resolver (defeitos tardios, retorno lento, conhecimento nas mãos de poucos) e quais práticas os tratam?
* Em que ordem as práticas devem ser introduzidas e quem vai primeiro?
* O que mediríamos para saber que as práticas estão ajudando?
* Qual é o equilíbrio certo entre um padrão compartilhado e a escolha de cada equipe?

## Premissas

Cada premissa é algo a testar.

* **Os defeitos tardios são causados principalmente pela falta de retorno automatizado e rápido.** Teste: rastrear uma amostra de correções urgentes até onde o defeito poderia ter sido detectado.
* **As práticas de base (integração contínua e testes automatizados) tornam as demais possíveis.** Teste: perguntar a equipes que experimentaram as práticas quais dependiam de quais.
* **Os engenheiros adotarão práticas que veem funcionando numa equipe ao lado.** Teste: perguntar aos engenheiros o que os convenceria e o que os preocupa.
* **A taxa de correções urgentes depois da entrega é uma medida justa de progresso.** Teste: acordar como será contada e verificar se outras medidas (prazo de entrega, taxa de falha nas mudanças) não contam uma história diferente.

## Restrições

* As equipes ainda precisam entregar funcionalidades enquanto aprendem, então a produção no primeiro período provavelmente será menor.
* Os engenheiros devem manter a escolha de como fazem par e de quais ferramentas usam.
* A infraestrutura existente de build e testes pode precisar de trabalho antes que a integração contínua seja útil.
* Desconhecido, a confirmar: quanto da base de código é testável hoje e se restrições regulatórias ou de clientes afetam a frequência das entregas.

## Opções consideradas

Para cada opção, estime valor, custos, prazo e necessidades de capacidade, e anote que evidências fariam a equipe mudar de ideia.

* **Adotar todas as práticas de uma vez em todas as equipes.**
  * Valor: as práticas se reforçam mutuamente.
  * Fatores de custo: treinamento; entrega mais lenta durante o aprendizado; trabalho de ferramentas em todas as equipes ao mesmo tempo.
  * Riscos: grande mudança; equipes sem as habilidades de base podem abandonar as práticas em semanas.
* **Adotar as práticas numa ordem escolhida, equipe a equipe.** Por exemplo, integração contínua e testes automatizados primeiro (as bases), depois entregas pequenas e programação em par, depois desenvolvimento orientado a testes.
  * Valor: cada prática tem tempo para se assentar; as primeiras tornam as seguintes possíveis; a experiência da primeira equipe orienta as demais.
  * Fatores de custo: mentoria; tempo para fazer par e escrever testes incluído nos planos; trabalho de infraestrutura no pipeline.
  * Formato do prazo: sequencial, com a equipe seguinte entrando quando a anterior mantiver o seu pipeline de entregas saudável por um período declarado.
  * Capacidades necessárias: um mentor; um pipeline de build confiável; apoio dos gestores à queda de produção.
  * Riscos: lento; práticas adotadas de forma desigual.
* **Adotar só as práticas fáceis.** Pouco esforço, mas pode pular as de maior benefício, como os testes automatizados.
* **Adotar um conjunto diferente de práticas** (por exemplo, as descritas na pesquisa DORA sobre entrega de software, como entrega contínua, desenvolvimento baseado em trunk e arquitetura fracamente acoplada) e tratar o XP como uma fonte entre várias.
* **Não fazer nada de novo** e tratar diretamente as causas específicas dos defeitos. Uma linha de base real.

## Argumento

Pontos de debate que a equipe deve esperar:

* **Programação em par.** Uma prática da qual muitos engenheiros desconfiam. Onde ajuda (compartilhamento de conhecimento, trabalho complexo) e onde não?
* **Padronizar ou deixar as equipes escolherem?** Resultados compartilhados (menos correções urgentes, retorno mais rápido) com liberdade das equipes sobre como alcançá-los, ou um padrão mais rígido?
* **Qualidade versus velocidade no curto prazo.** Os líderes estão dispostos a aceitar menor produção enquanto as equipes aprendem?
* **TDD, meio ou fim?** Algumas práticas (como o desenvolvimento orientado a testes) são debatidas até entre profissionais experientes. A equipe deve decidir que problema a prática trata antes de adotá-la.

Como a equipe poderia avaliar custos e trade-offs:

1. Custear a abordagem atual: esforço gasto em correções urgentes, atrasos causados por defeitos tardios, impacto nos clientes. Usar faixas nos termos da própria organização.
2. Custear o programa: mentoria, treinamento, tempo para par e testes, infraestrutura do pipeline e a queda temporária de entrega.
3. Escolher primeiro as medidas: parcela de entregas que precisam de correções urgentes, prazo de entrega das mudanças, frequência de implantação, tempo para restaurar o serviço (as medidas DORA) e retorno dos engenheiros.
4. Comparar as opções nos cenários melhor, provável e pior; perguntar como a resposta muda se o benefício aparecer mais tarde ou menor do que o esperado.
5. Usar uma matriz ponderada e um pre-mortem.

## Decisão

**Ainda não decidido.** Este é um ponto de partida. Uma equipe que o use deve substituir esta seção pela sua própria decisão.

Forma sugerida de chegar a uma decisão:

* Confirmar quem decide e até quando.
* Acordar primeiro os critérios e os pesos.
* Reunir as evidências acima e registrar o que foi encontrado.
* Compartilhar para comentários, depois decidir e atualizar o Status.

## Implicações

Se a equipe escolher uma abordagem em etapas, precisaria:

* Nomear um mentor e pedir à primeira equipe que relate com honestidade o que ajudou e o que não ajudou.
* Planejar tempo para fazer par e para escrever testes nos planos de entrega.
* Investir no pipeline de build e testes antes de depender dele.
* Acordar uma regra de parada: se uma prática não estiver ajudando após um período declarado, a equipe pode propor interrompê-la e registrar por quê.
* Manter a escolha dos engenheiros sobre como fazem par e quais ferramentas usam; as práticas devem definir o resultado, não cada detalhe de como ele é alcançado.

## Decisões relacionadas

* [O Manifesto Ágil](../manifesto-agil/): a decisão mais ampla sobre os valores que essas práticas apoiam.
* [Escolher nossos frameworks de tecnologia da informação](../frameworks-de-ti/): como o XP se encaixa com outros frameworks.
* Decisões ainda não tomadas: investimento em pipeline e ferramentas; modelo de propriedade do código.

## Notas relacionadas

* Pendências: amostrar correções urgentes recentes; perguntar aos engenheiros sobre suas preocupações com par e testes; verificar o que o pipeline de build consegue fazer hoje.
* Saiba mais:
  * Wikipédia: [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development), [Pair programming](https://en.wikipedia.org/wiki/Pair_programming), [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring), [Technical debt](https://en.wikipedia.org/wiki/Technical_debt)
  * ISO: [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html)
  * Vídeo: [What is Extreme Programming (XP)?](https://www.youtube.com/watch?v=5VpcuwW1mQ0) (Agilemania)
  * Leitura: [Extreme Programming: A gentle introduction](http://www.extremeprogramming.org/); Martin Fowler, [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html); [DORA](https://dora.dev/); *Extreme Programming Explained* (Kent Beck)
