const { processData } = require('../../data_processing.js');

let postal_service_clerk_data = [
    {
        "age": 22,
        "region": {
            "x": 519,
            "y": 129,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.14665651321411133,
            "Man": 99.85334014892578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.76532745361328,
            "indian": 0.057283107191324234,
            "black": 0.0006752786575816572,
            "white": 0.01738276146352291,
            "middle eastern": 3.44640611729119e-05,
            "latino hispanic": 0.1592923104763031
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0020780276972800493,
            "disgust": 2.3196933796043595e-07,
            "fear": 0.018712596967816353,
            "happy": 97.39451599121094,
            "sad": 0.0012609092518687248,
            "surprise": 0.025483325123786926,
            "neutral": 2.557950258255005
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 600,
            "y": 149,
            "w": 80,
            "h": 80,
            "left_eye": [
                655,
                180
            ],
            "right_eye": [
                624,
                181
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.014278771355748177,
            "Man": 99.9857177734375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.329300403594971,
            "indian": 11.54572868347168,
            "black": 11.563742637634277,
            "white": 25.219635009765625,
            "middle eastern": 21.538562774658203,
            "latino hispanic": 23.803035736083984
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.128288042641429e-10,
            "disgust": 3.2198372889699563e-21,
            "fear": 7.512341032549902e-16,
            "happy": 99.96725463867188,
            "sad": 6.330719060088086e-09,
            "surprise": 2.56284975880261e-11,
            "neutral": 0.03274962678551674
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 736,
            "y": 103,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.3705469071865082,
            "Man": 99.62945556640625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 20.647132873535156,
            "indian": 15.392541885375977,
            "black": 14.572864532470703,
            "white": 12.66195011138916,
            "middle eastern": 15.86489486694336,
            "latino hispanic": 20.860614776611328
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.2078111320734024,
            "disgust": 0.00092419603606686,
            "fear": 0.014817940071225166,
            "happy": 96.65917205810547,
            "sad": 0.14957857131958008,
            "surprise": 0.26375821232795715,
            "neutral": 2.7039425373077393
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 409,
            "y": 108,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.44720935821533203,
            "Man": 99.55279541015625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.7823907136917114,
            "indian": 1.0218626260757446,
            "black": 0.23107126355171204,
            "white": 69.99481964111328,
            "middle eastern": 14.186604499816895,
            "latino hispanic": 12.783254623413086
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.2996653914451599,
            "disgust": 1.4705106877954677e-05,
            "fear": 0.7894100546836853,
            "happy": 16.089296340942383,
            "sad": 16.578115463256836,
            "surprise": 0.02129671722650528,
            "neutral": 66.22220611572266
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 1,
            "y": 172,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 73.18373107910156,
            "Man": 26.81626319885254
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 32.176116943359375,
            "indian": 6.58173131942749,
            "black": 2.4259181022644043,
            "white": 27.240503311157227,
            "middle eastern": 11.122330665588379,
            "latino hispanic": 20.453397750854492
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 6.284071423579007e-05,
            "disgust": 6.23053210802027e-07,
            "fear": 0.011135815642774105,
            "happy": 99.97791290283203,
            "sad": 0.0002241423208033666,
            "surprise": 4.099732905160636e-05,
            "neutral": 0.010621360503137112
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 863,
            "y": 143,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.8554442524909973,
            "Man": 99.1445541381836
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 24.192604064941406,
            "indian": 22.6251163482666,
            "black": 24.79328155517578,
            "white": 2.365250587463379,
            "middle eastern": 1.8975939750671387,
            "latino hispanic": 24.126157760620117
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.008855747058987617,
            "disgust": 1.2413681815814925e-07,
            "fear": 0.004073695745319128,
            "happy": 98.40906524658203,
            "sad": 0.002141993260011077,
            "surprise": 0.1301334947347641,
            "neutral": 1.4457389116287231
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 278,
            "y": 144,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 8.053468704223633,
            "Man": 91.946533203125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.99974822998047,
            "indian": 7.119088695617393e-05,
            "black": 4.4005793453649744e-10,
            "white": 1.761156227075844e-06,
            "middle eastern": 9.64528587207858e-13,
            "latino hispanic": 0.00018407328752800822
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 9.579574543749914e-05,
            "disgust": 1.3568013912390597e-07,
            "fear": 8.101174898911268e-06,
            "happy": 97.39817810058594,
            "sad": 0.003057456575334072,
            "surprise": 0.0007107954588718712,
            "neutral": 2.597959041595459
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 184,
            "y": 121,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 0.827114462852478,
            "Man": 99.17288208007812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.19916373491287231,
            "indian": 0.7541505694389343,
            "black": 0.05387848988175392,
            "white": 76.59697723388672,
            "middle eastern": 13.377010345458984,
            "latino hispanic": 9.018817901611328
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.061453089118003845,
            "disgust": 0.003468081820756197,
            "fear": 1.0204075574874878,
            "happy": 96.13050079345703,
            "sad": 1.7776167392730713,
            "surprise": 0.003924462012946606,
            "neutral": 1.0026284456253052
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 76,
            "y": 147,
            "w": 82,
            "h": 82,
            "left_eye": [
                131,
                178
            ],
            "right_eye": [
                102,
                179
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.017260676249861717,
            "Man": 99.98274230957031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9554286599159241,
            "indian": 5.937100887298584,
            "black": 1.3796982765197754,
            "white": 45.14657211303711,
            "middle eastern": 26.666271209716797,
            "latino hispanic": 19.91493034362793
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.465600563387852e-06,
            "disgust": 4.4358462215898786e-13,
            "fear": 1.1611916761467e-07,
            "happy": 99.92326354980469,
            "sad": 1.812001755752135e-05,
            "surprise": 0.007365910802036524,
            "neutral": 0.06934907287359238
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 225,
            "y": 203,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.96472930908203,
            "Man": 0.03527291864156723
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 79.88033294677734,
            "indian": 11.645600318908691,
            "black": 1.313362956047058,
            "white": 0.303021103143692,
            "middle eastern": 0.02415604516863823,
            "latino hispanic": 6.833526134490967
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 6.299734650383471e-06,
            "disgust": 1.1840793970319119e-11,
            "fear": 2.595000069050002e-06,
            "happy": 99.99658966064453,
            "sad": 4.1100256567006e-06,
            "surprise": 0.0027657519094645977,
            "neutral": 0.0006372711504809558
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 819,
            "y": 209,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 2.80536150932312,
            "Man": 97.19464111328125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 21.295166015625,
            "indian": 21.163673400878906,
            "black": 29.37482261657715,
            "white": 5.146303176879883,
            "middle eastern": 4.451308727264404,
            "latino hispanic": 18.56873321533203
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.23075509071350098,
            "disgust": 1.0121407285623718e-06,
            "fear": 0.16315507888793945,
            "happy": 16.27418327331543,
            "sad": 14.854658126831055,
            "surprise": 0.0028188435826450586,
            "neutral": 68.47442626953125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 391,
            "y": 242,
            "w": 84,
            "h": 84,
            "left_eye": [
                451,
                276
            ],
            "right_eye": [
                415,
                275
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 94.54777526855469,
            "Man": 5.452223777770996
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99942779541016,
            "indian": 0.00015691165754105896,
            "black": 1.329166110508595e-09,
            "white": 1.1182502021256369e-05,
            "middle eastern": 9.104787063174413e-11,
            "latino hispanic": 0.00040347909089177847
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.005639903713017702,
            "disgust": 2.592346845631255e-06,
            "fear": 0.00021241334616206586,
            "happy": 0.9887474775314331,
            "sad": 0.12616506218910217,
            "surprise": 0.057508137077093124,
            "neutral": 98.82173156738281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 535,
            "y": 255,
            "w": 103,
            "h": 103,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.2014840692281723,
            "Man": 99.79851531982422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2863391637802124,
            "indian": 1.582912564277649,
            "black": 0.09347967803478241,
            "white": 67.21444702148438,
            "middle eastern": 24.851055145263672,
            "latino hispanic": 5.971768856048584
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.6210060119628906,
            "disgust": 1.9356255506863818e-05,
            "fear": 0.32113519310951233,
            "happy": 65.13259887695312,
            "sad": 0.3958035111427307,
            "surprise": 1.090727686882019,
            "neutral": 30.438701629638672
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 956,
            "y": 271,
            "w": 67,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 97.86427307128906,
            "Man": 2.135737657546997
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 83.24940490722656,
            "indian": 4.3083343505859375,
            "black": 0.9170950055122375,
            "white": 3.7062089443206787,
            "middle eastern": 0.9985780119895935,
            "latino hispanic": 6.82037353515625
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.6945443099002375e-10,
            "disgust": 5.690096593100143e-20,
            "fear": 1.740997076322623e-13,
            "happy": 99.78616333007812,
            "sad": 9.031154296623711e-11,
            "surprise": 1.1030966561520472e-05,
            "neutral": 0.21381396055221558
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 38,
        "region": {
            "x": 746,
            "y": 268,
            "w": 101,
            "h": 101,
            "left_eye": [
                816,
                309
            ],
            "right_eye": [
                779,
                311
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 4.061629772186279,
            "Man": 95.93836975097656
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 44.24074172973633,
            "indian": 2.607412099838257,
            "black": 1.4567359685897827,
            "white": 23.539247512817383,
            "middle eastern": 4.785841464996338,
            "latino hispanic": 23.37002182006836
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0010760969016700983,
            "disgust": 8.559019079257268e-06,
            "fear": 0.0030380291864275932,
            "happy": 98.64942932128906,
            "sad": 0.09846542775630951,
            "surprise": 0.018743719905614853,
            "neutral": 1.2292331457138062
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 0,
            "y": 291,
            "w": 92,
            "h": 92,
            "left_eye": [
                65,
                327
            ],
            "right_eye": [
                29,
                325
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99946594238281,
            "Man": 0.0005352571606636047
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99845123291016,
            "indian": 0.0008844998083077371,
            "black": 8.408633789258602e-09,
            "white": 3.5267387374915415e-06,
            "middle eastern": 3.3403335653048316e-11,
            "latino hispanic": 0.0006617165054194629
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.012620734982192516,
            "disgust": 1.884682205854915e-07,
            "fear": 0.0008371902513317764,
            "happy": 44.37046813964844,
            "sad": 0.230387344956398,
            "surprise": 0.5232055187225342,
            "neutral": 54.86248779296875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 144,
            "y": 284,
            "w": 104,
            "h": 104,
            "left_eye": [
                215,
                323
            ],
            "right_eye": [
                175,
                328
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.2314710021018982,
            "Man": 99.7685317993164
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00016346665506716818,
            "indian": 0.0010665709851309657,
            "black": 99.9986801147461,
            "white": 1.0700021135789939e-07,
            "middle eastern": 4.920937612951093e-08,
            "latino hispanic": 9.823215805226937e-05
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.010770770721137524,
            "disgust": 5.551961113070547e-09,
            "fear": 0.0012474838877096772,
            "happy": 47.925167083740234,
            "sad": 0.07517696171998978,
            "surprise": 0.00591275654733181,
            "neutral": 51.98172378540039
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 658,
            "y": 347,
            "w": 127,
            "h": 127,
            "left_eye": [
                741,
                397
            ],
            "right_eye": [
                694,
                403
            ]
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.018825119361281395,
            "Man": 99.98118591308594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.387320633260817e-27,
            "indian": 1.6772994322072588e-21,
            "black": 100.0,
            "white": 1.533000251590362e-36,
            "middle eastern": 1.4749019240023955e-36,
            "latino hispanic": 1.1931208112296044e-25
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.07500378042459488,
            "disgust": 7.935481676213385e-07,
            "fear": 0.1088629737496376,
            "happy": 99.36045837402344,
            "sad": 0.0011931140907108784,
            "surprise": 0.4142991304397583,
            "neutral": 0.04017920419573784
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 44,
        "region": {
            "x": 333,
            "y": 327,
            "w": 133,
            "h": 133,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.14901983737945557,
            "Man": 99.85098266601562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.003151577664539218,
            "indian": 0.0141110485419631,
            "black": 0.0003219713980797678,
            "white": 93.5389633178711,
            "middle eastern": 4.228269577026367,
            "latino hispanic": 2.215191602706909
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.41403573751449585,
            "disgust": 3.4627130052200528e-09,
            "fear": 0.0011594889219850302,
            "happy": 99.22010803222656,
            "sad": 0.16822491586208344,
            "surprise": 0.011238821782171726,
            "neutral": 0.18523332476615906
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 176,
            "y": 389,
            "w": 130,
            "h": 130,
            "left_eye": [
                259,
                437
            ],
            "right_eye": [
                213,
                444
            ]
        },
        "face_confidence": 0.86,
        "gender": {
            "Woman": 0.0036181139294058084,
            "Man": 99.99637603759766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.15916995704174042,
            "indian": 0.6402988433837891,
            "black": 0.0327581986784935,
            "white": 71.52784729003906,
            "middle eastern": 16.867313385009766,
            "latino hispanic": 10.772611618041992
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 32.617706298828125,
            "disgust": 2.261272413761617e-08,
            "fear": 0.048194412142038345,
            "happy": 11.242705345153809,
            "sad": 1.1623080968856812,
            "surprise": 0.006606195587664843,
            "neutral": 54.92247772216797
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 911,
            "y": 407,
            "w": 112,
            "h": 120,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99412536621094,
            "Man": 0.005872489418834448
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 73.86709594726562,
            "indian": 6.904712677001953,
            "black": 1.4190412759780884,
            "white": 5.685736656188965,
            "middle eastern": 2.6785285472869873,
            "latino hispanic": 9.444887161254883
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0006340582622215152,
            "disgust": 6.198265511958567e-11,
            "fear": 0.0011629307409748435,
            "happy": 99.13800811767578,
            "sad": 0.00013103798846714199,
            "surprise": 0.3168325126171112,
            "neutral": 0.5432285666465759
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 0,
            "y": 458,
            "w": 117,
            "h": 117,
            "left_eye": [
                64,
                505
            ],
            "right_eye": [
                22,
                504
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99932861328125,
            "Man": 0.0006650633877143264
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 97.80765533447266,
            "indian": 0.5614052414894104,
            "black": 0.017194561660289764,
            "white": 0.2657819092273712,
            "middle eastern": 0.0024278543423861265,
            "latino hispanic": 1.3455363512039185
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.03722667321562767,
            "disgust": 4.717234787676716e-06,
            "fear": 0.11170472949743271,
            "happy": 90.50435638427734,
            "sad": 0.09037776291370392,
            "surprise": 0.3663930296897888,
            "neutral": 8.889935493469238
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 439,
            "y": 510,
            "w": 153,
            "h": 153,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0005685979849658906,
            "Man": 99.99942779541016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.005427029449492693,
            "indian": 0.9430497884750366,
            "black": 0.005866647232323885,
            "white": 60.88642501831055,
            "middle eastern": 32.6129035949707,
            "latino hispanic": 5.546332836151123
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.115921233780682e-06,
            "disgust": 4.217314592242914e-18,
            "fear": 5.308989869945435e-08,
            "happy": 99.90770721435547,
            "sad": 3.5040071111325233e-07,
            "surprise": 4.6545963414246216e-05,
            "neutral": 0.09224838763475418
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 92,
            "y": 551,
            "w": 144,
            "h": 144,
            "left_eye": [
                191,
                610
            ],
            "right_eye": [
                139,
                604
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.90230560302734,
            "Man": 0.09769277274608612
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.40386849641799927,
            "indian": 1.4427119493484497,
            "black": 0.11490004509687424,
            "white": 56.639564514160156,
            "middle eastern": 19.768451690673828,
            "latino hispanic": 21.630502700805664
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.761930323862515e-10,
            "disgust": 3.056401187600463e-23,
            "fear": 5.387075546186963e-16,
            "happy": 99.95255279541016,
            "sad": 2.8748105783925337e-13,
            "surprise": 9.095531439129445e-09,
            "neutral": 0.04743984341621399
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 797,
            "y": 562,
            "w": 144,
            "h": 144,
            "left_eye": [
                898,
                621
            ],
            "right_eye": [
                845,
                621
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.85496520996094,
            "Man": 0.14502860605716705
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99480438232422,
            "indian": 0.002206171629950404,
            "black": 2.381169927900828e-08,
            "white": 1.575490750838071e-05,
            "middle eastern": 2.706024571086374e-10,
            "latino hispanic": 0.002976896008476615
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.000213006540434435,
            "disgust": 2.0751582743838703e-11,
            "fear": 0.004085359163582325,
            "happy": 76.37189483642578,
            "sad": 0.0003331154875922948,
            "surprise": 1.8634066581726074,
            "neutral": 21.760066986083984
        },
        "dominant_emotion": "happy"
    }
]
let postal_service_clerk_data2 = [
    {
        "age": 31,
        "region": {
            "x": 158,
            "y": 29,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.24044159054756165,
            "Man": 99.75955963134766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 33.97736358642578,
            "indian": 10.105316162109375,
            "black": 26.289531707763672,
            "white": 4.786723613739014,
            "middle eastern": 3.564805746078491,
            "latino hispanic": 21.276264190673828
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.3543953895568848,
            "disgust": 0.006482302211225033,
            "fear": 11.320651054382324,
            "happy": 0.08608675748109818,
            "sad": 9.821196556091309,
            "surprise": 0.08988355845212936,
            "neutral": 77.32130432128906
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 782,
            "y": 28,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 12.113661766052246,
            "Man": 87.88633728027344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.091515292183658e-09,
            "indian": 2.677723598409898e-09,
            "black": 2.002752824692422e-11,
            "white": 99.99929809570312,
            "middle eastern": 0.00035305143683217466,
            "latino hispanic": 0.0003487985231913626
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 17.54306983947754,
            "disgust": 0.24530494213104248,
            "fear": 17.541452407836914,
            "happy": 0.058658450841903687,
            "sad": 32.15998840332031,
            "surprise": 0.007767621893435717,
            "neutral": 32.44375991821289
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 897,
            "y": 34,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 1.570193886756897,
            "Man": 98.42980194091797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 21.984893798828125,
            "indian": 12.095518112182617,
            "black": 14.360916137695312,
            "white": 14.089621543884277,
            "middle eastern": 12.92454719543457,
            "latino hispanic": 24.54450798034668
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 8.708250045776367,
            "disgust": 0.03477397933602333,
            "fear": 15.081069946289062,
            "happy": 0.4860641062259674,
            "sad": 15.049460411071777,
            "surprise": 0.024995476007461548,
            "neutral": 60.61538314819336
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 42,
        "region": {
            "x": 273,
            "y": 36,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.2467857152223587,
            "Man": 99.75321197509766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.100645542144775,
            "indian": 14.641857147216797,
            "black": 2.7397425174713135,
            "white": 23.384275436401367,
            "middle eastern": 34.35833740234375,
            "latino hispanic": 20.775142669677734
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 7.513350486755371,
            "disgust": 2.9609150686837893e-08,
            "fear": 3.1422278881073,
            "happy": 0.00040246910066343844,
            "sad": 16.024398803710938,
            "surprise": 0.0005668048397637904,
            "neutral": 73.31906127929688
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 603,
            "y": 50,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 94.99210357666016,
            "Man": 5.007902145385742
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 20.56985092163086,
            "indian": 10.271349906921387,
            "black": 6.490782737731934,
            "white": 14.637027740478516,
            "middle eastern": 9.27217960357666,
            "latino hispanic": 38.758811950683594
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.05777614563703537,
            "disgust": 0.008335147053003311,
            "fear": 1.3974215984344482,
            "happy": 1.8146418333053589,
            "sad": 87.50618743896484,
            "surprise": 0.0005125660100020468,
            "neutral": 9.21512508392334
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 382,
            "y": 56,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.13937377929688,
            "Man": 0.8606266975402832
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 18.711620330810547,
            "indian": 10.315242767333984,
            "black": 4.3179802894592285,
            "white": 23.182279586791992,
            "middle eastern": 15.188799858093262,
            "latino hispanic": 28.284076690673828
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.44813477993011475,
            "disgust": 0.0006127419765107334,
            "fear": 0.5262318253517151,
            "happy": 0.4841339886188507,
            "sad": 5.468506336212158,
            "surprise": 0.3600005805492401,
            "neutral": 92.71238708496094
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 684,
            "y": 53,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.94252014160156,
            "Man": 0.057491060346364975
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.1071600914001465,
            "indian": 9.334561347961426,
            "black": 5.847054481506348,
            "white": 30.037931442260742,
            "middle eastern": 29.38324737548828,
            "latino hispanic": 21.29004669189453
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.01100898440927267,
            "disgust": 0.00029035500483587384,
            "fear": 95.83114624023438,
            "happy": 2.521855592727661,
            "sad": 0.4130842387676239,
            "surprise": 0.13125397264957428,
            "neutral": 1.0913554430007935
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 29,
        "region": {
            "x": 987,
            "y": 55,
            "w": 36,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 2.6452932357788086,
            "Man": 97.35470581054688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.21339225769043,
            "indian": 13.959941864013672,
            "black": 5.248673915863037,
            "white": 20.562957763671875,
            "middle eastern": 32.142642974853516,
            "latino hispanic": 21.87238311767578
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.3147554454917554e-05,
            "disgust": 1.5854778823154447e-08,
            "fear": 4.117131538805552e-05,
            "happy": 2.619898557662964,
            "sad": 5.6471662521362305,
            "surprise": 1.8503870310992987e-11,
            "neutral": 91.73287963867188
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 42,
        "region": {
            "x": 831,
            "y": 63,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 96.56354522705078,
            "Man": 3.4364655017852783
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.0057730674743652,
            "indian": 3.150272846221924,
            "black": 0.45674020051956177,
            "white": 51.47426223754883,
            "middle eastern": 25.097766876220703,
            "latino hispanic": 17.815187454223633
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.12615445256233215,
            "disgust": 0.002180499956011772,
            "fear": 18.23357582092285,
            "happy": 72.46662902832031,
            "sad": 1.9214704036712646,
            "surprise": 0.28389137983322144,
            "neutral": 6.966100692749023
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 42,
        "region": {
            "x": 61,
            "y": 72,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 47.98976135253906,
            "Man": 52.010231018066406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 14.031319618225098,
            "indian": 22.105806350708008,
            "black": 6.223764419555664,
            "white": 19.360363006591797,
            "middle eastern": 18.592025756835938,
            "latino hispanic": 19.686721801757812
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 2.4777281284332275,
            "disgust": 0.035211436450481415,
            "fear": 2.6064341068267822,
            "happy": 72.21173858642578,
            "sad": 10.02831745147705,
            "surprise": 0.03382156416773796,
            "neutral": 12.606755256652832
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 460,
            "y": 73,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 96.24691772460938,
            "Man": 3.7530858516693115
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 39.795494079589844,
            "indian": 4.127418041229248,
            "black": 44.62397766113281,
            "white": 0.6856200695037842,
            "middle eastern": 0.381198525428772,
            "latino hispanic": 10.386287689208984
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0003899276489391923,
            "disgust": 3.919460242474138e-12,
            "fear": 3.6747978811035864e-06,
            "happy": 0.08492936939001083,
            "sad": 0.008941988460719585,
            "surprise": 0.009069950319826603,
            "neutral": 99.89666748046875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 325,
            "y": 96,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.03966916725039482,
            "Man": 99.96033477783203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 25.013784408569336,
            "indian": 14.245976448059082,
            "black": 13.028965950012207,
            "white": 12.079002380371094,
            "middle eastern": 11.045604705810547,
            "latino hispanic": 24.586668014526367
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.04272618144750595,
            "disgust": 3.0451673183051753e-07,
            "fear": 0.013377645052969456,
            "happy": 0.00343986670486629,
            "sad": 1.1483787298202515,
            "surprise": 7.413962066493696e-06,
            "neutral": 98.79206085205078
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 230,
            "y": 103,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99613952636719,
            "Man": 0.003864573547616601
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.4068710803985596,
            "indian": 8.384713172912598,
            "black": 1.6149592399597168,
            "white": 33.90835189819336,
            "middle eastern": 36.248172760009766,
            "latino hispanic": 17.436941146850586
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.397009938955307,
            "disgust": 0.0001880323252407834,
            "fear": 0.19571661949157715,
            "happy": 6.675295829772949,
            "sad": 2.976365327835083,
            "surprise": 13.74681282043457,
            "neutral": 76.00861358642578
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 726,
            "y": 99,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.98339080810547,
            "Man": 0.016606396064162254
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.7746456861495972,
            "indian": 6.518801689147949,
            "black": 0.524192750453949,
            "white": 31.653301239013672,
            "middle eastern": 44.79463577270508,
            "latino hispanic": 14.734416961669922
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.03351796045899391,
            "disgust": 0.00038756165304221213,
            "fear": 0.5378044247627258,
            "happy": 17.248960494995117,
            "sad": 2.0119876861572266,
            "surprise": 0.23765268921852112,
            "neutral": 79.9296875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 113,
            "y": 123,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.65990447998047,
            "Man": 0.3401016891002655
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.8700878620147705,
            "indian": 2.185673475265503,
            "black": 0.2736993432044983,
            "white": 72.44337463378906,
            "middle eastern": 13.520696640014648,
            "latino hispanic": 9.706462860107422
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00587410619482398,
            "disgust": 0.0007265574531629682,
            "fear": 39.04172134399414,
            "happy": 47.809104919433594,
            "sad": 0.4726303219795227,
            "surprise": 0.1955130398273468,
            "neutral": 12.474434852600098
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 0,
            "y": 140,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.44348907470703,
            "Man": 0.5565130710601807
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 51.43096923828125,
            "indian": 9.172049522399902,
            "black": 8.326112747192383,
            "white": 6.2869181632995605,
            "middle eastern": 3.3652470111846924,
            "latino hispanic": 21.418697357177734
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.3675778493270627e-07,
            "disgust": 9.954991034798449e-15,
            "fear": 7.209582264522396e-09,
            "happy": 5.26829195022583,
            "sad": 0.00029702327447012067,
            "surprise": 1.5581156276311958e-07,
            "neutral": 94.73141479492188
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 864,
            "y": 119,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.004899374209344387,
            "Man": 99.99510192871094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 19.847078323364258,
            "indian": 17.353973388671875,
            "black": 10.220239639282227,
            "white": 13.278728485107422,
            "middle eastern": 11.134902000427246,
            "latino hispanic": 28.165075302124023
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.813601016998291,
            "disgust": 0.00035611691419035196,
            "fear": 4.084469318389893,
            "happy": 0.2452898770570755,
            "sad": 10.489387512207031,
            "surprise": 0.002548529766499996,
            "neutral": 82.36434936523438
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 606,
            "y": 126,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0826382040977478,
            "Man": 99.9173583984375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.732665061950684,
            "indian": 7.794497013092041,
            "black": 1.9258710145950317,
            "white": 27.389827728271484,
            "middle eastern": 26.753881454467773,
            "latino hispanic": 30.40325355529785
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.2958720326423645,
            "disgust": 1.1304196334549488e-07,
            "fear": 0.09711796045303345,
            "happy": 0.0009149278630502522,
            "sad": 1.51714026927948,
            "surprise": 6.658053462160751e-05,
            "neutral": 98.0888900756836
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 160,
            "y": 161,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.3778756260871887,
            "Man": 99.62211608886719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.6141133308410645,
            "indian": 7.1430888175964355,
            "black": 9.103275299072266,
            "white": 38.475128173828125,
            "middle eastern": 20.49018669128418,
            "latino hispanic": 20.174209594726562
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.14903229475021362,
            "disgust": 2.501812787158997e-06,
            "fear": 0.07260947674512863,
            "happy": 0.010991849936544895,
            "sad": 2.000217914581299,
            "surprise": 0.0006165442173369229,
            "neutral": 97.76653289794922
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 384,
            "y": 158,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99959564208984,
            "Man": 0.000407357350923121
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 16.01451301574707,
            "indian": 8.131356239318848,
            "black": 4.507975101470947,
            "white": 25.710927963256836,
            "middle eastern": 18.951622009277344,
            "latino hispanic": 26.683610916137695
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.6130350388721126e-08,
            "disgust": 9.329339384356317e-12,
            "fear": 1.6646198730541073e-07,
            "happy": 99.95726776123047,
            "sad": 3.3690430001342975e-08,
            "surprise": 1.71126839632052e-06,
            "neutral": 0.04273655265569687
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 942,
            "y": 144,
            "w": 74,
            "h": 74,
            "left_eye": [
                990,
                172
            ],
            "right_eye": [
                966,
                174
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.7266488075256348,
            "Man": 99.27334594726562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.653138160705566,
            "indian": 15.890388488769531,
            "black": 4.762501239776611,
            "white": 19.39518165588379,
            "middle eastern": 22.7634220123291,
            "latino hispanic": 29.535367965698242
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.1076507493853569,
            "disgust": 2.5993776944233105e-06,
            "fear": 1.8651347160339355,
            "happy": 0.0015832089120522141,
            "sad": 2.770319700241089,
            "surprise": 0.005601337179541588,
            "neutral": 95.24971008300781
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 764,
            "y": 170,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.46001216769218445,
            "Man": 99.53998565673828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.36341667175293,
            "indian": 6.2041730880737305,
            "black": 2.0900251865386963,
            "white": 43.853599548339844,
            "middle eastern": 20.777027130126953,
            "latino hispanic": 22.711763381958008
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.027503157034516335,
            "disgust": 0.001199594116769731,
            "fear": 2.186837673187256,
            "happy": 0.8505362868309021,
            "sad": 3.7510766983032227,
            "surprise": 0.013219309970736504,
            "neutral": 93.16963195800781
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 466,
            "y": 172,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.0009108506492339075,
            "Man": 99.99909210205078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.8357746601104736,
            "indian": 6.399913311004639,
            "black": 0.34939050674438477,
            "white": 33.718441009521484,
            "middle eastern": 37.639434814453125,
            "latino hispanic": 21.05704689025879
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.5687042474746704,
            "disgust": 1.2663743831353713e-08,
            "fear": 0.038013309240341187,
            "happy": 0.00041975596104748547,
            "sad": 4.691344261169434,
            "surprise": 0.00010265834862366319,
            "neutral": 93.701416015625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 527,
            "y": 84,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.009469233453273773,
            "Man": 99.99053192138672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.08778472244739532,
            "indian": 0.41493722796440125,
            "black": 0.013710184022784233,
            "white": 77.03253936767578,
            "middle eastern": 17.424007415771484,
            "latino hispanic": 5.027022361755371
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.05329492315649986,
            "disgust": 9.178999782477604e-09,
            "fear": 0.14674881100654602,
            "happy": 0.00016025036165956408,
            "sad": 2.2204620838165283,
            "surprise": 2.1389516859926516e-06,
            "neutral": 97.57933044433594
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 261,
            "y": 220,
            "w": 73,
            "h": 73,
            "left_eye": [
                308,
                248
            ],
            "right_eye": [
                282,
                248
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 77.70526123046875,
            "Man": 22.29474639892578
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 45.74360275268555,
            "indian": 7.472679615020752,
            "black": 3.5550241470336914,
            "white": 3.9606690406799316,
            "middle eastern": 1.5065255165100098,
            "latino hispanic": 37.76149368286133
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0001405347284162417,
            "disgust": 2.368801233387785e-06,
            "fear": 0.03319194167852402,
            "happy": 75.8379135131836,
            "sad": 0.07291650027036667,
            "surprise": 0.030765656381845474,
            "neutral": 24.025075912475586
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 568,
            "y": 241,
            "w": 72,
            "h": 72,
            "left_eye": [
                615,
                267
            ],
            "right_eye": [
                588,
                269
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.72411346435547,
            "Man": 0.27588212490081787
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.010622899048030376,
            "indian": 0.005081944167613983,
            "black": 0.000275237369351089,
            "white": 95.10870361328125,
            "middle eastern": 1.8778420686721802,
            "latino hispanic": 2.997469663619995
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.014528824016451836,
            "disgust": 2.246566964458907e-06,
            "fear": 0.042786605656147,
            "happy": 0.00734534440562129,
            "sad": 0.8156697154045105,
            "surprise": 0.0019872519187629223,
            "neutral": 99.11768341064453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 60,
            "y": 202,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.05167330801486969,
            "Man": 99.94832611083984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.326394081115723,
            "indian": 7.037922382354736,
            "black": 0.9904616475105286,
            "white": 39.284820556640625,
            "middle eastern": 19.575315475463867,
            "latino hispanic": 27.78509521484375
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.6496245265007019,
            "disgust": 0.003970226272940636,
            "fear": 28.909862518310547,
            "happy": 0.016223931685090065,
            "sad": 31.00503921508789,
            "surprise": 0.00205895840190351,
            "neutral": 39.4132194519043
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 856,
            "y": 221,
            "w": 75,
            "h": 75,
            "left_eye": [
                906,
                249
            ],
            "right_eye": [
                877,
                250
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99998474121094,
            "Man": 1.2134531061747111e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 90.75775909423828,
            "indian": 1.053391933441162,
            "black": 0.12140235304832458,
            "white": 0.16639111936092377,
            "middle eastern": 0.017673475667834282,
            "latino hispanic": 7.883380889892578
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.06545211969933e-06,
            "disgust": 5.715409157232287e-13,
            "fear": 0.00016319964197464287,
            "happy": 0.0001237741089425981,
            "sad": 0.002195577137172222,
            "surprise": 1.9333563159307232e-06,
            "neutral": 99.99750518798828
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 45,
        "region": {
            "x": 2,
            "y": 299,
            "w": 87,
            "h": 87,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.2840665280818939,
            "Man": 99.71593475341797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.567604577867314e-05,
            "indian": 9.647394472267479e-05,
            "black": 5.481026619236218e-07,
            "white": 99.55269622802734,
            "middle eastern": 0.21996161341667175,
            "latino hispanic": 0.22718851268291473
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.14306572079658508,
            "disgust": 4.5072276577684534e-08,
            "fear": 0.07889721542596817,
            "happy": 0.000755425076931715,
            "sad": 2.736295461654663,
            "surprise": 0.0030037544202059507,
            "neutral": 97.03797149658203
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 370,
            "y": 303,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.74308776855469,
            "Man": 0.2569156885147095
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 39.59432601928711,
            "indian": 8.821856498718262,
            "black": 3.586003303527832,
            "white": 7.515253067016602,
            "middle eastern": 3.184412717819214,
            "latino hispanic": 37.298152923583984
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.82380812880001e-06,
            "disgust": 1.2706588559119325e-10,
            "fear": 0.00022594319307245314,
            "happy": 13.443861961364746,
            "sad": 0.01008115615695715,
            "surprise": 0.007369365077465773,
            "neutral": 86.53845977783203
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 815,
            "y": 320,
            "w": 74,
            "h": 74,
            "left_eye": [
                863,
                348
            ],
            "right_eye": [
                834,
                350
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.89320373535156,
            "Man": 0.10679037868976593
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 46.22522735595703,
            "indian": 7.3736371994018555,
            "black": 4.618069171905518,
            "white": 10.898455619812012,
            "middle eastern": 5.023409366607666,
            "latino hispanic": 25.8612003326416
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.333823653723812e-06,
            "disgust": 3.41816852600374e-11,
            "fear": 0.00020553363719955087,
            "happy": 86.33906555175781,
            "sad": 0.005869546439498663,
            "surprise": 0.00010940174979623407,
            "neutral": 13.65474796295166
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 663,
            "y": 286,
            "w": 79,
            "h": 79,
            "left_eye": [
                716,
                316
            ],
            "right_eye": [
                687,
                315
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.027272973209619522,
            "Man": 99.97273254394531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00019612847245298326,
            "indian": 0.0009981431066989899,
            "black": 9.468839380133431e-06,
            "white": 98.94112396240234,
            "middle eastern": 0.6442263126373291,
            "latino hispanic": 0.4134502112865448
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.007337100803852081,
            "disgust": 1.8624288600221917e-07,
            "fear": 0.38666149973869324,
            "happy": 0.07488618791103363,
            "sad": 1.1503489017486572,
            "surprise": 0.0014525956939905882,
            "neutral": 98.37931823730469
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 154,
            "y": 301,
            "w": 79,
            "h": 79,
            "left_eye": [
                205,
                331
            ],
            "right_eye": [
                177,
                332
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.89959716796875,
            "Man": 0.10040853172540665
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 51.456790924072266,
            "indian": 21.579322814941406,
            "black": 11.54554557800293,
            "white": 1.426916241645813,
            "middle eastern": 1.2004659175872803,
            "latino hispanic": 12.790958404541016
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.7561230833962327e-06,
            "disgust": 6.470149394553759e-13,
            "fear": 0.00011158116103615612,
            "happy": 0.02939506061375141,
            "sad": 0.002533924300223589,
            "surprise": 0.00034887759829871356,
            "neutral": 99.96761322021484
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 225,
            "y": 349,
            "w": 82,
            "h": 82,
            "left_eye": [
                279,
                379
            ],
            "right_eye": [
                248,
                381
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99723815917969,
            "Man": 0.00276990351267159
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 86.72581481933594,
            "indian": 0.9696170687675476,
            "black": 0.09767584502696991,
            "white": 3.834853410720825,
            "middle eastern": 0.235971137881279,
            "latino hispanic": 8.136075973510742
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.8435951471328735,
            "disgust": 7.97222185155988e-07,
            "fear": 0.0032240995205938816,
            "happy": 0.00012343145499471575,
            "sad": 3.1069955825805664,
            "surprise": 4.2585068626976863e-07,
            "neutral": 96.04605865478516
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 518,
            "y": 348,
            "w": 81,
            "h": 81,
            "left_eye": [
                572,
                379
            ],
            "right_eye": [
                541,
                380
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 99.99964141845703,
            "Man": 0.0003559309698175639
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 36.54296112060547,
            "indian": 7.73090934753418,
            "black": 3.2706573009490967,
            "white": 16.116947174072266,
            "middle eastern": 6.4593071937561035,
            "latino hispanic": 29.879220962524414
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.003039461327716708,
            "disgust": 7.868427021051616e-10,
            "fear": 0.001028593978844583,
            "happy": 1.7660406228969805e-05,
            "sad": 0.15367087721824646,
            "surprise": 4.9999151087831706e-05,
            "neutral": 99.8421859741211
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 932,
            "y": 348,
            "w": 75,
            "h": 75,
            "left_eye": [
                983,
                378
            ],
            "right_eye": [
                953,
                378
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 17.3653564453125,
            "Man": 82.6346435546875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 55.578529357910156,
            "indian": 3.948396921157837,
            "black": 1.7885313034057617,
            "white": 15.691214561462402,
            "middle eastern": 5.885910987854004,
            "latino hispanic": 17.1074161529541
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.012791095301508904,
            "disgust": 3.326595469843596e-05,
            "fear": 0.26021793484687805,
            "happy": 0.0798095241189003,
            "sad": 1.981667399406433,
            "surprise": 0.014859539456665516,
            "neutral": 97.6506118774414
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 770,
            "y": 435,
            "w": 88,
            "h": 88,
            "left_eye": [
                830,
                468
            ],
            "right_eye": [
                796,
                469
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.0044789728708565235,
            "Man": 99.99551391601562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.2762383222579956,
            "indian": 1.4801603555679321,
            "black": 0.30717143416404724,
            "white": 65.14405059814453,
            "middle eastern": 17.283178329467773,
            "latino hispanic": 14.509202003479004
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.007467021234333515,
            "disgust": 4.324929705035174e-06,
            "fear": 0.10670018941164017,
            "happy": 1.7478489875793457,
            "sad": 0.1672063022851944,
            "surprise": 0.05309784784913063,
            "neutral": 97.91766357421875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 42,
        "region": {
            "x": 69,
            "y": 485,
            "w": 89,
            "h": 89,
            "left_eye": [
                129,
                520
            ],
            "right_eye": [
                95,
                520
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99993133544922,
            "Man": 6.587314419448376e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.911250809731428e-06,
            "indian": 2.021611891223074e-07,
            "black": 1.5888116378093287e-09,
            "white": 99.99488067626953,
            "middle eastern": 0.002060824306681752,
            "latino hispanic": 0.0030535359401255846
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.783130735740997e-06,
            "disgust": 1.7015130424624658e-06,
            "fear": 0.011587929911911488,
            "happy": 94.28821563720703,
            "sad": 0.007627809885889292,
            "surprise": 0.01138719916343689,
            "neutral": 5.681169509887695
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 311,
            "y": 418,
            "w": 92,
            "h": 92,
            "left_eye": [
                372,
                454
            ],
            "right_eye": [
                340,
                454
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.02959074266254902,
            "Man": 99.97040557861328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.6210613250732422,
            "indian": 3.3640875816345215,
            "black": 0.10845518112182617,
            "white": 44.7889289855957,
            "middle eastern": 33.66395950317383,
            "latino hispanic": 17.453510284423828
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.07942276448011398,
            "disgust": 1.8351850030740025e-06,
            "fear": 2.702441930770874,
            "happy": 10.073680877685547,
            "sad": 1.1101760864257812,
            "surprise": 0.07515688985586166,
            "neutral": 85.95912170410156
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 617,
            "y": 454,
            "w": 85,
            "h": 85,
            "left_eye": [
                673,
                487
            ],
            "right_eye": [
                640,
                487
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99732971191406,
            "Man": 0.002668562810868025
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99968719482422,
            "indian": 7.51601837691851e-05,
            "black": 1.2167444829458418e-10,
            "white": 1.119903117796639e-05,
            "middle eastern": 7.830341236525484e-11,
            "latino hispanic": 0.0002146497427020222
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0004811366379726678,
            "disgust": 7.95246819507156e-08,
            "fear": 0.003487297333776951,
            "happy": 0.968375027179718,
            "sad": 0.13630279898643494,
            "surprise": 0.11130382120609283,
            "neutral": 98.78004455566406
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 439,
            "y": 498,
            "w": 94,
            "h": 94,
            "left_eye": [
                500,
                534
            ],
            "right_eye": [
                467,
                535
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.05405453220009804,
            "Man": 99.9459457397461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.47707414627075195,
            "indian": 7.080992221832275,
            "black": 0.13796575367450714,
            "white": 34.71241760253906,
            "middle eastern": 37.917076110839844,
            "latino hispanic": 19.674474716186523
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.7468461990356445,
            "disgust": 4.641299165086821e-05,
            "fear": 3.305152416229248,
            "happy": 0.6946156024932861,
            "sad": 4.360070705413818,
            "surprise": 0.02500675618648529,
            "neutral": 90.86825561523438
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 900,
            "y": 505,
            "w": 94,
            "h": 94,
            "left_eye": [
                963,
                543
            ],
            "right_eye": [
                927,
                543
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 1.5452138185501099,
            "Man": 98.45478820800781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.816594577685464e-08,
            "indian": 0.000555607839487493,
            "black": 99.99945068359375,
            "white": 8.67737522461387e-13,
            "middle eastern": 6.049884036666078e-14,
            "latino hispanic": 3.200645153356163e-07
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0012061363086104393,
            "disgust": 1.0311010671584103e-13,
            "fear": 3.635345274233259e-05,
            "happy": 1.9009863763130852e-06,
            "sad": 0.011733852326869965,
            "surprise": 8.604922913946211e-05,
            "neutral": 99.9869384765625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 223,
            "y": 579,
            "w": 82,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9999771118164,
            "Man": 2.0872739696642384e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.03584060072898865,
            "indian": 0.04574889317154884,
            "black": 0.0035272103268653154,
            "white": 91.51471710205078,
            "middle eastern": 3.220123767852783,
            "latino hispanic": 5.1800456047058105
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.516720294952393,
            "disgust": 2.7250030040740967,
            "fear": 2.7640180587768555,
            "happy": 3.795154333114624,
            "sad": 29.328277587890625,
            "surprise": 0.09560927748680115,
            "neutral": 54.77521896362305
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 642,
            "y": 592,
            "w": 92,
            "h": 92,
            "left_eye": [
                705,
                627
            ],
            "right_eye": [
                668,
                626
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99959564208984,
            "Man": 0.0004034685844089836
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 11.383234024047852,
            "indian": 2.943878173828125,
            "black": 84.66661834716797,
            "white": 0.011321824043989182,
            "middle eastern": 0.01406870037317276,
            "latino hispanic": 0.9808828830718994
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 3.8126916885375977,
            "disgust": 1.1493178817545413e-06,
            "fear": 0.026213660836219788,
            "happy": 11.24524974822998,
            "sad": 7.773557186126709,
            "surprise": 0.03646949306130409,
            "neutral": 77.1058120727539
        },
        "dominant_emotion": "neutral"
    }
]
let postal_service_clerk_data3 = [
    {
        "age": 28,
        "region": {
            "x": 5,
            "y": 219,
            "w": 40,
            "h": 40,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 3.652312994003296,
            "Man": 96.34768676757812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.017516033723950386,
            "indian": 0.21252235770225525,
            "black": 0.010204430669546127,
            "white": 77.05184936523438,
            "middle eastern": 18.201488494873047,
            "latino hispanic": 4.506422519683838
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.07907024025917053,
            "disgust": 0.00659463694319129,
            "fear": 0.7156991362571716,
            "happy": 2.9394400119781494,
            "sad": 95.89634704589844,
            "surprise": 0.02159890905022621,
            "neutral": 0.3412531018257141
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 490,
            "y": 180,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.329652190208435,
            "Man": 98.67034912109375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 21.216533660888672,
            "indian": 14.026044845581055,
            "black": 9.982593536376953,
            "white": 16.05744743347168,
            "middle eastern": 17.281015396118164,
            "latino hispanic": 21.436368942260742
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.6497425436973572,
            "disgust": 1.0974764336424414e-05,
            "fear": 1.2478524446487427,
            "happy": 0.0034200106747448444,
            "sad": 2.9164981842041016,
            "surprise": 0.0027122944593429565,
            "neutral": 95.17977142333984
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 208,
            "y": 186,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.6385471820831299,
            "Man": 98.3614501953125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.793841361999512,
            "indian": 10.276785850524902,
            "black": 1.7255678176879883,
            "white": 30.59758758544922,
            "middle eastern": 28.565778732299805,
            "latino hispanic": 23.04043960571289
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.1970769166946411,
            "disgust": 0.030580002814531326,
            "fear": 1.7813928127288818,
            "happy": 79.62601470947266,
            "sad": 12.069132804870605,
            "surprise": 0.030033553019165993,
            "neutral": 5.265766143798828
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 725,
            "y": 186,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.05374474450945854,
            "Man": 99.94625091552734
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 17.750059127807617,
            "indian": 17.794090270996094,
            "black": 3.316617488861084,
            "white": 13.085389137268066,
            "middle eastern": 13.867402076721191,
            "latino hispanic": 34.18644332885742
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.00019754597451537848,
            "disgust": 4.159253421676112e-06,
            "fear": 0.005378294736146927,
            "happy": 97.53817749023438,
            "sad": 0.03958577662706375,
            "surprise": 1.1247828268778903e-07,
            "neutral": 2.4166579246520996
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 822,
            "y": 190,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 1.0119516849517822,
            "Man": 98.98805236816406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.146428108215332,
            "indian": 10.990867614746094,
            "black": 2.9395363330841064,
            "white": 24.578205108642578,
            "middle eastern": 30.050384521484375,
            "latino hispanic": 25.294578552246094
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 12.841277122497559,
            "disgust": 0.3251621723175049,
            "fear": 21.189674377441406,
            "happy": 0.2111472189426422,
            "sad": 59.3770637512207,
            "surprise": 0.06441176682710648,
            "neutral": 5.991260051727295
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 28,
        "region": {
            "x": 76,
            "y": 198,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.14833205938339233,
            "Man": 99.85167694091797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.4113187789917,
            "indian": 7.143892288208008,
            "black": 1.4261558055877686,
            "white": 32.884681701660156,
            "middle eastern": 30.304231643676758,
            "latino hispanic": 16.82971954345703
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.4825239181518555,
            "disgust": 1.072969695314896e-07,
            "fear": 0.7162188291549683,
            "happy": 19.814640045166016,
            "sad": 4.006582260131836,
            "surprise": 0.00011919249664060771,
            "neutral": 70.97991943359375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 283,
            "y": 203,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 21.360748291015625,
            "Man": 78.63925170898438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 51.05835723876953,
            "indian": 5.540552616119385,
            "black": 2.9491076469421387,
            "white": 18.028451919555664,
            "middle eastern": 6.072846412658691,
            "latino hispanic": 16.350675582885742
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.5851164031773806e-05,
            "disgust": 4.794591177414986e-07,
            "fear": 1.4768837900192011e-05,
            "happy": 99.92902374267578,
            "sad": 0.007377190049737692,
            "surprise": 0.00018276507034897804,
            "neutral": 0.06335361301898956
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 435,
            "y": 204,
            "w": 44,
            "h": 44,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.17174933850765228,
            "Man": 99.82825469970703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.6415141820907593,
            "indian": 2.286844253540039,
            "black": 0.24228352308273315,
            "white": 53.95641326904297,
            "middle eastern": 23.58199119567871,
            "latino hispanic": 18.290952682495117
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.3893544673919678,
            "disgust": 0.4329851269721985,
            "fear": 78.1575698852539,
            "happy": 0.08039352297782898,
            "sad": 19.308584213256836,
            "surprise": 0.02466708980500698,
            "neutral": 0.6064476370811462
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 33,
        "region": {
            "x": 930,
            "y": 213,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 2.9917068481445312,
            "Man": 97.00829315185547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 24.16096305847168,
            "indian": 16.19562530517578,
            "black": 18.935245513916016,
            "white": 9.730708122253418,
            "middle eastern": 11.617077827453613,
            "latino hispanic": 19.360383987426758
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.1909489631652832,
            "disgust": 0.0008020883542485535,
            "fear": 2.068568706512451,
            "happy": 49.76152420043945,
            "sad": 2.554943323135376,
            "surprise": 0.35738271474838257,
            "neutral": 45.06583786010742
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 585,
            "y": 242,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.19428908824920654,
            "Man": 99.80570983886719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 36.385643005371094,
            "indian": 3.296506881713867,
            "black": 1.3656129837036133,
            "white": 36.76048278808594,
            "middle eastern": 7.567374229431152,
            "latino hispanic": 14.62437915802002
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 40.192134857177734,
            "disgust": 0.015318929217755795,
            "fear": 6.8017191886901855,
            "happy": 2.7534072399139404,
            "sad": 36.87644577026367,
            "surprise": 0.011184995993971825,
            "neutral": 13.3497896194458
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 30,
        "region": {
            "x": 139,
            "y": 247,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.016728147864341736,
            "Man": 99.9832763671875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 14.957454681396484,
            "indian": 17.857213973999023,
            "black": 5.999649524688721,
            "white": 11.22573184967041,
            "middle eastern": 7.041630268096924,
            "latino hispanic": 42.9183235168457
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 24.73553466796875,
            "disgust": 0.3373594880104065,
            "fear": 2.2980823516845703,
            "happy": 0.0908873975276947,
            "sad": 68.29296875,
            "surprise": 0.011184273287653923,
            "neutral": 4.23399543762207
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 35,
        "region": {
            "x": 238,
            "y": 246,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.12538185715675354,
            "Man": 99.87461853027344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.1042118072509766,
            "indian": 2.2365365028381348,
            "black": 0.22244541347026825,
            "white": 60.08567810058594,
            "middle eastern": 15.688532829284668,
            "latino hispanic": 20.662599563598633
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 17.28065299987793,
            "disgust": 0.12249386310577393,
            "fear": 12.232284545898438,
            "happy": 0.8074362874031067,
            "sad": 61.14486312866211,
            "surprise": 0.03448722884058952,
            "neutral": 8.377776145935059
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 302,
            "y": 249,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.06556594371795654,
            "Man": 99.9344253540039
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.8568025231361389,
            "indian": 0.6810609698295593,
            "black": 0.06635084003210068,
            "white": 66.85466766357422,
            "middle eastern": 17.054283142089844,
            "latino hispanic": 14.486837387084961
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2119016647338867,
            "disgust": 0.05144013464450836,
            "fear": 5.202680587768555,
            "happy": 29.372310638427734,
            "sad": 21.287628173828125,
            "surprise": 0.011300561018288136,
            "neutral": 42.862735748291016
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 407,
            "y": 254,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.014595271088182926,
            "Man": 99.98539733886719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.7977294921875,
            "indian": 1.9073933362960815,
            "black": 0.29064875841140747,
            "white": 55.19069290161133,
            "middle eastern": 13.199767112731934,
            "latino hispanic": 20.61376190185547
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0006639944622293115,
            "disgust": 4.526456542919277e-09,
            "fear": 6.294560444075614e-05,
            "happy": 99.76130676269531,
            "sad": 0.0008945073350332677,
            "surprise": 3.985767762060277e-05,
            "neutral": 0.23703455924987793
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 40,
        "region": {
            "x": 21,
            "y": 263,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 5.288013458251953,
            "Man": 94.71198272705078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 28.69776153564453,
            "indian": 2.335330009460449,
            "black": 1.0034409761428833,
            "white": 39.27680587768555,
            "middle eastern": 10.007929801940918,
            "latino hispanic": 18.678728103637695
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.371241448097862e-05,
            "disgust": 1.502362012573144e-09,
            "fear": 3.0127888749120757e-05,
            "happy": 99.334716796875,
            "sad": 0.0003891381493303925,
            "surprise": 0.012059583328664303,
            "neutral": 0.65276700258255
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 529,
            "y": 262,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.05083582550287247,
            "Man": 99.94915771484375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.427067756652832,
            "indian": 26.05489730834961,
            "black": 11.723564147949219,
            "white": 13.332415580749512,
            "middle eastern": 17.39499282836914,
            "latino hispanic": 21.067052841186523
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 0.18665464222431183,
            "disgust": 7.061681799314101e-07,
            "fear": 0.0049516791477799416,
            "happy": 2.680303168745013e-06,
            "sad": 1.6367557048797607,
            "surprise": 4.332220214564586e-06,
            "neutral": 98.17163848876953
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 648,
            "y": 262,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.09581288695335388,
            "Man": 99.90418243408203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00645046029239893,
            "indian": 0.05001244693994522,
            "black": 0.0011596846161410213,
            "white": 83.27233123779297,
            "middle eastern": 10.793962478637695,
            "latino hispanic": 5.8760857582092285
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.43098893761634827,
            "disgust": 0.00048162799794226885,
            "fear": 26.603654861450195,
            "happy": 8.87379264831543,
            "sad": 36.81593704223633,
            "surprise": 0.026791226118803024,
            "neutral": 27.248355865478516
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 29,
        "region": {
            "x": 815,
            "y": 266,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.43140244483947754,
            "Man": 99.568603515625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.332984447479248,
            "indian": 2.0689761638641357,
            "black": 0.3084139823913574,
            "white": 67.27332305908203,
            "middle eastern": 11.292612075805664,
            "latino hispanic": 14.723687171936035
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.037304401397705,
            "disgust": 0.03340395167469978,
            "fear": 6.517799377441406,
            "happy": 2.0600545406341553,
            "sad": 78.65408325195312,
            "surprise": 0.08647486567497253,
            "neutral": 6.610873222351074
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 956,
            "y": 289,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 17.32196617126465,
            "Man": 82.67803192138672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.612977504730225,
            "indian": 0.7803418636322021,
            "black": 94.4296646118164,
            "white": 0.027078619226813316,
            "middle eastern": 0.008391781710088253,
            "latino hispanic": 0.14155036211013794
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0140995467081666,
            "disgust": 7.363728400378022e-07,
            "fear": 0.38756728172302246,
            "happy": 98.3083724975586,
            "sad": 1.2636535167694092,
            "surprise": 0.00010507261322345585,
            "neutral": 0.02618580311536789
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 104,
            "y": 297,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.000378582306439057,
            "Man": 99.99961853027344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.17080213129520416,
            "indian": 0.559307873249054,
            "black": 0.029800279065966606,
            "white": 76.16328430175781,
            "middle eastern": 11.931927680969238,
            "latino hispanic": 11.144872665405273
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 11.700899124145508,
            "disgust": 0.01453443430364132,
            "fear": 4.549163818359375,
            "happy": 0.019113481044769287,
            "sad": 76.55172729492188,
            "surprise": 0.018326975405216217,
            "neutral": 7.146233558654785
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 24,
        "region": {
            "x": 734,
            "y": 294,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.009828160516917706,
            "Man": 99.99016571044922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.012853065505623817,
            "indian": 0.011868475005030632,
            "black": 0.0002889717579819262,
            "white": 93.8109359741211,
            "middle eastern": 1.9846473932266235,
            "latino hispanic": 4.179406642913818
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.338103294372559,
            "disgust": 0.052008796483278275,
            "fear": 8.72149658203125,
            "happy": 0.01652529463171959,
            "sad": 86.24381256103516,
            "surprise": 0.026673056185245514,
            "neutral": 0.6013830304145813
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 354,
            "y": 327,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0005564359598793089,
            "Man": 99.99944305419922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 21.871122360229492,
            "indian": 1.825966477394104,
            "black": 0.7713547945022583,
            "white": 47.471736907958984,
            "middle eastern": 8.60684871673584,
            "latino hispanic": 19.452972412109375
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 11.933269500732422,
            "disgust": 0.02447287179529667,
            "fear": 0.7743119597434998,
            "happy": 0.0014377388870343566,
            "sad": 86.71883392333984,
            "surprise": 0.00041893808520399034,
            "neutral": 0.5472583174705505
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 29,
        "region": {
            "x": 157,
            "y": 356,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.0005407228600233793,
            "Man": 99.99946594238281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.4429793655872345,
            "indian": 0.6349051594734192,
            "black": 0.03373739495873451,
            "white": 67.52384185791016,
            "middle eastern": 11.766597747802734,
            "latino hispanic": 19.59794044494629
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 23.22711944580078,
            "disgust": 1.3981126357975882e-05,
            "fear": 2.9547152519226074,
            "happy": 0.00032865838147699833,
            "sad": 61.67475509643555,
            "surprise": 8.151776455633808e-06,
            "neutral": 12.14306354522705
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 34,
        "region": {
            "x": 0,
            "y": 322,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 13.717730522155762,
            "Man": 86.28226470947266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.537071704864502,
            "indian": 2.826627492904663,
            "black": 1.244057297706604,
            "white": 48.95473861694336,
            "middle eastern": 18.080902099609375,
            "latino hispanic": 24.356599807739258
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.017179399728775024,
            "disgust": 7.930452557047829e-05,
            "fear": 0.7978015542030334,
            "happy": 97.40327453613281,
            "sad": 1.3835686445236206,
            "surprise": 0.0006690461887046695,
            "neutral": 0.39743053913116455
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 231,
            "y": 316,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 86.8945083618164,
            "Man": 13.105490684509277
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7548336982727051,
            "indian": 2.0976717472076416,
            "black": 96.1449203491211,
            "white": 0.019119422882795334,
            "middle eastern": 0.008542763069272041,
            "latino hispanic": 0.9749119877815247
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 6.0146044233988505e-06,
            "disgust": 1.6303187966304478e-11,
            "fear": 4.969028850609902e-07,
            "happy": 47.54975509643555,
            "sad": 0.007053973153233528,
            "surprise": 9.650533320382237e-05,
            "neutral": 52.44308853149414
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 886,
            "y": 318,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.24979154765605927,
            "Man": 99.75020599365234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.5771090984344482,
            "indian": 5.4855475425720215,
            "black": 0.564855694770813,
            "white": 40.670135498046875,
            "middle eastern": 36.51474380493164,
            "latino hispanic": 14.187612533569336
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.5253027413564268e-05,
            "disgust": 3.7337759837066664e-13,
            "fear": 1.807080116122961e-05,
            "happy": 66.51476287841797,
            "sad": 0.0004923974629491568,
            "surprise": 4.5711040002061054e-05,
            "neutral": 33.48466110229492
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 586,
            "y": 322,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0013764642644673586,
            "Man": 99.99862670898438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.016586845740675926,
            "indian": 0.07751245051622391,
            "black": 0.0046194265596568584,
            "white": 90.86676025390625,
            "middle eastern": 4.551360607147217,
            "latino hispanic": 4.483166217803955
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00649274094030261,
            "disgust": 2.0545483039313694e-06,
            "fear": 0.0036254082806408405,
            "happy": 94.56816864013672,
            "sad": 0.45836013555526733,
            "surprise": 0.022840416058897972,
            "neutral": 4.940512657165527
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 792,
            "y": 378,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.002357549499720335,
            "Man": 99.99764251708984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.024332283064723015,
            "indian": 0.0026114077772945166,
            "black": 0.00012775888899341226,
            "white": 97.56588745117188,
            "middle eastern": 0.964113175868988,
            "latino hispanic": 1.4429343938827515
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.029438724741339684,
            "disgust": 0.002011160831898451,
            "fear": 46.751216888427734,
            "happy": 21.713773727416992,
            "sad": 1.8015834093093872,
            "surprise": 0.0255286805331707,
            "neutral": 29.676443099975586
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 25,
        "region": {
            "x": 466,
            "y": 345,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.0017786624375730753,
            "Man": 99.99822235107422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.372585524630267e-06,
            "indian": 2.3471577605960192e-06,
            "black": 8.834276421509912e-09,
            "white": 99.96611785888672,
            "middle eastern": 0.022067327052354813,
            "latino hispanic": 0.011806744150817394
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.04951334372162819,
            "disgust": 1.877714453257795e-06,
            "fear": 0.4261789321899414,
            "happy": 95.15995788574219,
            "sad": 0.4067482650279999,
            "surprise": 0.0006871926016174257,
            "neutral": 3.9569156169891357
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 646,
            "y": 399,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 50.47355270385742,
            "Man": 49.52643966674805
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.7306559786666185e-06,
            "indian": 0.0004865419177804142,
            "black": 99.99949645996094,
            "white": 3.774000223444318e-09,
            "middle eastern": 3.595168884817923e-10,
            "latino hispanic": 1.3616428987006657e-05
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 3.2441107578051742e-06,
            "disgust": 5.196266680829176e-11,
            "fear": 7.3292439992656e-06,
            "happy": 99.97461700439453,
            "sad": 1.0943122106255032e-05,
            "surprise": 0.004622424021363258,
            "neutral": 0.020740482956171036
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 938,
            "y": 397,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 2.416872501373291,
            "Man": 97.5831298828125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 54.55690383911133,
            "indian": 6.829040050506592,
            "black": 0.5206303000450134,
            "white": 15.753799438476562,
            "middle eastern": 1.7213093042373657,
            "latino hispanic": 20.618316650390625
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0336875393986702,
            "disgust": 0.00010703422594815493,
            "fear": 0.044909585267305374,
            "happy": 65.78246307373047,
            "sad": 0.44658583402633667,
            "surprise": 0.06938444077968597,
            "neutral": 33.622867584228516
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 27,
            "y": 406,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.98905944824219,
            "Man": 0.01094284188002348
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 18.069196701049805,
            "indian": 6.260160446166992,
            "black": 1.5566737651824951,
            "white": 38.95881652832031,
            "middle eastern": 16.54388427734375,
            "latino hispanic": 18.61127281188965
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.9922865629196167,
            "disgust": 0.020028242841362953,
            "fear": 21.42119026184082,
            "happy": 16.457273483276367,
            "sad": 11.648092269897461,
            "surprise": 0.40944403409957886,
            "neutral": 49.05168533325195
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 292,
            "y": 402,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.005308793857693672,
            "Man": 99.99469757080078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1445854753255844,
            "indian": 0.07456426322460175,
            "black": 0.004783927462995052,
            "white": 88.97914123535156,
            "middle eastern": 3.0040392875671387,
            "latino hispanic": 7.792886257171631
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6639831066131592,
            "disgust": 0.3144587278366089,
            "fear": 21.83297348022461,
            "happy": 0.11075879633426666,
            "sad": 74.84705352783203,
            "surprise": 0.011661251075565815,
            "neutral": 1.2191098928451538
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 33,
        "region": {
            "x": 521,
            "y": 452,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 50.06776428222656,
            "Man": 49.932228088378906
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.938272476196289,
            "indian": 0.6449956893920898,
            "black": 97.14966583251953,
            "white": 0.0008416887139901519,
            "middle eastern": 0.0003477772115729749,
            "latino hispanic": 0.2658863663673401
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.45986780524253845,
            "disgust": 0.03161591291427612,
            "fear": 15.233302116394043,
            "happy": 2.180927276611328,
            "sad": 40.90552520751953,
            "surprise": 0.04400934278964996,
            "neutral": 41.14476013183594
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 688,
            "y": 486,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.799153208732605,
            "Man": 99.20084381103516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.004519397858530283,
            "indian": 0.00237765209749341,
            "black": 7.956130866659805e-05,
            "white": 98.57623291015625,
            "middle eastern": 1.000628113746643,
            "latino hispanic": 0.41616347432136536
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.001015872461721301,
            "disgust": 3.3302932030051255e-15,
            "fear": 0.00023453537141904235,
            "happy": 1.8721380233764648,
            "sad": 4.202092895866372e-05,
            "surprise": 4.0948634705273435e-07,
            "neutral": 98.12657165527344
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 829,
            "y": 498,
            "w": 88,
            "h": 88,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.016102707013487816,
            "Man": 99.98389434814453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 42.49192428588867,
            "indian": 1.464171051979065,
            "black": 1.3645116090774536,
            "white": 39.938018798828125,
            "middle eastern": 4.086794376373291,
            "latino hispanic": 10.654585838317871
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.003045345889404416,
            "disgust": 8.431543392362073e-06,
            "fear": 0.5283931493759155,
            "happy": 65.92398834228516,
            "sad": 1.8536856174468994,
            "surprise": 0.0016783422324806452,
            "neutral": 31.68919563293457
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 48,
        "region": {
            "x": 226,
            "y": 514,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.4138815999031067,
            "Man": 99.58612060546875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.631644248962402,
            "indian": 3.1040894985198975,
            "black": 0.8980830311775208,
            "white": 61.0362548828125,
            "middle eastern": 13.266934394836426,
            "latino hispanic": 11.062994956970215
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.624425506946864e-06,
            "disgust": 4.841533396415798e-08,
            "fear": 3.873557216138579e-05,
            "happy": 99.954833984375,
            "sad": 0.001130326883867383,
            "surprise": 0.0003727027797140181,
            "neutral": 0.04361109808087349
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 6,
            "y": 515,
            "w": 95,
            "h": 95,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.006661328487098217,
            "Man": 99.99333953857422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.6584802865982056,
            "indian": 0.9450225234031677,
            "black": 0.10171985626220703,
            "white": 61.34972381591797,
            "middle eastern": 16.351192474365234,
            "latino hispanic": 20.593856811523438
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 10.788166046142578,
            "disgust": 0.00021928192290943116,
            "fear": 2.2792582511901855,
            "happy": 1.2827969789505005,
            "sad": 53.637821197509766,
            "surprise": 0.002179845003411174,
            "neutral": 32.009552001953125
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 28,
        "region": {
            "x": 424,
            "y": 516,
            "w": 95,
            "h": 95,
            "left_eye": [
                487,
                554
            ],
            "right_eye": [
                452,
                555
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.014043821021914482,
            "Man": 99.98595428466797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1456780880689621,
            "indian": 0.48076725006103516,
            "black": 98.14688110351562,
            "white": 0.045316047966480255,
            "middle eastern": 0.032739344984292984,
            "latino hispanic": 1.1486213207244873
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.4766606909688562e-05,
            "disgust": 1.4415180160654018e-08,
            "fear": 2.980946192110423e-05,
            "happy": 96.95088195800781,
            "sad": 0.002584420843049884,
            "surprise": 0.0006970204412937164,
            "neutral": 3.045797348022461
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 610,
            "y": 579,
            "w": 85,
            "h": 85,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.99970245361328,
            "Man": 0.0002934821241069585
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.244768206262961e-05,
            "indian": 8.76672947924817e-06,
            "black": 4.751324311769167e-08,
            "white": 99.92436981201172,
            "middle eastern": 0.023568298667669296,
            "latino hispanic": 0.05200234428048134
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.8469211149916305e-10,
            "disgust": 7.944536769064617e-19,
            "fear": 6.433802709343572e-12,
            "happy": 99.92799377441406,
            "sad": 1.6810963732183382e-09,
            "surprise": 5.1809251999657135e-06,
            "neutral": 0.07200079411268234
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 745,
            "y": 693,
            "w": 101,
            "h": 101,
            "left_eye": [
                808,
                732
            ],
            "right_eye": [
                772,
                732
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99922180175781,
            "Man": 0.0007789339288137853
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.926987706710406e-10,
            "indian": 5.010014972328669e-12,
            "black": 1.7708223261228909e-15,
            "white": 99.99996185302734,
            "middle eastern": 6.680954811599804e-06,
            "latino hispanic": 2.693177157198079e-05
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.005638634727802e-06,
            "disgust": 2.503097555617284e-11,
            "fear": 1.0634028512868099e-05,
            "happy": 99.8873291015625,
            "sad": 9.406427125213668e-05,
            "surprise": 0.001628177473321557,
            "neutral": 0.11094030737876892
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 144,
            "y": 665,
            "w": 109,
            "h": 109,
            "left_eye": [
                215,
                707
            ],
            "right_eye": [
                176,
                708
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.96880340576172,
            "Man": 0.0312028955668211
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.5268996953964233,
            "indian": 1.0182746648788452,
            "black": 0.27604588866233826,
            "white": 59.38246536254883,
            "middle eastern": 15.665169715881348,
            "latino hispanic": 22.131145477294922
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.8562448644843244e-07,
            "disgust": 1.3040933888319728e-09,
            "fear": 8.692290975886863e-06,
            "happy": 98.89429473876953,
            "sad": 3.147714596707374e-05,
            "surprise": 0.0035981261171400547,
            "neutral": 1.1020710468292236
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 923,
            "y": 663,
            "w": 97,
            "h": 97,
            "left_eye": [
                984,
                701
            ],
            "right_eye": [
                948,
                702
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 79.56304931640625,
            "Man": 20.436941146850586
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 97.28445434570312,
            "indian": 0.6435569524765015,
            "black": 0.006285601761192083,
            "white": 0.22055009007453918,
            "middle eastern": 0.006060938350856304,
            "latino hispanic": 1.8390930891036987
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 6.941313586139586e-06,
            "disgust": 8.276979102106452e-10,
            "fear": 8.833078027237207e-06,
            "happy": 99.5110855102539,
            "sad": 0.00036935313255526125,
            "surprise": 0.005043629091233015,
            "neutral": 0.4834917187690735
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 37,
        "region": {
            "x": 478,
            "y": 673,
            "w": 104,
            "h": 104,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.00029647524934262037,
            "Man": 99.99970245361328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00026537920348346233,
            "indian": 0.0016694284277036786,
            "black": 1.1573875781323295e-05,
            "white": 97.12015533447266,
            "middle eastern": 1.2854697704315186,
            "latino hispanic": 1.5924186706542969
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.3618507385253906,
            "disgust": 2.484738615748938e-06,
            "fear": 0.024249771609902382,
            "happy": 76.98713684082031,
            "sad": 3.230213165283203,
            "surprise": 0.03100263886153698,
            "neutral": 18.365537643432617
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 316,
            "y": 633,
            "w": 152,
            "h": 152,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 40.15519332885742,
            "Man": 59.84480285644531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.8938066959381104,
            "indian": 0.16448991000652313,
            "black": 0.06509938091039658,
            "white": 88.35077667236328,
            "middle eastern": 3.877483367919922,
            "latino hispanic": 3.6483399868011475
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.17490732669830322,
            "disgust": 0.006373359821736813,
            "fear": 96.4694595336914,
            "happy": 0.1789754033088684,
            "sad": 2.9329066276550293,
            "surprise": 5.012557267036755e-06,
            "neutral": 0.23737403750419617
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 30,
        "region": {
            "x": 44,
            "y": 842,
            "w": 125,
            "h": 125,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 10.58006477355957,
            "Man": 89.4199447631836
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.8304383754730225,
            "indian": 0.009620626457035542,
            "black": 0.001341591589152813,
            "white": 96.15196228027344,
            "middle eastern": 0.7219223976135254,
            "latino hispanic": 1.2847106456756592
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00015628397522959858,
            "disgust": 2.2125934719952056e-06,
            "fear": 0.00032933580223470926,
            "happy": 97.86822509765625,
            "sad": 0.058471303433179855,
            "surprise": 7.839550380595028e-05,
            "neutral": 2.072742223739624
        },
        "dominant_emotion": "happy"
    }
]
let postal_service_clerk_data4 = [
    {
        "age": 37,
        "region": {
            "x": 311,
            "y": 50,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.6201644539833069,
            "Man": 99.37982940673828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9674295783042908,
            "indian": 5.341054439544678,
            "black": 0.4532926380634308,
            "white": 32.473236083984375,
            "middle eastern": 41.49935531616211,
            "latino hispanic": 19.26563262939453
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.023670756694628e-05,
            "disgust": 3.601831721766757e-08,
            "fear": 0.00010351810487918556,
            "happy": 98.99336242675781,
            "sad": 0.0004743204917758703,
            "surprise": 0.011953604407608509,
            "neutral": 0.9940999150276184
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 400,
            "y": 49,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.01271277479827404,
            "Man": 99.9872817993164
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.20014837384223938,
            "indian": 1.428693175315857,
            "black": 0.06070752814412117,
            "white": 51.11750411987305,
            "middle eastern": 27.240991592407227,
            "latino hispanic": 19.951961517333984
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.198455265694065e-05,
            "disgust": 4.759502644446911e-06,
            "fear": 0.6782951951026917,
            "happy": 98.96257781982422,
            "sad": 0.011481313966214657,
            "surprise": 0.02622923254966736,
            "neutral": 0.3214045464992523
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 223,
            "y": 46,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.2589889168739319,
            "Man": 99.74101257324219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.139300346374512,
            "indian": 7.616934776306152,
            "black": 4.517376899719238,
            "white": 26.99688720703125,
            "middle eastern": 18.929821014404297,
            "latino hispanic": 34.799678802490234
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 8.341039574588649e-07,
            "disgust": 1.7790459594380081e-07,
            "fear": 0.0006195140304043889,
            "happy": 99.30770111083984,
            "sad": 0.001025151344947517,
            "surprise": 0.006497781258076429,
            "neutral": 0.684151291847229
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 592,
            "y": 175,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.18616998195648193,
            "Man": 99.81382751464844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.228908917872502e-16,
            "indian": 5.851958864320703e-14,
            "black": 100.0,
            "white": 1.1139006787404787e-21,
            "middle eastern": 5.49076472550626e-21,
            "latino hispanic": 2.2688700758118942e-14
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.715325971540782e-11,
            "disgust": 8.515129057530993e-19,
            "fear": 2.8184553649279742e-11,
            "happy": 99.99597930908203,
            "sad": 6.331946966753321e-09,
            "surprise": 0.00030245797825045884,
            "neutral": 0.0037127418909221888
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 38,
        "region": {
            "x": 750,
            "y": 181,
            "w": 85,
            "h": 85,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.86071014404297,
            "Man": 0.13929283618927002
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.09504012763500214,
            "indian": 0.1724209487438202,
            "black": 0.004007345996797085,
            "white": 85.6615982055664,
            "middle eastern": 5.859710216522217,
            "latino hispanic": 8.207226753234863
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.174695590743795e-05,
            "disgust": 2.1085105217366618e-08,
            "fear": 0.008804867044091225,
            "happy": 99.9629898071289,
            "sad": 0.004258551634848118,
            "surprise": 0.0023229203652590513,
            "neutral": 0.0215617548674345
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 38,
        "region": {
            "x": 544,
            "y": 56,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.7392471432685852,
            "Man": 99.26075744628906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.4960756301879883,
            "indian": 1.5081284046173096,
            "black": 0.34782683849334717,
            "white": 67.30069732666016,
            "middle eastern": 14.237886428833008,
            "latino hispanic": 14.109383583068848
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.005212206393480301,
            "disgust": 0.01005116943269968,
            "fear": 6.858422756195068,
            "happy": 65.70442199707031,
            "sad": 1.238224744796753,
            "surprise": 0.1944090723991394,
            "neutral": 25.989259719848633
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 658,
            "y": 55,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0031398588325828314,
            "Man": 99.99686431884766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.1436867713928223,
            "indian": 6.074802398681641,
            "black": 45.43403625488281,
            "white": 13.55748176574707,
            "middle eastern": 14.410035133361816,
            "latino hispanic": 17.37995719909668
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.00030063765007071197,
            "disgust": 0.00013897306052967906,
            "fear": 0.3962463140487671,
            "happy": 98.32035064697266,
            "sad": 0.09164013713598251,
            "surprise": 0.08280535787343979,
            "neutral": 1.1085227727890015
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 23,
            "y": 61,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.032313257455825806,
            "Man": 99.96768188476562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 14.267926216125488,
            "indian": 9.554110527038574,
            "black": 3.2328267097473145,
            "white": 24.74424934387207,
            "middle eastern": 23.228281021118164,
            "latino hispanic": 24.97260856628418
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.983020294777816e-06,
            "disgust": 5.943419978393649e-09,
            "fear": 0.18156681954860687,
            "happy": 96.5687484741211,
            "sad": 0.003285009413957596,
            "surprise": 0.00701801897957921,
            "neutral": 3.239379405975342
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 786,
            "y": 65,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.06958329677581787,
            "Man": 99.930419921875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 12.754899978637695,
            "indian": 10.932537078857422,
            "black": 18.566545486450195,
            "white": 15.94546890258789,
            "middle eastern": 13.304123878479004,
            "latino hispanic": 28.49643325805664
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 4.223122893054487e-11,
            "disgust": 1.4686940846097504e-17,
            "fear": 3.871277257094796e-11,
            "happy": 99.9983901977539,
            "sad": 1.5538882680576904e-10,
            "surprise": 8.907149094738998e-06,
            "neutral": 0.0016009170794859529
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 172,
            "y": 143,
            "w": 83,
            "h": 83,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.761988639831543,
            "Man": 99.2380142211914
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.8462986946105957,
            "indian": 2.772007465362549,
            "black": 0.4921913146972656,
            "white": 59.73413848876953,
            "middle eastern": 17.95172119140625,
            "latino hispanic": 15.203646659851074
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.058085184544324875,
            "disgust": 0.002334428019821644,
            "fear": 0.17851409316062927,
            "happy": 21.5108642578125,
            "sad": 1.1593059301376343,
            "surprise": 0.014309721067547798,
            "neutral": 77.07659149169922
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 0,
            "y": 275,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.99,
        "gender": {
            "Woman": 73.18893432617188,
            "Man": 26.811059951782227
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.8581079244613647,
            "indian": 0.6666724681854248,
            "black": 0.16847114264965057,
            "white": 69.35415649414062,
            "middle eastern": 12.229313850402832,
            "latino hispanic": 16.72327423095703
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.1391102816560306e-05,
            "disgust": 3.987125733739827e-12,
            "fear": 0.2626166343688965,
            "happy": 17.787378311157227,
            "sad": 81.94989013671875,
            "surprise": 3.49354036368113e-13,
            "neutral": 0.00011210538650630042
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 699,
            "y": 293,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 98.69802856445312,
            "Man": 1.3019742965698242
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.3246719277049124e-08,
            "indian": 5.269811936159385e-06,
            "black": 100.0,
            "white": 1.981211852561393e-12,
            "middle eastern": 2.318418352263707e-13,
            "latino hispanic": 4.5858575958845904e-07
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.980023793985179e-15,
            "disgust": 2.8387267526454996e-26,
            "fear": 2.368717090443841e-18,
            "happy": 99.99853515625,
            "sad": 2.0713628295226938e-14,
            "surprise": 1.8044779608317185e-06,
            "neutral": 0.001466011512093246
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 887,
            "y": 49,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.31471848487854004,
            "Man": 99.6852798461914
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.035564273595809937,
            "indian": 1.005325198173523,
            "black": 0.022616833448410034,
            "white": 54.64699935913086,
            "middle eastern": 31.64258575439453,
            "latino hispanic": 12.646913528442383
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00019134579633828253,
            "disgust": 3.6491024957285845e-07,
            "fear": 0.2112550437450409,
            "happy": 96.87386322021484,
            "sad": 0.32934045791625977,
            "surprise": 0.01224044431000948,
            "neutral": 2.5731141567230225
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 299,
            "y": 164,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.6450387835502625,
            "Man": 99.35496520996094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.8395607526144886e-07,
            "indian": 5.372673513193149e-06,
            "black": 100.0,
            "white": 2.471810256476914e-10,
            "middle eastern": 5.407143066626929e-10,
            "latino hispanic": 1.5724405102446326e-06
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 4.645554508897476e-05,
            "disgust": 5.190676014010798e-11,
            "fear": 0.0065780021250247955,
            "happy": 0.008121532388031483,
            "sad": 0.9507429003715515,
            "surprise": 3.1175022741081193e-06,
            "neutral": 99.03450775146484
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 909,
            "y": 164,
            "w": 90,
            "h": 90,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.029023058712482452,
            "Man": 99.97097778320312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.18404217064380646,
            "indian": 0.4324803352355957,
            "black": 0.04015524685382843,
            "white": 71.58433532714844,
            "middle eastern": 15.852092742919922,
            "latino hispanic": 11.906899452209473
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.766362155488423e-08,
            "disgust": 4.9900421929304287e-14,
            "fear": 7.434496751557162e-08,
            "happy": 99.42753601074219,
            "sad": 1.3536623555410188e-07,
            "surprise": 0.006936183664947748,
            "neutral": 0.5655277967453003
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 44,
            "y": 182,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.41277313232422,
            "Man": 0.5872288346290588
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.15549688041210175,
            "indian": 0.5498765707015991,
            "black": 0.030542071908712387,
            "white": 75.71659851074219,
            "middle eastern": 14.957623481750488,
            "latino hispanic": 8.589866638183594
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.6053416132926941,
            "disgust": 15.74025821685791,
            "fear": 4.273880481719971,
            "happy": 71.18804931640625,
            "sad": 1.5949862003326416,
            "surprise": 0.030766652897000313,
            "neutral": 6.5667243003845215
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 448,
            "y": 170,
            "w": 91,
            "h": 91,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.1932051181793213,
            "Man": 99.80679321289062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.257143070342863e-08,
            "indian": 3.930169896193547e-06,
            "black": 100.0,
            "white": 2.5560869393315144e-11,
            "middle eastern": 4.632379549396326e-11,
            "latino hispanic": 7.245249094012252e-07
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 3.492093725299128e-08,
            "disgust": 3.4926193881457124e-12,
            "fear": 2.9986693128591924e-09,
            "happy": 63.217777252197266,
            "sad": 3.834206836472731e-06,
            "surprise": 0.00016225517902057618,
            "neutral": 36.78205490112305
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 208,
            "y": 270,
            "w": 96,
            "h": 96,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.006903435103595257,
            "Man": 99.99309539794922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.14402225613594055,
            "indian": 2.4894025325775146,
            "black": 0.11555326730012894,
            "white": 53.877891540527344,
            "middle eastern": 31.272815704345703,
            "latino hispanic": 12.100313186645508
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.013300402089953423,
            "disgust": 0.00024982908507809043,
            "fear": 9.339792251586914,
            "happy": 20.03173828125,
            "sad": 3.0129270553588867,
            "surprise": 0.04617495462298393,
            "neutral": 67.55581665039062
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 362,
            "y": 271,
            "w": 95,
            "h": 95,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.13294099271297455,
            "Man": 99.86705780029297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.13105681538581848,
            "indian": 0.1854701191186905,
            "black": 0.022533997893333435,
            "white": 85.85106658935547,
            "middle eastern": 7.926966667175293,
            "latino hispanic": 5.882901668548584
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00010166155698243529,
            "disgust": 1.5847572285565548e-05,
            "fear": 0.6940310597419739,
            "happy": 89.75923919677734,
            "sad": 0.043349482119083405,
            "surprise": 0.004400306846946478,
            "neutral": 9.498859405517578
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 830,
            "y": 283,
            "w": 87,
            "h": 87,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 47.661136627197266,
            "Man": 52.3388557434082
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.1731696128845215,
            "indian": 4.1103105545043945,
            "black": 2.777174949645996,
            "white": 32.27891159057617,
            "middle eastern": 12.878039360046387,
            "latino hispanic": 42.78239440917969
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.8741887382323075e-12,
            "disgust": 1.700736589160958e-19,
            "fear": 1.519779717655198e-13,
            "happy": 99.99824523925781,
            "sad": 1.1910688581251438e-11,
            "surprise": 1.5163307125476422e-06,
            "neutral": 0.0017559152329340577
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 84,
            "y": 329,
            "w": 73,
            "h": 73,
            "left_eye": [
                134,
                357
            ],
            "right_eye": [
                102,
                357
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.90128326416016,
            "Man": 0.09871234744787216
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.562002530088648e-05,
            "indian": 0.0032488866709172726,
            "black": 99.99635314941406,
            "white": 1.9205208445782773e-07,
            "middle eastern": 6.899272619875774e-08,
            "latino hispanic": 0.00036305407411418855
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 5.694627712091171e-13,
            "disgust": 3.834525784253838e-21,
            "fear": 4.097090722243735e-12,
            "happy": 99.99984741210938,
            "sad": 7.534285001442598e-11,
            "surprise": 4.870101292908657e-06,
            "neutral": 0.00015325886488426477
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 43,
        "region": {
            "x": 499,
            "y": 278,
            "w": 107,
            "h": 107,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.10179261118173599,
            "Man": 99.89820098876953
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.10825652629137039,
            "indian": 0.2114756554365158,
            "black": 0.023356499150395393,
            "white": 80.40782165527344,
            "middle eastern": 10.758508682250977,
            "latino hispanic": 8.490580558776855
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0003230437287129462,
            "disgust": 8.092601033737878e-10,
            "fear": 0.029531406238675117,
            "happy": 0.5742090940475464,
            "sad": 0.14021745324134827,
            "surprise": 0.0003543129423633218,
            "neutral": 99.25536346435547
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 904,
            "y": 363,
            "w": 101,
            "h": 101,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.04751397296786308,
            "Man": 99.95248413085938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.469794273376465,
            "indian": 9.818194389343262,
            "black": 2.186509847640991,
            "white": 30.361482620239258,
            "middle eastern": 21.731151580810547,
            "latino hispanic": 31.432870864868164
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.4222526260709856e-05,
            "disgust": 9.139230705557111e-09,
            "fear": 0.005398064851760864,
            "happy": 97.35541534423828,
            "sad": 0.009195211343467236,
            "surprise": 0.0012723872205242515,
            "neutral": 2.628706932067871
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 40,
        "region": {
            "x": 287,
            "y": 368,
            "w": 98,
            "h": 98,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.07400788366794586,
            "Man": 99.92598724365234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.18322613835334778,
            "indian": 0.4702971875667572,
            "black": 0.06729288399219513,
            "white": 72.5388412475586,
            "middle eastern": 16.829986572265625,
            "latino hispanic": 9.910355567932129
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.4769474293862004e-07,
            "disgust": 2.1327591082087594e-10,
            "fear": 2.0241506717866287e-05,
            "happy": 99.88212585449219,
            "sad": 0.00015195964078884572,
            "surprise": 0.00010612975165713578,
            "neutral": 0.11760120838880539
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 594,
            "y": 357,
            "w": 120,
            "h": 120,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.19023889303207397,
            "Man": 99.80976104736328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.039349380880594254,
            "indian": 0.1409512460231781,
            "black": 0.007637259550392628,
            "white": 82.48284149169922,
            "middle eastern": 10.589619636535645,
            "latino hispanic": 6.7396016120910645
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0007310777436941862,
            "disgust": 9.565100711483865e-09,
            "fear": 0.00010842049232451245,
            "happy": 94.72772216796875,
            "sad": 0.0017715796129778028,
            "surprise": 0.00014414980250876397,
            "neutral": 5.269527435302734
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 0,
            "y": 418,
            "w": 82,
            "h": 82,
            "left_eye": [
                54,
                452
            ],
            "right_eye": [
                14,
                453
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 5.2831573486328125,
            "Man": 94.71683502197266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.1122492629602604e-13,
            "indian": 3.2288307444394704e-11,
            "black": 100.0,
            "white": 3.5182441974444955e-19,
            "middle eastern": 4.2873394119022253e-19,
            "latino hispanic": 6.730533014601137e-13
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 6.785741675230383e-07,
            "disgust": 1.7358575736838418e-16,
            "fear": 5.957556936664332e-07,
            "happy": 58.86578369140625,
            "sad": 4.267312397132628e-05,
            "surprise": 0.04681628942489624,
            "neutral": 41.08736038208008
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 414,
            "y": 406,
            "w": 106,
            "h": 106,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.029010195285081863,
            "Man": 99.97099304199219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.238287746748028e-15,
            "indian": 1.9587286653743874e-11,
            "black": 100.0,
            "white": 5.544901838672652e-21,
            "middle eastern": 2.816823827762254e-21,
            "latino hispanic": 9.891039539060981e-14
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 3.316175242393249e-12,
            "disgust": 1.9978440453607905e-18,
            "fear": 2.537060839191696e-10,
            "happy": 99.82783508300781,
            "sad": 1.1500710606071607e-08,
            "surprise": 0.0001461236533941701,
            "neutral": 0.17201392352581024
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 769,
            "y": 412,
            "w": 85,
            "h": 85,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 89.1950454711914,
            "Man": 10.804948806762695
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.623319149017334,
            "indian": 3.535761594772339,
            "black": 1.1664482355117798,
            "white": 35.99723434448242,
            "middle eastern": 12.31396484375,
            "latino hispanic": 39.36327362060547
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 5.235162858774345e-10,
            "disgust": 1.2701169046827588e-15,
            "fear": 3.703195616822086e-08,
            "happy": 99.99932861328125,
            "sad": 1.189133769230466e-08,
            "surprise": 4.36425325460732e-05,
            "neutral": 0.0006345855654217303
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 150,
            "y": 418,
            "w": 109,
            "h": 109,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.08220263570547104,
            "Man": 99.91780090332031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3024455308914185,
            "indian": 6.936079025268555,
            "black": 0.6527869701385498,
            "white": 27.513254165649414,
            "middle eastern": 43.7996826171875,
            "latino hispanic": 19.79574966430664
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 6.665350216206178e-11,
            "disgust": 8.125003404370286e-17,
            "fear": 8.815868174361086e-11,
            "happy": 99.98287963867188,
            "sad": 6.834923294007922e-09,
            "surprise": 0.0005116972606629133,
            "neutral": 0.016611553728580475
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 869,
            "y": 511,
            "w": 105,
            "h": 105,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.27944526076316833,
            "Man": 99.7205581665039
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 35.90352249145508,
            "indian": 3.718109369277954,
            "black": 3.3268673419952393,
            "white": 29.359912872314453,
            "middle eastern": 6.8587822914123535,
            "latino hispanic": 20.832801818847656
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.4469987844640855e-06,
            "disgust": 8.266490476671606e-05,
            "fear": 0.31112584471702576,
            "happy": 99.46703338623047,
            "sad": 0.006479915231466293,
            "surprise": 0.00013163987023290247,
            "neutral": 0.21514751017093658
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 37,
        "region": {
            "x": 49,
            "y": 530,
            "w": 120,
            "h": 120,
            "left_eye": [
                128,
                578
            ],
            "right_eye": [
                87,
                581
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 61.13337326049805,
            "Man": 38.86663055419922
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 67.71275329589844,
            "indian": 7.484924793243408,
            "black": 0.7373725771903992,
            "white": 10.294857025146484,
            "middle eastern": 2.2400026321411133,
            "latino hispanic": 11.530083656311035
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.58402693581661e-09,
            "disgust": 7.071807874535485e-13,
            "fear": 4.351211657649401e-08,
            "happy": 99.9775390625,
            "sad": 7.588987926965274e-08,
            "surprise": 0.0015250692376866937,
            "neutral": 0.020934944972395897
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 505,
            "y": 531,
            "w": 124,
            "h": 124,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.11888161301612854,
            "Man": 99.8811264038086
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.462542943248991e-05,
            "indian": 8.08431432233192e-05,
            "black": 8.595947633693868e-07,
            "white": 99.56461334228516,
            "middle eastern": 0.2860989570617676,
            "latino hispanic": 0.1491815745830536
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0014467663131654263,
            "disgust": 2.4323614979948616e-06,
            "fear": 0.378524512052536,
            "happy": 9.42253589630127,
            "sad": 0.45096585154533386,
            "surprise": 0.03558746725320816,
            "neutral": 89.7109375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 41,
        "region": {
            "x": 687,
            "y": 535,
            "w": 118,
            "h": 118,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 98.76258850097656,
            "Man": 1.237404227256775
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.000396779621951282,
            "indian": 0.0003480898158159107,
            "black": 2.8290137379372027e-06,
            "white": 98.70628356933594,
            "middle eastern": 0.5124301910400391,
            "latino hispanic": 0.7805395126342773
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.968007361749187e-05,
            "disgust": 6.519944690808188e-07,
            "fear": 0.006552757695317268,
            "happy": 96.04698181152344,
            "sad": 0.005820701364427805,
            "surprise": 0.017696397379040718,
            "neutral": 3.9228427410125732
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 45,
        "region": {
            "x": 284,
            "y": 544,
            "w": 113,
            "h": 113,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.06550274044275284,
            "Man": 99.93450164794922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.858688354492188,
            "indian": 10.418554306030273,
            "black": 4.2261962890625,
            "white": 21.82319450378418,
            "middle eastern": 15.349356651306152,
            "latino hispanic": 34.324012756347656
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0010445257648825645,
            "disgust": 4.111362272851693e-07,
            "fear": 0.7741823196411133,
            "happy": 0.28035080432891846,
            "sad": 0.27486395835876465,
            "surprise": 0.004511290695518255,
            "neutral": 98.66504669189453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 845,
            "y": 678,
            "w": 134,
            "h": 134,
            "left_eye": [
                935,
                735
            ],
            "right_eye": [
                884,
                728
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0365477129817009,
            "Man": 99.96344757080078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.315950023532354e-16,
            "indian": 2.4523914528892105e-14,
            "black": 100.0,
            "white": 4.956912574228803e-23,
            "middle eastern": 1.0254019205023633e-22,
            "latino hispanic": 1.0562457441822578e-15
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 3.341795729028263e-09,
            "disgust": 2.4331402235892863e-13,
            "fear": 7.580089231851161e-07,
            "happy": 53.046207427978516,
            "sad": 0.0003820622805505991,
            "surprise": 0.002642006380483508,
            "neutral": 46.95077133178711
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 40,
        "region": {
            "x": 396,
            "y": 698,
            "w": 115,
            "h": 115,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.24069029092788696,
            "Man": 99.75930786132812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.20307902991771698,
            "indian": 0.12303035706281662,
            "black": 0.00850496906787157,
            "white": 91.20934295654297,
            "middle eastern": 5.289248943328857,
            "latino hispanic": 3.1667919158935547
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.417282833257431e-13,
            "disgust": 9.558869431859524e-20,
            "fear": 0.0003924323827959597,
            "happy": 1.5468000173568726,
            "sad": 1.0922814908553846e-05,
            "surprise": 0.04707891121506691,
            "neutral": 98.40572357177734
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 19,
            "y": 694,
            "w": 130,
            "h": 130,
            "left_eye": [
                99,
                746
            ],
            "right_eye": [
                53,
                748
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.92554473876953,
            "Man": 0.0744486004114151
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.93318939208984,
            "indian": 0.02347291260957718,
            "black": 7.158037988119759e-06,
            "white": 0.006649490911513567,
            "middle eastern": 3.350466840856825e-06,
            "latino hispanic": 0.03667772561311722
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.3621549443953995e-09,
            "disgust": 6.122880997247275e-15,
            "fear": 1.4762451883143513e-07,
            "happy": 99.86420440673828,
            "sad": 5.472314228427422e-07,
            "surprise": 0.001947319251485169,
            "neutral": 0.1338452845811844
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 222,
            "y": 702,
            "w": 115,
            "h": 115,
            "left_eye": [
                304,
                750
            ],
            "right_eye": [
                259,
                748
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 95.58431243896484,
            "Man": 4.41569185256958
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.457127240835689e-05,
            "indian": 4.58959439129103e-05,
            "black": 99.99991607666016,
            "white": 3.094450043428232e-11,
            "middle eastern": 4.410405200772072e-12,
            "latino hispanic": 1.1986285244347528e-06
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.4514460122618152e-14,
            "disgust": 1.2561591496215973e-23,
            "fear": 2.002032030825121e-13,
            "happy": 99.99908447265625,
            "sad": 3.322307923561696e-12,
            "surprise": 0.00010207810555584729,
            "neutral": 0.0008150341454893351
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 621,
            "y": 715,
            "w": 127,
            "h": 127,
            "left_eye": [
                699,
                764
            ],
            "right_eye": [
                652,
                764
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 95.56673431396484,
            "Man": 4.433262825012207
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.98368072509766,
            "indian": 0.0012433791998773813,
            "black": 2.3974905616341857e-06,
            "white": 0.0009944215416908264,
            "middle eastern": 6.707388706672646e-07,
            "latino hispanic": 0.014080836437642574
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 8.017628921885844e-11,
            "disgust": 1.55608389652863e-17,
            "fear": 1.6310819361819995e-10,
            "happy": 99.99976348876953,
            "sad": 4.0397163392213997e-10,
            "surprise": 4.745667681049781e-08,
            "neutral": 0.00023872230667620897
        },
        "dominant_emotion": "happy"
    }
]

console.log("Microsoft Results for Postal Service Clerk:");
const data = postal_service_clerk_data.concat(postal_service_clerk_data2, postal_service_clerk_data3, postal_service_clerk_data4);
console.log(processData(data));