const { processData } = require('../../data_processing.js');

let software_developer_data = [
    {
        "age": 24,
        "region": {
            "x": 315,
            "y": 281,
            "w": 30,
            "h": 30,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 7.680715084075928,
            "Man": 92.31928253173828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.214272499084473,
            "indian": 17.740047454833984,
            "black": 11.434566497802734,
            "white": 17.431049346923828,
            "middle eastern": 23.826663970947266,
            "latino hispanic": 18.353397369384766
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 87.35082244873047,
            "disgust": 1.3571816682815552,
            "fear": 0.5108367204666138,
            "happy": 0.031505685299634933,
            "sad": 10.519597053527832,
            "surprise": 0.02730943262577057,
            "neutral": 0.2027522623538971
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 30,
        "region": {
            "x": 423,
            "y": 285,
            "w": 27,
            "h": 27,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 7.337400913238525,
            "Man": 92.66259765625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9213411808013916,
            "indian": 2.871941566467285,
            "black": 0.38431358337402344,
            "white": 61.52909469604492,
            "middle eastern": 22.232906341552734,
            "latino hispanic": 12.060407638549805
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 97.37994384765625,
            "disgust": 1.1212619938305579e-05,
            "fear": 0.0827319398522377,
            "happy": 0.02746492624282837,
            "sad": 2.1552772521972656,
            "surprise": 6.680525530100567e-06,
            "neutral": 0.35456234216690063
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 38,
        "region": {
            "x": 478,
            "y": 286,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 2.104367971420288,
            "Man": 97.8956298828125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.716411590576172,
            "indian": 8.01526927947998,
            "black": 3.2281365394592285,
            "white": 51.81673049926758,
            "middle eastern": 21.112468719482422,
            "latino hispanic": 11.110981941223145
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 88.54995727539062,
            "disgust": 9.049749678524677e-06,
            "fear": 1.0742487907409668,
            "happy": 1.996711254119873,
            "sad": 1.5479215383529663,
            "surprise": 0.03102714754641056,
            "neutral": 6.800131320953369
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 28,
        "region": {
            "x": 196,
            "y": 291,
            "w": 29,
            "h": 29,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.5104821920394897,
            "Man": 99.48951721191406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.990255832672119,
            "indian": 14.83130931854248,
            "black": 3.540221691131592,
            "white": 27.63294219970703,
            "middle eastern": 22.17906951904297,
            "latino hispanic": 25.826200485229492
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.008084539324045181,
            "disgust": 0.0009164614020846784,
            "fear": 0.04771159216761589,
            "happy": 97.05732727050781,
            "sad": 0.9267587065696716,
            "surprise": 0.0069636208936572075,
            "neutral": 1.9522409439086914
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 535,
            "y": 289,
            "w": 29,
            "h": 29,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 1.747213363647461,
            "Man": 98.25279235839844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.625232696533203,
            "indian": 8.263087272644043,
            "black": 2.113116979598999,
            "white": 29.829397201538086,
            "middle eastern": 30.769546508789062,
            "latino hispanic": 25.399621963500977
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 43.781532287597656,
            "disgust": 2.0600140260285116e-08,
            "fear": 0.038595523685216904,
            "happy": 0.12101224064826965,
            "sad": 1.200585126876831,
            "surprise": 0.00044237152906134725,
            "neutral": 54.85783767700195
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 150,
            "y": 292,
            "w": 28,
            "h": 28,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.2235565036535263,
            "Man": 99.77644348144531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.027999037876725197,
            "indian": 0.7143405079841614,
            "black": 0.043981801718473434,
            "white": 67.58898162841797,
            "middle eastern": 28.396785736083984,
            "latino hispanic": 3.2279133796691895
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.005518674850464,
            "disgust": 1.4554784684150945e-05,
            "fear": 0.029228586703538895,
            "happy": 39.246986389160156,
            "sad": 0.47691798210144043,
            "surprise": 0.0014194970717653632,
            "neutral": 58.23991394042969
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 365,
            "y": 292,
            "w": 27,
            "h": 27,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.8439160585403442,
            "Man": 99.15608978271484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00012082623288733885,
            "indian": 0.0001684695016592741,
            "black": 6.8510024675561e-07,
            "white": 99.62411499023438,
            "middle eastern": 0.2471209019422531,
            "latino hispanic": 0.12846477329730988
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.480233907699585,
            "disgust": 1.3793479411106091e-05,
            "fear": 0.004890936426818371,
            "happy": 0.031047841534018517,
            "sad": 41.67308044433594,
            "surprise": 4.3055177229689434e-05,
            "neutral": 54.81069564819336
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 768,
            "y": 296,
            "w": 28,
            "h": 28,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 7.394218444824219,
            "Man": 92.60578918457031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.41288676857948303,
            "indian": 3.4016366004943848,
            "black": 0.19405725598335266,
            "white": 49.26803970336914,
            "middle eastern": 38.68586730957031,
            "latino hispanic": 8.03750991821289
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5462648868560791,
            "disgust": 0.07011250406503677,
            "fear": 3.252023935317993,
            "happy": 1.6436004638671875,
            "sad": 59.297401428222656,
            "surprise": 1.487037181854248,
            "neutral": 33.70356369018555
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 28,
        "region": {
            "x": 105,
            "y": 299,
            "w": 27,
            "h": 27,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 4.96887731552124,
            "Man": 95.03112030029297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.01998976804316044,
            "indian": 0.032459624111652374,
            "black": 0.002809619065374136,
            "white": 96.07793426513672,
            "middle eastern": 2.618969440460205,
            "latino hispanic": 1.2478357553482056
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.987696647644043,
            "disgust": 3.5529308384241176e-09,
            "fear": 0.17452828586101532,
            "happy": 0.5355668067932129,
            "sad": 1.165856122970581,
            "surprise": 1.3212914382165764e-05,
            "neutral": 97.13634490966797
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 21,
            "y": 298,
            "w": 29,
            "h": 29,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 2.99369740486145,
            "Man": 97.00629425048828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.8396908044815063,
            "indian": 6.820558071136475,
            "black": 0.6735166311264038,
            "white": 39.123817443847656,
            "middle eastern": 35.45340347290039,
            "latino hispanic": 16.08901023864746
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.057998619973659515,
            "disgust": 0.0004830524558201432,
            "fear": 5.990756988525391,
            "happy": 93.0197982788086,
            "sad": 0.5683369040489197,
            "surprise": 0.30249112844467163,
            "neutral": 0.06013242527842522
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 69,
            "y": 298,
            "w": 34,
            "h": 34,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 8.183728218078613,
            "Man": 91.81626892089844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.017171384766697884,
            "indian": 0.6700933575630188,
            "black": 0.005158514715731144,
            "white": 45.23628234863281,
            "middle eastern": 52.75519943237305,
            "latino hispanic": 1.3160945177078247
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.1251373142004013,
            "disgust": 1.2609117031097412,
            "fear": 8.525740623474121,
            "happy": 73.6882553100586,
            "sad": 6.827127456665039,
            "surprise": 0.010458759032189846,
            "neutral": 9.562366485595703
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 290,
            "y": 299,
            "w": 29,
            "h": 29,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.080972671508789,
            "Man": 98.91903686523438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.232062339782715,
            "indian": 12.887434959411621,
            "black": 12.992259979248047,
            "white": 21.73368263244629,
            "middle eastern": 34.32244110107422,
            "latino hispanic": 12.83211898803711
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.13991117477417,
            "disgust": 0.0795401781797409,
            "fear": 2.262423276901245,
            "happy": 0.15985451638698578,
            "sad": 37.437076568603516,
            "surprise": 0.0024620923213660717,
            "neutral": 58.918739318847656
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 397,
            "y": 299,
            "w": 29,
            "h": 29,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 32.842002868652344,
            "Man": 67.15799713134766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.2495698928833008,
            "indian": 4.036294937133789,
            "black": 0.6339521408081055,
            "white": 46.003448486328125,
            "middle eastern": 31.432220458984375,
            "latino hispanic": 16.644515991210938
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.000116229057312,
            "disgust": 0.08888380974531174,
            "fear": 5.419301986694336,
            "happy": 26.896089553833008,
            "sad": 23.095230102539062,
            "surprise": 0.03153926879167557,
            "neutral": 43.46883773803711
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 689,
            "y": 313,
            "w": 36,
            "h": 36,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.9657028317451477,
            "Man": 99.03429412841797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.22653289139270782,
            "indian": 1.1479817628860474,
            "black": 0.08267892897129059,
            "white": 59.618507385253906,
            "middle eastern": 28.670963287353516,
            "latino hispanic": 10.253328323364258
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 33.44220733642578,
            "disgust": 3.645962953567505,
            "fear": 21.633941650390625,
            "happy": 0.8076590895652771,
            "sad": 27.915990829467773,
            "surprise": 1.4371051788330078,
            "neutral": 11.117140769958496
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 32,
        "region": {
            "x": 874,
            "y": 313,
            "w": 33,
            "h": 33,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.047249987721443176,
            "Man": 99.9527587890625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9457340240478516,
            "indian": 4.54594612121582,
            "black": 0.4004083573818207,
            "white": 37.75091552734375,
            "middle eastern": 37.75429153442383,
            "latino hispanic": 18.60270118713379
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.7259303331375122,
            "disgust": 6.300727367401123,
            "fear": 40.3216552734375,
            "happy": 20.085742950439453,
            "sad": 14.227911949157715,
            "surprise": 0.06848610192537308,
            "neutral": 18.269540786743164
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 29,
        "region": {
            "x": 225,
            "y": 301,
            "w": 29,
            "h": 29,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 31.821533203125,
            "Man": 68.178466796875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.5093348026275635,
            "indian": 1.6586568355560303,
            "black": 0.07831532508134842,
            "white": 66.83207702636719,
            "middle eastern": 23.848613739013672,
            "latino hispanic": 7.073001384735107
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 26.336929321289062,
            "disgust": 0.018115468323230743,
            "fear": 18.95800018310547,
            "happy": 0.011142558418214321,
            "sad": 31.51104164123535,
            "surprise": 0.008536620996892452,
            "neutral": 23.15622901916504
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 35,
        "region": {
            "x": 167,
            "y": 317,
            "w": 36,
            "h": 36,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.37078797817230225,
            "Man": 99.62921142578125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0953255444765091,
            "indian": 4.731847763061523,
            "black": 0.04873277246952057,
            "white": 25.547565460205078,
            "middle eastern": 62.88136672973633,
            "latino hispanic": 6.695164680480957
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.1910163164138794,
            "disgust": 0.00816110335290432,
            "fear": 1.7720752954483032,
            "happy": 0.26659277081489563,
            "sad": 84.81868743896484,
            "surprise": 0.0422230139374733,
            "neutral": 11.90124225616455
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 939,
            "y": 319,
            "w": 36,
            "h": 36,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.05878392979502678,
            "Man": 99.94121551513672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.757960319519043,
            "indian": 12.14545726776123,
            "black": 3.893415927886963,
            "white": 23.050931930541992,
            "middle eastern": 28.271644592285156,
            "latino hispanic": 22.880598068237305
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.5085474848747253,
            "disgust": 0.31906700134277344,
            "fear": 16.98188018798828,
            "happy": 21.572792053222656,
            "sad": 41.46809768676758,
            "surprise": 0.8745684027671814,
            "neutral": 18.275047302246094
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 26,
        "region": {
            "x": 450,
            "y": 326,
            "w": 38,
            "h": 38,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 35.17301559448242,
            "Man": 64.82698059082031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1228736862540245,
            "indian": 0.22801022231578827,
            "black": 0.030913129448890686,
            "white": 90.31014251708984,
            "middle eastern": 7.241095066070557,
            "latino hispanic": 2.0669517517089844
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.09016057848930359,
            "disgust": 4.2284922528779134e-05,
            "fear": 22.30223846435547,
            "happy": 0.5636087656021118,
            "sad": 76.9627914428711,
            "surprise": 9.83424911282782e-07,
            "neutral": 0.08115992695093155
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 448,
            "y": 301,
            "w": 32,
            "h": 32,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.19344057142734528,
            "Man": 99.80656433105469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.017211761325597763,
            "indian": 0.8235395550727844,
            "black": 0.018550194799900055,
            "white": 47.75825500488281,
            "middle eastern": 47.332847595214844,
            "latino hispanic": 4.049594879150391
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.387253761291504,
            "disgust": 2.8536417484283447,
            "fear": 1.606536626815796,
            "happy": 61.46592330932617,
            "sad": 6.807319164276123,
            "surprise": 1.1880896091461182,
            "neutral": 22.691232681274414
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 40,
        "region": {
            "x": 773,
            "y": 324,
            "w": 42,
            "h": 42,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.07886765152215958,
            "Man": 99.92112731933594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.075307846069336,
            "indian": 16.35477638244629,
            "black": 23.572702407836914,
            "white": 11.122575759887695,
            "middle eastern": 14.751086235046387,
            "latino hispanic": 21.123559951782227
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 27.68928337097168,
            "disgust": 1.6739115715026855,
            "fear": 15.61466121673584,
            "happy": 14.939987182617188,
            "sad": 7.9606218338012695,
            "surprise": 0.471689373254776,
            "neutral": 31.649852752685547
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 1,
            "y": 330,
            "w": 37,
            "h": 37,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.06438126415014267,
            "Man": 99.93562316894531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.2924160957336426,
            "indian": 6.2535176277160645,
            "black": 1.0770779848098755,
            "white": 34.059669494628906,
            "middle eastern": 34.006370544433594,
            "latino hispanic": 21.310945510864258
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.661163155920804e-05,
            "disgust": 9.118166417465545e-06,
            "fear": 0.18156881630420685,
            "happy": 96.44782257080078,
            "sad": 0.0850796326994896,
            "surprise": 0.0030287583358585835,
            "neutral": 3.282414436340332
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 369,
            "y": 330,
            "w": 39,
            "h": 39,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.24202299118041992,
            "Man": 99.75797271728516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1575048416852951,
            "indian": 1.692138910293579,
            "black": 0.26610660552978516,
            "white": 61.3382453918457,
            "middle eastern": 25.487171173095703,
            "latino hispanic": 11.05884075164795
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.997711246483959e-05,
            "disgust": 8.359186722373124e-06,
            "fear": 0.03527431935071945,
            "happy": 95.94641876220703,
            "sad": 0.010501435026526451,
            "surprise": 0.00899431947618723,
            "neutral": 3.9987661838531494
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 337,
            "y": 304,
            "w": 34,
            "h": 34,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.18771883845329285,
            "Man": 99.8122787475586
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 18.663625717163086,
            "indian": 12.15256118774414,
            "black": 30.867937088012695,
            "white": 7.968782424926758,
            "middle eastern": 5.513064861297607,
            "latino hispanic": 24.834030151367188
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.05470908433198929,
            "disgust": 0.09470658004283905,
            "fear": 0.9549472332000732,
            "happy": 2.571438789367676,
            "sad": 20.976253509521484,
            "surprise": 0.00279486202634871,
            "neutral": 75.34515380859375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 639,
            "y": 305,
            "w": 29,
            "h": 29,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.585897445678711,
            "Man": 98.41410064697266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.040509223937988,
            "indian": 39.0261344909668,
            "black": 8.176448822021484,
            "white": 12.524065017700195,
            "middle eastern": 16.410322189331055,
            "latino hispanic": 12.822525978088379
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 4.352723121643066,
            "disgust": 0.00023573609360028058,
            "fear": 3.8978946208953857,
            "happy": 11.308812141418457,
            "sad": 4.370038032531738,
            "surprise": 0.01927059143781662,
            "neutral": 76.051025390625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 740,
            "y": 315,
            "w": 34,
            "h": 34,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.5038496255874634,
            "Man": 98.49615478515625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 18.263444900512695,
            "indian": 21.059967041015625,
            "black": 16.78535270690918,
            "white": 10.850434303283691,
            "middle eastern": 16.8747501373291,
            "latino hispanic": 16.166051864624023
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 30.93106460571289,
            "disgust": 0.5678417086601257,
            "fear": 4.233886241912842,
            "happy": 2.8230080604553223,
            "sad": 31.96957778930664,
            "surprise": 0.03899218142032623,
            "neutral": 29.435630798339844
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 34,
        "region": {
            "x": 259,
            "y": 322,
            "w": 30,
            "h": 30,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 6.5645036697387695,
            "Man": 93.43549346923828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 26.327774047851562,
            "indian": 2.7005951404571533,
            "black": 0.5640348196029663,
            "white": 44.12112808227539,
            "middle eastern": 11.178496360778809,
            "latino hispanic": 15.1079740524292
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 10.944207191467285,
            "disgust": 0.003596079535782337,
            "fear": 41.12022399902344,
            "happy": 4.259087085723877,
            "sad": 41.99042510986328,
            "surprise": 0.11290914565324783,
            "neutral": 1.569549560546875
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 29,
        "region": {
            "x": 484,
            "y": 315,
            "w": 30,
            "h": 30,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 12.683669090270996,
            "Man": 87.31632995605469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.031445503234863,
            "indian": 13.281209945678711,
            "black": 6.289056777954102,
            "white": 18.81804847717285,
            "middle eastern": 19.124679565429688,
            "latino hispanic": 29.45556640625
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.5971946716308594,
            "disgust": 3.662663698196411,
            "fear": 11.514556884765625,
            "happy": 0.04020773619413376,
            "sad": 79.78168487548828,
            "surprise": 0.04960768297314644,
            "neutral": 1.3540785312652588
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 589,
            "y": 316,
            "w": 28,
            "h": 28,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 1.0646271705627441,
            "Man": 98.93537902832031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7388437986373901,
            "indian": 1.705041527748108,
            "black": 0.17960336804389954,
            "white": 69.72561645507812,
            "middle eastern": 17.2946834564209,
            "latino hispanic": 10.35621166229248
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 43.46720886230469,
            "disgust": 1.161811815109104e-05,
            "fear": 0.1484520435333252,
            "happy": 0.21729986369609833,
            "sad": 41.30917739868164,
            "surprise": 1.833426267694449e-06,
            "neutral": 14.857852935791016
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 31,
        "region": {
            "x": 850,
            "y": 334,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.9795206785202026,
            "Man": 98.02047729492188
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.788464546203613,
            "indian": 29.941341400146484,
            "black": 15.969231605529785,
            "white": 12.523741722106934,
            "middle eastern": 15.081925392150879,
            "latino hispanic": 17.695295333862305
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 0.005609432701021433,
            "disgust": 0.20485934615135193,
            "fear": 88.87850189208984,
            "happy": 0.0007123204995878041,
            "sad": 10.859143257141113,
            "surprise": 0.005534392315894365,
            "neutral": 0.04562900960445404
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 35,
        "region": {
            "x": 98,
            "y": 338,
            "w": 28,
            "h": 28,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 9.839134216308594,
            "Man": 90.16087341308594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.6244768500328064,
            "indian": 0.5199488997459412,
            "black": 0.08640027046203613,
            "white": 67.0020523071289,
            "middle eastern": 18.32400131225586,
            "latino hispanic": 13.44312572479248
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.5104927115316968e-05,
            "disgust": 5.137737346672111e-08,
            "fear": 0.00013723853044211864,
            "happy": 99.44631958007812,
            "sad": 0.006772567983716726,
            "surprise": 0.0005911419284529984,
            "neutral": 0.5461640954017639
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 512,
            "y": 338,
            "w": 32,
            "h": 32,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 5.90908145904541,
            "Man": 94.09091186523438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.79490065574646,
            "indian": 21.57025909423828,
            "black": 1.0214552879333496,
            "white": 23.273313522338867,
            "middle eastern": 37.68999099731445,
            "latino hispanic": 14.650075912475586
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 4.230094909667969,
            "disgust": 0.20005175471305847,
            "fear": 34.86273956298828,
            "happy": 0.0007496801554225385,
            "sad": 55.21075439453125,
            "surprise": 0.0007817550213076174,
            "neutral": 5.494834899902344
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 36,
        "region": {
            "x": 219,
            "y": 340,
            "w": 29,
            "h": 29,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 62.689937591552734,
            "Man": 37.310062408447266
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.42009320855140686,
            "indian": 3.0050606727600098,
            "black": 0.6188670992851257,
            "white": 63.8936653137207,
            "middle eastern": 24.003189086914062,
            "latino hispanic": 8.059126853942871
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6486459970474243,
            "disgust": 0.03212561085820198,
            "fear": 6.517555236816406,
            "happy": 6.961774488445371e-05,
            "sad": 91.79935455322266,
            "surprise": 0.0005285917432047427,
            "neutral": 0.0017200454603880644
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 28,
        "region": {
            "x": 42,
            "y": 330,
            "w": 35,
            "h": 35,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 3.8526062965393066,
            "Man": 96.14739227294922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.540296792984009,
            "indian": 4.559790134429932,
            "black": 0.5308381915092468,
            "white": 40.60203170776367,
            "middle eastern": 32.26261901855469,
            "latino hispanic": 19.504425048828125
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.018632493913173676,
            "disgust": 0.16443267464637756,
            "fear": 48.83879089355469,
            "happy": 32.22433853149414,
            "sad": 6.21878719329834,
            "surprise": 0.0005527621251530945,
            "neutral": 12.53447151184082
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 32,
        "region": {
            "x": 322,
            "y": 343,
            "w": 33,
            "h": 33,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 4.052824020385742,
            "Man": 95.94717407226562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.049904633313417435,
            "indian": 0.5373175144195557,
            "black": 0.01776748336851597,
            "white": 66.26225280761719,
            "middle eastern": 26.769641876220703,
            "latino hispanic": 6.36312198638916
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.4981125079648336e-06,
            "disgust": 1.0435811242937021e-10,
            "fear": 0.000700003991369158,
            "happy": 99.93295288085938,
            "sad": 0.0003094472049269825,
            "surprise": 0.0019250797340646386,
            "neutral": 0.06410075724124908
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 750,
            "y": 381,
            "w": 39,
            "h": 39,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 72.13526916503906,
            "Man": 27.86473274230957
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.695221900939941,
            "indian": 15.635783195495605,
            "black": 6.888598918914795,
            "white": 21.20477867126465,
            "middle eastern": 24.596477508544922,
            "latino hispanic": 22.979143142700195
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 8.497347153024748e-06,
            "disgust": 1.3068003568150743e-08,
            "fear": 0.0016972272424027324,
            "happy": 98.888427734375,
            "sad": 0.001036370638757944,
            "surprise": 0.013936594128608704,
            "neutral": 1.0949023962020874
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 192,
            "y": 359,
            "w": 41,
            "h": 41,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 52.53502655029297,
            "Man": 47.4649772644043
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.251702785491943,
            "indian": 9.12932300567627,
            "black": 1.502293348312378,
            "white": 27.99969482421875,
            "middle eastern": 32.60199737548828,
            "latino hispanic": 22.514989852905273
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 8.868324741229117e-09,
            "disgust": 5.869636374167264e-13,
            "fear": 6.519522139569744e-05,
            "happy": 99.95482635498047,
            "sad": 1.392953890899662e-06,
            "surprise": 0.00017654710973147303,
            "neutral": 0.04493376985192299
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 474,
            "y": 368,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.2662121653556824,
            "Man": 99.7337875366211
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0026001138612627983,
            "indian": 0.007395839784294367,
            "black": 0.00014047785953152925,
            "white": 95.88899993896484,
            "middle eastern": 2.9431376457214355,
            "latino hispanic": 1.1577235460281372
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.31370460987091064,
            "disgust": 2.189688588869615e-13,
            "fear": 0.006319933105260134,
            "happy": 0.0032069645822048187,
            "sad": 0.5099120736122131,
            "surprise": 1.078160005718587e-09,
            "neutral": 99.16685485839844
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 569,
            "y": 368,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.1825106292963028,
            "Man": 99.81748962402344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.6344099044799805,
            "indian": 55.383121490478516,
            "black": 8.728766441345215,
            "white": 4.537222862243652,
            "middle eastern": 4.204849720001221,
            "latino hispanic": 20.511632919311523
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 0.000991140492260456,
            "disgust": 1.4950508386846195e-07,
            "fear": 0.004179659765213728,
            "happy": 0.6141988635063171,
            "sad": 0.011504840105772018,
            "surprise": 0.013982166536152363,
            "neutral": 99.35514831542969
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 71,
            "y": 373,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.40057286620140076,
            "Man": 99.59941864013672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.30532875657081604,
            "indian": 1.5701450109481812,
            "black": 0.19078853726387024,
            "white": 61.84759521484375,
            "middle eastern": 24.618314743041992,
            "latino hispanic": 11.46783447265625
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.013053901493549347,
            "disgust": 7.303130405489355e-05,
            "fear": 0.015117812901735306,
            "happy": 96.08990478515625,
            "sad": 0.06503148376941681,
            "surprise": 0.04962923005223274,
            "neutral": 3.767195224761963
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 44,
        "region": {
            "x": 860,
            "y": 374,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 3.0010125637054443,
            "Man": 96.99898529052734
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0783906951546669,
            "indian": 0.22118999063968658,
            "black": 0.008463837206363678,
            "white": 88.0707015991211,
            "middle eastern": 6.906980037689209,
            "latino hispanic": 4.714283466339111
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.558519428130239e-05,
            "disgust": 2.6149258314234203e-09,
            "fear": 1.5038098354125395e-05,
            "happy": 92.2307357788086,
            "sad": 0.01392372790724039,
            "surprise": 3.6205768992658705e-05,
            "neutral": 7.755212306976318
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 954,
            "y": 382,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 5.434689998626709,
            "Man": 94.56531524658203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.850857138633728,
            "indian": 4.084377288818359,
            "black": 0.9166682958602905,
            "white": 44.37322235107422,
            "middle eastern": 29.989526748657227,
            "latino hispanic": 18.78535270690918
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.7295338921030634e-06,
            "disgust": 8.084020258758429e-11,
            "fear": 0.0013380663003772497,
            "happy": 99.978515625,
            "sad": 1.4256102076615207e-05,
            "surprise": 0.007853938266634941,
            "neutral": 0.012279951013624668
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 540,
            "y": 420,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.21543435752391815,
            "Man": 99.78456115722656
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.030490396544337273,
            "indian": 0.06308262050151825,
            "black": 0.002112868009135127,
            "white": 89.07707214355469,
            "middle eastern": 7.5490498542785645,
            "latino hispanic": 3.278197765350342
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.18714673817157745,
            "disgust": 3.9289202447001514e-10,
            "fear": 0.024865897372364998,
            "happy": 0.052443426102399826,
            "sad": 0.1553591638803482,
            "surprise": 2.461836174916243e-07,
            "neutral": 99.58018493652344
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 41,
        "region": {
            "x": 657,
            "y": 345,
            "w": 44,
            "h": 44,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.19052095711231232,
            "Man": 99.8094711303711
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.1052098274230957,
            "indian": 12.541299819946289,
            "black": 0.5101850032806396,
            "white": 19.89063835144043,
            "middle eastern": 44.83385467529297,
            "latino hispanic": 20.118820190429688
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 6.44449520111084,
            "disgust": 0.16523729264736176,
            "fear": 0.07611163705587387,
            "happy": 10.716618537902832,
            "sad": 6.787055969238281,
            "surprise": 0.03272353485226631,
            "neutral": 75.77776336669922
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 14,
            "y": 426,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 73.60446166992188,
            "Man": 26.395538330078125
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 20.072874069213867,
            "indian": 10.122570991516113,
            "black": 3.521054983139038,
            "white": 19.168947219848633,
            "middle eastern": 12.279716491699219,
            "latino hispanic": 34.834835052490234
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 9.879074059426785e-05,
            "disgust": 1.0881508194504619e-10,
            "fear": 0.0020577050745487213,
            "happy": 99.732177734375,
            "sad": 3.0288829293567687e-06,
            "surprise": 0.21883797645568848,
            "neutral": 0.046816423535346985
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 0,
            "y": 386,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 55.946475982666016,
            "Man": 44.05352783203125
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.37483286857605,
            "indian": 6.89796257019043,
            "black": 0.9537047147750854,
            "white": 30.498149871826172,
            "middle eastern": 35.8407096862793,
            "latino hispanic": 22.43463706970215
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 7.448775107832262e-08,
            "disgust": 9.627736385908747e-10,
            "fear": 0.05489550530910492,
            "happy": 99.93535614013672,
            "sad": 0.005293271504342556,
            "surprise": 6.54974172675793e-08,
            "neutral": 0.0044559151865541935
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 816,
            "y": 348,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.0267612934112549,
            "Man": 98.97323608398438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.02663636952638626,
            "indian": 0.08839593082666397,
            "black": 0.004641380626708269,
            "white": 85.6114273071289,
            "middle eastern": 9.638545036315918,
            "latino hispanic": 4.63035249710083
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.10078808665275574,
            "disgust": 5.009308006265201e-05,
            "fear": 1.223771572113037,
            "happy": 91.44479370117188,
            "sad": 5.536984920501709,
            "surprise": 0.005524377804249525,
            "neutral": 1.6880784034729004
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 37,
        "region": {
            "x": 404,
            "y": 336,
            "w": 39,
            "h": 39,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.2322603464126587,
            "Man": 99.76773834228516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.182496070861816,
            "indian": 8.777024269104004,
            "black": 3.043325185775757,
            "white": 30.584096908569336,
            "middle eastern": 23.642929077148438,
            "latino hispanic": 26.770130157470703
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.386225461959839,
            "disgust": 0.007446195464581251,
            "fear": 0.18635857105255127,
            "happy": 0.06357629597187042,
            "sad": 6.773399353027344,
            "surprise": 0.005864031612873077,
            "neutral": 89.57713317871094
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 792,
            "y": 392,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.5069606900215149,
            "Man": 99.49303436279297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0008515813387930393,
            "indian": 0.006996401119977236,
            "black": 0.00013956904876977205,
            "white": 93.70956420898438,
            "middle eastern": 3.7644035816192627,
            "latino hispanic": 2.5180482864379883
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.173956403974444e-05,
            "disgust": 1.6152329180840752e-06,
            "fear": 0.004283037036657333,
            "happy": 97.90384674072266,
            "sad": 0.0038008042611181736,
            "surprise": 0.0021773416083306074,
            "neutral": 2.0858521461486816
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 993,
            "y": 338,
            "w": 30,
            "h": 35,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.17400458455085754,
            "Man": 99.82599639892578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.1673418283462524,
            "indian": 8.147187232971191,
            "black": 0.47865334153175354,
            "white": 22.29741096496582,
            "middle eastern": 45.389225006103516,
            "latino hispanic": 22.520183563232422
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.000702819088473916,
            "disgust": 7.283625745913014e-05,
            "fear": 0.7919643521308899,
            "happy": 74.83502197265625,
            "sad": 1.0706931352615356,
            "surprise": 0.003372746519744396,
            "neutral": 23.29817008972168
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 887,
            "y": 452,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 94.4740982055664,
            "Man": 5.525904655456543
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 12.068592071533203,
            "indian": 15.86784553527832,
            "black": 4.783756256103516,
            "white": 19.00041389465332,
            "middle eastern": 27.474321365356445,
            "latino hispanic": 20.805076599121094
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.2087650702596875e-07,
            "disgust": 1.1884147832486036e-10,
            "fear": 1.8007497146754758e-06,
            "happy": 99.72761535644531,
            "sad": 0.0077009075321257114,
            "surprise": 4.88258763198246e-07,
            "neutral": 0.26469069719314575
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 902,
            "y": 352,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.888665497303009,
            "Man": 99.11133575439453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 20.590612411499023,
            "indian": 5.092754364013672,
            "black": 1.4964332580566406,
            "white": 30.8377628326416,
            "middle eastern": 12.14047622680664,
            "latino hispanic": 29.84195899963379
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.674367890648682e-10,
            "disgust": 1.8110011222176618e-15,
            "fear": 2.6035529634982346e-11,
            "happy": 99.97760772705078,
            "sad": 2.2529896170908614e-07,
            "surprise": 1.7600847286303178e-06,
            "neutral": 0.022398371249437332
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 236,
            "y": 369,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.34236669540405273,
            "Man": 99.65763854980469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.21811823546886444,
            "indian": 0.5500073432922363,
            "black": 0.03203563019633293,
            "white": 74.78263092041016,
            "middle eastern": 12.922595024108887,
            "latino hispanic": 11.494607925415039
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.948470738483593e-06,
            "disgust": 1.984270942001487e-10,
            "fear": 7.653349712199997e-06,
            "happy": 99.93734741210938,
            "sad": 2.9612285743496614e-06,
            "surprise": 0.05839316546916962,
            "neutral": 0.004246279131621122
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 196,
            "y": 458,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 25.65408706665039,
            "Man": 74.34591674804688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.849316358566284,
            "indian": 8.332552909851074,
            "black": 0.3050141930580139,
            "white": 3.381376266479492,
            "middle eastern": 79.37081909179688,
            "latino hispanic": 5.760928153991699
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 2.053813830116269e-08,
            "disgust": 5.71902331129295e-15,
            "fear": 1.2303912055866562e-10,
            "happy": 99.99864959716797,
            "sad": 1.126864113132342e-08,
            "surprise": 3.2872644606385393e-09,
            "neutral": 0.0013536751503124833
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 282,
            "y": 375,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.29054155945777893,
            "Man": 99.70946502685547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.259683132171631,
            "indian": 7.0075459480285645,
            "black": 1.356727957725525,
            "white": 34.90406799316406,
            "middle eastern": 27.675792694091797,
            "latino hispanic": 24.79618263244629
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00011772404104704037,
            "disgust": 1.3390060757956235e-06,
            "fear": 0.0013705042656511068,
            "happy": 92.7063980102539,
            "sad": 0.001840720186010003,
            "surprise": 0.00024311077140737325,
            "neutral": 7.290026664733887
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 335,
            "y": 382,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.6530324816703796,
            "Man": 99.34696960449219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.06113756448030472,
            "indian": 0.42821595072746277,
            "black": 0.005780620966106653,
            "white": 73.6324234008789,
            "middle eastern": 16.208280563354492,
            "latino hispanic": 9.664168357849121
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.097729089380664e-08,
            "disgust": 4.824295124624886e-14,
            "fear": 1.7161152072731056e-06,
            "happy": 99.98965454101562,
            "sad": 5.99745249019179e-07,
            "surprise": 0.00024178475723601878,
            "neutral": 0.010103454813361168
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 598,
            "y": 499,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.92277526855469,
            "Man": 0.07722508162260056
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.490662097930908,
            "indian": 15.461297035217285,
            "black": 1.2688387632369995,
            "white": 14.159440994262695,
            "middle eastern": 42.75349426269531,
            "latino hispanic": 20.866273880004883
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 9.724759593154886e-07,
            "disgust": 5.950799852882938e-10,
            "fear": 3.827248747256817e-06,
            "happy": 99.54219818115234,
            "sad": 0.0008360181818716228,
            "surprise": 9.555988981446717e-06,
            "neutral": 0.45695528388023376
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 394,
            "y": 508,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 74.11506652832031,
            "Man": 25.88493537902832
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.066619873046875,
            "indian": 12.358110427856445,
            "black": 1.7611198425292969,
            "white": 33.50545883178711,
            "middle eastern": 26.866487503051758,
            "latino hispanic": 21.44220542907715
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.711215696393765e-10,
            "disgust": 1.1973084671658413e-16,
            "fear": 1.5944885944918497e-07,
            "happy": 99.99590301513672,
            "sad": 7.706175253474612e-09,
            "surprise": 0.00024870384368114173,
            "neutral": 0.0038463713135570288
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 621,
            "y": 379,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0022689613979309797,
            "Man": 99.99773406982422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.3637329339981079,
            "indian": 7.992779731750488,
            "black": 0.1993502676486969,
            "white": 21.7860050201416,
            "middle eastern": 53.106204986572266,
            "latino hispanic": 16.55193328857422
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.9454094767570496,
            "disgust": 9.980734466807917e-05,
            "fear": 0.23358877003192902,
            "happy": 64.21048736572266,
            "sad": 1.1778042316436768,
            "surprise": 0.041144173592329025,
            "neutral": 33.39146423339844
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 139,
            "y": 368,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.8543230295181274,
            "Man": 98.14567565917969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.717405378818512,
            "indian": 0.6165770888328552,
            "black": 0.0960615798830986,
            "white": 78.13495635986328,
            "middle eastern": 11.585678100585938,
            "latino hispanic": 8.849325180053711
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0008545492310076952,
            "disgust": 6.65845050207281e-07,
            "fear": 0.0011992924846708775,
            "happy": 99.1416015625,
            "sad": 0.015124352648854256,
            "surprise": 0.007069610524922609,
            "neutral": 0.8341524600982666
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 697,
            "y": 369,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.028223471716046333,
            "Man": 99.9717788696289
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.1050262451171875,
            "indian": 7.7339582443237305,
            "black": 0.4217223823070526,
            "white": 26.555274963378906,
            "middle eastern": 39.41173553466797,
            "latino hispanic": 23.772287368774414
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.6781514489139226e-07,
            "disgust": 1.6520282592000918e-13,
            "fear": 1.7751540326571558e-07,
            "happy": 99.97569274902344,
            "sad": 4.026635735954187e-07,
            "surprise": 4.934794196742587e-05,
            "neutral": 0.024261318147182465
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 299,
            "y": 469,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 85.83592987060547,
            "Man": 14.164074897766113
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 26.345327377319336,
            "indian": 15.385987281799316,
            "black": 14.105889320373535,
            "white": 10.522668838500977,
            "middle eastern": 9.30887508392334,
            "latino hispanic": 24.33125114440918
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.2879505340588366e-08,
            "disgust": 1.156616360846463e-12,
            "fear": 1.7331339918769118e-08,
            "happy": 97.93144226074219,
            "sad": 2.000552740355488e-05,
            "surprise": 4.5600834710057825e-05,
            "neutral": 2.0685012340545654
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 411,
            "y": 398,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.11389458179473877,
            "Man": 99.8861083984375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.0177500118734315e-05,
            "indian": 0.002774081425741315,
            "black": 8.767106010054704e-07,
            "white": 96.57218933105469,
            "middle eastern": 3.2454001903533936,
            "latino hispanic": 0.17962029576301575
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.05725853890180588,
            "disgust": 0.00014446524437516928,
            "fear": 0.5702440142631531,
            "happy": 57.45845031738281,
            "sad": 0.35796740651130676,
            "surprise": 4.612309455871582,
            "neutral": 36.943634033203125
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 776,
            "y": 465,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 14.948444366455078,
            "Man": 85.05155944824219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 49.593605041503906,
            "indian": 12.911972045898438,
            "black": 3.0948383808135986,
            "white": 10.304433822631836,
            "middle eastern": 15.35658073425293,
            "latino hispanic": 8.738564491271973
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.752415043185465e-05,
            "disgust": 1.4715577663082513e-06,
            "fear": 0.004334942437708378,
            "happy": 79.00094604492188,
            "sad": 0.02649347484111786,
            "surprise": 5.3123203542781994e-05,
            "neutral": 20.968122482299805
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 99,
            "y": 451,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 60.197967529296875,
            "Man": 39.802040100097656
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.2882808744907379,
            "indian": 0.9578314423561096,
            "black": 0.09315866976976395,
            "white": 77.71231079101562,
            "middle eastern": 14.093550682067871,
            "latino hispanic": 6.854866981506348
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.3657878041267395,
            "disgust": 6.546826969433539e-10,
            "fear": 0.0015968187944963574,
            "happy": 47.92027282714844,
            "sad": 0.2970690429210663,
            "surprise": 2.402637983323075e-05,
            "neutral": 51.415252685546875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 660,
            "y": 451,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 35.393985748291016,
            "Man": 64.60601806640625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 17.955093383789062,
            "indian": 17.205707550048828,
            "black": 3.843817949295044,
            "white": 12.127842903137207,
            "middle eastern": 10.290719985961914,
            "latino hispanic": 38.576820373535156
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 6.40376383671537e-05,
            "disgust": 1.753345524324601e-10,
            "fear": 1.3161323295207694e-05,
            "happy": 98.8887710571289,
            "sad": 0.001102674170397222,
            "surprise": 0.0006093147094361484,
            "neutral": 1.1094419956207275
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 45,
        "region": {
            "x": 726,
            "y": 496,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0913158729672432,
            "Man": 99.90868377685547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7910071015357971,
            "indian": 0.1384059488773346,
            "black": 0.0048608253709971905,
            "white": 90.40087127685547,
            "middle eastern": 3.9187426567077637,
            "latino hispanic": 4.746110439300537
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00717543438076973,
            "disgust": 1.8784092662392504e-13,
            "fear": 7.165097940742271e-06,
            "happy": 0.5358262062072754,
            "sad": 0.27258121967315674,
            "surprise": 1.3884348391002277e-06,
            "neutral": 99.18441009521484
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 484,
            "y": 455,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 4.8552165031433105,
            "Man": 95.144775390625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0002641747414600104,
            "indian": 0.08712128549814224,
            "black": 7.611345063196495e-05,
            "white": 68.31999969482422,
            "middle eastern": 29.6750431060791,
            "latino hispanic": 1.9174914360046387
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.412846808081298e-11,
            "disgust": 2.3112885189913498e-20,
            "fear": 1.5821981311919808e-12,
            "happy": 99.97731018066406,
            "sad": 4.53636950226155e-09,
            "surprise": 4.6132902298268164e-07,
            "neutral": 0.022694814950227737
        },
        "dominant_emotion": "happy"
    }
]
let software_developer_data2 = [
    {
        "age": 27,
        "region": {
            "x": 843,
            "y": 193,
            "w": 32,
            "h": 32,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 9.772257804870605,
            "Man": 90.22774505615234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9735221266746521,
            "indian": 5.336489677429199,
            "black": 0.7341021299362183,
            "white": 42.37569808959961,
            "middle eastern": 37.28028106689453,
            "latino hispanic": 13.299910545349121
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.3028048574924469,
            "disgust": 2.0802946892217733e-05,
            "fear": 0.006729763932526112,
            "happy": 99.57221984863281,
            "sad": 0.032554201781749725,
            "surprise": 0.0008914803620427847,
            "neutral": 0.08477944135665894
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 316,
            "y": 200,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 17.22117805480957,
            "Man": 82.77882385253906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.07494865357875824,
            "indian": 3.520092725753784,
            "black": 0.17622873187065125,
            "white": 28.971986770629883,
            "middle eastern": 57.148555755615234,
            "latino hispanic": 10.10819149017334
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.5782485008239746,
            "disgust": 1.179458990918647e-06,
            "fear": 8.704257011413574,
            "happy": 83.47347259521484,
            "sad": 6.308542728424072,
            "surprise": 2.303044539075927e-06,
            "neutral": 0.935476541519165
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 40,
        "region": {
            "x": 730,
            "y": 193,
            "w": 37,
            "h": 37,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.589646577835083,
            "Man": 99.41034698486328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.03705587238073349,
            "indian": 0.2669091820716858,
            "black": 0.010590150952339172,
            "white": 78.99890899658203,
            "middle eastern": 16.118736267089844,
            "latino hispanic": 4.567804336547852
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.11007945239543915,
            "disgust": 2.9203229701124656e-07,
            "fear": 0.17162491381168365,
            "happy": 91.72750854492188,
            "sad": 0.3436073064804077,
            "surprise": 0.0005450294120237231,
            "neutral": 7.646643161773682
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 560,
            "y": 205,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.6273475885391235,
            "Man": 98.3726577758789
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.821601867675781,
            "indian": 16.126806259155273,
            "black": 2.9246015548706055,
            "white": 20.60024070739746,
            "middle eastern": 32.63346862792969,
            "latino hispanic": 17.893278121948242
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.17697063088417053,
            "disgust": 2.182004799067272e-09,
            "fear": 6.321914406726137e-05,
            "happy": 99.40184020996094,
            "sad": 0.002310016890987754,
            "surprise": 0.00012867637269664556,
            "neutral": 0.4186851978302002
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 596,
            "y": 215,
            "w": 32,
            "h": 32,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 2.7968902587890625,
            "Man": 97.20310974121094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9454062581062317,
            "indian": 9.90235710144043,
            "black": 0.5895935893058777,
            "white": 26.073665618896484,
            "middle eastern": 44.86420440673828,
            "latino hispanic": 17.624774932861328
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 5.0400710105896,
            "disgust": 0.0005327682592906058,
            "fear": 40.132415771484375,
            "happy": 40.260032653808594,
            "sad": 8.482322692871094,
            "surprise": 0.0027983987238258123,
            "neutral": 6.081830978393555
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 492,
            "y": 223,
            "w": 43,
            "h": 43,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.1386769711971283,
            "Man": 99.86132049560547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.447208881378174,
            "indian": 11.029298782348633,
            "black": 2.1753740310668945,
            "white": 32.48536682128906,
            "middle eastern": 32.86369323730469,
            "latino hispanic": 17.99905776977539
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.711580262053758e-05,
            "disgust": 5.062595898053246e-10,
            "fear": 7.357021786447149e-06,
            "happy": 42.796451568603516,
            "sad": 0.002515197964385152,
            "surprise": 3.487184221739881e-05,
            "neutral": 57.20098114013672
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 412,
            "y": 185,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 0.054052937775850296,
            "Man": 99.9459457397461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.2125051021575928,
            "indian": 10.884320259094238,
            "black": 0.7970422506332397,
            "white": 14.65835189819336,
            "middle eastern": 58.75104522705078,
            "latino hispanic": 13.69672966003418
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.0016693113138899207,
            "disgust": 2.6351004737540396e-17,
            "fear": 4.713130493522177e-12,
            "happy": 99.99711608886719,
            "sad": 6.291334671004734e-07,
            "surprise": 5.982574678708996e-12,
            "neutral": 0.0012141626793891191
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 460,
            "y": 102,
            "w": 187,
            "h": 187,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 3.954432964324951,
            "Man": 96.04556274414062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.40967226028442383,
            "indian": 0.0765976831316948,
            "black": 0.14410531520843506,
            "white": 89.56065368652344,
            "middle eastern": 5.561833381652832,
            "latino hispanic": 4.247136116027832
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.9455270767211914,
            "disgust": 0.005978778470307589,
            "fear": 1.3686227798461914,
            "happy": 96.48814392089844,
            "sad": 0.03793727606534958,
            "surprise": 0.13016270101070404,
            "neutral": 1.0236223936080933
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 799,
            "y": 237,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.0233145952224731,
            "Man": 98.97669219970703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.4405620098114014,
            "indian": 5.3697896003723145,
            "black": 0.6412651538848877,
            "white": 40.170257568359375,
            "middle eastern": 30.994976043701172,
            "latino hispanic": 20.383150100708008
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.7140315321739763e-05,
            "disgust": 8.96181891717196e-13,
            "fear": 5.047929718671185e-08,
            "happy": 13.672799110412598,
            "sad": 0.004396209958940744,
            "surprise": 1.8614615404644042e-09,
            "neutral": 86.32279205322266
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 642,
            "y": 238,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.264493703842163,
            "Man": 98.73550415039062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.966058731079102,
            "indian": 7.049675941467285,
            "black": 2.0087552070617676,
            "white": 34.03622817993164,
            "middle eastern": 25.81503677368164,
            "latino hispanic": 21.124248504638672
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.029925832524895668,
            "disgust": 1.5634672223541202e-08,
            "fear": 0.09512832015752792,
            "happy": 0.00699505303055048,
            "sad": 0.7794467806816101,
            "surprise": 0.012130687944591045,
            "neutral": 99.07637023925781
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 172,
            "y": 246,
            "w": 42,
            "h": 42,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.04460752382874489,
            "Man": 99.95538330078125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.7850022315979004,
            "indian": 10.846765518188477,
            "black": 1.137915015220642,
            "white": 28.484477996826172,
            "middle eastern": 38.005313873291016,
            "latino hispanic": 19.740528106689453
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.9481978416442871,
            "disgust": 4.968304892827291e-06,
            "fear": 1.5350583791732788,
            "happy": 0.5131409764289856,
            "sad": 4.858435153961182,
            "surprise": 0.024873115122318268,
            "neutral": 92.12029266357422
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 938,
            "y": 249,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.10772573202848434,
            "Man": 99.89227294921875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.6996737122535706,
            "indian": 7.221256256103516,
            "black": 0.6272121667861938,
            "white": 24.850427627563477,
            "middle eastern": 50.607765197753906,
            "latino hispanic": 15.993666648864746
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.0003397615219000727,
            "disgust": 2.9437464945658576e-06,
            "fear": 0.00040025715134106576,
            "happy": 79.48446655273438,
            "sad": 0.05539030581712723,
            "surprise": 1.481455001339782e-05,
            "neutral": 20.459383010864258
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 113,
            "y": 299,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.04527042806148529,
            "Man": 99.95472717285156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.025803765282034874,
            "indian": 0.6910755634307861,
            "black": 0.010755865834653378,
            "white": 75.2367935180664,
            "middle eastern": 19.850147247314453,
            "latino hispanic": 4.185431957244873
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.001428411458618939,
            "disgust": 1.7945591679335848e-08,
            "fear": 5.932260036468506,
            "happy": 0.0039487797766923904,
            "sad": 1.456908106803894,
            "surprise": 1.3161287824914325e-05,
            "neutral": 92.60543823242188
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 761,
            "y": 309,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.010613769292831421,
            "Man": 99.98938751220703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.0452194213867188,
            "indian": 9.556524276733398,
            "black": 0.49624383449554443,
            "white": 25.54306411743164,
            "middle eastern": 41.84347152709961,
            "latino hispanic": 21.515478134155273
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.004319904837757349,
            "disgust": 8.365476367178104e-11,
            "fear": 0.37097010016441345,
            "happy": 0.006957921199500561,
            "sad": 2.0999341011047363,
            "surprise": 0.0011989754857495427,
            "neutral": 97.51661682128906
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 890,
            "y": 310,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.029635552316904068,
            "Man": 99.9703598022461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.48635196685791,
            "indian": 9.557841300964355,
            "black": 1.6632440090179443,
            "white": 29.031171798706055,
            "middle eastern": 22.985576629638672,
            "latino hispanic": 28.275808334350586
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.02777172066271305,
            "disgust": 2.8448761213439866e-07,
            "fear": 0.003737508784979582,
            "happy": 99.76942443847656,
            "sad": 0.003434758633375168,
            "surprise": 0.0007276312680914998,
            "neutral": 0.19490574300289154
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 38,
            "y": 313,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.1875905990600586,
            "Man": 99.81240844726562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 31.33481788635254,
            "indian": 4.47219705581665,
            "black": 1.4965647459030151,
            "white": 33.42546081542969,
            "middle eastern": 12.648050308227539,
            "latino hispanic": 16.622907638549805
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.005703771952539682,
            "disgust": 0.0014517989475280046,
            "fear": 0.010241520591080189,
            "happy": 83.33869171142578,
            "sad": 0.10594869405031204,
            "surprise": 0.022942006587982178,
            "neutral": 16.515026092529297
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 525,
            "y": 311,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.5324898362159729,
            "Man": 99.4675064086914
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.117462602451269e-06,
            "indian": 0.00020989685435779393,
            "black": 99.99978637695312,
            "white": 1.7351733383463852e-09,
            "middle eastern": 3.3424130130299545e-10,
            "latino hispanic": 3.254472630942473e-06
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.2790369987487793,
            "disgust": 2.9464933271050597e-10,
            "fear": 0.0028729720506817102,
            "happy": 1.0960016250610352,
            "sad": 0.008918519131839275,
            "surprise": 0.8125764727592468,
            "neutral": 97.80059814453125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 210,
            "y": 316,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.015505582094192505,
            "Man": 99.98448944091797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.029101507738232613,
            "indian": 0.12963369488716125,
            "black": 0.0033276299946010113,
            "white": 85.45365905761719,
            "middle eastern": 8.151498794555664,
            "latino hispanic": 6.232780456542969
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0007500887149944901,
            "disgust": 7.056059070364995e-10,
            "fear": 0.21166890859603882,
            "happy": 0.004202457144856453,
            "sad": 6.344285488128662,
            "surprise": 3.302570576124708e-06,
            "neutral": 93.4390869140625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 421,
            "y": 317,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.033016469329595566,
            "Man": 99.96697998046875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.8452646732330322,
            "indian": 1.9305907487869263,
            "black": 0.2063705325126648,
            "white": 55.55868911743164,
            "middle eastern": 22.440284729003906,
            "latino hispanic": 19.0188045501709
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0004123267426621169,
            "disgust": 1.007964378629822e-09,
            "fear": 0.07661660015583038,
            "happy": 0.07913733273744583,
            "sad": 0.05260663852095604,
            "surprise": 0.001194944721646607,
            "neutral": 99.79003143310547
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 380,
            "y": 259,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.4970431923866272,
            "Man": 99.50296020507812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 26.0977840423584,
            "indian": 17.569875717163086,
            "black": 23.23831558227539,
            "white": 7.136744499206543,
            "middle eastern": 7.101070880889893,
            "latino hispanic": 18.856216430664062
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.04477548599243164,
            "disgust": 4.800252554559847e-06,
            "fear": 0.0005293483263812959,
            "happy": 99.20555877685547,
            "sad": 0.014229848980903625,
            "surprise": 0.0006909417570568621,
            "neutral": 0.7342138886451721
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 601,
            "y": 275,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.07400434464216232,
            "Man": 99.92598724365234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.407496213912964,
            "indian": 14.610795974731445,
            "black": 2.868644952774048,
            "white": 23.123294830322266,
            "middle eastern": 37.29488754272461,
            "latino hispanic": 18.694881439208984
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.08445427566766739,
            "disgust": 1.4752283838959102e-09,
            "fear": 1.3404542207717896,
            "happy": 0.00023280996538233012,
            "sad": 2.7952849864959717,
            "surprise": 7.216567610157654e-05,
            "neutral": 95.77950286865234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 253,
            "y": 286,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 5.477273941040039,
            "Man": 94.52272033691406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.954846382141113,
            "indian": 7.389162540435791,
            "black": 0.866222083568573,
            "white": 32.19303512573242,
            "middle eastern": 39.33285903930664,
            "latino hispanic": 13.263875007629395
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 36.75404357910156,
            "disgust": 0.012861300259828568,
            "fear": 31.304615020751953,
            "happy": 0.38080033659935,
            "sad": 28.27910804748535,
            "surprise": 0.029486211016774178,
            "neutral": 3.2390832901000977
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 30,
        "region": {
            "x": 706,
            "y": 265,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.6206122040748596,
            "Man": 99.37938690185547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.03758406639099121,
            "indian": 1.4139782190322876,
            "black": 0.008266806602478027,
            "white": 31.59454917907715,
            "middle eastern": 61.02046585083008,
            "latino hispanic": 5.925157070159912
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.0004916011821478605,
            "disgust": 5.229773211712363e-12,
            "fear": 1.0500017404556274,
            "happy": 0.00018057353736367077,
            "sad": 1.423715353012085,
            "surprise": 0.00016852376575116068,
            "neutral": 97.52544403076172
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 334,
            "y": 325,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.02171732485294342,
            "Man": 99.97828674316406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2455175369977951,
            "indian": 20.951122283935547,
            "black": 0.28808557987213135,
            "white": 17.791732788085938,
            "middle eastern": 48.220191955566406,
            "latino hispanic": 12.503355979919434
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 3.8990557193756104,
            "disgust": 0.002077677985653281,
            "fear": 37.40480422973633,
            "happy": 4.84532356262207,
            "sad": 8.097310066223145,
            "surprise": 0.04201357811689377,
            "neutral": 45.70941925048828
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 663,
            "y": 350,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.05764612555503845,
            "Man": 99.9423599243164
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.137181758880615,
            "indian": 15.404170989990234,
            "black": 2.0439975261688232,
            "white": 15.448368072509766,
            "middle eastern": 13.097539901733398,
            "latino hispanic": 46.86874008178711
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.01741272769868374,
            "disgust": 2.84889667412358e-09,
            "fear": 1.1015745401382446,
            "happy": 0.0013474177103489637,
            "sad": 2.294222831726074,
            "surprise": 6.860216672066599e-05,
            "neutral": 96.58537292480469
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 976,
            "y": 357,
            "w": 47,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.5587719678878784,
            "Man": 99.44122314453125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.039999134838581085,
            "indian": 0.39384377002716064,
            "black": 0.02428373321890831,
            "white": 72.55369567871094,
            "middle eastern": 22.414615631103516,
            "latino hispanic": 4.573563575744629
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.012199955061078072,
            "disgust": 3.6155627380907163e-09,
            "fear": 0.0001690778008196503,
            "happy": 0.07779426127672195,
            "sad": 0.07105960696935654,
            "surprise": 5.8167461247649044e-05,
            "neutral": 99.8387222290039
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 151,
            "y": 372,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.004890906158834696,
            "Man": 99.99510955810547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0028624136466532946,
            "indian": 2.09143328666687,
            "black": 0.0030336829368025064,
            "white": 23.88608169555664,
            "middle eastern": 69.10984802246094,
            "latino hispanic": 4.906744480133057
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.7235537171363831,
            "disgust": 6.893392878737359e-08,
            "fear": 1.3920857906341553,
            "happy": 0.002167569473385811,
            "sad": 0.8260306715965271,
            "surprise": 0.0022529526613652706,
            "neutral": 97.05390930175781
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 286,
            "y": 393,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.014948591589927673,
            "Man": 99.98505401611328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3731510639190674,
            "indian": 1.7892683744430542,
            "black": 0.23146501183509827,
            "white": 61.75618362426758,
            "middle eastern": 15.407390594482422,
            "latino hispanic": 19.442543029785156
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.01602949947118759,
            "disgust": 1.5526557817224784e-10,
            "fear": 0.000662943406496197,
            "happy": 0.0010454480070620775,
            "sad": 0.4605107009410858,
            "surprise": 8.835524567984976e-06,
            "neutral": 99.52174377441406
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 875,
            "y": 393,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.37825238704681396,
            "Man": 99.62174224853516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.051562309265137,
            "indian": 9.115795135498047,
            "black": 2.7509915828704834,
            "white": 28.87299346923828,
            "middle eastern": 25.01700782775879,
            "latino hispanic": 27.191654205322266
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.28238022327423096,
            "disgust": 1.8288639580532617e-07,
            "fear": 0.011631827801465988,
            "happy": 0.1027195081114769,
            "sad": 0.4494815468788147,
            "surprise": 1.599828465259634e-05,
            "neutral": 99.15376281738281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 442,
            "y": 380,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.010097210295498371,
            "Man": 99.98990631103516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.034958843141794205,
            "indian": 0.12829726934432983,
            "black": 0.005944176111370325,
            "white": 84.12616729736328,
            "middle eastern": 10.188243865966797,
            "latino hispanic": 5.516386985778809
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.1465955674648285,
            "disgust": 9.619890306566958e-07,
            "fear": 0.00025025548529811203,
            "happy": 51.0789794921875,
            "sad": 0.05444449931383133,
            "surprise": 0.0047083268873393536,
            "neutral": 48.71501922607422
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 588,
            "y": 383,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.5516970753669739,
            "Man": 99.44830322265625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 12.21000862121582,
            "indian": 23.238662719726562,
            "black": 7.442529201507568,
            "white": 14.113625526428223,
            "middle eastern": 17.009618759155273,
            "latino hispanic": 25.985559463500977
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.05007277801632881,
            "disgust": 8.119722672006446e-09,
            "fear": 0.022305307909846306,
            "happy": 0.04547588527202606,
            "sad": 0.11545293033123016,
            "surprise": 0.0006196562317200005,
            "neutral": 99.76607513427734
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 742,
            "y": 410,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.2014087289571762,
            "Man": 99.79859924316406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.999059677124023,
            "indian": 11.115249633789062,
            "black": 1.9427504539489746,
            "white": 26.367416381835938,
            "middle eastern": 21.24858283996582,
            "latino hispanic": 30.326942443847656
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0392003171145916,
            "disgust": 9.338964268579275e-09,
            "fear": 0.055551573634147644,
            "happy": 0.003926401026546955,
            "sad": 0.791034460067749,
            "surprise": 0.0005228504887782037,
            "neutral": 99.10977172851562
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 916,
            "y": 459,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.48744556307792664,
            "Man": 99.51255798339844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 46.462066650390625,
            "indian": 14.199650764465332,
            "black": 6.434685707092285,
            "white": 5.053930759429932,
            "middle eastern": 2.2584972381591797,
            "latino hispanic": 25.591171264648438
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.7644132971763611,
            "disgust": 5.629724242339762e-09,
            "fear": 0.0009062982862815261,
            "happy": 0.1592111587524414,
            "sad": 2.1825180053710938,
            "surprise": 7.126378477551043e-05,
            "neutral": 96.89288330078125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 347,
            "y": 469,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.11208533495664597,
            "Man": 99.8879165649414
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00070050242356956,
            "indian": 0.004538336303085089,
            "black": 1.3215614671935327e-05,
            "white": 93.8746109008789,
            "middle eastern": 4.520607948303223,
            "latino hispanic": 1.5995317697525024
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.022326376289129257,
            "disgust": 2.1178117037834454e-08,
            "fear": 0.9379415512084961,
            "happy": 0.0019466456724330783,
            "sad": 1.936333179473877,
            "surprise": 6.4318383010686375e-06,
            "neutral": 97.10144805908203
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 487,
            "y": 513,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 18.635530471801758,
            "Man": 81.36447143554688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 38.08499526977539,
            "indian": 11.3351411819458,
            "black": 3.873842477798462,
            "white": 13.38890552520752,
            "middle eastern": 9.548369407653809,
            "latino hispanic": 23.768756866455078
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.6662871837615967,
            "disgust": 7.275874622791889e-07,
            "fear": 0.8215243220329285,
            "happy": 0.00637965789064765,
            "sad": 8.154568672180176,
            "surprise": 0.005582311190664768,
            "neutral": 87.34565734863281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 530,
            "y": 430,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.02322867140173912,
            "Man": 99.97676849365234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0062305680476129055,
            "indian": 0.17041827738285065,
            "black": 0.0018776372307911515,
            "white": 76.69945526123047,
            "middle eastern": 18.57439613342285,
            "latino hispanic": 4.547617435455322
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.97931170463562,
            "disgust": 3.709813972818665e-05,
            "fear": 3.882059335708618,
            "happy": 0.05853860452771187,
            "sad": 15.668554306030273,
            "surprise": 0.0025382060557603836,
            "neutral": 77.40896606445312
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 57,
            "y": 407,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.11692051589488983,
            "Man": 99.88308715820312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.45226913690567017,
            "indian": 6.7457475662231445,
            "black": 0.22715535759925842,
            "white": 29.182836532592773,
            "middle eastern": 49.043941497802734,
            "latino hispanic": 14.348051071166992
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.07318912446498871,
            "disgust": 2.0310041293214454e-07,
            "fear": 8.978835105895996,
            "happy": 0.10938405990600586,
            "sad": 1.49605131149292,
            "surprise": 0.02290731482207775,
            "neutral": 89.31963348388672
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 197,
            "y": 457,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.03217606246471405,
            "Man": 99.96782684326172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.14114442467689514,
            "indian": 0.3477807641029358,
            "black": 0.01211443729698658,
            "white": 75.46160888671875,
            "middle eastern": 11.92281723022461,
            "latino hispanic": 12.11453628540039
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 47.09280014038086,
            "disgust": 0.0007685723248869181,
            "fear": 5.550483226776123,
            "happy": 0.002497594803571701,
            "sad": 10.50543212890625,
            "surprise": 0.047711823135614395,
            "neutral": 36.8003044128418
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 24,
        "region": {
            "x": 794,
            "y": 472,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0033379183150827885,
            "Man": 99.99665832519531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00997757725417614,
            "indian": 1.71831476688385,
            "black": 0.011444346979260445,
            "white": 33.96953582763672,
            "middle eastern": 57.753562927246094,
            "latino hispanic": 6.537167072296143
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.19197456538677216,
            "disgust": 3.3113065001089126e-07,
            "fear": 0.006787657737731934,
            "happy": 0.19272704422473907,
            "sad": 0.8905223608016968,
            "surprise": 3.987747186329216e-05,
            "neutral": 98.71794891357422
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 0,
            "y": 504,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.40687561035156,
            "Man": 0.5931231379508972
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.733904838562012,
            "indian": 10.513887405395508,
            "black": 2.5710155963897705,
            "white": 24.752681732177734,
            "middle eastern": 28.511180877685547,
            "latino hispanic": 26.91732406616211
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 4.961125373840332,
            "disgust": 6.399907579179853e-05,
            "fear": 0.22488148510456085,
            "happy": 0.017196109518408775,
            "sad": 1.8109444379806519,
            "surprise": 0.0252572912722826,
            "neutral": 92.96053314208984
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 636,
            "y": 507,
            "w": 78,
            "h": 78,
            "left_eye": [
                688,
                540
            ],
            "right_eye": [
                659,
                539
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.1098368912935257,
            "Man": 99.8901596069336
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.632979393005371,
            "indian": 18.560665130615234,
            "black": 2.3160669803619385,
            "white": 18.813644409179688,
            "middle eastern": 12.739184379577637,
            "latino hispanic": 40.93745803833008
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.0642558336257935,
            "disgust": 4.589470790961059e-06,
            "fear": 2.144284248352051,
            "happy": 0.0002784246753435582,
            "sad": 16.136390686035156,
            "surprise": 0.006237155292183161,
            "neutral": 80.64854431152344
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 926,
            "y": 567,
            "w": 78,
            "h": 78,
            "left_eye": [
                979,
                597
            ],
            "right_eye": [
                947,
                596
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.1678948700428009,
            "Man": 99.83209991455078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.080490390023783e-10,
            "indian": 2.483345724613173e-06,
            "black": 100.0,
            "white": 8.597906186926657e-15,
            "middle eastern": 2.4718793093132796e-15,
            "latino hispanic": 5.25131882422869e-10
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.013447682373225689,
            "disgust": 2.2312455702500067e-11,
            "fear": 8.799411443760619e-05,
            "happy": 1.2284443378448486,
            "sad": 0.007910137064754963,
            "surprise": 0.002947020810097456,
            "neutral": 98.74716186523438
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 723,
            "y": 619,
            "w": 87,
            "h": 87,
            "left_eye": [
                778,
                651
            ],
            "right_eye": [
                747,
                653
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.010631109587848186,
            "Man": 99.98936462402344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.5644770264625549,
            "indian": 8.801434516906738,
            "black": 0.3410715162754059,
            "white": 18.22044563293457,
            "middle eastern": 54.79774856567383,
            "latino hispanic": 17.274816513061523
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.012642133049666882,
            "disgust": 1.4126278272130754e-12,
            "fear": 3.2657826523063704e-05,
            "happy": 0.0007684865267947316,
            "sad": 0.0237705297768116,
            "surprise": 1.3778407037534635e-07,
            "neutral": 99.9627914428711
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 538,
            "y": 655,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.97701263427734,
            "Man": 0.02299254946410656
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00027274704189039767,
            "indian": 0.0003849534841720015,
            "black": 8.811849511403125e-06,
            "white": 99.24446868896484,
            "middle eastern": 0.44864359498023987,
            "latino hispanic": 0.30622389912605286
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.4978130820963997e-05,
            "disgust": 5.025539984160332e-10,
            "fear": 4.873550551565131e-06,
            "happy": 97.82453155517578,
            "sad": 0.0024920746218413115,
            "surprise": 0.0005528753390535712,
            "neutral": 2.1724042892456055
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 237,
            "y": 565,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.009621098637580872,
            "Man": 99.9903793334961
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.2277896404266357,
            "indian": 11.935798645019531,
            "black": 0.7340381145477295,
            "white": 40.78878402709961,
            "middle eastern": 16.90065574645996,
            "latino hispanic": 26.412935256958008
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 22.954391479492188,
            "disgust": 1.5636906027793884e-05,
            "fear": 3.752613067626953,
            "happy": 0.03063534013926983,
            "sad": 30.499713897705078,
            "surprise": 0.01143862958997488,
            "neutral": 42.751197814941406
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 76,
            "y": 575,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.029200466349720955,
            "Man": 99.9708023071289
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.014917463064193726,
            "indian": 0.014853185974061489,
            "black": 0.00018635575543157756,
            "white": 95.48543548583984,
            "middle eastern": 3.1905605792999268,
            "latino hispanic": 1.2940510511398315
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.37360888719558716,
            "disgust": 0.0008978121331892908,
            "fear": 1.0044645071029663,
            "happy": 55.23683547973633,
            "sad": 3.26690673828125,
            "surprise": 0.028327304869890213,
            "neutral": 40.088958740234375
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 364,
            "y": 589,
            "w": 87,
            "h": 87,
            "left_eye": [
                424,
                622
            ],
            "right_eye": [
                393,
                624
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.283473938703537,
            "Man": 99.7165298461914
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.160323143005371,
            "indian": 25.059934616088867,
            "black": 44.607120513916016,
            "white": 2.2360270023345947,
            "middle eastern": 1.9503587484359741,
            "latino hispanic": 17.986238479614258
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0002144103345926851,
            "disgust": 1.7620365886858447e-12,
            "fear": 1.0769549589895178e-05,
            "happy": 99.93579864501953,
            "sad": 0.0006325599970296025,
            "surprise": 3.218423807993531e-05,
            "neutral": 0.06331191956996918
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 850,
            "y": 774,
            "w": 95,
            "h": 95,
            "left_eye": [
                916,
                811
            ],
            "right_eye": [
                879,
                812
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 22.75920295715332,
            "Man": 77.24079895019531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.0758216381073,
            "indian": 2.476174831390381,
            "black": 0.43227118253707886,
            "white": 61.70341491699219,
            "middle eastern": 15.866917610168457,
            "latino hispanic": 16.445402145385742
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.571280837059021,
            "disgust": 0.00011066575825680047,
            "fear": 0.6186168789863586,
            "happy": 3.7722342014312744,
            "sad": 10.334354400634766,
            "surprise": 0.5506467223167419,
            "neutral": 83.15275573730469
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 139,
            "y": 739,
            "w": 100,
            "h": 100,
            "left_eye": [
                205,
                780
            ],
            "right_eye": [
                173,
                778
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.0175078883767128,
            "Man": 99.98249053955078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.505329393898137e-05,
            "indian": 8.511195483151823e-05,
            "black": 3.885272974457621e-07,
            "white": 99.53559875488281,
            "middle eastern": 0.29450541734695435,
            "latino hispanic": 0.16978976130485535
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.029223442077637,
            "disgust": 8.502726814185735e-06,
            "fear": 0.08332261443138123,
            "happy": 0.2095249444246292,
            "sad": 6.604666233062744,
            "surprise": 0.0028541218489408493,
            "neutral": 85.07039642333984
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 608,
            "y": 743,
            "w": 98,
            "h": 98,
            "left_eye": [
                675,
                782
            ],
            "right_eye": [
                638,
                780
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.021931780502200127,
            "Man": 99.97807312011719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.035930875688791275,
            "indian": 0.23925378918647766,
            "black": 0.005429524928331375,
            "white": 78.2879867553711,
            "middle eastern": 15.357701301574707,
            "latino hispanic": 6.073695182800293
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.004679957404732704,
            "disgust": 1.4083745563005234e-13,
            "fear": 0.0001927280827658251,
            "happy": 2.3807388060959056e-06,
            "sad": 0.04065864160656929,
            "surprise": 2.5304840889361913e-08,
            "neutral": 99.9544677734375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 363,
            "y": 749,
            "w": 94,
            "h": 94,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.6782032251358032,
            "Man": 99.3218002319336
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0004500980721786618,
            "indian": 0.04466116055846214,
            "black": 99.95377349853516,
            "white": 6.345465521917504e-07,
            "middle eastern": 2.2513316366712388e-07,
            "latino hispanic": 0.0011180159635841846
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.2883506417274475,
            "disgust": 1.659791450947523e-07,
            "fear": 1.056586503982544,
            "happy": 0.0017237652791664004,
            "sad": 0.8958290815353394,
            "surprise": 0.005056619644165039,
            "neutral": 97.75244903564453
        },
        "dominant_emotion": "neutral"
    }
]
let software_developer_data3 = [
    {
        "age": 28,
        "region": {
            "x": 498,
            "y": 74,
            "w": 29,
            "h": 29,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.3975714147090912,
            "Man": 99.60242462158203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.603802680969238,
            "indian": 11.351709365844727,
            "black": 5.648743152618408,
            "white": 31.173398971557617,
            "middle eastern": 22.351028442382812,
            "latino hispanic": 21.871320724487305
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.883573293685913,
            "disgust": 0.18253913521766663,
            "fear": 26.145986557006836,
            "happy": 0.4972425401210785,
            "sad": 32.58236312866211,
            "surprise": 0.06500785797834396,
            "neutral": 37.643280029296875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 473,
            "y": 102,
            "w": 32,
            "h": 32,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 6.842448711395264,
            "Man": 93.15754699707031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 71.20779418945312,
            "indian": 5.603280067443848,
            "black": 1.8045995235443115,
            "white": 7.682257652282715,
            "middle eastern": 8.145506858825684,
            "latino hispanic": 5.556555271148682
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.1541145294904709,
            "disgust": 0.1019478291273117,
            "fear": 1.6952598094940186,
            "happy": 4.602811336517334,
            "sad": 10.264528274536133,
            "surprise": 0.00531180901452899,
            "neutral": 83.176025390625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 670,
            "y": 72,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.5041511058807373,
            "Man": 99.495849609375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.07655321806669235,
            "indian": 0.18023665249347687,
            "black": 0.017538536339998245,
            "white": 82.27041625976562,
            "middle eastern": 9.845830917358398,
            "latino hispanic": 7.609433174133301
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.0885168851236813e-05,
            "disgust": 1.0055787452722953e-10,
            "fear": 1.5301490066121914e-06,
            "happy": 99.79230499267578,
            "sad": 0.00015407949103973806,
            "surprise": 0.01737014204263687,
            "neutral": 0.19014395773410797
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 4,
            "y": 188,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 2.851083755493164,
            "Man": 97.14891815185547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 18.741086959838867,
            "indian": 0.00027129106456413865,
            "black": 4.552918835543096e-05,
            "white": 81.11125183105469,
            "middle eastern": 0.08911411464214325,
            "latino hispanic": 0.058227915316820145
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.8558151721954346,
            "disgust": 2.705925941467285,
            "fear": 61.20665740966797,
            "happy": 22.628612518310547,
            "sad": 1.0969955921173096,
            "surprise": 0.6005736589431763,
            "neutral": 7.905422210693359
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 31,
        "region": {
            "x": 704,
            "y": 179,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99990844726562,
            "Man": 9.184499504044652e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 24.646114349365234,
            "indian": 8.267949104309082,
            "black": 2.447067975997925,
            "white": 22.899381637573242,
            "middle eastern": 15.135518074035645,
            "latino hispanic": 26.60396957397461
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.391418180674009e-07,
            "disgust": 1.3364219670145006e-12,
            "fear": 2.342829041879213e-08,
            "happy": 99.92166137695312,
            "sad": 7.120675036276225e-07,
            "surprise": 9.11941533559002e-05,
            "neutral": 0.07825662195682526
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 793,
            "y": 184,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.27437418699264526,
            "Man": 99.72563171386719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 29.607906341552734,
            "indian": 20.571863174438477,
            "black": 4.289696216583252,
            "white": 10.766695022583008,
            "middle eastern": 11.024216651916504,
            "latino hispanic": 23.7396240234375
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.015423739328980446,
            "disgust": 1.0298967928479286e-10,
            "fear": 7.844459304351403e-08,
            "happy": 99.77936553955078,
            "sad": 4.9586593377171084e-05,
            "surprise": 1.014802478493948e-06,
            "neutral": 0.20516042411327362
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 551,
            "y": 149,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.009748272597789764,
            "Man": 99.99024963378906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.21089361882332e-07,
            "indian": 5.42043835594086e-06,
            "black": 6.510771033418905e-09,
            "white": 99.93621826171875,
            "middle eastern": 0.045110058039426804,
            "latino hispanic": 0.018670719116926193
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0006640430074185133,
            "disgust": 2.1970912200686143e-07,
            "fear": 0.007483733352273703,
            "happy": 99.98387145996094,
            "sad": 3.893494067597203e-06,
            "surprise": 2.2802578314440325e-05,
            "neutral": 0.007952379994094372
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 451,
            "y": 160,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.6501247882843018,
            "Man": 99.34988403320312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.005798087455332279,
            "indian": 0.0030856169760227203,
            "black": 9.36114156502299e-05,
            "white": 96.95414733886719,
            "middle eastern": 1.0156646966934204,
            "latino hispanic": 2.0212135314941406
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.481142698547046e-07,
            "disgust": 5.108024003774858e-10,
            "fear": 0.002791666192933917,
            "happy": 99.62393951416016,
            "sad": 5.522830178961158e-05,
            "surprise": 0.0069973827339708805,
            "neutral": 0.36622029542922974
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 924,
            "y": 134,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.19652226567268372,
            "Man": 99.80347442626953
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.7205702281207778e-05,
            "indian": 1.2669926036323886e-05,
            "black": 7.093843379379905e-08,
            "white": 99.8938217163086,
            "middle eastern": 0.06952061504125595,
            "latino hispanic": 0.03660674765706062
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00033389931195415556,
            "disgust": 1.5857186674850254e-09,
            "fear": 8.649851224618033e-06,
            "happy": 99.59162139892578,
            "sad": 0.0001916058681672439,
            "surprise": 4.161168180871755e-05,
            "neutral": 0.4078073799610138
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 282,
            "y": 166,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.4840379059314728,
            "Man": 99.51595306396484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 16.87672996520996,
            "indian": 13.649140357971191,
            "black": 23.50639533996582,
            "white": 11.206765174865723,
            "middle eastern": 9.831180572509766,
            "latino hispanic": 24.929790496826172
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.008257120847702026,
            "disgust": 2.5924680180366977e-09,
            "fear": 0.007665614131838083,
            "happy": 0.23571303486824036,
            "sad": 0.16294720768928528,
            "surprise": 1.8691012859344482,
            "neutral": 97.71631622314453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 278,
            "y": 89,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 24.462846755981445,
            "Man": 75.53715515136719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 14.935052871704102,
            "indian": 26.09393310546875,
            "black": 28.047725677490234,
            "white": 8.111190795898438,
            "middle eastern": 8.045878410339355,
            "latino hispanic": 14.766227722167969
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0007267858018167317,
            "disgust": 1.6235303379463772e-10,
            "fear": 1.5283188986359164e-05,
            "happy": 0.8079357147216797,
            "sad": 0.0031872924882918596,
            "surprise": 1.4562281370162964,
            "neutral": 97.73190307617188
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 127,
            "y": 103,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.7781206369400024,
            "Man": 99.22188568115234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.925497250951594e-06,
            "indian": 8.141755643009674e-06,
            "black": 6.152468756681628e-08,
            "white": 99.8753662109375,
            "middle eastern": 0.06190314143896103,
            "latino hispanic": 0.0627165138721466
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0001933608582476154,
            "disgust": 1.1302083890996073e-07,
            "fear": 2.9805918529746123e-05,
            "happy": 96.42110443115234,
            "sad": 0.04365261271595955,
            "surprise": 0.004035414662212133,
            "neutral": 3.5309860706329346
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 43,
        "region": {
            "x": 609,
            "y": 104,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.3501160442829132,
            "Man": 99.6498794555664
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2982560396194458,
            "indian": 0.8655068278312683,
            "black": 0.0738556981086731,
            "white": 75.98917388916016,
            "middle eastern": 12.690778732299805,
            "latino hispanic": 10.082427024841309
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.14262345433235168,
            "disgust": 5.160953151062131e-05,
            "fear": 44.05373764038086,
            "happy": 7.405013561248779,
            "sad": 0.24981790781021118,
            "surprise": 0.06654023379087448,
            "neutral": 48.082218170166016
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 749,
            "y": 104,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.24517926573753357,
            "Man": 99.75481414794922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7838876247406006,
            "indian": 2.0826363563537598,
            "black": 0.18667608499526978,
            "white": 50.82685852050781,
            "middle eastern": 28.711435317993164,
            "latino hispanic": 17.408504486083984
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0011036403011530638,
            "disgust": 2.2305700895230984e-06,
            "fear": 0.000977085903286934,
            "happy": 96.48267364501953,
            "sad": 0.022074762731790543,
            "surprise": 0.06842784583568573,
            "neutral": 3.424748182296753
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 843,
            "y": 115,
            "w": 44,
            "h": 44,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.20480014383792877,
            "Man": 99.79520416259766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2378617227077484,
            "indian": 0.44093629717826843,
            "black": 0.029584309086203575,
            "white": 74.49786376953125,
            "middle eastern": 14.056160926818848,
            "latino hispanic": 10.737598419189453
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0011196063132956624,
            "disgust": 0.00030228777904994786,
            "fear": 0.04649008810520172,
            "happy": 96.08596801757812,
            "sad": 0.022710850462317467,
            "surprise": 0.017490386962890625,
            "neutral": 3.8259177207946777
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 413,
            "y": 116,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 4.521149635314941,
            "Man": 95.4788589477539
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.3842058181762695,
            "indian": 5.532939434051514,
            "black": 1.2972174882888794,
            "white": 35.86465835571289,
            "middle eastern": 18.30988121032715,
            "latino hispanic": 34.61109924316406
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.690014778791941e-11,
            "disgust": 9.83851515702715e-19,
            "fear": 3.4334450838002795e-09,
            "happy": 99.99996185302734,
            "sad": 2.3658485588384792e-06,
            "surprise": 9.586535725247813e-07,
            "neutral": 4.058451668242924e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 55,
            "y": 146,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.8200426697731018,
            "Man": 99.17996215820312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3485121726989746,
            "indian": 4.5893025398254395,
            "black": 0.29453200101852417,
            "white": 39.27855682373047,
            "middle eastern": 32.70320129394531,
            "latino hispanic": 21.785888671875
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00029098408413119614,
            "disgust": 1.4045086871306012e-08,
            "fear": 0.00022713922953698784,
            "happy": 96.50306701660156,
            "sad": 0.0004488919221330434,
            "surprise": 0.023307248950004578,
            "neutral": 3.472663402557373
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 209,
            "y": 127,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 2.2221500873565674,
            "Man": 97.77784729003906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.268537700176239,
            "indian": 0.12113995850086212,
            "black": 0.0088668717071414,
            "white": 86.93215942382812,
            "middle eastern": 5.257229328155518,
            "latino hispanic": 7.4120683670043945
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00025361773441545665,
            "disgust": 1.4836584796285024e-06,
            "fear": 0.0016465390799567103,
            "happy": 94.92698669433594,
            "sad": 0.0037581187207251787,
            "surprise": 0.02906414307653904,
            "neutral": 5.038288116455078
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 865,
            "y": 188,
            "w": 63,
            "h": 63,
            "left_eye": [
                904,
                210
            ],
            "right_eye": [
                884,
                210
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.012154200114309788,
            "Man": 99.98783874511719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.146374702453613,
            "indian": 31.654449462890625,
            "black": 3.244130849838257,
            "white": 8.194330215454102,
            "middle eastern": 7.842872619628906,
            "latino hispanic": 37.917842864990234
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 5.8148219977738336e-05,
            "disgust": 3.7628185012295035e-09,
            "fear": 2.5077401005546562e-05,
            "happy": 99.3349838256836,
            "sad": 0.00029654669924639165,
            "surprise": 0.166133850812912,
            "neutral": 0.49849897623062134
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 374,
            "y": 204,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.5834108591079712,
            "Man": 99.41658782958984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 18.222980499267578,
            "indian": 10.918140411376953,
            "black": 2.7514865398406982,
            "white": 27.17304801940918,
            "middle eastern": 17.776365280151367,
            "latino hispanic": 23.157974243164062
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.7043668637816154e-07,
            "disgust": 1.015701498602306e-11,
            "fear": 8.127814908220898e-06,
            "happy": 98.00086975097656,
            "sad": 9.722137292555999e-06,
            "surprise": 0.0945223942399025,
            "neutral": 1.9045900106430054
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 143,
            "y": 192,
            "w": 66,
            "h": 66,
            "left_eye": [
                185,
                216
            ],
            "right_eye": [
                161,
                216
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.006637606769800186,
            "Man": 99.99336242675781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7905325889587402,
            "indian": 7.999115943908691,
            "black": 0.29870009422302246,
            "white": 27.177024841308594,
            "middle eastern": 39.94469451904297,
            "latino hispanic": 23.789936065673828
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 4.071604780619964e-05,
            "disgust": 9.450935693766649e-12,
            "fear": 9.312057954957709e-06,
            "happy": 99.9258804321289,
            "sad": 2.3480137315345928e-05,
            "surprise": 0.004233080893754959,
            "neutral": 0.06982026249170303
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 334,
            "y": 154,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.1534497737884521,
            "Man": 98.8465576171875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.17055052518844604,
            "indian": 0.23644894361495972,
            "black": 0.08061742782592773,
            "white": 91.35095977783203,
            "middle eastern": 4.7310967445373535,
            "latino hispanic": 3.430330276489258
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.03769484534859657,
            "disgust": 8.838041139824782e-06,
            "fear": 21.890806198120117,
            "happy": 49.12409591674805,
            "sad": 22.19849967956543,
            "surprise": 0.0020783753134310246,
            "neutral": 6.7468061447143555
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 586,
            "y": 213,
            "w": 61,
            "h": 61,
            "left_eye": [
                626,
                237
            ],
            "right_eye": [
                604,
                237
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.02104794792830944,
            "Man": 99.97895050048828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 57.34390640258789,
            "indian": 6.7457804679870605,
            "black": 10.005367279052734,
            "white": 2.7141003608703613,
            "middle eastern": 1.3143843412399292,
            "latino hispanic": 21.876461029052734
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.09344762563705444,
            "disgust": 0.0008408910362049937,
            "fear": 5.554644584655762,
            "happy": 29.4794864654541,
            "sad": 0.2693312168121338,
            "surprise": 17.035884857177734,
            "neutral": 47.56636428833008
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 223,
            "y": 225,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.03388689458370209,
            "Man": 99.96611022949219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3983213901519775,
            "indian": 5.968175411224365,
            "black": 0.20214973390102386,
            "white": 34.75456619262695,
            "middle eastern": 31.14613914489746,
            "latino hispanic": 26.53065299987793
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.194022178649902,
            "disgust": 0.00010705948079703376,
            "fear": 1.5589139461517334,
            "happy": 46.53192138671875,
            "sad": 0.7025453448295593,
            "surprise": 13.489654541015625,
            "neutral": 29.5228328704834
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 418,
            "y": 252,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 36.446659088134766,
            "Man": 63.553340911865234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 84.99604797363281,
            "indian": 2.277747631072998,
            "black": 0.7712946534156799,
            "white": 1.5244940519332886,
            "middle eastern": 0.27761679887771606,
            "latino hispanic": 10.152804374694824
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.0204003046965227e-05,
            "disgust": 1.2297832197027958e-10,
            "fear": 1.1792405985033838e-06,
            "happy": 99.00739288330078,
            "sad": 0.00024257447512354702,
            "surprise": 1.4149166418064851e-05,
            "neutral": 0.9923397302627563
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 485,
            "y": 266,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 83.32353973388672,
            "Man": 16.67646026611328
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 96.7796630859375,
            "indian": 2.0501184463500977,
            "black": 0.03354893997311592,
            "white": 0.07779145240783691,
            "middle eastern": 0.005087454803287983,
            "latino hispanic": 1.0537887811660767
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.803727999240891e-09,
            "disgust": 3.9874139519467233e-16,
            "fear": 8.405685925083617e-09,
            "happy": 99.92069244384766,
            "sad": 6.760068345101899e-07,
            "surprise": 0.0003367428435012698,
            "neutral": 0.07897824794054031
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 38,
        "region": {
            "x": 762,
            "y": 248,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.5758785605430603,
            "Man": 99.42412567138672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1823897808790207,
            "indian": 0.11702500283718109,
            "black": 0.005439057480543852,
            "white": 90.58757781982422,
            "middle eastern": 5.036386489868164,
            "latino hispanic": 4.071187973022461
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.003836439223960042,
            "disgust": 4.927059649162402e-08,
            "fear": 0.00014464963169302791,
            "happy": 99.53397369384766,
            "sad": 0.008312408812344074,
            "surprise": 0.005583903286606073,
            "neutral": 0.4481384754180908
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 951,
            "y": 243,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.00019856609287671745,
            "Man": 99.99979400634766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.167480498004863e-10,
            "indian": 1.0862645893894296e-08,
            "black": 4.156206195177203e-12,
            "white": 99.99614715576172,
            "middle eastern": 0.0028015512507408857,
            "latino hispanic": 0.0010511830914765596
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.16068042814731598,
            "disgust": 0.3316171169281006,
            "fear": 17.873672485351562,
            "happy": 63.36060333251953,
            "sad": 1.2055379152297974,
            "surprise": 0.48926013708114624,
            "neutral": 16.578628540039062
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 834,
            "y": 279,
            "w": 75,
            "h": 75,
            "left_eye": [
                884,
                307
            ],
            "right_eye": [
                857,
                308
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0015663746744394302,
            "Man": 99.9984359741211
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.689130092738196e-05,
            "indian": 0.0030392752960324287,
            "black": 4.553899998427369e-06,
            "white": 97.93672943115234,
            "middle eastern": 1.707459807395935,
            "latino hispanic": 0.35267210006713867
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.44752904772758484,
            "disgust": 0.00020495770149864256,
            "fear": 0.5821718573570251,
            "happy": 38.812713623046875,
            "sad": 1.8152401447296143,
            "surprise": 0.006234229542315006,
            "neutral": 58.335906982421875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 55,
            "y": 244,
            "w": 80,
            "h": 80,
            "left_eye": [
                105,
                276
            ],
            "right_eye": [
                78,
                277
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.004330656956881285,
            "Man": 99.99567413330078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.7300207614898682,
            "indian": 3.6592116355895996,
            "black": 0.7044563293457031,
            "white": 46.91950607299805,
            "middle eastern": 30.853418350219727,
            "latino hispanic": 16.13338851928711
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.175395247330016e-07,
            "disgust": 1.586067908954103e-11,
            "fear": 4.789653189618548e-07,
            "happy": 99.44336700439453,
            "sad": 3.4005632187472656e-05,
            "surprise": 0.00028576754266396165,
            "neutral": 0.556307852268219
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 344,
            "y": 284,
            "w": 80,
            "h": 80,
            "left_eye": [
                398,
                317
            ],
            "right_eye": [
                368,
                314
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.022261621430516243,
            "Man": 99.97773742675781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.324424743652344,
            "indian": 14.143848419189453,
            "black": 4.380009174346924,
            "white": 15.00422477722168,
            "middle eastern": 10.878731727600098,
            "latino hispanic": 42.268760681152344
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0235329307615757,
            "disgust": 0.04163626581430435,
            "fear": 2.8826892375946045,
            "happy": 57.12059783935547,
            "sad": 1.4394186735153198,
            "surprise": 0.44439640641212463,
            "neutral": 38.0477294921875
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 705,
            "y": 295,
            "w": 74,
            "h": 74,
            "left_eye": [
                751,
                323
            ],
            "right_eye": [
                726,
                324
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.002647352172061801,
            "Man": 99.99735260009766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.005851120688021183,
            "indian": 0.05821482837200165,
            "black": 0.0007078049820847809,
            "white": 87.82057189941406,
            "middle eastern": 7.457625389099121,
            "latino hispanic": 4.657027244567871
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.027517666647327e-06,
            "disgust": 6.831694498304897e-12,
            "fear": 6.341433049783518e-07,
            "happy": 98.17798614501953,
            "sad": 1.6558702554902993e-05,
            "surprise": 0.04700414836406708,
            "neutral": 1.7749985456466675
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 629,
            "y": 240,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.07264203578233719,
            "Man": 99.92736053466797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.009528846479952335,
            "indian": 0.0399172380566597,
            "black": 99.90156555175781,
            "white": 0.0008693818235769868,
            "middle eastern": 0.0016075957100838423,
            "latino hispanic": 0.04650408774614334
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.07668367773294449,
            "disgust": 1.2417736283687475e-10,
            "fear": 0.0017587224720045924,
            "happy": 6.4900054931640625,
            "sad": 0.02490738406777382,
            "surprise": 0.34439617395401,
            "neutral": 93.06224822998047
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 40,
        "region": {
            "x": 900,
            "y": 353,
            "w": 83,
            "h": 83,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.002995924325659871,
            "Man": 99.99700927734375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00030974429682828486,
            "indian": 0.022818582132458687,
            "black": 0.00010964868852170184,
            "white": 90.3746109008789,
            "middle eastern": 7.484301567077637,
            "latino hispanic": 2.117846965789795
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.477185845375061,
            "disgust": 5.444078347849324e-12,
            "fear": 0.0006161389173939824,
            "happy": 0.0005516064702533185,
            "sad": 0.8439903855323792,
            "surprise": 4.165548261880758e-07,
            "neutral": 97.67765808105469
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 129,
            "y": 315,
            "w": 82,
            "h": 82,
            "left_eye": [
                184,
                347
            ],
            "right_eye": [
                154,
                345
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.05472635477781296,
            "Man": 99.94527435302734
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.02928200736641884,
            "indian": 0.03627960383892059,
            "black": 0.0014512803172692657,
            "white": 92.55561828613281,
            "middle eastern": 2.764848470687866,
            "latino hispanic": 4.612517833709717
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.05998111888766289,
            "disgust": 2.111187859554775e-05,
            "fear": 0.05287826061248779,
            "happy": 0.023938631638884544,
            "sad": 0.8243095278739929,
            "surprise": 0.015494653955101967,
            "neutral": 99.02337646484375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 539,
            "y": 286,
            "w": 80,
            "h": 80,
            "left_eye": [
                590,
                316
            ],
            "right_eye": [
                564,
                317
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.012999648228287697,
            "Man": 99.98699188232422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.11158137023448944,
            "indian": 1.6074178218841553,
            "black": 0.06717122346162796,
            "white": 60.866981506347656,
            "middle eastern": 29.794662475585938,
            "latino hispanic": 7.552177429199219
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00014165857282932848,
            "disgust": 1.9757306290557608e-05,
            "fear": 0.014130494557321072,
            "happy": 97.11978912353516,
            "sad": 0.04104800894856453,
            "surprise": 0.04509914666414261,
            "neutral": 2.7797739505767822
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 0,
            "y": 308,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 14.921015739440918,
            "Man": 85.07898712158203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00029006219119764864,
            "indian": 0.0001175760044134222,
            "black": 9.421466984349536e-07,
            "white": 99.69064331054688,
            "middle eastern": 0.21719549596309662,
            "latino hispanic": 0.09174464643001556
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.3488621413707733,
            "disgust": 7.786121568642557e-05,
            "fear": 0.509864866733551,
            "happy": 10.581791877746582,
            "sad": 84.2401123046875,
            "surprise": 2.941176414489746,
            "neutral": 1.378114104270935
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 30,
        "region": {
            "x": 256,
            "y": 341,
            "w": 85,
            "h": 85,
            "left_eye": [
                313,
                375
            ],
            "right_eye": [
                284,
                373
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.001846740604378283,
            "Man": 99.99815368652344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.946145057678223,
            "indian": 13.596616744995117,
            "black": 5.725396156311035,
            "white": 12.468888282775879,
            "middle eastern": 8.680908203125,
            "latino hispanic": 43.58205032348633
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.1525346338748932,
            "disgust": 4.094998075743206e-06,
            "fear": 0.08253512531518936,
            "happy": 2.9607579708099365,
            "sad": 2.22824764251709,
            "surprise": 0.7472988963127136,
            "neutral": 93.82862091064453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 454,
            "y": 383,
            "w": 75,
            "h": 75,
            "left_eye": [
                505,
                412
            ],
            "right_eye": [
                477,
                413
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 98.1242904663086,
            "Man": 1.8757108449935913
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00024433978251181543,
            "indian": 0.000465823250124231,
            "black": 5.203392902330961e-06,
            "white": 98.77164459228516,
            "middle eastern": 0.7264769077301025,
            "latino hispanic": 0.5011559724807739
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6219767732523593e-16,
            "disgust": 3.8459162884101604e-29,
            "fear": 4.777098732030518e-18,
            "happy": 99.99932098388672,
            "sad": 1.7075796614370031e-13,
            "surprise": 7.964962946971355e-07,
            "neutral": 0.0006844806484878063
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 2,
            "y": 410,
            "w": 99,
            "h": 99,
            "left_eye": [
                69,
                451
            ],
            "right_eye": [
                38,
                447
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.01134010124951601,
            "Man": 99.98866271972656
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.2071711807948304e-07,
            "indian": 4.0152062297238444e-07,
            "black": 3.6984246221116734e-10,
            "white": 99.98877716064453,
            "middle eastern": 0.0054215495474636555,
            "latino hispanic": 0.005801272578537464
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.018477369099855423,
            "disgust": 5.8845723432954244e-12,
            "fear": 7.482074693143659e-07,
            "happy": 99.79312133789062,
            "sad": 0.00047852698480710387,
            "surprise": 0.0007806135108694434,
            "neutral": 0.18714404106140137
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 617,
            "y": 359,
            "w": 88,
            "h": 88,
            "left_eye": [
                675,
                394
            ],
            "right_eye": [
                644,
                393
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.000560656888410449,
            "Man": 99.99944305419922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.3527441918849945,
            "indian": 9.360912322998047,
            "black": 0.20903415977954865,
            "white": 23.131349563598633,
            "middle eastern": 48.33312225341797,
            "latino hispanic": 18.61284065246582
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.003930684644728899,
            "disgust": 1.0589210397426996e-08,
            "fear": 0.06186486780643463,
            "happy": 0.6491187810897827,
            "sad": 0.09824257344007492,
            "surprise": 0.40645575523376465,
            "neutral": 98.78038787841797
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 549,
            "y": 449,
            "w": 88,
            "h": 88,
            "left_eye": [
                605,
                483
            ],
            "right_eye": [
                574,
                486
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.006691449321806431,
            "Man": 99.9933090209961
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 43.033966064453125,
            "indian": 9.456610679626465,
            "black": 1.881232500076294,
            "white": 2.514000415802002,
            "middle eastern": 0.735281229019165,
            "latino hispanic": 42.37891387939453
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.02980177477002144,
            "disgust": 1.3989612853038125e-05,
            "fear": 0.03233591467142105,
            "happy": 1.9971402883529663,
            "sad": 1.1812876462936401,
            "surprise": 0.0014990797499194741,
            "neutral": 96.75792694091797
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 159,
            "y": 439,
            "w": 91,
            "h": 91,
            "left_eye": [
                217,
                475
            ],
            "right_eye": [
                187,
                477
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.96761322021484,
            "Man": 0.03238798677921295
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.26809692382812,
            "indian": 0.3143937587738037,
            "black": 0.0008958904654718935,
            "white": 0.006656464189291,
            "middle eastern": 8.925930160330608e-05,
            "latino hispanic": 0.4098682701587677
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.00032666116021573544,
            "disgust": 2.0370882793940837e-06,
            "fear": 0.0336044579744339,
            "happy": 27.728843688964844,
            "sad": 0.05590718239545822,
            "surprise": 1.1875734329223633,
            "neutral": 70.99374389648438
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 343,
            "y": 451,
            "w": 95,
            "h": 95,
            "left_eye": [
                407,
                489
            ],
            "right_eye": [
                373,
                487
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.013576161116361618,
            "Man": 99.98641967773438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 95.63062286376953,
            "indian": 0.8318783640861511,
            "black": 0.014656431041657925,
            "white": 0.6416822075843811,
            "middle eastern": 0.03825734928250313,
            "latino hispanic": 2.8429059982299805
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.586134139117348e-08,
            "disgust": 2.9203380165487847e-12,
            "fear": 7.620272663189098e-05,
            "happy": 96.5376968383789,
            "sad": 9.713166218716651e-05,
            "surprise": 0.0035981005057692528,
            "neutral": 3.4585390090942383
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 770,
            "y": 413,
            "w": 100,
            "h": 100,
            "left_eye": [
                837,
                453
            ],
            "right_eye": [
                803,
                453
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.012551273219287395,
            "Man": 99.9874496459961
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.6955196857452393,
            "indian": 2.7455880641937256,
            "black": 0.566828727722168,
            "white": 53.32366180419922,
            "middle eastern": 22.799156188964844,
            "latino hispanic": 17.86925506591797
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.08727705478668213,
            "disgust": 3.884189936798066e-05,
            "fear": 0.2054157704114914,
            "happy": 0.07905798405408859,
            "sad": 1.418597936630249,
            "surprise": 0.09919601678848267,
            "neutral": 98.11041259765625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 682,
            "y": 513,
            "w": 94,
            "h": 94,
            "left_eye": [
                743,
                550
            ],
            "right_eye": [
                709,
                550
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99970245361328,
            "Man": 0.00029464985709637403
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0001523346290923655,
            "indian": 0.0002995271934196353,
            "black": 5.536102889891481e-06,
            "white": 98.59928894042969,
            "middle eastern": 0.43993252515792847,
            "latino hispanic": 0.9603182673454285
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.267172233900055e-05,
            "disgust": 1.4315479347715154e-05,
            "fear": 0.027350014075636864,
            "happy": 97.08271789550781,
            "sad": 0.003949868492782116,
            "surprise": 0.007844801060855389,
            "neutral": 2.8780441284179688
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 69,
            "y": 561,
            "w": 97,
            "h": 97,
            "left_eye": [
                133,
                603
            ],
            "right_eye": [
                97,
                600
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 95.5346908569336,
            "Man": 4.465308666229248
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.891003921314585e-11,
            "indian": 1.1313896663978085e-07,
            "black": 100.0,
            "white": 1.690641170896262e-14,
            "middle eastern": 1.9746755432529205e-14,
            "latino hispanic": 3.4512788182894383e-09
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 5.5644037988411554e-11,
            "disgust": 2.3256825925607662e-20,
            "fear": 7.439351218385681e-11,
            "happy": 98.98741149902344,
            "sad": 8.682673247051298e-09,
            "surprise": 0.004838179796934128,
            "neutral": 1.0077532529830933
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 905,
            "y": 519,
            "w": 99,
            "h": 99,
            "left_eye": [
                970,
                558
            ],
            "right_eye": [
                932,
                557
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99805450439453,
            "Man": 0.0019475766457617283
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.98976135253906,
            "indian": 0.0010914407903328538,
            "black": 2.5553381988174806e-07,
            "white": 0.001017061062157154,
            "middle eastern": 5.464895593831898e-07,
            "latino hispanic": 0.008134289644658566
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.4898900480584416e-07,
            "disgust": 1.3841257784016903e-12,
            "fear": 1.2950176824233495e-06,
            "happy": 99.80894470214844,
            "sad": 1.470798679292784e-06,
            "surprise": 0.11058355867862701,
            "neutral": 0.08047343790531158
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 249,
            "y": 565,
            "w": 103,
            "h": 103,
            "left_eye": [
                317,
                605
            ],
            "right_eye": [
                282,
                606
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 21.32927894592285,
            "Man": 78.67072296142578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 100.0,
            "indian": 4.1148804329332257e-17,
            "black": 1.3563679026601944e-26,
            "white": 2.9875516441127176e-16,
            "middle eastern": 9.114565150913657e-27,
            "latino hispanic": 2.0130466439833086e-14
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.034924913197755814,
            "disgust": 6.319471594906645e-07,
            "fear": 0.07082004100084305,
            "happy": 0.0004199665563646704,
            "sad": 7.040234088897705,
            "surprise": 0.03163167089223862,
            "neutral": 92.82196807861328
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 483,
            "y": 602,
            "w": 94,
            "h": 94,
            "left_eye": [
                544,
                638
            ],
            "right_eye": [
                509,
                639
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.97398376464844,
            "Man": 0.026021648198366165
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.98102569580078,
            "indian": 0.0024742484092712402,
            "black": 6.6988883418162e-07,
            "white": 0.0027572137769311666,
            "middle eastern": 4.854086341765651e-07,
            "latino hispanic": 0.01374138705432415
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.7802598449634388e-05,
            "disgust": 1.5908980799395067e-08,
            "fear": 0.0006665281252935529,
            "happy": 95.12970733642578,
            "sad": 0.0016559495124965906,
            "surprise": 0.13055434823036194,
            "neutral": 4.737402439117432
        },
        "dominant_emotion": "happy"
    }
]

console.log("Microsoft Results for Software Developer:");
const data = software_developer_data.concat(software_developer_data2, software_developer_data3);
console.log(processData(data));