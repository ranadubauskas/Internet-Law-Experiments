const { processData } = require('../../data_processing.js');

let floral_design_data = [
    {
        "age": 30,
        "region": {
            "x": 374,
            "y": 191,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 1.348616600036621,
            "Man": 98.65138244628906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 36.9723014831543,
            "indian": 16.086132049560547,
            "black": 19.16512680053711,
            "white": 6.503930568695068,
            "middle eastern": 4.516078472137451,
            "latino hispanic": 16.75642967224121
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 56.05686950683594,
            "disgust": 0.0004898749757558107,
            "fear": 2.3296995162963867,
            "happy": 0.8448365926742554,
            "sad": 4.746764183044434,
            "surprise": 1.7501728534698486,
            "neutral": 34.271175384521484
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 37,
        "region": {
            "x": 627,
            "y": 239,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99823760986328,
            "Man": 0.0017625166801735759
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 69.8088150024414,
            "indian": 4.5439043045043945,
            "black": 0.6698266267776489,
            "white": 9.609260559082031,
            "middle eastern": 2.0340914726257324,
            "latino hispanic": 13.334105491638184
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 6.116449185356032e-06,
            "disgust": 3.653158071187379e-12,
            "fear": 3.1733634386910126e-07,
            "happy": 94.79230499267578,
            "sad": 2.59520165855065e-05,
            "surprise": 0.006988012231886387,
            "neutral": 5.200675010681152
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 40,
        "region": {
            "x": 738,
            "y": 237,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.5949015021324158,
            "Man": 99.40509033203125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.69700622558594,
            "indian": 0.01334912795573473,
            "black": 0.0001876169553725049,
            "white": 0.24651888012886047,
            "middle eastern": 0.00473456596955657,
            "latino hispanic": 0.03820371627807617
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.00026417046319693327,
            "disgust": 4.637491020538509e-13,
            "fear": 0.0004766005149576813,
            "happy": 99.04419708251953,
            "sad": 0.954948902130127,
            "surprise": 1.800947302399436e-07,
            "neutral": 0.00011668865045066923
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 577,
            "y": 138,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 12.134617805480957,
            "Man": 87.8653793334961
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 46.556888580322266,
            "indian": 7.369731426239014,
            "black": 1.0347479581832886,
            "white": 17.939830780029297,
            "middle eastern": 4.838830471038818,
            "latino hispanic": 22.25997543334961
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.080504894256592,
            "disgust": 1.7204453115482465e-06,
            "fear": 0.08917593955993652,
            "happy": 0.7352834939956665,
            "sad": 1.6931006908416748,
            "surprise": 0.012442338280379772,
            "neutral": 92.38948822021484
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 40,
        "region": {
            "x": 681,
            "y": 168,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 7.849462985992432,
            "Man": 92.1505355834961
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.101588249206543,
            "indian": 0.9050165414810181,
            "black": 0.39419814944267273,
            "white": 67.54446411132812,
            "middle eastern": 9.41982650756836,
            "latino hispanic": 10.634897232055664
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.04053635522723198,
            "disgust": 1.556248389533721e-05,
            "fear": 0.419073224067688,
            "happy": 1.3647992610931396,
            "sad": 0.3464273512363434,
            "surprise": 0.7608848810195923,
            "neutral": 97.0682601928711
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 51,
        "region": {
            "x": 175,
            "y": 175,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.4484996199607849,
            "Man": 99.55150604248047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.02264541946351528,
            "indian": 0.10672932118177414,
            "black": 0.002969797933474183,
            "white": 92.09043884277344,
            "middle eastern": 5.626778602600098,
            "latino hispanic": 2.1504414081573486
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.23159582912921906,
            "disgust": 3.571315119188512e-07,
            "fear": 0.07408373057842255,
            "happy": 64.35441589355469,
            "sad": 0.032869063317775726,
            "surprise": 0.037189699709415436,
            "neutral": 35.269840240478516
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 442,
            "y": 143,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 16.07332992553711,
            "Man": 83.92666625976562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 45.13129425048828,
            "indian": 9.23093318939209,
            "black": 2.056339740753174,
            "white": 13.225656509399414,
            "middle eastern": 6.6753106117248535,
            "latino hispanic": 23.680463790893555
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 14.752364158630371,
            "disgust": 0.0001955832849489525,
            "fear": 4.073165416717529,
            "happy": 0.008385189808905125,
            "sad": 4.139420986175537,
            "surprise": 0.0976921021938324,
            "neutral": 76.92877960205078
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 500,
            "y": 228,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.3654595911502838,
            "Man": 99.6345443725586
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 34.907798767089844,
            "indian": 15.023233413696289,
            "black": 8.791799545288086,
            "white": 9.840288162231445,
            "middle eastern": 5.867593288421631,
            "latino hispanic": 25.569292068481445
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 18.182525634765625,
            "disgust": 7.169379045990354e-08,
            "fear": 0.18383753299713135,
            "happy": 0.0037317562382668257,
            "sad": 2.072150945663452,
            "surprise": 1.1993364523732453e-06,
            "neutral": 79.55775451660156
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 894,
            "y": 232,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.96405792236328,
            "Man": 0.035935528576374054
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 55.76787567138672,
            "indian": 5.448882102966309,
            "black": 1.4622879028320312,
            "white": 19.901491165161133,
            "middle eastern": 5.301159858703613,
            "latino hispanic": 12.118303298950195
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 9.791794930436026e-09,
            "disgust": 4.591183864837388e-14,
            "fear": 2.085793857986573e-05,
            "happy": 98.00439453125,
            "sad": 7.444840775860939e-06,
            "surprise": 0.0008686073706485331,
            "neutral": 1.9947052001953125
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 314,
            "y": 269,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 64.99264526367188,
            "Man": 35.007347106933594
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 75.5843734741211,
            "indian": 3.9245047569274902,
            "black": 0.2548198401927948,
            "white": 6.206387996673584,
            "middle eastern": 0.8837213516235352,
            "latino hispanic": 13.146187782287598
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.011274849995970726,
            "disgust": 6.090909892009222e-07,
            "fear": 0.048608213663101196,
            "happy": 59.34311294555664,
            "sad": 0.19558598101139069,
            "surprise": 0.05536903440952301,
            "neutral": 40.34605026245117
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 820,
            "y": 307,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 100.0,
            "Man": 4.732170509669231e-06
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 97.5425033569336,
            "indian": 0.33371639251708984,
            "black": 0.0008818749920465052,
            "white": 0.8233537077903748,
            "middle eastern": 0.019801611080765724,
            "latino hispanic": 1.2797397375106812
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 9.32694945277035e-07,
            "disgust": 5.493295922309738e-12,
            "fear": 8.045365120779024e-07,
            "happy": 96.56631469726562,
            "sad": 7.961364644870628e-06,
            "surprise": 0.03498494252562523,
            "neutral": 3.3986995220184326
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 969,
            "y": 270,
            "w": 54,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 78.58667755126953,
            "Man": 21.413312911987305
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.83174896240234,
            "indian": 0.008365391753613949,
            "black": 3.317823211546056e-05,
            "white": 0.09042377024888992,
            "middle eastern": 0.00014929144526831806,
            "latino hispanic": 0.06928331404924393
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.470442041158094e-06,
            "disgust": 4.1004432488334075e-11,
            "fear": 0.0002781049406621605,
            "happy": 98.93561553955078,
            "sad": 0.00023720948956906796,
            "surprise": 0.0006354814977385104,
            "neutral": 1.0632275342941284
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 242,
            "y": 247,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99996185302734,
            "Man": 3.047898098884616e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.3142503499984741,
            "indian": 0.001957872649654746,
            "black": 0.00011194281978532672,
            "white": 98.44742584228516,
            "middle eastern": 0.47595977783203125,
            "latino hispanic": 0.7602930068969727
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.1283931062043848e-08,
            "disgust": 7.23816709694014e-12,
            "fear": 3.8861634266140754e-07,
            "happy": 99.99974060058594,
            "sad": 0.0002484386204741895,
            "surprise": 3.635336476293105e-10,
            "neutral": 1.6674059224897064e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 408,
            "y": 300,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.04041246324777603,
            "Man": 99.9595947265625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.6753599643707275,
            "indian": 0.8633135557174683,
            "black": 0.0549347959458828,
            "white": 68.85536193847656,
            "middle eastern": 15.975202560424805,
            "latino hispanic": 12.575827598571777
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.009218047372996807,
            "disgust": 8.752151074986614e-07,
            "fear": 0.006279434077441692,
            "happy": 55.52796936035156,
            "sad": 0.14892719686031342,
            "surprise": 3.354337453842163,
            "neutral": 40.95327377319336
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 153,
            "y": 326,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.045777756720781326,
            "Man": 99.9542236328125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 79.47138214111328,
            "indian": 0.9888518452644348,
            "black": 0.10864505171775818,
            "white": 13.212985038757324,
            "middle eastern": 1.0362540483474731,
            "latino hispanic": 5.181883335113525
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.007845585234463215,
            "disgust": 2.3009727803668945e-11,
            "fear": 1.7707692677504383e-05,
            "happy": 92.74250793457031,
            "sad": 0.0025060742627829313,
            "surprise": 0.0019455683650448918,
            "neutral": 7.2451863288879395
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 84,
            "y": 255,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.9963150024414,
            "Man": 0.0036799635272473097
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.97650909423828,
            "indian": 0.0005041145486757159,
            "black": 4.10860457122908e-06,
            "white": 0.010722721926867962,
            "middle eastern": 0.00011119177361251786,
            "latino hispanic": 0.012140033766627312
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.1606941370700952e-05,
            "disgust": 6.245477052191362e-11,
            "fear": 3.978281029048958e-07,
            "happy": 99.97852325439453,
            "sad": 8.303223353323119e-07,
            "surprise": 0.012433701194822788,
            "neutral": 0.009037233889102936
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 613,
            "y": 329,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.9594955444336,
            "Man": 0.04050607234239578
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 95.9387435913086,
            "indian": 0.12161827087402344,
            "black": 0.002124388236552477,
            "white": 1.9396623373031616,
            "middle eastern": 0.035260967910289764,
            "latino hispanic": 1.9625957012176514
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 9.030149522004649e-05,
            "disgust": 1.4189608377179752e-09,
            "fear": 0.00033785917912609875,
            "happy": 99.36843872070312,
            "sad": 0.0002937933895736933,
            "surprise": 0.007089299615472555,
            "neutral": 0.623754620552063
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 905,
            "y": 364,
            "w": 80,
            "h": 80,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.04876260831952095,
            "Man": 99.95124053955078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.9806137084961,
            "indian": 0.002822807990014553,
            "black": 3.324529416204314e-07,
            "white": 0.004170774016529322,
            "middle eastern": 2.1007534201089584e-07,
            "latino hispanic": 0.01239029411226511
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.165195345878601,
            "disgust": 2.6717625587480143e-05,
            "fear": 1.3707547187805176,
            "happy": 0.2533876895904541,
            "sad": 2.7534220218658447,
            "surprise": 0.008491944521665573,
            "neutral": 94.44872283935547
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 724,
            "y": 364,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.12129211425781,
            "Man": 0.8787130117416382
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 89.05965423583984,
            "indian": 1.1104347705841064,
            "black": 0.053429801017045975,
            "white": 4.977413177490234,
            "middle eastern": 0.8857154846191406,
            "latino hispanic": 3.913360595703125
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.81766893092572e-07,
            "disgust": 2.0073213100648004e-16,
            "fear": 1.7457585599345293e-08,
            "happy": 99.99413299560547,
            "sad": 5.162101501809957e-07,
            "surprise": 0.0010489748092368245,
            "neutral": 0.004819048102945089
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 964,
            "y": 448,
            "w": 59,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.8902587890625,
            "Man": 0.10973837971687317
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.12822723388672,
            "indian": 0.41162845492362976,
            "black": 0.00016783502360340208,
            "white": 0.04824749007821083,
            "middle eastern": 0.00016213169146794826,
            "latino hispanic": 0.4115648865699768
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.5111435651779175,
            "disgust": 0.0021255039609968662,
            "fear": 0.8767632842063904,
            "happy": 0.3350050449371338,
            "sad": 13.152941703796387,
            "surprise": 0.017413785681128502,
            "neutral": 84.10460662841797
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 41,
            "y": 456,
            "w": 74,
            "h": 74,
            "left_eye": [
                93,
                482
            ],
            "right_eye": [
                62,
                484
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 100.0,
            "Man": 5.308003892423585e-06
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.007617047522217035,
            "indian": 0.002343522384762764,
            "black": 2.0507553927018307e-05,
            "white": 98.65939331054688,
            "middle eastern": 0.7637691497802734,
            "latino hispanic": 0.5668579936027527
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.103398323059082,
            "disgust": 0.0008002387476153672,
            "fear": 4.564339637756348,
            "happy": 15.667713165283203,
            "sad": 4.947777271270752,
            "surprise": 0.02888678014278412,
            "neutral": 71.68708801269531
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 167,
            "y": 466,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.99633026123047,
            "Man": 0.003665624186396599
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 38.53529739379883,
            "indian": 7.613526821136475,
            "black": 7.452258110046387,
            "white": 16.3782958984375,
            "middle eastern": 7.188296794891357,
            "latino hispanic": 22.832317352294922
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.9625451397619074e-11,
            "disgust": 3.952742941269359e-18,
            "fear": 9.69742153245079e-09,
            "happy": 99.9999771118164,
            "sad": 7.213264208161263e-09,
            "surprise": 2.588299366501623e-11,
            "neutral": 2.6525240173214115e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 778,
            "y": 477,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 98.75031280517578,
            "Man": 1.2496918439865112
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99992370605469,
            "indian": 2.7887150281458162e-05,
            "black": 1.5457889135372938e-10,
            "white": 1.477857608733757e-06,
            "middle eastern": 2.5206935497235072e-11,
            "latino hispanic": 3.931886385544203e-05
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.00021294977341312915,
            "disgust": 1.315886621888751e-09,
            "fear": 0.11104746162891388,
            "happy": 94.52123260498047,
            "sad": 0.003532741218805313,
            "surprise": 0.010268129408359528,
            "neutral": 5.3537116050720215
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 264,
            "y": 466,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 98.09110260009766,
            "Man": 1.9088977575302124
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99989318847656,
            "indian": 9.712061199707023e-08,
            "black": 1.5721228138754206e-11,
            "white": 0.00010408848174847662,
            "middle eastern": 2.526972631144986e-09,
            "latino hispanic": 5.719840373785701e-06
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 7.913303124951199e-05,
            "disgust": 1.6596335417062846e-10,
            "fear": 4.144172999076545e-05,
            "happy": 99.86520385742188,
            "sad": 4.8086636525113136e-05,
            "surprise": 0.002032071817666292,
            "neutral": 0.13259059190750122
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 521,
            "y": 390,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.92647552490234,
            "Man": 0.07351856678724289
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 84.78564453125,
            "indian": 1.67440664768219,
            "black": 0.1381058245897293,
            "white": 6.676778793334961,
            "middle eastern": 0.4305872619152069,
            "latino hispanic": 6.294473171234131
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.275162671594444e-07,
            "disgust": 1.6448136391311943e-14,
            "fear": 1.708345465090133e-08,
            "happy": 99.9893569946289,
            "sad": 1.8421947345359513e-07,
            "surprise": 0.00021784241835121065,
            "neutral": 0.010423615574836731
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 410,
            "y": 442,
            "w": 76,
            "h": 76,
            "left_eye": [
                462,
                470
            ],
            "right_eye": [
                435,
                469
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 99.94036102294922,
            "Man": 0.05964447557926178
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.748037210651091e-07,
            "indian": 7.930242418296984e-07,
            "black": 2.07630312942797e-09,
            "white": 99.90980529785156,
            "middle eastern": 0.05521377921104431,
            "latino hispanic": 0.0349796786904335
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.684960389222397e-08,
            "disgust": 1.403301845386007e-13,
            "fear": 3.9626507941648015e-07,
            "happy": 98.3110580444336,
            "sad": 7.026615662653057e-07,
            "surprise": 5.1753879233729094e-05,
            "neutral": 1.6888916492462158
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 483,
            "y": 565,
            "w": 77,
            "h": 77,
            "left_eye": [
                532,
                591
            ],
            "right_eye": [
                507,
                596
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 19.06599235534668,
            "Man": 80.93400573730469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 98.40583801269531,
            "indian": 0.2927219867706299,
            "black": 0.007060213014483452,
            "white": 0.43092861771583557,
            "middle eastern": 0.02235369198024273,
            "latino hispanic": 0.8410830497741699
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.04371049255132675,
            "disgust": 1.7428816136089154e-05,
            "fear": 25.663434982299805,
            "happy": 8.796217918395996,
            "sad": 3.823901653289795,
            "surprise": 0.01862809620797634,
            "neutral": 61.654083251953125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 614,
            "y": 482,
            "w": 78,
            "h": 78,
            "left_eye": [
                666,
                511
            ],
            "right_eye": [
                637,
                513
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 16.59903335571289,
            "Man": 83.40095520019531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.12285614013672,
            "indian": 0.3541681468486786,
            "black": 0.00039046796155162156,
            "white": 0.027453655377030373,
            "middle eastern": 0.00013864898937754333,
            "latino hispanic": 0.49498745799064636
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0007895036251284182,
            "disgust": 6.168433541731133e-10,
            "fear": 0.032654959708452225,
            "happy": 2.5935397148132324,
            "sad": 0.5872774124145508,
            "surprise": 0.00016588237485848367,
            "neutral": 96.78557586669922
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 92,
            "y": 597,
            "w": 82,
            "h": 82,
            "left_eye": [
                148,
                631
            ],
            "right_eye": [
                118,
                628
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 95.24623107910156,
            "Man": 4.7537713050842285
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 85.31989288330078,
            "indian": 0.5734938979148865,
            "black": 0.06167759746313095,
            "white": 7.926896095275879,
            "middle eastern": 0.33672288060188293,
            "latino hispanic": 5.781315803527832
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.372172497824067e-06,
            "disgust": 1.613306493605804e-12,
            "fear": 1.3834568335369113e-06,
            "happy": 82.46846771240234,
            "sad": 0.0001257502008229494,
            "surprise": 0.011391994543373585,
            "neutral": 17.52001190185547
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 888,
            "y": 580,
            "w": 87,
            "h": 87,
            "left_eye": [
                946,
                615
            ],
            "right_eye": [
                913,
                613
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 94.11239624023438,
            "Man": 5.887600898742676
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.90962219238281,
            "indian": 0.02211015857756138,
            "black": 4.872756562690483e-06,
            "white": 0.002104887505993247,
            "middle eastern": 1.0797097047543502e-06,
            "latino hispanic": 0.06614971905946732
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.007590673863887787,
            "disgust": 6.616950031457236e-06,
            "fear": 0.6293147802352905,
            "happy": 34.82807159423828,
            "sad": 0.7357165217399597,
            "surprise": 0.03740328177809715,
            "neutral": 63.76189422607422
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 697,
            "y": 559,
            "w": 86,
            "h": 86,
            "left_eye": [
                757,
                591
            ],
            "right_eye": [
                723,
                594
            ]
        },
        "face_confidence": 0.85,
        "gender": {
            "Woman": 97.86618041992188,
            "Man": 2.1338272094726562
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.021432001143693924,
            "indian": 0.011027262546122074,
            "black": 0.00031091022538021207,
            "white": 94.2389144897461,
            "middle eastern": 3.128770351409912,
            "latino hispanic": 2.599541425704956
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.932152090573403e-11,
            "disgust": 3.1446133321991934e-18,
            "fear": 1.5878073966746342e-08,
            "happy": 98.9834976196289,
            "sad": 2.5448031237829127e-07,
            "surprise": 8.348983726591541e-09,
            "neutral": 1.016506552696228
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 281,
            "y": 576,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.9998779296875,
            "Man": 0.00011888399603776634
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0001907810365082696,
            "indian": 2.0073702700074136e-09,
            "black": 8.330659079236469e-12,
            "white": 99.99907684326172,
            "middle eastern": 0.00022442442423198372,
            "latino hispanic": 0.0004952086019329727
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.637826572841732e-06,
            "disgust": 2.7498396355102317e-12,
            "fear": 7.774023833917454e-05,
            "happy": 99.91693878173828,
            "sad": 4.531122158368817e-06,
            "surprise": 0.0683147981762886,
            "neutral": 0.014654588885605335
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 715,
            "y": 630,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 8.199003219604492,
            "Man": 91.8010025024414
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.349308729171753,
            "indian": 0.050824858248233795,
            "black": 0.005781023763120174,
            "white": 92.70979309082031,
            "middle eastern": 2.5293493270874023,
            "latino hispanic": 2.3549444675445557
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.006609140895307064,
            "disgust": 2.4459208702865e-07,
            "fear": 0.09444721043109894,
            "happy": 3.1740951538085938,
            "sad": 38.781131744384766,
            "surprise": 0.0024497914128005505,
            "neutral": 57.94126892089844
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 61,
            "y": 877,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 44.0665397644043,
            "Man": 55.93346405029297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.562255859375,
            "indian": 7.474737644195557,
            "black": 2.1616199016571045,
            "white": 48.34147262573242,
            "middle eastern": 22.163387298583984,
            "latino hispanic": 12.29652214050293
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.22685159742832184,
            "disgust": 3.4463188057998195e-05,
            "fear": 31.99891471862793,
            "happy": 2.507321357727051,
            "sad": 50.769287109375,
            "surprise": 2.254953145980835,
            "neutral": 12.242635726928711
        },
        "dominant_emotion": "sad"
    }
]
let floral_design_data2 = [
    {
        "age": 30,
        "region": {
            "x": 746,
            "y": 73,
            "w": 82,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.99,
        "gender": {
            "Woman": 8.634528160095215,
            "Man": 91.36547088623047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.333140254020691,
            "indian": 0.013695534318685532,
            "black": 0.0030090692453086376,
            "white": 95.36892700195312,
            "middle eastern": 2.712034225463867,
            "latino hispanic": 0.5691985487937927
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.082738650547981e-07,
            "disgust": 2.4492724879876237e-18,
            "fear": 0.004239597823470831,
            "happy": 2.7391267920506834e-08,
            "sad": 99.99576568603516,
            "surprise": 4.231804883012857e-24,
            "neutral": 1.2361974508282025e-12
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 662,
            "y": 192,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.41981014609336853,
            "Man": 99.58018493652344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.247593879699707,
            "indian": 4.382315635681152,
            "black": 0.6716043949127197,
            "white": 50.75414276123047,
            "middle eastern": 23.325551986694336,
            "latino hispanic": 18.618791580200195
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0020648594945669174,
            "disgust": 0.00014662383182439953,
            "fear": 3.5666069984436035,
            "happy": 90.18179321289062,
            "sad": 5.847997188568115,
            "surprise": 3.9183210901683196e-05,
            "neutral": 0.4013526141643524
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 496,
            "y": 174,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.0058295936323702335,
            "Man": 99.99417114257812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.5017246007919312,
            "indian": 4.281705379486084,
            "black": 0.8240242004394531,
            "white": 40.097354888916016,
            "middle eastern": 36.63829040527344,
            "latino hispanic": 17.65690803527832
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.01747981272637844,
            "disgust": 5.2956700358208764e-08,
            "fear": 3.827721229754388e-05,
            "happy": 98.38089752197266,
            "sad": 0.22019720077514648,
            "surprise": 6.566649244632572e-05,
            "neutral": 1.3813225030899048
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 332,
            "y": 216,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 46.56741714477539,
            "Man": 53.43258285522461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.3209457397460938,
            "indian": 0.8579436540603638,
            "black": 0.21096880733966827,
            "white": 75.52194213867188,
            "middle eastern": 9.252910614013672,
            "latino hispanic": 10.835281372070312
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.5922892038797727e-06,
            "disgust": 1.4553938945540958e-21,
            "fear": 7.875354014752478e-13,
            "happy": 99.89727783203125,
            "sad": 3.9545696495224547e-07,
            "surprise": 4.751895057997224e-11,
            "neutral": 0.10272127389907837
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 235,
            "y": 304,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 84.94329833984375,
            "Man": 15.056696891784668
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.2640596330165863,
            "indian": 0.5241935849189758,
            "black": 0.031730927526950836,
            "white": 78.46761322021484,
            "middle eastern": 12.958244323730469,
            "latino hispanic": 7.754156589508057
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0025115821044892073,
            "disgust": 5.592999059444992e-07,
            "fear": 1.1712309969880152e-05,
            "happy": 98.89103698730469,
            "sad": 0.00450513418763876,
            "surprise": 0.0012890227371826768,
            "neutral": 1.100645661354065
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 173,
            "y": 221,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0015405090525746346,
            "Man": 99.99845886230469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.433737608953379e-05,
            "indian": 0.4729034900665283,
            "black": 7.047197868814692e-05,
            "white": 8.869888305664062,
            "middle eastern": 89.1893310546875,
            "latino hispanic": 1.4677820205688477
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.021721117198467255,
            "disgust": 1.2979057932571703e-11,
            "fear": 0.0005578745040111244,
            "happy": 99.84918212890625,
            "sad": 0.002905582543462515,
            "surprise": 0.003473622491583228,
            "neutral": 0.12215787917375565
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 587,
            "y": 238,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 94.95088195800781,
            "Man": 5.049125671386719
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00012778253585565835,
            "indian": 6.511665560537949e-05,
            "black": 3.420020675548585e-07,
            "white": 99.73263549804688,
            "middle eastern": 0.14255668222904205,
            "latino hispanic": 0.12462317198514938
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.607472879390116e-06,
            "disgust": 1.7321411774524897e-13,
            "fear": 3.894394922099309e-07,
            "happy": 99.99923706054688,
            "sad": 0.0006573578575626016,
            "surprise": 1.2066847521197133e-11,
            "neutral": 9.909052459988743e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 539,
            "y": 337,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 98.43407440185547,
            "Man": 1.565929651260376
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.2755519449710846,
            "indian": 1.0811995267868042,
            "black": 0.07908010482788086,
            "white": 61.02206802368164,
            "middle eastern": 25.73329734802246,
            "latino hispanic": 11.80880069732666
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00455551827326417,
            "disgust": 3.7019430010332144e-07,
            "fear": 0.07496793568134308,
            "happy": 94.46971893310547,
            "sad": 0.10098028928041458,
            "surprise": 0.41841039061546326,
            "neutral": 4.931358814239502
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 827,
            "y": 219,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.0031807252671569586,
            "Man": 99.99681854248047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.631269637731748e-07,
            "indian": 5.349262210074812e-06,
            "black": 4.764781458277412e-09,
            "white": 99.83161926269531,
            "middle eastern": 0.13103152811527252,
            "latino hispanic": 0.037353578954935074
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0004739989817608148,
            "disgust": 1.1506019248486155e-08,
            "fear": 5.276961383060552e-05,
            "happy": 99.93489074707031,
            "sad": 0.0015708047430962324,
            "surprise": 9.686173143563792e-06,
            "neutral": 0.06299112737178802
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 723,
            "y": 263,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.4284267723560333,
            "Man": 99.57157135009766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.02491038478910923,
            "indian": 1.6757816076278687,
            "black": 0.03352338448166847,
            "white": 31.113948822021484,
            "middle eastern": 57.25035858154297,
            "latino hispanic": 9.901480674743652
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.0021750645246356726,
            "disgust": 3.7576917577553104e-08,
            "fear": 0.0064392383210361,
            "happy": 0.002996077761054039,
            "sad": 0.0677635595202446,
            "surprise": 9.18568821361987e-06,
            "neutral": 99.92062377929688
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 416,
            "y": 282,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.1508624106645584,
            "Man": 99.8491439819336
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.006030150689184666,
            "indian": 2.050666570663452,
            "black": 0.006726092658936977,
            "white": 23.177051544189453,
            "middle eastern": 68.33473205566406,
            "latino hispanic": 6.424800395965576
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 8.074399374891073e-05,
            "disgust": 2.754338701560499e-10,
            "fear": 2.0286718438455864e-07,
            "happy": 94.78034973144531,
            "sad": 0.00624443031847477,
            "surprise": 0.00037935207365080714,
            "neutral": 5.2129411697387695
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 920,
            "y": 291,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.015285532921552658,
            "Man": 99.9847183227539
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7093068957328796,
            "indian": 1.6638659238815308,
            "black": 0.11471997946500778,
            "white": 52.28093719482422,
            "middle eastern": 32.007667541503906,
            "latino hispanic": 13.223505020141602
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.11824440211057663,
            "disgust": 9.199959549732739e-07,
            "fear": 0.0003758908424060792,
            "happy": 97.83842468261719,
            "sad": 0.014963630586862564,
            "surprise": 0.0441189780831337,
            "neutral": 1.9838838577270508
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 94,
            "y": 336,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.012738971970975399,
            "Man": 99.98725891113281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0012535847490653396,
            "indian": 0.0050638895481824875,
            "black": 1.6184067135327496e-05,
            "white": 95.58847045898438,
            "middle eastern": 2.8717310428619385,
            "latino hispanic": 1.5334593057632446
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.09731844067573547,
            "disgust": 2.909937357742365e-08,
            "fear": 0.0002928342146333307,
            "happy": 14.629899024963379,
            "sad": 2.428015947341919,
            "surprise": 8.785676072875503e-06,
            "neutral": 82.84446716308594
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 842,
            "y": 355,
            "w": 81,
            "h": 81,
            "left_eye": [
                896,
                387
            ],
            "right_eye": [
                866,
                388
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.02491495944559574,
            "Man": 99.97508239746094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.19035135209560394,
            "indian": 1.6976044178009033,
            "black": 0.08002547919750214,
            "white": 55.735958099365234,
            "middle eastern": 29.87476348876953,
            "latino hispanic": 12.421299934387207
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0001928913698066026,
            "disgust": 1.3555482958338416e-08,
            "fear": 0.0005380675429478288,
            "happy": 98.28982543945312,
            "sad": 0.02634328044950962,
            "surprise": 0.001822324120439589,
            "neutral": 1.6812798976898193
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 383,
            "y": 507,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 57.947349548339844,
            "Man": 42.05264663696289
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.0246823194393073e-06,
            "indian": 2.724866590142483e-06,
            "black": 3.943512183468556e-09,
            "white": 99.83773803710938,
            "middle eastern": 0.11024051159620285,
            "latino hispanic": 0.05200633779168129
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.3155792000805206e-10,
            "disgust": 6.241124169842693e-22,
            "fear": 1.624428436002804e-14,
            "happy": 99.96334075927734,
            "sad": 1.27978347919111e-08,
            "surprise": 3.8900108023653956e-08,
            "neutral": 0.03666393831372261
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 621,
            "y": 433,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 96.8740005493164,
            "Man": 3.126006603240967
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99288177490234,
            "indian": 0.0016954288585111499,
            "black": 9.664727258495986e-07,
            "white": 0.00010988102440023795,
            "middle eastern": 1.6617103426597168e-07,
            "latino hispanic": 0.0053153084591031075
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.018884016200900078,
            "disgust": 5.063311164121842e-06,
            "fear": 0.2701508402824402,
            "happy": 82.87667846679688,
            "sad": 0.2645769417285919,
            "surprise": 6.624277591705322,
            "neutral": 9.945428848266602
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 310,
            "y": 410,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 97.84734344482422,
            "Man": 2.152660369873047
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.229065785286366e-06,
            "indian": 3.2942198231467046e-06,
            "black": 3.4534604065328267e-09,
            "white": 99.85366821289062,
            "middle eastern": 0.09227484464645386,
            "latino hispanic": 0.05404585227370262
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0005334123270586133,
            "disgust": 7.1097992944413324e-12,
            "fear": 3.137260193852853e-07,
            "happy": 99.92697143554688,
            "sad": 6.16779871052131e-05,
            "surprise": 3.0505555059789913e-06,
            "neutral": 0.07242759317159653
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 175,
            "y": 479,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.6358839273452759,
            "Man": 99.36412048339844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.03336292877793312,
            "indian": 4.199637413024902,
            "black": 95.71675109863281,
            "white": 0.00037733468343503773,
            "middle eastern": 0.0001960202062036842,
            "latino hispanic": 0.04968104511499405
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0017434782348573208,
            "disgust": 2.1800581340158942e-09,
            "fear": 0.034356050193309784,
            "happy": 0.02029871940612793,
            "sad": 0.07033146172761917,
            "surprise": 0.0035295721609145403,
            "neutral": 99.86974334716797
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 924,
            "y": 477,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.2380795031785965,
            "Man": 99.76192474365234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.08321380615234,
            "indian": 0.36586466431617737,
            "black": 0.0012289853766560555,
            "white": 0.03914203867316246,
            "middle eastern": 7.358042785199359e-05,
            "latino hispanic": 0.5104833841323853
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 6.023440437274985e-05,
            "disgust": 7.662126488838794e-11,
            "fear": 0.001997985178604722,
            "happy": 98.27172088623047,
            "sad": 0.0003196239413227886,
            "surprise": 0.03937133774161339,
            "neutral": 1.686536431312561
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 13,
            "y": 514,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99069213867188,
            "Man": 0.009310002438724041
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99987030029297,
            "indian": 1.1669127161439974e-05,
            "black": 2.5848886919810354e-10,
            "white": 6.993201395744109e-07,
            "middle eastern": 3.516140503756482e-11,
            "latino hispanic": 0.00011890642781509086
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.8015427589416504,
            "disgust": 0.09468422085046768,
            "fear": 5.370562553405762,
            "happy": 16.02404022216797,
            "sad": 1.6654527187347412,
            "surprise": 50.067108154296875,
            "neutral": 24.97661781311035
        },
        "dominant_emotion": "surprise"
    },
    {
        "age": 30,
        "region": {
            "x": 530,
            "y": 521,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 98.90121459960938,
            "Man": 1.098787546157837
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.0442383097857573e-13,
            "indian": 1.0275249618177384e-13,
            "black": 2.7906993508298583e-18,
            "white": 100.0,
            "middle eastern": 2.908845999627374e-06,
            "latino hispanic": 1.836546744016232e-06
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.636614868771318e-11,
            "disgust": 7.602694558157304e-22,
            "fear": 2.0301048711014735e-14,
            "happy": 99.98628234863281,
            "sad": 2.524846109963619e-09,
            "surprise": 1.981896200972666e-12,
            "neutral": 0.01371883973479271
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 732,
            "y": 500,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 99.48621368408203,
            "Man": 0.5137863755226135
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 97.93831634521484,
            "indian": 0.16396287083625793,
            "black": 0.01451217383146286,
            "white": 0.7841557264328003,
            "middle eastern": 0.018840188160538673,
            "latino hispanic": 1.08021080493927
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.3342400961846579e-06,
            "disgust": 1.060929518743219e-15,
            "fear": 8.023604891604919e-09,
            "happy": 99.99996185302734,
            "sad": 5.789511980935913e-09,
            "surprise": 6.773910854462883e-08,
            "neutral": 3.664128598757088e-05
        },
        "dominant_emotion": "happy"
    }
]
let floral_design_data3 = [
    {
        "age": 36,
        "region": {
            "x": 403,
            "y": 48,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.018838008865714073,
            "Man": 99.98115539550781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.188762903213501,
            "indian": 8.53512954711914,
            "black": 1.5608148574829102,
            "white": 30.93023681640625,
            "middle eastern": 30.32620620727539,
            "latino hispanic": 25.458845138549805
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.010813090018928051,
            "disgust": 1.664621440689018e-09,
            "fear": 0.0016008740058168769,
            "happy": 99.97671508789062,
            "sad": 0.01070699654519558,
            "surprise": 6.950408078409964e-06,
            "neutral": 0.00016436920850537717
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 42,
        "region": {
            "x": 294,
            "y": 65,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.015480836853384972,
            "Man": 99.98451232910156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.0497053861618042,
            "indian": 10.57460880279541,
            "black": 0.7693992853164673,
            "white": 36.11063003540039,
            "middle eastern": 39.00889205932617,
            "latino hispanic": 12.486764907836914
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.00016026011144276708,
            "disgust": 2.14439577206349e-12,
            "fear": 3.5969374145849997e-09,
            "happy": 99.9872055053711,
            "sad": 4.871473720413633e-06,
            "surprise": 3.815166932374936e-11,
            "neutral": 0.012627903372049332
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 578,
            "y": 72,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.0013139783404767513,
            "Man": 99.99868774414062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1655936986207962,
            "indian": 10.953434944152832,
            "black": 0.5040130019187927,
            "white": 7.313449382781982,
            "middle eastern": 72.39571380615234,
            "latino hispanic": 8.667799949645996
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 6.108800888061523,
            "disgust": 0.00016146127018146217,
            "fear": 2.4083197116851807,
            "happy": 0.4318717420101166,
            "sad": 14.344522476196289,
            "surprise": 0.0002599660656414926,
            "neutral": 76.70606231689453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 743,
            "y": 75,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.2495061159133911,
            "Man": 99.75050354003906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.05348028615117073,
            "indian": 0.3665083646774292,
            "black": 0.0120704909786582,
            "white": 86.45936584472656,
            "middle eastern": 7.888417720794678,
            "latino hispanic": 5.220157146453857
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.008506891317665577,
            "disgust": 4.0671571355233027e-07,
            "fear": 0.0002247527736471966,
            "happy": 99.5159912109375,
            "sad": 0.04136253893375397,
            "surprise": 0.0009251891169697046,
            "neutral": 0.43299683928489685
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 350,
            "y": 113,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0033777854405343533,
            "Man": 99.99662780761719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.807525634765625,
            "indian": 10.256492614746094,
            "black": 3.004570960998535,
            "white": 22.51327133178711,
            "middle eastern": 33.84978103637695,
            "latino hispanic": 25.568363189697266
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 3.625125464168377e-05,
            "disgust": 2.288719880283452e-09,
            "fear": 0.0007770701195113361,
            "happy": 99.07324981689453,
            "sad": 0.00013611519534606487,
            "surprise": 0.0684819370508194,
            "neutral": 0.8573248386383057
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 679,
            "y": 103,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 95.52345275878906,
            "Man": 4.4765400886535645
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.5585074424743652,
            "indian": 2.94152569770813,
            "black": 0.602057695388794,
            "white": 46.374576568603516,
            "middle eastern": 20.316635131835938,
            "latino hispanic": 27.206697463989258
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.6245990653327453e-09,
            "disgust": 9.962275438735497e-18,
            "fear": 1.2129756834372563e-12,
            "happy": 99.75909423828125,
            "sad": 1.5150433227972826e-06,
            "surprise": 4.9211728025966295e-09,
            "neutral": 0.2409057319164276
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 123,
            "y": 131,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 98.00430297851562,
            "Man": 1.995694875717163
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 98.8677978515625,
            "indian": 0.25812453031539917,
            "black": 0.004136184696108103,
            "white": 0.09313274174928665,
            "middle eastern": 0.0021397978998720646,
            "latino hispanic": 0.7746698260307312
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0016370778903365135,
            "disgust": 8.589064748321107e-08,
            "fear": 0.0005813731113448739,
            "happy": 87.22382354736328,
            "sad": 0.0049311211332678795,
            "surprise": 0.09153420478105545,
            "neutral": 12.677495002746582
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 44,
        "region": {
            "x": 811,
            "y": 105,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.11916670203208923,
            "Man": 99.8808364868164
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.07999268919229507,
            "indian": 0.687605082988739,
            "black": 0.01755698397755623,
            "white": 65.57877349853516,
            "middle eastern": 25.961008071899414,
            "latino hispanic": 7.675069808959961
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0018493705429136753,
            "disgust": 7.915507360678475e-09,
            "fear": 4.200237526674755e-06,
            "happy": 99.73263549804688,
            "sad": 0.0007970171282067895,
            "surprise": 0.03633907809853554,
            "neutral": 0.22836865484714508
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 603,
            "y": 222,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 24.305442810058594,
            "Man": 75.69454956054688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0027492083609104156,
            "indian": 0.000532439153175801,
            "black": 7.489578365493799e-06,
            "white": 99.36754608154297,
            "middle eastern": 0.35644662380218506,
            "latino hispanic": 0.2727150619029999
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0003070892416872084,
            "disgust": 2.4235586870702264e-09,
            "fear": 7.034334430500166e-07,
            "happy": 98.629150390625,
            "sad": 0.0017759992042556405,
            "surprise": 0.00021685034153051674,
            "neutral": 1.368553876876831
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 187,
            "y": 298,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 6.656996250152588,
            "Man": 93.34300994873047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.1365435123443604,
            "indian": 1.4039480686187744,
            "black": 0.08661337941884995,
            "white": 63.94926834106445,
            "middle eastern": 16.623214721679688,
            "latino hispanic": 16.8004093170166
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.9927950789860915e-06,
            "disgust": 1.1341258661368148e-11,
            "fear": 1.6361822190447128e-06,
            "happy": 99.91792297363281,
            "sad": 0.006130186375230551,
            "surprise": 2.3256657186720986e-06,
            "neutral": 0.07594466954469681
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 484,
            "y": 86,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.02583433873951435,
            "Man": 99.97415924072266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3546020984649658,
            "indian": 13.925378799438477,
            "black": 0.9808753132820129,
            "white": 13.90848159790039,
            "middle eastern": 50.73986053466797,
            "latino hispanic": 19.09080696105957
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.04062690585851669,
            "disgust": 0.0018968270160257816,
            "fear": 0.1328139752149582,
            "happy": 90.90367889404297,
            "sad": 7.945192813873291,
            "surprise": 0.05497108772397041,
            "neutral": 0.9208149909973145
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 739,
            "y": 229,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.72412872314453,
            "Man": 0.2758710980415344
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 55.47372055053711,
            "indian": 13.33775806427002,
            "black": 3.9467031955718994,
            "white": 7.530622482299805,
            "middle eastern": 2.5233139991760254,
            "latino hispanic": 17.187883377075195
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0005100105772726238,
            "disgust": 2.654074080510327e-07,
            "fear": 0.00011117319809272885,
            "happy": 96.3651123046875,
            "sad": 0.008346650749444962,
            "surprise": 0.3223458230495453,
            "neutral": 3.303576707839966
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 908,
            "y": 105,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.08074589818716049,
            "Man": 99.91925048828125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.025651894509792328,
            "indian": 0.0188880767673254,
            "black": 0.0005155906546860933,
            "white": 96.23875427246094,
            "middle eastern": 1.7557504177093506,
            "latino hispanic": 1.9604387283325195
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.05783902853727341,
            "disgust": 2.2619153696723515e-06,
            "fear": 0.002089895075187087,
            "happy": 96.0426254272461,
            "sad": 3.5888006687164307,
            "surprise": 0.00029364018701016903,
            "neutral": 0.30835437774658203
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 351,
            "y": 335,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.89270782470703,
            "Man": 0.10729566216468811
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.4536869525909424,
            "indian": 0.3996313810348511,
            "black": 99.02997589111328,
            "white": 0.0016122962115332484,
            "middle eastern": 0.00026125251315534115,
            "latino hispanic": 0.11484155058860779
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.7230746379937045e-05,
            "disgust": 1.4529043523836549e-09,
            "fear": 0.0017885371344164014,
            "happy": 70.12437438964844,
            "sad": 0.01072915643453598,
            "surprise": 0.05272620916366577,
            "neutral": 29.81036376953125
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 234,
            "y": 186,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 74.08204650878906,
            "Man": 25.917949676513672
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.53765676158946e-06,
            "indian": 1.1464037470432231e-06,
            "black": 4.08937150808697e-09,
            "white": 99.9848403930664,
            "middle eastern": 0.010713096708059311,
            "latino hispanic": 0.004439466167241335
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.699404847016922e-08,
            "disgust": 1.4922898086295195e-16,
            "fear": 1.26520932619556e-10,
            "happy": 99.9686279296875,
            "sad": 1.7587376532901544e-07,
            "surprise": 1.2848579089563827e-08,
            "neutral": 0.031380847096443176
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 47,
        "region": {
            "x": 884,
            "y": 301,
            "w": 79,
            "h": 79,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 86.25067138671875,
            "Man": 13.749329566955566
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 49.667232513427734,
            "indian": 13.182997703552246,
            "black": 13.09057903289795,
            "white": 2.4378669261932373,
            "middle eastern": 1.2476986646652222,
            "latino hispanic": 20.373626708984375
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.6276219487190247,
            "disgust": 7.784340414218605e-05,
            "fear": 0.15557074546813965,
            "happy": 80.03099822998047,
            "sad": 12.301664352416992,
            "surprise": 0.05106207728385925,
            "neutral": 6.8330078125
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 493,
            "y": 304,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0004941770457662642,
            "Man": 99.99951171875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.21520058810710907,
            "indian": 3.5272202491760254,
            "black": 0.13396017253398895,
            "white": 29.366371154785156,
            "middle eastern": 55.07809066772461,
            "latino hispanic": 11.679158210754395
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.03947630524635315,
            "disgust": 2.2762919797969516e-06,
            "fear": 0.2785891890525818,
            "happy": 97.00951385498047,
            "sad": 1.8013871908187866,
            "surprise": 0.0034286731388419867,
            "neutral": 0.8676012754440308
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 661,
            "y": 337,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 1.4134860038757324,
            "Man": 98.58650970458984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.05937856808304787,
            "indian": 0.05490083619952202,
            "black": 0.003388046519830823,
            "white": 90.04840087890625,
            "middle eastern": 4.887320041656494,
            "latino hispanic": 4.946619987487793
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.573144542519003e-05,
            "disgust": 1.7905831484199553e-08,
            "fear": 0.00017864792607724667,
            "happy": 99.91364288330078,
            "sad": 0.02420222759246826,
            "surprise": 6.814544758526608e-05,
            "neutral": 0.061866600066423416
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 790,
            "y": 485,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.021087441593408585,
            "Man": 99.97891998291016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 56.96187210083008,
            "indian": 8.265132904052734,
            "black": 3.425246238708496,
            "white": 7.493525981903076,
            "middle eastern": 2.417031764984131,
            "latino hispanic": 21.43718719482422
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.055077094584703445,
            "disgust": 9.135075742960908e-06,
            "fear": 0.9317178726196289,
            "happy": 65.64867401123047,
            "sad": 0.43837496638298035,
            "surprise": 0.6919705271720886,
            "neutral": 32.234188079833984
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 435,
            "y": 503,
            "w": 80,
            "h": 80,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.03178025782108307,
            "Man": 99.96821594238281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 14.760927200317383,
            "indian": 15.493560791015625,
            "black": 7.416128158569336,
            "white": 14.475801467895508,
            "middle eastern": 14.066957473754883,
            "latino hispanic": 33.78662872314453
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.008765221573412418,
            "disgust": 2.7723358471121173e-06,
            "fear": 0.06377658993005753,
            "happy": 86.86947631835938,
            "sad": 0.17917777597904205,
            "surprise": 0.10633319616317749,
            "neutral": 12.772461891174316
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 599,
            "y": 499,
            "w": 82,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.1286734789609909,
            "Man": 99.87132263183594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.014955064281821251,
            "indian": 8.563379287719727,
            "black": 0.015627460554242134,
            "white": 17.72382926940918,
            "middle eastern": 65.33621215820312,
            "latino hispanic": 8.345993995666504
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.03584297001361847,
            "disgust": 1.6552252191104344e-06,
            "fear": 0.06569390743970871,
            "happy": 58.631019592285156,
            "sad": 0.502370297908783,
            "surprise": 0.38293689489364624,
            "neutral": 40.38213348388672
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 93,
            "y": 509,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 3.66471529006958,
            "Man": 96.33528900146484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 94.55255126953125,
            "indian": 1.4003043174743652,
            "black": 0.38746213912963867,
            "white": 0.15200687944889069,
            "middle eastern": 0.006984025239944458,
            "latino hispanic": 3.500685930252075
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.808381331462442e-09,
            "disgust": 5.170469104541541e-16,
            "fear": 2.4155255573532486e-07,
            "happy": 99.99824523925781,
            "sad": 2.456036440889875e-07,
            "surprise": 1.7110600310843438e-05,
            "neutral": 0.0017389686545357108
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 301,
            "y": 465,
            "w": 79,
            "h": 79,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0010070118587464094,
            "Man": 99.9990005493164
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 42.68381881713867,
            "indian": 10.581287384033203,
            "black": 4.4293107986450195,
            "white": 10.08644962310791,
            "middle eastern": 6.285717487335205,
            "latino hispanic": 25.93341827392578
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.1806793054347509e-06,
            "disgust": 4.797664869549134e-12,
            "fear": 6.670574492773085e-08,
            "happy": 99.95063018798828,
            "sad": 4.568537406157702e-07,
            "surprise": 2.8952683805982815e-06,
            "neutral": 0.049368780106306076
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 381,
            "y": 960,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 7.877274036407471,
            "Man": 92.12272644042969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 82.66976165771484,
            "indian": 0.154756560921669,
            "black": 0.08208063989877701,
            "white": 14.990123748779297,
            "middle eastern": 1.2243167161941528,
            "latino hispanic": 0.8789581060409546
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0401177778840065,
            "disgust": 6.713671289602784e-22,
            "fear": 5.316547305482186e-14,
            "happy": 0.055703677237033844,
            "sad": 2.336483339604456e-05,
            "surprise": 7.586999840009876e-17,
            "neutral": 99.90415954589844
        },
        "dominant_emotion": "neutral"
    }
]
let floral_design_data4 = [
    {
        "age": 29,
        "region": {
            "x": 538,
            "y": 134,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0794481709599495,
            "Man": 99.9205551147461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.08061792870285e-06,
            "indian": 0.001369982142932713,
            "black": 99.99827575683594,
            "white": 5.872830755038194e-08,
            "middle eastern": 1.2073317634531122e-07,
            "latino hispanic": 0.0003440042492002249
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.1844661682844162,
            "disgust": 6.351919182634447e-06,
            "fear": 1.143715262413025,
            "happy": 92.27506256103516,
            "sad": 0.40863558650016785,
            "surprise": 0.2839057445526123,
            "neutral": 5.70421028137207
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 820,
            "y": 141,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.02546538971364498,
            "Man": 99.97453308105469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00016827874060254544,
            "indian": 0.0005386892589740455,
            "black": 3.2403461318608606e-06,
            "white": 98.4515380859375,
            "middle eastern": 0.8513134717941284,
            "latino hispanic": 0.6964266300201416
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.745926625495997e-09,
            "disgust": 2.9760954756151005e-21,
            "fear": 6.931908423191222e-15,
            "happy": 99.99980926513672,
            "sad": 5.363982591433114e-09,
            "surprise": 8.551027182342186e-13,
            "neutral": 0.00018913317762780935
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 45,
        "region": {
            "x": 429,
            "y": 155,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.020154152065515518,
            "Man": 99.97985076904297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.198009014129639,
            "indian": 5.255011081695557,
            "black": 2.048887252807617,
            "white": 37.93232727050781,
            "middle eastern": 25.39124870300293,
            "latino hispanic": 25.17451286315918
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.16531431674957275,
            "disgust": 6.771392236259999e-06,
            "fear": 0.10210885852575302,
            "happy": 99.6221694946289,
            "sad": 0.008355546742677689,
            "surprise": 1.9953226910729427e-06,
            "neutral": 0.10204704105854034
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 691,
            "y": 168,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.18717193603516,
            "Man": 0.8128318190574646
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 33.364830017089844,
            "indian": 11.011841773986816,
            "black": 17.147912979125977,
            "white": 9.889859199523926,
            "middle eastern": 7.737907409667969,
            "latino hispanic": 20.847644805908203
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 6.114362622611225e-05,
            "disgust": 1.2641521163203606e-09,
            "fear": 2.2712900715760043e-07,
            "happy": 85.90779876708984,
            "sad": 0.0004119493532925844,
            "surprise": 0.0004936589393764734,
            "neutral": 14.091235160827637
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 19,
            "y": 206,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.000684168713632971,
            "Man": 99.99932098388672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00012639316264539957,
            "indian": 0.0062406170181930065,
            "black": 2.5007728254422545e-05,
            "white": 91.11915588378906,
            "middle eastern": 7.82170295715332,
            "latino hispanic": 1.0527583360671997
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.64143657963723e-06,
            "disgust": 4.245682472259205e-09,
            "fear": 7.3152837103407364e-06,
            "happy": 99.9502944946289,
            "sad": 0.019606413319706917,
            "surprise": 3.845794793733148e-08,
            "neutral": 0.030085578560829163
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 408,
            "y": 248,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.11715590953826904,
            "Man": 99.88285064697266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.6250952482223511,
            "indian": 1.151140570640564,
            "black": 0.09768268465995789,
            "white": 59.94404983520508,
            "middle eastern": 22.876604080200195,
            "latino hispanic": 15.30543041229248
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.14863163232803345,
            "disgust": 0.00020004526595585048,
            "fear": 22.873668670654297,
            "happy": 62.20740509033203,
            "sad": 14.236539840698242,
            "surprise": 7.10490348865278e-05,
            "neutral": 0.5334780812263489
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 649,
            "y": 246,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.2808176279067993,
            "Man": 99.71918487548828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.46615922451019287,
            "indian": 1.6096296310424805,
            "black": 0.13959738612174988,
            "white": 55.956024169921875,
            "middle eastern": 22.00526237487793,
            "latino hispanic": 19.82332992553711
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6649531744405976e-06,
            "disgust": 7.093213169606649e-12,
            "fear": 3.50381590408233e-08,
            "happy": 94.56053161621094,
            "sad": 3.1461349863093346e-05,
            "surprise": 6.264105650188867e-06,
            "neutral": 5.439434051513672
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 298,
            "y": 172,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.5290244221687317,
            "Man": 99.4709701538086
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.7109920236180187e-06,
            "indian": 0.0004846546798944473,
            "black": 99.99947357177734,
            "white": 5.993164187145794e-09,
            "middle eastern": 1.4922669322459114e-08,
            "latino hispanic": 3.5693123209057376e-05
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.20178872346878052,
            "disgust": 3.25952509427907e-09,
            "fear": 0.0004720455617643893,
            "happy": 99.78811645507812,
            "sad": 0.008521299809217453,
            "surprise": 0.00045351951848715544,
            "neutral": 0.0006459695287048817
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 785,
            "y": 265,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.79369354248047,
            "Man": 0.20630863308906555
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 92.51331329345703,
            "indian": 0.15786972641944885,
            "black": 0.015891872346401215,
            "white": 4.482705116271973,
            "middle eastern": 0.11749588698148727,
            "latino hispanic": 2.7127256393432617
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.6577520745595393e-07,
            "disgust": 6.666134387111472e-14,
            "fear": 1.4097329970041983e-09,
            "happy": 91.87297058105469,
            "sad": 0.00022191304014995694,
            "surprise": 4.6749937610002235e-06,
            "neutral": 8.12680435180664
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 152,
            "y": 271,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 90.86643981933594,
            "Man": 9.133563041687012
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.2083197385072708,
            "indian": 0.08328185230493546,
            "black": 0.007611056789755821,
            "white": 89.16321563720703,
            "middle eastern": 4.950433731079102,
            "latino hispanic": 5.587132930755615
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.395078035516867e-12,
            "disgust": 7.46936317637626e-18,
            "fear": 5.296628587114771e-12,
            "happy": 99.99176025390625,
            "sad": 1.132388227631509e-08,
            "surprise": 1.3247661301285518e-10,
            "neutral": 0.00824528094381094
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 933,
            "y": 286,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 10.099870681762695,
            "Man": 89.90013122558594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.11259196698665619,
            "indian": 0.00547380093485117,
            "black": 0.0001488400303060189,
            "white": 97.09603118896484,
            "middle eastern": 1.1780213117599487,
            "latino hispanic": 1.6077330112457275
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0023884486872702837,
            "disgust": 4.491451481569708e-12,
            "fear": 3.382065472123941e-08,
            "happy": 99.97264862060547,
            "sad": 4.274881212040782e-05,
            "surprise": 7.137949953328615e-11,
            "neutral": 0.02491915039718151
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 45,
        "region": {
            "x": 274,
            "y": 378,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.6949137449264526,
            "Man": 98.30509185791016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3459015235639527e-07,
            "indian": 7.872440619394183e-07,
            "black": 4.792798380393037e-10,
            "white": 99.97320556640625,
            "middle eastern": 0.016325755044817924,
            "latino hispanic": 0.010467732325196266
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.516298834758345e-05,
            "disgust": 1.6770941968502484e-08,
            "fear": 0.0002727598766796291,
            "happy": 98.33618927001953,
            "sad": 0.00219776201993227,
            "surprise": 0.00016953269368968904,
            "neutral": 1.6611521244049072
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 500,
            "y": 349,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 18.55179214477539,
            "Man": 81.44820404052734
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 98.60585021972656,
            "indian": 0.27462154626846313,
            "black": 0.002034953096881509,
            "white": 0.03528250381350517,
            "middle eastern": 0.00023835670435801148,
            "latino hispanic": 1.081977128982544
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.002545073628425598,
            "disgust": 2.3529919679354805e-10,
            "fear": 7.675647793803364e-05,
            "happy": 0.00038771243998780847,
            "sad": 0.002948195207864046,
            "surprise": 0.25349918007850647,
            "neutral": 99.74054718017578
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 668,
            "y": 406,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.62096405029297,
            "Man": 0.3790348172187805
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.017141355201601982,
            "indian": 0.1315559297800064,
            "black": 0.0016639394452795386,
            "white": 79.5496826171875,
            "middle eastern": 13.691399574279785,
            "latino hispanic": 6.60855770111084
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.4673656956176728e-08,
            "disgust": 1.7124866111801156e-16,
            "fear": 8.970542949952864e-13,
            "happy": 99.99993896484375,
            "sad": 2.59253920376068e-06,
            "surprise": 1.6350702259151917e-12,
            "neutral": 5.8600358897820115e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 114,
            "y": 377,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99243927001953,
            "Man": 0.0075614554807543755
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 79.43124389648438,
            "indian": 6.8681640625,
            "black": 0.9024969339370728,
            "white": 1.500246524810791,
            "middle eastern": 0.12084680795669556,
            "latino hispanic": 11.176990509033203
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 8.466908184345812e-05,
            "disgust": 7.433624826802543e-09,
            "fear": 5.4903248383197933e-05,
            "happy": 92.90031433105469,
            "sad": 0.002917709294706583,
            "surprise": 0.00040844801696948707,
            "neutral": 7.09622049331665
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 846,
            "y": 385,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.91342163085938,
            "Man": 0.08657317608594894
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.9095232486724854,
            "indian": 2.5521016120910645,
            "black": 0.8173444867134094,
            "white": 52.66519546508789,
            "middle eastern": 18.84321403503418,
            "latino hispanic": 21.212614059448242
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.001607684651389718,
            "disgust": 5.580431050589141e-08,
            "fear": 5.623207471217029e-06,
            "happy": 99.92720031738281,
            "sad": 0.015492473728954792,
            "surprise": 1.391777686876594e-06,
            "neutral": 0.0556846559047699
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 216,
            "y": 569,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 98.96913146972656,
            "Man": 1.0308693647384644
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.93412017822266,
            "indian": 0.030381154268980026,
            "black": 3.365329757798463e-05,
            "white": 0.003853744128718972,
            "middle eastern": 9.547735544401803e-07,
            "latino hispanic": 0.03161083906888962
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.50949741595241e-08,
            "disgust": 8.319758862960006e-14,
            "fear": 2.3812814831103424e-08,
            "happy": 89.46217346191406,
            "sad": 2.3370736016659066e-05,
            "surprise": 5.691947808372788e-05,
            "neutral": 10.537747383117676
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 721,
            "y": 573,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 9.927576065063477,
            "Man": 90.07242584228516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.014523976482450962,
            "indian": 0.09887390583753586,
            "black": 0.002442469820380211,
            "white": 82.8750228881836,
            "middle eastern": 11.762331008911133,
            "latino hispanic": 5.246801376342773
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.79318437770948e-10,
            "disgust": 1.2828681916102842e-16,
            "fear": 7.991547419476663e-13,
            "happy": 99.99161529541016,
            "sad": 3.170544289332611e-07,
            "surprise": 4.684395094045612e-10,
            "neutral": 0.008389262482523918
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 568,
            "y": 581,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 2.2682387828826904,
            "Man": 97.73175811767578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.027414949610829353,
            "indian": 0.027929918840527534,
            "black": 0.00048509586486034095,
            "white": 93.12047576904297,
            "middle eastern": 3.542065143585205,
            "latino hispanic": 3.281627893447876
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.053595042321831e-06,
            "disgust": 5.405848295045312e-13,
            "fear": 1.4192437447491102e-07,
            "happy": 87.302490234375,
            "sad": 0.0016371906967833638,
            "surprise": 1.0295572394625196e-07,
            "neutral": 12.695878982543945
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 37,
            "y": 562,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.01610306091606617,
            "Man": 99.98389434814453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0004891303251497447,
            "indian": 0.006743092089891434,
            "black": 3.577432653401047e-05,
            "white": 93.85447692871094,
            "middle eastern": 3.5543196201324463,
            "latino hispanic": 2.5839381217956543
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.001899402472190559,
            "disgust": 1.1312363490389998e-08,
            "fear": 0.00040195684414356947,
            "happy": 94.80227661132812,
            "sad": 0.013276802375912666,
            "surprise": 0.007476019207388163,
            "neutral": 5.174673557281494
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 391,
            "y": 561,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.30096179246902466,
            "Man": 99.69903564453125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.002663746941834688,
            "indian": 0.11837750673294067,
            "black": 0.0009649089188314974,
            "white": 65.13232421875,
            "middle eastern": 28.155109405517578,
            "latino hispanic": 6.59055757522583
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.50053870677948,
            "disgust": 2.3032150409108e-08,
            "fear": 0.012800805270671844,
            "happy": 42.927818298339844,
            "sad": 2.1591339111328125,
            "surprise": 0.06452441960573196,
            "neutral": 54.33518600463867
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 909,
            "y": 582,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 8.645561218261719,
            "Man": 91.35443878173828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.69588470458984,
            "indian": 0.04069071635603905,
            "black": 0.0012416507815942168,
            "white": 0.017300976440310478,
            "middle eastern": 5.851686364621855e-05,
            "latino hispanic": 0.2448188066482544
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.1419798582792282,
            "disgust": 0.0002915698569267988,
            "fear": 0.10219668596982956,
            "happy": 90.18865966796875,
            "sad": 6.526238441467285,
            "surprise": 0.2843237519264221,
            "neutral": 2.7563130855560303
        },
        "dominant_emotion": "happy"
    }
]

console.log("Microsoft Results for Floral Designer:");
const data = floral_design_data.concat(floral_design_data2, floral_design_data3, floral_design_data4);
console.log(processData(data));