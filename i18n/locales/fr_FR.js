export default {
  login: {
    pageTitle: 'Connexion',
    credentials: {
      email: 'Identifiez-vous avec votre Email',
      password: 'Mot de passe',
    },
    register: {
      createAccount: 'Créer un compte',
      forgottenPassword: 'Mot de passe oublié ?',
      resetPassword: 'Réinitialiser mon mot de passe',
    },
  },
  tou: {
    warning:
      'En créant mon compte, j’accepte les conditions générales d’utilisation suivantes :',
    title: 'Conditions générales d’utilisation',
    content: {
      section1: 'titre section 1',
    },
  },
  actionsBar: {
    home: 'Accueil',
    profile: 'Profil',
    matcher: 'Matcher',
    explore: 'Découvrir',
    likes: 'Likes',
    messages: 'Messages',
  },
  home: {
    pageTitle: 'Accueil',
    profileStatus: {
      label: 'Statut de ton profil',
      emailValidationWarning: 'Ton e-mail n’a pas encore été validé.',
      activationWarning: 'Ton profil est actuellement en pause.',
      photosWarning:
        'Ton profil doit avoir au minimum 2 photos pour être actif et visible.',
      noWarnings: 'Ton profil est complet et actif.',
    },
  },
  explore: {
    pageTitle: 'Découvrir',
    noResults1: 'Aucun profil dans les alentours pour le moment ...',
    noResults2: 'Et si on élargissait les critères de recherche ?',
    initialMessage: {
      modalTitle: 'Envoyer un premier message ?',
      modalExplanation:
        'Afin de te démarquer, tu peux accompagner ton Like d’un message. Qu’est-ce qui t’a attiré dans ce profil ?',
      fieldLabel: 'Message',
    },
  },
  profileToBrowse: {
    age: '{age} ans',
    size: '{size} cm',
    livesIn: 'Habite à : {city}',
    lastActivity: 'Actif {activity}',
    distance: 'A {distance} km',
    closeDistance: 'A moins d’un km',
    bio1: 'Je souhaitais te dire cela à propos de moi (Ce champ était obligatoire) :',
    bio2: 'Laisse moi me présenter succintement (statut: non lu) :',
    bio3: 'Voilà ma meilleure description (non générée par IA, promis) :',
    bio4: 'Si je devais me présenter (on m’a obligé) :',
    bio5: 'En toute objectivité, mes qualités sont (source: ma famille) :',
  },
  likes: {
    pageTitle: 'Likes',
    noResults1: 'Aucun like pour le moment ...',
    noResults2:
      'Assure toi que ton profil comporte tes meilleurs photos ! C’est de loin l’atout le plus important d’un bon profil !',
  },
  profile: {
    pageTitle: 'Mon profil',
    toComplete: 'La description de ton profil est incomplète',
    infos: {
      tabTitle: 'Général',
      job: 'Mon métier',
      username: 'Mon pseudonyme affiché',
      bio: 'Ma description',
      city: 'Ma ville de résidence',
      education: 'Mon niveau d’éducation',
      notCompleted: 'Non renseigné',
    },
    enums: {
      education: {
        NOT_AVAILABLE: 'Je préfère garder cela privé',
        HIGH_SCHOOL: 'Baccalauréat',
        BACHELOR: 'Licence',
        MASTER: 'Master',
        PHD: 'Doctorat',
      },
    },
  },
  detail: {
    tabTitle: 'Détails',
    description: {
      sex: 'Je suis un(e)',
      orientation: 'Mon orientation',
      age: 'Mon âge',
      size: 'Ma taille (cm)',
      relationshipGoal: 'Le type de relation recherché',
      childrenSituation: 'Ma situation actuelle concernant les enfants',
      alcoholConsumption: 'Ma consommation d’alcool',
      smokingSituation: 'Suis-je fumeur ?',
      ethnicity: 'Je suis principalement d’origine',
      politicalView: 'Mon point de vue sur la politique',
      fitness: 'Mon niveau sportif',
      religion: 'Ma foi',
    },
    enums: {
      alcoholConsumption: {
        NOT_AVAILABLE: 'Je préfère garder cela privé',
        NEVER: 'Jamais',
        SOMETIMES: 'Occasionnellement',
        REGULARLY: 'Régulièrement',
      },
      childrenSituation: {
        NOT_AVAILABLE: 'Je préfère garder cela privé',
        ZERO_DO_NOT_WANT: 'Pas d’enfant et ne souhaite pas en avoir',
        ZERO_WANT: 'Pas d’enfant mais souhaite en avoir',
        HAVE_WANT_MORE: 'Un ou plusieurs enfants et en souhaite plus',
        HAVE_DO_NOT_WANT_MORE:
          'Un ou plusieurs enfants et n’en souhaite pas plus',
      },
      ethnicity: {
        NOT_AVAILABLE: 'Je préfère garder cela privé',
        OCEANIAN: 'Océanienne',
        ASIAN: 'Asiatique',
        EUROPEAN: 'Européenne',
        MIDDLE_EASTERN: 'Orientale',
        AFRICAN: 'Africaine',
        LATIN: 'Latine',
      },
      fitness: {
        NOT_AVAILABLE: 'Je préfère garder cela privé',
        SEDENTARY: 'Sédentaire',
        ATHLETE: 'Athlétique',
        ACTIVE: 'Actif',
      },
      politicalView: {
        NOT_AVAILABLE: 'Je préfère garder cela privé',
        LEFT: 'Gauche',
        MODERATE: 'Centre',
        RIGHT: 'Droite',
        LIBERTARIAN: 'Libertarien',
        APOLITICAL: 'Apolitique',
        OTHER: 'Autre',
      },
      relationshipGoal: {
        NOT_AVAILABLE: 'Je préfère garder cela privé',
        NOT_SERIOUS: 'Rien de sérieux',
        SHORT_TERM: 'Court terme',
        LONG_TERM: 'Long terme',
        MARRIAGE: 'Mariage',
        FRIENDSHIP: 'Amitié',
      },
      religion: {
        NOT_AVAILABLE: 'Je préfère garder cela privé',
        CHRISTIAN: 'Chrétien',
        MUSLIM: 'Musulman',
        JEWISH: 'Juif',
        HINDU: 'Hindou',
        SPIRITUAL: 'Spirituel',
        ATHEIST: 'Athéiste',
        AGNOSTIC: 'Agnostique',
        OTHER: 'Autre',
      },
      sex: {
        M: 'Homme',
        F: 'Femme',
        NOT_AVAILABLE: 'A compléter',
      },
      orientation: {
        NOT_AVAILABLE: 'Je préfère garder cela privé',
        HETEROSEXUAL: 'Heterosexuelle',
        HOMOSEXUAL: 'Homosexuelle',
        BISEXUAL: 'Bisexuelle',
      },
      smokingSituation: {
        NOT_AVAILABLE: 'Je préfère garder cela privé',
        NEVER: 'Jamais',
        SOMETIMES: 'Occasionnellement',
        REGULARLY: 'Régulièrement',
      },
    },
  },
  matcher: {
    pageTitle: 'Mon Matcher',
    subtitle: 'Mes préférences chez un partenaire:',
    description: {
      age: 'Son âge',
      orientation: 'Son orientation',
      ageInterval: 'Entre {minAge} et {maxAge} ans',
      distance: 'Se situe à moins de',
      distanceValue: '{maxDistance} km',
      relationshipGoal: 'Recherchant ce type de relation ',
      childrenSituation: 'Sa situation actuelle concernant les enfants',
      alcoholConsumption: 'Sa consommation d’alcool',
      smokingSituation: 'Sa consommation de tabac',
      ethnicity: 'Principalement d’origine',
      politicalView: 'Se considérant politiquement comme',
      fitness: 'Avec un style de vie',
      religion: 'De confession',
    },
    enums: {
      alcoholConsumption: {
        NOT_AVAILABLE: 'Non renseigné',
        NEVER: 'Jamais',
        SOMETIMES: 'Occasionnellement',
        REGULARLY: 'Régulièrement',
      },
      childrenSituation: {
        NOT_AVAILABLE: 'Non renseigné',
        ZERO_DO_NOT_WANT: 'Pas d’enfant et n’en souhaite pas',
        ZERO_WANT: 'Pas d’enfant mais en souhaite',
        HAVE_WANT_MORE: 'Un ou plusieurs enfants et en souhaite plus',
        HAVE_DO_NOT_WANT_MORE:
          'Un ou plusieurs enfants et n’en souhaite pas plus',
      },
      ethnicity: {
        NOT_AVAILABLE: 'Non renseigné',
        OCEANIAN: 'Océanienne',
        ASIAN: 'Asiatique',
        EUROPEAN: 'Européenne',
        MIDDLE_EASTERN: 'Orientale',
        AFRICAN: 'Africaine',
        LATIN: 'Latine',
      },
      fitness: {
        NOT_AVAILABLE: 'Non renseigné',
        SEDENTARY: 'Sédentaire',
        ATHLETE: 'Athlétique',
        ACTIVE: 'Actif',
      },
      politicalView: {
        NOT_AVAILABLE: 'Non renseigné',
        LEFT: 'Gauche',
        MODERATE: 'Centre',
        RIGHT: 'Droite',
        LIBERTARIAN: 'Libertarien',
        APOLITICAL: 'Apolitique',
        OTHER: 'Autre',
      },
      relationshipGoal: {
        NOT_AVAILABLE: 'Non renseigné',
        NOT_SERIOUS: 'Rien de sérieux',
        SHORT_TERM: 'Court terme',
        LONG_TERM: 'Long terme',
        MARRIAGE: 'Mariage',
        FRIENDSHIP: 'Amitié',
      },
      religion: {
        NOT_AVAILABLE: 'Non renseigné',
        CHRISTIAN: 'Chrétien',
        MUSLIM: 'Musulman',
        JEWISH: 'Juif',
        HINDU: 'Hindou',
        SPIRITUAL: 'Spirituel',
        ATHEIST: 'Athéiste',
        AGNOSTIC: 'Agnostique',
        OTHER: 'Autre',
      },
      orientation: {
        NOT_AVAILABLE: 'Non renseigné',
        HETEROSEXUAL: 'Heterosexuelle',
        HOMOSEXUAL: 'Homosexuelle',
        BISEXUAL: 'Bisexuelle',
      },
      smokingSituation: {
        NOT_AVAILABLE: 'Non renseigné',
        NEVER: 'Jamais',
        SOMETIMES: 'Occasionnellement',
        REGULARLY: 'Régulièrement',
      },
    },
  },
  photos: {
    pageTitle: 'Gestion des mes photos',
    warning: 'Ton profil doit avoir une photo au minimum',
    manageDescription:
      'Des photos de bonne qualité te mettant en valeur sont l’atout principal d’un bon profil',
    card: {
      placeholder1: 'Ta meilleure photo en cadrage serré ?',
      placeholder2: 'Une photo plan large serait idéale ici',
      placeholder3: 'Partage un souvenir en groupe ou durant un événement',
      placeholder4: 'Toi pratiquant ta passion ou ton sport favori',
      placeholder5: '',
      placeholder6: '',
    },
    deletion: {
      modalTitle: 'Suppression d’une photo',
      modalExplanation: 'Es-tu certain de vouloir supprimer cette photo ?',
    },
  },
  register: {
    pageTitle: 'Créer un compte',
    username: 'Nom d’utilisateur, vu par les autres profils',
    email: 'Email, l’identifiant du compte',
    password: 'Mot de passe',
    confirmPassword: 'Confirmation du mot de passe',
    canNotBeChangeLater: 'Cette donnée ne sera pas modifiable plus tard',
    confirmation: {
      title: 'Ton compte a été créé avec succès !',
      description1:
        'Un mail de confirmation a été envoyé afin d’activer ton compte.',
      description2:
        'Une fois ton compte activé, connecte-toi pour mettre à jour ton profil et tes photos puis découvre sans plus tarder les profils aux alentours !',
      description3:
        'Afin d’affiner tes recherches, n’hésite pas à personnaliser les critères de ton Matcher !',
      description4:
        'Adrestia te remercie de ta confiance et espère répondre au mieux à tes attentes !',
    },
    error:
      'An error occured, your account has not been created. Please try again.',
  },
  settings: {
    pageTitle: 'Paramètres',
    logoutLabel: 'Déconnexion',
    logoutConfirmation:
      'Confirmes-tu vouloir te déconnecter ? Tu devras te réauthentifier lors de ta prochaine utilisation.',
  },
  stats: {
    pageTitle: 'Statistiques',
    joiningDate: 'Date de création de mon profil',
    periodLabel: 'Mes statistiques sur la période suivante',
    receivedLikes: 'Likes reçus',
    givenLikes: 'Likes envoyés',
    receivedDislikes: 'Dislikes reçus',
    givenDislikes: 'Dislikes envoyés',
    periodEnum: {
      YEAR: 'Cette année',
      SEMESTER: 'Ces 6 derniers mois',
      TRIMESTER: 'Ces 3 derniers mois',
      MONTH: 'Ce mois-ci',
      HALFMONTH: 'Ces 2 dernières semaines',
      WEEK: 'Cette semaine',
      DAY: 'Aujourd’hui',
    },
  },
  state: {
    pageTitle: 'Mettre mon profil en pause',
    periodLabel: 'Mettre mon profil en pause pour la période suivante',
    mainExplanation:
      'Mettre ton profil en pause signifie que celui-ci sera désactivé pour la période de ton choix (au minimum une semaine) à compter d’aujourd’hui.',
    explanation1:
      'Ton profil ne sera plus visible par les autres utilisateurs durant cette période.',
    explanation2:
      'Tu ne pourras plus interagir avec les autres profils, que ce soit par likes ou messages.',
    explanation3: 'Tes likes et matchs actuels seront conservés.',
    explanation4:
      'La date de fin de ton abonnement sera reportée de la période choisie.',
    explanation5:
      'Ton profil sera automatiquement réactivé au terme de la période choisie.',
    explanation6:
      'Tu pourras préalablement réactiver ton profil via cette page, passée une semaine.',
    periodEnum: {
      WEEK: '7 jours',
      TWO_WEEKS: '14 jours',
      THREE_WEEKS: '21 jours',
      MONTH: '30 jours',
    },
    pauseConfirmation:
      'Confirmes-tu vouloir mettre en pause ton profil pendant {period} jours ?',
  },
  updatePassword: {
    pageTitle: 'Modifier mon mot de passe',
    success: 'Ton mot de passe a été modifié avec succès !',
    error: 'La modification de ton mot de passe a échoué.',
  },
  resetPassword: {
    pageTitle: 'Réinitialiser mon mot de passe',
    intro:
      'Afin de pouvoir réinitialiser ton mot de passe en cas d’oubli, tu dois préalablement avoir créer tes questions/réponses secrètes pour ton compte.',
    resetError:
      'Une erreur s’est produite durant le processus de réinitialisation',
    result: 'Votre mot de passe a bien été réinitialisé.',
    result2:
      'Un mail contenant le nouveau de passe sécurisé vous a été envoyé.',
    result3:
      'Vous pouvez choisir de conserver ce dernier ou bien de le modifier via les paramètres de votre compte à votre prochaine authentification.',
  },
  validateEmail: {
    pageTitle: 'Confirmer mon adresse mail',
    explanation:
      'Afin de confirmer ton adresse mail, saisis le code à 6 caractères que tu as reçu par mail lors de la création de ton compte :',
    code: 'Code de validation',
    notReceived:
      'Tu n’as pas reçu le mail contenant le code de validation (y compris dans le dossier spam) ?',
    validationSuccess: 'Ton e-mail a été validé avec succès !',
    validationFailure: 'La validation de ton e-mail a échoué.',
    resendEmailSuccess:
      'Un mail contenant le code de validation vient de t’être renvoyé.',
    resendEmailFailure:
      'L’envoi du mail contenant le code de validation a échoué.',
  },
  subscription: {
    pageTitle: 'Ton abonnement',
    statusLabel: 'Statut de ton abonnement',
    expiredSubscription:
      'Ton abonnement est expiré depuis {date}.<br>Souhaiterais-tu le renouveler ?',
    subscribedUntil:
      'Ton abonnement se termine le {date}.<br>Souhaiterais-tu le prolonger ?',
    notSubscribed:
      'Aucun abonnement actif.<br>Souhaiterais-tu utiliser pleinement l’application ?',
    description: 'Un abonnement te permettra de :',
    description2: 'Débloquer et accéder à chacun de tes likes reçus',
    description3: 'Désactiver les publicités sur l’application',
  },
  matches: {
    pageTitle: 'Mes matches prioritaires',
    warning:
      'Un match n’est pas anodin sur cette application. Afin de garantir la meilleure expérience, seuls tes {count} premiers matches sont visibles. Découvres-en davantage sur chacun d’entre eux, ou supprime les si il n’y a malheureusement pas d’intérêt mutuel',
  },
  match: {
    deletionModalTitle: 'Supprimer ou bloquer le Match',
    deletionModalExplanation:
      'Es-tu sûr(e) de vouloir supprimer ou bloquer ce Match ? Le bloquer signifie que tu ne pourras plus ni voir ni matcher ce profil à l’avenir.',
  },
  message: {
    deletedMessageLabel: 'Message supprimé',
    deletionModalTitle: 'Suppression d’un message',
    deletionModalExplanation: 'Es-tu sûr(e) de vouloir supprimer ce message ?',
    errors: {
      add: 'L’envoi du message a échoué',
      update: 'L’édition du message a échoué',
      delete: 'La suppression du message a échoué',
    },
  },
  actions: {
    terminate: 'Terminer',
    validate: 'Valider',
    previous: 'Précédent',
    next: 'Suivant',
    modify: 'Modifier',
    select: 'Sélectionner',
    delete: 'Supprimer',
    login: 'Me connecter',
    cancel: 'Annuler',
    back: 'Retour',
    like: 'J’aime',
    dislike: 'Je n’aime pas',
    rewind: 'Revoir',
    changeCriteria: 'Modifier mon Matcher',
    managePhotos: 'Mes photos',
    logout: 'Se déconnecter',
    deactivate: 'Mettre en pause mon profil',
    reactivate: 'Réactiver mon profil',
    resendEmail: 'Renvoyer le mail',
    retry: 'Réessayer',
    accept: 'Accepter',
    refuse: 'Refuser',
  },
  errors: {
    usernameContainsWhitespaces: 'L’identifiant ne doit pas contenir d’espaces',
    usernameFirstCharacterMustBeALetter:
      'Le premier caractère doit être une lettre',
    mandatoryField: 'Ce champ est obligatoire',
    invalidCharacter: 'Ce champ contient un caractère invalide',
    mustNotContainANumber: 'Ce champ ne doit pas contenir de chiffre',
    minLength: 'Ce champ doit contenir au minimum {limit} caractères',
    maxLength: '{limit} caractères au maximum sont autorisés pour ce champ',
    email: {
      invalid: 'Adresse e-mail invalide',
      alreadyUsed: 'Cette adresse e-mail est déjà utilisée',
      matching: 'L’ adresse e-mail et sa confirmation sont différentes',
      sameAsOld: 'Ta nouvelle adresse e-mail est identique à ton ancienne',
    },
    password: {
      incorrect: 'Le mot de passe est incorrect',
      matching: 'Le mot de passe et sa confirmation sont différents',
      minLength: 'Le mot de passe doit faire {limit} caractères au minimum',
      lowercaseLetter: 'Le mot de passe doit contenir au moins une minuscule',
      uppercaseLetter: 'Le mot de passe doit contenir au moins une majuscule',
      number: 'Le mot de passe doit contenir au moins un chiffre',
      specialCharacter:
        'Le mot de passe doit contenir au moins un caractère spécial',
    },
    passwordHints: {
      description: 'Le mot de passe doit contenir : ',
      length: '9 caractères au minimum',
      uppercase: 'au moins 1 majuscule',
      lowercase: 'au moins 1 minuscule',
      number: 'au moins 1 chiffre',
      special: 'au moins 1 caractère spécial',
    },
  },
}
