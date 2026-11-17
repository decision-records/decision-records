# Gestão de relacionamento com contatos

* Status: pedido de comentários
* Data: 2026-10-12
* Quem decide: Diretor de Receita (a confirmar)
* Responsável: Chefe de Operações de Receita

Resumo: trabalho em andamento. Este é um ponto de partida para uma equipe que avalia como gerir contatos e relacionamentos com clientes, parceiros e fornecedores de uma forma compartilhada, incluindo o consentimento. Mostra como uma equipe pode formular a questão, debater as opções e reunir informações. Não registra nenhuma decisão.

## Problema

Os contatos de clientes e parceiros ficam em caixas de entrada individuais, planilhas pessoais e várias ferramentas diferentes. Quando um gerente de contas sai, os seus relacionamentos saem junto, e a mesma pessoa já foi contatada no mesmo dia por equipes diferentes. A organização também não consegue mostrar onde está registrado o consentimento de uma pessoa para ser contatada.

As perguntas a responder:

* Quem precisa das informações de contato, para quê, e quem é dono delas?
* Que dados mantemos, onde, e com que qualidade?
* O que precisamos registrar sobre consentimento e preferências, e como respondemos a pedidos para ver, corrigir ou excluir dados pessoais?
* Que solução serve a toda a organização, e não apenas a vendas?

## Premissas

Cada premissa é algo a testar.

* **Os gerentes de contas registrarão as interações num sistema compartilhado** se for fácil e se os seus relacionamentos continuarem sendo deles para trabalhar. Teste: perguntar-lhes do que precisariam e fazer um teste.
* **Os dados existentes são bons o bastante para migrar** depois de limpar e mesclar duplicatas. Teste: amostrar registros e medir duplicatas e lacunas.
* **Um sistema pode servir a várias equipes** (vendas, suporte, parceiros, fornecedores). Teste: mapear as necessidades de cada equipe e ver onde diferem.
* **O consentimento pode ser registrado de forma confiável** no novo sistema. Teste: definir o modelo de consentimento com o Jurídico e verificar o que cada opção suporta.

## Restrições

* O consentimento e as preferências de contato devem ser registrados em um só lugar, e os pedidos de uma pessoa devem poder ser respondidos a partir desse registro.
* As regras sobre quem pode ver e alterar quais registros devem ser acordadas antes da migração.
* A migração consome tempo da equipe.
* Desconhecido, a confirmar: os requisitos legais aplicáveis (por exemplo, o GDPR), as regras de retenção de dados e os termos contratuais das ferramentas atuais.

## Opções consideradas

Para cada opção, estime valor, custos, prazo e necessidades de capacidade, e anote que evidências fariam a equipe mudar de ideia.

* **Manter o atual conjunto de ferramentas e planilhas.**
  * Valor: nenhum custo ou esforço de mudança.
  * Riscos: continuam os relacionamentos perdidos, o contato duplicado e o consentimento pouco claro.
* **Adotar um sistema compartilhado de gestão de relacionamento com contatos para toda a empresa.**
  * Valor: um registro por pessoa e organização; histórico compartilhado; consentimento registrado.
  * Fatores de custo: licenças; migração de dados; integração; treinamento; administração; o esforço de limpar os dados.
  * Riscos: mudança de hábitos; as regras de acesso precisam de desenho.
* **Acrescentar a gestão de contatos apenas ao CRM de vendas existente.**
  * Valor: mais rápido; a ferramenta é conhecida.
  * Riscos: deixa de fora parceiros, fornecedores e equipes que não são de vendas.
* **Implantação em etapas**, começando pelas equipes que mais sentem a dor, desativando as outras ferramentas quando seus dados tiverem migrado.
* **Abordagem de dados mestres.** Manter ferramentas especializadas, mas criar um registro confiável de cada contato, compartilhado por integração.

## Argumento

Pontos de debate que a equipe deve esperar:

* **Escopo.** Só clientes, ou também parceiros, fornecedores e outros?
* **Propriedade dos relacionamentos.** A empresa, e não o indivíduo, deveria manter o registro. Como deixamos as pessoas confortáveis com isso?
* **Privacidade.** Coletar apenas o necessário; registrar a base legal, incluindo o consentimento onde se aplica.
* **Custo de limpar os dados.** Muitas vezes maior que o esperado.

Como a equipe poderia avaliar custos e trade-offs:

1. Listar os dados mantidos em cada lugar, sua qualidade e seus riscos.
2. Estimar os custos num horizonte declarado, nos termos da organização: licenças, migração, limpeza, integração, treinamento, administração e saída. Mostrar faixas.
3. Estimar os benefícios: menos relacionamentos perdidos, menos contato duplicado, respostas mais rápidas a pedidos de dados, melhores relatórios.
4. Avaliar privacidade e segurança: tratamento do consentimento (a ISO/IEC 29184 descreve avisos e consentimento online), controles de segurança (ISO/IEC 27001) e gestão de privacidade (ISO/IEC 27701).
5. Escolher medidas: parcela de contatos com responsável e consentimento registrados, duplicatas, tempo para responder a um pedido e uso pelas equipes. Revisar após o primeiro período.

## Decisão

**Ainda não decidido.** Este é um ponto de partida. Uma equipe que o use deve substituir esta seção pela sua própria decisão.

Forma sugerida de chegar a uma decisão:

* Confirmar quem decide e quem deve ser consultado (Jurídico, Vendas, Suporte, Parcerias).
* Acordar primeiro os critérios e os pesos.
* Reunir as evidências acima e registrar o que foi encontrado.
* Compartilhar para comentários, depois decidir e atualizar o Status.

## Implicações

Se a equipe decidir por um sistema compartilhado, precisaria:

* Nomear um líder para a seleção, a migração e as regras de acesso.
* Registrar o consentimento e as preferências de contato no registro e tratar os pedidos a partir dele.
* Verificar o uso no primeiro período e ajustar o processo, e não apenas os lembretes, se as pessoas não registrarem as interações.
* Limpar e mesclar contatos duplicados durante a migração.
* Desativar as outras ferramentas quando os dados tiverem migrado.

## Decisões relacionadas

* [Selecionar uma plataforma de CRM](../selecao-de-crm/): a escolha de ferramenta em que isto se apoia.
* Decisões ainda não tomadas: retenção de dados; regras de acesso; integração com outros sistemas.

## Notas relacionadas

* Pendências: inventariar onde os contatos são mantidos; amostrar a qualidade dos dados; pedir ao Jurídico que revise os campos de consentimento.
* Saiba mais:
  * Wikipédia: [Customer relationship management](https://en.wikipedia.org/wiki/Customer_relationship_management), [Contact manager](https://en.wikipedia.org/wiki/Contact_manager), [Master data management](https://en.wikipedia.org/wiki/Master_data_management), [Data quality](https://en.wikipedia.org/wiki/Data_quality), [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation), [Consent](https://en.wikipedia.org/wiki/Consent)
  * ISO: [ISO/IEC 29184:2020, Online privacy notices and consent](https://www.iso.org/standard/70331.html), [ISO/IEC 27701:2025, Privacy information management systems](https://www.iso.org/standard/27701), [ISO/IEC 27001:2022, Information security management systems](https://www.iso.org/standard/27001)
  * Leitura: [UK ICO: consent](https://www.ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/consent/); [Regulation (EU) 2016/679 (GDPR)](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
