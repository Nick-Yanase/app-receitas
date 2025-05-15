const recipes = [
  {
    id: 1,
    nome: "Hambúrguer Supremo da F&W",
    descricao: "Um hambúrguer suculento com blend de carnes, queijo derretido, cebolas caramelizadas e molho especial. Perfeito para grelhar ao ar livre.",
    tempo_total: "35 minutos",
    ingredientes: [
      "500g de carne moída (blend de acém e peito)",
      "Sal e pimenta a gosto",
      "4 fatias de queijo cheddar",
      "4 pães de hambúrguer",
      "1 cebola roxa em fatias finas",
      "1 colher (sopa) de açúcar mascavo",
      "1 colher (sopa) de manteiga",
      "4 folhas de alface",
      "4 fatias de tomate",
      "Molho especial (maionese + ketchup + mostarda + picles picado)"
    ],
    passo_a_passo: [
      "Forme 4 hambúrgueres com a carne. Tempere com sal e pimenta.",
      "Grelhe os hambúrgueres por 3–4 minutos de cada lado. Adicione o queijo nos minutos finais para derreter.",
      "Em uma frigideira, derreta a manteiga, adicione a cebola e o açúcar e cozinhe até caramelizar (10 min).",
      "Torre levemente os pães.",
      "Monte o hambúrguer: molho, alface, tomate, carne com queijo, cebola e mais molho."
    ],
    image: require("../assets/hamburguer.png"),
  },
  {
    id: 2,
    nome: "Salada de Macarrão com Queijo Feta e Ervas",
    descricao: "Refrescante, cremosa e cheia de sabor com um toque de ervas frescas e queijo feta esfarelado.",
    tempo_total: "25 minutos",
    ingredientes: [
      "250g de macarrão curto (penne ou parafuso)",
      "150g de queijo feta esfarelado",
      "1/2 xícara de azeite de oliva",
      "Suco de 1 limão",
      "1 dente de alho picado",
      "1/4 xícara de salsinha picada",
      "1/4 xícara de hortelã picada",
      "Sal e pimenta a gosto",
      "1/2 xícara de tomates-cereja cortados ao meio",
      "Azeitonas pretas fatiadas (opcional)"
    ],
    passo_a_passo: [
      "Cozinhe o macarrão conforme instruções da embalagem. Escorra e deixe esfriar.",
      "Em uma tigela, misture o azeite, suco de limão, alho, ervas, sal e pimenta.",
      "Adicione o macarrão frio, o queijo feta, os tomates e as azeitonas.",
      "Misture bem e leve à geladeira por 10 minutos antes de servir."
    ],
    image: require("../assets/salada-macarrao.png"),
  },
  {
    id: 3,
    nome: "Biscoitos de Chocolate com Manteiga Marrom",
    descricao: "CroCantes por fora, macios por dentro, com sabor profundo de manteiga marrom e pedaços generosos de chocolate.",
    tempo_total: "40 minutos",
    ingredientes: [
      "200g de manteiga sem sal",
      "1 xícara de açúcar mascavo",
      "1/2 xícara de açúcar refinado",
      "2 ovos",
      "2 1/4 xícaras de farinha de trigo",
      "1 colher (chá) de bicarbonato de sódio",
      "1 pitada de sal",
      "1 xícara de gotas ou pedaços de chocolate meio amargo",
      "1 colher (chá) de essência de baunilha"
    ],
    passo_a_passo: [
      "Derreta a manteiga em fogo médio até dourar (manteiga marrom). Deixe esfriar.",
      "Misture a manteiga com os açúcares. Adicione ovos e baunilha.",
      "Adicione farinha, bicarbonato e sal. Misture até formar uma massa.",
      "Incorpore o chocolate.",
      "Modele bolinhas e leve ao forno a 180 °C por 10–12 minutos.",
      "Deixe esfriar antes de servir."
    ],
    image: require("../assets/cookies.png"),
  },
  {
    id: 4,
    nome: "Batatas Fritas com Tempero de Churrasco",
    descricao: "Batatas crocantes com um tempero defumado e levemente picante, ótimas como acompanhamento.",
    tempo_total: "45 minutos",
    ingredientes: [
      "4 batatas grandes",
      "2 colheres (sopa) de azeite",
      "1 colher (chá) de páprica defumada",
      "1/2 colher (chá) de alho em pó",
      "1/2 colher (chá) de cebola em pó",
      "1/4 colher (chá) de pimenta-caiena",
      "Sal e pimenta a gosto"
    ],
    passo_a_passo: [
      "Corte as batatas em palitos ou gomos.",
      "Cozinhe em água fervente por 5 minutos e escorra.",
      "Misture com o azeite e os temperos.",
      "Leve ao forno a 220 °C por 30–35 minutos, virando na metade do tempo.",
      "Sirva quentes e crocantes."
    ],
    image: require("../assets/chips.png"),
  },
  {
    id: 5,
    nome: "Tortinhas de Pêssego",
    descricao: "Mini tortas com massa crocante e recheio doce de pêssego, ideais para piqueniques.",
    tempo_total: "50 minutos",
    ingredientes: [
      "1 rolo de massa folhada",
      "4 pêssegos maduros em fatias finas",
      "1/4 xícara de açúcar",
      "1 colher (sopa) de amido de milho",
      "1 colher (chá) de canela",
      "1 gema de ovo",
      "Açúcar cristal para polvilhar (opcional)"
    ],
    passo_a_passo: [
      "Abra a massa e corte em círculos ou quadrados.",
      "Misture os pêssegos com açúcar, canela e amido.",
      "Coloque o recheio no centro da massa e dobre as bordas.",
      "Pincele com gema e polvilhe açúcar.",
      "Asse a 190 °C por 25–30 minutos até dourar."
    ],
    image: require("../assets/torta-pessego.png"),
  },
  {
    id: 6,
    nome: "Frango Frito",
    descricao: "Clássico crocante e suculento por dentro, perfeito com molhos e saladas.",
    tempo_total: "1 hora",
    ingredientes: [
      "1 kg de pedaços de frango",
      "2 xícaras de buttermilk (ou leite com suco de limão)",
      "2 xícaras de farinha de trigo",
      "1 colher (chá) de páprica",
      "1/2 colher (chá) de alho em pó",
      "Sal e pimenta a gosto",
      "Óleo para fritar"
    ],
    passo_a_passo: [
      "Marine o frango no buttermilk por pelo menos 30 minutos.",
      "Misture a farinha com os temperos.",
      "Passe os pedaços de frango na farinha, pressionando bem.",
      "Frite em óleo quente (170 °C) por 10–12 minutos até dourar.",
      "Escorra em papel toalha e sirva."
    ],
    image: require("../assets/frango-frito.png"),
  },
  {
    id: 7,
    nome: "Queijo Pimiento com Biscoitos de Manteiga com Sal e Pimenta",
    descricao: "Patê cremoso de queijo com pimentão, servido com biscoitinhos amanteigados levemente apimentados.",
    tempo_total: "30 minutos",
    ingredientes: [
      "200g de queijo cheddar ralado",
      "1/2 xícara de maionese",
      "1/4 xícara de cream cheese",
      "1/4 xícara de pimentão vermelho assado picado",
      "1 colher (chá) de alho em pó",
      "Sal e pimenta a gosto",
      "1 xícara de farinha de trigo",
      "100g de manteiga gelada em cubos",
      "1/2 colher (chá) de sal",
      "1/4 colher (chá) de pimenta-do-reino moída"
    ],
    passo_a_passo: [
      "Misture todos os ingredientes do queijo até ficar cremoso. Leve à geladeira.",
      "Para os biscoitos, misture a farinha com o sal e a pimenta.",
      "Adicione a manteiga e misture com as mãos até formar uma massa.",
      "Abra, corte e asse a 180 °C por 15 minutos ou até dourar.",
      "Sirva o patê de queijo com os biscoitinhos."
    ],
    image: require("../assets/biscoito-queijo.png"),
  }
]

export default recipes
