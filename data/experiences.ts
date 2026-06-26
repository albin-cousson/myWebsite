export interface Experience {
  id: string;
  company: string;
  location: string;
  periodStart: string;
  periodEnd: string;
  title: string;
  shortDescription: string;
  fullDescription: {
    intro: string;
    responsibilities: string[];
    conclusion: string;
  };
  stack?: string[];
}

export const experiences: Experience[] = [
  {
    id: 'spurgin',
    company: 'Spurgin',
    location: 'Sélestat',
    periodStart: '2025',
    periodEnd: '2026',
    title: 'Développeur Full-Stack - Vue.js | NestJS',
    shortDescription: "Développement d'une solution pour effectuer des contrôles qualités dans les usines Spurgin.",
    fullDescription: {
      intro: "J'ai eu l'opportunité de rejoindre l'équipe informatique de Spurgin en tant que développeur Nest.js et Vue.js. Ma mission a été d'améliorer et d'ajouter de nouvelles fonctionnalités à leurs différents logiciels SaaS dans le domaine de la construction de prédalles. Ces logiciels étaient utilisés de manière variée selon les usines. Il m'a donc fallu m'adapter à cette nouvelle contrainte.",
      responsibilities: [
        "Ajout de nouvelles fonctionnalités : génération de formulaires de contrôle qualité pour les prémurs, envoi de notifications automatisées, etc.",
        "Amélioration de l'expérience utilisateur et résolution de bugs.",
        "Dockerisation du projet.",
        "Rédaction d'une documentation pour le lancement et la maintenance de l'application à l'intention des futurs développeurs.",
        "Création de tests automatisés depuis GitLab.",
      ],
      conclusion: "Cette mission m'a permis de renforcer mes compétences en JavaScript. En effet, j'ai pu découvrir un nouveau framework, Vue.js. Par ailleurs, en plus de découvrir un nouveau secteur d'activité, le BTP, j'ai pu approfondir mes connaissances en Node.js, et plus spécifiquement en Nest.js. Une fois de plus, j'ai pu mettre mes connaissances à profit et me challenger intellectuellement pour créer un code propre, efficace et adapté aux besoins spécifiques de l'entreprise Spurgin.",
    },
    stack: ['Vue.js', 'Nest.js', 'Docker', 'Git', 'Jira'],
  },
  {
    id: 'scalian',
    company: 'Scalian',
    location: 'Bordeaux',
    periodStart: '2024',
    periodEnd: '2025',
    title: 'Développeur Full-Stack - React | Express.js',
    shortDescription: "Update de l'interface de l'app City Zen.",
    fullDescription: {
      intro: "J'ai intégré les équipes de Scalian, une ESN, pour une courte mais intensive période. L'objectif était de mettre à jour une application pour le compte de l'auto-école CityZen, l'un de leurs clients.",
      responsibilities: [
        "Mettre l'application à jour pour qu'elle réponde aux normes RGPD.",
        "Résolution des bugs détectés, notamment pour la prise de rendez-vous entre élèves et moniteurs.",
      ],
      conclusion: "Cette mission m'a permis de mettre en pratique mes acquis tout en découvrant les normes RGPD. De plus, le délai de la mission était court, et la demande était claire. Il m'a donc fallu me retrousser les manches et redoubler d'efforts afin de livrer dans les délais imposés. J'ai également découvert le monde des ESN.",
    },
    stack: ['React', 'Express.js', 'Docker', 'Git', 'Jira'],
  },
  {
    id: 'kbrw',
    company: 'KBRW',
    location: 'Paris',
    periodStart: '2023',
    periodEnd: '2024',
    title: 'Développeur Full-Stack - React | Express.js',
    shortDescription: "Développement d'un Order Management System (OMS) pour le groupe CoraFR.",
    fullDescription: {
      intro: "En tant que développeur Full-Stack chez KBRW, j'ai eu la chance de développer un système de gestion de commandes et de stock (OMS) pour le compte d'un gros groupe, Cora France. Cette mission m'a permis de mettre à profit mes compétences en React et Node.js, mais également d'apprendre une nouvelle stack technique, Elixir & Riak, afin de répondre aux besoins spécifiques de l'entreprise dans le domaine de la Supply Chain.",
      responsibilities: [
        "Création des maquettes sur Webflow et intégration dans l'OMS.",
        "Ajout des différentes fonctionnalités des templates intégrés, tels que la pagination, les systèmes de filtre complexes, etc.",
        "Création de systèmes d'automatisation de traitement de données pour synchroniser les différents outils et flux de données du groupe Cora France.",
        "Liaison avec les équipes de Cora pour faire des comptes rendus sur l'avancement du projet, répondre à leurs questions et inquiétudes.",
        "Code review.",
        "Chargé des tests unitaires et fonctionnels, ainsi que de la mise en production via les outils de l'entreprise.",
      ],
      conclusion: "Dans ce poste, j'ai acquis de nouvelles compétences en Elixir et Riak, ainsi qu'une compréhension approfondie de la Supply Chain. J'ai également amélioré mes compétences en React et Node.js en développant des systèmes d'automatisation de traitement de données et en ajoutant les différentes fonctionnalités des templates. De plus, j'ai pu faire l'expérience enrichissante de travailler pour un gros groupe tel que Cora France. Mon travail a abouti à la mise en place d'un système efficace de gestion de commandes pour l'entreprise, ce qui a contribué à son succès dans le domaine de la Supply Chain.",
    },
    stack: ['React', 'Express.js', 'Elixir', 'Riak', 'Docker', 'Git', 'Jira'],
  },
  {
    id: 'credo',
    company: 'Credo',
    location: 'Mulhouse',
    periodStart: '2022',
    periodEnd: '2023',
    title: 'Développeur Full-Stack - Angular | NestJS',
    shortDescription: "Développement d'une interface pour visualiser les catastrophes naturelles survenus dans le Grand Est.",
    fullDescription: {
      intro: "J'ai rejoint l'équipe de développeurs de la collectivité mulhousienne Credo pour travailler sur un projet visant à développer une carte interactive recensant l'ensemble des catastrophes naturelles survenues dans le Grand Est, comme des inondations, des tremblements de terre, etc. Mon rôle principal a été de concevoir et de développer cette carte, ainsi qu'un système complexe de filtrage pour permettre des recherches ciblées sur les différents événements. J'ai également eu l'opportunité de développer un blog et une interface d'administration pour gérer à la fois le blog et la carte.",
      responsibilities: [
        "Conception et développement de la carte interactive pour recenser les catastrophes naturelles survenues dans le Grand Est.",
        "Mise en place d'un système de filtrage complexe pour permettre des recherches ciblées sur les différents événements.",
        "Développement d'un blog et d'une interface d'administration pour gérer le blog et la carte.",
        "Utilisation de mes compétences en Angular et Node.js pour développer les deux interfaces.",
        "Collaboration avec les membres de l'équipe pour assurer l'intégration efficace des différentes fonctionnalités dans le projet global.",
      ],
      conclusion: "En travaillant pour la collectivité mulhousienne Credo, j'ai eu l'occasion de développer mes compétences en Angular et Node.js en concevant une carte interactive qui recense les catastrophes naturelles survenues dans le Grand Est, ainsi qu'un système complexe de filtrage pour permettre des recherches ciblées. J'ai également développé un blog et une interface d'administration pour gérer le blog et la carte. Ce poste m'a permis de contribuer à un projet important pour la collectivité et de développer mes compétences en matière de conception et de développement d'interfaces utilisateur interactives.",
    },
    stack: ['Angular', 'Nest.js', 'Docker', 'Git', 'Jira'],
  },
  {
    id: 'facilien',
    company: 'Facilien',
    location: 'Mulhouse',
    periodStart: '2021',
    periodEnd: '2022',
    title: 'Développeur Full-Stack - React | Express.js',
    shortDescription: "Développement d'une solution de mise en relation employeur / demandeur d'emploi.",
    fullDescription: {
      intro: "J'ai travaillé en tant que développeur Full-Stack pour la collectivité mulhousienne Facilien, qui souhaitait améliorer le processus de recrutement dans le secteur de la boulangerie. J'ai intégré une équipe de trois développeurs avec laquelle nous avons collaboré via la méthode Agile.",
      responsibilities: [
        "Développement d'une interface pour les demandeurs d'emploi du secteur de la boulangerie, permettant aux utilisateurs de créer un compte, de se connecter de façon sécurisée, et de créer ou modifier leur profil. J'ai également développé un système de chargement de fichiers pour les CV, en étroite collaboration avec un UI/UX designer pour offrir la meilleure expérience utilisateur possible.",
        "Développement d'une seconde interface pour les employeurs potentiels, incluant un système de connexion et d'inscription, la création de profils, ainsi que la possibilité pour les utilisateurs de poster des offres et de visualiser les profils des candidats.",
      ],
      conclusion: "Grâce à ce poste, j'ai pu participer à la création de deux interfaces destinées à faciliter le recrutement dans le secteur de la boulangerie. J'ai eu la responsabilité de développer des fonctionnalités importantes, telles que le système de chargement de fichiers pour les CV et la création de profils pour les employeurs et les demandeurs d'emploi. J'ai également acquis une expérience précieuse en travaillant avec une équipe de développeurs via la méthode Agile, ainsi qu'en collaborant étroitement avec un UI/UX designer pour offrir la meilleure expérience utilisateur possible.",
    },
    stack: ['React', 'Express.js', 'Docker', 'Git', 'Jira'],
  },
  {
    id: 'spinaliDesign',
    company: 'Spinali Design',
    location: 'Mulhouse',
    periodStart: '2020',
    periodEnd: '2021',
    title: 'Développeur Android/iOS - Ionic/Angular | Express.js',
    shortDescription: "Développement d'une application mobile pour suivre la progression de la désinfection de ses gants connectés.",
    fullDescription: {
      intro: "En tant que développeur Full-Stack chez Spinali Design, j'ai été chargé d'ajouter un nouvel onglet à leur application. Cet onglet a pour but d'avertir l'utilisateur lorsque ses gants ont été désinfectés, dans un contexte de COVID-19. Les gants sont désinfectés grâce à une solution chimique présente sur ceux-ci : au contact des UV du soleil, dont la valeur est récupérée par une puce intégrée, ce processus est activé.",
      responsibilities: [
        "Reprendre le contrôle sur les puces préalablement utilisées pour d'autres produits connectés de l'entreprise, en utilisant mes compétences sur Linux et en apprenant davantage sur le protocole Bluetooth.",
        "Travailler en étroite collaboration avec une chimiste pour comprendre le processus de désinfection des gants connectés grâce à une solution chimique et aux UV du soleil.",
        "Développer une interface en Python pour tester la puce en simulant les mouvements de l'utilisateur et en faisant fluctuer les valeurs UV récupérées par la puce.",
        "Transcoder mon travail sur l'application Spinali Design en suivant une maquette, en utilisant mes compétences en Ionic, Angular et Node.js.",
      ],
      conclusion: "Cette expérience professionnelle m'a permis de développer mes compétences en développement logiciel, en particulier en ce qui concerne la programmation sur des systèmes embarqués et l'utilisation de protocoles de communication sans fil tels que Bluetooth. J'ai également appris à travailler en étroite collaboration avec des professionnels d'autres domaines, en particulier des scientifiques et des ingénieurs chimistes, pour atteindre les objectifs fixés par l'entreprise. Enfin, j'ai eu l'occasion de travailler sur un projet innovant et utile dans le contexte de la pandémie de COVID-19, ce qui m'a permis de contribuer à la lutte contre la propagation du virus.",
    },
    stack: ['Ionic', 'Angular', 'Express.js', 'Python', 'Bluetooth', 'Docker', 'Git', 'Jira'],
  },
];