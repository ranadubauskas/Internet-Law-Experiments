const { processData } = require('../../data_processing.js');

let kindergarten_teacher_data = [
    {
        "age": 25,
        "region": {
            "x": 1343,
            "y": 235,
            "w": 30,
            "h": 30,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 27.695178985595703,
            "Man": 72.30482482910156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.542564868927002,
            "indian": 5.912154674530029,
            "black": 2.1333107948303223,
            "white": 42.758174896240234,
            "middle eastern": 20.622644424438477,
            "latino hispanic": 23.031145095825195
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.005462307017296553,
            "disgust": 2.1704844144210256e-08,
            "fear": 2.963984966278076,
            "happy": 0.030291302129626274,
            "sad": 88.96607971191406,
            "surprise": 0.00012259204231668264,
            "neutral": 8.034053802490234
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 1110,
            "y": 244,
            "w": 30,
            "h": 30,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 28.83620834350586,
            "Man": 71.16378784179688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.594622611999512,
            "indian": 8.128398895263672,
            "black": 2.597602367401123,
            "white": 38.057613372802734,
            "middle eastern": 16.677356719970703,
            "latino hispanic": 20.944408416748047
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0017107533058151603,
            "disgust": 4.1155506736931247e-13,
            "fear": 0.8773801922798157,
            "happy": 0.007139542140066624,
            "sad": 98.4895248413086,
            "surprise": 8.771385040517998e-08,
            "neutral": 0.6242435574531555
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 1172,
            "y": 244,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 14.7440824508667,
            "Man": 85.25592041015625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.52706527709961,
            "indian": 5.535127639770508,
            "black": 4.0723466873168945,
            "white": 44.78857421875,
            "middle eastern": 18.136545181274414,
            "latino hispanic": 18.940343856811523
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.940536978712771e-05,
            "disgust": 1.884903566562457e-09,
            "fear": 0.12958171963691711,
            "happy": 99.31396484375,
            "sad": 0.31224682927131653,
            "surprise": 0.00020596352987922728,
            "neutral": 0.24396352469921112
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 413,
            "y": 248,
            "w": 30,
            "h": 30,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 68.23186492919922,
            "Man": 31.76813507080078
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.365020275115967,
            "indian": 4.8758392333984375,
            "black": 0.7175781726837158,
            "white": 37.751216888427734,
            "middle eastern": 31.462156295776367,
            "latino hispanic": 22.828195571899414
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.386738045373932e-06,
            "disgust": 1.974696850481905e-08,
            "fear": 0.05851141735911369,
            "happy": 99.26911926269531,
            "sad": 0.4888252317905426,
            "surprise": 0.0003284841659478843,
            "neutral": 0.18320870399475098
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 920,
            "y": 248,
            "w": 28,
            "h": 28,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 39.655670166015625,
            "Man": 60.344322204589844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.9318020343780518,
            "indian": 3.0069422721862793,
            "black": 2.1462879180908203,
            "white": 56.79731369018555,
            "middle eastern": 16.90764617919922,
            "latino hispanic": 19.21000862121582
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0004673050716519356,
            "disgust": 2.1982162184269738e-12,
            "fear": 39.342491149902344,
            "happy": 0.41305917501449585,
            "sad": 47.536014556884766,
            "surprise": 0.0007590298191644251,
            "neutral": 12.707208633422852
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 1495,
            "y": 250,
            "w": 28,
            "h": 28,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 43.98908233642578,
            "Man": 56.01091384887695
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.235825538635254,
            "indian": 10.879024505615234,
            "black": 16.604448318481445,
            "white": 24.084028244018555,
            "middle eastern": 20.087100982666016,
            "latino hispanic": 18.109569549560547
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0029174184892326593,
            "disgust": 1.6506832359319823e-11,
            "fear": 32.4855842590332,
            "happy": 0.42025333642959595,
            "sad": 66.63419342041016,
            "surprise": 6.949216640350642e-06,
            "neutral": 0.4570489823818207
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 813,
            "y": 240,
            "w": 30,
            "h": 30,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 10.367644309997559,
            "Man": 89.63235473632812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.057578086853027,
            "indian": 16.025806427001953,
            "black": 7.911911487579346,
            "white": 22.52018928527832,
            "middle eastern": 24.436466217041016,
            "latino hispanic": 20.04804229736328
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.065243661403656,
            "disgust": 1.176522212986697e-09,
            "fear": 8.550775527954102,
            "happy": 0.025299128144979477,
            "sad": 41.94977951049805,
            "surprise": 0.0008051393087953329,
            "neutral": 49.40810012817383
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 972,
            "y": 238,
            "w": 29,
            "h": 29,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 22.347801208496094,
            "Man": 77.65219116210938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.4922561645507812,
            "indian": 1.4404088258743286,
            "black": 1.6013939380645752,
            "white": 66.13921356201172,
            "middle eastern": 14.274309158325195,
            "latino hispanic": 15.052419662475586
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0006383297150023282,
            "disgust": 5.277868767028515e-11,
            "fear": 5.870635986328125,
            "happy": 0.0006404175073839724,
            "sad": 93.95138549804688,
            "surprise": 5.940923074376769e-06,
            "neutral": 0.17668528854846954
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 26,
        "region": {
            "x": 1230,
            "y": 250,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 56.4254035949707,
            "Man": 43.5745964050293
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 12.856234550476074,
            "indian": 12.472354888916016,
            "black": 14.129359245300293,
            "white": 21.68103790283203,
            "middle eastern": 18.630598068237305,
            "latino hispanic": 20.23042106628418
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.002133486559614539,
            "disgust": 1.0137248409591848e-06,
            "fear": 15.163156509399414,
            "happy": 0.1697215735912323,
            "sad": 84.31627655029297,
            "surprise": 0.00021449691848829389,
            "neutral": 0.34850186109542847
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 30,
        "region": {
            "x": 512,
            "y": 240,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 62.444732666015625,
            "Man": 37.55526351928711
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 9.899008750915527,
            "indian": 15.121999740600586,
            "black": 19.19353675842285,
            "white": 18.641754150390625,
            "middle eastern": 16.238380432128906,
            "latino hispanic": 20.905317306518555
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.3170692909625359e-05,
            "disgust": 4.29530272461065e-10,
            "fear": 2.068392753601074,
            "happy": 0.7365346550941467,
            "sad": 96.36856079101562,
            "surprise": 1.0488961379451212e-05,
            "neutral": 0.8264844417572021
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 26,
        "region": {
            "x": 1422,
            "y": 248,
            "w": 32,
            "h": 32,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 53.174407958984375,
            "Man": 46.82559585571289
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.1039124727249146,
            "indian": 3.3990237712860107,
            "black": 0.716183066368103,
            "white": 56.72126770019531,
            "middle eastern": 20.519691467285156,
            "latino hispanic": 17.539920806884766
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.8201246803073445e-06,
            "disgust": 5.0731142377247185e-12,
            "fear": 5.0740811275318265e-05,
            "happy": 99.95629119873047,
            "sad": 0.0010209667962044477,
            "surprise": 3.88003172702156e-07,
            "neutral": 0.04264099523425102
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 709,
            "y": 241,
            "w": 30,
            "h": 30,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 21.717449188232422,
            "Man": 78.28255462646484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.132218599319458,
            "indian": 0.6431294679641724,
            "black": 0.27490493655204773,
            "white": 76.96104431152344,
            "middle eastern": 10.944374084472656,
            "latino hispanic": 9.044337272644043
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.270558853633702e-05,
            "disgust": 1.8599219386850052e-11,
            "fear": 1.4224750995635986,
            "happy": 0.002675748197361827,
            "sad": 97.70405578613281,
            "surprise": 8.446918542404092e-08,
            "neutral": 0.8707232475280762
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 24,
        "region": {
            "x": 1031,
            "y": 243,
            "w": 30,
            "h": 30,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 18.368574142456055,
            "Man": 81.63143157958984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.339309692382812,
            "indian": 16.498287200927734,
            "black": 21.45402717590332,
            "white": 17.891584396362305,
            "middle eastern": 11.418119430541992,
            "latino hispanic": 21.39867401123047
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 3.467657006694935e-05,
            "disgust": 2.0946894392637194e-12,
            "fear": 23.024063110351562,
            "happy": 0.0034031886607408524,
            "sad": 76.7496337890625,
            "surprise": 2.5959700451494427e-06,
            "neutral": 0.22287432849407196
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 762,
            "y": 254,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 50.829071044921875,
            "Man": 49.17092514038086
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.31709733605384827,
            "indian": 0.9492008686065674,
            "black": 0.18036586046218872,
            "white": 75.16897583007812,
            "middle eastern": 13.317157745361328,
            "latino hispanic": 10.067205429077148
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0005174388643354177,
            "disgust": 1.5867762659382834e-10,
            "fear": 82.48295593261719,
            "happy": 0.7565416097640991,
            "sad": 15.523005485534668,
            "surprise": 0.006082247011363506,
            "neutral": 1.230900764465332
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 27,
        "region": {
            "x": 676,
            "y": 262,
            "w": 33,
            "h": 33,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 20.539518356323242,
            "Man": 79.46048736572266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3122555017471313,
            "indian": 2.0633649826049805,
            "black": 0.262118399143219,
            "white": 66.40668487548828,
            "middle eastern": 16.85629653930664,
            "latino hispanic": 13.09928035736084
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.6994424590375274e-06,
            "disgust": 1.4488464681466917e-14,
            "fear": 9.30218902794877e-06,
            "happy": 99.91064453125,
            "sad": 5.8147029449173715e-06,
            "surprise": 8.373027412744705e-06,
            "neutral": 0.08932828158140182
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 1293,
            "y": 265,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 14.789308547973633,
            "Man": 85.21068572998047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.695991516113281,
            "indian": 10.8945894241333,
            "black": 8.894432067871094,
            "white": 26.4414005279541,
            "middle eastern": 24.012636184692383,
            "latino hispanic": 23.060949325561523
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.735566901421407e-06,
            "disgust": 1.0863073635070108e-10,
            "fear": 0.007832959294319153,
            "happy": 99.88410186767578,
            "sad": 0.003337819827720523,
            "surprise": 0.0004755755653604865,
            "neutral": 0.10425178706645966
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 464,
            "y": 268,
            "w": 30,
            "h": 30,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 9.958361625671387,
            "Man": 90.04164123535156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.113741397857666,
            "indian": 6.304039478302002,
            "black": 1.3472959995269775,
            "white": 40.220645904541016,
            "middle eastern": 30.00751304626465,
            "latino hispanic": 19.00676155090332
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.276262421219144e-06,
            "disgust": 9.93939392596177e-12,
            "fear": 0.0013945194659754634,
            "happy": 98.5838623046875,
            "sad": 0.006416968069970608,
            "surprise": 0.00011714357970049605,
            "neutral": 1.4082121849060059
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 861,
            "y": 267,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 7.691681385040283,
            "Man": 92.30831909179688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.186089038848877,
            "indian": 8.855901718139648,
            "black": 16.402999877929688,
            "white": 30.536611557006836,
            "middle eastern": 20.17754364013672,
            "latino hispanic": 18.840858459472656
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0002946429594885558,
            "disgust": 2.332493920231826e-10,
            "fear": 0.5763572454452515,
            "happy": 98.9146728515625,
            "sad": 0.16065742075443268,
            "surprise": 0.0015453050145879388,
            "neutral": 0.3464765250682831
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 1055,
            "y": 273,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 11.15507984161377,
            "Man": 88.84492492675781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.0204429626464844,
            "indian": 1.5268527269363403,
            "black": 0.37114548683166504,
            "white": 68.0767822265625,
            "middle eastern": 17.574941635131836,
            "latino hispanic": 11.42983627319336
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0347038172185421,
            "disgust": 6.436640251195058e-05,
            "fear": 97.89839172363281,
            "happy": 0.17638346552848816,
            "sad": 1.8082748651504517,
            "surprise": 0.008106027729809284,
            "neutral": 0.07408241927623749
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 31,
        "region": {
            "x": 924,
            "y": 293,
            "w": 29,
            "h": 29,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 91.65052795410156,
            "Man": 8.349468231201172
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.980785369873047,
            "indian": 5.796757221221924,
            "black": 2.022520065307617,
            "white": 41.604896545410156,
            "middle eastern": 29.982803344726562,
            "latino hispanic": 16.612239837646484
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.000905311550013721,
            "disgust": 1.292894040716419e-07,
            "fear": 0.1596025824546814,
            "happy": 0.00011244622874073684,
            "sad": 99.83479309082031,
            "surprise": 6.400045293730727e-08,
            "neutral": 0.004573437850922346
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 1321,
            "y": 304,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 49.326759338378906,
            "Man": 50.673240661621094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.338363379240036,
            "indian": 0.46619170904159546,
            "black": 0.09440954029560089,
            "white": 83.73524475097656,
            "middle eastern": 7.8592529296875,
            "latino hispanic": 7.5065388679504395
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.017383482307195663,
            "disgust": 9.029727152665146e-06,
            "fear": 0.011472918093204498,
            "happy": 60.002197265625,
            "sad": 38.0882453918457,
            "surprise": 0.00010545564873609692,
            "neutral": 1.8805842399597168
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 884,
            "y": 326,
            "w": 29,
            "h": 29,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 59.671409606933594,
            "Man": 40.32859420776367
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.066946983337402,
            "indian": 12.537553787231445,
            "black": 4.3138227462768555,
            "white": 22.140947341918945,
            "middle eastern": 28.534912109375,
            "latino hispanic": 25.405818939208984
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.0603394002828281e-06,
            "disgust": 7.927413170349951e-10,
            "fear": 0.0005298018222674727,
            "happy": 99.99040222167969,
            "sad": 0.00870450772345066,
            "surprise": 2.3502670387642866e-07,
            "neutral": 0.0003609404375310987
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 994,
            "y": 297,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 95.12845611572266,
            "Man": 4.871547222137451
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.2131984531879425,
            "indian": 0.1679641455411911,
            "black": 0.025410478934645653,
            "white": 88.09374237060547,
            "middle eastern": 5.533008098602295,
            "latino hispanic": 5.966667175292969
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.01134628988802433,
            "disgust": 0.0003083526389673352,
            "fear": 0.0037742075510323048,
            "happy": 96.25175476074219,
            "sad": 0.08834641426801682,
            "surprise": 0.02813514694571495,
            "neutral": 3.6163337230682373
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 1244,
            "y": 296,
            "w": 32,
            "h": 32,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 26.608203887939453,
            "Man": 73.39179992675781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.8835280537605286,
            "indian": 0.4860498011112213,
            "black": 0.059713177382946014,
            "white": 78.51844787597656,
            "middle eastern": 10.559884071350098,
            "latino hispanic": 9.4923734664917
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.005029500927776098,
            "disgust": 0.0007713209488429129,
            "fear": 0.41185107827186584,
            "happy": 98.08988189697266,
            "sad": 1.0403380393981934,
            "surprise": 0.0007585014682263136,
            "neutral": 0.4513763189315796
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 785,
            "y": 298,
            "w": 30,
            "h": 30,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 28.997018814086914,
            "Man": 71.00297546386719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.4933747053146362,
            "indian": 2.730339765548706,
            "black": 0.84975266456604,
            "white": 53.773799896240234,
            "middle eastern": 19.5583438873291,
            "latino hispanic": 21.594392776489258
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00025856090360321105,
            "disgust": 1.8783559430080032e-10,
            "fear": 23.949811935424805,
            "happy": 28.21415901184082,
            "sad": 47.10213088989258,
            "surprise": 0.0005080517730675638,
            "neutral": 0.7331381440162659
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 352,
            "y": 312,
            "w": 32,
            "h": 32,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 3.4232184886932373,
            "Man": 96.5767822265625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 12.270663261413574,
            "indian": 1.4909911155700684,
            "black": 1.2148025035858154,
            "white": 57.54560852050781,
            "middle eastern": 8.533353805541992,
            "latino hispanic": 18.944583892822266
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6501870447882538e-07,
            "disgust": 5.4430591978071874e-11,
            "fear": 1.3383008081291337e-05,
            "happy": 99.94208526611328,
            "sad": 0.0016487430548295379,
            "surprise": 0.00035077062784694135,
            "neutral": 0.05590313673019409
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 453,
            "y": 312,
            "w": 37,
            "h": 37,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 85.32976531982422,
            "Man": 14.670233726501465
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.798616409301758,
            "indian": 6.370969772338867,
            "black": 0.6606741547584534,
            "white": 39.056209564208984,
            "middle eastern": 32.187164306640625,
            "latino hispanic": 18.926368713378906
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.240883200168355e-09,
            "disgust": 3.7578064439455425e-14,
            "fear": 8.274286500409289e-08,
            "happy": 99.98575592041016,
            "sad": 0.00015411559434141964,
            "surprise": 1.379211624907839e-07,
            "neutral": 0.014094979502260685
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 1347,
            "y": 333,
            "w": 33,
            "h": 33,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 10.367223739624023,
            "Man": 89.63278198242188
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.37539181113243103,
            "indian": 1.8674479722976685,
            "black": 0.22230646014213562,
            "white": 65.47499084472656,
            "middle eastern": 16.640827178955078,
            "latino hispanic": 15.41903018951416
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0006608209223486483,
            "disgust": 4.898289262200706e-05,
            "fear": 0.5272946953773499,
            "happy": 92.47698211669922,
            "sad": 0.5513911843299866,
            "surprise": 0.0035374381113797426,
            "neutral": 6.440093040466309
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 1109,
            "y": 302,
            "w": 32,
            "h": 32,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 80.76545715332031,
            "Man": 19.234540939331055
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.036393165588379,
            "indian": 6.567690849304199,
            "black": 1.1030977964401245,
            "white": 35.753326416015625,
            "middle eastern": 27.093910217285156,
            "latino hispanic": 24.44559097290039
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.000460241426480934,
            "disgust": 5.453458240545217e-10,
            "fear": 7.060427742544562e-05,
            "happy": 99.96504974365234,
            "sad": 0.009839128702878952,
            "surprise": 4.032688138977392e-06,
            "neutral": 0.02457689493894577
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 383,
            "y": 277,
            "w": 29,
            "h": 29,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 63.67886734008789,
            "Man": 36.321136474609375
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.878251552581787,
            "indian": 3.357954740524292,
            "black": 0.6601526141166687,
            "white": 53.9842414855957,
            "middle eastern": 18.40605354309082,
            "latino hispanic": 18.713348388671875
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00027987288194708526,
            "disgust": 6.08267672341789e-11,
            "fear": 0.7992549538612366,
            "happy": 0.9506280422210693,
            "sad": 96.76826477050781,
            "surprise": 0.0002699448959901929,
            "neutral": 1.4813028573989868
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 1362,
            "y": 278,
            "w": 27,
            "h": 27,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 28.296302795410156,
            "Man": 71.70369720458984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7075488567352295,
            "indian": 3.6123383045196533,
            "black": 2.159984827041626,
            "white": 50.55474090576172,
            "middle eastern": 21.470401763916016,
            "latino hispanic": 21.494983673095703
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.015941960737109184,
            "disgust": 1.3446550539697455e-08,
            "fear": 76.82534790039062,
            "happy": 0.14333432912826538,
            "sad": 21.459325790405273,
            "surprise": 0.003785467706620693,
            "neutral": 1.5522687435150146
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 27,
        "region": {
            "x": 1399,
            "y": 321,
            "w": 28,
            "h": 28,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 49.732051849365234,
            "Man": 50.267948150634766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 12.488442420959473,
            "indian": 8.397727966308594,
            "black": 2.757958173751831,
            "white": 28.067140579223633,
            "middle eastern": 20.560441970825195,
            "latino hispanic": 27.728290557861328
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.9486393032129854e-05,
            "disgust": 1.931926008058582e-10,
            "fear": 0.3438740670681,
            "happy": 98.61935424804688,
            "sad": 0.9476679563522339,
            "surprise": 2.5714127332321368e-05,
            "neutral": 0.08906125277280807
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 270,
            "y": 324,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 97.52766418457031,
            "Man": 2.47232985496521
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.069665908813477,
            "indian": 2.3156535625457764,
            "black": 0.3991867005825043,
            "white": 57.927574157714844,
            "middle eastern": 16.469377517700195,
            "latino hispanic": 16.818546295166016
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00035583865246735513,
            "disgust": 2.988689118410548e-07,
            "fear": 0.0022060174960643053,
            "happy": 99.93557739257812,
            "sad": 0.002485705306753516,
            "surprise": 0.00037680810783058405,
            "neutral": 0.05899855121970177
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 1462,
            "y": 278,
            "w": 40,
            "h": 40,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 39.85420227050781,
            "Man": 60.14580154418945
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.296922206878662,
            "indian": 1.702318787574768,
            "black": 0.24896475672721863,
            "white": 62.15616226196289,
            "middle eastern": 21.00095558166504,
            "latino hispanic": 13.594677925109863
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.6463719010353088,
            "disgust": 0.015369986183941364,
            "fear": 3.0777270793914795,
            "happy": 82.37403106689453,
            "sad": 0.7685616612434387,
            "surprise": 0.9127587080001831,
            "neutral": 12.205180168151855
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 612,
            "y": 322,
            "w": 35,
            "h": 35,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 2.2169647216796875,
            "Man": 97.78303527832031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.15159070491790771,
            "indian": 0.5256189703941345,
            "black": 0.022886598482728004,
            "white": 75.008544921875,
            "middle eastern": 15.242446899414062,
            "latino hispanic": 9.04891300201416
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.03213152661919594,
            "disgust": 0.00017529739125166088,
            "fear": 0.1164577305316925,
            "happy": 99.68267059326172,
            "sad": 0.056766461580991745,
            "surprise": 0.008834393694996834,
            "neutral": 0.10296573489904404
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 1180,
            "y": 306,
            "w": 34,
            "h": 34,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 79.16985321044922,
            "Man": 20.830150604248047
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.282683253288269,
            "indian": 1.042069435119629,
            "black": 0.3289097249507904,
            "white": 75.48363494873047,
            "middle eastern": 11.727887153625488,
            "latino hispanic": 10.134814262390137
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.1963970959186554,
            "disgust": 0.05761667713522911,
            "fear": 1.03485107421875,
            "happy": 59.46181869506836,
            "sad": 0.834225594997406,
            "surprise": 0.06317166984081268,
            "neutral": 38.3519172668457
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 1505,
            "y": 311,
            "w": 35,
            "h": 35,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 96.1074447631836,
            "Man": 3.892548084259033
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7547457218170166,
            "indian": 1.6743593215942383,
            "black": 0.14317400753498077,
            "white": 59.90315628051758,
            "middle eastern": 22.490886688232422,
            "latino hispanic": 15.033674240112305
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00027503876481205225,
            "disgust": 0.00012522026372607797,
            "fear": 0.006798829883337021,
            "happy": 99.06949615478516,
            "sad": 0.09301246702671051,
            "surprise": 0.005892162676900625,
            "neutral": 0.8244001269340515
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 1087,
            "y": 352,
            "w": 32,
            "h": 32,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 70.99211883544922,
            "Man": 29.007888793945312
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.29721856117248535,
            "indian": 0.89321368932724,
            "black": 0.059828199446201324,
            "white": 70.6860122680664,
            "middle eastern": 17.875307083129883,
            "latino hispanic": 10.188422203063965
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.007709223311394453,
            "disgust": 2.580927971340685e-10,
            "fear": 0.0003209451388102025,
            "happy": 99.7994155883789,
            "sad": 0.016905251890420914,
            "surprise": 3.2293999652210914e-07,
            "neutral": 0.17565466463565826
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 556,
            "y": 366,
            "w": 37,
            "h": 37,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.7120576500892639,
            "Man": 99.28794860839844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.741870880126953,
            "indian": 12.305646896362305,
            "black": 2.790178060531616,
            "white": 26.82172203063965,
            "middle eastern": 27.840787887573242,
            "latino hispanic": 24.49980354309082
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.0005395838525146246,
            "disgust": 4.799747799211218e-08,
            "fear": 0.0001334088301518932,
            "happy": 98.84054565429688,
            "sad": 0.003851517802104354,
            "surprise": 0.0012801331467926502,
            "neutral": 1.153642177581787
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 40,
        "region": {
            "x": 492,
            "y": 381,
            "w": 40,
            "h": 40,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.9991683959961,
            "Man": 0.0008287165546789765
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.19167311489582062,
            "indian": 0.44283536076545715,
            "black": 0.023852409794926643,
            "white": 70.44461822509766,
            "middle eastern": 13.81584358215332,
            "latino hispanic": 15.081174850463867
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.445162803927815e-07,
            "disgust": 8.207198809451199e-10,
            "fear": 0.00011691316467477009,
            "happy": 99.9983901977539,
            "sad": 7.236217788886279e-05,
            "surprise": 1.3290700735524297e-05,
            "neutral": 0.0014041300164535642
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 932,
            "y": 384,
            "w": 34,
            "h": 34,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 87.16046142578125,
            "Man": 12.839533805847168
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 11.33290958404541,
            "indian": 9.092851638793945,
            "black": 7.726113319396973,
            "white": 29.770172119140625,
            "middle eastern": 20.44343376159668,
            "latino hispanic": 21.634521484375
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.785377415028051e-07,
            "disgust": 3.9522451089624155e-08,
            "fear": 0.005136835388839245,
            "happy": 99.99373626708984,
            "sad": 2.9900433219154365e-05,
            "surprise": 2.7928842882829485e-06,
            "neutral": 0.0010954082245007157
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 1378,
            "y": 380,
            "w": 41,
            "h": 41,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 98.61998748779297,
            "Man": 1.3800206184387207
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.630326271057129,
            "indian": 3.4945461750030518,
            "black": 1.1243187189102173,
            "white": 45.12089538574219,
            "middle eastern": 16.980194091796875,
            "latino hispanic": 26.64971923828125
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0141422990272986e-06,
            "disgust": 6.133239749406272e-11,
            "fear": 1.9702011346817017,
            "happy": 97.9878158569336,
            "sad": 0.04197518154978752,
            "surprise": 1.0156211374123814e-06,
            "neutral": 7.21112792234635e-06
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 325,
            "y": 384,
            "w": 42,
            "h": 42,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 92.58748626708984,
            "Man": 7.412505149841309
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.7845091819763184,
            "indian": 5.848764896392822,
            "black": 0.45907488465309143,
            "white": 38.97688293457031,
            "middle eastern": 32.98830795288086,
            "latino hispanic": 19.94246482849121
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2145601431257091e-05,
            "disgust": 6.117012452122594e-10,
            "fear": 0.00016279563715215772,
            "happy": 99.99513244628906,
            "sad": 0.0015172942075878382,
            "surprise": 0.0006307680741883814,
            "neutral": 0.0025395893026143312
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 1214,
            "y": 390,
            "w": 34,
            "h": 34,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.1417763233184814,
            "Man": 98.85822296142578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.187324285507202,
            "indian": 5.152185916900635,
            "black": 1.59791100025177,
            "white": 40.891056060791016,
            "middle eastern": 25.08216667175293,
            "latino hispanic": 24.0893611907959
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0007217456004582345,
            "disgust": 2.861001746623515e-07,
            "fear": 0.003796318545937538,
            "happy": 99.70768737792969,
            "sad": 0.003596298163756728,
            "surprise": 0.021045081317424774,
            "neutral": 0.26315948367118835
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 188,
            "y": 389,
            "w": 42,
            "h": 42,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.83736419677734,
            "Man": 0.16263175010681152
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.7803568840026855,
            "indian": 2.9933319091796875,
            "black": 0.4659067392349243,
            "white": 53.572296142578125,
            "middle eastern": 14.059165954589844,
            "latino hispanic": 23.12894058227539
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.945660019352928e-11,
            "disgust": 5.981434330110569e-16,
            "fear": 8.588879052418008e-10,
            "happy": 99.98702239990234,
            "sad": 4.734160796715514e-08,
            "surprise": 2.2585384158446686e-06,
            "neutral": 0.012978456914424896
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 659,
            "y": 391,
            "w": 41,
            "h": 41,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 85.25751495361328,
            "Man": 14.742487907409668
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.1674108505249023,
            "indian": 1.950430154800415,
            "black": 0.2833895683288574,
            "white": 50.31446838378906,
            "middle eastern": 23.681201934814453,
            "latino hispanic": 22.60309410095215
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.0474062141556715e-09,
            "disgust": 1.2611632116237004e-13,
            "fear": 9.460305427921867e-09,
            "happy": 99.96737670898438,
            "sad": 1.1382760021660943e-05,
            "surprise": 7.356944843195379e-05,
            "neutral": 0.03253965079784393
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 752,
            "y": 392,
            "w": 42,
            "h": 42,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99974060058594,
            "Man": 0.0002643170882947743
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.3625434339046478,
            "indian": 1.9180828332901,
            "black": 0.16856178641319275,
            "white": 49.10183334350586,
            "middle eastern": 25.674537658691406,
            "latino hispanic": 22.774450302124023
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.012111282907426357,
            "disgust": 0.00010687435860745609,
            "fear": 2.210174798965454,
            "happy": 97.35830688476562,
            "sad": 0.0024216421879827976,
            "surprise": 0.17832349240779877,
            "neutral": 0.23855070769786835
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 842,
            "y": 393,
            "w": 39,
            "h": 39,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 2.204158306121826,
            "Man": 97.79583740234375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.545353889465332,
            "indian": 17.216121673583984,
            "black": 48.442359924316406,
            "white": 4.641003131866455,
            "middle eastern": 6.904581069946289,
            "latino hispanic": 18.250587463378906
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.63672575581586e-05,
            "disgust": 5.726247209736357e-08,
            "fear": 0.027631154283881187,
            "happy": 99.91436767578125,
            "sad": 0.01305417437106371,
            "surprise": 0.009730355814099312,
            "neutral": 0.035209186375141144
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 1019,
            "y": 368,
            "w": 40,
            "h": 40,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 97.8006820678711,
            "Man": 2.199317216873169
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.3024158477783203,
            "indian": 3.147585868835449,
            "black": 0.8284537196159363,
            "white": 46.3753547668457,
            "middle eastern": 17.774499893188477,
            "latino hispanic": 28.57169532775879
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0007526768604293466,
            "disgust": 0.00010473014845047146,
            "fear": 1.073997974395752,
            "happy": 98.2308349609375,
            "sad": 0.02586105838418007,
            "surprise": 0.006719292141497135,
            "neutral": 0.6617280840873718
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 411,
            "y": 378,
            "w": 35,
            "h": 35,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 98.44750213623047,
            "Man": 1.5525060892105103
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.3217073976993561,
            "indian": 0.20244082808494568,
            "black": 0.02487248368561268,
            "white": 84.37255096435547,
            "middle eastern": 5.869719505310059,
            "latino hispanic": 9.208709716796875
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0002795274485833943,
            "disgust": 3.996992958832379e-09,
            "fear": 0.0002166944759665057,
            "happy": 99.96988677978516,
            "sad": 0.008388870395720005,
            "surprise": 3.392439964500227e-07,
            "neutral": 0.021232133731245995
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 1125,
            "y": 380,
            "w": 36,
            "h": 36,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 44.4823112487793,
            "Man": 55.51769256591797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.193504333496094,
            "indian": 13.777804374694824,
            "black": 3.612577438354492,
            "white": 21.11651611328125,
            "middle eastern": 19.433008193969727,
            "latino hispanic": 32.86659240722656
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.201608850782577e-07,
            "disgust": 1.3360776374149452e-10,
            "fear": 0.001962417969480157,
            "happy": 99.99302673339844,
            "sad": 5.238449375610799e-06,
            "surprise": 0.00014198663120623678,
            "neutral": 0.004865097347646952
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 1446,
            "y": 379,
            "w": 37,
            "h": 37,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 98.95091247558594,
            "Man": 1.0490902662277222
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.92478609085083,
            "indian": 5.728649139404297,
            "black": 3.026442766189575,
            "white": 39.42634963989258,
            "middle eastern": 23.331937789916992,
            "latino hispanic": 25.561832427978516
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.094396561209578e-06,
            "disgust": 7.686604419632204e-08,
            "fear": 0.00015864930173847824,
            "happy": 99.83402252197266,
            "sad": 0.0030431745108217,
            "surprise": 0.0015532582765445113,
            "neutral": 0.1612086296081543
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 1540,
            "y": 377,
            "w": 39,
            "h": 39,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99952697753906,
            "Man": 0.0004810222890228033
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.5593132376670837,
            "indian": 0.6349607110023499,
            "black": 0.21152956783771515,
            "white": 61.65617752075195,
            "middle eastern": 8.683907508850098,
            "latino hispanic": 28.254106521606445
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.4591544034774415e-06,
            "disgust": 1.925542392200441e-09,
            "fear": 0.00682630343362689,
            "happy": 99.94326782226562,
            "sad": 0.0001320505834883079,
            "surprise": 0.024732371792197227,
            "neutral": 0.025041647255420685
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 577,
            "y": 414,
            "w": 38,
            "h": 38,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.9549789428711,
            "Man": 0.04502057284116745
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.9082444906234741,
            "indian": 0.09654892981052399,
            "black": 0.014222385361790657,
            "white": 83.00150299072266,
            "middle eastern": 5.080038070678711,
            "latino hispanic": 10.899446487426758
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.216849528253078e-05,
            "disgust": 7.02632064530917e-07,
            "fear": 2.871447941288352e-05,
            "happy": 94.81189727783203,
            "sad": 0.0009161695488728583,
            "surprise": 0.00018390774494037032,
            "neutral": 5.186886787414551
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 1302,
            "y": 404,
            "w": 41,
            "h": 41,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99642181396484,
            "Man": 0.0035757652949541807
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.6671167612075806,
            "indian": 1.69624924659729,
            "black": 0.4066738784313202,
            "white": 59.49770736694336,
            "middle eastern": 20.3038272857666,
            "latino hispanic": 16.42842674255371
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.13699837028980255,
            "disgust": 0.014379620552062988,
            "fear": 50.97335433959961,
            "happy": 4.266927242279053,
            "sad": 44.36674880981445,
            "surprise": 0.0002540598507039249,
            "neutral": 0.2413330376148224
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 31,
        "region": {
            "x": 1611,
            "y": 440,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.29214477539062,
            "Man": 0.7078640460968018
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7951023578643799,
            "indian": 2.908764600753784,
            "black": 0.3528294265270233,
            "white": 46.98722839355469,
            "middle eastern": 25.59950828552246,
            "latino hispanic": 23.356563568115234
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.655631326480389e-10,
            "disgust": 3.220184759757191e-18,
            "fear": 2.4542937127058906e-12,
            "happy": 100.0,
            "sad": 5.526464406102605e-07,
            "surprise": 3.841505585855387e-11,
            "neutral": 7.727085460373928e-08
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 1538,
            "y": 447,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.15381622314453,
            "Man": 0.8461859226226807
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.8748670816421509,
            "indian": 2.6229403018951416,
            "black": 0.3540855348110199,
            "white": 49.17360305786133,
            "middle eastern": 26.260175704956055,
            "latino hispanic": 20.714332580566406
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.706943180579401e-06,
            "disgust": 2.949633159249343e-12,
            "fear": 5.33837010152638e-07,
            "happy": 99.77424621582031,
            "sad": 5.791191142634489e-06,
            "surprise": 1.38615837386169e-06,
            "neutral": 0.2257472276687622
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 165,
            "y": 456,
            "w": 41,
            "h": 41,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 22.795406341552734,
            "Man": 77.20458984375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.422883987426758,
            "indian": 5.572937488555908,
            "black": 2.639662265777588,
            "white": 31.24866485595703,
            "middle eastern": 16.581539154052734,
            "latino hispanic": 35.5343132019043
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 4.521344578733988e-07,
            "disgust": 3.212946297903585e-10,
            "fear": 5.763993613072671e-06,
            "happy": 96.72444152832031,
            "sad": 0.00041405463707633317,
            "surprise": 0.00021213875152170658,
            "neutral": 3.2749288082122803
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 256,
            "y": 439,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99809265136719,
            "Man": 0.0019109154818579555
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.208762526512146,
            "indian": 1.3678323030471802,
            "black": 0.10635305941104889,
            "white": 62.38320541381836,
            "middle eastern": 19.808794021606445,
            "latino hispanic": 15.1250581741333
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.392705754696635e-09,
            "disgust": 1.440692270343602e-11,
            "fear": 4.807612185686594e-06,
            "happy": 99.96976470947266,
            "sad": 9.732110584081965e-07,
            "surprise": 1.231823171110591e-05,
            "neutral": 0.030208785086870193
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 122,
            "y": 468,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.62602996826172,
            "Man": 0.37397295236587524
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.6336560249328613,
            "indian": 1.4774465560913086,
            "black": 0.11996786296367645,
            "white": 58.27781677246094,
            "middle eastern": 18.750896453857422,
            "latino hispanic": 20.740215301513672
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.997635547927427e-12,
            "disgust": 4.380017470902748e-21,
            "fear": 1.0489456525597518e-12,
            "happy": 99.99983215332031,
            "sad": 3.837690928931714e-11,
            "surprise": 8.53034176628853e-09,
            "neutral": 0.00016882896306924522
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 702,
            "y": 471,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 3.2128233909606934,
            "Man": 96.78718566894531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.940058946609497,
            "indian": 8.626091003417969,
            "black": 1.8526010513305664,
            "white": 27.182388305664062,
            "middle eastern": 32.4195556640625,
            "latino hispanic": 25.979310989379883
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 3.653395833680406e-05,
            "disgust": 2.142132027316279e-09,
            "fear": 0.0021653480362147093,
            "happy": 98.76398468017578,
            "sad": 3.073942571063526e-05,
            "surprise": 0.1139935776591301,
            "neutral": 1.1197936534881592
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 795,
            "y": 473,
            "w": 41,
            "h": 41,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 96.58354949951172,
            "Man": 3.416449546813965
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.61419153213501,
            "indian": 3.9332549571990967,
            "black": 2.039868116378784,
            "white": 39.850677490234375,
            "middle eastern": 15.280448913574219,
            "latino hispanic": 33.281558990478516
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.4167823858546313e-10,
            "disgust": 1.8092892421614812e-16,
            "fear": 3.4854872321687935e-09,
            "happy": 99.99791717529297,
            "sad": 8.851653774399892e-07,
            "surprise": 4.707143261839519e-07,
            "neutral": 0.002083514118567109
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 1355,
            "y": 474,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 25.81975746154785,
            "Man": 74.18024444580078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.11982493847608566,
            "indian": 0.45762431621551514,
            "black": 0.033148109912872314,
            "white": 69.72118377685547,
            "middle eastern": 17.701255798339844,
            "latino hispanic": 11.966973304748535
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0001132365214289166,
            "disgust": 5.254895586404018e-05,
            "fear": 0.0003221541119273752,
            "happy": 99.6073989868164,
            "sad": 0.004415719769895077,
            "surprise": 1.781836908776313e-05,
            "neutral": 0.3876827657222748
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 43,
        "region": {
            "x": 377,
            "y": 479,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99996185302734,
            "Man": 3.864101745421067e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 13.942092895507812,
            "indian": 21.828262329101562,
            "black": 2.5773792266845703,
            "white": 22.11118507385254,
            "middle eastern": 16.940134048461914,
            "latino hispanic": 22.600948333740234
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.6391019652672867e-09,
            "disgust": 4.538741344567443e-13,
            "fear": 4.072848696523579e-06,
            "happy": 99.99964141845703,
            "sad": 1.0826480689729578e-07,
            "surprise": 1.7001425476337317e-06,
            "neutral": 0.00034899040474556386
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 979,
            "y": 481,
            "w": 37,
            "h": 37,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 94.05477905273438,
            "Man": 5.945217132568359
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.010560971684753895,
            "indian": 0.03020278550684452,
            "black": 0.0007184988353401423,
            "white": 90.7438735961914,
            "middle eastern": 5.757608413696289,
            "latino hispanic": 3.457038402557373
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2152797353337519e-05,
            "disgust": 1.1174180691853053e-08,
            "fear": 0.046182673424482346,
            "happy": 99.69918823242188,
            "sad": 0.0035349507816135883,
            "surprise": 0.0435575470328331,
            "neutral": 0.20752260088920593
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 1262,
            "y": 477,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99726867675781,
            "Man": 0.002725879428908229
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.031756639480591,
            "indian": 6.58648681640625,
            "black": 1.812274694442749,
            "white": 24.12035369873047,
            "middle eastern": 14.38156509399414,
            "latino hispanic": 50.067562103271484
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 8.775745463651674e-09,
            "disgust": 1.8215360860288077e-13,
            "fear": 3.1767459773845985e-09,
            "happy": 99.98915100097656,
            "sad": 4.1233246861338557e-07,
            "surprise": 1.1150247303248761e-07,
            "neutral": 0.010846703313291073
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 629,
            "y": 481,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.991943359375,
            "Man": 0.008053179830312729
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.9406256675720215,
            "indian": 2.6130714416503906,
            "black": 0.6015613675117493,
            "white": 44.774539947509766,
            "middle eastern": 11.974236488342285,
            "latino hispanic": 33.09596633911133
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.739629799743739e-10,
            "disgust": 5.247508694968759e-19,
            "fear": 4.948702905793745e-11,
            "happy": 99.99996185302734,
            "sad": 7.286807962580966e-11,
            "surprise": 1.3868310588804889e-07,
            "neutral": 4.352131873019971e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 880,
            "y": 480,
            "w": 43,
            "h": 43,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 94.1836929321289,
            "Man": 5.816304683685303
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.183587908744812,
            "indian": 0.8470407128334045,
            "black": 0.0880914032459259,
            "white": 68.91027069091797,
            "middle eastern": 16.496295928955078,
            "latino hispanic": 13.474713325500488
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00011804926180047914,
            "disgust": 3.3307596822851337e-06,
            "fear": 0.058394111692905426,
            "happy": 99.62146759033203,
            "sad": 0.0037964375223964453,
            "surprise": 0.05073614791035652,
            "neutral": 0.26548370718955994
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 1084,
            "y": 480,
            "w": 43,
            "h": 43,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.98905944824219,
            "Man": 0.01094308216124773
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.024771327152848244,
            "indian": 0.01564681902527809,
            "black": 0.0004219611582811922,
            "white": 92.19236755371094,
            "middle eastern": 2.11843204498291,
            "latino hispanic": 5.648367404937744
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.433849315115367e-06,
            "disgust": 6.250051143297242e-09,
            "fear": 0.0022517836187034845,
            "happy": 96.83919525146484,
            "sad": 0.00023128229076974094,
            "surprise": 0.0018352317856624722,
            "neutral": 3.156482696533203
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 1166,
            "y": 482,
            "w": 43,
            "h": 43,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99996185302734,
            "Man": 3.56054151779972e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.1244717612862587,
            "indian": 1.8809499740600586,
            "black": 0.10948251187801361,
            "white": 39.80276870727539,
            "middle eastern": 38.94181823730469,
            "latino hispanic": 19.140506744384766
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.847025724177058e-10,
            "disgust": 3.9963410862877205e-14,
            "fear": 1.895156698239475e-09,
            "happy": 99.99999237060547,
            "sad": 6.124759693193482e-06,
            "surprise": 6.312556271974301e-13,
            "neutral": 1.6747802646932541e-06
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 41,
        "region": {
            "x": 1443,
            "y": 482,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.97615051269531,
            "Man": 0.023852944374084473
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.44465941190719604,
            "indian": 1.1206669807434082,
            "black": 0.04852492734789848,
            "white": 56.617210388183594,
            "middle eastern": 25.0479736328125,
            "latino hispanic": 16.720962524414062
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.358033382028225e-06,
            "disgust": 7.336609542107908e-09,
            "fear": 0.0006444956525228918,
            "happy": 99.57960510253906,
            "sad": 0.0002121558500220999,
            "surprise": 0.00030358723597601056,
            "neutral": 0.41922837495803833
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 452,
            "y": 482,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.59306335449219,
            "Man": 0.4069420397281647
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.31415361166000366,
            "indian": 1.1898601055145264,
            "black": 0.26126977801322937,
            "white": 65.44580078125,
            "middle eastern": 11.63369083404541,
            "latino hispanic": 21.155223846435547
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.727560092871897e-10,
            "disgust": 1.2663919714180896e-15,
            "fear": 2.494252385076834e-06,
            "happy": 99.99935150146484,
            "sad": 5.421020521367836e-09,
            "surprise": 2.0661156668211333e-05,
            "neutral": 0.0006313501507975161
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 540,
            "y": 486,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.60317993164062,
            "Man": 0.39681723713874817
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.14020316302776337,
            "indian": 0.929766833782196,
            "black": 0.028910933062434196,
            "white": 62.7672004699707,
            "middle eastern": 22.252532958984375,
            "latino hispanic": 13.881386756896973
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.8965639583257143e-06,
            "disgust": 2.81741252550205e-09,
            "fear": 0.01346190832555294,
            "happy": 99.98214721679688,
            "sad": 6.365177341649542e-06,
            "surprise": 9.944361227098852e-05,
            "neutral": 0.004284173250198364
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 295,
            "y": 495,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99998474121094,
            "Man": 1.2374064681353047e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.144627571105957,
            "indian": 8.45833969116211,
            "black": 2.602064371109009,
            "white": 33.74637222290039,
            "middle eastern": 19.970373153686523,
            "latino hispanic": 29.07822036743164
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.385325716313673e-06,
            "disgust": 2.8178261946010252e-09,
            "fear": 1.4845405530650169e-05,
            "happy": 99.95830535888672,
            "sad": 0.02309400774538517,
            "surprise": 9.263577521778643e-05,
            "neutral": 0.018473954871296883
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 214,
            "y": 501,
            "w": 43,
            "h": 43,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 90.755859375,
            "Man": 9.244134902954102
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.50436544418335,
            "indian": 20.648117065429688,
            "black": 5.182548522949219,
            "white": 12.015715599060059,
            "middle eastern": 11.966728210449219,
            "latino hispanic": 42.68252182006836
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.520656738891347e-10,
            "disgust": 3.1989111946698202e-21,
            "fear": 1.4245602093787557e-11,
            "happy": 99.99993896484375,
            "sad": 7.372717752062927e-14,
            "surprise": 1.844092366809491e-06,
            "neutral": 6.247411511139944e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 731,
            "y": 563,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99989318847656,
            "Man": 0.0001053735104505904
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.9214119123821547e-08,
            "indian": 2.367510454348576e-08,
            "black": 7.038285926297405e-11,
            "white": 99.99018096923828,
            "middle eastern": 0.002047215588390827,
            "latino hispanic": 0.007771439850330353
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.7898517954209603e-12,
            "disgust": 1.0253857804082425e-23,
            "fear": 4.339323848399771e-16,
            "happy": 100.0,
            "sad": 3.762990285582739e-14,
            "surprise": 2.994803190159434e-12,
            "neutral": 1.376670070385444e-06
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 834,
            "y": 571,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99497985839844,
            "Man": 0.0050145345740020275
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.34654706716537476,
            "indian": 4.236508846282959,
            "black": 0.27429795265197754,
            "white": 29.130950927734375,
            "middle eastern": 39.27108383178711,
            "latino hispanic": 26.74061393737793
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.9844801499857567e-06,
            "disgust": 3.3851164094045316e-09,
            "fear": 0.013432583771646023,
            "happy": 99.9842758178711,
            "sad": 0.0018479360733181238,
            "surprise": 4.9723620776376265e-08,
            "neutral": 0.0004403715138323605
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 1043,
            "y": 567,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99894714355469,
            "Man": 0.0010469314875081182
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 9.4103364944458,
            "indian": 21.319425582885742,
            "black": 3.570592164993286,
            "white": 12.888726234436035,
            "middle eastern": 17.025615692138672,
            "latino hispanic": 35.785308837890625
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0002351196453673765,
            "disgust": 4.215820865738351e-07,
            "fear": 0.0030512071680277586,
            "happy": 99.71757507324219,
            "sad": 0.00015334703493863344,
            "surprise": 0.001078548957593739,
            "neutral": 0.27790558338165283
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 1266,
            "y": 568,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99254608154297,
            "Man": 0.007447514683008194
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0021043960005044937,
            "indian": 0.0004004538059234619,
            "black": 2.164884062949568e-05,
            "white": 99.85353088378906,
            "middle eastern": 0.0537891648709774,
            "latino hispanic": 0.09016209840774536
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.7881159780918097e-07,
            "disgust": 4.291024133240562e-12,
            "fear": 2.5253353669540957e-05,
            "happy": 99.98885345458984,
            "sad": 3.3229522955480206e-07,
            "surprise": 0.0010202499106526375,
            "neutral": 0.010111220180988312
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 937,
            "y": 575,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99996185302734,
            "Man": 3.2381401979364455e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.07494673877954483,
            "indian": 0.4106658101081848,
            "black": 0.01490606740117073,
            "white": 68.90048217773438,
            "middle eastern": 15.359033584594727,
            "latino hispanic": 15.239971160888672
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.9840171727736333e-09,
            "disgust": 1.7130668552187644e-15,
            "fear": 1.1919915721136931e-08,
            "happy": 99.99447631835938,
            "sad": 1.3125920794720969e-08,
            "surprise": 0.00012156130833318457,
            "neutral": 0.00540414173156023
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 1158,
            "y": 570,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99996185302734,
            "Man": 3.14609169436153e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.006765338592231274,
            "indian": 0.08276171237230301,
            "black": 0.001973482081666589,
            "white": 77.6756591796875,
            "middle eastern": 13.004264831542969,
            "latino hispanic": 9.2285795211792
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.6666038795374334e-05,
            "disgust": 8.394903971975509e-08,
            "fear": 0.0017794349696487188,
            "happy": 99.96163940429688,
            "sad": 0.0002833479084074497,
            "surprise": 2.4311970264534466e-05,
            "neutral": 0.03623821213841438
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 1374,
            "y": 574,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.9819107055664,
            "Man": 0.018098168075084686
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 16.636510848999023,
            "indian": 0.9150625467300415,
            "black": 0.07393234223127365,
            "white": 62.74126052856445,
            "middle eastern": 8.697944641113281,
            "latino hispanic": 10.935293197631836
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.937618890143991e-12,
            "disgust": 4.2213692377351925e-21,
            "fear": 3.490971888734512e-13,
            "happy": 99.97187042236328,
            "sad": 8.645852783706331e-11,
            "surprise": 1.2220452845213003e-06,
            "neutral": 0.02813299000263214
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 1509,
            "y": 575,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 46.676612854003906,
            "Man": 53.323387145996094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 28.09595489501953,
            "indian": 8.34463882446289,
            "black": 4.3876566886901855,
            "white": 15.305940628051758,
            "middle eastern": 7.7099761962890625,
            "latino hispanic": 36.15583419799805
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 4.7298822209995706e-06,
            "disgust": 2.2299675994652546e-10,
            "fear": 1.956976348083117e-06,
            "happy": 94.73597717285156,
            "sad": 0.0012116561410948634,
            "surprise": 0.00011770521086873487,
            "neutral": 5.262688159942627
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 431,
            "y": 575,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99876403808594,
            "Man": 0.0012389428447932005
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.7725188732147217,
            "indian": 2.533102512359619,
            "black": 0.2769262194633484,
            "white": 42.934513092041016,
            "middle eastern": 21.6666316986084,
            "latino hispanic": 30.816307067871094
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.1007995183891564e-16,
            "disgust": 3.7393243354500256e-27,
            "fear": 1.7196615096389515e-16,
            "happy": 99.99995422363281,
            "sad": 3.1842621817996424e-15,
            "surprise": 2.6417125323190127e-13,
            "neutral": 5.213953409111127e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 319,
            "y": 577,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 96.71289825439453,
            "Man": 3.2871055603027344
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.33028262853622437,
            "indian": 0.5886858105659485,
            "black": 0.007998310960829258,
            "white": 84.6623306274414,
            "middle eastern": 10.953042030334473,
            "latino hispanic": 3.4576668739318848
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.4710828111219598e-07,
            "disgust": 1.3729661862372177e-15,
            "fear": 1.036116614727689e-07,
            "happy": 99.99998474121094,
            "sad": 4.96349628065218e-08,
            "surprise": 3.014250523847295e-06,
            "neutral": 1.0631919394654687e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 40,
        "region": {
            "x": 644,
            "y": 579,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99982452392578,
            "Man": 0.00018447445472702384
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 20.78230857849121,
            "indian": 13.424121856689453,
            "black": 9.165249824523926,
            "white": 10.051172256469727,
            "middle eastern": 8.844803810119629,
            "latino hispanic": 37.73234939575195
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0009446245385333896,
            "disgust": 4.0895099573390326e-07,
            "fear": 0.0743907019495964,
            "happy": 99.90978240966797,
            "sad": 0.0001373345439787954,
            "surprise": 0.0017113146604970098,
            "neutral": 0.013031808659434319
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 204,
            "y": 584,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 36.891910552978516,
            "Man": 63.10809326171875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.261998176574707,
            "indian": 12.587150573730469,
            "black": 1.533737301826477,
            "white": 19.4130859375,
            "middle eastern": 36.758338928222656,
            "latino hispanic": 26.445690155029297
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 5.0908371268532093e-11,
            "disgust": 5.1271575147397025e-14,
            "fear": 5.4344962308050526e-08,
            "happy": 99.99237060546875,
            "sad": 9.659764543812344e-09,
            "surprise": 1.9338052936745953e-07,
            "neutral": 0.007627138867974281
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 549,
            "y": 582,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99698638916016,
            "Man": 0.0030147796496748924
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.9116854667663574,
            "indian": 1.4365438222885132,
            "black": 0.3459587097167969,
            "white": 62.35630416870117,
            "middle eastern": 13.888567924499512,
            "latino hispanic": 19.060943603515625
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0141354422898985e-08,
            "disgust": 7.116070157176663e-14,
            "fear": 9.586883606971242e-07,
            "happy": 99.99996185302734,
            "sad": 4.029109845760104e-08,
            "surprise": 1.341921489483866e-07,
            "neutral": 3.573420690372586e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 369,
            "y": 679,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.9297866821289,
            "Man": 0.0702093094587326
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.327400207519531,
            "indian": 13.091310501098633,
            "black": 2.045788526535034,
            "white": 23.330286026000977,
            "middle eastern": 22.58804702758789,
            "latino hispanic": 34.617164611816406
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 5.2830802232950447e-11,
            "disgust": 3.2729452608277467e-15,
            "fear": 6.689244269608707e-09,
            "happy": 99.99995422363281,
            "sad": 1.1832863577865282e-07,
            "surprise": 2.2517840370106512e-10,
            "neutral": 5.236127617536113e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 1008,
            "y": 681,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99065399169922,
            "Man": 0.00934651680290699
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.309686541557312,
            "indian": 0.5688461065292358,
            "black": 0.03639538958668709,
            "white": 67.46852111816406,
            "middle eastern": 10.028234481811523,
            "latino hispanic": 21.588329315185547
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.002922278130427003,
            "disgust": 0.006759212352335453,
            "fear": 6.328064918518066,
            "happy": 93.41913604736328,
            "sad": 0.025775134563446045,
            "surprise": 0.0007903965888544917,
            "neutral": 0.21654793620109558
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 616,
            "y": 684,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.7085189819336,
            "Man": 0.29148364067077637
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.21774044632911682,
            "indian": 0.12031624466180801,
            "black": 0.006225305609405041,
            "white": 77.39019012451172,
            "middle eastern": 5.077274799346924,
            "latino hispanic": 17.188255310058594
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.3858886260820213e-10,
            "disgust": 4.404749665862428e-17,
            "fear": 2.2540193669873254e-11,
            "happy": 99.99927520751953,
            "sad": 2.3740840404684604e-08,
            "surprise": 1.0677245754209252e-08,
            "neutral": 0.0007289348286576569
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 37,
        "region": {
            "x": 886,
            "y": 684,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.92472839355469,
            "Man": 0.07526962459087372
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.1357605457305908,
            "indian": 1.8023539781570435,
            "black": 0.21325315535068512,
            "white": 36.51826858520508,
            "middle eastern": 9.617833137512207,
            "latino hispanic": 50.71253204345703
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.545731885878922e-07,
            "disgust": 5.74789849505826e-14,
            "fear": 1.1009041145371157e-07,
            "happy": 99.99639892578125,
            "sad": 1.896821366642598e-08,
            "surprise": 8.019742381293327e-08,
            "neutral": 0.0036002714186906815
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 491,
            "y": 690,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.9979019165039,
            "Man": 0.002093779854476452
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.017532113939523697,
            "indian": 0.05950033664703369,
            "black": 0.0008345219539478421,
            "white": 87.54474639892578,
            "middle eastern": 5.956043243408203,
            "latino hispanic": 6.421345233917236
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.296395050256251e-07,
            "disgust": 1.2089413671534377e-11,
            "fear": 2.2081343558966182e-05,
            "happy": 99.94366455078125,
            "sad": 7.522560281358892e-07,
            "surprise": 1.9615847577370005e-06,
            "neutral": 0.05631288141012192
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 753,
            "y": 688,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99794006347656,
            "Man": 0.002065412700176239
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.010409098118543625,
            "indian": 0.05384022369980812,
            "black": 0.00025610835291445255,
            "white": 71.16792297363281,
            "middle eastern": 26.53449821472168,
            "latino hispanic": 2.233076810836792
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.4620142110288725e-06,
            "disgust": 1.2852219797036737e-14,
            "fear": 1.0051673626776392e-07,
            "happy": 99.99630737304688,
            "sad": 6.203698887929932e-08,
            "surprise": 5.310808410285972e-05,
            "neutral": 0.0036424153950065374
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 1215,
            "y": 689,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.993408203125,
            "Man": 0.006596062332391739
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.376020660856739e-05,
            "indian": 8.774358866503462e-05,
            "black": 4.061172660385637e-07,
            "white": 99.64362335205078,
            "middle eastern": 0.20725812017917633,
            "latino hispanic": 0.14898192882537842
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.746681916146093e-15,
            "disgust": 3.1468859591765965e-25,
            "fear": 8.864836391215674e-17,
            "happy": 100.0,
            "sad": 1.1694529893080396e-13,
            "surprise": 7.137577340146986e-14,
            "neutral": 4.6623650717947385e-08
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 1345,
            "y": 692,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.23680114746094,
            "Man": 0.7631921172142029
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.7258706092834473,
            "indian": 6.953526496887207,
            "black": 4.064487457275391,
            "white": 30.350446701049805,
            "middle eastern": 16.816333770751953,
            "latino hispanic": 39.089332580566406
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 4.214553781922009e-13,
            "disgust": 6.993888334848569e-20,
            "fear": 2.457916249004599e-12,
            "happy": 99.9979476928711,
            "sad": 3.568307871404386e-09,
            "surprise": 1.3949548183234128e-08,
            "neutral": 0.002049847971647978
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 1463,
            "y": 698,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.9727783203125,
            "Man": 0.027225090190768242
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 13.882104873657227,
            "indian": 16.522504806518555,
            "black": 19.427419662475586,
            "white": 8.700104713439941,
            "middle eastern": 7.160046577453613,
            "latino hispanic": 34.30781173706055
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 5.4519408877240494e-05,
            "disgust": 8.652371041861784e-10,
            "fear": 8.198092473321594e-06,
            "happy": 99.56520080566406,
            "sad": 3.005746657436248e-05,
            "surprise": 0.000732742715626955,
            "neutral": 0.43397533893585205
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 209,
            "y": 705,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9969253540039,
            "Man": 0.003075479529798031
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.020964769646525383,
            "indian": 0.11036358773708344,
            "black": 0.0025396430864930153,
            "white": 86.68041229248047,
            "middle eastern": 8.524935722351074,
            "latino hispanic": 4.6607890129089355
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.42538946996163e-11,
            "disgust": 3.413634429046701e-17,
            "fear": 2.9287408054301522e-08,
            "happy": 99.99964141845703,
            "sad": 6.957715653621577e-11,
            "surprise": 1.5226201867335476e-05,
            "neutral": 0.00033408444141969085
        },
        "dominant_emotion": "happy"
    }
]

let kindergarten_teacher_data2 = [
    {
        "age": 27,
        "region": {
            "x": 377,
            "y": 87,
            "w": 93,
            "h": 93,
            "left_eye": [
                444,
                123
            ],
            "right_eye": [
                404,
                123
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 95.99134826660156,
            "Man": 4.008656978607178
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.18639974668622e-05,
            "indian": 0.009165617637336254,
            "black": 99.9907455444336,
            "white": 2.2748884997980667e-09,
            "middle eastern": 1.1344168937554855e-09,
            "latino hispanic": 3.867646228172816e-05
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0013463707873597741,
            "disgust": 9.033359477106373e-11,
            "fear": 0.00010928970732493326,
            "happy": 98.52622985839844,
            "sad": 0.012444742023944855,
            "surprise": 0.09083978086709976,
            "neutral": 1.3690372705459595
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 514,
            "y": 260,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 44.004703521728516,
            "Man": 55.99529266357422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.724065065383911,
            "indian": 0.9053844213485718,
            "black": 0.09662403166294098,
            "white": 71.74718475341797,
            "middle eastern": 14.180549621582031,
            "latino hispanic": 10.346196174621582
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 97.28872680664062,
            "disgust": 0.0003203177184332162,
            "fear": 0.05852624028921127,
            "happy": 0.2611948847770691,
            "sad": 2.300872564315796,
            "surprise": 0.0006174821173772216,
            "neutral": 0.08973856270313263
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 32,
        "region": {
            "x": 218,
            "y": 162,
            "w": 96,
            "h": 96,
            "left_eye": [
                282,
                199
            ],
            "right_eye": [
                246,
                200
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.98847198486328,
            "Man": 0.011530067771673203
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.8618839979171753,
            "indian": 0.4340496361255646,
            "black": 0.023923758417367935,
            "white": 72.95305633544922,
            "middle eastern": 15.123549461364746,
            "latino hispanic": 10.603533744812012
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.083850255857783e-10,
            "disgust": 3.3741151569919406e-21,
            "fear": 2.193108569097449e-14,
            "happy": 99.087158203125,
            "sad": 1.641123859030813e-08,
            "surprise": 2.610806006941857e-07,
            "neutral": 0.9128466844558716
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 496,
            "y": 176,
            "w": 92,
            "h": 92,
            "left_eye": [
                560,
                209
            ],
            "right_eye": [
                525,
                210
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 96.17930603027344,
            "Man": 3.820700168609619
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.15609098970890045,
            "indian": 1.7860832214355469,
            "black": 0.07166746258735657,
            "white": 52.07858657836914,
            "middle eastern": 23.07140350341797,
            "latino hispanic": 22.836170196533203
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0752474431663384e-11,
            "disgust": 6.533296713233843e-27,
            "fear": 1.715306198573068e-15,
            "happy": 99.98855590820312,
            "sad": 2.501395479637125e-10,
            "surprise": 2.935192089381644e-09,
            "neutral": 0.011443295516073704
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 731,
            "y": 178,
            "w": 98,
            "h": 98,
            "left_eye": [
                791,
                210
            ],
            "right_eye": [
                755,
                225
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99996185302734,
            "Man": 3.678992288769223e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.001763498759828508,
            "indian": 0.01782209239900112,
            "black": 9.159016190096736e-05,
            "white": 88.23619079589844,
            "middle eastern": 9.790426254272461,
            "latino hispanic": 1.9537118673324585
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.461650050467057e-10,
            "disgust": 7.337953624671391e-17,
            "fear": 8.215839814029735e-11,
            "happy": 99.92611694335938,
            "sad": 3.7937340380267415e-08,
            "surprise": 6.380128979799338e-06,
            "neutral": 0.07387283444404602
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 25,
            "y": 124,
            "w": 113,
            "h": 113,
            "left_eye": [
                98,
                175
            ],
            "right_eye": [
                62,
                164
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.95713806152344,
            "Man": 0.04285735264420509
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7459734082221985,
            "indian": 0.8068311810493469,
            "black": 0.06210581585764885,
            "white": 65.95063018798828,
            "middle eastern": 17.2448673248291,
            "latino hispanic": 15.189595222473145
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.886596071702499e-11,
            "disgust": 2.9461576362821113e-21,
            "fear": 2.618636025996323e-15,
            "happy": 99.91425323486328,
            "sad": 5.005936221103013e-10,
            "surprise": 1.7039776256666528e-09,
            "neutral": 0.08574487268924713
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 852,
            "y": 434,
            "w": 118,
            "h": 118,
            "left_eye": [
                927,
                479
            ],
            "right_eye": [
                886,
                484
            ]
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 4.601999535225332e-06,
            "Man": 100.0
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.001678019529208541,
            "indian": 4.6377854347229,
            "black": 0.006469708867371082,
            "white": 5.595431804656982,
            "middle eastern": 87.0641098022461,
            "latino hispanic": 2.6945254802703857
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 4.289020785123825e-15,
            "disgust": 1.4033107502362822e-27,
            "fear": 5.726495383485832e-19,
            "happy": 99.9017333984375,
            "sad": 3.0225550794876765e-14,
            "surprise": 3.904658818498774e-09,
            "neutral": 0.09827202558517456
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 19,
            "y": 464,
            "w": 114,
            "h": 114,
            "left_eye": [
                100,
                517
            ],
            "right_eye": [
                53,
                508
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.017346573993563652,
            "Man": 99.98265838623047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.6300730956216115e-15,
            "indian": 2.9356719832840383e-10,
            "black": 100.0,
            "white": 1.109511895901581e-20,
            "middle eastern": 1.272517933024742e-20,
            "latino hispanic": 2.308172912784262e-13
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 3.576320040110659e-08,
            "disgust": 5.376601983794163e-16,
            "fear": 2.2107862207576545e-09,
            "happy": 99.89151000976562,
            "sad": 1.5774958228575997e-06,
            "surprise": 1.770368157849589e-06,
            "neutral": 0.10849522799253464
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 275,
            "y": 425,
            "w": 107,
            "h": 107,
            "left_eye": [
                353,
                470
            ],
            "right_eye": [
                316,
                467
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 98.97157287597656,
            "Man": 1.028420329093933
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.95992279052734,
            "indian": 0.017151618376374245,
            "black": 2.5906950895659975e-07,
            "white": 0.00014207344793248922,
            "middle eastern": 1.5021321075892047e-08,
            "latino hispanic": 0.022769732400774956
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.8209487830293347e-16,
            "disgust": 6.58132391714652e-30,
            "fear": 2.4209071723134733e-19,
            "happy": 99.99519348144531,
            "sad": 1.3317278154529027e-14,
            "surprise": 1.1482840373000514e-10,
            "neutral": 0.0048052528873085976
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 574,
            "y": 415,
            "w": 119,
            "h": 119,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.03716745972633362,
            "Man": 99.96282958984375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.009447054006159306,
            "indian": 0.25457385182380676,
            "black": 0.005667942576110363,
            "white": 85.3156967163086,
            "middle eastern": 9.738621711730957,
            "latino hispanic": 4.676003456115723
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.058242637664079666,
            "disgust": 2.0341306417037686e-10,
            "fear": 98.9375,
            "happy": 0.3685108721256256,
            "sad": 0.12728461623191833,
            "surprise": 0.19952689111232758,
            "neutral": 0.3089388906955719
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 31,
        "region": {
            "x": 437,
            "y": 535,
            "w": 107,
            "h": 107,
            "left_eye": [
                511,
                576
            ],
            "right_eye": [
                471,
                575
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.75944519042969,
            "Man": 0.24055635929107666
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.2155228853225708,
            "indian": 12.856243133544922,
            "black": 0.6926669478416443,
            "white": 24.681385040283203,
            "middle eastern": 27.705890655517578,
            "latino hispanic": 32.84829330444336
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.97023959661149e-14,
            "disgust": 6.096743693104785e-29,
            "fear": 2.3720802517181166e-19,
            "happy": 99.90437316894531,
            "sad": 1.6038710637378273e-10,
            "surprise": 1.2645470448546803e-08,
            "neutral": 0.09562557190656662
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 680,
            "y": 626,
            "w": 111,
            "h": 111,
            "left_eye": [
                754,
                661
            ],
            "right_eye": [
                716,
                676
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99606323242188,
            "Man": 0.003928859252482653
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.98573303222656,
            "indian": 0.0038309202063828707,
            "black": 1.9039632093154069e-07,
            "white": 0.0001339289447059855,
            "middle eastern": 3.817232752112432e-09,
            "latino hispanic": 0.01030430942773819
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.3055669373661658e-08,
            "disgust": 1.101593241200293e-15,
            "fear": 6.305052480115592e-09,
            "happy": 95.78524017333984,
            "sad": 6.307681132966536e-07,
            "surprise": 0.008619416505098343,
            "neutral": 4.206140518188477
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 22,
        "region": {
            "x": 161,
            "y": 657,
            "w": 112,
            "h": 112,
            "left_eye": [
                234,
                697
            ],
            "right_eye": [
                196,
                707
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 8.067071914672852,
            "Man": 91.93292236328125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 40.860313415527344,
            "indian": 10.4403657913208,
            "black": 5.9532575607299805,
            "white": 1.3058902025222778,
            "middle eastern": 0.4352053999900818,
            "latino hispanic": 41.00497055053711
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 8.031944886965903e-09,
            "disgust": 2.4068225202829394e-15,
            "fear": 5.065604909759713e-06,
            "happy": 99.3408203125,
            "sad": 9.206857612298336e-06,
            "surprise": 1.3153522559150588e-05,
            "neutral": 0.6591445803642273
        },
        "dominant_emotion": "happy"
    }
]

console.log("ChatGPT Results for Kindergarten Teacher:");
const data = kindergarten_teacher_data.concat(kindergarten_teacher_data2);
console.log(processData(data));
