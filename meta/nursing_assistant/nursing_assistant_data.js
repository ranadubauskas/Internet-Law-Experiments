const { processData } = require('../../data_processing.js');

let nursing_assistant_data = [
    {
        "age": 28,
        "region": {
            "x": 977,
            "y": 0,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 1.7798304557800293,
            "Man": 98.22017669677734
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.17707061767578,
            "indian": 0.074490986764431,
            "black": 0.02668343298137188,
            "white": 0.01100152451545,
            "middle eastern": 9.256156045012176e-05,
            "latino hispanic": 0.7106437683105469
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.1033215522766113,
            "disgust": 0.00010558559733908623,
            "fear": 1.009869933128357,
            "happy": 0.21453696489334106,
            "sad": 12.800649642944336,
            "surprise": 0.006163730286061764,
            "neutral": 83.8653564453125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 907,
            "y": 0,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 11.769512176513672,
            "Man": 88.23048400878906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 95.4262924194336,
            "indian": 1.1456365585327148,
            "black": 0.0286147128790617,
            "white": 0.08976104855537415,
            "middle eastern": 0.001162665314041078,
            "latino hispanic": 3.308537483215332
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.00019951908325310796,
            "disgust": 3.716955738965362e-14,
            "fear": 2.717956704145763e-05,
            "happy": 98.67723846435547,
            "sad": 1.3478214668793953e-06,
            "surprise": 7.605147402500734e-05,
            "neutral": 1.322459101676941
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 1170,
            "y": 0,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 4.967640399932861,
            "Man": 95.03235626220703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 92.38397979736328,
            "indian": 1.2213929891586304,
            "black": 0.3701534867286682,
            "white": 1.6231560707092285,
            "middle eastern": 0.11307673901319504,
            "latino hispanic": 4.288247108459473
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.3286330699920654,
            "disgust": 3.298634283055435e-06,
            "fear": 0.08394264429807663,
            "happy": 40.89744567871094,
            "sad": 0.031327929347753525,
            "surprise": 4.3141961097717285,
            "neutral": 53.344451904296875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 328,
            "y": 63,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 96.35912322998047,
            "Man": 3.640880823135376
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 61.537086486816406,
            "indian": 8.393731117248535,
            "black": 1.7251858711242676,
            "white": 7.358358860015869,
            "middle eastern": 2.013166904449463,
            "latino hispanic": 18.972475051879883
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 19.414138793945312,
            "disgust": 0.3076312839984894,
            "fear": 0.9943575263023376,
            "happy": 0.1579427570104599,
            "sad": 35.82135009765625,
            "surprise": 0.0570669062435627,
            "neutral": 43.247520446777344
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 447,
            "y": 70,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 4.4694294929504395,
            "Man": 95.53057098388672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 56.72456741333008,
            "indian": 5.210292816162109,
            "black": 1.3050562143325806,
            "white": 8.188048362731934,
            "middle eastern": 1.9359283447265625,
            "latino hispanic": 26.6361083984375
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 9.673439979553223,
            "disgust": 3.8920185565948486,
            "fear": 5.4296464920043945,
            "happy": 0.022862602025270462,
            "sad": 36.82952117919922,
            "surprise": 0.017212873324751854,
            "neutral": 44.13529586791992
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 549,
            "y": 40,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 6.26068639755249,
            "Man": 93.73930358886719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 92.7360610961914,
            "indian": 1.4365302324295044,
            "black": 0.10208313167095184,
            "white": 2.3961918354034424,
            "middle eastern": 0.19892512261867523,
            "latino hispanic": 3.1302120685577393
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 11.892355918884277,
            "disgust": 0.000714627793058753,
            "fear": 11.735440254211426,
            "happy": 0.004458095878362656,
            "sad": 31.706815719604492,
            "surprise": 0.027351772412657738,
            "neutral": 44.63286209106445
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 22,
        "region": {
            "x": 286,
            "y": 122,
            "w": 79,
            "h": 79,
            "left_eye": [
                336,
                151
            ],
            "right_eye": [
                310,
                152
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 2.085440158843994,
            "Man": 97.91456604003906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.72503662109375,
            "indian": 0.017006155103445053,
            "black": 0.00010171587200602517,
            "white": 0.025312263518571854,
            "middle eastern": 2.7786016289610416e-05,
            "latino hispanic": 0.23251532018184662
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.0595316886901855,
            "disgust": 0.0038017232436686754,
            "fear": 0.6587244272232056,
            "happy": 0.17825423181056976,
            "sad": 2.546416759490967,
            "surprise": 0.08180725574493408,
            "neutral": 95.47146606445312
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 22,
            "y": 135,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.04408352077007294,
            "Man": 99.9559097290039
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.99944305419922,
            "indian": 2.6433226594235748e-05,
            "black": 9.719913762751275e-11,
            "white": 0.00027228143881075084,
            "middle eastern": 8.783689747771106e-11,
            "latino hispanic": 0.00026181177236139774
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.4461815357208252,
            "disgust": 0.12634755671024323,
            "fear": 0.27633950114250183,
            "happy": 0.004860510118305683,
            "sad": 11.661215782165527,
            "surprise": 0.0004555107734631747,
            "neutral": 86.4845962524414
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 708,
            "y": 70,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.24316343665122986,
            "Man": 99.75682830810547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.98493194580078,
            "indian": 0.001059708883985877,
            "black": 4.1108773984888103e-07,
            "white": 0.001936422660946846,
            "middle eastern": 2.7693866755384988e-08,
            "latino hispanic": 0.01207454688847065
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 50.041847229003906,
            "disgust": 0.013598360121250153,
            "fear": 7.34854793548584,
            "happy": 0.05372760444879532,
            "sad": 12.616764068603516,
            "surprise": 2.7074272632598877,
            "neutral": 27.21808624267578
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 26,
        "region": {
            "x": 822,
            "y": 117,
            "w": 72,
            "h": 72,
            "left_eye": [
                868,
                144
            ],
            "right_eye": [
                844,
                143
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.7419957518577576,
            "Man": 99.25801086425781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 92.6657943725586,
            "indian": 1.533019781112671,
            "black": 0.24058081209659576,
            "white": 0.2206614762544632,
            "middle eastern": 0.015601994469761848,
            "latino hispanic": 5.324343681335449
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.080138921737671,
            "disgust": 11.607358932495117,
            "fear": 7.615522384643555,
            "happy": 7.343249797821045,
            "sad": 48.32370376586914,
            "surprise": 0.0927121564745903,
            "neutral": 23.937318801879883
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 29,
        "region": {
            "x": 133,
            "y": 74,
            "w": 80,
            "h": 80,
            "left_eye": [
                183,
                105
            ],
            "right_eye": [
                156,
                106
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 60.07587814331055,
            "Man": 39.92411804199219
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 97.9290771484375,
            "indian": 0.14856752753257751,
            "black": 0.0013682610588148236,
            "white": 0.13917067646980286,
            "middle eastern": 0.0006858056876808405,
            "latino hispanic": 1.7811288833618164
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.022552920505404472,
            "disgust": 4.328291652200278e-06,
            "fear": 0.01166582852602005,
            "happy": 0.707095742225647,
            "sad": 0.29756686091423035,
            "surprise": 0.00019875398720614612,
            "neutral": 98.96092224121094
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 910,
            "y": 84,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.2439451217651367,
            "Man": 98.75605773925781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 85.57742309570312,
            "indian": 4.724287509918213,
            "black": 0.14081908762454987,
            "white": 2.589646816253662,
            "middle eastern": 0.04414951428771019,
            "latino hispanic": 6.923671245574951
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 8.346659660339355,
            "disgust": 1.019936442375183,
            "fear": 0.7625440359115601,
            "happy": 2.3695831298828125,
            "sad": 24.808034896850586,
            "surprise": 0.13971136510372162,
            "neutral": 62.55353546142578
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 128,
            "y": 198,
            "w": 76,
            "h": 76,
            "left_eye": [
                178,
                227
            ],
            "right_eye": [
                152,
                227
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 14.071557998657227,
            "Man": 85.9284439086914
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 55.39065170288086,
            "indian": 5.061993598937988,
            "black": 1.8251972198486328,
            "white": 1.848715901374817,
            "middle eastern": 0.4438488185405731,
            "latino hispanic": 35.42959976196289
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.313144683837891,
            "disgust": 9.019767761230469,
            "fear": 47.449764251708984,
            "happy": 34.97755813598633,
            "sad": 2.6915738582611084,
            "surprise": 1.2458910942077637,
            "neutral": 0.3022976815700531
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 22,
        "region": {
            "x": 1034,
            "y": 109,
            "w": 79,
            "h": 79,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.8668286800384521,
            "Man": 98.13317108154297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.974365234375,
            "indian": 0.0102559057995677,
            "black": 1.6307488976963214e-06,
            "white": 0.0017909889575093985,
            "middle eastern": 7.252054956552456e-08,
            "latino hispanic": 0.013590832240879536
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.9482210874557495,
            "disgust": 6.89436710672453e-05,
            "fear": 0.12273900210857391,
            "happy": 0.13196775317192078,
            "sad": 4.18764066696167,
            "surprise": 0.0107488464564085,
            "neutral": 94.5986099243164
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 623,
            "y": 198,
            "w": 80,
            "h": 80,
            "left_eye": [
                673,
                228
            ],
            "right_eye": [
                649,
                229
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.9722768068313599,
            "Man": 99.02772521972656
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.97146606445312,
            "indian": 0.0036835218779742718,
            "black": 1.5414191238960484e-06,
            "white": 0.0012318900553509593,
            "middle eastern": 5.691430615684112e-08,
            "latino hispanic": 0.02361915446817875
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.30269482731819153,
            "disgust": 3.9562319642527655e-08,
            "fear": 0.0037969748955219984,
            "happy": 0.0027724369429051876,
            "sad": 0.3613957166671753,
            "surprise": 3.773161006392911e-05,
            "neutral": 99.32930755615234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 429,
            "y": 214,
            "w": 78,
            "h": 78,
            "left_eye": [
                478,
                242
            ],
            "right_eye": [
                450,
                244
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.422710120677948,
            "Man": 99.5772933959961
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.97246551513672,
            "indian": 0.009476102888584137,
            "black": 5.9658518694050144e-06,
            "white": 0.009852978400886059,
            "middle eastern": 5.772535018877534e-07,
            "latino hispanic": 0.008195700123906136
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.2529006898403168,
            "disgust": 6.763230339856818e-05,
            "fear": 0.15293286740779877,
            "happy": 1.0145660638809204,
            "sad": 1.8600901365280151,
            "surprise": 0.01979026570916176,
            "neutral": 96.69965362548828
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 769,
            "y": 208,
            "w": 85,
            "h": 85,
            "left_eye": [
                820,
                240
            ],
            "right_eye": [
                795,
                242
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.46581950783729553,
            "Man": 99.5341796875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.67630004882812,
            "indian": 0.023169640451669693,
            "black": 0.00024474397650919855,
            "white": 0.0878254622220993,
            "middle eastern": 8.003984112292528e-05,
            "latino hispanic": 0.21238556504249573
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.638224124908447,
            "disgust": 0.060161929577589035,
            "fear": 1.1068698167800903,
            "happy": 0.1130773201584816,
            "sad": 14.400572776794434,
            "surprise": 0.003568556159734726,
            "neutral": 78.67752838134766
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 1140,
            "y": 211,
            "w": 87,
            "h": 87,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 1.2373799085617065,
            "Man": 98.76262664794922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.97673797607422,
            "indian": 0.007501355372369289,
            "black": 3.912546731044131e-07,
            "white": 0.006124255247414112,
            "middle eastern": 1.1807617994463726e-07,
            "latino hispanic": 0.009643538855016232
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.10625123977661133,
            "disgust": 2.8978541877222597e-07,
            "fear": 0.005692791659384966,
            "happy": 0.09768472611904144,
            "sad": 0.6785635948181152,
            "surprise": 0.0017221483867615461,
            "neutral": 99.1100845336914
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 1078,
            "y": 49,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 42.216880798339844,
            "Man": 57.783119201660156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 25.76543617248535,
            "indian": 13.706355094909668,
            "black": 20.60898780822754,
            "white": 8.266050338745117,
            "middle eastern": 6.69329833984375,
            "latino hispanic": 24.959877014160156
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.5884957909584045,
            "disgust": 0.0003727795265149325,
            "fear": 4.472487449645996,
            "happy": 26.39991569519043,
            "sad": 20.727203369140625,
            "surprise": 0.0005451950710266829,
            "neutral": 47.81098175048828
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 273,
            "y": 248,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.10568942874670029,
            "Man": 99.89431762695312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.89608001708984,
            "indian": 0.011919471435248852,
            "black": 8.883453119779006e-06,
            "white": 0.0018467481713742018,
            "middle eastern": 2.267627365881708e-07,
            "latino hispanic": 0.09014638513326645
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.001218102523125708,
            "disgust": 1.0812866690912415e-07,
            "fear": 0.001013263245113194,
            "happy": 88.65026092529297,
            "sad": 0.07399860769510269,
            "surprise": 0.007971787825226784,
            "neutral": 11.265545845031738
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 0,
            "y": 257,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 2.831890106201172,
            "Man": 97.16810607910156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 68.96074676513672,
            "indian": 4.235587120056152,
            "black": 1.1637603044509888,
            "white": 6.071758270263672,
            "middle eastern": 1.088356614112854,
            "latino hispanic": 18.479785919189453
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0004770643135998398,
            "disgust": 1.1478387307306548e-07,
            "fear": 82.26099395751953,
            "happy": 8.49991226196289,
            "sad": 8.628663063049316,
            "surprise": 0.00036409724270924926,
            "neutral": 0.6095844507217407
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 27,
        "region": {
            "x": 923,
            "y": 207,
            "w": 91,
            "h": 91,
            "left_eye": [
                980,
                239
            ],
            "right_eye": [
                951,
                243
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 9.766968727111816,
            "Man": 90.2330322265625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 97.81201171875,
            "indian": 0.9363679885864258,
            "black": 0.004993990994989872,
            "white": 0.3485875725746155,
            "middle eastern": 0.002191992709413171,
            "latino hispanic": 0.8958391547203064
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.8591338396072388,
            "disgust": 0.10515300929546356,
            "fear": 0.939375638961792,
            "happy": 0.30023160576820374,
            "sad": 28.960859298706055,
            "surprise": 0.03280619531869888,
            "neutral": 67.80244445800781
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 98,
            "y": 306,
            "w": 89,
            "h": 89,
            "left_eye": [
                152,
                339
            ],
            "right_eye": [
                122,
                340
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.270988792181015,
            "Man": 99.72901153564453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 81.67533111572266,
            "indian": 10.68598461151123,
            "black": 0.7191484570503235,
            "white": 0.5326187014579773,
            "middle eastern": 0.05049910396337509,
            "latino hispanic": 6.336416244506836
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 8.198347091674805,
            "disgust": 0.0006380371632985771,
            "fear": 0.04479311779141426,
            "happy": 0.16101451218128204,
            "sad": 9.749780654907227,
            "surprise": 0.0011638399446383119,
            "neutral": 81.8442611694336
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 687,
            "y": 305,
            "w": 85,
            "h": 85,
            "left_eye": [
                742,
                337
            ],
            "right_eye": [
                712,
                339
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 1.2526534795761108,
            "Man": 98.74734497070312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.8187484741211,
            "indian": 0.02289753407239914,
            "black": 6.176756141940132e-05,
            "white": 0.03788549453020096,
            "middle eastern": 4.853240170632489e-06,
            "latino hispanic": 0.12040603905916214
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.6263387799263,
            "disgust": 0.0008305145311169326,
            "fear": 0.29857137799263,
            "happy": 0.03393625095486641,
            "sad": 5.605888366699219,
            "surprise": 0.0898846909403801,
            "neutral": 93.34455108642578
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 850,
            "y": 315,
            "w": 94,
            "h": 94,
            "left_eye": [
                890,
                391
            ],
            "right_eye": [
                878,
                354
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 87.41377258300781,
            "Man": 12.586227416992188
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.970061779022217,
            "indian": 6.846728324890137,
            "black": 7.902988433837891,
            "white": 47.37001037597656,
            "middle eastern": 6.46090841293335,
            "latino hispanic": 25.449302673339844
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.3008214239107474e-07,
            "disgust": 8.968044410623265e-22,
            "fear": 1.161082186206799e-14,
            "happy": 100.0,
            "sad": 3.7965064425549144e-10,
            "surprise": 1.100466506115394e-12,
            "neutral": 4.13300199619826e-10
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 369,
            "y": 306,
            "w": 86,
            "h": 86,
            "left_eye": [
                425,
                338
            ],
            "right_eye": [
                394,
                340
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.7894415259361267,
            "Man": 99.21056365966797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 51.09000778198242,
            "indian": 9.065593719482422,
            "black": 2.4877519607543945,
            "white": 2.2547767162323,
            "middle eastern": 0.675794780254364,
            "latino hispanic": 34.42607116699219
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.56266188621521,
            "disgust": 0.19496063888072968,
            "fear": 1.6109044551849365,
            "happy": 0.17167045176029205,
            "sad": 17.295839309692383,
            "surprise": 0.010317076928913593,
            "neutral": 78.15364074707031
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 1050,
            "y": 315,
            "w": 92,
            "h": 92,
            "left_eye": [
                1111,
                350
            ],
            "right_eye": [
                1076,
                351
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.6411200761795044,
            "Man": 99.35887908935547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.9608383178711,
            "indian": 0.00713310856372118,
            "black": 6.635653335251845e-06,
            "white": 0.002599311526864767,
            "middle eastern": 2.2847795833058626e-07,
            "latino hispanic": 0.029422122985124588
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.6819158792495728,
            "disgust": 0.0027558186557143927,
            "fear": 0.12158888578414917,
            "happy": 0.40842750668525696,
            "sad": 7.684696674346924,
            "surprise": 0.005513516254723072,
            "neutral": 91.09510040283203
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 528,
            "y": 309,
            "w": 86,
            "h": 86,
            "left_eye": [
                565,
                378
            ],
            "right_eye": [
                554,
                343
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 97.2426986694336,
            "Man": 2.7573108673095703
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.2876994609832764,
            "indian": 6.043241024017334,
            "black": 3.122661828994751,
            "white": 53.07980728149414,
            "middle eastern": 12.443585395812988,
            "latino hispanic": 24.02300453186035
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0007747074123471975,
            "disgust": 6.0781600293245e-14,
            "fear": 5.089871191188422e-09,
            "happy": 99.99921417236328,
            "sad": 1.2443824743968435e-05,
            "surprise": 2.918409125474142e-10,
            "neutral": 5.464137942112757e-08
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 205,
            "y": 333,
            "w": 87,
            "h": 87,
            "left_eye": [
                260,
                365
            ],
            "right_eye": [
                226,
                368
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 23.797382354736328,
            "Man": 76.2026138305664
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 56.289310455322266,
            "indian": 5.857173919677734,
            "black": 2.1519973278045654,
            "white": 12.390240669250488,
            "middle eastern": 4.236586570739746,
            "latino hispanic": 19.07469940185547
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 9.559313774108887,
            "disgust": 0.7060858607292175,
            "fear": 9.823110580444336,
            "happy": 5.21243953704834,
            "sad": 27.439579010009766,
            "surprise": 0.48945653438568115,
            "neutral": 46.770015716552734
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 1222,
            "y": 343,
            "w": 57,
            "h": 83,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 9.832438468933105,
            "Man": 90.16757202148438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 46.270538330078125,
            "indian": 9.025237083435059,
            "black": 3.4861392974853516,
            "white": 10.596892356872559,
            "middle eastern": 4.777076721191406,
            "latino hispanic": 25.844114303588867
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.001912962063215673,
            "disgust": 7.76374145061709e-06,
            "fear": 0.2873830497264862,
            "happy": 0.008400737307965755,
            "sad": 95.81673431396484,
            "surprise": 2.0908655073981208e-07,
            "neutral": 3.8855559825897217
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 0,
            "y": 348,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.22837752103805542,
            "Man": 99.77162170410156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 98.45230102539062,
            "indian": 0.588060200214386,
            "black": 0.0011896986979991198,
            "white": 0.027444608509540558,
            "middle eastern": 2.494896216376219e-05,
            "latino hispanic": 0.9309820532798767
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.8139114379882812,
            "disgust": 1.0452104959313147e-08,
            "fear": 0.13964708149433136,
            "happy": 1.8456561519997194e-05,
            "sad": 2.6110169887542725,
            "surprise": 0.0001038906120811589,
            "neutral": 94.435302734375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 311,
            "y": 423,
            "w": 95,
            "h": 95,
            "left_eye": [
                370,
                458
            ],
            "right_eye": [
                340,
                461
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 14.840559959411621,
            "Man": 85.1594467163086
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.69385528564453,
            "indian": 0.04243027791380882,
            "black": 0.0001507215347373858,
            "white": 0.02731938287615776,
            "middle eastern": 1.8518347133067437e-05,
            "latino hispanic": 0.23622480034828186
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.9561679363250732,
            "disgust": 0.008765985257923603,
            "fear": 1.0315132141113281,
            "happy": 0.017155127599835396,
            "sad": 9.622746467590332,
            "surprise": 0.00034679428790695965,
            "neutral": 86.3633041381836
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 570,
            "y": 453,
            "w": 92,
            "h": 92,
            "left_eye": [
                632,
                490
            ],
            "right_eye": [
                599,
                487
            ]
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 2.587264060974121,
            "Man": 97.41273498535156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 39.67646026611328,
            "indian": 10.684348106384277,
            "black": 8.763808250427246,
            "white": 8.238080024719238,
            "middle eastern": 5.162648677825928,
            "latino hispanic": 27.474660873413086
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.2820628881454468,
            "disgust": 0.00020345821394585073,
            "fear": 0.6808163523674011,
            "happy": 0.000238515276578255,
            "sad": 97.45671081542969,
            "surprise": 2.2450272751939337e-07,
            "neutral": 0.579963743686676
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 144,
            "y": 430,
            "w": 100,
            "h": 100,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.3301010131836,
            "Man": 0.6699007153511047
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 93.57391357421875,
            "indian": 0.5351220965385437,
            "black": 0.003359635593369603,
            "white": 0.1388847976922989,
            "middle eastern": 0.0008718175231479108,
            "latino hispanic": 5.747843265533447
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 6.4949140548706055,
            "disgust": 16.972793579101562,
            "fear": 6.236169815063477,
            "happy": 0.06171057000756264,
            "sad": 37.38862991333008,
            "surprise": 0.6080023646354675,
            "neutral": 32.23777770996094
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 28,
        "region": {
            "x": 472,
            "y": 440,
            "w": 92,
            "h": 92,
            "left_eye": [
                529,
                474
            ],
            "right_eye": [
                496,
                476
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.881975531578064,
            "Man": 98.1180191040039
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 49.44170379638672,
            "indian": 9.11661434173584,
            "black": 2.5352489948272705,
            "white": 12.461437225341797,
            "middle eastern": 4.6174421310424805,
            "latino hispanic": 21.827560424804688
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0010776326525956392,
            "disgust": 1.7640275473240763e-05,
            "fear": 0.002660327823832631,
            "happy": 86.3600082397461,
            "sad": 0.11178069561719894,
            "surprise": 0.02822113409638405,
            "neutral": 13.496228218078613
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 730,
            "y": 426,
            "w": 94,
            "h": 94,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 75.09603881835938,
            "Man": 24.90396499633789
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 17.126300811767578,
            "indian": 23.756122589111328,
            "black": 4.2999138832092285,
            "white": 11.5740385055542,
            "middle eastern": 11.419022560119629,
            "latino hispanic": 31.824600219726562
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.028171896934509277,
            "disgust": 3.696486317039671e-07,
            "fear": 0.0007895632879808545,
            "happy": 1.609742283821106,
            "sad": 0.27122801542282104,
            "surprise": 1.864419573394116e-05,
            "neutral": 98.09004974365234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 980,
            "y": 417,
            "w": 106,
            "h": 106,
            "left_eye": [
                1047,
                458
            ],
            "right_eye": [
                1011,
                458
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 32.988624572753906,
            "Man": 67.0113754272461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 58.89849853515625,
            "indian": 5.9444708824157715,
            "black": 0.6099090576171875,
            "white": 7.835731506347656,
            "middle eastern": 1.1122782230377197,
            "latino hispanic": 25.5991153717041
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.3953763246536255,
            "disgust": 1.42165472425404e-05,
            "fear": 0.0052682687528431416,
            "happy": 0.091031514108181,
            "sad": 0.8663963675498962,
            "surprise": 0.0004314917605370283,
            "neutral": 98.64148712158203
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 91,
            "y": 559,
            "w": 106,
            "h": 106,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.3574160039424896,
            "Man": 99.642578125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 92.82344818115234,
            "indian": 0.19692622125148773,
            "black": 0.01567409560084343,
            "white": 5.009490966796875,
            "middle eastern": 0.22071819007396698,
            "latino hispanic": 1.73374605178833
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 38.74226379394531,
            "disgust": 0.06072278320789337,
            "fear": 2.7865192890167236,
            "happy": 0.0038162139244377613,
            "sad": 24.3209228515625,
            "surprise": 0.0002128827472915873,
            "neutral": 34.085540771484375
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 24,
        "region": {
            "x": 538,
            "y": 560,
            "w": 99,
            "h": 99,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.2662326395511627,
            "Man": 99.7337646484375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 72.38096618652344,
            "indian": 11.026350975036621,
            "black": 1.3742833137512207,
            "white": 2.1931700706481934,
            "middle eastern": 0.25662195682525635,
            "latino hispanic": 12.768607139587402
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 59.74441146850586,
            "disgust": 0.08268401026725769,
            "fear": 0.5838475823402405,
            "happy": 0.07568205147981644,
            "sad": 12.587834358215332,
            "surprise": 0.055150434374809265,
            "neutral": 26.87039566040039
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 28,
        "region": {
            "x": 870,
            "y": 544,
            "w": 108,
            "h": 108,
            "left_eye": [
                913,
                625
            ],
            "right_eye": [
                904,
                584
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 92.65401458740234,
            "Man": 7.345985412597656
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 13.3790283203125,
            "indian": 11.140347480773926,
            "black": 30.526954650878906,
            "white": 13.576266288757324,
            "middle eastern": 6.742461204528809,
            "latino hispanic": 24.634937286376953
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 6.428388132917462e-07,
            "disgust": 1.458256665377508e-14,
            "fear": 3.050017460815013e-10,
            "happy": 99.99304962158203,
            "sad": 0.006948505528271198,
            "surprise": 6.821201047578496e-13,
            "neutral": 1.468275883098613e-07
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 0,
            "y": 570,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 43.163509368896484,
            "Man": 56.836490631103516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.6642997860908508,
            "indian": 0.057877324521541595,
            "black": 0.03038574941456318,
            "white": 94.7661361694336,
            "middle eastern": 2.8462040424346924,
            "latino hispanic": 1.6350961923599243
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 42.81388854980469,
            "disgust": 8.982434479380685e-13,
            "fear": 49.222381591796875,
            "happy": 0.00019357135170139372,
            "sad": 7.947120189666748,
            "surprise": 2.7733432261811686e-07,
            "neutral": 0.01641266979277134
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 30,
        "region": {
            "x": 307,
            "y": 558,
            "w": 106,
            "h": 106,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.565251350402832,
            "Man": 98.43474578857422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 91.92733764648438,
            "indian": 4.33381986618042,
            "black": 0.08781112730503082,
            "white": 0.7917976379394531,
            "middle eastern": 0.059315089136362076,
            "latino hispanic": 2.7999234199523926
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.3207578659057617,
            "disgust": 2.494172923750426e-10,
            "fear": 8.667449583299458e-05,
            "happy": 0.00025383601314388216,
            "sad": 0.3017214834690094,
            "surprise": 5.67913411941845e-06,
            "neutral": 98.3771743774414
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 1061,
            "y": 561,
            "w": 108,
            "h": 108,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.426932692527771,
            "Man": 99.57306671142578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 98.21409606933594,
            "indian": 0.29329392313957214,
            "black": 0.004697646014392376,
            "white": 0.3445134460926056,
            "middle eastern": 0.0022601671516895294,
            "latino hispanic": 1.1411350965499878
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.2758487462997437,
            "disgust": 2.068961002521519e-09,
            "fear": 0.0012412897776812315,
            "happy": 0.035493310540914536,
            "sad": 4.82781982421875,
            "surprise": 1.1506106602610089e-05,
            "neutral": 93.85958099365234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 40,
        "region": {
            "x": 706,
            "y": 589,
            "w": 109,
            "h": 109,
            "left_eye": [
                778,
                630
            ],
            "right_eye": [
                742,
                631
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 7.194596290588379,
            "Man": 92.80540466308594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.75183868408203,
            "indian": 0.06002587080001831,
            "black": 8.931519550969824e-05,
            "white": 0.007398617919534445,
            "middle eastern": 7.27926317267702e-06,
            "latino hispanic": 0.18063601851463318
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 17.96271514892578,
            "disgust": 0.3440382778644562,
            "fear": 0.5516664981842041,
            "happy": 1.0382474660873413,
            "sad": 42.64210891723633,
            "surprise": 0.010622100904583931,
            "neutral": 37.45060348510742
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 24,
        "region": {
            "x": 378,
            "y": 718,
            "w": 110,
            "h": 110,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.4544967412948608,
            "Man": 98.54550170898438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.75775909423828,
            "indian": 0.15310366451740265,
            "black": 3.7651032471330836e-05,
            "white": 0.0012424023589119315,
            "middle eastern": 2.303485871379962e-06,
            "latino hispanic": 0.08785901963710785
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 6.075371742248535,
            "disgust": 0.22160865366458893,
            "fear": 1.6941312551498413,
            "happy": 0.02598244696855545,
            "sad": 77.9596939086914,
            "surprise": 0.02090206742286682,
            "neutral": 14.002314567565918
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 22,
        "region": {
            "x": 808,
            "y": 720,
            "w": 116,
            "h": 116,
            "left_eye": [
                885,
                765
            ],
            "right_eye": [
                841,
                765
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 24.253992080688477,
            "Man": 75.74600219726562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.88862609863281,
            "indian": 0.025297176092863083,
            "black": 1.5152270862017758e-05,
            "white": 0.0027596037834882736,
            "middle eastern": 2.6991742743120994e-06,
            "latino hispanic": 0.08329400420188904
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.824984073638916,
            "disgust": 0.0025513386353850365,
            "fear": 0.23258382081985474,
            "happy": 0.02663807012140751,
            "sad": 20.788545608520508,
            "surprise": 0.001361443311907351,
            "neutral": 73.12334442138672
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 116,
            "y": 736,
            "w": 114,
            "h": 114,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 5.625839710235596,
            "Man": 94.37416076660156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.97502899169922,
            "indian": 0.0017829877324402332,
            "black": 2.7885776034963783e-06,
            "white": 0.004911197815090418,
            "middle eastern": 9.079852247850795e-07,
            "latino hispanic": 0.018272006884217262
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 61.904483795166016,
            "disgust": 32.90916442871094,
            "fear": 0.5890478491783142,
            "happy": 0.012309531681239605,
            "sad": 2.359083890914917,
            "surprise": 0.033218689262866974,
            "neutral": 2.1926939487457275
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 25,
        "region": {
            "x": 595,
            "y": 748,
            "w": 113,
            "h": 113,
            "left_eye": [
                671,
                791
            ],
            "right_eye": [
                630,
                792
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 78.74149322509766,
            "Man": 21.258516311645508
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 55.18843078613281,
            "indian": 15.039942741394043,
            "black": 3.1607580184936523,
            "white": 2.56546688079834,
            "middle eastern": 0.7026163935661316,
            "latino hispanic": 23.342784881591797
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.3740906715393066,
            "disgust": 8.599128341302276e-05,
            "fear": 1.4832435846328735,
            "happy": 0.040994539856910706,
            "sad": 9.20302963256836,
            "surprise": 0.0006022830493748188,
            "neutral": 86.89795684814453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 22,
        "region": {
            "x": 1018,
            "y": 753,
            "w": 114,
            "h": 114,
            "left_eye": [
                1093,
                796
            ],
            "right_eye": [
                1050,
                796
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.5713573694229126,
            "Man": 99.42864990234375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 96.73820495605469,
            "indian": 0.4932881295681,
            "black": 0.011907629668712616,
            "white": 0.33059388399124146,
            "middle eastern": 0.006888827309012413,
            "latino hispanic": 2.4191179275512695
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.5533958673477173,
            "disgust": 2.2552301743417047e-05,
            "fear": 0.00472975242882967,
            "happy": 0.0018218097975477576,
            "sad": 1.9823464155197144,
            "surprise": 0.0002552842488512397,
            "neutral": 97.45742797851562
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 40,
        "region": {
            "x": 365,
            "y": 1035,
            "w": 119,
            "h": 119,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 6.378176212310791,
            "Man": 93.62181854248047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.11585235595703,
            "indian": 0.8508396148681641,
            "black": 3.0361899916897528e-05,
            "white": 0.009895924478769302,
            "middle eastern": 0.00015684458776377141,
            "latino hispanic": 0.023230964317917824
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.016084909439087,
            "disgust": 1.808125125535298e-05,
            "fear": 0.40381643176078796,
            "happy": 0.009119147434830666,
            "sad": 34.673492431640625,
            "surprise": 0.0006362485000863671,
            "neutral": 62.89683532714844
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 40,
        "region": {
            "x": 790,
            "y": 1061,
            "w": 115,
            "h": 115,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 55.365604400634766,
            "Man": 44.63439178466797
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.44778442382812,
            "indian": 0.2503567039966583,
            "black": 0.0006086427019909024,
            "white": 0.11913146823644638,
            "middle eastern": 0.000743017764762044,
            "latino hispanic": 0.18137326836585999
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.002033194759860635,
            "disgust": 9.20582186869634e-13,
            "fear": 3.7349002468545223e-06,
            "happy": 0.00024136232968885452,
            "sad": 0.19750653207302094,
            "surprise": 1.5259913652698742e-06,
            "neutral": 99.80020904541016
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 125,
            "y": 1011,
            "w": 123,
            "h": 123,
            "left_eye": [
                205,
                1058
            ],
            "right_eye": [
                162,
                1059
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 3.0729281902313232,
            "Man": 96.92707824707031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.37631225585938,
            "indian": 0.09979342669248581,
            "black": 0.00017586626927368343,
            "white": 0.02660871297121048,
            "middle eastern": 2.057719939330127e-05,
            "latino hispanic": 0.4970851242542267
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.28184080123901367,
            "disgust": 0.0010281084105372429,
            "fear": 0.1584245264530182,
            "happy": 0.1590515524148941,
            "sad": 1.636710524559021,
            "surprise": 0.10944710671901703,
            "neutral": 97.65349578857422
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 1027,
            "y": 1107,
            "w": 104,
            "h": 104,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.6999900341033936,
            "Man": 99.30001831054688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 76.55420684814453,
            "indian": 9.04888916015625,
            "black": 1.3816787004470825,
            "white": 0.5752107501029968,
            "middle eastern": 0.08517171442508698,
            "latino hispanic": 12.354846000671387
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 18.450111389160156,
            "disgust": 0.0970839112997055,
            "fear": 0.42232102155685425,
            "happy": 0.003191989380866289,
            "sad": 27.210166931152344,
            "surprise": 0.002173793502151966,
            "neutral": 53.814945220947266
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 1068,
            "y": 864,
            "w": 140,
            "h": 140,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 4.067773818969727,
            "Man": 95.93222045898438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0008620993467047811,
            "indian": 5.0414524594089016e-05,
            "black": 4.803513888873567e-07,
            "white": 99.94098663330078,
            "middle eastern": 0.040354304015636444,
            "latino hispanic": 0.017749451100826263
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 91.08588409423828,
            "disgust": 1.6031021004891954e-05,
            "fear": 7.0135040283203125,
            "happy": 0.031232323497533798,
            "sad": 0.005066598765552044,
            "surprise": 1.86429762840271,
            "neutral": 5.970970846647106e-07
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 26,
        "region": {
            "x": 581,
            "y": 1084,
            "w": 119,
            "h": 119,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.6601187586784363,
            "Man": 99.33988189697266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 98.81954193115234,
            "indian": 0.3653278648853302,
            "black": 0.004564118571579456,
            "white": 0.14586575329303741,
            "middle eastern": 0.0019347285851836205,
            "latino hispanic": 0.6627669334411621
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.011957233771681786,
            "disgust": 6.379503696141153e-12,
            "fear": 8.713087709111278e-07,
            "happy": 0.0008799545466899872,
            "sad": 0.01364213041961193,
            "surprise": 6.810972990933806e-05,
            "neutral": 99.97344207763672
        },
        "dominant_emotion": "neutral"
    }
]
let nursing_assistant_data2 = [
    {
        "age": 26,
        "region": {
            "x": 318,
            "y": 101,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0001664067676756531,
            "Man": 99.99983215332031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.33157995343208313,
            "indian": 7.8541131019592285,
            "black": 1.1908611059188843,
            "white": 10.502541542053223,
            "middle eastern": 68.87606048583984,
            "latino hispanic": 11.244845390319824
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.02717483788728714,
            "disgust": 3.696143217879477e-12,
            "fear": 3.587221954148845e-06,
            "happy": 1.9405649709369754e-06,
            "sad": 0.013802318833768368,
            "surprise": 3.9900731962916325e-07,
            "neutral": 99.95902252197266
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 22,
        "region": {
            "x": 588,
            "y": 109,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.5799094438552856,
            "Man": 99.42008972167969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 14.728230476379395,
            "indian": 17.608192443847656,
            "black": 18.51082420349121,
            "white": 11.873696327209473,
            "middle eastern": 14.121338844299316,
            "latino hispanic": 23.1577205657959
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.8763071894645691,
            "disgust": 1.150038224295713e-05,
            "fear": 0.04027228057384491,
            "happy": 2.20523738861084,
            "sad": 33.681175231933594,
            "surprise": 5.4389562137657776e-05,
            "neutral": 63.19694519042969
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 505,
            "y": 164,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 34.92415237426758,
            "Man": 65.07585144042969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 39.37090301513672,
            "indian": 12.824348449707031,
            "black": 7.425408363342285,
            "white": 6.646261215209961,
            "middle eastern": 3.673187255859375,
            "latino hispanic": 30.059885025024414
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 11.398664474487305,
            "disgust": 3.576639175415039,
            "fear": 35.00430679321289,
            "happy": 0.09593387693166733,
            "sad": 48.311580657958984,
            "surprise": 0.029207827523350716,
            "neutral": 1.5836701393127441
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 40,
        "region": {
            "x": 619,
            "y": 163,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.016044268384575844,
            "Man": 99.98395538330078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.0449344447115436e-05,
            "indian": 9.522015716356691e-06,
            "black": 3.632378593465546e-07,
            "white": 99.8622055053711,
            "middle eastern": 0.04533950984477997,
            "latino hispanic": 0.09242726117372513
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 93.19163513183594,
            "disgust": 1.392756985296728e-07,
            "fear": 0.40375956892967224,
            "happy": 0.2568305432796478,
            "sad": 5.2591633796691895,
            "surprise": 4.722879020846449e-05,
            "neutral": 0.8885612487792969
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 24,
        "region": {
            "x": 1035,
            "y": 146,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.021047567948698997,
            "Man": 99.97895050048828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 69.03743743896484,
            "indian": 1.1702895164489746,
            "black": 0.12669362127780914,
            "white": 25.895660400390625,
            "middle eastern": 1.1517058610916138,
            "latino hispanic": 2.6182122230529785
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.0730109214782715,
            "disgust": 6.212266043803538e-07,
            "fear": 0.01792933978140354,
            "happy": 0.8251473307609558,
            "sad": 0.7202487587928772,
            "surprise": 0.0062476894818246365,
            "neutral": 97.35741424560547
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 410,
            "y": 162,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 48.211483001708984,
            "Man": 51.78852081298828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 32.32777786254883,
            "indian": 7.553267955780029,
            "black": 6.4744367599487305,
            "white": 22.662534713745117,
            "middle eastern": 11.584369659423828,
            "latino hispanic": 19.39762306213379
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.354081153869629,
            "disgust": 0.0006729899323545396,
            "fear": 85.48783874511719,
            "happy": 1.2310500144958496,
            "sad": 2.313427686691284,
            "surprise": 0.05644368380308151,
            "neutral": 6.556477069854736
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 32,
        "region": {
            "x": 129,
            "y": 160,
            "w": 80,
            "h": 80,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.03337458521127701,
            "Man": 99.96662139892578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.127715826034546,
            "indian": 6.017010688781738,
            "black": 0.5463438630104065,
            "white": 29.7406005859375,
            "middle eastern": 43.37229537963867,
            "latino hispanic": 19.1960391998291
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 9.482884407043457,
            "disgust": 1.8483015118420099e-09,
            "fear": 0.013372786343097687,
            "happy": 3.099719762802124,
            "sad": 0.8877817392349243,
            "surprise": 0.0005454526981338859,
            "neutral": 86.51569366455078
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 826,
            "y": 137,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.42834994196891785,
            "Man": 99.57164764404297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.011979848146438599,
            "indian": 0.061923425644636154,
            "black": 0.0025593657046556473,
            "white": 88.35325622558594,
            "middle eastern": 8.354446411132812,
            "latino hispanic": 3.2158448696136475
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.30894339084625244,
            "disgust": 9.295965774924753e-09,
            "fear": 0.002048394177109003,
            "happy": 15.255016326904297,
            "sad": 0.06396042555570602,
            "surprise": 0.0023875862825661898,
            "neutral": 84.36764526367188
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 204,
            "y": 146,
            "w": 87,
            "h": 87,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.3380555510520935,
            "Man": 99.66194915771484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.608177900314331,
            "indian": 7.172893524169922,
            "black": 2.2318172454833984,
            "white": 34.13134002685547,
            "middle eastern": 35.78136444091797,
            "latino hispanic": 17.07440757751465
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 9.525871276855469,
            "disgust": 4.686150418820034e-07,
            "fear": 0.013659454882144928,
            "happy": 0.002675390336662531,
            "sad": 90.33810424804688,
            "surprise": 4.418994947741339e-08,
            "neutral": 0.1196887418627739
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 24,
        "region": {
            "x": 1198,
            "y": 168,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.5616519451141357,
            "Man": 99.43834686279297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.49083027243614197,
            "indian": 0.16942770779132843,
            "black": 0.012719486840069294,
            "white": 90.08963012695312,
            "middle eastern": 5.419886589050293,
            "latino hispanic": 3.8175079822540283
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 16.838045120239258,
            "disgust": 0.00029226928018033504,
            "fear": 5.456019401550293,
            "happy": 1.707339882850647,
            "sad": 64.23870086669922,
            "surprise": 0.028713952749967575,
            "neutral": 11.730895042419434
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 43,
            "y": 164,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.786365270614624,
            "Man": 99.21363830566406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.4962390050901608e-12,
            "indian": 5.09448494674658e-13,
            "black": 2.1751000411573806e-17,
            "white": 100.0,
            "middle eastern": 6.428994083762518e-07,
            "latino hispanic": 5.293604203870927e-07
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.101547956466675,
            "disgust": 0.022749463096261024,
            "fear": 37.95503616333008,
            "happy": 0.5161408185958862,
            "sad": 54.32818603515625,
            "surprise": 0.0519644096493721,
            "neutral": 5.024376392364502
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 749,
            "y": 208,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.20695117115974426,
            "Man": 99.79305267333984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0041414909064769745,
            "indian": 0.013316280208528042,
            "black": 0.00034537259489297867,
            "white": 92.16901397705078,
            "middle eastern": 4.027541160583496,
            "latino hispanic": 3.7856392860412598
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.460198402404785,
            "disgust": 3.232337508762839e-09,
            "fear": 0.02127855084836483,
            "happy": 0.1373153030872345,
            "sad": 1.077806830406189,
            "surprise": 0.00012601316848304123,
            "neutral": 90.30327606201172
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 208,
            "y": 223,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 28.989055633544922,
            "Man": 71.01094055175781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 16.238914489746094,
            "indian": 10.08985424041748,
            "black": 5.934198379516602,
            "white": 19.108640670776367,
            "middle eastern": 15.663348197937012,
            "latino hispanic": 32.96504211425781
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.7090554237365723,
            "disgust": 0.0792909562587738,
            "fear": 3.862236738204956,
            "happy": 2.033804416656494,
            "sad": 23.097618103027344,
            "surprise": 0.25905147194862366,
            "neutral": 66.95894622802734
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 917,
            "y": 235,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 26.905086517333984,
            "Man": 73.09491729736328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 24.164134979248047,
            "indian": 10.47425651550293,
            "black": 5.087303638458252,
            "white": 21.11007308959961,
            "middle eastern": 18.129056930541992,
            "latino hispanic": 21.035173416137695
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 32.30312728881836,
            "disgust": 0.003776819445192814,
            "fear": 4.6127543449401855,
            "happy": 27.419979095458984,
            "sad": 7.518245220184326,
            "surprise": 0.2684926390647888,
            "neutral": 27.873626708984375
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 36,
        "region": {
            "x": 1136,
            "y": 250,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 9.793691635131836,
            "Man": 90.206298828125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 32.2064323425293,
            "indian": 5.73667573928833,
            "black": 4.136645317077637,
            "white": 26.451719284057617,
            "middle eastern": 10.865400314331055,
            "latino hispanic": 20.60312843322754
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.09630672633647919,
            "disgust": 64.06076049804688,
            "fear": 4.2086100578308105,
            "happy": 31.001344680786133,
            "sad": 0.29489579796791077,
            "surprise": 0.0012086292263120413,
            "neutral": 0.3368788957595825
        },
        "dominant_emotion": "disgust"
    },
    {
        "age": 27,
        "region": {
            "x": 515,
            "y": 257,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 1.3257603645324707,
            "Man": 98.67424011230469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 14.219088554382324,
            "indian": 4.261255264282227,
            "black": 1.2997328042984009,
            "white": 41.519439697265625,
            "middle eastern": 14.867846488952637,
            "latino hispanic": 23.832637786865234
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.470781904179603e-05,
            "disgust": 1.4578121820818524e-08,
            "fear": 0.00011537525278981775,
            "happy": 97.40128326416016,
            "sad": 0.009123966097831726,
            "surprise": 0.0019541545771062374,
            "neutral": 2.5874276161193848
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 1039,
            "y": 261,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 2.7787866592407227,
            "Man": 97.2212142944336
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 67.37419128417969,
            "indian": 6.907008647918701,
            "black": 5.310081481933594,
            "white": 5.30521297454834,
            "middle eastern": 1.5716890096664429,
            "latino hispanic": 13.531816482543945
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.865809278454346e-14,
            "disgust": 1.1589475780613345e-32,
            "fear": 3.3959939339443647e-18,
            "happy": 100.0,
            "sad": 2.945129851834058e-16,
            "surprise": 1.218015166943318e-15,
            "neutral": 9.293586344938376e-09
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 365,
            "y": 267,
            "w": 87,
            "h": 87,
            "left_eye": [
                419,
                299
            ],
            "right_eye": [
                392,
                302
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 80.31905364990234,
            "Man": 19.680946350097656
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.2550658583641052,
            "indian": 0.22766529023647308,
            "black": 0.01639850065112114,
            "white": 85.871337890625,
            "middle eastern": 8.981910705566406,
            "latino hispanic": 4.64762020111084
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.5232782718376257e-05,
            "disgust": 4.7291006666227986e-08,
            "fear": 0.0012098269071429968,
            "happy": 99.9380874633789,
            "sad": 0.00047224218724295497,
            "surprise": 1.1928424100915436e-05,
            "neutral": 0.06019913777709007
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 25,
            "y": 290,
            "w": 87,
            "h": 87,
            "left_eye": [
                81,
                324
            ],
            "right_eye": [
                53,
                323
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 88.78428649902344,
            "Man": 11.215710639953613
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.3654431700706482,
            "indian": 0.708210825920105,
            "black": 0.025753341615200043,
            "white": 71.61812591552734,
            "middle eastern": 11.482453346252441,
            "latino hispanic": 15.800010681152344
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.847375392913818,
            "disgust": 0.30921876430511475,
            "fear": 45.50456619262695,
            "happy": 0.009595055133104324,
            "sad": 33.46017837524414,
            "surprise": 0.19832415878772736,
            "neutral": 14.670741081237793
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 28,
        "region": {
            "x": 105,
            "y": 261,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 97.2457046508789,
            "Man": 2.7542996406555176
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 27.991207122802734,
            "indian": 9.023161888122559,
            "black": 1.9763593673706055,
            "white": 23.744850158691406,
            "middle eastern": 10.54893970489502,
            "latino hispanic": 26.71547508239746
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.7546590566635132,
            "disgust": 1.5245563058513545e-12,
            "fear": 0.006739069242030382,
            "happy": 0.002035786397755146,
            "sad": 1.9741287231445312,
            "surprise": 2.4765381567704026e-06,
            "neutral": 96.26243591308594
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 818,
            "y": 298,
            "w": 82,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.21531733870506287,
            "Man": 99.78468322753906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.1893826723098755,
            "indian": 4.7027082443237305,
            "black": 0.7454606890678406,
            "white": 33.8269157409668,
            "middle eastern": 37.03323745727539,
            "latino hispanic": 22.502290725708008
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.31850722432136536,
            "disgust": 7.960254851113735e-12,
            "fear": 0.013940802775323391,
            "happy": 0.000141305907163769,
            "sad": 0.30096685886383057,
            "surprise": 3.3485051176285197e-07,
            "neutral": 99.36644744873047
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 946,
            "y": 316,
            "w": 77,
            "h": 77,
            "left_eye": [
                996,
                344
            ],
            "right_eye": [
                969,
                346
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.37806645035743713,
            "Man": 99.62193298339844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 14.046534538269043,
            "indian": 10.63950252532959,
            "black": 5.5607008934021,
            "white": 18.892011642456055,
            "middle eastern": 13.483917236328125,
            "latino hispanic": 37.37733840942383
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.17653034627437592,
            "disgust": 9.521400334833174e-11,
            "fear": 0.12283733487129211,
            "happy": 0.00017161815776489675,
            "sad": 3.9559130668640137,
            "surprise": 1.0372062206442934e-05,
            "neutral": 95.74453735351562
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 1108,
            "y": 332,
            "w": 81,
            "h": 81,
            "left_eye": [
                1159,
                361
            ],
            "right_eye": [
                1132,
                364
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 87.69681549072266,
            "Man": 12.303187370300293
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0038922729436308146,
            "indian": 0.07784643024206161,
            "black": 0.0007552995230071247,
            "white": 76.67414855957031,
            "middle eastern": 14.21311092376709,
            "latino hispanic": 9.030250549316406
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.7036936696968041e-06,
            "disgust": 1.3111330597614934e-12,
            "fear": 1.8171709598391317e-05,
            "happy": 99.93365478515625,
            "sad": 0.00015843473374843597,
            "surprise": 0.008199936710298061,
            "neutral": 0.057964522391557693
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 459,
            "y": 344,
            "w": 85,
            "h": 85,
            "left_eye": [
                512,
                377
            ],
            "right_eye": [
                487,
                377
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0014701444888487458,
            "Man": 99.99853515625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 63.787139892578125,
            "indian": 8.51547622680664,
            "black": 4.379173278808594,
            "white": 3.19561505317688,
            "middle eastern": 0.7077574133872986,
            "latino hispanic": 19.414840698242188
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 23.553438186645508,
            "disgust": 0.04123576357960701,
            "fear": 10.832493782043457,
            "happy": 0.0038411098066717386,
            "sad": 42.27647399902344,
            "surprise": 0.0697232186794281,
            "neutral": 23.222789764404297
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 29,
        "region": {
            "x": 689,
            "y": 358,
            "w": 88,
            "h": 88,
            "left_eye": [
                747,
                392
            ],
            "right_eye": [
                714,
                389
            ]
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 99.99105072021484,
            "Man": 0.008949745446443558
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.09957504272460938,
            "indian": 0.16315330564975739,
            "black": 0.009364648722112179,
            "white": 86.20556640625,
            "middle eastern": 8.236220359802246,
            "latino hispanic": 5.2861199378967285
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.646722572942963e-06,
            "disgust": 6.737121971411852e-11,
            "fear": 7.721667749649441e-09,
            "happy": 98.82807922363281,
            "sad": 6.269361620070413e-05,
            "surprise": 0.0007597762160003185,
            "neutral": 1.1710845232009888
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 568,
            "y": 365,
            "w": 93,
            "h": 93,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.0010624043643474579,
            "Man": 99.99893951416016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.000538953288923949,
            "indian": 0.0026180993299931288,
            "black": 0.00011767540854634717,
            "white": 98.23189544677734,
            "middle eastern": 1.0961401462554932,
            "latino hispanic": 0.6686953902244568
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.006713548209518194,
            "disgust": 9.144310419537528e-21,
            "fear": 5.2843166287175336e-08,
            "happy": 40.32553482055664,
            "sad": 4.220240953145549e-05,
            "surprise": 1.721744746774334e-09,
            "neutral": 59.66770935058594
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 45,
        "region": {
            "x": 165,
            "y": 368,
            "w": 103,
            "h": 103,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 2.156691312789917,
            "Man": 97.84331512451172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 28.33034896850586,
            "indian": 0.00862550176680088,
            "black": 0.0006274566403590143,
            "white": 70.95889282226562,
            "middle eastern": 0.47326773405075073,
            "latino hispanic": 0.22823591530323029
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 97.81112670898438,
            "disgust": 2.59827821480485e-08,
            "fear": 0.0004104725085198879,
            "happy": 0.008016679435968399,
            "sad": 0.06380683928728104,
            "surprise": 0.0002611581876408309,
            "neutral": 2.1163742542266846
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 28,
        "region": {
            "x": 26,
            "y": 383,
            "w": 94,
            "h": 94,
            "left_eye": [
                86,
                418
            ],
            "right_eye": [
                53,
                420
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 86.11326599121094,
            "Man": 13.886727333068848
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.4942357540130615,
            "indian": 3.56032395362854,
            "black": 0.7889095544815063,
            "white": 41.506229400634766,
            "middle eastern": 21.330766677856445,
            "latino hispanic": 29.31953239440918
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 15.015984535217285,
            "disgust": 14.932308197021484,
            "fear": 31.261547088623047,
            "happy": 0.09824923425912857,
            "sad": 26.617013931274414,
            "surprise": 0.21470342576503754,
            "neutral": 11.860204696655273
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 26,
        "region": {
            "x": 1201,
            "y": 395,
            "w": 78,
            "h": 89,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.7637323141098022,
            "Man": 98.23626708984375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.444908142089844,
            "indian": 2.2935407161712646,
            "black": 0.662017285823822,
            "white": 59.59346389770508,
            "middle eastern": 13.246610641479492,
            "latino hispanic": 19.759464263916016
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00539790466427803,
            "disgust": 3.4742732779244334e-13,
            "fear": 6.037864181962505e-07,
            "happy": 32.69241714477539,
            "sad": 0.00017712403496261686,
            "surprise": 0.0002319798368262127,
            "neutral": 67.3017807006836
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 293,
            "y": 375,
            "w": 97,
            "h": 97,
            "left_eye": [
                354,
                412
            ],
            "right_eye": [
                321,
                413
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 14.29431438446045,
            "Man": 85.7056884765625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.784554958343506,
            "indian": 8.6925048828125,
            "black": 0.5283229351043701,
            "white": 38.22591781616211,
            "middle eastern": 27.371551513671875,
            "latino hispanic": 20.397153854370117
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.0331642627716064,
            "disgust": 0.0034680343233048916,
            "fear": 3.2095119953155518,
            "happy": 1.1181247234344482,
            "sad": 13.312715530395508,
            "surprise": 0.06380531936883926,
            "neutral": 80.25920867919922
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 1021,
            "y": 383,
            "w": 102,
            "h": 102,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.47162628173828,
            "Man": 0.5283801555633545
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.1199185848236084,
            "indian": 0.20338234305381775,
            "black": 0.010679351165890694,
            "white": 85.24217987060547,
            "middle eastern": 7.914381504058838,
            "latino hispanic": 6.509453773498535
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2985718250274658,
            "disgust": 0.0008833138854242861,
            "fear": 14.282516479492188,
            "happy": 4.761355400085449,
            "sad": 72.08707427978516,
            "surprise": 0.029270922765135765,
            "neutral": 7.540329456329346
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 23,
        "region": {
            "x": 841,
            "y": 391,
            "w": 93,
            "h": 93,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.2605884373188019,
            "Man": 99.73941040039062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 16.98627471923828,
            "indian": 13.023818969726562,
            "black": 1.562896728515625,
            "white": 26.054563522338867,
            "middle eastern": 15.071511268615723,
            "latino hispanic": 27.300933837890625
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 22.715036392211914,
            "disgust": 0.014784753322601318,
            "fear": 1.5364445447921753,
            "happy": 0.02349218539893627,
            "sad": 32.47243881225586,
            "surprise": 0.00672550592571497,
            "neutral": 43.231082916259766
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 200,
            "y": 503,
            "w": 91,
            "h": 91,
            "left_eye": [
                259,
                537
            ],
            "right_eye": [
                225,
                539
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99998474121094,
            "Man": 6.24628592049703e-06
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 10.974992752075195,
            "indian": 8.83958625793457,
            "black": 2.1623170375823975,
            "white": 31.80583381652832,
            "middle eastern": 19.07940101623535,
            "latino hispanic": 27.137868881225586
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.0312605556682684e-05,
            "disgust": 1.2772843893671393e-10,
            "fear": 0.00015153802814893425,
            "happy": 97.54358673095703,
            "sad": 0.004408115986734629,
            "surprise": 0.0901612862944603,
            "neutral": 2.3616716861724854
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 968,
            "y": 524,
            "w": 100,
            "h": 100,
            "left_eye": [
                1031,
                561
            ],
            "right_eye": [
                998,
                564
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.79475402832031,
            "Man": 0.20524421334266663
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.921087999789961e-07,
            "indian": 8.131776496611565e-08,
            "black": 7.196216955662749e-10,
            "white": 99.99649810791016,
            "middle eastern": 0.0013621320249512792,
            "latino hispanic": 0.0021442121360450983
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2783282995224,
            "disgust": 8.360206604003906,
            "fear": 23.226268768310547,
            "happy": 11.476112365722656,
            "sad": 13.475861549377441,
            "surprise": 0.40538010001182556,
            "neutral": 41.77784729003906
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 84,
            "y": 533,
            "w": 101,
            "h": 101,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 22.332801818847656,
            "Man": 77.66720581054688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 31.652467727661133,
            "indian": 2.7622110843658447,
            "black": 1.4223854541778564,
            "white": 41.657508850097656,
            "middle eastern": 7.835899829864502,
            "latino hispanic": 14.669529914855957
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 22.24314308166504,
            "disgust": 0.04906916990876198,
            "fear": 5.92171573638916,
            "happy": 0.3909282386302948,
            "sad": 25.750137329101562,
            "surprise": 0.8273196220397949,
            "neutral": 44.81768798828125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 375,
            "y": 496,
            "w": 96,
            "h": 96,
            "left_eye": [
                439,
                532
            ],
            "right_eye": [
                402,
                534
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.8660659790039,
            "Man": 0.1339268982410431
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.580894470214844,
            "indian": 3.05142879486084,
            "black": 1.3624705076217651,
            "white": 48.762428283691406,
            "middle eastern": 13.834437370300293,
            "latino hispanic": 27.40833854675293
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.36407145857810974,
            "disgust": 0.0002718054747674614,
            "fear": 0.32167792320251465,
            "happy": 86.52928924560547,
            "sad": 4.1108269691467285,
            "surprise": 0.7877108454704285,
            "neutral": 7.886151313781738
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 769,
            "y": 539,
            "w": 100,
            "h": 100,
            "left_eye": [
                834,
                576
            ],
            "right_eye": [
                799,
                577
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99984741210938,
            "Man": 0.0001528997381683439
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.3884962797164917,
            "indian": 2.103914499282837,
            "black": 0.3823418915271759,
            "white": 45.63462448120117,
            "middle eastern": 21.727909088134766,
            "latino hispanic": 28.762718200683594
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.7693832294062304e-07,
            "disgust": 1.035730745960195e-12,
            "fear": 3.8334278542606626e-06,
            "happy": 99.99695587158203,
            "sad": 9.700529517431278e-06,
            "surprise": 1.4119261322775856e-05,
            "neutral": 0.0030068110208958387
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 1113,
            "y": 540,
            "w": 97,
            "h": 97,
            "left_eye": [
                1181,
                580
            ],
            "right_eye": [
                1145,
                579
            ]
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 99.61207580566406,
            "Man": 0.3879263997077942
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.786194801330566,
            "indian": 8.314961433410645,
            "black": 0.8346957564353943,
            "white": 33.03235626220703,
            "middle eastern": 25.166179656982422,
            "latino hispanic": 24.8656063079834
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.08833351731300354,
            "disgust": 0.002000917447730899,
            "fear": 0.543074905872345,
            "happy": 60.72356414794922,
            "sad": 0.7230492830276489,
            "surprise": 0.6542683839797974,
            "neutral": 37.265708923339844
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 588,
            "y": 503,
            "w": 91,
            "h": 91,
            "left_eye": [
                648,
                537
            ],
            "right_eye": [
                614,
                538
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99991607666016,
            "Man": 8.051894110394642e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.791993618011475,
            "indian": 2.1545629501342773,
            "black": 0.45803314447402954,
            "white": 53.40792465209961,
            "middle eastern": 13.161211967468262,
            "latino hispanic": 26.026269912719727
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.9533475041389465,
            "disgust": 0.12415848672389984,
            "fear": 1.9387362003326416,
            "happy": 17.216508865356445,
            "sad": 17.068069458007812,
            "surprise": 2.436713457107544,
            "neutral": 60.26247024536133
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 5,
            "y": 641,
            "w": 108,
            "h": 108,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 54.646976470947266,
            "Man": 45.353023529052734
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.004697638098150492,
            "indian": 0.010280330665409565,
            "black": 0.00023450811568181962,
            "white": 94.66026306152344,
            "middle eastern": 2.6130902767181396,
            "latino hispanic": 2.711434841156006
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0014869817532598972,
            "disgust": 4.283303300627495e-23,
            "fear": 4.2229837049490015e-07,
            "happy": 5.535024683922529e-06,
            "sad": 0.00017819316417444497,
            "surprise": 3.2456316280404796e-12,
            "neutral": 99.99832916259766
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 1184,
            "y": 649,
            "w": 95,
            "h": 107,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.88358306884766,
            "Man": 0.116421177983284
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.005293182097375393,
            "indian": 0.00963707733899355,
            "black": 0.0002032796764979139,
            "white": 97.14978790283203,
            "middle eastern": 1.6200281381607056,
            "latino hispanic": 1.215047836303711
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 53.425086975097656,
            "disgust": 4.562392859952524e-06,
            "fear": 12.272433280944824,
            "happy": 0.3882002830505371,
            "sad": 3.534619092941284,
            "surprise": 0.0222285445779562,
            "neutral": 30.357425689697266
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 33,
        "region": {
            "x": 1037,
            "y": 682,
            "w": 88,
            "h": 88,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.82740783691406,
            "Man": 0.1725865602493286
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 29.463619232177734,
            "indian": 7.802029609680176,
            "black": 4.839463710784912,
            "white": 26.986207962036133,
            "middle eastern": 13.374959945678711,
            "latino hispanic": 17.53371810913086
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.935222625732422,
            "disgust": 0.16587169468402863,
            "fear": 27.111616134643555,
            "happy": 0.01054201740771532,
            "sad": 68.4109878540039,
            "surprise": 0.020071661099791527,
            "neutral": 0.34568995237350464
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 493,
            "y": 685,
            "w": 102,
            "h": 102,
            "left_eye": [
                560,
                722
            ],
            "right_eye": [
                527,
                724
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99836730957031,
            "Man": 0.0016384486807510257
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.416576385498047,
            "indian": 0.8395440578460693,
            "black": 0.11820019781589508,
            "white": 72.52073669433594,
            "middle eastern": 10.067474365234375,
            "latino hispanic": 14.037467956542969
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.882895588874817,
            "disgust": 0.004835253581404686,
            "fear": 0.7403206825256348,
            "happy": 3.7541394233703613,
            "sad": 70.4776382446289,
            "surprise": 0.038351476192474365,
            "neutral": 23.101816177368164
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 273,
            "y": 692,
            "w": 102,
            "h": 102,
            "left_eye": [
                342,
                731
            ],
            "right_eye": [
                306,
                732
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99823760986328,
            "Man": 0.0017606838373467326
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.04240052029490471,
            "indian": 0.02862679213285446,
            "black": 0.0008936038357205689,
            "white": 93.8125991821289,
            "middle eastern": 3.263793468475342,
            "latino hispanic": 2.851691722869873
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.8274642825126648,
            "disgust": 0.0008529304177500308,
            "fear": 0.830641508102417,
            "happy": 67.36180114746094,
            "sad": 1.8605930805206299,
            "surprise": 0.1556294709444046,
            "neutral": 28.96302032470703
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 681,
            "y": 724,
            "w": 100,
            "h": 100,
            "left_eye": [
                746,
                761
            ],
            "right_eye": [
                713,
                764
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.9841537475586,
            "Man": 0.01583772897720337
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 12.057479858398438,
            "indian": 14.874747276306152,
            "black": 7.249060153961182,
            "white": 14.387957572937012,
            "middle eastern": 12.729072570800781,
            "latino hispanic": 38.70167922973633
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0004990338929928839,
            "disgust": 9.760130524227861e-06,
            "fear": 0.003455640282481909,
            "happy": 94.42679595947266,
            "sad": 0.053234975785017014,
            "surprise": 0.05842259153723717,
            "neutral": 5.457589149475098
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 869,
            "y": 787,
            "w": 111,
            "h": 111,
            "left_eye": [
                937,
                831
            ],
            "right_eye": [
                904,
                831
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.37353515625,
            "Man": 0.6264619827270508
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.9200997352600098,
            "indian": 11.248604774475098,
            "black": 1.8139840364456177,
            "white": 17.247108459472656,
            "middle eastern": 11.518221855163574,
            "latino hispanic": 54.251983642578125
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 10.749732971191406,
            "disgust": 0.10658614337444305,
            "fear": 6.574267387390137,
            "happy": 1.1773356199264526,
            "sad": 22.497495651245117,
            "surprise": 0.8834827542304993,
            "neutral": 58.0110969543457
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 1044,
            "y": 792,
            "w": 108,
            "h": 108,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 2.3978166580200195,
            "Man": 97.60218048095703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 29.281064987182617,
            "indian": 19.408803939819336,
            "black": 35.62301254272461,
            "white": 1.4257522821426392,
            "middle eastern": 1.0269286632537842,
            "latino hispanic": 13.234439849853516
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.00028075618320144713,
            "disgust": 1.7997931270330447e-11,
            "fear": 0.00027593676350079477,
            "happy": 0.3287798762321472,
            "sad": 0.0009003769955597818,
            "surprise": 2.8965862384211505e-06,
            "neutral": 99.66975402832031
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 83,
            "y": 777,
            "w": 98,
            "h": 98,
            "left_eye": [
                150,
                815
            ],
            "right_eye": [
                112,
                816
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.72205352783203,
            "Man": 0.27795103192329407
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.6270736455917358,
            "indian": 0.5567143559455872,
            "black": 0.04294868931174278,
            "white": 77.63758087158203,
            "middle eastern": 9.073643684387207,
            "latino hispanic": 11.062047004699707
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.3578262329101562,
            "disgust": 0.0079279113560915,
            "fear": 0.5597449541091919,
            "happy": 20.27508544921875,
            "sad": 3.9066267013549805,
            "surprise": 1.1059447526931763,
            "neutral": 72.7868423461914
        },
        "dominant_emotion": "neutral"
    }
]
let nursing_assistant_data3 = [
    {
        "age": 22,
        "region": {
            "x": 590,
            "y": 67,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.5948832631111145,
            "Man": 99.40511322021484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.36813947558403015,
            "indian": 1.136855125427246,
            "black": 0.052197348326444626,
            "white": 65.00967407226562,
            "middle eastern": 21.9541015625,
            "latino hispanic": 11.479037284851074
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6854138374328613,
            "disgust": 1.0912811765351194e-09,
            "fear": 0.048607803881168365,
            "happy": 0.004257879685610533,
            "sad": 11.363327980041504,
            "surprise": 3.121277768514119e-05,
            "neutral": 86.89836120605469
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 412,
            "y": 79,
            "w": 85,
            "h": 85,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 2.8136441707611084,
            "Man": 97.18634796142578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.021674394607544,
            "indian": 4.371237277984619,
            "black": 0.45346808433532715,
            "white": 47.67073059082031,
            "middle eastern": 25.677288055419922,
            "latino hispanic": 18.80559730529785
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 26.61733627319336,
            "disgust": 6.342868591469042e-11,
            "fear": 0.0019477354362607002,
            "happy": 0.0022844921331852674,
            "sad": 7.193143367767334,
            "surprise": 2.574414459388663e-08,
            "neutral": 66.1852798461914
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 22,
        "region": {
            "x": 756,
            "y": 78,
            "w": 88,
            "h": 88,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.04570577293634415,
            "Man": 99.95429229736328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9317132830619812,
            "indian": 2.527824878692627,
            "black": 0.1363876909017563,
            "white": 51.16839599609375,
            "middle eastern": 29.7999267578125,
            "latino hispanic": 15.43575668334961
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 21.683008193969727,
            "disgust": 1.1799100585463407e-10,
            "fear": 0.035202883183956146,
            "happy": 0.03157871961593628,
            "sad": 12.709561347961426,
            "surprise": 8.059821539063705e-07,
            "neutral": 65.5406494140625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 1016,
            "y": 91,
            "w": 80,
            "h": 80,
            "left_eye": [
                1066,
                121
            ],
            "right_eye": [
                1042,
                120
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 29.794437408447266,
            "Man": 70.20556640625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 36.933250427246094,
            "indian": 12.126386642456055,
            "black": 4.693196773529053,
            "white": 13.661998748779297,
            "middle eastern": 9.635579109191895,
            "latino hispanic": 22.9495906829834
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.2682886123657227,
            "disgust": 2.8910177206853405e-05,
            "fear": 1.9612312316894531,
            "happy": 0.0641118735074997,
            "sad": 35.300201416015625,
            "surprise": 0.0059037646278738976,
            "neutral": 60.40023422241211
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 285,
            "y": 88,
            "w": 79,
            "h": 79,
            "left_eye": [
                338,
                117
            ],
            "right_eye": [
                311,
                116
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 96.22977447509766,
            "Man": 3.770232677459717
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 31.721160888671875,
            "indian": 12.276738166809082,
            "black": 11.584206581115723,
            "white": 12.962076187133789,
            "middle eastern": 9.863607406616211,
            "latino hispanic": 21.59221649169922
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.11102805286645889,
            "disgust": 1.4889194965362549,
            "fear": 1.915230393409729,
            "happy": 32.28303909301758,
            "sad": 0.016994697973132133,
            "surprise": 0.6196476221084595,
            "neutral": 63.56513977050781
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 130,
            "y": 105,
            "w": 76,
            "h": 76,
            "left_eye": [
                178,
                133
            ],
            "right_eye": [
                152,
                133
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.02867126464844,
            "Man": 0.9713263511657715
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.634821891784668,
            "indian": 3.9623327255249023,
            "black": 1.3099865913391113,
            "white": 43.000667572021484,
            "middle eastern": 21.35280418395996,
            "latino hispanic": 24.73938751220703
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.509379863739014,
            "disgust": 0.0044066207483410835,
            "fear": 2.162546396255493,
            "happy": 0.002339080208912492,
            "sad": 72.65914154052734,
            "surprise": 0.0001257904659723863,
            "neutral": 19.662067413330078
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 1123,
            "y": 112,
            "w": 79,
            "h": 79,
            "left_eye": [
                1175,
                141
            ],
            "right_eye": [
                1146,
                141
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 88.95578002929688,
            "Man": 11.044210433959961
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 93.76866912841797,
            "indian": 0.43016117811203003,
            "black": 0.0482238233089447,
            "white": 2.055877923965454,
            "middle eastern": 0.07163786143064499,
            "latino hispanic": 3.6254324913024902
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 11.308938980102539,
            "disgust": 0.0001565874117659405,
            "fear": 6.423671722412109,
            "happy": 0.04542442411184311,
            "sad": 53.412479400634766,
            "surprise": 0.008086977526545525,
            "neutral": 28.801244735717773
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 26,
        "region": {
            "x": 931,
            "y": 165,
            "w": 84,
            "h": 84,
            "left_eye": [
                988,
                196
            ],
            "right_eye": [
                958,
                195
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.94429016113281,
            "Man": 0.0557161420583725
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.5111087560653687,
            "indian": 0.7098890542984009,
            "black": 0.08898595720529556,
            "white": 69.49002838134766,
            "middle eastern": 14.623562812805176,
            "latino hispanic": 13.576430320739746
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 29.616914749145508,
            "disgust": 0.0006607515970245004,
            "fear": 5.837987422943115,
            "happy": 3.22699524986092e-05,
            "sad": 61.02477264404297,
            "surprise": 0.00019428893574513495,
            "neutral": 3.519432544708252
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 11,
            "y": 152,
            "w": 94,
            "h": 94,
            "left_eye": [
                69,
                186
            ],
            "right_eye": [
                40,
                188
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.89181518554688,
            "Man": 0.10818410664796829
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 15.280328750610352,
            "indian": 1.9913586378097534,
            "black": 0.6411779522895813,
            "white": 49.294342041015625,
            "middle eastern": 12.778067588806152,
            "latino hispanic": 20.014726638793945
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.21146687865257263,
            "disgust": 7.4983304330089595e-06,
            "fear": 2.3833305835723877,
            "happy": 6.443285201385152e-06,
            "sad": 96.28631591796875,
            "surprise": 1.3362897334445734e-05,
            "neutral": 1.1188676357269287
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 433,
            "y": 183,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 4.9362711906433105,
            "Man": 95.06372833251953
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.50274658203125,
            "indian": 7.0700907707214355,
            "black": 3.2501165866851807,
            "white": 38.01446533203125,
            "middle eastern": 24.290817260742188,
            "latino hispanic": 18.87176513671875
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 10.735984802246094,
            "disgust": 1.8979520797729492,
            "fear": 7.342294216156006,
            "happy": 0.02410701848566532,
            "sad": 75.0796890258789,
            "surprise": 0.005409385543316603,
            "neutral": 4.914561748504639
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 29,
        "region": {
            "x": 262,
            "y": 157,
            "w": 89,
            "h": 89,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 3.673943519592285,
            "Man": 96.32605743408203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 96.40103912353516,
            "indian": 0.00886704120784998,
            "black": 0.0003737862571142614,
            "white": 3.4240458011627197,
            "middle eastern": 0.03257317468523979,
            "latino hispanic": 0.13309483230113983
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 21.48366928100586,
            "disgust": 8.029512405395508,
            "fear": 21.538007736206055,
            "happy": 0.2176150381565094,
            "sad": 24.6719913482666,
            "surprise": 0.011552749201655388,
            "neutral": 24.047651290893555
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 24,
        "region": {
            "x": 620,
            "y": 195,
            "w": 81,
            "h": 81,
            "left_eye": [
                670,
                225
            ],
            "right_eye": [
                643,
                225
            ]
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 98.89722442626953,
            "Man": 1.1027764081954956
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.664129257202148,
            "indian": 9.029664993286133,
            "black": 1.7973439693450928,
            "white": 27.439096450805664,
            "middle eastern": 20.24430274963379,
            "latino hispanic": 32.825462341308594
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 45.903717041015625,
            "disgust": 0.06133624538779259,
            "fear": 2.639008045196533,
            "happy": 0.002331553027033806,
            "sad": 44.33781814575195,
            "surprise": 0.027009692043066025,
            "neutral": 7.028781890869141
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 32,
        "region": {
            "x": 0,
            "y": 277,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 6.080493927001953,
            "Man": 93.91950988769531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00017370277782902122,
            "indian": 3.038427166757174e-05,
            "black": 6.495312163679046e-07,
            "white": 99.87945556640625,
            "middle eastern": 0.07483578473329544,
            "latino hispanic": 0.04551013559103012
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 19.31852149963379,
            "disgust": 0.00016817508731037378,
            "fear": 0.6042340993881226,
            "happy": 0.011498091742396355,
            "sad": 12.745296478271484,
            "surprise": 0.0142715685069561,
            "neutral": 67.30601501464844
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 187,
            "y": 211,
            "w": 92,
            "h": 92,
            "left_eye": [
                249,
                246
            ],
            "right_eye": [
                214,
                244
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 97.74786376953125,
            "Man": 2.2521395683288574
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 39.12904739379883,
            "indian": 6.954981803894043,
            "black": 4.939988136291504,
            "white": 18.175973892211914,
            "middle eastern": 8.565710067749023,
            "latino hispanic": 22.23430633544922
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.622516632080078,
            "disgust": 0.0005053855129517615,
            "fear": 10.824614524841309,
            "happy": 0.009670790284872055,
            "sad": 35.03449249267578,
            "surprise": 0.004535998217761517,
            "neutral": 48.503665924072266
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 839,
            "y": 219,
            "w": 99,
            "h": 99,
            "left_eye": [
                901,
                257
            ],
            "right_eye": [
                869,
                258
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 39.92862319946289,
            "Man": 60.071372985839844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.0901351743086707e-05,
            "indian": 5.318177045410266e-06,
            "black": 8.896142844605492e-08,
            "white": 99.86064147949219,
            "middle eastern": 0.09992840886116028,
            "latino hispanic": 0.039421360939741135
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.356768608093262,
            "disgust": 0.00012267293641343713,
            "fear": 8.954519271850586,
            "happy": 0.008912509307265282,
            "sad": 58.66740798950195,
            "surprise": 0.0020540961995720863,
            "neutral": 28.010210037231445
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 26,
        "region": {
            "x": 1203,
            "y": 205,
            "w": 76,
            "h": 97,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.21492908895015717,
            "Man": 99.78507995605469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.2262043952941895,
            "indian": 3.442213296890259,
            "black": 0.7026951313018799,
            "white": 47.5349235534668,
            "middle eastern": 24.737077713012695,
            "latino hispanic": 18.35688591003418
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 35.26274871826172,
            "disgust": 0.06358863413333893,
            "fear": 2.8395698070526123,
            "happy": 0.06997422128915787,
            "sad": 27.326114654541016,
            "surprise": 0.046722300350666046,
            "neutral": 34.39128112792969
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 26,
        "region": {
            "x": 1067,
            "y": 206,
            "w": 96,
            "h": 96,
            "left_eye": [
                1130,
                241
            ],
            "right_eye": [
                1094,
                243
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 96.01158142089844,
            "Man": 3.9884111881256104
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.006850242614746,
            "indian": 0.3639959990978241,
            "black": 0.07280679792165756,
            "white": 75.0239028930664,
            "middle eastern": 5.509646892547607,
            "latino hispanic": 16.022794723510742
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.029358386993408,
            "disgust": 0.062421660870313644,
            "fear": 13.68587875366211,
            "happy": 0.28475093841552734,
            "sad": 14.074727058410645,
            "surprise": 2.659632444381714,
            "neutral": 64.2032241821289
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 497,
            "y": 191,
            "w": 103,
            "h": 103,
            "left_eye": [
                562,
                231
            ],
            "right_eye": [
                526,
                231
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.9883041381836,
            "Man": 0.011690618470311165
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 71.54467010498047,
            "indian": 0.5672850608825684,
            "black": 0.06178341060876846,
            "white": 22.86217498779297,
            "middle eastern": 1.1700818538665771,
            "latino hispanic": 3.7939910888671875
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 19.55924415588379,
            "disgust": 0.27115797996520996,
            "fear": 1.8643019199371338,
            "happy": 0.058768946677446365,
            "sad": 63.538055419921875,
            "surprise": 0.0045371148735284805,
            "neutral": 14.703933715820312
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 28,
        "region": {
            "x": 328,
            "y": 257,
            "w": 101,
            "h": 101,
            "left_eye": [
                393,
                296
            ],
            "right_eye": [
                357,
                295
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 27.386777877807617,
            "Man": 72.61322784423828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.80130767822266,
            "indian": 0.0417807400226593,
            "black": 1.8305943740415387e-05,
            "white": 0.02910512685775757,
            "middle eastern": 2.379385705353343e-06,
            "latino hispanic": 0.12779195606708527
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.577009201049805,
            "disgust": 0.9921640157699585,
            "fear": 22.7938232421875,
            "happy": 3.1393513679504395,
            "sad": 22.226276397705078,
            "surprise": 1.9498895406723022,
            "neutral": 44.32148742675781
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 703,
            "y": 251,
            "w": 122,
            "h": 122,
            "left_eye": [
                779,
                296
            ],
            "right_eye": [
                738,
                297
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.00018853115034289658,
            "Man": 99.99980926513672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 18.82732391357422,
            "indian": 9.25259780883789,
            "black": 2.7024319171905518,
            "white": 20.933326721191406,
            "middle eastern": 15.641397476196289,
            "latino hispanic": 32.64292526245117
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 9.693989753723145,
            "disgust": 8.034371778986582e-12,
            "fear": 0.02431844361126423,
            "happy": 0.00011030132009182125,
            "sad": 19.9259033203125,
            "surprise": 3.5692974051926285e-06,
            "neutral": 70.35567474365234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 952,
            "y": 261,
            "w": 110,
            "h": 110,
            "left_eye": [
                1024,
                302
            ],
            "right_eye": [
                987,
                304
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 89.07600402832031,
            "Man": 10.923998832702637
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 11.160181999206543,
            "indian": 2.264592409133911,
            "black": 0.5477716326713562,
            "white": 49.07318878173828,
            "middle eastern": 14.564949035644531,
            "latino hispanic": 22.389320373535156
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.1012457609176636,
            "disgust": 0.0009894820395857096,
            "fear": 1.0895780324935913,
            "happy": 0.040228091180324554,
            "sad": 16.731292724609375,
            "surprise": 0.0010161349782720208,
            "neutral": 81.03565216064453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 1121,
            "y": 304,
            "w": 121,
            "h": 121,
            "left_eye": [
                1203,
                351
            ],
            "right_eye": [
                1158,
                350
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99971008300781,
            "Man": 0.0002879577805288136
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.9817266464233398,
            "indian": 4.190872669219971,
            "black": 0.29141631722450256,
            "white": 38.16743850708008,
            "middle eastern": 23.885766983032227,
            "latino hispanic": 31.4827823638916
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.922084808349609,
            "disgust": 2.28578016958636e-07,
            "fear": 0.7461395859718323,
            "happy": 0.0012635745806619525,
            "sad": 15.219301223754883,
            "surprise": 0.012367719784379005,
            "neutral": 79.09884643554688
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 424,
            "y": 280,
            "w": 118,
            "h": 118,
            "left_eye": [
                502,
                325
            ],
            "right_eye": [
                460,
                326
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 98.90254974365234,
            "Man": 1.0974472761154175
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 25.182918548583984,
            "indian": 1.417366862297058,
            "black": 0.32331591844558716,
            "white": 48.75018310546875,
            "middle eastern": 10.280228614807129,
            "latino hispanic": 14.04598617553711
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.777792930603027,
            "disgust": 0.2330102026462555,
            "fear": 1.3001708984375,
            "happy": 0.008194907568395138,
            "sad": 52.728206634521484,
            "surprise": 0.0014884292613714933,
            "neutral": 39.95113754272461
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 108,
            "y": 287,
            "w": 114,
            "h": 114,
            "left_eye": [
                179,
                330
            ],
            "right_eye": [
                140,
                330
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.96861267089844,
            "Man": 0.03138955682516098
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7821124196052551,
            "indian": 0.7781499624252319,
            "black": 0.01668541319668293,
            "white": 73.62655639648438,
            "middle eastern": 10.35366153717041,
            "latino hispanic": 14.44283390045166
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 32.18038558959961,
            "disgust": 0.01743091270327568,
            "fear": 3.1562998294830322,
            "happy": 0.000982355559244752,
            "sad": 47.36946105957031,
            "surprise": 0.011386284604668617,
            "neutral": 17.26405143737793
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 982,
            "y": 426,
            "w": 129,
            "h": 129,
            "left_eye": [
                1066,
                478
            ],
            "right_eye": [
                1022,
                476
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99998474121094,
            "Man": 9.243939530279022e-06
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.22002533078193665,
            "indian": 1.4854919910430908,
            "black": 0.11232698708772659,
            "white": 43.77475357055664,
            "middle eastern": 29.111513137817383,
            "latino hispanic": 25.295886993408203
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.14158327877521515,
            "disgust": 1.2086351830475905e-07,
            "fear": 93.46190643310547,
            "happy": 0.07401738315820694,
            "sad": 3.546752452850342,
            "surprise": 0.02328999899327755,
            "neutral": 2.752453088760376
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 35,
        "region": {
            "x": 550,
            "y": 402,
            "w": 137,
            "h": 137,
            "left_eye": [
                639,
                456
            ],
            "right_eye": [
                606,
                465
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99978637695312,
            "Man": 0.00021597354498226196
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.2243032455444336,
            "indian": 3.27651047706604,
            "black": 0.35173287987709045,
            "white": 46.146095275878906,
            "middle eastern": 24.59697723388672,
            "latino hispanic": 23.40437889099121
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 18.194393157958984,
            "disgust": 0.032438818365335464,
            "fear": 29.73078727722168,
            "happy": 0.07810298353433609,
            "sad": 35.64231491088867,
            "surprise": 0.0004105110710952431,
            "neutral": 16.321561813354492
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 187,
            "y": 437,
            "w": 123,
            "h": 123,
            "left_eye": [
                266,
                483
            ],
            "right_eye": [
                218,
                486
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 9.983230590820312,
            "Man": 90.01676940917969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.99495697021484,
            "indian": 0.001974773593246937,
            "black": 6.907099336928013e-09,
            "white": 0.000562705215997994,
            "middle eastern": 6.2738174655407875e-09,
            "latino hispanic": 0.002508270088583231
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 27.76263999938965,
            "disgust": 1.616791844367981,
            "fear": 1.1962330341339111,
            "happy": 0.5545796155929565,
            "sad": 40.55677795410156,
            "surprise": 0.06840328127145767,
            "neutral": 28.244579315185547
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 30,
        "region": {
            "x": 0,
            "y": 501,
            "w": 123,
            "h": 123,
            "left_eye": [
                57,
                544
            ],
            "right_eye": [
                12,
                549
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 97.25199127197266,
            "Man": 2.748004198074341
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.376238838536665e-05,
            "indian": 2.0570045307977125e-05,
            "black": 3.972129434259841e-07,
            "white": 99.80184173583984,
            "middle eastern": 0.06498655676841736,
            "latino hispanic": 0.13307055830955505
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 30.059656143188477,
            "disgust": 0.00015208215336315334,
            "fear": 61.578392028808594,
            "happy": 0.00030706910183653235,
            "sad": 8.218954086303711,
            "surprise": 0.0766819640994072,
            "neutral": 0.06585505604743958
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 25,
        "region": {
            "x": 341,
            "y": 569,
            "w": 144,
            "h": 144,
            "left_eye": [
                384,
                624
            ],
            "right_eye": [
                401,
                631
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.359178066253662,
            "Man": 98.64082336425781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 23.67280387878418,
            "indian": 0.7908082604408264,
            "black": 1.7963143587112427,
            "white": 53.95928192138672,
            "middle eastern": 15.466241836547852,
            "latino hispanic": 4.314550399780273
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.026753539219498634,
            "disgust": 6.405414751498029e-06,
            "fear": 2.229604979220312e-05,
            "happy": 0.01521817222237587,
            "sad": 25.281801223754883,
            "surprise": 2.303129349456867e-06,
            "neutral": 74.67619323730469
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 808,
            "y": 585,
            "w": 145,
            "h": 145,
            "left_eye": [
                899,
                641
            ],
            "right_eye": [
                855,
                638
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.9999771118164,
            "Man": 2.1214544176473282e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.10196226835250854,
            "indian": 1.145974040031433,
            "black": 0.05212550237774849,
            "white": 48.92637252807617,
            "middle eastern": 30.348968505859375,
            "latino hispanic": 19.424592971801758
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 20.18099594116211,
            "disgust": 0.01277007907629013,
            "fear": 76.96648406982422,
            "happy": 0.10032497346401215,
            "sad": 2.4674737453460693,
            "surprise": 0.12223104387521744,
            "neutral": 0.14972075819969177
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 26,
        "region": {
            "x": 467,
            "y": 942,
            "w": 146,
            "h": 146,
            "left_eye": [
                565,
                995
            ],
            "right_eye": [
                509,
                998
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.72965240478516,
            "Man": 0.27035385370254517
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 23.150861740112305,
            "indian": 8.128898620605469,
            "black": 3.4229419231414795,
            "white": 21.101530075073242,
            "middle eastern": 11.687929153442383,
            "latino hispanic": 32.50783920288086
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 91.64805603027344,
            "disgust": 0.0009832573123276234,
            "fear": 1.2732750177383423,
            "happy": 0.0007668650941923261,
            "sad": 5.540374279022217,
            "surprise": 0.0011549077462404966,
            "neutral": 1.5353832244873047
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 35,
        "region": {
            "x": 873,
            "y": 952,
            "w": 152,
            "h": 152,
            "left_eye": [
                973,
                1007
            ],
            "right_eye": [
                919,
                1002
            ]
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 99.96346282958984,
            "Man": 0.036540307104587555
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.18933254480361938,
            "indian": 0.195554718375206,
            "black": 0.019992228597402573,
            "white": 80.38169860839844,
            "middle eastern": 10.597631454467773,
            "latino hispanic": 8.615793228149414
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 55.08515167236328,
            "disgust": 0.00011439395893830806,
            "fear": 25.094430923461914,
            "happy": 18.756103515625,
            "sad": 0.49009937047958374,
            "surprise": 0.3893567621707916,
            "neutral": 0.18474508821964264
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 33,
        "region": {
            "x": 0,
            "y": 899,
            "w": 151,
            "h": 151,
            "left_eye": [
                90,
                956
            ],
            "right_eye": [
                33,
                960
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9813003540039,
            "Man": 0.018703222274780273
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 23.75899314880371,
            "indian": 11.522911071777344,
            "black": 3.10772442817688,
            "white": 13.138418197631836,
            "middle eastern": 5.69201135635376,
            "latino hispanic": 42.77994155883789
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.9862159490585327,
            "disgust": 0.0012683605309575796,
            "fear": 1.681922435760498,
            "happy": 0.07281525433063507,
            "sad": 8.715864181518555,
            "surprise": 0.033600933849811554,
            "neutral": 88.50831604003906
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 1125,
            "y": 885,
            "w": 154,
            "h": 160,
            "left_eye": [
                1227,
                947
            ],
            "right_eye": [
                1173,
                943
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99110412597656,
            "Man": 0.008894715458154678
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 13.845588684082031,
            "indian": 5.6275248527526855,
            "black": 2.0427346229553223,
            "white": 30.635208129882812,
            "middle eastern": 17.478731155395508,
            "latino hispanic": 30.370216369628906
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 33.47259521484375,
            "disgust": 0.00029914791230112314,
            "fear": 1.6004724502563477,
            "happy": 0.9096277952194214,
            "sad": 11.378875732421875,
            "surprise": 0.03005180135369301,
            "neutral": 52.60807800292969
        },
        "dominant_emotion": "neutral"
    }
]

console.log("Meta Results for Nursing Assistant:");
const data = nursing_assistant_data.concat(nursing_assistant_data2, nursing_assistant_data3);
console.log(processData(data));