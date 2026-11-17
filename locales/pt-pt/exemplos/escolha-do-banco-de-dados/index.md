# Escolher o banco de dados principal

* Status: pedido de comentários
* Data: 2026-03-22
* Quem decide: CTO (a confirmar)
* Responsável: Chefe de Engenharia de Plataforma

Resumo: trabalho em andamento. Este é um ponto de partida para uma equipe que escolhe o banco de dados principal de um produto em crescimento. É o único exemplo de tecnologia deste conjunto e mostra que as decisões de arquitetura seguem o mesmo padrão das decisões de negócio do resto desta coleção. Mostra como uma equipe pode formular a questão, debater as opções e reunir informações. Não registra nenhuma decisão.

## Problema

O banco de dados atual se aproxima dos seus limites de escala, e a equipe de engenharia espera que o crescimento alcance esses limites em breve. É preciso escolher uma substituição ou uma forma diferente de escalar antes do próximo grande lançamento do produto.

As perguntas a responder:

* Quais são os limites reais hoje (leituras, gravações, armazenamento, latência, operações) e com que rapidez nos aproximamos deles?
* Que qualidades importam mais (consistência, disponibilidade, latência, custo, operabilidade, conformidade) e em que ordem?
* Escalamos o que temos, passamos a um serviço gerenciado ou operamos algo nós mesmos?
* Como migraríamos e como sairíamos novamente, se necessário?

## Premissas

Cada premissa é algo a testar.

* **A projeção de crescimento é realista.** Teste: comparar com o crescimento passado e com os planos de vendas e de produto; considerar um caso alto e um baixo.
* **O banco de dados atual pode ser escalado mais, a um preço.** Teste: perguntar ao fornecedor e à equipe quanta folga resta e quanto custa.
* **Nossa carga se adapta a um desenho escalável horizontalmente.** Teste: estudar consultas e transações; procurar operações que exigem consistência forte entre registros.
* **A equipe consegue operar a opção escolhida.** Teste: listar as habilidades necessárias e quem as tem.

## Restrições

* A mudança deve estar pronta antes do lançamento, com uma migração em etapas que não o perturbe.
* O custo recorrente deve caber no orçamento aprovado.
* Obrigações de proteção de dados e segurança se aplicam a qualquer escolha.
* Desconhecido, a confirmar: volume de dados, requisitos de retenção, requisitos regionais, integração com outros sistemas e compromissos com fornecedores.

## Opções consideradas

Para cada opção, estime valor, custos, prazo e necessidades de capacidade, e anote que evidências fariam a equipe mudar de ideia.

* **Escalar verticalmente o banco de dados atual** (uma máquina ou plano maior).
  * Valor: menor risco de migração; sem mudanças na aplicação.
  * Riscos: ganha uma quantidade limitada de tempo; o custo sobe de forma acentuada.
* **Passar a um serviço de banco de dados gerenciado e escalável horizontalmente.**
  * Valor: elimina o escalonamento e boa parte do trabalho operacional; suporte do fornecedor.
  * Fatores de custo: cobranças recorrentes do serviço; migração; mudanças na aplicação; custos de saída de dados e de rescisão.
  * Riscos: dependência dos recursos e dos preços do fornecedor.
* **Passar a um banco de dados hospedado por nós e escalável horizontalmente.**
  * Valor: custo recorrente potencialmente menor; mais controle.
  * Fatores de custo: desenvolver habilidades operacionais; carga de plantão; ferramentas; atualizações.
  * Riscos: a sobrecarga operacional pode ser maior que a esperada.
* **Redesenhar a camada de dados** (por exemplo, cache, réplicas de leitura, particionamento ou separação de cargas) para estender o banco de dados atual.
* **Usar bancos de dados diferentes para cargas diferentes** (persistência poliglota), ao custo de mais sistemas para operar.

## Argumento

Pontos de debate que a equipe deve esperar:

* **Consistência versus disponibilidade.** O teorema CAP diz que um sistema distribuído particionado não pode garantir ambas. Qual importa mais para cada parte do produto? Muitas cargas toleram consistência atrasada; algumas não.
* **Gerenciado versus hospedado por nós.** Custo de serviço maior contra risco operacional menor. Como a equipe deve valorizar o tempo dos engenheiros?
* **Dependência (lock-in).** O que se perde ao usar um recurso específico de um fornecedor, e o que se ganha?
* **Padrões.** Quanto dependemos do SQL (padronizado na ISO/IEC 9075) em relação a um modelo de consulta específico de um fornecedor?

Como a equipe poderia avaliar custos e trade-offs:

1. Testar com a sua própria carga: criar um benchmark realista e medir cada candidato sob carga esperada e de pico, incluindo cenários de falha.
2. Estimar o custo total de propriedade num horizonte declarado, nos termos da própria organização: cobranças de serviço ou licença, hospedagem, migração, tempo de engenharia, plantão, treinamento, suporte e saída. Mostrar faixas.
3. Pontuar os candidatos numa matriz ponderada das qualidades que importam (o modelo de qualidade de produto ISO/IEC 25010 oferece um vocabulário para isso) e testar a sensibilidade aos pesos.
4. Estimar quanto tempo cada opção ganha e quanto custa quando o limite for alcançado de novo.
5. Planejar a saída: como dados e código sairiam de cada escolha?

## Decisão

**Ainda não decidido.** Este é um ponto de partida. Uma equipe que o use deve substituir esta seção pela sua própria decisão.

Forma sugerida de chegar a uma decisão:

* Confirmar quem decide e quem deve ser consultado (segurança, finanças, produto).
* Acordar primeiro os critérios e os pesos.
* Reunir as evidências acima, incluindo os resultados do benchmark, e registrar o que foi encontrado.
* Compartilhar para comentários, depois decidir e atualizar o Status.

## Implicações

Se a equipe decidir migrar, precisaria:

* Planejar uma migração em etapas com um período de operação em paralelo antes da virada completa.
* Confirmar o orçamento para os custos recorrentes.
* Planejar decisões subsequentes, por exemplo sobre pool de conexões e réplicas de leitura.
* Registrar o caminho de saída esperado.

## Decisões relacionadas

* [Construir ou comprar para um projeto](../construir-ou-comprar/): raciocínio geral de construir/comprar.
* [Reduzir o risco de concentração em um único fornecedor](../dependencia-de-um-fornecedor/): dependência de um fornecedor.
* Decisões ainda não tomadas: estratégia de cache e de réplicas; retenção de dados.

## Notas relacionadas

* Pendências: coletar métricas de produção; descrever as características da carga; selecionar candidatos para um benchmark.
* Saiba mais:
  * Wikipédia: [Database](https://en.wikipedia.org/wiki/Database), [Relational database](https://en.wikipedia.org/wiki/Relational_database), [NoSQL](https://en.wikipedia.org/wiki/NoSQL), [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), [ACID](https://en.wikipedia.org/wiki/ACID), [Eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency), [Scalability](https://en.wikipedia.org/wiki/Scalability), [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning)
  * ISO: [ISO/IEC 9075-1:2023, SQL framework](https://www.iso.org/standard/76583.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC 27001:2022, Information security management](https://www.iso.org/standard/27001)
  * Vídeo: [CAP Theorem Explained](https://www.youtube.com/watch?v=9gfeDlQrvhs) (DatabaseTown)
