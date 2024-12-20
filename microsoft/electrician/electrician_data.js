const { processData } = require('../../data_processing.js');

let electrician_data = [
    {
        "age": 38,
        "region": {
            "x": 465,
            "y": 92,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.3339305818080902,
            "Man": 99.66606903076172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.9243862628936768,
            "indian": 12.16279125213623,
            "black": 3.440952777862549,
            "white": 24.993553161621094,
            "middle eastern": 30.075428009033203,
            "latino hispanic": 26.402891159057617
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 8.307787311423454e-07,
            "disgust": 1.2484011602253986e-09,
            "fear": 5.173724639462307e-05,
            "happy": 99.6997299194336,
            "sad": 0.00019043734937440604,
            "surprise": 0.004620436113327742,
            "neutral": 0.29539787769317627
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 18,
            "y": 97,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.09607958793640137,
            "Man": 99.9039306640625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.2085750102996826,
            "indian": 23.905237197875977,
            "black": 8.283353805541992,
            "white": 15.467183113098145,
            "middle eastern": 20.361021041870117,
            "latino hispanic": 28.77463722229004
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0026180006098002195,
            "disgust": 6.078175283619203e-05,
            "fear": 0.19545972347259521,
            "happy": 60.144432067871094,
            "sad": 0.1516985446214676,
            "surprise": 0.03242860734462738,
            "neutral": 39.47330856323242
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 177,
            "y": 72,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.059045374393463135,
            "Man": 99.94095611572266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.618646144866943,
            "indian": 52.98965072631836,
            "black": 26.189735412597656,
            "white": 2.1847054958343506,
            "middle eastern": 1.9461559057235718,
            "latino hispanic": 9.071101188659668
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 9.465709922551468e-07,
            "disgust": 4.906768324985933e-10,
            "fear": 0.00021817309607286006,
            "happy": 96.6810531616211,
            "sad": 0.00010222279524896294,
            "surprise": 0.024988418444991112,
            "neutral": 3.2936387062072754
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 594,
            "y": 97,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.2490413337945938,
            "Man": 99.75096130371094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.07594675570726395,
            "indian": 1.6718955039978027,
            "black": 0.134420707821846,
            "white": 69.60568237304688,
            "middle eastern": 21.924541473388672,
            "latino hispanic": 6.587513446807861
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.299546241760254,
            "disgust": 9.934497938957065e-05,
            "fear": 0.7918962836265564,
            "happy": 0.23994258046150208,
            "sad": 3.779715061187744,
            "surprise": 0.002691183937713504,
            "neutral": 92.8861083984375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 41,
        "region": {
            "x": 907,
            "y": 103,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.1873432844877243,
            "Man": 99.81266021728516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.13767528533935547,
            "indian": 0.02871941216289997,
            "black": 0.004034371580928564,
            "white": 95.12088012695312,
            "middle eastern": 1.7101930379867554,
            "latino hispanic": 2.998502254486084
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0006096240831539035,
            "disgust": 1.2378993829997853e-08,
            "fear": 0.0034262281842529774,
            "happy": 3.676054000854492,
            "sad": 0.09914200007915497,
            "surprise": 0.0005166529444977641,
            "neutral": 96.22025299072266
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 40,
        "region": {
            "x": 765,
            "y": 128,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.823856770992279,
            "Man": 99.1761474609375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9985535144805908,
            "indian": 1.5050078630447388,
            "black": 0.34926924109458923,
            "white": 59.047157287597656,
            "middle eastern": 12.280234336853027,
            "latino hispanic": 25.819778442382812
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.3863054821049445e-07,
            "disgust": 1.2294262830003788e-11,
            "fear": 1.5047109513943724e-07,
            "happy": 99.99559783935547,
            "sad": 5.0826711230911314e-06,
            "surprise": 3.2807696698000655e-05,
            "neutral": 0.004354516509920359
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 393,
            "y": 131,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 16.93646812438965,
            "Man": 83.06353759765625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.7156623601913452,
            "indian": 2.0160810947418213,
            "black": 0.38991618156433105,
            "white": 61.859046936035156,
            "middle eastern": 18.3446102142334,
            "latino hispanic": 15.674684524536133
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.4422144633717835e-05,
            "disgust": 2.8045741373716737e-07,
            "fear": 0.0006647866684943438,
            "happy": 90.29704284667969,
            "sad": 0.0033747649285942316,
            "surprise": 0.032541997730731964,
            "neutral": 9.66634750366211
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 299,
            "y": 140,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.18149249255657196,
            "Man": 99.81851196289062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.178974919952452e-05,
            "indian": 2.304507142980583e-05,
            "black": 1.544623842164583e-07,
            "white": 99.9533920288086,
            "middle eastern": 0.02614225633442402,
            "latino hispanic": 0.02037345990538597
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.4326882362365723,
            "disgust": 0.00876998994499445,
            "fear": 1.6279916763305664,
            "happy": 81.3185043334961,
            "sad": 1.6349514722824097,
            "surprise": 0.05756624788045883,
            "neutral": 11.919534683227539
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 555,
            "y": 164,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.12809725105762482,
            "Man": 99.87191009521484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.05688970535993576,
            "indian": 1.014173984527588,
            "black": 0.027981793507933617,
            "white": 61.06230545043945,
            "middle eastern": 29.847532272338867,
            "latino hispanic": 7.991121768951416
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.002114582108333707,
            "disgust": 4.5342364529687984e-08,
            "fear": 0.003797216108068824,
            "happy": 0.06549682468175888,
            "sad": 0.22353637218475342,
            "surprise": 3.700565139297396e-05,
            "neutral": 99.70501708984375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 834,
            "y": 157,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.03376348316669464,
            "Man": 99.96623992919922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.014798113144934177,
            "indian": 0.021038398146629333,
            "black": 0.0006532272673211992,
            "white": 97.0988540649414,
            "middle eastern": 1.5244272947311401,
            "latino hispanic": 1.3402318954467773
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.373037725687027,
            "disgust": 2.312510332558304e-05,
            "fear": 0.2570582628250122,
            "happy": 5.87662410736084,
            "sad": 1.049699068069458,
            "surprise": 0.07624141126871109,
            "neutral": 92.36731719970703
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 70,
            "y": 160,
            "w": 67,
            "h": 67,
            "left_eye": [
                114,
                187
            ],
            "right_eye": [
                89,
                186
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.06222975254058838,
            "Man": 99.93777465820312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.663307189941406,
            "indian": 25.754926681518555,
            "black": 7.608827114105225,
            "white": 15.080312728881836,
            "middle eastern": 19.218900680541992,
            "latino hispanic": 23.673730850219727
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 0.13402368128299713,
            "disgust": 0.00032401358475908637,
            "fear": 2.1868271827697754,
            "happy": 1.3484838008880615,
            "sad": 4.846347332000732,
            "surprise": 0.0939277857542038,
            "neutral": 91.39006805419922
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 210,
            "y": 153,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 30.16384506225586,
            "Man": 69.8361587524414
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2728325426578522,
            "indian": 0.47531118988990784,
            "black": 0.052733562886714935,
            "white": 76.04586791992188,
            "middle eastern": 11.806540489196777,
            "latino hispanic": 11.346712112426758
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.1378810852766037,
            "disgust": 0.00013895778101868927,
            "fear": 1.0475709438323975,
            "happy": 14.470827102661133,
            "sad": 1.2821471691131592,
            "surprise": 0.7523099184036255,
            "neutral": 82.30912780761719
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 684,
            "y": 164,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0038820221088826656,
            "Man": 99.9961166381836
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0006839490961283445,
            "indian": 0.012787365354597569,
            "black": 0.00034839013824239373,
            "white": 96.24201202392578,
            "middle eastern": 2.533041000366211,
            "latino hispanic": 1.2111178636550903
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00044403786887414753,
            "disgust": 1.1064565796914394e-06,
            "fear": 0.015283293090760708,
            "happy": 96.3972396850586,
            "sad": 0.04892071709036827,
            "surprise": 0.05480830371379852,
            "neutral": 3.483307361602783
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 484,
            "y": 194,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.015110963024199009,
            "Man": 99.9848861694336
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.002094007795676589,
            "indian": 0.016501398757100105,
            "black": 0.0007332377717830241,
            "white": 94.66175079345703,
            "middle eastern": 3.327735424041748,
            "latino hispanic": 1.9911872148513794
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00027489420608617365,
            "disgust": 5.173819772608113e-07,
            "fear": 0.017748860642313957,
            "happy": 98.08248901367188,
            "sad": 0.0032714942935854197,
            "surprise": 0.12173563241958618,
            "neutral": 1.774480938911438
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 967,
            "y": 173,
            "w": 56,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.9952163696289,
            "Man": 0.004784243181347847
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 10.944640159606934,
            "indian": 4.334623336791992,
            "black": 2.312856435775757,
            "white": 41.453670501708984,
            "middle eastern": 15.103740692138672,
            "latino hispanic": 25.8504695892334
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.983142704555576e-09,
            "disgust": 5.225373017852912e-14,
            "fear": 2.618415706479027e-08,
            "happy": 99.99241638183594,
            "sad": 1.9396763661916339e-07,
            "surprise": 1.1964674740738701e-05,
            "neutral": 0.007576134987175465
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 40,
            "y": 403,
            "w": 85,
            "h": 85,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.02798764407634735,
            "Man": 99.97201538085938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.64158247790192e-09,
            "indian": 1.2581311104042925e-08,
            "black": 3.983049653988324e-11,
            "white": 99.997802734375,
            "middle eastern": 0.00130509736482054,
            "latino hispanic": 0.0008861776441335678
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00035867892438545823,
            "disgust": 1.2796453120245133e-05,
            "fear": 0.027904441580176353,
            "happy": 54.126564025878906,
            "sad": 0.4128117561340332,
            "surprise": 0.0014665724011138082,
            "neutral": 45.43088912963867
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 710,
            "y": 424,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.021636946126818657,
            "Man": 99.9783706665039
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.07845178991556168,
            "indian": 5.442809104919434,
            "black": 0.07413940876722336,
            "white": 13.638904571533203,
            "middle eastern": 64.52989196777344,
            "latino hispanic": 16.23580551147461
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.004163707606494427,
            "disgust": 0.0014039204688742757,
            "fear": 0.17074283957481384,
            "happy": 75.86541748046875,
            "sad": 0.8834412693977356,
            "surprise": 0.048222944140434265,
            "neutral": 23.026609420776367
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 872,
            "y": 422,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.022019051015377045,
            "Man": 99.97798919677734
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.06908732652664185,
            "indian": 0.42938122153282166,
            "black": 0.02019375190138817,
            "white": 68.55439758300781,
            "middle eastern": 17.304414749145508,
            "latino hispanic": 13.622529029846191
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.297995762201026e-05,
            "disgust": 1.074567421710526e-06,
            "fear": 0.0005297152092680335,
            "happy": 99.91287231445312,
            "sad": 0.011766203679144382,
            "surprise": 1.5386275435957941e-06,
            "neutral": 0.07475876808166504
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 480,
            "y": 431,
            "w": 79,
            "h": 79,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.003708867821842432,
            "Man": 99.99629211425781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.04145779460668564,
            "indian": 0.1868537813425064,
            "black": 0.004089081194251776,
            "white": 81.72770690917969,
            "middle eastern": 12.588920593261719,
            "latino hispanic": 5.450977325439453
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.5313987609697506e-05,
            "disgust": 1.6173232779692626e-06,
            "fear": 0.0019936314783990383,
            "happy": 97.62564849853516,
            "sad": 0.07690584659576416,
            "surprise": 0.005082475487142801,
            "neutral": 2.2903220653533936
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 257,
            "y": 443,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.06544635444879532,
            "Man": 99.9345474243164
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.007935049012303352,
            "indian": 0.1770971268415451,
            "black": 0.0024473662488162518,
            "white": 84.71075439453125,
            "middle eastern": 12.229723930358887,
            "latino hispanic": 2.87204647064209
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.2210942063338734e-07,
            "disgust": 1.3364362394518992e-10,
            "fear": 1.1130945495096967e-05,
            "happy": 99.99431610107422,
            "sad": 2.0081995899090543e-05,
            "surprise": 0.000102669742773287,
            "neutral": 0.005552495364099741
        },
        "dominant_emotion": "happy"
    }
]
let electrician_data2 = [
    {
        "age": 37,
        "region": {
            "x": 507,
            "y": 193,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0010458019096404314,
            "Man": 99.99894714355469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.1254377365112305,
            "indian": 11.78073501586914,
            "black": 1.7893542051315308,
            "white": 33.655609130859375,
            "middle eastern": 33.29908752441406,
            "latino hispanic": 18.349775314331055
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5223881602287292,
            "disgust": 2.3850191155361244e-07,
            "fear": 14.963799476623535,
            "happy": 5.418906211853027,
            "sad": 10.441536903381348,
            "surprise": 0.006544273812323809,
            "neutral": 68.64682006835938
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 387,
            "y": 196,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 0.059848569333553314,
            "Man": 99.94015502929688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.09269444644451141,
            "indian": 1.7208648920059204,
            "black": 0.05232967808842659,
            "white": 50.116241455078125,
            "middle eastern": 40.0863151550293,
            "latino hispanic": 7.931551456451416
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.1253180503845215,
            "disgust": 0.00018436170648783445,
            "fear": 3.333251476287842,
            "happy": 0.3986172378063202,
            "sad": 50.755889892578125,
            "surprise": 0.002747931284829974,
            "neutral": 43.38398742675781
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 33,
        "region": {
            "x": 827,
            "y": 194,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.00538835022598505,
            "Man": 99.99461364746094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.002259186701849103,
            "indian": 1.1544272899627686,
            "black": 0.0013689141487702727,
            "white": 40.70502853393555,
            "middle eastern": 55.25364685058594,
            "latino hispanic": 2.8832719326019287
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.6531983017921448,
            "disgust": 8.895914652384818e-05,
            "fear": 3.372413158416748,
            "happy": 0.21988236904144287,
            "sad": 7.189235687255859,
            "surprise": 0.004626924637705088,
            "neutral": 88.56056213378906
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 253,
            "y": 201,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.05249875411391258,
            "Man": 99.947509765625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7409737706184387,
            "indian": 12.514739036560059,
            "black": 0.44486987590789795,
            "white": 23.63251304626465,
            "middle eastern": 44.281150817871094,
            "latino hispanic": 18.385753631591797
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.795427918434143,
            "disgust": 5.859916551997912e-09,
            "fear": 5.131795478519052e-05,
            "happy": 3.2266006469726562,
            "sad": 15.822492599487305,
            "surprise": 1.320929300163698e-06,
            "neutral": 79.15542602539062
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 42,
        "region": {
            "x": 986,
            "y": 200,
            "w": 37,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.48279184103012085,
            "Man": 99.5172119140625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.0085649490356445,
            "indian": 2.7468390464782715,
            "black": 0.6364380121231079,
            "white": 52.644020080566406,
            "middle eastern": 23.0183048248291,
            "latino hispanic": 19.945829391479492
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.169230654835701,
            "disgust": 1.8810102346833446e-06,
            "fear": 0.0006853475351817906,
            "happy": 79.07965850830078,
            "sad": 8.828900337219238,
            "surprise": 3.866044153255643e-06,
            "neutral": 11.921521186828613
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 299,
            "y": 205,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.012094174511730671,
            "Man": 99.98789978027344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.1232879134913674e-06,
            "indian": 0.000156479945871979,
            "black": 2.7954138204222545e-07,
            "white": 99.38658905029297,
            "middle eastern": 0.5050134658813477,
            "latino hispanic": 0.10823756456375122
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.8168464303016663,
            "disgust": 0.0006299067754298449,
            "fear": 2.849175453186035,
            "happy": 16.097108840942383,
            "sad": 49.28201675415039,
            "surprise": 0.0003091084072366357,
            "neutral": 30.953916549682617
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 38,
        "region": {
            "x": 632,
            "y": 205,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.04743555188179016,
            "Man": 99.95256805419922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1273353546857834,
            "indian": 0.6055938005447388,
            "black": 0.03264285996556282,
            "white": 71.52603912353516,
            "middle eastern": 16.229900360107422,
            "latino hispanic": 11.47848892211914
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.624315119552193e-06,
            "disgust": 1.6772020217104e-08,
            "fear": 0.00011071915650973096,
            "happy": 99.92375183105469,
            "sad": 0.0008065078873187304,
            "surprise": 9.378226906164855e-08,
            "neutral": 0.07532022893428802
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 728,
            "y": 209,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.7248112559318542,
            "Man": 99.27519226074219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0007103978423401713,
            "indian": 0.0018442297587171197,
            "black": 2.3851182049838826e-05,
            "white": 98.01943969726562,
            "middle eastern": 0.8773995041847229,
            "latino hispanic": 1.100581169128418
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 26.208595275878906,
            "disgust": 5.074429645901546e-05,
            "fear": 22.920373916625977,
            "happy": 4.244831562042236,
            "sad": 42.26655960083008,
            "surprise": 0.032570935785770416,
            "neutral": 4.327022075653076
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 35,
        "region": {
            "x": 157,
            "y": 221,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.00432565389201045,
            "Man": 99.99567413330078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.5507030487060547,
            "indian": 2.6149516105651855,
            "black": 0.17601971328258514,
            "white": 51.1458740234375,
            "middle eastern": 31.06536865234375,
            "latino hispanic": 14.4470853805542
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.002461464609950781,
            "disgust": 1.4027424185769632e-05,
            "fear": 0.21632958948612213,
            "happy": 81.69241333007812,
            "sad": 0.22070740163326263,
            "surprise": 5.301510555000277e-06,
            "neutral": 17.868070602416992
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 37,
        "region": {
            "x": 213,
            "y": 168,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.9143677353858948,
            "Man": 99.08563232421875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.922590732574463,
            "indian": 11.89079761505127,
            "black": 1.6565150022506714,
            "white": 32.410972595214844,
            "middle eastern": 28.873062133789062,
            "latino hispanic": 19.246063232421875
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 35.17826461791992,
            "disgust": 0.017608946189284325,
            "fear": 15.318873405456543,
            "happy": 0.1392320990562439,
            "sad": 45.214012145996094,
            "surprise": 0.031238971278071404,
            "neutral": 4.100775718688965
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 40,
        "region": {
            "x": 681,
            "y": 168,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0371585339307785,
            "Man": 99.96284484863281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.7662458419799805,
            "indian": 12.234904289245605,
            "black": 1.0604511499404907,
            "white": 28.32141876220703,
            "middle eastern": 32.9485969543457,
            "latino hispanic": 22.668386459350586
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.31220194697380066,
            "disgust": 0.0010094358585774899,
            "fear": 79.79194641113281,
            "happy": 0.02151786908507347,
            "sad": 19.08467674255371,
            "surprise": 0.0018751678289845586,
            "neutral": 0.7867783308029175
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 33,
        "region": {
            "x": 0,
            "y": 258,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.6024410128593445,
            "Man": 99.3975601196289
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.08762266486883163,
            "indian": 0.36258435249328613,
            "black": 0.017727850005030632,
            "white": 81.68911743164062,
            "middle eastern": 10.479438781738281,
            "latino hispanic": 7.363515853881836
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5353867411613464,
            "disgust": 6.59699144307524e-05,
            "fear": 0.11574713885784149,
            "happy": 0.286197692155838,
            "sad": 10.855090141296387,
            "surprise": 0.0001790082169463858,
            "neutral": 88.20732879638672
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 695,
            "y": 264,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.004089703317731619,
            "Man": 99.99591064453125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9881791472434998,
            "indian": 8.245141983032227,
            "black": 0.8725391030311584,
            "white": 38.799598693847656,
            "middle eastern": 35.04524612426758,
            "latino hispanic": 16.04929542541504
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5869507193565369,
            "disgust": 0.00010634269710863009,
            "fear": 88.8346176147461,
            "happy": 1.3023865222930908,
            "sad": 6.297480583190918,
            "surprise": 0.004178057424724102,
            "neutral": 2.9742796421051025
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 33,
        "region": {
            "x": 468,
            "y": 309,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.010185947641730309,
            "Man": 99.98980712890625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.03991297632455826,
            "indian": 0.3116370141506195,
            "black": 0.01188244391232729,
            "white": 76.55782318115234,
            "middle eastern": 14.376173973083496,
            "latino hispanic": 8.7025728225708
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.01933196932077408,
            "disgust": 4.9898394536285195e-06,
            "fear": 0.06676924228668213,
            "happy": 30.690032958984375,
            "sad": 0.096421018242836,
            "surprise": 0.09336768835783005,
            "neutral": 69.03407287597656
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 883,
            "y": 262,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.006712238769978285,
            "Man": 99.9932861328125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 12.993857383728027,
            "indian": 24.934186935424805,
            "black": 44.573646545410156,
            "white": 2.737607002258301,
            "middle eastern": 2.067596435546875,
            "latino hispanic": 12.693110466003418
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0022158173378556967,
            "disgust": 1.7977118058065678e-11,
            "fear": 7.8505341662094e-05,
            "happy": 0.0005965441232547164,
            "sad": 0.30579593777656555,
            "surprise": 4.5838291384825425e-07,
            "neutral": 99.6913070678711
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 775,
            "y": 268,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.003910689149051905,
            "Man": 99.99609375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.017818350344896317,
            "indian": 0.19035997986793518,
            "black": 0.004866701550781727,
            "white": 85.08961486816406,
            "middle eastern": 10.508101463317871,
            "latino hispanic": 4.1892409324646
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.1915730237960815,
            "disgust": 4.379264453291398e-07,
            "fear": 0.5802310705184937,
            "happy": 0.057051464915275574,
            "sad": 7.922654628753662,
            "surprise": 0.0003595785819925368,
            "neutral": 90.24813079833984
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 43,
        "region": {
            "x": 888,
            "y": 178,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.06726986169815063,
            "Man": 99.93273162841797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.12537963688373566,
            "indian": 0.8797363042831421,
            "black": 0.027072058990597725,
            "white": 70.92666625976562,
            "middle eastern": 21.532228469848633,
            "latino hispanic": 6.508925437927246
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 98.67349243164062,
            "disgust": 1.0078707646243856e-07,
            "fear": 0.0051742964424192905,
            "happy": 0.33799925446510315,
            "sad": 0.4331001341342926,
            "surprise": 9.948466322384775e-05,
            "neutral": 0.5501248836517334
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 41,
        "region": {
            "x": 555,
            "y": 233,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.07601521909236908,
            "Man": 99.92399597167969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.11887022852897644,
            "indian": 16.307750701904297,
            "black": 0.1533120721578598,
            "white": 21.31308364868164,
            "middle eastern": 54.182701110839844,
            "latino hispanic": 7.924286842346191
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.10922262072563171,
            "disgust": 1.2954390058439458e-06,
            "fear": 0.0016771000809967518,
            "happy": 72.72968292236328,
            "sad": 0.2502177059650421,
            "surprise": 0.002203779062256217,
            "neutral": 26.906993865966797
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 471,
            "y": 172,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.5797819495201111,
            "Man": 99.42021942138672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.06405699998140335,
            "indian": 0.22635222971439362,
            "black": 0.009031735360622406,
            "white": 82.0816421508789,
            "middle eastern": 10.319377899169922,
            "latino hispanic": 7.299548149108887
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0008686277433298528,
            "disgust": 4.11111443554546e-07,
            "fear": 0.0006874413229525089,
            "happy": 7.63271427154541,
            "sad": 2.6708316802978516,
            "surprise": 1.6236414012382738e-05,
            "neutral": 89.69488525390625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 42,
        "region": {
            "x": 83,
            "y": 178,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.3679890036582947,
            "Man": 99.63201141357422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00020403062808327377,
            "indian": 1.13516366481781,
            "black": 0.00013843728811480105,
            "white": 18.016483306884766,
            "middle eastern": 79.75194549560547,
            "latino hispanic": 1.0960686206817627
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 3.1355571081803646e-06,
            "disgust": 1.2119982795155693e-09,
            "fear": 1.2913668797409628e-05,
            "happy": 98.5509033203125,
            "sad": 0.0006852247170172632,
            "surprise": 0.00016572809545323253,
            "neutral": 1.4482226371765137
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 939,
            "y": 335,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.0973992869257927,
            "Man": 99.90260314941406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7966413497924805,
            "indian": 1.5561116933822632,
            "black": 0.22260147333145142,
            "white": 57.65281677246094,
            "middle eastern": 17.795961380004883,
            "latino hispanic": 21.97587013244629
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6560919902985916e-05,
            "disgust": 2.609870719538776e-08,
            "fear": 0.07949238270521164,
            "happy": 96.82917785644531,
            "sad": 0.0016751469811424613,
            "surprise": 0.009166481904685497,
            "neutral": 3.080475091934204
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 210,
            "y": 265,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.05603587627410889,
            "Man": 99.94396209716797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3459950685501099,
            "indian": 14.809123039245605,
            "black": 0.9354594349861145,
            "white": 17.63944435119629,
            "middle eastern": 50.483436584472656,
            "latino hispanic": 14.786540985107422
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.3052581250667572,
            "disgust": 0.0011640782468020916,
            "fear": 0.3441184461116791,
            "happy": 85.71249389648438,
            "sad": 2.2402427196502686,
            "surprise": 0.13613297045230865,
            "neutral": 11.260589599609375
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 430,
            "y": 219,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.0028708677273243666,
            "Man": 99.99712371826172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.051559627056121826,
            "indian": 2.3958864212036133,
            "black": 0.04534421116113663,
            "white": 61.22910690307617,
            "middle eastern": 29.40594482421875,
            "latino hispanic": 6.87214994430542
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.2433927059173584,
            "disgust": 0.06722185760736465,
            "fear": 51.42810821533203,
            "happy": 0.44657593965530396,
            "sad": 18.944887161254883,
            "surprise": 0.04566269740462303,
            "neutral": 25.824148178100586
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 34,
        "region": {
            "x": 77,
            "y": 274,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.054804109036922455,
            "Man": 99.9451904296875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0003423495509196073,
            "indian": 0.004138159565627575,
            "black": 1.0323380593035836e-05,
            "white": 97.7533950805664,
            "middle eastern": 1.577974796295166,
            "latino hispanic": 0.6641454100608826
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.529667295282707e-06,
            "disgust": 4.529620412085933e-08,
            "fear": 0.0783555805683136,
            "happy": 52.501983642578125,
            "sad": 0.023526431992650032,
            "surprise": 0.0013991643209010363,
            "neutral": 47.39472579956055
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 341,
            "y": 299,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.02089817076921463,
            "Man": 99.97911071777344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.011381126008927822,
            "indian": 1.8897137641906738,
            "black": 0.003750810632482171,
            "white": 17.194766998291016,
            "middle eastern": 76.53179168701172,
            "latino hispanic": 4.368597984313965
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.004967377055436373,
            "disgust": 0.002501079346984625,
            "fear": 1.9208481311798096,
            "happy": 87.78120422363281,
            "sad": 9.698884963989258,
            "surprise": 0.008974493481218815,
            "neutral": 0.5826151967048645
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 637,
            "y": 304,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.060429949313402176,
            "Man": 99.9395751953125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.365251460418222e-07,
            "indian": 5.964415322523564e-06,
            "black": 1.0914121162386436e-08,
            "white": 99.9259033203125,
            "middle eastern": 0.04697771370410919,
            "latino hispanic": 0.027105899527668953
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.6706805229187012,
            "disgust": 0.0009044554899446666,
            "fear": 0.18146510422229767,
            "happy": 48.764625549316406,
            "sad": 3.8658604621887207,
            "surprise": 1.2918875217437744,
            "neutral": 45.224578857421875
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 975,
            "y": 454,
            "w": 48,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 99.90797424316406,
            "Man": 0.09202855080366135
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.8613006472587585,
            "indian": 0.2933524250984192,
            "black": 0.04780608415603638,
            "white": 69.5911865234375,
            "middle eastern": 8.09428882598877,
            "latino hispanic": 21.112064361572266
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00011958966206293553,
            "disgust": 2.7881246200678333e-09,
            "fear": 3.205912798875943e-05,
            "happy": 99.13471984863281,
            "sad": 0.0002871702890843153,
            "surprise": 0.0014917938970029354,
            "neutral": 0.8633528351783752
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 208,
            "y": 371,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.00018675597675610334,
            "Man": 99.99980926513672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0028915537986904383,
            "indian": 0.20297808945178986,
            "black": 0.0011710040271282196,
            "white": 73.59848022460938,
            "middle eastern": 20.929243087768555,
            "latino hispanic": 5.265231132507324
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 21.152328491210938,
            "disgust": 0.0023286761716008186,
            "fear": 0.8782797455787659,
            "happy": 0.12197671830654144,
            "sad": 31.7442684173584,
            "surprise": 0.1111181229352951,
            "neutral": 45.98970031738281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 17,
            "y": 374,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.0002974006929434836,
            "Man": 99.99970245361328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.04517388716340065,
            "indian": 1.31114661693573,
            "black": 0.04542341083288193,
            "white": 45.51814651489258,
            "middle eastern": 43.225852966308594,
            "latino hispanic": 9.854257583618164
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.518718719482422,
            "disgust": 3.3007493019104004,
            "fear": 32.38347625732422,
            "happy": 0.08802071958780289,
            "sad": 54.45976257324219,
            "surprise": 0.24570123851299286,
            "neutral": 6.003567695617676
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 651,
            "y": 443,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.003198964986950159,
            "Man": 99.9968032836914
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.857562065124512,
            "indian": 20.756288528442383,
            "black": 1.4126942157745361,
            "white": 19.938888549804688,
            "middle eastern": 22.544414520263672,
            "latino hispanic": 29.490161895751953
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.799803614616394,
            "disgust": 2.7023534698855656e-07,
            "fear": 0.03175664320588112,
            "happy": 1.8157446384429932,
            "sad": 1.5372884273529053,
            "surprise": 0.009877769276499748,
            "neutral": 94.80552673339844
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 142,
            "y": 453,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 9.330575267085806e-05,
            "Man": 99.99990844726562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0004228825564496219,
            "indian": 4.35446310043335,
            "black": 0.0004355617566034198,
            "white": 7.274626731872559,
            "middle eastern": 85.4683609008789,
            "latino hispanic": 2.9016973972320557
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 16.036209106445312,
            "disgust": 0.025249481201171875,
            "fear": 20.745389938354492,
            "happy": 0.03133150562644005,
            "sad": 49.653961181640625,
            "surprise": 0.05024039000272751,
            "neutral": 13.457612991333008
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 30,
        "region": {
            "x": 318,
            "y": 458,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.001974798273295164,
            "Man": 99.9980239868164
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.18708905577659607,
            "indian": 7.067906379699707,
            "black": 0.11258509010076523,
            "white": 23.607553482055664,
            "middle eastern": 56.211463928222656,
            "latino hispanic": 12.813400268554688
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 4.087125301361084,
            "disgust": 0.0020950690377503633,
            "fear": 5.744572639465332,
            "happy": 0.1053161546587944,
            "sad": 80.09750366210938,
            "surprise": 0.0127182612195611,
            "neutral": 9.950662612915039
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 38,
        "region": {
            "x": 516,
            "y": 457,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.002578526735305786,
            "Man": 99.99742126464844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00010255109373247251,
            "indian": 0.011770005337893963,
            "black": 7.379419002973009e-06,
            "white": 93.63627624511719,
            "middle eastern": 5.173466205596924,
            "latino hispanic": 1.1783781051635742
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.349747657775879,
            "disgust": 0.00176994816865772,
            "fear": 1.486134648323059,
            "happy": 2.7377617359161377,
            "sad": 9.932259559631348,
            "surprise": 0.08653291314840317,
            "neutral": 82.40579223632812
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 795,
            "y": 437,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.06694430112838745,
            "Man": 99.93306732177734
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.05648927763104439,
            "indian": 2.8437960147857666,
            "black": 0.028133340179920197,
            "white": 30.977313995361328,
            "middle eastern": 55.222110748291016,
            "latino hispanic": 10.87215518951416
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.0007768042269162834,
            "disgust": 2.4583330286986893e-06,
            "fear": 0.032992828637361526,
            "happy": 90.7537841796875,
            "sad": 0.09718243032693863,
            "surprise": 0.01301391888409853,
            "neutral": 9.10224723815918
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 869,
            "y": 573,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0005522827268578112,
            "Man": 99.99945068359375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.04754514619708061,
            "indian": 0.9786185622215271,
            "black": 0.02335781417787075,
            "white": 56.49242401123047,
            "middle eastern": 31.702180862426758,
            "latino hispanic": 10.75587272644043
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.33829116821289,
            "disgust": 0.003401117166504264,
            "fear": 19.816539764404297,
            "happy": 0.0028473769780248404,
            "sad": 60.559932708740234,
            "surprise": 0.0026694503612816334,
            "neutral": 11.276322364807129
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 36,
        "region": {
            "x": 77,
            "y": 582,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0011445340933278203,
            "Man": 99.99885559082031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.4129705429077148,
            "indian": 6.9444193840026855,
            "black": 0.6864791512489319,
            "white": 22.884775161743164,
            "middle eastern": 38.43770980834961,
            "latino hispanic": 29.633644104003906
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 6.90827751159668,
            "disgust": 0.001522545819170773,
            "fear": 5.93801212310791,
            "happy": 0.19975942373275757,
            "sad": 42.306678771972656,
            "surprise": 0.18515610694885254,
            "neutral": 44.460594177246094
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 244,
            "y": 585,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 4.376600827527e-06,
            "Man": 100.0
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00012144031643401831,
            "indian": 5.290620803833008,
            "black": 0.0004853065183851868,
            "white": 0.9389059543609619,
            "middle eastern": 92.23963928222656,
            "latino hispanic": 1.5302236080169678
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.002965398132801056,
            "disgust": 5.207471076573711e-08,
            "fear": 0.01507567148655653,
            "happy": 99.53289794921875,
            "sad": 0.12554964423179626,
            "surprise": 0.000564960646443069,
            "neutral": 0.3229457437992096
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 519,
            "y": 588,
            "w": 82,
            "h": 82,
            "left_eye": [
                573,
                619
            ],
            "right_eye": [
                550,
                619
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.018012793734669685,
            "Man": 99.98199462890625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1074356809258461,
            "indian": 4.747091770172119,
            "black": 0.22797219455242157,
            "white": 15.430005073547363,
            "middle eastern": 64.91673278808594,
            "latino hispanic": 14.570768356323242
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.2229490727186203,
            "disgust": 1.9726832761080004e-05,
            "fear": 0.47322940826416016,
            "happy": 82.87948608398438,
            "sad": 0.6483038663864136,
            "surprise": 1.8053045272827148,
            "neutral": 13.97070026397705
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 691,
            "y": 601,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0007755095139145851,
            "Man": 99.99922180175781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.007436507381498814,
            "indian": 1.306016206741333,
            "black": 0.004040757659822702,
            "white": 37.67611312866211,
            "middle eastern": 54.006996154785156,
            "latino hispanic": 6.9993977546691895
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 7.689944744110107,
            "disgust": 1.6218371456488967e-05,
            "fear": 0.17033211886882782,
            "happy": 71.30316162109375,
            "sad": 9.192651748657227,
            "surprise": 1.2537052631378174,
            "neutral": 10.390190124511719
        },
        "dominant_emotion": "happy"
    }
]
let electrician_data3 = [
    {
        "age": 36,
        "region": {
            "x": 807,
            "y": 22,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.4543052911758423,
            "Man": 99.54569244384766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.3199348449707031,
            "indian": 0.3450465798377991,
            "black": 0.02909916080534458,
            "white": 83.166259765625,
            "middle eastern": 9.424760818481445,
            "latino hispanic": 6.714907169342041
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.3824856281280518,
            "disgust": 6.24604990662192e-06,
            "fear": 0.07445690035820007,
            "happy": 95.94648742675781,
            "sad": 0.2584700286388397,
            "surprise": 0.11353430151939392,
            "neutral": 1.2245595455169678
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 564,
            "y": 30,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0038762514013797045,
            "Man": 99.99612426757812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.18947596848011017,
            "indian": 3.6386940479278564,
            "black": 0.20539626479148865,
            "white": 32.54603958129883,
            "middle eastern": 50.84135437011719,
            "latino hispanic": 12.579044342041016
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.184564471244812,
            "disgust": 9.677647904027253e-05,
            "fear": 1.821561336517334,
            "happy": 0.2404385507106781,
            "sad": 8.784211158752441,
            "surprise": 0.03763563558459282,
            "neutral": 87.93148803710938
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 208,
            "y": 29,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.1999753713607788,
            "Man": 99.80001831054688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.608823776245117,
            "indian": 5.654320240020752,
            "black": 1.7032020092010498,
            "white": 39.183921813964844,
            "middle eastern": 20.583532333374023,
            "latino hispanic": 24.266199111938477
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 19.312387466430664,
            "disgust": 0.13270774483680725,
            "fear": 31.076087951660156,
            "happy": 0.011200061067938805,
            "sad": 41.06965637207031,
            "surprise": 0.5735511779785156,
            "neutral": 7.824415683746338
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 36,
        "region": {
            "x": 375,
            "y": 17,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 2.1139869689941406,
            "Man": 97.88601684570312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.602427750593051e-05,
            "indian": 0.0009304066770710051,
            "black": 7.91249988196796e-07,
            "white": 96.74169921875,
            "middle eastern": 3.091356039047241,
            "latino hispanic": 0.16598699986934662
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 17.02019500732422,
            "disgust": 6.0903581470483914e-05,
            "fear": 9.17613410949707,
            "happy": 0.016333825886249542,
            "sad": 11.25380802154541,
            "surprise": 0.005109215155243874,
            "neutral": 62.52836227416992
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 736,
            "y": 40,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.013479840941727161,
            "Man": 99.98651885986328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.019071493297815323,
            "indian": 0.05803395062685013,
            "black": 0.0024967901408672333,
            "white": 88.3814926147461,
            "middle eastern": 5.987546443939209,
            "latino hispanic": 5.551360607147217
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.1605876237154007,
            "disgust": 4.1354891777700686e-07,
            "fear": 1.6180028915405273,
            "happy": 0.8597821593284607,
            "sad": 0.15214763581752777,
            "surprise": 0.004097179044038057,
            "neutral": 97.20538330078125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 48,
        "region": {
            "x": 31,
            "y": 40,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.017748922109603882,
            "Man": 99.98225402832031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.220298767089844,
            "indian": 16.81114387512207,
            "black": 2.987889289855957,
            "white": 21.664016723632812,
            "middle eastern": 23.090679168701172,
            "latino hispanic": 26.225971221923828
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 8.57137680053711,
            "disgust": 0.2427855134010315,
            "fear": 4.253584861755371,
            "happy": 0.5239039063453674,
            "sad": 41.435733795166016,
            "surprise": 0.04186544939875603,
            "neutral": 44.930755615234375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 878,
            "y": 53,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 8.286529541015625,
            "Man": 91.71346282958984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.01916145719587803,
            "indian": 0.13106811046600342,
            "black": 99.81901550292969,
            "white": 4.0450588130624965e-05,
            "middle eastern": 1.3759849935013335e-05,
            "latino hispanic": 0.03069227933883667
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 98.0395736694336,
            "disgust": 1.6807173608412995e-07,
            "fear": 0.0008546950994059443,
            "happy": 0.10620863735675812,
            "sad": 0.11878427118062973,
            "surprise": 0.0001383918133797124,
            "neutral": 1.7344441413879395
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 30,
        "region": {
            "x": 645,
            "y": 94,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.054003916680812836,
            "Man": 99.94599151611328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.0434132814407349,
            "indian": 1.3394783735275269,
            "black": 0.20170989632606506,
            "white": 66.59827423095703,
            "middle eastern": 15.248613357543945,
            "latino hispanic": 15.56851577758789
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.07541567832231522,
            "disgust": 1.0187378620685195e-06,
            "fear": 0.19647236168384552,
            "happy": 95.0924072265625,
            "sad": 0.2551629841327667,
            "surprise": 0.3994293212890625,
            "neutral": 3.981117010116577
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 126,
            "y": 92,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.8217228651046753,
            "Man": 99.17827606201172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 12.152619361877441,
            "indian": 3.205796241760254,
            "black": 0.8318080306053162,
            "white": 50.094669342041016,
            "middle eastern": 15.468976020812988,
            "latino hispanic": 18.246129989624023
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.466036796569824,
            "disgust": 0.00026540172984823585,
            "fear": 34.50495147705078,
            "happy": 0.21031911671161652,
            "sad": 25.73052978515625,
            "surprise": 0.10782220959663391,
            "neutral": 30.980079650878906
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 29,
        "region": {
            "x": 485,
            "y": 86,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.017202677205204964,
            "Man": 99.98279571533203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0002822142851073295,
            "indian": 0.004388452507555485,
            "black": 1.7595650206203572e-05,
            "white": 95.72527313232422,
            "middle eastern": 3.5438921451568604,
            "latino hispanic": 0.726142942905426
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.19746555387973785,
            "disgust": 1.6055754770150088e-07,
            "fear": 0.29045578837394714,
            "happy": 0.12007547169923782,
            "sad": 1.7190728187561035,
            "surprise": 0.0014463161351159215,
            "neutral": 97.67147827148438
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 589,
            "y": 218,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 22.956235885620117,
            "Man": 77.04376220703125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.4812427759170532,
            "indian": 0.048880234360694885,
            "black": 0.003371181432157755,
            "white": 90.45941925048828,
            "middle eastern": 2.0666139125823975,
            "latino hispanic": 6.940481662750244
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.3072571164229885e-05,
            "disgust": 3.7816932918488533e-10,
            "fear": 1.7079764802474529e-06,
            "happy": 97.54803466796875,
            "sad": 0.0005116334068588912,
            "surprise": 0.00282661197707057,
            "neutral": 2.448622465133667
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 41,
        "region": {
            "x": 285,
            "y": 106,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99652099609375,
            "Man": 0.003478214144706726
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0006937030702829361,
            "indian": 0.00025136626209132373,
            "black": 3.5571995340433205e-06,
            "white": 99.38388061523438,
            "middle eastern": 0.31500428915023804,
            "latino hispanic": 0.30017155408859253
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00020379983470775187,
            "disgust": 6.048961331828195e-09,
            "fear": 0.2719241678714752,
            "happy": 1.0758769512176514,
            "sad": 0.0070460704155266285,
            "surprise": 0.06134872883558273,
            "neutral": 98.58360290527344
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 42,
        "region": {
            "x": 451,
            "y": 196,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.1489507406949997,
            "Man": 99.85104370117188
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.007931324653327465,
            "indian": 0.007881920784711838,
            "black": 6.890702934470028e-05,
            "white": 96.55567169189453,
            "middle eastern": 1.7018603086471558,
            "latino hispanic": 1.7265880107879639
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 14.418244361877441,
            "disgust": 0.007370146922767162,
            "fear": 8.373941421508789,
            "happy": 9.789487838745117,
            "sad": 27.111804962158203,
            "surprise": 0.5905464887619019,
            "neutral": 39.7086067199707
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 22,
        "region": {
            "x": 593,
            "y": 265,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 55.87525177001953,
            "Man": 44.12474060058594
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.36386775970459,
            "indian": 0.04234142228960991,
            "black": 0.047291334718465805,
            "white": 90.77777862548828,
            "middle eastern": 1.149577021598816,
            "latino hispanic": 0.6191433072090149
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.031387653201818466,
            "disgust": 3.866925979423286e-08,
            "fear": 1.2672076225280762,
            "happy": 0.00018508332141209394,
            "sad": 97.32255554199219,
            "surprise": 8.764926917592675e-08,
            "neutral": 1.3786611557006836
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 28,
        "region": {
            "x": 319,
            "y": 203,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.9999771118164,
            "Man": 2.3098311430658214e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00011955711670452729,
            "indian": 4.927824920741841e-05,
            "black": 1.9979484022769611e-07,
            "white": 99.78070831298828,
            "middle eastern": 0.13186970353126526,
            "latino hispanic": 0.0872538685798645
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 19.066123962402344,
            "disgust": 1.0817181816946686e-08,
            "fear": 0.011730648577213287,
            "happy": 10.48535442352295,
            "sad": 0.010248430073261261,
            "surprise": 0.002795573091134429,
            "neutral": 70.42374420166016
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 800,
            "y": 298,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.0002912446216214448,
            "Man": 99.99971008300781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.7501686670584604e-05,
            "indian": 0.0009338140953332186,
            "black": 1.6827459603518946e-06,
            "white": 98.55047607421875,
            "middle eastern": 1.280603051185608,
            "latino hispanic": 0.1679570972919464
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.115352630615234,
            "disgust": 4.349985374574317e-06,
            "fear": 0.5387281179428101,
            "happy": 51.79605484008789,
            "sad": 20.981218338012695,
            "surprise": 0.26516202092170715,
            "neutral": 21.303478240966797
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 40,
        "region": {
            "x": 48,
            "y": 226,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 37.531394958496094,
            "Man": 62.46860122680664
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 50.5536994934082,
            "indian": 6.746252536773682,
            "black": 5.645686626434326,
            "white": 1.1821625232696533,
            "middle eastern": 0.45705273747444153,
            "latino hispanic": 35.41514587402344
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 24.15472412109375,
            "disgust": 1.665274248807691e-05,
            "fear": 0.2416033297777176,
            "happy": 0.00011724185605999082,
            "sad": 41.602752685546875,
            "surprise": 2.074079702651943e-06,
            "neutral": 34.00078582763672
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 196,
            "y": 235,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.98857116699219,
            "Man": 0.011428202502429485
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 25.916465759277344,
            "indian": 10.367925643920898,
            "black": 6.084221363067627,
            "white": 9.745749473571777,
            "middle eastern": 4.784475326538086,
            "latino hispanic": 43.101158142089844
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 5.554436211241409e-05,
            "disgust": 1.4718414043102257e-08,
            "fear": 0.00025574490427970886,
            "happy": 98.96861267089844,
            "sad": 0.015042558312416077,
            "surprise": 0.007894438691437244,
            "neutral": 1.0081472396850586
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 886,
            "y": 255,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.9208344221115112,
            "Man": 99.07917022705078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.443040482892684e-08,
            "indian": 1.449103024242504e-06,
            "black": 100.0,
            "white": 2.773226648322691e-10,
            "middle eastern": 3.65650530687045e-11,
            "latino hispanic": 2.391810198787425e-07
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 7.993973122211173e-05,
            "disgust": 8.179601295265726e-17,
            "fear": 2.2183487544680247e-06,
            "happy": 0.020795071497559547,
            "sad": 0.0019149159779772162,
            "surprise": 0.0001890819548862055,
            "neutral": 99.97702026367188
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 0,
            "y": 353,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 90.97114562988281,
            "Man": 9.028849601745605
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.18910112977027893,
            "indian": 0.5220527648925781,
            "black": 0.023722020909190178,
            "white": 70.97223663330078,
            "middle eastern": 12.840051651000977,
            "latino hispanic": 15.452837944030762
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.752986490726471,
            "disgust": 1.2742144690491841e-06,
            "fear": 57.63561248779297,
            "happy": 0.03370879590511322,
            "sad": 18.871431350708008,
            "surprise": 0.013538524508476257,
            "neutral": 22.692726135253906
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 33,
        "region": {
            "x": 410,
            "y": 284,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0005929399630986154,
            "Man": 99.99940490722656
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0016586860874667764,
            "indian": 2.4162850379943848,
            "black": 0.001999790081754327,
            "white": 28.136268615722656,
            "middle eastern": 66.14767456054688,
            "latino hispanic": 3.296112537384033
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 18.040884017944336,
            "disgust": 0.0006808447651565075,
            "fear": 6.236966133117676,
            "happy": 0.8084534406661987,
            "sad": 25.0520076751709,
            "surprise": 0.06570307165384293,
            "neutral": 49.795310974121094
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 452,
            "y": 59,
            "w": 110,
            "h": 110,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 1.5140224695205688,
            "Man": 98.48597717285156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0008394689648412168,
            "indian": 0.775455892086029,
            "black": 0.0003909135702997446,
            "white": 30.766742706298828,
            "middle eastern": 67.54287719726562,
            "latino hispanic": 0.9136955142021179
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.002160142408683896,
            "disgust": 5.642915468229148e-09,
            "fear": 2.4749209880828857,
            "happy": 0.12945222854614258,
            "sad": 2.8186261653900146,
            "surprise": 0.05077538266777992,
            "neutral": 94.5240707397461
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 281,
            "y": 325,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99976348876953,
            "Man": 0.00023314831196330488
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.4139697253704071,
            "indian": 0.009461723268032074,
            "black": 0.0003231694863643497,
            "white": 97.70575714111328,
            "middle eastern": 0.35208234190940857,
            "latino hispanic": 1.518404483795166
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.008505847305059433,
            "disgust": 1.4957154235162307e-06,
            "fear": 0.9876388907432556,
            "happy": 91.6329116821289,
            "sad": 0.022507954388856888,
            "surprise": 0.18723075091838837,
            "neutral": 7.1612043380737305
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 41,
        "region": {
            "x": 639,
            "y": 311,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.009670214727520943,
            "Man": 99.9903335571289
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.018389152362942696,
            "indian": 0.08691835403442383,
            "black": 0.007973091676831245,
            "white": 89.0383529663086,
            "middle eastern": 5.8396477699279785,
            "latino hispanic": 5.008720397949219
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.3721579313278198,
            "disgust": 8.684623026056215e-05,
            "fear": 1.5302971601486206,
            "happy": 3.679722547531128,
            "sad": 0.14069901406764984,
            "surprise": 29.100444793701172,
            "neutral": 64.17658996582031
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 124,
            "y": 307,
            "w": 101,
            "h": 101,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.11688698828220367,
            "Man": 99.88311004638672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.9501703124878986e-07,
            "indian": 0.0049920454621315,
            "black": 5.350092919798044e-07,
            "white": 64.03517150878906,
            "middle eastern": 35.82661437988281,
            "latino hispanic": 0.1332235038280487
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 58.22398376464844,
            "disgust": 0.012433239258825779,
            "fear": 15.274385452270508,
            "happy": 3.518314838409424,
            "sad": 3.290384531021118,
            "surprise": 0.26374876499176025,
            "neutral": 19.4167423248291
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 28,
        "region": {
            "x": 497,
            "y": 412,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0014282193733379245,
            "Man": 99.99856567382812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0003849852946586907,
            "indian": 0.008028685115277767,
            "black": 2.1928761270828545e-05,
            "white": 92.12416076660156,
            "middle eastern": 6.090972423553467,
            "latino hispanic": 1.7764281034469604
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.438959121704102,
            "disgust": 0.0005230116075836122,
            "fear": 4.6887640953063965,
            "happy": 0.00294586387462914,
            "sad": 68.6549301147461,
            "surprise": 0.005548716057091951,
            "neutral": 17.208328247070312
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 924,
            "y": 425,
            "w": 79,
            "h": 79,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.3194074199418537e-05,
            "Man": 99.99998474121094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00036011249176226556,
            "indian": 0.14193327724933624,
            "black": 0.0004838726599700749,
            "white": 57.331390380859375,
            "middle eastern": 39.01285171508789,
            "latino hispanic": 3.512981653213501
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.484048843383789,
            "disgust": 4.833862112718634e-05,
            "fear": 0.8409122824668884,
            "happy": 0.3125058114528656,
            "sad": 15.232518196105957,
            "surprise": 0.032320622354745865,
            "neutral": 77.09764099121094
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 272,
            "y": 449,
            "w": 106,
            "h": 106,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 8.047663868637756e-05,
            "Man": 99.99991607666016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.03200027719140053,
            "indian": 1.8839812278747559,
            "black": 0.014135971665382385,
            "white": 35.78080368041992,
            "middle eastern": 49.799049377441406,
            "latino hispanic": 12.490038871765137
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 4.863081455230713,
            "disgust": 0.005810150410979986,
            "fear": 8.0865478515625,
            "happy": 3.0081984996795654,
            "sad": 5.458817005157471,
            "surprise": 0.20627520978450775,
            "neutral": 78.37127685546875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 55,
            "y": 450,
            "w": 93,
            "h": 93,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.0012830263003706932,
            "Man": 99.99871063232422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.549452304840088,
            "indian": 11.5582275390625,
            "black": 0.9539299011230469,
            "white": 22.59480857849121,
            "middle eastern": 34.39339828491211,
            "latino hispanic": 28.95018196105957
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 38.852577209472656,
            "disgust": 0.00044918147614225745,
            "fear": 0.28977784514427185,
            "happy": 0.6479413509368896,
            "sad": 33.664520263671875,
            "surprise": 0.10119377076625824,
            "neutral": 26.443544387817383
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 28,
        "region": {
            "x": 713,
            "y": 420,
            "w": 102,
            "h": 102,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.02725357748568058,
            "Man": 99.97274017333984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00015779577370267361,
            "indian": 0.2534332573413849,
            "black": 0.0005522139836102724,
            "white": 45.26636505126953,
            "middle eastern": 51.20280838012695,
            "latino hispanic": 3.276684522628784
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.8518171310424805,
            "disgust": 8.554395236615164e-08,
            "fear": 9.098854064941406,
            "happy": 0.23074504733085632,
            "sad": 0.676464319229126,
            "surprise": 0.01038521621376276,
            "neutral": 89.13172912597656
        },
        "dominant_emotion": "neutral"
    }
]
let electrician_data4 = [
    {
      "age": 32,
      "region": {
        "x": 132,
        "y": 111,
        "w": 32,
        "h": 32,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.94,
      "gender": {
        "Woman": 15.958287239074707,
        "Man": 84.04170989990234
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 5.617530345916748,
        "indian": 2.946603775024414,
        "black": 0.6565263271331787,
        "white": 47.011192321777344,
        "middle eastern": 19.76982307434082,
        "latino hispanic": 23.99831771850586
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 0.12683282792568207,
        "disgust": 0.00011836316116387025,
        "fear": 0.8578219413757324,
        "happy": 4.149486064910889,
        "sad": 0.955589771270752,
        "surprise": 0.03862899914383888,
        "neutral": 93.87152099609375
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 27,
      "region": {
        "x": 543,
        "y": 97,
        "w": 34,
        "h": 34,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.95,
      "gender": {
        "Woman": 0.11086192727088928,
        "Man": 99.88914489746094
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 11.992911338806152,
        "indian": 10.779547691345215,
        "black": 11.590983390808105,
        "white": 20.736989974975586,
        "middle eastern": 19.35940933227539,
        "latino hispanic": 25.540157318115234
      },
      "dominant_race": "latino hispanic",
      "emotion": {
        "angry": 0.26564183831214905,
        "disgust": 0.09125771373510361,
        "fear": 1.3151109218597412,
        "happy": 41.51826477050781,
        "sad": 44.10431671142578,
        "surprise": 0.10018746554851532,
        "neutral": 12.605216979980469
      },
      "dominant_emotion": "sad"
    },
    {
      "age": 31,
      "region": {
        "x": 727,
        "y": 93,
        "w": 38,
        "h": 38,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.95,
      "gender": {
        "Woman": 0.1381688416004181,
        "Man": 99.8618392944336
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 1.917343258857727,
        "indian": 3.3252530097961426,
        "black": 0.4426403343677521,
        "white": 47.94009780883789,
        "middle eastern": 29.0548152923584,
        "latino hispanic": 17.319852828979492
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 0.003121423302218318,
        "disgust": 0.0004495122120715678,
        "fear": 0.042129553854465485,
        "happy": 81.27254486083984,
        "sad": 0.2561376690864563,
        "surprise": 0.01630117930471897,
        "neutral": 18.40931510925293
      },
      "dominant_emotion": "happy"
    },
    {
      "age": 33,
      "region": {
        "x": 394,
        "y": 118,
        "w": 40,
        "h": 40,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.92,
      "gender": {
        "Woman": 0.7129254937171936,
        "Man": 99.28707122802734
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 5.968937873840332,
        "indian": 7.256155490875244,
        "black": 1.5309431552886963,
        "white": 34.0018310546875,
        "middle eastern": 27.745136260986328,
        "latino hispanic": 23.496999740600586
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 16.115816116333008,
        "disgust": 0.0053098504431545734,
        "fear": 11.178712844848633,
        "happy": 18.405166625976562,
        "sad": 4.918188095092773,
        "surprise": 20.442317962646484,
        "neutral": 28.934484481811523
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 32,
      "region": {
        "x": 962,
        "y": 163,
        "w": 45,
        "h": 45,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.94,
      "gender": {
        "Woman": 0.010220196098089218,
        "Man": 99.98978424072266
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.025987369939684868,
        "indian": 0.39561137557029724,
        "black": 0.00749179208651185,
        "white": 69.68736267089844,
        "middle eastern": 22.53843879699707,
        "latino hispanic": 7.34511661529541
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 1.2309423685073853,
        "disgust": 0.00046020341687835753,
        "fear": 4.929473400115967,
        "happy": 0.07646120339632034,
        "sad": 21.393308639526367,
        "surprise": 0.0020842389203608036,
        "neutral": 72.36727142333984
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 39,
      "region": {
        "x": 638,
        "y": 82,
        "w": 57,
        "h": 57,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.94,
      "gender": {
        "Woman": 0.929332435131073,
        "Man": 99.07067108154297
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.036780957132577896,
        "indian": 0.5739261507987976,
        "black": 0.03400840610265732,
        "white": 57.56943130493164,
        "middle eastern": 38.68769836425781,
        "latino hispanic": 3.098158836364746
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 0.0475967712700367,
        "disgust": 1.0278656645823503e-06,
        "fear": 1.3071774244308472,
        "happy": 0.482148140668869,
        "sad": 9.626578330993652,
        "surprise": 4.762309981742874e-05,
        "neutral": 88.53645324707031
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 39,
      "region": {
        "x": 556,
        "y": 193,
        "w": 61,
        "h": 61,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.96,
      "gender": {
        "Woman": 3.603433132171631,
        "Man": 96.39656829833984
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 1.444265604019165,
        "indian": 5.8173065185546875,
        "black": 1.0069761276245117,
        "white": 33.57951736450195,
        "middle eastern": 43.47401809692383,
        "latino hispanic": 14.677925109863281
      },
      "dominant_race": "middle eastern",
      "emotion": {
        "angry": 3.4994170665740967,
        "disgust": 4.4817002731178945e-07,
        "fear": 0.006520761176943779,
        "happy": 8.194999694824219,
        "sad": 0.6214463114738464,
        "surprise": 0.0002590638760011643,
        "neutral": 87.67735290527344
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 39,
      "region": {
        "x": 184,
        "y": 203,
        "w": 50,
        "h": 50,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.91,
      "gender": {
        "Woman": 0.05106551572680473,
        "Man": 99.94892883300781
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 1.824724904508912e-06,
        "indian": 1.4848559658275917e-05,
        "black": 1.1135898425607138e-08,
        "white": 99.79864501953125,
        "middle eastern": 0.16850996017456055,
        "latino hispanic": 0.03282807767391205
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 0.07751864939928055,
        "disgust": 3.4554155718069524e-05,
        "fear": 0.16483791172504425,
        "happy": 46.94432830810547,
        "sad": 1.0593187808990479,
        "surprise": 0.09454378485679626,
        "neutral": 51.659420013427734
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 26,
      "region": {
        "x": 21,
        "y": 142,
        "w": 59,
        "h": 59,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.93,
      "gender": {
        "Woman": 6.191826343536377,
        "Man": 93.80816650390625
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.00032686610938981175,
        "indian": 0.007493169046938419,
        "black": 1.0528257007536013e-05,
        "white": 93.47517395019531,
        "middle eastern": 5.9794230461120605,
        "latino hispanic": 0.5375731587409973
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 0.138264462351799,
        "disgust": 1.0176567855069152e-07,
        "fear": 4.5044333091937006e-05,
        "happy": 51.1812858581543,
        "sad": 6.023636341094971,
        "surprise": 7.682892544380593e-08,
        "neutral": 42.656776428222656
      },
      "dominant_emotion": "happy"
    },
    {
      "age": 39,
      "region": {
        "x": 435,
        "y": 153,
        "w": 48,
        "h": 48,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.95,
      "gender": {
        "Woman": 1.0174570083618164,
        "Man": 98.9825439453125
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.002925308421254158,
        "indian": 0.0036660947371274233,
        "black": 4.98586923640687e-05,
        "white": 97.52005004882812,
        "middle eastern": 1.529554843902588,
        "latino hispanic": 0.9437442421913147
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 0.5313393473625183,
        "disgust": 3.119171142578125,
        "fear": 69.57966613769531,
        "happy": 2.8721718788146973,
        "sad": 21.949981689453125,
        "surprise": 0.07907126843929291,
        "neutral": 1.8686009645462036
      },
      "dominant_emotion": "fear"
    },
    {
      "age": 27,
      "region": {
        "x": 518,
        "y": 155,
        "w": 48,
        "h": 48,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.96,
      "gender": {
        "Woman": 14.005070686340332,
        "Man": 85.99492645263672
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 8.158183097839355,
        "indian": 7.033681392669678,
        "black": 1.0465983152389526,
        "white": 34.89075469970703,
        "middle eastern": 33.62511444091797,
        "latino hispanic": 15.245672225952148
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 0.014253538101911545,
        "disgust": 1.174719628238563e-07,
        "fear": 0.09857064485549927,
        "happy": 0.0033426666632294655,
        "sad": 99.81672668457031,
        "surprise": 1.6057930452006985e-06,
        "neutral": 0.0671047493815422
      },
      "dominant_emotion": "sad"
    },
    {
      "age": 29,
      "region": {
        "x": 505,
        "y": 159,
        "w": 43,
        "h": 43,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.96,
      "gender": {
        "Woman": 27.144575119018555,
        "Man": 72.85542297363281
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 59.7637825012207,
        "indian": 1.472877025604248,
        "black": 0.5842318534851074,
        "white": 22.273574829101562,
        "middle eastern": 3.558589458465576,
        "latino hispanic": 12.346943855285645
      },
      "dominant_race": "asian",
      "emotion": {
        "angry": 0.008289034478366375,
        "disgust": 2.230691542592922e-08,
        "fear": 6.560176849365234,
        "happy": 10.887558937072754,
        "sad": 59.192813873291016,
        "surprise": 1.5088362488313578e-06,
        "neutral": 23.35116195678711
      },
      "dominant_emotion": "sad"
    },
    {
      "age": 36,
      "region": {
        "x": 673,
        "y": 156,
        "w": 51,
        "h": 51,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.97,
      "gender": {
        "Woman": 0.1311338096857071,
        "Man": 99.86886596679688
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.0457826666533947,
        "indian": 0.2061890959739685,
        "black": 0.005405890755355358,
        "white": 80.722412109375,
        "middle eastern": 14.598591804504395,
        "latino hispanic": 4.421622276306152
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 0.2847931385040283,
        "disgust": 0.0006275474443100393,
        "fear": 20.737903594970703,
        "happy": 34.92300033569336,
        "sad": 0.472034752368927,
        "surprise": 14.9471435546875,
        "neutral": 28.634496688842773
      },
      "dominant_emotion": "happy"
    },
    {
      "age": 31,
      "region": {
        "x": 975,
        "y": 268,
        "w": 48,
        "h": 51,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.93,
      "gender": {
        "Woman": 0.5838490724563599,
        "Man": 99.41615295410156
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 12.628195762634277,
        "indian": 12.422698974609375,
        "black": 4.182067394256592,
        "white": 21.8500919342041,
        "middle eastern": 25.878154754638672,
        "latino hispanic": 23.03879165649414
      },
      "dominant_race": "middle eastern",
      "emotion": {
        "angry": 0.5971251726150513,
        "disgust": 0.00335196522064507,
        "fear": 0.7426660060882568,
        "happy": 87.73481750488281,
        "sad": 0.36387044191360474,
        "surprise": 3.0890471935272217,
        "neutral": 7.469127655029297
      },
      "dominant_emotion": "happy"
    },
    {
      "age": 34,
      "region": {
        "x": 232,
        "y": 270,
        "w": 49,
        "h": 49,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.91,
      "gender": {
        "Woman": 0.003643747651949525,
        "Man": 99.99635314941406
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 4.468389987945557,
        "indian": 14.244592666625977,
        "black": 4.1380295753479,
        "white": 16.569673538208008,
        "middle eastern": 36.716121673583984,
        "latino hispanic": 23.863195419311523
      },
      "dominant_race": "middle eastern",
      "emotion": {
        "angry": 0.00010897908214246854,
        "disgust": 1.5879392023521177e-08,
        "fear": 0.0006094943382777274,
        "happy": 98.5809555053711,
        "sad": 0.00035496504278853536,
        "surprise": 0.0023235268890857697,
        "neutral": 1.4156357049942017
      },
      "dominant_emotion": "happy"
    },
    {
      "age": 32,
      "region": {
        "x": 383,
        "y": 275,
        "w": 56,
        "h": 56,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.93,
      "gender": {
        "Woman": 0.1339336633682251,
        "Man": 99.8660659790039
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.49260392785072327,
        "indian": 0.8777888417243958,
        "black": 0.08718017488718033,
        "white": 63.079166412353516,
        "middle eastern": 21.111909866333008,
        "latino hispanic": 14.351348876953125
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 2.1088836193084717,
        "disgust": 0.0010968646965920925,
        "fear": 17.917856216430664,
        "happy": 1.490743637084961,
        "sad": 3.2282652854919434,
        "surprise": 0.05669501796364784,
        "neutral": 75.19646453857422
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 39,
      "region": {
        "x": 283,
        "y": 219,
        "w": 61,
        "h": 61,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.92,
      "gender": {
        "Woman": 10.919219970703125,
        "Man": 89.08078002929688
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.2899147570133209,
        "indian": 0.4383181929588318,
        "black": 0.032514072954654694,
        "white": 75.72603607177734,
        "middle eastern": 16.0750675201416,
        "latino hispanic": 7.438151836395264
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 0.0018657625187188387,
        "disgust": 2.653382580319885e-08,
        "fear": 0.0035525579005479813,
        "happy": 4.243502616882324,
        "sad": 0.019949806854128838,
        "surprise": 0.0023158506955951452,
        "neutral": 95.72881317138672
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 36,
      "region": {
        "x": 884,
        "y": 88,
        "w": 68,
        "h": 68,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.96,
      "gender": {
        "Woman": 36.4434814453125,
        "Man": 63.556514739990234
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 4.4676055908203125,
        "indian": 9.148406982421875,
        "black": 3.920532464981079,
        "white": 17.690101623535156,
        "middle eastern": 56.578529357910156,
        "latino hispanic": 8.19482707977295
      },
      "dominant_race": "middle eastern",
      "emotion": {
        "angry": 5.857031646883115e-05,
        "disgust": 2.1325286371845498e-13,
        "fear": 1.2642526598938275e-06,
        "happy": 79.08958435058594,
        "sad": 0.04117944464087486,
        "surprise": 4.29492219566896e-09,
        "neutral": 20.869176864624023
      },
      "dominant_emotion": "happy"
    },
    {
      "age": 34,
      "region": {
        "x": 606,
        "y": 252,
        "w": 54,
        "h": 54,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.92,
      "gender": {
        "Woman": 0.012265481986105442,
        "Man": 99.98773193359375
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 1.5533592700958252,
        "indian": 1.7538352012634277,
        "black": 0.3065694570541382,
        "white": 55.286067962646484,
        "middle eastern": 20.6592960357666,
        "latino hispanic": 20.440876007080078
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 0.0029977408703416586,
        "disgust": 9.194722849770187e-08,
        "fear": 0.011689992621541023,
        "happy": 53.921939849853516,
        "sad": 0.02822544053196907,
        "surprise": 0.034803349524736404,
        "neutral": 46.00034713745117
      },
      "dominant_emotion": "happy"
    },
    {
      "age": 29,
      "region": {
        "x": 696,
        "y": 241,
        "w": 54,
        "h": 54,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.95,
      "gender": {
        "Woman": 0.2603358328342438,
        "Man": 99.73966217041016
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.3731844127178192,
        "indian": 2.0799269676208496,
        "black": 0.08543148636817932,
        "white": 43.20555877685547,
        "middle eastern": 35.04256057739258,
        "latino hispanic": 19.213333129882812
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 0.3754197061061859,
        "disgust": 0.0028509669937193394,
        "fear": 33.32823944091797,
        "happy": 10.181343078613281,
        "sad": 16.18292236328125,
        "surprise": 0.2055741548538208,
        "neutral": 39.72364807128906
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 29,
      "region": {
        "x": 80,
        "y": 229,
        "w": 52,
        "h": 52,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.97,
      "gender": {
        "Woman": 0.005070159211754799,
        "Man": 99.99493408203125
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.008612234145402908,
        "indian": 2.117779493331909,
        "black": 0.0019522609654814005,
        "white": 30.10667610168457,
        "middle eastern": 60.2689094543457,
        "latino hispanic": 7.4960761070251465
      },
      "dominant_race": "middle eastern",
      "emotion": {
        "angry": 0.0007122104871086776,
        "disgust": 7.648578992380806e-10,
        "fear": 1.324186086654663,
        "happy": 96.82697296142578,
        "sad": 0.8538506031036377,
        "surprise": 0.37574660778045654,
        "neutral": 0.6185279488563538
      },
      "dominant_emotion": "happy"
    },
    {
      "age": 32,
      "region": {
        "x": 803,
        "y": 226,
        "w": 54,
        "h": 54,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.97,
      "gender": {
        "Woman": 2.6263742446899414,
        "Man": 97.37361907958984
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.0003424503083806485,
        "indian": 0.0007404379430226982,
        "black": 4.882536813965999e-06,
        "white": 99.16300201416016,
        "middle eastern": 0.632808268070221,
        "latino hispanic": 0.20310641825199127
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 27.640380859375,
        "disgust": 4.610978066921234e-06,
        "fear": 0.6780408620834351,
        "happy": 2.610321283340454,
        "sad": 7.994380474090576,
        "surprise": 9.683762618806213e-05,
        "neutral": 61.07677459716797
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 39,
      "region": {
        "x": 842,
        "y": 290,
        "w": 66,
        "h": 66,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.94,
      "gender": {
        "Woman": 0.5767993927001953,
        "Man": 99.42320251464844
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.06084233894944191,
        "indian": 2.024973154067993,
        "black": 0.020385559648275375,
        "white": 37.02528381347656,
        "middle eastern": 52.701656341552734,
        "latino hispanic": 8.166852951049805
      },
      "dominant_race": "middle eastern",
      "emotion": {
        "angry": 0.5094766616821289,
        "disgust": 5.522348637404528e-12,
        "fear": 0.00012607969983946532,
        "happy": 2.1305006157490425e-05,
        "sad": 0.10365454107522964,
        "surprise": 8.091994629921828e-09,
        "neutral": 99.38671875
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 35,
      "region": {
        "x": 496,
        "y": 238,
        "w": 72,
        "h": 72,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.93,
      "gender": {
        "Woman": 0.14419668912887573,
        "Man": 99.85579681396484
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.0007165329298004508,
        "indian": 0.250894159078598,
        "black": 0.0009190846467390656,
        "white": 47.152408599853516,
        "middle eastern": 51.49423599243164,
        "latino hispanic": 1.1008244752883911
      },
      "dominant_race": "middle eastern",
      "emotion": {
        "angry": 0.001321447198279202,
        "disgust": 8.424803127127234e-06,
        "fear": 0.01496848277747631,
        "happy": 78.31597900390625,
        "sad": 0.16085746884346008,
        "surprise": 0.0023039679508656263,
        "neutral": 21.50456428527832
      },
      "dominant_emotion": "happy"
    },
    {
      "age": 29,
      "region": {
        "x": 294,
        "y": 71,
        "w": 81,
        "h": 81,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.91,
      "gender": {
        "Woman": 13.822563171386719,
        "Man": 86.17742919921875
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 7.924190998077393,
        "indian": 8.401046752929688,
        "black": 20.44558334350586,
        "white": 22.032594680786133,
        "middle eastern": 29.657108306884766,
        "latino hispanic": 11.53947639465332
      },
      "dominant_race": "middle eastern",
      "emotion": {
        "angry": 0.00025680879480205476,
        "disgust": 5.6128831373318186e-14,
        "fear": 2.9858146177730305e-08,
        "happy": 0.699244499206543,
        "sad": 0.0009052765090018511,
        "surprise": 8.546901852923838e-09,
        "neutral": 99.29959106445312
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 44,
      "region": {
        "x": 745,
        "y": 327,
        "w": 60,
        "h": 60,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.95,
      "gender": {
        "Woman": 0.3015148639678955,
        "Man": 99.698486328125
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 1.9831171035766602,
        "indian": 10.76467227935791,
        "black": 1.068485975265503,
        "white": 21.266233444213867,
        "middle eastern": 41.32370376586914,
        "latino hispanic": 23.593788146972656
      },
      "dominant_race": "middle eastern",
      "emotion": {
        "angry": 0.22565603256225586,
        "disgust": 0.00041949469596147537,
        "fear": 0.6618164777755737,
        "happy": 30.322052001953125,
        "sad": 6.126083850860596,
        "surprise": 0.13789138197898865,
        "neutral": 62.526084899902344
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 43,
      "region": {
        "x": 4,
        "y": 339,
        "w": 55,
        "h": 55,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.92,
      "gender": {
        "Woman": 0.026527708396315575,
        "Man": 99.97347259521484
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 3.5886406898498535,
        "indian": 8.416158676147461,
        "black": 1.3022598028182983,
        "white": 33.483097076416016,
        "middle eastern": 30.082477569580078,
        "latino hispanic": 23.12736701965332
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 0.08821820467710495,
        "disgust": 0.00010269034828525037,
        "fear": 0.010782424360513687,
        "happy": 97.7365951538086,
        "sad": 0.26586198806762695,
        "surprise": 0.027033383026719093,
        "neutral": 1.8714088201522827
      },
      "dominant_emotion": "happy"
    },
    {
      "age": 33,
      "region": {
        "x": 901,
        "y": 350,
        "w": 60,
        "h": 60,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.94,
      "gender": {
        "Woman": 0.03558103367686272,
        "Man": 99.96441650390625
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.0018358890665695071,
        "indian": 0.03778695687651634,
        "black": 0.00014786988322157413,
        "white": 86.29512023925781,
        "middle eastern": 11.966403007507324,
        "latino hispanic": 1.6987082958221436
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 0.0034887155052274466,
        "disgust": 7.908996479955022e-08,
        "fear": 0.00173565826844424,
        "happy": 99.70646667480469,
        "sad": 0.16859710216522217,
        "surprise": 0.0672203004360199,
        "neutral": 0.052488602697849274
      },
      "dominant_emotion": "happy"
    },
    {
      "age": 32,
      "region": {
        "x": 475,
        "y": 383,
        "w": 61,
        "h": 61,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.95,
      "gender": {
        "Woman": 0.03096652589738369,
        "Man": 99.96903991699219
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.02761775068938732,
        "indian": 1.822731614112854,
        "black": 0.012532577849924564,
        "white": 27.174579620361328,
        "middle eastern": 64.60755920410156,
        "latino hispanic": 6.354989528656006
      },
      "dominant_race": "middle eastern",
      "emotion": {
        "angry": 0.2525639832019806,
        "disgust": 5.132760634296574e-05,
        "fear": 5.6079277992248535,
        "happy": 32.405853271484375,
        "sad": 1.0069364309310913,
        "surprise": 8.030207633972168,
        "neutral": 52.69646453857422
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 33,
      "region": {
        "x": 323,
        "y": 362,
        "w": 71,
        "h": 71,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.93,
      "gender": {
        "Woman": 0.0324544757604599,
        "Man": 99.9675521850586
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.006801026873290539,
        "indian": 8.176153182983398,
        "black": 0.00838578213006258,
        "white": 5.861019611358643,
        "middle eastern": 81.29423522949219,
        "latino hispanic": 4.653408527374268
      },
      "dominant_race": "middle eastern",
      "emotion": {
        "angry": 0.0017052004113793373,
        "disgust": 1.2366733415092312e-07,
        "fear": 0.0016844876809045672,
        "happy": 90.35337829589844,
        "sad": 0.07927605509757996,
        "surprise": 0.00423568207770586,
        "neutral": 9.559714317321777
      },
      "dominant_emotion": "happy"
    },
    {
      "age": 34,
      "region": {
        "x": 4,
        "y": 565,
        "w": 70,
        "h": 70,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.94,
      "gender": {
        "Woman": 6.391730130417272e-05,
        "Man": 99.99993896484375
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.00011635256669251248,
        "indian": 0.0013144355034455657,
        "black": 2.4646640213177307e-06,
        "white": 97.68498992919922,
        "middle eastern": 1.9362205266952515,
        "latino hispanic": 0.37735694646835327
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 0.16936258971691132,
        "disgust": 0.00031994780874811113,
        "fear": 0.13807715475559235,
        "happy": 54.40215301513672,
        "sad": 0.3800393044948578,
        "surprise": 0.07714920490980148,
        "neutral": 44.83290481567383
      },
      "dominant_emotion": "happy"
    },
    {
      "age": 37,
      "region": {
        "x": 789,
        "y": 570,
        "w": 66,
        "h": 66,
        "left_eye": [
          830,
          595
        ],
        "right_eye": [
          810,
          594
        ]
      },
      "face_confidence": 0.94,
      "gender": {
        "Woman": 0.002063632942736149,
        "Man": 99.99794006347656
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.0005579519202001393,
        "indian": 6.438238143920898,
        "black": 0.0033547328785061836,
        "white": 3.209393262863159,
        "middle eastern": 88.31661987304688,
        "latino hispanic": 2.031834125518799
      },
      "dominant_race": "middle eastern",
      "emotion": {
        "angry": 0.0021172657143324614,
        "disgust": 1.2896060752609628e-07,
        "fear": 0.01566513627767563,
        "happy": 94.02234649658203,
        "sad": 0.05641787126660347,
        "surprise": 0.15194565057754517,
        "neutral": 5.751511573791504
      },
      "dominant_emotion": "happy"
    },
    {
      "age": 34,
      "region": {
        "x": 969,
        "y": 569,
        "w": 54,
        "h": 69,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.96,
      "gender": {
        "Woman": 0.04806331545114517,
        "Man": 99.95193481445312
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.09653162956237793,
        "indian": 3.2253806591033936,
        "black": 0.055405598133802414,
        "white": 40.17304611206055,
        "middle eastern": 49.443809509277344,
        "latino hispanic": 7.005826950073242
      },
      "dominant_race": "middle eastern",
      "emotion": {
        "angry": 7.40215539932251,
        "disgust": 0.0011617569252848625,
        "fear": 0.09215692430734634,
        "happy": 2.4983856678009033,
        "sad": 43.58723068237305,
        "surprise": 0.014092151075601578,
        "neutral": 46.404823303222656
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 28,
      "region": {
        "x": 189,
        "y": 575,
        "w": 61,
        "h": 61,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.93,
      "gender": {
        "Woman": 0.0512748621404171,
        "Man": 99.94873046875
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 1.1139553785324097,
        "indian": 0.5074179172515869,
        "black": 0.13712440431118011,
        "white": 72.4866714477539,
        "middle eastern": 12.349547386169434,
        "latino hispanic": 13.405288696289062
      },
      "dominant_race": "white",
      "emotion": {
        "angry": 1.203249454498291,
        "disgust": 0.0002897576487157494,
        "fear": 0.4382341206073761,
        "happy": 0.193813294172287,
        "sad": 2.5026462078094482,
        "surprise": 0.007429707329720259,
        "neutral": 95.65433502197266
      },
      "dominant_emotion": "neutral"
    },
    {
      "age": 39,
      "region": {
        "x": 587,
        "y": 606,
        "w": 61,
        "h": 61,
        "left_eye": null,
        "right_eye": null
      },
      "face_confidence": 0.95,
      "gender": {
        "Woman": 0.0016959119820967317,
        "Man": 99.99830627441406
      },
      "dominant_gender": "Man",
      "race": {
        "asian": 0.025103909894824028,
        "indian": 3.711855411529541,
        "black": 0.015476029366254807,
        "white": 18.420499801635742,
        "middle eastern": 72.23020935058594,
        "latino hispanic": 5.596853733062744
      },
      "dominant_race": "middle eastern",
      "emotion": {
        "angry": 0.043354637920856476,
        "disgust": 0.00011875556083396077,
        "fear": 0.4232402741909027,
        "happy": 66.51510620117188,
        "sad": 0.7626459002494812,
        "surprise": 0.19695615768432617,
        "neutral": 32.058570861816406
      },
      "dominant_emotion": "happy"
    }
  ]
  

console.log("Microsoft Results for Electrician:");
const data = electrician_data.concat(electrician_data2, electrician_data3, electrician_data4);
console.log(processData(data));