const { processData } = require('../../data_processing.js');

let postal_service_clerk_data = [
  {
    "age": 26,
    "region": {
      "x": 1137,
      "y": 93,
      "w": 58,
      "h": 58,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 7.037320613861084,
      "Man": 92.96267700195312
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 7.005450248718262,
      "indian": 3.8157429695129395,
      "black": 2.3954055309295654,
      "white": 36.176753997802734,
      "middle eastern": 31.216516494750977,
      "latino hispanic": 19.3901309967041
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.11000850796699524,
      "disgust": 2.984679448037042e-10,
      "fear": 0.13884757459163666,
      "happy": 0.0018029301427304745,
      "sad": 0.7536017894744873,
      "surprise": 0.009460661560297012,
      "neutral": 98.98628234863281
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 24,
    "region": {
      "x": 222,
      "y": 59,
      "w": 59,
      "h": 59,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.96,
    "gender": {
      "Woman": 13.071205139160156,
      "Man": 86.92879486083984
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.5667659044265747,
      "indian": 0.7340047359466553,
      "black": 0.17722822725772858,
      "white": 84.67427825927734,
      "middle eastern": 8.191076278686523,
      "latino hispanic": 5.656644344329834
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.06998265534639359,
      "disgust": 3.3897336493282637e-07,
      "fear": 0.0029163763392716646,
      "happy": 3.8505125045776367,
      "sad": 12.19809341430664,
      "surprise": 1.1278732472419506e-06,
      "neutral": 83.87849426269531
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 24,
    "region": {
      "x": 757,
      "y": 80,
      "w": 63,
      "h": 63,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 3.6591501235961914,
      "Man": 96.34085083007812
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.08856761455535889,
      "indian": 3.452695846557617,
      "black": 1.261044979095459,
      "white": 43.6948356628418,
      "middle eastern": 47.131195068359375,
      "latino hispanic": 4.371664047241211
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 0.08316035568714142,
      "disgust": 1.0973620449827859e-11,
      "fear": 0.002212095307186246,
      "happy": 0.02475968562066555,
      "sad": 1.0696744918823242,
      "surprise": 1.1041167908842908e-06,
      "neutral": 98.8201904296875
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 26,
    "region": {
      "x": 388,
      "y": 96,
      "w": 61,
      "h": 61,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.97,
    "gender": {
      "Woman": 11.836362838745117,
      "Man": 88.16363525390625
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 18.3265380859375,
      "indian": 21.942153930664062,
      "black": 14.150375366210938,
      "white": 10.787874221801758,
      "middle eastern": 13.696215629577637,
      "latino hispanic": 21.096845626831055
    },
    "dominant_race": "indian",
    "emotion": {
      "angry": 0.9008470773696899,
      "disgust": 0.0005785270477645099,
      "fear": 1.7975718975067139,
      "happy": 0.0421767383813858,
      "sad": 9.556614875793457,
      "surprise": 0.002185544464737177,
      "neutral": 87.70002746582031
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 609,
      "y": 44,
      "w": 65,
      "h": 65,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.98,
    "gender": {
      "Woman": 6.099642276763916,
      "Man": 93.90036010742188
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.1552858352661133,
      "indian": 5.534801959991455,
      "black": 8.170783042907715,
      "white": 39.137107849121094,
      "middle eastern": 18.01559066772461,
      "latino hispanic": 26.986433029174805
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.009609642438590527,
      "disgust": 0.00014364141679834574,
      "fear": 5.374734878540039,
      "happy": 4.225591692375019e-05,
      "sad": 94.61146545410156,
      "surprise": 7.867177487241861e-07,
      "neutral": 0.004003981593996286
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 24,
    "region": {
      "x": 83,
      "y": 121,
      "w": 58,
      "h": 58,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.99,
    "gender": {
      "Woman": 24.686790466308594,
      "Man": 75.3132095336914
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.7859044075012207,
      "indian": 3.053179979324341,
      "black": 14.286941528320312,
      "white": 56.925743103027344,
      "middle eastern": 13.231743812561035,
      "latino hispanic": 9.71649169921875
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 6.589521408081055,
      "disgust": 4.673816000888564e-09,
      "fear": 26.5588321685791,
      "happy": 0.051736343652009964,
      "sad": 49.37594985961914,
      "surprise": 0.0022982603404670954,
      "neutral": 17.421663284301758
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 24,
    "region": {
      "x": 522,
      "y": 177,
      "w": 60,
      "h": 60,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 8.031970024108887,
      "Man": 91.96803283691406
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.913358211517334,
      "indian": 14.27303695678711,
      "black": 5.925439834594727,
      "white": 32.75419235229492,
      "middle eastern": 22.779821395874023,
      "latino hispanic": 21.354154586791992
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.9714130163192749,
      "disgust": 1.938635477927164e-06,
      "fear": 30.194721221923828,
      "happy": 0.1554480940103531,
      "sad": 29.902379989624023,
      "surprise": 0.020547816529870033,
      "neutral": 38.7554931640625
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 613,
      "y": 253,
      "w": 70,
      "h": 70,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 0.2638968229293823,
      "Man": 99.73609924316406
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 38.43598556518555,
      "indian": 11.17204761505127,
      "black": 9.06497573852539,
      "white": 11.433171272277832,
      "middle eastern": 6.642149448394775,
      "latino hispanic": 23.25166893005371
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.8888805508613586,
      "disgust": 2.5008062948472798e-05,
      "fear": 0.1621263027191162,
      "happy": 0.00421042088419199,
      "sad": 0.4935280382633209,
      "surprise": 0.0015572926495224237,
      "neutral": 98.44966888427734
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 26,
    "region": {
      "x": 905,
      "y": 159,
      "w": 66,
      "h": 66,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.99,
    "gender": {
      "Woman": 9.23565673828125,
      "Man": 90.76435089111328
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 11.7743558883667,
      "indian": 15.829310417175293,
      "black": 15.65491771697998,
      "white": 18.29926300048828,
      "middle eastern": 18.81143569946289,
      "latino hispanic": 19.630720138549805
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 0.010798433795571327,
      "disgust": 1.0302545661033946e-07,
      "fear": 0.16493172943592072,
      "happy": 16.463645935058594,
      "sad": 0.1372973620891571,
      "surprise": 0.0168417040258646,
      "neutral": 83.20648193359375
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 23,
    "region": {
      "x": 1219,
      "y": 144,
      "w": 60,
      "h": 63,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 2.8094661235809326,
      "Man": 97.1905288696289
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 32.584922790527344,
      "indian": 3.1069414615631104,
      "black": 1.4529920816421509,
      "white": 41.35353088378906,
      "middle eastern": 9.040043830871582,
      "latino hispanic": 12.461565971374512
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 34.145660400390625,
      "disgust": 0.0009473379468545318,
      "fear": 6.180850982666016,
      "happy": 0.02024051733314991,
      "sad": 18.165348052978516,
      "surprise": 0.21770091354846954,
      "neutral": 41.269256591796875
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 22,
    "region": {
      "x": 676,
      "y": 149,
      "w": 72,
      "h": 72,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 0.2643979489803314,
      "Man": 99.73560333251953
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.4356839656829834,
      "indian": 12.165982246398926,
      "black": 1.8385237455368042,
      "white": 23.59528160095215,
      "middle eastern": 44.172061920166016,
      "latino hispanic": 15.792470932006836
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 0.2773716151714325,
      "disgust": 7.096686260865681e-08,
      "fear": 0.1715109497308731,
      "happy": 0.02403835766017437,
      "sad": 3.8655388355255127,
      "surprise": 0.002142135286703706,
      "neutral": 95.6594009399414
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 62,
      "y": 191,
      "w": 80,
      "h": 80,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 2.930332899093628,
      "Man": 97.06966400146484
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 27.4486026763916,
      "indian": 8.920299530029297,
      "black": 5.781136989593506,
      "white": 34.82928466796875,
      "middle eastern": 13.959625244140625,
      "latino hispanic": 9.061047554016113
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.013946209102869034,
      "disgust": 1.5488322430146084e-11,
      "fear": 0.00010710044443840161,
      "happy": 0.002918665762990713,
      "sad": 0.1150982677936554,
      "surprise": 2.6739942882159085e-07,
      "neutral": 99.86792755126953
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 26,
    "region": {
      "x": 800,
      "y": 219,
      "w": 83,
      "h": 83,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.043728165328502655,
      "Man": 99.95626831054688
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 5.141249179840088,
      "indian": 8.728679656982422,
      "black": 1.672088384628296,
      "white": 29.237159729003906,
      "middle eastern": 32.834415435791016,
      "latino hispanic": 22.38640594482422
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 25.640356063842773,
      "disgust": 0.006645216606557369,
      "fear": 59.85736846923828,
      "happy": 0.02537441998720169,
      "sad": 12.317537307739258,
      "surprise": 0.36706337332725525,
      "neutral": 1.7856531143188477
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 23,
    "region": {
      "x": 1074,
      "y": 255,
      "w": 82,
      "h": 82,
      "left_eye": [
        1128,
        286
      ],
      "right_eye": [
        1100,
        284
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 0.0023225850891321898,
      "Man": 99.99767303466797
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.6852691769599915,
      "indian": 10.360482215881348,
      "black": 0.7684596180915833,
      "white": 20.708681106567383,
      "middle eastern": 45.464752197265625,
      "latino hispanic": 22.012351989746094
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 13.92368221282959,
      "disgust": 0.009175712242722511,
      "fear": 6.0332231521606445,
      "happy": 0.21836794912815094,
      "sad": 26.32817840576172,
      "surprise": 0.659527599811554,
      "neutral": 52.82783889770508
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 269,
      "y": 167,
      "w": 82,
      "h": 82,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 11.034313201904297,
      "Man": 88.96568298339844
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 9.090606689453125,
      "indian": 17.182960510253906,
      "black": 8.059944152832031,
      "white": 17.389156341552734,
      "middle eastern": 18.402162551879883,
      "latino hispanic": 29.875171661376953
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 0.022368649020791054,
      "disgust": 7.459387774133575e-08,
      "fear": 0.09089107066392899,
      "happy": 0.012323089875280857,
      "sad": 27.444095611572266,
      "surprise": 9.571003829478286e-06,
      "neutral": 72.43031311035156
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 28,
    "region": {
      "x": 159,
      "y": 298,
      "w": 80,
      "h": 80,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.96,
    "gender": {
      "Woman": 0.2531982958316803,
      "Man": 99.74679565429688
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.833669424057007,
      "indian": 6.7088189125061035,
      "black": 0.9225525259971619,
      "white": 32.014827728271484,
      "middle eastern": 27.975006103515625,
      "latino hispanic": 29.54513168334961
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.0031518139876425266,
      "disgust": 2.6396715924192904e-09,
      "fear": 0.2597882151603699,
      "happy": 0.17975972592830658,
      "sad": 1.8166675567626953,
      "surprise": 0.0005753245786763728,
      "neutral": 97.74005889892578
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 30,
    "region": {
      "x": 444,
      "y": 216,
      "w": 94,
      "h": 94,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 0.09639927744865417,
      "Man": 99.90361022949219
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 11.063889503479004,
      "indian": 21.152488708496094,
      "black": 34.77571487426758,
      "white": 4.9811482429504395,
      "middle eastern": 4.632269859313965,
      "latino hispanic": 23.394493103027344
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 0.017790552228689194,
      "disgust": 1.0630209601458773e-07,
      "fear": 89.94618225097656,
      "happy": 0.02197778783738613,
      "sad": 0.013020253740251064,
      "surprise": 9.615493774414062,
      "neutral": 0.3855377435684204
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 27,
    "region": {
      "x": 80,
      "y": 172,
      "w": 110,
      "h": 110,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.97,
    "gender": {
      "Woman": 0.14011919498443604,
      "Man": 99.85987854003906
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 15.43670654296875,
      "indian": 9.716562271118164,
      "black": 3.839661121368408,
      "white": 28.057037353515625,
      "middle eastern": 23.882741928100586,
      "latino hispanic": 19.06728744506836
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.05717485025525093,
      "disgust": 0.0002658669254742563,
      "fear": 74.62886810302734,
      "happy": 2.9221084117889404,
      "sad": 13.326482772827148,
      "surprise": 0.07960828393697739,
      "neutral": 8.985495567321777
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 23,
    "region": {
      "x": 952,
      "y": 297,
      "w": 100,
      "h": 100,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 0.3884246051311493,
      "Man": 99.61157989501953
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.0630950927734375,
      "indian": 9.376286506652832,
      "black": 0.871384859085083,
      "white": 25.102542877197266,
      "middle eastern": 34.247413635253906,
      "latino hispanic": 28.33928108215332
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 0.013801484368741512,
      "disgust": 6.617803194330918e-08,
      "fear": 0.008235208690166473,
      "happy": 0.0003329945611767471,
      "sad": 0.5588775277137756,
      "surprise": 0.00014070110046304762,
      "neutral": 99.41861724853516
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 730,
      "y": 326,
      "w": 107,
      "h": 107,
      "left_eye": [
        795,
        365
      ],
      "right_eye": [
        764,
        367
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.08927639573812485,
      "Man": 99.91072082519531
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 15.735389709472656,
      "indian": 7.218540668487549,
      "black": 1.371174693107605,
      "white": 8.82321548461914,
      "middle eastern": 3.5602097511291504,
      "latino hispanic": 63.291465759277344
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 0.0017391110304743052,
      "disgust": 7.604898698623797e-13,
      "fear": 0.00028825242770835757,
      "happy": 1.1363594012436806e-06,
      "sad": 0.012146874330937862,
      "surprise": 1.0693368039937923e-06,
      "neutral": 99.98582458496094
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 28,
    "region": {
      "x": 341,
      "y": 333,
      "w": 94,
      "h": 94,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 0.13423389196395874,
      "Man": 99.86576843261719
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.9722061157226562,
      "indian": 1.1865969896316528,
      "black": 0.1287200152873993,
      "white": 69.01427459716797,
      "middle eastern": 13.284565925598145,
      "latino hispanic": 15.413639068603516
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 1.6598656177520752,
      "disgust": 3.575272421585396e-05,
      "fear": 0.10326918214559555,
      "happy": 0.010966354981064796,
      "sad": 3.904949903488159,
      "surprise": 0.0032967692241072655,
      "neutral": 94.31761169433594
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 30,
    "region": {
      "x": 1158,
      "y": 342,
      "w": 97,
      "h": 97,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 0.23136179149150848,
      "Man": 99.76863861083984
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 3.251430034637451,
      "indian": 24.516878128051758,
      "black": 4.985990047454834,
      "white": 15.744775772094727,
      "middle eastern": 26.660198211669922,
      "latino hispanic": 24.840723037719727
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 0.045270051807165146,
      "disgust": 1.002043958919785e-08,
      "fear": 3.399613380432129,
      "happy": 0.00023567280732095242,
      "sad": 0.27174776792526245,
      "surprise": 0.37872910499572754,
      "neutral": 95.90441131591797
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 29,
    "region": {
      "x": 53,
      "y": 366,
      "w": 93,
      "h": 93,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.11683522909879684,
      "Man": 99.88317108154297
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 3.7825517654418945,
      "indian": 9.096134185791016,
      "black": 1.8259680271148682,
      "white": 25.658571243286133,
      "middle eastern": 27.139053344726562,
      "latino hispanic": 32.49772262573242
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 0.5825241208076477,
      "disgust": 0.00015477322449442,
      "fear": 6.958988189697266,
      "happy": 0.0053298017010092735,
      "sad": 78.50434112548828,
      "surprise": 0.0015807809541001916,
      "neutral": 13.947083473205566
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 28,
    "region": {
      "x": 535,
      "y": 382,
      "w": 99,
      "h": 99,
      "left_eye": [
        602,
        419
      ],
      "right_eye": [
        562,
        418
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 0.024958277121186256,
      "Man": 99.97504425048828
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 5.414981365203857,
      "indian": 5.738716125488281,
      "black": 1.287265419960022,
      "white": 35.17832946777344,
      "middle eastern": 26.3825740814209,
      "latino hispanic": 25.998132705688477
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 1.8535842895507812,
      "disgust": 0.007352650631219149,
      "fear": 0.22369779646396637,
      "happy": 0.019807016476988792,
      "sad": 20.02978515625,
      "surprise": 0.0008761061471886933,
      "neutral": 77.86489868164062
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 35,
    "region": {
      "x": 0,
      "y": 453,
      "w": 97,
      "h": 97,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.6804398894309998,
      "Man": 99.31956481933594
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.9713395237922668,
      "indian": 2.1601407527923584,
      "black": 0.17037957906723022,
      "white": 59.9599494934082,
      "middle eastern": 21.524919509887695,
      "latino hispanic": 15.213272094726562
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.49252110719680786,
      "disgust": 8.303860710157096e-08,
      "fear": 75.90985870361328,
      "happy": 0.26710954308509827,
      "sad": 1.6481631994247437,
      "surprise": 0.05796538293361664,
      "neutral": 21.624378204345703
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 30,
    "region": {
      "x": 268,
      "y": 469,
      "w": 102,
      "h": 102,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.5557406544685364,
      "Man": 99.44426727294922
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 34.581024169921875,
      "indian": 12.330373764038086,
      "black": 5.172069072723389,
      "white": 9.008064270019531,
      "middle eastern": 5.1162567138671875,
      "latino hispanic": 33.79220199584961
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 34.752906799316406,
      "disgust": 0.004185430705547333,
      "fear": 0.6378098130226135,
      "happy": 9.086294174194336,
      "sad": 5.314356803894043,
      "surprise": 8.392512321472168,
      "neutral": 41.81193923950195
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 26,
    "region": {
      "x": 790,
      "y": 438,
      "w": 106,
      "h": 106,
      "left_eye": [
        861,
        481
      ],
      "right_eye": [
        821,
        479
      ]
    },
    "face_confidence": 0.88,
    "gender": {
      "Woman": 0.1214132085442543,
      "Man": 99.87859344482422
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 3.542323589324951,
      "indian": 2.1520838737487793,
      "black": 0.38974377512931824,
      "white": 48.52241897583008,
      "middle eastern": 20.26640510559082,
      "latino hispanic": 25.127016067504883
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 10.926196098327637,
      "disgust": 0.08815870434045792,
      "fear": 14.511307716369629,
      "happy": 0.003444064175710082,
      "sad": 66.90956115722656,
      "surprise": 0.04824158921837807,
      "neutral": 7.513082504272461
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 25,
    "region": {
      "x": 1037,
      "y": 476,
      "w": 113,
      "h": 113,
      "left_eye": [
        1109,
        515
      ],
      "right_eye": [
        1073,
        516
      ]
    },
    "face_confidence": 0.96,
    "gender": {
      "Woman": 0.22287534177303314,
      "Man": 99.77713012695312
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 19.92729377746582,
      "indian": 32.69663619995117,
      "black": 3.9672534465789795,
      "white": 3.6467223167419434,
      "middle eastern": 3.78682279586792,
      "latino hispanic": 35.97526931762695
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 4.7657140385126695e-05,
      "disgust": 1.2285912203227351e-14,
      "fear": 0.00012410957424435765,
      "happy": 8.940257248468697e-05,
      "sad": 0.0014670665841549635,
      "surprise": 8.58321218402125e-05,
      "neutral": 99.99818420410156
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 33,
    "region": {
      "x": 511,
      "y": 506,
      "w": 110,
      "h": 110,
      "left_eye": [
        584,
        546
      ],
      "right_eye": [
        543,
        548
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 0.23357926309108734,
      "Man": 99.76641845703125
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 3.7391812801361084,
      "indian": 64.83653259277344,
      "black": 7.067322731018066,
      "white": 2.094733953475952,
      "middle eastern": 3.187283992767334,
      "latino hispanic": 19.074949264526367
    },
    "dominant_race": "indian",
    "emotion": {
      "angry": 0.15520745515823364,
      "disgust": 3.2801042380015133e-06,
      "fear": 0.01192163024097681,
      "happy": 0.0028565346729010344,
      "sad": 1.239145278930664,
      "surprise": 0.1207813024520874,
      "neutral": 98.47007751464844
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 27,
    "region": {
      "x": 755,
      "y": 575,
      "w": 118,
      "h": 118,
      "left_eye": [
        835,
        620
      ],
      "right_eye": [
        793,
        620
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 67.4201889038086,
      "Man": 32.57981491088867
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 12.335554122924805,
      "indian": 5.663301944732666,
      "black": 5.42894983291626,
      "white": 34.642974853515625,
      "middle eastern": 18.590763092041016,
      "latino hispanic": 23.338462829589844
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.5397552251815796,
      "disgust": 5.890206941985832e-13,
      "fear": 0.00026542734121903777,
      "happy": 4.725960752693936e-05,
      "sad": 0.131476491689682,
      "surprise": 1.6183568050109898e-06,
      "neutral": 99.32846069335938
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 29,
    "region": {
      "x": 1006,
      "y": 658,
      "w": 131,
      "h": 131,
      "left_eye": [
        1092,
        706
      ],
      "right_eye": [
        1046,
        705
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 99.91751098632812,
      "Man": 0.08247995376586914
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 1.1181796789169312,
      "indian": 2.1843457221984863,
      "black": 0.21611569821834564,
      "white": 52.552669525146484,
      "middle eastern": 24.353679656982422,
      "latino hispanic": 19.575014114379883
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.0024907197803258896,
      "disgust": 2.4290618405586883e-09,
      "fear": 0.004161614924669266,
      "happy": 0.005069707985967398,
      "sad": 1.405221700668335,
      "surprise": 0.0005165364709682763,
      "neutral": 98.58253479003906
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 29,
    "region": {
      "x": 25,
      "y": 698,
      "w": 127,
      "h": 127,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.96,
    "gender": {
      "Woman": 36.99070358276367,
      "Man": 63.00929260253906
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.38370805978775024,
      "indian": 0.010784103535115719,
      "black": 0.0012776290532201529,
      "white": 97.89828491210938,
      "middle eastern": 1.0427669286727905,
      "latino hispanic": 0.6631819009780884
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.05388505756855011,
      "disgust": 5.106658136355691e-07,
      "fear": 3.3920369148254395,
      "happy": 0.0015280679799616337,
      "sad": 95.45154571533203,
      "surprise": 2.123303602274973e-05,
      "neutral": 1.1009800434112549
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 26,
    "region": {
      "x": 580,
      "y": 708,
      "w": 127,
      "h": 127,
      "left_eye": [
        669,
        750
      ],
      "right_eye": [
        617,
        751
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.005733464378863573,
      "Man": 99.9942626953125
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.0003576317394617945,
      "indian": 0.01679910346865654,
      "black": 99.98023986816406,
      "white": 1.0704442274800385e-06,
      "middle eastern": 6.337552918012079e-07,
      "latino hispanic": 0.0026068445295095444
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 0.00506790354847908,
      "disgust": 2.1040272302208507e-10,
      "fear": 0.0007384356576949358,
      "happy": 0.005348175764083862,
      "sad": 0.007653524633497,
      "surprise": 0.03561893850564957,
      "neutral": 99.94557189941406
    },
    "dominant_emotion": "neutral"
  }
]
let postal_service_clerk_data2 = [
  {
    "age": 23,
    "region": {
      "x": 189,
      "y": 299,
      "w": 36,
      "h": 36,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.96,
    "gender": {
      "Woman": 33.38268280029297,
      "Man": 66.61731719970703
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 55.99686050415039,
      "indian": 2.5251197814941406,
      "black": 0.23626118898391724,
      "white": 33.0361213684082,
      "middle eastern": 2.5695676803588867,
      "latino hispanic": 5.636069297790527
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 9.3303861618042,
      "disgust": 0.12896861135959625,
      "fear": 78.64480590820312,
      "happy": 3.6608211994171143,
      "sad": 5.41357421875,
      "surprise": 1.0452989339828491,
      "neutral": 1.7761441469192505
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 36,
    "region": {
      "x": 109,
      "y": 346,
      "w": 44,
      "h": 44,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 2.360506057739258,
      "Man": 97.63948822021484
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.25455641746521,
      "indian": 8.608429908752441,
      "black": 1.1755613088607788,
      "white": 29.026784896850586,
      "middle eastern": 34.824771881103516,
      "latino hispanic": 24.10988998413086
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 25.987565994262695,
      "disgust": 0.0007569821900688112,
      "fear": 28.969120025634766,
      "happy": 0.04799218103289604,
      "sad": 38.530818939208984,
      "surprise": 0.011853044852614403,
      "neutral": 6.451887130737305
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 38,
    "region": {
      "x": 501,
      "y": 302,
      "w": 47,
      "h": 47,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 11.374210357666016,
      "Man": 88.62578582763672
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 45.92198944091797,
      "indian": 13.140543937683105,
      "black": 4.930106163024902,
      "white": 12.482693672180176,
      "middle eastern": 6.235814571380615,
      "latino hispanic": 17.288860321044922
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 99.49897766113281,
      "disgust": 2.195853812736459e-05,
      "fear": 0.28777408599853516,
      "happy": 0.13348232209682465,
      "sad": 0.07520506531000137,
      "surprise": 3.7639088986907154e-05,
      "neutral": 0.004506154451519251
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 23,
    "region": {
      "x": 343,
      "y": 306,
      "w": 41,
      "h": 41,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 3.6146183013916016,
      "Man": 96.38538360595703
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 24.005281448364258,
      "indian": 13.23403263092041,
      "black": 4.996446132659912,
      "white": 19.893829345703125,
      "middle eastern": 16.376619338989258,
      "latino hispanic": 21.493799209594727
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 13.266097068786621,
      "disgust": 0.2273257076740265,
      "fear": 49.73579406738281,
      "happy": 23.418230056762695,
      "sad": 9.734601020812988,
      "surprise": 0.723063051700592,
      "neutral": 2.8948957920074463
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 23,
    "region": {
      "x": 738,
      "y": 319,
      "w": 47,
      "h": 47,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 3.426180839538574,
      "Man": 96.57382202148438
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 4.471349239349365,
      "indian": 6.4098052978515625,
      "black": 1.909018635749817,
      "white": 38.0962028503418,
      "middle eastern": 23.451337814331055,
      "latino hispanic": 25.662290573120117
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 61.367469787597656,
      "disgust": 0.4917506277561188,
      "fear": 35.90916442871094,
      "happy": 0.016440462321043015,
      "sad": 2.181985378265381,
      "surprise": 0.01478966511785984,
      "neutral": 0.018399033695459366
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 30,
    "region": {
      "x": 823,
      "y": 350,
      "w": 49,
      "h": 49,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 1.8015930652618408,
      "Man": 98.19841003417969
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.7692483067512512,
      "indian": 1.0808764696121216,
      "black": 0.07539874315261841,
      "white": 66.74231719970703,
      "middle eastern": 20.096647262573242,
      "latino hispanic": 11.235518455505371
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 1.8178781270980835,
      "disgust": 1.880078116300865e-06,
      "fear": 5.9408440589904785,
      "happy": 0.5053184628486633,
      "sad": 7.835141658782959,
      "surprise": 0.0737510696053505,
      "neutral": 83.82706451416016
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 1053,
      "y": 358,
      "w": 46,
      "h": 46,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 1.8370460271835327,
      "Man": 98.1629638671875
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 1.696686029434204,
      "indian": 4.610771656036377,
      "black": 0.5154581069946289,
      "white": 33.05717086791992,
      "middle eastern": 46.305904388427734,
      "latino hispanic": 13.814014434814453
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 0.3744390606880188,
      "disgust": 0.16148215532302856,
      "fear": 2.495288372039795,
      "happy": 0.0009414253290742636,
      "sad": 0.49734050035476685,
      "surprise": 96.42366027832031,
      "neutral": 0.04684853553771973
    },
    "dominant_emotion": "surprise"
  },
  {
    "age": 26,
    "region": {
      "x": 48,
      "y": 341,
      "w": 40,
      "h": 40,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 20.205385208129883,
      "Man": 79.79460906982422
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 9.570143699645996,
      "indian": 7.633575916290283,
      "black": 2.210948944091797,
      "white": 49.232479095458984,
      "middle eastern": 18.4155216217041,
      "latino hispanic": 12.937335968017578
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 65.348876953125,
      "disgust": 7.342159369727597e-05,
      "fear": 0.04946596920490265,
      "happy": 29.64719581604004,
      "sad": 4.529855251312256,
      "surprise": 0.01394667662680149,
      "neutral": 0.41058817505836487
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 26,
    "region": {
      "x": 641,
      "y": 322,
      "w": 45,
      "h": 45,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.98,
    "gender": {
      "Woman": 44.231346130371094,
      "Man": 55.76865005493164
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 19.126367568969727,
      "indian": 19.20024871826172,
      "black": 4.358414173126221,
      "white": 22.229799270629883,
      "middle eastern": 18.75529670715332,
      "latino hispanic": 16.329870223999023
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 91.89615631103516,
      "disgust": 1.8452401491231285e-06,
      "fear": 0.9054126143455505,
      "happy": 4.236210823059082,
      "sad": 2.7758288383483887,
      "surprise": 0.009857269003987312,
      "neutral": 0.1765340119600296
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 43,
    "region": {
      "x": 646,
      "y": 370,
      "w": 58,
      "h": 58,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 1.9921520948410034,
      "Man": 98.00784301757812
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 29.133394241333008,
      "indian": 11.258838653564453,
      "black": 6.508380889892578,
      "white": 16.99134635925293,
      "middle eastern": 13.698068618774414,
      "latino hispanic": 22.409976959228516
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 54.54072570800781,
      "disgust": 3.0213228455977514e-05,
      "fear": 1.0242784023284912,
      "happy": 0.02910543605685234,
      "sad": 32.171791076660156,
      "surprise": 0.0001837087474996224,
      "neutral": 12.23388957977295
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 26,
    "region": {
      "x": 48,
      "y": 447,
      "w": 53,
      "h": 53,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 4.219850063323975,
      "Man": 95.78014373779297
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.510904312133789,
      "indian": 7.644909858703613,
      "black": 0.8124411106109619,
      "white": 40.215789794921875,
      "middle eastern": 31.526622772216797,
      "latino hispanic": 17.28933334350586
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 1.217766523361206,
      "disgust": 2.1254359126032796e-06,
      "fear": 27.826011657714844,
      "happy": 3.266162157058716,
      "sad": 1.6633065938949585,
      "surprise": 0.6168992519378662,
      "neutral": 65.40985870361328
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 32,
    "region": {
      "x": 956,
      "y": 421,
      "w": 53,
      "h": 53,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.8897231817245483,
      "Man": 99.11028289794922
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 51.44809341430664,
      "indian": 6.817490577697754,
      "black": 2.78171443939209,
      "white": 14.01099681854248,
      "middle eastern": 5.189570903778076,
      "latino hispanic": 19.752138137817383
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 3.401367425918579,
      "disgust": 0.006554426625370979,
      "fear": 52.77168273925781,
      "happy": 0.2289295494556427,
      "sad": 25.00406265258789,
      "surprise": 0.018233543261885643,
      "neutral": 18.569171905517578
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 27,
    "region": {
      "x": 498,
      "y": 365,
      "w": 61,
      "h": 61,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 4.086993217468262,
      "Man": 95.91300201416016
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 1.5104355812072754,
      "indian": 0.38721412420272827,
      "black": 0.0449705608189106,
      "white": 77.446044921875,
      "middle eastern": 14.230177879333496,
      "latino hispanic": 6.3811540603637695
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 1.2799434661865234,
      "disgust": 2.707092860987359e-08,
      "fear": 0.004001906607300043,
      "happy": 0.0008798729977570474,
      "sad": 17.108428955078125,
      "surprise": 2.7396721336003793e-08,
      "neutral": 81.60674285888672
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 24,
    "region": {
      "x": 453,
      "y": 477,
      "w": 65,
      "h": 65,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.89,
    "gender": {
      "Woman": 80.35079193115234,
      "Man": 19.64920997619629
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 24.137964248657227,
      "indian": 0.7363963723182678,
      "black": 0.11866991221904755,
      "white": 51.3034782409668,
      "middle eastern": 4.089295864105225,
      "latino hispanic": 19.614198684692383
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 3.888990640640259,
      "disgust": 0.0003158334002364427,
      "fear": 21.088638305664062,
      "happy": 0.011689147911965847,
      "sad": 65.58500671386719,
      "surprise": 0.024467695504426956,
      "neutral": 9.400890350341797
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 23,
    "region": {
      "x": 349,
      "y": 448,
      "w": 63,
      "h": 63,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.89,
    "gender": {
      "Woman": 0.04327522963285446,
      "Man": 99.95671844482422
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 5.150736331939697,
      "indian": 6.230152130126953,
      "black": 1.7291854619979858,
      "white": 27.25896453857422,
      "middle eastern": 26.790321350097656,
      "latino hispanic": 32.840641021728516
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 5.39188814163208,
      "disgust": 1.3837705409969203e-05,
      "fear": 0.5121184587478638,
      "happy": 0.3286644518375397,
      "sad": 11.244314193725586,
      "surprise": 0.008105622604489326,
      "neutral": 82.514892578125
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 183,
      "y": 486,
      "w": 61,
      "h": 61,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.2831156253814697,
      "Man": 99.71688079833984
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 8.331707000732422,
      "indian": 8.751370429992676,
      "black": 2.7476112842559814,
      "white": 35.16515350341797,
      "middle eastern": 23.46108627319336,
      "latino hispanic": 21.543067932128906
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 7.407342433929443,
      "disgust": 5.458885565801097e-10,
      "fear": 0.0018392703495919704,
      "happy": 0.24222150444984436,
      "sad": 1.6052303314208984,
      "surprise": 0.0003803121508099139,
      "neutral": 90.74298858642578
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 29,
    "region": {
      "x": 215,
      "y": 541,
      "w": 92,
      "h": 92,
      "left_eye": [
        275,
        576
      ],
      "right_eye": [
        245,
        579
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 94.9681625366211,
      "Man": 5.031839847564697
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 1.68005868772525e-07,
      "indian": 7.0769588091934565e-06,
      "black": 1.841877228514477e-08,
      "white": 99.85211181640625,
      "middle eastern": 0.04740161821246147,
      "latino hispanic": 0.10047391057014465
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.2288224995136261,
      "disgust": 4.275504394968266e-09,
      "fear": 4.016537189483643,
      "happy": 1.5353881508417544e-06,
      "sad": 93.34422302246094,
      "surprise": 2.2131162040750496e-05,
      "neutral": 2.410391330718994
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 31,
    "region": {
      "x": 615,
      "y": 507,
      "w": 75,
      "h": 75,
      "left_eye": [
        665,
        535
      ],
      "right_eye": [
        642,
        532
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 59.55642318725586,
      "Man": 40.443580627441406
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 0.11962463706731796,
      "indian": 0.3092740774154663,
      "black": 0.01639600843191147,
      "white": 80.59481048583984,
      "middle eastern": 9.01906967163086,
      "latino hispanic": 9.940828323364258
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 41.13462829589844,
      "disgust": 0.0021353899501264095,
      "fear": 5.964277744293213,
      "happy": 0.004739269148558378,
      "sad": 39.89023208618164,
      "surprise": 0.05930013209581375,
      "neutral": 12.944686889648438
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 32,
    "region": {
      "x": 404,
      "y": 830,
      "w": 109,
      "h": 109,
      "left_eye": [
        460,
        873
      ],
      "right_eye": [
        436,
        861
      ]
    },
    "face_confidence": 0.99,
    "gender": {
      "Woman": 18.991195678710938,
      "Man": 81.00880432128906
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 9.442008018493652,
      "indian": 7.66010046005249,
      "black": 4.453772068023682,
      "white": 37.06705093383789,
      "middle eastern": 21.693960189819336,
      "latino hispanic": 19.683107376098633
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 20.24388313293457,
      "disgust": 0.023435164242982864,
      "fear": 2.337056875228882,
      "happy": 0.0021391776390373707,
      "sad": 44.403873443603516,
      "surprise": 0.00020179552666377276,
      "neutral": 32.989410400390625
    },
    "dominant_emotion": "sad"
  }
]
let postal_service_clerk_data3 = [
  {
    "age": 29,
    "region": {
      "x": 545,
      "y": 0,
      "w": 98,
      "h": 98,
      "left_eye": [
        609,
        17
      ],
      "right_eye": [
        575,
        16
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.018312878906726837,
      "Man": 99.98169708251953
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 99.99459838867188,
      "indian": 0.0001294434623559937,
      "black": 1.562851892344952e-08,
      "white": 2.812880302371923e-05,
      "middle eastern": 3.0350807977974625e-10,
      "latino hispanic": 0.0052438280545175076
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.001419992302544415,
      "disgust": 9.467100436921783e-10,
      "fear": 0.07141496986150742,
      "happy": 7.45573197491467e-05,
      "sad": 3.9085652828216553,
      "surprise": 5.263469574856572e-06,
      "neutral": 96.01851654052734
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 0,
      "y": 43,
      "w": 95,
      "h": 95,
      "left_eye": [
        53,
        76
      ],
      "right_eye": [
        20,
        77
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 74.18840789794922,
      "Man": 25.81159210205078
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.9975357055664,
      "indian": 0.0001961401430889964,
      "black": 1.6129115820717743e-09,
      "white": 2.4905526515794918e-05,
      "middle eastern": 1.575411676113525e-11,
      "latino hispanic": 0.0022477940656244755
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.04096077010035515,
      "disgust": 8.8952667454123e-09,
      "fear": 0.017436299473047256,
      "happy": 5.147893844537066e-08,
      "sad": 6.955005168914795,
      "surprise": 1.2535787163869827e-06,
      "neutral": 92.9865951538086
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 27,
    "region": {
      "x": 1014,
      "y": 124,
      "w": 114,
      "h": 114,
      "left_eye": [
        1089,
        169
      ],
      "right_eye": [
        1049,
        169
      ]
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.16734063625335693,
      "Man": 99.83265686035156
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 99.98091888427734,
      "indian": 0.0003381113929208368,
      "black": 7.866483997531759e-08,
      "white": 0.00021917643607594073,
      "middle eastern": 4.279150367381135e-09,
      "latino hispanic": 0.018522154539823532
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 5.459437488752883e-06,
      "disgust": 1.6234253584108418e-15,
      "fear": 0.0004254958766978234,
      "happy": 8.658515434945002e-05,
      "sad": 0.05550335720181465,
      "surprise": 4.127928718844487e-07,
      "neutral": 99.94397735595703
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 28,
    "region": {
      "x": 826,
      "y": 100,
      "w": 109,
      "h": 109,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 1.0283879041671753,
      "Man": 98.97161102294922
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 99.9998779296875,
      "indian": 8.712637281860225e-06,
      "black": 9.265687522796995e-11,
      "white": 1.5895362821538583e-06,
      "middle eastern": 3.327534211713945e-12,
      "latino hispanic": 0.00011812689626822248
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.0017050623428076506,
      "disgust": 7.643247539328331e-15,
      "fear": 0.009381457231938839,
      "happy": 1.1246957910771016e-05,
      "sad": 10.711336135864258,
      "surprise": 1.1337687055856804e-07,
      "neutral": 89.2775650024414
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 1163,
      "y": 81,
      "w": 105,
      "h": 105,
      "left_eye": [
        1233,
        119
      ],
      "right_eye": [
        1195,
        120
      ]
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 0.07838121056556702,
      "Man": 99.92162322998047
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 99.91741943359375,
      "indian": 0.0008601864683441818,
      "black": 1.6899222146093962e-06,
      "white": 0.0008658175938762724,
      "middle eastern": 1.233882755968807e-07,
      "latino hispanic": 0.08086077123880386
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.00021131511311978102,
      "disgust": 1.0807903877418923e-10,
      "fear": 0.0006043523899279535,
      "happy": 2.2738346160622314e-05,
      "sad": 0.14179952442646027,
      "surprise": 2.2441632609115914e-05,
      "neutral": 99.85734558105469
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 227,
      "y": 87,
      "w": 107,
      "h": 107,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 2.107572078704834,
      "Man": 97.8924331665039
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 99.9999771118164,
      "indian": 1.8721608796568034e-07,
      "black": 7.884774105328118e-13,
      "white": 2.786432560242247e-07,
      "middle eastern": 6.345096025201294e-14,
      "latino hispanic": 2.6029465516330674e-05
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.005111539736390114,
      "disgust": 7.537229868015416e-11,
      "fear": 0.006480048410594463,
      "happy": 1.639330184843857e-05,
      "sad": 42.14759063720703,
      "surprise": 7.998598761105313e-08,
      "neutral": 57.84080123901367
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 23,
    "region": {
      "x": 734,
      "y": 197,
      "w": 101,
      "h": 101,
      "left_eye": [
        803,
        234
      ],
      "right_eye": [
        763,
        234
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 0.07001881301403046,
      "Man": 99.92997741699219
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 99.97639465332031,
      "indian": 0.0014616724802181125,
      "black": 2.5735100734891603e-06,
      "white": 0.00044142454862594604,
      "middle eastern": 9.813409462822165e-08,
      "latino hispanic": 0.02170482464134693
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 9.194757149089128e-05,
      "disgust": 4.850457275412667e-12,
      "fear": 0.00014702207408845425,
      "happy": 3.3743879157555057e-07,
      "sad": 0.05967216566205025,
      "surprise": 8.124945338749967e-07,
      "neutral": 99.9400863647461
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 91,
      "y": 211,
      "w": 111,
      "h": 111,
      "left_eye": [
        161,
        250
      ],
      "right_eye": [
        123,
        252
      ]
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 58.80657958984375,
      "Man": 41.193416595458984
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.97994232177734,
      "indian": 0.0015770499594509602,
      "black": 1.7723276641845587e-06,
      "white": 0.0013455316657200456,
      "middle eastern": 3.030845903140289e-07,
      "latino hispanic": 0.01712951809167862
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.2902650237083435,
      "disgust": 2.558841361022246e-09,
      "fear": 0.14989368617534637,
      "happy": 0.0005645155324600637,
      "sad": 27.907127380371094,
      "surprise": 1.4936184015823528e-05,
      "neutral": 71.65213775634766
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 28,
    "region": {
      "x": 0,
      "y": 242,
      "w": 108,
      "h": 108,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 5.316142559051514,
      "Man": 94.68385314941406
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 99.99794006347656,
      "indian": 4.3311509216437116e-05,
      "black": 1.79433623515024e-09,
      "white": 0.00014501888654194772,
      "middle eastern": 2.5810711345997106e-09,
      "latino hispanic": 0.0018802264239639044
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.0023724641650915146,
      "disgust": 2.9409760217424807e-12,
      "fear": 0.04695815593004227,
      "happy": 0.00014355243183672428,
      "sad": 92.5577621459961,
      "surprise": 1.181336756417295e-06,
      "neutral": 7.392765045166016
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 30,
    "region": {
      "x": 362,
      "y": 147,
      "w": 114,
      "h": 114,
      "left_eye": [
        401,
        190
      ],
      "right_eye": [
        396,
        178
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 98.6739730834961,
      "Man": 1.3260222673416138
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 5.97087287902832,
      "indian": 12.446176528930664,
      "black": 1.954621434211731,
      "white": 34.78429412841797,
      "middle eastern": 25.941089630126953,
      "latino hispanic": 18.90294647216797
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 4.469275882001966e-05,
      "disgust": 6.290312021262068e-11,
      "fear": 0.0708000585436821,
      "happy": 97.92259979248047,
      "sad": 2.0065393447875977,
      "surprise": 9.169684744847473e-07,
      "neutral": 2.1275523977237754e-05
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 31,
    "region": {
      "x": 599,
      "y": 273,
      "w": 122,
      "h": 122,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 19.757381439208984,
      "Man": 80.24261474609375
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 98.6611328125,
      "indian": 0.045530691742897034,
      "black": 0.00015747144061606377,
      "white": 1.208249807357788,
      "middle eastern": 0.0016941919457167387,
      "latino hispanic": 0.08322826027870178
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 2.4559485912323,
      "disgust": 9.149851543099885e-09,
      "fear": 6.978245735168457,
      "happy": 2.3428568965755403e-05,
      "sad": 4.9791436195373535,
      "surprise": 0.00021157685841899365,
      "neutral": 85.58643341064453
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 30,
    "region": {
      "x": 419,
      "y": 359,
      "w": 119,
      "h": 119,
      "left_eye": [
        498,
        403
      ],
      "right_eye": [
        455,
        404
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 43.31256866455078,
      "Man": 56.68742752075195
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 99.9999771118164,
      "indian": 9.659233057845995e-08,
      "black": 2.4084198719555305e-13,
      "white": 1.0948879207717255e-06,
      "middle eastern": 7.781328207646931e-13,
      "latino hispanic": 2.4943310563685372e-05
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.007500399369746447,
      "disgust": 2.6425238733307488e-11,
      "fear": 0.0003621275827754289,
      "happy": 2.2759031708119437e-05,
      "sad": 0.4730745553970337,
      "surprise": 6.4909886532404926e-06,
      "neutral": 99.51903533935547
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 857,
      "y": 335,
      "w": 104,
      "h": 104,
      "left_eye": [
        925,
        371
      ],
      "right_eye": [
        885,
        373
      ]
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.11521213501691818,
      "Man": 99.88478088378906
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 99.98603057861328,
      "indian": 0.0008213804103434086,
      "black": 2.268401289029498e-07,
      "white": 0.0001420895423507318,
      "middle eastern": 5.033498062800845e-09,
      "latino hispanic": 0.013009792193770409
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.0005714424187317491,
      "disgust": 2.2597800020118797e-10,
      "fear": 0.008222945965826511,
      "happy": 1.9555919106295505e-09,
      "sad": 4.626011371612549,
      "surprise": 1.3232714479727292e-07,
      "neutral": 95.36519622802734
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 1033,
      "y": 372,
      "w": 109,
      "h": 109,
      "left_eye": [
        1107,
        411
      ],
      "right_eye": [
        1068,
        411
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 99.98365783691406,
      "Man": 0.016345223411917686
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.86338806152344,
      "indian": 0.005701206158846617,
      "black": 2.0817054974031635e-05,
      "white": 0.0016232018824666739,
      "middle eastern": 1.9943181541748345e-06,
      "latino hispanic": 0.1292693167924881
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.002244689268991351,
      "disgust": 4.549335130832333e-09,
      "fear": 9.871547081274912e-05,
      "happy": 0.0004905581008642912,
      "sad": 0.039095040410757065,
      "surprise": 0.0011037031654268503,
      "neutral": 99.95697021484375
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 28,
    "region": {
      "x": 186,
      "y": 384,
      "w": 116,
      "h": 116,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 7.266137599945068,
      "Man": 92.7338638305664
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 99.9278335571289,
      "indian": 0.00033554487163200974,
      "black": 1.0420878879813245e-06,
      "white": 0.030286936089396477,
      "middle eastern": 4.285507657186827e-06,
      "latino hispanic": 0.04153867065906525
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.17996396124362946,
      "disgust": 5.443562961504611e-11,
      "fear": 0.22392690181732178,
      "happy": 2.6264649932272732e-05,
      "sad": 61.81440353393555,
      "surprise": 1.850292647986862e-07,
      "neutral": 37.781681060791016
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 31,
    "region": {
      "x": 1121,
      "y": 442,
      "w": 135,
      "h": 135,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 33.59871292114258,
      "Man": 66.40129089355469
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 99.99871063232422,
      "indian": 3.018908500962425e-05,
      "black": 5.637989985984859e-08,
      "white": 7.424790965160355e-05,
      "middle eastern": 1.0027304320203712e-08,
      "latino hispanic": 0.0011841636151075363
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.29954519867897034,
      "disgust": 1.224906842622886e-09,
      "fear": 0.46881330013275146,
      "happy": 0.0011195843107998371,
      "sad": 67.07225799560547,
      "surprise": 7.38166636438109e-06,
      "neutral": 32.158260345458984
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 30,
    "region": {
      "x": 688,
      "y": 488,
      "w": 124,
      "h": 124,
      "left_eye": [
        769,
        533
      ],
      "right_eye": [
        725,
        532
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 99.51463317871094,
      "Man": 0.48536714911460876
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.99967956542969,
      "indian": 9.878246601147112e-06,
      "black": 7.452349848335871e-11,
      "white": 5.740473625337472e-06,
      "middle eastern": 1.614080050171829e-11,
      "latino hispanic": 0.0003047740028705448
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.01162960659712553,
      "disgust": 1.6236956223991683e-11,
      "fear": 0.009357413277029991,
      "happy": 0.0010009407997131348,
      "sad": 28.309568405151367,
      "surprise": 2.4526136712665902e-06,
      "neutral": 71.66844177246094
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 29,
    "region": {
      "x": 0,
      "y": 496,
      "w": 141,
      "h": 141,
      "left_eye": [
        77,
        549
      ],
      "right_eye": [
        33,
        555
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 98.78746032714844,
      "Man": 1.2125481367111206
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.99996948242188,
      "indian": 1.1396633681215462e-06,
      "black": 1.1478810957310515e-10,
      "white": 1.622231025066867e-06,
      "middle eastern": 2.2580283129403078e-11,
      "latino hispanic": 3.2050913432613015e-05
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 4.760331630706787,
      "disgust": 5.9460966440383345e-05,
      "fear": 0.579262375831604,
      "happy": 0.00012556892761494964,
      "sad": 77.7232894897461,
      "surprise": 2.047131238214206e-05,
      "neutral": 16.936918258666992
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 28,
    "region": {
      "x": 295,
      "y": 522,
      "w": 124,
      "h": 124,
      "left_eye": [
        378,
        570
      ],
      "right_eye": [
        331,
        567
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 99.40139770507812,
      "Man": 0.5986055731773376
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.86141967773438,
      "indian": 0.0007011285051703453,
      "black": 1.2059486834914424e-05,
      "white": 0.03482555225491524,
      "middle eastern": 4.87487341160886e-05,
      "latino hispanic": 0.10298905521631241
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.015205500647425652,
      "disgust": 3.8042845783292645e-12,
      "fear": 0.1457449048757553,
      "happy": 2.015800419030711e-06,
      "sad": 98.09081268310547,
      "surprise": 1.0938325800680104e-07,
      "neutral": 1.7482291460037231
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 31,
    "region": {
      "x": 511,
      "y": 561,
      "w": 122,
      "h": 122,
      "left_eye": [
        593,
        605
      ],
      "right_eye": [
        548,
        604
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 97.6182861328125,
      "Man": 2.381709337234497
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.9998779296875,
      "indian": 6.971387733756274e-07,
      "black": 9.781212298443087e-12,
      "white": 1.4635293155151885e-05,
      "middle eastern": 2.7463541423661253e-12,
      "latino hispanic": 0.00010887726966757327
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.0009630824206396937,
      "disgust": 3.7653886085509125e-12,
      "fear": 1.10341616164078e-05,
      "happy": 0.00036467090831138194,
      "sad": 0.058994803577661514,
      "surprise": 2.9202715268183965e-07,
      "neutral": 99.93966674804688
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 30,
    "region": {
      "x": 891,
      "y": 604,
      "w": 135,
      "h": 135,
      "left_eye": [
        981,
        655
      ],
      "right_eye": [
        932,
        652
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 99.94448852539062,
      "Man": 0.055508531630039215
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.99996185302734,
      "indian": 5.77076434638002e-07,
      "black": 8.891018130063877e-12,
      "white": 2.000011136260582e-06,
      "middle eastern": 1.324590393966818e-12,
      "latino hispanic": 4.4526848796522245e-05
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.014157661236822605,
      "disgust": 4.198859482329453e-09,
      "fear": 0.06897995620965958,
      "happy": 0.0065672313794493675,
      "sad": 70.6366195678711,
      "surprise": 1.8979410015163012e-05,
      "neutral": 29.273658752441406
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 30,
    "region": {
      "x": 80,
      "y": 698,
      "w": 118,
      "h": 118,
      "left_eye": [
        154,
        741
      ],
      "right_eye": [
        114,
        747
      ]
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 98.67683410644531,
      "Man": 1.3231747150421143
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.99984741210938,
      "indian": 4.822837581741624e-06,
      "black": 9.94599611003899e-11,
      "white": 2.5806320991250686e-06,
      "middle eastern": 7.217702130413173e-12,
      "latino hispanic": 0.00015463864838238806
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.027000591158866882,
      "disgust": 9.888185559248086e-08,
      "fear": 0.0011409184662625194,
      "happy": 1.4409201867238153e-06,
      "sad": 3.5870118141174316,
      "surprise": 4.2287692281206546e-07,
      "neutral": 96.38483428955078
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 27,
    "region": {
      "x": 592,
      "y": 689,
      "w": 152,
      "h": 152,
      "left_eye": [
        688,
        743
      ],
      "right_eye": [
        640,
        747
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.632651150226593,
      "Man": 99.36734771728516
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 99.99993133544922,
      "indian": 1.8653244069355424e-06,
      "black": 2.035569629521561e-11,
      "white": 9.171590704681876e-07,
      "middle eastern": 1.2164003528394862e-12,
      "latino hispanic": 7.71756240283139e-05
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.04131932556629181,
      "disgust": 3.5898739536577295e-09,
      "fear": 0.1924162209033966,
      "happy": 5.27208555922698e-07,
      "sad": 40.611900329589844,
      "surprise": 1.610945510321926e-08,
      "neutral": 59.154361724853516
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 1209,
      "y": 700,
      "w": 70,
      "h": 110,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 9.134105682373047,
      "Man": 90.86589813232422
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 51.92001724243164,
      "indian": 7.968857765197754,
      "black": 10.343538284301758,
      "white": 4.899433135986328,
      "middle eastern": 2.353347063064575,
      "latino hispanic": 22.51479721069336
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 19.14549446105957,
      "disgust": 5.960083981904063e-09,
      "fear": 0.82328861951828,
      "happy": 2.3385989322832756e-07,
      "sad": 41.37065887451172,
      "surprise": 9.716239368628976e-09,
      "neutral": 38.660560607910156
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 29,
    "region": {
      "x": 281,
      "y": 718,
      "w": 145,
      "h": 145,
      "left_eye": [
        375,
        773
      ],
      "right_eye": [
        325,
        773
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 97.07991027832031,
      "Man": 2.920093297958374
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 100.0,
      "indian": 4.0370036202830306e-08,
      "black": 6.461165966403087e-14,
      "white": 4.819823828938752e-08,
      "middle eastern": 9.467196449529369e-14,
      "latino hispanic": 3.580069574127265e-07
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.4912789463996887,
      "disgust": 1.1041188372473698e-06,
      "fear": 0.43895435333251953,
      "happy": 0.00032000854844227433,
      "sad": 91.41605377197266,
      "surprise": 3.925252713088412e-06,
      "neutral": 7.653388977050781
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 31,
    "region": {
      "x": 1010,
      "y": 778,
      "w": 131,
      "h": 131,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 82.54093170166016,
      "Man": 17.45907211303711
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.99131774902344,
      "indian": 8.624475594842806e-05,
      "black": 1.1332572285027709e-06,
      "white": 0.0001009646657621488,
      "middle eastern": 4.045802270979948e-08,
      "latino hispanic": 0.00850010011345148
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 1.6126242876052856,
      "disgust": 1.1202930139120326e-08,
      "fear": 0.09227095544338226,
      "happy": 0.0003447298950050026,
      "sad": 44.35902786254883,
      "surprise": 3.908471342128905e-07,
      "neutral": 53.93573760986328
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 29,
    "region": {
      "x": 0,
      "y": 882,
      "w": 122,
      "h": 122,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 70.20838928222656,
      "Man": 29.791610717773438
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.99989318847656,
      "indian": 5.1866634748876095e-05,
      "black": 8.280524703419001e-12,
      "white": 2.504242957002134e-06,
      "middle eastern": 4.2208142363164836e-13,
      "latino hispanic": 5.412806058302522e-05
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.0006974326679483056,
      "disgust": 1.2259551013249492e-11,
      "fear": 0.1933559775352478,
      "happy": 0.000110994755232241,
      "sad": 0.13432686030864716,
      "surprise": 0.0002685213985387236,
      "neutral": 99.6712417602539
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 30,
    "region": {
      "x": 1170,
      "y": 1047,
      "w": 109,
      "h": 139,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 96.99993896484375,
      "Man": 3.0000643730163574
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.98677062988281,
      "indian": 0.002125088358297944,
      "black": 4.5894680056335346e-07,
      "white": 0.0009605683153495193,
      "middle eastern": 4.192945084469102e-07,
      "latino hispanic": 0.010146556422114372
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.1331947147846222,
      "disgust": 4.323705482534024e-08,
      "fear": 0.4328335225582123,
      "happy": 0.0005981750437058508,
      "sad": 93.37955474853516,
      "surprise": 6.126686713514573e-08,
      "neutral": 6.053823471069336
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 29,
    "region": {
      "x": 834,
      "y": 1030,
      "w": 139,
      "h": 139,
      "left_eye": [
        926,
        1080
      ],
      "right_eye": [
        872,
        1083
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.5068469643592834,
      "Man": 99.49314880371094
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 56.33803939819336,
      "indian": 3.8747634887695312,
      "black": 1.910319209098816,
      "white": 2.568396806716919,
      "middle eastern": 0.48548269271850586,
      "latino hispanic": 34.8230094909668
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.0007401791517622769,
      "disgust": 5.473052011595314e-10,
      "fear": 1.1114732842543162e-05,
      "happy": 3.618072150857188e-05,
      "sad": 0.050700198858976364,
      "surprise": 4.8810911721375305e-06,
      "neutral": 99.9485092163086
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 35,
    "region": {
      "x": 521,
      "y": 1114,
      "w": 133,
      "h": 133,
      "left_eye": [
        608,
        1163
      ],
      "right_eye": [
        563,
        1164
      ]
    },
    "face_confidence": 0.89,
    "gender": {
      "Woman": 2.105877637863159,
      "Man": 97.89411926269531
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 94.29454803466797,
      "indian": 0.4911370575428009,
      "black": 0.01651219092309475,
      "white": 0.35507941246032715,
      "middle eastern": 0.011306703090667725,
      "latino hispanic": 4.831427097320557
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 1.0652499198913574,
      "disgust": 0.03170561045408249,
      "fear": 0.06379179656505585,
      "happy": 0.021317405626177788,
      "sad": 2.838449716567993,
      "surprise": 0.01712225377559662,
      "neutral": 95.96236419677734
    },
    "dominant_emotion": "neutral"
  }
]

let postal_service_clerk_data4 = [
  {
    "age": 28,
    "region": {
      "x": 41,
      "y": 42,
      "w": 61,
      "h": 61,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.7430644631385803,
      "Man": 99.2569351196289
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.351708872083691e-08,
      "indian": 1.1323595394685526e-08,
      "black": 2.026160315915515e-11,
      "white": 99.99551391601562,
      "middle eastern": 0.0030086697079241276,
      "latino hispanic": 0.0014741939958184958
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 9.202046902245797e-10,
      "disgust": 1.7066598632229496e-23,
      "fear": 8.737354372997941e-13,
      "happy": 99.52214050292969,
      "sad": 3.596548892037532e-10,
      "surprise": 8.027401321442085e-08,
      "neutral": 0.4778650104999542
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 25,
    "region": {
      "x": 465,
      "y": 40,
      "w": 64,
      "h": 64,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 0.05541990324854851,
      "Man": 99.94457244873047
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.003677902976050973,
      "indian": 0.006448540836572647,
      "black": 0.00011410287697799504,
      "white": 93.48230743408203,
      "middle eastern": 2.5238542556762695,
      "latino hispanic": 3.9835901260375977
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 4.763852530231816e-07,
      "disgust": 1.0808153112459081e-14,
      "fear": 7.143471369985832e-10,
      "happy": 99.79072570800781,
      "sad": 5.297088137012906e-06,
      "surprise": 4.450106416697963e-07,
      "neutral": 0.20926818251609802
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 25,
    "region": {
      "x": 607,
      "y": 40,
      "w": 63,
      "h": 63,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.0004165123391430825,
      "Man": 99.99958038330078
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 1.6859080791473389,
      "indian": 6.307097434997559,
      "black": 0.820274293422699,
      "white": 40.76312255859375,
      "middle eastern": 24.553016662597656,
      "latino hispanic": 25.870576858520508
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.15109474956989288,
      "disgust": 8.908957127573558e-09,
      "fear": 0.07858430594205856,
      "happy": 96.80984497070312,
      "sad": 0.07800257951021194,
      "surprise": 0.001994304358959198,
      "neutral": 2.880470037460327
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 25,
    "region": {
      "x": 753,
      "y": 40,
      "w": 59,
      "h": 59,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.00959088746458292,
      "Man": 99.99040222167969
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 24.535310745239258,
      "indian": 8.532620429992676,
      "black": 6.18325662612915,
      "white": 23.11480712890625,
      "middle eastern": 13.913707733154297,
      "latino hispanic": 23.720304489135742
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.004321609158068895,
      "disgust": 1.0181938847608762e-08,
      "fear": 3.6998990253778175e-05,
      "happy": 84.76790618896484,
      "sad": 0.0009613466681912541,
      "surprise": 0.007511996664106846,
      "neutral": 15.219263076782227
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 25,
    "region": {
      "x": 1172,
      "y": 43,
      "w": 57,
      "h": 57,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 0.02627258375287056,
      "Man": 99.9737319946289
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 10.286519050598145,
      "indian": 6.028195858001709,
      "black": 2.699207305908203,
      "white": 31.739269256591797,
      "middle eastern": 18.90792465209961,
      "latino hispanic": 30.338890075683594
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 6.475317786680534e-05,
      "disgust": 3.0141008330532195e-16,
      "fear": 2.4285390365363924e-10,
      "happy": 99.81716918945312,
      "sad": 3.4112026696675457e-06,
      "surprise": 7.734769496892113e-06,
      "neutral": 0.1827569156885147
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 27,
    "region": {
      "x": 179,
      "y": 42,
      "w": 66,
      "h": 66,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.89,
    "gender": {
      "Woman": 0.004388594534248114,
      "Man": 99.99561309814453
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.032538238912820816,
      "indian": 0.14883621037006378,
      "black": 0.005513737443834543,
      "white": 77.12311553955078,
      "middle eastern": 12.471549034118652,
      "latino hispanic": 10.2184476852417
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 4.471166610717773,
      "disgust": 0.0018466358305886388,
      "fear": 52.81281280517578,
      "happy": 9.823003768920898,
      "sad": 10.188643455505371,
      "surprise": 0.11618996411561966,
      "neutral": 22.586334228515625
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 28,
    "region": {
      "x": 322,
      "y": 42,
      "w": 63,
      "h": 63,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 0.0013979667564854026,
      "Man": 99.99860382080078
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.08001232892274857,
      "indian": 2.2094433307647705,
      "black": 0.05892907455563545,
      "white": 27.263811111450195,
      "middle eastern": 62.16632080078125,
      "latino hispanic": 8.221480369567871
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 0.028394578024744987,
      "disgust": 9.480409062234685e-07,
      "fear": 0.006312797777354717,
      "happy": 99.34325408935547,
      "sad": 0.1360877901315689,
      "surprise": 0.0007796376012265682,
      "neutral": 0.4851711392402649
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 24,
    "region": {
      "x": 891,
      "y": 41,
      "w": 59,
      "h": 59,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.016219234094023705,
      "Man": 99.98377227783203
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 3.9831511974334717,
      "indian": 1.5130559206008911,
      "black": 0.2509376108646393,
      "white": 56.06840515136719,
      "middle eastern": 13.791857719421387,
      "latino hispanic": 24.39259910583496
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 1.4030127060138398e-09,
      "disgust": 5.380423910793738e-23,
      "fear": 9.099183673243541e-15,
      "happy": 99.68602752685547,
      "sad": 1.7544767860755428e-09,
      "surprise": 1.7897949788903134e-08,
      "neutral": 0.31397855281829834
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 27,
    "region": {
      "x": 889,
      "y": 181,
      "w": 59,
      "h": 59,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.89,
    "gender": {
      "Woman": 0.0654597356915474,
      "Man": 99.93453979492188
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 19.347965240478516,
      "indian": 12.011802673339844,
      "black": 14.871036529541016,
      "white": 17.35110855102539,
      "middle eastern": 13.520417213439941,
      "latino hispanic": 22.897668838500977
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 4.7973106120480224e-05,
      "disgust": 7.892156437920572e-13,
      "fear": 1.8400529100404128e-08,
      "happy": 99.5760498046875,
      "sad": 2.2396285203285515e-05,
      "surprise": 0.00016686203889548779,
      "neutral": 0.4237166941165924
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 31,
    "region": {
      "x": 606,
      "y": 179,
      "w": 64,
      "h": 64,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.002661416307091713,
      "Man": 99.99734497070312
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.02799318917095661,
      "indian": 0.04534643888473511,
      "black": 0.00388549268245697,
      "white": 89.39928436279297,
      "middle eastern": 5.630627155303955,
      "latino hispanic": 4.892859935760498
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.39683306217193604,
      "disgust": 2.207144467192279e-09,
      "fear": 0.8991592526435852,
      "happy": 82.23133087158203,
      "sad": 0.6633023619651794,
      "surprise": 0.00032557285157963634,
      "neutral": 15.809050559997559
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 29,
    "region": {
      "x": 1029,
      "y": 38,
      "w": 64,
      "h": 64,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.00035839667543768883,
      "Man": 99.99964141845703
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.0003758911043405533,
      "indian": 0.10907949507236481,
      "black": 0.0006979399477131665,
      "white": 65.02517700195312,
      "middle eastern": 33.190345764160156,
      "latino hispanic": 1.674324870109558
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 3.431378718232736e-05,
      "disgust": 3.995815830992733e-12,
      "fear": 0.00043287736480124295,
      "happy": 99.44603729248047,
      "sad": 0.0005589756183326244,
      "surprise": 0.00023904208501335233,
      "neutral": 0.5527008771896362
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 34,
    "region": {
      "x": 463,
      "y": 175,
      "w": 67,
      "h": 67,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.006000895518809557,
      "Man": 99.99400329589844
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 1.5676912880735472e-05,
      "indian": 0.0004069154674652964,
      "black": 3.1690030937170377e-06,
      "white": 98.5129165649414,
      "middle eastern": 0.903066873550415,
      "latino hispanic": 0.5835956931114197
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 64.44322967529297,
      "disgust": 0.0001198024838231504,
      "fear": 2.48481822013855,
      "happy": 32.681419372558594,
      "sad": 0.32074862718582153,
      "surprise": 0.00208020000718534,
      "neutral": 0.06758159399032593
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 30,
    "region": {
      "x": 42,
      "y": 179,
      "w": 63,
      "h": 63,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.012140519917011261,
      "Man": 99.98785400390625
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.0063085095025599,
      "indian": 0.10051249712705612,
      "black": 99.88031005859375,
      "white": 8.297480962937698e-05,
      "middle eastern": 6.049783405615017e-05,
      "latino hispanic": 0.012726901099085808
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 0.00015420439012814313,
      "disgust": 3.7115341182392125e-12,
      "fear": 3.5686758792508044e-07,
      "happy": 99.35071563720703,
      "sad": 7.666943020012695e-06,
      "surprise": 0.00014307003584690392,
      "neutral": 0.6489866971969604
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 26,
    "region": {
      "x": 750,
      "y": 180,
      "w": 61,
      "h": 61,
      "left_eye": [
        792,
        202
      ],
      "right_eye": [
        772,
        202
      ]
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 0.01973249390721321,
      "Man": 99.98026275634766
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 28.762432098388672,
      "indian": 5.561931610107422,
      "black": 4.073311805725098,
      "white": 28.414052963256836,
      "middle eastern": 12.80855655670166,
      "latino hispanic": 20.379716873168945
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 2.8353963443805696e-06,
      "disgust": 4.168735669163315e-14,
      "fear": 1.9924730310094674e-08,
      "happy": 99.89449310302734,
      "sad": 3.0418769370044174e-07,
      "surprise": 6.328812560241204e-06,
      "neutral": 0.10549798607826233
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 33,
    "region": {
      "x": 1030,
      "y": 179,
      "w": 62,
      "h": 62,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.00015521739260293543,
      "Man": 99.99984741210938
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.34977245330810547,
      "indian": 8.82445240020752,
      "black": 1.3673428297042847,
      "white": 20.5374755859375,
      "middle eastern": 58.8604736328125,
      "latino hispanic": 10.06047534942627
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 0.0007465208182111382,
      "disgust": 3.1818031542840686e-10,
      "fear": 0.0001949326106114313,
      "happy": 99.97088623046875,
      "sad": 0.00023130702902562916,
      "surprise": 0.0010289449710398912,
      "neutral": 0.02690904028713703
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 34,
    "region": {
      "x": 1168,
      "y": 178,
      "w": 65,
      "h": 65,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.0006434887764044106,
      "Man": 99.99935913085938
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.0002940278500318527,
      "indian": 0.04961616173386574,
      "black": 0.00016395639977417886,
      "white": 77.43489837646484,
      "middle eastern": 20.45652198791504,
      "latino hispanic": 2.0585098266601562
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.0007312351372092962,
      "disgust": 1.422027366970724e-07,
      "fear": 0.01574825681746006,
      "happy": 95.99983978271484,
      "sad": 0.009737741202116013,
      "surprise": 0.001698979758657515,
      "neutral": 3.972243547439575
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 28,
    "region": {
      "x": 319,
      "y": 180,
      "w": 66,
      "h": 66,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 0.04102630168199539,
      "Man": 99.95897674560547
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 1.04828544067459e-07,
      "indian": 7.912012733868323e-08,
      "black": 4.6315742907587776e-10,
      "white": 99.97418212890625,
      "middle eastern": 0.01028428040444851,
      "latino hispanic": 0.015532311052083969
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.00021467622718773782,
      "disgust": 2.4921502900487327e-15,
      "fear": 2.198946589260231e-07,
      "happy": 99.99122619628906,
      "sad": 3.570197350200033e-06,
      "surprise": 2.4527523692086106e-06,
      "neutral": 0.008552285842597485
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 30,
    "region": {
      "x": 181,
      "y": 179,
      "w": 65,
      "h": 65,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 5.3980231314199045e-05,
      "Man": 99.99993896484375
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 6.494602757811663e-07,
      "indian": 0.0005949530168436468,
      "black": 8.327118905526731e-08,
      "white": 96.72098541259766,
      "middle eastern": 3.220928907394409,
      "latino hispanic": 0.05749503895640373
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 30.267126083374023,
      "disgust": 3.238248245907016e-05,
      "fear": 44.66865921020508,
      "happy": 5.970339298248291,
      "sad": 13.29651927947998,
      "surprise": 0.004590350203216076,
      "neutral": 5.792727947235107
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 25,
    "region": {
      "x": 468,
      "y": 335,
      "w": 60,
      "h": 60,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 0.1344671994447708,
      "Man": 99.86553192138672
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 25.81388282775879,
      "indian": 12.207870483398438,
      "black": 9.662077903747559,
      "white": 13.48852825164795,
      "middle eastern": 9.66451358795166,
      "latino hispanic": 29.16312599182129
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 0.003203833941370249,
      "disgust": 1.293059312956757e-07,
      "fear": 8.389591675950214e-05,
      "happy": 67.589111328125,
      "sad": 0.019155733287334442,
      "surprise": 0.002336805919185281,
      "neutral": 32.386104583740234
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 32,
    "region": {
      "x": 44,
      "y": 340,
      "w": 59,
      "h": 59,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.31291916966438293,
      "Man": 99.68708038330078
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 3.039048910140991,
      "indian": 1.4538038969039917,
      "black": 0.34157997369766235,
      "white": 55.73173904418945,
      "middle eastern": 16.457714080810547,
      "latino hispanic": 22.976118087768555
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.001993420999497175,
      "disgust": 1.3675497179121976e-08,
      "fear": 0.0001853859139373526,
      "happy": 71.54678344726562,
      "sad": 0.01412265095859766,
      "surprise": 0.001022646320052445,
      "neutral": 28.435888290405273
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 24,
    "region": {
      "x": 180,
      "y": 337,
      "w": 64,
      "h": 64,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.0005888657760806382,
      "Man": 99.9994125366211
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 1.004647135734558,
      "indian": 4.043424129486084,
      "black": 4.939234733581543,
      "white": 40.27641296386719,
      "middle eastern": 26.658817291259766,
      "latino hispanic": 23.077465057373047
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.3026190996170044,
      "disgust": 0.0007011239649727941,
      "fear": 22.596529006958008,
      "happy": 7.886874675750732,
      "sad": 2.229692220687866,
      "surprise": 0.08552226424217224,
      "neutral": 66.89805603027344
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 26,
    "region": {
      "x": 324,
      "y": 337,
      "w": 63,
      "h": 63,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.00042951578507199883,
      "Man": 99.99957275390625
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.00011453137994976714,
      "indian": 0.00107287906575948,
      "black": 5.261260594124906e-05,
      "white": 98.5830078125,
      "middle eastern": 0.9520891904830933,
      "latino hispanic": 0.4636533558368683
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 1.0434939861297607,
      "disgust": 6.977249086048687e-06,
      "fear": 0.04441909119486809,
      "happy": 15.821072578430176,
      "sad": 1.503359079360962,
      "surprise": 0.002142143901437521,
      "neutral": 81.58551025390625
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 24,
    "region": {
      "x": 606,
      "y": 334,
      "w": 67,
      "h": 67,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.89,
    "gender": {
      "Woman": 0.0012491863453760743,
      "Man": 99.99874877929688
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.03547278419137001,
      "indian": 0.37156251072883606,
      "black": 0.020959025248885155,
      "white": 62.855255126953125,
      "middle eastern": 26.634326934814453,
      "latino hispanic": 10.082429885864258
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 3.065513849258423,
      "disgust": 1.9150789398736379e-07,
      "fear": 0.051046598702669144,
      "happy": 73.07135772705078,
      "sad": 0.8107300996780396,
      "surprise": 0.006601634435355663,
      "neutral": 22.9947566986084
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 24,
    "region": {
      "x": 750,
      "y": 337,
      "w": 64,
      "h": 64,
      "left_eye": [
        793,
        360
      ],
      "right_eye": [
        772,
        359
      ]
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.09185869246721268,
      "Man": 99.90813446044922
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 14.593555450439453,
      "indian": 6.849647521972656,
      "black": 2.242058038711548,
      "white": 32.23929214477539,
      "middle eastern": 23.315460205078125,
      "latino hispanic": 20.759994506835938
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 2.2211622763279593e-07,
      "disgust": 2.177986343794512e-21,
      "fear": 2.1400945252048054e-12,
      "happy": 99.99700164794922,
      "sad": 3.5838667589160877e-09,
      "surprise": 3.413725968570702e-10,
      "neutral": 0.00299816788174212
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 27,
    "region": {
      "x": 1170,
      "y": 339,
      "w": 60,
      "h": 60,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 0.003753537079319358,
      "Man": 99.99624633789062
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.18203142285346985,
      "indian": 0.5337660908699036,
      "black": 0.05128408223390579,
      "white": 65.65676879882812,
      "middle eastern": 17.827436447143555,
      "latino hispanic": 15.748717308044434
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 4.4271882870816626e-06,
      "disgust": 2.0651994756352111e-19,
      "fear": 9.081928785403814e-12,
      "happy": 99.99986267089844,
      "sad": 6.778311956168181e-08,
      "surprise": 4.555082533386212e-09,
      "neutral": 0.00012197977775940672
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 44,
    "region": {
      "x": 889,
      "y": 339,
      "w": 61,
      "h": 61,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 48.93648147583008,
      "Man": 51.063514709472656
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 25.138540267944336,
      "indian": 13.103221893310547,
      "black": 12.94909381866455,
      "white": 15.545515060424805,
      "middle eastern": 15.414341926574707,
      "latino hispanic": 17.84929084777832
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 81.52535247802734,
      "disgust": 0.0017568451585248113,
      "fear": 0.04563530907034874,
      "happy": 1.985507607460022,
      "sad": 2.838310480117798,
      "surprise": 2.5503742694854736,
      "neutral": 11.053070068359375
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 26,
    "region": {
      "x": 1033,
      "y": 342,
      "w": 57,
      "h": 57,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.002290283562615514,
      "Man": 99.99771118164062
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.353933572769165,
      "indian": 0.7292035818099976,
      "black": 0.1828610599040985,
      "white": 64.89281463623047,
      "middle eastern": 11.46481990814209,
      "latino hispanic": 20.376373291015625
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.007275267504155636,
      "disgust": 1.1651474869558281e-13,
      "fear": 6.092763555898273e-07,
      "happy": 99.98973083496094,
      "sad": 1.4158058547764085e-05,
      "surprise": 4.543123395706061e-06,
      "neutral": 0.0029631215147674084
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 29,
    "region": {
      "x": 326,
      "y": 500,
      "w": 60,
      "h": 60,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 0.20162928104400635,
      "Man": 99.79837036132812
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 10.202771186828613,
      "indian": 6.709585666656494,
      "black": 2.7724902629852295,
      "white": 29.358253479003906,
      "middle eastern": 22.092548370361328,
      "latino hispanic": 28.864355087280273
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.0009813433280214667,
      "disgust": 6.419780505806383e-12,
      "fear": 1.5950639635775588e-06,
      "happy": 94.60507202148438,
      "sad": 0.0005556558608077466,
      "surprise": 7.520485814893618e-05,
      "neutral": 5.393316745758057
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 23,
    "region": {
      "x": 179,
      "y": 499,
      "w": 66,
      "h": 66,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.89,
    "gender": {
      "Woman": 0.010995518416166306,
      "Man": 99.98900604248047
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.004821971524506807,
      "indian": 0.004676602315157652,
      "black": 0.00022063447977416217,
      "white": 97.81199645996094,
      "middle eastern": 1.0821983814239502,
      "latino hispanic": 1.096087098121643
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.0011940544936805964,
      "disgust": 2.7609469270828413e-06,
      "fear": 0.008673830889165401,
      "happy": 93.3927001953125,
      "sad": 0.05364049971103668,
      "surprise": 0.1034308671951294,
      "neutral": 6.440363883972168
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 24,
    "region": {
      "x": 607,
      "y": 499,
      "w": 63,
      "h": 63,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.96,
    "gender": {
      "Woman": 0.010964306071400642,
      "Man": 99.98902893066406
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.5244886875152588,
      "indian": 0.4036395847797394,
      "black": 0.03592360392212868,
      "white": 82.19078826904297,
      "middle eastern": 7.633612155914307,
      "latino hispanic": 9.21155071258545
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 1.407210947945714e-05,
      "disgust": 5.954156612197892e-11,
      "fear": 3.1885551976529314e-08,
      "happy": 93.45630645751953,
      "sad": 2.2606696802540682e-05,
      "surprise": 7.074452878441662e-05,
      "neutral": 6.543583869934082
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 29,
    "region": {
      "x": 755,
      "y": 501,
      "w": 57,
      "h": 57,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 0.01209239847958088,
      "Man": 99.98789978027344
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 17.745969772338867,
      "indian": 5.503627300262451,
      "black": 3.436567783355713,
      "white": 34.628013610839844,
      "middle eastern": 17.337238311767578,
      "latino hispanic": 21.348590850830078
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.014721394516527653,
      "disgust": 1.4422342928810394e-06,
      "fear": 0.01260314416140318,
      "happy": 93.09475708007812,
      "sad": 0.005683819763362408,
      "surprise": 0.13272494077682495,
      "neutral": 6.739495754241943
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 30,
    "region": {
      "x": 893,
      "y": 501,
      "w": 58,
      "h": 58,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.0012947586365044117,
      "Man": 99.99870300292969
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 1.8670176267623901,
      "indian": 1.420993685722351,
      "black": 0.20247946679592133,
      "white": 54.910179138183594,
      "middle eastern": 16.46790885925293,
      "latino hispanic": 25.131423950195312
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.0002918873797170818,
      "disgust": 3.910392842865207e-12,
      "fear": 1.4868576272419887e-06,
      "happy": 92.80909729003906,
      "sad": 6.781922274967656e-05,
      "surprise": 0.0008727720123715699,
      "neutral": 7.189676284790039
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 27,
    "region": {
      "x": 1171,
      "y": 499,
      "w": 61,
      "h": 61,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.11253414303064346,
      "Man": 99.88745880126953
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.2747945189476013,
      "indian": 0.3051522970199585,
      "black": 0.02884986810386181,
      "white": 67.57537078857422,
      "middle eastern": 8.25210189819336,
      "latino hispanic": 23.563735961914062
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.37194451689720154,
      "disgust": 0.00028675084467977285,
      "fear": 0.020792705938220024,
      "happy": 96.56550598144531,
      "sad": 0.5214072465896606,
      "surprise": 0.017281873151659966,
      "neutral": 2.5027806758880615
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 26,
    "region": {
      "x": 469,
      "y": 499,
      "w": 61,
      "h": 61,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.96,
    "gender": {
      "Woman": 0.0017488726880401373,
      "Man": 99.99824523925781
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 1.0252333879470825,
      "indian": 1.5754575729370117,
      "black": 0.2357618510723114,
      "white": 64.62802124023438,
      "middle eastern": 16.54840850830078,
      "latino hispanic": 15.9871187210083
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.0009934415575116873,
      "disgust": 9.092088193440873e-10,
      "fear": 2.6445275580044836e-05,
      "happy": 85.67363739013672,
      "sad": 0.001688420306891203,
      "surprise": 0.0017684473423287272,
      "neutral": 14.321884155273438
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 29,
    "region": {
      "x": 1032,
      "y": 498,
      "w": 63,
      "h": 63,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.026697196066379547,
      "Man": 99.97330474853516
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 1.7892985226808378e-07,
      "indian": 3.3384279163328756e-07,
      "black": 8.131812445633102e-10,
      "white": 99.96597290039062,
      "middle eastern": 0.012978830374777317,
      "latino hispanic": 0.021053588017821312
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.00025256138178519905,
      "disgust": 5.298852467916504e-09,
      "fear": 0.0007606652798131108,
      "happy": 89.008544921875,
      "sad": 0.00045420139213092625,
      "surprise": 0.013066725805401802,
      "neutral": 10.976920127868652
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 32,
    "region": {
      "x": 39,
      "y": 504,
      "w": 61,
      "h": 61,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.96,
    "gender": {
      "Woman": 0.006766550242900848,
      "Man": 99.99322509765625
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.2381187230348587,
      "indian": 3.949960470199585,
      "black": 93.57124328613281,
      "white": 0.15198853611946106,
      "middle eastern": 0.1257617473602295,
      "latino hispanic": 1.9629274606704712
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 3.284718053109259e-09,
      "disgust": 1.1141799216674621e-18,
      "fear": 1.1303280533780935e-10,
      "happy": 99.99974060058594,
      "sad": 1.9802635620180808e-07,
      "surprise": 1.7345898480590483e-13,
      "neutral": 0.0002656951837707311
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 27,
    "region": {
      "x": 1030,
      "y": 656,
      "w": 63,
      "h": 63,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.020389145240187645,
      "Man": 99.97960662841797
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 15.387351989746094,
      "indian": 10.597829818725586,
      "black": 4.00081205368042,
      "white": 18.403696060180664,
      "middle eastern": 10.497991561889648,
      "latino hispanic": 41.1123161315918
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 0.012851627543568611,
      "disgust": 5.832810234807084e-09,
      "fear": 4.305802212911658e-05,
      "happy": 98.26641082763672,
      "sad": 0.003710372606292367,
      "surprise": 0.0006091368268243968,
      "neutral": 1.7163888216018677
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 24,
    "region": {
      "x": 180,
      "y": 659,
      "w": 65,
      "h": 65,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 0.0994696393609047,
      "Man": 99.9005355834961
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.36632993817329407,
      "indian": 0.34163132309913635,
      "black": 0.0453048050403595,
      "white": 71.92040252685547,
      "middle eastern": 14.202803611755371,
      "latino hispanic": 13.123527526855469
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 6.982685135881184e-06,
      "disgust": 9.400626817303586e-16,
      "fear": 8.757566227757252e-09,
      "happy": 99.75900268554688,
      "sad": 3.5827556530421134e-06,
      "surprise": 2.2761754735256545e-05,
      "neutral": 0.24096570909023285
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 25,
    "region": {
      "x": 468,
      "y": 659,
      "w": 62,
      "h": 62,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.01932341791689396,
      "Man": 99.98068237304688
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 9.204408645629883,
      "indian": 10.719987869262695,
      "black": 24.498821258544922,
      "white": 9.615991592407227,
      "middle eastern": 8.452523231506348,
      "latino hispanic": 37.50827407836914
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 0.32235342264175415,
      "disgust": 0.012338156811892986,
      "fear": 1.125058650970459,
      "happy": 70.4232406616211,
      "sad": 2.1006317138671875,
      "surprise": 0.13115182518959045,
      "neutral": 25.885223388671875
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 29,
    "region": {
      "x": 752,
      "y": 659,
      "w": 62,
      "h": 62,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.0005221245810389519,
      "Man": 99.99947357177734
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.4087090492248535,
      "indian": 20.80767250061035,
      "black": 4.186100006103516,
      "white": 18.264020919799805,
      "middle eastern": 37.21336364746094,
      "latino hispanic": 17.120140075683594
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 16.910852432250977,
      "disgust": 3.187875563526177e-08,
      "fear": 0.6322071552276611,
      "happy": 41.92649459838867,
      "sad": 34.28903579711914,
      "surprise": 0.0011296075535938144,
      "neutral": 6.24028205871582
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 43,
    "region": {
      "x": 889,
      "y": 658,
      "w": 64,
      "h": 64,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.005883717443794012,
      "Man": 99.99411010742188
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.6313141584396362,
      "indian": 11.774064064025879,
      "black": 1.9516093730926514,
      "white": 15.779926300048828,
      "middle eastern": 58.15394973754883,
      "latino hispanic": 11.709136962890625
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 0.0492587611079216,
      "disgust": 1.415228609857877e-07,
      "fear": 0.0115204481408,
      "happy": 89.32605743408203,
      "sad": 0.18233612179756165,
      "surprise": 0.0015340875834226608,
      "neutral": 10.42929744720459
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 35,
    "region": {
      "x": 324,
      "y": 658,
      "w": 63,
      "h": 63,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.0019594512414187193,
      "Man": 99.998046875
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.0035408465191721916,
      "indian": 0.022581133991479874,
      "black": 0.00039844517596066,
      "white": 91.72476959228516,
      "middle eastern": 4.583107948303223,
      "latino hispanic": 3.665605068206787
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.0007267950568348169,
      "disgust": 3.955549429668359e-12,
      "fear": 8.545238756596518e-07,
      "happy": 99.28395080566406,
      "sad": 0.000122389494208619,
      "surprise": 1.2303905350563582e-05,
      "neutral": 0.7151772379875183
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 35,
    "region": {
      "x": 41,
      "y": 657,
      "w": 65,
      "h": 65,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.0038748544175177813,
      "Man": 99.99612426757812
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.0410662516951561,
      "indian": 1.1498945951461792,
      "black": 0.025384943932294846,
      "white": 56.9183349609375,
      "middle eastern": 31.820863723754883,
      "latino hispanic": 10.044461250305176
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 2.689821712920093e-06,
      "disgust": 7.736440475877501e-14,
      "fear": 9.279955293095554e-07,
      "happy": 99.95174407958984,
      "sad": 9.151905942417216e-06,
      "surprise": 1.8125943824998103e-05,
      "neutral": 0.04821931943297386
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 30,
    "region": {
      "x": 607,
      "y": 657,
      "w": 64,
      "h": 64,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 1.6800824596430175e-05,
      "Man": 99.99998474121094
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.0035540105309337378,
      "indian": 0.33829838037490845,
      "black": 0.00783477071672678,
      "white": 65.75398254394531,
      "middle eastern": 29.27350616455078,
      "latino hispanic": 4.622830867767334
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 3.961475133895874,
      "disgust": 1.0685556844691746e-05,
      "fear": 8.874038696289062,
      "happy": 46.3984260559082,
      "sad": 8.025099754333496,
      "surprise": 0.009018988348543644,
      "neutral": 32.73192596435547
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 28,
    "region": {
      "x": 1169,
      "y": 659,
      "w": 61,
      "h": 61,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.97,
    "gender": {
      "Woman": 0.005394714884459972,
      "Man": 99.99459838867188
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.2979450011505863e-22,
      "indian": 4.8789789284839794e-17,
      "black": 100.0,
      "white": 6.541840848653812e-30,
      "middle eastern": 3.2342591535332346e-31,
      "latino hispanic": 8.585458635084893e-21
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 0.05951068550348282,
      "disgust": 1.047297873424391e-10,
      "fear": 0.0001127969371736981,
      "happy": 99.36863708496094,
      "sad": 0.0010380212916061282,
      "surprise": 0.005758121144026518,
      "neutral": 0.5649496912956238
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 26,
    "region": {
      "x": 468,
      "y": 850,
      "w": 62,
      "h": 62,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 0.01633170247077942,
      "Man": 99.9836654663086
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 6.282569885253906,
      "indian": 10.570921897888184,
      "black": 16.838733673095703,
      "white": 15.748908996582031,
      "middle eastern": 11.523871421813965,
      "latino hispanic": 39.03499221801758
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 0.30629974603652954,
      "disgust": 8.117654942907393e-06,
      "fear": 0.018833236768841743,
      "happy": 97.24346160888672,
      "sad": 0.3895248770713806,
      "surprise": 0.0022084834054112434,
      "neutral": 2.039661169052124
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 23,
    "region": {
      "x": 609,
      "y": 850,
      "w": 62,
      "h": 62,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.008260311558842659,
      "Man": 99.99173736572266
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 3.9473748207092285,
      "indian": 7.96466588973999,
      "black": 2.431126832962036,
      "white": 24.944456100463867,
      "middle eastern": 17.086410522460938,
      "latino hispanic": 43.6259651184082
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 0.00238725240342319,
      "disgust": 3.3817640354705247e-10,
      "fear": 3.115233266726136e-05,
      "happy": 98.7519302368164,
      "sad": 0.0002611508534755558,
      "surprise": 1.701587825664319e-05,
      "neutral": 1.245367407798767
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 25,
    "region": {
      "x": 754,
      "y": 852,
      "w": 59,
      "h": 59,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.03575534000992775,
      "Man": 99.96424865722656
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 3.3373420238494873,
      "indian": 12.949379920959473,
      "black": 42.73375701904297,
      "white": 7.940378189086914,
      "middle eastern": 10.387084007263184,
      "latino hispanic": 22.652057647705078
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 0.03311866149306297,
      "disgust": 1.541661447390652e-07,
      "fear": 0.0026372068095952272,
      "happy": 98.84252166748047,
      "sad": 0.046478938311338425,
      "surprise": 0.0024403627030551434,
      "neutral": 1.0728040933609009
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 24,
    "region": {
      "x": 892,
      "y": 852,
      "w": 60,
      "h": 60,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.039678242057561874,
      "Man": 99.96031951904297
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 1.322335958480835,
      "indian": 0.7258553504943848,
      "black": 96.81929779052734,
      "white": 0.03923306241631508,
      "middle eastern": 0.01416041050106287,
      "latino hispanic": 1.0791223049163818
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 0.013408410362899303,
      "disgust": 6.510095317935338e-06,
      "fear": 0.0008746183593757451,
      "happy": 81.01602172851562,
      "sad": 0.048890069127082825,
      "surprise": 0.0023106702137738466,
      "neutral": 18.91849136352539
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 33,
    "region": {
      "x": 1030,
      "y": 852,
      "w": 63,
      "h": 63,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 0.02403182163834572,
      "Man": 99.9759750366211
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.2518163323402405,
      "indian": 3.950852632522583,
      "black": 0.39400094747543335,
      "white": 41.472877502441406,
      "middle eastern": 41.04620361328125,
      "latino hispanic": 12.884246826171875
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.0014421679079532623,
      "disgust": 1.3557746036951812e-09,
      "fear": 1.3939191376266535e-05,
      "happy": 96.97232818603516,
      "sad": 0.0023072054609656334,
      "surprise": 0.002742585027590394,
      "neutral": 3.0211710929870605
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 25,
    "region": {
      "x": 179,
      "y": 853,
      "w": 67,
      "h": 67,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.0009242912638001144,
      "Man": 99.99906921386719
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.042820706963539124,
      "indian": 0.5224876999855042,
      "black": 0.01576043851673603,
      "white": 63.329280853271484,
      "middle eastern": 24.451982498168945,
      "latino hispanic": 11.63766860961914
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 11.793161392211914,
      "disgust": 3.054195622098632e-05,
      "fear": 1.2758420705795288,
      "happy": 0.44535893201828003,
      "sad": 28.91452980041504,
      "surprise": 0.00022379320580512285,
      "neutral": 57.570858001708984
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 24,
    "region": {
      "x": 324,
      "y": 853,
      "w": 64,
      "h": 64,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 0.00027595143183134496,
      "Man": 99.99972534179688
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.5669162273406982,
      "indian": 19.024127960205078,
      "black": 64.37479400634766,
      "white": 1.3632783889770508,
      "middle eastern": 1.1940230131149292,
      "latino hispanic": 11.476861953735352
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 5.359203815460205,
      "disgust": 4.974859984940849e-05,
      "fear": 15.87480640411377,
      "happy": 0.38386285305023193,
      "sad": 44.057254791259766,
      "surprise": 0.0005322212819010019,
      "neutral": 34.32429122924805
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 30,
    "region": {
      "x": 1170,
      "y": 856,
      "w": 60,
      "h": 60,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.005186890251934528,
      "Man": 99.99481201171875
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 9.307784080505371,
      "indian": 10.588436126708984,
      "black": 16.162975311279297,
      "white": 12.471847534179688,
      "middle eastern": 7.205234527587891,
      "latino hispanic": 44.26372528076172
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 0.29838645458221436,
      "disgust": 1.8007070821113302e-06,
      "fear": 0.0024851954076439142,
      "happy": 97.71695709228516,
      "sad": 0.034187719225883484,
      "surprise": 0.008760442957282066,
      "neutral": 1.9392235279083252
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 28,
    "region": {
      "x": 754,
      "y": 1061,
      "w": 60,
      "h": 60,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.06968861818313599,
      "Man": 99.93031311035156
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 24.609594345092773,
      "indian": 10.286811828613281,
      "black": 7.020614147186279,
      "white": 19.79184341430664,
      "middle eastern": 13.301299095153809,
      "latino hispanic": 24.989835739135742
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 0.03566546365618706,
      "disgust": 2.05651176088395e-07,
      "fear": 0.0107118496671319,
      "happy": 87.20475006103516,
      "sad": 0.008335168473422527,
      "surprise": 0.026063986122608185,
      "neutral": 12.71447467803955
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 26,
    "region": {
      "x": 1166,
      "y": 1063,
      "w": 61,
      "h": 61,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.005788710433989763,
      "Man": 99.99420928955078
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.5312235951423645,
      "indian": 1.1824759244918823,
      "black": 0.09744060784578323,
      "white": 58.18309020996094,
      "middle eastern": 23.330671310424805,
      "latino hispanic": 16.675094604492188
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 1.6007691621780396,
      "disgust": 8.117788752315391e-07,
      "fear": 0.018751725554466248,
      "happy": 98.36344146728516,
      "sad": 0.012654493562877178,
      "surprise": 0.0002608235226944089,
      "neutral": 0.004108030814677477
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 25,
    "region": {
      "x": 322,
      "y": 1059,
      "w": 66,
      "h": 66,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.12330496311187744,
      "Man": 99.87670135498047
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 8.417677577199356e-08,
      "indian": 1.2647981861846347e-07,
      "black": 4.1929751337654864e-10,
      "white": 99.9857406616211,
      "middle eastern": 0.010057425126433372,
      "latino hispanic": 0.004210068378597498
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 7.199215668052261e-10,
      "disgust": 1.8714457295826477e-20,
      "fear": 1.227168797894411e-14,
      "happy": 99.7240219116211,
      "sad": 1.1991520665333155e-08,
      "surprise": 1.9322635935736798e-08,
      "neutral": 0.27597934007644653
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 29,
    "region": {
      "x": 606,
      "y": 1057,
      "w": 67,
      "h": 67,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.0038237718399614096,
      "Man": 99.99617004394531
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.17992638051509857,
      "indian": 11.484355926513672,
      "black": 0.9017841219902039,
      "white": 12.770289421081543,
      "middle eastern": 61.013084411621094,
      "latino hispanic": 13.650557518005371
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 1.1417378187179565,
      "disgust": 9.252239010493213e-07,
      "fear": 3.6616265773773193,
      "happy": 16.349746704101562,
      "sad": 2.4702742099761963,
      "surprise": 0.0001473862212151289,
      "neutral": 76.37646484375
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 29,
    "region": {
      "x": 42,
      "y": 1062,
      "w": 65,
      "h": 65,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 0.031214769929647446,
      "Man": 99.96878814697266
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 5.760529450367716e-14,
      "indian": 4.653236129747995e-10,
      "black": 100.0,
      "white": 1.4346175934540465e-18,
      "middle eastern": 7.492263361442061e-19,
      "latino hispanic": 1.5159218281698972e-12
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 0.030769433826208115,
      "disgust": 3.709908248661353e-12,
      "fear": 1.8696670167628326e-07,
      "happy": 99.96129608154297,
      "sad": 0.000877045386005193,
      "surprise": 3.704614357502578e-07,
      "neutral": 0.007052834145724773
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 26,
    "region": {
      "x": 465,
      "y": 1058,
      "w": 65,
      "h": 65,
      "left_eye": [
        507,
        1082
      ],
      "right_eye": [
        487,
        1082
      ]
    },
    "face_confidence": 0.96,
    "gender": {
      "Woman": 0.10144999623298645,
      "Man": 99.89854431152344
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.0038757699076086283,
      "indian": 0.0017152270302176476,
      "black": 6.467090133810416e-05,
      "white": 98.50852966308594,
      "middle eastern": 0.7857193350791931,
      "latino hispanic": 0.7000932693481445
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 1.5596195225953124e-05,
      "disgust": 3.631095261708711e-13,
      "fear": 5.217976051241635e-10,
      "happy": 96.63782501220703,
      "sad": 1.161473755928455e-05,
      "surprise": 8.032076948438771e-06,
      "neutral": 3.362137794494629
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 28,
    "region": {
      "x": 1031,
      "y": 1060,
      "w": 64,
      "h": 64,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.010286063887178898,
      "Man": 99.98971557617188
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 1.3214050686993772e-10,
      "indian": 3.677809345958849e-08,
      "black": 100.0,
      "white": 5.470918890712693e-15,
      "middle eastern": 2.4468304274806018e-15,
      "latino hispanic": 4.702782607779454e-10
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 5.0981221199035645,
      "disgust": 7.650029942851688e-07,
      "fear": 0.06382682174444199,
      "happy": 94.2061767578125,
      "sad": 0.06340637803077698,
      "surprise": 0.028647741302847862,
      "neutral": 0.5398253202438354
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 29,
    "region": {
      "x": 179,
      "y": 1064,
      "w": 66,
      "h": 66,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 7.584635022794828e-05,
      "Man": 99.99993133544922
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 1.1062543392181396,
      "indian": 12.172938346862793,
      "black": 2.2199716567993164,
      "white": 20.95294189453125,
      "middle eastern": 45.7470703125,
      "latino hispanic": 17.800823211669922
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 2.5870484023471363e-05,
      "disgust": 3.8929525841833024e-22,
      "fear": 6.553148246268847e-09,
      "happy": 99.99996948242188,
      "sad": 5.659183122119771e-10,
      "surprise": 2.525615938608894e-09,
      "neutral": 8.298486136482097e-06
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 28,
    "region": {
      "x": 890,
      "y": 1060,
      "w": 65,
      "h": 65,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.01174957025796175,
      "Man": 99.98824310302734
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 8.180293109560921e-10,
      "indian": 3.175826179813157e-08,
      "black": 100.0,
      "white": 1.071239688480493e-14,
      "middle eastern": 1.0621935036587591e-15,
      "latino hispanic": 7.305461791062839e-10
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 0.0006972250994294882,
      "disgust": 4.71620864365151e-17,
      "fear": 3.922199454109432e-09,
      "happy": 99.99817657470703,
      "sad": 3.53858609969393e-07,
      "surprise": 1.8039992255580728e-07,
      "neutral": 0.0011278593447059393
    },
    "dominant_emotion": "happy"
  }
]

console.log("Meta Results for Postal Service Clerk:");
const data = postal_service_clerk_data.concat(postal_service_clerk_data2, postal_service_clerk_data3, postal_service_clerk_data4);
console.log(processData(data));