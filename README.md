# API-MonitoramentodeLuz

 Bem-vindo(a) ao nosso projeto de Sistema de Monitoramento de Luz Ambiental, uma iniciativa focada na sustentabilidade e na preservação ambiental por meio da tecnologia. Este projeto tem como objetivo desenvolver uma API que coleta, armazena e analisa dados de intensidade luminosa utilizando sensores LDR (Light Dependent Resistor) e Microcontroladores (como Arduino).

 A leitura do valor de um LDR (Light Dependent Resistor) não é diretamente uma medida de intensidade de luz em unidades físicas (como lux). Em vez disso, é um valor bruto de um conversor analógico-digital (ADC) que depende da resistência do LDR. O ADC converte o sinal alalógico (corrente elétrica) em um sinal digital que vai alimentar nosso banco de dados integrado a API.
 
 Componentes Necessários

 LDR (Resistor Dependente de Luz): ou fotoresistor, é um tipo de resistor cuja resistência elétrica varia de acordo com a intensidade da luz que incide sobre ele.

 Microcontrolador (como Arduino ou Raspberry Pi): Para ler os dados do LDR e processar a entrada.

 Conversor Analógico-Digital (ADC): Para converter o sinal analógico do LDR em um sinal digital que o microcontrolador pode processar.

 Servidor API (Node.js e Express): API apresentada nesse repositório.

 Passos para Implementação

 Configuração do Hardware
 Conecte o LDR ao Microcontrolador: Use um divisor de tensão com o LDR e um resistor para medir a intensidade da luz.
 Leitura dos Dados: Configure o microcontrolador para ler o valor do LDR através do ADC.

 Através da integração com a Internet das Coisas (IoT), nossa solução oferece uma plataforma eficiente para monitorar os níveis de luz em diferentes ambientes, promovendo eficiência energética, especialmente em áreas onde o monitoramento e controle da iluminação são importantes. Aqui estão algumas possibilidades de aplicação e o impacto potencial:

 Finalidades
 1) Domótica (Automação Residencial):

 Uso: Monitorar os níveis de luz em diferentes áreas de uma casa para ajustar automaticamente a iluminação.
 Impacto: Melhora o conforto, a eficiência energética e a segurança da residência.

 2) Agricultura de Precisão:

 Uso: Monitorar a luz em estufas ou áreas de cultivo para garantir condições ideais para o crescimento das plantas.
 Impacto: Aumenta a produtividade agrícola e a qualidade das colheitas.

 3) Gestão de Energia em Edifícios Comerciais:

 Uso: Ajustar a iluminação de escritórios e salas de conferência com base na luz natural disponível, economizando energia.
 Impacto: Reduz os custos de energia e melhora a sustentabilidade dos edifícios.

 4) Monitoramento Ambiental:

 Uso: Integrar com sistemas de monitoramento ambiental para estudar o impacto da iluminação artificial na fauna e flora locais.
 Impacto: Contribui para a pesquisa e a proteção ambiental.

 5) Projetos de Smart Cities:

 Uso: Utilizar dados de iluminação para ajustar a iluminação pública com base nas condições atuais, melhorando a segurança e economizando energia.
 Impacto: Melhora a qualidade de vida urbana e a eficiência dos serviços públicos.



 Exemplos de Impacto

 1) Redução de Custos:
 Empresas e residências podem reduzir significativamente suas contas de energia ao ajustar a iluminação com base nos dados de luz disponíveis.

 2) Sustentabilidade:
 O uso eficiente da iluminação contribui para a sustentabilidade ambiental, reduzindo a pegada de carbono.

 3) Segurança:
 Ajustes automáticos na iluminação podem melhorar a segurança em áreas públicas e privadas, prevenindo acidentes e crimes.

