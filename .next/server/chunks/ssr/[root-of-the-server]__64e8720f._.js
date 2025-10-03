module.exports = {

"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/lib/numerology-interpretations.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Biblioteca completa de interpretações numerológicas
__turbopack_context__.s({
    "generateDetailedNumerologyReport": ()=>generateDetailedNumerologyReport,
    "getNumberInterpretation": ()=>getNumberInterpretation,
    "numberMeanings": ()=>numberMeanings
});
const numberMeanings = {
    1: {
        number: 1,
        name: "O Líder",
        positiveTraits: [
            "Liderança natural e carisma",
            "Independência e autoconfiança",
            "Coragem para iniciar novos projetos",
            "Capacidade de inovar e pioneirismo",
            "Determinação e força de vontade"
        ],
        negativeTraits: [
            "Arrogância e ego inflado",
            "Tendência a ser dominador",
            "Impaciência com os outros",
            "Dificuldade em aceitar ajuda",
            "Agressividade quando contrariado"
        ],
        guidance: [
            "Aprenda a trabalhar em equipe sem perder sua essência",
            "Cultive a humildade e reconheça as contribuições dos outros",
            "Canalize sua energia de liderança para inspirar, não dominar",
            "Desenvolva paciência e escute diferentes perspectivas"
        ],
        career: "Ideal para posições de liderança, empreendedorismo, gestão, cargos executivos, trabalhos independentes e áreas que exigem inovação.",
        relationships: "Precisa de parceiros que respeitem sua independência mas que também desafiem seu crescimento. Trabalhe em ser mais colaborativo e menos controlador.",
        spirituality: "Sua jornada espiritual envolve aprender a equilibrar ego e humildade, reconhecendo que verdadeira liderança é sobre servir aos outros.",
        lifeLesson: "Aprender que força verdadeira vem da capacidade de levantar os outros, não de estar sempre no topo sozinho."
    },
    2: {
        number: 2,
        name: "O Diplomata",
        positiveTraits: [
            "Sensibilidade e empatia excepcionais",
            "Habilidade natural para mediação",
            "Cooperativo e harmonioso",
            "Intuição aguçada",
            "Capacidade de ouvir e compreender"
        ],
        negativeTraits: [
            "Insegurança e dependência emocional",
            "Tendência a evitar conflitos necessários",
            "Dificuldade em tomar decisões",
            "Pode ser manipulado facilmente",
            "Excesso de sensibilidade"
        ],
        guidance: [
            "Desenvolva autoconfiança e aprenda a confiar em suas próprias decisões",
            "Estabeleça limites saudáveis nas relações",
            "Entenda que conflitos construtivos podem levar ao crescimento",
            "Valorize suas próprias necessidades tanto quanto as dos outros"
        ],
        career: "Excelente em mediação, recursos humanos, terapia, assistência social, diplomacia, áreas de saúde e qualquer trabalho em equipe.",
        relationships: "Naturalmente dedicado e amoroso, mas precisa aprender a não se perder no outro. Busque parceiros que valorizem sua sensibilidade sem aproveitarem dela.",
        spirituality: "Sua evolução espiritual passa por encontrar equilíbrio entre servir aos outros e manter sua própria identidade e poder pessoal.",
        lifeLesson: "Compreender que ser bondoso não significa ser fraco, e que você pode ser gentil enquanto mantém sua força interior."
    },
    3: {
        number: 3,
        name: "O Criativo",
        positiveTraits: [
            "Criatividade abundante e imaginação fértil",
            "Otimismo contagiante",
            "Excelente comunicador",
            "Carisma e habilidade social",
            "Capacidade de inspirar alegria"
        ],
        negativeTraits: [
            "Dispersão e falta de foco",
            "Superficialidade nas relações",
            "Dificuldade em levar projetos até o fim",
            "Tendência a evitar responsabilidades",
            "Exagero e falta de disciplina"
        ],
        guidance: [
            "Aprenda a focar sua energia criativa em projetos significativos",
            "Desenvolva disciplina sem perder sua espontaneidade",
            "Busque profundidade nas relações e experiências",
            "Use sua criatividade como ferramenta de transformação, não apenas entretenimento"
        ],
        career: "Brilha em artes, comunicação, marketing, entretenimento, escrita, design, ensino criativo e qualquer área que permita expressão pessoal.",
        relationships: "Precisa de parceiros que apreciem sua vivacidade mas que também o ajudem a manter os pés no chão. Evite dispersão emocional.",
        spirituality: "Sua missão espiritual envolve usar seus dons criativos para elevar e inspirar outros, trazendo beleza e alegria ao mundo.",
        lifeLesson: "Descobrir que criatividade genuína requer disciplina, e que seus talentos têm maior impacto quando direcionados com propósito."
    },
    4: {
        number: 4,
        name: "O Construtor",
        positiveTraits: [
            "Organização e metodologia impecáveis",
            "Confiabilidade e responsabilidade",
            "Praticidade e senso comum",
            "Perseverança e determinação",
            "Capacidade de criar estruturas duradouras"
        ],
        negativeTraits: [
            "Rigidez e resistência a mudanças",
            "Workaholic e obsessivo",
            "Dificuldade em expressar emoções",
            "Pessimismo e negatividade",
            "Excesso de controle"
        ],
        guidance: [
            "Aprenda a ser flexível sem perder sua essência prática",
            "Permita-se descansar e aproveitar os frutos do seu trabalho",
            "Abra-se para o inesperado e para novas formas de fazer as coisas",
            "Equilibre trabalho e vida pessoal, lembrando que você é mais que suas realizações"
        ],
        career: "Excepcional em arquitetura, engenharia, contabilidade, gestão de projetos, administração, construção e áreas que exigem precisão.",
        relationships: "Leal e dedicado, mas precisa aprender a ser mais flexível e expressivo emocionalmente. Parceiros precisam de paciência com sua natureza reservada.",
        spirituality: "Sua jornada espiritual envolve compreender que nem tudo na vida pode ser controlado ou planejado, e que há beleza no caos.",
        lifeLesson: "Aprender que estruturas sólidas também precisam de flexibilidade para resistir às tempestades da vida."
    },
    5: {
        number: 5,
        name: "O Aventureiro",
        positiveTraits: [
            "Adaptabilidade excepcional",
            "Amor pela liberdade e aventura",
            "Curiosidade insaciável",
            "Versatilidade e múltiplos talentos",
            "Carisma e magnetismo pessoal"
        ],
        negativeTraits: [
            "Inquietude e instabilidade",
            "Dificuldade com compromissos",
            "Impulsividade e irresponsabilidade",
            "Dispersão de energia",
            "Tendência ao excesso e vícios"
        ],
        guidance: [
            "Aprenda a equilibrar liberdade com responsabilidade",
            "Desenvolva consistência sem perder sua espontaneidade",
            "Escolha suas aventuras com sabedoria, não apenas por impulso",
            "Cultive relações profundas mesmo enquanto explora o mundo"
        ],
        career: "Prospera em viagens, jornalismo, vendas, relações públicas, entretenimento, negócios internacionais e qualquer área dinâmica.",
        relationships: "Precisa de parceiros que valorizem independência mútua. Aprenda que compromisso não é prisão, mas pode ser uma aventura compartilhada.",
        spirituality: "Sua evolução espiritual vem de compreender que a verdadeira liberdade não é externa, mas interna - liberdade de ser quem você realmente é.",
        lifeLesson: "Descobrir que a maior aventura da vida é o compromisso com seu próprio crescimento e com conexões autênticas."
    },
    6: {
        number: 6,
        name: "O Cuidador",
        positiveTraits: [
            "Amor incondicional e compaixão",
            "Senso de responsabilidade familiar",
            "Habilidade de nutrir e curar",
            "Busca por harmonia e beleza",
            "Lealdade profunda"
        ],
        negativeTraits: [
            "Tendência a ser controlador 'por amor'",
            "Martírio e vitimização",
            "Dificuldade em dizer não",
            "Expectativas irreais sobre outros",
            "Perfeccionismo que cria insatisfação"
        ],
        guidance: [
            "Aprenda a cuidar de si mesmo com a mesma dedicação que cuida dos outros",
            "Estabeleça limites saudáveis - amor não significa sacrifício total",
            "Permita que outros cometam seus próprios erros e aprendam",
            "Aceite imperfeições, tanto suas quanto dos outros"
        ],
        career: "Natural em educação, medicina, terapia, aconselhamento, trabalho social, artes culinárias, design de interiores e áreas de cuidado.",
        relationships: "Parceiro dedicado e amoroso, mas precisa evitar se tornar controlador ou criar dependência. Busque reciprocidade real.",
        spirituality: "Sua missão espiritual é aprender que o amor verdadeiro liberta, não aprisiona, e que cuidar começa com autocuidado.",
        lifeLesson: "Compreender que você não pode salvar ninguém, apenas amparar enquanto cada um faz sua própria jornada."
    },
    7: {
        number: 7,
        name: "O Místico",
        positiveTraits: [
            "Profundidade intelectual e espiritual",
            "Intuição e sabedoria inatas",
            "Capacidade analítica excepcional",
            "Busca pela verdade",
            "Conexão com o divino"
        ],
        negativeTraits: [
            "Isolamento excessivo",
            "Ceticismo e desconfiança",
            "Dificuldade de conexão emocional",
            "Arrogância intelectual",
            "Escapismo e evasão da realidade"
        ],
        guidance: [
            "Equilibre sua busca espiritual com presença no mundo físico",
            "Compartilhe sua sabedoria ao invés de guardá-la para si",
            "Permita-se vulnerabilidade e conexão emocional autêntica",
            "Use seu conhecimento para servir, não apenas para se elevar"
        ],
        career: "Excelente em pesquisa, ciência, filosofia, espiritualidade, psicologia, análise de dados, escrita acadêmica e áreas contemplativas.",
        relationships: "Precisa de parceiros que respeitem sua necessidade de solidão mas que também o desafiem a se conectar emocionalmente.",
        spirituality: "Sua jornada envolve integrar conhecimento espiritual com vida prática, tornando-se uma ponte entre mundos.",
        lifeLesson: "Aprender que verdadeira sabedoria não é sobre saber mais, mas sobre conectar-se mais profundamente com a vida."
    },
    8: {
        number: 8,
        name: "O Magnata",
        positiveTraits: [
            "Poder de manifestação material",
            "Liderança empresarial",
            "Ambição saudável e foco em resultados",
            "Justiça e equilíbrio",
            "Capacidade de transformar visão em realidade"
        ],
        negativeTraits: [
            "Materialismo excessivo",
            "Obsessão por poder e status",
            "Falta de escrúpulos nos negócios",
            "Workaholic destrutivo",
            "Uso de pessoas como meios"
        ],
        guidance: [
            "Lembre-se que riqueza verdadeira inclui relações e bem-estar",
            "Use seu poder para elevar outros, não apenas a si mesmo",
            "Desenvolva compaixão junto com sua ambição",
            "Reconheça que sucesso sem integridade é vazio"
        ],
        career: "Domina em negócios, finanças, gestão executiva, empreendedorismo de alto nível, direito corporativo e posições de poder.",
        relationships: "Precisa aprender que relações não são transações. Busque parceiros que valorizem você, não sua posição ou recursos.",
        spirituality: "Sua missão é compreender e demonstrar que poder espiritual e material podem coexistir e se potencializar mutuamente.",
        lifeLesson: "Descobrir que o verdadeiro poder está em empoderar outros e que abundância cresce quando é compartilhada."
    },
    9: {
        number: 9,
        name: "O Humanitário",
        positiveTraits: [
            "Compaixão universal",
            "Sabedoria de alma antiga",
            "Capacidade de perdoar",
            "Visão humanitária ampla",
            "Talento artístico e espiritual"
        ],
        negativeTraits: [
            "Tendência ao martírio",
            "Dificuldade em estabelecer limites",
            "Idealismo que leva à desilusão",
            "Negligência das próprias necessidades",
            "Melancolia e desapego excessivo"
        ],
        guidance: [
            "Aprenda a servir sem se sacrificar completamente",
            "Enraíze seus ideais na realidade prática",
            "Cuide de si para poder cuidar do mundo",
            "Aceite que nem todos estão prontos para sua mensagem"
        ],
        career: "Brilha em trabalho social, ONGs, artes transformadoras, ensino espiritual, terapias holísticas, ativismo e carreiras humanitárias.",
        relationships: "Amor universal precisa começar em casa. Aprenda a nutrir relações íntimas tanto quanto se dedica à humanidade.",
        spirituality: "Você está completando um ciclo evolutivo. Sua missão é integrar todas as lições e servir como farol para outros.",
        lifeLesson: "Compreender que salvar o mundo começa com se salvar, e que você só pode dar do que já tem dentro de si."
    },
    11: {
        number: 11,
        name: "O Visionário",
        positiveTraits: [
            "Intuição extraordinária e dons psíquicos",
            "Capacidade de inspirar e iluminar",
            "Idealismo elevado",
            "Sensibilidade espiritual aguçada",
            "Potencial para grandes realizações"
        ],
        negativeTraits: [
            "Nervosismo e ansiedade",
            "Dificuldade de aterrar a energia",
            "Expectativas irrealistas",
            "Hipersensibilidade paralisante",
            "Tendência a se perder em sonhos"
        ],
        guidance: [
            "Aprenda técnicas de ancoragem e equilíbrio energético",
            "Traduza suas visões em ações concretas",
            "Cuide de sua saúde mental e emocional",
            "Busque comunidades que apoiem seus dons"
        ],
        career: "Prospera como líder espiritual, inventor, artista visionário, professor inspirador, conselheiro intuitivo ou empreendedor inovador.",
        relationships: "Precisa de parceiros que compreendam sua natureza sensível e apoiem sua missão, mas que também o ajudem a manter equilíbrio.",
        spirituality: "Você é um canal entre dimensões. Sua missão é trazer luz superior para o plano terrestre de forma tangível.",
        lifeLesson: "Aprender a balancear seus dons espirituais com vida prática, tornando-se uma ponte entre o céu e a terra."
    },
    22: {
        number: 22,
        name: "O Mestre Construtor",
        positiveTraits: [
            "Capacidade de manifestar grandes visões",
            "Liderança prática e visionária",
            "Poder de criar legados duradouros",
            "Equilíbrio entre espiritual e material",
            "Potencial para transformar o mundo"
        ],
        negativeTraits: [
            "Pressão interna extrema",
            "Dificuldade em aceitar limitações",
            "Tendência a burnout",
            "Frustração quando visão excede execução",
            "Isolamento pela grandiosidade da missão"
        ],
        guidance: [
            "Divida grandes visões em passos gerenciáveis",
            "Cerque-se de equipe competente e confiável",
            "Lembre-se que grandes obras levam tempo",
            "Cuide de sua saúde física e mental no processo"
        ],
        career: "Destinado a grandes empreendimentos, projetos de impacto global, arquitetura de soluções, liderança transformacional e legados duradouros.",
        relationships: "Precisa de parceiros que compreendam a magnitude de sua missão mas que também o lembrem de viver o presente.",
        spirituality: "Você veio para construir pontes entre o espiritual e o material, criando estruturas que elevem a humanidade.",
        lifeLesson: "Compreender que grandeza verdadeira vem de construir algo maior que si mesmo, deixando o mundo melhor que encontrou."
    },
    33: {
        number: 33,
        name: "O Mestre Professor",
        positiveTraits: [
            "Amor universal em ação",
            "Capacidade de cura profunda",
            "Sabedoria compassiva",
            "Habilidade de elevar consciências",
            "Dedicação ao serviço elevado"
        ],
        negativeTraits: [
            "Martírio e autossacrifício destrutivo",
            "Dificuldade em dizer não",
            "Exaustão por dar demais",
            "Expectativas irreais sobre si mesmo",
            "Negligência do autocuidado"
        ],
        guidance: [
            "Aprenda que autocuidado não é egoísmo, é necessidade",
            "Estabeleça limites saudáveis em seu serviço",
            "Aceite que você não pode salvar todos",
            "Ensine pelo exemplo, começando consigo mesmo"
        ],
        career: "Chamado para ensino transformador, cura holística, liderança espiritual compassiva, terapias avançadas e serviço humanitário.",
        relationships: "Seu amor é incondicional, mas precisa ser sábio. Escolha parceiros que valorizem e reciproquem sua dedicação.",
        spirituality: "Você é um mestre encarnado. Sua missão é demonstrar que amor incondicional e sabedoria prática podem coexistir.",
        lifeLesson: "Compreender que ensinar é sobre empoderar outros a encontrarem suas próprias verdades, não carregar seus fardos."
    }
};
function getNumberInterpretation(number) {
    return numberMeanings[number] || numberMeanings[1];
}
function generateDetailedNumerologyReport(numbers) {
    const sections = [];
    // Caminho da Vida
    const lifePath = getNumberInterpretation(numbers.lifePathNumber);
    sections.push(`
### 🌟 Número do Caminho da Vida: ${numbers.lifePathNumber} - ${lifePath.name}

Este é o número mais importante do seu mapa numerológico - representa sua missão de vida e as lições que você veio aprender nesta encarnação.

**✨ Pontos Positivos:**
${lifePath.positiveTraits.map((trait)=>`• ${trait}`).join('\n')}

**⚠️ Pontos de Atenção:**
${lifePath.negativeTraits.map((trait)=>`• ${trait}`).join('\n')}

**🎯 O Que Fazer:**
${lifePath.guidance.map((guide)=>`• ${guide}`).join('\n')}

**💼 Carreira:** ${lifePath.career}

**❤️ Relacionamentos:** ${lifePath.relationships}

**🙏 Espiritualidade:** ${lifePath.spirituality}

**📖 Lição de Vida:** ${lifePath.lifeLesson}
  `);
    // Número da Alma
    const soul = getNumberInterpretation(numbers.soulNumber);
    sections.push(`
### 💫 Número da Alma: ${numbers.soulNumber} - ${soul.name}

Este número revela seus desejos mais profundos, o que realmente motiva você por dentro, suas paixões ocultas e o que sua alma verdadeiramente anseia.

**Motivações Internas:**
${soul.positiveTraits.slice(0, 3).map((trait)=>`• ${trait}`).join('\n')}

**Desafios Internos:**
${soul.negativeTraits.slice(0, 3).map((trait)=>`• ${trait}`).join('\n')}

**Como Nutrir Sua Alma:**
${soul.guidance.slice(0, 2).map((guide)=>`• ${guide}`).join('\n')}
  `);
    // Número da Personalidade
    const personality = getNumberInterpretation(numbers.personalityNumber);
    sections.push(`
### 🎭 Número da Personalidade: ${numbers.personalityNumber} - ${personality.name}

Este número mostra como você aparece para o mundo, a primeira impressão que causa, a máscara social que usa.

**Como Outros Te Veem:**
${personality.positiveTraits.slice(0, 3).map((trait)=>`• ${trait}`).join('\n')}

**Máscaras a Observar:**
${personality.negativeTraits.slice(0, 2).map((trait)=>`• ${trait}`).join('\n')}

**Dica:** ${personality.guidance[0]}
  `);
    return sections.join('\n\n');
}
}),
"[project]/src/lib/astrology-interpretations.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Biblioteca completa de interpretações astrológicas
__turbopack_context__.s({
    "getSignInterpretation": ()=>getSignInterpretation,
    "signInterpretations": ()=>signInterpretations
});
const signInterpretations = {
    'Áries': {
        name: 'Áries',
        element: 'Fogo',
        quality: 'Cardinal',
        rulingPlanet: 'Marte',
        positiveTraits: [
            'Corajoso',
            'Pioneiro',
            'Entusiasmado',
            'Confiante',
            'Dinâmico',
            'Honesto'
        ],
        negativeTraits: [
            'Impulsivo',
            'Impaciente',
            'Agressivo',
            'Egoísta',
            'Teimoso'
        ],
        inSun: 'Com o Sol em Áries, você nasceu para liderar. Sua energia é pioneira, sempre buscando novos começos e desafios. Você tem coragem natural e não teme confrontos. Sua missão é aprender a canalizar sua energia de forma construtiva.',
        inMoon: 'Lua em Áries indica emoções intensas e reações rápidas. Você precisa de ação para se sentir emocionalmente satisfeito. Aprenda a processar sentimentos antes de agir.',
        inAscendant: 'Ascendente em Áries faz você parecer confiante, energético e às vezes intimidador. As pessoas veem você como alguém que sempre toma iniciativa.',
        career: 'Prospera em: empreendedorismo, esportes, militares, cirurgia, vendas competitivas, liderança de projetos desafiadores.',
        love: 'No amor, você é apaixonado e direto. Precisa de parceiros que acompanhem sua energia e não tenham medo de seus desafios. Aprenda a ter mais paciência.',
        health: 'Ponto de atenção: cabeça, enxaquecas, febre. Faça exercícios intensos para liberar energia. Cuidado com acidentes por impulsividade.',
        spirituality: 'Sua jornada espiritual envolve aprender a equilibrar ação com contemplação, coragem com compaixão.'
    },
    'Touro': {
        name: 'Touro',
        element: 'Terra',
        quality: 'Fixo',
        rulingPlanet: 'Vênus',
        positiveTraits: [
            'Confiável',
            'Paciente',
            'Prático',
            'Leal',
            'Sensual',
            'Determinado'
        ],
        negativeTraits: [
            'Teimoso',
            'Possessivo',
            'Materialista',
            'Resistente a mudanças',
            'Preguiçoso'
        ],
        inSun: 'Sol em Touro traz estabilidade e amor pela beleza. Você valoriza segurança, conforto e prazer sensorial. Sua força está na persistência, mas aprenda a ser mais flexível.',
        inMoon: 'Lua em Touro busca estabilidade emocional através de conforto material. Você precisa de segurança e rotina para se sentir bem. Mudanças abruptas o desestabilizam.',
        inAscendant: 'Ascendente em Touro faz você parecer calmo, confiável e agradável. As pessoas sentem que podem contar com você.',
        career: 'Ideal para: finanças, agricultura, culinária, artes, música, design de interiores, gestão de recursos, joalheria.',
        love: 'No amor, você é fiel e sensual. Busca estabilidade e demonstra afeto através de gestos tangíveis. Cuidado com ciúmes e possessividade.',
        health: 'Atenção: garganta, tireoide, pescoço. Tendência a ganho de peso. Incorpore movimento regular e alimentação equilibrada.',
        spirituality: 'Sua evolução vem de aprender que verdadeira segurança é interna, não externa, e que mudança é parte natural da vida.'
    },
    'Gêmeos': {
        name: 'Gêmeos',
        element: 'Ar',
        quality: 'Mutável',
        rulingPlanet: 'Mercúrio',
        positiveTraits: [
            'Comunicativo',
            'Inteligente',
            'Adaptável',
            'Curioso',
            'Social',
            'Versátil'
        ],
        negativeTraits: [
            'Superficial',
            'Ansioso',
            'Inconsistente',
            'Fofoqueiro',
            'Disperso'
        ],
        inSun: 'Sol em Gêmeos traz mente brilhante e necessidade de variedade. Você aprende rápido e se entedia facilmente. Sua missão é desenvolver profundidade junto com sua versatilidade.',
        inMoon: 'Lua em Gêmeos indica necessidade emocional de comunicação e estímulo mental. Você processa sentimentos através de palavras e precisa de variedade emocional.',
        inAscendant: 'Ascendente em Gêmeos faz você parecer jovial, falante e intelectual. As pessoas veem você como alguém sempre interessante e informado.',
        career: 'Excelente em: jornalismo, escrita, ensino, vendas, relações públicas, mídia social, tradução, marketing.',
        love: 'No amor, você precisa de estímulo mental tanto quanto físico. Conversas profundas são afrodisíacas. Evite dispersão emocional.',
        health: 'Cuidado com: sistema nervoso, pulmões, braços, mãos. A ansiedade pode ser um problema. Pratique meditação e exercícios respiratórios.',
        spirituality: 'Sua jornada envolve integrar mente e coração, aprendendo que conhecimento sem sabedoria é vazio.'
    },
    'Câncer': {
        name: 'Câncer',
        element: 'Água',
        quality: 'Cardinal',
        rulingPlanet: 'Lua',
        positiveTraits: [
            'Emocional',
            'Protetor',
            'Intuitivo',
            'Compassivo',
            'Leal',
            'Criativo'
        ],
        negativeTraits: [
            'Temperamental',
            'Inseguro',
            'Manipulador',
            'Dependente',
            'Ressentido'
        ],
        inSun: 'Sol em Câncer traz sensibilidade profunda e forte conexão com família. Você é naturalmente nurturante e protetor. Aprenda a estabelecer limites emocionais.',
        inMoon: 'Lua em Câncer (em domicílio) intensifica todas as qualidades lunares. Emoções profundas, necessidade de segurança emocional, memória emocional forte.',
        inAscendant: 'Ascendente em Câncer faz você parecer carinhoso, protetor e às vezes tímido. As pessoas sentem que podem confiar em você emocionalmente.',
        career: 'Natural em: enfermagem, psicologia, gastronomia, educação infantil, assistência social, história, antiquário.',
        love: 'No amor, você é profundamente devotado e busca segurança emocional. Precisa de parceiros que valorizem família e lar. Cuidado com dependência emocional.',
        health: 'Atenção: estômago, digestão, seios. Suas emoções afetam sua saúde física. Cuide da saúde emocional para manter o corpo saudável.',
        spirituality: 'Sua evolução vem de aprender que nutrir começa com autocuidado e que vulnerabilidade é força, não fraqueza.'
    },
    'Leão': {
        name: 'Leão',
        element: 'Fogo',
        quality: 'Fixo',
        rulingPlanet: 'Sol',
        positiveTraits: [
            'Confiante',
            'Generoso',
            'Leal',
            'Criativo',
            'Carismático',
            'Corajoso'
        ],
        negativeTraits: [
            'Arrogante',
            'Dominador',
            'Egocêntrico',
            'Dramático',
            'Inflexível'
        ],
        inSun: 'Sol em Leão (em domicílio) traz presença natural de liderança. Você nasceu para brilhar e inspirar. Sua missão é usar sua luz para iluminar outros, não ofuscá-los.',
        inMoon: 'Lua em Leão busca reconhecimento emocional. Você precisa ser visto e apreciado. Aprenda que verdadeiro valor vem de dentro.',
        inAscendant: 'Ascendente em Leão faz você parecer régio, confiante e magnético. As pessoas naturalmente são atraídas por sua presença.',
        career: 'Brilha em: entretenimento, política, gestão executiva, artes cênicas, moda, qualquer área de destaque público.',
        love: 'No amor, você é apaixonado, leal e generoso. Precisa de admiração e respeito. Aprenda a compartilhar o palco com seu parceiro.',
        health: 'Cuidado com: coração, coluna, circulação. Mantenha exercícios cardiovasculares. Seu coração físico reflete seu coração emocional.',
        spirituality: 'Sua jornada envolve aprender que verdadeira realeza é sobre servir, não ser servido, e que todos merecem brilhar.'
    },
    'Virgem': {
        name: 'Virgem',
        element: 'Terra',
        quality: 'Mutável',
        rulingPlanet: 'Mercúrio',
        positiveTraits: [
            'Analítico',
            'Prático',
            'Organizado',
            'Prestativo',
            'Meticuloso',
            'Confiável'
        ],
        negativeTraits: [
            'Crítico',
            'Perfeccionista',
            'Preocupado',
            'Ansioso',
            'Controlador'
        ],
        inSun: 'Sol em Virgem traz mente analítica e desejo de ser útil. Você busca perfeição e melhoria constante. Aprenda a aceitar imperfeições como parte da beleza da vida.',
        inMoon: 'Lua em Virgem processa emoções através de análise. Você se sente melhor quando está sendo produtivo e útil. Cuidado com autocrítica excessiva.',
        inAscendant: 'Ascendente em Virgem faz você parecer reservado, organizado e atencioso aos detalhes. As pessoas veem você como competente e confiável.',
        career: 'Excepcional em: saúde, análise de dados, edição, administração, nutrição, veterinária, qualidade e processos.',
        love: 'No amor, você mostra afeto através de atos de serviço. Busca parceiros com quem possa construir algo prático. Evite criticar demais.',
        health: 'Atenção: intestinos, sistema digestivo, ansiedade. Sua mente afeta seu corpo. Pratique técnicas de relaxamento e alimentação consciente.',
        spirituality: 'Sua evolução vem de aprender que perfeição está no processo, não no resultado, e que aceitar é tão importante quanto melhorar.'
    },
    'Libra': {
        name: 'Libra',
        element: 'Ar',
        quality: 'Cardinal',
        rulingPlanet: 'Vênus',
        positiveTraits: [
            'Diplomático',
            'Charmoso',
            'Justo',
            'Social',
            'Cooperativo',
            'Estético'
        ],
        negativeTraits: [
            'Indeciso',
            'Superficial',
            'Dependente',
            'Manipulador',
            'Evita conflitos'
        ],
        inSun: 'Sol em Libra busca harmonia e equilíbrio. Você é naturalmente diplomático e valoriza relacionamentos. Sua missão é aprender a encontrar paz interna, não apenas externa.',
        inMoon: 'Lua em Libra precisa de harmonia para se sentir emocionalmente bem. Conflitos o desestabilizam profundamente. Aprenda que conflitos saudáveis podem fortalecer relações.',
        inAscendant: 'Ascendente em Libra faz você parecer charmoso, diplomático e agradável. As pessoas veem você como alguém fácil de conversar.',
        career: 'Ideal para: direito, diplomacia, artes, design, recursos humanos, mediação, consultoria de imagem, relações públicas.',
        love: 'No amor, você busca parceria ideal e equilíbrio perfeito. Precisa de companheirismo verdadeiro. Cuidado com codependência e perda de identidade.',
        health: 'Cuidado com: rins, região lombar, diabetes. Mantenha equilíbrio em tudo. Beba bastante água e evite excessos.',
        spirituality: 'Sua jornada envolve aprender que verdadeiro equilíbrio vem de dentro e que você é completo sozinho, embora prefira companhia.'
    },
    'Escorpião': {
        name: 'Escorpião',
        element: 'Água',
        quality: 'Fixo',
        rulingPlanet: 'Plutão/Marte',
        positiveTraits: [
            'Intenso',
            'Leal',
            'Transformador',
            'Intuitivo',
            'Determinado',
            'Profundo'
        ],
        negativeTraits: [
            'Possessivo',
            'Vingativo',
            'Manipulador',
            'Desconfiado',
            'Obsessivo'
        ],
        inSun: 'Sol em Escorpião traz intensidade emocional e poder de transformação. Você vê além das aparências e não tem medo das profundezas. Sua missão é usar seu poder para curar, não destruir.',
        inMoon: 'Lua em Escorpião (em queda) intensifica emoções ao extremo. Você sente tudo profundamente e nunca esquece. Aprenda a perdoar e liberar.',
        inAscendant: 'Ascendente em Escorpião faz você parecer misterioso, magnético e intimidador. As pessoas sentem seu poder antes mesmo de você falar.',
        career: 'Poderoso em: psicologia, investigação, cirurgia, ocultismo, pesquisa, transformação organizacional, gestão de crises.',
        love: 'No amor, você é tudo ou nada - intenso, leal e transformador. Precisa de profundidade e verdade. Cuidado com ciúmes e controle.',
        health: 'Atenção: órgãos reprodutivos, sistema excretor. Suas emoções retidas podem criar toxinas. Pratique liberação emocional regular.',
        spirituality: 'Sua evolução vem de múltiplas mortes e renascimentos simbólicos, aprendendo a transformar veneno em medicina.'
    },
    'Sagitário': {
        name: 'Sagitário',
        element: 'Fogo',
        quality: 'Mutável',
        rulingPlanet: 'Júpiter',
        positiveTraits: [
            'Otimista',
            'Aventureiro',
            'Filosófico',
            'Honesto',
            'Generoso',
            'Livre'
        ],
        negativeTraits: [
            'Irresponsável',
            'Imprudente',
            'Exagerado',
            'Insensível',
            'Inquieto'
        ],
        inSun: 'Sol em Sagitário busca verdade e expansão. Você é naturalmente otimista e filosófico. Sua missão é encontrar sabedoria através de suas aventuras.',
        inMoon: 'Lua em Sagitário precisa de liberdade emocional e filosofia. Você se sente melhor quando está explorando ou aprendendo. Evite escapismo.',
        inAscendant: 'Ascendente em Sagitário faz você parecer otimista, expansivo e aventureiro. As pessoas veem você como alguém sempre positivo.',
        career: 'Prospera em: ensino superior, viagens, filosofia, publicação, esportes, direito internacional, turismo.',
        love: 'No amor, você precisa de liberdade e crescimento mútuo. Busca parceiros que sejam também amigos e companheiros de aventura.',
        health: 'Cuidado com: quadris, fígado, ciático. Tendência a excessos. Mantenha moderação em tudo e exercícios regulares.',
        spirituality: 'Sua jornada envolve aprender que a maior aventura é interna e que verdade não está lá fora, mas dentro de você.'
    },
    'Capricórnio': {
        name: 'Capricórnio',
        element: 'Terra',
        quality: 'Cardinal',
        rulingPlanet: 'Saturno',
        positiveTraits: [
            'Ambicioso',
            'Disciplinado',
            'Responsável',
            'Prático',
            'Persistente',
            'Sábio'
        ],
        negativeTraits: [
            'Pessimista',
            'Frio',
            'Materialista',
            'Rígido',
            'Controlador'
        ],
        inSun: 'Sol em Capricórnio traz ambição e senso de responsabilidade. Você está aqui para construir algo duradouro. Sua missão é equilibrar sucesso material com realização emocional.',
        inMoon: 'Lua em Capricórnio (em detrimento) reprime emoções por senso de dever. Você precisa de estrutura para se sentir seguro. Aprenda a expressar vulnerabilidade.',
        inAscendant: 'Ascendente em Capricórnio faz você parecer sério, responsável e maduro além da idade. As pessoas respeitam sua autoridade natural.',
        career: 'Natural em: administração, engenharia, política, gestão executiva, arquitetura, qualquer área que exija construção de legado.',
        love: 'No amor, você é leal e compromissado. Pode parecer frio mas é profundamente dedicado. Aprenda a mostrar afeto e vulnerabilidade.',
        health: 'Atenção: ossos, joelhos, pele, dentes. Tendência a problemas por excesso de trabalho. Faça pausas regulares e cuide da saúde preventiva.',
        spirituality: 'Sua evolução vem de aprender que sucesso verdadeiro inclui felicidade e que vulnerabilidade não é fraqueza.'
    },
    'Aquário': {
        name: 'Aquário',
        element: 'Ar',
        quality: 'Fixo',
        rulingPlanet: 'Urano/Saturno',
        positiveTraits: [
            'Inovador',
            'Humanitário',
            'Original',
            'Intelectual',
            'Independente',
            'Progressista'
        ],
        negativeTraits: [
            'Distante',
            'Rebelde',
            'Imprevisível',
            'Frio',
            'Teimoso'
        ],
        inSun: 'Sol em Aquário traz visão futurista e amor pela humanidade. Você é único e não teme ser diferente. Sua missão é equilibrar individualidade com conexão humana.',
        inMoon: 'Lua em Aquário processa emoções intelectualmente. Você precisa de liberdade emocional e se sente melhor em grupos. Aprenda a ter intimidade individual.',
        inAscendant: 'Ascendente em Aquário faz você parecer único, excêntrico e intelectual. As pessoas veem você como diferente e interessante.',
        career: 'Brilha em: tecnologia, ciência, inovação, causas humanitárias, astrologia, reformas sociais, futurismo.',
        love: 'No amor, você precisa de amizade e liberdade. Busca parceiros intelectuais e únicos. Aprenda a se conectar emocionalmente, não apenas mentalmente.',
        health: 'Cuidado com: circulação, tornozelos, sistema nervoso. Sua mente acelerada pode causar ansiedade. Pratique grounding.',
        spirituality: 'Sua jornada envolve aprender que servir a humanidade começa com conexão autêntica com indivíduos, incluindo você mesmo.'
    },
    'Peixes': {
        name: 'Peixes',
        element: 'Água',
        quality: 'Mutável',
        rulingPlanet: 'Netuno/Júpiter',
        positiveTraits: [
            'Compassivo',
            'Intuitivo',
            'Artístico',
            'Espiritual',
            'Empático',
            'Adaptável'
        ],
        negativeTraits: [
            'Escapista',
            'Vítima',
            'Confuso',
            'Passivo',
            'Iludido'
        ],
        inSun: 'Sol em Peixes traz sensibilidade extrema e conexão espiritual. Você sente o sofrimento do mundo e anseia por transcendência. Sua missão é aprender a ajudar sem se perder.',
        inMoon: 'Lua em Peixes é extremamente empática e psíquica. Você absorve emoções dos outros. Aprenda a proteger sua energia e distinguir seus sentimentos dos alheios.',
        inAscendant: 'Ascendente em Peixes faz você parecer sonhador, compassivo e misterioso. As pessoas sentem sua energia espiritual.',
        career: 'Ideal para: artes, música, terapia, espiritualidade, medicina holística, cinema, fotografia, trabalho em hospitais.',
        love: 'No amor, você busca união mística e transcendência. Extremamente devotado mas precisa de limites. Cuidado com idealização e martírio.',
        health: 'Atenção: pés, sistema linfático, vícios. Você é sensível a substâncias. Mantenha limites energéticos e pratique aterramento regular.',
        spirituality: 'Sua evolução final envolve dissolver ego mas manter individualidade, servir sem se sacrificar, e entender que você é o oceano em uma gota.'
    }
};
function getSignInterpretation(sign) {
    return signInterpretations[sign] || signInterpretations['Áries'];
}
}),
"[project]/src/lib/numerology-contexts.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Interpretações contextuais de numerologia
__turbopack_context__.s({
    "challengeMeanings": ()=>challengeMeanings,
    "getChallengeMeaning": ()=>getChallengeMeaning,
    "getHiddenTalentMeaning": ()=>getHiddenTalentMeaning,
    "getLifeCycleMeaning": ()=>getLifeCycleMeaning,
    "getPersonalDayMeaning": ()=>getPersonalDayMeaning,
    "getPersonalMonthMeaning": ()=>getPersonalMonthMeaning,
    "getPersonalYearMeaning": ()=>getPersonalYearMeaning,
    "hiddenTalentMeanings": ()=>hiddenTalentMeanings,
    "lifeCycleMeanings": ()=>lifeCycleMeanings,
    "personalDayMeanings": ()=>personalDayMeanings,
    "personalMonthMeanings": ()=>personalMonthMeanings,
    "personalYearMeanings": ()=>personalYearMeanings
});
const personalYearMeanings = {
    1: "🌱 ANO DE NOVOS COMEÇOS: Este é um ano de iniciativas, novos projetos e liderança. É hora de plantar sementes para o futuro. Tome a iniciativa em sua vida, seja independente e corajoso. Novas oportunidades virão - aproveite-as! É o momento ideal para começar aquele projeto que sempre sonhou, mudar de carreira ou iniciar um novo relacionamento. Ação é a palavra-chave.",
    2: "🤝 ANO DE PARCERIAS E COOPERAÇÃO: Este é um ano para cultivar relacionamentos, trabalhar em equipe e desenvolver paciência. Foque em colaboração, não em competição. É um período mais lento que pede diplomacia e sensibilidade. Dedique-se a parcerias (amorosas ou profissionais), cuide de detalhes e desenvolva sua intuição. A paciência trará recompensas.",
    3: "🎨 ANO DE CRIATIVIDADE E EXPRESSÃO: Este é um ano social, criativo e cheio de alegria! Expresse-se através de arte, comunicação ou qualquer forma criativa. Conecte-se com amigos, divirta-se e espalhe otimismo. É tempo de brilhar socialmente, desenvolver talentos artísticos e compartilhar suas ideias. Cuidado apenas com dispersão - foque sua criatividade.",
    4: "🏗️ ANO DE CONSTRUÇÃO E TRABALHO: Este é um ano de trabalho duro, organização e construção de bases sólidas. É hora de ser prático, disciplinado e responsável. Organize sua vida financeira, cuide de sua saúde e construa estruturas duradouras. Pode parecer pesado, mas o que você construir agora será a fundação do seu futuro. Persistência é essencial.",
    5: "✈️ ANO DE MUDANÇAS E LIBERDADE: Este é um ano dinâmico, cheio de mudanças, viagens e novas experiências! Abrace a aventura, seja flexível e explore novos horizontes. É tempo de se libertar de rotinas antigas, experimentar coisas novas e expandir seus horizontes. Seja adaptável - mudanças inesperadas podem trazer oportunidades incríveis. Aproveite a liberdade!",
    6: "💝 ANO DE RESPONSABILIDADE E HARMONIA: Este é um ano focado em família, lar, relacionamentos e responsabilidades. É hora de cuidar, nutrir e criar harmonia ao seu redor. Dedique-se aos seus entes queridos, embeleze seu espaço, assuma responsabilidades familiares. Pode haver casamentos, nascimentos ou necessidade de cuidar de outros. O amor e o serviço são centrais agora.",
    7: "🧘 ANO DE INTROSPECÇÃO E ESPIRITUALIDADE: Este é um ano para olhar para dentro, estudar, meditar e buscar sabedoria espiritual. É um período mais introspectivo - use-o para autoconhecimento profundo. Estude assuntos que sempre teve curiosidade, desenvolva práticas espirituais, busque solidão quando necessário. É um ano de crescimento interno, não externo. Confie na sua intuição.",
    8: "💰 ANO DE PODER E REALIZAÇÃO MATERIAL: Este é um ano de poder pessoal, sucesso profissional e conquistas materiais! É hora de assumir posições de liderança, buscar promoções e colher o que plantou. Suas ambições podem se realizar agora. Foque em negócios, finanças e reconhecimento profissional. Use seu poder com sabedoria e integridade.",
    9: "🌍 ANO DE CONCLUSÃO E HUMANITARISMO: Este é um ano de finalizações, perdão e serviço humanitário. É hora de deixar ir o que não serve mais e se dedicar a causas maiores. Complete projetos antigos, perdoe mágoas passadas, doe o que não precisa. É um ano de preparação para um novo ciclo. Seja generoso, compassivo e pense no bem coletivo."
};
const lifeCycleMeanings = {
    1: "Liderança e Independência - Neste ciclo, você aprende a ser autossuficiente, tomar iniciativas e desenvolver coragem. É uma fase de autodescoberta e afirmação pessoal.",
    2: "Cooperação e Sensibilidade - Este ciclo ensina paciência, diplomacia e trabalho em equipe. É uma fase de desenvolvimento emocional e aprendizado sobre relacionamentos.",
    3: "Criatividade e Comunicação - Neste ciclo, você desenvolve habilidades criativas, sociais e de expressão. É uma fase alegre de descoberta de talentos artísticos.",
    4: "Trabalho e Estrutura - Este ciclo foca em responsabilidade, disciplina e construção de bases sólidas. É uma fase de aprendizado sobre esforço e persistência.",
    5: "Liberdade e Mudança - Neste ciclo, você experimenta mudanças, viagens e aventuras. É uma fase de expansão e descoberta de novas possibilidades.",
    6: "Responsabilidade e Família - Este ciclo centra-se em lar, família e relacionamentos. É uma fase de aprendizado sobre amor, cuidado e compromisso.",
    7: "Sabedoria e Introspecção - Neste ciclo, você busca conhecimento profundo e crescimento espiritual. É uma fase de reflexão e desenvolvimento interior.",
    8: "Poder e Conquistas - Este ciclo traz oportunidades de sucesso material e reconhecimento. É uma fase de realizações e manifestação de ambições.",
    9: "Compaixão e Finalização - Neste ciclo, você desenvolve sabedoria compassiva e aprende sobre desapego. É uma fase de conclusões e serviço aos outros."
};
const challengeMeanings = {
    0: "DESAFIO DA ESCOLHA: Você tem muitas possibilidades e isso pode gerar indecisão. O desafio é escolher um caminho sem medo de perder outros. Aprenda a tomar decisões e comprometer-se com suas escolhas. Desenvolva confiança em seu julgamento.",
    1: "DESAFIO DO EGO E INDEPENDÊNCIA: Você precisa equilibrar autoconfiança com humildade. O desafio é desenvolver independência sem se tornar egoísta ou dominador. Aprenda a liderar servindo, não controlando. Seja assertivo mas não agressivo.",
    2: "DESAFIO DA SENSIBILIDADE: Você é muito sensível e isso pode causar mágoas. O desafio é desenvolver limites emocionais saudáveis sem perder sua empatia. Aprenda a não levar tudo para o lado pessoal. Seja gentil consigo mesmo também.",
    3: "DESAFIO DA DISPERSÃO: Você tem muitos interesses e talentos, mas pode se dispersar. O desafio é focar sua criatividade em projetos concretos. Aprenda a terminar o que começa. Canalize sua energia criativa de forma produtiva.",
    4: "DESAFIO DA RIGIDEZ: Você tende a ser muito rígido ou resistente a mudanças. O desafio é desenvolver flexibilidade mantendo sua estabilidade. Aprenda que nem tudo precisa ser perfeito. Equilibre trabalho e diversão.",
    5: "DESAFIO DA INSTABILIDADE: Você pode ser muito inquieto e evitar compromissos. O desafio é encontrar liberdade dentro da responsabilidade. Aprenda que compromisso não é prisão. Desenvolva constância sem perder sua espontaneidade.",
    6: "DESAFIO DA CODEPENDÊNCIA: Você tende a se sacrificar excessivamente pelos outros. O desafio é cuidar dos outros sem se perder. Aprenda a dizer não e estabelecer limites. Cuide de si mesmo para poder cuidar melhor dos outros.",
    7: "DESAFIO DO ISOLAMENTO: Você pode se isolar demais ou ter dificuldade de confiar. O desafio é compartilhar sua sabedoria sem se fechar. Aprenda a equilibrar solidão com conexão. Confie mais nas pessoas e em si mesmo.",
    8: "DESAFIO DO PODER: Você pode abusar do poder ou ter medo dele. O desafio é usar seu poder com sabedoria e integridade. Aprenda que poder traz responsabilidade. Use seus recursos para o bem maior, não apenas pessoal."
};
const hiddenTalentMeanings = {
    1: "Liderança Natural: Você tem o talento oculto de liderar e inspirar outros. Desenvolva sua autoconfiança e coragem para tomar iniciativas.",
    2: "Diplomacia Intuitiva: Você possui habilidade natural para mediar conflitos e entender pessoas profundamente. Confie na sua intuição.",
    3: "Expressão Criativa: Você tem talentos artísticos e comunicativos esperando serem desenvolvidos. Expresse-se sem medo.",
    4: "Organização Magistral: Você possui habilidade excepcional para criar sistemas e estruturas. Use isso para construir algo duradouro.",
    5: "Adaptabilidade Versátil: Você tem o dom de se adaptar a qualquer situação e aprender rapidamente. Abrace mudanças.",
    6: "Cura e Cuidado: Você possui habilidade natural para curar e cuidar dos outros. Desenvolva isso com consciência.",
    7: "Sabedoria Profunda: Você tem capacidade analítica e espiritual excepcional. Busque conhecimento profundo.",
    8: "Manifestação Material: Você possui habilidade inata para criar riqueza e sucesso. Use com responsabilidade.",
    9: "Compaixão Universal: Você tem o dom de compreender e ajudar a humanidade. Sirva com amor e sabedoria."
};
const personalMonthMeanings = {
    1: "Mês de iniciar novos projetos e tomar ação",
    2: "Mês de cultivar relacionamentos e ter paciência",
    3: "Mês de criatividade, socialização e expressão",
    4: "Mês de trabalho focado e organização",
    5: "Mês de mudanças e novas experiências",
    6: "Mês de foco na família e responsabilidades",
    7: "Mês de reflexão, estudo e introspecção",
    8: "Mês de conquistas profissionais e financeiras",
    9: "Mês de finalizar pendências e perdoar"
};
const personalDayMeanings = {
    1: "Dia de tomar iniciativa e começar algo novo",
    2: "Dia de colaborar e ser paciente com outros",
    3: "Dia de se expressar e socializar",
    4: "Dia de trabalhar duro e ser organizado",
    5: "Dia de abraçar mudanças e ser flexível",
    6: "Dia de cuidar dos outros e do lar",
    7: "Dia de refletir e buscar conhecimento",
    8: "Dia de focar em negócios e finanças",
    9: "Dia de ajudar outros e ser compassivo"
};
function getPersonalYearMeaning(number) {
    return personalYearMeanings[number] || "Ano de crescimento pessoal";
}
function getLifeCycleMeaning(number) {
    return lifeCycleMeanings[number] || "Ciclo de aprendizado";
}
function getChallengeMeaning(number) {
    return challengeMeanings[number] || "Desafio de crescimento pessoal";
}
function getHiddenTalentMeaning(number) {
    return hiddenTalentMeanings[number] || "Talento a ser descoberto";
}
function getPersonalMonthMeaning(number) {
    return personalMonthMeanings[number] || "Mês de crescimento";
}
function getPersonalDayMeaning(number) {
    return personalDayMeanings[number] || "Dia de oportunidades";
}
}),
"[project]/src/lib/chinese-zodiac-year.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Biblioteca de Anos do Zodíaco Chinês e Compatibilidades
__turbopack_context__.s({
    "chineseYears": ()=>chineseYears,
    "getCurrentChineseYear": ()=>getCurrentChineseYear,
    "getRelationshipColor": ()=>getRelationshipColor,
    "getYearImpact": ()=>getYearImpact,
    "yearImpacts": ()=>yearImpacts
});
const chineseYears = [
    {
        year: 2023,
        animal: 'Coelho',
        element: 'Água',
        description: 'Ano de paz, diplomacia e cura'
    },
    {
        year: 2024,
        animal: 'Dragão',
        element: 'Madeira',
        description: 'Ano de transformação, poder e grandes conquistas'
    },
    {
        year: 2025,
        animal: 'Serpente',
        element: 'Madeira',
        description: 'Ano de sabedoria, transformação e intuição'
    },
    {
        year: 2026,
        animal: 'Cavalo',
        element: 'Fogo',
        description: 'Ano de movimento, liberdade e aventura'
    },
    {
        year: 2027,
        animal: 'Cabra',
        element: 'Fogo',
        description: 'Ano de criatividade, gentileza e harmonia'
    },
    {
        year: 2028,
        animal: 'Macaco',
        element: 'Terra',
        description: 'Ano de inteligência, inovação e oportunidades'
    }
];
function getCurrentChineseYear() {
    const currentYear = new Date().getFullYear();
    return chineseYears.find((y)=>y.year === currentYear) || chineseYears[2] // Default 2025
    ;
}
const yearImpacts = {
    'Rato': {
        'Serpente': {
            relationship: 'neutra',
            title: '⚖️ Ano Neutro - Oportunidades com Cautela',
            positive: 'O Ano da Serpente traz oportunidades de crescimento intelectual e financeiro para você. Sua inteligência natural se alinha bem com a energia sábia da Serpente. Bom momento para investimentos calculados e aprendizado profundo.',
            negative: 'Cuidado com a tendência de ser excessivamente cauteloso. A Serpente pode intensificar sua desconfiança natural, levando você a perder oportunidades por excesso de análise.',
            advice: 'Equilibre sua cautela natural com coragem para agir. Confie em sua intuição, mas não deixe o medo paralisar suas decisões. Use este ano para desenvolver sabedoria prática.'
        }
    },
    'Boi': {
        'Serpente': {
            relationship: 'excelente',
            title: '🌟 Ano Extremamente Favorável - Grande Harmonia',
            positive: 'Este é um dos seus melhores anos! Boi e Serpente são aliados naturais. Você terá reconhecimento pelo seu trabalho duro, estabilidade financeira e sucesso em projetos de longo prazo. A sabedoria da Serpente complementa perfeitamente sua determinação.',
            negative: 'O único risco é trabalhar demais. A combinação Boi-Serpente pode criar obsessão pelo trabalho e perfeccionismo excessivo.',
            advice: 'Aproveite este ano dourado para consolidar conquistas e construir bases sólidas. É momento ideal para grandes investimentos, casamento ou compra de imóveis. Lembre-se de descansar também!'
        }
    },
    'Tigre': {
        'Serpente': {
            relationship: 'desafiadora',
            title: '⚠️ Ano Desafiador - Conflito de Energias',
            positive: 'Embora desafiador, este ano pode ensinar você a desenvolver paciência, estratégia e pensamento antes da ação. A Serpente pode ajudá-lo a ser menos impulsivo.',
            negative: 'Tigre e Serpente têm energias muito diferentes. Você pode se sentir restringido, frustrado ou incompreendido. Haverá tensão entre seu desejo de ação e a necessidade de cautela do ano.',
            advice: 'Pratique paciência e planejamento estratégico. Não force situações - espere o momento certo. Use este ano para desenvolver sabedoria, não para grandes conquistas externas. Evite confrontos desnecessários.'
        }
    },
    'Coelho': {
        'Serpente': {
            relationship: 'neutra',
            title: '⚖️ Ano Neutro - Diplomacia e Intuição',
            positive: 'Sua diplomacia natural funciona bem com a sabedoria da Serpente. Bom ano para relacionamentos, negociações e desenvolvimento espiritual. Sua intuição estará aguçada.',
            negative: 'Ambos são discretos, o que pode levar ao excesso de isolamento ou segredos que causam problemas. Cuidado com manipulações sutis.',
            advice: 'Use sua elegância natural para navegar as águas profundas deste ano. Seja transparente em relações importantes. Desenvolva sua intuição através de práticas contemplativas.'
        }
    },
    'Dragão': {
        'Serpente': {
            relationship: 'boa',
            title: '✨ Ano Favorável - Poder e Sabedoria',
            positive: 'Dragão e Serpente formam boa parceria. Sua grandiosidade encontra a sabedoria. Excelente para liderança estratégica, projetos visionários e crescimento espiritual. Você pode manifestar grandes ideias de forma prática.',
            negative: 'Dois egos fortes podem criar conflitos internos entre brilhar e ser discreto. Cuidado com excesso de confiança misturado com paranoia.',
            advice: 'Combine seu poder natural com a sabedoria do ano. Seja visionário mas estratégico. Este é bom momento para grandes projetos, mas com planejamento cuidadoso. Equilibre luz e sombra.'
        }
    },
    'Serpente': {
        'Serpente': {
            relationship: 'excelente',
            title: '🎂 Seu Ano! - Poder Máximo e Renovação',
            positive: 'Este é SEU ano! Momento de brilhar, alcançar objetivos importantes e receber reconhecimento. Sua intuição estará no auge. Todas as portas se abrem para você. É tempo de colher o que plantou e iniciar novos ciclos importantes.',
            negative: 'Cuidado com excesso de intensidade, manipulação ou isolamento. Duas Serpentes podem criar excesso de desconfiança e complexidade.',
            advice: 'APROVEITE! Este ano acontece apenas a cada 12 anos. Tome iniciativas importantes, mude o que precisa mudar, manifeste seus sonhos. Seja autêntico e use seu poder com sabedoria. Momento de transformação profunda.'
        }
    },
    'Cavalo': {
        'Serpente': {
            relationship: 'desafiadora',
            title: '⚠️ Ano Desafiador - Restrição vs Liberdade',
            positive: 'A Serpente pode ensinar você a desenvolver paciência, profundidade e estratégia - qualidades que normalmente lhe faltam. Pode ser ano de amadurecimento importante.',
            negative: 'Sua natureza livre e expansiva conflita com a energia reservada da Serpente. Você pode se sentir preso, lento ou frustrado. Haverá necessidade de cautela quando você quer velocidade.',
            advice: 'Aceite que este é um ano mais lento. Use-o para planejamento, não para grandes movimentos. Desenvolva paciência sem perder seu espírito. Pratique meditação e introspecção. Evite decisões impulsivas.'
        }
    },
    'Cabra': {
        'Serpente': {
            relationship: 'neutra',
            title: '⚖️ Ano Neutro - Criatividade Profunda',
            positive: 'Sua criatividade ganha profundidade com a Serpente. Bom ano para arte, espiritualidade e autoconhecimento. A Serpente pode dar estrutura às suas ideias.',
            negative: 'Ambos podem ser inseguros e indiretos, criando confusão em relacionamentos. Cuidado com excesso de sensibilidade e paranoia.',
            advice: 'Use este ano para desenvolver talentos artísticos com disciplina. Busque terapia ou práticas espirituais. Seja mais direto em comunicações. Confie mais em si mesmo.'
        }
    },
    'Macaco': {
        'Serpente': {
            relationship: 'conflituosa',
            title: '🚨 Ano Muito Desafiador - Conflito Direto',
            positive: 'Se conseguir navegar este ano difícil, você desenvolverá profundidade, sabedoria e maturidade que normalmente lhe faltam. Pode ser ano de grande crescimento pessoal através de desafios.',
            negative: 'Macaco e Serpente são inimigos tradicionais. Haverá conflitos, mal-entendidos e obstáculos. Sua natureza alegre e superficial conflita com a profundidade séria da Serpente. Pode haver traições ou problemas legais.',
            advice: 'ANO DE MÁXIMA CAUTELA! Não tome grandes riscos. Evite conflitos, especulações e pessoas suspeitas. Mantenha perfil baixo. Use este ano para reflexão profunda e mudanças internas. Busque aconselhamento antes de decisões importantes. A tempestade vai passar.'
        }
    },
    'Galo': {
        'Serpente': {
            relationship: 'excelente',
            title: '🌟 Ano Extremamente Favorável - Aliança Perfeita',
            positive: 'Galo e Serpente são aliados poderosos! Ano excelente para todas as áreas: carreira, amor, finanças, saúde. Sua organização + sabedoria da Serpente = sucesso. Reconhecimento profissional, oportunidades douradas e relacionamentos harmoniosos.',
            negative: 'O único cuidado é com excesso de perfeccionismo. Juntos, Galo e Serpente podem criar padrões impossíveis.',
            advice: 'Aproveite este ano maravilhoso! Faça grandes movimentos profissionais, invista, case, compre imóveis, inicie projetos importantes. Suas chances de sucesso são altíssimas. Confie em sua intuição e vá com tudo!'
        }
    },
    'Cão': {
        'Serpente': {
            relationship: 'neutra',
            title: '⚖️ Ano Neutro - Lealdade e Mistério',
            positive: 'Sua lealdade e honestidade podem se beneficiar da sabedoria da Serpente. Bom ano para causas justas, trabalho social e desenvolvimento espiritual.',
            negative: 'Cão é transparente, Serpente é misteriosa. Isso pode gerar desconforto. Você pode desconfiar das intenções dos outros mais que o usual.',
            advice: 'Mantenha seus valores mas seja menos julgador. Nem todos são transparentes como você e está tudo bem. Use este ano para desenvolver discernimento sem perder sua bondade.'
        }
    },
    'Porco': {
        'Serpente': {
            relationship: 'conflituosa',
            title: '🚨 Ano Muito Desafiador - Opostos Totais',
            positive: 'Este ano difícil pode ensinar você a ser menos ingênuo, mais estratégico e proteger melhor seus recursos. Oportunidade de crescimento através de dificuldades.',
            negative: 'Porco e Serpente são opostos diretos. Sua generosidade pode ser explorada. Pode haver decepções, perdas financeiras ou traições. Sua natureza confiante conflita com a desconfiança necessária.',
            advice: 'ANO DE MÁXIMA PRECAUÇÃO! Não empreste dinheiro, não confie cegamente, leia contratos cuidadosamente. Proteja-se de pessoas manipuladoras. Desenvolva discernimento. Use este ano para fortalecer limites pessoais e aprender a dizer não. Seja menos ingênuo.'
        }
    }
};
function getYearImpact(userAnimal, yearAnimal) {
    const impact = yearImpacts[userAnimal]?.[yearAnimal];
    if (!impact) {
        return {
            relationship: 'neutra',
            title: 'Ano Neutro',
            positive: 'Um ano de equilíbrio e aprendizado.',
            negative: 'Mantenha-se atento às oportunidades e desafios.',
            advice: 'Seja prudente e aproveite as oportunidades que surgirem.'
        };
    }
    return impact;
}
function getRelationshipColor(relationship) {
    switch(relationship){
        case 'excelente':
            return 'green';
        case 'boa':
            return 'blue';
        case 'neutra':
            return 'yellow';
        case 'desafiadora':
            return 'orange';
        case 'conflituosa':
            return 'red';
        default:
            return 'gray';
    }
}
}),
"[project]/src/components/AstroMap.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>AstroMap
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
// Coordenadas aproximadas de cidades (banco de dados simplificado)
const cityCoordinates = {
    // Linhas Solares
    'Los Angeles, EUA': [
        34.0522,
        -118.2437
    ],
    'Sydney, Austrália': [
        -33.8688,
        151.2093
    ],
    'Tóquio, Japão': [
        35.6762,
        139.6503
    ],
    'Dubai, EAU': [
        25.2048,
        55.2708
    ],
    'São Paulo, Brasil': [
        -23.5505,
        -46.6333
    ],
    // Linhas Lunares
    'Londres, Reino Unido': [
        51.5074,
        -0.1278
    ],
    'Dublin, Irlanda': [
        53.3498,
        -6.2603
    ],
    'Amsterdam, Holanda': [
        52.3676,
        4.9041
    ],
    'Vancouver, Canadá': [
        49.2827,
        -123.1207
    ],
    // Linhas de Vênus
    'Paris, França': [
        48.8566,
        2.3522
    ],
    'Veneza, Itália': [
        45.4408,
        12.3155
    ],
    'Rio de Janeiro, Brasil': [
        -22.9068,
        -43.1729
    ],
    'Bali, Indonésia': [
        -8.3405,
        115.0920
    ],
    // Outras
    'Berlim, Alemanha': [
        52.5200,
        13.4050
    ],
    'Seul, Coreia do Sul': [
        37.5665,
        126.9780
    ],
    'Hong Kong': [
        22.3193,
        114.1694
    ],
    'Nova York, EUA': [
        40.7128,
        -74.0060
    ],
    'Nova Delhi, Índia': [
        28.6139,
        77.2090
    ],
    'Bangkok, Tailândia': [
        13.7563,
        100.5018
    ],
    'Cairo, Egito': [
        30.0444,
        31.2357
    ],
    'Jerusalém, Israel': [
        31.7683,
        35.2137
    ],
    'Moscou, Rússia': [
        55.7558,
        37.6173
    ],
    'Oslo, Noruega': [
        59.9139,
        10.7522
    ],
    'Helsinki, Finlândia': [
        60.1695,
        24.9354
    ],
    'Montreal, Canadá': [
        45.5017,
        -73.5673
    ]
};
// Componente Map separado para carregamento dinâmico
const MapComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function AstroMap(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MapComponent, {
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/AstroMap.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-bold text-gray-800 dark:text-gray-100 mb-4 text-center",
                            children: "🎨 Guia de Interpretação das Linhas Planetárias"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AstroMap.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-4 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg p-4 border-l-4 border-yellow-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-5 rounded-full bg-yellow-500 border-2 border-white shadow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-yellow-700 dark:text-yellow-300",
                                                    children: "☀️ Linha Solar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-700 dark:text-gray-300 leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Significado:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 17
                                                }, this),
                                                " Regiões onde você brilha naturalmente, recebe reconhecimento e desenvolve liderança.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 131
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Ideal para:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 17
                                                }, this),
                                                " Carreira, visibilidade pública, autoconfiança, vitalidade e sucesso profissional.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 127
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Energias:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 17
                                                }, this),
                                                " Poder pessoal, fama, energia vital elevada."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 274,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AstroMap.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg p-4 border-l-4 border-purple-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-5 rounded-full bg-purple-600 border-2 border-white shadow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-purple-700 dark:text-purple-300",
                                                    children: "🌙 Linha Lunar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-700 dark:text-gray-300 leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Significado:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 17
                                                }, this),
                                                " Locais que nutrem suas emoções, proporcionam segurança e conexão com o lar.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 122
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Ideal para:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, this),
                                                " Família, moradia, equilíbrio emocional, maternidade/paternidade, introspecção.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 124
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Energias:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 17
                                                }, this),
                                                " Conforto, nutrição emocional, memórias, intuição."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AstroMap.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 rounded-lg p-4 border-l-4 border-pink-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-5 rounded-full bg-pink-500 border-2 border-white shadow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-pink-700 dark:text-pink-300",
                                                    children: "💝 Linha de Vênus"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-700 dark:text-gray-300 leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Significado:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 17
                                                }, this),
                                                " Regiões que favorecem amor, relacionamentos, beleza e prosperidade financeira.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 125
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Ideal para:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 17
                                                }, this),
                                                " Romance, casamento, artes, harmonia, negócios criativos, bem-estar.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 113
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Energias:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 17
                                                }, this),
                                                " Amor, beleza, dinheiro, prazeres, criatividade."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AstroMap.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AstroMap.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-4 border-l-4 border-green-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-5 rounded-full bg-green-500 border-2 border-white shadow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-green-700 dark:text-green-300",
                                                    children: "✨ Local Favorável"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-700 dark:text-gray-300",
                                            children: "Energias harmoniosas e positivas. Ótimos para morar, trabalhar, investir ou visitar. Você se sentirá naturalmente bem e terá mais facilidade para prosperar."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AstroMap.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-lg p-4 border-l-4 border-red-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-5 rounded-full bg-red-500 border-2 border-white shadow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-red-700 dark:text-red-300",
                                                    children: "⚠️ Local Desafiador"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-700 dark:text-gray-300",
                                            children: "Energias tensas que requerem atenção extra. Não são proibidos, mas exigem mais autocuidado, preparação e consciência. Podem trazer lições importantes."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AstroMap.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AstroMap.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AstroMap.tsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AstroMap.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 text-xs text-gray-600 dark:text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold mb-2",
                        children: "📍 Como usar este mapa:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AstroMap.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-1 ml-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Clique nos marcadores"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AstroMap.tsx",
                                        lineNumber: 337,
                                        columnNumber: 17
                                    }, this),
                                    " para ver informações detalhadas de cada local"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AstroMap.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Arraste o mapa"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AstroMap.tsx",
                                        lineNumber: 338,
                                        columnNumber: 17
                                    }, this),
                                    " para explorar diferentes regiões do mundo"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AstroMap.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Use zoom"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AstroMap.tsx",
                                        lineNumber: 339,
                                        columnNumber: 17
                                    }, this),
                                    " para ver melhor as áreas de interesse"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AstroMap.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• As ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "linhas verticais tracejadas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AstroMap.tsx",
                                        lineNumber: 340,
                                        columnNumber: 20
                                    }, this),
                                    " representam meridianos planetários"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AstroMap.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AstroMap.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AstroMap.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AstroMap.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/DetailedReport.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>DetailedReport
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-ssr] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gem.js [app-ssr] (ecmascript) <export default as Gem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/numerology-interpretations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$astrology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/astrology-interpretations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/numerology-contexts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chinese$2d$zodiac$2d$year$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/chinese-zodiac-year.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AstroMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AstroMap.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
// Componente inline de horóscopo
function HoroscopeInline({ personalData }) {
    const [horoscope, setHoroscope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubscribed, setIsSubscribed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPlan, setSelectedPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('annual');
    const getSunSign = (birthDate)=>{
        const date = new Date(birthDate);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        if (month === 3 && day >= 21 || month === 4 && day <= 19) return 'Áries';
        if (month === 4 && day >= 20 || month === 5 && day <= 20) return 'Touro';
        if (month === 5 && day >= 21 || month === 6 && day <= 20) return 'Gêmeos';
        if (month === 6 && day >= 21 || month === 7 && day <= 22) return 'Câncer';
        if (month === 7 && day >= 23 || month === 8 && day <= 22) return 'Leão';
        if (month === 8 && day >= 23 || month === 9 && day <= 22) return 'Virgem';
        if (month === 9 && day >= 23 || month === 10 && day <= 22) return 'Libra';
        if (month === 10 && day >= 23 || month === 11 && day <= 21) return 'Escorpião';
        if (month === 11 && day >= 22 || month === 12 && day <= 21) return 'Sagitário';
        if (month === 12 && day >= 22 || month === 1 && day <= 19) return 'Capricórnio';
        if (month === 1 && day >= 20 || month === 2 && day <= 18) return 'Aquário';
        return 'Peixes';
    };
    const getLuckyColorForSign = (sign)=>{
        const signColors = {
            'Áries': 'Vermelho',
            'Touro': 'Verde',
            'Gêmeos': 'Amarelo',
            'Câncer': 'Prateado',
            'Leão': 'Dourado',
            'Virgem': 'Marrom',
            'Libra': 'Rosa',
            'Escorpião': 'Bordô',
            'Sagitário': 'Roxo',
            'Capricórnio': 'Preto',
            'Aquário': 'Azul Turquesa',
            'Peixes': 'Azul Marinho'
        };
        return signColors[sign] || 'Dourado';
    };
    const generateHoroscope = (birthDate)=>{
        const sign = getSunSign(birthDate);
        const today = new Date().toLocaleDateString('pt-BR');
        const predictions = {
            'Áries': {
                general: 'O dia promete energia renovada e novas oportunidades se apresentarão em sua jornada.',
                love: 'Romance no ar! Seja mais expressivo(a) com seus sentimentos.',
                career: 'Oportunidade de liderança se apresenta - aproveite!',
                health: 'Energia física em alta - ideal para atividades esportivas.'
            },
            'Touro': {
                general: 'Estabilidade e crescimento material estão em seu favor hoje.',
                love: 'Relacionamentos sólidos se fortalecerão ainda mais.',
                career: 'Projetos financeiros trarão retorno positivo.',
                health: 'Foque em atividades relaxantes para equilibrar energia.'
            },
            'Gêmeos': {
                general: 'Comunicação será sua maior aliada para resolver questões.',
                love: 'Conversas profundas fortalecerão relacionamentos.',
                career: 'Apresentações e reuniões serão bem-sucedidas.',
                health: 'Atividades mentais estimulantes farão bem à saúde.'
            },
            'Câncer': {
                general: 'Intuição forte guiará suas decisões importantes.',
                love: 'Momento emocional intenso e transformador.',
                career: 'Trabalho relacionado à família ou casa será favorecido.',
                health: 'Cuidado com a saúde emocional - pratique autocuidado.'
            },
            'Leão': {
                general: 'Dia de brilhar e receber reconhecimento merecido.',
                love: 'Romance intenso e apaixonado está no ar.',
                career: 'Liderança e criatividade serão valorizadas.',
                health: 'Energia vital em alta - aproveite para atividades físicas.'
            },
            'Virgem': {
                general: 'Organização e eficiência trarão resultados excelentes.',
                love: 'Comunicação clara resolverá questões relacionais.',
                career: 'Trabalho detalhado será reconhecido e valorizado.',
                health: 'Foque em hábitos saudáveis e rotinas equilibradas.'
            },
            'Libra': {
                general: 'Harmonia e equilíbrio guiarão suas decisões hoje.',
                love: 'Momento de fortalecer laços afetivos com diplomacia.',
                career: 'Parcerias profissionais trarão sucesso.',
                health: 'Equilíbrio emocional reflete em bem-estar físico.'
            },
            'Escorpião': {
                general: 'Transformação profunda está em andamento.',
                love: 'Intensidade emocional marcará seus relacionamentos.',
                career: 'Momento de mudanças importantes na carreira.',
                health: 'Sua energia transformadora está em destaque.'
            },
            'Sagitário': {
                general: 'Aventura e exploração trarão novas perspectivas.',
                love: 'Relacionamentos se expandem através de novas experiências.',
                career: 'Oportunidades de crescimento e viagens profissionais.',
                health: 'Atividades ao ar livre revitalizarão sua energia.'
            },
            'Capricórnio': {
                general: 'Disciplina e determinação trarão conquistas sólidas.',
                love: 'Relacionamentos maduros e estáveis serão favorecidos.',
                career: 'Progresso constante em projetos importantes.',
                health: 'Mantenha rotina saudável para resultados duradouros.'
            },
            'Aquário': {
                general: 'Inovação e originalidade marcarão seu dia.',
                love: 'Conexões únicas e diferentes atrairão sua atenção.',
                career: 'Networking e amizades trarão oportunidades.',
                health: 'Sua mente inovadora precisa de atividades estimulantes.'
            },
            'Peixes': {
                general: 'Intuição e sensibilidade estarão em alta.',
                love: 'Momento de conexão emocional profunda.',
                career: 'Criatividade e arte trarão reconhecimento.',
                health: 'Atividades espirituais equilibrarão sua energia.'
            }
        };
        const signData = predictions[sign] || predictions['Áries'];
        return {
            sign,
            date: today,
            generalPrediction: signData.general,
            love: signData.love,
            career: signData.career,
            health: signData.health,
            luckyNumbers: [
                Math.floor(Math.random() * 9) + 1,
                Math.floor(Math.random() * 9) + 1,
                Math.floor(Math.random() * 9) + 1
            ],
            luckyColor: getLuckyColorForSign(sign),
            advice: 'Confie em sua intuição e aproveite as oportunidades que se apresentam.'
        };
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (personalData.birthDate) {
            const horoscopeData = generateHoroscope(personalData.birthDate);
            setHoroscope(horoscopeData);
        }
        // Verificar se tem assinatura ativa
        if (personalData.email) {
            fetch('/api/check-horoscope-subscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: personalData.email
                })
            }).then((res)=>res.json()).then((data)=>{
                if (data.success) {
                    setIsSubscribed(data.isSubscribed);
                }
            }).catch(()=>{});
        }
    }, [
        personalData.birthDate,
        personalData.email
    ]);
    const handleSubscribe = (plan)=>{
        localStorage.setItem('horoscope_subscription_customer', JSON.stringify({
            name: personalData.fullName,
            email: personalData.email,
            birthDate: personalData.birthDate,
            plan: plan
        }));
        // URLs dos planos configurados no Kirvano
        const paymentUrl = plan === 'monthly' ? 'https://pay.kirvano.com/0a482613-b924-4722-ac74-9b2481e3a167' // Plano mensal R$ 17,00/mês
         : 'https://pay.kirvano.com/c2105980-0b73-4c27-8aef-7e871b829c9f' // Plano anual R$ 134,00/ano
        ;
        window.location.href = paymentUrl;
    };
    if (!horoscope) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/DetailedReport.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 dark:text-gray-400",
                    children: "Gerando seu horóscopo..."
                }, void 0, false, {
                    fileName: "[project]/src/components/DetailedReport.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DetailedReport.tsx",
            lineNumber: 211,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-6 sm:mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DetailedReport.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2",
                        children: [
                            "5. Horóscopo De Hoje para ",
                            horoscope.sign
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4",
                        children: "Suas energias cósmicas e previsões para hoje"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2",
                        children: [
                            "Horóscopo do Dia -  ",
                            horoscope.date
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl p-4 inline-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 dark:text-gray-400",
                            children: "Análise astrológica para o dia atual"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DetailedReport.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 251,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-800 dark:text-gray-200",
                                        children: "Previsão Geral"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed",
                                children: horoscope.generalPrediction
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-800 dark:text-gray-200",
                                        children: "Amor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed",
                                children: horoscope.love
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-800 dark:text-gray-200",
                                        children: "Carreira"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed",
                                children: horoscope.career
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 290,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-800 dark:text-gray-200",
                                        children: "Saúde"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed",
                                children: horoscope.health
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__["Gem"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-800 dark:text-gray-200",
                                        children: "Números da Sorte"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: horoscope.luckyNumbers.map((number, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm",
                                        children: number
                                    }, index, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 320,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-800 dark:text-gray-200",
                                        children: "Conselho do Dia"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed",
                                children: [
                                    horoscope.advice,
                                    " Sua cor ideal para hoje é ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-800 dark:text-gray-200",
                                        children: horoscope.luckyColor
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 325,
                                        columnNumber: 58
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            !isSubscribed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-2",
                                children: "Receba Seu Horóscopo Diário"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-purple-100 mb-4",
                                children: "Assine agora e receba todos os dias o horóscopo para seu signo diretamente no seu whatsapp"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-5 h-5 text-green-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "Horóscopo personalizado diário"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-5 h-5 text-green-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "Enviado diretamente no seu whatsapp"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 350,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-5 h-5 text-green-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "Cancele quando quiser"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 345,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedPlan('monthly'),
                                className: `bg-white rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 ${selectedPlan === 'monthly' ? 'ring-4 ring-yellow-400 ring-opacity-50' : 'opacity-90 hover:opacity-100'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-600 font-semibold mb-2",
                                            children: "Plano Mensal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 372,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                                            children: "R$ 17,00"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 373,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600 font-medium mb-4",
                                            children: "por mês"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 376,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500",
                                            children: "Renovação automática mensal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 363,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedPlan('annual'),
                                className: `bg-white rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 relative ${selectedPlan === 'annual' ? 'ring-4 ring-yellow-400 ring-opacity-50' : 'opacity-90 hover:opacity-100'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12 animate-pulse",
                                        children: "30% OFF"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 393,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-600 font-semibold mb-2",
                                                children: "Plano Anual"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 398,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl font-bold mb-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                                                children: "R$ 134,00"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-400 line-through mb-2",
                                                children: "R$ 204,00/ano"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 402,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600 font-medium mb-4",
                                                children: "por ano"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 403,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-green-600 font-semibold mb-2",
                                                children: "Economize o equivalente a 4 meses grátis no plano anual"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 404,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 361,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleSubscribe(selectedPlan),
                                className: "bg-white text-purple-600 py-3 px-8 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 w-full md:w-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 420,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: selectedPlan === 'monthly' ? 'Assinar Plano Mensal' : 'Assinar Plano Anual'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 415,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex items-center justify-center gap-2 text-sm text-purple-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 428,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Pagamento 100% seguro"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 429,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 427,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 414,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 332,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DetailedReport.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
function DetailedReport({ reportData }) {
    const { numerology, astrology, chineseZodiac, astrocartography } = reportData;
    // Interpretações de numerologia
    const lifePathInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumberInterpretation"])(numerology.lifePathNumber);
    const destinyInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumberInterpretation"])(numerology.destinyNumber);
    const soulInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumberInterpretation"])(numerology.soulNumber);
    const personalityInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumberInterpretation"])(numerology.personalityNumber);
    // Interpretações de astrologia
    const sunSignInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$astrology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInterpretation"])(astrology.sunSign);
    const moonSignInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$astrology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInterpretation"])(astrology.moonSign);
    const ascendantInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$astrology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInterpretation"])(astrology.ascendant);
    // Ano atual do zodíaco chinês e seu impacto
    const currentYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chinese$2d$zodiac$2d$year$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentChineseYear"])();
    const yearImpact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chinese$2d$zodiac$2d$year$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearImpact"])(chineseZodiac.animal, currentYear.animal);
    const relationshipColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chinese$2d$zodiac$2d$year$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelationshipColor"])(yearImpact.relationship);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "numerologia",
                className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-3xl p-6 sm:p-10 shadow-2xl scroll-mt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                    className: "w-10 h-10 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3",
                                children: "1. Numerologia Pessoal Completa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 465,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                                children: "Seus números sagrados revelam o mapa completo de sua alma e missão nesta vida"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-bold text-white",
                                            children: numerology.lifePathNumber
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 477,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 476,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Caminho da Vida: ",
                                                    lifePathInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 480,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Sua missão principal nesta encarnação"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 483,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 479,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "flex items-center gap-2 text-lg font-semibold text-green-600 dark:text-green-400 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Pontos Positivos"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 489,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 ml-7",
                                                children: (lifePathInterp.positiveTraits || []).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-gray-700 dark:text-gray-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-green-500 mr-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 496,
                                                                columnNumber: 21
                                                            }, this),
                                                            trait
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 493,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 488,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "flex items-center gap-2 text-lg font-semibold text-orange-600 dark:text-orange-400 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 505,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Pontos de Atenção"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 504,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 ml-7",
                                                children: (lifePathInterp.negativeTraits || []).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-gray-700 dark:text-gray-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-orange-500 mr-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 511,
                                                                columnNumber: 21
                                                            }, this),
                                                            trait
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 508,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "flex items-center gap-2 text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Orientações"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 519,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 ml-7",
                                                children: (lifePathInterp.guidance || []).map((guide, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-gray-700 dark:text-gray-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-blue-500 mr-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 21
                                                            }, this),
                                                            guide
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 523,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 518,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4 mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-purple-700 dark:text-purple-300 mb-2",
                                                        children: "💼 Carreira"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: lifePathInterp.career
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 534,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-pink-700 dark:text-pink-300 mb-2",
                                                        children: "❤️ Relacionamentos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: lifePathInterp.relationships
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 540,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 538,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 533,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-indigo-700 dark:text-indigo-300 mb-2",
                                                children: "🙏 Jornada Espiritual"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 545,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: lifePathInterp.spirituality
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 546,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 544,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800/50 dark:to-pink-800/50 rounded-xl p-5 mt-4 border-l-4 border-purple-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-purple-800 dark:text-purple-200 mb-2",
                                                children: "📖 Lição de Vida"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 550,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-800 dark:text-gray-200 italic",
                                                children: lifePathInterp.lifeLesson
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 551,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 549,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 487,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 474,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-bold text-white",
                                            children: numerology.destinyNumber
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 560,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 559,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Número do Destino: ",
                                                    destinyInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 563,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Seu potencial máximo a ser alcançado"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 566,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 562,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 558,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-blue-700 dark:text-blue-300 mb-2",
                                                children: "Dons e Talentos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 572,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-1",
                                                children: (destinyInterp.positiveTraits || []).slice(0, 4).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: [
                                                            "• ",
                                                            trait
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 575,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 573,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 571,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-cyan-700 dark:text-cyan-300 mb-2",
                                                children: "Caminho Para Realização"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 580,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: destinyInterp.guidance?.[0] || 'Busque seu propósito'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 581,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 579,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 570,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-bold text-white",
                                            children: numerology.soulNumber
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 590,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 589,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Número da Alma: ",
                                                    soulInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 593,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Suas motivações mais profundas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 596,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 592,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 588,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-yellow-700 dark:text-yellow-300 mb-2",
                                                children: "Motivações Profundas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 602,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: soulInterp.spirituality
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 603,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 601,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-orange-700 dark:text-orange-300 mb-2",
                                                children: "Paixões Internas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 606,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-1",
                                                children: (soulInterp.positiveTraits || []).slice(0, 3).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: [
                                                            "• ",
                                                            trait
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 609,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 607,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 605,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 600,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 587,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-bold text-white",
                                            children: numerology.personalityNumber
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 620,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 619,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Número da Personalidade: ",
                                                    personalityInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 623,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Como você aparece para o mundo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 626,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 622,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 618,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-green-50 dark:bg-green-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-green-700 dark:text-green-300 mb-2",
                                                children: "👥 Primeira Impressão"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 632,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: (personalityInterp.positiveTraits || []).slice(0, 3).join(', ') || 'Personalidade marcante'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 633,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 631,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-emerald-700 dark:text-emerald-300 mb-2",
                                                children: "🎭 Dica para Autenticidade"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 638,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: personalityInterp.guidance?.[0] || 'Seja autêntico'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 639,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 637,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 630,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 617,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                className: "w-6 h-6 text-purple-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 649,
                                                columnNumber: 15
                                            }, this),
                                            "Ciclos de Vida"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 648,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                        children: "Sua vida é dividida em 3 grandes ciclos, cada um com energia e lições específicas:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 652,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 border-l-4 border-purple-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-purple-700 dark:text-purple-300",
                                                                children: "1º Ciclo - Juventude (0-28 anos)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 658,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl font-bold text-purple-600 dark:text-purple-400",
                                                                children: numerology.lifeCycles.first
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 659,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 657,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLifeCycleMeaning"])(numerology.lifeCycles.first)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 661,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 656,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-pink-50 dark:bg-pink-900/30 rounded-lg p-4 border-l-4 border-pink-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-pink-700 dark:text-pink-300",
                                                                children: "2º Ciclo - Maturidade (28-56 anos)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 667,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl font-bold text-pink-600 dark:text-pink-400",
                                                                children: numerology.lifeCycles.second
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 668,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 666,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLifeCycleMeaning"])(numerology.lifeCycles.second)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 665,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4 border-l-4 border-indigo-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-indigo-700 dark:text-indigo-300",
                                                                children: "3º Ciclo - Sabedoria (56+ anos)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 676,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl font-bold text-indigo-600 dark:text-indigo-400",
                                                                children: numerology.lifeCycles.third
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 677,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 675,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLifeCycleMeaning"])(numerology.lifeCycles.third)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 674,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 655,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 647,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-6 h-6 text-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 689,
                                                columnNumber: 15
                                            }, this),
                                            "Energias Atuais"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 688,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                        children: "Cada período da sua vida tem uma energia numerológica específica que influencia eventos e oportunidades:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 692,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-4 border-l-4 border-blue-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-blue-700 dark:text-blue-300",
                                                                children: "Seu Ano Pessoal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 698,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-4xl font-bold text-blue-600 dark:text-blue-400",
                                                                children: numerology.personalYear
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 699,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2 font-semibold",
                                                        children: "O QUE ESPERAR ESTE ANO:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 701,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPersonalYearMeaning"])(numerology.personalYear)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 704,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 696,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-cyan-50 dark:bg-cyan-900/30 rounded-lg p-3 border-l-4 border-cyan-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-cyan-700 dark:text-cyan-300 text-sm mb-2",
                                                                children: [
                                                                    "Mês Pessoal: ",
                                                                    numerology.personalMonth
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 710,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-700 dark:text-gray-300",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPersonalMonthMeaning"])(numerology.personalMonth)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 711,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 709,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-teal-50 dark:bg-teal-900/30 rounded-lg p-3 border-l-4 border-teal-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-teal-700 dark:text-teal-300 text-sm mb-2",
                                                                children: [
                                                                    "Dia Pessoal: ",
                                                                    numerology.personalDay
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 716,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-700 dark:text-gray-300",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPersonalDayMeaning"])(numerology.personalDay)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 717,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 715,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 708,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 695,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 687,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 645,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                className: "w-6 h-6 text-yellow-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 730,
                                                columnNumber: 15
                                            }, this),
                                            "Talentos Ocultos"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 729,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                        children: "Números ausentes ou raros em seu nome revelam potenciais a serem desenvolvidos:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 733,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: numerology.hiddenTalents?.map((talent, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg p-4 border-l-4 border-yellow-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl font-bold text-yellow-600 dark:text-yellow-400",
                                                                children: talent
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 740,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-yellow-700 dark:text-yellow-300",
                                                                children: "Talento Oculto"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 741,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 739,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHiddenTalentMeaning"])(talent)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 743,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 738,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 736,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 728,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "w-6 h-6 text-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 753,
                                                columnNumber: 15
                                            }, this),
                                            "Desafios Principais"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 752,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                        children: "Obstáculos recorrentes em sua vida que, quando superados, trazem grande crescimento:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 756,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: numerology.challenges?.map((challenge, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-lg p-4 border-l-4 border-red-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-red-700 dark:text-red-300",
                                                                children: [
                                                                    "Desafio ",
                                                                    idx + 1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 763,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl font-bold text-red-600 dark:text-red-400",
                                                                children: challenge
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 764,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 762,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChallengeMeaning"])(challenge)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 766,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 761,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 759,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 751,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 727,
                        columnNumber: 9
                    }, this),
                    numerology.karmicDebts && Array.isArray(numerology.karmicDebts) && numerology.karmicDebts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-purple-100 to-red-100 dark:from-purple-900/50 dark:to-red-900/50 rounded-xl p-6 mt-6 border-2 border-purple-300 dark:border-purple-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xl font-bold text-purple-800 dark:text-purple-200 mb-3",
                                children: "Lições Cármicas Identificadas"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 778,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 mb-3",
                                children: (numerology.karmicDebts || []).map((debt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-purple-600 dark:text-purple-400",
                                            children: debt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 782,
                                            columnNumber: 19
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 781,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 779,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-700 dark:text-gray-300",
                                children: "Você possui números de dívida cármica. Estes indicam lições não completamente aprendidas em vidas passadas que você veio resolver nesta encarnação. São oportunidades poderosas de crescimento espiritual acelerado."
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 786,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 777,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 460,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "astrologia",
                className: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-3xl p-6 sm:p-10 shadow-2xl scroll-mt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    className: "w-10 h-10 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                    lineNumber: 798,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 797,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3",
                                children: "2. Astrologia Ocidental Completa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 800,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                                children: "Seu mapa celeste revela como os astros influenciam cada área da sua vida"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 803,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 796,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-8 h-8 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 812,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 811,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Sol em ",
                                                    sunSignInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 815,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: [
                                                    sunSignInterp.element,
                                                    " • ",
                                                    sunSignInterp.quality,
                                                    " • Regido por ",
                                                    sunSignInterp.rulingPlanet
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 818,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 814,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 810,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-orange-50 dark:bg-orange-900/30 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-orange-700 dark:text-orange-300 mb-2",
                                                children: "Essência Solar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 826,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300",
                                                children: sunSignInterp.inSun
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 827,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 825,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-green-50 dark:bg-green-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-green-700 dark:text-green-300 mb-2",
                                                        children: "Qualidades Positivas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 832,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-1",
                                                        children: (sunSignInterp.positiveTraits || []).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                                children: [
                                                                    "• ",
                                                                    trait
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 835,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 833,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 831,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-orange-700 dark:text-orange-300 mb-2",
                                                        children: "Desafios"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 840,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-1",
                                                        children: (sunSignInterp.negativeTraits || []).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                                children: [
                                                                    "• ",
                                                                    trait
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 843,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 841,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 839,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 830,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm",
                                                        children: "💼 Carreira"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 851,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-700 dark:text-gray-300",
                                                        children: sunSignInterp.career
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 852,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 850,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-pink-700 dark:text-pink-300 mb-2 text-sm",
                                                        children: "❤️ Amor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 855,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-700 dark:text-gray-300",
                                                        children: sunSignInterp.love
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 854,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-red-50 dark:bg-red-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-red-700 dark:text-red-300 mb-2 text-sm",
                                                        children: "🏥 Saúde"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-700 dark:text-gray-300",
                                                        children: sunSignInterp.health
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 860,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 858,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-purple-700 dark:text-purple-300 mb-2 text-sm",
                                                        children: "🙏 Espiritual"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 863,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-700 dark:text-gray-300",
                                                        children: sunSignInterp.spirituality
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 864,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 862,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 849,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 824,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 809,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                            className: "w-8 h-8 text-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 874,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 873,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Lua em ",
                                                    moonSignInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 877,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Suas emoções e necessidades internas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 880,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 876,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 872,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-purple-50 dark:bg-purple-900/30 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-purple-700 dark:text-purple-300 mb-2",
                                                children: "Mundo Emocional"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 886,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300",
                                                children: moonSignInterp.inMoon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 887,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 885,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-pink-700 dark:text-pink-300 mb-2",
                                                        children: "💝 Como Você Se Nutre"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 891,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: moonSignInterp.positiveTraits?.slice(0, 3).join(', ') || 'Sensibilidade emocional'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 892,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 890,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-indigo-700 dark:text-indigo-300 mb-2",
                                                        children: "🛡️ Proteções Emocionais"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 895,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: moonSignInterp.negativeTraits?.[0] ? `Evite: ${moonSignInterp.negativeTraits[0]}` : 'Cuide de suas emoções'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 896,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 894,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 889,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 884,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 871,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl",
                                            children: "🎭"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 906,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 905,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Ascendente em ",
                                                    ascendantInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 909,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Sua máscara social e primeira impressão"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 912,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 908,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 904,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-green-50 dark:bg-green-900/30 rounded-xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-green-700 dark:text-green-300 mb-2",
                                        children: "🎭 Como Outros Te Veem"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 917,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 dark:text-gray-300",
                                        children: ascendantInterp.inAscendant
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 918,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 916,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 903,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: "Aspectos Importantes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 925,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: astrology.aspects?.slice(0, 4).map((aspect, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-500 mr-2",
                                                        children: "★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 929,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: aspect
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 930,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 928,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 926,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 924,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: "🔄 Trânsitos Atuais"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 937,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: astrology.currentTransits?.slice(0, 4).map((transit, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-indigo-500 mr-2",
                                                        children: "⟳"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 941,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: transit
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 942,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 940,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 938,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 936,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 923,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 795,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "zodiaco-chines",
                className: "bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900 dark:to-orange-900 rounded-3xl p-6 sm:p-10 shadow-2xl scroll-mt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-4xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-bold text-red-600",
                                    children: "龍"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                    lineNumber: 954,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 953,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3",
                                children: "3. Astrologia Chinesa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 956,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                                children: "A sabedoria milenar do Oriente sobre sua personalidade e destino"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 959,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 952,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-4xl font-bold text-red-600 dark:text-red-400 mb-2",
                                        children: chineseZodiac.animal
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 966,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl text-orange-600 dark:text-orange-400 mb-2",
                                        children: [
                                            "Elemento ",
                                            chineseZodiac.element,
                                            " • Energia ",
                                            chineseZodiac.yinYang
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 969,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 dark:text-gray-400 italic",
                                        children: chineseZodiac.fullSign
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 972,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 965,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-6 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-red-50 dark:bg-red-900/30 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-red-700 dark:text-red-300 mb-3",
                                                children: "Forças e Talentos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 977,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300 text-sm mb-3",
                                                children: chineseZodiac.strengths
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 978,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: chineseZodiac.traits?.map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-xs font-semibold",
                                                        children: trait
                                                    }, idx, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 981,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 979,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 976,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-orange-50 dark:bg-orange-900/30 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-orange-700 dark:text-orange-300 mb-3",
                                                children: "Desafios"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 989,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300 text-sm mb-3",
                                                children: chineseZodiac.weaknesses
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 990,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300 text-sm font-semibold",
                                                children: "Orientações:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 991,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400 text-xs",
                                                children: chineseZodiac.challenges
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 992,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 988,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 975,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-3 gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-yellow-700 dark:text-yellow-300 mb-2",
                                                children: "💼 Carreira Ideal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 998,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: chineseZodiac.careerTalents
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 999,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 997,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-pink-700 dark:text-pink-300 mb-2",
                                                children: "❤️ Compatibilidade Amorosa"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1003,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center gap-2 mt-2",
                                                children: chineseZodiac.loveCompatibility?.map((animal, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-pink-200 dark:bg-pink-800 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-sm font-semibold",
                                                        children: animal
                                                    }, idx, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1006,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1004,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1002,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-blue-700 dark:text-blue-300 mb-2",
                                                children: "🤝 Compatibilidade Profissional"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1014,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center gap-2 mt-2",
                                                children: chineseZodiac.careerCompatibility?.map((animal, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold",
                                                        children: animal
                                                    }, idx, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1017,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1015,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1013,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 996,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-orange-700 dark:text-orange-300 mb-2",
                                        children: "Números da Sorte"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1026,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 justify-center",
                                        children: chineseZodiac.luckyNumbers?.map((number, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl font-bold text-red-600 dark:text-red-400",
                                                    children: number
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                                    lineNumber: 1030,
                                                    columnNumber: 19
                                                }, this)
                                            }, idx, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1029,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1027,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1025,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `bg-gradient-to-r ${relationshipColor === 'green' ? 'from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 border-green-400 dark:border-green-600' : relationshipColor === 'blue' ? 'from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 border-blue-400 dark:border-blue-600' : relationshipColor === 'yellow' ? 'from-yellow-100 to-amber-100 dark:from-yellow-900/50 dark:to-amber-900/50 border-yellow-400 dark:border-yellow-600' : relationshipColor === 'orange' ? 'from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 border-orange-400 dark:border-orange-600' : 'from-red-100 to-rose-100 dark:from-red-900/50 dark:to-rose-900/50 border-red-400 dark:border-red-600'} rounded-2xl p-6 border-4 shadow-xl mt-6`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-block bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-bold text-gray-800 dark:text-gray-100",
                                                    children: [
                                                        "📅 ",
                                                        currentYear.year,
                                                        " - Ano da ",
                                                        currentYear.animal,
                                                        " de ",
                                                        currentYear.element
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                                    lineNumber: 1046,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1045,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 dark:text-gray-400 italic",
                                                children: currentYear.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1050,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1044,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: `text-2xl font-bold mb-4 text-center ${relationshipColor === 'green' ? 'text-green-700 dark:text-green-300' : relationshipColor === 'blue' ? 'text-blue-700 dark:text-blue-300' : relationshipColor === 'yellow' ? 'text-yellow-700 dark:text-yellow-300' : relationshipColor === 'orange' ? 'text-orange-700 dark:text-orange-300' : 'text-red-700 dark:text-red-300'}`,
                                        children: yearImpact.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1053,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white dark:bg-gray-800 rounded-xl p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                className: "w-6 h-6 text-green-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 1066,
                                                                columnNumber: 19
                                                            }, this),
                                                            " Oportunidades e Pontos Positivos"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1065,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: yearImpact.positive
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1068,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1064,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white dark:bg-gray-800 rounded-xl p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "font-bold text-orange-600 dark:text-orange-400 mb-2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                className: "w-6 h-6 text-orange-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 1075,
                                                                columnNumber: 19
                                                            }, this),
                                                            " Cuidados e Desafios"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1074,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: yearImpact.negative
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1077,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1073,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/50 dark:to-indigo-900/50 rounded-xl p-5 border-l-4 border-purple-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                                className: "w-6 h-6 text-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 1084,
                                                                columnNumber: 19
                                                            }, this),
                                                            " Conselho Especializado"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1083,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 dark:text-gray-300 leading-relaxed font-medium",
                                                        children: yearImpact.advice
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1086,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1082,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1063,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1037,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 964,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 951,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "astrocartografia",
                className: "bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 rounded-3xl p-6 sm:p-10 shadow-2xl scroll-mt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-4xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                    className: "w-10 h-10 text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                    lineNumber: 1099,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1098,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3",
                                children: "4. Astrocartografia"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                                children: "Descubra os locais do mundo onde sua energia flui melhor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 1097,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                children: "📍 Sua Análise Personalizada"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 dark:text-gray-300 leading-relaxed",
                                children: astrocartography.personalizedAnalysis
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 1110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2",
                                children: "🗺️ Seu Mapa Astrocartográfico Interativo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 dark:text-gray-400 mb-6",
                                children: "Visualize onde no mundo suas energias planetárias são mais fortes. Clique nos marcadores para ver detalhes!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AstroMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                birthPlace: reportData.personalData.birthPlace || 'Local não especificado',
                                sunLines: astrocartography.sunLines || [],
                                moonLines: astrocartography.moonLines || [],
                                venusLines: astrocartography.venusLines || [],
                                favorableLocations: astrocartography.favorableLocations || {},
                                challengingLocations: astrocartography.challengingLocations || {}
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 1116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-yellow-700 dark:text-yellow-300 mb-3 flex items-center gap-2",
                                        children: "Linhas Solares"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-3",
                                        children: "Liderança, reconhecimento, vitalidade"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: astrocartography.sunLines?.slice(0, 3).map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-sm text-gray-700 dark:text-gray-300 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-2",
                                                children: [
                                                    "📍 ",
                                                    loc
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1142,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2",
                                        children: "Linhas Lunares"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-3",
                                        children: "Emoções, lar, segurança"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: astrocartography.moonLines?.slice(0, 3).map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-sm text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/30 rounded-lg p-2",
                                                children: [
                                                    "📍 ",
                                                    loc
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1156,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1154,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-pink-700 dark:text-pink-300 mb-3 flex items-center gap-2",
                                        children: "💝 Linhas de Vênus"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-3",
                                        children: "Amor, beleza, prosperidade"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: astrocartography.venusLines?.slice(0, 3).map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-sm text-gray-700 dark:text-gray-300 bg-pink-50 dark:bg-pink-900/30 rounded-lg p-2",
                                                children: [
                                                    "📍 ",
                                                    loc
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1170,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 1134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6",
                                children: "Locais de Potencial"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                children: "Locais onde suas energias planetárias fluem harmoniosamente. Ótimos para morar, trabalhar ou visitar!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-3 gap-6",
                                children: astrocartography.favorableLocations && Object.entries(astrocartography.favorableLocations).map(([category, locations])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "font-bold text-teal-700 dark:text-teal-300 mb-3",
                                                children: category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1187,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: (Array.isArray(locations) ? locations : []).slice(0, 3).map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                className: "w-4 h-4 text-green-500 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 1191,
                                                                columnNumber: 23
                                                            }, this),
                                                            loc
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1190,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1188,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, category, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1186,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 1179,
                        columnNumber: 9
                    }, this),
                    astrocartography.challengingLocations && Object.keys(astrocartography.challengingLocations).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-orange-200 dark:border-orange-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",
                                children: "Locais que Requerem Atenção Especial"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                children: "Estes locais podem apresentar desafios ou tensões energéticas. Não significa que você não deva visitá-los, mas é importante estar preparado(a) e consciente. Com autocuidado e preparação adequada, você pode navegar essas energias com sucesso."
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-6",
                                children: Object.entries(astrocartography.challengingLocations).map(([category, locations])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl p-5 border-l-4 border-orange-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "font-bold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "w-5 h-5 text-orange-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1216,
                                                        columnNumber: 21
                                                    }, this),
                                                    category
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1215,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: (Array.isArray(locations) ? locations : []).map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500 mr-2",
                                                                children: "⚡"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 1222,
                                                                columnNumber: 25
                                                            }, this),
                                                            loc
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1221,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1219,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 p-3 bg-white dark:bg-gray-800 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-600 dark:text-gray-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-orange-600 dark:text-orange-400",
                                                            children: "Orientações:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                                            lineNumber: 1229,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Visite com consciência, pratique autocuidado extra, estabeleça limites claros e busque apoio quando necessário."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                                    lineNumber: 1228,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1227,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, category, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1214,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1212,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 1203,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 1096,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "horoscope-section",
                className: "bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-2xl p-6 sm:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HoroscopeInline, {
                    personalData: reportData.personalData
                }, void 0, false, {
                    fileName: "[project]/src/components/DetailedReport.tsx",
                    lineNumber: 1243,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 1241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DetailedReport.tsx",
        lineNumber: 458,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/success/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>SuccessPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DetailedReport$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DetailedReport.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function SuccessPageContent() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const sessionId = searchParams.get('session_id');
    const canceled = searchParams.get('canceled');
    const paymentId = searchParams.get('payment_id');
    const status = searchParams.get('status');
    const autoGenerate = searchParams.get('auto_generate');
    const [paymentStatus, setPaymentStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('loading');
    const [reportData, setReportData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGeneratingReport, setIsGeneratingReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloadingPDF, setIsDownloadingPDF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const reportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Função para gerar o relatório místico COMPLETO
    const calculateCompleteNumerology = (fullName, date)=>{
        const reduceToSingleDigit = (num)=>{
            while(num > 9 && num !== 11 && num !== 22 && num !== 33){
                num = num.toString().split('').reduce((sum, digit)=>sum + parseInt(digit), 0);
            }
            return num;
        };
        const getLetterValue = (letter)=>{
            const values = {
                a: 1,
                b: 2,
                c: 3,
                d: 4,
                e: 5,
                f: 6,
                g: 7,
                h: 8,
                i: 9,
                j: 1,
                k: 2,
                l: 3,
                m: 4,
                n: 5,
                o: 6,
                p: 7,
                q: 8,
                r: 9,
                s: 1,
                t: 2,
                u: 3,
                v: 4,
                w: 5,
                x: 6,
                y: 7,
                z: 8
            };
            return values[letter.toLowerCase()] || 0;
        };
        const birthDate = new Date(date);
        const day = birthDate.getDate();
        const month = birthDate.getMonth() + 1;
        const year = birthDate.getFullYear();
        // Números básicos
        const dateNumbers = date.replace(/\D/g, '').split('').map(Number);
        const lifePathSum = dateNumbers.reduce((sum, num)=>sum + num, 0);
        const lifePathNumber = reduceToSingleDigit(lifePathSum);
        const consonants = fullName.toLowerCase().replace(/[aeiouàáâãäèéêëìíîïòóôõöùúûü\s]/g, '');
        const personalitySum = consonants.split('').reduce((sum, char)=>sum + getLetterValue(char), 0);
        const personalityNumber = reduceToSingleDigit(personalitySum);
        const vowels = fullName.toLowerCase().replace(/[^aeiouàáâãäèéêëìíîïòóôõöùúûü]/g, '');
        const soulSum = vowels.split('').reduce((sum, char)=>sum + getLetterValue(char), 0);
        const soulNumber = reduceToSingleDigit(soulSum);
        const allLetters = fullName.toLowerCase().replace(/[^a-záàáâãäèéêëìíîïòóôõöùúûü]/g, '');
        const destinySum = allLetters.split('').reduce((sum, char)=>sum + getLetterValue(char), 0);
        const destinyNumber = reduceToSingleDigit(destinySum);
        // Número Psíquico (dia de nascimento)
        const psychicNumber = reduceToSingleDigit(day);
        // Talentos Ocultos (números que aparecem menos no nome)
        const nameNumbers = allLetters.split('').map((char)=>getLetterValue(char));
        const numberFrequency = nameNumbers.reduce((acc, num)=>{
            acc[num] = (acc[num] || 0) + 1;
            return acc;
        }, {});
        const missingNumbers = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ].filter((n)=>!numberFrequency[n]);
        const hiddenTalents = missingNumbers.length > 0 ? missingNumbers : [
            Object.keys(numberFrequency).reduce((a, b)=>numberFrequency[parseInt(a)] < numberFrequency[parseInt(b)] ? a : b)
        ];
        // Lições Cármicas (números faltantes no nome)
        const karmicLessons = missingNumbers;
        // Dívidas Cármicas (13, 14, 16, 19)
        const karmicDebts = [];
        if (destinySum === 13 || destinySum === 14 || destinySum === 16 || destinySum === 19) karmicDebts.push(destinySum);
        if (lifePathSum === 13 || lifePathSum === 14 || lifePathSum === 16 || lifePathSum === 19) karmicDebts.push(lifePathSum);
        // Ciclos de Vida (divididos em 3 períodos)
        const firstCycle = reduceToSingleDigit(month);
        const secondCycle = reduceToSingleDigit(day);
        const thirdCycle = reduceToSingleDigit(year);
        // Ano, Mês e Dia Pessoal (baseado na data atual)
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth() + 1;
        const currentDay = today.getDate();
        const personalYearSum = month + day + reduceToSingleDigit(currentYear);
        const personalYear = reduceToSingleDigit(personalYearSum);
        const personalMonthSum = personalYear + currentMonth;
        const personalMonth = reduceToSingleDigit(personalMonthSum);
        const personalDaySum = personalMonth + currentDay;
        const personalDay = reduceToSingleDigit(personalDaySum);
        // Desafios (diferenças entre números)
        const challenge1 = Math.abs(reduceToSingleDigit(month) - reduceToSingleDigit(day));
        const challenge2 = Math.abs(reduceToSingleDigit(day) - reduceToSingleDigit(year));
        const challenge3 = Math.abs(challenge1 - challenge2);
        const challenge4 = Math.abs(reduceToSingleDigit(month) - reduceToSingleDigit(year));
        // Momentos Decisivos (Pinnacles)
        const pinnacle1 = reduceToSingleDigit(month + day);
        const pinnacle2 = reduceToSingleDigit(day + year);
        const pinnacle3 = reduceToSingleDigit(pinnacle1 + pinnacle2);
        const pinnacle4 = reduceToSingleDigit(month + year);
        return {
            lifePathNumber,
            personalityNumber,
            soulNumber,
            destinyNumber,
            expressionNumber: destinyNumber,
            impressionNumber: personalityNumber,
            psychicNumber,
            hiddenTalents,
            karmicLessons,
            karmicDebts,
            lifeCycles: {
                first: firstCycle,
                second: secondCycle,
                third: thirdCycle
            },
            personalYear,
            personalMonth,
            personalDay,
            challenges: [
                challenge1,
                challenge2,
                challenge3,
                challenge4
            ],
            pinnacles: [
                pinnacle1,
                pinnacle2,
                pinnacle3,
                pinnacle4
            ]
        };
    };
    const calculateAstrology = (date, time, place)=>{
        const birthDate = new Date(date);
        const month = birthDate.getMonth() + 1;
        const day = birthDate.getDate();
        // Determinar signo solar
        let sunSign = '';
        if (month === 3 && day >= 21 || month === 4 && day <= 19) sunSign = 'Áries';
        else if (month === 4 && day >= 20 || month === 5 && day <= 20) sunSign = 'Touro';
        else if (month === 5 && day >= 21 || month === 6 && day <= 20) sunSign = 'Gêmeos';
        else if (month === 6 && day >= 21 || month === 7 && day <= 22) sunSign = 'Câncer';
        else if (month === 7 && day >= 23 || month === 8 && day <= 22) sunSign = 'Leão';
        else if (month === 8 && day >= 23 || month === 9 && day <= 22) sunSign = 'Virgem';
        else if (month === 9 && day >= 23 || month === 10 && day <= 22) sunSign = 'Libra';
        else if (month === 10 && day >= 23 || month === 11 && day <= 21) sunSign = 'Escorpião';
        else if (month === 11 && day >= 22 || month === 12 && day <= 21) sunSign = 'Sagitário';
        else if (month === 12 && day >= 22 || month === 1 && day <= 19) sunSign = 'Capricórnio';
        else if (month === 1 && day >= 20 || month === 2 && day <= 18) sunSign = 'Aquário';
        else sunSign = 'Peixes';
        const signs = [
            'Áries',
            'Touro',
            'Gêmeos',
            'Câncer',
            'Leão',
            'Virgem',
            'Libra',
            'Escorpião',
            'Sagitário',
            'Capricórnio',
            'Aquário',
            'Peixes'
        ];
        const moonSign = signs[(day + month) % signs.length];
        const ascendant = signs[day * month % signs.length];
        return {
            sunSign,
            moonSign,
            ascendant,
            planets: {
                'Mercúrio': {
                    sign: signs[(day + 1) % signs.length],
                    house: day % 12 + 1
                },
                'Vênus': {
                    sign: signs[(day + 2) % signs.length],
                    house: (day + 1) % 12 + 1
                },
                'Marte': {
                    sign: signs[(day + 3) % signs.length],
                    house: (day + 2) % 12 + 1
                }
            },
            aspects: [
                `Sol em ${sunSign} em conjunção com Mercúrio - comunicação poderosa`,
                `Lua em ${moonSign} em trígono com Vênus - harmonia emocional`
            ],
            currentTransits: [
                'Júpiter transitando pela casa 7 - período favorável para relacionamentos',
                'Saturno transitando pela casa 10 - foco na carreira'
            ],
            houses: {
                1: 'Personalidade e aparência física',
                2: 'Valores pessoais e recursos financeiros',
                3: 'Comunicação e relacionamentos próximos',
                4: 'Lar, família e raízes emocionais',
                5: 'Criatividade, romance e filhos',
                6: 'Trabalho, saúde e rotina diária',
                7: 'Relacionamentos e parcerias',
                8: 'Transformação e recursos compartilhados',
                9: 'Filosofia, viagens e ensino superior',
                10: 'Carreira e reputação pública',
                11: 'Amizades e objetivos futuros',
                12: 'Espiritualidade e subconsciente'
            }
        };
    };
    const getChineseZodiac = (date)=>{
        const year = new Date(date).getFullYear();
        const zodiacIndex = year % 12;
        const elementIndex = year % 10;
        // Determinar elemento baseado no ano
        const elements = [
            'Metal',
            'Metal',
            'Água',
            'Água',
            'Madeira',
            'Madeira',
            'Fogo',
            'Fogo',
            'Terra',
            'Terra'
        ];
        const element = elements[elementIndex];
        // Determinar Yin ou Yang (anos pares = Yang, ímpares = Yin)
        const yinYang = year % 2 === 0 ? 'Yang' : 'Yin';
        const chineseZodiacData = {
            0: {
                animal: 'Macaco',
                traits: [
                    'Inteligente',
                    'Criativo',
                    'Versátil',
                    'Curioso'
                ],
                luckyNumbers: [
                    4,
                    9
                ],
                strengths: 'Adaptabilidade excepcional, pensamento rápido, habilidade para resolver problemas complexos',
                weaknesses: 'Pode ser impaciente, disperso e ter dificuldade em manter o foco',
                careerTalents: 'Empreendedorismo, vendas, tecnologia, entretenimento',
                loveCompatibility: [
                    'Rato',
                    'Dragão'
                ],
                careerCompatibility: [
                    'Rato',
                    'Serpente'
                ],
                challenges: 'Aprender a ter paciência e persistência nas tarefas'
            },
            1: {
                animal: 'Galo',
                traits: [
                    'Corajoso',
                    'Honesto',
                    'Trabalhador',
                    'Pontual'
                ],
                luckyNumbers: [
                    5,
                    7,
                    8
                ],
                strengths: 'Organização impecável, confiabilidade, dedicação ao trabalho',
                weaknesses: 'Perfeccionismo excessivo, pode ser crítico demais',
                careerTalents: 'Administração, contabilidade, medicina, ensino',
                loveCompatibility: [
                    'Boi',
                    'Serpente'
                ],
                careerCompatibility: [
                    'Dragão',
                    'Serpente'
                ],
                challenges: 'Aceitar imperfeições e desenvolver flexibilidade'
            },
            2: {
                animal: 'Cão',
                traits: [
                    'Leal',
                    'Responsável',
                    'Confiável',
                    'Protetor'
                ],
                luckyNumbers: [
                    3,
                    4,
                    9
                ],
                strengths: 'Lealdade inabalável, senso de justiça, habilidade de inspirar confiança',
                weaknesses: 'Tendência à preocupação excessiva e ansiedade',
                careerTalents: 'Advocacia, serviço social, segurança, medicina veterinária',
                loveCompatibility: [
                    'Tigre',
                    'Cavalo'
                ],
                careerCompatibility: [
                    'Coelho',
                    'Tigre'
                ],
                challenges: 'Aprender a relaxar e confiar mais nos outros'
            },
            3: {
                animal: 'Porco',
                traits: [
                    'Generoso',
                    'Compassivo',
                    'Diligente',
                    'Sincero'
                ],
                luckyNumbers: [
                    2,
                    5,
                    8
                ],
                strengths: 'Bondade natural, capacidade de perdoar, amor pela vida',
                weaknesses: 'Ingenuidade, tendência a ser usado pelos outros',
                careerTalents: 'Hospitalidade, artes culinárias, assistência social, artes',
                loveCompatibility: [
                    'Cabra',
                    'Coelho'
                ],
                careerCompatibility: [
                    'Tigre',
                    'Cabra'
                ],
                challenges: 'Desenvolver discernimento e estabelecer limites saudáveis'
            },
            4: {
                animal: 'Rato',
                traits: [
                    'Inteligente',
                    'Adaptável',
                    'Charmoso',
                    'Ambicioso'
                ],
                luckyNumbers: [
                    2,
                    3
                ],
                strengths: 'Perspicácia nos negócios, charme natural, habilidade de economizar',
                weaknesses: 'Pode ser ganancioso ou excessivamente crítico',
                careerTalents: 'Finanças, negócios, escrita, pesquisa',
                loveCompatibility: [
                    'Dragão',
                    'Macaco'
                ],
                careerCompatibility: [
                    'Boi',
                    'Macaco'
                ],
                challenges: 'Equilibrar ambição com generosidade'
            },
            5: {
                animal: 'Boi',
                traits: [
                    'Determinado',
                    'Confiável',
                    'Forte',
                    'Metódico'
                ],
                luckyNumbers: [
                    1,
                    9
                ],
                strengths: 'Perseverança extraordinária, força de vontade, confiabilidade total',
                weaknesses: 'Teimosia, resistência a mudanças',
                careerTalents: 'Agricultura, construção, medicina, administração',
                loveCompatibility: [
                    'Rato',
                    'Serpente'
                ],
                careerCompatibility: [
                    'Galo',
                    'Serpente'
                ],
                challenges: 'Desenvolver flexibilidade e abertura para novas ideias'
            },
            6: {
                animal: 'Tigre',
                traits: [
                    'Corajoso',
                    'Competitivo',
                    'Carismático',
                    'Aventureiro'
                ],
                luckyNumbers: [
                    1,
                    3,
                    4
                ],
                strengths: 'Liderança natural, coragem incomparável, carisma magnético',
                weaknesses: 'Impulsividade, tendência a assumir riscos desnecessários',
                careerTalents: 'Liderança, esportes, militares, empreendedorismo',
                loveCompatibility: [
                    'Cavalo',
                    'Cão'
                ],
                careerCompatibility: [
                    'Dragão',
                    'Cavalo'
                ],
                challenges: 'Aprender a pensar antes de agir e desenvolver paciência'
            },
            7: {
                animal: 'Coelho',
                traits: [
                    'Gentil',
                    'Elegante',
                    'Responsável',
                    'Diplomático'
                ],
                luckyNumbers: [
                    3,
                    4,
                    6
                ],
                strengths: 'Diplomacia refinada, sensibilidade artística, habilidade de mediar conflitos',
                weaknesses: 'Indecisão, evitação de confrontos',
                careerTalents: 'Artes, design, diplomacia, psicologia',
                loveCompatibility: [
                    'Cabra',
                    'Porco'
                ],
                careerCompatibility: [
                    'Cão',
                    'Porco'
                ],
                challenges: 'Desenvolver assertividade e tomar decisões difíceis'
            },
            8: {
                animal: 'Dragão',
                traits: [
                    'Confiante',
                    'Inteligente',
                    'Entusiasmado',
                    'Visionário'
                ],
                luckyNumbers: [
                    1,
                    6,
                    7
                ],
                strengths: 'Energia ilimitada, visão de futuro, capacidade de inspirar multidões',
                weaknesses: 'Arrogância, impaciência com detalhes',
                careerTalents: 'Política, entretenimento, inovação tecnológica, liderança empresarial',
                loveCompatibility: [
                    'Rato',
                    'Macaco'
                ],
                careerCompatibility: [
                    'Galo',
                    'Rato'
                ],
                challenges: 'Cultivar humildade e atenção aos detalhes'
            },
            9: {
                animal: 'Serpente',
                traits: [
                    'Sábio',
                    'Intuitivo',
                    'Misterioso',
                    'Sofisticado'
                ],
                luckyNumbers: [
                    2,
                    8,
                    9
                ],
                strengths: 'Sabedoria profunda, intuição aguçada, capacidade analítica',
                weaknesses: 'Desconfiança, tendência ao ciúme',
                careerTalents: 'Filosofia, pesquisa científica, investimentos, psicologia',
                loveCompatibility: [
                    'Boi',
                    'Galo'
                ],
                careerCompatibility: [
                    'Macaco',
                    'Galo'
                ],
                challenges: 'Aprender a confiar e ser mais aberto emocionalmente'
            },
            10: {
                animal: 'Cavalo',
                traits: [
                    'Energético',
                    'Independente',
                    'Alegre',
                    'Livre'
                ],
                luckyNumbers: [
                    2,
                    3,
                    7
                ],
                strengths: 'Independência robusta, otimismo contagiante, energia inesgotável',
                weaknesses: 'Inquietude, dificuldade em compromissos de longo prazo',
                careerTalents: 'Viagens, jornalismo, esportes, vendas',
                loveCompatibility: [
                    'Tigre',
                    'Cão'
                ],
                careerCompatibility: [
                    'Cabra',
                    'Tigre'
                ],
                challenges: 'Desenvolver consistência e honrar compromissos'
            },
            11: {
                animal: 'Cabra',
                traits: [
                    'Gentil',
                    'Compassivo',
                    'Artístico',
                    'Pacífico'
                ],
                luckyNumbers: [
                    3,
                    9,
                    4
                ],
                strengths: 'Criatividade excepcional, empatia profunda, habilidades artísticas',
                weaknesses: 'Insegurança, dependência emocional',
                careerTalents: 'Artes plásticas, música, terapia, design',
                loveCompatibility: [
                    'Coelho',
                    'Porco'
                ],
                careerCompatibility: [
                    'Cavalo',
                    'Porco'
                ],
                challenges: 'Construir autoconfiança e independência emocional'
            }
        };
        const zodiac = chineseZodiacData[zodiacIndex];
        return {
            ...zodiac,
            element,
            yinYang,
            fullSign: `${zodiac.animal} de ${element} ${yinYang}`
        };
    };
    const calculateAstrocartography = (fullName, date, time, place)=>{
        const generatePersonalHash = (data)=>{
            let hash = 0;
            for(let i = 0; i < data.length; i++){
                const char = data.charCodeAt(i);
                hash = (hash << 5) - hash + char;
                hash = hash & hash;
            }
            return Math.abs(hash);
        };
        const personalData = `${fullName}${date}${time}${place}`.toLowerCase().replace(/\s/g, '');
        const personalHash = generatePersonalHash(personalData);
        const birthDate = new Date(date);
        const birthDay = birthDate.getDate();
        const birthMonth = birthDate.getMonth() + 1;
        const nameLength = fullName.replace(/\s/g, '').length;
        const sunIndex = (personalHash + birthDay) % 100;
        const moonIndex = (personalHash + birthMonth) % 100;
        const venusIndex = (personalHash + nameLength) % 100;
        const worldLocations = {
            solar: [
                'Los Angeles, EUA',
                'Sydney, Austrália',
                'Tóquio, Japão',
                'Dubai, EAU',
                'São Paulo, Brasil'
            ],
            lunar: [
                'Londres, Reino Unido',
                'Dublin, Irlanda',
                'Amsterdam, Holanda',
                'Vancouver, Canadá'
            ],
            venus: [
                'Paris, França',
                'Veneza, Itália',
                'Rio de Janeiro, Brasil',
                'Bali, Indonésia'
            ]
        };
        const selectPersonalizedLocations = (locationArray, index, count = 3)=>{
            const selected = [];
            for(let i = 0; i < count; i++){
                const locationIndex = (index + i * 7) % locationArray.length;
                selected.push(locationArray[locationIndex]);
            }
            return selected;
        };
        const sunLines = selectPersonalizedLocations(worldLocations.solar, sunIndex, 4);
        const moonLines = selectPersonalizedLocations(worldLocations.lunar, moonIndex, 4);
        const venusLines = selectPersonalizedLocations(worldLocations.venus, venusIndex, 4);
        return {
            sunLines,
            moonLines,
            venusLines,
            marsLines: [
                'Berlim, Alemanha',
                'Seul, Coreia do Sul',
                'Hong Kong',
                'Nova York, EUA'
            ],
            jupiterLines: [
                'Nova Delhi, Índia',
                'Bangkok, Tailândia',
                'Cairo, Egito',
                'Jerusalém, Israel'
            ],
            saturnLines: [
                'Moscou, Rússia',
                'Oslo, Noruega',
                'Helsinki, Finlândia',
                'Montreal, Canadá'
            ],
            favorableLocations: {
                'Amor e Relacionamentos': selectPersonalizedLocations(worldLocations.venus, venusIndex, 5),
                'Carreira e Sucesso': selectPersonalizedLocations([
                    ...worldLocations.solar
                ], sunIndex, 5),
                'Espiritualidade e Crescimento': selectPersonalizedLocations([
                    ...worldLocations.lunar
                ], moonIndex, 5)
            },
            challengingLocations: {
                'Tensões Emocionais': [
                    'Moscou, Rússia',
                    'Helsinki, Finlândia'
                ],
                'Desafios Financeiros': [
                    'Berlim, Alemanha',
                    'Seul, Coreia do Sul'
                ]
            },
            recommendations: [
                `Para ${fullName}: Suas linhas solares em ${sunLines[0]} são especialmente poderosas durante o verão`,
                `Baseado em sua data de nascimento, ${venusLines[0]} oferece as melhores oportunidades românticas`,
                `Seu local de nascimento (${place}) cria uma conexão especial com ${moonLines[0]} para equilíbrio emocional`
            ],
            personalizedAnalysis: `Baseado em sua configuração astrológica única - nascido(a) em ${new Date(date).toLocaleDateString('pt-BR')} ${time ? `às ${time}` : ''} em ${place} - seu mapa astrocartográfico revela padrões energéticos específicos. Suas linhas planetárias mais poderosas se concentram em ${sunLines[0]} (linha solar) para liderança e reconhecimento, ${venusLines[0]} (linha de Vênus) para amor e relacionamentos, e ${moonLines[0]} (linha lunar) para equilíbrio emocional.`
        };
    };
    const fetchAndGenerateReport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (paymentId)=>{
        setIsGeneratingReport(true);
        try {
            console.log('🔍 Tentando buscar dados para gerar relatório...');
            console.log('PaymentId recebido:', paymentId);
            let result = null;
            // Se temos payment_id, tentar buscar dados específicos
            if (paymentId) {
                console.log('📡 Buscando dados pelo payment_id...');
                const response = await fetch(`/api/get-report?payment_id=${paymentId}`);
                result = await response.json();
                console.log('Resultado da API:', result);
            }
            // Se não encontrou dados específicos, tentar buscar pelo localStorage
            if (!result?.success && "undefined" !== 'undefined') //TURBOPACK unreachable
            ;
            if (result?.success && result.data) {
                console.log('✅ Dados encontrados! Gerando relatório...');
                const { personalData } = result.data;
                // Gerar relatório místico COMPLETO
                const numerology = calculateCompleteNumerology(personalData.fullName, personalData.birthDate);
                const astrology = calculateAstrology(personalData.birthDate, personalData.birthTime, personalData.birthPlace);
                const chineseZodiac = getChineseZodiac(personalData.birthDate);
                const astrocartography = calculateAstrocartography(personalData.fullName, personalData.birthDate, personalData.birthTime, personalData.birthPlace);
                console.log('📊 Relatório gerado com sucesso!');
                setReportData({
                    personalData,
                    numerology,
                    astrology,
                    chineseZodiac,
                    astrocartography
                });
                // Limpar dados temporários e localStorage
                if (result.data.paymentId) {
                    await fetch(`/api/get-report?payment_id=${result.data.paymentId}`, {
                        method: 'DELETE'
                    });
                }
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
            } else {
                console.log('ℹ️ Nenhum dado encontrado automaticamente. Usuário pode clicar no botão para tentar.');
            }
        } catch (error) {
            console.log('ℹ️ Não foi possível gerar relatório automaticamente:', error);
        } finally{
            setIsGeneratingReport(false);
        }
    }, []);
    const handleDownloadPDF = ()=>{
        if (!reportData) {
            console.error('Dados não disponíveis');
            return;
        }
        setIsDownloadingPDF(true);
        // Adicionar título ao documento antes de imprimir
        const originalTitle = document.title;
        document.title = `Relatório Místico - ${reportData.personalData.fullName}`;
        // Aguardar um pouco e abrir diálogo de impressão
        setTimeout(()=>{
            window.print();
            document.title = originalTitle;
            setIsDownloadingPDF(false);
        }, 100);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log('🔄 useEffect disparado com:', {
            canceled,
            status,
            paymentId,
            sessionId,
            autoGenerate
        });
        console.log('📱 Verificando localStorage:', {
            payment_id: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null,
            customer_name: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null,
            customer_email: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null
        });
        if (canceled) {
            setPaymentStatus('error');
            return;
        }
        // Para Kirvano, verificamos o status e payment_id
        if (status === 'success' || paymentId || sessionId) {
            setPaymentStatus('success');
            console.log('✅ Status de pagamento: success');
            // Sempre tentar gerar o relatório automaticamente
            if (paymentId) {
                console.log('📡 Gerando relatório com payment_id:', paymentId);
                fetchAndGenerateReport(paymentId);
            } else {
                console.log('📦 Gerando relatório sem payment_id, buscando do localStorage');
                fetchAndGenerateReport();
            }
        } else if (status === 'error' || status === 'canceled') {
            setPaymentStatus('error');
        } else {
            // Se não temos parâmetros claros, assumimos sucesso se estamos nesta página
            console.log('⚠️ Sem parâmetros claros, assumindo sucesso');
            setPaymentStatus('success');
            // Tentar gerar o relatório mesmo assim
            fetchAndGenerateReport();
        }
    }, [
        sessionId,
        canceled,
        paymentId,
        status,
        autoGenerate,
        fetchAndGenerateReport
    ]);
    if (paymentStatus === 'loading') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 550,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-400",
                        children: "Verificando status do pagamento..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 551,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/success/page.tsx",
                lineNumber: 549,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/success/page.tsx",
            lineNumber: 548,
            columnNumber: 7
        }, this);
    }
    if (paymentStatus === 'success') {
        // Se está gerando o relatório, mostrar loading
        if (isGeneratingReport) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "w-8 h-8 text-green-600 dark:text-green-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 564,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 563,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                            children: "Pagamento Realizado com Sucesso! 🎉"
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 567,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 572,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 dark:text-gray-400",
                                    children: "Gerando seu Relatório Místico Completo..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 573,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 571,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-purple-50 dark:bg-purple-900 rounded-xl p-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-purple-700 dark:text-purple-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "ID da Transação:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 580,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        paymentId || sessionId || 'Processando...'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 579,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-purple-600 dark:text-purple-400 mt-1",
                                    children: "Pagamento processado com segurança via Kirvano"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 582,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 578,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 562,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/success/page.tsx",
                lineNumber: 561,
                columnNumber: 9
            }, this);
        }
        // Se tem relatório, mostrar o relatório completo
        if (reportData) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50 no-print border-b-2 border-purple-200 dark:border-purple-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4 py-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-5 gap-2 sm:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#numerologia",
                                        className: "flex flex-col items-center gap-1 sm:gap-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/50 dark:to-pink-900/50 hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-800/50 dark:hover:to-pink-800/50 rounded-lg sm:rounded-xl p-2 sm:p-3 transition-all duration-300 border-2 border-transparent hover:border-purple-300 dark:hover:border-purple-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl sm:text-2xl",
                                                children: "🔢"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 603,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 text-center",
                                                children: "Numerologia"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 604,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 599,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#astrologia",
                                        className: "flex flex-col items-center gap-1 sm:gap-2 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-900/50 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-800/50 dark:hover:to-indigo-800/50 rounded-lg sm:rounded-xl p-2 sm:p-3 transition-all duration-300 border-2 border-transparent hover:border-blue-300 dark:hover:border-blue-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl sm:text-2xl",
                                                children: "⭐"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 611,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 text-center",
                                                children: "Astrologia"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 612,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 607,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#zodiaco-chines",
                                        className: "flex flex-col items-center gap-1 sm:gap-2 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/50 dark:to-orange-900/50 hover:from-red-100 hover:to-orange-100 dark:hover:from-red-800/50 dark:hover:to-orange-800/50 rounded-lg sm:rounded-xl p-2 sm:p-3 transition-all duration-300 border-2 border-transparent hover:border-red-300 dark:hover:border-red-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl sm:text-2xl",
                                                children: "🐉"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 619,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 text-center",
                                                children: "Zodíaco"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 620,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 615,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#astrocartografia",
                                        className: "flex flex-col items-center gap-1 sm:gap-2 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/50 dark:to-teal-900/50 hover:from-green-100 hover:to-teal-100 dark:hover:from-green-800/50 dark:to-teal-800/50 rounded-lg sm:rounded-xl p-2 sm:p-3 transition-all duration-300 border-2 border-transparent hover:border-green-300 dark:hover:border-green-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl sm:text-2xl",
                                                children: "🌍"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 627,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 text-center",
                                                children: "Astrocartografia"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 628,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 623,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#horoscope-section",
                                        className: "flex flex-col items-center gap-1 sm:gap-2 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/50 dark:to-amber-900/50 hover:from-yellow-100 hover:to-amber-100 dark:hover:from-yellow-800/50 dark:hover:to-amber-800/50 rounded-lg sm:rounded-xl p-2 sm:p-3 transition-all duration-300 border-2 border-transparent hover:border-yellow-300 dark:hover:border-yellow-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl sm:text-2xl",
                                                children: "✨"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 635,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 text-center",
                                                children: "Horóscopo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 636,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 631,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 598,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 597,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 596,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-4 py-6 sm:py-8 pt-24 sm:pt-28",
                        ref: reportRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 sm:p-8 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            className: "w-8 h-8 sm:w-10 sm:h-10 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 646,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 645,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                                        children: "Relatório Místico Completo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 648,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-2",
                                        children: reportData.personalData.fullName
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 651,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm sm:text-base text-gray-500 dark:text-gray-500",
                                        children: [
                                            "Nascido em ",
                                            new Date(reportData.personalData.birthDate).toLocaleDateString('pt-BR')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 654,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic",
                                        children: '"Conhece-te a ti mesmo e conhecerás o universo e os deuses" - Oráculo de Delfos'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 657,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 644,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DetailedReport$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                reportData: reportData
                            }, void 0, false, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 663,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 sm:p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 668,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 667,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                                        children: "Sua Jornada de Autoconhecimento e Transformação"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 670,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-4xl mx-auto space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Este relatório é muito mais que uma simples análise - é um mapa sagrado para sua jornada de autoconhecimento e crescimento espiritual. Cada número, cada posição planetária, cada símbolo chinês carrega uma mensagem especial do universo para você."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 674,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Use essas informações como uma bússola em sua caminhada pela vida. Lembre-se: você tem o poder de criar sua própria realidade, e agora possui as ferramentas ancestrais para fazê-lo de forma mais sábia, consciente e alinhada com seu propósito divino."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 678,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 673,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 sm:mt-8 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl max-w-2xl mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2",
                                                children: '"O conhecimento de si mesmo é o começo de toda sabedoria."'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 684,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic",
                                                children: "- Aristóteles"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 687,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 683,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "✨ Que este relatório ilumine seu caminho e desperte a magia que já existe dentro de você ✨"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 692,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 691,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 666,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center items-center mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDownloadPDF,
                                    disabled: isDownloadingPDF,
                                    className: "inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: isDownloadingPDF ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 705,
                                                columnNumber: 21
                                            }, this),
                                            "Gerando PDF..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 710,
                                                columnNumber: 21
                                            }, this),
                                            "Baixar Relatório em PDF"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 698,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 697,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 642,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/success/page.tsx",
                lineNumber: 594,
                columnNumber: 9
            }, this);
        }
        // Se pagamento foi bem-sucedido mas ainda não tem relatório
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "w-8 h-8 text-green-600 dark:text-green-400"
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 734,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 733,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                        children: "Pagamento Realizado com Sucesso! 🎉"
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 737,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-400 mb-6",
                        children: "Seu Relatório Místico Completo está pronto para ser visualizado."
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 741,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-purple-50 dark:bg-purple-900 rounded-xl p-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-purple-700 dark:text-purple-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "ID da Transação:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 747,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    paymentId || sessionId || 'Processando...'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 746,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-purple-600 dark:text-purple-400 mt-1",
                                children: "Pagamento processado com segurança via Kirvano"
                            }, void 0, false, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 749,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 745,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-xl p-4 mb-6 border-2 border-purple-300 dark:border-purple-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-700 dark:text-gray-300 mb-3",
                                children: [
                                    "✨ ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Clique no botão abaixo para acessar seu relatório completo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 756,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 755,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600 dark:text-gray-400",
                                children: "Seu relatório inclui Numerologia, Astrologia, Zodíaco Chinês e Astrocartografia"
                            }, void 0, false, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 758,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 754,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>fetchAndGenerateReport(paymentId || undefined),
                        className: "w-full mb-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 767,
                                columnNumber: 13
                            }, this),
                            "Visualizar Meu Relatório Completo"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 763,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 775,
                                columnNumber: 13
                            }, this),
                            "Voltar ao Início"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 771,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/success/page.tsx",
                lineNumber: 732,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/success/page.tsx",
            lineNumber: 731,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                        className: "w-8 h-8 text-red-600 dark:text-red-400"
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 787,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 786,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                    children: "Pagamento Cancelado"
                }, void 0, false, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 790,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 dark:text-gray-400 mb-6",
                    children: [
                        canceled ? 'Você cancelou o pagamento.' : 'Houve um problema com o pagamento.',
                        " Não se preocupe, você pode tentar novamente."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 794,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 802,
                            columnNumber: 11
                        }, this),
                        "Tentar Novamente"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 798,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/success/page.tsx",
            lineNumber: 785,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/success/page.tsx",
        lineNumber: 784,
        columnNumber: 5
    }, this);
}
function SuccessPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 815,
                        columnNumber: 11
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-400",
                        children: "Carregando..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 816,
                        columnNumber: 11
                    }, void 0)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/success/page.tsx",
                lineNumber: 814,
                columnNumber: 9
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/app/success/page.tsx",
            lineNumber: 813,
            columnNumber: 7
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessPageContent, {}, void 0, false, {
            fileName: "[project]/src/app/success/page.tsx",
            lineNumber: 820,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/success/page.tsx",
        lineNumber: 812,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__64e8720f._.js.map