# Reduzir o risco de concentração em um único fornecedor

* Status: pedido de comentários
* Data: 2026-05-20
* Quem decide: COO (a confirmar)
* Responsável: Chefe de Compras

Resumo: trabalho em andamento. Este é um ponto de partida para uma equipe que avalia como responder a uma forte dependência de um único fornecedor para serviços críticos. Mostra como uma equipe pode formular o risco, debater as opções e reunir informações. Não registra nenhuma decisão.

## Problema

Uma revisão interna de riscos constatou que grande parte do gasto com infraestrutura crítica vai para um único fornecedor. Esse fornecedor teve uma interrupção não planejada que afetou um serviço voltado ao cliente, e seus preços subiram sem teto contratual. Continuar como está deixa a organização exposta a risco de disponibilidade e a crescimento de custos sem controle.

As perguntas a responder:

* Quanto daquilo de que dependemos está realmente concentrado, e o que acontece com o negócio se o fornecedor falhar ou voltar a aumentar os preços?
* Qual a probabilidade e a gravidade desses eventos, e o que estamos dispostos a aceitar?
* Quais são as formas realistas de reduzir o risco, a que custo e com que rapidez?
* Como seria uma saída segura ou uma alternativa de contingência?

## Premissas

Cada premissa é algo a testar.

* **A interrupção e o aumento de preço refletem um padrão duradouro**, e não um fato isolado. Teste: revisar o histórico de incidentes, as comunicações do fornecedor e os preços de mercado.
* **Um segundo fornecedor consegue executar parte da carga crítica com qualidade aceitável.** Teste: selecionar candidatos e fazer um teste limitado.
* **O fornecedor principal melhorará os termos se vir alternativas críveis.** Teste: pedir uma proposta de renovação enquanto se avaliam outras opções.
* **Uma migração em etapas pode evitar a interrupção do serviço.** Teste: revisar as dependências técnicas e os limites do contrato para mover carga.

## Restrições

* O serviço voltado ao cliente não pode ser interrompido durante nenhuma transição.
* Os termos contratuais podem limitar a rapidez com que a carga pode ser movida e podem incluir cobranças pela saída.
* Qualquer novo fornecedor deve ser avaliado com os mesmos critérios do original.
* Desconhecido, a confirmar: portabilidade de dados, serviços proprietários em uso, taxas de saída e expectativas regulatórias sobre o risco de terceiros.

## Opções consideradas

Para cada opção, estime valor, custos, prazo e necessidades de capacidade, e anote que evidências fariam a equipe mudar de ideia.

* **Aceitar o risco e monitorar.**
  * Valor: nenhum custo ou esforço no curto prazo.
  * Riscos: mantém a exposição tanto a interrupções quanto a preços; a revisão de riscos pode não permitir isso na concentração atual.
* **Renegociar com o fornecedor atual** níveis de serviço, um teto de preço e melhores termos de saída; continuar com um único fornecedor.
  * Valor: trata preço e responsabilização.
  * Riscos: não remove o ponto único de falha.
* **Diversificar: mover parte da carga crítica para um segundo fornecedor** e renegociar o contrato principal para o restante.
  * Valor: reduz a concentração; fortalece a posição de negociação.
  * Fatores de custo: seleção de fornecedor; esforço de migração; custos duplicados de operação por um tempo; maior complexidade operacional (dois conjuntos de procedimentos e habilidades).
  * Formato do prazo: em etapas, com pontos de verificação.
* **Construir resiliência sem um segundo fornecedor**: backups, procedimentos de recuperação testados e mudanças de design que tornem a troca possível depois.
* **Migrar totalmente para outro fornecedor.** Maior ruptura; justificada apenas se o fornecedor atual for inaceitável.

## Argumento

Pontos de debate que a equipe deve esperar:

* **Apetite ao risco.** Que nível de dependência é aceitável? Quem decide?
* **Custo da resiliência.** A redundância tem um preço contínuo; vale o seguro, e para quais serviços?
* **Complexidade.** Dois fornecedores aumentam a complexidade operacional. A equipe tem as habilidades?
* **Dependência (lock-in).** O quanto a organização depende dos recursos proprietários de um fornecedor, e quanto custaria sair?

Como a equipe poderia avaliar custos e trade-offs:

1. Identificar os serviços críticos e suas dependências. Para cada um, estimar o impacto no negócio de uma interrupção de diferentes durações, como faixas.
2. Estimar a probabilidade de falha e de mudança de preço com base no histórico e em evidências do fornecedor, com incerteza.
3. Calcular o custo de cada opção: migração, custos duplicados de operação, ferramentas, treinamento, compras e a complexidade contínua; incluir custos de saída dos dois fornecedores.
4. Comparar a redução esperada do risco com o custo e testar a sensibilidade às estimativas de probabilidade.
5. Definir indicadores antecedentes e pontos de gatilho, por exemplo uma violação de nível de serviço, uma mudança de preço ou um evento de segurança.

## Decisão

**Ainda não decidido.** Este é um ponto de partida. Uma equipe que o use deve substituir esta seção pela sua própria decisão.

Forma sugerida de chegar a uma decisão:

* Confirmar quem decide e o apetite ao risco aplicável.
* Acordar primeiro os critérios e os pesos.
* Reunir as evidências acima e registrar o que foi encontrado.
* Compartilhar para comentários, depois decidir e atualizar o Status.

## Implicações

Se a equipe decidir diversificar, precisaria:

* Conduzir um processo de seleção de fornecedor com os mesmos critérios do original.
* Planejar uma migração em etapas que evite interrupções.
* Renegociar o contrato principal em paralelo.
* Aceitar a maior complexidade operacional, com um roteiro para cada fornecedor.
* Reportar regularmente a concentração e os termos de nível de serviço até atingir a meta.

## Decisões relacionadas

* [Escolher o banco de dados principal](../escolha-do-banco-de-dados/): uma instância tecnológica da mesma questão de dependência.
* [Construir ou comprar para um projeto](../construir-ou-comprar/): escolhas de aquisição relacionadas.
* Decisões ainda não tomadas: plano de saída e continuidade; seleção de fornecedor.

## Notas relacionadas

* Pendências: listar os serviços críticos e seus fornecedores; reunir o histórico de incidentes; ler o contrato quanto a termos de saída e de preço.
* Saiba mais:
  * Wikipédia: [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in), [Concentration risk](https://en.wikipedia.org/wiki/Concentration_risk), [Single point of failure](https://en.wikipedia.org/wiki/Single_point_of_failure), [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning), [Disaster recovery](https://en.wikipedia.org/wiki/Disaster_recovery), [Multicloud](https://en.wikipedia.org/wiki/Multicloud), [Risk register](https://en.wikipedia.org/wiki/Risk_register)
  * ISO: [ISO 31000 family, Risk management](https://www.iso.org/standards/popular/iso-31000-family), [ISO 22301:2019, Business continuity management systems](https://www.iso.org/standard/75106.html), [ISO 20400:2017, Sustainable procurement guidance](https://www.iso.org/standard/63026.html)
  * Vídeo: [Preparing for Vendor Lock-In: The Importance of an Exit Strategy](https://www.youtube.com/watch?v=vtdprxMFlH8) (Razorwire)
  * Leitura: [NIST SP 800-161 Rev. 1, Cybersecurity Supply Chain Risk Management Practices](https://csrc.nist.gov/pubs/sp/800/161/r1/final)
