const { processData } = require('../../data_processing.js');

let manicurist_data = [
    {
        "age": 32,
        "region": {
            "x": 459,
            "y": 88,
            "w": 87,
            "h": 87,
            "left_eye": [
                518,
                121
            ],
            "right_eye": [
                485,
                121
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99998474121094,
            "Man": 9.773290003067814e-06
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.05658039450645447,
            "indian": 0.2852100133895874,
            "black": 0.008136492222547531,
            "white": 85.9937515258789,
            "middle eastern": 6.1031060218811035,
            "latino hispanic": 7.553218841552734
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.432268217006822e-10,
            "disgust": 3.041672549579735e-16,
            "fear": 1.4951871685209284e-10,
            "happy": 99.96162414550781,
            "sad": 4.327710101392768e-08,
            "surprise": 8.12977032182971e-06,
            "neutral": 0.03837079927325249
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 286,
            "y": 103,
            "w": 90,
            "h": 90,
            "left_eye": [
                345,
                138
            ],
            "right_eye": [
                313,
                138
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99987030029297,
            "Man": 0.00013617446529679
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.10782990604639053,
            "indian": 1.3668546676635742,
            "black": 0.03869716450572014,
            "white": 50.418827056884766,
            "middle eastern": 27.45386505126953,
            "latino hispanic": 20.613929748535156
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.591390635744208e-12,
            "disgust": 1.4939395758255777e-23,
            "fear": 1.0585505420075605e-14,
            "happy": 99.99972534179688,
            "sad": 9.660202325567635e-12,
            "surprise": 1.1287654899660993e-07,
            "neutral": 0.00027170582325197756
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 845,
            "y": 115,
            "w": 94,
            "h": 94,
            "left_eye": [
                907,
                149
            ],
            "right_eye": [
                873,
                156
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.72370910644531,
            "Man": 0.2762843668460846
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.005340941250324249,
            "indian": 0.28908467292785645,
            "black": 0.00028438452864065766,
            "white": 46.09130096435547,
            "middle eastern": 49.99339294433594,
            "latino hispanic": 3.620602607727051
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 5.195803169044666e-06,
            "disgust": 3.1830102789620618e-12,
            "fear": 1.2591573295139824e-07,
            "happy": 90.43811798095703,
            "sad": 0.00033727748086676,
            "surprise": 0.00010853481944650412,
            "neutral": 9.561437606811523
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 632,
            "y": 123,
            "w": 94,
            "h": 94,
            "left_eye": [
                694,
                156
            ],
            "right_eye": [
                660,
                160
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.007413552608340979,
            "Man": 99.99258422851562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.018573937937617302,
            "indian": 0.4636117219924927,
            "black": 0.0031938496977090836,
            "white": 74.73417663574219,
            "middle eastern": 17.132736206054688,
            "latino hispanic": 7.647716999053955
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00035293155815452337,
            "disgust": 3.237010608018488e-14,
            "fear": 1.0048682952401577e-06,
            "happy": 9.92510194919305e-06,
            "sad": 0.0012947589857503772,
            "surprise": 5.886156628776007e-08,
            "neutral": 99.99834442138672
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 83,
            "y": 131,
            "w": 93,
            "h": 93,
            "left_eye": [
                144,
                167
            ],
            "right_eye": [
                109,
                168
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0016944344388321042,
            "Man": 99.99830627441406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.000293153862003237,
            "indian": 0.0009092823602259159,
            "black": 5.761088232247857e-06,
            "white": 98.03359985351562,
            "middle eastern": 1.0177009105682373,
            "latino hispanic": 0.9474930167198181
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.07788681238889694,
            "disgust": 1.1658225496091745e-08,
            "fear": 0.011881116777658463,
            "happy": 4.968322173226625e-05,
            "sad": 3.516233444213867,
            "surprise": 5.553584969675285e-07,
            "neutral": 96.39395141601562
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 164,
            "y": 198,
            "w": 101,
            "h": 101,
            "left_eye": [
                234,
                239
            ],
            "right_eye": [
                193,
                235
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.9999771118164,
            "Man": 1.8769915186567232e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 78.30644226074219,
            "indian": 3.509281873703003,
            "black": 0.5949169397354126,
            "white": 4.387821674346924,
            "middle eastern": 1.3394927978515625,
            "latino hispanic": 11.862042427062988
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.6083540589391134e-12,
            "disgust": 1.8279667901413877e-18,
            "fear": 4.262501018814646e-09,
            "happy": 99.42982482910156,
            "sad": 2.931581093434943e-07,
            "surprise": 4.790595266968012e-05,
            "neutral": 0.5701245069503784
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 381,
            "y": 198,
            "w": 97,
            "h": 97,
            "left_eye": [
                444,
                237
            ],
            "right_eye": [
                411,
                233
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 99.9986801147461,
            "Man": 0.0013201567344367504
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0010203494457527995,
            "indian": 0.02464592456817627,
            "black": 0.00020201312145218253,
            "white": 92.68569946289062,
            "middle eastern": 4.499258995056152,
            "latino hispanic": 2.789179801940918
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.715029921000593e-11,
            "disgust": 1.0110407614915741e-19,
            "fear": 9.917235218800946e-13,
            "happy": 99.96574401855469,
            "sad": 3.0964122377241665e-09,
            "surprise": 4.023726887680823e-06,
            "neutral": 0.034238677471876144
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 752,
            "y": 196,
            "w": 98,
            "h": 98,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 99.98494720458984,
            "Man": 0.015055951662361622
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 98.67362213134766,
            "indian": 0.3062297999858856,
            "black": 0.0006685641128569841,
            "white": 0.02477441355586052,
            "middle eastern": 0.00018724387336988002,
            "latino hispanic": 0.9945273995399475
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.8871241211891174,
            "disgust": 0.009041979908943176,
            "fear": 6.736164093017578,
            "happy": 52.702388763427734,
            "sad": 37.847084045410156,
            "surprise": 0.4443974494934082,
            "neutral": 1.373789668083191
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 521,
            "y": 211,
            "w": 110,
            "h": 110,
            "left_eye": [
                595,
                252
            ],
            "right_eye": [
                553,
                253
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.9988784790039,
            "Man": 0.001114664482884109
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.6539636850357056,
            "indian": 4.3503336906433105,
            "black": 0.1880626082420349,
            "white": 42.977264404296875,
            "middle eastern": 24.8855037689209,
            "latino hispanic": 25.944869995117188
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.395996802486479e-05,
            "disgust": 1.4030095973893708e-09,
            "fear": 0.0006832313956692815,
            "happy": 97.31716918945312,
            "sad": 0.00023430529108736664,
            "surprise": 0.05202806740999222,
            "neutral": 2.62984037399292
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 0,
            "y": 220,
            "w": 105,
            "h": 105,
            "left_eye": [
                67,
                261
            ],
            "right_eye": [
                27,
                259
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 100.0,
            "Man": 4.646354682336096e-06
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.2880812391813379e-05,
            "indian": 8.296337182400748e-05,
            "black": 9.137774981127222e-08,
            "white": 99.23699951171875,
            "middle eastern": 0.3874436318874359,
            "latino hispanic": 0.3754664957523346
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.030058792509143e-13,
            "disgust": 1.9922794574035647e-24,
            "fear": 1.4289554875672006e-15,
            "happy": 99.99195861816406,
            "sad": 1.7977874744445899e-10,
            "surprise": 9.06738648609462e-07,
            "neutral": 0.008042475208640099
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 679,
            "y": 332,
            "w": 112,
            "h": 112,
            "left_eye": [
                747,
                371
            ],
            "right_eye": [
                706,
                382
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99756622314453,
            "Man": 0.0024283328093588352
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.89402770996094,
            "indian": 0.030764564871788025,
            "black": 4.452617304195883e-06,
            "white": 0.013441670686006546,
            "middle eastern": 6.74394777888665e-06,
            "latino hispanic": 0.06175852194428444
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0013514707097783685,
            "disgust": 6.324912504851454e-08,
            "fear": 0.0027585148345679045,
            "happy": 0.6247557997703552,
            "sad": 0.050858087837696075,
            "surprise": 0.001750019146129489,
            "neutral": 99.31852722167969
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 946,
            "y": 331,
            "w": 77,
            "h": 100,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 98.60574340820312,
            "Man": 1.3942632675170898
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.29462432861328,
            "indian": 0.0740986093878746,
            "black": 0.001291746855713427,
            "white": 0.015225064940750599,
            "middle eastern": 6.868431955808774e-05,
            "latino hispanic": 0.6146963834762573
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.831033540928729e-08,
            "disgust": 2.3951724291264038e-15,
            "fear": 1.1040031040465692e-06,
            "happy": 99.98486328125,
            "sad": 1.6101532310131006e-05,
            "surprise": 0.0034622843377292156,
            "neutral": 0.011657606810331345
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 204,
            "y": 389,
            "w": 112,
            "h": 112,
            "left_eye": [
                274,
                431
            ],
            "right_eye": [
                232,
                433
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99993896484375,
            "Man": 6.350873445626348e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.92903900146484,
            "indian": 0.04047565534710884,
            "black": 2.066822844426497e-06,
            "white": 0.0016990307485684752,
            "middle eastern": 1.8185005501436535e-06,
            "latino hispanic": 0.028788933530449867
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 9.024274383317987e-11,
            "disgust": 3.7758633307460565e-20,
            "fear": 1.0386811202800494e-11,
            "happy": 99.99964141845703,
            "sad": 1.274723104849329e-10,
            "surprise": 3.003890753916494e-07,
            "neutral": 0.000361746089765802
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 802,
            "y": 501,
            "w": 120,
            "h": 120,
            "left_eye": [
                879,
                542
            ],
            "right_eye": [
                837,
                548
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99876403808594,
            "Man": 0.0012348779710009694
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 98.7812728881836,
            "indian": 0.1962885707616806,
            "black": 0.002607320435345173,
            "white": 0.12044486403465271,
            "middle eastern": 0.0022343616001307964,
            "latino hispanic": 0.8971545696258545
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.002287804614752531,
            "disgust": 3.313749274980182e-08,
            "fear": 0.023315319791436195,
            "happy": 65.84904479980469,
            "sad": 0.0060526710003614426,
            "surprise": 0.23573364317417145,
            "neutral": 33.88356399536133
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 467,
            "y": 477,
            "w": 119,
            "h": 119,
            "left_eye": [
                550,
                526
            ],
            "right_eye": [
                506,
                521
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99976348876953,
            "Man": 0.00023739917378406972
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.11136955087423e-14,
            "indian": 2.0678811996077684e-09,
            "black": 100.0,
            "white": 1.2161648805455032e-19,
            "middle eastern": 1.682940153711049e-20,
            "latino hispanic": 7.843945219916659e-13
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 2.825710221365796e-10,
            "disgust": 2.545711821243956e-18,
            "fear": 5.2582244114418586e-12,
            "happy": 99.62713623046875,
            "sad": 7.164517512592283e-08,
            "surprise": 5.573676753556356e-05,
            "neutral": 0.37281036376953125
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 6,
            "y": 482,
            "w": 139,
            "h": 139,
            "left_eye": [
                98,
                540
            ],
            "right_eye": [
                52,
                527
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 100.0,
            "Man": 2.564287342465832e-06
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.1497689023087787e-08,
            "indian": 3.625417299701894e-09,
            "black": 2.141922056386747e-12,
            "white": 99.99919891357422,
            "middle eastern": 0.00031974143348634243,
            "latino hispanic": 0.00047281317529268563
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.559494292763702e-07,
            "disgust": 1.6074035548777066e-12,
            "fear": 4.050861832638475e-07,
            "happy": 99.39385223388672,
            "sad": 5.987552867736667e-06,
            "surprise": 7.061460200930014e-05,
            "neutral": 0.606071949005127
        },
        "dominant_emotion": "happy"
    }
]
let manicurist_data2 = [
    {
        "age": 29,
        "region": {
            "x": 714,
            "y": 73,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 2.410581588745117,
            "Man": 97.58942413330078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.054331302642822,
            "indian": 7.929394245147705,
            "black": 2.5294291973114014,
            "white": 31.14716339111328,
            "middle eastern": 25.882715225219727,
            "latino hispanic": 25.45697021484375
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00019039621111005545,
            "disgust": 6.982804334754178e-10,
            "fear": 5.083486485091271e-06,
            "happy": 85.35721588134766,
            "sad": 0.0006539270398207009,
            "surprise": 0.03686102107167244,
            "neutral": 14.605071067810059
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 367,
            "y": 53,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.7042219638824463,
            "Man": 99.29578399658203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.004125106614083052,
            "indian": 0.013393198139965534,
            "black": 0.00020972224592696875,
            "white": 92.93695831298828,
            "middle eastern": 4.389287948608398,
            "latino hispanic": 2.656033515930176
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.023959556594491005,
            "disgust": 1.248260673492041e-06,
            "fear": 0.011324279010295868,
            "happy": 91.56925964355469,
            "sad": 0.02228257618844509,
            "surprise": 0.09031830728054047,
            "neutral": 8.282851219177246
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 535,
            "y": 83,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.1509450674057007,
            "Man": 98.84906005859375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 35.22919845581055,
            "indian": 9.560924530029297,
            "black": 5.778774738311768,
            "white": 17.315631866455078,
            "middle eastern": 13.896852493286133,
            "latino hispanic": 18.218626022338867
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.32435446977615356,
            "disgust": 8.516032539773732e-05,
            "fear": 2.566626787185669,
            "happy": 46.074039459228516,
            "sad": 4.70598840713501,
            "surprise": 0.032888203859329224,
            "neutral": 46.296016693115234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 235,
            "y": 93,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.32489392161369324,
            "Man": 99.67510986328125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.007253999821841717,
            "indian": 0.04112575948238373,
            "black": 0.0008023555274121463,
            "white": 92.64232635498047,
            "middle eastern": 6.152409076690674,
            "latino hispanic": 1.1560841798782349
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.011707850731909275,
            "disgust": 9.385333328282286e-07,
            "fear": 0.012623470276594162,
            "happy": 96.46481323242188,
            "sad": 0.0015947498613968492,
            "surprise": 0.04309887811541557,
            "neutral": 3.466160535812378
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 940,
            "y": 166,
            "w": 71,
            "h": 71,
            "left_eye": [
                987,
                194
            ],
            "right_eye": [
                960,
                194
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.738602876663208,
            "Man": 99.26139068603516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.2617769241333,
            "indian": 17.141433715820312,
            "black": 2.7116739749908447,
            "white": 14.829476356506348,
            "middle eastern": 16.58209991455078,
            "latino hispanic": 40.473541259765625
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.14252689480781555,
            "disgust": 2.5970086880988674e-06,
            "fear": 7.04695463180542,
            "happy": 45.948307037353516,
            "sad": 1.8792176246643066,
            "surprise": 0.5757055878639221,
            "neutral": 44.40729522705078
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 422,
            "y": 112,
            "w": 78,
            "h": 78,
            "left_eye": [
                477,
                144
            ],
            "right_eye": [
                447,
                141
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.02010173909366131,
            "Man": 99.97989654541016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 58.31697082519531,
            "indian": 11.3535737991333,
            "black": 3.172424554824829,
            "white": 8.159198760986328,
            "middle eastern": 2.5722174644470215,
            "latino hispanic": 16.42562484741211
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0017154932720586658,
            "disgust": 1.621999103917915e-06,
            "fear": 0.010553262196481228,
            "happy": 47.523345947265625,
            "sad": 0.03548520430922508,
            "surprise": 0.04557356983423233,
            "neutral": 52.38332748413086
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 341,
            "y": 185,
            "w": 76,
            "h": 76,
            "left_eye": [
                392,
                211
            ],
            "right_eye": [
                364,
                219
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.97858428955078,
            "Man": 0.021411728113889694
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99993133544922,
            "indian": 8.712657290743664e-06,
            "black": 3.3982600067261615e-10,
            "white": 8.289540005534946e-07,
            "middle eastern": 5.1143183438240314e-11,
            "latino hispanic": 6.62551901768893e-05
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0009002173319458961,
            "disgust": 1.7065696738427505e-05,
            "fear": 0.012592324055731297,
            "happy": 70.83438873291016,
            "sad": 0.01788373291492462,
            "surprise": 0.005924216937273741,
            "neutral": 29.1282958984375
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 535,
            "y": 224,
            "w": 68,
            "h": 68,
            "left_eye": [
                581,
                247
            ],
            "right_eye": [
                554,
                248
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99848937988281,
            "Man": 0.0015188376419246197
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.696017861366272,
            "indian": 1.0778847932815552,
            "black": 0.14059825241565704,
            "white": 57.60017013549805,
            "middle eastern": 22.454219818115234,
            "latino hispanic": 18.03111457824707
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.245019032898199e-07,
            "disgust": 6.025631026990641e-15,
            "fear": 3.965822543250397e-05,
            "happy": 98.41011047363281,
            "sad": 5.793512514173926e-07,
            "surprise": 1.0876402854919434,
            "neutral": 0.5022058486938477
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 624,
            "y": 140,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99674224853516,
            "Man": 0.0032502473331987858
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 72.21984100341797,
            "indian": 2.15378737449646,
            "black": 0.34500038623809814,
            "white": 10.960467338562012,
            "middle eastern": 2.470757484436035,
            "latino hispanic": 11.8501558303833
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.00013373166439123452,
            "disgust": 9.050996396808841e-09,
            "fear": 1.1015913514711428e-05,
            "happy": 99.1324691772461,
            "sad": 0.00015636275929864496,
            "surprise": 0.017047574743628502,
            "neutral": 0.85019451379776
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 809,
            "y": 149,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 10.32900619506836,
            "Man": 89.67098236083984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.95346069335938,
            "indian": 0.00015492892998736352,
            "black": 3.22545361086668e-06,
            "white": 0.04054472595453262,
            "middle eastern": 6.916524580447003e-05,
            "latino hispanic": 0.005761072970926762
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 45.00861740112305,
            "disgust": 0.0035411587450653315,
            "fear": 2.080110549926758,
            "happy": 0.05948634818196297,
            "sad": 9.738574028015137,
            "surprise": 0.038087476044893265,
            "neutral": 43.07158660888672
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 30,
        "region": {
            "x": 184,
            "y": 214,
            "w": 77,
            "h": 77,
            "left_eye": [
                239,
                246
            ],
            "right_eye": [
                209,
                241
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99748229980469,
            "Man": 0.0025139683857560158
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99908447265625,
            "indian": 0.0004316415870562196,
            "black": 7.562980103292816e-11,
            "white": 5.8475143305258825e-05,
            "middle eastern": 4.799829977919501e-10,
            "latino hispanic": 0.0004345870402175933
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0022723819129168987,
            "disgust": 6.548834790010005e-06,
            "fear": 0.0003702404210343957,
            "happy": 23.01848602294922,
            "sad": 1.1619796752929688,
            "surprise": 0.0025255803484469652,
            "neutral": 75.81436157226562
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 745,
            "y": 281,
            "w": 81,
            "h": 81,
            "left_eye": [
                798,
                310
            ],
            "right_eye": [
                767,
                315
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.3762602806091309,
            "Man": 98.62374114990234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.97440338134766,
            "indian": 0.005390653386712074,
            "black": 5.219918648435851e-07,
            "white": 0.0009778238600119948,
            "middle eastern": 4.1848107201758467e-08,
            "latino hispanic": 0.01923435926437378
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.06373750418424606,
            "disgust": 1.519330794508278e-06,
            "fear": 0.16334494948387146,
            "happy": 0.06586933135986328,
            "sad": 1.26880943775177,
            "surprise": 0.0276363343000412,
            "neutral": 98.41059875488281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 619,
            "y": 288,
            "w": 82,
            "h": 82,
            "left_eye": [
                673,
                319
            ],
            "right_eye": [
                643,
                322
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.50457763671875,
            "Man": 0.49542492628097534
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.75584411621094,
            "indian": 0.18650072813034058,
            "black": 2.6397496185381897e-05,
            "white": 0.02733590453863144,
            "middle eastern": 8.865218114806339e-05,
            "latino hispanic": 0.030202588066458702
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0011666719801723957,
            "disgust": 7.4094721469464275e-09,
            "fear": 0.006144478917121887,
            "happy": 0.015629470348358154,
            "sad": 0.5484057068824768,
            "surprise": 0.0004497350309975445,
            "neutral": 99.4281997680664
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 922,
            "y": 292,
            "w": 81,
            "h": 81,
            "left_eye": [
                977,
                320
            ],
            "right_eye": [
                944,
                325
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.9996566772461,
            "Man": 0.0003448466304689646
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 98.43864440917969,
            "indian": 0.9238106608390808,
            "black": 0.0076502240262925625,
            "white": 0.06109796091914177,
            "middle eastern": 0.004255307838320732,
            "latino hispanic": 0.5645281076431274
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.279658074006875e-07,
            "disgust": 8.006797807234844e-14,
            "fear": 8.858050364324299e-07,
            "happy": 93.97352600097656,
            "sad": 6.9647257987526245e-06,
            "surprise": 0.07414492219686508,
            "neutral": 5.9523234367370605
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 853,
            "y": 220,
            "w": 78,
            "h": 78,
            "left_eye": [
                905,
                247
            ],
            "right_eye": [
                875,
                252
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 80.43602752685547,
            "Man": 19.563976287841797
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 97.60477447509766,
            "indian": 0.30089226365089417,
            "black": 0.00474262610077858,
            "white": 0.33778950572013855,
            "middle eastern": 0.007992256432771683,
            "latino hispanic": 1.7438048124313354
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.059133198112249374,
            "disgust": 6.420540103135863e-06,
            "fear": 0.5127356648445129,
            "happy": 90.2145004272461,
            "sad": 0.06006738916039467,
            "surprise": 1.5824337005615234,
            "neutral": 7.5711236000061035
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 40,
        "region": {
            "x": 120,
            "y": 132,
            "w": 80,
            "h": 80,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 99.9989242553711,
            "Man": 0.0010759029537439346
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99993896484375,
            "indian": 3.2116581678565126e-06,
            "black": 2.6573028222287576e-09,
            "white": 1.9273971702205017e-05,
            "middle eastern": 2.3940028626157073e-08,
            "latino hispanic": 3.32411982526537e-05
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.002943942090496421,
            "disgust": 2.512445291813492e-07,
            "fear": 0.029934966936707497,
            "happy": 98.85364532470703,
            "sad": 0.016272226348519325,
            "surprise": 0.009033816866576672,
            "neutral": 1.088174819946289
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 50,
            "y": 192,
            "w": 77,
            "h": 77,
            "left_eye": [
                100,
                217
            ],
            "right_eye": [
                92,
                250
            ]
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 63.66619873046875,
            "Man": 36.33378982543945
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 57.25380325317383,
            "indian": 2.720106363296509,
            "black": 0.31139856576919556,
            "white": 23.79310417175293,
            "middle eastern": 4.041136741638184,
            "latino hispanic": 11.880455017089844
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 33.59241485595703,
            "disgust": 0.010309436358511448,
            "fear": 43.82927703857422,
            "happy": 16.981307983398438,
            "sad": 5.162910461425781,
            "surprise": 0.2334454506635666,
            "neutral": 0.19033202528953552
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 31,
        "region": {
            "x": 48,
            "y": 339,
            "w": 73,
            "h": 73,
            "left_eye": [
                97,
                366
            ],
            "right_eye": [
                69,
                364
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.65227508544922,
            "Man": 0.34772855043411255
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99141693115234,
            "indian": 0.005542658269405365,
            "black": 5.804434977108031e-07,
            "white": 0.0005475224461406469,
            "middle eastern": 1.3848068647348555e-07,
            "latino hispanic": 0.0024960616137832403
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.735969585250132e-05,
            "disgust": 2.5937547248888748e-11,
            "fear": 0.0023352941498160362,
            "happy": 99.48896026611328,
            "sad": 0.00018852461653295904,
            "surprise": 0.06903544813394547,
            "neutral": 0.43944358825683594
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 271,
            "y": 290,
            "w": 84,
            "h": 84,
            "left_eye": [
                328,
                323
            ],
            "right_eye": [
                297,
                324
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 93.96715545654297,
            "Man": 6.032839775085449
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99211883544922,
            "indian": 0.0028522273059934378,
            "black": 1.6704301231129648e-07,
            "white": 0.00028687328449450433,
            "middle eastern": 2.5005663317756444e-08,
            "latino hispanic": 0.004736409988254309
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.802859696908854e-05,
            "disgust": 1.354815992726799e-07,
            "fear": 2.361717861276702e-06,
            "happy": 82.82572937011719,
            "sad": 9.676447371020913e-05,
            "surprise": 0.002675680909305811,
            "neutral": 17.17148208618164
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 436,
            "y": 282,
            "w": 79,
            "h": 79,
            "left_eye": [
                487,
                310
            ],
            "right_eye": [
                459,
                315
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.98854064941406,
            "Man": 0.01144905760884285
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.96823120117188,
            "indian": 0.004398612305521965,
            "black": 5.821473223477369e-06,
            "white": 0.0014303100761026144,
            "middle eastern": 1.2077526889697765e-06,
            "latino hispanic": 0.02593284845352173
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.713860946026216e-08,
            "disgust": 4.475805576859004e-12,
            "fear": 2.129604403933172e-08,
            "happy": 91.02655792236328,
            "sad": 4.249972789693857e-06,
            "surprise": 0.00038245762698352337,
            "neutral": 8.97305965423584
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 361,
            "y": 369,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.7569351196289,
            "Man": 0.24305889010429382
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99998474121094,
            "indian": 8.29324619644467e-07,
            "black": 2.161487655527594e-11,
            "white": 7.52602431930427e-07,
            "middle eastern": 4.5434103528030345e-12,
            "latino hispanic": 1.0273565749230329e-05
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.479755316173396e-08,
            "disgust": 4.429490187997636e-15,
            "fear": 8.385783623054976e-09,
            "happy": 99.92568969726562,
            "sad": 9.211761664573714e-08,
            "surprise": 1.1656940159809892e-06,
            "neutral": 0.07431679964065552
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 920,
            "y": 437,
            "w": 90,
            "h": 90,
            "left_eye": [
                982,
                472
            ],
            "right_eye": [
                947,
                469
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 98.774658203125,
            "Man": 1.2253412008285522
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 9.666046935308259e-06,
            "indian": 8.929408068070188e-06,
            "black": 7.969497772819523e-08,
            "white": 99.74400329589844,
            "middle eastern": 0.10566860437393188,
            "latino hispanic": 0.15031957626342773
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.004122070036828518,
            "disgust": 1.347672082374629e-06,
            "fear": 0.031141364946961403,
            "happy": 69.482666015625,
            "sad": 0.04783913120627403,
            "surprise": 1.979685664176941,
            "neutral": 28.45454978942871
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 748,
            "y": 446,
            "w": 85,
            "h": 85,
            "left_eye": [
                804,
                478
            ],
            "right_eye": [
                772,
                476
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 84.2274398803711,
            "Man": 15.772567749023438
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.6612658984959126e-05,
            "indian": 9.355495421914384e-05,
            "black": 5.555717734750942e-07,
            "white": 99.33634948730469,
            "middle eastern": 0.4542894661426544,
            "latino hispanic": 0.2092391699552536
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0004352105606812984,
            "disgust": 3.014420713043364e-07,
            "fear": 0.0001924370153574273,
            "happy": 96.56974029541016,
            "sad": 0.00236304709687829,
            "surprise": 0.021721910685300827,
            "neutral": 3.40556001663208
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 571,
            "y": 453,
            "w": 87,
            "h": 87,
            "left_eye": [
                629,
                486
            ],
            "right_eye": [
                595,
                492
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 98.31397247314453,
            "Man": 1.6860336065292358
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.028650881897192e-06,
            "indian": 6.77776406519115e-05,
            "black": 99.99993133544922,
            "white": 1.7982847433373195e-09,
            "middle eastern": 3.6344563469903335e-10,
            "latino hispanic": 2.61805553236627e-06
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 4.283520411263453e-06,
            "disgust": 2.1502577496335107e-09,
            "fear": 1.1914162314496934e-06,
            "happy": 95.31395721435547,
            "sad": 0.00028008074150420725,
            "surprise": 0.0019067077664658427,
            "neutral": 4.683847427368164
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 103,
            "y": 474,
            "w": 94,
            "h": 94,
            "left_eye": [
                167,
                515
            ],
            "right_eye": [
                135,
                505
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99989318847656,
            "Man": 0.00010728951747296378
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99246215820312,
            "indian": 0.0034727072343230247,
            "black": 1.1395664500923885e-07,
            "white": 0.0006458575371652842,
            "middle eastern": 4.080903082126497e-08,
            "latino hispanic": 0.003416302613914013
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.4691118597984314,
            "disgust": 0.001096682739444077,
            "fear": 2.471022844314575,
            "happy": 38.99388122558594,
            "sad": 0.7757657170295715,
            "surprise": 0.34383660554885864,
            "neutral": 56.945289611816406
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 437,
            "y": 491,
            "w": 91,
            "h": 91,
            "left_eye": [
                498,
                524
            ],
            "right_eye": [
                467,
                529
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 72.97359466552734,
            "Man": 27.026405334472656
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 100.0,
            "indian": 9.27233934078231e-09,
            "black": 2.654609991722246e-16,
            "white": 6.050344669716878e-10,
            "middle eastern": 9.020390021511986e-17,
            "latino hispanic": 7.353504116736076e-08
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.5157440304756165,
            "disgust": 0.0021620173938572407,
            "fear": 2.1310906410217285,
            "happy": 36.26516342163086,
            "sad": 0.5200340151786804,
            "surprise": 0.10139329731464386,
            "neutral": 60.46441650390625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 286,
            "y": 513,
            "w": 91,
            "h": 91,
            "left_eye": [
                350,
                554
            ],
            "right_eye": [
                318,
                544
            ]
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 99.97830963134766,
            "Man": 0.02169031836092472
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99977111816406,
            "indian": 2.8967377147637308e-05,
            "black": 1.7641493821329846e-09,
            "white": 1.55370344145922e-05,
            "middle eastern": 2.9815369617658405e-10,
            "latino hispanic": 0.0001774639677023515
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.13358697295188904,
            "disgust": 3.1228497391566634e-05,
            "fear": 5.925648212432861,
            "happy": 1.3866691589355469,
            "sad": 0.7155357599258423,
            "surprise": 3.2902863025665283,
            "neutral": 88.5482406616211
        },
        "dominant_emotion": "neutral"
    }
]
let manicurist_data3 = [
    {
        "age": 30,
        "region": {
            "x": 518,
            "y": 133,
            "w": 94,
            "h": 94,
            "left_eye": [
                584,
                171
            ],
            "right_eye": [
                542,
                169
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99794006347656,
            "Man": 0.0020680304151028395
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 12.69286060333252,
            "indian": 14.745969772338867,
            "black": 44.88666915893555,
            "white": 3.834244966506958,
            "middle eastern": 2.857294797897339,
            "latino hispanic": 20.98296356201172
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 7.061477596236043e-13,
            "disgust": 6.808285807497862e-20,
            "fear": 2.4062333068286534e-06,
            "happy": 99.99996185302734,
            "sad": 5.681716785943536e-08,
            "surprise": 8.069809496191738e-07,
            "neutral": 3.99757809645962e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 701,
            "y": 130,
            "w": 106,
            "h": 106,
            "left_eye": [
                771,
                167
            ],
            "right_eye": [
                732,
                174
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99979400634766,
            "Man": 0.0002059138787444681
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7565941214561462,
            "indian": 1.1825945377349854,
            "black": 0.09445992857217789,
            "white": 61.02914047241211,
            "middle eastern": 19.577871322631836,
            "latino hispanic": 17.35933494567871
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.1698893348798265e-08,
            "disgust": 5.198929936729713e-13,
            "fear": 6.953953857191664e-09,
            "happy": 99.99772644042969,
            "sad": 9.989709724322893e-06,
            "surprise": 1.9304791294416646e-06,
            "neutral": 0.002266560448333621
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 267,
            "y": 125,
            "w": 95,
            "h": 95,
            "left_eye": [
                335,
                163
            ],
            "right_eye": [
                294,
                159
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99990844726562,
            "Man": 9.439408313483e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.1841156780719757,
            "indian": 1.491439938545227,
            "black": 0.08035682886838913,
            "white": 58.70814895629883,
            "middle eastern": 23.450942993164062,
            "latino hispanic": 16.085002899169922
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.8416459520196925e-14,
            "disgust": 1.6750094384191619e-22,
            "fear": 2.0097173979247845e-13,
            "happy": 99.65270233154297,
            "sad": 8.208019264266397e-10,
            "surprise": 1.2660732863878366e-05,
            "neutral": 0.3472912311553955
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 906,
            "y": 138,
            "w": 112,
            "h": 112,
            "left_eye": [
                984,
                185
            ],
            "right_eye": [
                943,
                177
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.9897232055664,
            "Man": 0.010269305668771267
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.8120338916778564,
            "indian": 9.441054344177246,
            "black": 0.32159173488616943,
            "white": 26.63847541809082,
            "middle eastern": 48.94479751586914,
            "latino hispanic": 12.84204387664795
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 7.122721399355214e-07,
            "disgust": 7.884270764469542e-14,
            "fear": 1.4039261486686883e-06,
            "happy": 99.92959594726562,
            "sad": 7.589665642626642e-07,
            "surprise": 7.29209859855473e-05,
            "neutral": 0.07033315300941467
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 60,
            "y": 101,
            "w": 113,
            "h": 113,
            "left_eye": [
                132,
                144
            ],
            "right_eye": [
                90,
                146
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.005459135863929987,
            "Man": 99.99453735351562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.07737493515014648,
            "indian": 4.968177795410156,
            "black": 0.040991123765707016,
            "white": 14.000469207763672,
            "middle eastern": 65.30166625976562,
            "latino hispanic": 15.611312866210938
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 6.200532993716479e-07,
            "disgust": 2.8363897602162735e-12,
            "fear": 5.73458346480038e-05,
            "happy": 99.59850311279297,
            "sad": 0.00020721553300973028,
            "surprise": 0.0018714912002906203,
            "neutral": 0.39935123920440674
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 197,
            "y": 269,
            "w": 110,
            "h": 110,
            "left_eye": [
                273,
                312
            ],
            "right_eye": [
                228,
                311
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99955749511719,
            "Man": 0.0004459749616216868
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 13.63182258605957,
            "indian": 6.49196195602417,
            "black": 1.2716593742370605,
            "white": 23.60285758972168,
            "middle eastern": 8.05868911743164,
            "latino hispanic": 46.9430046081543
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.0960903296108881e-08,
            "disgust": 8.435661261044832e-15,
            "fear": 2.570696437942388e-07,
            "happy": 90.09364318847656,
            "sad": 2.566308012319496e-06,
            "surprise": 0.012285260483622551,
            "neutral": 9.894071578979492
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 594,
            "y": 261,
            "w": 119,
            "h": 119,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99979400634766,
            "Man": 0.00020327631500549614
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7253349423408508,
            "indian": 2.082428455352783,
            "black": 0.21306155622005463,
            "white": 52.02956771850586,
            "middle eastern": 18.389263153076172,
            "latino hispanic": 26.560348510742188
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2770965396313727e-09,
            "disgust": 4.677593536551819e-17,
            "fear": 1.0832288538376034e-10,
            "happy": 99.89364624023438,
            "sad": 5.658039299305528e-07,
            "surprise": 1.1671360880427528e-05,
            "neutral": 0.10634544491767883
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 47,
            "y": 246,
            "w": 107,
            "h": 107,
            "left_eye": [
                125,
                294
            ],
            "right_eye": [
                80,
                282
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99996185302734,
            "Man": 3.4173146559624e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7522013783454895,
            "indian": 2.45804500579834,
            "black": 0.29818764328956604,
            "white": 47.56215286254883,
            "middle eastern": 15.483490943908691,
            "latino hispanic": 33.4459228515625
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.742946036159992e-05,
            "disgust": 3.330641318299854e-09,
            "fear": 0.0011782597284764051,
            "happy": 95.92207336425781,
            "sad": 0.002377124037593603,
            "surprise": 0.06601280719041824,
            "neutral": 4.008277893066406
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 381,
            "y": 247,
            "w": 120,
            "h": 120,
            "left_eye": [
                458,
                292
            ],
            "right_eye": [
                417,
                296
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99995422363281,
            "Man": 4.544361217995174e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.05902190878987312,
            "indian": 0.1035577803850174,
            "black": 0.006144291255623102,
            "white": 79.28217315673828,
            "middle eastern": 9.313159942626953,
            "latino hispanic": 11.235949516296387
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.3894164868920598e-08,
            "disgust": 7.457785500264436e-10,
            "fear": 3.257755224694847e-06,
            "happy": 99.56100463867188,
            "sad": 1.3425194993033074e-05,
            "surprise": 6.024878894095309e-05,
            "neutral": 0.43891704082489014
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 815,
            "y": 233,
            "w": 126,
            "h": 126,
            "left_eye": [
                900,
                289
            ],
            "right_eye": [
                855,
                276
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 100.0,
            "Man": 9.383026053910726e-07
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.05451210215687752,
            "indian": 0.23009558022022247,
            "black": 0.019330576062202454,
            "white": 70.07009887695312,
            "middle eastern": 10.819380760192871,
            "latino hispanic": 18.806581497192383
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0002636852441355586,
            "disgust": 1.6250538692474947e-06,
            "fear": 0.0019827119540423155,
            "happy": 99.58969116210938,
            "sad": 0.2053631991147995,
            "surprise": 0.00011988648475380614,
            "neutral": 0.20257672667503357
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 220,
            "y": 463,
            "w": 124,
            "h": 124,
            "left_eye": [
                303,
                508
            ],
            "right_eye": [
                259,
                517
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.9999771118164,
            "Man": 1.9105340470559895e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.002097227144986391,
            "indian": 0.006878746207803488,
            "black": 0.00013037827739026397,
            "white": 94.37383270263672,
            "middle eastern": 3.029728651046753,
            "latino hispanic": 2.5873286724090576
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.3016361892223358,
            "disgust": 0.0010407132795080543,
            "fear": 2.5999743938446045,
            "happy": 0.26281315088272095,
            "sad": 7.791750431060791,
            "surprise": 0.007056456059217453,
            "neutral": 89.03573608398438
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 593,
            "y": 492,
            "w": 128,
            "h": 128,
            "left_eye": [
                675,
                544
            ],
            "right_eye": [
                627,
                538
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9627456665039,
            "Man": 0.037251800298690796
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.03445146232843399,
            "indian": 0.5122252106666565,
            "black": 0.005310522858053446,
            "white": 65.37919616699219,
            "middle eastern": 22.24694061279297,
            "latino hispanic": 11.821880340576172
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0155890295993334e-17,
            "disgust": 1.0002736055938014e-27,
            "fear": 1.9027751952830936e-19,
            "happy": 99.99488067626953,
            "sad": 3.416540596441753e-13,
            "surprise": 6.031777508019864e-12,
            "neutral": 0.005120938178151846
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 772,
            "y": 479,
            "w": 139,
            "h": 139,
            "left_eye": [
                859,
                534
            ],
            "right_eye": [
                808,
                530
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 100.0,
            "Man": 3.85889592280364e-07
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.9570354652387323e-06,
            "indian": 4.659902333514765e-05,
            "black": 1.248006231691079e-08,
            "white": 99.00463104248047,
            "middle eastern": 0.9251976013183594,
            "latino hispanic": 0.07013007253408432
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.691542017098982e-06,
            "disgust": 3.817395111127553e-08,
            "fear": 0.0002342202642466873,
            "happy": 99.10722351074219,
            "sad": 0.0006374390795826912,
            "surprise": 0.0008264264324679971,
            "neutral": 0.8910706043243408
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 66,
            "y": 495,
            "w": 139,
            "h": 139,
            "left_eye": [
                161,
                548
            ],
            "right_eye": [
                106,
                549
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.99990844726562,
            "Man": 9.002930164569989e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0878807008266449,
            "indian": 0.14585167169570923,
            "black": 0.002776503562927246,
            "white": 77.30928802490234,
            "middle eastern": 13.05534839630127,
            "latino hispanic": 9.398853302001953
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.9696799800992398e-13,
            "disgust": 9.998504254814416e-22,
            "fear": 7.708262739040961e-13,
            "happy": 99.85889434814453,
            "sad": 4.179702806084151e-09,
            "surprise": 0.00028191632009111345,
            "neutral": 0.1408303827047348
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 954,
            "y": 469,
            "w": 69,
            "h": 138,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 3.1449708938598633,
            "Man": 96.85502624511719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.021907705813646317,
            "indian": 0.1726135015487671,
            "black": 0.0010072336299344897,
            "white": 85.61845397949219,
            "middle eastern": 11.850407600402832,
            "latino hispanic": 2.335608720779419
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.24108783900737762,
            "disgust": 1.3669733789356542e-06,
            "fear": 1.7675480421530665e-06,
            "happy": 0.18969981372356415,
            "sad": 1.887927770614624,
            "surprise": 6.820825433351274e-07,
            "neutral": 97.68128204345703
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 396,
            "y": 504,
            "w": 137,
            "h": 137,
            "left_eye": [
                491,
                563
            ],
            "right_eye": [
                442,
                549
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 100.0,
            "Man": 1.3020675737607235e-07
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.644650395377539e-06,
            "indian": 7.518527581851231e-06,
            "black": 2.3211235600228974e-08,
            "white": 99.73011016845703,
            "middle eastern": 0.21152977645397186,
            "latino hispanic": 0.05833307281136513
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.657539583891729e-17,
            "disgust": 3.0452831327122947e-35,
            "fear": 1.3553268710563262e-20,
            "happy": 99.99996185302734,
            "sad": 1.916358706556957e-16,
            "surprise": 1.8192707784692175e-06,
            "neutral": 3.473500692052767e-05
        },
        "dominant_emotion": "happy"
    }
]
let manicurist_data4 = [
    {
        "age": 26,
        "region": {
            "x": 120,
            "y": 40,
            "w": 115,
            "h": 115,
            "left_eye": [
                197,
                87
            ],
            "right_eye": [
                156,
                82
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 6.555015716003254e-05,
            "Man": 99.99993896484375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.10552529990673065,
            "indian": 9.33349895477295,
            "black": 0.13879869878292084,
            "white": 21.601530075073242,
            "middle eastern": 53.20543670654297,
            "latino hispanic": 15.615209579467773
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 4.2245410725172405e-08,
            "disgust": 2.068589135433615e-14,
            "fear": 4.896732264114689e-08,
            "happy": 99.86920166015625,
            "sad": 4.2289411794627085e-05,
            "surprise": 4.040632848045789e-05,
            "neutral": 0.1307157278060913
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 486,
            "y": 62,
            "w": 120,
            "h": 120,
            "left_eye": [
                564,
                107
            ],
            "right_eye": [
                522,
                108
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.194309800863266,
            "Man": 99.80567932128906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0013112021842971444,
            "indian": 0.014881514944136143,
            "black": 0.00011876712960656732,
            "white": 92.31133270263672,
            "middle eastern": 5.9749298095703125,
            "latino hispanic": 1.6974231004714966
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.314876322401688e-05,
            "disgust": 3.1948431455930404e-08,
            "fear": 0.0001351804385194555,
            "happy": 99.89764404296875,
            "sad": 0.001264858292415738,
            "surprise": 0.008338309824466705,
            "neutral": 0.09253446757793427
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 729,
            "y": 77,
            "w": 117,
            "h": 117,
            "left_eye": [
                806,
                124
            ],
            "right_eye": [
                765,
                120
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.08882956951856613,
            "Man": 99.91117095947266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.0351638793945312,
            "indian": 11.252071380615234,
            "black": 0.5338857173919678,
            "white": 24.639019012451172,
            "middle eastern": 38.501739501953125,
            "latino hispanic": 24.038122177124023
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 76.66765594482422,
            "disgust": 0.16136719286441803,
            "fear": 9.527231216430664,
            "happy": 0.006863587535917759,
            "sad": 13.136866569519043,
            "surprise": 0.32797303795814514,
            "neutral": 0.17204038798809052
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 31,
        "region": {
            "x": 319,
            "y": 94,
            "w": 116,
            "h": 116,
            "left_eye": [
                395,
                140
            ],
            "right_eye": [
                353,
                136
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0015627727843821049,
            "Man": 99.9984359741211
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00022301170974969864,
            "indian": 0.017681986093521118,
            "black": 2.2813366740592755e-05,
            "white": 87.32698822021484,
            "middle eastern": 11.54585075378418,
            "latino hispanic": 1.1092342138290405
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.679416790371761e-05,
            "disgust": 7.81437492491932e-09,
            "fear": 0.00019800513109657913,
            "happy": 98.73372650146484,
            "sad": 0.008501286618411541,
            "surprise": 0.07460025697946548,
            "neutral": 1.182915210723877
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 860,
            "y": 108,
            "w": 140,
            "h": 140,
            "left_eye": [
                951,
                161
            ],
            "right_eye": [
                902,
                165
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0002970588393509388,
            "Man": 99.99970245361328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.468357429563639e-08,
            "indian": 2.5424137675145175e-06,
            "black": 2.0453780336104899e-10,
            "white": 99.92632293701172,
            "middle eastern": 0.05251031368970871,
            "latino hispanic": 0.021170202642679214
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00144398701377213,
            "disgust": 8.803432427484381e-10,
            "fear": 1.6737176338210702e-05,
            "happy": 97.39401245117188,
            "sad": 0.0012452909722924232,
            "surprise": 0.000613831973168999,
            "neutral": 2.602666139602661
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 601,
            "y": 150,
            "w": 146,
            "h": 146,
            "left_eye": [
                697,
                207
            ],
            "right_eye": [
                644,
                207
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0015781642869114876,
            "Man": 99.99842834472656
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.420724391937256,
            "indian": 15.075593948364258,
            "black": 31.371807098388672,
            "white": 8.785114288330078,
            "middle eastern": 12.642724990844727,
            "latino hispanic": 27.704036712646484
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0013643098063766956,
            "disgust": 1.0120796423152e-09,
            "fear": 4.479696258385957e-07,
            "happy": 99.69095611572266,
            "sad": 0.002855899278074503,
            "surprise": 0.00210629403591156,
            "neutral": 0.30272191762924194
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 122,
            "y": 166,
            "w": 130,
            "h": 130,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.9868392944336,
            "Man": 0.013160580769181252
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0952553004026413,
            "indian": 0.24064679443836212,
            "black": 0.009731391444802284,
            "white": 83.5667724609375,
            "middle eastern": 10.451366424560547,
            "latino hispanic": 5.636224269866943
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.633335630252702e-11,
            "disgust": 1.0493132162603448e-16,
            "fear": 2.2225014255188025e-13,
            "happy": 99.99730682373047,
            "sad": 1.2509968883023248e-07,
            "surprise": 2.242730827439754e-11,
            "neutral": 0.002693501301109791
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 358,
            "y": 260,
            "w": 133,
            "h": 133,
            "left_eye": [
                448,
                311
            ],
            "right_eye": [
                394,
                309
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.99991607666016,
            "Man": 8.3762155554723e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.4614988565444946,
            "indian": 1.595136284828186,
            "black": 0.0984213575720787,
            "white": 63.09100341796875,
            "middle eastern": 16.16831398010254,
            "latino hispanic": 17.58562660217285
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.360635554561231e-12,
            "disgust": 5.480312280646758e-21,
            "fear": 1.449043826823402e-15,
            "happy": 99.99676513671875,
            "sad": 2.0632717756541297e-09,
            "surprise": 1.1004777888956596e-07,
            "neutral": 0.003237329423427582
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 861,
            "y": 281,
            "w": 136,
            "h": 136,
            "left_eye": [
                948,
                331
            ],
            "right_eye": [
                895,
                339
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99979400634766,
            "Man": 0.0002047759189736098
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.3272652626037598,
            "indian": 11.621906280517578,
            "black": 0.3611544370651245,
            "white": 20.32932472229004,
            "middle eastern": 30.604711532592773,
            "latino hispanic": 35.75564193725586
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.0908363492490025e-06,
            "disgust": 2.992168318671773e-11,
            "fear": 1.330253383002855e-07,
            "happy": 99.8515625,
            "sad": 1.9990295186289586e-05,
            "surprise": 0.0011558887781575322,
            "neutral": 0.14726652204990387
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 0,
            "y": 285,
            "w": 152,
            "h": 152,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99908447265625,
            "Man": 0.0009168220567516983
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.004045380745083094,
            "indian": 0.015454894863069057,
            "black": 0.00032011987059377134,
            "white": 95.12744903564453,
            "middle eastern": 3.2008440494537354,
            "latino hispanic": 1.6518898010253906
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00021605932852253318,
            "disgust": 2.43657982679224e-08,
            "fear": 0.11948363482952118,
            "happy": 10.580520629882812,
            "sad": 76.12970733642578,
            "surprise": 3.0640452397534546e-09,
            "neutral": 13.170069694519043
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 188,
            "y": 298,
            "w": 172,
            "h": 172,
            "left_eye": [
                305,
                365
            ],
            "right_eye": [
                239,
                362
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.92745208740234,
            "Man": 0.07254823297262192
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.471587769534381e-07,
            "indian": 9.43620761972852e-06,
            "black": 99.99998474121094,
            "white": 1.59066287919174e-10,
            "middle eastern": 3.409804730236665e-11,
            "latino hispanic": 1.0703840871428838e-06
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 2.6624897486726695e-07,
            "disgust": 2.557427739632162e-13,
            "fear": 8.818647643238364e-07,
            "happy": 99.90229034423828,
            "sad": 1.721126295706199e-06,
            "surprise": 0.014445070177316666,
            "neutral": 0.08326730877161026
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 525,
            "y": 386,
            "w": 157,
            "h": 157,
            "left_eye": [
                632,
                445
            ],
            "right_eye": [
                570,
                446
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 100.0,
            "Man": 2.888520498345315e-07
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.023075835779309273,
            "indian": 0.4798714816570282,
            "black": 0.004190345760434866,
            "white": 64.82774353027344,
            "middle eastern": 25.008808135986328,
            "latino hispanic": 9.656315803527832
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6032132066357008e-08,
            "disgust": 1.356866048673604e-16,
            "fear": 1.1980881176043567e-08,
            "happy": 99.99919128417969,
            "sad": 1.1421172985137673e-07,
            "surprise": 0.0006223095115274191,
            "neutral": 0.00018999270105268806
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 774,
            "y": 442,
            "w": 149,
            "h": 149,
            "left_eye": [
                878,
                501
            ],
            "right_eye": [
                819,
                495
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9999771118164,
            "Man": 2.431920984236058e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.62274932861328,
            "indian": 0.1559305042028427,
            "black": 0.0026696796994656324,
            "white": 0.03967856243252754,
            "middle eastern": 0.003931745886802673,
            "latino hispanic": 0.17503070831298828
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 7.194622497763703e-08,
            "disgust": 5.156403725405689e-17,
            "fear": 2.0953394574974027e-09,
            "happy": 99.9994125366211,
            "sad": 6.191314128045633e-08,
            "surprise": 6.630086204495456e-07,
            "neutral": 0.0005930503248237073
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 614,
            "y": 541,
            "w": 179,
            "h": 179,
            "left_eye": [
                735,
                613
            ],
            "right_eye": [
                662,
                605
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9999771118164,
            "Man": 2.5892995836329646e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 45.4779052734375,
            "indian": 21.43221092224121,
            "black": 0.6286364793777466,
            "white": 1.7415846586227417,
            "middle eastern": 0.6712998151779175,
            "latino hispanic": 30.04836654663086
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 9.277910066884942e-06,
            "disgust": 1.995176940328136e-10,
            "fear": 7.853971624172118e-07,
            "happy": 99.98400115966797,
            "sad": 0.00012547704682219774,
            "surprise": 3.293378904345445e-05,
            "neutral": 0.015832753852009773
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 259,
            "y": 551,
            "w": 170,
            "h": 170,
            "left_eye": [
                375,
                617
            ],
            "right_eye": [
                304,
                614
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 100.0,
            "Man": 4.039996383653488e-06
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.6694705486297607,
            "indian": 14.345565795898438,
            "black": 1.4650561809539795,
            "white": 13.629417419433594,
            "middle eastern": 9.864249229431152,
            "latino hispanic": 57.0262451171875
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.8896875438132593e-13,
            "disgust": 2.5498165499373857e-21,
            "fear": 4.591231298682434e-14,
            "happy": 99.96851348876953,
            "sad": 5.277223658062269e-10,
            "surprise": 1.3549982895710855e-06,
            "neutral": 0.031483810395002365
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 0,
            "y": 548,
            "w": 140,
            "h": 140,
            "left_eye": [
                66,
                610
            ],
            "right_eye": [
                20,
                598
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99535369873047,
            "Man": 0.004653964191675186
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.06162857636809349,
            "indian": 0.45588627457618713,
            "black": 0.014652818441390991,
            "white": 71.59564208984375,
            "middle eastern": 19.28390884399414,
            "latino hispanic": 8.58828067779541
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.715847969055176,
            "disgust": 7.77156947151525e-06,
            "fear": 0.26608556509017944,
            "happy": 0.0006137390737421811,
            "sad": 29.781063079833984,
            "surprise": 1.556333813823585e-06,
            "neutral": 61.23637390136719
        },
        "dominant_emotion": "neutral"
    }
]
let manicurist_data5 = [
    {
        "age": 31,
        "region": {
            "x": 862,
            "y": 57,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.49526977539062,
            "Man": 0.5047373175621033
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.21022935211658478,
            "indian": 2.1421613693237305,
            "black": 0.06708850711584091,
            "white": 49.93856430053711,
            "middle eastern": 35.34098434448242,
            "latino hispanic": 12.300976753234863
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 81.77157592773438,
            "disgust": 0.0004639775143004954,
            "fear": 0.27005472779273987,
            "happy": 10.666386604309082,
            "sad": 1.7300593852996826,
            "surprise": 1.0431458950042725,
            "neutral": 4.518308162689209
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 33,
        "region": {
            "x": 87,
            "y": 65,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.92425537109375,
            "Man": 0.0757521390914917
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.33506470918655396,
            "indian": 6.719520568847656,
            "black": 0.3413302004337311,
            "white": 27.968963623046875,
            "middle eastern": 49.01084518432617,
            "latino hispanic": 15.624271392822266
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 8.93073844909668,
            "disgust": 0.3068237900733948,
            "fear": 14.353629112243652,
            "happy": 50.95695495605469,
            "sad": 8.386019706726074,
            "surprise": 3.2885217666625977,
            "neutral": 13.777298927307129
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 947,
            "y": 67,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.98832702636719,
            "Man": 0.011663583107292652
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7491423487663269,
            "indian": 3.5391013622283936,
            "black": 0.2717437446117401,
            "white": 47.84286880493164,
            "middle eastern": 31.11757469177246,
            "latino hispanic": 16.479572296142578
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.23051732778549194,
            "disgust": 4.623134736903012e-05,
            "fear": 0.0026506634894758463,
            "happy": 87.9769287109375,
            "sad": 11.760832786560059,
            "surprise": 0.0005536368698813021,
            "neutral": 0.028471944853663445
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 733,
            "y": 76,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.72671508789062,
            "Man": 0.273285835981369
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.10634749382734299,
            "indian": 0.583334743976593,
            "black": 0.01591646485030651,
            "white": 71.75735473632812,
            "middle eastern": 18.053253173828125,
            "latino hispanic": 9.483793258666992
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.33313676714897156,
            "disgust": 2.551281963469876e-10,
            "fear": 0.003156396560370922,
            "happy": 95.88777160644531,
            "sad": 0.001780554885044694,
            "surprise": 2.352938413619995,
            "neutral": 1.4212079048156738
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 473,
            "y": 85,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.9557876586914,
            "Man": 0.044203657656908035
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.0007635354995728,
            "indian": 19.800987243652344,
            "black": 0.9792450666427612,
            "white": 11.400677680969238,
            "middle eastern": 52.10453414916992,
            "latino hispanic": 14.71379566192627
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.006994560360908508,
            "disgust": 4.215717219757664e-10,
            "fear": 6.929724622750655e-05,
            "happy": 98.01947021484375,
            "sad": 9.758993110153824e-05,
            "surprise": 1.8884373903274536,
            "neutral": 0.08493833988904953
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 883,
            "y": 174,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99919128417969,
            "Man": 0.0008084502187557518
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.24989910423755646,
            "indian": 0.8603699207305908,
            "black": 0.03606335446238518,
            "white": 72.5531997680664,
            "middle eastern": 17.5888671875,
            "latino hispanic": 8.711594581604004
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0003914505650755018,
            "disgust": 1.3848620861178773e-10,
            "fear": 0.0003871387743856758,
            "happy": 99.71195983886719,
            "sad": 0.00030572584364563227,
            "surprise": 0.015811221674084663,
            "neutral": 0.27114343643188477
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 215,
            "y": 62,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99414825439453,
            "Man": 0.005853446666151285
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.0528628826141357,
            "indian": 52.50836944580078,
            "black": 3.049801826477051,
            "white": 8.318098068237305,
            "middle eastern": 18.194538116455078,
            "latino hispanic": 14.876337051391602
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 2.6364632503828034e-05,
            "disgust": 1.0045541821475249e-15,
            "fear": 3.299454875982377e-10,
            "happy": 96.15709686279297,
            "sad": 9.416105058335233e-06,
            "surprise": 1.4711400581290945e-05,
            "neutral": 3.8428573608398438
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 333,
            "y": 72,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99991607666016,
            "Man": 8.710068505024537e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.300266742706299,
            "indian": 10.318763732910156,
            "black": 0.9010435938835144,
            "white": 24.31719207763672,
            "middle eastern": 39.443458557128906,
            "latino hispanic": 22.71927833557129
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.002922581508755684,
            "disgust": 4.531390818129921e-10,
            "fear": 0.0023863313253968954,
            "happy": 0.019815851002931595,
            "sad": 0.36991679668426514,
            "surprise": 3.4779204725055024e-05,
            "neutral": 99.60491943359375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 29,
            "y": 174,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99903106689453,
            "Man": 0.0009672905434854329
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.005224785301834345,
            "indian": 0.10686907917261124,
            "black": 0.0019584144465625286,
            "white": 86.9496841430664,
            "middle eastern": 10.07346248626709,
            "latino hispanic": 2.8628029823303223
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.01654188148677349,
            "disgust": 7.046189239190426e-06,
            "fear": 0.006982544437050819,
            "happy": 86.36611938476562,
            "sad": 0.35466596484184265,
            "surprise": 0.024349216371774673,
            "neutral": 13.231331825256348
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 292,
            "y": 194,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99989318847656,
            "Man": 0.00011270652612438425
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7107459306716919,
            "indian": 42.768653869628906,
            "black": 2.076566219329834,
            "white": 12.799233436584473,
            "middle eastern": 18.57634162902832,
            "latino hispanic": 23.068458557128906
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 0.0018170183757320046,
            "disgust": 2.06727725216016e-11,
            "fear": 1.5077793250384275e-05,
            "happy": 78.4109115600586,
            "sad": 7.893526344560087e-05,
            "surprise": 0.5635606646537781,
            "neutral": 21.023618698120117
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 531,
            "y": 198,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99996185302734,
            "Man": 3.04133900499437e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.000469207763672,
            "indian": 12.155206680297852,
            "black": 2.0794153213500977,
            "white": 28.612146377563477,
            "middle eastern": 28.944360733032227,
            "latino hispanic": 24.208402633666992
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.012028281576931477,
            "disgust": 6.169079824758228e-06,
            "fear": 0.12028378993272781,
            "happy": 52.150081634521484,
            "sad": 0.7788504362106323,
            "surprise": 0.0019970920402556658,
            "neutral": 46.93675231933594
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 643,
            "y": 197,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99573516845703,
            "Man": 0.004268009681254625
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.858360230922699,
            "indian": 12.758645057678223,
            "black": 1.5718247890472412,
            "white": 28.474807739257812,
            "middle eastern": 36.23524856567383,
            "latino hispanic": 20.101116180419922
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.04984597489237785,
            "disgust": 1.24046914606879e-06,
            "fear": 0.0005432686302810907,
            "happy": 99.59336853027344,
            "sad": 0.03049696609377861,
            "surprise": 0.01635350100696087,
            "neutral": 0.3093820810317993
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 43,
        "region": {
            "x": 750,
            "y": 240,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.93050384521484,
            "Man": 0.06950238347053528
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.06277549266815186,
            "indian": 0.3946244418621063,
            "black": 0.006085778586566448,
            "white": 72.56143951416016,
            "middle eastern": 19.180761337280273,
            "latino hispanic": 7.794315814971924
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.3937702178955078,
            "disgust": 2.129026142938528e-06,
            "fear": 0.15873730182647705,
            "happy": 93.4323959350586,
            "sad": 0.65300452709198,
            "surprise": 0.019282838329672813,
            "neutral": 5.342809677124023
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 405,
            "y": 204,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.9984130859375,
            "Man": 0.001586507773026824
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.13969549536705017,
            "indian": 0.7549753189086914,
            "black": 0.0420895516872406,
            "white": 70.35638427734375,
            "middle eastern": 17.281171798706055,
            "latino hispanic": 11.425687789916992
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.046007074415683746,
            "disgust": 2.640148579757806e-07,
            "fear": 0.3052535951137543,
            "happy": 3.1464734077453613,
            "sad": 0.9823737740516663,
            "surprise": 0.008066006936132908,
            "neutral": 95.51183319091797
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 623,
            "y": 85,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.9762954711914,
            "Man": 0.023708581924438477
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 82.07136535644531,
            "indian": 1.2624609470367432,
            "black": 0.18572890758514404,
            "white": 10.759430885314941,
            "middle eastern": 2.538909912109375,
            "latino hispanic": 3.1821095943450928
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.10823099315166473,
            "disgust": 2.2939019572731922e-07,
            "fear": 0.003814835101366043,
            "happy": 92.62835693359375,
            "sad": 0.42793571949005127,
            "surprise": 0.7473466992378235,
            "neutral": 6.084313869476318
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 147,
            "y": 208,
            "w": 68,
            "h": 68,
            "left_eye": [
                194,
                232
            ],
            "right_eye": [
                164,
                234
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.8241195678711,
            "Man": 0.17588531970977783
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.6325061321258545,
            "indian": 8.905214309692383,
            "black": 0.35436302423477173,
            "white": 7.988507270812988,
            "middle eastern": 76.24884796142578,
            "latino hispanic": 3.870558738708496
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.3679484254680574e-05,
            "disgust": 2.8744498448141087e-10,
            "fear": 8.449844608549029e-05,
            "happy": 92.582763671875,
            "sad": 0.00028650768217630684,
            "surprise": 0.0011398526839911938,
            "neutral": 7.415713787078857
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 911,
            "y": 266,
            "w": 72,
            "h": 72,
            "left_eye": [
                962,
                296
            ],
            "right_eye": [
                933,
                292
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.9994888305664,
            "Man": 0.0005167064955458045
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.01091560535132885,
            "indian": 0.3808414936065674,
            "black": 0.0028457629960030317,
            "white": 64.61087036132812,
            "middle eastern": 29.696056365966797,
            "latino hispanic": 5.298466682434082
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.11272362619638443,
            "disgust": 2.435253918520175e-05,
            "fear": 1.3804630041122437,
            "happy": 85.01470184326172,
            "sad": 0.023405443876981735,
            "surprise": 9.482392311096191,
            "neutral": 3.986293077468872
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 486,
            "y": 294,
            "w": 83,
            "h": 83,
            "left_eye": [
                545,
                328
            ],
            "right_eye": [
                512,
                325
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99993896484375,
            "Man": 5.406606578617357e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00940814707428217,
            "indian": 0.013035910204052925,
            "black": 7.376113353529945e-05,
            "white": 94.9569091796875,
            "middle eastern": 4.383355617523193,
            "latino hispanic": 0.6372120976448059
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.7804061558379658e-09,
            "disgust": 3.2304461420510646e-18,
            "fear": 6.932872764764397e-08,
            "happy": 99.97293090820312,
            "sad": 1.775801550252254e-08,
            "surprise": 0.020839445292949677,
            "neutral": 0.006235785782337189
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 324,
            "y": 308,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99987030029297,
            "Man": 0.0001287701161345467
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.3725396990776062,
            "indian": 1.0392662286758423,
            "black": 0.0894726812839508,
            "white": 71.02536010742188,
            "middle eastern": 12.42831802368164,
            "latino hispanic": 15.0450439453125
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00018356490181759,
            "disgust": 2.1589382015463343e-07,
            "fear": 0.12304650992155075,
            "happy": 44.96240997314453,
            "sad": 0.19151942431926727,
            "surprise": 0.16752353310585022,
            "neutral": 54.555320739746094
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 624,
            "y": 300,
            "w": 80,
            "h": 80,
            "left_eye": [
                679,
                331
            ],
            "right_eye": [
                648,
                332
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 100.0,
            "Man": 1.1708051488312776e-06
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.016726016998291,
            "indian": 5.24774169921875,
            "black": 0.6705968976020813,
            "white": 53.540443420410156,
            "middle eastern": 19.617834091186523,
            "latino hispanic": 16.90665626525879
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.4233173664688366e-06,
            "disgust": 1.0894009430783961e-15,
            "fear": 1.7512820704723708e-07,
            "happy": 97.88011932373047,
            "sad": 2.860043196051265e-06,
            "surprise": 0.012381442822515965,
            "neutral": 2.1075007915496826
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 960,
            "y": 353,
            "w": 63,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99993133544922,
            "Man": 7.573626498924568e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 11.509774208068848,
            "indian": 6.4259419441223145,
            "black": 1.4414875507354736,
            "white": 33.53569412231445,
            "middle eastern": 16.183563232421875,
            "latino hispanic": 30.903533935546875
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.613056029891595e-06,
            "disgust": 7.417904623885363e-10,
            "fear": 9.79584438027814e-05,
            "happy": 99.9874496459961,
            "sad": 0.011878455989062786,
            "surprise": 6.804275017202599e-06,
            "neutral": 0.0005602854653261602
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 58,
            "y": 328,
            "w": 72,
            "h": 72,
            "left_eye": [
                109,
                356
            ],
            "right_eye": [
                79,
                353
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99942779541016,
            "Man": 0.0005673847044818103
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.501258611679077,
            "indian": 25.200511932373047,
            "black": 3.905287981033325,
            "white": 21.800662994384766,
            "middle eastern": 21.95488166809082,
            "latino hispanic": 23.637399673461914
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 2.2374206309905276e-06,
            "disgust": 3.5619512894768945e-10,
            "fear": 8.529018668923527e-05,
            "happy": 98.44508361816406,
            "sad": 0.0005801392253488302,
            "surprise": 0.037015292793512344,
            "neutral": 1.517241358757019
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 178,
            "y": 333,
            "w": 71,
            "h": 71,
            "left_eye": [
                227,
                359
            ],
            "right_eye": [
                198,
                360
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 100.0,
            "Man": 7.225359155427213e-08
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.8830293416976929,
            "indian": 48.9658088684082,
            "black": 2.7635772228240967,
            "white": 4.481541156768799,
            "middle eastern": 4.587246894836426,
            "latino hispanic": 37.31879806518555
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 3.706476263687364e-06,
            "disgust": 5.413073201482321e-12,
            "fear": 0.0078832246363163,
            "happy": 16.66138458251953,
            "sad": 0.004637854639440775,
            "surprise": 0.04309637472033501,
            "neutral": 83.28299713134766
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 826,
            "y": 363,
            "w": 74,
            "h": 74,
            "left_eye": [
                876,
                389
            ],
            "right_eye": [
                847,
                391
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99983215332031,
            "Man": 0.00016988800780382007
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.017923101782798767,
            "indian": 0.09775340557098389,
            "black": 0.003296938259154558,
            "white": 84.18434143066406,
            "middle eastern": 8.367146492004395,
            "latino hispanic": 7.329545497894287
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.001868623774498701,
            "disgust": 2.996691250700678e-08,
            "fear": 0.17124895751476288,
            "happy": 65.30043029785156,
            "sad": 0.04807662218809128,
            "surprise": 0.2229272872209549,
            "neutral": 34.25544738769531
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 389,
            "y": 400,
            "w": 83,
            "h": 83,
            "left_eye": [
                446,
                430
            ],
            "right_eye": [
                411,
                431
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 100.0,
            "Man": 1.1892154816450784e-06
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.24384905397891998,
            "indian": 1.7690128087997437,
            "black": 0.11899445950984955,
            "white": 68.20584869384766,
            "middle eastern": 17.293933868408203,
            "latino hispanic": 12.368367195129395
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.506468940235209e-06,
            "disgust": 1.856707287917203e-10,
            "fear": 0.033722154796123505,
            "happy": 70.97923278808594,
            "sad": 0.0018910967046394944,
            "surprise": 0.010572636500000954,
            "neutral": 28.974576950073242
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 275,
            "y": 424,
            "w": 82,
            "h": 82,
            "left_eye": [
                330,
                454
            ],
            "right_eye": [
                296,
                455
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.91765594482422,
            "Man": 0.08234366774559021
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.2163996696472168,
            "indian": 2.9149348735809326,
            "black": 0.4420284032821655,
            "white": 48.72895050048828,
            "middle eastern": 25.13688850402832,
            "latino hispanic": 21.560802459716797
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.973456164705567e-06,
            "disgust": 4.384653854187445e-14,
            "fear": 0.0002907301241066307,
            "happy": 95.99678802490234,
            "sad": 3.3570770483493106e-06,
            "surprise": 4.001058101654053,
            "neutral": 0.0018653996521607041
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 719,
            "y": 429,
            "w": 89,
            "h": 89,
            "left_eye": [
                780,
                464
            ],
            "right_eye": [
                747,
                461
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99186706542969,
            "Man": 0.008127334527671337
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0872201919555664,
            "indian": 0.7867211699485779,
            "black": 0.026783935725688934,
            "white": 75.4654769897461,
            "middle eastern": 18.213655471801758,
            "latino hispanic": 5.4201436042785645
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0004051723808515817,
            "disgust": 1.7916250427685299e-10,
            "fear": 1.2626914212887641e-05,
            "happy": 96.69871520996094,
            "sad": 0.001400926848873496,
            "surprise": 0.00418014544993639,
            "neutral": 3.2952795028686523
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 0,
            "y": 447,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 36.066734313964844,
            "Man": 63.933265686035156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3564329147338867,
            "indian": 2.075472354888916,
            "black": 0.271828293800354,
            "white": 51.53413772583008,
            "middle eastern": 16.028865814208984,
            "latino hispanic": 28.733266830444336
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.07669337838888168,
            "disgust": 2.5979593942793144e-07,
            "fear": 0.32804855704307556,
            "happy": 10.886839866638184,
            "sad": 8.771201133728027,
            "surprise": 0.144708052277565,
            "neutral": 79.79251098632812
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 574,
            "y": 431,
            "w": 82,
            "h": 82,
            "left_eye": [
                628,
                459
            ],
            "right_eye": [
                597,
                463
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.96734619140625,
            "Man": 0.032649241387844086
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.09302379190921783,
            "indian": 0.459524005651474,
            "black": 0.020517000928521156,
            "white": 78.38400268554688,
            "middle eastern": 10.756035804748535,
            "latino hispanic": 10.286906242370605
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.9378984570503235,
            "disgust": 0.005313680041581392,
            "fear": 13.621371269226074,
            "happy": 50.82758331298828,
            "sad": 2.8999738693237305,
            "surprise": 0.30977386236190796,
            "neutral": 31.398094177246094
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 146,
            "y": 434,
            "w": 86,
            "h": 86,
            "left_eye": [
                204,
                466
            ],
            "right_eye": [
                170,
                467
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.7872314453125,
            "Man": 0.2127593457698822
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.455343008041382,
            "indian": 39.59974670410156,
            "black": 1.8898899555206299,
            "white": 23.92853546142578,
            "middle eastern": 11.823896408081055,
            "latino hispanic": 20.30258560180664
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 0.7490419149398804,
            "disgust": 4.286870171199553e-05,
            "fear": 11.546195030212402,
            "happy": 15.337525367736816,
            "sad": 1.500198483467102,
            "surprise": 16.903310775756836,
            "neutral": 53.96369171142578
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 691,
            "y": 642,
            "w": 86,
            "h": 86,
            "left_eye": [
                752,
                675
            ],
            "right_eye": [
                714,
                673
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99469757080078,
            "Man": 0.005302236415445805
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.0142035484313965,
            "indian": 9.388853073120117,
            "black": 1.5788224935531616,
            "white": 33.83150863647461,
            "middle eastern": 18.549076080322266,
            "latino hispanic": 35.63753890991211
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.3146917808626313e-05,
            "disgust": 7.793646912730712e-13,
            "fear": 0.04119515419006348,
            "happy": 90.87947845458984,
            "sad": 0.00020101301197428256,
            "surprise": 9.029972076416016,
            "neutral": 0.04913610219955444
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 453,
            "y": 611,
            "w": 93,
            "h": 93,
            "left_eye": [
                518,
                645
            ],
            "right_eye": [
                478,
                644
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 100.0,
            "Man": 5.679056584995124e-07
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.2960337400436401,
            "indian": 6.151608467102051,
            "black": 0.6146014928817749,
            "white": 36.66202926635742,
            "middle eastern": 32.1239013671875,
            "latino hispanic": 23.151823043823242
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.004088148940354586,
            "disgust": 2.897057242989831e-07,
            "fear": 0.24050801992416382,
            "happy": 27.111196517944336,
            "sad": 0.3384007513523102,
            "surprise": 0.15914827585220337,
            "neutral": 72.14666748046875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 243,
            "y": 588,
            "w": 93,
            "h": 93,
            "left_eye": [
                311,
                624
            ],
            "right_eye": [
                270,
                620
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.99828338623047,
            "Man": 0.001719365594908595
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.6368622779846191,
            "indian": 31.576276779174805,
            "black": 0.9421126842498779,
            "white": 23.477746963500977,
            "middle eastern": 12.787814140319824,
            "latino hispanic": 29.579187393188477
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 0.005760734900832176,
            "disgust": 2.3418781438522274e-06,
            "fear": 0.36416974663734436,
            "happy": 92.0345230102539,
            "sad": 0.035329390317201614,
            "surprise": 0.28647732734680176,
            "neutral": 7.273739814758301
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 39,
            "y": 582,
            "w": 111,
            "h": 111,
            "left_eye": [
                118,
                628
            ],
            "right_eye": [
                77,
                619
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99974822998047,
            "Man": 0.0002536684041842818
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 21.92754554748535,
            "indian": 8.392552375793457,
            "black": 0.413331001996994,
            "white": 23.691059112548828,
            "middle eastern": 29.65728187561035,
            "latino hispanic": 15.918233871459961
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 16.791706085205078,
            "disgust": 1.3510595309185192e-08,
            "fear": 0.012726613320410252,
            "happy": 29.342979431152344,
            "sad": 0.010336464270949364,
            "surprise": 0.31476402282714844,
            "neutral": 53.52749252319336
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 896,
            "y": 590,
            "w": 103,
            "h": 103,
            "left_eye": [
                967,
                636
            ],
            "right_eye": [
                932,
                627
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 100.0,
            "Man": 3.4861770927818725e-06
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.752590179443359,
            "indian": 4.465932369232178,
            "black": 0.5185762047767639,
            "white": 42.9412841796875,
            "middle eastern": 14.718118667602539,
            "latino hispanic": 32.6035041809082
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.011267753317952156,
            "disgust": 1.482357097314091e-12,
            "fear": 1.3486394891515374e-05,
            "happy": 54.90082550048828,
            "sad": 7.184370042523369e-05,
            "surprise": 0.013924648985266685,
            "neutral": 45.07389831542969
        },
        "dominant_emotion": "happy"
    }
]

console.log("Microsoft Results for Manicurist:");
const data = manicurist_data.concat(manicurist_data2, manicurist_data3, manicurist_data4, manicurist_data5);
console.log(processData(data));