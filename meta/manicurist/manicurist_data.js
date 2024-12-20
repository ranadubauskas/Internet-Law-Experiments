const { processData } = require('../../data_processing.js');

let manicurist_data = [
  {
    "age": 30,
    "region": {
      "x": 1115,
      "y": 7,
      "w": 55,
      "h": 55,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 2.7512571811676025,
      "Man": 97.24874877929688
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 17.97051239013672,
      "indian": 11.569454193115234,
      "black": 5.793565273284912,
      "white": 21.18271827697754,
      "middle eastern": 19.780658721923828,
      "latino hispanic": 23.703092575073242
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 3.147210121154785,
      "disgust": 0.016307303681969643,
      "fear": 1.50332510471344,
      "happy": 2.103508710861206,
      "sad": 32.766944885253906,
      "surprise": 0.023559197783470154,
      "neutral": 60.439144134521484
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 23,
    "region": {
      "x": 981,
      "y": 21,
      "w": 52,
      "h": 52,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.96,
    "gender": {
      "Woman": 1.817186951637268,
      "Man": 98.18281555175781
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 1.8094446659088135,
      "indian": 4.5131354331970215,
      "black": 0.5363269448280334,
      "white": 48.79537582397461,
      "middle eastern": 23.849889755249023,
      "latino hispanic": 20.49582862854004
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 44.48780059814453,
      "disgust": 0.02038934826850891,
      "fear": 5.330248832702637,
      "happy": 0.08380885422229767,
      "sad": 39.52700424194336,
      "surprise": 0.048965755850076675,
      "neutral": 10.50178337097168
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 24,
    "region": {
      "x": 1157,
      "y": 45,
      "w": 59,
      "h": 59,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.89,
    "gender": {
      "Woman": 22.796463012695312,
      "Man": 77.20354461669922
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 45.464237213134766,
      "indian": 11.512815475463867,
      "black": 3.341566324234009,
      "white": 2.809058427810669,
      "middle eastern": 1.0584594011306763,
      "latino hispanic": 35.81386184692383
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.043033894151449203,
      "disgust": 1.8721077310601686e-07,
      "fear": 0.13445566594600677,
      "happy": 0.5798162817955017,
      "sad": 0.2816605567932129,
      "surprise": 0.0006259161164052784,
      "neutral": 98.96041107177734
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 26,
    "region": {
      "x": 903,
      "y": 28,
      "w": 55,
      "h": 55,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.6708275079727173,
      "Man": 99.32917022705078
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 26.419572830200195,
      "indian": 13.351295471191406,
      "black": 10.8695707321167,
      "white": 10.864288330078125,
      "middle eastern": 10.33796501159668,
      "latino hispanic": 28.15731430053711
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 15.85501766204834,
      "disgust": 0.4190041720867157,
      "fear": 20.10700225830078,
      "happy": 0.19694040715694427,
      "sad": 55.573814392089844,
      "surprise": 0.07043088227510452,
      "neutral": 7.777793884277344
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 23,
    "region": {
      "x": 808,
      "y": 28,
      "w": 60,
      "h": 60,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 2.062756299972534,
      "Man": 97.93724060058594
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 20.225032806396484,
      "indian": 4.268435001373291,
      "black": 2.0026421546936035,
      "white": 41.048728942871094,
      "middle eastern": 12.474052429199219,
      "latino hispanic": 19.981117248535156
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 6.976310729980469,
      "disgust": 2.3189654712041374e-06,
      "fear": 20.86261749267578,
      "happy": 0.008586812764406204,
      "sad": 59.250057220458984,
      "surprise": 0.08330067992210388,
      "neutral": 12.819123268127441
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 26,
    "region": {
      "x": 340,
      "y": 22,
      "w": 66,
      "h": 66,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 0.12604071199893951,
      "Man": 99.87396240234375
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 29.40836524963379,
      "indian": 12.834680557250977,
      "black": 18.887723922729492,
      "white": 4.145725727081299,
      "middle eastern": 2.303040027618408,
      "latino hispanic": 32.42047119140625
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 3.241211175918579,
      "disgust": 4.278828782844357e-06,
      "fear": 0.7698855996131897,
      "happy": 0.006166954059153795,
      "sad": 37.92698287963867,
      "surprise": 1.1868677574966568e-05,
      "neutral": 58.05574035644531
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 99,
      "y": 29,
      "w": 59,
      "h": 59,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.88,
    "gender": {
      "Woman": 79.9615707397461,
      "Man": 20.038434982299805
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 30.310407638549805,
      "indian": 9.807144165039062,
      "black": 6.572984218597412,
      "white": 6.190619468688965,
      "middle eastern": 3.341209888458252,
      "latino hispanic": 43.77763748168945
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 0.01549945492297411,
      "disgust": 9.617586016474888e-08,
      "fear": 0.07378200441598892,
      "happy": 0.10889162868261337,
      "sad": 0.8102648854255676,
      "surprise": 0.0023822106886655092,
      "neutral": 98.98918151855469
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 27,
    "region": {
      "x": 722,
      "y": 28,
      "w": 61,
      "h": 61,
      "left_eye": [
        763,
        50
      ],
      "right_eye": [
        742,
        50
      ]
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 12.201285362243652,
      "Man": 87.79871368408203
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 38.80488204956055,
      "indian": 20.119312286376953,
      "black": 11.824060440063477,
      "white": 2.39422345161438,
      "middle eastern": 1.7006950378417969,
      "latino hispanic": 25.156831741333008
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 18.14272117614746,
      "disgust": 0.040598951280117035,
      "fear": 6.085504531860352,
      "happy": 0.05565212666988373,
      "sad": 54.60579299926758,
      "surprise": 0.0032387832179665565,
      "neutral": 21.066495895385742
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 27,
    "region": {
      "x": 256,
      "y": 26,
      "w": 60,
      "h": 60,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 67.60000610351562,
      "Man": 32.399986267089844
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 67.0093765258789,
      "indian": 5.79580545425415,
      "black": 1.697446346282959,
      "white": 4.210330009460449,
      "middle eastern": 1.1681432723999023,
      "latino hispanic": 20.11890411376953
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 5.281089782714844,
      "disgust": 0.003978228662163019,
      "fear": 4.523581504821777,
      "happy": 0.2749307155609131,
      "sad": 25.078168869018555,
      "surprise": 0.05056096240878105,
      "neutral": 64.78768920898438
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 23,
    "region": {
      "x": 429,
      "y": 33,
      "w": 63,
      "h": 63,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 9.450597763061523,
      "Man": 90.54940032958984
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 32.57052230834961,
      "indian": 2.982719659805298,
      "black": 1.3551695346832275,
      "white": 28.979887008666992,
      "middle eastern": 13.64044189453125,
      "latino hispanic": 20.47126579284668
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.09630411118268967,
      "disgust": 6.383767819917452e-11,
      "fear": 0.0012429555645212531,
      "happy": 8.540919952793047e-05,
      "sad": 22.56661605834961,
      "surprise": 4.417749011054184e-08,
      "neutral": 77.33575439453125
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 34,
    "region": {
      "x": 538,
      "y": 35,
      "w": 58,
      "h": 58,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.3621472120285034,
      "Man": 99.63784790039062
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.6668773889541626,
      "indian": 16.837387084960938,
      "black": 0.6235942244529724,
      "white": 14.767905235290527,
      "middle eastern": 55.006656646728516,
      "latino hispanic": 12.09758186340332
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 0.007319693453609943,
      "disgust": 1.1107261776999167e-09,
      "fear": 0.01635598950088024,
      "happy": 2.6907520805252716e-05,
      "sad": 0.1735345423221588,
      "surprise": 7.667586032766849e-05,
      "neutral": 99.80268859863281
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 639,
      "y": 33,
      "w": 58,
      "h": 58,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 4.532804012298584,
      "Man": 95.46720123291016
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.700820207595825,
      "indian": 5.000965118408203,
      "black": 0.6626753807067871,
      "white": 42.750526428222656,
      "middle eastern": 22.37849235534668,
      "latino hispanic": 26.50652503967285
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 17.503292083740234,
      "disgust": 0.021128365769982338,
      "fear": 11.416667938232422,
      "happy": 0.0047432491555809975,
      "sad": 43.064353942871094,
      "surprise": 0.4023773968219757,
      "neutral": 27.58743667602539
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 24,
    "region": {
      "x": 1071,
      "y": 38,
      "w": 58,
      "h": 58,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.305703341960907,
      "Man": 99.69429016113281
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 98.08021545410156,
      "indian": 0.1594933271408081,
      "black": 0.023111945018172264,
      "white": 0.1115633025765419,
      "middle eastern": 0.008807999081909657,
      "latino hispanic": 1.6167994737625122
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.7584223747253418,
      "disgust": 0.014138325117528439,
      "fear": 60.10771560668945,
      "happy": 1.7180618047714233,
      "sad": 19.791780471801758,
      "surprise": 0.05009152740240097,
      "neutral": 17.559795379638672
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 29,
    "region": {
      "x": 1236,
      "y": 36,
      "w": 43,
      "h": 59,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.96,
    "gender": {
      "Woman": 82.64176177978516,
      "Man": 17.358245849609375
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 13.91415023803711,
      "indian": 11.188891410827637,
      "black": 55.406211853027344,
      "white": 3.3283498287200928,
      "middle eastern": 1.6678279638290405,
      "latino hispanic": 14.494569778442383
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 0.0033639236353337765,
      "disgust": 3.656342869362561e-06,
      "fear": 1.556120753288269,
      "happy": 0.00010931018186965957,
      "sad": 98.35923767089844,
      "surprise": 2.5580740725672513e-07,
      "neutral": 0.08116208761930466
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 24,
    "region": {
      "x": 164,
      "y": 46,
      "w": 64,
      "h": 64,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.85,
    "gender": {
      "Woman": 7.265353202819824,
      "Man": 92.7346420288086
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 18.75942039489746,
      "indian": 13.709412574768066,
      "black": 14.37678337097168,
      "white": 9.11816692352295,
      "middle eastern": 6.354289531707764,
      "latino hispanic": 37.68192672729492
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 12.691810607910156,
      "disgust": 0.001366190379485488,
      "fear": 4.19814395904541,
      "happy": 0.571704626083374,
      "sad": 46.378170013427734,
      "surprise": 0.011706666089594364,
      "neutral": 36.147098541259766
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 27,
    "region": {
      "x": 14,
      "y": 38,
      "w": 64,
      "h": 64,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 96.04336547851562,
      "Man": 3.9566385746002197
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 2.2243759632110596,
      "indian": 1.4371098279953003,
      "black": 0.23127438127994537,
      "white": 60.843231201171875,
      "middle eastern": 15.550796508789062,
      "latino hispanic": 19.71321678161621
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.004036020487546921,
      "disgust": 5.857814233678482e-09,
      "fear": 0.011203441768884659,
      "happy": 0.6861454248428345,
      "sad": 0.1320020705461502,
      "surprise": 0.0004435879527591169,
      "neutral": 99.16616821289062
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 22,
    "region": {
      "x": 68,
      "y": 130,
      "w": 68,
      "h": 68,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 0.6743857860565186,
      "Man": 99.32560729980469
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 17.04976463317871,
      "indian": 31.756803512573242,
      "black": 7.119427680969238,
      "white": 8.235107421875,
      "middle eastern": 8.31185245513916,
      "latino hispanic": 27.527050018310547
    },
    "dominant_race": "indian",
    "emotion": {
      "angry": 1.962806224822998,
      "disgust": 0.0009314613416790962,
      "fear": 3.827739953994751,
      "happy": 0.7142781019210815,
      "sad": 8.09434986114502,
      "surprise": 0.03794439509510994,
      "neutral": 85.36195373535156
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 23,
    "region": {
      "x": 755,
      "y": 134,
      "w": 69,
      "h": 69,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 2.955662727355957,
      "Man": 97.04434204101562
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 37.073551177978516,
      "indian": 10.769817352294922,
      "black": 21.695205688476562,
      "white": 5.542403221130371,
      "middle eastern": 3.503899097442627,
      "latino hispanic": 21.415124893188477
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 27.359983444213867,
      "disgust": 0.03109796904027462,
      "fear": 1.5755372047424316,
      "happy": 0.675696074962616,
      "sad": 35.672367095947266,
      "surprise": 0.002823149086907506,
      "neutral": 34.6824951171875
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 25,
    "region": {
      "x": 1094,
      "y": 124,
      "w": 65,
      "h": 65,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 0.22854742407798767,
      "Man": 99.77145385742188
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 13.64721393585205,
      "indian": 22.109600067138672,
      "black": 7.250216484069824,
      "white": 11.653865814208984,
      "middle eastern": 10.213029861450195,
      "latino hispanic": 35.126075744628906
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 3.731865406036377,
      "disgust": 0.002611769363284111,
      "fear": 14.501260757446289,
      "happy": 0.010194439440965652,
      "sad": 76.15677642822266,
      "surprise": 0.004871430341154337,
      "neutral": 5.59243106842041
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 21,
    "region": {
      "x": 407,
      "y": 124,
      "w": 73,
      "h": 73,
      "left_eye": [
        452,
        150
      ],
      "right_eye": [
        430,
        152
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.35544779896736145,
      "Man": 99.64456176757812
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 62.31800842285156,
      "indian": 4.723776817321777,
      "black": 7.441852569580078,
      "white": 4.88726282119751,
      "middle eastern": 1.9589109420776367,
      "latino hispanic": 18.670185089111328
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.8706067800521851,
      "disgust": 2.2873707905546325e-07,
      "fear": 12.311164855957031,
      "happy": 0.0003483806794974953,
      "sad": 65.58358764648438,
      "surprise": 0.0009661491494625807,
      "neutral": 21.23332405090332
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 31,
    "region": {
      "x": 216,
      "y": 125,
      "w": 78,
      "h": 78,
      "left_eye": [
        267,
        153
      ],
      "right_eye": [
        242,
        155
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 99.51448059082031,
      "Man": 0.48551639914512634
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 98.06297302246094,
      "indian": 0.3247414827346802,
      "black": 0.9467281103134155,
      "white": 0.021596835926175117,
      "middle eastern": 0.001456168363802135,
      "latino hispanic": 0.6425075531005859
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 33.54430389404297,
      "disgust": 0.0025560033973306417,
      "fear": 2.2136147022247314,
      "happy": 0.04058021679520607,
      "sad": 25.44378662109375,
      "surprise": 3.2993681088555604e-05,
      "neutral": 38.755126953125
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 126,
      "y": 176,
      "w": 77,
      "h": 77,
      "left_eye": [
        181,
        205
      ],
      "right_eye": [
        152,
        205
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 2.0095436573028564,
      "Man": 97.9904556274414
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 12.156787872314453,
      "indian": 12.651931762695312,
      "black": 30.42534828186035,
      "white": 11.495019912719727,
      "middle eastern": 8.885721206665039,
      "latino hispanic": 24.385189056396484
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 9.440546035766602,
      "disgust": 0.0004844074137508869,
      "fear": 19.784515380859375,
      "happy": 0.0002921546983998269,
      "sad": 65.5411148071289,
      "surprise": 0.0048276218585669994,
      "neutral": 5.228226661682129
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 22,
    "region": {
      "x": 465,
      "y": 179,
      "w": 80,
      "h": 80,
      "left_eye": [
        519,
        209
      ],
      "right_eye": [
        488,
        209
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 1.6028116941452026,
      "Man": 98.39718627929688
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 46.12721633911133,
      "indian": 12.11453914642334,
      "black": 7.218063831329346,
      "white": 7.7323408126831055,
      "middle eastern": 4.694764614105225,
      "latino hispanic": 22.113075256347656
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 48.40981674194336,
      "disgust": 0.0001303131866734475,
      "fear": 23.984769821166992,
      "happy": 0.00015136285219341516,
      "sad": 27.106264114379883,
      "surprise": 0.0038730839733034372,
      "neutral": 0.494994580745697
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 23,
    "region": {
      "x": 645,
      "y": 108,
      "w": 81,
      "h": 81,
      "left_eye": [
        696,
        137
      ],
      "right_eye": [
        673,
        138
      ]
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 70.8666000366211,
      "Man": 29.133398056030273
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 58.72578048706055,
      "indian": 6.2301788330078125,
      "black": 3.1382992267608643,
      "white": 2.357358694076538,
      "middle eastern": 0.8058531880378723,
      "latino hispanic": 28.742534637451172
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 18.620012283325195,
      "disgust": 0.04010890796780586,
      "fear": 27.142969131469727,
      "happy": 0.10957195609807968,
      "sad": 45.343135833740234,
      "surprise": 0.031120458617806435,
      "neutral": 8.71308708190918
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 31,
    "region": {
      "x": 987,
      "y": 82,
      "w": 76,
      "h": 76,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 58.01335525512695,
      "Man": 41.98664093017578
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 83.5308837890625,
      "indian": 1.8516939878463745,
      "black": 0.9117435812950134,
      "white": 2.715975761413574,
      "middle eastern": 0.8502423167228699,
      "latino hispanic": 10.139456748962402
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 1.0238990783691406,
      "disgust": 0.0010044766822829843,
      "fear": 26.146770477294922,
      "happy": 1.224392056465149,
      "sad": 17.591821670532227,
      "surprise": 0.2327287495136261,
      "neutral": 53.779388427734375
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 27,
    "region": {
      "x": 520,
      "y": 99,
      "w": 78,
      "h": 78,
      "left_eye": [
        572,
        128
      ],
      "right_eye": [
        544,
        130
      ]
    },
    "face_confidence": 0.89,
    "gender": {
      "Woman": 77.52597045898438,
      "Man": 22.47403335571289
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 11.831255912780762,
      "indian": 6.315835952758789,
      "black": 73.88806915283203,
      "white": 0.2954894006252289,
      "middle eastern": 0.12693004310131073,
      "latino hispanic": 7.542428016662598
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 31.23520278930664,
      "disgust": 0.0006538425222970545,
      "fear": 9.009568214416504,
      "happy": 0.0003307031583972275,
      "sad": 53.787139892578125,
      "surprise": 3.204763925168663e-05,
      "neutral": 5.967081546783447
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 33,
    "region": {
      "x": 290,
      "y": 203,
      "w": 85,
      "h": 85,
      "left_eye": [
        347,
        232
      ],
      "right_eye": [
        314,
        235
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 99.9804916381836,
      "Man": 0.01950657367706299
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 15.114307403564453,
      "indian": 13.631169319152832,
      "black": 2.9034838676452637,
      "white": 14.091984748840332,
      "middle eastern": 7.767973899841309,
      "latino hispanic": 46.49107360839844
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 19.396581649780273,
      "disgust": 0.0029962880071252584,
      "fear": 7.0112080574035645,
      "happy": 0.0036601864267140627,
      "sad": 53.05461120605469,
      "surprise": 0.0054375831969082355,
      "neutral": 20.525503158569336
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 22,
    "region": {
      "x": 1210,
      "y": 207,
      "w": 69,
      "h": 93,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 0.1685764193534851,
      "Man": 99.83142852783203
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 59.62711715698242,
      "indian": 4.395690441131592,
      "black": 5.596700668334961,
      "white": 5.789477348327637,
      "middle eastern": 1.4634151458740234,
      "latino hispanic": 23.127601623535156
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.023227864876389503,
      "disgust": 2.1457005061620293e-07,
      "fear": 0.0313752256333828,
      "happy": 6.844264044403303e-10,
      "sad": 99.94174194335938,
      "surprise": 1.6260366664244685e-10,
      "neutral": 0.0036571931559592485
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 31,
    "region": {
      "x": 704,
      "y": 214,
      "w": 100,
      "h": 100,
      "left_eye": [
        767,
        253
      ],
      "right_eye": [
        736,
        253
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 2.133113145828247,
      "Man": 97.86688232421875
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.8810811042785645,
      "indian": 3.632129669189453,
      "black": 91.8957290649414,
      "white": 0.023083575069904327,
      "middle eastern": 0.00793666671961546,
      "latino hispanic": 1.5600439310073853
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 0.5815073251724243,
      "disgust": 4.3048098632425535e-06,
      "fear": 10.324980735778809,
      "happy": 0.00038383775972761214,
      "sad": 83.26780700683594,
      "surprise": 2.6786423404701054e-05,
      "neutral": 5.825291633605957
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 27,
    "region": {
      "x": 859,
      "y": 213,
      "w": 102,
      "h": 102,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 4.524740695953369,
      "Man": 95.47525787353516
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 11.057501792907715,
      "indian": 14.692680358886719,
      "black": 2.412646770477295,
      "white": 21.666698455810547,
      "middle eastern": 19.015012741088867,
      "latino hispanic": 31.15546226501465
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 90.4690933227539,
      "disgust": 4.8344266367905675e-09,
      "fear": 0.00150262878742069,
      "happy": 0.00024461853899993,
      "sad": 9.140915870666504,
      "surprise": 2.994246864340688e-11,
      "neutral": 0.388248473405838
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 25,
    "region": {
      "x": 1068,
      "y": 225,
      "w": 101,
      "h": 101,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.260187566280365,
      "Man": 99.73981475830078
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 16.808109283447266,
      "indian": 15.172940254211426,
      "black": 2.738222599029541,
      "white": 22.887483596801758,
      "middle eastern": 19.103626251220703,
      "latino hispanic": 23.289615631103516
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 58.89881134033203,
      "disgust": 0.04808063432574272,
      "fear": 19.86751365661621,
      "happy": 0.0015635292511433363,
      "sad": 12.874150276184082,
      "surprise": 1.396967887878418,
      "neutral": 6.9129109382629395
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 25,
    "region": {
      "x": 953,
      "y": 177,
      "w": 86,
      "h": 86,
      "left_eye": [
        1010,
        209
      ],
      "right_eye": [
        981,
        209
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 6.394194602966309,
      "Man": 93.6058120727539
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 39.85070037841797,
      "indian": 15.065628051757812,
      "black": 10.510165214538574,
      "white": 4.607334136962891,
      "middle eastern": 3.8404316902160645,
      "latino hispanic": 26.125747680664062
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 3.752858877182007,
      "disgust": 6.419235774046683e-07,
      "fear": 1.4413443803787231,
      "happy": 0.0017516392981633544,
      "sad": 10.072968482971191,
      "surprise": 5.826115011586808e-05,
      "neutral": 84.73101806640625
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 30,
    "region": {
      "x": 0,
      "y": 192,
      "w": 99,
      "h": 99,
      "left_eye": [
        54,
        228
      ],
      "right_eye": [
        22,
        230
      ]
    },
    "face_confidence": 0.89,
    "gender": {
      "Woman": 0.4333443343639374,
      "Man": 99.566650390625
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 68.68396759033203,
      "indian": 6.215813636779785,
      "black": 2.454383373260498,
      "white": 5.281132221221924,
      "middle eastern": 2.1172027587890625,
      "latino hispanic": 15.247503280639648
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 23.24588966369629,
      "disgust": 0.0008507986203767359,
      "fear": 2.2121729850769043,
      "happy": 2.8086222300771624e-05,
      "sad": 67.78584289550781,
      "surprise": 3.535065479809418e-05,
      "neutral": 6.755186080932617
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 25,
    "region": {
      "x": 335,
      "y": 310,
      "w": 100,
      "h": 100,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 3.1671340465545654,
      "Man": 96.8328628540039
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.2248616460274206e-06,
      "indian": 4.8702245294407476e-06,
      "black": 9.203927398004907e-09,
      "white": 99.93354797363281,
      "middle eastern": 0.05009406805038452,
      "latino hispanic": 0.016357501968741417
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.23535656929016113,
      "disgust": 1.4922502122871606e-10,
      "fear": 65.77249908447266,
      "happy": 13.079448699951172,
      "sad": 20.749759674072266,
      "surprise": 1.3907266293244902e-05,
      "neutral": 0.16292832791805267
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 27,
    "region": {
      "x": 1121,
      "y": 317,
      "w": 124,
      "h": 124,
      "left_eye": [
        1207,
        364
      ],
      "right_eye": [
        1170,
        366
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 1.2633213996887207,
      "Man": 98.73667907714844
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 8.836845397949219,
      "indian": 35.90966796875,
      "black": 3.057429313659668,
      "white": 11.23819351196289,
      "middle eastern": 13.514058113098145,
      "latino hispanic": 27.44380760192871
    },
    "dominant_race": "indian",
    "emotion": {
      "angry": 7.344766139984131,
      "disgust": 2.9029817596892826e-05,
      "fear": 7.962153911590576,
      "happy": 0.018290214240550995,
      "sad": 20.97808074951172,
      "surprise": 0.0014715426368638873,
      "neutral": 63.69520950317383
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 27,
    "region": {
      "x": 216,
      "y": 343,
      "w": 115,
      "h": 115,
      "left_eye": [
        291,
        385
      ],
      "right_eye": [
        254,
        386
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 6.1659088134765625,
      "Man": 93.83409118652344
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 11.261107444763184,
      "indian": 12.26589298248291,
      "black": 4.600007057189941,
      "white": 16.195362091064453,
      "middle eastern": 15.346280097961426,
      "latino hispanic": 40.33135223388672
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 39.36500930786133,
      "disgust": 0.0009859419660642743,
      "fear": 10.24460506439209,
      "happy": 0.00017545356240589172,
      "sad": 38.40660095214844,
      "surprise": 0.005747064016759396,
      "neutral": 11.976875305175781
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 31,
    "region": {
      "x": 803,
      "y": 298,
      "w": 116,
      "h": 116,
      "left_eye": [
        882,
        341
      ],
      "right_eye": [
        840,
        342
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 99.9706802368164,
      "Man": 0.02931547351181507
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 34.212501525878906,
      "indian": 8.575952529907227,
      "black": 4.239006519317627,
      "white": 20.616676330566406,
      "middle eastern": 12.467198371887207,
      "latino hispanic": 19.88866424560547
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 13.678000450134277,
      "disgust": 8.0435311247129e-05,
      "fear": 4.342880725860596,
      "happy": 0.0014060279354453087,
      "sad": 65.40486907958984,
      "surprise": 0.0007327298517338932,
      "neutral": 16.57202911376953
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 22,
    "region": {
      "x": 55,
      "y": 315,
      "w": 120,
      "h": 120,
      "left_eye": [
        132,
        358
      ],
      "right_eye": [
        95,
        363
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.12132395058870316,
      "Man": 99.87867736816406
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 53.28546142578125,
      "indian": 6.293500900268555,
      "black": 2.5322868824005127,
      "white": 15.223161697387695,
      "middle eastern": 5.661501884460449,
      "latino hispanic": 17.004087448120117
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 31.12742805480957,
      "disgust": 0.0005730458069592714,
      "fear": 5.064439296722412,
      "happy": 0.004829334560781717,
      "sad": 41.34040069580078,
      "surprise": 0.0020945677533745766,
      "neutral": 22.460241317749023
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 30,
    "region": {
      "x": 396,
      "y": 262,
      "w": 106,
      "h": 106,
      "left_eye": [
        469,
        301
      ],
      "right_eye": [
        431,
        302
      ]
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 97.08922576904297,
      "Man": 2.9107718467712402
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 10.325835227966309,
      "indian": 10.779695510864258,
      "black": 4.488478183746338,
      "white": 19.399099349975586,
      "middle eastern": 21.07887077331543,
      "latino hispanic": 33.92802047729492
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 19.55585289001465,
      "disgust": 0.004933812189847231,
      "fear": 2.199211835861206,
      "happy": 0.05110549554228783,
      "sad": 35.01626968383789,
      "surprise": 0.001778338453732431,
      "neutral": 43.17085266113281
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 562,
      "y": 265,
      "w": 123,
      "h": 123,
      "left_eye": [
        641,
        308
      ],
      "right_eye": [
        610,
        311
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.4984024465084076,
      "Man": 99.50160217285156
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 14.702725410461426,
      "indian": 11.780597686767578,
      "black": 4.9149041175842285,
      "white": 20.67927360534668,
      "middle eastern": 13.565832138061523,
      "latino hispanic": 34.35666275024414
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 3.112217664718628,
      "disgust": 3.5452324027573923e-06,
      "fear": 0.9957237243652344,
      "happy": 0.006710979621857405,
      "sad": 5.446061611175537,
      "surprise": 0.00027654963196255267,
      "neutral": 90.43901062011719
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 29,
    "region": {
      "x": 447,
      "y": 394,
      "w": 126,
      "h": 126,
      "left_eye": [
        529,
        442
      ],
      "right_eye": [
        488,
        443
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 92.31596374511719,
      "Man": 7.684033393859863
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 6.927685260772705,
      "indian": 15.548206329345703,
      "black": 6.836302280426025,
      "white": 13.362792015075684,
      "middle eastern": 31.661264419555664,
      "latino hispanic": 25.663742065429688
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 0.7334617376327515,
      "disgust": 0.0002537630789447576,
      "fear": 1.1087844371795654,
      "happy": 3.776768445968628,
      "sad": 4.316474914550781,
      "surprise": 0.12449105083942413,
      "neutral": 89.93976593017578
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 30,
    "region": {
      "x": 974,
      "y": 438,
      "w": 130,
      "h": 130,
      "left_eye": [
        1063,
        485
      ],
      "right_eye": [
        1016,
        486
      ]
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 80.6401596069336,
      "Man": 19.359840393066406
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 4.543603897094727,
      "indian": 35.28104019165039,
      "black": 2.871039628982544,
      "white": 10.072691917419434,
      "middle eastern": 13.130718231201172,
      "latino hispanic": 34.10091018676758
    },
    "dominant_race": "indian",
    "emotion": {
      "angry": 22.28908348083496,
      "disgust": 3.3237069146707654e-05,
      "fear": 6.906713008880615,
      "happy": 0.0003592257562559098,
      "sad": 54.492706298828125,
      "surprise": 5.149070148036117e-07,
      "neutral": 16.311105728149414
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 26,
    "region": {
      "x": 721,
      "y": 416,
      "w": 120,
      "h": 120,
      "left_eye": [
        800,
        458
      ],
      "right_eye": [
        756,
        459
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 85.08907318115234,
      "Man": 14.910921096801758
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 3.081300735473633,
      "indian": 5.786823749542236,
      "black": 1.7432974576950073,
      "white": 32.641239166259766,
      "middle eastern": 29.228666305541992,
      "latino hispanic": 27.5186710357666
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 25.95199203491211,
      "disgust": 0.052331142127513885,
      "fear": 13.706279754638672,
      "happy": 0.14628799259662628,
      "sad": 44.85249710083008,
      "surprise": 0.005269781220704317,
      "neutral": 15.285345077514648
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 25,
    "region": {
      "x": 568,
      "y": 555,
      "w": 138,
      "h": 138,
      "left_eye": [
        658,
        605
      ],
      "right_eye": [
        614,
        606
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 59.03798294067383,
      "Man": 40.96202087402344
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 6.900081634521484,
      "indian": 8.312945365905762,
      "black": 3.010584831237793,
      "white": 26.18219566345215,
      "middle eastern": 25.492963790893555,
      "latino hispanic": 30.101234436035156
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 29.4804630279541,
      "disgust": 1.0811136235133745e-05,
      "fear": 1.0063844919204712,
      "happy": 0.0013672476634383202,
      "sad": 30.789762496948242,
      "surprise": 9.048151241586311e-07,
      "neutral": 38.722007751464844
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 33,
    "region": {
      "x": 806,
      "y": 552,
      "w": 145,
      "h": 145,
      "left_eye": [
        903,
        606
      ],
      "right_eye": [
        856,
        607
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 98.31243896484375,
      "Man": 1.6875660419464111
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 3.396634340286255,
      "indian": 10.208571434020996,
      "black": 0.42739611864089966,
      "white": 20.35785675048828,
      "middle eastern": 45.83988952636719,
      "latino hispanic": 19.769651412963867
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 1.3425533771514893,
      "disgust": 4.2052924698054994e-08,
      "fear": 0.05408135801553726,
      "happy": 0.0032446521800011396,
      "sad": 1.0702763795852661,
      "surprise": 1.7062326151062734e-05,
      "neutral": 97.52983093261719
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 32,
    "region": {
      "x": 69,
      "y": 509,
      "w": 139,
      "h": 139,
      "left_eye": [
        161,
        558
      ],
      "right_eye": [
        139,
        567
      ]
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 0.6310961246490479,
      "Man": 99.36890411376953
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 16.187925338745117,
      "indian": 9.365784645080566,
      "black": 2.6971161365509033,
      "white": 21.67215919494629,
      "middle eastern": 26.09633445739746,
      "latino hispanic": 23.980676651000977
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 0.18458084762096405,
      "disgust": 1.6857695683825114e-08,
      "fear": 0.059602946043014526,
      "happy": 0.05556049942970276,
      "sad": 0.04330183565616608,
      "surprise": 0.0005475986399687827,
      "neutral": 99.65641021728516
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 27,
    "region": {
      "x": 336,
      "y": 593,
      "w": 139,
      "h": 139,
      "left_eye": [
        381,
        643
      ],
      "right_eye": [
        404,
        647
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 1.806909441947937,
      "Man": 98.19308471679688
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 20.313940048217773,
      "indian": 6.6994147300720215,
      "black": 8.04050350189209,
      "white": 32.11639404296875,
      "middle eastern": 15.785784721374512,
      "latino hispanic": 17.043968200683594
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 1.468003847548971e-05,
      "disgust": 3.864212422266533e-11,
      "fear": 91.9527816772461,
      "happy": 8.388211426790804e-05,
      "sad": 7.844985008239746,
      "surprise": 0.0072087738662958145,
      "neutral": 0.19493219256401062
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 29,
    "region": {
      "x": 512,
      "y": 797,
      "w": 172,
      "h": 172,
      "left_eye": [
        622,
        859
      ],
      "right_eye": [
        564,
        859
      ]
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 99.52840423583984,
      "Man": 0.4715935289859772
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 5.7407097816467285,
      "indian": 10.723812103271484,
      "black": 2.399808168411255,
      "white": 21.376630783081055,
      "middle eastern": 20.459972381591797,
      "latino hispanic": 39.29906463623047
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 22.89651107788086,
      "disgust": 0.0006512914551422,
      "fear": 1.6675469875335693,
      "happy": 2.2819080352783203,
      "sad": 45.10153579711914,
      "surprise": 0.036042314022779465,
      "neutral": 28.015806198120117
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 25,
    "region": {
      "x": 885,
      "y": 804,
      "w": 160,
      "h": 160,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 97.4959487915039,
      "Man": 2.50405216217041
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 4.378292083740234,
      "indian": 7.419888496398926,
      "black": 0.5813368558883667,
      "white": 31.612398147583008,
      "middle eastern": 32.38005828857422,
      "latino hispanic": 23.628028869628906
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 7.096751689910889,
      "disgust": 0.00023821588547434658,
      "fear": 3.4522833824157715,
      "happy": 0.023701734840869904,
      "sad": 42.01335906982422,
      "surprise": 0.0003259044897276908,
      "neutral": 47.41333770751953
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 28,
    "region": {
      "x": 233,
      "y": 823,
      "w": 138,
      "h": 138,
      "left_eye": [
        325,
        869
      ],
      "right_eye": [
        269,
        871
      ]
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 2.9263222217559814,
      "Man": 97.07367706298828
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 37.017215728759766,
      "indian": 12.92919921875,
      "black": 7.262052059173584,
      "white": 10.140262603759766,
      "middle eastern": 5.564279079437256,
      "latino hispanic": 27.086994171142578
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 21.14799690246582,
      "disgust": 0.004440343007445335,
      "fear": 1.3247663974761963,
      "happy": 0.0026811135467141867,
      "sad": 39.517269134521484,
      "surprise": 0.00018124848429579288,
      "neutral": 38.00267028808594
    },
    "dominant_emotion": "sad"
  }
]

let manicurist_data2 = [
  {
    "age": 31,
    "region": {
      "x": 848,
      "y": 0,
      "w": 122,
      "h": 122,
      "left_eye": [
        931,
        31
      ],
      "right_eye": [
        886,
        30
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 94.80352020263672,
      "Man": 5.196475028991699
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.8679428100586,
      "indian": 0.02832459844648838,
      "black": 1.5133827218960505e-05,
      "white": 0.005851932801306248,
      "middle eastern": 7.701094091316918e-07,
      "latino hispanic": 0.09785933792591095
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.6652015447616577,
      "disgust": 2.3928062091727043e-06,
      "fear": 1.5245234966278076,
      "happy": 0.40419068932533264,
      "sad": 1.9898170232772827,
      "surprise": 0.015793558210134506,
      "neutral": 95.40047454833984
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 30,
    "region": {
      "x": 369,
      "y": 5,
      "w": 135,
      "h": 135,
      "left_eye": [
        461,
        60
      ],
      "right_eye": [
        413,
        58
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 99.98316955566406,
      "Man": 0.016830960288643837
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 96.09537506103516,
      "indian": 1.1966474056243896,
      "black": 0.008789325132966042,
      "white": 0.31398701667785645,
      "middle eastern": 0.005891567096114159,
      "latino hispanic": 2.3793113231658936
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.010164300911128521,
      "disgust": 1.1285660406201714e-08,
      "fear": 0.3447568714618683,
      "happy": 0.004628345835953951,
      "sad": 0.27132293581962585,
      "surprise": 0.0005240460741333663,
      "neutral": 99.36859893798828
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 26,
    "region": {
      "x": 559,
      "y": 45,
      "w": 134,
      "h": 134,
      "left_eye": [
        649,
        97
      ],
      "right_eye": [
        603,
        99
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 48.94212341308594,
      "Man": 51.05786895751953
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 99.97386932373047,
      "indian": 0.00833175890147686,
      "black": 4.744966020098218e-07,
      "white": 0.0012950756354257464,
      "middle eastern": 4.812119982489094e-07,
      "latino hispanic": 0.016506750136613846
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.00071262865094468,
      "disgust": 2.5014942374446125e-12,
      "fear": 0.014883275143802166,
      "happy": 1.8618256945046596e-06,
      "sad": 0.09624750167131424,
      "surprise": 4.489858724809892e-07,
      "neutral": 99.88815307617188
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 30,
    "region": {
      "x": 153,
      "y": 82,
      "w": 136,
      "h": 136,
      "left_eye": [
        246,
        136
      ],
      "right_eye": [
        197,
        135
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 99.96636962890625,
      "Man": 0.03363189846277237
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 97.32479858398438,
      "indian": 1.4803465604782104,
      "black": 0.008530744351446629,
      "white": 0.1285312920808792,
      "middle eastern": 0.002707126084715128,
      "latino hispanic": 1.055084466934204
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.1418824940919876,
      "disgust": 8.944051614889759e-07,
      "fear": 0.4142223000526428,
      "happy": 2.26586651802063,
      "sad": 0.9254922866821289,
      "surprise": 0.048531536012887955,
      "neutral": 96.2040023803711
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 26,
    "region": {
      "x": 0,
      "y": 131,
      "w": 124,
      "h": 124,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 11.41347885131836,
      "Man": 88.5865249633789
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 99.63008117675781,
      "indian": 0.07267896831035614,
      "black": 0.00019927049288526177,
      "white": 0.042426008731126785,
      "middle eastern": 7.575625932076946e-05,
      "latino hispanic": 0.25453102588653564
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.0035482197999954224,
      "disgust": 4.262851278701929e-15,
      "fear": 20.23467254638672,
      "happy": 0.00020652405510190874,
      "sad": 79.60018920898438,
      "surprise": 8.627902161606471e-07,
      "neutral": 0.1613839566707611
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 30,
    "region": {
      "x": 1004,
      "y": 141,
      "w": 134,
      "h": 134,
      "left_eye": [
        1097,
        196
      ],
      "right_eye": [
        1048,
        194
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 61.59697341918945,
      "Man": 38.40303039550781
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 98.93555450439453,
      "indian": 0.425313264131546,
      "black": 0.0009057375718839467,
      "white": 0.048514220863580704,
      "middle eastern": 0.00035796439624391496,
      "latino hispanic": 0.5893511176109314
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.004022462759166956,
      "disgust": 2.3957087250892073e-05,
      "fear": 4.898474216461182,
      "happy": 21.476022720336914,
      "sad": 0.8776182532310486,
      "surprise": 0.16078785061836243,
      "neutral": 72.58305358886719
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 23,
    "region": {
      "x": 721,
      "y": 111,
      "w": 141,
      "h": 141,
      "left_eye": [
        813,
        165
      ],
      "right_eye": [
        765,
        167
      ]
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 99.12410736083984,
      "Man": 0.8758894205093384
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 98.60037994384766,
      "indian": 0.6791792511940002,
      "black": 0.0018787224544212222,
      "white": 0.08197776228189468,
      "middle eastern": 0.002367194276303053,
      "latino hispanic": 0.634215235710144
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.02324393019080162,
      "disgust": 1.165784738077491e-06,
      "fear": 0.2595261037349701,
      "happy": 2.9379372596740723,
      "sad": 1.2232500314712524,
      "surprise": 0.0009629187406972051,
      "neutral": 95.5550765991211
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 30,
    "region": {
      "x": 443,
      "y": 146,
      "w": 148,
      "h": 148,
      "left_eye": [
        542,
        206
      ],
      "right_eye": [
        491,
        204
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 96.20709991455078,
      "Man": 3.7928924560546875
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 45.78631591796875,
      "indian": 10.223669052124023,
      "black": 2.6001880168914795,
      "white": 3.47225284576416,
      "middle eastern": 0.9188387393951416,
      "latino hispanic": 36.998741149902344
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.6908835768699646,
      "disgust": 0.001635826425626874,
      "fear": 4.228134632110596,
      "happy": 0.0012048239586874843,
      "sad": 16.908578872680664,
      "surprise": 0.00014452020695898682,
      "neutral": 78.16941833496094
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 29,
    "region": {
      "x": 1207,
      "y": 150,
      "w": 72,
      "h": 140,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.96,
    "gender": {
      "Woman": 0.12931449711322784,
      "Man": 99.87068176269531
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 12.832453727722168,
      "indian": 23.625791549682617,
      "black": 6.628880977630615,
      "white": 13.067044258117676,
      "middle eastern": 16.081459045410156,
      "latino hispanic": 27.76436424255371
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 4.81095057125458e-08,
      "disgust": 4.081241485579977e-15,
      "fear": 5.547023465624079e-05,
      "happy": 0.15972338616847992,
      "sad": 0.06963451951742172,
      "surprise": 5.823842519347977e-10,
      "neutral": 99.77058410644531
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 24,
    "region": {
      "x": 246,
      "y": 166,
      "w": 160,
      "h": 160,
      "left_eye": [
        350,
        231
      ],
      "right_eye": [
        296,
        229
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 97.59785461425781,
      "Man": 2.4021425247192383
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 98.51866149902344,
      "indian": 0.6756502985954285,
      "black": 0.002326008165255189,
      "white": 0.038736775517463684,
      "middle eastern": 0.0004821657785214484,
      "latino hispanic": 0.7641517519950867
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.10486841201782227,
      "disgust": 3.877620997627673e-07,
      "fear": 0.38239920139312744,
      "happy": 0.0014684926718473434,
      "sad": 2.770158290863037,
      "surprise": 9.553362906444818e-05,
      "neutral": 96.74101257324219
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 579,
      "y": 230,
      "w": 150,
      "h": 150,
      "left_eye": [
        681,
        289
      ],
      "right_eye": [
        625,
        289
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 99.95622253417969,
      "Man": 0.04377583786845207
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 85.90904235839844,
      "indian": 6.290886878967285,
      "black": 0.22195588052272797,
      "white": 0.6673282384872437,
      "middle eastern": 0.04041612148284912,
      "latino hispanic": 6.870368480682373
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.2639167010784149,
      "disgust": 9.955294899555156e-07,
      "fear": 0.1734640896320343,
      "happy": 0.00011840610386570916,
      "sad": 18.294532775878906,
      "surprise": 1.5471323422389105e-06,
      "neutral": 81.2679672241211
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 24,
    "region": {
      "x": 707,
      "y": 256,
      "w": 167,
      "h": 167,
      "left_eye": [
        819,
        321
      ],
      "right_eye": [
        759,
        322
      ]
    },
    "face_confidence": 0.88,
    "gender": {
      "Woman": 99.8240737915039,
      "Man": 0.17592675983905792
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.23717498779297,
      "indian": 0.30594322085380554,
      "black": 0.0004043764784000814,
      "white": 0.020871756598353386,
      "middle eastern": 3.835705865640193e-05,
      "latino hispanic": 0.4355570077896118
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.0008633237448520958,
      "disgust": 5.582004476700764e-12,
      "fear": 0.0887056365609169,
      "happy": 9.872615919448435e-05,
      "sad": 0.09951875358819962,
      "surprise": 2.1449233827297576e-05,
      "neutral": 99.810791015625
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 444,
      "y": 295,
      "w": 159,
      "h": 159,
      "left_eye": [
        552,
        357
      ],
      "right_eye": [
        496,
        356
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 42.91725540161133,
      "Man": 57.082740783691406
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 46.63331604003906,
      "indian": 15.720573425292969,
      "black": 2.231231451034546,
      "white": 3.451662063598633,
      "middle eastern": 1.3039268255233765,
      "latino hispanic": 30.659290313720703
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 1.8243409395217896,
      "disgust": 0.00035328432568348944,
      "fear": 12.869876861572266,
      "happy": 0.13297244906425476,
      "sad": 16.759052276611328,
      "surprise": 0.038681358098983765,
      "neutral": 68.37472534179688
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 27,
    "region": {
      "x": 878,
      "y": 292,
      "w": 159,
      "h": 159,
      "left_eye": [
        984,
        351
      ],
      "right_eye": [
        926,
        355
      ]
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 8.964638710021973,
      "Man": 91.03536224365234
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 99.73159790039062,
      "indian": 0.034727346152067184,
      "black": 0.00019410601817071438,
      "white": 0.028930431231856346,
      "middle eastern": 9.818145917961374e-05,
      "latino hispanic": 0.20445814728736877
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.013051270507276058,
      "disgust": 2.425093979796511e-11,
      "fear": 0.03289015218615532,
      "happy": 0.00012237124610692263,
      "sad": 0.7535904049873352,
      "surprise": 3.4198158118670108e-06,
      "neutral": 99.20034790039062
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 23,
    "region": {
      "x": 1087,
      "y": 312,
      "w": 159,
      "h": 159,
      "left_eye": [
        1194,
        373
      ],
      "right_eye": [
        1138,
        376
      ]
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 99.74371337890625,
      "Man": 0.2562893331050873
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.03651428222656,
      "indian": 0.31443479657173157,
      "black": 0.00023190394858829677,
      "white": 0.021722378209233284,
      "middle eastern": 0.00024816367658786476,
      "latino hispanic": 0.6268529295921326
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.012819075956940651,
      "disgust": 3.1523050836312905e-10,
      "fear": 8.781490325927734,
      "happy": 7.271654340001987e-06,
      "sad": 91.1620864868164,
      "surprise": 2.0932050404098845e-07,
      "neutral": 0.04360048472881317
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 22,
    "region": {
      "x": 12,
      "y": 281,
      "w": 153,
      "h": 153,
      "left_eye": [
        115,
        343
      ],
      "right_eye": [
        59,
        343
      ]
    },
    "face_confidence": 0.89,
    "gender": {
      "Woman": 93.40900421142578,
      "Man": 6.590991973876953
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 41.867698669433594,
      "indian": 13.313462257385254,
      "black": 2.173154354095459,
      "white": 10.531268119812012,
      "middle eastern": 3.931279182434082,
      "latino hispanic": 28.183137893676758
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 3.247252243454568e-05,
      "disgust": 5.399221514323926e-09,
      "fear": 2.47396155828028e-06,
      "happy": 99.20496368408203,
      "sad": 0.0018889266066253185,
      "surprise": 0.0002657453587744385,
      "neutral": 0.7928444743156433
    },
    "dominant_emotion": "happy"
  },
  {
    "age": 23,
    "region": {
      "x": 44,
      "y": 406,
      "w": 172,
      "h": 172,
      "left_eye": [
        161,
        474
      ],
      "right_eye": [
        99,
        474
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 14.088460922241211,
      "Man": 85.91153717041016
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 94.1380386352539,
      "indian": 2.455662727355957,
      "black": 0.019380303099751472,
      "white": 1.1183855533599854,
      "middle eastern": 0.31647300720214844,
      "latino hispanic": 1.9520658254623413
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.009769863449037075,
      "disgust": 3.396499748120618e-11,
      "fear": 0.08203838765621185,
      "happy": 0.0001812150439945981,
      "sad": 0.19059760868549347,
      "surprise": 1.2657962543016765e-05,
      "neutral": 99.7174072265625
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 27,
    "region": {
      "x": 242,
      "y": 398,
      "w": 179,
      "h": 179,
      "left_eye": [
        359,
        471
      ],
      "right_eye": [
        299,
        467
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 67.92684173583984,
      "Man": 32.07315444946289
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 95.12632751464844,
      "indian": 3.253448963165283,
      "black": 0.0045735216699540615,
      "white": 0.4791748821735382,
      "middle eastern": 0.015308083035051823,
      "latino hispanic": 1.121167778968811
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.0014081039698794484,
      "disgust": 1.9136354723059412e-09,
      "fear": 0.02733699418604374,
      "happy": 0.008566363714635372,
      "sad": 0.1768667995929718,
      "surprise": 0.0014407816343009472,
      "neutral": 99.78438568115234
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 30,
    "region": {
      "x": 1021,
      "y": 472,
      "w": 174,
      "h": 174,
      "left_eye": [
        1138,
        540
      ],
      "right_eye": [
        1076,
        539
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 11.169894218444824,
      "Man": 88.83010864257812
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 98.77814483642578,
      "indian": 0.6375613808631897,
      "black": 0.003543440019711852,
      "white": 0.06140967458486557,
      "middle eastern": 0.0004081114020664245,
      "latino hispanic": 0.5189352035522461
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.009744311682879925,
      "disgust": 1.664947693602592e-11,
      "fear": 0.02856532856822014,
      "happy": 0.000493726518470794,
      "sad": 0.2991337776184082,
      "surprise": 1.1705467386491364e-06,
      "neutral": 99.66206359863281
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 24,
    "region": {
      "x": 547,
      "y": 431,
      "w": 176,
      "h": 176,
      "left_eye": [
        666,
        499
      ],
      "right_eye": [
        602,
        499
      ]
    },
    "face_confidence": 0.89,
    "gender": {
      "Woman": 80.40679931640625,
      "Man": 19.593196868896484
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.30397033691406,
      "indian": 0.1961682140827179,
      "black": 0.001099863089621067,
      "white": 0.016973739489912987,
      "middle eastern": 0.00022067292593419552,
      "latino hispanic": 0.48155274987220764
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 5.8789719332708046e-05,
      "disgust": 2.3481584732198968e-11,
      "fear": 0.01113484799861908,
      "happy": 0.04037749022245407,
      "sad": 0.007372892461717129,
      "surprise": 0.00013640006363857538,
      "neutral": 99.94091796875
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 804,
      "y": 504,
      "w": 183,
      "h": 183,
      "left_eye": [
        921,
        577
      ],
      "right_eye": [
        860,
        576
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 99.32852172851562,
      "Man": 0.6714900732040405
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 91.3795394897461,
      "indian": 3.0222394466400146,
      "black": 0.09109853208065033,
      "white": 0.9538375735282898,
      "middle eastern": 0.04233583062887192,
      "latino hispanic": 4.5109477043151855
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.0013293034862726927,
      "disgust": 4.148120735791849e-11,
      "fear": 0.00021850530174560845,
      "happy": 0.10932347178459167,
      "sad": 0.20304226875305176,
      "surprise": 1.7837443522239482e-07,
      "neutral": 99.68608856201172
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 30,
    "region": {
      "x": 412,
      "y": 590,
      "w": 178,
      "h": 178,
      "left_eye": [
        531,
        661
      ],
      "right_eye": [
        469,
        661
      ]
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 99.99271392822266,
      "Man": 0.007280711084604263
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 41.774749755859375,
      "indian": 9.944794654846191,
      "black": 1.9345557689666748,
      "white": 5.2457499504089355,
      "middle eastern": 1.5530611276626587,
      "latino hispanic": 39.547088623046875
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.054430387914180756,
      "disgust": 3.3608638094762e-10,
      "fear": 9.982292175292969,
      "happy": 0.00017836976621765643,
      "sad": 39.504085540771484,
      "surprise": 0.022644659504294395,
      "neutral": 50.43637466430664
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 23,
    "region": {
      "x": 181,
      "y": 620,
      "w": 183,
      "h": 183,
      "left_eye": [
        301,
        693
      ],
      "right_eye": [
        240,
        691
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 9.024857521057129,
      "Man": 90.97515106201172
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 64.28785705566406,
      "indian": 23.088476181030273,
      "black": 0.5805929899215698,
      "white": 0.6006293296813965,
      "middle eastern": 0.04999018833041191,
      "latino hispanic": 11.3924560546875
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.11515485495328903,
      "disgust": 4.879916609690227e-11,
      "fear": 0.7508914470672607,
      "happy": 1.278056174669473e-06,
      "sad": 11.3129301071167,
      "surprise": 4.477747381770314e-07,
      "neutral": 87.8210220336914
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 23,
    "region": {
      "x": 635,
      "y": 628,
      "w": 196,
      "h": 196,
      "left_eye": [
        768,
        704
      ],
      "right_eye": [
        699,
        704
      ]
    },
    "face_confidence": 0.88,
    "gender": {
      "Woman": 88.81816864013672,
      "Man": 11.181831359863281
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 98.02264404296875,
      "indian": 0.9489853978157043,
      "black": 0.002891175216063857,
      "white": 0.08148210495710373,
      "middle eastern": 0.0007543096435256302,
      "latino hispanic": 0.9432491064071655
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.008937130682170391,
      "disgust": 1.3682075472587485e-09,
      "fear": 0.4982951283454895,
      "happy": 0.002504531526938081,
      "sad": 1.000637173652649,
      "surprise": 0.00016218201199080795,
      "neutral": 98.48946380615234
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 23,
    "region": {
      "x": 362,
      "y": 777,
      "w": 195,
      "h": 195,
      "left_eye": [
        491,
        856
      ],
      "right_eye": [
        426,
        853
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 99.58328247070312,
      "Man": 0.4167124629020691
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 81.04777526855469,
      "indian": 9.532672882080078,
      "black": 0.17645160853862762,
      "white": 1.4917241334915161,
      "middle eastern": 0.33018988370895386,
      "latino hispanic": 7.421184539794922
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.00022767842165194452,
      "disgust": 4.0534378154336026e-13,
      "fear": 0.002299042884260416,
      "happy": 0.011098043993115425,
      "sad": 0.02533402293920517,
      "surprise": 6.339662650134414e-05,
      "neutral": 99.96097564697266
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 156,
      "y": 859,
      "w": 199,
      "h": 199,
      "left_eye": [
        291,
        937
      ],
      "right_eye": [
        221,
        938
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 96.34191131591797,
      "Man": 3.658080816268921
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.57643127441406,
      "indian": 0.11463449895381927,
      "black": 0.00012318111839704216,
      "white": 0.028889168053865433,
      "middle eastern": 0.00015617551980540156,
      "latino hispanic": 0.2797681391239166
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.009394348599016666,
      "disgust": 1.855822717722333e-10,
      "fear": 0.26222604513168335,
      "happy": 0.0013066334649920464,
      "sad": 0.610777735710144,
      "surprise": 1.2392268217809033e-05,
      "neutral": 99.11628723144531
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 26,
    "region": {
      "x": 679,
      "y": 879,
      "w": 202,
      "h": 202,
      "left_eye": [
        812,
        960
      ],
      "right_eye": [
        742,
        958
      ]
    },
    "face_confidence": 0.89,
    "gender": {
      "Woman": 4.425187110900879,
      "Man": 95.57481384277344
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 90.74051666259766,
      "indian": 4.324154376983643,
      "black": 0.09017661958932877,
      "white": 0.5430686473846436,
      "middle eastern": 0.0755215659737587,
      "latino hispanic": 4.226562023162842
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 6.626320100622252e-05,
      "disgust": 1.9376477419091875e-12,
      "fear": 0.03932890295982361,
      "happy": 0.000257394858635962,
      "sad": 0.03965776413679123,
      "surprise": 8.08750519354362e-06,
      "neutral": 99.92068481445312
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 22,
    "region": {
      "x": 961,
      "y": 849,
      "w": 193,
      "h": 193,
      "left_eye": [
        1087,
        925
      ],
      "right_eye": [
        1019,
        924
      ]
    },
    "face_confidence": 0.89,
    "gender": {
      "Woman": 48.05447006225586,
      "Man": 51.94552993774414
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 74.5849838256836,
      "indian": 9.024539947509766,
      "black": 0.349566251039505,
      "white": 0.30776017904281616,
      "middle eastern": 0.03462820500135422,
      "latino hispanic": 15.698531150817871
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 1.0493100717212656e-06,
      "disgust": 3.2242385651441604e-18,
      "fear": 2.7599749046203215e-06,
      "happy": 0.006375176832079887,
      "sad": 0.0005569770582951605,
      "surprise": 1.5912156925423915e-08,
      "neutral": 99.9930648803711
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 1186,
      "y": 800,
      "w": 93,
      "h": 194,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.96,
    "gender": {
      "Woman": 94.02726745605469,
      "Man": 5.972735404968262
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 2.5046002864837646,
      "indian": 32.622520446777344,
      "black": 1.8119778633117676,
      "white": 9.798349380493164,
      "middle eastern": 9.968708992004395,
      "latino hispanic": 43.29384994506836
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 0.0019652785267680883,
      "disgust": 1.335155097592633e-09,
      "fear": 0.04012962430715561,
      "happy": 0.0015762101393193007,
      "sad": 13.704712867736816,
      "surprise": 9.196467232186478e-08,
      "neutral": 86.25161743164062
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 425,
      "y": 1061,
      "w": 208,
      "h": 208,
      "left_eye": [
        563,
        1144
      ],
      "right_eye": [
        489,
        1143
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 87.53607940673828,
      "Man": 12.463918685913086
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.66500091552734,
      "indian": 0.15725553035736084,
      "black": 8.229174272855744e-05,
      "white": 0.02989714778959751,
      "middle eastern": 0.0006903278990648687,
      "latino hispanic": 0.14707410335540771
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.002024649176746607,
      "disgust": 6.865856494453482e-11,
      "fear": 0.02133346162736416,
      "happy": 0.0492032952606678,
      "sad": 0.08755555748939514,
      "surprise": 0.0005071934428997338,
      "neutral": 99.8393783569336
    },
    "dominant_emotion": "neutral"
  }
]
let manicurist_data3 = [
  {
    "age": 23,
    "region": {
      "x": 218,
      "y": 0,
      "w": 64,
      "h": 64,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 14.982891082763672,
      "Man": 85.0171127319336
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 5.986425876617432,
      "indian": 5.050723075866699,
      "black": 0.9803987741470337,
      "white": 46.48681640625,
      "middle eastern": 24.528562545776367,
      "latino hispanic": 16.967079162597656
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.3459276854991913,
      "disgust": 2.7351010345455506e-08,
      "fear": 0.42495810985565186,
      "happy": 0.0038329116068780422,
      "sad": 14.145647048950195,
      "surprise": 9.423473238712177e-05,
      "neutral": 85.07953643798828
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 28,
    "region": {
      "x": 1183,
      "y": 0,
      "w": 72,
      "h": 72,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.97,
    "gender": {
      "Woman": 3.0359489917755127,
      "Man": 96.96405029296875
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.51833438873291,
      "indian": 1.282216191291809,
      "black": 0.06040501594543457,
      "white": 67.86650085449219,
      "middle eastern": 19.166549682617188,
      "latino hispanic": 9.105997085571289
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 76.1235122680664,
      "disgust": 0.000254630547715351,
      "fear": 1.0161792039871216,
      "happy": 0.2559046149253845,
      "sad": 1.1266655921936035,
      "surprise": 0.00525819743052125,
      "neutral": 21.472225189208984
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 22,
    "region": {
      "x": 111,
      "y": 14,
      "w": 80,
      "h": 80,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 0.6491276621818542,
      "Man": 99.35086822509766
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 25.31132698059082,
      "indian": 15.05654525756836,
      "black": 3.47161865234375,
      "white": 22.571720123291016,
      "middle eastern": 14.53201675415039,
      "latino hispanic": 19.05677604675293
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 10.759970664978027,
      "disgust": 1.4446129625866888e-06,
      "fear": 1.4652903079986572,
      "happy": 0.01139116007834673,
      "sad": 46.1660041809082,
      "surprise": 8.195688133127987e-05,
      "neutral": 41.59725570678711
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 22,
    "region": {
      "x": 1104,
      "y": 11,
      "w": 78,
      "h": 78,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 0.21473364531993866,
      "Man": 99.78527069091797
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 34.355159759521484,
      "indian": 11.943982124328613,
      "black": 4.2371649742126465,
      "white": 11.225210189819336,
      "middle eastern": 6.4521355628967285,
      "latino hispanic": 31.78635025024414
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 12.96506118774414,
      "disgust": 0.0024563756305724382,
      "fear": 8.981918334960938,
      "happy": 0.0024675445165485144,
      "sad": 57.16078186035156,
      "surprise": 0.023880992084741592,
      "neutral": 20.863433837890625
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 25,
    "region": {
      "x": 633,
      "y": 0,
      "w": 72,
      "h": 72,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.97,
    "gender": {
      "Woman": 12.139613151550293,
      "Man": 87.86039733886719
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 53.85891342163086,
      "indian": 6.9626593589782715,
      "black": 2.3515350818634033,
      "white": 10.18735408782959,
      "middle eastern": 3.9896631240844727,
      "latino hispanic": 22.649877548217773
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 56.7203369140625,
      "disgust": 0.0009840615093708038,
      "fear": 25.27109718322754,
      "happy": 0.00023422665253747255,
      "sad": 14.857840538024902,
      "surprise": 0.008433366194367409,
      "neutral": 3.1410763263702393
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 25,
    "region": {
      "x": 752,
      "y": 0,
      "w": 71,
      "h": 71,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.98,
    "gender": {
      "Woman": 2.2923309803009033,
      "Man": 97.70767211914062
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 75.28549194335938,
      "indian": 2.4803948402404785,
      "black": 0.30756139755249023,
      "white": 11.076312065124512,
      "middle eastern": 2.5845863819122314,
      "latino hispanic": 8.265655517578125
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.020756546407938004,
      "disgust": 1.2879354527317588e-10,
      "fear": 0.029192805290222168,
      "happy": 0.08280383050441742,
      "sad": 0.005014636088162661,
      "surprise": 0.0018873176304623485,
      "neutral": 99.8603515625
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 0,
      "y": 25,
      "w": 85,
      "h": 85,
      "left_eye": [
        42,
        55
      ],
      "right_eye": [
        14,
        57
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 4.33443021774292,
      "Man": 95.66557312011719
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.00019045245426241308,
      "indian": 0.002614989411085844,
      "black": 6.452872639783891e-06,
      "white": 94.8538589477539,
      "middle eastern": 4.544447898864746,
      "latino hispanic": 0.5988767743110657
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 7.072937488555908,
      "disgust": 0.0010334356920793653,
      "fear": 1.2554264068603516,
      "happy": 0.01180173922330141,
      "sad": 79.32061767578125,
      "surprise": 0.007705338764935732,
      "neutral": 12.330479621887207
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 25,
    "region": {
      "x": 995,
      "y": 51,
      "w": 74,
      "h": 74,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 0.8125616312026978,
      "Man": 99.18743896484375
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.15549473464488983,
      "indian": 1.8661425113677979,
      "black": 0.051931675523519516,
      "white": 59.47699737548828,
      "middle eastern": 29.76095962524414,
      "latino hispanic": 8.688475608825684
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 3.7750706672668457,
      "disgust": 0.02424262836575508,
      "fear": 19.1644287109375,
      "happy": 1.323440432548523,
      "sad": 39.659637451171875,
      "surprise": 0.09059897065162659,
      "neutral": 35.962589263916016
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 24,
    "region": {
      "x": 872,
      "y": 19,
      "w": 67,
      "h": 67,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 4.424809455871582,
      "Man": 95.5751953125
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 43.156002044677734,
      "indian": 8.92408275604248,
      "black": 2.7790474891662598,
      "white": 16.673982620239258,
      "middle eastern": 10.555432319641113,
      "latino hispanic": 17.911455154418945
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 5.320839881896973,
      "disgust": 0.05049669370055199,
      "fear": 3.355459213256836,
      "happy": 0.035356294363737106,
      "sad": 90.54116821289062,
      "surprise": 0.0001453889417462051,
      "neutral": 0.6965444684028625
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 26,
    "region": {
      "x": 693,
      "y": 63,
      "w": 85,
      "h": 85,
      "left_eye": [
        749,
        95
      ],
      "right_eye": [
        724,
        94
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 1.7867984771728516,
      "Man": 98.21321105957031
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 51.36997985839844,
      "indian": 8.259793281555176,
      "black": 1.643993616104126,
      "white": 14.252938270568848,
      "middle eastern": 4.0252685546875,
      "latino hispanic": 20.44803237915039
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 1.8414841890335083,
      "disgust": 0.0008201744058169425,
      "fear": 34.11976623535156,
      "happy": 0.007877524010837078,
      "sad": 45.92334747314453,
      "surprise": 0.07953474670648575,
      "neutral": 18.027172088623047
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 23,
    "region": {
      "x": 881,
      "y": 124,
      "w": 77,
      "h": 77,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 5.338490962982178,
      "Man": 94.66151428222656
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 32.79792404174805,
      "indian": 1.2284998893737793,
      "black": 0.07387741655111313,
      "white": 56.482547760009766,
      "middle eastern": 5.931654453277588,
      "latino hispanic": 3.4855048656463623
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.2972588539123535,
      "disgust": 0.0006908894283697009,
      "fear": 8.061652183532715,
      "happy": 0.0001580985845066607,
      "sad": 91.38256072998047,
      "surprise": 0.00021777692018076777,
      "neutral": 0.25746631622314453
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 22,
    "region": {
      "x": 337,
      "y": 67,
      "w": 90,
      "h": 90,
      "left_eye": [
        397,
        101
      ],
      "right_eye": [
        366,
        99
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 4.902070999145508,
      "Man": 95.0979232788086
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 27.058067321777344,
      "indian": 13.815855979919434,
      "black": 5.556031227111816,
      "white": 9.846997261047363,
      "middle eastern": 6.144556045532227,
      "latino hispanic": 37.578495025634766
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 1.698135495185852,
      "disgust": 4.7782788215045e-07,
      "fear": 0.41577768325805664,
      "happy": 0.046864334493875504,
      "sad": 10.022706031799316,
      "surprise": 0.0025511851999908686,
      "neutral": 87.81397247314453
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 22,
    "region": {
      "x": 469,
      "y": 42,
      "w": 89,
      "h": 89,
      "left_eye": [
        527,
        75
      ],
      "right_eye": [
        500,
        75
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 0.37622758746147156,
      "Man": 99.623779296875
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 55.83977127075195,
      "indian": 7.168469429016113,
      "black": 2.033385992050171,
      "white": 11.162088394165039,
      "middle eastern": 2.9964120388031006,
      "latino hispanic": 20.799869537353516
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.8773244619369507,
      "disgust": 3.217328412574716e-07,
      "fear": 1.0292792320251465,
      "happy": 0.0007717185071669519,
      "sad": 20.871318817138672,
      "surprise": 7.588804874103516e-05,
      "neutral": 77.22122955322266
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 23,
    "region": {
      "x": 216,
      "y": 82,
      "w": 90,
      "h": 90,
      "left_eye": [
        272,
        115
      ],
      "right_eye": [
        243,
        117
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 1.096957802772522,
      "Man": 98.90304565429688
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 42.277000427246094,
      "indian": 11.996074676513672,
      "black": 6.346114158630371,
      "white": 8.464579582214355,
      "middle eastern": 5.915585041046143,
      "latino hispanic": 25.000646591186523
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 15.575119972229004,
      "disgust": 0.0069172014482319355,
      "fear": 8.02739429473877,
      "happy": 0.01515467744320631,
      "sad": 30.548444747924805,
      "surprise": 0.0023431843146681786,
      "neutral": 45.82463455200195
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 23,
    "region": {
      "x": 606,
      "y": 92,
      "w": 83,
      "h": 83,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 0.6630396842956543,
      "Man": 99.33695983886719
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 2.262664556503296,
      "indian": 1.1173174381256104,
      "black": 0.14035111665725708,
      "white": 64.55369567871094,
      "middle eastern": 21.04347038269043,
      "latino hispanic": 10.882501602172852
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.01902763918042183,
      "disgust": 8.339948523450325e-12,
      "fear": 0.03701145201921463,
      "happy": 0.0018913617823272943,
      "sad": 1.8825130462646484,
      "surprise": 7.968018280735123e-07,
      "neutral": 98.05956268310547
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 29,
    "region": {
      "x": 682,
      "y": 192,
      "w": 90,
      "h": 90,
      "left_eye": [
        744,
        226
      ],
      "right_eye": [
        712,
        227
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 24.286724090576172,
      "Man": 75.7132797241211
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 91.09618377685547,
      "indian": 1.4303913116455078,
      "black": 0.17094263434410095,
      "white": 1.229055643081665,
      "middle eastern": 0.07416378706693649,
      "latino hispanic": 5.999260425567627
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.2949124574661255,
      "disgust": 1.4631821310118198e-09,
      "fear": 0.09754969924688339,
      "happy": 0.0014501314144581556,
      "sad": 1.9141671657562256,
      "surprise": 5.052555479778675e-06,
      "neutral": 97.69190979003906
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 24,
    "region": {
      "x": 1076,
      "y": 134,
      "w": 99,
      "h": 99,
      "left_eye": [
        1142,
        172
      ],
      "right_eye": [
        1109,
        170
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 38.87928009033203,
      "Man": 61.120723724365234
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.1447257101535797,
      "indian": 1.4459092617034912,
      "black": 0.09050443768501282,
      "white": 44.06304168701172,
      "middle eastern": 40.663394927978516,
      "latino hispanic": 13.592416763305664
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 19.433311462402344,
      "disgust": 0.008695581927895546,
      "fear": 20.49127769470215,
      "happy": 0.005903087556362152,
      "sad": 37.748714447021484,
      "surprise": 0.009394197724759579,
      "neutral": 22.302703857421875
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 27,
    "region": {
      "x": 570,
      "y": 188,
      "w": 94,
      "h": 94,
      "left_eye": [
        632,
        224
      ],
      "right_eye": [
        600,
        222
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 36.622982025146484,
      "Man": 63.37702178955078
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 94.85711669921875,
      "indian": 2.469390869140625,
      "black": 0.01845705136656761,
      "white": 0.4050167202949524,
      "middle eastern": 0.0036378903314471245,
      "latino hispanic": 2.2463717460632324
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 17.80248260498047,
      "disgust": 0.006629760377109051,
      "fear": 14.343306541442871,
      "happy": 0.006789389066398144,
      "sad": 53.680992126464844,
      "surprise": 0.001039793249219656,
      "neutral": 14.158760070800781
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 24,
    "region": {
      "x": 985,
      "y": 146,
      "w": 94,
      "h": 94,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 95.07627868652344,
      "Man": 4.923715591430664
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 24.638751983642578,
      "indian": 10.93881607055664,
      "black": 4.116480350494385,
      "white": 17.1090087890625,
      "middle eastern": 9.597112655639648,
      "latino hispanic": 33.59983444213867
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 0.6752765774726868,
      "disgust": 0.01423268299549818,
      "fear": 75.14903259277344,
      "happy": 0.07359848916530609,
      "sad": 16.533226013183594,
      "surprise": 0.033000361174345016,
      "neutral": 7.521628379821777
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 23,
    "region": {
      "x": 278,
      "y": 185,
      "w": 100,
      "h": 100,
      "left_eye": [
        343,
        221
      ],
      "right_eye": [
        308,
        225
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 0.7340689301490784,
      "Man": 99.26593017578125
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 93.09246826171875,
      "indian": 2.14280366897583,
      "black": 0.03314030170440674,
      "white": 0.3585743308067322,
      "middle eastern": 0.012497343122959137,
      "latino hispanic": 4.360512733459473
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.2652096748352051,
      "disgust": 9.540775636196486e-07,
      "fear": 0.6725141406059265,
      "happy": 0.0003459698345977813,
      "sad": 36.188236236572266,
      "surprise": 0.00012965581845492125,
      "neutral": 62.873565673828125
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 27,
    "region": {
      "x": 795,
      "y": 131,
      "w": 97,
      "h": 97,
      "left_eye": [
        860,
        168
      ],
      "right_eye": [
        826,
        166
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 1.434522032737732,
      "Man": 98.56547546386719
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 91.1243896484375,
      "indian": 3.809643268585205,
      "black": 0.08031248301267624,
      "white": 0.4794257879257202,
      "middle eastern": 0.022923177108168602,
      "latino hispanic": 4.483306407928467
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.586234986782074,
      "disgust": 4.618574530468322e-05,
      "fear": 2.4489612579345703,
      "happy": 0.09081894159317017,
      "sad": 8.07043743133545,
      "surprise": 0.004362157545983791,
      "neutral": 88.79914093017578
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 25,
    "region": {
      "x": 431,
      "y": 157,
      "w": 96,
      "h": 96,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 42.371826171875,
      "Man": 57.628173828125
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 4.081185340881348,
      "indian": 15.13479995727539,
      "black": 1.9538015127182007,
      "white": 29.85159683227539,
      "middle eastern": 25.890954971313477,
      "latino hispanic": 23.08765983581543
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 18.543960571289062,
      "disgust": 0.02160704880952835,
      "fear": 34.42090606689453,
      "happy": 0.1867666393518448,
      "sad": 26.15456199645996,
      "surprise": 0.12614800035953522,
      "neutral": 20.546056747436523
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 27,
    "region": {
      "x": 22,
      "y": 126,
      "w": 89,
      "h": 89,
      "left_eye": [
        80,
        159
      ],
      "right_eye": [
        49,
        162
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 1.977384328842163,
      "Man": 98.02261352539062
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 22.157833099365234,
      "indian": 5.168758392333984,
      "black": 2.5676896572113037,
      "white": 40.010684967041016,
      "middle eastern": 14.174431800842285,
      "latino hispanic": 15.920609474182129
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 10.098625183105469,
      "disgust": 0.0012064994079992175,
      "fear": 5.0986857414245605,
      "happy": 0.00018505461048334837,
      "sad": 78.44207763671875,
      "surprise": 0.00042497680988162756,
      "neutral": 6.358804225921631
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 30,
    "region": {
      "x": 1214,
      "y": 130,
      "w": 65,
      "h": 97,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 99.99779510498047,
      "Man": 0.0022026803344488144
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 0.15977518260478973,
      "indian": 1.3482067584991455,
      "black": 0.023218635469675064,
      "white": 44.525691986083984,
      "middle eastern": 42.57236099243164,
      "latino hispanic": 11.370748519897461
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 2.3319661617279053,
      "disgust": 2.802752305797185e-06,
      "fear": 0.9484570026397705,
      "happy": 7.673930644989014,
      "sad": 1.8259897232055664,
      "surprise": 0.006699212361127138,
      "neutral": 87.21295928955078
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 24,
    "region": {
      "x": 932,
      "y": 257,
      "w": 92,
      "h": 92,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.98,
    "gender": {
      "Woman": 19.241819381713867,
      "Man": 80.75818634033203
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.4572824239730835,
      "indian": 3.6635565757751465,
      "black": 0.20923539996147156,
      "white": 51.7082633972168,
      "middle eastern": 29.366561889648438,
      "latino hispanic": 14.595105171203613
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 1.309334397315979,
      "disgust": 0.0001888037659227848,
      "fear": 70.44097137451172,
      "happy": 0.00048037595115602016,
      "sad": 15.15446662902832,
      "surprise": 0.1779281198978424,
      "neutral": 12.91662883758545
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 28,
    "region": {
      "x": 754,
      "y": 266,
      "w": 99,
      "h": 99,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 0.8380691409111023,
      "Man": 99.16193389892578
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 8.695796012878418,
      "indian": 40.87171173095703,
      "black": 7.932115077972412,
      "white": 10.07011604309082,
      "middle eastern": 16.716121673583984,
      "latino hispanic": 15.714139938354492
    },
    "dominant_race": "indian",
    "emotion": {
      "angry": 0.0004266531905159354,
      "disgust": 5.393207061499261e-11,
      "fear": 9.892053604125977,
      "happy": 0.0009832597570493817,
      "sad": 1.3656307458877563,
      "surprise": 0.00015548053488601,
      "neutral": 88.7407455444336
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 1136,
      "y": 260,
      "w": 112,
      "h": 112,
      "left_eye": [
        1211,
        305
      ],
      "right_eye": [
        1173,
        302
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 99.99009704589844,
      "Man": 0.009902657940983772
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 13.157100677490234,
      "indian": 9.06031608581543,
      "black": 3.09515643119812,
      "white": 27.70095443725586,
      "middle eastern": 23.411903381347656,
      "latino hispanic": 23.574565887451172
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.46491649746894836,
      "disgust": 2.3573438738822006e-06,
      "fear": 15.058917045593262,
      "happy": 0.001754604047164321,
      "sad": 12.270751953125,
      "surprise": 0.00019686149607878178,
      "neutral": 72.20346069335938
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 26,
    "region": {
      "x": 121,
      "y": 119,
      "w": 96,
      "h": 96,
      "left_eye": [
        182,
        153
      ],
      "right_eye": [
        151,
        155
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 1.418935775756836,
      "Man": 98.58106231689453
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 31.996427536010742,
      "indian": 9.528777122497559,
      "black": 1.115251898765564,
      "white": 25.904869079589844,
      "middle eastern": 10.778108596801758,
      "latino hispanic": 20.676570892333984
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 1.411970615386963,
      "disgust": 0.00015628774417564273,
      "fear": 1.972908854484558,
      "happy": 0.5436772704124451,
      "sad": 17.939926147460938,
      "surprise": 0.003681968431919813,
      "neutral": 78.127685546875
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 22,
    "region": {
      "x": 185,
      "y": 264,
      "w": 114,
      "h": 114,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 1.7422882318496704,
      "Man": 98.2577133178711
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 0.30839845538139343,
      "indian": 0.03843413665890694,
      "black": 0.0019353211391717196,
      "white": 95.52103424072266,
      "middle eastern": 2.7358360290527344,
      "latino hispanic": 1.3943637609481812
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 6.677517983000314e-10,
      "disgust": 1.307777152386491e-26,
      "fear": 1.5799481722922337e-09,
      "happy": 0.210886150598526,
      "sad": 1.665505078563001e-05,
      "surprise": 1.8991160640607907e-12,
      "neutral": 99.78910064697266
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 423,
      "y": 275,
      "w": 120,
      "h": 120,
      "left_eye": [
        500,
        320
      ],
      "right_eye": [
        461,
        323
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 99.99559020996094,
      "Man": 0.004412960726767778
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 11.976456642150879,
      "indian": 26.044601440429688,
      "black": 3.2986743450164795,
      "white": 11.471589088439941,
      "middle eastern": 11.30003833770752,
      "latino hispanic": 35.90864181518555
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 8.72671127319336,
      "disgust": 0.12554390728473663,
      "fear": 6.923182964324951,
      "happy": 0.15763653814792633,
      "sad": 11.168277740478516,
      "surprise": 0.007211006712168455,
      "neutral": 72.89144134521484
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 30,
    "region": {
      "x": 26,
      "y": 234,
      "w": 115,
      "h": 115,
      "left_eye": [
        100,
        275
      ],
      "right_eye": [
        61,
        280
      ]
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 93.30091857910156,
      "Man": 6.699082374572754
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 92.3708267211914,
      "indian": 0.9271143674850464,
      "black": 0.029924772679805756,
      "white": 1.160115361213684,
      "middle eastern": 0.030407384037971497,
      "latino hispanic": 5.481606960296631
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.02752315066754818,
      "disgust": 3.5816779586639313e-07,
      "fear": 4.203153133392334,
      "happy": 1.4140734672546387,
      "sad": 1.96240234375,
      "surprise": 0.01401822455227375,
      "neutral": 92.37882995605469
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 35,
    "region": {
      "x": 626,
      "y": 310,
      "w": 115,
      "h": 115,
      "left_eye": [
        703,
        352
      ],
      "right_eye": [
        661,
        352
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 99.99968719482422,
      "Man": 0.00030673175933770835
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 17.753007888793945,
      "indian": 16.851837158203125,
      "black": 3.6062510013580322,
      "white": 18.419601440429688,
      "middle eastern": 15.678910255432129,
      "latino hispanic": 27.69039535522461
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 0.531335711479187,
      "disgust": 6.434765964513645e-07,
      "fear": 5.261571407318115,
      "happy": 9.407916513737291e-05,
      "sad": 85.19528198242188,
      "surprise": 9.345209036837332e-06,
      "neutral": 9.011698722839355
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 37,
    "region": {
      "x": 850,
      "y": 361,
      "w": 132,
      "h": 132,
      "left_eye": [
        937,
        411
      ],
      "right_eye": [
        896,
        410
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 99.99978637695312,
      "Man": 0.00021645150263793766
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 0.013849363662302494,
      "indian": 0.05463513731956482,
      "black": 0.0017979593249037862,
      "white": 77.55997467041016,
      "middle eastern": 16.303316116333008,
      "latino hispanic": 6.066432476043701
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 14.36434555053711,
      "disgust": 0.009688659571111202,
      "fear": 20.60579490661621,
      "happy": 0.2632649838924408,
      "sad": 38.70412826538086,
      "surprise": 0.08468690514564514,
      "neutral": 25.96808624267578
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 32,
    "region": {
      "x": 87,
      "y": 360,
      "w": 137,
      "h": 137,
      "left_eye": [
        179,
        410
      ],
      "right_eye": [
        133,
        416
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 47.24457550048828,
      "Man": 52.75542068481445
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 76.816650390625,
      "indian": 9.045881271362305,
      "black": 0.5769281387329102,
      "white": 1.4191917181015015,
      "middle eastern": 0.5314728617668152,
      "latino hispanic": 11.609875679016113
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 0.022336145862936974,
      "disgust": 1.4905329237535625e-07,
      "fear": 0.14953728020191193,
      "happy": 0.700700044631958,
      "sad": 0.11300751566886902,
      "surprise": 0.0010724210878834128,
      "neutral": 99.01335144042969
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 991,
      "y": 365,
      "w": 130,
      "h": 130,
      "left_eye": [
        1081,
        418
      ],
      "right_eye": [
        1030,
        417
      ]
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 61.56699752807617,
      "Man": 38.43299865722656
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 2.5675901280605243e-18,
      "indian": 8.92770503791579e-13,
      "black": 100.0,
      "white": 2.3127267083470538e-23,
      "middle eastern": 1.3685944689235713e-23,
      "latino hispanic": 7.586956164873533e-16
    },
    "dominant_race": "black",
    "emotion": {
      "angry": 6.574507713317871,
      "disgust": 7.851217986853953e-08,
      "fear": 0.5322880744934082,
      "happy": 0.0023655712138861418,
      "sad": 4.483673572540283,
      "surprise": 3.2180232665268704e-05,
      "neutral": 88.40713500976562
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 280,
      "y": 384,
      "w": 137,
      "h": 137,
      "left_eye": [
        368,
        437
      ],
      "right_eye": [
        322,
        438
      ]
    },
    "face_confidence": 0.89,
    "gender": {
      "Woman": 99.63922119140625,
      "Man": 0.3607771098613739
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 34.628753662109375,
      "indian": 21.066675186157227,
      "black": 2.4728691577911377,
      "white": 4.5331902503967285,
      "middle eastern": 3.4031286239624023,
      "latino hispanic": 33.895381927490234
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 14.86001968383789,
      "disgust": 0.01114602293819189,
      "fear": 2.3814687728881836,
      "happy": 0.13304489850997925,
      "sad": 15.121034622192383,
      "surprise": 0.047135498374700546,
      "neutral": 67.44615936279297
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 33,
    "region": {
      "x": 492,
      "y": 428,
      "w": 142,
      "h": 142,
      "left_eye": [
        585,
        480
      ],
      "right_eye": [
        537,
        481
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 99.99897766113281,
      "Man": 0.0010201450204476714
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 6.777341842651367,
      "indian": 14.179780960083008,
      "black": 2.3328113555908203,
      "white": 20.504837036132812,
      "middle eastern": 21.42865562438965,
      "latino hispanic": 34.776573181152344
    },
    "dominant_race": "latino hispanic",
    "emotion": {
      "angry": 4.864134788513184,
      "disgust": 0.00011433277541073039,
      "fear": 0.5196079611778259,
      "happy": 0.22041592001914978,
      "sad": 11.207143783569336,
      "surprise": 0.06069629639387131,
      "neutral": 83.12788391113281
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 707,
      "y": 446,
      "w": 137,
      "h": 137,
      "left_eye": [
        799,
        497
      ],
      "right_eye": [
        752,
        496
      ]
    },
    "face_confidence": 0.88,
    "gender": {
      "Woman": 99.9970703125,
      "Man": 0.002930505434051156
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 89.099853515625,
      "indian": 2.943052291870117,
      "black": 0.02940862812101841,
      "white": 0.6578952074050903,
      "middle eastern": 0.022421006113290787,
      "latino hispanic": 7.24737024307251
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 3.1630356311798096,
      "disgust": 0.0034032873809337616,
      "fear": 1.6061205863952637,
      "happy": 2.3139491081237793,
      "sad": 12.3836088180542,
      "surprise": 0.18617025017738342,
      "neutral": 80.34371948242188
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 31,
    "region": {
      "x": 1190,
      "y": 438,
      "w": 89,
      "h": 121,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.97,
    "gender": {
      "Woman": 76.85708618164062,
      "Man": 23.142915725708008
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 1.5722465515136719,
      "indian": 0.4985652267932892,
      "black": 0.03734193369746208,
      "white": 71.89497375488281,
      "middle eastern": 12.489008903503418,
      "latino hispanic": 13.50786304473877
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 0.5165652632713318,
      "disgust": 0.0043016900308430195,
      "fear": 0.4387415647506714,
      "happy": 0.09926184266805649,
      "sad": 87.20195007324219,
      "surprise": 2.5951089810405392e-06,
      "neutral": 11.739184379577637
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 31,
    "region": {
      "x": 133,
      "y": 519,
      "w": 140,
      "h": 140,
      "left_eye": [
        227,
        571
      ],
      "right_eye": [
        177,
        572
      ]
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 99.9974594116211,
      "Man": 0.002544834278523922
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 0.17806001007556915,
      "indian": 2.1437783241271973,
      "black": 0.04771552234888077,
      "white": 42.22580337524414,
      "middle eastern": 35.8133659362793,
      "latino hispanic": 19.59127426147461
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 1.290683388710022,
      "disgust": 0.04770922288298607,
      "fear": 3.4551401138305664,
      "happy": 2.769727945327759,
      "sad": 13.153414726257324,
      "surprise": 0.055207185447216034,
      "neutral": 79.22811889648438
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 39,
    "region": {
      "x": 839,
      "y": 538,
      "w": 146,
      "h": 146,
      "left_eye": [
        938,
        593
      ],
      "right_eye": [
        891,
        595
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 94.55213928222656,
      "Man": 5.447856903076172
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 0.06912565976381302,
      "indian": 8.440174102783203,
      "black": 0.034881841391325,
      "white": 6.785991668701172,
      "middle eastern": 72.48509216308594,
      "latino hispanic": 12.184743881225586
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 1.5859070572332712e-06,
      "disgust": 1.6150119436231236e-11,
      "fear": 99.97977447509766,
      "happy": 1.4816928128880136e-08,
      "sad": 4.4214783656570944e-07,
      "surprise": 0.020224126055836678,
      "neutral": 1.96471977575996e-10
    },
    "dominant_emotion": "fear"
  },
  {
    "age": 31,
    "region": {
      "x": 586,
      "y": 556,
      "w": 151,
      "h": 151,
      "left_eye": [
        688,
        613
      ],
      "right_eye": [
        633,
        611
      ]
    },
    "face_confidence": 0.9,
    "gender": {
      "Woman": 99.99996185302734,
      "Man": 3.9905618905322626e-05
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 2.7554705142974854,
      "indian": 10.383879661560059,
      "black": 1.01543128490448,
      "white": 26.271018981933594,
      "middle eastern": 31.294694900512695,
      "latino hispanic": 28.27950668334961
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 1.1781880855560303,
      "disgust": 4.273870217730291e-05,
      "fear": 1.2992838621139526,
      "happy": 0.10576614737510681,
      "sad": 7.534390449523926,
      "surprise": 0.12031048536300659,
      "neutral": 89.76202392578125
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 35,
    "region": {
      "x": 370,
      "y": 599,
      "w": 156,
      "h": 156,
      "left_eye": [
        470,
        657
      ],
      "right_eye": [
        421,
        657
      ]
    },
    "face_confidence": 0.88,
    "gender": {
      "Woman": 99.99900817871094,
      "Man": 0.000992641900666058
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 0.1260051429271698,
      "indian": 4.70975923538208,
      "black": 0.03659852221608162,
      "white": 7.950349807739258,
      "middle eastern": 78.26512908935547,
      "latino hispanic": 8.91215705871582
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 5.106850624084473,
      "disgust": 0.0006958759622648358,
      "fear": 0.8709743618965149,
      "happy": 2.5081372261047363,
      "sad": 6.615869045257568,
      "surprise": 0.04573630914092064,
      "neutral": 84.85173797607422
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 38,
    "region": {
      "x": 797,
      "y": 677,
      "w": 153,
      "h": 153,
      "left_eye": [
        898,
        736
      ],
      "right_eye": [
        845,
        736
      ]
    },
    "face_confidence": 0.91,
    "gender": {
      "Woman": 99.9966049194336,
      "Man": 0.003396727377548814
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 3.1250016689300537,
      "indian": 29.25447654724121,
      "black": 0.4929584562778473,
      "white": 9.816018104553223,
      "middle eastern": 36.255611419677734,
      "latino hispanic": 21.055936813354492
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 19.031917572021484,
      "disgust": 0.0028945645317435265,
      "fear": 1.9938969612121582,
      "happy": 0.020579034462571144,
      "sad": 62.21597671508789,
      "surprise": 0.002194989938288927,
      "neutral": 16.732547760009766
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 32,
    "region": {
      "x": 174,
      "y": 679,
      "w": 166,
      "h": 166,
      "left_eye": [
        279,
        741
      ],
      "right_eye": [
        226,
        744
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 99.99987030029297,
      "Man": 0.00013477397442329675
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 0.021282797679305077,
      "indian": 0.2812318205833435,
      "black": 0.00465815793722868,
      "white": 54.32680130004883,
      "middle eastern": 39.04814910888672,
      "latino hispanic": 6.317878723144531
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 11.351338386535645,
      "disgust": 0.4463613033294678,
      "fear": 3.324148416519165,
      "happy": 0.7532627582550049,
      "sad": 48.21688461303711,
      "surprise": 0.01829666644334793,
      "neutral": 35.889705657958984
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 31,
    "region": {
      "x": 448,
      "y": 816,
      "w": 168,
      "h": 168,
      "left_eye": [
        560,
        878
      ],
      "right_eye": [
        498,
        879
      ]
    },
    "face_confidence": 0.92,
    "gender": {
      "Woman": 97.71552276611328,
      "Man": 2.2844743728637695
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 99.92217254638672,
      "indian": 0.0050984700210392475,
      "black": 7.42413176340051e-05,
      "white": 0.01081974059343338,
      "middle eastern": 0.000708803825546056,
      "latino hispanic": 0.06113818660378456
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 1.2284762859344482,
      "disgust": 8.130292172836562e-08,
      "fear": 0.20420970022678375,
      "happy": 0.004914504941552877,
      "sad": 0.7779276967048645,
      "surprise": 0.035559311509132385,
      "neutral": 97.74891662597656
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 35,
    "region": {
      "x": 995,
      "y": 710,
      "w": 153,
      "h": 153,
      "left_eye": [
        1096,
        769
      ],
      "right_eye": [
        1045,
        766
      ]
    },
    "face_confidence": 0.95,
    "gender": {
      "Woman": 99.99720001220703,
      "Man": 0.0028069401159882545
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 0.2921053171157837,
      "indian": 2.0950677394866943,
      "black": 0.060579996556043625,
      "white": 48.08197021484375,
      "middle eastern": 32.63977813720703,
      "latino hispanic": 16.83050537109375
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 10.770421981811523,
      "disgust": 0.012949182651937008,
      "fear": 19.57841682434082,
      "happy": 0.002339731203392148,
      "sad": 66.90461730957031,
      "surprise": 0.021999359130859375,
      "neutral": 2.7092514038085938
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 32,
    "region": {
      "x": 683,
      "y": 840,
      "w": 148,
      "h": 148,
      "left_eye": [
        784,
        895
      ],
      "right_eye": [
        726,
        892
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 91.67835998535156,
      "Man": 8.321638107299805
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 91.31363677978516,
      "indian": 1.8037229776382446,
      "black": 0.15051721036434174,
      "white": 2.7777163982391357,
      "middle eastern": 0.1648801863193512,
      "latino hispanic": 3.7895259857177734
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 1.3150506019592285,
      "disgust": 4.910959887638455e-06,
      "fear": 1.0109306573867798,
      "happy": 0.06005271524190903,
      "sad": 4.3817949295043945,
      "surprise": 0.012763519771397114,
      "neutral": 93.21939849853516
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 34,
    "region": {
      "x": 557,
      "y": 1020,
      "w": 162,
      "h": 162,
      "left_eye": [
        664,
        1080
      ],
      "right_eye": [
        612,
        1080
      ]
    },
    "face_confidence": 0.94,
    "gender": {
      "Woman": 24.120019912719727,
      "Man": 75.8799819946289
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 28.906665802001953,
      "indian": 14.640868186950684,
      "black": 1.3318167924880981,
      "white": 20.363052368164062,
      "middle eastern": 22.108854293823242,
      "latino hispanic": 12.648744583129883
    },
    "dominant_race": "asian",
    "emotion": {
      "angry": 48.48347473144531,
      "disgust": 2.5840816497802734,
      "fear": 7.92940616607666,
      "happy": 0.026569882407784462,
      "sad": 37.66172409057617,
      "surprise": 0.23842892050743103,
      "neutral": 3.07631778717041
    },
    "dominant_emotion": "angry"
  },
  {
    "age": 26,
    "region": {
      "x": 906,
      "y": 1021,
      "w": 165,
      "h": 165,
      "left_eye": [
        1015,
        1082
      ],
      "right_eye": [
        964,
        1083
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 23.707033157348633,
      "Man": 76.29296875
    },
    "dominant_gender": "Man",
    "race": {
      "asian": 8.329733848571777,
      "indian": 19.194501876831055,
      "black": 2.78745174407959,
      "white": 17.445486068725586,
      "middle eastern": 26.215383529663086,
      "latino hispanic": 26.027446746826172
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 11.883011817932129,
      "disgust": 0.0033157444559037685,
      "fear": 29.21869659423828,
      "happy": 0.02512623928487301,
      "sad": 50.07480239868164,
      "surprise": 0.03281881660223007,
      "neutral": 8.76223087310791
    },
    "dominant_emotion": "sad"
  },
  {
    "age": 35,
    "region": {
      "x": 21,
      "y": 940,
      "w": 174,
      "h": 174,
      "left_eye": [
        138,
        1002
      ],
      "right_eye": [
        77,
        1007
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 99.12738037109375,
      "Man": 0.8726233839988708
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 3.7210118770599365,
      "indian": 13.501648902893066,
      "black": 0.6800330877304077,
      "white": 19.407516479492188,
      "middle eastern": 39.62971878051758,
      "latino hispanic": 23.060073852539062
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 10.375004768371582,
      "disgust": 55.19475555419922,
      "fear": 13.475725173950195,
      "happy": 0.03378874063491821,
      "sad": 19.31949806213379,
      "surprise": 0.08438939601182938,
      "neutral": 1.5168442726135254
    },
    "dominant_emotion": "disgust"
  },
  {
    "age": 28,
    "region": {
      "x": 245,
      "y": 1070,
      "w": 166,
      "h": 166,
      "left_eye": [
        356,
        1128
      ],
      "right_eye": [
        320,
        1200
      ]
    },
    "face_confidence": 0.93,
    "gender": {
      "Woman": 77.16429901123047,
      "Man": 22.835704803466797
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 17.727500915527344,
      "indian": 1.2629072666168213,
      "black": 3.711703062057495,
      "white": 38.77682876586914,
      "middle eastern": 18.776334762573242,
      "latino hispanic": 19.744720458984375
    },
    "dominant_race": "white",
    "emotion": {
      "angry": 2.7833517378894612e-05,
      "disgust": 1.1070927286027654e-08,
      "fear": 0.3960338532924652,
      "happy": 17.834640502929688,
      "sad": 0.031859107315540314,
      "surprise": 0.5688899755477905,
      "neutral": 81.16854858398438
    },
    "dominant_emotion": "neutral"
  },
  {
    "age": 30,
    "region": {
      "x": 1180,
      "y": 934,
      "w": 99,
      "h": 179,
      "left_eye": null,
      "right_eye": null
    },
    "face_confidence": 0.99,
    "gender": {
      "Woman": 96.28474426269531,
      "Man": 3.7152621746063232
    },
    "dominant_gender": "Woman",
    "race": {
      "asian": 1.865875482559204,
      "indian": 19.459720611572266,
      "black": 1.1784377098083496,
      "white": 24.850494384765625,
      "middle eastern": 30.836254119873047,
      "latino hispanic": 21.809213638305664
    },
    "dominant_race": "middle eastern",
    "emotion": {
      "angry": 76.84205627441406,
      "disgust": 0.04060693830251694,
      "fear": 0.8679137825965881,
      "happy": 0.0012091792887076735,
      "sad": 14.923260688781738,
      "surprise": 0.011447040364146233,
      "neutral": 7.313506126403809
    },
    "dominant_emotion": "angry"
  }
]

console.log("Meta Results for Manicurist:");
const data = manicurist_data.concat(manicurist_data2, manicurist_data3);
console.log(processData(data));
