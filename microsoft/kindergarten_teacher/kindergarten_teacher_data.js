const { processData } = require('../../data_processing.js');

let kindergarten_teacher_data = [
    {
        "age": 27,
        "region": {
            "x": 0,
            "y": 20,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 23.874954223632812,
            "Man": 76.12504577636719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 44.883548736572266,
            "indian": 3.116419792175293,
            "black": 1.4471793174743652,
            "white": 27.767948150634766,
            "middle eastern": 9.971464157104492,
            "latino hispanic": 12.813443183898926
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.01130974292755127,
            "disgust": 1.7771064619864774e-08,
            "fear": 0.04861433058977127,
            "happy": 99.1822738647461,
            "sad": 0.04358319565653801,
            "surprise": 0.5744766592979431,
            "neutral": 0.1397409439086914
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 319,
            "y": 91,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.5787751078605652,
            "Man": 99.42121887207031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.07513236254453659,
            "indian": 1.8243027925491333,
            "black": 0.08477339893579483,
            "white": 51.93302536010742,
            "middle eastern": 34.69840621948242,
            "latino hispanic": 11.384356498718262
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.372644812316139e-07,
            "disgust": 3.918326496599178e-10,
            "fear": 2.974630206153961e-06,
            "happy": 99.82540893554688,
            "sad": 3.372866558493115e-05,
            "surprise": 0.00011049526801798493,
            "neutral": 0.17443130910396576
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 509,
            "y": 128,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 65.16826629638672,
            "Man": 34.831729888916016
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.143453598022461,
            "indian": 12.753965377807617,
            "black": 1.0508769750595093,
            "white": 18.022258758544922,
            "middle eastern": 45.02341079711914,
            "latino hispanic": 19.006032943725586
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.876331225503236e-05,
            "disgust": 2.858351066947762e-08,
            "fear": 0.0005548731423914433,
            "happy": 99.96517944335938,
            "sad": 0.003656676970422268,
            "surprise": 0.0019282089779153466,
            "neutral": 0.028661254793405533
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 631,
            "y": 130,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 44.42116165161133,
            "Man": 55.57883834838867
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 19.9435977935791,
            "indian": 23.567256927490234,
            "black": 32.1252326965332,
            "white": 5.351897239685059,
            "middle eastern": 6.165817737579346,
            "latino hispanic": 12.846203804016113
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 2.2604885430155264e-07,
            "disgust": 2.776515302393978e-11,
            "fear": 3.269788635407167e-07,
            "happy": 98.96752166748047,
            "sad": 0.00047310665831901133,
            "surprise": 0.002426908817142248,
            "neutral": 1.0295847654342651
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 741,
            "y": 133,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 16.022911071777344,
            "Man": 83.97708892822266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.651491165161133,
            "indian": 13.391084671020508,
            "black": 0.8384612202644348,
            "white": 18.14792251586914,
            "middle eastern": 43.87541961669922,
            "latino hispanic": 19.09562110900879
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.055315124176559e-06,
            "disgust": 4.371034201255952e-09,
            "fear": 3.1987467082217336e-05,
            "happy": 98.10127258300781,
            "sad": 0.005362188443541527,
            "surprise": 4.82651885249652e-05,
            "neutral": 1.8932746648788452
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 826,
            "y": 142,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 70.4821548461914,
            "Man": 29.517845153808594
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.01578175462782383,
            "indian": 0.13862082362174988,
            "black": 0.0032684013713151217,
            "white": 81.49824523925781,
            "middle eastern": 15.175745010375977,
            "latino hispanic": 3.168334484100342
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.805295586469583e-07,
            "disgust": 5.261318811178306e-11,
            "fear": 2.1004516383982264e-06,
            "happy": 99.96923065185547,
            "sad": 0.0004892366705462337,
            "surprise": 8.462386176688597e-05,
            "neutral": 0.030200818553566933
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 578,
            "y": 188,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 29.255863189697266,
            "Man": 70.744140625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.13665203750133514,
            "indian": 0.23794864118099213,
            "black": 0.008600149303674698,
            "white": 84.5826187133789,
            "middle eastern": 9.843059539794922,
            "latino hispanic": 5.191117763519287
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2191728353500366,
            "disgust": 0.0494326651096344,
            "fear": 1.4240659475326538,
            "happy": 72.51846313476562,
            "sad": 1.2175276279449463,
            "surprise": 2.3037781715393066,
            "neutral": 21.267560958862305
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 213,
            "y": 95,
            "w": 62,
            "h": 62,
            "left_eye": [
                254,
                120
            ],
            "right_eye": [
                231,
                115
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.018574927002191544,
            "Man": 99.98143005371094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.008955230005085468,
            "indian": 8.098491668701172,
            "black": 0.042925864458084106,
            "white": 9.30337142944336,
            "middle eastern": 76.24409484863281,
            "latino hispanic": 6.30217170715332
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.008362418971955776,
            "disgust": 0.002660194179043174,
            "fear": 0.14617855846881866,
            "happy": 96.96682739257812,
            "sad": 0.6763702630996704,
            "surprise": 0.3429688513278961,
            "neutral": 1.8566323518753052
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 426,
            "y": 122,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 1.022151231765747,
            "Man": 98.97784423828125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.009725447744131088,
            "indian": 0.5987516045570374,
            "black": 0.0025057822931557894,
            "white": 77.27581787109375,
            "middle eastern": 20.186790466308594,
            "latino hispanic": 1.9264068603515625
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.4876953959465027,
            "disgust": 2.4835648559928813e-07,
            "fear": 0.04211665317416191,
            "happy": 73.03518676757812,
            "sad": 3.442760467529297,
            "surprise": 9.630675776861608e-06,
            "neutral": 22.992233276367188
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 688,
            "y": 207,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 43.72588348388672,
            "Man": 56.27411651611328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 60.437042236328125,
            "indian": 6.50647497177124,
            "black": 4.46773099899292,
            "white": 5.647243022918701,
            "middle eastern": 2.4564437866210938,
            "latino hispanic": 20.48507308959961
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0008092020289041102,
            "disgust": 3.219633754270035e-06,
            "fear": 0.003083425108343363,
            "happy": 99.46947479248047,
            "sad": 0.008808456361293793,
            "surprise": 0.039258312433958054,
            "neutral": 0.47856777906417847
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 127,
            "y": 210,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.86346435546875,
            "Man": 0.1365327686071396
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.412035942077637,
            "indian": 9.17377758026123,
            "black": 1.6004598140716553,
            "white": 27.901891708374023,
            "middle eastern": 31.584209442138672,
            "latino hispanic": 24.32762908935547
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.236583739228081e-05,
            "disgust": 2.1266355076932086e-07,
            "fear": 0.0002542463189456612,
            "happy": 99.8896713256836,
            "sad": 0.0018695805920287967,
            "surprise": 5.700299880118109e-06,
            "neutral": 0.10818001627922058
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 395,
            "y": 211,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 92.7003173828125,
            "Man": 7.29967737197876
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 23.912275314331055,
            "indian": 8.791915893554688,
            "black": 3.7596681118011475,
            "white": 24.969200134277344,
            "middle eastern": 16.763032913208008,
            "latino hispanic": 21.80390739440918
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0062298402190208435,
            "disgust": 0.004660024773329496,
            "fear": 0.07038746029138565,
            "happy": 96.6865005493164,
            "sad": 0.07608884572982788,
            "surprise": 0.0009637124021537602,
            "neutral": 3.1551637649536133
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 247,
            "y": 219,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.98507690429688,
            "Man": 0.014921831898391247
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.4788293838500977,
            "indian": 7.547342300415039,
            "black": 1.240621566772461,
            "white": 29.738039016723633,
            "middle eastern": 31.86334800720215,
            "latino hispanic": 26.13182830810547
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.00034366187173873186,
            "disgust": 0.00024626689264550805,
            "fear": 0.02330978959798813,
            "happy": 88.85221099853516,
            "sad": 0.04416554421186447,
            "surprise": 0.000898960861377418,
            "neutral": 11.07882308959961
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 522,
            "y": 225,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 81.3258056640625,
            "Man": 18.674196243286133
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 13.248607635498047,
            "indian": 11.109503746032715,
            "black": 2.8273143768310547,
            "white": 22.438140869140625,
            "middle eastern": 23.483007431030273,
            "latino hispanic": 26.893428802490234
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.02492927946150303,
            "disgust": 0.001018698327243328,
            "fear": 0.08941040933132172,
            "happy": 93.04436492919922,
            "sad": 0.1710798442363739,
            "surprise": 0.020261583849787712,
            "neutral": 6.648940086364746
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 452,
            "y": 224,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 79.90007781982422,
            "Man": 20.09992218017578
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.68843150138855,
            "indian": 8.30496597290039,
            "black": 1.5122225284576416,
            "white": 27.078746795654297,
            "middle eastern": 35.340003967285156,
            "latino hispanic": 25.075626373291016
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 37.78076934814453,
            "disgust": 35.433048248291016,
            "fear": 15.681414604187012,
            "happy": 3.9264566898345947,
            "sad": 5.374802589416504,
            "surprise": 0.2168370485305786,
            "neutral": 1.5866758823394775
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 30,
        "region": {
            "x": 17,
            "y": 233,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.89922332763672,
            "Man": 0.10077816992998123
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.005246493499726057,
            "indian": 0.025290848687291145,
            "black": 0.00035638950066640973,
            "white": 89.20349884033203,
            "middle eastern": 8.574065208435059,
            "latino hispanic": 2.191546678543091
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.337472298881039e-05,
            "disgust": 1.1620500828257718e-07,
            "fear": 0.0013653894420713186,
            "happy": 99.93973541259766,
            "sad": 0.0006376187084242702,
            "surprise": 0.00010512999870115891,
            "neutral": 0.05811771750450134
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 605,
            "y": 245,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99442291259766,
            "Man": 0.00557923736050725
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 11.203916549682617,
            "indian": 22.287256240844727,
            "black": 41.25032424926758,
            "white": 5.412108898162842,
            "middle eastern": 6.007363796234131,
            "latino hispanic": 13.839035034179688
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0010476976167410612,
            "disgust": 3.8105065769400426e-09,
            "fear": 8.766330211074091e-06,
            "happy": 96.47357177734375,
            "sad": 4.881577842752449e-05,
            "surprise": 0.009636551141738892,
            "neutral": 3.5156919956207275
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 850,
            "y": 247,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99932861328125,
            "Man": 0.0006677428027614951
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.069544553756714,
            "indian": 12.14197826385498,
            "black": 2.996549129486084,
            "white": 18.509124755859375,
            "middle eastern": 30.05105209350586,
            "latino hispanic": 33.231754302978516
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.8699059864957235e-06,
            "disgust": 1.113100456251459e-08,
            "fear": 0.0011567700421437621,
            "happy": 99.9111099243164,
            "sad": 0.0005239047459326684,
            "surprise": 0.007133667357265949,
            "neutral": 0.08007536828517914
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 970,
            "y": 247,
            "w": 53,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.5165023803711,
            "Man": 0.48349493741989136
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0006507673533633351,
            "indian": 0.0010472392896190286,
            "black": 1.131433054979425e-05,
            "white": 99.08989715576172,
            "middle eastern": 0.5993078351020813,
            "latino hispanic": 0.3090847134590149
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6044516542024212e-06,
            "disgust": 4.112016283031039e-10,
            "fear": 0.0017957574455067515,
            "happy": 99.90565490722656,
            "sad": 0.00037997716572135687,
            "surprise": 0.0005689859972335398,
            "neutral": 0.09160463511943817
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 339,
            "y": 252,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.95946502685547,
            "Man": 0.040536392480134964
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.2323358952999115,
            "indian": 0.5393621921539307,
            "black": 0.020862484350800514,
            "white": 75.87918090820312,
            "middle eastern": 14.227433204650879,
            "latino hispanic": 9.100824356079102
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00023853310267440975,
            "disgust": 2.9051050660200417e-05,
            "fear": 0.01383174117654562,
            "happy": 99.71849822998047,
            "sad": 0.06293225288391113,
            "surprise": 0.001312415231950581,
            "neutral": 0.2031615525484085
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 721,
            "y": 262,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 95.37610626220703,
            "Man": 4.623892784118652
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.6187574863433838,
            "indian": 3.423985004425049,
            "black": 0.32282787561416626,
            "white": 39.243247985839844,
            "middle eastern": 33.5792236328125,
            "latino hispanic": 22.81196403503418
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.4945001718588173e-05,
            "disgust": 8.282432872874779e-07,
            "fear": 0.16006551682949066,
            "happy": 99.7799301147461,
            "sad": 0.028650185093283653,
            "surprise": 0.004325118847191334,
            "neutral": 0.026984291151165962
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 179,
            "y": 267,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 96.65950775146484,
            "Man": 3.340489387512207
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7978866100311279,
            "indian": 0.577042818069458,
            "black": 0.04509604722261429,
            "white": 72.11956024169922,
            "middle eastern": 13.428850173950195,
            "latino hispanic": 13.031569480895996
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.350038386111919e-08,
            "disgust": 1.179240212423327e-11,
            "fear": 1.7101233424909879e-06,
            "happy": 99.97997283935547,
            "sad": 1.4202503734850325e-05,
            "surprise": 5.089081241749227e-05,
            "neutral": 0.019949696958065033
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 908,
            "y": 197,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 8.88956356048584,
            "Man": 91.11043548583984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.3456411361694336,
            "indian": 1.0564826726913452,
            "black": 0.18498581647872925,
            "white": 65.82771301269531,
            "middle eastern": 14.983309745788574,
            "latino hispanic": 14.601874351501465
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.010677000507712364,
            "disgust": 6.1524151533376426e-06,
            "fear": 78.88216400146484,
            "happy": 19.464481353759766,
            "sad": 0.5787114500999451,
            "surprise": 0.1415964812040329,
            "neutral": 0.9223644137382507
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 30,
        "region": {
            "x": 243,
            "y": 329,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 95.9444580078125,
            "Man": 4.055542945861816
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.012222100049257278,
            "indian": 2.480545997619629,
            "black": 0.007320922799408436,
            "white": 4.094531059265137,
            "middle eastern": 92.743408203125,
            "latino hispanic": 0.6619720458984375
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.03582453355193138,
            "disgust": 0.0015496410196647048,
            "fear": 0.1799142211675644,
            "happy": 96.10142517089844,
            "sad": 0.44337746500968933,
            "surprise": 0.4130389988422394,
            "neutral": 2.8248801231384277
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 378,
            "y": 329,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99805450439453,
            "Man": 0.001945733092725277
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.610173225402832,
            "indian": 9.131278991699219,
            "black": 1.7705858945846558,
            "white": 28.726293563842773,
            "middle eastern": 25.864830017089844,
            "latino hispanic": 29.896839141845703
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.05852982774376869,
            "disgust": 0.007355577778071165,
            "fear": 39.74311447143555,
            "happy": 59.55337142944336,
            "sad": 0.05904418230056763,
            "surprise": 0.10320113599300385,
            "neutral": 0.47537991404533386
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 1,
            "y": 337,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 14.007798194885254,
            "Man": 85.99220275878906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.28792357444763184,
            "indian": 0.9955987334251404,
            "black": 0.040425363928079605,
            "white": 60.00474166870117,
            "middle eastern": 24.330211639404297,
            "latino hispanic": 14.341104507446289
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.570931659373059e-10,
            "disgust": 3.2032998825638932e-15,
            "fear": 5.7265507891202105e-09,
            "happy": 99.99483489990234,
            "sad": 5.539073981708498e-07,
            "surprise": 1.6608350051683374e-05,
            "neutral": 0.005152144469320774
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 116,
            "y": 333,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.94497680664062,
            "Man": 0.055019084364175797
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.1634185314178467,
            "indian": 8.254962921142578,
            "black": 0.8444380760192871,
            "white": 31.323163986206055,
            "middle eastern": 33.29225540161133,
            "latino hispanic": 24.12176513671875
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.734669865527394e-07,
            "disgust": 3.009036975750584e-13,
            "fear": 6.359582194193081e-09,
            "happy": 99.98516082763672,
            "sad": 5.5518114095320925e-05,
            "surprise": 3.0681516363983974e-05,
            "neutral": 0.014757721684873104
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 801,
            "y": 334,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.98483276367188,
            "Man": 0.015160394832491875
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.884352922439575,
            "indian": 6.779482841491699,
            "black": 1.5165926218032837,
            "white": 30.99595832824707,
            "middle eastern": 27.46305274963379,
            "latino hispanic": 30.360563278198242
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.782352359849028e-05,
            "disgust": 1.7434371102353907e-07,
            "fear": 0.03720763325691223,
            "happy": 99.92571258544922,
            "sad": 0.004792910534888506,
            "surprise": 0.0003073560365010053,
            "neutral": 0.03193818777799606
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 919,
            "y": 334,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 98.97615051269531,
            "Man": 1.0238479375839233
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.930329322814941,
            "indian": 6.525577068328857,
            "black": 1.3378024101257324,
            "white": 33.79336166381836,
            "middle eastern": 26.52680206298828,
            "latino hispanic": 25.886127471923828
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00040812528459355235,
            "disgust": 5.097830580780283e-06,
            "fear": 0.3890301585197449,
            "happy": 98.72819519042969,
            "sad": 0.1190580427646637,
            "surprise": 0.003855477785691619,
            "neutral": 0.7594366669654846
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 673,
            "y": 342,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.90728759765625,
            "Man": 0.09270881116390228
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 21.205402374267578,
            "indian": 19.656328201293945,
            "black": 6.193348407745361,
            "white": 10.604511260986328,
            "middle eastern": 11.780600547790527,
            "latino hispanic": 30.559814453125
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.13881385326385498,
            "disgust": 0.08185788989067078,
            "fear": 61.60894012451172,
            "happy": 21.627195358276367,
            "sad": 6.443441390991211,
            "surprise": 0.0027594715356826782,
            "neutral": 10.096988677978516
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 32,
        "region": {
            "x": 501,
            "y": 353,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.91677856445312,
            "Man": 0.08321749418973923
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 52.16852569580078,
            "indian": 14.555303573608398,
            "black": 2.2052114009857178,
            "white": 8.740120887756348,
            "middle eastern": 3.9366729259490967,
            "latino hispanic": 18.394163131713867
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.00016766729822847992,
            "disgust": 8.876766344201314e-08,
            "fear": 0.000338642654241994,
            "happy": 94.13369750976562,
            "sad": 0.0016738938866183162,
            "surprise": 0.0019001848995685577,
            "neutral": 5.862221717834473
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 640,
            "y": 394,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99858093261719,
            "Man": 0.0014213983668014407
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.2633954882621765,
            "indian": 0.3445289134979248,
            "black": 0.010133250616490841,
            "white": 80.08291625976562,
            "middle eastern": 9.278294563293457,
            "latino hispanic": 10.020727157592773
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.14820025861263275,
            "disgust": 0.048477113246917725,
            "fear": 5.445793628692627,
            "happy": 64.65927124023438,
            "sad": 25.736188888549805,
            "surprise": 0.0011878369841724634,
            "neutral": 3.9608829021453857
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 195,
            "y": 413,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.81707000732422,
            "Man": 0.1829259842634201
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.2778520584106445,
            "indian": 7.980727672576904,
            "black": 2.2463924884796143,
            "white": 30.15752410888672,
            "middle eastern": 24.387676239013672,
            "latino hispanic": 29.949827194213867
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0061027416959404945,
            "disgust": 0.0009774662321433425,
            "fear": 2.043518304824829,
            "happy": 47.602073669433594,
            "sad": 1.0598007440567017,
            "surprise": 0.04150519147515297,
            "neutral": 49.24602127075195
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 344,
            "y": 414,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9989013671875,
            "Man": 0.0010954919271171093
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 10.20995807647705,
            "indian": 12.363837242126465,
            "black": 3.572288990020752,
            "white": 22.06894874572754,
            "middle eastern": 22.3306884765625,
            "latino hispanic": 29.454282760620117
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0017017662758007646,
            "disgust": 4.458810053620255e-06,
            "fear": 0.0392206646502018,
            "happy": 99.1947021484375,
            "sad": 0.004040478728711605,
            "surprise": 0.09140535444021225,
            "neutral": 0.6689323782920837
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 56,
            "y": 429,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 83.57069396972656,
            "Man": 16.429309844970703
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.1895938366651535,
            "indian": 2.738819122314453,
            "black": 0.12228100001811981,
            "white": 34.205101013183594,
            "middle eastern": 47.69026184082031,
            "latino hispanic": 15.053945541381836
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.0008100973209366202,
            "disgust": 6.575374555950475e-08,
            "fear": 0.023571649566292763,
            "happy": 93.2086181640625,
            "sad": 4.725006580352783,
            "surprise": 4.0073115087579936e-05,
            "neutral": 2.04195237159729
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 962,
            "y": 377,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.65412139892578,
            "Man": 0.3458791971206665
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.5054619312286377,
            "indian": 3.568033218383789,
            "black": 0.40167883038520813,
            "white": 41.95602798461914,
            "middle eastern": 26.67953109741211,
            "latino hispanic": 25.889263153076172
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.004177862778306007,
            "disgust": 0.0003318575327284634,
            "fear": 0.9618017673492432,
            "happy": 86.25591278076172,
            "sad": 0.3152133822441101,
            "surprise": 0.025201139971613884,
            "neutral": 12.43736743927002
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 293,
            "y": 479,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.997314453125,
            "Man": 0.0026787053793668747
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.100494623184204,
            "indian": 1.7091639041900635,
            "black": 0.26812484860420227,
            "white": 54.40457534790039,
            "middle eastern": 16.05484390258789,
            "latino hispanic": 25.462791442871094
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 10.96552848815918,
            "disgust": 0.021826358512043953,
            "fear": 12.241065979003906,
            "happy": 0.1630190759897232,
            "sad": 36.77505111694336,
            "surprise": 0.014217635616660118,
            "neutral": 39.81928634643555
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 718,
            "y": 486,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 96.69365692138672,
            "Man": 3.3063406944274902
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.13900284469127655,
            "indian": 0.15391714870929718,
            "black": 0.010769795626401901,
            "white": 82.90868377685547,
            "middle eastern": 7.911073207855225,
            "latino hispanic": 8.876553535461426
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.04856478050351143,
            "disgust": 0.002035971265286207,
            "fear": 0.22659313678741455,
            "happy": 88.98857879638672,
            "sad": 1.9998259544372559,
            "surprise": 0.11615216732025146,
            "neutral": 8.61825180053711
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 860,
            "y": 432,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99601745605469,
            "Man": 0.003986254800111055
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.921808242797852,
            "indian": 11.245020866394043,
            "black": 2.7207045555114746,
            "white": 30.12482452392578,
            "middle eastern": 25.242107391357422,
            "latino hispanic": 21.745534896850586
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.49752071499824524,
            "disgust": 0.24741756916046143,
            "fear": 19.07293128967285,
            "happy": 23.156492233276367,
            "sad": 5.530158996582031,
            "surprise": 0.18832537531852722,
            "neutral": 51.30714797973633
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 429,
            "y": 453,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 96.6783447265625,
            "Man": 3.3216590881347656
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.038113970309495926,
            "indian": 0.5251670479774475,
            "black": 0.009376638568937778,
            "white": 67.23055267333984,
            "middle eastern": 26.73551368713379,
            "latino hispanic": 5.461277008056641
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.3854165170922315e-12,
            "disgust": 2.107515644704466e-21,
            "fear": 9.857295101695085e-13,
            "happy": 100.0,
            "sad": 1.463541366319987e-06,
            "surprise": 2.1803444466561572e-11,
            "neutral": 1.9632247472145536e-07
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 633,
            "y": 462,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 69.18617248535156,
            "Man": 30.813827514648438
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 15.240189552307129,
            "indian": 3.206831693649292,
            "black": 4.749781131744385,
            "white": 52.95281982421875,
            "middle eastern": 12.81389331817627,
            "latino hispanic": 11.036494255065918
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 31.069843292236328,
            "disgust": 0.005429919343441725,
            "fear": 0.9972231984138489,
            "happy": 0.013359173201024532,
            "sad": 47.74034118652344,
            "surprise": 0.0023336068261414766,
            "neutral": 20.171459197998047
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 30,
        "region": {
            "x": 568,
            "y": 436,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 98.4720458984375,
            "Man": 1.5279600620269775
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 21.880098342895508,
            "indian": 5.238105297088623,
            "black": 0.914046049118042,
            "white": 29.929832458496094,
            "middle eastern": 18.95397186279297,
            "latino hispanic": 23.08395004272461
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.398714565923001e-07,
            "disgust": 1.844456011534934e-12,
            "fear": 1.5902519123756065e-07,
            "happy": 99.99078369140625,
            "sad": 0.0011812512530013919,
            "surprise": 2.981222166908992e-07,
            "neutral": 0.00804195087403059
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 850,
            "y": 496,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 54.79999923706055,
            "Man": 45.20000457763672
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.6834478378295898,
            "indian": 5.275859832763672,
            "black": 0.8789892792701721,
            "white": 33.48613739013672,
            "middle eastern": 27.805028915405273,
            "latino hispanic": 30.870529174804688
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.0147782747725884e-11,
            "disgust": 2.640295374796026e-19,
            "fear": 2.0380324095015112e-09,
            "happy": 100.0,
            "sad": 3.2536900107515976e-07,
            "surprise": 1.5085173110662708e-09,
            "neutral": 2.4548339183638745e-07
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 19,
            "y": 500,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.94709777832031,
            "Man": 0.05290242284536362
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 12.941690444946289,
            "indian": 10.444367408752441,
            "black": 5.669017791748047,
            "white": 17.511856079101562,
            "middle eastern": 13.360739707946777,
            "latino hispanic": 40.072330474853516
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.011752080172300339,
            "disgust": 1.9452331798675004e-06,
            "fear": 0.13817253708839417,
            "happy": 99.64012908935547,
            "sad": 0.0004465717065613717,
            "surprise": 0.10393080860376358,
            "neutral": 0.10556495934724808
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 146,
            "y": 499,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 96.08258056640625,
            "Man": 3.9174153804779053
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.88733971118927,
            "indian": 1.800027847290039,
            "black": 0.5984894037246704,
            "white": 57.98672866821289,
            "middle eastern": 19.210195541381836,
            "latino hispanic": 18.517221450805664
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.2126854956150055,
            "disgust": 2.634675979606982e-07,
            "fear": 0.08553921431303024,
            "happy": 1.4553403854370117,
            "sad": 3.16631817817688,
            "surprise": 0.06286294013261795,
            "neutral": 95.01725769042969
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 226,
            "y": 606,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 91.185546875,
            "Man": 8.814454078674316
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.2778605222702026,
            "indian": 2.3436784744262695,
            "black": 0.28111037611961365,
            "white": 52.25593948364258,
            "middle eastern": 26.029314041137695,
            "latino hispanic": 17.812101364135742
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.012839099392294884,
            "disgust": 4.189134779153392e-05,
            "fear": 0.004888701252639294,
            "happy": 85.66594696044922,
            "sad": 3.57296085357666,
            "surprise": 0.011965188197791576,
            "neutral": 10.731362342834473
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 719,
            "y": 610,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 18.168787002563477,
            "Man": 81.83121490478516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.04218648001551628,
            "indian": 0.11617032438516617,
            "black": 0.002003355883061886,
            "white": 83.6025619506836,
            "middle eastern": 12.440887451171875,
            "latino hispanic": 3.796198844909668
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.003620001138188e-07,
            "disgust": 6.993534223953546e-12,
            "fear": 2.990467874042224e-05,
            "happy": 99.87354278564453,
            "sad": 0.0036978942807763815,
            "surprise": 7.98518885858357e-05,
            "neutral": 0.12265531718730927
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 560,
            "y": 605,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 99.93592071533203,
            "Man": 0.06408386677503586
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.0732171535491943,
            "indian": 10.395721435546875,
            "black": 83.07624053955078,
            "white": 0.41658276319503784,
            "middle eastern": 0.26908987760543823,
            "latino hispanic": 3.7691476345062256
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 4.173965135123581e-05,
            "disgust": 1.4135854708996476e-09,
            "fear": 7.2071525210049e-05,
            "happy": 99.8860855102539,
            "sad": 0.0018606324447318912,
            "surprise": 0.0007242654100991786,
            "neutral": 0.11121465265750885
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 399,
            "y": 615,
            "w": 72,
            "h": 72,
            "left_eye": [
                438,
                641
            ],
            "right_eye": [
                412,
                640
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 85.4672622680664,
            "Man": 14.532743453979492
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0009831415954977274,
            "indian": 0.006859419867396355,
            "black": 1.9319908460602164e-05,
            "white": 94.00965118408203,
            "middle eastern": 4.8662543296813965,
            "latino hispanic": 1.1162325143814087
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0040611205622553825,
            "disgust": 6.628675386366467e-11,
            "fear": 0.0005303723155520856,
            "happy": 99.95050811767578,
            "sad": 0.00017435596964787692,
            "surprise": 2.7223943106946535e-05,
            "neutral": 0.04470260441303253
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 871,
            "y": 646,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 80.07830810546875,
            "Man": 19.921688079833984
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 88.56656646728516,
            "indian": 2.045342445373535,
            "black": 0.07462523877620697,
            "white": 1.0553669929504395,
            "middle eastern": 0.04677785933017731,
            "latino hispanic": 8.211318969726562
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.24605339765548706,
            "disgust": 1.2691773918049876e-05,
            "fear": 8.542457580566406,
            "happy": 11.680008888244629,
            "sad": 12.570465087890625,
            "surprise": 0.1367499679327011,
            "neutral": 66.82424926757812
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 75,
            "y": 691,
            "w": 72,
            "h": 72,
            "left_eye": [
                124,
                716
            ],
            "right_eye": [
                97,
                718
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 4.498028755187988,
            "Man": 95.5019760131836
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 86.42578887939453,
            "indian": 2.9304840564727783,
            "black": 0.6888568997383118,
            "white": 3.141664981842041,
            "middle eastern": 0.32237014174461365,
            "latino hispanic": 6.490837097167969
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.010294719599187374,
            "disgust": 3.933632530817022e-09,
            "fear": 0.0006249975995160639,
            "happy": 0.0021325103007256985,
            "sad": 0.18394455313682556,
            "surprise": 0.0006928392685949802,
            "neutral": 99.80231475830078
        },
        "dominant_emotion": "neutral"
    }
]
let kindergarten_teacher_data2 = [
    {
        "age": 38,
        "region": {
            "x": 435,
            "y": 78,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.09074965119361877,
            "Man": 99.90924835205078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 23.68561363220215,
            "indian": 15.95947265625,
            "black": 54.09708023071289,
            "white": 0.7762628793716431,
            "middle eastern": 1.0002483129501343,
            "latino hispanic": 4.481320858001709
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.35405839318814e-10,
            "disgust": 4.675168242995814e-17,
            "fear": 8.391390360351636e-11,
            "happy": 99.9752426147461,
            "sad": 7.194574891400407e-07,
            "surprise": 9.45105327332385e-10,
            "neutral": 0.02475961670279503
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 619,
            "y": 96,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.23940086364746094,
            "Man": 99.76058959960938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.738797187805176,
            "indian": 8.740111351013184,
            "black": 17.47068977355957,
            "white": 19.884323120117188,
            "middle eastern": 10.054999351501465,
            "latino hispanic": 39.11107635498047
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.960588269867003e-05,
            "disgust": 6.400039609388841e-09,
            "fear": 2.703611471588374e-06,
            "happy": 98.77596282958984,
            "sad": 0.004446851555258036,
            "surprise": 0.0034975975286215544,
            "neutral": 1.216064453125
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 108,
            "y": 108,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.24522195756435394,
            "Man": 99.7547836303711
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.3970911502838135,
            "indian": 16.007061004638672,
            "black": 0.7667649984359741,
            "white": 17.871858596801758,
            "middle eastern": 41.77947998046875,
            "latino hispanic": 21.177743911743164
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 4.306831280498358e-11,
            "disgust": 1.6807087143259924e-15,
            "fear": 1.2223065226635299e-08,
            "happy": 99.99944305419922,
            "sad": 2.4348119040951133e-06,
            "surprise": 9.864976391327218e-08,
            "neutral": 0.000563261506613344
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 832,
            "y": 108,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.22004511952400208,
            "Man": 99.77996063232422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.4132076501846313,
            "indian": 3.1249337196350098,
            "black": 1.8735392093658447,
            "white": 50.70273208618164,
            "middle eastern": 18.1630916595459,
            "latino hispanic": 24.722503662109375
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.026654763147234917,
            "disgust": 0.000174318251083605,
            "fear": 0.025709357112646103,
            "happy": 98.6659164428711,
            "sad": 0.04152609035372734,
            "surprise": 0.008702976629137993,
            "neutral": 1.2313247919082642
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 517,
            "y": 117,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.43307495117188,
            "Man": 0.5669243931770325
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.06778327375650406,
            "indian": 0.5654670000076294,
            "black": 0.014155177399516106,
            "white": 64.37889099121094,
            "middle eastern": 21.9168701171875,
            "latino hispanic": 13.056835174560547
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0017408346757292747,
            "disgust": 1.055756229106919e-06,
            "fear": 0.0007809513481333852,
            "happy": 98.81132507324219,
            "sad": 0.008521756157279015,
            "surprise": 0.05453026294708252,
            "neutral": 1.1231006383895874
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 245,
            "y": 120,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 17.87823486328125,
            "Man": 82.12176513671875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.510421752929688,
            "indian": 13.223736763000488,
            "black": 6.104634761810303,
            "white": 23.34276580810547,
            "middle eastern": 22.88254737854004,
            "latino hispanic": 18.93589210510254
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2779039025190286e-05,
            "disgust": 2.0124350896821852e-07,
            "fear": 0.005917426664382219,
            "happy": 99.98184967041016,
            "sad": 3.153908619424328e-05,
            "surprise": 0.0007587376167066395,
            "neutral": 0.011436855420470238
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 740,
            "y": 123,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.2607978284358978,
            "Man": 99.73919677734375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.083526611328125,
            "indian": 1.776441216468811,
            "black": 0.457584947347641,
            "white": 77.68376159667969,
            "middle eastern": 8.703587532043457,
            "latino hispanic": 9.295097351074219
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 36.56111526489258,
            "disgust": 0.3809778392314911,
            "fear": 38.65169143676758,
            "happy": 16.371740341186523,
            "sad": 3.010145664215088,
            "surprise": 0.09593528509140015,
            "neutral": 4.928395748138428
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 34,
        "region": {
            "x": 344,
            "y": 126,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.7530746459961,
            "Man": 0.24692665040493011
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 20.008209228515625,
            "indian": 12.786605834960938,
            "black": 4.440069675445557,
            "white": 18.188451766967773,
            "middle eastern": 25.046436309814453,
            "latino hispanic": 19.53022003173828
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.02038002945482731,
            "disgust": 0.00011956613889196888,
            "fear": 0.007535845041275024,
            "happy": 97.8534927368164,
            "sad": 0.9533644318580627,
            "surprise": 4.022625580546446e-05,
            "neutral": 1.1650621891021729
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 868,
            "y": 198,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99578857421875,
            "Man": 0.004203317686915398
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.128371238708496,
            "indian": 6.328143119812012,
            "black": 1.595474362373352,
            "white": 38.659385681152344,
            "middle eastern": 25.927412033081055,
            "latino hispanic": 22.3612117767334
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.015810124576091766,
            "disgust": 1.069424683919351e-06,
            "fear": 0.003918863832950592,
            "happy": 99.7108383178711,
            "sad": 0.0035292026586830616,
            "surprise": 0.0960429310798645,
            "neutral": 0.1698674112558365
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 480,
            "y": 202,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99677276611328,
            "Man": 0.0032323135528713465
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.734974384307861,
            "indian": 7.587210178375244,
            "black": 1.9105814695358276,
            "white": 32.53341293334961,
            "middle eastern": 21.935800552368164,
            "latino hispanic": 31.29801368713379
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.001106012030504644,
            "disgust": 6.550644684466533e-07,
            "fear": 0.002648386638611555,
            "happy": 97.70362091064453,
            "sad": 0.0010621491819620132,
            "surprise": 0.0010646114824339747,
            "neutral": 2.290503978729248
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 928,
            "y": 156,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 90.7236099243164,
            "Man": 9.27639389038086
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 11.979186058044434,
            "indian": 10.255434036254883,
            "black": 5.850368022918701,
            "white": 24.927165985107422,
            "middle eastern": 21.608613967895508,
            "latino hispanic": 25.379228591918945
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.00941452570259571,
            "disgust": 1.484548283769982e-05,
            "fear": 0.0018041238654404879,
            "happy": 99.46405792236328,
            "sad": 0.45701414346694946,
            "surprise": 8.72503369464539e-05,
            "neutral": 0.06759866327047348
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 388,
            "y": 168,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99910736083984,
            "Man": 0.000888562120962888
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.333906650543213,
            "indian": 25.039453506469727,
            "black": 1.6000367403030396,
            "white": 16.283374786376953,
            "middle eastern": 29.517662048339844,
            "latino hispanic": 24.225570678710938
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 8.471828186884522e-05,
            "disgust": 5.826623805660347e-07,
            "fear": 0.010581035166978836,
            "happy": 1.417521595954895,
            "sad": 98.5708999633789,
            "surprise": 4.862220635004633e-07,
            "neutral": 0.0009115826105698943
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 165,
            "y": 178,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 96.27484130859375,
            "Man": 3.7251603603363037
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.74705696105957,
            "indian": 7.988389015197754,
            "black": 8.152194023132324,
            "white": 27.462635040283203,
            "middle eastern": 24.531396865844727,
            "latino hispanic": 27.118324279785156
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.8361610010231288e-09,
            "disgust": 8.386274158022223e-16,
            "fear": 3.151690020075648e-10,
            "happy": 99.91149139404297,
            "sad": 5.049655982247714e-08,
            "surprise": 0.00023952640185598284,
            "neutral": 0.08827489614486694
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 586,
            "y": 175,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 93.10413360595703,
            "Man": 6.895862579345703
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.2134661227464676,
            "indian": 0.9403188824653625,
            "black": 0.06914287060499191,
            "white": 59.26313400268555,
            "middle eastern": 23.82500457763672,
            "latino hispanic": 15.688933372497559
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.5084748500603382e-08,
            "disgust": 2.02207889511306e-14,
            "fear": 9.616292651060121e-09,
            "happy": 99.99984741210938,
            "sad": 8.80572697496973e-05,
            "surprise": 3.748739985098837e-08,
            "neutral": 6.734325870638713e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 76,
            "y": 178,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.9988784790039,
            "Man": 0.0011210470693185925
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.1360875368118286,
            "indian": 0.7591409087181091,
            "black": 0.05092661455273628,
            "white": 84.6087417602539,
            "middle eastern": 4.882269859313965,
            "latino hispanic": 8.562832832336426
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.48555351037794e-07,
            "disgust": 1.381397840560794e-08,
            "fear": 0.001058363588526845,
            "happy": 99.6861572265625,
            "sad": 2.6844161766348407e-05,
            "surprise": 0.00041653704829514027,
            "neutral": 0.3123322129249573
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 539,
            "y": 262,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 96.71888732910156,
            "Man": 3.2811100482940674
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.028467003256082535,
            "indian": 0.0522175095975399,
            "black": 0.002642662264406681,
            "white": 88.29480743408203,
            "middle eastern": 6.025622844696045,
            "latino hispanic": 5.5962371826171875
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.750780068478843e-13,
            "disgust": 1.2626206879149766e-18,
            "fear": 1.1600423312913e-12,
            "happy": 99.99995422363281,
            "sad": 9.969686534661015e-12,
            "surprise": 2.353787742492841e-08,
            "neutral": 4.725005055661313e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 688,
            "y": 274,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 98.61141204833984,
            "Man": 1.3885784149169922
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 9.499277114868164,
            "indian": 8.114665985107422,
            "black": 2.1565287113189697,
            "white": 21.98574447631836,
            "middle eastern": 13.831589698791504,
            "latino hispanic": 44.41218948364258
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.0213003146252184e-11,
            "disgust": 5.068085568685341e-18,
            "fear": 1.2672621285680918e-10,
            "happy": 99.99989318847656,
            "sad": 4.473236503432787e-10,
            "surprise": 8.81859648416139e-07,
            "neutral": 0.00011013927723979577
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 299,
            "y": 197,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99798583984375,
            "Man": 0.002014876576140523
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.6203742623329163,
            "indian": 2.628190755844116,
            "black": 0.22580482065677643,
            "white": 49.21881866455078,
            "middle eastern": 24.175933837890625,
            "latino hispanic": 23.130884170532227
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2093507393728942e-05,
            "disgust": 3.0454761976161926e-12,
            "fear": 5.62734785489738e-05,
            "happy": 98.65545654296875,
            "sad": 2.124201614606136e-07,
            "surprise": 1.3114895820617676,
            "neutral": 0.03299780562520027
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 749,
            "y": 214,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.98503875732422,
            "Man": 0.014957430772483349
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.8981146812438965,
            "indian": 4.157515525817871,
            "black": 0.6848958134651184,
            "white": 39.68695831298828,
            "middle eastern": 16.823266983032227,
            "latino hispanic": 34.749244689941406
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.446417692515752e-08,
            "disgust": 6.452932128529418e-14,
            "fear": 1.6182104545237053e-08,
            "happy": 99.99760437011719,
            "sad": 5.976779675620492e-07,
            "surprise": 4.344906756159617e-06,
            "neutral": 0.002385006519034505
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 358,
            "y": 230,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 19.402929306030273,
            "Man": 80.59707641601562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.1750019788742065,
            "indian": 3.3741567134857178,
            "black": 0.3240695893764496,
            "white": 40.08860778808594,
            "middle eastern": 31.83806800842285,
            "latino hispanic": 23.20009422302246
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.644527677541646e-09,
            "disgust": 2.5868312093763448e-15,
            "fear": 3.5130137803207617e-06,
            "happy": 99.99990844726562,
            "sad": 1.6269046909656026e-07,
            "surprise": 5.289239197736606e-07,
            "neutral": 9.361985576106235e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 620,
            "y": 236,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.95197296142578,
            "Man": 0.04803496599197388
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.027058439329266548,
            "indian": 0.15116070210933685,
            "black": 0.005225037690252066,
            "white": 94.01508331298828,
            "middle eastern": 3.287198781967163,
            "latino hispanic": 2.5142745971679688
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.07268713414669037,
            "disgust": 0.006226127967238426,
            "fear": 0.1657760590314865,
            "happy": 82.52630615234375,
            "sad": 1.5137516260147095,
            "surprise": 0.015265196561813354,
            "neutral": 15.69998550415039
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 199,
            "y": 238,
            "w": 72,
            "h": 72,
            "left_eye": [
                247,
                266
            ],
            "right_eye": [
                220,
                265
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99761962890625,
            "Man": 0.002380130812525749
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.505731999874115,
            "indian": 3.3970844745635986,
            "black": 0.11151492595672607,
            "white": 46.55210876464844,
            "middle eastern": 29.38163948059082,
            "latino hispanic": 20.051925659179688
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.8377919521096855e-14,
            "disgust": 4.638996701509268e-26,
            "fear": 3.693977271015314e-18,
            "happy": 99.99970245361328,
            "sad": 2.0300222006858215e-13,
            "surprise": 6.953040610824246e-06,
            "neutral": 0.00028974111774004996
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 940,
            "y": 246,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99970245361328,
            "Man": 0.0002929946640506387
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.656397819519043,
            "indian": 3.148573637008667,
            "black": 0.24085234105587006,
            "white": 43.183353424072266,
            "middle eastern": 26.075666427612305,
            "latino hispanic": 26.695159912109375
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0040001594461500645,
            "disgust": 4.392992195789702e-05,
            "fear": 8.10075071058236e-05,
            "happy": 96.35315704345703,
            "sad": 0.008804542943835258,
            "surprise": 0.0008414685144089162,
            "neutral": 3.6330771446228027
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 821,
            "y": 275,
            "w": 72,
            "h": 72,
            "left_eye": [
                867,
                305
            ],
            "right_eye": [
                842,
                299
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.9999771118164,
            "Man": 2.9341335903154686e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.30821913480758667,
            "indian": 0.453686386346817,
            "black": 0.0630110427737236,
            "white": 77.53695678710938,
            "middle eastern": 6.880375862121582,
            "latino hispanic": 14.757750511169434
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.46562870845446e-07,
            "disgust": 6.333204360248201e-12,
            "fear": 4.0714056126489595e-08,
            "happy": 99.96812438964844,
            "sad": 3.374402922418085e-06,
            "surprise": 6.1872574406152125e-06,
            "neutral": 0.03186887502670288
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 420,
            "y": 308,
            "w": 75,
            "h": 75,
            "left_eye": [
                469,
                335
            ],
            "right_eye": [
                442,
                338
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 30.90392303466797,
            "Man": 69.09607696533203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.02127456665039,
            "indian": 9.738195419311523,
            "black": 3.079145908355713,
            "white": 21.220613479614258,
            "middle eastern": 21.72301483154297,
            "latino hispanic": 36.21775436401367
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 7.821872594071522e-10,
            "disgust": 1.6134594863908029e-15,
            "fear": 2.5171811302016067e-08,
            "happy": 99.99919128417969,
            "sad": 3.034487860986701e-08,
            "surprise": 0.0004739828873425722,
            "neutral": 0.00033144798362627625
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 116,
            "y": 322,
            "w": 74,
            "h": 74,
            "left_eye": [
                166,
                347
            ],
            "right_eye": [
                138,
                353
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99877166748047,
            "Man": 0.0012242380762472749
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.387338876724243,
            "indian": 10.174118995666504,
            "black": 53.791133880615234,
            "white": 3.434697151184082,
            "middle eastern": 2.511624574661255,
            "latino hispanic": 26.70107650756836
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 3.0855554200570623e-07,
            "disgust": 6.83857484529149e-13,
            "fear": 1.5011160030553583e-05,
            "happy": 99.8325424194336,
            "sad": 6.506313366116956e-05,
            "surprise": 0.12154931575059891,
            "neutral": 0.045827411115169525
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 0,
            "y": 332,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 97.58234405517578,
            "Man": 2.4176552295684814
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00010962010856019333,
            "indian": 0.00047235615784302354,
            "black": 3.2133832519321004e-06,
            "white": 98.82501983642578,
            "middle eastern": 0.790508508682251,
            "latino hispanic": 0.38387930393218994
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 56.59928512573242,
            "disgust": 0.0025409171357750893,
            "fear": 0.3151014745235443,
            "happy": 0.7197840809822083,
            "sad": 42.300601959228516,
            "surprise": 3.1344654871645616e-08,
            "neutral": 0.06268845498561859
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 31,
        "region": {
            "x": 622,
            "y": 401,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.9999771118164,
            "Man": 2.1703097445424646e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00560432393103838,
            "indian": 0.04432472214102745,
            "black": 0.0012033142847940326,
            "white": 84.95795440673828,
            "middle eastern": 4.476683139801025,
            "latino hispanic": 10.514226913452148
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.274226034160165e-07,
            "disgust": 3.6211834854478486e-13,
            "fear": 7.500699616969086e-09,
            "happy": 99.70066833496094,
            "sad": 1.304748167285652e-07,
            "surprise": 0.0004309284850023687,
            "neutral": 0.2989083528518677
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 0,
            "y": 416,
            "w": 584,
            "h": 584,
            "left_eye": [
                229,
                602
            ],
            "right_eye": [
                93,
                602
            ]
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 18.911996841430664,
            "Man": 81.08799743652344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.518012046813965,
            "indian": 2.0847272872924805,
            "black": 3.46749210357666,
            "white": 50.25163269042969,
            "middle eastern": 19.524005889892578,
            "latino hispanic": 13.154129981994629
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0064345588034485e-05,
            "disgust": 3.4954652020080523e-12,
            "fear": 5.650818824768066,
            "happy": 1.9684932340169325e-05,
            "sad": 7.38156270980835,
            "surprise": 0.00010669072071323171,
            "neutral": 86.96748352050781
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 749,
            "y": 534,
            "w": 80,
            "h": 80,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 97.09723663330078,
            "Man": 2.9027609825134277
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7509338855743408,
            "indian": 0.617408037185669,
            "black": 0.05445435643196106,
            "white": 75.96527099609375,
            "middle eastern": 12.103188514709473,
            "latino hispanic": 10.508743286132812
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.635100099723786e-05,
            "disgust": 1.2458206688492623e-09,
            "fear": 1.9680031982716173e-05,
            "happy": 99.94862365722656,
            "sad": 0.000365043873898685,
            "surprise": 0.00020835368195548654,
            "neutral": 0.05076070502400398
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 381,
            "y": 551,
            "w": 81,
            "h": 81,
            "left_eye": [
                438,
                582
            ],
            "right_eye": [
                406,
                585
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.65522003173828,
            "Man": 0.34477993845939636
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0882219672203064,
            "indian": 0.16422082483768463,
            "black": 0.00871296040713787,
            "white": 83.4268569946289,
            "middle eastern": 8.176846504211426,
            "latino hispanic": 8.135143280029297
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.0603948063529788e-16,
            "disgust": 5.889938178270835e-28,
            "fear": 1.022965412711775e-17,
            "happy": 99.9998779296875,
            "sad": 1.9303590843844365e-13,
            "surprise": 4.893921379256483e-10,
            "neutral": 0.00011760691995732486
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 890,
            "y": 558,
            "w": 82,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 65.98149871826172,
            "Man": 34.018497467041016
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 73.3327865600586,
            "indian": 4.777996063232422,
            "black": 2.379682779312134,
            "white": 4.168837547302246,
            "middle eastern": 1.2524051666259766,
            "latino hispanic": 14.088290214538574
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.013964937999844551,
            "disgust": 4.9333135393681005e-05,
            "fear": 0.0032530275639146566,
            "happy": 99.46512603759766,
            "sad": 0.004371978342533112,
            "surprise": 0.00020698996377177536,
            "neutral": 0.5130317211151123
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 208,
            "y": 574,
            "w": 74,
            "h": 74,
            "left_eye": [
                258,
                602
            ],
            "right_eye": [
                228,
                601
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 98.9032974243164,
            "Man": 1.0966980457305908
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 9.837986946105957,
            "indian": 49.619483947753906,
            "black": 8.251097679138184,
            "white": 2.576704263687134,
            "middle eastern": 2.472956657409668,
            "latino hispanic": 27.24177360534668
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 1.455449089970539e-14,
            "disgust": 1.2828557606545641e-24,
            "fear": 1.711302187804613e-17,
            "happy": 99.99564361572266,
            "sad": 1.3914143817163327e-13,
            "surprise": 5.216272711550118e-06,
            "neutral": 0.004339676816016436
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 38,
            "y": 573,
            "w": 85,
            "h": 85,
            "left_eye": [
                94,
                603
            ],
            "right_eye": [
                64,
                610
            ]
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 99.99829864501953,
            "Man": 0.0017097479430958629
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 16.555423736572266,
            "indian": 6.038476943969727,
            "black": 1.8350409269332886,
            "white": 24.87584114074707,
            "middle eastern": 12.618273735046387,
            "latino hispanic": 38.076942443847656
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.505220475512715e-10,
            "disgust": 5.196485721516457e-15,
            "fear": 2.005127397453066e-09,
            "happy": 99.99734497070312,
            "sad": 6.633733562466659e-10,
            "surprise": 4.811161124962382e-05,
            "neutral": 0.002608673181384802
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 552,
            "y": 548,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 73.52984619140625,
            "Man": 26.47015380859375
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 14.66756820678711,
            "indian": 27.4782772064209,
            "black": 15.151273727416992,
            "white": 9.851839065551758,
            "middle eastern": 12.269783020019531,
            "latino hispanic": 20.58125114440918
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 3.8133097746140265e-07,
            "disgust": 1.5364106431547953e-08,
            "fear": 9.72838643065188e-06,
            "happy": 82.84356689453125,
            "sad": 0.000705569691490382,
            "surprise": 7.906806587243409e-08,
            "neutral": 17.155715942382812
        },
        "dominant_emotion": "happy"
    }
]
let kindergarten_teacher_data3 = [
    {
        "age": 30,
        "region": {
            "x": 765,
            "y": 89,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99469757080078,
            "Man": 0.005306429695338011
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.4058784246444702,
            "indian": 3.460852861404419,
            "black": 0.2843398153781891,
            "white": 41.106483459472656,
            "middle eastern": 24.815099716186523,
            "latino hispanic": 29.92735481262207
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.291935743414797e-06,
            "disgust": 9.31396487713343e-11,
            "fear": 8.211875683628023e-05,
            "happy": 99.94144439697266,
            "sad": 4.227990211802535e-05,
            "surprise": 0.0006360899424180388,
            "neutral": 0.057795263826847076
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 609,
            "y": 103,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 98.3352279663086,
            "Man": 1.6647741794586182
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 9.854485511779785,
            "indian": 5.973639011383057,
            "black": 1.5636357069015503,
            "white": 35.84391403198242,
            "middle eastern": 15.647326469421387,
            "latino hispanic": 31.11699867248535
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.006330521777272224,
            "disgust": 1.5771520338603295e-05,
            "fear": 0.001063108560629189,
            "happy": 99.3038330078125,
            "sad": 0.00011473078484414145,
            "surprise": 0.004258794244378805,
            "neutral": 0.6843885779380798
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 77,
            "y": 159,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 95.91915893554688,
            "Man": 4.080841541290283
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.347990036010742,
            "indian": 1.015345811843872,
            "black": 0.24817991256713867,
            "white": 59.708858489990234,
            "middle eastern": 16.311002731323242,
            "latino hispanic": 19.36862564086914
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.67492588979357e-11,
            "disgust": 3.029913085293885e-16,
            "fear": 1.1973848579316382e-08,
            "happy": 99.98624420166016,
            "sad": 7.067178842135036e-09,
            "surprise": 2.083021627186099e-06,
            "neutral": 0.013754232786595821
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 166,
            "y": 84,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.7262024283409119,
            "Man": 99.27379608154297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.1060410737991333,
            "indian": 15.633633613586426,
            "black": 0.8366249799728394,
            "white": 15.530830383300781,
            "middle eastern": 46.45871353149414,
            "latino hispanic": 20.434154510498047
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.7829235730459914e-05,
            "disgust": 9.076689053144626e-12,
            "fear": 0.002090313471853733,
            "happy": 0.24261131882667542,
            "sad": 0.0055113197304308414,
            "surprise": 0.00013348241918720305,
            "neutral": 99.74964141845703
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 310,
            "y": 87,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99285888671875,
            "Man": 0.007138380780816078
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.289061039686203,
            "indian": 0.282365083694458,
            "black": 0.034037843346595764,
            "white": 81.88309478759766,
            "middle eastern": 7.393229007720947,
            "latino hispanic": 10.118210792541504
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.615749974045684e-09,
            "disgust": 3.4148868493155335e-14,
            "fear": 2.756871841924635e-09,
            "happy": 99.99459075927734,
            "sad": 5.484017719936674e-07,
            "surprise": 0.0002793827443383634,
            "neutral": 0.005136031191796064
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 463,
            "y": 92,
            "w": 76,
            "h": 76,
            "left_eye": [
                516,
                125
            ],
            "right_eye": [
                487,
                122
            ]
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 87.79666137695312,
            "Man": 12.203333854675293
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.1719225308064185e-13,
            "indian": 7.938974477816885e-11,
            "black": 100.0,
            "white": 1.512127034101422e-20,
            "middle eastern": 3.95312790377552e-22,
            "latino hispanic": 1.699364526050809e-13
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.7042049466498704e-13,
            "disgust": 9.187049161577524e-21,
            "fear": 4.388846159056586e-15,
            "happy": 99.82759094238281,
            "sad": 3.6242933099117636e-09,
            "surprise": 1.0928112715191673e-05,
            "neutral": 0.17240263521671295
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 490,
            "y": 199,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.61868286132812,
            "Man": 0.3813193142414093
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.10206390172243118,
            "indian": 0.24828556180000305,
            "black": 0.012468131259083748,
            "white": 67.92577362060547,
            "middle eastern": 13.070232391357422,
            "latino hispanic": 18.641178131103516
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0004488975100684911,
            "disgust": 1.0211262633674778e-05,
            "fear": 0.38612377643585205,
            "happy": 99.57266998291016,
            "sad": 0.011221743188798428,
            "surprise": 0.01682085171341896,
            "neutral": 0.012697807513177395
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 596,
            "y": 266,
            "w": 88,
            "h": 88,
            "left_eye": [
                655,
                300
            ],
            "right_eye": [
                620,
                302
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 98.82514953613281,
            "Man": 1.174844741821289
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.2733612060546875,
            "indian": 6.436578273773193,
            "black": 2.6537842750549316,
            "white": 18.39173698425293,
            "middle eastern": 7.516857147216797,
            "latino hispanic": 57.72768783569336
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 5.099117166647207e-16,
            "disgust": 1.5263096942104167e-23,
            "fear": 8.117434370893181e-16,
            "happy": 99.99300384521484,
            "sad": 1.3224458420696417e-12,
            "surprise": 1.103057343243563e-06,
            "neutral": 0.006996337324380875
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 699,
            "y": 214,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99633026123047,
            "Man": 0.0036667922977358103
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.2564176321029663,
            "indian": 1.233265995979309,
            "black": 0.15531155467033386,
            "white": 52.0740852355957,
            "middle eastern": 15.796622276306152,
            "latino hispanic": 29.484294891357422
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.507044977699934e-08,
            "disgust": 2.4203740140588126e-13,
            "fear": 1.1561290591544093e-07,
            "happy": 99.99117279052734,
            "sad": 1.705167562704446e-07,
            "surprise": 0.0016055197920650244,
            "neutral": 0.007226248737424612
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 160,
            "y": 273,
            "w": 83,
            "h": 83,
            "left_eye": [
                217,
                304
            ],
            "right_eye": [
                184,
                305
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.96772003173828,
            "Man": 0.03227831423282623
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.39471435546875,
            "indian": 0.15249621868133545,
            "black": 0.0007254821248352528,
            "white": 0.03916606307029724,
            "middle eastern": 0.0001685796887613833,
            "latino hispanic": 0.4127301275730133
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.782396783615695e-06,
            "disgust": 4.527512142971091e-09,
            "fear": 0.0035116311628371477,
            "happy": 0.003739780280739069,
            "sad": 0.024723637849092484,
            "surprise": 4.5246702029544394e-06,
            "neutral": 99.968017578125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 919,
            "y": 110,
            "w": 95,
            "h": 95,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.2599338889122009,
            "Man": 99.74006652832031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.006235137116163969,
            "indian": 1.0580974817276,
            "black": 0.0029870644211769104,
            "white": 42.00341033935547,
            "middle eastern": 53.02169418334961,
            "latino hispanic": 3.9075710773468018
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 6.439823891923879e-07,
            "disgust": 1.0586455621635835e-13,
            "fear": 3.232361996197142e-05,
            "happy": 88.5122299194336,
            "sad": 2.5077857571886852e-05,
            "surprise": 0.00015943932521622628,
            "neutral": 11.487550735473633
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 833,
            "y": 300,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99984741210938,
            "Man": 0.00016076945757959038
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.3736463933564664e-07,
            "indian": 8.779780387158098e-07,
            "black": 5.472076680668181e-10,
            "white": 99.90422058105469,
            "middle eastern": 0.028299618512392044,
            "latino hispanic": 0.06748530268669128
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.320818091154479e-09,
            "disgust": 3.117691533134322e-15,
            "fear": 2.5517723489798527e-09,
            "happy": 99.99898529052734,
            "sad": 1.9435939524470314e-09,
            "surprise": 3.2865176763152704e-05,
            "neutral": 0.0009733577608130872
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 0,
            "y": 245,
            "w": 83,
            "h": 83,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99600982666016,
            "Man": 0.003993331920355558
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.5881826877593994,
            "indian": 0.7617810964584351,
            "black": 0.12727738916873932,
            "white": 62.96375274658203,
            "middle eastern": 10.878149032592773,
            "latino hispanic": 24.680856704711914
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.8770039735975805e-12,
            "disgust": 6.674143607770757e-20,
            "fear": 8.008225159394922e-12,
            "happy": 99.98184204101562,
            "sad": 4.9809847219028924e-11,
            "surprise": 1.8544556041888427e-06,
            "neutral": 0.018158698454499245
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 248,
            "y": 180,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 27.68012046813965,
            "Man": 72.31987762451172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 44.90726089477539,
            "indian": 9.07807731628418,
            "black": 6.58117151260376,
            "white": 7.093803405761719,
            "middle eastern": 4.026220798492432,
            "latino hispanic": 28.313467025756836
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 9.159860928775743e-05,
            "disgust": 4.356357941048827e-09,
            "fear": 0.06974735856056213,
            "happy": 99.86261749267578,
            "sad": 0.004780478775501251,
            "surprise": 0.0005977117689326406,
            "neutral": 0.06217015162110329
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 346,
            "y": 217,
            "w": 85,
            "h": 85,
            "left_eye": [
                402,
                251
            ],
            "right_eye": [
                371,
                247
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99491882324219,
            "Man": 0.00507350591942668
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 97.64568328857422,
            "indian": 0.9256419539451599,
            "black": 0.019291169941425323,
            "white": 0.14426828920841217,
            "middle eastern": 0.005197146441787481,
            "latino hispanic": 1.2599172592163086
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 8.967989906238927e-09,
            "disgust": 3.006662844043384e-13,
            "fear": 2.089678127958905e-05,
            "happy": 99.95201873779297,
            "sad": 4.2504154407652095e-05,
            "surprise": 3.248355142204673e-06,
            "neutral": 0.04790833219885826
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 99,
            "y": 396,
            "w": 94,
            "h": 94,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 94.60574340820312,
            "Man": 5.394253730773926
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.5998144149780273,
            "indian": 0.7915006279945374,
            "black": 0.09512234479188919,
            "white": 72.12147521972656,
            "middle eastern": 15.826216697692871,
            "latino hispanic": 10.565864562988281
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0008198806899599731,
            "disgust": 2.9672933123947587e-06,
            "fear": 0.06253539025783539,
            "happy": 96.77001190185547,
            "sad": 0.09118834137916565,
            "surprise": 0.03530218452215195,
            "neutral": 3.040126085281372
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 267,
            "y": 355,
            "w": 90,
            "h": 90,
            "left_eye": [
                330,
                389
            ],
            "right_eye": [
                297,
                390
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.98843383789062,
            "Man": 0.011557222343981266
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.2988688467885368e-05,
            "indian": 6.7077444327878766e-06,
            "black": 6.875627178715149e-08,
            "white": 99.83209228515625,
            "middle eastern": 0.03139188885688782,
            "latino hispanic": 0.13650262355804443
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0006919809384271502,
            "disgust": 1.0900927236434654e-06,
            "fear": 0.002153961919248104,
            "happy": 92.24857330322266,
            "sad": 0.015628252178430557,
            "surprise": 0.019028261303901672,
            "neutral": 7.713928699493408
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 446,
            "y": 353,
            "w": 97,
            "h": 97,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.93335723876953,
            "Man": 0.06663855910301208
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.17669326066970825,
            "indian": 0.4779190719127655,
            "black": 0.008205671794712543,
            "white": 71.63616180419922,
            "middle eastern": 15.39946460723877,
            "latino hispanic": 12.301553726196289
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.685874609502207e-07,
            "disgust": 3.738443929424129e-11,
            "fear": 9.376160960528068e-06,
            "happy": 99.9996337890625,
            "sad": 1.4309863445305382e-06,
            "surprise": 3.410401041037403e-05,
            "neutral": 0.0003207711561117321
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 713,
            "y": 415,
            "w": 95,
            "h": 95,
            "left_eye": [
                771,
                454
            ],
            "right_eye": [
                738,
                454
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.7448959350586,
            "Man": 0.25510361790657043
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 82.18782043457031,
            "indian": 1.6651365756988525,
            "black": 0.25801658630371094,
            "white": 2.1584317684173584,
            "middle eastern": 0.4147428870201111,
            "latino hispanic": 13.315844535827637
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0001080567017197609,
            "disgust": 2.5275314783357317e-06,
            "fear": 0.000501450733281672,
            "happy": 98.10147094726562,
            "sad": 0.03247885778546333,
            "surprise": 0.001309201237745583,
            "neutral": 1.8641233444213867
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 921,
            "y": 447,
            "w": 98,
            "h": 98,
            "left_eye": [
                984,
                488
            ],
            "right_eye": [
                950,
                482
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 19.398099899291992,
            "Man": 80.60189819335938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.99999237060547,
            "indian": 5.079955940345826e-07,
            "black": 9.683357631365408e-13,
            "white": 1.4358088264998514e-06,
            "middle eastern": 2.243277612279382e-12,
            "latino hispanic": 7.100929906300735e-06
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.1707709374773074e-11,
            "disgust": 2.6236858776091754e-16,
            "fear": 5.692458171502324e-10,
            "happy": 99.95549011230469,
            "sad": 5.202703960094368e-06,
            "surprise": 1.8758394837448122e-09,
            "neutral": 0.04450959712266922
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 309,
            "y": 515,
            "w": 99,
            "h": 99,
            "left_eye": [
                375,
                553
            ],
            "right_eye": [
                335,
                557
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 32.9168701171875,
            "Man": 67.0831298828125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.952365711436869e-09,
            "indian": 4.097696546523366e-06,
            "black": 100.0,
            "white": 1.6938446088451964e-12,
            "middle eastern": 1.1789674054726862e-12,
            "latino hispanic": 1.0586137477730517e-07
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 3.4912370303757934e-12,
            "disgust": 4.092083169815142e-20,
            "fear": 6.993597367888071e-11,
            "happy": 75.24993896484375,
            "sad": 2.7735842067500016e-08,
            "surprise": 0.0007799568120390177,
            "neutral": 24.749282836914062
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 47,
            "y": 533,
            "w": 102,
            "h": 102,
            "left_eye": [
                115,
                569
            ],
            "right_eye": [
                78,
                576
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.98599243164062,
            "Man": 0.014002206735312939
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.05791003257036209,
            "indian": 0.024646630510687828,
            "black": 0.0022356754634529352,
            "white": 91.86931610107422,
            "middle eastern": 2.5319552421569824,
            "latino hispanic": 5.513933181762695
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.2890684192589106e-07,
            "disgust": 1.0643034231705428e-09,
            "fear": 4.13551097153686e-05,
            "happy": 99.94371032714844,
            "sad": 6.667152661066211e-07,
            "surprise": 0.0006909024668857455,
            "neutral": 0.0555468425154686
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 785,
            "y": 538,
            "w": 111,
            "h": 111,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.75867462158203,
            "Man": 0.24132965505123138
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.3312440039214835e-08,
            "indian": 7.833516058042278e-10,
            "black": 3.437632773925503e-12,
            "white": 99.99974822998047,
            "middle eastern": 0.0001484283129684627,
            "latino hispanic": 0.00010229102917946875
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.079643614590168,
            "disgust": 2.2817413992015645e-05,
            "fear": 0.06626216322183609,
            "happy": 1.8114346265792847,
            "sad": 2.940885305404663,
            "surprise": 0.00042727222898975015,
            "neutral": 95.10132598876953
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 561,
            "y": 549,
            "w": 102,
            "h": 102,
            "left_eye": [
                633,
                592
            ],
            "right_eye": [
                594,
                585
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 96.62931823730469,
            "Man": 3.3706729412078857
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.1068708896636963,
            "indian": 5.897817611694336,
            "black": 0.432908833026886,
            "white": 29.25934410095215,
            "middle eastern": 36.422264099121094,
            "latino hispanic": 26.880796432495117
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 7.626412212857758e-08,
            "disgust": 5.971327638863049e-16,
            "fear": 8.776650247455109e-06,
            "happy": 99.3284683227539,
            "sad": 6.916967777215177e-06,
            "surprise": 0.0007777676219120622,
            "neutral": 0.670751690864563
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 568,
            "y": 700,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 9.728180885314941,
            "Man": 90.27182006835938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.4894397258758545,
            "indian": 1.3650342226028442,
            "black": 18.73406982421875,
            "white": 33.783512115478516,
            "middle eastern": 35.76925277709961,
            "latino hispanic": 7.858695983886719
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 13.78913402557373,
            "disgust": 1.4043158129417588e-11,
            "fear": 1.6407890319824219,
            "happy": 0.8271689414978027,
            "sad": 16.224782943725586,
            "surprise": 0.00021729813306592405,
            "neutral": 67.51790618896484
        },
        "dominant_emotion": "neutral"
    }
]


console.log("Microsoft Results for Kindergarten Teacher:");
const data = kindergarten_teacher_data.concat(kindergarten_teacher_data2, kindergarten_teacher_data3);
console.log(processData(data));