# Escolher nossos frameworks de tecnologia da informação

* Status: pedido de comentários
* Data: 2026-10-14
* Quem decide: Diretor de Informação e Diretor de Tecnologia (a confirmar)
* Responsável: Chefe de Operações de Tecnologia

Resumo: trabalho em andamento. Este é um ponto de partida para um grupo de tecnologia a quem foi pedido que adote vários frameworks (por exemplo, ITIL, o Manifesto Ágil, a Programação Extrema e o Seis Sigma) e que precisa decidir quais usar, para qual trabalho e em que ordem. Mostra como uma equipe pode formular a questão, debater as opções e reunir informações. Não registra nenhuma decisão.

## Problema

Líderes diferentes pediram ao grupo de tecnologia que adote o ITIL para o gerenciamento de serviços, o Manifesto Ágil para a entrega, a Programação Extrema para a engenharia e o Seis Sigma para a qualidade, às vezes nas mesmas equipes e no mesmo período. Cada pedido é razoável sozinho, mas juntos se sobrepõem, usam vocabulários diferentes e pedem que as pessoas mudem mais rápido do que conseguem absorver.

As perguntas a responder:

* Que problema cada framework resolve e para que tipo de trabalho?
* Onde se sobrepõem ou entram em conflito, e qual deve ter precedência?
* Em que ordem devemos introduzi-los e quantas mudanças uma equipe consegue absorver de uma vez?
* Como saberemos se a combinação ajuda?

## Premissas

Cada premissa é algo a testar.

* **Cada framework funciona melhor no tipo de trabalho para o qual foi concebido.** Teste: ler as fontes e conversar com pessoas que usaram cada framework.
* **As equipes conseguem absorver um novo framework por vez**, e não vários. Teste: perguntar às equipes que mudanças já estão em andamento e que capacidade têm.
* **Os patrocinadores aceitarão esperar** se souberem a ordem e o motivo. Teste: conversar com eles cedo.
* **Uma fronteira escrita entre os frameworks reduzirá o conflito.** Teste: redigir uma e testá-la em exemplos reais de conflito.

## Restrições

* O grupo tem capacidade limitada de mudança em qualquer período.
* Os frameworks usam vocabulários diferentes, então termos compartilhados como incidente, mudança, entrega e defeito devem ser definidos uma única vez.
* A adoção plena de vários frameworks pode levar anos.
* Desconhecido, a confirmar: a prática atual, expectativas contratuais ou de auditoria e quaisquer frameworks já em uso.

## Opções consideradas

Para cada opção, estime valor, custos, prazo e necessidades de capacidade, e anote que evidências fariam a equipe mudar de ideia.

* **Adotar todos os frameworks pedidos em todos os lugares.**
  * Valor: cada patrocinador recebe o que pediu.
  * Riscos: sobrecarga; orientações conflitantes (por exemplo, aprovações fixas de mudança contra entrega contínua); impossível dizer qual mudança causou qual resultado.
* **Adotar um framework como padrão único.**
  * Valor: simples de explicar.
  * Riscos: nenhum framework cobre igualmente bem operação de serviços, entrega de produtos, prática de engenharia e qualidade.
* **Atribuir cada framework ao tipo de trabalho a que se adapta e introduzi-los em etapas, um de cada vez.** Por exemplo, práticas do ITIL para operar serviços em produção, os valores do Manifesto Ágil para como as equipes de entrega planejam e trabalham, práticas da Programação Extrema para construir software e o Seis Sigma para processos em que os defeitos podem ser medidos.
  * Valor: mais claro para as equipes; mais fácil de aprender.
  * Fatores de custo: um documento de fronteiras; coordenação; um programa longo.
* **Adotar um guarda-chuva de governança ou de normas**, como a ISO/IEC 38500 (governança de TI) ou a ISO/IEC 20000-1, e deixar as equipes escolherem métodos dentro dele.
* **Não adotar nenhum por inteiro**; selecionar práticas que tratem dos problemas medidos do grupo.

## Argumento

Pontos de debate que a equipe deve esperar:

* **Frameworks ou resultados?** O objetivo são melhores resultados para os clientes, não adotar frameworks. Quais resultados importam mais?
* **Conflitos.** Onde as orientações conflitam, quem decide?
* **Ordem.** Qual deve ir primeiro: o de maior pressão dos patrocinadores ou o que apoia os outros?
* **Vocabulário.** Palavras compartilhadas reduzem o atrito, mas a falsa equivalência esconde diferenças reais.

Como a equipe poderia avaliar custos e trade-offs:

1. Listar primeiro os problemas e os resultados desejados, com medidas (por exemplo, da pesquisa DORA sobre desempenho de entrega de software, além de medidas de serviço e qualidade).
2. Para cada framework, estimar os custos nos termos da própria organização: treinamento, mudança de processos, ferramentas, tempo perdido e suporte contínuo. Mostrar faixas.
3. Estimar a capacidade de mudança de cada equipe e sequenciar de modo que nenhuma carregue mais do que consegue absorver.
4. Comparar as opções nos cenários melhor, provável e pior; escolher a mais fácil de ajustar se as evidências mudarem.
5. Revisar após os dois primeiros frameworks e rever a ordem se as evidências sugerirem uma melhor.

## Decisão

**Ainda não decidido.** Este é um ponto de partida. Uma equipe que o use deve substituir esta seção pela sua própria decisão.

Forma sugerida de chegar a uma decisão:

* Confirmar quem decide e quem deve ser consultado (incluindo os patrocinadores).
* Acordar primeiro os critérios e os pesos.
* Reunir as evidências acima e registrar o que foi encontrado.
* Compartilhar para comentários, depois decidir e atualizar o Status.

## Implicações

Se a equipe decidir atribuir os frameworks por tipo de trabalho e introduzi-los em etapas, precisaria:

* Nomear um responsável pelo documento de fronteiras e uma forma de resolver conflitos, com escalonamento.
* Iniciar apenas um framework por vez numa equipe e começar o seguinte somente quando o anterior tiver cumprido as suas próprias medidas de saída.
* Informar agora aos patrocinadores dos frameworks posteriores a ordem e o motivo.
* Definir os termos compartilhados uma única vez, no documento de fronteiras.
* Revisar toda a abordagem após os dois primeiros frameworks.

## Decisões relacionadas

* [O Manifesto Ágil](../manifesto-agil/), [ITIL 5](../itil-5/), [Programação Extrema](../programacao-extrema/) e [Seis Sigma](../seis-sigma/): as decisões sobre cada framework.
* [Frameworks de negócio](../frameworks-de-negocio/): o padrão geral de adoção em etapas.
* Decisões ainda não tomadas: ferramentas; a ordem dos frameworks posteriores.

## Notas relacionadas

* Pendências: listar as práticas atuais; perguntar aos patrocinadores que resultados querem; redigir um primeiro documento de fronteiras.
* Saiba mais:
  * Wikipédia: [ITIL](https://en.wikipedia.org/wiki/ITIL), [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development), [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Six Sigma](https://en.wikipedia.org/wiki/Six_Sigma), [COBIT](https://en.wikipedia.org/wiki/COBIT), [Corporate governance of information technology](https://en.wikipedia.org/wiki/Corporate_governance_of_information_technology), [DevOps](https://en.wikipedia.org/wiki/DevOps)
  * ISO: [ISO/IEC 38500:2024, Governance of IT for the organization](https://www.iso.org/standard/81684.html), [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO 13053-1:2011, Six Sigma: DMAIC methodology](https://www.iso.org/standard/52901.html)
  * Vídeo: [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex); [Agile Product Ownership in a Nutshell](https://www.youtube.com/watch?v=502ILHjX9EE) (Henrik Kniberg)
  * Leitura: [DORA](https://dora.dev/); [Manifesto for Agile Software Development](https://agilemanifesto.org/)
