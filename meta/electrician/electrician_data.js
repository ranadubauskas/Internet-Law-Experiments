const { processData } = require('../../data_processing.js');

let electrician_data = [
    {
        "age": 36,
        "region": {
            "x": 903,
            "y": 174,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.16281458735466003,
            "Man": 99.83718872070312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.915964043699205e-06,
            "indian": 5.506658908416284e-06,
            "black": 8.252508365558242e-08,
            "white": 99.95756530761719,
            "middle eastern": 0.021905336529016495,
            "latino hispanic": 0.020518019795417786
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.469841957092285,
            "disgust": 0.00016716842947062105,
            "fear": 17.93975830078125,
            "happy": 0.037832241505384445,
            "sad": 33.42897415161133,
            "surprise": 0.158724844455719,
            "neutral": 43.96469497680664
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 351,
            "y": 125,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 1.3742080926895142,
            "Man": 98.62579345703125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.4811832904815674,
            "indian": 1.4422528743743896,
            "black": 0.19665372371673584,
            "white": 65.09932708740234,
            "middle eastern": 18.238195419311523,
            "latino hispanic": 13.542387962341309
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.9634957313537598,
            "disgust": 1.0436944648972712e-05,
            "fear": 2.530754327774048,
            "happy": 3.883389126713155e-06,
            "sad": 96.35835266113281,
            "surprise": 1.8658194278486917e-07,
            "neutral": 0.1473820060491562
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 28,
        "region": {
            "x": 292,
            "y": 127,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 7.296302795410156,
            "Man": 92.70369720458984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.9539589130729285e-12,
            "indian": 3.046352504022104e-13,
            "black": 1.4026108570834605e-16,
            "white": 100.0,
            "middle eastern": 2.301534323123633e-06,
            "latino hispanic": 2.8709839625662426e-06
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 74.79169464111328,
            "disgust": 2.0287110601202585e-05,
            "fear": 3.7237629890441895,
            "happy": 0.1066233366727829,
            "sad": 20.346574783325195,
            "surprise": 0.00019431851978879422,
            "neutral": 1.031127691268921
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 26,
        "region": {
            "x": 565,
            "y": 178,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.309793084859848,
            "Man": 99.6902084350586
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.3361028524959693e-06,
            "indian": 4.266013547749026e-06,
            "black": 2.008278521259399e-08,
            "white": 99.96417999267578,
            "middle eastern": 0.023413734510540962,
            "latino hispanic": 0.012405388988554478
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 19.140993118286133,
            "disgust": 0.0059157004579901695,
            "fear": 6.3291754722595215,
            "happy": 0.04923335090279579,
            "sad": 65.56919860839844,
            "surprise": 0.004382867366075516,
            "neutral": 8.901103973388672
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 709,
            "y": 176,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.19698970019817352,
            "Man": 99.80300903320312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.052428245544434,
            "indian": 4.7530436515808105,
            "black": 0.699151337146759,
            "white": 37.40081024169922,
            "middle eastern": 13.15294361114502,
            "latino hispanic": 36.941619873046875
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 30.779096603393555,
            "disgust": 5.733169473387534e-06,
            "fear": 0.2517296075820923,
            "happy": 0.0046826316975057125,
            "sad": 12.255148887634277,
            "surprise": 0.0006131483823992312,
            "neutral": 56.70872497558594
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 986,
            "y": 198,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.03963475301861763,
            "Man": 99.96036529541016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.2880334854125977,
            "indian": 0.6668523550033569,
            "black": 0.1348113864660263,
            "white": 73.55782318115234,
            "middle eastern": 15.034500122070312,
            "latino hispanic": 9.317980766296387
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 98.13899230957031,
            "disgust": 0.00018429702322464436,
            "fear": 0.3399072587490082,
            "happy": 0.0002017991355387494,
            "sad": 1.519087553024292,
            "surprise": 2.08854708034778e-05,
            "neutral": 0.0015967026120051742
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 37,
        "region": {
            "x": 760,
            "y": 134,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 5.5006866455078125,
            "Man": 94.49932098388672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 14.482829093933105,
            "indian": 5.243902206420898,
            "black": 1.5504666566848755,
            "white": 43.26268005371094,
            "middle eastern": 18.88310432434082,
            "latino hispanic": 16.57701873779297
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.12794159352779388,
            "disgust": 0.00046845056931488216,
            "fear": 78.18045806884766,
            "happy": 0.0215668473392725,
            "sad": 4.109698295593262,
            "surprise": 0.5153976678848267,
            "neutral": 17.04447364807129
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 27,
        "region": {
            "x": 222,
            "y": 140,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.99,
        "gender": {
            "Woman": 98.75068664550781,
            "Man": 1.2493104934692383
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.325268745422363,
            "indian": 5.524903297424316,
            "black": 1.8094584941864014,
            "white": 41.64817810058594,
            "middle eastern": 19.54296875,
            "latino hispanic": 23.149227142333984
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5397090315818787,
            "disgust": 0.00858133751899004,
            "fear": 0.3129425644874573,
            "happy": 1.8655503988265991,
            "sad": 1.2408448457717896,
            "surprise": 0.0028077519964426756,
            "neutral": 96.02957153320312
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 924,
            "y": 230,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.006087745074182749,
            "Man": 99.99391174316406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.9633965492248535,
            "indian": 0.4572712779045105,
            "black": 3.8786041736602783,
            "white": 78.45149993896484,
            "middle eastern": 3.2589807510375977,
            "latino hispanic": 10.990249633789062
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.429937362670898,
            "disgust": 3.277717769378796e-05,
            "fear": 8.779006004333496,
            "happy": 0.00020142745051998645,
            "sad": 76.28398895263672,
            "surprise": 1.3452349776343908e-06,
            "neutral": 8.506832122802734
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 29,
        "region": {
            "x": 1015,
            "y": 239,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.0712326169013977,
            "Man": 99.92876434326172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.05393054708838463,
            "indian": 0.18066738545894623,
            "black": 0.010125637985765934,
            "white": 88.77245330810547,
            "middle eastern": 5.556575775146484,
            "latino hispanic": 5.426243782043457
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.1652462482452393,
            "disgust": 9.189764682560053e-08,
            "fear": 0.9015362858772278,
            "happy": 0.003609076142311096,
            "sad": 46.844993591308594,
            "surprise": 6.471876986324787e-06,
            "neutral": 49.08460998535156
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 651,
            "y": 311,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.0687836408615112,
            "Man": 98.93121337890625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 30.993894577026367,
            "indian": 5.984991550445557,
            "black": 4.591846942901611,
            "white": 24.93947982788086,
            "middle eastern": 11.482877731323242,
            "latino hispanic": 22.00691032409668
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0012115729041397572,
            "disgust": 5.31787991420174e-09,
            "fear": 0.017027463763952255,
            "happy": 4.047828674316406,
            "sad": 0.012590059079229832,
            "surprise": 0.06938500702381134,
            "neutral": 95.85195922851562
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 1094,
            "y": 315,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.733871579170227,
            "Man": 99.26612091064453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.802707063499838e-05,
            "indian": 0.00020880292868241668,
            "black": 2.4952310013759416e-06,
            "white": 99.00653076171875,
            "middle eastern": 0.19582539796829224,
            "latino hispanic": 0.7973375916481018
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.0941555500030518,
            "disgust": 9.90228436421603e-05,
            "fear": 6.715051651000977,
            "happy": 0.05757443979382515,
            "sad": 85.56429290771484,
            "surprise": 0.0003824392333626747,
            "neutral": 5.568449020385742
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 29,
        "region": {
            "x": 1014,
            "y": 319,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.005873856134712696,
            "Man": 99.99412536621094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.203521919203922e-05,
            "indian": 0.00012824565055780113,
            "black": 1.7545157788845245e-06,
            "white": 99.26913452148438,
            "middle eastern": 0.32146087288856506,
            "latino hispanic": 0.4092450737953186
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 11.047964096069336,
            "disgust": 0.06826213002204895,
            "fear": 46.00236892700195,
            "happy": 1.764506459236145,
            "sad": 29.04990577697754,
            "surprise": 0.04640122503042221,
            "neutral": 12.020590782165527
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 26,
        "region": {
            "x": 1138,
            "y": 335,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 5.948720932006836,
            "Man": 94.05128479003906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.023581027984619,
            "indian": 0.05397939682006836,
            "black": 0.01166003942489624,
            "white": 87.17955017089844,
            "middle eastern": 2.1193060874938965,
            "latino hispanic": 5.611916542053223
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 14.719970703125,
            "disgust": 0.00035234595998190343,
            "fear": 2.900135040283203,
            "happy": 0.003500275081023574,
            "sad": 49.24927520751953,
            "surprise": 3.639768692664802e-05,
            "neutral": 33.126731872558594
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 351,
            "y": 273,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.05513032525777817,
            "Man": 99.94486999511719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.469272286642621e-10,
            "indian": 9.609874007665553e-10,
            "black": 1.8358489641684406e-12,
            "white": 99.99930572509766,
            "middle eastern": 0.0004543146933428943,
            "latino hispanic": 0.000246146199060604
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 94.3563461303711,
            "disgust": 0.18834957480430603,
            "fear": 2.7194173336029053,
            "happy": 0.00022576117771677673,
            "sad": 2.6647191047668457,
            "surprise": 0.0013532720040529966,
            "neutral": 0.06958671659231186
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 26,
        "region": {
            "x": 78,
            "y": 299,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.08730798214673996,
            "Man": 99.9126968383789
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.433158814907074,
            "indian": 1.7370386123657227,
            "black": 0.11422978341579437,
            "white": 60.890052795410156,
            "middle eastern": 20.897106170654297,
            "latino hispanic": 15.92841625213623
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.12104690819978714,
            "disgust": 1.9241940663050627e-06,
            "fear": 0.01202724315226078,
            "happy": 81.92010498046875,
            "sad": 0.46200472116470337,
            "surprise": 0.10234668105840683,
            "neutral": 17.38247299194336
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 871,
            "y": 303,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 5.916930198669434,
            "Man": 94.08306121826172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.182214617729187,
            "indian": 0.22704629600048065,
            "black": 0.02034694142639637,
            "white": 75.91468811035156,
            "middle eastern": 7.947113990783691,
            "latino hispanic": 15.70859432220459
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.34673789143562317,
            "disgust": 0.0014582604635506868,
            "fear": 0.12668263912200928,
            "happy": 64.48178100585938,
            "sad": 18.837072372436523,
            "surprise": 0.003369977232068777,
            "neutral": 16.202911376953125
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 187,
            "y": 379,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.27193760871887207,
            "Man": 99.72805786132812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.8475401401519775,
            "indian": 5.208690643310547,
            "black": 0.6738986968994141,
            "white": 36.245819091796875,
            "middle eastern": 33.50221252441406,
            "latino hispanic": 22.52184295654297
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 38.714332580566406,
            "disgust": 0.5520481467247009,
            "fear": 21.090587615966797,
            "happy": 0.035748161375522614,
            "sad": 17.278654098510742,
            "surprise": 0.06786779314279556,
            "neutral": 22.26075553894043
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 25,
        "region": {
            "x": 1217,
            "y": 375,
            "w": 62,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.2624571919441223,
            "Man": 99.737548828125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.636427064497184e-08,
            "indian": 5.9564481347251785e-08,
            "black": 1.0466463806757531e-10,
            "white": 99.99658966064453,
            "middle eastern": 0.0008877951768226922,
            "latino hispanic": 0.0025252201594412327
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.8773042559623718,
            "disgust": 0.00021442954312078655,
            "fear": 33.20387649536133,
            "happy": 0.037479352205991745,
            "sad": 57.089054107666016,
            "surprise": 0.0015050738584250212,
            "neutral": 8.790559768676758
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 270,
            "y": 395,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.024021487683057785,
            "Man": 99.9759750366211
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.06350566446781158,
            "indian": 0.13302874565124512,
            "black": 0.002371059497818351,
            "white": 90.89816284179688,
            "middle eastern": 7.620056629180908,
            "latino hispanic": 1.2828772068023682
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00012457628326956183,
            "disgust": 6.360948103872348e-17,
            "fear": 2.2771806716918945,
            "happy": 2.0212578773498535,
            "sad": 36.735355377197266,
            "surprise": 7.593579994136235e-06,
            "neutral": 58.96607208251953
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 1062,
            "y": 404,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0010517038172110915,
            "Man": 99.99894714355469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.6428576111793518,
            "indian": 0.7665457129478455,
            "black": 0.22485898435115814,
            "white": 61.155052185058594,
            "middle eastern": 14.410402297973633,
            "latino hispanic": 22.800289154052734
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 22.254945755004883,
            "disgust": 0.0007128954166546464,
            "fear": 1.038374423980713,
            "happy": 40.232357025146484,
            "sad": 15.466729164123535,
            "surprise": 0.006151133682578802,
            "neutral": 21.000736236572266
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 336,
            "y": 437,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.03174467384815216,
            "Man": 99.96825408935547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.242094993591309,
            "indian": 1.517804741859436,
            "black": 1.1268967390060425,
            "white": 52.455467224121094,
            "middle eastern": 10.398982048034668,
            "latino hispanic": 26.258750915527344
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5404084920883179,
            "disgust": 1.641132985241711e-05,
            "fear": 1.7965210676193237,
            "happy": 0.4761655330657959,
            "sad": 1.2287335395812988,
            "surprise": 0.011847334913909435,
            "neutral": 95.9463119506836
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 724,
            "y": 342,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.17019550502300262,
            "Man": 99.8298110961914
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 24.061058044433594,
            "indian": 3.652836799621582,
            "black": 1.4566497802734375,
            "white": 34.37806701660156,
            "middle eastern": 15.230660438537598,
            "latino hispanic": 21.220727920532227
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.9045908451080322,
            "disgust": 0.010124700143933296,
            "fear": 67.58837890625,
            "happy": 1.013940691947937,
            "sad": 8.325629234313965,
            "surprise": 1.7766902446746826,
            "neutral": 17.380647659301758
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 26,
        "region": {
            "x": 597,
            "y": 369,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.008899873122572899,
            "Man": 99.99109649658203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.261337280273438,
            "indian": 15.817102432250977,
            "black": 14.654046058654785,
            "white": 12.102256774902344,
            "middle eastern": 10.740880966186523,
            "latino hispanic": 36.424373626708984
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 23.626142501831055,
            "disgust": 0.0024904452729970217,
            "fear": 3.3638861179351807,
            "happy": 3.1505067348480225,
            "sad": 32.016719818115234,
            "surprise": 0.04016382619738579,
            "neutral": 37.80009841918945
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 805,
            "y": 443,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 0.2789948880672455,
            "Man": 99.72100830078125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0020207606721669436,
            "indian": 0.06383699178695679,
            "black": 0.0003922772884834558,
            "white": 87.90652465820312,
            "middle eastern": 9.784428596496582,
            "latino hispanic": 2.2428033351898193
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5115435123443604,
            "disgust": 2.0771856270584976e-06,
            "fear": 0.20093309879302979,
            "happy": 1.3233756362751592e-05,
            "sad": 99.22877502441406,
            "surprise": 0.000832991034258157,
            "neutral": 0.057901982218027115
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 560,
            "y": 530,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.20170500874519348,
            "Man": 99.79829406738281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.3890647888183594,
            "indian": 0.07367794215679169,
            "black": 0.003794183488935232,
            "white": 89.2473373413086,
            "middle eastern": 5.221267223358154,
            "latino hispanic": 5.06485652923584
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 14.077888488769531,
            "disgust": 0.00032405188539996743,
            "fear": 7.131919860839844,
            "happy": 7.432551501551643e-05,
            "sad": 71.91727447509766,
            "surprise": 0.0009276369237340987,
            "neutral": 6.87159538269043
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 30,
        "region": {
            "x": 115,
            "y": 544,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.014234143309295177,
            "Man": 99.98576354980469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1364649385213852,
            "indian": 0.4099924564361572,
            "black": 0.03234162926673889,
            "white": 74.10147094726562,
            "middle eastern": 11.575718879699707,
            "latino hispanic": 13.744012832641602
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.7885003685951233,
            "disgust": 0.00011800813081208616,
            "fear": 1.547989845275879,
            "happy": 0.4114469885826111,
            "sad": 1.0311609506607056,
            "surprise": 0.05623269081115723,
            "neutral": 96.16455078125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 454,
            "y": 475,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.21972458064556122,
            "Man": 99.78028106689453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 16.6420955657959,
            "indian": 12.374797821044922,
            "black": 5.076404094696045,
            "white": 19.266300201416016,
            "middle eastern": 21.3348445892334,
            "latino hispanic": 25.305557250976562
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.7666449546813965,
            "disgust": 0.00017859112995211035,
            "fear": 0.3656522333621979,
            "happy": 0.004604204557836056,
            "sad": 5.688384056091309,
            "surprise": 0.006150110624730587,
            "neutral": 91.16838836669922
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 1106,
            "y": 516,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.19332268834114075,
            "Man": 99.80668640136719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.1415157318115234,
            "indian": 0.538230836391449,
            "black": 0.07150395214557648,
            "white": 67.77814483642578,
            "middle eastern": 14.786456108093262,
            "latino hispanic": 15.6841459274292
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.19723893702030182,
            "disgust": 4.053011792848338e-08,
            "fear": 0.12138514965772629,
            "happy": 0.023511037230491638,
            "sad": 0.8979498744010925,
            "surprise": 0.00015511327364947647,
            "neutral": 98.75975799560547
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 22,
        "region": {
            "x": 832,
            "y": 475,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0020990923512727022,
            "Man": 99.9979019165039
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.7569848296261625e-06,
            "indian": 7.343821926042438e-05,
            "black": 1.3585518843228783e-07,
            "white": 99.19556427001953,
            "middle eastern": 0.7192489504814148,
            "latino hispanic": 0.08511482924222946
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 26.58757209777832,
            "disgust": 6.781873480576905e-07,
            "fear": 0.45769447088241577,
            "happy": 14.076469421386719,
            "sad": 4.128921985626221,
            "surprise": 0.03433181717991829,
            "neutral": 54.71500778198242
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 932,
            "y": 539,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0066406456753611565,
            "Man": 99.99336242675781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0845053493976593,
            "indian": 0.027299363166093826,
            "black": 0.0028988870326429605,
            "white": 93.17063903808594,
            "middle eastern": 3.7034642696380615,
            "latino hispanic": 3.0112011432647705
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 43.1811637878418,
            "disgust": 0.002125340513885021,
            "fear": 16.40070343017578,
            "happy": 0.1097518652677536,
            "sad": 38.260135650634766,
            "surprise": 0.000595066521782428,
            "neutral": 2.0455219745635986
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 30,
        "region": {
            "x": 1135,
            "y": 804,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0027460483834147453,
            "Man": 99.99726104736328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.17450334131717682,
            "indian": 0.05050100013613701,
            "black": 0.004368274472653866,
            "white": 93.82129669189453,
            "middle eastern": 2.953617811203003,
            "latino hispanic": 2.995720148086548
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.034544944763184,
            "disgust": 0.16757622361183167,
            "fear": 20.795272827148438,
            "happy": 0.040237318724393845,
            "sad": 69.21715545654297,
            "surprise": 0.013018105179071426,
            "neutral": 1.7321938276290894
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 26,
        "region": {
            "x": 937,
            "y": 800,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.0402822270989418,
            "Man": 99.95972442626953
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.293739318847656,
            "indian": 10.975502014160156,
            "black": 7.947934627532959,
            "white": 26.728853225708008,
            "middle eastern": 23.02641487121582,
            "latino hispanic": 25.027555465698242
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.13174092769622803,
            "disgust": 9.825457527767867e-05,
            "fear": 50.524627685546875,
            "happy": 1.234299898147583,
            "sad": 15.093781471252441,
            "surprise": 0.019132820889353752,
            "neutral": 32.99631881713867
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 28,
        "region": {
            "x": 18,
            "y": 938,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.002974569797515869,
            "Man": 99.99701690673828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.966492652893066,
            "indian": 4.5011677742004395,
            "black": 0.617222011089325,
            "white": 43.72060012817383,
            "middle eastern": 17.700193405151367,
            "latino hispanic": 24.494327545166016
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 11.43958854675293,
            "disgust": 0.0001627555611776188,
            "fear": 3.369102716445923,
            "happy": 2.091625690460205,
            "sad": 8.734251976013184,
            "surprise": 0.10578085482120514,
            "neutral": 74.25948333740234
        },
        "dominant_emotion": "neutral"
    }
]

let electrician_data2 = [
    {
        "age": 31,
        "region": {
            "x": 147,
            "y": 19,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 1.3028323650360107,
            "Man": 98.6971664428711
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.462931632995605,
            "indian": 9.740036964416504,
            "black": 2.4197704792022705,
            "white": 18.26795768737793,
            "middle eastern": 12.313693046569824,
            "latino hispanic": 47.79561233520508
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.9117506742477417,
            "disgust": 2.3008953576209024e-05,
            "fear": 2.8183302879333496,
            "happy": 0.32422930002212524,
            "sad": 6.453370094299316,
            "surprise": 0.03150217980146408,
            "neutral": 89.4607925415039
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 960,
            "y": 28,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 71.1212158203125,
            "Man": 28.878780364990234
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 13.352012634277344,
            "indian": 21.318111419677734,
            "black": 5.946008682250977,
            "white": 12.220982551574707,
            "middle eastern": 12.970809936523438,
            "latino hispanic": 34.19207763671875
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.9327139854431152,
            "disgust": 0.09968088567256927,
            "fear": 70.41017150878906,
            "happy": 0.054098524153232574,
            "sad": 25.46837615966797,
            "surprise": 0.13092204928398132,
            "neutral": 0.904042661190033
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 33,
        "region": {
            "x": 713,
            "y": 24,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.14981861412525177,
            "Man": 99.85017395019531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.2312421798706055,
            "indian": 5.779163837432861,
            "black": 0.6670150756835938,
            "white": 33.74625778198242,
            "middle eastern": 23.3377742767334,
            "latino hispanic": 31.238550186157227
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.027691841125488,
            "disgust": 8.51932863447577e-15,
            "fear": 8.769723535806406e-06,
            "happy": 7.94218111038208,
            "sad": 0.011308691464364529,
            "surprise": 2.4992948510771384e-06,
            "neutral": 83.01880645751953
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 844,
            "y": 22,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 10.117622375488281,
            "Man": 89.88236999511719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.026301383972168,
            "indian": 1.800992727279663,
            "black": 0.3089069724082947,
            "white": 58.90689468383789,
            "middle eastern": 16.546777725219727,
            "latino hispanic": 18.410123825073242
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.09213966131210327,
            "disgust": 0.0001039742273860611,
            "fear": 74.01113891601562,
            "happy": 0.02898852340877056,
            "sad": 8.748383522033691,
            "surprise": 5.336768627166748,
            "neutral": 11.782485008239746
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 22,
        "region": {
            "x": 1208,
            "y": 63,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.1063423678278923,
            "Man": 99.89366149902344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.013234543614089489,
            "indian": 0.011520599015057087,
            "black": 0.00047923545935191214,
            "white": 95.78121948242188,
            "middle eastern": 2.611328363418579,
            "latino hispanic": 1.5822229385375977
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.8756632804870605,
            "disgust": 5.77984974370338e-06,
            "fear": 6.363094806671143,
            "happy": 1.3002986907958984,
            "sad": 19.7684326171875,
            "surprise": 0.0004411072004586458,
            "neutral": 66.69207000732422
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 213,
            "y": 156,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.5923914909362793,
            "Man": 99.40760040283203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.064493656158447,
            "indian": 4.311871528625488,
            "black": 0.8536171913146973,
            "white": 37.362510681152344,
            "middle eastern": 18.38353157043457,
            "latino hispanic": 33.02397918701172
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.8652327060699463,
            "disgust": 2.0990286429878324e-05,
            "fear": 2.677034378051758,
            "happy": 0.07577864825725555,
            "sad": 7.259427070617676,
            "surprise": 0.024571824818849564,
            "neutral": 86.09793853759766
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 686,
            "y": 216,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.020189426839351654,
            "Man": 99.97981262207031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.015426667407155037,
            "indian": 0.018662264570593834,
            "black": 0.0014231045497581363,
            "white": 93.18616485595703,
            "middle eastern": 2.812969207763672,
            "latino hispanic": 3.9653565883636475
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 28.9209041595459,
            "disgust": 4.082631494384259e-05,
            "fear": 30.609071731567383,
            "happy": 0.10689684748649597,
            "sad": 23.523969650268555,
            "surprise": 0.005095120053738356,
            "neutral": 16.834020614624023
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 26,
        "region": {
            "x": 775,
            "y": 68,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.8532644510269165,
            "Man": 99.14673614501953
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 19.776039123535156,
            "indian": 4.77692985534668,
            "black": 0.8358055949211121,
            "white": 32.36655807495117,
            "middle eastern": 15.685266494750977,
            "latino hispanic": 26.55940055847168
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.38860902190208435,
            "disgust": 0.003713526064530015,
            "fear": 0.2780144214630127,
            "happy": 0.6747338175773621,
            "sad": 1.4663441181182861,
            "surprise": 0.020989419892430305,
            "neutral": 97.1676025390625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 698,
            "y": 131,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.2854687571525574,
            "Man": 99.71453857421875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.28485119342803955,
            "indian": 0.03126317262649536,
            "black": 0.0036544057074934244,
            "white": 91.12004852294922,
            "middle eastern": 3.3069591522216797,
            "latino hispanic": 5.25322151184082
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.1799829751253128,
            "disgust": 1.2853324733441696e-05,
            "fear": 0.021786220371723175,
            "happy": 93.77423095703125,
            "sad": 0.33230870962142944,
            "surprise": 0.1919713169336319,
            "neutral": 5.4997100830078125
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 440,
            "y": 95,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 0.12099885195493698,
            "Man": 99.8790054321289
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 21.918691635131836,
            "indian": 10.462224006652832,
            "black": 4.802104949951172,
            "white": 17.533893585205078,
            "middle eastern": 13.617020606994629,
            "latino hispanic": 31.666065216064453
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 32.53738021850586,
            "disgust": 0.007248091045767069,
            "fear": 8.060142517089844,
            "happy": 0.028379278257489204,
            "sad": 40.15133285522461,
            "surprise": 0.11017186939716339,
            "neutral": 19.105348587036133
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 638,
            "y": 40,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 2.3221797943115234,
            "Man": 97.67781829833984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 12.099088668823242,
            "indian": 9.18567180633545,
            "black": 3.1919307708740234,
            "white": 26.28557586669922,
            "middle eastern": 23.630979537963867,
            "latino hispanic": 25.60675048828125
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 83.86102294921875,
            "disgust": 0.0047929431311786175,
            "fear": 3.0455613136291504,
            "happy": 0.17598630487918854,
            "sad": 5.248576641082764,
            "surprise": 5.003758430480957,
            "neutral": 2.6603031158447266
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 27,
        "region": {
            "x": 312,
            "y": 86,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 0.20486193895339966,
            "Man": 99.7951431274414
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 26.889827728271484,
            "indian": 10.665953636169434,
            "black": 4.817765712738037,
            "white": 17.943323135375977,
            "middle eastern": 13.615711212158203,
            "latino hispanic": 26.067420959472656
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 66.07215118408203,
            "disgust": 0.026520242914557457,
            "fear": 22.157278060913086,
            "happy": 0.04793321713805199,
            "sad": 10.843608856201172,
            "surprise": 0.5054540634155273,
            "neutral": 0.3470618426799774
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 28,
        "region": {
            "x": 862,
            "y": 154,
            "w": 71,
            "h": 71,
            "left_eye": [
                911,
                181
            ],
            "right_eye": [
                883,
                180
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0848536267876625,
            "Man": 99.91514587402344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 33.87522888183594,
            "indian": 5.495889186859131,
            "black": 4.226310729980469,
            "white": 26.76260757446289,
            "middle eastern": 9.902795791625977,
            "latino hispanic": 19.73717498779297
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.5618603229522705,
            "disgust": 1.8973989313053607e-07,
            "fear": 1.9617024660110474,
            "happy": 0.002771031577140093,
            "sad": 8.986444473266602,
            "surprise": 0.005366296041756868,
            "neutral": 88.48185729980469
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 1151,
            "y": 28,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 2.481330156326294,
            "Man": 97.5186767578125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.98483943939209,
            "indian": 0.32277148962020874,
            "black": 0.03630616515874863,
            "white": 83.1860122680664,
            "middle eastern": 5.4926557540893555,
            "latino hispanic": 5.977414131164551
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.922248840332031,
            "disgust": 8.406164169311523,
            "fear": 79.09407806396484,
            "happy": 0.05279255658388138,
            "sad": 2.949363946914673,
            "surprise": 0.9813221096992493,
            "neutral": 1.5940351486206055
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 37,
        "region": {
            "x": 162,
            "y": 286,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.3733387291431427,
            "Man": 99.62666320800781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 58.933746337890625,
            "indian": 1.820541501045227,
            "black": 0.7637525200843811,
            "white": 15.645700454711914,
            "middle eastern": 2.789372682571411,
            "latino hispanic": 20.046886444091797
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 11.752861022949219,
            "disgust": 0.00023227118072099984,
            "fear": 1.0203408002853394,
            "happy": 0.0010491677094250917,
            "sad": 83.9200210571289,
            "surprise": 3.3970020012930036e-05,
            "neutral": 3.3054606914520264
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 35,
        "region": {
            "x": 462,
            "y": 171,
            "w": 67,
            "h": 67,
            "left_eye": [
                505,
                195
            ],
            "right_eye": [
                483,
                198
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0004980941885150969,
            "Man": 99.99949645996094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.15641017258167267,
            "indian": 0.18111059069633484,
            "black": 0.007939737290143967,
            "white": 85.9112777709961,
            "middle eastern": 8.26392650604248,
            "latino hispanic": 5.479330539703369
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.855891466140747,
            "disgust": 0.000740362040232867,
            "fear": 14.250771522521973,
            "happy": 0.48191118240356445,
            "sad": 16.227991104125977,
            "surprise": 0.5342684388160706,
            "neutral": 65.64842224121094
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 10,
            "y": 178,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.03717159107327461,
            "Man": 99.96282958984375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.230135917663574,
            "indian": 8.293747901916504,
            "black": 38.21864700317383,
            "white": 7.650473117828369,
            "middle eastern": 6.444403171539307,
            "latino hispanic": 28.162599563598633
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.2685476541519165,
            "disgust": 2.8067998414371687e-07,
            "fear": 0.003907220438122749,
            "happy": 94.01591491699219,
            "sad": 0.027963923290371895,
            "surprise": 0.03250117972493172,
            "neutral": 5.6511664390563965
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 329,
            "y": 176,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.03687683492898941,
            "Man": 99.96311950683594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 21.759605407714844,
            "indian": 4.318984508514404,
            "black": 1.2023729085922241,
            "white": 36.1634407043457,
            "middle eastern": 13.93997859954834,
            "latino hispanic": 22.61562156677246
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0395379513502121,
            "disgust": 1.0556304275155526e-08,
            "fear": 0.011197174899280071,
            "happy": 0.0020755124278366566,
            "sad": 0.16852295398712158,
            "surprise": 0.003744572401046753,
            "neutral": 99.7749252319336
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 985,
            "y": 174,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.14888663589954376,
            "Man": 99.85111236572266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.244403839111328,
            "indian": 11.687846183776855,
            "black": 3.3519527912139893,
            "white": 25.893157958984375,
            "middle eastern": 29.426660537719727,
            "latino hispanic": 24.39597511291504
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 4.439723491668701,
            "disgust": 0.00033808848820626736,
            "fear": 6.468842029571533,
            "happy": 4.925323486328125,
            "sad": 29.835668563842773,
            "surprise": 0.02214592695236206,
            "neutral": 54.30795669555664
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 532,
            "y": 221,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.1657743901014328,
            "Man": 99.834228515625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7150533199310303,
            "indian": 0.8628303408622742,
            "black": 0.1174105703830719,
            "white": 64.41328430175781,
            "middle eastern": 14.50341510772705,
            "latino hispanic": 19.38800621032715
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.6057851314544678,
            "disgust": 3.476569645499694e-07,
            "fear": 0.009417270310223103,
            "happy": 12.078471183776855,
            "sad": 0.33845254778862,
            "surprise": 0.000917665718588978,
            "neutral": 86.96695709228516
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 1082,
            "y": 174,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.08539130538702011,
            "Man": 99.91461181640625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.423956871032715,
            "indian": 0.484043687582016,
            "black": 0.07550890743732452,
            "white": 67.89535522460938,
            "middle eastern": 5.37669038772583,
            "latino hispanic": 12.7444429397583
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.4927574098110199,
            "disgust": 5.757798616145768e-14,
            "fear": 2.373705865466036e-05,
            "happy": 0.005833902861922979,
            "sad": 0.09142431616783142,
            "surprise": 1.9396184143261053e-06,
            "neutral": 99.40995788574219
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 1021,
            "y": 246,
            "w": 85,
            "h": 85,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.015964774414896965,
            "Man": 99.98403930664062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.57154369354248,
            "indian": 8.828493118286133,
            "black": 3.005157709121704,
            "white": 21.80815315246582,
            "middle eastern": 12.953837394714355,
            "latino hispanic": 44.83280944824219
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 4.208131313323975,
            "disgust": 0.0002702440833672881,
            "fear": 0.07589207589626312,
            "happy": 0.2089349329471588,
            "sad": 3.5532548427581787,
            "surprise": 0.00021261197980493307,
            "neutral": 91.95330047607422
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 1177,
            "y": 261,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.8528293371200562,
            "Man": 99.14717102050781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 61.70622253417969,
            "indian": 1.8475793600082397,
            "black": 0.8457639217376709,
            "white": 18.78421401977539,
            "middle eastern": 3.5356950759887695,
            "latino hispanic": 13.280529022216797
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.7449817657470703,
            "disgust": 0.0004889204865321517,
            "fear": 0.7267299890518188,
            "happy": 0.003357871435582638,
            "sad": 19.84001350402832,
            "surprise": 0.0001956227351911366,
            "neutral": 75.68423461914062
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 18,
            "y": 266,
            "w": 80,
            "h": 80,
            "left_eye": [
                71,
                294
            ],
            "right_eye": [
                43,
                297
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0006219262140803039,
            "Man": 99.99938201904297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 45.47346496582031,
            "indian": 14.38131046295166,
            "black": 4.5604753494262695,
            "white": 5.012301921844482,
            "middle eastern": 1.9377899169921875,
            "latino hispanic": 28.63465690612793
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.8416993618011475,
            "disgust": 1.4002770512888674e-05,
            "fear": 12.848909378051758,
            "happy": 0.0029505498241633177,
            "sad": 41.617889404296875,
            "surprise": 0.00010978817590512335,
            "neutral": 41.68842697143555
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 447,
            "y": 296,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.00196180515922606,
            "Man": 99.99803161621094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 20.278018951416016,
            "indian": 11.1561918258667,
            "black": 3.325498104095459,
            "white": 21.78791046142578,
            "middle eastern": 19.167200088500977,
            "latino hispanic": 24.285181045532227
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 8.445324897766113,
            "disgust": 0.0028383038006722927,
            "fear": 16.787128448486328,
            "happy": 5.992465496063232,
            "sad": 11.264296531677246,
            "surprise": 0.3350142538547516,
            "neutral": 57.17292785644531
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 929,
            "y": 335,
            "w": 82,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0007636036607436836,
            "Man": 99.99923706054688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.524380087852478,
            "indian": 1.8851299285888672,
            "black": 0.13905490934848785,
            "white": 54.3692512512207,
            "middle eastern": 24.967782974243164,
            "latino hispanic": 18.114398956298828
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.0627360343933105,
            "disgust": 2.3009348296909593e-05,
            "fear": 0.6309202313423157,
            "happy": 0.3737073540687561,
            "sad": 3.1311254501342773,
            "surprise": 0.0006871795048937201,
            "neutral": 91.8008041381836
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 590,
            "y": 348,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.008421875536441803,
            "Man": 99.99156951904297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.4668041785625974e-06,
            "indian": 7.05862760241871e-07,
            "black": 4.329522074186798e-09,
            "white": 99.97054290771484,
            "middle eastern": 0.012893828563392162,
            "latino hispanic": 0.016561374068260193
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.2186341285705566,
            "disgust": 0.00017204071627929807,
            "fear": 0.9829790592193604,
            "happy": 0.23716965317726135,
            "sad": 23.389659881591797,
            "surprise": 0.03426029160618782,
            "neutral": 72.13712310791016
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 1158,
            "y": 390,
            "w": 90,
            "h": 90,
            "left_eye": [
                1221,
                424
            ],
            "right_eye": [
                1186,
                424
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.002042715670540929,
            "Man": 99.99796295166016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.04752465337514877,
            "indian": 0.15599623322486877,
            "black": 0.012390289455652237,
            "white": 75.61106872558594,
            "middle eastern": 11.620304107666016,
            "latino hispanic": 12.552719116210938
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.3841311931610107,
            "disgust": 3.1827485713620263e-07,
            "fear": 0.005150198005139828,
            "happy": 49.47916793823242,
            "sad": 0.9879873394966125,
            "surprise": 0.06923224776983261,
            "neutral": 47.074337005615234
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 175,
            "y": 416,
            "w": 132,
            "h": 132,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 2.3972339630126953,
            "Man": 97.6027603149414
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.5226643085479736,
            "indian": 5.70636510848999,
            "black": 1.4941400289535522,
            "white": 39.37101745605469,
            "middle eastern": 16.841264724731445,
            "latino hispanic": 33.06454849243164
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0559697151184082,
            "disgust": 1.1301216545689385e-05,
            "fear": 0.10588856041431427,
            "happy": 0.18277224898338318,
            "sad": 34.61143493652344,
            "surprise": 0.016525791957974434,
            "neutral": 64.02740478515625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 863,
            "y": 468,
            "w": 91,
            "h": 91,
            "left_eye": [
                926,
                503
            ],
            "right_eye": [
                893,
                501
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.0926917791366577,
            "Man": 98.90731048583984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3829493522644043,
            "indian": 0.6904187202453613,
            "black": 0.13555753231048584,
            "white": 59.853702545166016,
            "middle eastern": 10.907071113586426,
            "latino hispanic": 27.03030014038086
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.016743168234825134,
            "disgust": 3.310882124019088e-11,
            "fear": 0.013491516932845116,
            "happy": 0.0002562567824497819,
            "sad": 0.045194223523139954,
            "surprise": 4.8188961955020204e-05,
            "neutral": 99.92426300048828
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 100,
            "y": 360,
            "w": 78,
            "h": 78,
            "left_eye": [
                153,
                385
            ],
            "right_eye": [
                121,
                390
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.018268316984176636,
            "Man": 99.98172760009766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.120875835418701,
            "indian": 0.9782490134239197,
            "black": 0.12968094646930695,
            "white": 65.9604721069336,
            "middle eastern": 11.206334114074707,
            "latino hispanic": 14.604384422302246
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6893887519836426,
            "disgust": 0.0026571464259177446,
            "fear": 7.858843803405762,
            "happy": 0.5440040826797485,
            "sad": 33.58639907836914,
            "surprise": 0.022370189428329468,
            "neutral": 56.29634094238281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 390,
            "y": 364,
            "w": 80,
            "h": 80,
            "left_eye": [
                445,
                393
            ],
            "right_eye": [
                418,
                396
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0013382184552028775,
            "Man": 99.99866485595703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.0255171060562134,
            "indian": 3.0715420246124268,
            "black": 0.3310270309448242,
            "white": 53.37977981567383,
            "middle eastern": 26.612449645996094,
            "latino hispanic": 15.57968521118164
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.9892578125,
            "disgust": 0.0005124036688357592,
            "fear": 1.1741892099380493,
            "happy": 70.19720458984375,
            "sad": 8.118782043457031,
            "surprise": 0.025968369096517563,
            "neutral": 18.494081497192383
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 686,
            "y": 466,
            "w": 88,
            "h": 88,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.08723580092191696,
            "Man": 99.91276550292969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.469046711921692,
            "indian": 2.3007962703704834,
            "black": 0.3384179174900055,
            "white": 39.99103546142578,
            "middle eastern": 25.17823028564453,
            "latino hispanic": 30.722482681274414
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.03843880072236061,
            "disgust": 6.692237319860794e-10,
            "fear": 4.297928171581589e-05,
            "happy": 93.29981231689453,
            "sad": 0.000752024760004133,
            "surprise": 0.0003653963503893465,
            "neutral": 6.660589218139648
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 1140,
            "y": 513,
            "w": 96,
            "h": 96,
            "left_eye": [
                1204,
                550
            ],
            "right_eye": [
                1171,
                548
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.011000088416039944,
            "Man": 99.98899841308594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0019742215517908335,
            "indian": 0.01209267321974039,
            "black": 0.0002884957066271454,
            "white": 91.06092834472656,
            "middle eastern": 5.015244483947754,
            "latino hispanic": 3.909475326538086
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.623382568359375,
            "disgust": 0.00012573148705996573,
            "fear": 3.734166145324707,
            "happy": 0.2357845902442932,
            "sad": 8.319452285766602,
            "surprise": 0.04590417444705963,
            "neutral": 83.04118347167969
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 455,
            "y": 458,
            "w": 102,
            "h": 102,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 5.315624237060547,
            "Man": 94.68437957763672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 23.325672149658203,
            "indian": 6.874771595001221,
            "black": 2.4988231658935547,
            "white": 22.231327056884766,
            "middle eastern": 8.81987190246582,
            "latino hispanic": 36.249542236328125
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.2063012421131134,
            "disgust": 2.2331981302712266e-16,
            "fear": 7.36863657948561e-05,
            "happy": 0.0004245828604325652,
            "sad": 0.10438086092472076,
            "surprise": 8.239064541726293e-09,
            "neutral": 99.6888198852539
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 1018,
            "y": 607,
            "w": 99,
            "h": 99,
            "left_eye": [
                1085,
                645
            ],
            "right_eye": [
                1050,
                643
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.07111577689647675,
            "Man": 99.92887878417969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.484205722808838,
            "indian": 2.8084170818328857,
            "black": 0.4409094452857971,
            "white": 37.52410125732422,
            "middle eastern": 13.581645965576172,
            "latino hispanic": 38.16071701049805
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.6162242889404297,
            "disgust": 2.2873991838423535e-06,
            "fear": 0.947729229927063,
            "happy": 0.003609974402934313,
            "sad": 8.589980125427246,
            "surprise": 0.0006838702247478068,
            "neutral": 86.84176635742188
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 308,
            "y": 621,
            "w": 98,
            "h": 98,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.3941997289657593,
            "Man": 99.60579681396484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 12.10560131072998,
            "indian": 3.0720927715301514,
            "black": 0.6175499558448792,
            "white": 39.99774169921875,
            "middle eastern": 11.710794448852539,
            "latino hispanic": 32.4962272644043
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.917944431304932,
            "disgust": 1.8044891476165503e-05,
            "fear": 0.8644561171531677,
            "happy": 0.0044869231060147285,
            "sad": 52.8480110168457,
            "surprise": 1.8163469576393254e-05,
            "neutral": 39.36506652832031
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 500,
            "y": 626,
            "w": 123,
            "h": 123,
            "left_eye": [
                578,
                672
            ],
            "right_eye": [
                542,
                676
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.49788668751716614,
            "Man": 99.50211334228516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9716793894767761,
            "indian": 1.4956926107406616,
            "black": 0.1883746087551117,
            "white": 50.21733093261719,
            "middle eastern": 19.85988998413086,
            "latino hispanic": 27.267030715942383
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 15.175832748413086,
            "disgust": 0.0011883090483024716,
            "fear": 0.5411239862442017,
            "happy": 0.06046082824468613,
            "sad": 2.26090407371521,
            "surprise": 0.0411689393222332,
            "neutral": 81.91931915283203
        },
        "dominant_emotion": "neutral"
    }
]

let electrician_data3 = [
    {
        "age": 23,
        "region": {
            "x": 476,
            "y": 93,
            "w": 27,
            "h": 27,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 20.41765594482422,
            "Man": 79.58234405517578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.414169788360596,
            "indian": 9.573326110839844,
            "black": 2.4116017818450928,
            "white": 29.023569107055664,
            "middle eastern": 28.197357177734375,
            "latino hispanic": 24.379976272583008
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.550001621246338,
            "disgust": 0.022314557805657387,
            "fear": 92.36791229248047,
            "happy": 0.0022660763934254646,
            "sad": 1.1996047496795654,
            "surprise": 0.7244130969047546,
            "neutral": 0.13349343836307526
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 30,
        "region": {
            "x": 918,
            "y": 132,
            "w": 30,
            "h": 30,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 5.814981460571289,
            "Man": 94.18501281738281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.5983954071998596,
            "indian": 0.20731547474861145,
            "black": 0.036542195826768875,
            "white": 88.15467834472656,
            "middle eastern": 4.520803451538086,
            "latino hispanic": 6.482261657714844
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.3060803413391113,
            "disgust": 0.0036875130608677864,
            "fear": 1.0528883934020996,
            "happy": 79.97157287597656,
            "sad": 9.056550979614258,
            "surprise": 0.004015692509710789,
            "neutral": 6.605205059051514
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 707,
            "y": 86,
            "w": 30,
            "h": 30,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 5.96641206741333,
            "Man": 94.0335922241211
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.002022180473431945,
            "indian": 0.0011800224892795086,
            "black": 5.574911483563483e-05,
            "white": 99.40677642822266,
            "middle eastern": 0.3850162923336029,
            "latino hispanic": 0.2049427181482315
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 12.20295238494873,
            "disgust": 9.104812488658354e-05,
            "fear": 15.841171264648438,
            "happy": 0.0018023772863671184,
            "sad": 60.35749435424805,
            "surprise": 0.0028052781708538532,
            "neutral": 11.593682289123535
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 26,
        "region": {
            "x": 873,
            "y": 102,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 23.110843658447266,
            "Man": 76.88915252685547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.029009781777858734,
            "indian": 0.00400067213922739,
            "black": 9.229162969859317e-05,
            "white": 99.30868530273438,
            "middle eastern": 0.4024255871772766,
            "latino hispanic": 0.25578129291534424
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.944190502166748,
            "disgust": 5.1411068852758035e-05,
            "fear": 0.32289740443229675,
            "happy": 37.89033126831055,
            "sad": 27.52573585510254,
            "surprise": 0.0064283511601388454,
            "neutral": 28.310365676879883
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 503,
            "y": 192,
            "w": 32,
            "h": 32,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 12.665128707885742,
            "Man": 87.33486938476562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9458650946617126,
            "indian": 1.9973983764648438,
            "black": 0.15124042332172394,
            "white": 67.56996154785156,
            "middle eastern": 17.155855178833008,
            "latino hispanic": 12.179680824279785
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.22442515194416046,
            "disgust": 5.45667098776903e-05,
            "fear": 14.715073585510254,
            "happy": 2.7032787799835205,
            "sad": 29.282819747924805,
            "surprise": 0.01865566521883011,
            "neutral": 53.05569076538086
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 622,
            "y": 211,
            "w": 34,
            "h": 34,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.6648215651512146,
            "Man": 99.33517456054688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.18329226970672607,
            "indian": 0.544496476650238,
            "black": 0.042246971279382706,
            "white": 73.44078063964844,
            "middle eastern": 14.475337982177734,
            "latino hispanic": 11.313849449157715
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.442103385925293,
            "disgust": 0.0737193375825882,
            "fear": 82.39251708984375,
            "happy": 0.00446058576926589,
            "sad": 10.443914413452148,
            "surprise": 0.4061683118343353,
            "neutral": 0.23711533844470978
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 22,
        "region": {
            "x": 1101,
            "y": 280,
            "w": 44,
            "h": 44,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.14725330471992493,
            "Man": 99.85273742675781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.0024832487106323,
            "indian": 2.8422610759735107,
            "black": 0.3434518873691559,
            "white": 55.85966110229492,
            "middle eastern": 26.077579498291016,
            "latino hispanic": 13.874563217163086
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 11.672182083129883,
            "disgust": 1.2647078619920649e-06,
            "fear": 6.413119316101074,
            "happy": 0.009329411201179028,
            "sad": 27.95697784423828,
            "surprise": 0.0025904045905917883,
            "neutral": 53.945804595947266
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 529,
            "y": 225,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.1231914833188057,
            "Man": 99.87680053710938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.9166164949856466e-07,
            "indian": 1.91229702295459e-07,
            "black": 8.457834987929402e-10,
            "white": 99.98455047607422,
            "middle eastern": 0.013788578100502491,
            "latino hispanic": 0.0016610396560281515
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.1859731674194336,
            "disgust": 5.377324214350665e-06,
            "fear": 0.03721464052796364,
            "happy": 94.24957275390625,
            "sad": 0.9430477619171143,
            "surprise": 0.0005987688200548291,
            "neutral": 2.5835893154144287
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 21,
        "region": {
            "x": 418,
            "y": 310,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.9176674485206604,
            "Man": 99.08233642578125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.5093977451324463,
            "indian": 5.694655895233154,
            "black": 1.0867007970809937,
            "white": 40.110939025878906,
            "middle eastern": 25.15414047241211,
            "latino hispanic": 24.44416046142578
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 88.7410659790039,
            "disgust": 3.60953458766744e-06,
            "fear": 0.5550495982170105,
            "happy": 0.009892333298921585,
            "sad": 10.373910903930664,
            "surprise": 8.484056479574065e-07,
            "neutral": 0.3200778663158417
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 26,
        "region": {
            "x": 242,
            "y": 262,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.11109545826911926,
            "Man": 99.88890075683594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.04271158576011658,
            "indian": 0.6467151641845703,
            "black": 0.009220623411238194,
            "white": 68.45281982421875,
            "middle eastern": 25.714153289794922,
            "latino hispanic": 5.134381294250488
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.426482200622559,
            "disgust": 0.29170727729797363,
            "fear": 41.0577392578125,
            "happy": 0.35730719566345215,
            "sad": 35.60916519165039,
            "surprise": 0.09534076601266861,
            "neutral": 17.162254333496094
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 27,
        "region": {
            "x": 169,
            "y": 288,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 9.100868225097656,
            "Man": 90.89912414550781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0012607160024344921,
            "indian": 0.00021583103807643056,
            "black": 7.448538781318348e-06,
            "white": 99.4415283203125,
            "middle eastern": 0.2834283113479614,
            "latino hispanic": 0.2735619843006134
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 90.71145629882812,
            "disgust": 4.449279458640376e-06,
            "fear": 0.6970180869102478,
            "happy": 7.939711093902588,
            "sad": 0.5691918134689331,
            "surprise": 0.0003709091106429696,
            "neutral": 0.08224460482597351
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 29,
        "region": {
            "x": 85,
            "y": 286,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.005061632487922907,
            "Man": 99.99493408203125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0006427394691854715,
            "indian": 0.0010283542796969414,
            "black": 4.3057039874838665e-05,
            "white": 98.63566589355469,
            "middle eastern": 0.7876781225204468,
            "latino hispanic": 0.5749412178993225
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 25.897903442382812,
            "disgust": 0.00018638990877661854,
            "fear": 22.154605865478516,
            "happy": 0.0653071403503418,
            "sad": 44.39609146118164,
            "surprise": 0.00016498118930030614,
            "neutral": 7.4857354164123535
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 40,
        "region": {
            "x": 591,
            "y": 354,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.03153030946850777,
            "Man": 99.96846771240234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.7517189979553223,
            "indian": 10.556313514709473,
            "black": 5.087593078613281,
            "white": 25.673994064331055,
            "middle eastern": 38.1298942565918,
            "latino hispanic": 16.800485610961914
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 37.344200134277344,
            "disgust": 0.00035380481858737767,
            "fear": 3.7402424812316895,
            "happy": 0.061959072947502136,
            "sad": 44.341896057128906,
            "surprise": 0.000590996874962002,
            "neutral": 14.510763168334961
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 24,
        "region": {
            "x": 1122,
            "y": 356,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.03747820481657982,
            "Man": 99.9625244140625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.481661796569824,
            "indian": 7.941186428070068,
            "black": 2.6592113971710205,
            "white": 31.633466720581055,
            "middle eastern": 23.18110466003418,
            "latino hispanic": 28.103368759155273
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 19.34470558166504,
            "disgust": 1.764304442986031e-06,
            "fear": 20.036109924316406,
            "happy": 0.003849597414955497,
            "sad": 39.41286849975586,
            "surprise": 0.0002601663290988654,
            "neutral": 21.202205657958984
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 29,
        "region": {
            "x": 722,
            "y": 299,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.560050368309021,
            "Man": 98.43995666503906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 19.466312408447266,
            "indian": 13.364835739135742,
            "black": 33.835750579833984,
            "white": 8.811537742614746,
            "middle eastern": 6.449989318847656,
            "latino hispanic": 18.071584701538086
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 5.29034423828125,
            "disgust": 0.005821213126182556,
            "fear": 1.6638236045837402,
            "happy": 5.814533233642578,
            "sad": 10.065766334533691,
            "surprise": 0.003058662638068199,
            "neutral": 77.15665435791016
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 440,
            "y": 372,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.32908403873443604,
            "Man": 99.67091369628906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.449993133544922,
            "indian": 4.191731929779053,
            "black": 0.625978410243988,
            "white": 53.91150665283203,
            "middle eastern": 20.51964569091797,
            "latino hispanic": 18.301145553588867
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 15.861617088317871,
            "disgust": 0.0029791907873004675,
            "fear": 9.04122543334961,
            "happy": 4.676185131072998,
            "sad": 45.57659912109375,
            "surprise": 0.14491328597068787,
            "neutral": 24.69647979736328
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 34,
        "region": {
            "x": 1215,
            "y": 311,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.08397727459669113,
            "Man": 99.91603088378906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.5875142202712595e-05,
            "indian": 4.334256664151326e-05,
            "black": 5.981057711323956e-07,
            "white": 99.84496307373047,
            "middle eastern": 0.08643411099910736,
            "latino hispanic": 0.06852574646472931
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 38.77549743652344,
            "disgust": 0.03545112535357475,
            "fear": 13.67313003540039,
            "happy": 0.001394019229337573,
            "sad": 47.10620880126953,
            "surprise": 0.001672891667112708,
            "neutral": 0.40664201974868774
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 803,
            "y": 378,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.12197364121675491,
            "Man": 99.8780288696289
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.2251622138137463e-05,
            "indian": 2.7215079171583056e-05,
            "black": 6.485043257953294e-08,
            "white": 99.63981628417969,
            "middle eastern": 0.23335517942905426,
            "latino hispanic": 0.12677425146102905
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.34556245803833,
            "disgust": 0.00557921314612031,
            "fear": 22.861408233642578,
            "happy": 61.23080825805664,
            "sad": 4.08961296081543,
            "surprise": 0.011053933762013912,
            "neutral": 7.455971717834473
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 683,
            "y": 377,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0731642097234726,
            "Man": 99.92683410644531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.8202195393307585e-12,
            "indian": 4.704857597265244e-12,
            "black": 5.8201408339867474e-15,
            "white": 99.99996185302734,
            "middle eastern": 2.520322595955804e-05,
            "latino hispanic": 1.0614470738801174e-05
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6706379652023315,
            "disgust": 1.627148776606191e-05,
            "fear": 0.817413330078125,
            "happy": 0.752233624458313,
            "sad": 13.321935653686523,
            "surprise": 0.0024582131300121546,
            "neutral": 83.435302734375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 996,
            "y": 389,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.022808939218521118,
            "Man": 99.97718811035156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.029713807627558708,
            "indian": 0.6291589736938477,
            "black": 0.008438271470367908,
            "white": 66.7419204711914,
            "middle eastern": 24.549434661865234,
            "latino hispanic": 8.041340827941895
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 18.115421295166016,
            "disgust": 1.6257008610409684e-05,
            "fear": 1.610393762588501,
            "happy": 41.20383071899414,
            "sad": 2.669189453125,
            "surprise": 0.009909229353070259,
            "neutral": 36.39124298095703
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 22,
        "region": {
            "x": 883,
            "y": 323,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.04233456403017044,
            "Man": 99.9576644897461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.41987419128418,
            "indian": 12.394283294677734,
            "black": 1.4200414419174194,
            "white": 25.891225814819336,
            "middle eastern": 28.673681259155273,
            "latino hispanic": 25.20088768005371
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 4.431586742401123,
            "disgust": 1.2502929394031526e-06,
            "fear": 0.46519213914871216,
            "happy": 0.019168317317962646,
            "sad": 18.560617446899414,
            "surprise": 0.032861728221178055,
            "neutral": 76.4905776977539
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 1014,
            "y": 325,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.24065077304840088,
            "Man": 99.75934600830078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.14461691677570343,
            "indian": 0.6964107155799866,
            "black": 0.037830475717782974,
            "white": 64.1304931640625,
            "middle eastern": 25.237375259399414,
            "latino hispanic": 9.753275871276855
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 14.014816284179688,
            "disgust": 0.036059170961380005,
            "fear": 71.48025512695312,
            "happy": 0.04765469953417778,
            "sad": 11.898750305175781,
            "surprise": 0.0073147304356098175,
            "neutral": 2.515158176422119
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 23,
        "region": {
            "x": 930,
            "y": 426,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.023097598925232887,
            "Man": 99.9769058227539
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.09104406833648682,
            "indian": 0.04107123240828514,
            "black": 0.023666290566325188,
            "white": 93.07197570800781,
            "middle eastern": 1.4060734510421753,
            "latino hispanic": 5.366166591644287
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.1224365234375,
            "disgust": 0.13012593984603882,
            "fear": 11.598651885986328,
            "happy": 0.1735541969537735,
            "sad": 45.38154983520508,
            "surprise": 0.10099498927593231,
            "neutral": 34.49269485473633
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 24,
        "region": {
            "x": 784,
            "y": 448,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.001327460166066885,
            "Man": 99.9986801147461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.127559077460319e-05,
            "indian": 6.329899042611942e-05,
            "black": 8.948911158768169e-07,
            "white": 99.82624816894531,
            "middle eastern": 0.1318921446800232,
            "latino hispanic": 0.0417514443397522
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.338627815246582,
            "disgust": 3.777006349992007e-05,
            "fear": 9.670969009399414,
            "happy": 0.017107855528593063,
            "sad": 61.229339599609375,
            "surprise": 0.00020905480778310448,
            "neutral": 25.74371337890625
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 41,
        "region": {
            "x": 501,
            "y": 449,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.0007102011004462838,
            "Man": 99.99928283691406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.220530986785889,
            "indian": 8.632368087768555,
            "black": 10.804414749145508,
            "white": 20.395858764648438,
            "middle eastern": 16.57863426208496,
            "latino hispanic": 36.368194580078125
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.221311569213867,
            "disgust": 1.5891976090642856e-07,
            "fear": 0.3053424060344696,
            "happy": 7.091762381605804e-05,
            "sad": 75.6638412475586,
            "surprise": 1.806507441415306e-07,
            "neutral": 21.80943489074707
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 28,
        "region": {
            "x": 1049,
            "y": 459,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.004882312845438719,
            "Man": 99.99510955810547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.6408392993034795e-05,
            "indian": 0.00023173363297246397,
            "black": 1.2605893289219239e-06,
            "white": 99.4883041381836,
            "middle eastern": 0.1654527336359024,
            "latino hispanic": 0.3459509313106537
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.517467498779297,
            "disgust": 8.06835487310309e-06,
            "fear": 1.2099872827529907,
            "happy": 0.003585804020985961,
            "sad": 44.99519348144531,
            "surprise": 0.0003019588184542954,
            "neutral": 44.27345275878906
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 26,
        "region": {
            "x": 79,
            "y": 469,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.00248842709697783,
            "Man": 99.99750518798828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.3936934173107147,
            "indian": 0.13698889315128326,
            "black": 0.020461108535528183,
            "white": 91.99749755859375,
            "middle eastern": 2.8436808586120605,
            "latino hispanic": 4.6076812744140625
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 12.750901222229004,
            "disgust": 0.0020113703794777393,
            "fear": 8.835025787353516,
            "happy": 0.0011499669635668397,
            "sad": 77.57449340820312,
            "surprise": 3.8089750887593254e-05,
            "neutral": 0.8363926410675049
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 1209,
            "y": 467,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.007585607003420591,
            "Man": 99.99241638183594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.82448673248291,
            "indian": 6.943927764892578,
            "black": 2.2870757579803467,
            "white": 33.67700958251953,
            "middle eastern": 22.522382736206055,
            "latino hispanic": 25.745115280151367
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 23.67953872680664,
            "disgust": 1.0346260523874662e-06,
            "fear": 0.6911652088165283,
            "happy": 7.069584171404131e-06,
            "sad": 49.86406707763672,
            "surprise": 4.457525051293487e-07,
            "neutral": 25.765222549438477
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 490,
            "y": 614,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.009895343333482742,
            "Man": 99.99010467529297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.1998443603515625,
            "indian": 0.577069103717804,
            "black": 0.1529836356639862,
            "white": 74.6786880493164,
            "middle eastern": 11.431968688964844,
            "latino hispanic": 11.959453582763672
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 31.74523162841797,
            "disgust": 9.29041121811025e-10,
            "fear": 0.4424341022968292,
            "happy": 1.959115479621687e-06,
            "sad": 56.11783981323242,
            "surprise": 1.5342189740863432e-08,
            "neutral": 11.694489479064941
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 24,
        "region": {
            "x": 167,
            "y": 602,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.016299666836857796,
            "Man": 99.98368835449219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 16.71078109741211,
            "indian": 11.280701637268066,
            "black": 22.189329147338867,
            "white": 10.508306503295898,
            "middle eastern": 8.24343204498291,
            "latino hispanic": 31.067455291748047
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.6766568422317505,
            "disgust": 4.2678049538835694e-08,
            "fear": 0.15880347788333893,
            "happy": 0.01352387759834528,
            "sad": 1.8523534536361694,
            "surprise": 0.00023295360733754933,
            "neutral": 96.29842376708984
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 1087,
            "y": 602,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.013100530952215195,
            "Man": 99.98690032958984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.1847712810819644e-09,
            "indian": 4.545184673077074e-09,
            "black": 6.16251754487207e-12,
            "white": 99.99900817871094,
            "middle eastern": 0.0006754043861292303,
            "latino hispanic": 0.00031836278503760695
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 11.405338287353516,
            "disgust": 0.21197617053985596,
            "fear": 14.582178115844727,
            "happy": 0.0031365591567009687,
            "sad": 71.05708312988281,
            "surprise": 0.008196655660867691,
            "neutral": 2.732095718383789
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 855,
            "y": 610,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.11202742904424667,
            "Man": 99.88796997070312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.162117958068848,
            "indian": 13.929594039916992,
            "black": 1.5644652843475342,
            "white": 24.208641052246094,
            "middle eastern": 20.68798065185547,
            "latino hispanic": 31.44719886779785
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.003239102428779006,
            "disgust": 6.25173131037042e-14,
            "fear": 0.005529464688152075,
            "happy": 2.0278734154999256e-05,
            "sad": 95.8420181274414,
            "surprise": 3.5850506591161846e-11,
            "neutral": 4.149193286895752
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 21,
        "region": {
            "x": 685,
            "y": 618,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.006189519073814154,
            "Man": 99.99381256103516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.8531702756881714,
            "indian": 1.868844985961914,
            "black": 0.17625398933887482,
            "white": 57.459144592285156,
            "middle eastern": 23.287700653076172,
            "latino hispanic": 15.354889869689941
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.063534736633301,
            "disgust": 1.1239336572543834e-08,
            "fear": 0.013173899613320827,
            "happy": 0.17089395225048065,
            "sad": 1.2774896621704102,
            "surprise": 0.00017125171143561602,
            "neutral": 96.4747314453125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 1146,
            "y": 762,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 89.94966888427734,
            "Man": 10.050335884094238
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 49.515384674072266,
            "indian": 7.166374683380127,
            "black": 7.762530326843262,
            "white": 13.759247779846191,
            "middle eastern": 4.942666530609131,
            "latino hispanic": 16.853797912597656
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.9559942483901978,
            "disgust": 3.494849806884304e-05,
            "fear": 11.54980754852295,
            "happy": 13.45432186126709,
            "sad": 53.462005615234375,
            "surprise": 0.004178824368864298,
            "neutral": 19.57366180419922
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 348,
            "y": 769,
            "w": 72,
            "h": 72,
            "left_eye": [
                394,
                793
            ],
            "right_eye": [
                371,
                797
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 6.300669610936893e-06,
            "Man": 99.99998474121094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.011907454580068588,
            "indian": 0.0473199300467968,
            "black": 0.0021806738805025816,
            "white": 89.27991485595703,
            "middle eastern": 7.889042377471924,
            "latino hispanic": 2.7696332931518555
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 26.649484634399414,
            "disgust": 0.004060318227857351,
            "fear": 6.716172218322754,
            "happy": 0.009302007965743542,
            "sad": 39.1063232421875,
            "surprise": 0.0063337706960737705,
            "neutral": 27.50832748413086
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 29,
        "region": {
            "x": 615,
            "y": 754,
            "w": 82,
            "h": 82,
            "left_eye": [
                667,
                782
            ],
            "right_eye": [
                642,
                784
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.002807587618008256,
            "Man": 99.99718475341797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.3501717073013424e-07,
            "indian": 1.144116822615615e-06,
            "black": 2.3415134720039532e-08,
            "white": 99.9495849609375,
            "middle eastern": 0.021489502862095833,
            "latino hispanic": 0.028932292014360428
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.534256935119629,
            "disgust": 0.00034768725163303316,
            "fear": 1.951029658317566,
            "happy": 0.017106546089053154,
            "sad": 39.31586837768555,
            "surprise": 0.015969082713127136,
            "neutral": 49.165428161621094
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 926,
            "y": 763,
            "w": 88,
            "h": 88,
            "left_eye": [
                983,
                799
            ],
            "right_eye": [
                956,
                795
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.20260214805603027,
            "Man": 99.79740142822266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.004215493332594633,
            "indian": 0.003971238620579243,
            "black": 0.000185759985470213,
            "white": 97.28771209716797,
            "middle eastern": 1.0332289934158325,
            "latino hispanic": 1.6706860065460205
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 25.76618003845215,
            "disgust": 3.993482096120715e-07,
            "fear": 0.7617282271385193,
            "happy": 0.00030633158166892827,
            "sad": 65.507080078125,
            "surprise": 5.429411089608038e-07,
            "neutral": 7.964710235595703
        },
        "dominant_emotion": "sad"
    }
]

console.log("Meta Results for Electrician:");
const data = electrician_data.concat(electrician_data2, electrician_data3);
console.log(processData(data));
