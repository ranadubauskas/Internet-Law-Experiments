const { processData } = require('../../data_processing.js');

let floral_design_data = [
    {
        "age": 31,
        "region": {
            "x": 914,
            "y": 75,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.530182957649231,
            "Man": 99.46981811523438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.052735328674316,
            "indian": 9.025657653808594,
            "black": 6.948073387145996,
            "white": 26.357709884643555,
            "middle eastern": 22.627443313598633,
            "latino hispanic": 26.988378524780273
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.2886169343271376e-09,
            "disgust": 7.288348761389443e-18,
            "fear": 2.1932728203055696e-11,
            "happy": 99.98027038574219,
            "sad": 3.754172084313723e-09,
            "surprise": 9.668374332250096e-07,
            "neutral": 0.019717486575245857
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 1072,
            "y": 25,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.7902863621711731,
            "Man": 99.209716796875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.06353759765625,
            "indian": 3.644085645675659,
            "black": 0.947093665599823,
            "white": 50.749454498291016,
            "middle eastern": 21.733003616333008,
            "latino hispanic": 17.862829208374023
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0017908685840666294,
            "disgust": 2.9966140573378652e-06,
            "fear": 0.00045103635056875646,
            "happy": 97.21331787109375,
            "sad": 0.006646780762821436,
            "surprise": 0.0035896925255656242,
            "neutral": 2.774199962615967
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 278,
            "y": 83,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 3.8367481231689453,
            "Man": 96.16325378417969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.5523837804794312,
            "indian": 1.2924745082855225,
            "black": 0.17347383499145508,
            "white": 67.2490005493164,
            "middle eastern": 17.43798828125,
            "latino hispanic": 12.294684410095215
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 11.27029800415039,
            "disgust": 5.081758499145508,
            "fear": 36.130435943603516,
            "happy": 23.601842880249023,
            "sad": 8.157872200012207,
            "surprise": 0.07585327327251434,
            "neutral": 15.681937217712402
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 34,
        "region": {
            "x": 387,
            "y": 64,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 71.26371002197266,
            "Man": 28.736284255981445
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.7442755699157715,
            "indian": 9.678634643554688,
            "black": 1.889501929283142,
            "white": 30.743640899658203,
            "middle eastern": 31.846874237060547,
            "latino hispanic": 21.09707260131836
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 9.507741197012365e-05,
            "disgust": 1.3354354080896691e-11,
            "fear": 2.715129085117951e-06,
            "happy": 99.98391723632812,
            "sad": 0.002831491408869624,
            "surprise": 3.728909625522192e-09,
            "neutral": 0.013155026361346245
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 567,
            "y": 160,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.8955568075180054,
            "Man": 99.10443878173828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 28.732677459716797,
            "indian": 8.371241569519043,
            "black": 5.7246503829956055,
            "white": 19.990814208984375,
            "middle eastern": 11.743850708007812,
            "latino hispanic": 25.436765670776367
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.001743765315040946,
            "disgust": 1.7222364476765506e-06,
            "fear": 0.002728958148509264,
            "happy": 89.57438659667969,
            "sad": 0.03390145301818848,
            "surprise": 0.11596944183111191,
            "neutral": 10.27126693725586
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 206,
            "y": 151,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 38.042476654052734,
            "Man": 61.95752716064453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 62.2899284362793,
            "indian": 1.8800628185272217,
            "black": 1.2404310703277588,
            "white": 20.109413146972656,
            "middle eastern": 3.0335357189178467,
            "latino hispanic": 11.446633338928223
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.075714284430433e-07,
            "disgust": 1.1884880557998245e-13,
            "fear": 3.420423411171214e-07,
            "happy": 94.91370391845703,
            "sad": 3.993175414507277e-05,
            "surprise": 0.004298703279346228,
            "neutral": 5.081955909729004
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 43,
        "region": {
            "x": 109,
            "y": 140,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 95.89990234375,
            "Man": 4.100095748901367
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.07671713829040527,
            "indian": 0.006197039037942886,
            "black": 0.0004733381501864642,
            "white": 97.96060180664062,
            "middle eastern": 1.1812928915023804,
            "latino hispanic": 0.774724006652832
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.782302975654602,
            "disgust": 3.743206024169922,
            "fear": 25.45269775390625,
            "happy": 2.6928927898406982,
            "sad": 26.345699310302734,
            "surprise": 0.1688084602355957,
            "neutral": 39.814395904541016
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 485,
            "y": 176,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 74.76451873779297,
            "Man": 25.235485076904297
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 77.89423370361328,
            "indian": 4.996984004974365,
            "black": 1.4378488063812256,
            "white": 1.2776340246200562,
            "middle eastern": 0.1915660798549652,
            "latino hispanic": 14.201736450195312
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 7.604161510244012e-06,
            "disgust": 7.682298686084721e-10,
            "fear": 0.00042365817353129387,
            "happy": 99.85093688964844,
            "sad": 1.206446631840663e-05,
            "surprise": 0.0038459631614387035,
            "neutral": 0.14477595686912537
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 41,
        "region": {
            "x": 706,
            "y": 180,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 5.1799821853637695,
            "Man": 94.82000732421875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.745058059692383,
            "indian": 0.9932819604873657,
            "black": 0.27750250697135925,
            "white": 55.34059524536133,
            "middle eastern": 8.634071350097656,
            "latino hispanic": 24.00949478149414
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.624738693237305,
            "disgust": 0.0015163489151746035,
            "fear": 0.16443730890750885,
            "happy": 2.041875123977661,
            "sad": 10.239935874938965,
            "surprise": 0.009280298836529255,
            "neutral": 79.91822052001953
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 998,
            "y": 181,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 91.96820831298828,
            "Man": 8.03178596496582
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 25.295984268188477,
            "indian": 26.26028823852539,
            "black": 13.269637107849121,
            "white": 6.360827922821045,
            "middle eastern": 5.78571891784668,
            "latino hispanic": 23.027545928955078
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 4.999415397644043,
            "disgust": 0.0010158587247133255,
            "fear": 0.14497607946395874,
            "happy": 1.484865665435791,
            "sad": 10.947338104248047,
            "surprise": 0.011739383451640606,
            "neutral": 82.41065216064453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 38,
        "region": {
            "x": 0,
            "y": 155,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 5.298488616943359,
            "Man": 94.7015151977539
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.418062686920166,
            "indian": 5.610337257385254,
            "black": 0.754507839679718,
            "white": 44.48017120361328,
            "middle eastern": 31.18350601196289,
            "latino hispanic": 12.55341911315918
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2008112207695376e-05,
            "disgust": 2.524679665327767e-08,
            "fear": 0.0002686016377992928,
            "happy": 98.7590560913086,
            "sad": 1.1552678346633911,
            "surprise": 3.3525240723975e-05,
            "neutral": 0.08536472171545029
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 833,
            "y": 279,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 90.24401092529297,
            "Man": 9.7559814453125
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.6231930255889893,
            "indian": 0.4106213450431824,
            "black": 0.08907553553581238,
            "white": 77.48133850097656,
            "middle eastern": 9.977181434631348,
            "latino hispanic": 11.418593406677246
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.012977227568626404,
            "disgust": 1.415173028362915e-05,
            "fear": 0.019191505387425423,
            "happy": 82.72723388671875,
            "sad": 0.07784923166036606,
            "surprise": 0.3549741506576538,
            "neutral": 16.807764053344727
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 43,
        "region": {
            "x": 1112,
            "y": 164,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.4895569682121277,
            "Man": 99.51044464111328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 19.09380531311035,
            "indian": 12.654468536376953,
            "black": 6.566918849945068,
            "white": 18.335952758789062,
            "middle eastern": 13.89151668548584,
            "latino hispanic": 29.45733642578125
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 59.42734146118164,
            "disgust": 0.8596385717391968,
            "fear": 2.1379165649414062,
            "happy": 3.654484987258911,
            "sad": 16.04302215576172,
            "surprise": 1.9532723426818848,
            "neutral": 15.92431640625
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 42,
        "region": {
            "x": 340,
            "y": 174,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 2.2852346897125244,
            "Man": 97.71476745605469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 39.5592041015625,
            "indian": 11.148509979248047,
            "black": 2.6254687309265137,
            "white": 18.265727996826172,
            "middle eastern": 10.475224494934082,
            "latino hispanic": 17.92586326599121
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.3137112259864807,
            "disgust": 1.1673336963724523e-08,
            "fear": 0.0006795962108299136,
            "happy": 53.27351760864258,
            "sad": 0.26670053601264954,
            "surprise": 0.000108183769043535,
            "neutral": 46.14528274536133
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 1095,
            "y": 382,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 3.8351192474365234,
            "Man": 96.16487884521484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 36.81901931762695,
            "indian": 8.728959083557129,
            "black": 10.118603706359863,
            "white": 10.601645469665527,
            "middle eastern": 6.970110893249512,
            "latino hispanic": 26.761659622192383
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 97.52426147460938,
            "disgust": 5.9650403272826225e-05,
            "fear": 0.6686667203903198,
            "happy": 0.794251561164856,
            "sad": 0.6440144181251526,
            "surprise": 0.24996045231819153,
            "neutral": 0.11878812313079834
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 39,
        "region": {
            "x": 693,
            "y": 335,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 14.943655967712402,
            "Man": 85.05634307861328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 66.73407745361328,
            "indian": 10.887760162353516,
            "black": 1.6866276264190674,
            "white": 8.145859718322754,
            "middle eastern": 7.469027519226074,
            "latino hispanic": 5.076657295227051
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 37.15190124511719,
            "disgust": 2.997705417229213e-10,
            "fear": 0.00591387739405036,
            "happy": 2.0465991497039795,
            "sad": 1.9704440832138062,
            "surprise": 0.00034805681207217276,
            "neutral": 58.82479476928711
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 96,
            "y": 387,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.6478534936904907,
            "Man": 98.35214233398438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.048113372176885605,
            "indian": 0.16323363780975342,
            "black": 0.01040720660239458,
            "white": 83.55984497070312,
            "middle eastern": 10.707236289978027,
            "latino hispanic": 5.511167049407959
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.04202971234917641,
            "disgust": 4.828068825811493e-13,
            "fear": 0.0016428420785814524,
            "happy": 1.1268155574798584,
            "sad": 2.37361478805542,
            "surprise": 1.5935768260533223e-06,
            "neutral": 96.45589447021484
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 474,
            "y": 405,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.98326110839844,
            "Man": 0.016729900613427162
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.5865542888641357,
            "indian": 2.486243486404419,
            "black": 0.29730963706970215,
            "white": 59.32658386230469,
            "middle eastern": 17.520702362060547,
            "latino hispanic": 17.782608032226562
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.3347468078136444,
            "disgust": 0.20084597170352936,
            "fear": 0.4961290955543518,
            "happy": 58.95186233520508,
            "sad": 5.814231872558594,
            "surprise": 0.17190337181091309,
            "neutral": 34.03028106689453
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 265,
            "y": 410,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 29.183732986450195,
            "Man": 70.81626892089844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 32.82914733886719,
            "indian": 10.736259460449219,
            "black": 6.196769714355469,
            "white": 10.683629989624023,
            "middle eastern": 7.106025695800781,
            "latino hispanic": 32.44817352294922
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 8.9574613571167,
            "disgust": 0.030542580410838127,
            "fear": 41.311405181884766,
            "happy": 13.821978569030762,
            "sad": 3.3967602252960205,
            "surprise": 1.658812165260315,
            "neutral": 30.823030471801758
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 24,
        "region": {
            "x": 901,
            "y": 424,
            "w": 74,
            "h": 74,
            "left_eye": [
                949,
                453
            ],
            "right_eye": [
                922,
                452
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.012282336130738258,
            "Man": 99.98772430419922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.3912513554096222,
            "indian": 0.5667398571968079,
            "black": 0.1487169861793518,
            "white": 61.27670669555664,
            "middle eastern": 19.132741928100586,
            "latino hispanic": 18.483835220336914
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0006018683197908103,
            "disgust": 1.9121712568903604e-07,
            "fear": 0.060120631009340286,
            "happy": 30.18915367126465,
            "sad": 0.05466241389513016,
            "surprise": 0.07295648008584976,
            "neutral": 69.62250518798828
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 0,
            "y": 517,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 94.16423797607422,
            "Man": 5.835757732391357
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.05822167173027992,
            "indian": 0.11722943931818008,
            "black": 0.009361131116747856,
            "white": 87.98583221435547,
            "middle eastern": 5.233739852905273,
            "latino hispanic": 6.59561824798584
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00012881883594673127,
            "disgust": 1.5711957290776013e-09,
            "fear": 0.0002599997096695006,
            "happy": 99.77436065673828,
            "sad": 0.00013948231935501099,
            "surprise": 0.004009470343589783,
            "neutral": 0.22110430896282196
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 362,
            "y": 539,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 42.523826599121094,
            "Man": 57.47616958618164
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 82.29109954833984,
            "indian": 7.408412933349609,
            "black": 0.5073330998420715,
            "white": 3.7968225479125977,
            "middle eastern": 0.9788785576820374,
            "latino hispanic": 5.017448902130127
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.00147873698733747,
            "disgust": 1.819105591494008e-06,
            "fear": 0.000695951865054667,
            "happy": 96.7598876953125,
            "sad": 0.11710581928491592,
            "surprise": 0.001664049574173987,
            "neutral": 3.1191718578338623
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 608,
            "y": 531,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.94154357910156,
            "Man": 0.05846738815307617
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.16678015887737274,
            "indian": 0.027155710384249687,
            "black": 0.0008430174784734845,
            "white": 95.73255920410156,
            "middle eastern": 3.471069574356079,
            "latino hispanic": 0.6015926599502563
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.3543932456959737e-06,
            "disgust": 5.521973426068448e-19,
            "fear": 5.2616414336625894e-08,
            "happy": 0.0009633139125071466,
            "sad": 0.0030350994784384966,
            "surprise": 4.984176182887268e-09,
            "neutral": 99.99600219726562
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 802,
            "y": 566,
            "w": 75,
            "h": 75,
            "left_eye": [
                852,
                593
            ],
            "right_eye": [
                826,
                593
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 71.53411865234375,
            "Man": 28.465890884399414
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 19.82695770263672,
            "indian": 8.869895935058594,
            "black": 2.944870710372925,
            "white": 27.633392333984375,
            "middle eastern": 17.125621795654297,
            "latino hispanic": 23.599254608154297
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0069470955058932304,
            "disgust": 4.7156004256976303e-07,
            "fear": 0.0022563342936336994,
            "happy": 99.88166046142578,
            "sad": 0.00249501527287066,
            "surprise": 0.00016989158757496625,
            "neutral": 0.10646562278270721
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 1130,
            "y": 582,
            "w": 72,
            "h": 72,
            "left_eye": [
                1176,
                607
            ],
            "right_eye": [
                1152,
                611
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.556203305721283,
            "Man": 99.44379425048828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.80849838256836,
            "indian": 6.645657539367676,
            "black": 2.726506233215332,
            "white": 20.495223999023438,
            "middle eastern": 11.928021430969238,
            "latino hispanic": 48.396095275878906
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.6298192778995144e-07,
            "disgust": 1.2998029735866723e-11,
            "fear": 2.675828909559641e-06,
            "happy": 90.85871887207031,
            "sad": 6.568544904439477e-06,
            "surprise": 0.012143799103796482,
            "neutral": 9.129137992858887
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 970,
            "y": 584,
            "w": 79,
            "h": 79,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 88.29383087158203,
            "Man": 11.706171035766602
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.6424657702445984,
            "indian": 0.25137388706207275,
            "black": 0.024231595918536186,
            "white": 84.64337158203125,
            "middle eastern": 7.573090076446533,
            "latino hispanic": 6.8654656410217285
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.03632714971899986,
            "disgust": 5.613119778008491e-12,
            "fear": 0.0004901018110103905,
            "happy": 99.961181640625,
            "sad": 4.894770245300606e-05,
            "surprise": 0.00012324393901508301,
            "neutral": 0.00183257763274014
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 38,
        "region": {
            "x": 395,
            "y": 731,
            "w": 82,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.09215986728668213,
            "Man": 99.9078369140625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.995155334472656,
            "indian": 12.02225399017334,
            "black": 5.288906574249268,
            "white": 23.525606155395508,
            "middle eastern": 22.346725463867188,
            "latino hispanic": 24.821353912353516
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0006078531732782722,
            "disgust": 2.2050262156281456e-19,
            "fear": 2.373854668391573e-09,
            "happy": 35.57880401611328,
            "sad": 5.15269348397851e-05,
            "surprise": 1.630514390171811e-08,
            "neutral": 64.4205322265625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 891,
            "y": 749,
            "w": 83,
            "h": 83,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.17813058197498322,
            "Man": 99.82186889648438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 21.687053680419922,
            "indian": 10.055747985839844,
            "black": 5.468854904174805,
            "white": 24.87481117248535,
            "middle eastern": 17.150968551635742,
            "latino hispanic": 20.762561798095703
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.519021991000534e-14,
            "disgust": 3.2615407287746486e-25,
            "fear": 2.1943698752712934e-17,
            "happy": 99.99891662597656,
            "sad": 2.9072507205449294e-13,
            "surprise": 7.823991454714019e-12,
            "neutral": 0.001084091025404632
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 1146,
            "y": 721,
            "w": 83,
            "h": 83,
            "left_eye": [
                1199,
                751
            ],
            "right_eye": [
                1172,
                754
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 68.38143157958984,
            "Man": 31.618568420410156
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 98.67606353759766,
            "indian": 0.6100244522094727,
            "black": 0.005758171901106834,
            "white": 0.31190505623817444,
            "middle eastern": 0.001725821290165186,
            "latino hispanic": 0.3945273458957672
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0014607355697080493,
            "disgust": 1.762980900821276e-06,
            "fear": 0.00010355345148127526,
            "happy": 99.04530334472656,
            "sad": 0.00012293842155486345,
            "surprise": 0.003363360883668065,
            "neutral": 0.9496445059776306
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 140,
            "y": 749,
            "w": 89,
            "h": 89,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 98.88595581054688,
            "Man": 1.114052653312683
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 17.136106491088867,
            "indian": 10.807117462158203,
            "black": 5.693608283996582,
            "white": 27.848501205444336,
            "middle eastern": 21.157102584838867,
            "latino hispanic": 17.35756492614746
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.1852734088897705,
            "disgust": 0.0012309602461755276,
            "fear": 3.4774482250213623,
            "happy": 0.6203579902648926,
            "sad": 5.773521900177002,
            "surprise": 0.10779820382595062,
            "neutral": 89.8343734741211
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 628,
            "y": 751,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.46251678466797,
            "Man": 0.5374777317047119
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 84.74130249023438,
            "indian": 0.8889344334602356,
            "black": 0.11079781502485275,
            "white": 6.669832229614258,
            "middle eastern": 0.6389926075935364,
            "latino hispanic": 6.95014762878418
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.2006796623609262e-06,
            "disgust": 6.085426216759227e-13,
            "fear": 2.0459497136471327e-06,
            "happy": 100.0,
            "sad": 1.1198098945897073e-06,
            "surprise": 1.5389231577955798e-07,
            "neutral": 4.657605586544378e-06
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 1039,
            "y": 965,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 3.4944772720336914,
            "Man": 96.5055160522461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 31.19951820373535,
            "indian": 11.318212509155273,
            "black": 7.775863170623779,
            "white": 16.07596206665039,
            "middle eastern": 12.844200134277344,
            "latino hispanic": 20.786245346069336
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.104733868828589e-07,
            "disgust": 9.911534856472514e-16,
            "fear": 4.078871906898485e-09,
            "happy": 98.87602233886719,
            "sad": 7.329451364057604e-06,
            "surprise": 8.521692507201806e-07,
            "neutral": 1.1239748001098633
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 633,
            "y": 1010,
            "w": 89,
            "h": 89,
            "left_eye": [
                693,
                1042
            ],
            "right_eye": [
                661,
                1044
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 81.26154327392578,
            "Man": 18.73845672607422
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.5514187812805176,
            "indian": 0.7700145244598389,
            "black": 0.09554482251405716,
            "white": 64.23513793945312,
            "middle eastern": 11.602280616760254,
            "latino hispanic": 22.745607376098633
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.43731921911239624,
            "disgust": 1.9848288502544165e-05,
            "fear": 0.01051241997629404,
            "happy": 83.4784164428711,
            "sad": 0.7590346336364746,
            "surprise": 0.00854017399251461,
            "neutral": 15.30616283416748
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 423,
            "y": 974,
            "w": 91,
            "h": 91,
            "left_eye": [
                481,
                1010
            ],
            "right_eye": [
                455,
                1010
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99923706054688,
            "Man": 0.0007651570485904813
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.4685689109228406e-07,
            "indian": 2.7555254078492908e-08,
            "black": 8.108262672390509e-11,
            "white": 99.99565887451172,
            "middle eastern": 0.001865752856247127,
            "latino hispanic": 0.002480786992236972
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.14893396198749542,
            "disgust": 0.00045251307892613113,
            "fear": 0.28176647424697876,
            "happy": 93.51246643066406,
            "sad": 0.7075432538986206,
            "surprise": 0.0733845978975296,
            "neutral": 5.275460243225098
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 825,
            "y": 983,
            "w": 85,
            "h": 85,
            "left_eye": [
                879,
                1016
            ],
            "right_eye": [
                850,
                1017
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 87.5931167602539,
            "Man": 12.406878471374512
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 28.15931510925293,
            "indian": 5.343046188354492,
            "black": 2.9976675510406494,
            "white": 30.222347259521484,
            "middle eastern": 12.250332832336426,
            "latino hispanic": 21.02728843688965
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.753516648430377e-05,
            "disgust": 1.7749853142845495e-08,
            "fear": 0.0004103922692593187,
            "happy": 95.76472473144531,
            "sad": 0.0038469398859888315,
            "surprise": 0.008404036052525043,
            "neutral": 4.2225823402404785
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 214,
            "y": 986,
            "w": 85,
            "h": 85,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 94.27557373046875,
            "Man": 5.724420547485352
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 66.25778198242188,
            "indian": 4.875252723693848,
            "black": 1.1858843564987183,
            "white": 6.843850612640381,
            "middle eastern": 1.17792546749115,
            "latino hispanic": 19.659305572509766
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 23.414762496948242,
            "disgust": 1.4505684475807357e-06,
            "fear": 0.03768065199255943,
            "happy": 0.7921739220619202,
            "sad": 0.2832328677177429,
            "surprise": 0.035985007882118225,
            "neutral": 75.43616485595703
        },
        "dominant_emotion": "neutral"
    }
]

let floral_design_data2 = [
    {
        "age": 28,
        "region": {
            "x": 731,
            "y": 232,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 60.12599563598633,
            "Man": 39.874000549316406
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.2393879890441895,
            "indian": 6.566401481628418,
            "black": 1.405007243156433,
            "white": 39.605567932128906,
            "middle eastern": 24.118011474609375,
            "latino hispanic": 22.065622329711914
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.337904930114746,
            "disgust": 0.0018919301219284534,
            "fear": 1.8093327283859253,
            "happy": 6.972836494445801,
            "sad": 17.2935733795166,
            "surprise": 0.019428204745054245,
            "neutral": 70.56502532958984
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 615,
            "y": 235,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.85368347167969,
            "Man": 0.1463220864534378
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.2431117296218872,
            "indian": 0.9006870985031128,
            "black": 0.11340843886137009,
            "white": 66.7435302734375,
            "middle eastern": 15.669626235961914,
            "latino hispanic": 15.329641342163086
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.2058024406433105,
            "disgust": 0.001774469157680869,
            "fear": 0.13202819228172302,
            "happy": 0.005903609562665224,
            "sad": 5.75628137588501,
            "surprise": 4.055939643876627e-05,
            "neutral": 89.8981704711914
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 461,
            "y": 221,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.36784809827804565,
            "Man": 99.63215637207031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0015429824125021696,
            "indian": 0.002987463492900133,
            "black": 3.360430127941072e-05,
            "white": 96.76327514648438,
            "middle eastern": 1.5775048732757568,
            "latino hispanic": 1.6546611785888672
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.961966037750244,
            "disgust": 0.06432348489761353,
            "fear": 3.468703508377075,
            "happy": 1.6939136981964111,
            "sad": 15.221956253051758,
            "surprise": 0.07039913535118103,
            "neutral": 74.51873779296875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 297,
            "y": 281,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.04510610178112984,
            "Man": 99.95489501953125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.047335878014564514,
            "indian": 0.0544397309422493,
            "black": 0.0015994836576282978,
            "white": 94.57122802734375,
            "middle eastern": 3.2944979667663574,
            "latino hispanic": 2.030900716781616
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.43076062202453613,
            "disgust": 0.9500850439071655,
            "fear": 0.7521172165870667,
            "happy": 16.469650268554688,
            "sad": 15.830495834350586,
            "surprise": 0.25071385502815247,
            "neutral": 65.31617736816406
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 879,
            "y": 297,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.01693669706583023,
            "Man": 99.98306274414062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.252577543258667,
            "indian": 1.3987548351287842,
            "black": 0.06675546616315842,
            "white": 48.77845764160156,
            "middle eastern": 41.26194381713867,
            "latino hispanic": 8.241512298583984
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.8399710655212402,
            "disgust": 8.208978397306055e-05,
            "fear": 35.4161491394043,
            "happy": 18.12760353088379,
            "sad": 7.36284875869751,
            "surprise": 17.820266723632812,
            "neutral": 17.433086395263672
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 34,
        "region": {
            "x": 0,
            "y": 194,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 56.205684661865234,
            "Man": 43.794315338134766
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.5506298542022705,
            "indian": 0.37472593784332275,
            "black": 0.08085620403289795,
            "white": 84.92478942871094,
            "middle eastern": 6.189195156097412,
            "latino hispanic": 5.879796504974365
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.02772284857928753,
            "disgust": 9.175358428592517e-08,
            "fear": 0.9618038535118103,
            "happy": 8.854400948621333e-05,
            "sad": 99.00576782226562,
            "surprise": 3.188376240359503e-06,
            "neutral": 0.004613504279404879
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 33,
        "region": {
            "x": 951,
            "y": 222,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.45433464646339417,
            "Man": 99.54566955566406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 24.971590042114258,
            "indian": 12.122983932495117,
            "black": 9.010160446166992,
            "white": 18.0659122467041,
            "middle eastern": 13.908584594726562,
            "latino hispanic": 21.9207706451416
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.37116697430610657,
            "disgust": 2.3616789235347824e-07,
            "fear": 0.7174641489982605,
            "happy": 0.001858447096310556,
            "sad": 95.18240356445312,
            "surprise": 0.0001047081095748581,
            "neutral": 3.7270069122314453
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 30,
        "region": {
            "x": 396,
            "y": 307,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.1078006699681282,
            "Man": 99.89219665527344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 55.980064392089844,
            "indian": 10.441615104675293,
            "black": 1.853865385055542,
            "white": 10.879911422729492,
            "middle eastern": 4.141730785369873,
            "latino hispanic": 16.70281982421875
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 12.573060035705566,
            "disgust": 0.7407750487327576,
            "fear": 30.411100387573242,
            "happy": 4.97760534286499,
            "sad": 6.535105228424072,
            "surprise": 0.13435396552085876,
            "neutral": 44.62799835205078
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 45,
        "region": {
            "x": 1040,
            "y": 320,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.0184937734156847,
            "Man": 99.98150634765625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.457875728607178,
            "indian": 12.484643936157227,
            "black": 2.438795804977417,
            "white": 26.14048957824707,
            "middle eastern": 31.255699157714844,
            "latino hispanic": 22.222496032714844
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 4.826523303985596,
            "disgust": 0.0005346213583834469,
            "fear": 0.974685788154602,
            "happy": 92.98880767822266,
            "sad": 0.3770277798175812,
            "surprise": 0.008813982829451561,
            "neutral": 0.8236021399497986
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 506,
            "y": 336,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 9.79126262664795,
            "Man": 90.208740234375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.396366119384766,
            "indian": 18.00710105895996,
            "black": 19.329010009765625,
            "white": 12.697103500366211,
            "middle eastern": 13.618717193603516,
            "latino hispanic": 20.951709747314453
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 89.10740661621094,
            "disgust": 4.7664642011113756e-07,
            "fear": 0.9781009554862976,
            "happy": 0.09964172542095184,
            "sad": 1.7021892070770264,
            "surprise": 0.1788294017314911,
            "neutral": 7.933835029602051
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 32,
        "region": {
            "x": 350,
            "y": 404,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 92.92408752441406,
            "Man": 7.0759100914001465
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.2027173489332199,
            "indian": 0.07571542263031006,
            "black": 0.009034202434122562,
            "white": 80.66943359375,
            "middle eastern": 4.511314392089844,
            "latino hispanic": 14.531785011291504
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.3553038239479065,
            "disgust": 2.906936515501002e-06,
            "fear": 0.0383186899125576,
            "happy": 0.06218844652175903,
            "sad": 0.6998949646949768,
            "surprise": 0.00013713285443373024,
            "neutral": 98.84415435791016
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 967,
            "y": 424,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.12964747846126556,
            "Man": 99.87034606933594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.84820556640625,
            "indian": 6.473998546600342,
            "black": 2.026447296142578,
            "white": 31.313133239746094,
            "middle eastern": 25.646825790405273,
            "latino hispanic": 29.691383361816406
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.035217735916376114,
            "disgust": 0.0027989225927740335,
            "fear": 2.3185436725616455,
            "happy": 96.64433288574219,
            "sad": 0.14100347459316254,
            "surprise": 0.024635018780827522,
            "neutral": 0.8334758281707764
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 787,
            "y": 358,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 47.53416061401367,
            "Man": 52.46583938598633
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.18895159661769867,
            "indian": 0.1680416464805603,
            "black": 0.021215861663222313,
            "white": 78.60987091064453,
            "middle eastern": 10.605378150939941,
            "latino hispanic": 10.406547546386719
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2496650218963623,
            "disgust": 0.0006381248822435737,
            "fear": 0.8554614186286926,
            "happy": 0.36295464634895325,
            "sad": 6.839747905731201,
            "surprise": 0.05634486302733421,
            "neutral": 90.63518524169922
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 674,
            "y": 330,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.04270075261592865,
            "Man": 99.95729064941406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0132929477840662,
            "indian": 0.0745302066206932,
            "black": 0.004035353660583496,
            "white": 87.67604064941406,
            "middle eastern": 7.53609037399292,
            "latino hispanic": 4.696009159088135
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.07580535113811493,
            "disgust": 0.030699731782078743,
            "fear": 1.402875304222107,
            "happy": 0.46015816926956177,
            "sad": 2.865762233734131,
            "surprise": 0.0778602883219719,
            "neutral": 95.08683776855469
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 592,
            "y": 361,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.5091784596443176,
            "Man": 99.49081420898438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 14.268136978149414,
            "indian": 15.066076278686523,
            "black": 9.015817642211914,
            "white": 17.371124267578125,
            "middle eastern": 18.558528900146484,
            "latino hispanic": 25.72031021118164
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0013900332851335406,
            "disgust": 9.102739856369294e-14,
            "fear": 7.218942528197658e-07,
            "happy": 12.68751049041748,
            "sad": 0.00534967752173543,
            "surprise": 6.383489790096064e-07,
            "neutral": 87.30574798583984
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 405,
            "y": 487,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.99,
        "gender": {
            "Woman": 17.313671112060547,
            "Man": 82.68632507324219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 17.197187423706055,
            "indian": 0.5007352828979492,
            "black": 0.3887743353843689,
            "white": 74.259521484375,
            "middle eastern": 3.6240367889404297,
            "latino hispanic": 4.029743671417236
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.004867889918386936,
            "disgust": 1.7753043479729058e-08,
            "fear": 1.731178053887561e-05,
            "happy": 99.98096466064453,
            "sad": 0.00032348110107704997,
            "surprise": 5.592842717305757e-05,
            "neutral": 0.01376332063227892
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 659,
            "y": 476,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 85.20948028564453,
            "Man": 14.790518760681152
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.20962589979171753,
            "indian": 0.734199047088623,
            "black": 0.05384555086493492,
            "white": 73.86101531982422,
            "middle eastern": 15.398576736450195,
            "latino hispanic": 9.742741584777832
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.139492067954052e-07,
            "disgust": 1.0394297644822359e-09,
            "fear": 0.0005754369776695967,
            "happy": 99.97164154052734,
            "sad": 2.266896808578167e-05,
            "surprise": 0.0020307565573602915,
            "neutral": 0.02571807987987995
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 158,
            "y": 510,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.004121715202927589,
            "Man": 99.9958724975586
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.1631890351491165e-07,
            "indian": 5.138203960086685e-07,
            "black": 2.1413079309695604e-08,
            "white": 99.97184753417969,
            "middle eastern": 0.0138847716152668,
            "latino hispanic": 0.014272392727434635
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 11.828368186950684,
            "disgust": 2.5849841364666837e-11,
            "fear": 1.2474417686462402,
            "happy": 2.977654912683647e-05,
            "sad": 64.66763305664062,
            "surprise": 8.592919442662605e-08,
            "neutral": 22.256534576416016
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 29,
        "region": {
            "x": 1028,
            "y": 476,
            "w": 80,
            "h": 80,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.001963182585313916,
            "Man": 99.99803161621094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.8804379105567932,
            "indian": 3.782992362976074,
            "black": 0.4394771456718445,
            "white": 38.98577117919922,
            "middle eastern": 38.29974365234375,
            "latino hispanic": 17.611576080322266
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.05771131068468094,
            "disgust": 0.004053068347275257,
            "fear": 1.895100712776184,
            "happy": 88.42210388183594,
            "sad": 0.39202621579170227,
            "surprise": 0.004224193282425404,
            "neutral": 9.224786758422852
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 453,
            "y": 531,
            "w": 79,
            "h": 79,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 98.73345947265625,
            "Man": 1.2665421962738037
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.945982813835144,
            "indian": 0.6395373940467834,
            "black": 0.08001986891031265,
            "white": 76.0029296875,
            "middle eastern": 9.965339660644531,
            "latino hispanic": 11.366202354431152
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.912412962061353e-05,
            "disgust": 1.1097070817811527e-08,
            "fear": 0.000949299312196672,
            "happy": 99.76624298095703,
            "sad": 1.4972035387472715e-05,
            "surprise": 0.1616976261138916,
            "neutral": 0.07103417068719864
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 324,
            "y": 540,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 43.39801788330078,
            "Man": 56.60197830200195
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.50217342376709,
            "indian": 6.4031219482421875,
            "black": 0.8374391794204712,
            "white": 38.72039794921875,
            "middle eastern": 30.539852142333984,
            "latino hispanic": 20.997020721435547
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.407104137906572e-06,
            "disgust": 1.5545923659487926e-08,
            "fear": 0.003178139915689826,
            "happy": 99.97892761230469,
            "sad": 0.005173651967197657,
            "surprise": 1.7564465451869182e-05,
            "neutral": 0.012700053863227367
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 855,
            "y": 550,
            "w": 82,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 41.090030670166016,
            "Man": 58.909969329833984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.433011054992676,
            "indian": 8.295258522033691,
            "black": 1.9505927562713623,
            "white": 22.719881057739258,
            "middle eastern": 24.28493309020996,
            "latino hispanic": 37.31631851196289
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 5.739158481787854e-08,
            "disgust": 4.948237132540445e-12,
            "fear": 8.14790473668836e-05,
            "happy": 99.99955749511719,
            "sad": 6.763984288227221e-07,
            "surprise": 5.550591595238075e-06,
            "neutral": 0.0003541199548635632
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 758,
            "y": 653,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.71599942445755,
            "Man": 99.28399658203125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 45.698455810546875,
            "indian": 7.45030403137207,
            "black": 4.274091720581055,
            "white": 13.64648151397705,
            "middle eastern": 6.998588562011719,
            "latino hispanic": 21.932079315185547
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.001323319156654179,
            "disgust": 7.906255916623195e-08,
            "fear": 0.006947066634893417,
            "happy": 19.078413009643555,
            "sad": 0.05387702211737633,
            "surprise": 0.6731473207473755,
            "neutral": 80.18628692626953
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 577,
            "y": 577,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.15246020257472992,
            "Man": 99.8475341796875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 55.57460021972656,
            "indian": 8.45414924621582,
            "black": 3.868434190750122,
            "white": 3.8420157432556152,
            "middle eastern": 1.3688175678253174,
            "latino hispanic": 26.891990661621094
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.002333227777853608,
            "disgust": 0.0002142533048754558,
            "fear": 0.020732879638671875,
            "happy": 80.23589324951172,
            "sad": 1.122089147567749,
            "surprise": 0.0006567183299921453,
            "neutral": 18.618083953857422
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 665,
            "y": 568,
            "w": 85,
            "h": 85,
            "left_eye": [
                711,
                600
            ],
            "right_eye": [
                682,
                600
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 97.55516815185547,
            "Man": 2.4448323249816895
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.0574493408203125,
            "indian": 4.555852890014648,
            "black": 0.6357812285423279,
            "white": 38.48357391357422,
            "middle eastern": 20.391185760498047,
            "latino hispanic": 32.876163482666016
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.028113385662436485,
            "disgust": 1.4772957911191043e-05,
            "fear": 1.2205005884170532,
            "happy": 98.73905181884766,
            "sad": 0.0020028359722346067,
            "surprise": 6.13997908658348e-05,
            "neutral": 0.010262634605169296
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 1085,
            "y": 608,
            "w": 85,
            "h": 85,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.12883824110031128,
            "Man": 99.87115478515625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.906205177307129,
            "indian": 13.216994285583496,
            "black": 11.834867477416992,
            "white": 19.265443801879883,
            "middle eastern": 18.514986038208008,
            "latino hispanic": 27.261505126953125
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.172508513671346e-07,
            "disgust": 1.0061926742103641e-13,
            "fear": 2.1630880420175913e-10,
            "happy": 99.9990005493164,
            "sad": 2.1220133206156788e-08,
            "surprise": 1.4354090138724018e-09,
            "neutral": 0.0010022196220234036
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 388,
            "y": 664,
            "w": 86,
            "h": 86,
            "left_eye": [
                445,
                697
            ],
            "right_eye": [
                413,
                699
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.7015609741211,
            "Man": 0.2984426021575928
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 13.311219215393066,
            "indian": 21.884443283081055,
            "black": 43.93568801879883,
            "white": 3.922590732574463,
            "middle eastern": 3.71563982963562,
            "latino hispanic": 13.230422019958496
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 3.709414719832438e-11,
            "disgust": 6.509687177298144e-20,
            "fear": 3.5003833056927725e-13,
            "happy": 99.9531021118164,
            "sad": 2.3279246974539092e-08,
            "surprise": 3.8712372770532966e-05,
            "neutral": 0.046866197139024734
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 503,
            "y": 685,
            "w": 89,
            "h": 89,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.4695242643356323,
            "Man": 99.53047943115234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.173702239990234,
            "indian": 10.739505767822266,
            "black": 4.414614200592041,
            "white": 18.33822250366211,
            "middle eastern": 14.750080108642578,
            "latino hispanic": 38.5838737487793
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.4097360074520111,
            "disgust": 0.001867873826995492,
            "fear": 0.14698617160320282,
            "happy": 0.0845484808087349,
            "sad": 16.960954666137695,
            "surprise": 0.01381438784301281,
            "neutral": 82.38209533691406
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 943,
            "y": 686,
            "w": 87,
            "h": 87,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 95.16845703125,
            "Man": 4.831552505493164
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.306304931640625,
            "indian": 12.651862144470215,
            "black": 7.861655235290527,
            "white": 16.48318862915039,
            "middle eastern": 17.762643814086914,
            "latino hispanic": 36.93434143066406
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.13360238075256348,
            "disgust": 0.001094851060770452,
            "fear": 18.09990692138672,
            "happy": 80.72945404052734,
            "sad": 0.9849802851676941,
            "surprise": 0.0057632094249129295,
            "neutral": 0.045201774686574936
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 201,
            "y": 704,
            "w": 95,
            "h": 95,
            "left_eye": [
                263,
                737
            ],
            "right_eye": [
                229,
                745
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99156951904297,
            "Man": 0.008433313108980656
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.06562451273202896,
            "indian": 0.0573960617184639,
            "black": 0.0013547246344387531,
            "white": 93.76841735839844,
            "middle eastern": 3.3062100410461426,
            "latino hispanic": 2.800992488861084
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.4940711480448954e-05,
            "disgust": 3.640777263003159e-11,
            "fear": 5.2506908104987815e-05,
            "happy": 99.9942626953125,
            "sad": 2.289925987497554e-06,
            "surprise": 0.0004384747298900038,
            "neutral": 0.005232709925621748
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 40,
        "region": {
            "x": 0,
            "y": 832,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.99,
        "gender": {
            "Woman": 14.244418144226074,
            "Man": 85.75557708740234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.12821094691753387,
            "indian": 0.02322750724852085,
            "black": 0.0027256023604422808,
            "white": 95.05135345458984,
            "middle eastern": 3.821591854095459,
            "latino hispanic": 0.972894549369812
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.2090090662240982,
            "disgust": 3.278949160800959e-12,
            "fear": 0.011991013772785664,
            "happy": 0.00016308102931361645,
            "sad": 21.291860580444336,
            "surprise": 1.6283103754233252e-09,
            "neutral": 78.48697662353516
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 858,
            "y": 883,
            "w": 90,
            "h": 90,
            "left_eye": [
                919,
                917
            ],
            "right_eye": [
                886,
                918
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 23.964357376098633,
            "Man": 76.03564453125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 29.717302322387695,
            "indian": 5.470734596252441,
            "black": 2.442992687225342,
            "white": 33.64204788208008,
            "middle eastern": 13.131752014160156,
            "latino hispanic": 15.59516716003418
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.779037067620232e-13,
            "disgust": 3.221141600930762e-18,
            "fear": 4.3655018489019426e-10,
            "happy": 99.99996948242188,
            "sad": 4.445420920262677e-09,
            "surprise": 9.397364664209817e-08,
            "neutral": 2.9753637136309408e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 605,
            "y": 914,
            "w": 92,
            "h": 92,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 99.51766967773438,
            "Man": 0.482336163520813
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.007431036327034235,
            "indian": 0.004875298589468002,
            "black": 6.52469097985886e-05,
            "white": 98.23170471191406,
            "middle eastern": 1.0900605916976929,
            "latino hispanic": 0.6658607125282288
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.805160394496852e-07,
            "disgust": 4.77944073207226e-12,
            "fear": 6.951086834305897e-05,
            "happy": 99.99919891357422,
            "sad": 0.0007234113290905952,
            "surprise": 1.1081350947961255e-08,
            "neutral": 8.024688213481568e-06
        },
        "dominant_emotion": "happy"
    }
]

let floral_design_data3 = [
    {
        "age": 23,
        "region": {
            "x": 264,
            "y": 190,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.6587443351745605,
            "Man": 98.34124755859375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 12.575223922729492,
            "indian": 9.68112564086914,
            "black": 4.466043949127197,
            "white": 22.76030731201172,
            "middle eastern": 19.64630699157715,
            "latino hispanic": 30.87099838256836
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.006183424033224583,
            "disgust": 0.0005012541660107672,
            "fear": 1.0488688945770264,
            "happy": 79.99244689941406,
            "sad": 8.161770820617676,
            "surprise": 0.002898629056289792,
            "neutral": 10.787334442138672
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 618,
            "y": 197,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 95.81593322753906,
            "Man": 4.184066295623779
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.843910813331604,
            "indian": 3.1677000522613525,
            "black": 0.37230372428894043,
            "white": 46.029945373535156,
            "middle eastern": 22.645410537719727,
            "latino hispanic": 25.94072723388672
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.135401660525616e-11,
            "disgust": 1.3852615047413243e-16,
            "fear": 3.820185487390937e-12,
            "happy": 99.99932098388672,
            "sad": 2.778689278670754e-09,
            "surprise": 4.713097911945852e-09,
            "neutral": 0.0006769186002202332
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 40,
        "region": {
            "x": 783,
            "y": 200,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 64.15259552001953,
            "Man": 35.847412109375
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 21.174644470214844,
            "indian": 9.234893798828125,
            "black": 50.9747200012207,
            "white": 3.6075849533081055,
            "middle eastern": 3.342966318130493,
            "latino hispanic": 11.665194511413574
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.2212168127298355,
            "disgust": 0.10192206501960754,
            "fear": 48.257293701171875,
            "happy": 8.396978378295898,
            "sad": 25.038349151611328,
            "surprise": 0.03436620533466339,
            "neutral": 17.949874877929688
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 29,
        "region": {
            "x": 371,
            "y": 206,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 4.392787933349609,
            "Man": 95.60720825195312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9356106519699097,
            "indian": 2.7931947708129883,
            "black": 0.450920045375824,
            "white": 47.76868438720703,
            "middle eastern": 26.28972816467285,
            "latino hispanic": 21.761859893798828
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.830510427680565e-06,
            "disgust": 2.8113067429558214e-09,
            "fear": 2.0604245946742594e-05,
            "happy": 99.9542236328125,
            "sad": 4.058530248585157e-05,
            "surprise": 1.5032366718514822e-05,
            "neutral": 0.04569297283887863
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 704,
            "y": 216,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.24608688056468964,
            "Man": 99.75391387939453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 19.22916603088379,
            "indian": 12.176962852478027,
            "black": 5.523613929748535,
            "white": 19.87810707092285,
            "middle eastern": 20.751930236816406,
            "latino hispanic": 22.440221786499023
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 53.776954650878906,
            "disgust": 0.0015730155864730477,
            "fear": 44.450557708740234,
            "happy": 0.04477132484316826,
            "sad": 1.65511155128479,
            "surprise": 0.037121281027793884,
            "neutral": 0.03390368074178696
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 31,
        "region": {
            "x": 194,
            "y": 269,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 44.60294723510742,
            "Man": 55.39705276489258
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.918394088745117,
            "indian": 8.427068710327148,
            "black": 5.527857303619385,
            "white": 21.475393295288086,
            "middle eastern": 15.691306114196777,
            "latino hispanic": 34.95998001098633
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0025290418416261673,
            "disgust": 1.1780763315982767e-06,
            "fear": 0.43952202796936035,
            "happy": 98.12194061279297,
            "sad": 0.0028757480904459953,
            "surprise": 1.1894805431365967,
            "neutral": 0.24364832043647766
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 1079,
            "y": 222,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.16846328973770142,
            "Man": 99.83153533935547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.56876277923584,
            "indian": 4.979724407196045,
            "black": 2.845463752746582,
            "white": 38.71914291381836,
            "middle eastern": 15.455733299255371,
            "latino hispanic": 22.43117332458496
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.07062302529811859,
            "disgust": 8.06754469522275e-05,
            "fear": 0.5362547636032104,
            "happy": 19.7763614654541,
            "sad": 0.8356581330299377,
            "surprise": 0.06581484526395798,
            "neutral": 78.71520233154297
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 63,
            "y": 222,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.07109609246253967,
            "Man": 99.92890167236328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.8647075891494751,
            "indian": 1.1373159885406494,
            "black": 0.5660746097564697,
            "white": 73.31973266601562,
            "middle eastern": 12.705018997192383,
            "latino hispanic": 11.407151222229004
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.7844772338867188,
            "disgust": 4.0415843614027835e-06,
            "fear": 12.882165908813477,
            "happy": 11.395387649536133,
            "sad": 20.1658878326416,
            "surprise": 0.07717469334602356,
            "neutral": 51.69490432739258
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 962,
            "y": 237,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 17.511037826538086,
            "Man": 82.48896789550781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.7184033393859863,
            "indian": 0.42168954014778137,
            "black": 0.27370500564575195,
            "white": 82.95760345458984,
            "middle eastern": 4.254571914672852,
            "latino hispanic": 8.374027252197266
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00010318710701540112,
            "disgust": 2.9627113207197908e-08,
            "fear": 0.00015409622574225068,
            "happy": 75.03071594238281,
            "sad": 0.006890196353197098,
            "surprise": 0.029613152146339417,
            "neutral": 24.93252944946289
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 1008,
            "y": 289,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.1428920030593872,
            "Man": 98.85710906982422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 94.99949645996094,
            "indian": 1.5297043323516846,
            "black": 0.060751475393772125,
            "white": 0.7095739841461182,
            "middle eastern": 0.01854185201227665,
            "latino hispanic": 2.681931495666504
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.005065882578492165,
            "disgust": 1.1038785032724263e-06,
            "fear": 0.005719489883631468,
            "happy": 99.92552947998047,
            "sad": 0.004244158510118723,
            "surprise": 0.01831095665693283,
            "neutral": 0.041119713336229324
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 292,
            "y": 254,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 98.96556091308594,
            "Man": 1.0344434976577759
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.372601509094238,
            "indian": 4.468576908111572,
            "black": 1.0229018926620483,
            "white": 42.54735565185547,
            "middle eastern": 14.383949279785156,
            "latino hispanic": 31.204620361328125
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.8816909630459122e-07,
            "disgust": 2.019921556406512e-12,
            "fear": 3.102946095623338e-07,
            "happy": 99.34412384033203,
            "sad": 1.395200342813041e-06,
            "surprise": 0.00014197919517755508,
            "neutral": 0.655734658241272
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 830,
            "y": 246,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 75.32350158691406,
            "Man": 24.676496505737305
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0001700262218946591,
            "indian": 2.7214808142161928e-05,
            "black": 2.488906716280326e-07,
            "white": 99.87495422363281,
            "middle eastern": 0.04706871882081032,
            "latino hispanic": 0.07777604460716248
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.2268390655517578,
            "disgust": 0.0002804003015626222,
            "fear": 29.025545120239258,
            "happy": 68.45741271972656,
            "sad": 2.241276741027832,
            "surprise": 0.020007643848657608,
            "neutral": 0.028636788949370384
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 42,
        "region": {
            "x": 438,
            "y": 259,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 73.5668716430664,
            "Man": 26.433128356933594
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 64.45457458496094,
            "indian": 0.4534642696380615,
            "black": 0.09482121467590332,
            "white": 29.43897247314453,
            "middle eastern": 1.7672982215881348,
            "latino hispanic": 3.7908706665039062
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.5365689992904663,
            "disgust": 0.006177151575684547,
            "fear": 0.07520662993192673,
            "happy": 0.909142792224884,
            "sad": 94.90807342529297,
            "surprise": 0.002721828641369939,
            "neutral": 3.5621120929718018
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 527,
            "y": 184,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 5.103952407836914,
            "Man": 94.89605712890625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.077138900756836,
            "indian": 0.6862341165542603,
            "black": 0.08544667065143585,
            "white": 76.79102325439453,
            "middle eastern": 12.705263137817383,
            "latino hispanic": 8.6549072265625
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00036975607508793473,
            "disgust": 2.159854193450883e-05,
            "fear": 0.164794459939003,
            "happy": 92.03632354736328,
            "sad": 0.09223802387714386,
            "surprise": 0.0015163494972512126,
            "neutral": 7.7047343254089355
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 1164,
            "y": 304,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99961853027344,
            "Man": 0.0003834469825960696
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.809948566413368e-06,
            "indian": 6.135513217486732e-07,
            "black": 1.4391899894050653e-09,
            "white": 99.97977447509766,
            "middle eastern": 0.004422765225172043,
            "latino hispanic": 0.015790149569511414
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.001842323923483491,
            "disgust": 2.726960701693315e-08,
            "fear": 0.1534666270017624,
            "happy": 99.76907348632812,
            "sad": 0.00021419025142677128,
            "surprise": 0.07293965667486191,
            "neutral": 0.002463741460815072
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 230,
            "y": 421,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 31.953683853149414,
            "Man": 68.04631042480469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 22.7127628326416,
            "indian": 4.1617536544799805,
            "black": 3.62744402885437,
            "white": 36.8584098815918,
            "middle eastern": 11.605831146240234,
            "latino hispanic": 21.033794403076172
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.5992322005331516e-05,
            "disgust": 1.2252210979113443e-07,
            "fear": 0.01507711410522461,
            "happy": 98.77625274658203,
            "sad": 0.002688502660021186,
            "surprise": 0.014717251993715763,
            "neutral": 1.1912468671798706
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 41,
        "region": {
            "x": 755,
            "y": 394,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.13938379287719727,
            "Man": 99.86061096191406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.149638175964355,
            "indian": 9.961386680603027,
            "black": 2.668774366378784,
            "white": 32.92856216430664,
            "middle eastern": 29.436670303344727,
            "latino hispanic": 14.854972839355469
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 11.943890571594238,
            "disgust": 5.03092572046171e-08,
            "fear": 0.0036987613420933485,
            "happy": 29.48647117614746,
            "sad": 0.2910955250263214,
            "surprise": 0.0009062933968380094,
            "neutral": 58.27393341064453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 1081,
            "y": 399,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 19.061573028564453,
            "Man": 80.93843078613281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.6207950115203857,
            "indian": 3.1102733612060547,
            "black": 0.9424840807914734,
            "white": 41.712223052978516,
            "middle eastern": 15.544591903686523,
            "latino hispanic": 36.06962966918945
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.009269719012081623,
            "disgust": 0.00010039850894827396,
            "fear": 0.012960493564605713,
            "happy": 84.10398864746094,
            "sad": 0.32009732723236084,
            "surprise": 0.017792031168937683,
            "neutral": 15.535797119140625
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 38,
        "region": {
            "x": 399,
            "y": 418,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 3.248339891433716,
            "Man": 96.75166320800781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.262850805185735e-05,
            "indian": 5.815573240397498e-05,
            "black": 1.3771822295893799e-06,
            "white": 99.84772491455078,
            "middle eastern": 0.09277033805847168,
            "latino hispanic": 0.05942140892148018
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 76.28543090820312,
            "disgust": 3.750492396648042e-05,
            "fear": 0.08718705177307129,
            "happy": 23.568315505981445,
            "sad": 0.03236505016684532,
            "surprise": 0.00013224565191194415,
            "neutral": 0.026539728045463562
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 31,
        "region": {
            "x": 33,
            "y": 413,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 4.319915771484375,
            "Man": 95.68008422851562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 66.37516784667969,
            "indian": 4.054096221923828,
            "black": 1.5019668340682983,
            "white": 13.108068466186523,
            "middle eastern": 2.1765217781066895,
            "latino hispanic": 12.784175872802734
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.901778882209328e-07,
            "disgust": 2.7487450724307354e-14,
            "fear": 2.166529611713486e-06,
            "happy": 1.3423808813095093,
            "sad": 0.0013612229377031326,
            "surprise": 5.0395137805026025e-06,
            "neutral": 98.65625762939453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 547,
            "y": 450,
            "w": 72,
            "h": 72,
            "left_eye": [
                594,
                476
            ],
            "right_eye": [
                566,
                477
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 85.69293975830078,
            "Man": 14.307059288024902
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.2035284042358398,
            "indian": 1.4765379428863525,
            "black": 0.5917102694511414,
            "white": 52.671485900878906,
            "middle eastern": 16.003742218017578,
            "latino hispanic": 28.053001403808594
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0708602005138346e-08,
            "disgust": 4.969491056047671e-15,
            "fear": 1.4031380146661832e-07,
            "happy": 99.97532653808594,
            "sad": 1.275541762879584e-06,
            "surprise": 0.015434043481945992,
            "neutral": 0.009246169589459896
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 38,
        "region": {
            "x": 978,
            "y": 457,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.78404998779297,
            "Man": 0.21594026684761047
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 56.726600646972656,
            "indian": 6.337287425994873,
            "black": 0.6971710920333862,
            "white": 17.934289932250977,
            "middle eastern": 6.283081531524658,
            "latino hispanic": 12.021576881408691
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.826961135824149e-09,
            "disgust": 1.5370109512528396e-15,
            "fear": 7.196435003464785e-09,
            "happy": 99.99966430664062,
            "sad": 1.0952473417091824e-07,
            "surprise": 3.354281943757087e-06,
            "neutral": 0.00032493489561602473
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 566,
            "y": 563,
            "w": 33,
            "h": 33,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 3.390767812728882,
            "Man": 96.60923767089844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.972569465637207,
            "indian": 0.7698698043823242,
            "black": 0.11098939925432205,
            "white": 63.53561782836914,
            "middle eastern": 16.424570083618164,
            "latino hispanic": 7.186391830444336
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.14924807846546173,
            "disgust": 3.0132760731049757e-09,
            "fear": 3.6099650859832764,
            "happy": 0.00029671983793377876,
            "sad": 93.99906158447266,
            "surprise": 8.074973720795242e-07,
            "neutral": 2.2414278984069824
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 817,
            "y": 479,
            "w": 79,
            "h": 79,
            "left_eye": [
                867,
                506
            ],
            "right_eye": [
                837,
                510
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 81.91769409179688,
            "Man": 18.08230209350586
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 9.576620101928711,
            "indian": 0.9080677032470703,
            "black": 0.26166221499443054,
            "white": 69.52165985107422,
            "middle eastern": 7.503507137298584,
            "latino hispanic": 12.228485107421875
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.005569858476519585,
            "disgust": 0.0001199382240884006,
            "fear": 6.066936016082764,
            "happy": 93.28416442871094,
            "sad": 0.035301126539707184,
            "surprise": 0.05973409116268158,
            "neutral": 0.5481710433959961
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 303,
            "y": 478,
            "w": 93,
            "h": 93,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 98.44047546386719,
            "Man": 1.5595208406448364
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.6862468719482422,
            "indian": 1.5884644985198975,
            "black": 0.37294527888298035,
            "white": 60.301177978515625,
            "middle eastern": 10.904927253723145,
            "latino hispanic": 25.146236419677734
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.005100376904010773,
            "disgust": 2.2859598175273277e-05,
            "fear": 0.3581558167934418,
            "happy": 99.60820007324219,
            "sad": 0.0262022502720356,
            "surprise": 4.236732274875976e-05,
            "neutral": 0.0022771062795072794
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 139,
            "y": 583,
            "w": 81,
            "h": 81,
            "left_eye": [
                192,
                610
            ],
            "right_eye": [
                163,
                616
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 97.41188049316406,
            "Man": 2.5881271362304688
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 27.090986251831055,
            "indian": 14.474501609802246,
            "black": 7.483397006988525,
            "white": 9.589455604553223,
            "middle eastern": 6.400746822357178,
            "latino hispanic": 34.96091079711914
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 5.038166364101926e-06,
            "disgust": 2.524869646691741e-09,
            "fear": 6.95420203555841e-06,
            "happy": 99.85247039794922,
            "sad": 7.245483720907941e-05,
            "surprise": 0.0005022455588914454,
            "neutral": 0.14694175124168396
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 0,
            "y": 532,
            "w": 100,
            "h": 100,
            "left_eye": [
                50,
                572
            ],
            "right_eye": [
                13,
                576
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.94625091552734,
            "Man": 0.05374348908662796
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.169000625610352,
            "indian": 0.005257861223071814,
            "black": 0.0008877803920768201,
            "white": 91.1939697265625,
            "middle eastern": 0.7273119688034058,
            "latino hispanic": 0.9035722017288208
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.03207778185606003,
            "disgust": 0.08815483003854752,
            "fear": 61.85543441772461,
            "happy": 19.190996170043945,
            "sad": 1.1820518970489502,
            "surprise": 0.01468230877071619,
            "neutral": 17.636600494384766
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 37,
        "region": {
            "x": 409,
            "y": 503,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 53.357452392578125,
            "Man": 46.642547607421875
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 13.016639709472656,
            "indian": 3.715888500213623,
            "black": 1.289654016494751,
            "white": 38.15985107421875,
            "middle eastern": 12.215788841247559,
            "latino hispanic": 31.60218048095703
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.016857298091053963,
            "disgust": 5.419355511548929e-05,
            "fear": 37.33655548095703,
            "happy": 60.60594177246094,
            "sad": 1.0743796825408936,
            "surprise": 0.12309085577726364,
            "neutral": 0.8431193232536316
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 1189,
            "y": 556,
            "w": 85,
            "h": 85,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.89669036865234,
            "Man": 0.10330209881067276
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.9560089111328125,
            "indian": 13.226747512817383,
            "black": 6.171545505523682,
            "white": 24.16309356689453,
            "middle eastern": 24.097719192504883,
            "latino hispanic": 26.384883880615234
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.1234385056013707e-05,
            "disgust": 1.1751400362785408e-13,
            "fear": 2.2668805499392874e-08,
            "happy": 99.15357208251953,
            "sad": 1.8693866365993017e-07,
            "surprise": 0.0006781643605791032,
            "neutral": 0.845736026763916
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 590,
            "y": 776,
            "w": 91,
            "h": 91,
            "left_eye": [
                651,
                811
            ],
            "right_eye": [
                616,
                811
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 72.87176513671875,
            "Man": 27.128231048583984
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 52.26947784423828,
            "indian": 5.465258598327637,
            "black": 2.045363426208496,
            "white": 3.0889692306518555,
            "middle eastern": 1.0093891620635986,
            "latino hispanic": 36.12154769897461
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.3332224625628442e-05,
            "disgust": 5.6212634547136986e-08,
            "fear": 0.0019469237886369228,
            "happy": 98.88671875,
            "sad": 0.0036388414446264505,
            "surprise": 0.01243974082171917,
            "neutral": 1.0952402353286743
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 177,
            "y": 783,
            "w": 89,
            "h": 89,
            "left_eye": [
                236,
                816
            ],
            "right_eye": [
                204,
                819
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 92.74285125732422,
            "Man": 7.257144927978516
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 16.400680541992188,
            "indian": 1.3229376077651978,
            "black": 0.22296085953712463,
            "white": 56.51407241821289,
            "middle eastern": 8.612780570983887,
            "latino hispanic": 16.926570892333984
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.044753503824495e-10,
            "disgust": 6.064938543820042e-17,
            "fear": 1.224046308756499e-09,
            "happy": 99.99713897705078,
            "sad": 7.986454830799516e-10,
            "surprise": 2.7226098609389737e-05,
            "neutral": 0.00282629719004035
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 369,
            "y": 795,
            "w": 91,
            "h": 91,
            "left_eye": [
                431,
                828
            ],
            "right_eye": [
                396,
                828
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.85977172851562,
            "Man": 0.14023146033287048
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 23.862995147705078,
            "indian": 18.26824188232422,
            "black": 17.159500122070312,
            "white": 2.331432342529297,
            "middle eastern": 1.5244001150131226,
            "latino hispanic": 36.85342788696289
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.5696931481361389,
            "disgust": 0.2175242155790329,
            "fear": 2.335571050643921,
            "happy": 27.69491195678711,
            "sad": 28.404056549072266,
            "surprise": 0.3476882576942444,
            "neutral": 40.4305534362793
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 44,
        "region": {
            "x": 814,
            "y": 822,
            "w": 101,
            "h": 101,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.02092350833117962,
            "Man": 99.97907257080078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.004800190683454275,
            "indian": 0.009127257391810417,
            "black": 0.00029799732146784663,
            "white": 96.08740234375,
            "middle eastern": 1.9911279678344727,
            "latino hispanic": 1.9072365760803223
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 32.49750900268555,
            "disgust": 0.10069191455841064,
            "fear": 9.888749122619629,
            "happy": 1.248848557472229,
            "sad": 23.25165367126465,
            "surprise": 1.9323195219039917,
            "neutral": 31.080236434936523
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 31,
        "region": {
            "x": 1030,
            "y": 828,
            "w": 93,
            "h": 93,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 1.7629574537277222,
            "Man": 98.2370376586914
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 29.369190216064453,
            "indian": 13.262179374694824,
            "black": 7.165044784545898,
            "white": 15.605491638183594,
            "middle eastern": 18.437387466430664,
            "latino hispanic": 16.160709381103516
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.9882093667984009,
            "disgust": 1.255971851510306e-16,
            "fear": 0.004290479701012373,
            "happy": 0.03316372632980347,
            "sad": 0.020330974832177162,
            "surprise": 4.6428451128122106e-07,
            "neutral": 98.9540023803711
        },
        "dominant_emotion": "neutral"
    }
]

console.log("Meta Results for Floral Designer:");
const data = floral_design_data.concat(floral_design_data2, floral_design_data3);
console.log(processData(data));