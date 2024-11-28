const { processData } = require('../../data_processing.js');

let nursing_assistant_data = [
    {
        "age": 26,
        "region": {
            "x": 479,
            "y": 70,
            "w": 95,
            "h": 95,
            "left_eye": [
                543,
                108
            ],
            "right_eye": [
                506,
                108
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.007776699028909206,
            "Man": 99.99222564697266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.049184203147888184,
            "indian": 3.9629156589508057,
            "black": 0.0830078125,
            "white": 38.78055953979492,
            "middle eastern": 49.02646255493164,
            "latino hispanic": 8.097874641418457
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 3.9898843235373904e-13,
            "disgust": 5.983411974785804e-26,
            "fear": 1.6537444792413358e-17,
            "happy": 99.71696472167969,
            "sad": 2.780664424845841e-13,
            "surprise": 1.5477089831961166e-08,
            "neutral": 0.28303027153015137
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 638,
            "y": 92,
            "w": 80,
            "h": 80,
            "left_eye": [
                693,
                122
            ],
            "right_eye": [
                661,
                122
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.96587371826172,
            "Man": 0.03413502126932144
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.557160377502441,
            "indian": 38.90077590942383,
            "black": 5.172542572021484,
            "white": 6.84342622756958,
            "middle eastern": 8.262779235839844,
            "latino hispanic": 34.26332092285156
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 1.845501537900418e-05,
            "disgust": 1.3670598941056822e-12,
            "fear": 1.4488635180498477e-08,
            "happy": 91.36467742919922,
            "sad": 4.9086393119068816e-05,
            "surprise": 0.034379828721284866,
            "neutral": 8.60087776184082
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 53,
            "y": 88,
            "w": 100,
            "h": 100,
            "left_eye": [
                119,
                129
            ],
            "right_eye": [
                85,
                128
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0022423097398132086,
            "Man": 99.99775695800781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.05869116634130478,
            "indian": 12.533906936645508,
            "black": 0.32919999957084656,
            "white": 7.161507606506348,
            "middle eastern": 70.83383178710938,
            "latino hispanic": 9.082865715026855
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 4.4491372364063864e-07,
            "disgust": 5.1855277884149675e-12,
            "fear": 2.744193636772252e-07,
            "happy": 81.51734924316406,
            "sad": 3.4403835798002547e-06,
            "surprise": 0.0020898000802844763,
            "neutral": 18.48055076599121
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 354,
            "y": 96,
            "w": 92,
            "h": 92,
            "left_eye": [
                416,
                132
            ],
            "right_eye": [
                383,
                131
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.0023827585391700268,
            "Man": 99.99761962890625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.5331348180770874,
            "indian": 6.359302043914795,
            "black": 0.6317592263221741,
            "white": 29.926671981811523,
            "middle eastern": 46.065616607666016,
            "latino hispanic": 16.4835147857666
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.5141146669783723e-10,
            "disgust": 1.9842227588163032e-19,
            "fear": 9.429931878759956e-13,
            "happy": 84.64452362060547,
            "sad": 2.1660188309624573e-08,
            "surprise": 3.64648767572362e-05,
            "neutral": 15.355443954467773
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 213,
            "y": 101,
            "w": 96,
            "h": 96,
            "left_eye": [
                277,
                141
            ],
            "right_eye": [
                242,
                139
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0013912038411945105,
            "Man": 99.99860382080078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.02491190657019615,
            "indian": 4.1339592933654785,
            "black": 0.0733603686094284,
            "white": 12.9337158203125,
            "middle eastern": 77.15318298339844,
            "latino hispanic": 5.680873394012451
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.18121624836931e-06,
            "disgust": 2.169682877806167e-09,
            "fear": 4.391017398575059e-07,
            "happy": 99.24629974365234,
            "sad": 5.164519279787783e-06,
            "surprise": 0.0037149449344724417,
            "neutral": 0.7499812841415405
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 789,
            "y": 109,
            "w": 87,
            "h": 87,
            "left_eye": [
                847,
                141
            ],
            "right_eye": [
                815,
                144
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.86851501464844,
            "Man": 0.13148674368858337
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.6158697605133057,
            "indian": 1.5012271404266357,
            "black": 0.4111228883266449,
            "white": 63.64393997192383,
            "middle eastern": 14.42372989654541,
            "latino hispanic": 18.404111862182617
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.918520760265892e-08,
            "disgust": 1.342456788094859e-11,
            "fear": 2.0933026423364254e-09,
            "happy": 97.16098022460938,
            "sad": 3.893611574312672e-05,
            "surprise": 0.0001491375733166933,
            "neutral": 2.8388261795043945
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 0,
            "y": 215,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 96.3952865600586,
            "Man": 3.6047089099884033
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 12.308459281921387,
            "indian": 16.547300338745117,
            "black": 8.835358619689941,
            "white": 14.970232963562012,
            "middle eastern": 19.026222229003906,
            "latino hispanic": 28.31243324279785
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.418632559260004e-07,
            "disgust": 4.8263192871998736e-17,
            "fear": 1.4259735792165884e-07,
            "happy": 99.99971008300781,
            "sad": 1.2719833186736196e-08,
            "surprise": 6.670738457614789e-06,
            "neutral": 0.0002853253099601716
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 929,
            "y": 133,
            "w": 85,
            "h": 85,
            "left_eye": [
                989,
                165
            ],
            "right_eye": [
                954,
                168
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.93040466308594,
            "Man": 0.06958913058042526
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.007205254514702e-05,
            "indian": 0.0007208590977825224,
            "black": 99.99919891357422,
            "white": 4.411406351323421e-09,
            "middle eastern": 8.491373160168791e-10,
            "latino hispanic": 3.517905861372128e-05
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 4.657262616092339e-05,
            "disgust": 2.5841049786090586e-11,
            "fear": 2.0966636782304704e-07,
            "happy": 91.25056457519531,
            "sad": 0.0023181873839348555,
            "surprise": 0.003698070766404271,
            "neutral": 8.743376731872559
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 135,
            "y": 201,
            "w": 104,
            "h": 104,
            "left_eye": [
                207,
                242
            ],
            "right_eye": [
                167,
                243
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 4.7387369704665616e-05,
            "Man": 99.99995422363281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00035695364931598306,
            "indian": 0.6975306868553162,
            "black": 0.0017888168804347515,
            "white": 26.05511474609375,
            "middle eastern": 69.15436553955078,
            "latino hispanic": 4.090847492218018
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 6.36056502116844e-05,
            "disgust": 6.860868211333582e-07,
            "fear": 8.089466064120643e-06,
            "happy": 99.90354919433594,
            "sad": 4.1252751543652266e-05,
            "surprise": 0.007223269436508417,
            "neutral": 0.08911972492933273
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 306,
            "y": 209,
            "w": 100,
            "h": 100,
            "left_eye": [
                376,
                249
            ],
            "right_eye": [
                337,
                247
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 16.468032836914062,
            "Man": 83.53196716308594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.04647146165370941,
            "indian": 0.16292960941791534,
            "black": 0.011077971197664738,
            "white": 76.99532318115234,
            "middle eastern": 11.230621337890625,
            "latino hispanic": 11.553585052490234
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.9136794549012848e-07,
            "disgust": 1.5025793795843075e-15,
            "fear": 2.6509441863886707e-10,
            "happy": 90.69465637207031,
            "sad": 7.897218893049285e-06,
            "surprise": 0.0006235173204913735,
            "neutral": 9.304716110229492
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 438,
            "y": 203,
            "w": 110,
            "h": 110,
            "left_eye": [
                511,
                246
            ],
            "right_eye": [
                472,
                248
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.0018564560450613499,
            "Man": 99.99813842773438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0010434674331918359,
            "indian": 3.2466962337493896,
            "black": 0.001577247167006135,
            "white": 5.444335460662842,
            "middle eastern": 88.41561889648438,
            "latino hispanic": 2.890720844268799
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 2.023147274710091e-13,
            "disgust": 5.045644216827914e-22,
            "fear": 3.4783736204264904e-16,
            "happy": 99.90921783447266,
            "sad": 5.767459860389623e-12,
            "surprise": 2.0871662176347172e-09,
            "neutral": 0.09078528732061386
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 556,
            "y": 209,
            "w": 88,
            "h": 88,
            "left_eye": [
                616,
                244
            ],
            "right_eye": [
                580,
                243
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.9794921875,
            "Man": 0.020508471876382828
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 26.81292152404785,
            "indian": 22.4779052734375,
            "black": 25.892263412475586,
            "white": 1.858560562133789,
            "middle eastern": 1.8201682567596436,
            "latino hispanic": 21.13817596435547
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0005651373066939414,
            "disgust": 7.031727727735415e-05,
            "fear": 0.01606813259422779,
            "happy": 96.010009765625,
            "sad": 0.07969188690185547,
            "surprise": 0.04980966076254845,
            "neutral": 3.8437912464141846
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 846,
            "y": 237,
            "w": 89,
            "h": 89,
            "left_eye": [
                906,
                272
            ],
            "right_eye": [
                871,
                273
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 55.72278594970703,
            "Man": 44.277225494384766
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.630727767944336,
            "indian": 51.84987258911133,
            "black": 1.6760567426681519,
            "white": 2.50588321685791,
            "middle eastern": 3.3302817344665527,
            "latino hispanic": 35.007179260253906
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 0.0005607099737972021,
            "disgust": 1.3784567272523418e-05,
            "fear": 0.0038135438226163387,
            "happy": 89.18250274658203,
            "sad": 0.015063782222568989,
            "surprise": 0.009015478193759918,
            "neutral": 10.789032936096191
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 694,
            "y": 192,
            "w": 102,
            "h": 102,
            "left_eye": [
                763,
                234
            ],
            "right_eye": [
                726,
                234
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.0016486805398017168,
            "Man": 99.99835205078125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.046327222138643265,
            "indian": 1.4142897129058838,
            "black": 0.05026561766862869,
            "white": 44.06732940673828,
            "middle eastern": 39.91582489013672,
            "latino hispanic": 14.505967140197754
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6076396605058108e-06,
            "disgust": 2.1303649423427655e-14,
            "fear": 5.828350302383711e-11,
            "happy": 98.50595092773438,
            "sad": 5.723922527067771e-07,
            "surprise": 4.233553045196459e-05,
            "neutral": 1.4940059185028076
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 633,
            "y": 332,
            "w": 100,
            "h": 100,
            "left_eye": [
                703,
                372
            ],
            "right_eye": [
                663,
                373
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.98115539550781,
            "Man": 0.01883765123784542
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 10.174656867980957,
            "indian": 10.955635070800781,
            "black": 4.422915935516357,
            "white": 13.65046215057373,
            "middle eastern": 6.222827911376953,
            "latino hispanic": 54.57350158691406
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.149373133557674e-06,
            "disgust": 1.1609942607987422e-12,
            "fear": 2.3664870951733974e-08,
            "happy": 90.0042953491211,
            "sad": 3.500012098811567e-05,
            "surprise": 0.00796318519860506,
            "neutral": 9.987709999084473
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 66,
            "y": 332,
            "w": 119,
            "h": 119,
            "left_eye": [
                144,
                380
            ],
            "right_eye": [
                101,
                380
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.0005189821240492165,
            "Man": 99.99947357177734
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.028273535892367363,
            "indian": 8.796560287475586,
            "black": 0.20339173078536987,
            "white": 20.35464096069336,
            "middle eastern": 63.95120620727539,
            "latino hispanic": 6.6659255027771
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 8.696074971226153e-10,
            "disgust": 6.24261697235441e-21,
            "fear": 1.2209738428636818e-11,
            "happy": 99.8717041015625,
            "sad": 2.525147868581712e-10,
            "surprise": 4.681797872763127e-05,
            "neutral": 0.12824036180973053
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 276,
            "y": 344,
            "w": 99,
            "h": 99,
            "left_eye": [
                346,
                384
            ],
            "right_eye": [
                306,
                384
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99910736083984,
            "Man": 0.0008958865655586123
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 15.912111282348633,
            "indian": 17.735912322998047,
            "black": 9.378533363342285,
            "white": 11.100544929504395,
            "middle eastern": 9.780289649963379,
            "latino hispanic": 36.092613220214844
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.0294822459400166e-05,
            "disgust": 4.1367942600102625e-13,
            "fear": 5.08786706632236e-06,
            "happy": 91.66258239746094,
            "sad": 0.0009190244018100202,
            "surprise": 0.23440982401371002,
            "neutral": 8.102080345153809
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 425,
            "y": 342,
            "w": 117,
            "h": 117,
            "left_eye": [
                503,
                387
            ],
            "right_eye": [
                459,
                389
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.002657865406945348,
            "Man": 99.99734497070312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.1730830669403076,
            "indian": 17.078834533691406,
            "black": 4.149989604949951,
            "white": 20.226781845092773,
            "middle eastern": 20.411725997924805,
            "latino hispanic": 34.9595832824707
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.1764344662879012e-06,
            "disgust": 4.456338943692462e-12,
            "fear": 5.509148763849225e-07,
            "happy": 91.43455505371094,
            "sad": 6.68573375151027e-06,
            "surprise": 0.015516442246735096,
            "neutral": 8.549921989440918
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 786,
            "y": 354,
            "w": 108,
            "h": 108,
            "left_eye": [
                860,
                397
            ],
            "right_eye": [
                819,
                397
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 98.8228530883789,
            "Man": 1.1771446466445923
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 10.989106178283691,
            "indian": 16.27814292907715,
            "black": 3.9118151664733887,
            "white": 8.179462432861328,
            "middle eastern": 3.8234755992889404,
            "latino hispanic": 56.817996978759766
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 5.627821906273311e-07,
            "disgust": 1.7475999014343775e-14,
            "fear": 9.334264206017906e-08,
            "happy": 98.99354553222656,
            "sad": 0.0001775315759005025,
            "surprise": 7.741012268525083e-06,
            "neutral": 1.0062700510025024
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 250,
            "y": 470,
            "w": 115,
            "h": 115,
            "left_eye": [
                326,
                514
            ],
            "right_eye": [
                282,
                517
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99826049804688,
            "Man": 0.0017369386041536927
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.70262336730957,
            "indian": 18.693756103515625,
            "black": 12.238286018371582,
            "white": 16.612472534179688,
            "middle eastern": 14.451029777526855,
            "latino hispanic": 31.30183219909668
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 6.461297469284588e-11,
            "disgust": 8.831725974637128e-20,
            "fear": 5.574221639825794e-13,
            "happy": 97.37672424316406,
            "sad": 1.8906718413091994e-09,
            "surprise": 7.004088547546417e-05,
            "neutral": 2.6232082843780518
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 499,
            "y": 500,
            "w": 110,
            "h": 110,
            "left_eye": [
                576,
                545
            ],
            "right_eye": [
                536,
                544
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.722412109375,
            "Man": 0.2775949537754059
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 98.65829467773438,
            "indian": 0.6039490699768066,
            "black": 0.013054801151156425,
            "white": 0.057385530322790146,
            "middle eastern": 0.004479916766285896,
            "latino hispanic": 0.6628386974334717
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 8.182718011084944e-05,
            "disgust": 9.833224901001358e-09,
            "fear": 7.709910278208554e-05,
            "happy": 72.00820922851562,
            "sad": 0.00419909181073308,
            "surprise": 0.11303427815437317,
            "neutral": 27.874399185180664
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 869,
            "y": 491,
            "w": 123,
            "h": 123,
            "left_eye": [
                950,
                538
            ],
            "right_eye": [
                909,
                540
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.98477935791016,
            "Man": 0.015226632356643677
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.9940366744995117,
            "indian": 12.790934562683105,
            "black": 2.558323860168457,
            "white": 24.357444763183594,
            "middle eastern": 30.335002899169922,
            "latino hispanic": 26.964256286621094
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 2.21775899262866e-05,
            "disgust": 1.2082682410152756e-08,
            "fear": 2.128976348103606e-06,
            "happy": 99.12168884277344,
            "sad": 6.524787022499368e-05,
            "surprise": 8.922269444155972e-06,
            "neutral": 0.8782163262367249
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 0,
            "y": 501,
            "w": 115,
            "h": 115,
            "left_eye": [
                52,
                542
            ],
            "right_eye": [
                9,
                549
            ]
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 99.99494934082031,
            "Man": 0.005058230832219124
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 17.34639549255371,
            "indian": 13.361430168151855,
            "black": 5.81919527053833,
            "white": 10.93311595916748,
            "middle eastern": 7.492125034332275,
            "latino hispanic": 45.04773712158203
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0026261238381266594,
            "disgust": 1.0410393969095821e-07,
            "fear": 0.0013826260110363364,
            "happy": 97.99758911132812,
            "sad": 0.0042252386920154095,
            "surprise": 0.5914707183837891,
            "neutral": 1.4027094841003418
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 116,
            "y": 598,
            "w": 120,
            "h": 120,
            "left_eye": [
                199,
                643
            ],
            "right_eye": [
                154,
                646
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.972412109375,
            "Man": 0.0275933388620615
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 95.09237670898438,
            "indian": 1.2964903116226196,
            "black": 0.07991772890090942,
            "white": 0.15873581171035767,
            "middle eastern": 0.005936806555837393,
            "latino hispanic": 3.366550922393799
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.5297848676709691e-06,
            "disgust": 2.005346409761355e-12,
            "fear": 7.15730493539013e-07,
            "happy": 88.10625457763672,
            "sad": 1.1824310604424682e-05,
            "surprise": 0.39547815918922424,
            "neutral": 11.49825382232666
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 674,
            "y": 580,
            "w": 128,
            "h": 128,
            "left_eye": [
                760,
                633
            ],
            "right_eye": [
                713,
                631
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99810791015625,
            "Man": 0.0018946313066408038
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0012535369023680687,
            "indian": 0.004925040528178215,
            "black": 99.9935531616211,
            "white": 1.3386475927745778e-07,
            "middle eastern": 1.0904233072039915e-08,
            "latino hispanic": 0.0002728926483541727
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 2.5760243715922115e-07,
            "disgust": 5.067721958219862e-13,
            "fear": 7.570049476157692e-09,
            "happy": 74.79838562011719,
            "sad": 2.141011464118492e-05,
            "surprise": 0.0007845215732231736,
            "neutral": 25.2007999420166
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 369,
            "y": 596,
            "w": 129,
            "h": 129,
            "left_eye": [
                455,
                645
            ],
            "right_eye": [
                409,
                647
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99866485595703,
            "Man": 0.0013380079763010144
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.056002043187618256,
            "indian": 0.1136699691414833,
            "black": 0.004544968716800213,
            "white": 85.60704803466797,
            "middle eastern": 9.010147094726562,
            "latino hispanic": 5.208582401275635
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.6427301236253697e-08,
            "disgust": 1.805658349406292e-18,
            "fear": 4.2095077423809357e-10,
            "happy": 98.28759765625,
            "sad": 2.702369670259941e-07,
            "surprise": 0.009822424501180649,
            "neutral": 1.7025758028030396
        },
        "dominant_emotion": "happy"
    }
]
let nursing_assistant_data2 = [
    {
        "age": 33,
        "region": {
            "x": 309,
            "y": 39,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.8667221069336,
            "Man": 0.1332806944847107
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.51172399520874,
            "indian": 10.415521621704102,
            "black": 1.4713078737258911,
            "white": 28.601680755615234,
            "middle eastern": 26.572864532470703,
            "latino hispanic": 28.426904678344727
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0026539252139627934,
            "disgust": 1.3067980034975335e-05,
            "fear": 0.0016252885106950998,
            "happy": 60.989051818847656,
            "sad": 0.004579414147883654,
            "surprise": 0.025064479559659958,
            "neutral": 38.97700881958008
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 875,
            "y": 38,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.9132080078125,
            "Man": 0.08678857982158661
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.043641567230225,
            "indian": 4.111844062805176,
            "black": 0.7882174253463745,
            "white": 50.25846862792969,
            "middle eastern": 23.671167373657227,
            "latino hispanic": 17.126665115356445
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0485210083425045,
            "disgust": 0.0002994534152094275,
            "fear": 0.010482522659003735,
            "happy": 95.80632781982422,
            "sad": 0.35501861572265625,
            "surprise": 0.015208404511213303,
            "neutral": 3.764146089553833
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 129,
            "y": 84,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.92769622802734,
            "Man": 0.07230403274297714
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.926377773284912,
            "indian": 19.379911422729492,
            "black": 67.06580352783203,
            "white": 0.5986742973327637,
            "middle eastern": 0.3992491066455841,
            "latino hispanic": 5.629981517791748
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.398839958710596e-05,
            "disgust": 9.354069518963115e-09,
            "fear": 0.00018827515305019915,
            "happy": 99.79917907714844,
            "sad": 0.0025288204196840525,
            "surprise": 0.0006566944066435099,
            "neutral": 0.19743385910987854
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 458,
            "y": 90,
            "w": 71,
            "h": 71,
            "left_eye": [
                505,
                116
            ],
            "right_eye": [
                479,
                116
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.70227813720703,
            "Man": 0.29771631956100464
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 15.454144477844238,
            "indian": 15.333151817321777,
            "black": 4.483135223388672,
            "white": 17.57012939453125,
            "middle eastern": 13.35046100616455,
            "latino hispanic": 33.80897903442383
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0010884808143600821,
            "disgust": 1.3022759537406614e-09,
            "fear": 1.363494993711356e-05,
            "happy": 83.67137908935547,
            "sad": 0.0008711051777936518,
            "surprise": 0.0027947979979217052,
            "neutral": 16.3238582611084
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 621,
            "y": 87,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 93.45953369140625,
            "Man": 6.540463924407959
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 17.90352439880371,
            "indian": 22.33916473388672,
            "black": 7.552281856536865,
            "white": 12.523534774780273,
            "middle eastern": 12.021662712097168,
            "latino hispanic": 27.659833908081055
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0013601441169157624,
            "disgust": 5.612437234958634e-07,
            "fear": 0.00041382716153748333,
            "happy": 99.86607360839844,
            "sad": 0.010821426287293434,
            "surprise": 0.00023801428324077278,
            "neutral": 0.12107529491186142
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 729,
            "y": 21,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 1.383112907409668,
            "Man": 98.61688232421875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.118005302369056e-08,
            "indian": 1.3070297200101777e-06,
            "black": 100.0,
            "white": 9.54575862799345e-11,
            "middle eastern": 8.392476297247597e-11,
            "latino hispanic": 5.349754701455822e-07
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0008960895938798785,
            "disgust": 7.55989458411932e-05,
            "fear": 0.0016182137187570333,
            "happy": 85.25164031982422,
            "sad": 0.2244279533624649,
            "surprise": 0.003374609164893627,
            "neutral": 14.517969131469727
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 690,
            "y": 163,
            "w": 73,
            "h": 73,
            "left_eye": [
                740,
                191
            ],
            "right_eye": [
                713,
                190
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.48815155029297,
            "Man": 0.511846661567688
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 10.14313793182373,
            "indian": 13.012446403503418,
            "black": 4.112975597381592,
            "white": 18.107065200805664,
            "middle eastern": 13.42962646484375,
            "latino hispanic": 41.19474411010742
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.486353878339287e-07,
            "disgust": 4.1331136646852173e-13,
            "fear": 3.9137626117735635e-07,
            "happy": 99.76319122314453,
            "sad": 1.8717764760367572e-06,
            "surprise": 0.00415093032643199,
            "neutral": 0.23265941441059113
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 958,
            "y": 129,
            "w": 65,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 94.0151596069336,
            "Man": 5.984836101531982
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0036753469612449408,
            "indian": 0.03098778799176216,
            "black": 99.96186828613281,
            "white": 1.691807119641453e-05,
            "middle eastern": 2.256768766528694e-06,
            "latino hispanic": 0.0034555578604340553
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 2.3826588702036133e-08,
            "disgust": 5.653408513897618e-13,
            "fear": 1.1358040410414105e-06,
            "happy": 99.98482513427734,
            "sad": 0.012881940230727196,
            "surprise": 1.3290018614497967e-06,
            "neutral": 0.0022932207211852074
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 526,
            "y": 32,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 2.219569206237793,
            "Man": 97.78043365478516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.6715803146362305,
            "indian": 1.8868560791015625,
            "black": 94.66992950439453,
            "white": 0.14138342440128326,
            "middle eastern": 0.11944332718849182,
            "latino hispanic": 1.51081120967865
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.00020851449517067522,
            "disgust": 6.825108256336421e-10,
            "fear": 2.4802017151159816e-07,
            "happy": 99.31438446044922,
            "sad": 8.662159416417126e-06,
            "surprise": 0.0029283256735652685,
            "neutral": 0.6824735999107361
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 173,
            "y": 175,
            "w": 79,
            "h": 79,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99652862548828,
            "Man": 0.00347412028349936
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.7916972637176514,
            "indian": 6.829012870788574,
            "black": 2.4604530334472656,
            "white": 38.17842483520508,
            "middle eastern": 25.700660705566406,
            "latino hispanic": 24.039743423461914
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.915738256589975e-06,
            "disgust": 2.634430096293272e-08,
            "fear": 0.00047061810619197786,
            "happy": 99.97254943847656,
            "sad": 0.00021849652694072574,
            "surprise": 0.0007916442700661719,
            "neutral": 0.025963194668293
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 570,
            "y": 181,
            "w": 74,
            "h": 74,
            "left_eye": [
                617,
                209
            ],
            "right_eye": [
                591,
                209
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 95.7157974243164,
            "Man": 4.284204006195068
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.663533210754395,
            "indian": 27.567829132080078,
            "black": 12.904945373535156,
            "white": 5.235983371734619,
            "middle eastern": 4.368767738342285,
            "latino hispanic": 41.25894546508789
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.8016082776739495e-06,
            "disgust": 2.694280354376133e-08,
            "fear": 5.128008069732459e-06,
            "happy": 98.81588745117188,
            "sad": 4.507017820287729e-06,
            "surprise": 7.625048601767048e-05,
            "neutral": 1.184025526046753
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 247,
            "y": 108,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.9942398071289,
            "Man": 0.005758159793913364
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.89048433303833,
            "indian": 19.69647789001465,
            "black": 67.27275848388672,
            "white": 0.18416376411914825,
            "middle eastern": 0.12936647236347198,
            "latino hispanic": 7.826749324798584
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0019742955919355154,
            "disgust": 8.546327308067703e-07,
            "fear": 0.00048345245886594057,
            "happy": 66.92767333984375,
            "sad": 0.005630373489111662,
            "surprise": 0.024121630936861038,
            "neutral": 33.04011917114258
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 797,
            "y": 111,
            "w": 71,
            "h": 71,
            "left_eye": [
                843,
                137
            ],
            "right_eye": [
                819,
                138
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.96039581298828,
            "Man": 0.03960995376110077
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.11495304107666,
            "indian": 12.881681442260742,
            "black": 2.4623489379882812,
            "white": 25.109861373901367,
            "middle eastern": 27.214317321777344,
            "latino hispanic": 27.216842651367188
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.00011134542728541419,
            "disgust": 8.9806746927934e-07,
            "fear": 0.000625875371042639,
            "happy": 94.55282592773438,
            "sad": 0.0069804429076612,
            "surprise": 0.00855183508247137,
            "neutral": 5.430902004241943
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 37,
            "y": 192,
            "w": 80,
            "h": 80,
            "left_eye": [
                91,
                223
            ],
            "right_eye": [
                62,
                223
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99600982666016,
            "Man": 0.003988143987953663
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 10.12930965423584,
            "indian": 24.42789649963379,
            "black": 16.672883987426758,
            "white": 11.948068618774414,
            "middle eastern": 12.356986045837402,
            "latino hispanic": 24.464845657348633
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.091896795202274e-08,
            "disgust": 1.60233222632096e-14,
            "fear": 2.493686679372331e-08,
            "happy": 92.32118225097656,
            "sad": 6.82751647218538e-07,
            "surprise": 0.0005593794630840421,
            "neutral": 7.678262233734131
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 781,
            "y": 205,
            "w": 79,
            "h": 79,
            "left_eye": [
                834,
                236
            ],
            "right_eye": [
                803,
                236
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99947357177734,
            "Man": 0.0005237304139882326
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 10.943033218383789,
            "indian": 16.906278610229492,
            "black": 20.150543212890625,
            "white": 6.96696662902832,
            "middle eastern": 6.082634449005127,
            "latino hispanic": 38.95054626464844
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.8761830250800813e-08,
            "disgust": 3.764875564082892e-12,
            "fear": 3.218655706405116e-07,
            "happy": 96.97881317138672,
            "sad": 2.2998880012892187e-05,
            "surprise": 5.695910658687353e-05,
            "neutral": 3.0210912227630615
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 379,
            "y": 115,
            "w": 76,
            "h": 76,
            "left_eye": [
                430,
                140
            ],
            "right_eye": [
                401,
                148
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.98675537109375,
            "Man": 0.013243149034678936
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 24.78262710571289,
            "indian": 17.86783218383789,
            "black": 9.210756301879883,
            "white": 12.396240234375,
            "middle eastern": 11.234313011169434,
            "latino hispanic": 24.50823211669922
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.7123451243605814e-06,
            "disgust": 9.29011451100692e-11,
            "fear": 2.8154954634374008e-06,
            "happy": 83.60440826416016,
            "sad": 0.0001261899888049811,
            "surprise": 0.01674121618270874,
            "neutral": 16.37872314453125
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 338,
            "y": 204,
            "w": 78,
            "h": 78,
            "left_eye": [
                391,
                238
            ],
            "right_eye": [
                361,
                233
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99990844726562,
            "Man": 9.936041169567034e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.858501672744751,
            "indian": 36.3961181640625,
            "black": 52.09393310546875,
            "white": 0.1636246144771576,
            "middle eastern": 0.08252567797899246,
            "latino hispanic": 9.405294418334961
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 6.086322628107155e-07,
            "disgust": 5.729429153333854e-10,
            "fear": 9.531062096357346e-05,
            "happy": 98.4189682006836,
            "sad": 1.493249692430254e-05,
            "surprise": 0.0012036132393404841,
            "neutral": 1.5797090530395508
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 469,
            "y": 221,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 96.29737854003906,
            "Man": 3.7026267051696777
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.919116409178969e-08,
            "indian": 1.888398219307419e-05,
            "black": 99.99998474121094,
            "white": 8.430388142134995e-14,
            "middle eastern": 1.4814866710108994e-15,
            "latino hispanic": 2.9310974980489846e-08
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 5.006958736508693e-10,
            "disgust": 5.960701234172565e-19,
            "fear": 5.309805177331926e-15,
            "happy": 99.99433135986328,
            "sad": 4.349681170801034e-10,
            "surprise": 3.1635929076401226e-07,
            "neutral": 0.005669601261615753
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 649,
            "y": 289,
            "w": 82,
            "h": 82,
            "left_eye": [
                704,
                319
            ],
            "right_eye": [
                675,
                322
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99928283691406,
            "Man": 0.0007157569052651525
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 26.81429672241211,
            "indian": 37.486392974853516,
            "black": 5.920831203460693,
            "white": 2.7592520713806152,
            "middle eastern": 1.7529981136322021,
            "latino hispanic": 25.2662296295166
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 1.4129161165707393e-12,
            "disgust": 1.0219503793821112e-17,
            "fear": 1.2385802106162913e-10,
            "happy": 99.95020294189453,
            "sad": 7.549695091313424e-09,
            "surprise": 7.658375125174643e-07,
            "neutral": 0.049794577062129974
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 76,
            "y": 320,
            "w": 82,
            "h": 82,
            "left_eye": [
                130,
                350
            ],
            "right_eye": [
                103,
                353
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 4.975522994995117,
            "Man": 95.02447509765625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.08712005615234,
            "indian": 0.35959944128990173,
            "black": 0.0001400296314386651,
            "white": 0.02005298249423504,
            "middle eastern": 3.8490190490847453e-05,
            "latino hispanic": 0.5330610871315002
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 7.029570383565442e-07,
            "disgust": 5.99356031472098e-09,
            "fear": 1.1169410754519049e-05,
            "happy": 87.82349395751953,
            "sad": 0.00014494564675260335,
            "surprise": 0.009438065811991692,
            "neutral": 12.16692066192627
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 268,
            "y": 282,
            "w": 89,
            "h": 89,
            "left_eye": [
                326,
                313
            ],
            "right_eye": [
                294,
                321
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99991607666016,
            "Man": 8.490167965646833e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 14.403168678283691,
            "indian": 25.315025329589844,
            "black": 6.1150031089782715,
            "white": 9.50655460357666,
            "middle eastern": 13.71608829498291,
            "latino hispanic": 30.944162368774414
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.450991243880708e-07,
            "disgust": 3.9374270954795065e-08,
            "fear": 0.00013176938227843493,
            "happy": 98.52418518066406,
            "sad": 0.00110712181776762,
            "surprise": 4.337153586675413e-05,
            "neutral": 1.474534511566162
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 182,
            "y": 333,
            "w": 90,
            "h": 90,
            "left_eye": [
                242,
                368
            ],
            "right_eye": [
                209,
                368
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9085922241211,
            "Man": 0.09140796214342117
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 48.58903121948242,
            "indian": 10.373950004577637,
            "black": 3.157736301422119,
            "white": 5.313314437866211,
            "middle eastern": 1.7849854230880737,
            "latino hispanic": 30.78098487854004
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 7.276383939824882e-10,
            "disgust": 3.5224381462854726e-13,
            "fear": 6.278240149981684e-09,
            "happy": 98.60430908203125,
            "sad": 1.8064847608911805e-06,
            "surprise": 1.021040475279733e-06,
            "neutral": 1.3956917524337769
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 792,
            "y": 334,
            "w": 91,
            "h": 91,
            "left_eye": [
                854,
                369
            ],
            "right_eye": [
                821,
                370
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99459838867188,
            "Man": 0.005400130059570074
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 20.658226013183594,
            "indian": 9.46959114074707,
            "black": 3.1357805728912354,
            "white": 23.677555084228516,
            "middle eastern": 8.953543663024902,
            "latino hispanic": 34.10531234741211
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.2289190635783598e-05,
            "disgust": 1.8483559571791375e-08,
            "fear": 0.00014407084381673485,
            "happy": 88.98408508300781,
            "sad": 0.0007254309603013098,
            "surprise": 0.0269103292375803,
            "neutral": 10.98812484741211
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 534,
            "y": 344,
            "w": 88,
            "h": 88,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.65298461914062,
            "Man": 0.34701910614967346
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 12.57330322265625,
            "indian": 17.423921585083008,
            "black": 23.852909088134766,
            "white": 4.295937538146973,
            "middle eastern": 4.959822654724121,
            "latino hispanic": 36.89411163330078
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 5.602421304651273e-11,
            "disgust": 2.633466378453941e-18,
            "fear": 2.447648750347753e-10,
            "happy": 99.94698333740234,
            "sad": 8.136136209202505e-09,
            "surprise": 0.0011551212519407272,
            "neutral": 0.05186350271105766
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 939,
            "y": 371,
            "w": 84,
            "h": 85,
            "left_eye": [
                997,
                406
            ],
            "right_eye": [
                962,
                404
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.7308120727539,
            "Man": 0.2691820561885834
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 57.42477035522461,
            "indian": 17.332796096801758,
            "black": 11.678274154663086,
            "white": 1.1481722593307495,
            "middle eastern": 0.3941531181335449,
            "latino hispanic": 12.021842002868652
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 6.939730365883301e-13,
            "disgust": 1.590319654041139e-21,
            "fear": 1.276288831428751e-14,
            "happy": 98.14324188232422,
            "sad": 2.6321441554122416e-11,
            "surprise": 1.245932980964426e-05,
            "neutral": 1.8567438125610352
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 379,
            "y": 381,
            "w": 94,
            "h": 94,
            "left_eye": [
                433,
                416
            ],
            "right_eye": [
                399,
                422
            ]
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 99.99830627441406,
            "Man": 0.0016946687828749418
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 81.13678741455078,
            "indian": 4.96253776550293,
            "black": 0.37621206045150757,
            "white": 2.0682952404022217,
            "middle eastern": 1.3653236627578735,
            "latino hispanic": 10.09084415435791
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 7.023489615676226e-06,
            "disgust": 9.291296620972389e-09,
            "fear": 0.0003701507521327585,
            "happy": 99.84693145751953,
            "sad": 1.1475349310785532e-05,
            "surprise": 0.00010530387953622267,
            "neutral": 0.15257301926612854
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 686,
            "y": 487,
            "w": 93,
            "h": 93,
            "left_eye": [
                750,
                523
            ],
            "right_eye": [
                715,
                523
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.91673278808594,
            "Man": 0.08327033370733261
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.137974739074707,
            "indian": 32.176753997802734,
            "black": 53.619224548339844,
            "white": 0.596023440361023,
            "middle eastern": 0.5424107313156128,
            "latino hispanic": 7.9276123046875
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 7.151976688492072e-16,
            "disgust": 1.0386943149543825e-31,
            "fear": 1.3224805305958685e-20,
            "happy": 99.99678039550781,
            "sad": 2.741840621004046e-16,
            "surprise": 1.216896521327726e-07,
            "neutral": 0.003219746286049485
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 847,
            "y": 495,
            "w": 98,
            "h": 98,
            "left_eye": [
                912,
                532
            ],
            "right_eye": [
                876,
                537
            ]
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 99.9693603515625,
            "Man": 0.030642474070191383
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 98.37299346923828,
            "indian": 0.36760279536247253,
            "black": 0.000797552929725498,
            "white": 0.044863078743219376,
            "middle eastern": 0.0006940264138393104,
            "latino hispanic": 1.2130482196807861
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.713495916850661e-07,
            "disgust": 6.810469130869024e-07,
            "fear": 3.474922777968459e-05,
            "happy": 91.86751556396484,
            "sad": 3.768965689232573e-05,
            "surprise": 0.000527459429576993,
            "neutral": 8.131884574890137
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 20,
            "y": 504,
            "w": 102,
            "h": 102,
            "left_eye": [
                89,
                545
            ],
            "right_eye": [
                51,
                542
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.72586822509766,
            "Man": 0.27412715554237366
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 63.62629699707031,
            "indian": 7.428774356842041,
            "black": 0.9379375576972961,
            "white": 3.1024115085601807,
            "middle eastern": 0.6388348340988159,
            "latino hispanic": 24.265748977661133
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.0090546799545238e-14,
            "disgust": 2.1036107264256367e-23,
            "fear": 1.1504176178843938e-14,
            "happy": 99.92109680175781,
            "sad": 6.406053205260109e-12,
            "surprise": 1.7428687897336204e-06,
            "neutral": 0.07890456169843674
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 477,
            "y": 509,
            "w": 96,
            "h": 96,
            "left_eye": [
                547,
                552
            ],
            "right_eye": [
                507,
                544
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.93775177001953,
            "Man": 0.062243010848760605
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.757396989714003e-11,
            "indian": 1.7937354357400181e-07,
            "black": 100.0,
            "white": 3.033964952100371e-14,
            "middle eastern": 1.1809101475350144e-15,
            "latino hispanic": 1.7710310995511236e-09
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 2.1654203430365726e-10,
            "disgust": 8.197792072270563e-19,
            "fear": 1.1039534087223246e-12,
            "happy": 98.906005859375,
            "sad": 2.790791420181904e-08,
            "surprise": 0.0002425463608233258,
            "neutral": 1.0937553644180298
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 235,
            "y": 518,
            "w": 95,
            "h": 95,
            "left_eye": [
                296,
                557
            ],
            "right_eye": [
                264,
                557
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.88690948486328,
            "Man": 0.11308775097131729
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 64.37565612792969,
            "indian": 8.502811431884766,
            "black": 2.433753728866577,
            "white": 2.010702610015869,
            "middle eastern": 0.47364258766174316,
            "latino hispanic": 22.203439712524414
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.658858765552726e-15,
            "disgust": 3.916592279218042e-20,
            "fear": 1.925047755818349e-15,
            "happy": 99.98919677734375,
            "sad": 2.0258881378021343e-12,
            "surprise": 1.0949822645822671e-11,
            "neutral": 0.010802730917930603
        },
        "dominant_emotion": "happy"
    }
]
let nursing_assistant_data3 = [
    {
        "age": 26,
        "region": {
            "x": 649,
            "y": 18,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 2.3340137004852295,
            "Man": 97.6659927368164
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3447227478027344,
            "indian": 4.131613731384277,
            "black": 0.38433244824409485,
            "white": 52.16950988769531,
            "middle eastern": 24.971769332885742,
            "latino hispanic": 16.99805450439453
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.02762235887348652,
            "disgust": 0.025509648025035858,
            "fear": 27.603477478027344,
            "happy": 71.5826187133789,
            "sad": 0.1935090273618698,
            "surprise": 0.0024587709922343493,
            "neutral": 0.5648131370544434
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 918,
            "y": 57,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 81.33360290527344,
            "Man": 18.666400909423828
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.5460219979286194,
            "indian": 1.4199897050857544,
            "black": 0.14506842195987701,
            "white": 76.73812103271484,
            "middle eastern": 11.928290367126465,
            "latino hispanic": 9.222515106201172
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.010076700709760189,
            "disgust": 0.16614630818367004,
            "fear": 25.0738525390625,
            "happy": 38.19060516357422,
            "sad": 0.3688041567802429,
            "surprise": 0.00948007870465517,
            "neutral": 36.181034088134766
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 348,
            "y": 91,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.34746551513672,
            "Man": 0.6525280475616455
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.318166255950928,
            "indian": 21.124235153198242,
            "black": 45.77363967895508,
            "white": 2.575544595718384,
            "middle eastern": 2.5516340732574463,
            "latino hispanic": 20.65678596496582
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.02942904457449913,
            "disgust": 0.01216012891381979,
            "fear": 89.63497161865234,
            "happy": 3.7748446464538574,
            "sad": 4.676053047180176,
            "surprise": 0.007349890656769276,
            "neutral": 1.8651854991912842
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 36,
        "region": {
            "x": 748,
            "y": 98,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 85.64019775390625,
            "Man": 14.3597993850708
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.4922754168510437,
            "indian": 10.814931869506836,
            "black": 0.1711149662733078,
            "white": 15.11528491973877,
            "middle eastern": 61.18041229248047,
            "latino hispanic": 12.225979804992676
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.9166337251663208,
            "disgust": 28.672033309936523,
            "fear": 60.16266632080078,
            "happy": 0.7396243214607239,
            "sad": 6.132425785064697,
            "surprise": 0.2652982771396637,
            "neutral": 2.1113243103027344
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 26,
        "region": {
            "x": 930,
            "y": 145,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 16.899351119995117,
            "Man": 83.10064697265625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.8783882260322571,
            "indian": 1.6079447269439697,
            "black": 0.17579419910907745,
            "white": 65.72264862060547,
            "middle eastern": 17.432830810546875,
            "latino hispanic": 14.18239688873291
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 21.138181686401367,
            "disgust": 5.920011043548584,
            "fear": 55.091697692871094,
            "happy": 0.7502862811088562,
            "sad": 8.567839622497559,
            "surprise": 8.481040000915527,
            "neutral": 0.05094854161143303
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 25,
        "region": {
            "x": 573,
            "y": 74,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.06870826333761215,
            "Man": 99.93128967285156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.3269796669483185,
            "indian": 14.994799613952637,
            "black": 0.515045702457428,
            "white": 28.994415283203125,
            "middle eastern": 41.47078323364258,
            "latino hispanic": 13.697975158691406
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.03322330862283707,
            "disgust": 0.002078497549518943,
            "fear": 44.324771881103516,
            "happy": 4.316290378570557,
            "sad": 1.4828896522521973,
            "surprise": 0.018683942034840584,
            "neutral": 49.82206344604492
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 670,
            "y": 125,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.18177199363708496,
            "Man": 99.81822967529297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0011445716954767704,
            "indian": 0.0033431597985327244,
            "black": 3.071052560699172e-05,
            "white": 98.64073181152344,
            "middle eastern": 0.8761343359947205,
            "latino hispanic": 0.4786202907562256
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6954067945480347,
            "disgust": 56.607688903808594,
            "fear": 25.09261131286621,
            "happy": 0.0780826210975647,
            "sad": 15.661653518676758,
            "surprise": 0.009798127226531506,
            "neutral": 0.8547549843788147
        },
        "dominant_emotion": "disgust"
    },
    {
        "age": 30,
        "region": {
            "x": 221,
            "y": 107,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.85108947753906,
            "Man": 0.14891338348388672
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.3173283338546753,
            "indian": 5.958624839782715,
            "black": 0.5601622462272644,
            "white": 36.6590461730957,
            "middle eastern": 33.1058235168457,
            "latino hispanic": 22.399015426635742
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.3087992455402855e-06,
            "disgust": 8.085854830142125e-08,
            "fear": 0.0003022403398063034,
            "happy": 99.9817886352539,
            "sad": 0.013477378524839878,
            "surprise": 3.7396675907075405e-05,
            "neutral": 0.0043830485083162785
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 275,
            "y": 169,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 95.10153198242188,
            "Man": 4.898462772369385
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.9524121284484863,
            "indian": 4.610269069671631,
            "black": 0.7439460158348083,
            "white": 42.10908508300781,
            "middle eastern": 22.546253204345703,
            "latino hispanic": 27.038034439086914
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0008545073796994984,
            "disgust": 2.899296077885083e-06,
            "fear": 19.58053970336914,
            "happy": 70.92521667480469,
            "sad": 0.03173080459237099,
            "surprise": 0.11921150237321854,
            "neutral": 9.342448234558105
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 429,
            "y": 113,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.07984096556901932,
            "Man": 99.92015838623047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.808160781860352,
            "indian": 9.593042373657227,
            "black": 71.84394836425781,
            "white": 1.4507290124893188,
            "middle eastern": 0.8477120399475098,
            "latino hispanic": 8.45641040802002
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 62.345367431640625,
            "disgust": 0.003489359049126506,
            "fear": 1.1591095924377441,
            "happy": 2.8160552978515625,
            "sad": 8.045206069946289,
            "surprise": 0.12640982866287231,
            "neutral": 25.50436782836914
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 25,
        "region": {
            "x": 117,
            "y": 110,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.009721815586090088,
            "Man": 99.99027252197266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.750411033630371,
            "indian": 28.78929901123047,
            "black": 2.4830474853515625,
            "white": 21.462936401367188,
            "middle eastern": 31.900070190429688,
            "latino hispanic": 13.61424446105957
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 12.430194854736328,
            "disgust": 6.574015424121171e-05,
            "fear": 1.9426329135894775,
            "happy": 0.055536460131406784,
            "sad": 23.35614013671875,
            "surprise": 0.0007806348730809987,
            "neutral": 62.21464920043945
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 22,
        "region": {
            "x": 0,
            "y": 140,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 23.29019546508789,
            "Man": 76.70980072021484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.340249061584473,
            "indian": 13.373143196105957,
            "black": 11.787712097167969,
            "white": 17.891996383666992,
            "middle eastern": 17.525964736938477,
            "latino hispanic": 28.08094024658203
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.011685341596603394,
            "disgust": 0.025591693818569183,
            "fear": 65.2056655883789,
            "happy": 28.059303283691406,
            "sad": 2.6306917667388916,
            "surprise": 0.0022103548981249332,
            "neutral": 4.064857006072998
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 31,
        "region": {
            "x": 530,
            "y": 188,
            "w": 78,
            "h": 78,
            "left_eye": [
                581,
                216
            ],
            "right_eye": [
                554,
                219
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 97.90959167480469,
            "Man": 2.090407133102417
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 67.03922271728516,
            "indian": 8.208868026733398,
            "black": 3.3337130546569824,
            "white": 3.0760390758514404,
            "middle eastern": 1.3137131929397583,
            "latino hispanic": 17.028438568115234
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.2141122668981552,
            "disgust": 0.006534468848258257,
            "fear": 3.3056752681732178,
            "happy": 93.82144927978516,
            "sad": 1.6710309982299805,
            "surprise": 0.0021616520825773478,
            "neutral": 0.9790390133857727
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 815,
            "y": 144,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99929809570312,
            "Man": 0.0007079392671585083
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.6952422857284546,
            "indian": 2.443202018737793,
            "black": 0.2617919147014618,
            "white": 57.421993255615234,
            "middle eastern": 25.280826568603516,
            "latino hispanic": 13.896950721740723
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.007245495915412903,
            "disgust": 0.0001982880785362795,
            "fear": 3.0303542613983154,
            "happy": 96.28970336914062,
            "sad": 0.05170644074678421,
            "surprise": 0.009263976477086544,
            "neutral": 0.6115277409553528
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 738,
            "y": 201,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99798583984375,
            "Man": 0.002014517318457365
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 29.23652458190918,
            "indian": 11.62857437133789,
            "black": 5.169351577758789,
            "white": 6.006075382232666,
            "middle eastern": 3.169879674911499,
            "latino hispanic": 44.78959274291992
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0033364519476890564,
            "disgust": 0.0007534547476097941,
            "fear": 73.85720825195312,
            "happy": 23.374589920043945,
            "sad": 0.09154833853244781,
            "surprise": 0.0035820237826555967,
            "neutral": 2.6689839363098145
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 29,
        "region": {
            "x": 185,
            "y": 214,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.9188232421875,
            "Man": 0.08117824047803879
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.701788902282715,
            "indian": 23.593332290649414,
            "black": 9.48901653289795,
            "white": 18.467182159423828,
            "middle eastern": 17.558130264282227,
            "latino hispanic": 24.190542221069336
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0056244852021336555,
            "disgust": 0.0032121699769049883,
            "fear": 4.330174446105957,
            "happy": 94.86347198486328,
            "sad": 0.030497094616293907,
            "surprise": 0.010332558304071426,
            "neutral": 0.7566813826560974
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 947,
            "y": 218,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 11.862241744995117,
            "Man": 88.13775634765625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.500898838043213,
            "indian": 34.68571090698242,
            "black": 54.04589080810547,
            "white": 0.19660885632038116,
            "middle eastern": 0.16743019223213196,
            "latino hispanic": 7.403467655181885
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0556076355278492,
            "disgust": 0.0009751889738254249,
            "fear": 55.845279693603516,
            "happy": 42.381927490234375,
            "sad": 0.47022396326065063,
            "surprise": 0.11714957654476166,
            "neutral": 1.128842830657959
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 31,
        "region": {
            "x": 616,
            "y": 206,
            "w": 93,
            "h": 93,
            "left_eye": [
                675,
                240
            ],
            "right_eye": [
                642,
                245
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99737548828125,
            "Man": 0.0026182823348790407
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.007706023287028074,
            "indian": 0.019382717087864876,
            "black": 0.001104819937609136,
            "white": 87.75848388671875,
            "middle eastern": 6.144129753112793,
            "latino hispanic": 6.069197654724121
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.007208815310150385,
            "disgust": 0.0071692150086164474,
            "fear": 2.8648037910461426,
            "happy": 86.51923370361328,
            "sad": 8.111428260803223,
            "surprise": 4.24881000071764e-05,
            "neutral": 2.4901123046875
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 794,
            "y": 258,
            "w": 85,
            "h": 85,
            "left_eye": [
                850,
                290
            ],
            "right_eye": [
                818,
                288
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.96795654296875,
            "Man": 0.03204955905675888
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.04755973815918,
            "indian": 7.832489967346191,
            "black": 1.6204049587249756,
            "white": 30.35590362548828,
            "middle eastern": 20.375152587890625,
            "latino hispanic": 33.76849365234375
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.016641249880194664,
            "disgust": 0.0009020916768349707,
            "fear": 0.1359419822692871,
            "happy": 97.81981658935547,
            "sad": 0.9985306859016418,
            "surprise": 0.05969955027103424,
            "neutral": 0.9684563279151917
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 29,
            "y": 216,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.018678292632102966,
            "Man": 99.9813232421875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 17.182825088500977,
            "indian": 18.15146827697754,
            "black": 17.914648056030273,
            "white": 12.906818389892578,
            "middle eastern": 15.050128936767578,
            "latino hispanic": 18.794111251831055
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0007247428875416517,
            "disgust": 5.165119532080098e-08,
            "fear": 0.00011315174924675375,
            "happy": 10.478978157043457,
            "sad": 0.1491003781557083,
            "surprise": 0.0020897560752928257,
            "neutral": 89.3689956665039
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 504,
            "y": 372,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 70.54444885253906,
            "Man": 29.455554962158203
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.4780167043209076,
            "indian": 0.0011432726169005036,
            "black": 0.0003784186556003988,
            "white": 98.95035552978516,
            "middle eastern": 0.4244415760040283,
            "latino hispanic": 0.1456678807735443
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 86.68509674072266,
            "disgust": 0.8264929056167603,
            "fear": 3.2789790630340576,
            "happy": 6.007596969604492,
            "sad": 2.9439430236816406,
            "surprise": 0.24979831278324127,
            "neutral": 0.008099867030978203
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 28,
        "region": {
            "x": 326,
            "y": 245,
            "w": 88,
            "h": 88,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.9982681274414,
            "Man": 0.0017231735400855541
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 20.301044464111328,
            "indian": 7.211408615112305,
            "black": 3.3150720596313477,
            "white": 29.783525466918945,
            "middle eastern": 16.44141387939453,
            "latino hispanic": 22.94753646850586
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.007698989938944578,
            "disgust": 0.01476763840764761,
            "fear": 0.11255737394094467,
            "happy": 66.61434173583984,
            "sad": 24.71851348876953,
            "surprise": 0.0004104285326320678,
            "neutral": 8.531710624694824
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 467,
            "y": 272,
            "w": 93,
            "h": 93,
            "left_eye": [
                527,
                308
            ],
            "right_eye": [
                493,
                309
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 2.324065685272217,
            "Man": 97.67593383789062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.885174751281738,
            "indian": 12.272261619567871,
            "black": 4.292016506195068,
            "white": 18.957595825195312,
            "middle eastern": 17.137367248535156,
            "latino hispanic": 35.45558547973633
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 6.468317792496237e-08,
            "disgust": 2.143847321889325e-10,
            "fear": 4.704158982349327e-06,
            "happy": 99.9893798828125,
            "sad": 3.7531572161242366e-05,
            "surprise": 5.786567726318026e-06,
            "neutral": 0.010576997883617878
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 127,
            "y": 276,
            "w": 99,
            "h": 99,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.005187622271478176,
            "Man": 99.99481201171875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 23.731456756591797,
            "indian": 17.93772315979004,
            "black": 40.37709045410156,
            "white": 2.285994052886963,
            "middle eastern": 1.4298088550567627,
            "latino hispanic": 14.237921714782715
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 7.698684051371529e-11,
            "disgust": 3.49213618011382e-20,
            "fear": 7.865711933782021e-14,
            "happy": 99.8012924194336,
            "sad": 3.5029876221948086e-10,
            "surprise": 4.03955224825836e-09,
            "neutral": 0.19870752096176147
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 891,
            "y": 311,
            "w": 98,
            "h": 98,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 98.23884582519531,
            "Man": 1.7611548900604248
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 10.083535194396973,
            "indian": 9.623834609985352,
            "black": 3.1752970218658447,
            "white": 28.417062759399414,
            "middle eastern": 16.64948081970215,
            "latino hispanic": 32.05078887939453
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 7.07192293702974e-06,
            "disgust": 3.3403546595422995e-10,
            "fear": 6.5557592279219534e-06,
            "happy": 95.71429443359375,
            "sad": 0.0014003850519657135,
            "surprise": 0.0001759758306434378,
            "neutral": 4.284114360809326
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 692,
            "y": 310,
            "w": 116,
            "h": 116,
            "left_eye": [
                767,
                352
            ],
            "right_eye": [
                726,
                352
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.003968261647969484,
            "Man": 99.99603271484375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.03630676120519638,
            "indian": 74.1341552734375,
            "black": 0.11732064932584763,
            "white": 2.838850498199463,
            "middle eastern": 14.722363471984863,
            "latino hispanic": 8.151001930236816
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 0.000849585747346282,
            "disgust": 3.709609952551318e-09,
            "fear": 0.0023220679722726345,
            "happy": 0.034050602465867996,
            "sad": 0.8132269382476807,
            "surprise": 1.556410461489577e-05,
            "neutral": 99.1495361328125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 0,
            "y": 373,
            "w": 106,
            "h": 106,
            "left_eye": [
                65,
                415
            ],
            "right_eye": [
                28,
                413
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99995422363281,
            "Man": 4.80854396300856e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7211775183677673,
            "indian": 0.7583166360855103,
            "black": 0.061780769377946854,
            "white": 60.342952728271484,
            "middle eastern": 6.424576282501221,
            "latino hispanic": 31.691194534301758
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.007081982679665089,
            "disgust": 1.7223595813464776e-11,
            "fear": 3.636451765487436e-06,
            "happy": 99.7295913696289,
            "sad": 0.00020229272195138037,
            "surprise": 0.006103711202740669,
            "neutral": 0.2570182681083679
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 808,
            "y": 401,
            "w": 116,
            "h": 116,
            "left_eye": [
                885,
                446
            ],
            "right_eye": [
                844,
                444
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.99769592285156,
            "Man": 0.00229705311357975
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 21.957170486450195,
            "indian": 15.81717586517334,
            "black": 3.23976993560791,
            "white": 10.631682395935059,
            "middle eastern": 5.901498317718506,
            "latino hispanic": 42.45270538330078
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 6.370187747961609e-06,
            "disgust": 1.2496329304667597e-07,
            "fear": 0.00019432793487794697,
            "happy": 78.00434875488281,
            "sad": 0.019756648689508438,
            "surprise": 0.0013763804454356432,
            "neutral": 21.97430992126465
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 563,
            "y": 352,
            "w": 105,
            "h": 105,
            "left_eye": [
                634,
                391
            ],
            "right_eye": [
                595,
                394
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.14302696287631989,
            "Man": 99.85697174072266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.23458950221538544,
            "indian": 25.73721694946289,
            "black": 0.08812909573316574,
            "white": 24.239049911499023,
            "middle eastern": 26.75433921813965,
            "latino hispanic": 22.94668197631836
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.7495261772637605e-06,
            "disgust": 1.455947862272211e-11,
            "fear": 1.4313443898572586e-05,
            "happy": 3.3817787170410156,
            "sad": 0.01766970008611679,
            "surprise": 7.729952812951524e-06,
            "neutral": 96.60052490234375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 241,
            "y": 339,
            "w": 97,
            "h": 97,
            "left_eye": [
                305,
                376
            ],
            "right_eye": [
                269,
                375
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 99.9999771118164,
            "Man": 2.4832161216181703e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 18.417537689208984,
            "indian": 6.69339656829834,
            "black": 0.9545908570289612,
            "white": 3.365802764892578,
            "middle eastern": 1.0809898376464844,
            "latino hispanic": 69.48768615722656
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 7.184667305537573e-10,
            "disgust": 1.8258443687666685e-16,
            "fear": 4.382393059554346e-10,
            "happy": 99.95585632324219,
            "sad": 2.8104267357775825e-08,
            "surprise": 9.006691357171803e-07,
            "neutral": 0.04414323717355728
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 111,
            "y": 416,
            "w": 127,
            "h": 127,
            "left_eye": [
                194,
                462
            ],
            "right_eye": [
                149,
                467
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.9998550415039,
            "Man": 0.00013783457688987255
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.537673950195312,
            "indian": 7.098172664642334,
            "black": 1.114136815071106,
            "white": 26.319622039794922,
            "middle eastern": 18.075319290161133,
            "latino hispanic": 38.85507583618164
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.08666634559631348,
            "disgust": 5.1786701078526676e-05,
            "fear": 0.02543637342751026,
            "happy": 0.18218590319156647,
            "sad": 1.7015197277069092,
            "surprise": 0.01576383039355278,
            "neutral": 97.9883804321289
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 380,
            "y": 414,
            "w": 119,
            "h": 119,
            "left_eye": [
                460,
                458
            ],
            "right_eye": [
                418,
                458
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 93.77336120605469,
            "Man": 6.226635932922363
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 38.40325927734375,
            "indian": 20.783344268798828,
            "black": 1.0860768556594849,
            "white": 4.389461517333984,
            "middle eastern": 2.178774356842041,
            "latino hispanic": 33.15909194946289
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0003433694364503026,
            "disgust": 2.5734675546118524e-06,
            "fear": 0.0002952693903353065,
            "happy": 98.37541961669922,
            "sad": 0.003803282743319869,
            "surprise": 0.240298330783844,
            "neutral": 1.3798402547836304
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 0,
            "y": 536,
            "w": 126,
            "h": 126,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99995422363281,
            "Man": 5.116315878694877e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0040668584406375885,
            "indian": 0.011737358756363392,
            "black": 0.0001040570714394562,
            "white": 92.96915435791016,
            "middle eastern": 5.617072105407715,
            "latino hispanic": 1.3978700637817383
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5186124444007874,
            "disgust": 9.151206540991552e-06,
            "fear": 0.011451239697635174,
            "happy": 89.03787994384766,
            "sad": 0.6087347865104675,
            "surprise": 0.0016449301037937403,
            "neutral": 9.82166576385498
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 939,
            "y": 534,
            "w": 84,
            "h": 119,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 95.71495819091797,
            "Man": 4.285040378570557
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.0689468383789,
            "indian": 0.09424383193254471,
            "black": 0.001693084486760199,
            "white": 0.17082084715366364,
            "middle eastern": 0.003597567556425929,
            "latino hispanic": 0.6606983542442322
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0007184751448221505,
            "disgust": 7.998137781952369e-22,
            "fear": 1.4470496125795762e-06,
            "happy": 2.0694214981631376e-06,
            "sad": 0.8863252401351929,
            "surprise": 1.8211225306626402e-15,
            "neutral": 99.11295318603516
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 258,
            "y": 520,
            "w": 123,
            "h": 123,
            "left_eye": [
                340,
                565
            ],
            "right_eye": [
                297,
                568
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9991455078125,
            "Man": 0.0008640426094643772
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00013505762035492808,
            "indian": 4.1119870729744434e-05,
            "black": 3.319085521980014e-07,
            "white": 99.7795639038086,
            "middle eastern": 0.10861498862504959,
            "latino hispanic": 0.1116301566362381
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6223556542627193e-07,
            "disgust": 2.060762889814164e-14,
            "fear": 1.1362087803945542e-07,
            "happy": 99.96728515625,
            "sad": 1.0893850088677937e-07,
            "surprise": 8.952645293902606e-05,
            "neutral": 0.03262009099125862
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 704,
            "y": 511,
            "w": 124,
            "h": 124,
            "left_eye": [
                787,
                560
            ],
            "right_eye": [
                743,
                557
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.97154235839844,
            "Man": 0.02846452035009861
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.05361535772681236,
            "indian": 0.17756237089633942,
            "black": 0.006885257083922625,
            "white": 76.2021713256836,
            "middle eastern": 13.823466300964355,
            "latino hispanic": 9.736303329467773
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.591400738718221e-06,
            "disgust": 4.197622729407158e-07,
            "fear": 8.089547918643802e-05,
            "happy": 99.90833282470703,
            "sad": 0.02465454861521721,
            "surprise": 2.6395597160444595e-05,
            "neutral": 0.06691331416368484
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 519,
            "y": 528,
            "w": 118,
            "h": 118,
            "left_eye": [
                603,
                571
            ],
            "right_eye": [
                552,
                569
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.95404815673828,
            "Man": 0.04596351087093353
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 20.20366859436035,
            "indian": 27.31637954711914,
            "black": 37.025211334228516,
            "white": 1.1875863075256348,
            "middle eastern": 0.7304539084434509,
            "latino hispanic": 13.536698341369629
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 5.507257427872503e-10,
            "disgust": 1.758493338059131e-18,
            "fear": 5.096093902770549e-13,
            "happy": 99.82801818847656,
            "sad": 1.6564655425099772e-08,
            "surprise": 0.0001576675131218508,
            "neutral": 0.17183148860931396
        },
        "dominant_emotion": "happy"
    }
]
let nursing_assistant_data4 = [
    {
        "age": 26,
        "region": {
            "x": 298,
            "y": 137,
            "w": 97,
            "h": 97,
            "left_eye": [
                360,
                172
            ],
            "right_eye": [
                326,
                172
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.000308495742501691,
            "Man": 99.99968719482422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.070991650223732,
            "indian": 8.808069229125977,
            "black": 0.038898393511772156,
            "white": 39.01163101196289,
            "middle eastern": 38.412391662597656,
            "latino hispanic": 13.658023834228516
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0001835946022765711,
            "disgust": 2.467860213073436e-06,
            "fear": 0.0005100745474919677,
            "happy": 97.50972747802734,
            "sad": 0.012033667415380478,
            "surprise": 7.397130684694275e-05,
            "neutral": 2.4774720668792725
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 499,
            "y": 132,
            "w": 113,
            "h": 113,
            "left_eye": [
                570,
                181
            ],
            "right_eye": [
                534,
                176
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.10094460844993591,
            "Man": 99.89906311035156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.706304669380188,
            "indian": 41.06979751586914,
            "black": 2.197913646697998,
            "white": 13.267072677612305,
            "middle eastern": 21.048295974731445,
            "latino hispanic": 21.710615158081055
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 4.473631776136244e-08,
            "disgust": 6.696633485403337e-19,
            "fear": 1.3074395353255414e-13,
            "happy": 99.98898315429688,
            "sad": 1.0992027199563381e-07,
            "surprise": 1.3275882615459977e-09,
            "neutral": 0.011017431505024433
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 63,
            "y": 158,
            "w": 105,
            "h": 105,
            "left_eye": [
                131,
                198
            ],
            "right_eye": [
                94,
                202
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.0096292020753026,
            "Man": 99.99037170410156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.040986448526382446,
            "indian": 3.4989702701568604,
            "black": 0.00544486241415143,
            "white": 30.289106369018555,
            "middle eastern": 56.29784393310547,
            "latino hispanic": 9.86765193939209
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 5.986386053535853e-09,
            "disgust": 1.0523223934496943e-15,
            "fear": 1.5213406090452963e-09,
            "happy": 99.84124755859375,
            "sad": 6.227746496278996e-08,
            "surprise": 2.556731124059297e-05,
            "neutral": 0.15873470902442932
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 815,
            "y": 187,
            "w": 94,
            "h": 94,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.994873046875,
            "Man": 0.0051270704716444016
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.9773274660110474,
            "indian": 3.143066883087158,
            "black": 0.7181925773620605,
            "white": 46.88946533203125,
            "middle eastern": 19.783296585083008,
            "latino hispanic": 27.48865509033203
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.001534339040517807,
            "disgust": 2.396986383246258e-05,
            "fear": 0.01070998702198267,
            "happy": 99.11942291259766,
            "sad": 0.02732810378074646,
            "surprise": 0.0003677436907310039,
            "neutral": 0.840612530708313
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 591,
            "y": 301,
            "w": 97,
            "h": 97,
            "left_eye": [
                655,
                339
            ],
            "right_eye": [
                620,
                340
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99925994873047,
            "Man": 0.0007388485828414559
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.266270637512207,
            "indian": 3.383868455886841,
            "black": 0.2124388962984085,
            "white": 42.73322677612305,
            "middle eastern": 33.1213264465332,
            "latino hispanic": 19.282869338989258
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.03048616275191307,
            "disgust": 6.388768269971479e-08,
            "fear": 0.0005316044553183019,
            "happy": 3.7752463817596436,
            "sad": 0.1583820879459381,
            "surprise": 0.0009323161211796105,
            "neutral": 96.034423828125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 289,
            "y": 301,
            "w": 102,
            "h": 102,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9995346069336,
            "Man": 0.0004696205141954124
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.6408698558807373,
            "indian": 1.387993574142456,
            "black": 0.07661416381597519,
            "white": 54.22998046875,
            "middle eastern": 19.524551391601562,
            "latino hispanic": 24.139986038208008
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.5812078402177576e-07,
            "disgust": 2.933078042596793e-13,
            "fear": 1.3885975924665672e-08,
            "happy": 99.26105499267578,
            "sad": 2.604123210403486e-07,
            "surprise": 8.949327821028419e-06,
            "neutral": 0.7389395236968994
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 0,
            "y": 311,
            "w": 85,
            "h": 85,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 79.96638488769531,
            "Man": 20.033611297607422
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 19.363136291503906,
            "indian": 7.015388488769531,
            "black": 2.466271162033081,
            "white": 35.77085494995117,
            "middle eastern": 17.128421783447266,
            "latino hispanic": 18.25592803955078
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.574963193386793e-05,
            "disgust": 2.617529526460771e-09,
            "fear": 0.01520081888884306,
            "happy": 86.69380187988281,
            "sad": 12.69584846496582,
            "surprise": 4.3886236866796935e-09,
            "neutral": 0.5951151251792908
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 190,
            "y": 240,
            "w": 101,
            "h": 101,
            "left_eye": [
                256,
                279
            ],
            "right_eye": [
                220,
                277
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 100.0,
            "Man": 5.627389327855781e-06
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.7077817321696784e-07,
            "indian": 3.7372055317064223e-07,
            "black": 8.22094545216423e-11,
            "white": 99.97391510009766,
            "middle eastern": 0.020809223875403404,
            "latino hispanic": 0.005277577787637711
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.001155512291006744,
            "disgust": 1.0009302542357545e-07,
            "fear": 0.0019683840218931437,
            "happy": 99.7024917602539,
            "sad": 0.010198492556810379,
            "surprise": 0.00354360812343657,
            "neutral": 0.28063541650772095
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 670,
            "y": 235,
            "w": 89,
            "h": 89,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99127197265625,
            "Man": 0.008723888546228409
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 10.025057792663574,
            "indian": 7.994071960449219,
            "black": 3.5103321075439453,
            "white": 32.54305648803711,
            "middle eastern": 19.471477508544922,
            "latino hispanic": 26.456005096435547
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.004890808369964361,
            "disgust": 0.005620907060801983,
            "fear": 0.08074415475130081,
            "happy": 96.20426940917969,
            "sad": 3.5465078353881836,
            "surprise": 9.43794759677985e-07,
            "neutral": 0.15797054767608643
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 759,
            "y": 350,
            "w": 101,
            "h": 101,
            "left_eye": [
                827,
                387
            ],
            "right_eye": [
                790,
                393
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 99.29867553710938,
            "Man": 0.7013255953788757
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.8920294046401978,
            "indian": 4.984561920166016,
            "black": 0.20274777710437775,
            "white": 32.71271514892578,
            "middle eastern": 35.560359954833984,
            "latino hispanic": 25.6475830078125
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.6220456089399704e-08,
            "disgust": 1.231698391283148e-13,
            "fear": 2.567664481034626e-08,
            "happy": 99.90476989746094,
            "sad": 4.2099050915567204e-05,
            "surprise": 3.948448284063488e-05,
            "neutral": 0.09514890611171722
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 465,
            "y": 338,
            "w": 102,
            "h": 102,
            "left_eye": [
                536,
                380
            ],
            "right_eye": [
                495,
                379
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.95915222167969,
            "Man": 0.04085271432995796
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.6977012157440186,
            "indian": 10.303139686584473,
            "black": 81.48482513427734,
            "white": 0.17690034210681915,
            "middle eastern": 0.12925826013088226,
            "latino hispanic": 6.2081756591796875
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.1622751650008922e-09,
            "disgust": 3.1519917832631664e-18,
            "fear": 3.3754817517495095e-12,
            "happy": 99.99200439453125,
            "sad": 7.056943918115621e-09,
            "surprise": 5.305294689605944e-05,
            "neutral": 0.007947544567286968
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 103,
            "y": 357,
            "w": 102,
            "h": 102,
            "left_eye": [
                167,
                397
            ],
            "right_eye": [
                127,
                397
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99201202392578,
            "Man": 0.00798689667135477
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.29846134781837463,
            "indian": 0.18425454199314117,
            "black": 0.005567649379372597,
            "white": 88.65164947509766,
            "middle eastern": 6.328581809997559,
            "latino hispanic": 4.531486988067627
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.0833818137621094e-11,
            "disgust": 5.4841598156232904e-17,
            "fear": 3.828723362658826e-12,
            "happy": 99.97785949707031,
            "sad": 3.759227240607288e-08,
            "surprise": 1.4669037096126658e-09,
            "neutral": 0.02214674837887287
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 906,
            "y": 313,
            "w": 95,
            "h": 95,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 100.0,
            "Man": 4.3222036083534476e-07
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.419387102127075,
            "indian": 2.4341373443603516,
            "black": 0.3077598214149475,
            "white": 57.379554748535156,
            "middle eastern": 20.303537368774414,
            "latino hispanic": 17.155620574951172
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.9432903829729185e-06,
            "disgust": 2.1989569276570364e-08,
            "fear": 0.0008223922923207283,
            "happy": 99.96505737304688,
            "sad": 0.0007662484422326088,
            "surprise": 4.690717105404474e-05,
            "neutral": 0.033301129937171936
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 22,
        "region": {
            "x": 498,
            "y": 461,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 27.587875366210938,
            "Man": 72.41212463378906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 14.112201690673828,
            "indian": 1.2063144445419312,
            "black": 0.9778488874435425,
            "white": 65.88131713867188,
            "middle eastern": 8.312602996826172,
            "latino hispanic": 9.509716033935547
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.18190531432628632,
            "disgust": 8.160164384207746e-07,
            "fear": 21.854124069213867,
            "happy": 0.00451902998611331,
            "sad": 58.86983108520508,
            "surprise": 0.0027962643653154373,
            "neutral": 19.086830139160156
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 77,
            "y": 927,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.99,
        "gender": {
            "Woman": 69.49162292480469,
            "Man": 30.50837516784668
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.19588077068328857,
            "indian": 0.143599733710289,
            "black": 0.022057179361581802,
            "white": 89.50619506835938,
            "middle eastern": 7.296974182128906,
            "latino hispanic": 2.835294485092163
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.006322062108665705,
            "disgust": 1.4887145682873637e-10,
            "fear": 9.049348831176758,
            "happy": 2.1371490955352783,
            "sad": 2.72674298286438,
            "surprise": 3.6245617866516113,
            "neutral": 82.45587158203125
        },
        "dominant_emotion": "neutral"
    }
]

console.log("Microsoft Results for Nursing Assistant:");
const data = nursing_assistant_data.concat(nursing_assistant_data2, nursing_assistant_data3, nursing_assistant_data4);
console.log(processData(data));