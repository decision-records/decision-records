# Construir ou comprar para um projeto

* Status: pedido de comentários
* Data: 2026-06-01
* Quem decide: COO (a confirmar)
* Responsável: Diretor de Operações

Resumo: trabalho em andamento. Este é um ponto de partida para uma equipe que precisa de uma nova capacidade, aqui uma ferramenta de agendamento voltada ao cliente, e está decidindo se a constrói, a compra ou faz algo intermediário. Mostra como uma equipe pode formular a questão, debater as opções e reunir informações. Não registra nenhuma decisão.

## Problema

Uma empresa de serviços agenda o trabalho com um processo manual baseado em planilhas, que causou reservas duplicadas e prejudicou o relacionamento com clientes. É preciso uma solução num prazo limitado, e a equipe deve decidir se constrói uma ferramenta internamente ou compra uma existente.

As perguntas a responder:

* O que a ferramenta deve fazer (requisitos) e quais deles são essenciais?
* Quão bem cada caminho atende aos requisitos, no tempo disponível?
* Qual é o custo total de cada caminho ao longo da sua vida útil, incluindo aquilo a que a equipe renuncia ao escolhê-lo?
* O que acontece se os requisitos mudarem ou se o caminho escolhido falhar?

## Premissas

Cada premissa é algo a testar.

* **A maioria das necessidades de agendamento é comum a outras organizações, então um produto existente pode atendê-las.** Teste: listar os requisitos e pedir aos fornecedores que mostrem como cada um é atendido.
* **Os casos incomuns são pequenos o bastante para serem tratados com um contorno.** Teste: contar com que frequência ocorrem e registrar o contorno de cada um.
* **Os engenheiros internos conseguem construir e manter a ferramenta.** Teste: estimar o esforço com as pessoas que a fariam e perguntar o que mais deixariam de fazer.
* **Os prazos dos fornecedores são realistas.** Teste: conversar com clientes de referência de porte semelhante, inclusive aqueles cujos projetos atrasaram.

## Restrições

* É preciso uma solução em um prazo fixo.
* Outras iniciativas de produto já comprometidas devem manter seus prazos, de modo que a capacidade de engenharia não pode simplesmente ser retirada delas.
* A ferramenta trata dados de clientes, então é preciso verificar segurança e privacidade.
* Desconhecido, a confirmar: necessidades de integração, crescimento esperado e o que acontece no fim de um contrato com fornecedor.

## Opções consideradas

Para cada opção, estime valor, custos, prazo e necessidades de capacidade, e anote que evidências fariam a equipe mudar de ideia.

* **Construir internamente.**
  * Valor: encaixe exato nas regras da organização; controle total do roteiro.
  * Fatores de custo: design, desenvolvimento, testes, hospedagem, suporte e manutenção durante toda a vida da ferramenta; o custo de oportunidade do que os engenheiros deixam de construir.
  * Formato do prazo: muitas vezes maior que as primeiras estimativas; o valor chega no fim.
  * Capacidades necessárias: gestão de produto; engenharia; operações.
* **Comprar um produto existente.**
  * Valor: mais rápido; custos diluídos; aproveita as melhorias do fornecedor.
  * Fatores de custo: licenças, implantação, configuração, treinamento, integração, administração e saída.
  * Riscos: lacunas em relação aos requisitos; mudanças do fornecedor; dependência (lock-in).
* **Comprar um produto e encomendar trabalho sob medida ao fornecedor.** Fecha lacunas, mas acrescenta tempo e custo e traz risco de entrega.
* **Montar a partir de ferramentas menores** (por exemplo, uma plataforma low-code ou uma combinação de serviços existentes).
* **Melhorar primeiro o processo manual** com um paliativo, para ganhar tempo para uma decisão melhor.

## Argumento

Pontos de debate que a equipe deve esperar:

* **Adequação versus velocidade.** Um encaixe perfeito que chega tarde pode ser pior do que um bom encaixe agora.
* **Núcleo ou contexto?** O agendamento faz parte do que torna o negócio distintivo? Se não, costuma-se preferir comprar.
* **Custos ocultos.** Construir tem manutenção contínua; comprar tem licenças, integração e saída contínuas.
* **Reversibilidade.** Qual escolha é mais fácil de desfazer se se mostrar errada?

Como a equipe poderia avaliar custos e trade-offs:

1. Escrever os requisitos e classificá-los. Pontuar cada caminho em relação a eles e anotar as lacunas.
2. Estimar o custo total de propriedade num horizonte declarado, nos termos da própria organização: custos únicos, recorrentes, tempo da equipe interna, integração, treinamento e saída. Mostrar faixas.
3. Estimar o custo do atraso: o efeito de cada período adicional de reservas duplicadas.
4. Comparar as opções nos cenários melhor, provável e pior, e testar o efeito de mudanças nos requisitos.
5. Usar uma matriz ponderada (adequação, velocidade, custo, risco, controle, reversibilidade) e um pre-mortem.

## Decisão

**Ainda não decidido.** Este é um ponto de partida. Uma equipe que o use deve substituir esta seção pela sua própria decisão.

Forma sugerida de chegar a uma decisão:

* Confirmar quem decide e quem precisa concordar.
* Acordar primeiro requisitos e pesos.
* Reunir as evidências acima e registrar o que foi encontrado.
* Compartilhar para comentários, depois decidir e atualizar o Status.

## Implicações

Se a equipe decidir comprar, precisaria:

* Nomear um líder de implantação e planejar o treinamento dentro do prazo do fornecedor.
* Documentar contornos para os casos não suportados, registrar com que frequência são usados e revisar após o uso real.
* Definir o que desencadearia uma decisão subsequente sobre trabalho sob medida.
* Confirmar que nenhuma capacidade de engenharia é retirada de iniciativas comprometidas.

## Decisões relacionadas

* [Selecionar uma plataforma de CRM](../selecao-de-crm/): uma escolha semelhante para outro sistema.
* [Escolher o banco de dados principal](../escolha-do-banco-de-dados/): uma instância tecnológica das questões de construir/comprar e de dependência.
* [Reduzir o risco de concentração em um único fornecedor](../dependencia-de-um-fornecedor/): dependência de um fornecedor.
* Decisões ainda não tomadas: integração sob medida; retenção de dados.

## Notas relacionadas

* Pendências: escrever e classificar os requisitos; pedir clientes de referência aos fornecedores; estimar o esforço de construção com os engenheiros.
* Saiba mais:
  * Wikipédia: [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership), [Commercial off-the-shelf](https://en.wikipedia.org/wiki/Commercial_off-the-shelf), [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing), [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost), [Decision matrix](https://en.wikipedia.org/wiki/Decision_matrix), [Pre-mortem](https://en.wikipedia.org/wiki/Pre-mortem)
  * ISO: [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html)
  * Vídeo: [Making better build vs buy decisions](https://www.youtube.com/watch?v=sGOamUc0zM0) (Chris Bell, LeadDev)
