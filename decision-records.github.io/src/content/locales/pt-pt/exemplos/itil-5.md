# ITIL 5

* Status: pedido de comentários
* Data: 2026-09-30
* Quem decide: Diretor de Informação (a confirmar)
* Responsável: Chefe de Gerenciamento de Serviços de TI

Resumo: trabalho em andamento. Este é um ponto de partida para uma organização de TI que avalia como, e em que ordem, adotar o ITIL 5 para o gerenciamento de serviços de TI. Mostra como uma equipe pode formular a questão, debater as opções e reunir informações. Não registra nenhuma decisão e não reproduz o que o ITIL 5 diz.

## Problema

A central de serviços de TI e as equipes ao seu redor cresceram sem uma forma comum de trabalhar: incidentes, solicitações e mudanças são tratados de modo diferente por equipes diferentes, e os incidentes recorrentes raramente são analisados. A liderança tem interesse em basear o gerenciamento de serviços de TI no ITIL, a orientação amplamente usada para gerenciamento de serviços de TI, na sua versão mais recente (ITIL 5), para que equipes internas, fornecedores e auditores compartilhem práticas e vocabulário.

O ITIL 5 é novo e está sendo lançado em etapas, então a equipe deve primeiro estabelecer o que de fato está disponível e estável. As perguntas a responder:

* Que problema tentamos resolver, e o ITIL 5 é a forma certa de resolvê-lo, ou a organização seria mais bem servida adotando práticas selecionadas, permanecendo na versão que já conhece ou alinhando-se à norma internacional ISO/IEC 20000-1?
* Se a equipe prosseguir, em que ordem e em que ritmo?
* O que precisamos ser capazes de fazer (capacidades, ferramentas, dados) antes de cada passo?

## Premissas

Cada premissa é algo a testar.

* **A dor está principalmente em algumas práticas** (por exemplo, tratamento de incidentes, solicitações e mudanças). Teste: examinar uma amostra de incidentes e mudanças recentes e mapear onde se perdem tempo e qualidade.
* **As práticas podem ser adotadas separadamente**, e não apenas como um pacote. Teste: ler a orientação do framework e conversar com organizações que o adotaram em etapas.
* **A central de serviços consegue se requalificar enquanto opera o serviço.** Teste: estimar o tempo que cada prática exige da equipe, em relação ao tempo de que dispõe.
* **Fornecedores e auditores valorizarão um vocabulário comum.** Teste: perguntar aos principais o que usam hoje e o que esperam.
* **O material do ITIL 5 está maduro o bastante para ser adotado agora?** Teste: verificar o que já foi publicado e certificado e o que ainda vem por aí.

## Restrições

* O serviço deve continuar funcionando durante qualquer mudança; a central de serviços não pode parar para se requalificar.
* As mudanças de ferramentas devem se limitar ao que um passo exige; uma grande mudança de plataforma é uma decisão separada.
* Os modos de trabalho antigo e novo coexistirão por um tempo. A equipe deve dizer por quanto tempo isso é aceitável.
* Desconhecido, a confirmar: modelos de custo de licenciamento e treinamento do framework, termos de contratos de fornecedores que citam um determinado framework e quaisquer expectativas de auditoria ou regulatórias.

## Opções consideradas

Para cada opção, a equipe deve estimar valor, custos, prazo e necessidades de capacidade, e anotar as evidências que a fariam mudar de ideia.

* **Adotar tudo de uma vez em todas as equipes.**
  * Valor: uma forma comum de trabalhar o mais cedo possível.
  * Fatores de custo: treinamento de todo o pessoal; redesenho de processos de todas as práticas; mudanças de ferramentas; capacidade perdida enquanto as equipes se requalificam; o custo de reverter um mau começo.
  * Formato do prazo: plano curto, recuperação longa se correr mal.
  * Capacidades necessárias: forte liderança da mudança e capacidade ociosa suficiente para absorvê-la.
* **Adotar por prática**, começando onde a dor é maior e os usuários são mais afetados (comumente tratamento de incidentes e solicitações), depois mudanças, depois análise de problemas e melhoria contínua, com cada etapa tendo as suas próprias medidas.
  * Valor: cada etapa ensina à equipe o que mudar na seguinte; ganhos iniciais são visíveis aos usuários.
  * Fatores de custo: um programa geral mais longo; operar práticas antigas e novas lado a lado; treinamento repetido; manter as medidas de saída.
  * Formato do prazo: uma sequência de etapas, cada uma longa o bastante para se ver uma mudança mensurável antes de a seguinte começar.
  * Capacidades necessárias: dados de serviço confiáveis (tempo de resolução, resolução na primeira vez, parcela de mudanças que causam incidentes) e um responsável por cada prática.
* **Adotar por equipe**: uma equipe adota todas as práticas primeiro como piloto, depois as outras a seguem.
  * Valor: um exemplo completo e funcionando cedo.
  * Fatores de custo: um serviço fica dividido entre dois modos de trabalho enquanto o piloto roda; as passagens de bastão entre a equipe-piloto e as demais ficam mais difíceis.
  * Riscos: confunde usuários e fornecedores; o contexto da equipe-piloto pode não ser típico.
* **Alinhar-se à ISO/IEC 20000-1 em vez do ITIL, ou junto com ele.** Uma norma de requisitos certificável para um sistema de gerenciamento de serviços, que algumas organizações preferem para auditoria e garantia a fornecedores.
  * Valor: reconhecimento externo; requisitos claros.
  * Fatores de custo: esforço de avaliação e certificação; documentação.
  * Riscos: pode incentivar uma mentalidade de conformidade em vez de melhoria.
* **Não mudar de framework por enquanto** e corrigir diretamente as dores específicas. Uma opção de linha de base real, a custear com honestidade.

## Argumento

Pontos de debate que a equipe deve esperar:

* **Framework ou problema?** O objetivo é adotar um framework ou reduzir incidentes repetidos e mudanças lentas? Escolha a opção que é julgada pelo segundo.
* **Ritmo versus capacidade.** Um programa mais rápido traz benefícios mais cedo, mas tira as mesmas pessoas da operação do serviço.
* **Risco de versão.** Adotar algo recém-lançado traz menos exemplos práticos e menos material de treinamento; ficar com uma versão conhecida é mais seguro, mas pode envelhecer.
* **Vocabulário versus prática.** Usar as mesmas palavras dos fornecedores é mais fácil do que mudar como o trabalho é feito. O que importa mais?

Como a equipe poderia avaliar custos e trade-offs:

1. Montar um modelo de custos nos termos da própria organização. Únicos: treinamento, desenho de processos, mudança de ferramentas, consultoria, cobertura de pessoal. Recorrentes: licenças, tempo dos responsáveis por processos, auditorias. Ocultos: menor vazão durante a transição, mudanças em contratos de fornecedores. Dar faixas, não números únicos.
2. Escolher as medidas de benefício antes de começar, para que o sucesso não seja definido depois: tempo de resolução, resolução na primeira vez, parcela de mudanças que causam incidentes, taxa de incidentes repetidos, satisfação dos usuários, constatações de auditoria.
3. Estimar o retorno nos cenários melhor, provável e pior, e testar quão sensível é a resposta às premissas de que a equipe tem menos certeza.
4. Pontuar as opções com uma matriz ponderada (valor, custo, velocidade, risco, adequação aos fornecedores, capacidade necessária).
5. Perguntar o que cada opção faz com a reversibilidade: qual pode ser interrompida após uma etapa sem desperdiçar o trabalho?

## Decisão

**Ainda não decidido.** Este é um ponto de partida. Uma equipe que o use deve substituir esta seção pela sua própria decisão.

Forma sugerida de chegar a uma decisão:

* Confirmar quem decide e até quando.
* Definir primeiro os critérios e seus pesos.
* Reunir as evidências listadas acima, incluindo o que está atualmente disponível do ITIL 5.
* Publicar o rascunho para comentários com um prazo, depois decidir e atualizar o Status.

## Implicações

Se a equipe escolher uma abordagem em etapas, precisaria:

* Publicar as medidas de saída de cada etapa e reportá-las regularmente ao patrocinador.
* Treinar o pessoal em cada prática pouco antes da sua etapa.
* Manter em funcionamento, como hoje, as práticas que ainda não estão no escopo, e dizê-lo.
* Adiar qualquer grande compra de plataforma de gerenciamento de serviços até que as evidências das primeiras etapas estejam disponíveis.
* Decidir o que acontece quando uma etapa não atinge as suas medidas: repetir, ajustar ou parar.

## Decisões relacionadas

* [Frameworks de negócio](../frameworks-de-negocio/): o mesmo padrão de adoção em etapas aplicado a outro framework.
* [Escolher nossos frameworks de tecnologia da informação](../frameworks-de-ti/): como o ITIL se encaixa nos outros frameworks que o grupo considera.
* Decisões ainda não tomadas: ferramentas; mudanças em contratos de fornecedores; certificar ou não.

## Notas relacionadas

* Pendências: confirmar o que existe hoje do ITIL 5; listar as práticas hoje bem e mal executadas; perguntar aos principais fornecedores e auditores o que esperam.
* Saiba mais:
  * Wikipédia: [ITIL](https://en.wikipedia.org/wiki/ITIL), [IT service management](https://en.wikipedia.org/wiki/IT_service_management), [Incident management](https://en.wikipedia.org/wiki/Incident_management), [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process), [Change management](https://en.wikipedia.org/wiki/Change_management)
  * ISO: [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC 38500:2024, Governance of IT for the organization](https://www.iso.org/standard/81684.html)
  * Vídeo: [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex)
  * Leitura: [PeopleCert](https://www.peoplecert.org/); [DORA](https://dora.dev/)
