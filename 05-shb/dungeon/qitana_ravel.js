Options.Triggers.push({
  zoneId: ZoneId.TheQitanaRavel,
  timelineFile: 'qitana_ravel.txt',
  triggers: [
    {
      id: 'Qitana Stonefist',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3C89', source: 'Lozatl' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Qitana Scorn',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3C8B', source: 'Lozatl', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Qitana Eerie Pillar',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3C8B', source: 'Lozatl', capture: false }),
      delaySeconds: 5,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Look for pillar',
          de: 'Auf die Pfeiler schauen',
          fr: 'Cherchez les piliers',
          ja: '光った像を避ける',
          cn: '躲开发光石像的半场',
          ko: '빛나는 기둥 위치확인',
        },
      },
    },
    {
      id: 'Qitana Heat Up Right',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3C8D', source: 'Lozatl', capture: false }),
      delaySeconds: 6,
      durationSeconds: 6,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Stay on left flank',
          de: 'Auf seiner linken Seite stehen',
          fr: 'Restez sur le flanc gauche',
          ja: 'ボスの左側へ',
          cn: 'Boss左边躲避',
          ko: '보스 왼쪽 측면으로',
        },
      },
    },
    {
      id: 'Qitana Heat Up Left',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3C8E', source: 'Lozatl', capture: false }),
      delaySeconds: 6,
      durationSeconds: 6,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Stay on right flank',
          de: 'Auf seiner rechten Seite stehen',
          fr: 'Restez sur le flanc droit',
          ja: 'ボスの右側へ',
          cn: 'Boss右边躲避',
          ko: '보스 오른쪽 측면으로',
        },
      },
    },
    {
      id: 'Qitana Ripper Fang',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3C91', source: 'Batsquatch' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Qitana Soundwave',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3C92', source: 'Batsquatch', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Qitana Subsonics',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3C93', source: 'Batsquatch', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Qitana Rend',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3C99', source: 'Eros' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Qitana Glossolalia',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3C9B', source: 'Eros', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Qitana Hound Tether',
      type: 'Tether',
      netRegex: NetRegexes.tether({ id: '0039', source: 'Eros' }),
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Run Away From Boss',
          de: 'Renn weg vom Boss',
          fr: 'Courez loin du boss',
          ja: 'ボスから離れる',
          cn: '远离Boss',
          ko: '보스와 거리 벌리기',
        },
      },
    },
    {
      id: 'Qitana Viper Poison',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '00AB' }),
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Drop Poison Outside',
          de: 'Gift am Rand ablegen',
          fr: 'Déposez le poison à l\'extérieur',
          ja: '外周に捨てる',
          cn: '远处放毒',
          ko: '독 장판을 바깥 쪽에 버리기',
        },
      },
    },
    {
      id: 'Qitana Confession of Faith Stack',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '003E' }),
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Qitana Confession of Faith Spread',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3CA1', source: 'Eros', capture: false }),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Spread to Sides',
          de: 'Auf die Seiten verteilen',
          fr: 'Dispersez-vous sur les côtés',
          ja: '横に散開',
          cn: '两侧分散',
          ko: '좌우 측면으로 산개',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Batsquatch': 'Fledersquatch',
        'Eros': 'Eros',
        'Lozatl': 'Lozatl',
        'The Divine Threshold': 'Götterpforte',
        'Shadowed Hollow': 'Bildnishalle',
        'The Song of Ox\'Gatorl': 'Altar des Ox\'Gatorl',
      },
      'replaceText': {
        'Confession Of Faith': 'Glaubensbekenntnis',
        'Glossolalia': 'Glossolalie',
        'Heat Up': 'Erhitzung',
        'Heaving Breath': 'Wogender Atem',
        'Hound Out Of Heaven': 'Himmelsangriff',
        'Inhale': 'Einsaugen',
        'Jump': 'Sprung',
        'Lozatl\'s Fury': 'Lozatls Wut',
        'Lozatl\'s Scorn': 'Lozatls Hohn',
        'Rend': 'Zerreißen',
        'Ripper Fang': 'Fetzzahn',
        'Ronkan Light': 'Licht Ronkas/Ronkalicht',
        'Soundwave': 'Schallwelle',
        'Stonefist': 'Steinfaust',
        'Subsonics': 'Unterschall',
        'Sun Toss': 'Projektion',
        'Towerfall': 'Turmsturz',
        'Viper Poison': 'Viperngift',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Batsquatch': 'Batsquatch',
        'Eros': 'Éros',
        'Lozatl': 'Lozatl',
        'Shadowed Hollow': 'la Cavité ombragée',
        'The Divine Threshold': 'la Porte divine',
        'The Song of Ox\'Gatorl': 'l\'Autel d\'Ox\'Gatorl',
      },
      'replaceText': {
        'Confession Of Faith': 'Confession de foi',
        'Glossolalia': 'Glossolalie',
        'Heat Up': 'Incandescence',
        'Heaving Breath': 'Souffle nauséeux',
        'Hound Out Of Heaven': 'Charge céleste',
        'Inhale': 'Aspiration',
        'Jump': 'Saut',
        'Lozatl\'s Fury': 'Furie de Lozatl',
        'Lozatl\'s Scorn': 'Injure de Lozatl',
        'Rend': 'Déchiquètement',
        'Ripper Fang': 'Croc éventreur',
        'Ronkan Light': 'Lumière ronka',
        'Soundwave': 'Onde sonore',
        'Stonefist': 'Poing rocheux',
        'Subsonics': 'Attaque subsonique',
        'Sun Toss': 'Émission lumineuse',
        'Towerfall': 'Écroulement',
        'Viper Poison': 'Toxine de vipère',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Batsquatch': 'バッツカッチ',
        'Eros': 'エロース',
        'Lozatl': 'ロツァトル',
        'Shadowed Hollow': '神影写しの虚',
        'The Divine Threshold': '神前の石扉',
        'The Song of Ox\'Gatorl': 'ガトル神の祭壇',
      },
      'replaceText': {
        'Confession Of Faith': 'コンフェッション・オブ・フェイス',
        'Glossolalia': 'グロソラリア',
        'Heat Up': '赤熱化',
        'Heaving Breath': 'ヒーヴィングブレス',
        'Hound Out Of Heaven': 'ヘヴンスチャージ',
        'Inhale': '吸引',
        'Jump': 'ジャンプ',
        'Lozatl\'s Fury': 'ロツァトルの憤怒',
        'Lozatl\'s Scorn': 'ロツァトルの罵声',
        'Rend': '引き裂き',
        'Ripper Fang': 'リッパーファング',
        'Ronkan Light': 'ロンカの光',
        'Soundwave': 'サウンドウェーブ',
        'Stonefist': '石の拳',
        'Subsonics': 'サブソニクス',
        'Sun Toss': '投射',
        'Towerfall': '倒壊',
        'Viper Poison': 'バイパーポイズン',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Batsquatch': '배츠콰치',
        'Eros': '에로스',
        'Lozatl': '로차틀',
        'The Divine Threshold': '신에게 가는 문',
        'Shadowed Hollow': '신 그림자 공터',
        'The Song of Ox\'Gatorl': '가톨 신의 제단',
      },
      'replaceText': {
        'Confession Of Faith': '신앙 고백',
        'Glossolalia': '방언',
        'Heat Up': '적열화',
        'Heaving Breath': '내쉬는 숨결',
        'Hound Out Of Heaven': '천상의 돌진',
        'Inhale': '흡인',
        'Jump': '점프',
        'Lozatl\'s Fury': '로차틀의 분노',
        'Lozatl\'s Scorn': '로차틀의 고성',
        'Rend': '잡아찢기',
        'Ripper Fang': '톱송곳니',
        'Ronkan Light': '롱카의 빛',
        'Soundwave': '소리의 파동',
        'Stonefist': '돌주먹',
        'Subsonics': '아음속',
        'Sun Toss': '투사',
        'Towerfall': '무너지는 탑',
        'Viper Poison': '독사 독',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Batsquatch': '大脚野蝠',
        'Eros': '艾洛斯',
        'Lozatl': '洛查特尔',
        'The Divine Threshold': '神前石门',
        'Shadowed Hollow': '映照神影之洞窟',
        'The Song of Ox\'Gatorl': '奥奇斯加托尔之祭坛',
      },
      'replaceText': {
        'Confession Of Faith': '信仰宣言',
        'Glossolalia': '灵语',
        'Heat Up': '赤热化',
        'Heaving Breath': '吐息',
        'Hound Out Of Heaven': '蓄力冲撞',
        'Inhale': '吸气',
        'Jump': '跳跃',
        'Lozatl\'s Fury': '洛查特尔的愤怒',
        'Lozatl\'s Scorn': '洛查特尔的骂声',
        'Rend': '撕碎',
        'Ripper Fang': '裂肉尖牙',
        'Ronkan Light': '隆卡之光',
        'Soundwave': '声波',
        'Stonefist': '石拳',
        'Subsonics': '亚音速',
        'Sun Toss': '投射石块',
        'Towerfall': '崩塌',
        'Viper Poison': '尾蛇毒',
      },
    },
  ],
});
