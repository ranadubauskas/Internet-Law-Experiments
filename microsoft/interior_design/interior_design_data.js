const { processData } = require('../../data_processing.js');

let interior_design_data = [
    {
        "age": 29,
        "region": {
            "x": 572,
            "y": 43,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.16438515484333038,
            "Man": 99.83561706542969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.012879944406449795,
            "indian": 0.06590712070465088,
            "black": 0.002093158196657896,
            "white": 87.8848876953125,
            "middle eastern": 7.200112819671631,
            "latino hispanic": 4.834127426147461
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.15604665875434875,
            "disgust": 0.00014949735486879945,
            "fear": 0.20460514724254608,
            "happy": 61.981754302978516,
            "sad": 4.736237049102783,
            "surprise": 0.08844270557165146,
            "neutral": 32.832763671875
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 678,
            "y": 84,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.08778650313615799,
            "Man": 99.9122085571289
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.0113461555397529e-16,
            "indian": 6.980569009114312e-13,
            "black": 100.0,
            "white": 1.055641735789871e-22,
            "middle eastern": 3.2919036201684366e-23,
            "latino hispanic": 1.7310825048530345e-15
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.00016300023708026856,
            "disgust": 2.3538756011021178e-07,
            "fear": 0.0034309690818190575,
            "happy": 55.58051300048828,
            "sad": 0.13568834960460663,
            "surprise": 0.0037361423019319773,
            "neutral": 44.276466369628906
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 734,
            "y": 121,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.1266687512397766,
            "Man": 99.87333679199219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.864807367324829,
            "indian": 6.284856796264648,
            "black": 3.784061908721924,
            "white": 38.202022552490234,
            "middle eastern": 25.87590217590332,
            "latino hispanic": 22.98834800720215
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0007013435242697597,
            "disgust": 3.589674335557902e-09,
            "fear": 5.678735033143312e-05,
            "happy": 98.15737915039062,
            "sad": 0.002659980906173587,
            "surprise": 1.3251843711259426e-06,
            "neutral": 1.8392059803009033
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 620,
            "y": 149,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 2.0728259086608887,
            "Man": 97.92716979980469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.08670961111783981,
            "indian": 0.12920108437538147,
            "black": 0.013765395618975163,
            "white": 88.02034759521484,
            "middle eastern": 6.156013488769531,
            "latino hispanic": 5.593963623046875
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.4088761268737926e-09,
            "disgust": 2.0162237917765656e-18,
            "fear": 8.150132478623728e-12,
            "happy": 98.985107421875,
            "sad": 2.702470567328419e-07,
            "surprise": 4.9016903176379856e-06,
            "neutral": 1.0148777961730957
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 229,
            "y": 117,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.011010793037712574,
            "Man": 99.98898315429688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.1113429069519043,
            "indian": 10.216428756713867,
            "black": 2.372084856033325,
            "white": 24.874631881713867,
            "middle eastern": 35.28117370605469,
            "latino hispanic": 25.144338607788086
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.014307448640465736,
            "disgust": 6.663680163221386e-10,
            "fear": 5.20158164363238e-06,
            "happy": 58.44948196411133,
            "sad": 0.05061584711074829,
            "surprise": 4.4210614191797504e-07,
            "neutral": 41.48558807373047
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 556,
            "y": 282,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99268341064453,
            "Man": 0.007324723061174154
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.9254577159881592,
            "indian": 27.11313819885254,
            "black": 1.2078181505203247,
            "white": 22.42546272277832,
            "middle eastern": 27.930524826049805,
            "latino hispanic": 20.397592544555664
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 8.821218955290533e-08,
            "disgust": 3.455049560254636e-13,
            "fear": 8.751106089777139e-11,
            "happy": 99.9903793334961,
            "sad": 4.286434341338463e-05,
            "surprise": 9.963234681720223e-09,
            "neutral": 0.009576810523867607
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 798,
            "y": 161,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.01226500142365694,
            "Man": 99.98773193359375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.2872912883758545,
            "indian": 8.511762619018555,
            "black": 1.0372774600982666,
            "white": 29.378921508789062,
            "middle eastern": 35.76375961303711,
            "latino hispanic": 23.020984649658203
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.0060293846763670444,
            "disgust": 6.897796112070864e-08,
            "fear": 0.00017199998546857387,
            "happy": 99.03644561767578,
            "sad": 0.002327294321730733,
            "surprise": 0.037798669189214706,
            "neutral": 0.9172301292419434
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 38,
        "region": {
            "x": 506,
            "y": 179,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.35752230882644653,
            "Man": 99.64247131347656
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.244712829589844,
            "indian": 23.410568237304688,
            "black": 13.29703140258789,
            "white": 15.03118896484375,
            "middle eastern": 20.25973892211914,
            "latino hispanic": 19.756755828857422
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 0.2657029628753662,
            "disgust": 2.2886638362251688e-06,
            "fear": 0.008416186086833477,
            "happy": 96.3660659790039,
            "sad": 0.001265919883735478,
            "surprise": 0.014566890895366669,
            "neutral": 3.3439784049987793
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 454,
            "y": 77,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.29730433225631714,
            "Man": 99.70269775390625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2567943036556244,
            "indian": 3.9818108081817627,
            "black": 91.07234954833984,
            "white": 0.8140585422515869,
            "middle eastern": 1.03316068649292,
            "latino hispanic": 2.8418259620666504
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.006760088261216879,
            "disgust": 5.8061837080458645e-06,
            "fear": 0.0006632040021941066,
            "happy": 94.60094451904297,
            "sad": 1.0536330938339233,
            "surprise": 0.0006456463597714901,
            "neutral": 4.3373613357543945
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 34,
            "y": 104,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.006716470699757338,
            "Man": 99.9932861328125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.029752492904663,
            "indian": 19.811565399169922,
            "black": 4.536499977111816,
            "white": 12.551432609558105,
            "middle eastern": 40.98092269897461,
            "latino hispanic": 20.08983039855957
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 2.3547217509189977e-09,
            "disgust": 1.8392908927272387e-18,
            "fear": 6.4750302863870405e-15,
            "happy": 99.99847412109375,
            "sad": 2.0155585533920828e-11,
            "surprise": 4.4810974375586454e-10,
            "neutral": 0.001531532732769847
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 329,
            "y": 219,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 87.33279418945312,
            "Man": 12.667202949523926
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.1842306807684508e-07,
            "indian": 8.992487710202113e-05,
            "black": 99.99991607666016,
            "white": 3.946923343711717e-11,
            "middle eastern": 8.571288644121378e-12,
            "latino hispanic": 9.349716947326669e-07
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.03424147889018059,
            "disgust": 1.7704337551549543e-07,
            "fear": 0.0002110625646309927,
            "happy": 98.32383728027344,
            "sad": 0.12641599774360657,
            "surprise": 0.014127581380307674,
            "neutral": 1.501175045967102
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 121,
            "y": 119,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.07249905914068222,
            "Man": 99.92750549316406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.863407611846924,
            "indian": 15.535473823547363,
            "black": 16.867177963256836,
            "white": 18.91652488708496,
            "middle eastern": 21.007951736450195,
            "latino hispanic": 19.809457778930664
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.3367212414741516,
            "disgust": 3.8754430420340213e-07,
            "fear": 10.29974365234375,
            "happy": 0.20034047961235046,
            "sad": 1.4607384204864502,
            "surprise": 12.484333038330078,
            "neutral": 75.21812438964844
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 208,
            "y": 190,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.02413215860724449,
            "Man": 99.97586822509766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.583495855331421,
            "indian": 12.207042694091797,
            "black": 1.4044181108474731,
            "white": 25.12348175048828,
            "middle eastern": 36.03767395019531,
            "latino hispanic": 23.64389419555664
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.6963327527046204,
            "disgust": 0.00039758114144206047,
            "fear": 0.23739805817604065,
            "happy": 0.9252121448516846,
            "sad": 23.810791015625,
            "surprise": 0.001156469457782805,
            "neutral": 74.3287124633789
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 429,
            "y": 261,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99967956542969,
            "Man": 0.00031749167828820646
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0001112240061047487,
            "indian": 5.581829827860929e-05,
            "black": 7.112499247341475e-07,
            "white": 99.71407318115234,
            "middle eastern": 0.2093392014503479,
            "latino hispanic": 0.07642138749361038
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.7752664613653906e-06,
            "disgust": 1.9903878545335374e-10,
            "fear": 5.037271330365911e-05,
            "happy": 77.65670013427734,
            "sad": 0.014344681054353714,
            "surprise": 0.0025932027492672205,
            "neutral": 22.32630157470703
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 945,
            "y": 201,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.0042551918886601925,
            "Man": 99.99574279785156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.11954014003276825,
            "indian": 2.190687417984009,
            "black": 0.4504982829093933,
            "white": 36.11197280883789,
            "middle eastern": 50.0190315246582,
            "latino hispanic": 11.108267784118652
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 5.9024390708373176e-08,
            "disgust": 3.3574364089550656e-19,
            "fear": 7.723549022564669e-10,
            "happy": 99.6921615600586,
            "sad": 1.2549196348743408e-08,
            "surprise": 6.131858185653982e-07,
            "neutral": 0.3078387379646301
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 688,
            "y": 260,
            "w": 69,
            "h": 69,
            "left_eye": [
                732,
                285
            ],
            "right_eye": [
                706,
                290
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.55123901367188,
            "Man": 0.4487549364566803
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.3449055850505829,
            "indian": 0.682469367980957,
            "black": 0.12306328862905502,
            "white": 74.39846801757812,
            "middle eastern": 11.804858207702637,
            "latino hispanic": 12.646234512329102
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.014775101095438004,
            "disgust": 3.716472065207199e-06,
            "fear": 0.016159139573574066,
            "happy": 72.36898040771484,
            "sad": 0.055194199085235596,
            "surprise": 0.08876455575227737,
            "neutral": 27.456125259399414
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 928,
            "y": 95,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.05077330768108368,
            "Man": 99.94922637939453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7491194009780884,
            "indian": 1.1088389158248901,
            "black": 0.18599510192871094,
            "white": 67.66387176513672,
            "middle eastern": 12.75951862335205,
            "latino hispanic": 17.53265953063965
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.3632997659415196e-08,
            "disgust": 2.558120150817711e-18,
            "fear": 2.5745325160642096e-07,
            "happy": 98.37244415283203,
            "sad": 1.7923117411555722e-05,
            "surprise": 1.367677193719885e-09,
            "neutral": 1.6275389194488525
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 354,
            "y": 104,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.05525700002908707,
            "Man": 99.94474029541016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.589910591017542e-10,
            "indian": 5.10321171987016e-08,
            "black": 100.0,
            "white": 9.166610036943825e-15,
            "middle eastern": 2.7022333074508756e-15,
            "latino hispanic": 8.111078475536715e-10
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 2.0196717741782777e-05,
            "disgust": 1.8048314578966718e-11,
            "fear": 1.7808980601330404e-07,
            "happy": 99.62045288085938,
            "sad": 5.265374056762084e-06,
            "surprise": 0.005608959123492241,
            "neutral": 0.3739177882671356
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 785,
            "y": 317,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.57197570800781,
            "Man": 0.42802461981773376
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.97981262207031,
            "indian": 0.017050903290510178,
            "black": 5.008941457163019e-07,
            "white": 0.00039925266173668206,
            "middle eastern": 1.395021911321237e-07,
            "latino hispanic": 0.002734354231506586
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.070757562615654e-07,
            "disgust": 7.27957309639175e-15,
            "fear": 1.6084833021068334e-07,
            "happy": 98.19985961914062,
            "sad": 6.010477022755367e-07,
            "surprise": 0.056447602808475494,
            "neutral": 1.7436968088150024
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 82,
            "y": 214,
            "w": 80,
            "h": 80,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0905173048377037,
            "Man": 99.90948486328125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.571263313293457,
            "indian": 13.571380615234375,
            "black": 7.545727252960205,
            "white": 22.130998611450195,
            "middle eastern": 21.83087921142578,
            "latino hispanic": 24.349756240844727
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.010384461842477322,
            "disgust": 2.344937959086746e-11,
            "fear": 0.0001577662187628448,
            "happy": 99.98944091796875,
            "sad": 1.205210310217808e-06,
            "surprise": 2.5766047428987804e-07,
            "neutral": 2.0881450836895965e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 0,
            "y": 282,
            "w": 87,
            "h": 87,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.08918891102075577,
            "Man": 99.91081237792969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 28.3234920501709,
            "indian": 14.420613288879395,
            "black": 8.49014949798584,
            "white": 13.449407577514648,
            "middle eastern": 10.333502769470215,
            "latino hispanic": 24.98282814025879
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.8003545594401658e-05,
            "disgust": 8.301647563824233e-11,
            "fear": 0.0013184375129640102,
            "happy": 0.4455185830593109,
            "sad": 3.012837805727031e-05,
            "surprise": 99.5472412109375,
            "neutral": 0.005856719799339771
        },
        "dominant_emotion": "surprise"
    },
    {
        "age": 30,
        "region": {
            "x": 111,
            "y": 393,
            "w": 83,
            "h": 83,
            "left_eye": [
                168,
                425
            ],
            "right_eye": [
                136,
                421
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.98295593261719,
            "Man": 0.017040319740772247
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.96585845947266,
            "indian": 0.00820323545485735,
            "black": 1.3194281791584217e-06,
            "white": 0.001382529502734542,
            "middle eastern": 1.8942512269859435e-07,
            "latino hispanic": 0.024557694792747498
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.060021888464689255,
            "disgust": 3.801432502115176e-09,
            "fear": 0.02680138126015663,
            "happy": 0.005075719207525253,
            "sad": 0.17858755588531494,
            "surprise": 8.204465120797977e-05,
            "neutral": 99.72943115234375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 266,
            "y": 391,
            "w": 82,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 48.3238410949707,
            "Man": 51.67615509033203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.03169213607907295,
            "indian": 0.032938312739133835,
            "black": 0.0012669202405959368,
            "white": 92.79667663574219,
            "middle eastern": 4.524055004119873,
            "latino hispanic": 2.613367795944214
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.9694154363824055e-05,
            "disgust": 1.3745810045762141e-09,
            "fear": 2.2894322682986967e-05,
            "happy": 90.13346099853516,
            "sad": 0.012977694161236286,
            "surprise": 8.331660865223967e-06,
            "neutral": 9.853508949279785
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 449,
            "y": 395,
            "w": 78,
            "h": 78,
            "left_eye": [
                501,
                422
            ],
            "right_eye": [
                470,
                426
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.9998779296875,
            "Man": 0.00011535309022292495
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 96.21404266357422,
            "indian": 1.0328571796417236,
            "black": 0.021450133994221687,
            "white": 0.6201178431510925,
            "middle eastern": 0.008716103620827198,
            "latino hispanic": 2.102809429168701
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.006193405017256737,
            "disgust": 4.2426941604389867e-07,
            "fear": 0.08611328154802322,
            "happy": 9.375354766845703,
            "sad": 0.28860875964164734,
            "surprise": 0.00930155161768198,
            "neutral": 90.23442840576172
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 892,
            "y": 397,
            "w": 89,
            "h": 89,
            "left_eye": [
                954,
                433
            ],
            "right_eye": [
                920,
                432
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 8.674659729003906,
            "Man": 91.3253402709961
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 98.7071533203125,
            "indian": 0.546289324760437,
            "black": 0.001901687472127378,
            "white": 0.03233622759580612,
            "middle eastern": 0.00012499355943873525,
            "latino hispanic": 0.7122007608413696
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.5193984508514404,
            "disgust": 5.3323696192819625e-05,
            "fear": 0.7445788979530334,
            "happy": 0.14145176112651825,
            "sad": 6.170757293701172,
            "surprise": 0.010275403037667274,
            "neutral": 89.41349029541016
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 564,
            "y": 414,
            "w": 82,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 88.35401916503906,
            "Man": 11.645983695983887
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99999237060547,
            "indian": 1.797870595510176e-06,
            "black": 9.754618987556363e-12,
            "white": 5.072858471066866e-07,
            "middle eastern": 4.1038841162160944e-13,
            "latino hispanic": 7.148247277655173e-06
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.3180515452404507e-06,
            "disgust": 1.3225195383270716e-09,
            "fear": 4.54903238278348e-06,
            "happy": 97.90185546875,
            "sad": 9.897863492369652e-05,
            "surprise": 0.02889840304851532,
            "neutral": 2.069134473800659
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 728,
            "y": 408,
            "w": 90,
            "h": 90,
            "left_eye": [
                790,
                446
            ],
            "right_eye": [
                759,
                439
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.95418548583984,
            "Man": 0.04581250995397568
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.16960890591144562,
            "indian": 0.1672244518995285,
            "black": 0.00864403322339058,
            "white": 91.90423583984375,
            "middle eastern": 4.131924629211426,
            "latino hispanic": 3.618363618850708
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.9313013410737767e-08,
            "disgust": 8.88593150791864e-20,
            "fear": 7.274654836852967e-12,
            "happy": 99.46375274658203,
            "sad": 1.699637763863393e-08,
            "surprise": 8.920838445192203e-05,
            "neutral": 0.5361645817756653
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 818,
            "y": 635,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 52.11741256713867,
            "Man": 47.882591247558594
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 49.43507385253906,
            "indian": 0.19492138922214508,
            "black": 0.049313683062791824,
            "white": 41.50905227661133,
            "middle eastern": 3.835061550140381,
            "latino hispanic": 4.976576328277588
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 46.479148864746094,
            "disgust": 1.6513344235136174e-05,
            "fear": 2.0165836811065674,
            "happy": 8.923922538757324,
            "sad": 41.98533248901367,
            "surprise": 4.170839747530408e-05,
            "neutral": 0.5949580073356628
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 28,
        "region": {
            "x": 30,
            "y": 652,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 11.60616683959961,
            "Man": 88.39382934570312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.381927490234375,
            "indian": 2.221987724304199,
            "black": 0.5286905169487,
            "white": 53.47218322753906,
            "middle eastern": 21.715084075927734,
            "latino hispanic": 11.68012809753418
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 99.6550521850586,
            "disgust": 7.54916300138575e-07,
            "fear": 0.10977485030889511,
            "happy": 0.03098665550351143,
            "sad": 0.16504716873168945,
            "surprise": 0.0010497935581952333,
            "neutral": 0.03809330239892006
        },
        "dominant_emotion": "angry"
    }
]
let interior_design_data2 = [
    {
        "age": 30,
        "region": {
            "x": 191,
            "y": 195,
            "w": 34,
            "h": 34,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 16.399301528930664,
            "Man": 83.60070037841797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1944045126438141,
            "indian": 0.341217577457428,
            "black": 0.03006216138601303,
            "white": 83.76998138427734,
            "middle eastern": 9.105964660644531,
            "latino hispanic": 6.558372974395752
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.14626586437225342,
            "disgust": 0.0004782547475770116,
            "fear": 9.964862823486328,
            "happy": 89.63092803955078,
            "sad": 0.06645120680332184,
            "surprise": 0.05385744199156761,
            "neutral": 0.1371554434299469
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 37,
        "region": {
            "x": 291,
            "y": 192,
            "w": 44,
            "h": 44,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.11872877180576324,
            "Man": 99.88127136230469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.4241628646850586,
            "indian": 6.216793537139893,
            "black": 0.6554135680198669,
            "white": 37.2559814453125,
            "middle eastern": 35.046268463134766,
            "latino hispanic": 19.401378631591797
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.807267040021543e-06,
            "disgust": 7.781949184441223e-14,
            "fear": 4.996566985937534e-06,
            "happy": 12.261946678161621,
            "sad": 0.0032637661788612604,
            "surprise": 5.443335382437908e-08,
            "neutral": 87.73478698730469
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 640,
            "y": 199,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.271662175655365,
            "Man": 99.72833251953125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.680217266082764,
            "indian": 16.897533416748047,
            "black": 7.154714584350586,
            "white": 25.34454345703125,
            "middle eastern": 25.220705032348633,
            "latino hispanic": 18.702287673950195
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0016268304316326976,
            "disgust": 1.3538052623385255e-11,
            "fear": 3.477542122709565e-05,
            "happy": 0.00574900396168232,
            "sad": 0.13106735050678253,
            "surprise": 1.5599721336911898e-07,
            "neutral": 99.86151885986328
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 812,
            "y": 232,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.44990539550781,
            "Man": 0.550089418888092
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.01056199986487627,
            "indian": 0.02189471945166588,
            "black": 0.0006827301112934947,
            "white": 95.48899841308594,
            "middle eastern": 2.8575100898742676,
            "latino hispanic": 1.6203500032424927
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.012508132494986057,
            "disgust": 1.485433074321918e-07,
            "fear": 0.09536880999803543,
            "happy": 99.3144760131836,
            "sad": 0.4404025673866272,
            "surprise": 6.23992455075495e-05,
            "neutral": 0.13718833029270172
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 458,
            "y": 191,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.14040705561637878,
            "Man": 99.85958862304688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.33795851469039917,
            "indian": 9.258697509765625,
            "black": 0.5578387975692749,
            "white": 21.760879516601562,
            "middle eastern": 51.80988311767578,
            "latino hispanic": 16.274738311767578
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.12571775913238525,
            "disgust": 2.7686056572329143e-13,
            "fear": 1.0831651707121637e-05,
            "happy": 84.3202133178711,
            "sad": 0.014015229418873787,
            "surprise": 2.5068809463846264e-06,
            "neutral": 15.540046691894531
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 540,
            "y": 198,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.11762107163667679,
            "Man": 99.88238525390625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.31722909212112427,
            "indian": 5.248287200927734,
            "black": 0.5205792188644409,
            "white": 49.703304290771484,
            "middle eastern": 28.716796875,
            "latino hispanic": 15.493803024291992
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.006289586424827576,
            "disgust": 6.999563428866651e-11,
            "fear": 0.000434395537013188,
            "happy": 2.085338830947876,
            "sad": 0.05356723070144653,
            "surprise": 3.9823673432692885e-05,
            "neutral": 97.85433197021484
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 740,
            "y": 185,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.272901713848114,
            "Man": 99.72709655761719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0059335981495678425,
            "indian": 0.7043850421905518,
            "black": 0.002620210638269782,
            "white": 47.25049591064453,
            "middle eastern": 48.74225997924805,
            "latino hispanic": 3.2943038940429688
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.3237876892089844,
            "disgust": 1.0966585932692396e-06,
            "fear": 1.0489710569381714,
            "happy": 75.3464584350586,
            "sad": 0.0619477741420269,
            "surprise": 0.004412150476127863,
            "neutral": 23.214427947998047
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 367,
            "y": 207,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.17299535870552063,
            "Man": 99.8270034790039
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.04967975616455,
            "indian": 25.76306915283203,
            "black": 63.05437088012695,
            "white": 0.2661454975605011,
            "middle eastern": 0.09546995908021927,
            "latino hispanic": 2.771258592605591
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 13.978667259216309,
            "disgust": 1.6190870155696757e-05,
            "fear": 0.48839375376701355,
            "happy": 0.818688690662384,
            "sad": 25.741260528564453,
            "surprise": 8.696662553120404e-05,
            "neutral": 58.9728889465332
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 410,
            "y": 255,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 37.111846923828125,
            "Man": 62.888153076171875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 52.64295196533203,
            "indian": 4.499570846557617,
            "black": 2.7144665718078613,
            "white": 9.83997917175293,
            "middle eastern": 3.5561766624450684,
            "latino hispanic": 26.746849060058594
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.017582541331648827,
            "disgust": 3.246740334361675e-07,
            "fear": 2.258549690246582,
            "happy": 0.02048395946621895,
            "sad": 0.7926152944564819,
            "surprise": 0.008707508444786072,
            "neutral": 96.90206146240234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 463,
            "y": 291,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.18281447887420654,
            "Man": 99.81718444824219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0013191417092457414,
            "indian": 0.018288645893335342,
            "black": 0.00012464268365874887,
            "white": 93.14445495605469,
            "middle eastern": 5.686496257781982,
            "latino hispanic": 1.1493185758590698
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.005944541189819574,
            "disgust": 4.512204831996769e-09,
            "fear": 0.010828669182956219,
            "happy": 5.048257298767567e-05,
            "sad": 83.25956726074219,
            "surprise": 4.164704847653411e-08,
            "neutral": 16.723609924316406
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 22,
        "region": {
            "x": 748,
            "y": 299,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 92.74358367919922,
            "Man": 7.256418228149414
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 15.85183334350586,
            "indian": 0.40822333097457886,
            "black": 0.15525612235069275,
            "white": 57.817989349365234,
            "middle eastern": 6.27732515335083,
            "latino hispanic": 19.489370346069336
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0002575571124907583,
            "disgust": 4.701611877599987e-10,
            "fear": 0.01424950547516346,
            "happy": 79.7618408203125,
            "sad": 0.0045096431858837605,
            "surprise": 0.15595676004886627,
            "neutral": 20.063188552856445
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 599,
            "y": 312,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 37.75454330444336,
            "Man": 62.245452880859375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 89.51233673095703,
            "indian": 3.4638798236846924,
            "black": 0.37078040838241577,
            "white": 1.6334490776062012,
            "middle eastern": 0.19059209525585175,
            "latino hispanic": 4.8289642333984375
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.3535655438899994,
            "disgust": 0.0001783810294000432,
            "fear": 33.785579681396484,
            "happy": 43.14759826660156,
            "sad": 0.29539981484413147,
            "surprise": 0.08484155684709549,
            "neutral": 22.332841873168945
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 327,
            "y": 322,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 98.90320587158203,
            "Man": 1.0967937707901
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.6600341796875,
            "indian": 0.016255831345915794,
            "black": 0.00015952668036334217,
            "white": 0.21158233284950256,
            "middle eastern": 0.0006775471847504377,
            "latino hispanic": 0.11128990352153778
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0166485458612442,
            "disgust": 4.643077168944333e-15,
            "fear": 0.004354952368885279,
            "happy": 2.3378693185804877e-06,
            "sad": 0.01666811853647232,
            "surprise": 1.6777646578702843e-06,
            "neutral": 99.96232604980469
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 322,
            "y": 262,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 97.9946517944336,
            "Man": 2.0053491592407227
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 97.26766967773438,
            "indian": 0.3027269244194031,
            "black": 0.0205274298787117,
            "white": 1.0516284704208374,
            "middle eastern": 0.06475093215703964,
            "latino hispanic": 1.2926970720291138
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.10197628289461136,
            "disgust": 1.326352183639301e-08,
            "fear": 0.993876039981842,
            "happy": 0.08896854519844055,
            "sad": 0.029642732813954353,
            "surprise": 78.67086029052734,
            "neutral": 20.11467933654785
        },
        "dominant_emotion": "surprise"
    },
    {
        "age": 35,
        "region": {
            "x": 533,
            "y": 267,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.98091125488281,
            "Man": 0.019098956137895584
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00011750281555578113,
            "indian": 5.8700468798633665e-05,
            "black": 1.531699211909654e-07,
            "white": 99.87936401367188,
            "middle eastern": 0.0848771259188652,
            "latino hispanic": 0.035581424832344055
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0033940537832677364,
            "disgust": 7.596209172788804e-08,
            "fear": 0.0031934487633407116,
            "happy": 58.668670654296875,
            "sad": 0.016554072499275208,
            "surprise": 0.002402861835435033,
            "neutral": 41.30579376220703
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 84,
            "y": 266,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.10644590109586716,
            "Man": 99.8935546875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00018214131705462933,
            "indian": 0.0019680496770888567,
            "black": 6.894589205330703e-06,
            "white": 97.01253509521484,
            "middle eastern": 2.141613483428955,
            "latino hispanic": 0.843700647354126
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.9770537614822388,
            "disgust": 6.774172152043678e-13,
            "fear": 0.0006076348945498466,
            "happy": 0.00495424447581172,
            "sad": 0.01139773428440094,
            "surprise": 9.316159435002191e-07,
            "neutral": 99.0059814453125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 177,
            "y": 266,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 4.102159023284912,
            "Man": 95.89784240722656
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 73.76361846923828,
            "indian": 9.077930450439453,
            "black": 2.582918643951416,
            "white": 2.968472957611084,
            "middle eastern": 0.44545498490333557,
            "latino hispanic": 11.161609649658203
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 86.65496826171875,
            "disgust": 0.5937960147857666,
            "fear": 12.607126235961914,
            "happy": 0.00010633430065354332,
            "sad": 0.10187538713216782,
            "surprise": 0.04032853618264198,
            "neutral": 0.0018036714754998684
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 27,
        "region": {
            "x": 662,
            "y": 279,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.641603946685791,
            "Man": 98.3583984375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.4760513305664,
            "indian": 0.15625189244747162,
            "black": 0.00029645173344761133,
            "white": 0.036994569003582,
            "middle eastern": 7.36398360459134e-05,
            "latino hispanic": 0.3303182125091553
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.7942167520523071,
            "disgust": 4.615043053490808e-06,
            "fear": 0.8951218724250793,
            "happy": 0.414317786693573,
            "sad": 0.13278573751449585,
            "surprise": 2.0258657932281494,
            "neutral": 94.73768615722656
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 922,
            "y": 272,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.2774158716201782,
            "Man": 99.72257995605469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.22650651633739471,
            "indian": 3.2713184356689453,
            "black": 0.14731740951538086,
            "white": 43.01656723022461,
            "middle eastern": 39.58037567138672,
            "latino hispanic": 13.757916450500488
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 99.86406707763672,
            "disgust": 1.7778116671252064e-05,
            "fear": 0.07843554019927979,
            "happy": 0.00462626526132226,
            "sad": 0.051379311829805374,
            "surprise": 0.0005448527517728508,
            "neutral": 0.0009240192011930048
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 41,
        "region": {
            "x": 232,
            "y": 280,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 29.311677932739258,
            "Man": 70.6883316040039
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.030858244746923447,
            "indian": 0.09033822268247604,
            "black": 0.0025575514882802963,
            "white": 84.48847961425781,
            "middle eastern": 10.545877456665039,
            "latino hispanic": 4.841890335083008
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0037649981677532196,
            "disgust": 7.058511553026392e-10,
            "fear": 3.170987474732101e-05,
            "happy": 98.88545227050781,
            "sad": 0.001986157614737749,
            "surprise": 1.5049315038595523e-07,
            "neutral": 1.1087658405303955
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 674,
            "y": 359,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.23557035624980927,
            "Man": 99.7644271850586
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0602772980928421,
            "indian": 1.1662805080413818,
            "black": 0.03168487921357155,
            "white": 44.017845153808594,
            "middle eastern": 44.55741500854492,
            "latino hispanic": 10.166497230529785
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 3.264182305429131e-05,
            "disgust": 1.924841212128117e-16,
            "fear": 4.9287343095727465e-09,
            "happy": 99.98004913330078,
            "sad": 3.2404818739451e-07,
            "surprise": 0.0003303741104900837,
            "neutral": 0.019596058875322342
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 542,
            "y": 364,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 98.19893646240234,
            "Man": 1.80106520652771
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.96649169921875,
            "indian": 0.0001684120506979525,
            "black": 3.8011319247743813e-06,
            "white": 0.025880243629217148,
            "middle eastern": 0.00022330555657390505,
            "latino hispanic": 0.0072385817766189575
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 16.24431037902832,
            "disgust": 0.003067786106839776,
            "fear": 17.286216735839844,
            "happy": 6.116886615753174,
            "sad": 16.916366577148438,
            "surprise": 3.003199577331543,
            "neutral": 40.429954528808594
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 136,
            "y": 370,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.869140625,
            "Man": 0.13086219131946564
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.617523477965733e-07,
            "indian": 2.719199017064966e-07,
            "black": 1.1411629280422275e-10,
            "white": 99.99319458007812,
            "middle eastern": 0.004306292161345482,
            "latino hispanic": 0.002504817210137844
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 72.35757446289062,
            "disgust": 0.0008905418217182159,
            "fear": 17.654672622680664,
            "happy": 6.074970722198486,
            "sad": 1.9247560501098633,
            "surprise": 1.479480266571045,
            "neutral": 0.507667601108551
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 31,
        "region": {
            "x": 250,
            "y": 379,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.3894100785255432,
            "Man": 99.61058807373047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 50.88564682006836,
            "indian": 6.71250581741333,
            "black": 3.7274951934814453,
            "white": 16.09902572631836,
            "middle eastern": 5.734503746032715,
            "latino hispanic": 16.840822219848633
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.8068044781684875,
            "disgust": 6.549906538566574e-05,
            "fear": 1.6988962888717651,
            "happy": 0.27683025598526,
            "sad": 5.494746208190918,
            "surprise": 0.05776864290237427,
            "neutral": 91.6648941040039
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 397,
            "y": 342,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.029338426887989044,
            "Man": 99.97065734863281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00036962208105251193,
            "indian": 0.4170258343219757,
            "black": 0.00021832466882187873,
            "white": 26.894615173339844,
            "middle eastern": 70.59928131103516,
            "latino hispanic": 2.088491678237915
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.06608251482248306,
            "disgust": 7.460068261917752e-13,
            "fear": 0.00037477174191735685,
            "happy": 0.011501745320856571,
            "sad": 0.006955169141292572,
            "surprise": 1.6333287078396097e-07,
            "neutral": 99.91508483886719
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 247,
            "y": 508,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 86.26353454589844,
            "Man": 13.736457824707031
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.6125198128424364e-14,
            "indian": 3.251680541038575e-14,
            "black": 3.482231338513351e-20,
            "white": 100.0,
            "middle eastern": 7.903711320977891e-07,
            "latino hispanic": 2.146410622572148e-07
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.414502143859863,
            "disgust": 5.713318884659202e-08,
            "fear": 0.09346705675125122,
            "happy": 90.15137481689453,
            "sad": 0.3402976095676422,
            "surprise": 0.00010714634845498949,
            "neutral": 0.0002571297809481621
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 52,
            "y": 510,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.21676868200302124,
            "Man": 99.78323364257812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7687442302703857,
            "indian": 10.681283950805664,
            "black": 0.6644328832626343,
            "white": 32.1700553894043,
            "middle eastern": 38.61240768432617,
            "latino hispanic": 17.10307502746582
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.24622245132923126,
            "disgust": 8.214287916530338e-09,
            "fear": 0.3435235619544983,
            "happy": 0.00024940140428952873,
            "sad": 10.438477516174316,
            "surprise": 1.4222786148820887e-06,
            "neutral": 88.9715347290039
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 817,
            "y": 330,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.02535211108624935,
            "Man": 99.97464752197266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2016439288854599,
            "indian": 4.180431365966797,
            "black": 0.1728540062904358,
            "white": 30.568897247314453,
            "middle eastern": 51.56817626953125,
            "latino hispanic": 13.308003425598145
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 5.38845682144165,
            "disgust": 6.841488357167691e-06,
            "fear": 0.06361504644155502,
            "happy": 2.901745080947876,
            "sad": 2.154123544692993,
            "surprise": 0.00369193684309721,
            "neutral": 89.48836517333984
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 953,
            "y": 336,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.15825094282627106,
            "Man": 99.84175109863281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0012796398950740695,
            "indian": 0.019838029518723488,
            "black": 0.00015236112812999636,
            "white": 92.24873352050781,
            "middle eastern": 5.455281734466553,
            "latino hispanic": 2.2747185230255127
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.5961946249008179,
            "disgust": 6.809753472225566e-08,
            "fear": 0.20327681303024292,
            "happy": 0.0007367763901129365,
            "sad": 6.8133864402771,
            "surprise": 0.0005133041995577514,
            "neutral": 91.38589477539062
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 8,
            "y": 356,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 36.166114807128906,
            "Man": 63.833885192871094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 85.06663513183594,
            "indian": 3.8923873901367188,
            "black": 0.4426518380641937,
            "white": 2.253528594970703,
            "middle eastern": 0.33893054723739624,
            "latino hispanic": 8.005866050720215
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 51.940242767333984,
            "disgust": 3.945658306747646e-07,
            "fear": 30.265480041503906,
            "happy": 9.818667604122311e-05,
            "sad": 0.32300105690956116,
            "surprise": 14.810476303100586,
            "neutral": 2.6607112884521484
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 29,
        "region": {
            "x": 407,
            "y": 465,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 98.429931640625,
            "Man": 1.570076823234558
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 97.76327514648438,
            "indian": 0.732239305973053,
            "black": 0.03626475855708122,
            "white": 0.11456447839736938,
            "middle eastern": 0.009262406267225742,
            "latino hispanic": 1.3443937301635742
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.2515995502471924,
            "disgust": 0.0005104243173263967,
            "fear": 2.9085164070129395,
            "happy": 1.0769860744476318,
            "sad": 19.84416961669922,
            "surprise": 0.003668899182230234,
            "neutral": 72.91455078125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 746,
            "y": 461,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 83.8567886352539,
            "Man": 16.14321517944336
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99993896484375,
            "indian": 1.0053737241833005e-05,
            "black": 1.6857602553460582e-12,
            "white": 2.1176363134145504e-06,
            "middle eastern": 3.467990868435966e-13,
            "latino hispanic": 5.295322625897825e-05
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0032220357097685337,
            "disgust": 6.544903499161592e-07,
            "fear": 0.45186272263526917,
            "happy": 24.39791488647461,
            "sad": 0.06603220105171204,
            "surprise": 54.3192253112793,
            "neutral": 20.76174545288086
        },
        "dominant_emotion": "surprise"
    },
    {
        "age": 23,
        "region": {
            "x": 566,
            "y": 468,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 91.64685821533203,
            "Man": 8.353148460388184
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.722223770339042e-05,
            "indian": 1.933981548063457e-05,
            "black": 2.6469936642570246e-07,
            "white": 99.69609069824219,
            "middle eastern": 0.09692090004682541,
            "latino hispanic": 0.20689241588115692
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.452058300965291e-07,
            "disgust": 5.6340070378935094e-15,
            "fear": 5.994563616695814e-05,
            "happy": 97.5968246459961,
            "sad": 1.1494845466586412e-06,
            "surprise": 0.01576048508286476,
            "neutral": 2.3873603343963623
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 303,
            "y": 592,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 19.522703170776367,
            "Man": 80.477294921875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.5733097195625305,
            "indian": 0.00016386005154345185,
            "black": 1.0037912943516858e-05,
            "white": 99.13984680175781,
            "middle eastern": 0.23126071691513062,
            "latino hispanic": 0.05541062727570534
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.2035890889782195e-09,
            "disgust": 1.4187257912538716e-16,
            "fear": 0.010768652893602848,
            "happy": 0.0519014373421669,
            "sad": 99.93732452392578,
            "surprise": 1.6120915017112076e-16,
            "neutral": 6.716963980579749e-07
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 898,
            "y": 473,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 97.71388244628906,
            "Man": 2.2861146926879883
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.19287109375,
            "indian": 0.001149453571997583,
            "black": 0.0003287769795861095,
            "white": 0.6611457467079163,
            "middle eastern": 0.011027605272829533,
            "latino hispanic": 0.1334766000509262
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.00040785098099149764,
            "disgust": 1.5875475033958614e-13,
            "fear": 3.59200821549166e-05,
            "happy": 0.10661379992961884,
            "sad": 0.0003870890650432557,
            "surprise": 0.0006619633641093969,
            "neutral": 99.89188385009766
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 816,
            "y": 563,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 13.678644180297852,
            "Man": 86.32135009765625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 54.269126892089844,
            "indian": 7.111979961395264,
            "black": 6.913574695587158,
            "white": 6.037810802459717,
            "middle eastern": 2.808371067047119,
            "latino hispanic": 22.8591251373291
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 8.294324652524665e-05,
            "disgust": 1.3497507148421684e-12,
            "fear": 0.004449903964996338,
            "happy": 1.2466038465499878,
            "sad": 0.0004649525508284569,
            "surprise": 0.00781082920730114,
            "neutral": 98.74059295654297
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 578,
            "y": 575,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.26122722029685974,
            "Man": 99.73876953125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.43648919928819e-05,
            "indian": 2.5088798999786377,
            "black": 0.0004737009876407683,
            "white": 1.3308281898498535,
            "middle eastern": 93.66217041015625,
            "latino hispanic": 2.497560501098633
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.24720659852027893,
            "disgust": 5.576077251844003e-13,
            "fear": 0.010773728601634502,
            "happy": 0.037696123123168945,
            "sad": 0.031198428943753242,
            "surprise": 4.515265118243406e-06,
            "neutral": 99.67311096191406
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 394,
            "y": 593,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.257938027381897,
            "Man": 98.7420654296875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.207866969518363e-05,
            "indian": 0.00036170618841424584,
            "black": 1.5443189340658137e-06,
            "white": 98.93733978271484,
            "middle eastern": 0.8635193109512329,
            "latino hispanic": 0.19868873059749603
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.292568286880851e-05,
            "disgust": 3.267669555079289e-12,
            "fear": 0.0008127629407681525,
            "happy": 0.0009490007651038468,
            "sad": 0.0036823118571192026,
            "surprise": 3.495452801871579e-06,
            "neutral": 99.99449157714844
        },
        "dominant_emotion": "neutral"
    }
]
let interior_design_data3 = [
    {
        "age": 42,
        "region": {
            "x": 339,
            "y": 255,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.048735376447439194,
            "Man": 99.95126342773438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.959403991699219,
            "indian": 15.312150955200195,
            "black": 5.698322296142578,
            "white": 20.313350677490234,
            "middle eastern": 14.33618450164795,
            "latino hispanic": 36.38059616088867
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 7.646318067600077e-07,
            "disgust": 1.0519532564912809e-14,
            "fear": 1.704486329856536e-09,
            "happy": 99.99365997314453,
            "sad": 3.438223572516108e-08,
            "surprise": 5.870168934052344e-06,
            "neutral": 0.006338917650282383
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 37,
        "region": {
            "x": 451,
            "y": 276,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.7524808645248413,
            "Man": 99.24752044677734
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0008452619076706469,
            "indian": 0.0014255207497626543,
            "black": 4.170696684013819e-06,
            "white": 98.82138061523438,
            "middle eastern": 0.7452638149261475,
            "latino hispanic": 0.4310780167579651
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0005614137626253068,
            "disgust": 3.467279796609546e-10,
            "fear": 6.702912287437357e-07,
            "happy": 99.32183837890625,
            "sad": 7.235993689391762e-05,
            "surprise": 9.222263201991154e-07,
            "neutral": 0.6775318384170532
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 64,
            "y": 294,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.6584376096725464,
            "Man": 99.34156036376953
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 41.383419036865234,
            "indian": 7.742319583892822,
            "black": 2.1973297595977783,
            "white": 16.66816520690918,
            "middle eastern": 8.647566795349121,
            "latino hispanic": 23.361204147338867
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.7714540362358093,
            "disgust": 0.024264462292194366,
            "fear": 0.1847052425146103,
            "happy": 0.1720215082168579,
            "sad": 7.901208877563477,
            "surprise": 0.014542060904204845,
            "neutral": 90.93180084228516
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 556,
            "y": 277,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.15480519831180573,
            "Man": 99.8451919555664
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.07844211906194687,
            "indian": 0.18806523084640503,
            "black": 0.0033449982292950153,
            "white": 91.63141632080078,
            "middle eastern": 6.744592666625977,
            "latino hispanic": 1.3541380167007446
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.07686319947242737,
            "disgust": 4.934464295502927e-11,
            "fear": 9.141350005847926e-07,
            "happy": 0.48962080478668213,
            "sad": 0.2103816270828247,
            "surprise": 7.247033408930292e-07,
            "neutral": 99.22313690185547
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 707,
            "y": 283,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 28.920129776000977,
            "Man": 71.07987213134766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.04289245605469,
            "indian": 0.05636196583509445,
            "black": 0.0005815707263536751,
            "white": 0.040827926248311996,
            "middle eastern": 0.000375045754481107,
            "latino hispanic": 0.8589580655097961
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.8696044651610464e-08,
            "disgust": 4.320188304318684e-11,
            "fear": 1.5142346683205687e-06,
            "happy": 99.93679809570312,
            "sad": 3.843990998575464e-05,
            "surprise": 4.965673724655062e-05,
            "neutral": 0.06311990320682526
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 204,
            "y": 290,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.72676086425781,
            "Man": 0.2732400894165039
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.06247733160853386,
            "indian": 0.16173642873764038,
            "black": 0.007945972494781017,
            "white": 83.08588409423828,
            "middle eastern": 12.075573921203613,
            "latino hispanic": 4.606385231018066
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2549426742225478e-07,
            "disgust": 3.3003912103257704e-11,
            "fear": 7.504894165322185e-05,
            "happy": 99.93915557861328,
            "sad": 2.4640805804665433e-06,
            "surprise": 7.55048095015809e-05,
            "neutral": 0.060693006962537766
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 612,
            "y": 308,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.9993332624435425,
            "Man": 98.00066375732422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.6356803178787231,
            "indian": 5.826526165008545,
            "black": 0.37149858474731445,
            "white": 35.36345291137695,
            "middle eastern": 34.425968170166016,
            "latino hispanic": 22.376876831054688
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.369020411511883e-05,
            "disgust": 1.7139011562020302e-16,
            "fear": 1.2141385119512904e-11,
            "happy": 99.91851043701172,
            "sad": 6.4165337789745536e-06,
            "surprise": 9.131513252214063e-07,
            "neutral": 0.08140933513641357
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 501,
            "y": 329,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.3433086574077606,
            "Man": 99.65669250488281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.0586415529251099,
            "indian": 2.5641071796417236,
            "black": 0.25070643424987793,
            "white": 49.13059997558594,
            "middle eastern": 25.011751174926758,
            "latino hispanic": 21.98419189453125
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0007254922529682517,
            "disgust": 1.2281241579259472e-09,
            "fear": 0.00506129814311862,
            "happy": 0.0003375493688508868,
            "sad": 0.012910617515444756,
            "surprise": 0.0004648445174098015,
            "neutral": 99.98050689697266
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 270,
            "y": 345,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.7597885131836,
            "Man": 0.24021226167678833
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 72.41609954833984,
            "indian": 6.999536514282227,
            "black": 2.2471141815185547,
            "white": 4.7866034507751465,
            "middle eastern": 2.2447779178619385,
            "latino hispanic": 11.305866241455078
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.9222772468529e-07,
            "disgust": 4.318945781523961e-14,
            "fear": 6.172668065573816e-08,
            "happy": 99.99915313720703,
            "sad": 5.412664094706088e-08,
            "surprise": 1.6148895156220533e-05,
            "neutral": 0.000830502191092819
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 394,
            "y": 345,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.5846176147461,
            "Man": 0.4153866171836853
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 37.17053985595703,
            "indian": 9.838809967041016,
            "black": 2.559143543243408,
            "white": 18.14400291442871,
            "middle eastern": 17.763368606567383,
            "latino hispanic": 14.524134635925293
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 7.754869329801295e-06,
            "disgust": 8.601099975476256e-13,
            "fear": 1.844838948272809e-07,
            "happy": 99.80986022949219,
            "sad": 0.00021269831631798297,
            "surprise": 1.6229569155257195e-05,
            "neutral": 0.18989984691143036
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 862,
            "y": 352,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 11.527714729309082,
            "Man": 88.4722900390625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.26732850074768066,
            "indian": 2.049036979675293,
            "black": 0.13287803530693054,
            "white": 55.504364013671875,
            "middle eastern": 33.1823844909668,
            "latino hispanic": 8.864009857177734
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.447165563055023e-08,
            "disgust": 1.868950133543379e-10,
            "fear": 1.6017915186239406e-05,
            "happy": 99.99996185302734,
            "sad": 1.550429078633897e-05,
            "surprise": 3.170175233435657e-10,
            "neutral": 4.873935722571332e-06
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 778,
            "y": 358,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 1.3499666452407837,
            "Man": 98.65003204345703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.507793664932251,
            "indian": 0.3125271499156952,
            "black": 0.0279688723385334,
            "white": 87.06473541259766,
            "middle eastern": 5.933528900146484,
            "latino hispanic": 6.1534504890441895
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.2681564688682556,
            "disgust": 0.208743616938591,
            "fear": 2.9148876667022705,
            "happy": 73.38090515136719,
            "sad": 13.14697265625,
            "surprise": 0.0021156826987862587,
            "neutral": 10.078221321105957
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 0,
            "y": 401,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 98.65373229980469,
            "Man": 1.346270203590393
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.017077794298529625,
            "indian": 0.009223442524671555,
            "black": 0.00031670602038502693,
            "white": 96.99327850341797,
            "middle eastern": 1.4227702617645264,
            "latino hispanic": 1.5573348999023438
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.12453006207942963,
            "disgust": 1.8783241273467866e-07,
            "fear": 0.00599014014005661,
            "happy": 0.363341361284256,
            "sad": 0.4988889992237091,
            "surprise": 1.873359906312544e-05,
            "neutral": 99.00723266601562
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 593,
            "y": 395,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99800109863281,
            "Man": 0.0019991397857666016
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 46.81995391845703,
            "indian": 3.8195316791534424,
            "black": 0.9773964881896973,
            "white": 28.838092803955078,
            "middle eastern": 5.999455451965332,
            "latino hispanic": 13.545572280883789
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.983398680351691e-11,
            "disgust": 1.0902453290476902e-15,
            "fear": 5.8470178032621334e-08,
            "happy": 99.99932861328125,
            "sad": 1.8119262534810332e-08,
            "surprise": 8.012962666725798e-07,
            "neutral": 0.0006750452448613942
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 112,
            "y": 403,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99900817871094,
            "Man": 0.0009900362929329276
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00039867396117188036,
            "indian": 0.00033874763175845146,
            "black": 2.551401166783762e-06,
            "white": 99.20375061035156,
            "middle eastern": 0.3393605947494507,
            "latino hispanic": 0.45615383982658386
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.921911209824884e-09,
            "disgust": 2.568743964282208e-14,
            "fear": 3.1522526455773914e-07,
            "happy": 99.96463012695312,
            "sad": 2.711731781346316e-07,
            "surprise": 0.00012962006439920515,
            "neutral": 0.03523559868335724
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 983,
            "y": 413,
            "w": 40,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 87.22798156738281,
            "Man": 12.772011756896973
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 16.78242301940918,
            "indian": 6.042820453643799,
            "black": 4.772690773010254,
            "white": 34.0967903137207,
            "middle eastern": 15.656600952148438,
            "latino hispanic": 22.6486759185791
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.197802132286597e-05,
            "disgust": 1.6269613434261032e-10,
            "fear": 2.200712287958595e-06,
            "happy": 99.5750961303711,
            "sad": 0.00011334444570820779,
            "surprise": 0.0017596995458006859,
            "neutral": 0.4230107069015503
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 202,
            "y": 418,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.8581314086914,
            "Man": 0.141874298453331
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.4122016429901123,
            "indian": 0.3800921142101288,
            "black": 0.06711415201425552,
            "white": 83.29641723632812,
            "middle eastern": 9.088311195373535,
            "latino hispanic": 6.75587272644043
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.9827333491994068e-05,
            "disgust": 1.0544379591692632e-07,
            "fear": 0.01891668699681759,
            "happy": 99.93170166015625,
            "sad": 0.001147737493738532,
            "surprise": 0.007395605091005564,
            "neutral": 0.0407981313765049
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 473,
            "y": 423,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 61.484886169433594,
            "Man": 38.515113830566406
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.006146603729575872,
            "indian": 0.007859451696276665,
            "black": 0.00013853459677193314,
            "white": 96.8033676147461,
            "middle eastern": 1.639538288116455,
            "latino hispanic": 1.5429521799087524
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.836841541575268e-05,
            "disgust": 2.5861788799375063e-06,
            "fear": 0.17144939303398132,
            "happy": 84.81595611572266,
            "sad": 0.06691793352365494,
            "surprise": 0.017001386731863022,
            "neutral": 14.92859935760498
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 822,
            "y": 424,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.9405517578125,
            "Man": 0.059453777968883514
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.7010657787323,
            "indian": 14.003755569458008,
            "black": 1.2097259759902954,
            "white": 21.335330963134766,
            "middle eastern": 39.30142593383789,
            "latino hispanic": 21.448698043823242
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 2.9049306249362417e-06,
            "disgust": 9.084892838018277e-10,
            "fear": 8.175285074685235e-06,
            "happy": 99.9179916381836,
            "sad": 0.0002363587118452415,
            "surprise": 0.00010076975013362244,
            "neutral": 0.08166111260652542
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 423,
            "y": 433,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.014487454667687416,
            "Man": 99.98551940917969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.004284901078790426,
            "indian": 0.15429182350635529,
            "black": 0.0004093165334779769,
            "white": 80.77813720703125,
            "middle eastern": 14.777703285217285,
            "latino hispanic": 4.285183429718018
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00018682799418456852,
            "disgust": 4.551698254418035e-11,
            "fear": 0.00028952330467291176,
            "happy": 0.07541116327047348,
            "sad": 0.004947113338857889,
            "surprise": 0.0016865929355844855,
            "neutral": 99.91748046875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 46,
            "y": 448,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.2720242738723755,
            "Man": 99.72797393798828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0005445032147690654,
            "indian": 0.0011394750326871872,
            "black": 1.4124725566944107e-05,
            "white": 98.01932525634766,
            "middle eastern": 1.1305629014968872,
            "latino hispanic": 0.8484014272689819
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.5057052373886108,
            "disgust": 0.00044797983719035983,
            "fear": 7.236336708068848,
            "happy": 0.6170445084571838,
            "sad": 0.32699477672576904,
            "surprise": 1.9572741985321045,
            "neutral": 88.35619354248047
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 906,
            "y": 447,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 1.3586828708648682,
            "Man": 98.64132690429688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00010019870387623087,
            "indian": 0.0039366791024804115,
            "black": 5.0137391554017086e-06,
            "white": 97.43096160888672,
            "middle eastern": 2.2415828704833984,
            "latino hispanic": 0.32341867685317993
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.852217317529721e-07,
            "disgust": 5.713731709988679e-10,
            "fear": 1.0697770449041855e-05,
            "happy": 98.42752838134766,
            "sad": 0.002015790669247508,
            "surprise": 1.6506512110936455e-05,
            "neutral": 1.5704264640808105
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 645,
            "y": 451,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.9813003540039,
            "Man": 0.01870225928723812
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 13.160648345947266,
            "indian": 0.10443692654371262,
            "black": 0.008479475043714046,
            "white": 82.7505111694336,
            "middle eastern": 1.3872594833374023,
            "latino hispanic": 2.5886709690093994
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0048933508805930614,
            "disgust": 5.587371106230421e-06,
            "fear": 0.01803225837647915,
            "happy": 98.66851806640625,
            "sad": 0.21256130933761597,
            "surprise": 0.01055918913334608,
            "neutral": 1.0854322910308838
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 274,
            "y": 463,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 14.49407958984375,
            "Man": 85.50592041015625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00048131379298865795,
            "indian": 0.06458749622106552,
            "black": 99.93385314941406,
            "white": 5.735491868108511e-06,
            "middle eastern": 8.88260910869576e-06,
            "latino hispanic": 0.0010640352265909314
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.2109287794714874e-08,
            "disgust": 8.068969968663624e-21,
            "fear": 3.7501475702583775e-08,
            "happy": 0.00013653995119966567,
            "sad": 6.14478040006361e-06,
            "surprise": 4.499917849898338e-05,
            "neutral": 99.99980926513672
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 538,
            "y": 468,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 72.21842193603516,
            "Man": 27.781578063964844
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 79.94220733642578,
            "indian": 5.739438533782959,
            "black": 0.2924324572086334,
            "white": 5.640085220336914,
            "middle eastern": 0.8815637826919556,
            "latino hispanic": 7.504273414611816
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.109018087387085,
            "disgust": 0.001229755929671228,
            "fear": 0.02193635329604149,
            "happy": 2.623356580734253,
            "sad": 0.17220889031887054,
            "surprise": 0.058073051273822784,
            "neutral": 95.01417541503906
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 768,
            "y": 474,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99779510498047,
            "Man": 0.002200223971158266
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 40.20701217651367,
            "indian": 1.6495788097381592,
            "black": 0.2867421507835388,
            "white": 30.8162899017334,
            "middle eastern": 6.098005771636963,
            "latino hispanic": 20.942371368408203
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.007062918972223997,
            "disgust": 1.4496404219244141e-05,
            "fear": 0.012561822310090065,
            "happy": 1.3258215188980103,
            "sad": 0.2502277195453644,
            "surprise": 0.002699852455407381,
            "neutral": 98.401611328125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 164,
            "y": 481,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.4567642211914,
            "Man": 0.5432368516921997
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.128993391030235e-06,
            "indian": 8.099933666017023e-07,
            "black": 6.051469991774638e-09,
            "white": 99.96688079833984,
            "middle eastern": 0.013055519200861454,
            "latino hispanic": 0.02006245031952858
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6900210539461114e-05,
            "disgust": 3.165937290106058e-09,
            "fear": 0.0003729299933183938,
            "happy": 99.66719055175781,
            "sad": 0.0008711062837392092,
            "surprise": 0.007949556224048138,
            "neutral": 0.3235997259616852
        },
        "dominant_emotion": "happy"
    }
]

let interior_design_data4 = [
    {
        "age": 28,
        "region": {
            "x": 581,
            "y": 199,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.07922650873661041,
            "Man": 99.9207763671875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.015430327504873276,
            "indian": 11.565346717834473,
            "black": 0.013140661641955376,
            "white": 8.159574508666992,
            "middle eastern": 72.72586059570312,
            "latino hispanic": 7.520650386810303
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.08464270085096359,
            "disgust": 4.050422575119228e-08,
            "fear": 0.056991901248693466,
            "happy": 0.003290018532425165,
            "sad": 0.37213996052742004,
            "surprise": 4.7915153118083254e-05,
            "neutral": 99.4828872680664
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 98,
            "y": 208,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 7.135309219360352,
            "Man": 92.86469268798828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.18002817034721375,
            "indian": 0.9678575992584229,
            "black": 0.14785458147525787,
            "white": 65.77544403076172,
            "middle eastern": 23.371829986572266,
            "latino hispanic": 9.556989669799805
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.026459302753210068,
            "disgust": 0.0005771151627413929,
            "fear": 0.6137459874153137,
            "happy": 42.22761535644531,
            "sad": 0.3446889817714691,
            "surprise": 0.27153998613357544,
            "neutral": 56.515377044677734
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 430,
            "y": 213,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.7089335918426514,
            "Man": 99.29106903076172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.43404558300971985,
            "indian": 0.8964428901672363,
            "black": 0.10768210142850876,
            "white": 61.360008239746094,
            "middle eastern": 21.6959171295166,
            "latino hispanic": 15.50590705871582
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.32592570781707764,
            "disgust": 9.032651178131346e-06,
            "fear": 0.9171510338783264,
            "happy": 0.434368759393692,
            "sad": 5.271096706390381,
            "surprise": 0.00440653320401907,
            "neutral": 93.04704284667969
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 228,
            "y": 227,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.96514129638672,
            "Man": 0.03485141694545746
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.2762272357940674,
            "indian": 9.584843635559082,
            "black": 2.465442419052124,
            "white": 25.015350341796875,
            "middle eastern": 30.2236270904541,
            "latino hispanic": 29.43450927734375
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.008748178370296955,
            "disgust": 5.040631734232193e-08,
            "fear": 0.07217000424861908,
            "happy": 87.1292724609375,
            "sad": 0.11798086017370224,
            "surprise": 0.004052991978824139,
            "neutral": 12.667776107788086
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 37,
        "region": {
            "x": 323,
            "y": 248,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99878692626953,
            "Man": 0.0012153356801718473
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.12301385402679443,
            "indian": 0.1320922076702118,
            "black": 0.0033346868585795164,
            "white": 96.42411041259766,
            "middle eastern": 2.0074241161346436,
            "latino hispanic": 1.3100178241729736
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.391631426235108e-07,
            "disgust": 1.4843453072579949e-12,
            "fear": 5.509979246198782e-07,
            "happy": 99.94161224365234,
            "sad": 2.10589831795005e-07,
            "surprise": 3.41586783179082e-05,
            "neutral": 0.058357417583465576
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 665,
            "y": 207,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.06658279150724411,
            "Man": 99.93341827392578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.004791314713656902,
            "indian": 0.5738444328308105,
            "black": 0.001237868913449347,
            "white": 43.166107177734375,
            "middle eastern": 50.13259506225586,
            "latino hispanic": 6.121422290802002
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 24.78705406188965,
            "disgust": 1.3376142978668213,
            "fear": 0.08123240619897842,
            "happy": 47.47489929199219,
            "sad": 1.2256972789764404,
            "surprise": 0.008030193857848644,
            "neutral": 25.085472106933594
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 806,
            "y": 244,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 80.26628112792969,
            "Man": 19.73371124267578
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 9.923470497131348,
            "indian": 11.669549942016602,
            "black": 1.877655029296875,
            "white": 9.147613525390625,
            "middle eastern": 56.58906936645508,
            "latino hispanic": 10.792642593383789
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.0026887510903179646,
            "disgust": 2.364670237398059e-09,
            "fear": 0.0005222292966209352,
            "happy": 0.10069071501493454,
            "sad": 1.8053134679794312,
            "surprise": 3.6114097383688204e-06,
            "neutral": 98.09078216552734
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 916,
            "y": 257,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.97456359863281,
            "Man": 0.025429721921682358
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.1778171062469482,
            "indian": 10.534283638000488,
            "black": 1.1154080629348755,
            "white": 28.4539852142334,
            "middle eastern": 30.482011795043945,
            "latino hispanic": 27.23649787902832
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.27151721715927124,
            "disgust": 0.0014379192143678665,
            "fear": 0.1671438366174698,
            "happy": 92.13050079345703,
            "sad": 1.2482963800430298,
            "surprise": 1.248073697090149,
            "neutral": 4.933032989501953
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 312,
            "y": 420,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.9306411743164,
            "Man": 0.06935945898294449
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.44230318069458,
            "indian": 6.486137390136719,
            "black": 87.73885345458984,
            "white": 0.09185219556093216,
            "middle eastern": 0.07596129924058914,
            "latino hispanic": 3.164891481399536
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 9.123462402227389e-12,
            "disgust": 2.3654967987709895e-20,
            "fear": 1.8949377928335204e-13,
            "happy": 99.91526794433594,
            "sad": 1.0407394945843862e-09,
            "surprise": 3.492803216431639e-06,
            "neutral": 0.08472588658332825
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 641,
            "y": 444,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99700927734375,
            "Man": 0.002989973174408078
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.5740553140640259,
            "indian": 4.1455159187316895,
            "black": 0.5081695318222046,
            "white": 41.40482711791992,
            "middle eastern": 21.613962173461914,
            "latino hispanic": 30.75347328186035
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.3945936188974883e-05,
            "disgust": 9.73937770709643e-12,
            "fear": 0.0005578717682510614,
            "happy": 0.0012133728014305234,
            "sad": 0.017256632447242737,
            "surprise": 4.341497401583183e-07,
            "neutral": 99.98095703125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 776,
            "y": 413,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 99.99616241455078,
            "Man": 0.003833081340417266
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 30.49053955078125,
            "indian": 6.599621772766113,
            "black": 3.8323001861572266,
            "white": 14.03502082824707,
            "middle eastern": 5.851592063903809,
            "latino hispanic": 39.1909294128418
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.01327286846935749,
            "disgust": 7.98956373607683e-15,
            "fear": 4.416460797074251e-06,
            "happy": 2.035558281932026e-06,
            "sad": 0.052625492215156555,
            "surprise": 8.037739007704658e-08,
            "neutral": 99.93409729003906
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 166,
            "y": 423,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99998474121094,
            "Man": 1.4018456568010151e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.002996019320562482,
            "indian": 0.01641649566590786,
            "black": 0.00019174731278326362,
            "white": 92.49960327148438,
            "middle eastern": 3.5014572143554688,
            "latino hispanic": 3.979337215423584
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6523507007093485e-09,
            "disgust": 1.6409376057766468e-16,
            "fear": 1.2824054707039068e-08,
            "happy": 99.89625549316406,
            "sad": 2.8880526770080905e-06,
            "surprise": 4.440477823663969e-06,
            "neutral": 0.10374581813812256
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 475,
            "y": 430,
            "w": 79,
            "h": 79,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.04246928542852402,
            "Man": 99.95753479003906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.012653064914047718,
            "indian": 1.0900194644927979,
            "black": 0.004414115566760302,
            "white": 37.83810806274414,
            "middle eastern": 53.09137725830078,
            "latino hispanic": 7.963428497314453
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 2.881747007369995,
            "disgust": 0.0008345372625626624,
            "fear": 0.5011968016624451,
            "happy": 0.6743301749229431,
            "sad": 10.527922630310059,
            "surprise": 0.00916083250194788,
            "neutral": 85.4048080444336
        },
        "dominant_emotion": "neutral"
    }
]

console.log("Microsoft Results for Interior Designer:");
const data = interior_design_data.concat(interior_design_data2, interior_design_data3, interior_design_data4);
console.log(processData(data));