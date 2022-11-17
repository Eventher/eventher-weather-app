CREATE DATABASE IF NOT EXISTS events;

USE events;

CREATE TABLE `events` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(40) NOT NULL,
    `title` VARCHAR(255)  NOT NULL,
    `url` VARCHAR(255)  NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `outdoor` TINYINT(0) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;

INSERT INTO
  `events`
VALUES
  (  
    1,
    "Faro",
    "4-hour tour of the islands of Ria Formosa",
    "https://www.getyourguide.com.br/algarve-l66/olhao-excursao-de-4-horas-pelas-ilhas-da-ria-formosa-t97776/?",
    "https://cdn.getyourguide.com/img/tour/629d052ce3d95.jpeg/145.jpg",
    "Excursion",
    1
  ),
  (  
    2,
    "Faro",
    "Slide & Splash Water Park",
    "https://www.getyourguide.pt/lagoa-algarve-l90069/lagoa-ingresso-p-parque-aquatico-slide-splash-t199966/?",
    "https://cdn.getyourguide.com/img/tour/3dd8b6397a1a8e03.jpeg/145.jpg",
    "Excursion",
    1
  ),
  (  
    3,
    "Faro",
    "Cathedral of Faro",
    "https://www.getyourguide.pt/se-de-faro-l144999/",
    "https://cdn.getyourguide.com/img/location/5e5934397f71f-wide.jpeg/99.webp",
    "Excursion",
    0
  ),
  (  
    4,
    "Faro",
    "Ciencia Viva Museum",
    "https://www.getyourguide.pt/faro-l1238/faro-bilhete-museu-centro-de-ciencias-da-vida-do-algarve-t428638/",
    "https://cdn.getyourguide.com/img/tour/eb523661be74f8bf.jpeg/145.jpg",
    "Excursion",
    0
  ),
  (  
    5,
    "Beja",
    "Hidden Canyon Tour",
    "https://www.getyourguide.pt/bali-l347/bali-excursao-ao-canion-escondido-cachoeira-e-templos-t249457/",
    "https://cdn.getyourguide.com/img/tour/5ce3ed17093ba.jpeg/145.jpg",
    "Excursion",
    1
  ),
  (  
    6,
    "Beja",
    "Snorkeling",
    "https://www.getyourguide.pt/bali-l347/bali-excursao-ao-canion-escondido-cachoeira-e-templos-t249457/",
    "https://cdn.getyourguide.com/img/tour/5eb8868d639e4.jpeg/145.jpg",
    "Sports",
    1
  ),
  (  
    7,
    "Beja",
    "Queen Dona Leonor Museum",
    "https://www.portugaldenorteasul.pt/14142/os-12-melhores-sitios-para-ver-e-visitar-em-beja",
    "https://www.portugaldenorteasul.pt/uploads/20190716182707_asasaass.jpg ",
    "Cultural",
    0
  ),
  (  
    8,
    "Beja",
    "Clock Museum",
    "https://www.tripadvisor.pt/Attraction_Review-g189109-d2556287-Reviews-Museu_do_Relogio-Serpa_Beja_District_Alentejo.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/ab/61/c0/filename-edward-east.jpg?w=600&h=-1&s=1 ",
    "Cultural",
    0
  ),
  (  
    9,
    "Setúbal",
    "Sesimbra & Arrábida Park",
    "https://www.getyourguide.pt/lisboa-l42/lisboa-passeio-no-parque-da-arrabida-e-sesimbra-t58442/",
    "https://cdn.getyourguide.com/img/tour/597a06bc51faf.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    10,
    "Setúbal",
    "Costeering Portinho da Arrábida",
    "https://www.getyourguide.pt/portinho-da-arrabida-l122090/coasteering-em-portinho-da-arrabida-t100403/",
    "https://cdn.getyourguide.com/img/tour/5dbc4d9319c7a.jpeg/145.jpg",
    "Sports",
    1
  ),
  (  
    11,
    "Setúbal",
    "Wine Tasting",
    "https://www.getyourguide.pt/parque-natural-da-arrabida-l4948/private-van-tour-arrabida-e-degustacao-de-vinhos-t222048",
    "https://cdn.getyourguide.com/img/tour/5eb73e60e8f98.jpeg/145.jpg",
    "Sports",
    0
  ),
  (  
    12,
    "Setúbal",
    "Fish Market",
    "https://www.getyourguide.pt/setubal-l1370/lisboa-excursao-guiada-setubal-e-mercado-de-peixe-t268632/",
    "https://cdn.getyourguide.com/img/tour/5d171bc668bb2.jpeg/145.jpg",
    "Sports",
    0
  ),
  (  
    13,
    "Évora",
    "Megalític Monument",
    "https://www.getyourguide.pt/lisboa-l42/evora-e-megaliticos-excursao-de-1-dia-saindo-de-lisboa-t50381/?",
    "https://cdn.getyourguide.com/img/tour/548e1e33287a1.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    14,
    "Évora",
    "Wine Tasting",
    "https://www.getyourguide.pt/lisboa-l42/tour-privado-de-lisboa-a-evora-e-prova-de-vinhos-t56749",
    "https://cdn.getyourguide.com/img/tour/55fbe3ea4fc26.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    15,
    "Évora",
    "Bones Chapel",
    "https://www.getyourguide.pt/capela-dos-ossos-l4954/",
    "https://cdn.getyourguide.com/img/location/5e3ab6b429b69-wide.jpeg/99.webp",
    "Cultural",
    0
  ),
 (  
    16,
    "Évora",
    "Évora Cathedral",
    "https://www.getyourguide.pt/catedral-de-evora-l115587/",
    "https://cdn.getyourguide.com/img/location/5c88fb7940bfb-wide.jpeg/99.webp",
    "Cultural",
    0
  ),
  (  
    17,
    "Lisboa",
    "Bike Ride",
    "https://www.getyourguide.pt/lisboa-l42/lisboa-excursao-pelos-7-montes-de-bicicleta-eletrica-t36761/",
    "https://cdn.getyourguide.com/img/tour/5a3794596385a.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    18,
    "Lisboa",
    "Cruise in Tejo",
    "https://www.getyourguide.pt/rio-tejo-l4825/lisboa-excursao-ao-por-do-sol-no-rio-tejo-com-petiscos-e-bebidas-t410791/",
    "https://cdn.getyourguide.com/img/tour/620eacb285d1d.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    19,
    "Lisboa",
    "Jeronimo's Monastery",
    "https://www.getyourguide.pt/lisboa-l42/mosteiro-dos-jeronimos-ingresso-sem-fila-t131169/",
    "https://cdn.getyourguide.com/img/tour/5a3794596385a.jpeg/145.jpg",
    "Cultural",
    0
  ),
  (  
    20,
    "Lisboa",
    "Fado in Chiado",
    "https://www.getyourguide.pt/fado-in-chiado-l111927/o-melhor-espetaculo-de-fado-em-lisboa-fado-in-chiado--t31632/",
    "https://cdn.getyourguide.com/img/tour/5fc11f335e47f.png/145.jpg",
    "Cultural",
    0
  ),
  (  
    21,
    "Portalegre",
    "Historical Village",
    "https://www.getyourguide.pt/beiras-l32615/portugal-tour-aldeias-historicas-t198523/",
    "https://cdn.getyourguide.com/img/tour/5e5e60e8818df.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    22,
    "Portalegre",
    "Tour and Wine Tasting",
    "https://www.getyourguide.pt/portalegre-l127548/portalegre-tour-e-prova-de-vinhos-quinta-da-fonte-souto-t405983/",
    "https://cdn.getyourguide.com/img/tour/6156f70ab7006.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    23,
    "Portalegre",
    "Portalegre Cathedral",
    "https://lifecooler.com/artigo/atividades/s-catedral-de-portalegre/349838/",
    "https://cdn.visitportugal.com/sites/default/files/styles/encontre_detalhe_poi_destaque/public/mediateca/Portalegre-SeCatedral-Shutterstock-StockPhotosArt-Visit1.jpg?itok=sk-7a5XA",
    "Cultural",
    0
  ),
  (  
    24,
    "Portalegre",
    "Castle of Vide",
    "https://www.portugaldenorteasul.pt/12957/as-15-melhores-actividades-para-fazer-e-visitar-em-portalegre",
    "https://www.portugaldenorteasul.pt/uploads/20190717121943_asdaas.jpg",
    "Cultural",
    0
  ),
  (  
    25,
    "Santarém",
    "Fatima Sanctuary",
    "https://www.getyourguide.pt/lisboa-l42/de-lisboa-excursao-de-meio-dia-a-fatima-t84132/?",
    "https://cdn.getyourguide.com/img/location/5c0026c35c29a-wide.jpeg/99.webp",
    "Cultural",
    1
  ),
  (  
    26,
    "Santarém",
    "Óbidos Castle",
    "https://www.getyourguide.pt/castelo-de-obidos-l143149/",
    "https://cdn.getyourguide.com/img/location/5a3b9871a201a-wide.jpeg/99.webp",
    "Cultural",
    1
  ),
   (  
    27,
    "Santarém",
    "Church of Graça",
    "https://www.tripadvisor.pt/Attraction_Review-g659913-d7714896-Reviews-Museu_Diocesano_de_Santarem-Santarem_Santarem_District_Central_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/86/a2/b8/igreja-da-graca.jpg?w=1000&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    28,
    "Santarém",
    "Castle",
    "https://www.tripadvisor.pt/Attraction_Review-g659913-d4520803-Reviews-Igreja_da_Graca-Santarem_Santarem_District_Central_Portugal.html<",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/9e/45/2c/escadariia-de-acesso.jpg?w=2000&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    29,
    "Leiria",
    "Nazaré",
    "https://www.getyourguide.pt/lisboa-l42/obidos-nazare-e-alcobaca-excursao-particular-de-carro-t135045/?",
    "https://cdn.getyourguide.com/img/tour/5a3b994eab3e1.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    30,
    "Leiria",
    "Excursão",
    "https://www.getyourguide.pt/lisboa-l42/de-lisboa-excursao-de-meio-dia-a-fatima-t84132/?",
    "https://cdn.getyourguide.com/img/tour/5863b6ac9894a.jpeg/98.jpg",
    "Cultural",
    1
  ),
   (  
    31,
    "Leiria",
    "Quinta do Sanguinal",
    "https://www.tripadvisor.pt/Attraction_Review-g1910059-d6513406-Reviews-Quinta_do_Sanguinhal-Bombarral_Leiria_District_Central_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/10/02/36/quinta-do-sanguinhal.jpg?w=2000&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    32,
    "Leiria",
    "Our Lady of Nazaré Church",
    "https://www.tripadvisor.pt/Attraction_Review-g315902-d1568672-Reviews-Igreja_de_Nossa_Senhora_da_Nazare-Nazare_Leiria_District_Central_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f5/8d/3f/sklepienie-prezbiterium.jpg?w=1000&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    33,
    "Castelo Branco",
    "Boat Ride",
    "https://www.getyourguide.pt/castelo-branco-l153559/castelo-branco-passeio-de-barco-pelo-monumento-natural-das-portas-de-rodao-t429380/",
    "https://cdn.getyourguide.com/img/tour/630ca53bbdcd8.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    34,
    "Castelo Branco",
    "Walk in historical center",
    "https://www.getyourguide.pt/castelo-branco-l153559/castelo-branco-passeio-a-pe-historico-na-cidade-t429156/",
    "https://cdn.getyourguide.com/img/tour/63074a2e3c1f9.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    35,
    "Castelo Branco",
    "Walk in historical center",
    "https://www.getyourguide.pt/castelo-branco-l153559/castelo-branco-passeio-a-pe-historico-na-cidade-t429156/",
    "https://cdn.getyourguide.com/img/tour/63074a2e3c1f9.jpeg/145.jpg",
    "Cultural",
    0
  ),
  (  
    36,
    "Castelo Branco",
    "Miguel Cargaleiro Foundation",
    "https://www.tripadvisor.pt/Attraction_Review-g189142-d7805205-Reviews-Fundacao_Manuel_Cargaleiro-Castelo_Branco_Castelo_Branco_District_Central_Portuga.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f5/8d/3f/sklepienie-prezbiterium.jpg?w=1000&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    37,
    "Coimbra",
    "Kayak ride in Mondego River",
    "https://www.getyourguide.pt/coimbra-l1629/coimbra-passeio-de-caiaque-no-rio-mondego-t388950/",
    "https://cdn.getyourguide.com/img/tour/5ee3939876906.jpeg/145.jpg",
    "Sport",
    1
  ),
  (  
    38,
    "Coimbra",
    "Walk in Historical Center",
    "https://www.getyourguide.com.br/coimbra-l1629/coimbra-visita-guiada-ao-centro-historico-t431615/",
    "https://cdn.getyourguide.com/img/tour/63359a1da6071.jpeg/98.jpg",
    "Cultural",
    1
  ),
  (  
    39,
    "Coimbra",
    "Fado Show",
    "https://www.getyourguide.com.br/coimbra-l1629/coimbra-show-de-fado-ao-vivo-com-prova-de-taca-de-vinho-do-porto-t392722/",
    "https://cdn.getyourguide.com/img/tour/5f63204801f84.jpeg/145.jpg",
    "Cultural",
    0
  ),
  (  
    40,
    "Coimbra",
    "Joanina Library",
    "https://www.tripadvisor.pt/Attraction_Review-g189143-d6761156-Reviews-Biblioteca_Joanina-Coimbra_Coimbra_District_Central_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9b/7b/d3/photo4jpg.jpg?w=1100&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    41,
    "Aveiro",
    "Boat Ride",
    "https://www.getyourguide.com.br/aveiro-l2459/passeio-de-barco-tradicional-moliceiro-t393116/?",
    "https://cdn.getyourguide.com/img/tour/5f734eaaa2637.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    42,
    "Aveiro",
    "TukTuk Ride",
    "https://www.getyourguide.com.br/aveiro-l2459/aveiro-city-tour-de-tuk-tuk-t393499/",
    "https://cdn.getyourguide.com/img/tour/5f8ed47922715.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    43,
    "Aveiro",
    "Museum of Aveiro",
    "https://www.tripadvisor.pt/Attraction_Review-g189140-d456683-Reviews-Museu_de_Aveiro-Aveiro_Aveiro_District_Northern_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/89/72/ea/museu-de-aveiro-aveiro.jpg?w=1100&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    44,
    "Aveiro",
    "Aveiro Shopping",
    "https://www.tripadvisor.pt/Attraction_Review-g189140-d3572138-Reviews-Forum_Aveiro-Aveiro_Aveiro_District_Northern_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/b1/da/db/forum-aveiro.jpg?w=1600&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    45,
    "Viseu",
    "Fontelo's Park",
    "https://www.tripadvisor.pt/Attraction_Review-g189149-d9879256-Reviews-Parque_do_Fontelo-Viseu_Viseu_District_Northern_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/cf/13/68/img-20161205-wa0050-largejpg.jpg?w=1600&h=-1&s=1",
    "Cultural",
    1
  ),
  (  
    46,
    "Viseu",
    "Fontelo's Park",
    "https://www.tripadvisor.pt/Attraction_Review-g189149-d9879256-Reviews-Parque_do_Fontelo-Viseu_Viseu_District_Northern_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/cf/13/68/img-20161205-wa0050-largejpg.jpg?w=1600&h=-1&s=1",
    "Cultural",
    1
  ),
  (  
    47,
    "Viseu",
    "Cathedral of Viseu",
    "https://www.tripadvisor.pt/Attraction_Review-g189149-d7171776-Reviews-Se_Catedral_de_Viseu-Viseu_Viseu_District_Northern_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/7f/39/b5/photo2jpg.jpg?w=1400&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    48,
    "Viseu",
    "Ice's Palace",
    "https://www.tripadvisor.pt/Attraction_Review-g189149-d3869771-Reviews-Palacio_do_Gelo-Viseu_Viseu_District_Northern_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/b1/42/e1/palacio-do-gelo.jpg?w=600&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    49,
    "Guarda",
    "Trekking",
    "https://pt.wikiloc.com/trilhas/trekking/portugal/guarda/guarda",
    "https://s1.wklcdn.com/image_59/1777391/22780789/14430373Master.jpg",
    "Cultural",
    1
  ),
  (  
    50,
    "Guarda",
    "Road Cycling",
    "https://www.outdooractive.com/pt/ciclismo-de-estrada/guarda/ciclismo-de-estrada-na-guarda/221307484/",
    "https://s1.wklcdn.com/image_59/1777391/22780789/14430373Master.jpg",
    "Cultural",
    1
  ),
   (  
    51,
    "Guarda",
    "Cathedral of Guarda",
    "https://www.tripadvisor.pt/Attraction_Review-g230084-d6979381-Reviews-Se_Catedral_da_Guarda-Guarda_Guarda_District_Central_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/50/e8/76/se-catedral-da-guarda.jpg?w=2000&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    52,
    "Guarda",
    "Municipal Theather",
    "https://www.tripadvisor.pt/Attraction_Review-g230084-d7999006-Reviews-Teatro_Municipal_da_Guarda_TMG-Guarda_Guarda_District_Central_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/7a/d9/d1/teatro-municipal-da-guarda.jpg?w=1400&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    53,
    "Porto",
    "Bolhão's Market",
    "https://www.getyourguide.com.br/mercado-do-bolhao-l5662/",
    "https://cdn.getyourguide.com/img/location/5729b340d994c.jpeg/99.webp",
    "Cultural",
    1
  ),
   (  
    54,
    "Porto",
    "6 Brigdes Cruise",
    "https://www.getyourguide.com.br/porto-portugal-l151/porto-cruzeiro-das-6-pontes-t183308/?",
    "https://cdn.getyourguide.com/img/tour/d21ab870938ca2ab.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    55,
    "Porto",
    "Calem's Wine House",
    "https://www.getyourguide.com.br/calem-l12082/ingresso-tour-guiado-e-degustacoes-nas-adegas-de-calem-t175041/?",
    "https://cdn.getyourguide.com/img/tour/5b9232e8622f3.jpeg/145.jpg",
    "Cultural",
    0
  ),
   (  
    56,
    "Porto",
    "Lello's Library",
    "https://www.getyourguide.com.br/livraria-lello-e-irmao-l4076/",
    "https://cdn.getyourguide.com/img/location/5729ae2a2e828.jpeg/99.webp",
    "Cultural",
    0
  ),
  (  
    57,
    "Vila Real",
    "Boat Ride",
    "https://www.getyourguide.pt/distrito-de-vila-real-l163891/atividades-na-agua-tc1141/",
    "https://cdn.getyourguide.com/img/tour/5afed84c91eb3.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    58,
    "Vila Real",
    "Buggy Ride",
    "https://www.tripadvisor.pt/AttractionProductReview-g1438510-d23456385-Polaris_RZR_Buggy_Private_Activity_4x4-Mondim_de_Basto_Vila_Real_District_Norther.html",
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/fc/82/14.jpg",
    "Cultural",
    1
  ),
  (  
    59,
    "Vila Real",
    "Matheus's Palace",
    "https://www.getyourguide.pt/distrito-de-vila-real-l163891/portugal-palacio-de-mateus-e-tour-privado-vila-real-t407451/?",
    "https://cdn.getyourguide.com/img/tour/6183eebe50c31.jpeg/145.jpg",
    "Cultural",
    0
  ),
  (  
    60,
    "Vila Real",
    "Wine Tasting with lunch",
    "https://www.tripadvisor.pt/AttractionProductReview-g189180-d23980808-Full_Day_Douro_Tour_with_Wine_Tasting_and_Lunch-Porto_Porto_District_Northern_Port.html",
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/34/0f/c5.jpg",
    "Cultural",
    0
  ),
  (  
    61,
    "Braga",
    "Gêres",
    "https://www.getyourguide.pt/porto-portugal-l151/saindo-do-porto-excursao-ao-parque-geres-com-almoco-t47543/",
    "https://cdn.getyourguide.com/img/tour/5a37b488527b8.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    62,
    "Braga",
    "Bike Ride",
    "https://www.getyourguide.pt/braga-l32536/parque-nacional-da-peneda-geres-passeio-guiado-de-bicicleta-electrica-t201661/?",
    "https://cdn.getyourguide.com/img/tour/5c19219edc324.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    63,
    "Braga",
    "Cathedral of Braga",
    "https://www.tripadvisor.pt/Attraction_Review-g189171-d318707-Reviews-Se_de_Braga-Braga_Braga_District_Northern_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b7/ea/e0/facade-de-la-cathedrale.jpg?w=2000&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    64,
    "Braga",
    "Palácio do Raio",
    "https://www.tripadvisor.pt/Attraction_Review-g189171-d8600604-Reviews-Palacio_do_Raio-Braga_Braga_District_Northern_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/4f/aa/ff/20160730-163935-01-largejpg.jpg?w=1400&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    65,
    "Viana do Castelo",
    "Kayak Ride",
    "https://www.getyourguide.pt/distrito-de-viana-do-castelo-l96268/viana-do-castelo-passeio-de-caiaque-no-rio-lima-t388336/?",
    "https://cdn.getyourguide.com/img/tour/5ed8f58b112ad.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    66,
    "Viana do Castelo",
    "Ponte de Lima",
    "https://www.getyourguide.pt/guimaraes-l4960/excursao-alto-minho-saindo-de-braga-e-guimaraes-t69427/?",
    "https://cdn.getyourguide.com/img/tour/6107d62b9285c.jpeg/145.jpg",
    "Cultural",
    1
  ),
  (  
    67,
    "Viana do Castelo",
    "Traje Museum",
    "https://www.tripadvisor.pt/Attraction_Review-g189185-d7208795-Reviews-Museu_do_Traje-Viana_do_Castelo_Viana_do_Castelo_District_Northern_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/2e/c8/41/museu-do-traje.jpg?w=2000&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    68,
    "Viana do Castelo",
    "Misericórdia Church",
    "https://www.tripadvisor.pt/Attraction_Review-g189185-d6205578-Reviews-Igreja_da_Misericordia-Viana_do_Castelo_Viana_do_Castelo_District_Northern_Portug.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e3/de/bf/igreja-da-misericordia.jpg?w=2000&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    69,
    "Bragança",
    "Trekking",
    "https://pt.wikiloc.com/trilhas/outdoor/portugal/braganca",
    "https://s1.wklcdn.com/image_29/882536/113865443/73443100Master.jpg",
    "Sports",
    1
  ),
  (  
    70,
    "Bragança",
    "Mountain Bike",
    "https://www.outdooractive.com/pt/bicicleta-de-montanha/braganca/bicicleta-de-montanha-em-braganca/221307635/",
    "https://img3.oastatic.com/img2/53492749/728x410r/t.jpg",
    "Sports",
    1
  ),
  (  
    71,
    "Bragança",
    "Castle of Bragança",
    "https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.htm",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/8a/14/b9/the-castle-at-night-seen.jpg?w=2000&h=-1&s=1",
    "Cultural",
    0
  ),
  (  
    72,
    "Bragança",
    "Santa Maria Bragança Church",
    "https://www.tripadvisor.pt/Attraction_Review-g189172-d10353274-Reviews-Church_of_Santa_Maria-Braganca_Braganca_District_Northern_Portugal.html",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ed/98/59/foto-desde-el-coro.jpg?w=1400&h=-1&s=1",
    "Cultural",
    0
  );

CREATE TABLE `suggestions` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `city` VARCHAR(100) NOT NULL,
    `url` VARCHAR(255) NOT NULL,
    `image` TEXT NOT NULL,
    `outdoor` VARCHAR(7) NOT NULL,
    `activity` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;
