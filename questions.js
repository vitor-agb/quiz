
let questions = [
    {
        question: 'Em qual elemento HTML nós colocamos o javascript?',
        options: [
            'tag js',
            'tag script',
            'tag scripting',
            'tag javascript'
        ],
        answer: 1
    },
    {
        question: 'Onde é o local certo de colocar o javascript?',
        options: [
            'Na tag body',
            'Na tag head',
            'Tanto na tag body quanto a head estão corretas'
        ],
        answer: 2
    },
    {
        question: 'Qual a sintaxe correta para adicionar um arquivo javascript externo na tag script?',
        options: [
            'name="xxx.js"',
            'src="xxx.js"',
            'href="xxx.js"'
        ],
        answer: 1
    },
    {
        question: 'Um arquivo javascript externo precisa ter a tag script',
        options: [
            'Verdade',
            'Falso'
        ],
        answer: 1
    },
    {
        question: 'Como escrever um "Olá Mundo" em um alertbox?',
        options: [
            'alertBox("Olá Mundo")',
            'msgBox("Olá Mundo")',
            'msg("Olá Mundo")',
            'alert("Olá Mundo")'
        ],
        answer: 3
    },
    {
        question: 'Como você cria uma função no Javascript?',
        options: [
            'function:minhaFuncao()',
            'function = minhaFuncao()',
            'function minhaFuncao()'
        ],
        answer: 2
    },
    {
        question: 'Como chamar uma função chamada "minhaFuncao"?',
        options: [
            'call minhaFuncao',
            'call function minhaFuncao',
            'minhaFuncao()'
        ],
        answer: 2
    },
    {
        question: 'Como escrever uma condicional IF no Javascript?',
        options: [
            'if i = 5',
            'if i == 5 then',
            'if (i == 5)',
            'if i = 5 then'
        ],
        answer: 2
    },
    {
        question: 'Como fazer um if que executa um código caso "i" for diferente de 5',
        options: [
            'if (i != 5)',
            'if (i <> 5)',
            'if i <> 5',
            'if i =! 5 then'
        ],
        answer: 0
    },
    {
        question: 'Como o loop while começa?',
        options: [
            'while (i <= 10)',
            'while (i <= 10; i++)',
            'while i = 1 to 10'
        ],
        answer: 0
    },
];

let general = [
    {
        question: 'De qual país o Havaí faz parte?',
        options: [
            'Brasil',
            'Estados Unidos',
            'México',
            'Austrália'
        ],
        answer: 1
    },
    {
        question: 'De qual ano é a Constituição Brasileira?',
        options: [
            'De 1988',
            'De 1976',
            'De 1982',
            'De 1979'
        ],
        answer: 0
    },
    {
        question: 'Qual é o maior rio do Brasil?',
        options: [
            'O rio Paraná"',
            'O rio Madeira-Mamoré',
            'Rio Purus',
            'O rio Amazonas'
        ],
        answer: 3
    },
    {
        question: 'Qual animal está estampado na nota de R$ 20,00',
        options: [
            'Onça Pintada',
            'Tartaruga Marinha',
            'Mico-Leão-Dourado',
            'Arara  '
        ],
        answer: 2
    },
    {
        question: 'Que cidade é conhecida como "Big Apple"?',
        options: [
            'Nova York',
            'Paris',
            'Berlim',
            'Londres'
        ],
        answer: 0
    },
    {
        question: 'Quais o menor e o maior país do mundo?',
        options: [
            'Vaticano e Rússia',
            'Nauru e China',
            'Malta e Estados Unidos',
            'São Marino e Índia'
        ],
        answer: 0
    },
    {
        question: 'Que estrutura faz a ligação entre Músculos e Ossos no corpo humano?',
        options: [
            'Ligamento',
            'Tendão',
            'Nervo',
            'Cartilagem'
        ],
        answer: 1
    },
    {
        question: 'Qual desses mamíferos não possui dentes?',
        options: [
            'Capivara',
            'Tamanduá',
            'Golfinho',
            'Porco-espinho'
        ],
        answer: 1
    },
    {
        question: 'Antes da Fama, o ator Sylvester Stallone já trabalhou em qual dessas funções?',
        options: [
            'Boxeador profissional',
            'Militar no exército',
            'Halterofilista',
            'Limpador de jaula de leão'
        ],
        answer: 3
    },
    {
        question: 'Qual é o coletivo de cães?',
        options: [
            'Matilha',
            'Rebaho',
            'Alcateia',
            'Manada'
        ],
        answer: 0
    },
];

let sports = [
    {
        question: 'No rugby, ou futebol americano, qual é o formato da bola usada durante o jogo?',
        options: [
            'Redonda',
            'Retângular',
            'Triangular',
            'Oval'
        ],
        answer: 3
    },
    {
        question: 'De quantos em quantos anos são realizados os Jogos Olimpícos de Verão?',
        options: [
            'De 5 em 5 anos',
            'De 3 em 3 anos',
            'De 4 em 4 anos',
            'De 2 em 2 anos',
        ],
        answer: 2
    },
    {
        question: 'Como é conhecido o símbolo olímpico?',
        options: [
            'Anéis olímpicos',
            'Cidade olímpica',
            'Duques olímpicos',
            'Espírito olímpico',
        ],
        answer: 0
    },
    {
        question: 'O que representa o símbolo dos cinco anéis das Olimpíadas?',
        options: [
            'As cinco cores principais existentes.',
            'Os cincos continentes habitados no mundo',
            'Os cincos principais países vencedores',
            'As cinco maiores nações do mundo',
        ],
        answer: 1
    },
    {
        question: 'Qual modalidade de Ginástica não é Olímpica?',
        options: [
            'Rítmica',
            'De Trampolim',
            'Artística',
            'Aeróbica',
        ],
        answer: 3
    },
    {
        question: 'A chama Olímpica deve estar acesa durante todo o evento das Olímpiadas?',
        options: [
            'Verdade',
            'Falso',
        ],
        answer: 0
    },
    {
        question: 'Qual modalidae não faz parte do Triatlo?',
        options: [
            'Corrida',
            'Natação',
            'Maratona',
            'Ciclismo'
        ],
        answer: 2
    },
    {
        question: 'Qual a distancia percorrida na Maratona',
        options: [
            '21 km',
            '30 km',
            '42 km',
            '50 km'
        ],
        answer: 2
    },
    {
        question: 'Quais são as cinco cores dos anéis dos Jogos Olímpicos?',
        options: [
            'Azul, vermelho, amarelo, verde e preto',
            'Azul, vermelho, amarelo, verde e violeta',
            'Índigo, vermelho, roxo, verde e preto',
            'Azul, vermelho, amarelo, laranja e verde'
        ],
        answer: 0
    },
    {
        question: 'Qual foi o esporte em que as mulheres conquistaram o primeiro ouro Olímpico para o Brasil?',
        options: [
            'Vôlei de praia',
            'Futebol',
            'Tênis',
            'Judô'
        ],
        answer: 0
    },
];

let artAndCulture = [
    {
        question: 'Quem pintou o quadro Mona Lisa?',
        options: [
            'Vincent Van Gogh',
            'Pablo Picasso',
            'Leonardo Da Vinci',
            'Francisco Goya',
        ],
        answer: 2
    },
    {
        question: 'Quem é o autor da série literária Sítio do Picapau Amarelo?',
        options: [
            'Monteiro Lobato',
            'José de Alencar',
            'Machado de Assis',
            'Clarice Lispector',
        ],
        answer: 0
    },
    {
        question: 'Qual fruta envenenada comeu a Branca de Neve?',
        options: [
            'Pera',
            'Uva',
            'Laranja',
            'Maça'
        ],
        answer: 3
    },
    {
        question: 'Quem são os personagens principais do seriado norte-americano Friends?',
        options: [
            'Jessica, Sara, Monica, Mike, Jhon e Ross.',
            'Rachel, Phoebe, Antonieta, Chandler, Paul e Will.',
            'Rachel, Phoebe, Monica, Chandler, Joey e Ross.',
            'Billie, Phoebe, Monica, Chandler, Jill e Simon.',
        ],
        answer: 2
    },
    {
        question: 'Como se chamam os dois melhores amigos do personagem Harry Potter?',
        options: [
            'Hermione e Rony.',
            'Draco e Gina',
            'Snape e Dumbledore',
            'Hagrid e Voldemort',
        ],
        answer: 0
    },
    {
        question: 'Qual cantor brasileiro é pai dos atores Fiuk e Cleo?',
        options: [
            'Roberto Carlos',
            'Fábio Junior',
            'Gilberto Gil',
            'Leonardo',
        ],
        answer: 1
    },
    {
        question: 'Qual artista é conhecido como o Rei do Pop?',
        options: [
            'Elvis Presley',
            'Michael Jackson',
            'John Lennon',
            'Bob Dylan'  
        ],
        answer: 1
    },
    {
        question: 'Nos contos de fadas, qual animal que, quando é beijado, vira um príncipe?',
        options: [
            'Arara',
            'Coelho',
            'Gato',
            'Sapo'
        ],
        answer: 3
    },
    {
        question: 'Qual é o nome agente secreto da ficção conhecido pelo número 007?',
        options: [
            'James Bond',
            'Johny English',
            'Ethan Hunt',
            'Jason Bourne'
        ],
        answer: 0
    },
    {
        question: 'Qual personagem do folclore brasileiro que tem os pés virados para trás?',
        options: [
            'Saci',
            'Curupira',
            'Mula sem cabeça',
            'Boitatá'
        ],
        answer: 1
    },
];