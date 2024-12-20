const { processData } = require('../../data_processing.js');

let roofer_data = [
    {
        "age": 34,
        "region": {
            "x": 71,
            "y": 95,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.3743942677974701,
            "Man": 99.6256103515625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.196942329406738,
            "indian": 10.961516380310059,
            "black": 5.9566497802734375,
            "white": 27.433008193969727,
            "middle eastern": 28.8568172454834,
            "latino hispanic": 21.59506607055664
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 5.45064640045166,
            "disgust": 3.834238384570199e-07,
            "fear": 0.0001167835871456191,
            "happy": 93.90764617919922,
            "sad": 0.0058829146437346935,
            "surprise": 0.00014069926692172885,
            "neutral": 0.6355684995651245
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 832,
            "y": 162,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.38825491070747375,
            "Man": 99.61174774169922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.672000408172607,
            "indian": 3.609754800796509,
            "black": 0.890160322189331,
            "white": 52.31865692138672,
            "middle eastern": 21.599531173706055,
            "latino hispanic": 16.909900665283203
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.495462925049651e-06,
            "disgust": 4.450126345812474e-16,
            "fear": 7.45517709788146e-08,
            "happy": 99.89502716064453,
            "sad": 2.380501129550794e-08,
            "surprise": 0.008394990116357803,
            "neutral": 0.09657498449087143
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 37,
        "region": {
            "x": 556,
            "y": 203,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.002593307988718152,
            "Man": 99.99739837646484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.032444704324007034,
            "indian": 0.7799433469772339,
            "black": 0.012305074371397495,
            "white": 56.29329299926758,
            "middle eastern": 37.2589225769043,
            "latino hispanic": 5.623086452484131
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0027659183833748102,
            "disgust": 4.325441338437486e-09,
            "fear": 8.302792480208154e-07,
            "happy": 99.55355834960938,
            "sad": 2.8919530450366437e-05,
            "surprise": 0.0019366705091670156,
            "neutral": 0.44171208143234253
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 924,
            "y": 200,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.041103582829236984,
            "Man": 99.95890045166016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.9146478176116943,
            "indian": 3.535972833633423,
            "black": 0.7003678679466248,
            "white": 51.45829772949219,
            "middle eastern": 24.998937606811523,
            "latino hispanic": 17.391775131225586
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.0857949256896973,
            "disgust": 9.707841672934592e-05,
            "fear": 0.02330741286277771,
            "happy": 94.98031616210938,
            "sad": 0.5872800350189209,
            "surprise": 0.008378066122531891,
            "neutral": 1.3148314952850342
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 758,
            "y": 252,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.1241733580827713,
            "Man": 99.8758316040039
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.17606087028980255,
            "indian": 0.5632889270782471,
            "black": 0.023552775382995605,
            "white": 74.06857299804688,
            "middle eastern": 16.640682220458984,
            "latino hispanic": 8.527835845947266
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.1240174770355225,
            "disgust": 1.7238045302292448e-07,
            "fear": 0.9295005202293396,
            "happy": 70.2265853881836,
            "sad": 13.686700820922852,
            "surprise": 0.00018330381135456264,
            "neutral": 12.0330228805542
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 693,
            "y": 337,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.09081409871578217,
            "Man": 99.90918731689453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.017595725134015083,
            "indian": 0.2752733826637268,
            "black": 0.007529837545007467,
            "white": 80.45354461669922,
            "middle eastern": 16.11114501953125,
            "latino hispanic": 3.1349079608917236
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0014037361834198236,
            "disgust": 7.119691988743959e-12,
            "fear": 0.0008607858326286077,
            "happy": 95.81002807617188,
            "sad": 0.00018692275625653565,
            "surprise": 4.1750006675720215,
            "neutral": 0.012515815906226635
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 849,
            "y": 290,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 74.66805267333984,
            "Man": 25.331941604614258
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 18.791467666625977,
            "indian": 2.7712299823760986,
            "black": 0.6232298016548157,
            "white": 52.04787826538086,
            "middle eastern": 10.868380546569824,
            "latino hispanic": 14.897809982299805
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.845791489240582e-08,
            "disgust": 2.8380113336430243e-14,
            "fear": 1.7312051170392806e-07,
            "happy": 99.22046661376953,
            "sad": 2.1494545876521443e-07,
            "surprise": 0.0001694669044809416,
            "neutral": 0.7793706059455872
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 506,
            "y": 367,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.002982847625389695,
            "Man": 99.99701690673828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00021170247055124491,
            "indian": 0.006462529767304659,
            "black": 1.5754016203572974e-05,
            "white": 94.42655181884766,
            "middle eastern": 4.688840866088867,
            "latino hispanic": 0.8779239058494568
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.5946399634667614e-08,
            "disgust": 1.7743467285724623e-13,
            "fear": 7.895141429514752e-09,
            "happy": 99.22628021240234,
            "sad": 2.2966523829381913e-06,
            "surprise": 0.0002777177141979337,
            "neutral": 0.7734444737434387
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 37,
        "region": {
            "x": 105,
            "y": 333,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0028499020263552666,
            "Man": 99.99715423583984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0033457104582339525,
            "indian": 0.12160002440214157,
            "black": 0.0005867680883966386,
            "white": 83.08320617675781,
            "middle eastern": 13.217653274536133,
            "latino hispanic": 3.5736024379730225
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.002548451302573085,
            "disgust": 1.1503776704557822e-06,
            "fear": 0.0014752948191016912,
            "happy": 99.78656768798828,
            "sad": 0.056696098297834396,
            "surprise": 0.02685120701789856,
            "neutral": 0.1258498728275299
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 38,
        "region": {
            "x": 0,
            "y": 216,
            "w": 124,
            "h": 124,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 1.7598947286605835,
            "Man": 98.24010467529297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.4877389669418335,
            "indian": 0.03273642063140869,
            "black": 0.004399350378662348,
            "white": 97.02059173583984,
            "middle eastern": 0.855309247970581,
            "latino hispanic": 0.5992235541343689
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00022715442173648626,
            "disgust": 2.9046894667317247e-08,
            "fear": 0.01678977906703949,
            "happy": 8.928936958312988,
            "sad": 91.05326843261719,
            "surprise": 6.561021450579574e-07,
            "neutral": 0.0007858684402890503
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 785,
            "y": 387,
            "w": 89,
            "h": 89,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.5057346899993718e-05,
            "Man": 99.99998474121094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.070395779213868e-06,
            "indian": 0.1762901395559311,
            "black": 3.065928103751503e-05,
            "white": 17.779809951782227,
            "middle eastern": 81.48348236083984,
            "latino hispanic": 0.5603811740875244
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.005804793443530798,
            "disgust": 2.709841773196331e-08,
            "fear": 0.004209690727293491,
            "happy": 92.87488555908203,
            "sad": 0.01032966561615467,
            "surprise": 0.1602068692445755,
            "neutral": 6.944570064544678
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 347,
            "y": 436,
            "w": 110,
            "h": 110,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0010298133129253983,
            "Man": 99.99897766113281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.5784183890209533e-05,
            "indian": 0.002703465986996889,
            "black": 2.306249143657624e-06,
            "white": 93.46125030517578,
            "middle eastern": 5.775915622711182,
            "latino hispanic": 0.7601059675216675
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.6739479963566737e-08,
            "disgust": 3.2545367361367164e-14,
            "fear": 7.403016866192047e-08,
            "happy": 99.39952850341797,
            "sad": 2.1606341761071235e-05,
            "surprise": 0.00016383020556531847,
            "neutral": 0.600287914276123
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 665,
            "y": 537,
            "w": 103,
            "h": 103,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.003917418885976076,
            "Man": 99.99607849121094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.002174232853576541,
            "indian": 0.4944717586040497,
            "black": 0.004486790392547846,
            "white": 57.615047454833984,
            "middle eastern": 38.21820068359375,
            "latino hispanic": 3.665626049041748
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6533422240172513e-06,
            "disgust": 1.2195867688143125e-13,
            "fear": 1.3916628738286363e-08,
            "happy": 99.99990844726562,
            "sad": 7.387344957976438e-09,
            "surprise": 5.374577813199721e-05,
            "neutral": 4.184053250355646e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 54,
            "y": 518,
            "w": 90,
            "h": 90,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.8478970527648926,
            "Man": 98.15210723876953
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.022958755493164,
            "indian": 11.62158489227295,
            "black": 1.832840919494629,
            "white": 7.653143405914307,
            "middle eastern": 4.080603122711182,
            "latino hispanic": 59.788875579833984
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 7.313553214771673e-05,
            "disgust": 8.53929032018641e-06,
            "fear": 0.029677066951990128,
            "happy": 99.40648651123047,
            "sad": 0.2293214350938797,
            "surprise": 0.010256589390337467,
            "neutral": 0.324176162481308
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 462,
            "y": 601,
            "w": 123,
            "h": 123,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.00048438727390021086,
            "Man": 99.99951171875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.990647959057242e-05,
            "indian": 0.005073967389762402,
            "black": 3.538219243637286e-05,
            "white": 90.08051300048828,
            "middle eastern": 8.701963424682617,
            "latino hispanic": 1.2123188972473145
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.4478595403488725e-05,
            "disgust": 3.6344738330029713e-10,
            "fear": 3.9689172837142905e-08,
            "happy": 99.4065170288086,
            "sad": 0.00011780184286180884,
            "surprise": 0.00048016899381764233,
            "neutral": 0.592875063419342
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 829,
            "y": 700,
            "w": 140,
            "h": 140,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99661254882812,
            "Man": 0.0033912830986082554
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 69.31766510009766,
            "indian": 0.8078441023826599,
            "black": 0.10016544163227081,
            "white": 23.828657150268555,
            "middle eastern": 2.140002489089966,
            "latino hispanic": 3.805656909942627
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.412168979644775,
            "disgust": 0.002445821650326252,
            "fear": 0.2106139212846756,
            "happy": 0.05499749630689621,
            "sad": 52.7442741394043,
            "surprise": 5.126788892084733e-06,
            "neutral": 41.57549285888672
        },
        "dominant_emotion": "sad"
    }
]
let roofer_data2 = [
    {
        "age": 32,
        "region": {
            "x": 342,
            "y": 136,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.3622409999370575,
            "Man": 99.63776397705078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.72719669342041,
            "indian": 13.733044624328613,
            "black": 5.027440547943115,
            "white": 18.767118453979492,
            "middle eastern": 19.761768341064453,
            "latino hispanic": 33.98343276977539
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0017636495176702738,
            "disgust": 3.731776700988121e-07,
            "fear": 0.00454943859949708,
            "happy": 56.616573333740234,
            "sad": 0.0040655238553881645,
            "surprise": 9.659952775109559e-05,
            "neutral": 43.372955322265625
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 59,
            "y": 150,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 10.670873641967773,
            "Man": 89.32913208007812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.137295246124268,
            "indian": 10.126932144165039,
            "black": 1.494342565536499,
            "white": 17.898338317871094,
            "middle eastern": 18.343137741088867,
            "latino hispanic": 47.99995040893555
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.10222101211547852,
            "disgust": 2.4845493840075505e-07,
            "fear": 6.636394023895264,
            "happy": 22.711347579956055,
            "sad": 66.69679260253906,
            "surprise": 0.0034413496032357216,
            "neutral": 3.8498072624206543
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 26,
        "region": {
            "x": 950,
            "y": 213,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 1.0246049165725708,
            "Man": 98.97539520263672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.867179870605469,
            "indian": 20.624242782592773,
            "black": 4.136723518371582,
            "white": 24.80413818359375,
            "middle eastern": 25.83713150024414,
            "latino hispanic": 17.730579376220703
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 95.82284545898438,
            "disgust": 0.634601891040802,
            "fear": 2.7187113761901855,
            "happy": 0.08921229094266891,
            "sad": 0.6835901737213135,
            "surprise": 0.009305606596171856,
            "neutral": 0.04174024984240532
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 35,
        "region": {
            "x": 125,
            "y": 217,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 15.784317016601562,
            "Man": 84.21568298339844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.316258430480957,
            "indian": 6.917140007019043,
            "black": 0.5799341797828674,
            "white": 54.02635955810547,
            "middle eastern": 18.148765563964844,
            "latino hispanic": 16.011539459228516
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6794626712799072,
            "disgust": 0.0001561850804137066,
            "fear": 21.06275749206543,
            "happy": 0.021992212161421776,
            "sad": 76.10569763183594,
            "surprise": 0.00032286805799230933,
            "neutral": 1.1296151876449585
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 34,
        "region": {
            "x": 421,
            "y": 217,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 94.67876434326172,
            "Man": 5.321232318878174
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.03795755282044411,
            "indian": 0.13643506169319153,
            "black": 0.002274137921631336,
            "white": 82.8864517211914,
            "middle eastern": 12.09061050415039,
            "latino hispanic": 4.846271514892578
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.023257339373230934,
            "disgust": 6.494043191196397e-06,
            "fear": 0.0031344301532953978,
            "happy": 90.08175659179688,
            "sad": 0.06435713171958923,
            "surprise": 0.03347261995077133,
            "neutral": 9.79401683807373
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 42,
        "region": {
            "x": 283,
            "y": 224,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.2481098473072052,
            "Man": 99.75189208984375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1453932672739029,
            "indian": 0.7666869163513184,
            "black": 0.09039337933063507,
            "white": 59.48496627807617,
            "middle eastern": 26.014596939086914,
            "latino hispanic": 13.497966766357422
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.18153145909309387,
            "disgust": 1.0228483573906759e-14,
            "fear": 0.0013320802245289087,
            "happy": 0.0006565034855157137,
            "sad": 0.7027594447135925,
            "surprise": 1.9342043522385666e-09,
            "neutral": 99.11370849609375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 821,
            "y": 222,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.0018419530242681503,
            "Man": 99.99815368652344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.3711615800857544,
            "indian": 12.444329261779785,
            "black": 0.30576276779174805,
            "white": 8.499272346496582,
            "middle eastern": 62.80678176879883,
            "latino hispanic": 15.5726957321167
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.002365446649491787,
            "disgust": 1.7470990210100013e-09,
            "fear": 0.017309797927737236,
            "happy": 52.26675796508789,
            "sad": 0.07905886322259903,
            "surprise": 9.365863661514595e-06,
            "neutral": 47.634490966796875
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 42,
        "region": {
            "x": 494,
            "y": 328,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.04047179967164993,
            "Man": 99.95953369140625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.04727392643690109,
            "indian": 0.27579596638679504,
            "black": 0.0029943762347102165,
            "white": 83.94837951660156,
            "middle eastern": 11.608991622924805,
            "latino hispanic": 4.116564750671387
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.7434408068656921,
            "disgust": 0.00042940553976222873,
            "fear": 23.289701461791992,
            "happy": 0.6708032488822937,
            "sad": 33.651424407958984,
            "surprise": 0.017494700849056244,
            "neutral": 41.62670135498047
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 38,
        "region": {
            "x": 932,
            "y": 297,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 88.15985870361328,
            "Man": 11.840139389038086
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.2995524406433105,
            "indian": 5.536185264587402,
            "black": 0.5145986080169678,
            "white": 42.13768768310547,
            "middle eastern": 31.6893310546875,
            "latino hispanic": 18.82264518737793
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.2696510851383209,
            "disgust": 0.030650733038783073,
            "fear": 64.49575805664062,
            "happy": 7.388977527618408,
            "sad": 19.827411651611328,
            "surprise": 0.22660917043685913,
            "neutral": 7.760944843292236
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 35,
        "region": {
            "x": 764,
            "y": 312,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.001625595847144723,
            "Man": 99.99838256835938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.05964353680610657,
            "indian": 8.866536140441895,
            "black": 0.05296626687049866,
            "white": 11.789999008178711,
            "middle eastern": 71.51081085205078,
            "latino hispanic": 7.720048427581787
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.10055088996887207,
            "disgust": 2.8813196877308656e-06,
            "fear": 0.08418922126293182,
            "happy": 0.07241407036781311,
            "sad": 0.24797101318836212,
            "surprise": 0.003956682048738003,
            "neutral": 99.49090576171875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 42,
        "region": {
            "x": 360,
            "y": 318,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.05829400569200516,
            "Man": 99.94170379638672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.5055245757102966,
            "indian": 75.77873992919922,
            "black": 0.7270946502685547,
            "white": 2.2774839401245117,
            "middle eastern": 7.85341215133667,
            "latino hispanic": 12.857755661010742
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 87.99951934814453,
            "disgust": 1.3801696674420327e-08,
            "fear": 0.0017270782263949513,
            "happy": 10.981636047363281,
            "sad": 0.21921885013580322,
            "surprise": 2.410219622106524e-06,
            "neutral": 0.7979002594947815
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 27,
        "region": {
            "x": 12,
            "y": 374,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 29.35141372680664,
            "Man": 70.64859008789062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 60.98969650268555,
            "indian": 5.056641578674316,
            "black": 1.3135664463043213,
            "white": 15.51229190826416,
            "middle eastern": 3.7911503314971924,
            "latino hispanic": 13.336663246154785
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.8908092975616455,
            "disgust": 0.00012226004037074745,
            "fear": 0.02509910613298416,
            "happy": 6.285789489746094,
            "sad": 3.4810760021209717,
            "surprise": 0.000721102871466428,
            "neutral": 88.3163833618164
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 41,
        "region": {
            "x": 236,
            "y": 373,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.041242171078920364,
            "Man": 99.9587631225586
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.1114165782928467,
            "indian": 3.18107271194458,
            "black": 0.8266531229019165,
            "white": 43.29721450805664,
            "middle eastern": 24.652605056762695,
            "latino hispanic": 24.9310359954834
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.986449718475342,
            "disgust": 9.18459627428092e-05,
            "fear": 0.7077890634536743,
            "happy": 0.042247045785188675,
            "sad": 19.12669563293457,
            "surprise": 0.024080459028482437,
            "neutral": 77.1126480102539
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 38,
        "region": {
            "x": 371,
            "y": 411,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.003762338077649474,
            "Man": 99.99623107910156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.786026954650879,
            "indian": 30.478229522705078,
            "black": 2.17049503326416,
            "white": 14.209580421447754,
            "middle eastern": 25.88023567199707,
            "latino hispanic": 21.475427627563477
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 13.25986099243164,
            "disgust": 9.581274207448587e-05,
            "fear": 1.274234414100647,
            "happy": 1.8205145597457886,
            "sad": 19.96830177307129,
            "surprise": 0.0020471643656492233,
            "neutral": 63.67494583129883
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 694,
            "y": 445,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.019631344825029373,
            "Man": 99.9803695678711
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.702585756778717,
            "indian": 16.16918182373047,
            "black": 0.5868884921073914,
            "white": 23.12112808227539,
            "middle eastern": 41.70524597167969,
            "latino hispanic": 17.7149658203125
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.656930685043335,
            "disgust": 6.573306450263772e-07,
            "fear": 0.1393725425004959,
            "happy": 0.0005234861164353788,
            "sad": 3.4111640453338623,
            "surprise": 0.00014360380009748042,
            "neutral": 95.7918701171875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 823,
            "y": 464,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.04161101207137108,
            "Man": 99.95838928222656
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.036340005695819855,
            "indian": 9.907054901123047,
            "black": 0.03765154257416725,
            "white": 10.864335060119629,
            "middle eastern": 69.75578308105469,
            "latino hispanic": 9.398835182189941
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 2.9447191991494037e-05,
            "disgust": 1.0956748102395903e-15,
            "fear": 5.3058197835298415e-09,
            "happy": 99.15991973876953,
            "sad": 3.0071068977122195e-06,
            "surprise": 0.0007129450095817447,
            "neutral": 0.8393246531486511
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 39,
            "y": 518,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.35517430305480957,
            "Man": 99.64482879638672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 39.39404296875,
            "indian": 6.859239101409912,
            "black": 3.099942445755005,
            "white": 9.386918067932129,
            "middle eastern": 3.2201085090637207,
            "latino hispanic": 38.03975296020508
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.0253562927246094,
            "disgust": 5.8029472711496055e-05,
            "fear": 0.5296443104743958,
            "happy": 2.357384443283081,
            "sad": 15.616912841796875,
            "surprise": 0.0031292911153286695,
            "neutral": 80.46751403808594
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 461,
            "y": 532,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0054359822534024715,
            "Man": 99.99456787109375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.34857526421546936,
            "indian": 14.050416946411133,
            "black": 0.25970685482025146,
            "white": 17.011722564697266,
            "middle eastern": 53.56153106689453,
            "latino hispanic": 14.768046379089355
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 9.83520793914795,
            "disgust": 0.0001455372548662126,
            "fear": 0.2911025583744049,
            "happy": 1.205728530883789,
            "sad": 7.806957244873047,
            "surprise": 0.02239701710641384,
            "neutral": 80.83847045898438
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 966,
            "y": 539,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.10918685048818588,
            "Man": 99.89081573486328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.869436502456665,
            "indian": 1.3810402154922485,
            "black": 0.14917495846748352,
            "white": 61.3536376953125,
            "middle eastern": 18.609119415283203,
            "latino hispanic": 16.637592315673828
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 18.828311920166016,
            "disgust": 0.24471460282802582,
            "fear": 2.4046688079833984,
            "happy": 53.58918762207031,
            "sad": 1.354419469833374,
            "surprise": 3.0780975818634033,
            "neutral": 20.500600814819336
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 41,
        "region": {
            "x": 313,
            "y": 541,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.4226435422897339,
            "Man": 99.57736206054688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0778045728802681,
            "indian": 0.2029169797897339,
            "black": 0.01730940490961075,
            "white": 79.71759796142578,
            "middle eastern": 8.271699905395508,
            "latino hispanic": 11.712675094604492
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.08077415078878403,
            "disgust": 2.3950113245518878e-05,
            "fear": 9.253928184509277,
            "happy": 87.41510772705078,
            "sad": 0.040983881801366806,
            "surprise": 1.6540991067886353,
            "neutral": 1.5550824403762817
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 42,
        "region": {
            "x": 783,
            "y": 585,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.008153798058629036,
            "Man": 99.9918441772461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.08449991792440414,
            "indian": 0.3156343698501587,
            "black": 0.009513931348919868,
            "white": 73.30555725097656,
            "middle eastern": 11.686370849609375,
            "latino hispanic": 14.59842300415039
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.894041061401367,
            "disgust": 1.7382428268319927e-05,
            "fear": 0.12344130128622055,
            "happy": 0.3843940198421478,
            "sad": 13.3026762008667,
            "surprise": 0.1073429211974144,
            "neutral": 81.1880874633789
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 157,
            "y": 516,
            "w": 88,
            "h": 88,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 1.0032767057418823,
            "Man": 98.99671936035156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.04313375800848007,
            "indian": 15.112188339233398,
            "black": 0.2666606605052948,
            "white": 28.070627212524414,
            "middle eastern": 51.10918045043945,
            "latino hispanic": 5.398202896118164
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.07194040715694427,
            "disgust": 3.5884252156392904e-06,
            "fear": 0.09401039034128189,
            "happy": 28.438291549682617,
            "sad": 0.07950170338153839,
            "surprise": 0.06276202946901321,
            "neutral": 71.25349426269531
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 525,
            "y": 651,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.005670120008289814,
            "Man": 99.99432373046875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.03096848912537098,
            "indian": 4.32801628112793,
            "black": 0.01637699455022812,
            "white": 23.783119201660156,
            "middle eastern": 65.38025665283203,
            "latino hispanic": 6.461261749267578
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 16.91510009765625,
            "disgust": 2.9266437195474282e-05,
            "fear": 0.5556825399398804,
            "happy": 0.055231258273124695,
            "sad": 12.617753028869629,
            "surprise": 0.030257882550358772,
            "neutral": 69.8259506225586
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 371,
            "y": 672,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.02593011036515236,
            "Man": 99.97406768798828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.3179188903886825e-05,
            "indian": 0.002659273101016879,
            "black": 1.0206767910858616e-06,
            "white": 96.83650970458984,
            "middle eastern": 2.9970171451568604,
            "latino hispanic": 0.16377800703048706
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.708430290222168,
            "disgust": 0.00021243658557068557,
            "fear": 1.5700275897979736,
            "happy": 0.3857291638851166,
            "sad": 36.08964920043945,
            "surprise": 0.011801820248365402,
            "neutral": 57.234153747558594
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 40,
        "region": {
            "x": 688,
            "y": 644,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.03352982923388481,
            "Man": 99.96646881103516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0027940082363784313,
            "indian": 0.36790910363197327,
            "black": 0.0006432411610148847,
            "white": 50.0421257019043,
            "middle eastern": 45.11007308959961,
            "latino hispanic": 4.476458549499512
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 19.22614288330078,
            "disgust": 0.22004298865795135,
            "fear": 6.890101432800293,
            "happy": 0.02379884570837021,
            "sad": 12.950813293457031,
            "surprise": 0.817568302154541,
            "neutral": 59.87153244018555
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 40,
        "region": {
            "x": 40,
            "y": 683,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.00046856829430907965,
            "Man": 99.9995346069336
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0068529401905834675,
            "indian": 1.289868712425232,
            "black": 0.004129299893975258,
            "white": 28.31813621520996,
            "middle eastern": 62.35188293457031,
            "latino hispanic": 8.02912712097168
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.41072094440460205,
            "disgust": 1.9177429066985496e-07,
            "fear": 0.33785369992256165,
            "happy": 0.02029513008892536,
            "sad": 6.605593681335449,
            "surprise": 0.0188690684735775,
            "neutral": 92.6066665649414
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 192,
            "y": 689,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0008861047681421041,
            "Man": 99.99911499023438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.8930413463967852e-05,
            "indian": 1.1625828742980957,
            "black": 2.093524017254822e-05,
            "white": 2.0726466178894043,
            "middle eastern": 95.60382843017578,
            "latino hispanic": 1.1608942747116089
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.004882700741291046,
            "disgust": 1.3964405809474556e-07,
            "fear": 3.4083979699062183e-05,
            "happy": 73.1219482421875,
            "sad": 0.02366524748504162,
            "surprise": 0.0004681631689891219,
            "neutral": 26.84900665283203
        },
        "dominant_emotion": "happy"
    }
]
let roofer_data3 = [
    {
        "age": 33,
        "region": {
            "x": 524,
            "y": 109,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.05541163682937622,
            "Man": 99.94458770751953
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.08224338293075562,
            "indian": 12.923410415649414,
            "black": 0.24047225713729858,
            "white": 20.911958694458008,
            "middle eastern": 61.11969757080078,
            "latino hispanic": 4.722221851348877
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 25.096729278564453,
            "disgust": 0.013508052565157413,
            "fear": 31.14505958557129,
            "happy": 16.75446891784668,
            "sad": 6.925345420837402,
            "surprise": 0.06543262302875519,
            "neutral": 19.999452590942383
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 28,
        "region": {
            "x": 850,
            "y": 140,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.4972478747367859,
            "Man": 99.50274658203125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.013115022331476212,
            "indian": 0.8820069432258606,
            "black": 0.006766665726900101,
            "white": 45.22515106201172,
            "middle eastern": 46.113685607910156,
            "latino hispanic": 7.759268283843994
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.42421314120292664,
            "disgust": 0.0021772366017103195,
            "fear": 25.395055770874023,
            "happy": 7.072272273944691e-05,
            "sad": 68.048095703125,
            "surprise": 0.0013234579237177968,
            "neutral": 6.129071235656738
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 382,
            "y": 185,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 5.717850685119629,
            "Man": 94.28215026855469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.78837776184082,
            "indian": 1.1742671728134155,
            "black": 0.33621636033058167,
            "white": 58.365413665771484,
            "middle eastern": 10.257186889648438,
            "latino hispanic": 20.07853126525879
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.3940211534500122,
            "disgust": 0.34938496351242065,
            "fear": 0.8510602116584778,
            "happy": 31.929946899414062,
            "sad": 4.882250785827637,
            "surprise": 0.032834358513355255,
            "neutral": 60.560508728027344
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 181,
            "y": 192,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.011646468192338943,
            "Man": 99.98834991455078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.1517462730407715,
            "indian": 10.315999984741211,
            "black": 19.580636978149414,
            "white": 23.547996520996094,
            "middle eastern": 18.48665428161621,
            "latino hispanic": 22.916963577270508
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0281416343294048e-11,
            "disgust": 1.0529176226923201e-17,
            "fear": 1.2862412144491048e-13,
            "happy": 99.9965591430664,
            "sad": 2.7688040749040965e-09,
            "surprise": 6.04423122663178e-10,
            "neutral": 0.0034400245640426874
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 708,
            "y": 106,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 1.3219032287597656,
            "Man": 98.67809295654297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0007411664701066911,
            "indian": 0.006149947177618742,
            "black": 0.00046828846097923815,
            "white": 96.7041015625,
            "middle eastern": 2.64939284324646,
            "latino hispanic": 0.6391451358795166
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.315909385681152,
            "disgust": 1.0161526915908325e-05,
            "fear": 2.710967540740967,
            "happy": 0.0005519633996300399,
            "sad": 5.342222213745117,
            "surprise": 0.00012439310376066715,
            "neutral": 86.63021087646484
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 751,
            "y": 223,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 6.315077781677246,
            "Man": 93.68492126464844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.29120558500289917,
            "indian": 1.8628233671188354,
            "black": 0.13073153793811798,
            "white": 57.557708740234375,
            "middle eastern": 24.775146484375,
            "latino hispanic": 15.3823881149292
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.539343289617804e-12,
            "disgust": 3.368652099181884e-18,
            "fear": 7.346279834452574e-12,
            "happy": 99.87338256835938,
            "sad": 2.1372767999849884e-09,
            "surprise": 1.3590751223091502e-05,
            "neutral": 0.12660987675189972
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 50,
            "y": 203,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 3.6867480278015137,
            "Man": 96.3132553100586
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.204352378845215,
            "indian": 13.349762916564941,
            "black": 3.826763868331909,
            "white": 21.17022132873535,
            "middle eastern": 20.41690444946289,
            "latino hispanic": 26.031991958618164
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.8497457726928133e-09,
            "disgust": 1.9412030034630934e-15,
            "fear": 5.689946735998319e-09,
            "happy": 99.9963607788086,
            "sad": 1.8925547919934615e-06,
            "surprise": 3.928228125005262e-06,
            "neutral": 0.003628794802352786
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 513,
            "y": 275,
            "w": 80,
            "h": 80,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 4.587474822998047,
            "Man": 95.41252136230469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00015410874038934708,
            "indian": 0.0006241886294446886,
            "black": 2.279164436913561e-05,
            "white": 97.79405975341797,
            "middle eastern": 1.0024559497833252,
            "latino hispanic": 1.2026888132095337
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.259840039187111e-05,
            "disgust": 5.484156965357423e-12,
            "fear": 0.0057139103300869465,
            "happy": 99.99413299560547,
            "sad": 5.544301529880613e-06,
            "surprise": 8.935531513998285e-05,
            "neutral": 4.094192263437435e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 114,
            "y": 287,
            "w": 175,
            "h": 175,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.10312480479478836,
            "Man": 99.8968734741211
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.08122127503156662,
            "indian": 33.41285705566406,
            "black": 61.40550231933594,
            "white": 0.05029316619038582,
            "middle eastern": 0.35225775837898254,
            "latino hispanic": 4.697862148284912
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.033028069883584976,
            "disgust": 3.737200353153354e-18,
            "fear": 7.594292128487723e-06,
            "happy": 4.1107637116510887e-07,
            "sad": 50.2070198059082,
            "surprise": 1.0683560389269486e-17,
            "neutral": 49.75994110107422
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 23,
        "region": {
            "x": 423,
            "y": 370,
            "w": 88,
            "h": 88,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.005104463547468185,
            "Man": 99.9948959350586
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.24400126934051514,
            "indian": 8.087687492370605,
            "black": 3.041260242462158,
            "white": 17.246065139770508,
            "middle eastern": 58.779273986816406,
            "latino hispanic": 12.601712226867676
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 2.146423838667033e-08,
            "disgust": 7.272494238763638e-13,
            "fear": 3.633121536950057e-08,
            "happy": 99.9999008178711,
            "sad": 7.727526396550388e-10,
            "surprise": 3.927945897430618e-07,
            "neutral": 0.00010265746095683426
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 490,
            "y": 509,
            "w": 107,
            "h": 107,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.0077849798835814,
            "Man": 99.99221801757812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.5023912191390991,
            "indian": 17.673856735229492,
            "black": 51.715354919433594,
            "white": 3.3297765254974365,
            "middle eastern": 14.961796760559082,
            "latino hispanic": 11.81682014465332
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.00012655304453801364,
            "disgust": 9.78873117674084e-07,
            "fear": 0.013817480765283108,
            "happy": 99.79056549072266,
            "sad": 0.0003482876345515251,
            "surprise": 0.00010311782534699887,
            "neutral": 0.1950363963842392
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 119,
            "y": 837,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 1.0,
        "gender": {
            "Woman": 21.82692527770996,
            "Man": 78.17308044433594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.3370159864425659,
            "indian": 0.9732839465141296,
            "black": 1.1432706117630005,
            "white": 86.5206069946289,
            "middle eastern": 7.798759460449219,
            "latino hispanic": 3.227060556411743
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.572378635406494,
            "disgust": 2.281391964231716e-08,
            "fear": 7.5426926612854,
            "happy": 23.382108688354492,
            "sad": 4.140923500061035,
            "surprise": 0.018667781725525856,
            "neutral": 62.34322738647461
        },
        "dominant_emotion": "neutral"
    }
]
let roofer_data4 = [
    {
        "age": 38,
        "region": {
            "x": 589,
            "y": 75,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.2167433202266693,
            "Man": 99.78325653076172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.81790828704834,
            "indian": 17.317916870117188,
            "black": 3.942997455596924,
            "white": 19.09588050842285,
            "middle eastern": 25.871387481689453,
            "latino hispanic": 24.95391273498535
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.007471292279660702,
            "disgust": 0.001838743919506669,
            "fear": 0.1172349750995636,
            "happy": 98.95948028564453,
            "sad": 0.050147637724876404,
            "surprise": 0.018964635208249092,
            "neutral": 0.8448560237884521
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 43,
        "region": {
            "x": 410,
            "y": 85,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.06458914279937744,
            "Man": 99.93540954589844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.29981929063796997,
            "indian": 3.621161460876465,
            "black": 0.16320304572582245,
            "white": 35.55173110961914,
            "middle eastern": 42.462432861328125,
            "latino hispanic": 17.90165138244629
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.32485583424568176,
            "disgust": 7.922200118137823e-10,
            "fear": 0.006259753834456205,
            "happy": 99.55046844482422,
            "sad": 0.0039147925563156605,
            "surprise": 7.739761713310145e-06,
            "neutral": 0.11449886113405228
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 625,
            "y": 154,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0900968536734581,
            "Man": 99.90990447998047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.35286271572113037,
            "indian": 0.5387589931488037,
            "black": 0.03331734240055084,
            "white": 76.7596435546875,
            "middle eastern": 12.035904884338379,
            "latino hispanic": 10.279515266418457
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.029291843995451927,
            "disgust": 0.0016930238343775272,
            "fear": 11.273324012756348,
            "happy": 86.34780883789062,
            "sad": 0.35633689165115356,
            "surprise": 0.6087172031402588,
            "neutral": 1.3828375339508057
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 492,
            "y": 166,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 1.316251277923584,
            "Man": 98.68374633789062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 23.523305892944336,
            "indian": 11.081045150756836,
            "black": 58.39488220214844,
            "white": 0.419519305229187,
            "middle eastern": 0.3089158236980438,
            "latino hispanic": 6.272327899932861
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0006845258758403361,
            "disgust": 1.1450821402192446e-09,
            "fear": 1.592505577718839e-05,
            "happy": 0.008388406597077847,
            "sad": 0.006963331717997789,
            "surprise": 5.4355576139641926e-05,
            "neutral": 99.98390197753906
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 710,
            "y": 116,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.15349538624286652,
            "Man": 99.84650421142578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.011121992953121662,
            "indian": 0.007486261427402496,
            "black": 0.00014123431174084544,
            "white": 97.82820129394531,
            "middle eastern": 1.1537117958068848,
            "latino hispanic": 0.999340295791626
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.6328796593588777e-05,
            "disgust": 8.598463807629741e-08,
            "fear": 0.0004472756409086287,
            "happy": 99.39437103271484,
            "sad": 0.0006033768877387047,
            "surprise": 0.0002742396027315408,
            "neutral": 0.6042854189872742
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 556,
            "y": 235,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.0002285572700202465,
            "Man": 99.99977111816406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1783275157213211,
            "indian": 3.9151735305786133,
            "black": 0.27286696434020996,
            "white": 24.672319412231445,
            "middle eastern": 58.1712760925293,
            "latino hispanic": 12.7900390625
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.7592241764068604,
            "disgust": 0.3269678056240082,
            "fear": 20.350263595581055,
            "happy": 0.002599715255200863,
            "sad": 74.7415771484375,
            "surprise": 0.044847894459962845,
            "neutral": 2.7745256423950195
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 36,
        "region": {
            "x": 270,
            "y": 86,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.012934066355228424,
            "Man": 99.98706817626953
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00017307975213043392,
            "indian": 0.1301186978816986,
            "black": 0.00017946849402505904,
            "white": 62.050174713134766,
            "middle eastern": 35.493614196777344,
            "latino hispanic": 2.3257367610931396
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.08386896550655365,
            "disgust": 6.684723139237854e-16,
            "fear": 0.00012105947826057673,
            "happy": 99.90547180175781,
            "sad": 9.244190550816711e-06,
            "surprise": 1.333938257630507e-06,
            "neutral": 0.010525284335017204
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 42,
        "region": {
            "x": 192,
            "y": 170,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 83.87532806396484,
            "Man": 16.12466812133789
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.1880948394536972,
            "indian": 0.008852526545524597,
            "black": 0.00015991253894753754,
            "white": 98.17964935302734,
            "middle eastern": 0.8475532531738281,
            "latino hispanic": 0.7756922245025635
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6406811673141952e-11,
            "disgust": 3.3418536186842737e-19,
            "fear": 1.811174797694548e-06,
            "happy": 99.98674011230469,
            "sad": 3.288008310065038e-09,
            "surprise": 1.0742514859884977e-05,
            "neutral": 0.01324823684990406
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 348,
            "y": 147,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.009162591770291328,
            "Man": 99.99082946777344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.6233980059623718,
            "indian": 16.272167205810547,
            "black": 0.9097086191177368,
            "white": 12.827083587646484,
            "middle eastern": 54.26513671875,
            "latino hispanic": 15.102505683898926
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 2.432865619659424,
            "disgust": 0.7432080507278442,
            "fear": 8.586304664611816,
            "happy": 18.66506576538086,
            "sad": 14.691701889038086,
            "surprise": 4.812292575836182,
            "neutral": 50.06856155395508
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 785,
            "y": 215,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.11244231462478638,
            "Man": 99.88755798339844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.9812798500061035,
            "indian": 4.807068347930908,
            "black": 1.041082501411438,
            "white": 44.36248016357422,
            "middle eastern": 27.201234817504883,
            "latino hispanic": 18.60685920715332
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0791202783584595,
            "disgust": 1.413465976715088,
            "fear": 28.3355770111084,
            "happy": 0.058708224445581436,
            "sad": 67.92135620117188,
            "surprise": 0.020609194412827492,
            "neutral": 1.1711689233779907
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 37,
        "region": {
            "x": 252,
            "y": 236,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 8.441854151897132e-05,
            "Man": 99.99991607666016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.014217719435691833,
            "indian": 0.8361794352531433,
            "black": 0.00765590462833643,
            "white": 49.6756477355957,
            "middle eastern": 40.88761901855469,
            "latino hispanic": 8.57868480682373
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.936858177185059,
            "disgust": 0.002819931134581566,
            "fear": 4.4437255859375,
            "happy": 0.06668182462453842,
            "sad": 22.306684494018555,
            "surprise": 0.20798224210739136,
            "neutral": 64.03524780273438
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 41,
        "region": {
            "x": 381,
            "y": 239,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 8.805918332654983e-05,
            "Man": 99.99991607666016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.001767116249538958,
            "indian": 0.5351901650428772,
            "black": 0.0029395914170891047,
            "white": 40.951576232910156,
            "middle eastern": 54.54606628417969,
            "latino hispanic": 3.9624621868133545
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 75.50928497314453,
            "disgust": 3.284003184944595e-07,
            "fear": 0.01756160706281662,
            "happy": 4.658814907073975,
            "sad": 0.2276093065738678,
            "surprise": 0.016649320721626282,
            "neutral": 19.570083618164062
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 35,
        "region": {
            "x": 695,
            "y": 252,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0036555705592036247,
            "Man": 99.996337890625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0014502755366265774,
            "indian": 0.015469620004296303,
            "black": 9.136839071288705e-05,
            "white": 91.72504425048828,
            "middle eastern": 6.867125511169434,
            "latino hispanic": 1.3908166885375977
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2968434020876884e-05,
            "disgust": 2.646348418178235e-10,
            "fear": 2.2315891328617e-05,
            "happy": 99.75695037841797,
            "sad": 0.0001118052750825882,
            "surprise": 0.006447097286581993,
            "neutral": 0.23645637929439545
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 38,
        "region": {
            "x": 55,
            "y": 245,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.00020942097762599587,
            "Man": 99.99978637695312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.3815760612487793,
            "indian": 11.903968811035156,
            "black": 2.4252147674560547,
            "white": 20.144441604614258,
            "middle eastern": 32.133052825927734,
            "latino hispanic": 30.011749267578125
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.5047998428344727,
            "disgust": 9.479051368543878e-05,
            "fear": 6.820745468139648,
            "happy": 42.223018646240234,
            "sad": 0.4966959059238434,
            "surprise": 0.0003992143028881401,
            "neutral": 49.954246520996094
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 522,
            "y": 207,
            "w": 116,
            "h": 116,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.09816744923591614,
            "Man": 99.9018325805664
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9089516401290894,
            "indian": 15.586174964904785,
            "black": 1.2519510984420776,
            "white": 15.958263397216797,
            "middle eastern": 48.5594596862793,
            "latino hispanic": 17.735197067260742
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.02194911241531372,
            "disgust": 1.0243659651464477e-15,
            "fear": 0.00033248827094212174,
            "happy": 30.957807540893555,
            "sad": 0.003008840372785926,
            "surprise": 3.000625525828582e-08,
            "neutral": 69.01690673828125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 863,
            "y": 269,
            "w": 90,
            "h": 90,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.0024649384431540966,
            "Man": 99.9975357055664
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00025918823666870594,
            "indian": 2.2239174842834473,
            "black": 0.00202939729206264,
            "white": 4.8543901443481445,
            "middle eastern": 91.50732421875,
            "latino hispanic": 1.4120806455612183
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.0016996916383504868,
            "disgust": 2.0046425561304204e-05,
            "fear": 0.15285420417785645,
            "happy": 99.71891021728516,
            "sad": 0.009374883025884628,
            "surprise": 0.001501609804108739,
            "neutral": 0.11563481390476227
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 746,
            "y": 331,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0005648068618029356,
            "Man": 99.99944305419922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1396518498659134,
            "indian": 1.2768433094024658,
            "black": 0.027956591919064522,
            "white": 69.32887268066406,
            "middle eastern": 22.01055335998535,
            "latino hispanic": 7.216119766235352
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.48396721482276917,
            "disgust": 0.14727754890918732,
            "fear": 1.3501280546188354,
            "happy": 52.18266677856445,
            "sad": 1.3406615257263184,
            "surprise": 0.21009817719459534,
            "neutral": 44.28520202636719
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 466,
            "y": 342,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.000671513145789504,
            "Man": 99.99932861328125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2367723286151886,
            "indian": 16.08463478088379,
            "black": 0.468660831451416,
            "white": 23.40922737121582,
            "middle eastern": 46.579505920410156,
            "latino hispanic": 13.221197128295898
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 11.826233863830566,
            "disgust": 0.002416134811937809,
            "fear": 3.2421514987945557,
            "happy": 0.38456085324287415,
            "sad": 23.878231048583984,
            "surprise": 0.14000609517097473,
            "neutral": 60.526405334472656
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 288,
            "y": 349,
            "w": 89,
            "h": 89,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0010682063875719905,
            "Man": 99.9989242553711
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.889784395345487e-05,
            "indian": 0.056555915623903275,
            "black": 4.8771544243209064e-05,
            "white": 48.89525604248047,
            "middle eastern": 49.86404037475586,
            "latino hispanic": 1.184051513671875
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.043709322810173035,
            "disgust": 6.149267051114293e-07,
            "fear": 0.3217371106147766,
            "happy": 24.98158836364746,
            "sad": 0.03753744065761566,
            "surprise": 0.9489445090293884,
            "neutral": 73.66648864746094
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 947,
            "y": 356,
            "w": 76,
            "h": 83,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 1.0296655091224238e-05,
            "Man": 99.99998474121094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.02330978401005268,
            "indian": 7.467790603637695,
            "black": 0.39902132749557495,
            "white": 13.668778419494629,
            "middle eastern": 70.62523651123047,
            "latino hispanic": 7.815865993499756
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.5377227067947388,
            "disgust": 0.0004212858621031046,
            "fear": 10.019316673278809,
            "happy": 63.140625,
            "sad": 0.061004266142845154,
            "surprise": 4.38191032409668,
            "neutral": 21.858993530273438
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 181,
            "y": 312,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.0008499285904690623,
            "Man": 99.99915313720703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.9068618207238615e-06,
            "indian": 0.0007263682782649994,
            "black": 9.136875860349392e-07,
            "white": 96.58918762207031,
            "middle eastern": 3.152872085571289,
            "latino hispanic": 0.2572036683559418
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.3955099821887416e-09,
            "disgust": 2.2733171096271813e-18,
            "fear": 8.419634989209612e-10,
            "happy": 99.77130889892578,
            "sad": 3.074927690249751e-08,
            "surprise": 1.725998686197272e-06,
            "neutral": 0.22869329154491425
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 37,
        "region": {
            "x": 32,
            "y": 384,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.005291113629937172,
            "Man": 99.99470520019531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00015069678192958236,
            "indian": 0.0027185617946088314,
            "black": 1.2988390153623186e-05,
            "white": 94.66985321044922,
            "middle eastern": 3.9917047023773193,
            "latino hispanic": 1.3355573415756226
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00018992768309544772,
            "disgust": 1.0674245515263081e-10,
            "fear": 4.790510865859687e-05,
            "happy": 99.87654113769531,
            "sad": 0.008206614293158054,
            "surprise": 3.7936228181933984e-05,
            "neutral": 0.11497993767261505
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 588,
            "y": 457,
            "w": 79,
            "h": 79,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.001275085611268878,
            "Man": 99.99872589111328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.015005342662334442,
            "indian": 1.3565036058425903,
            "black": 0.006449367385357618,
            "white": 49.264549255371094,
            "middle eastern": 41.98851776123047,
            "latino hispanic": 7.3689727783203125
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.009527163580060005,
            "disgust": 0.00027103995671495795,
            "fear": 0.7914695739746094,
            "happy": 97.9383544921875,
            "sad": 0.1076119989156723,
            "surprise": 0.04189262539148331,
            "neutral": 1.11087965965271
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 805,
            "y": 492,
            "w": 90,
            "h": 90,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.0015380370896309614,
            "Man": 99.99845886230469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0034215482883155346,
            "indian": 0.4893808662891388,
            "black": 0.002271040575578809,
            "white": 60.975860595703125,
            "middle eastern": 33.20183181762695,
            "latino hispanic": 5.327235221862793
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.3050476610660553,
            "disgust": 0.0004303845635149628,
            "fear": 82.53350830078125,
            "happy": 0.07929296791553497,
            "sad": 7.9091644287109375,
            "surprise": 0.0857987105846405,
            "neutral": 9.086758613586426
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 28,
        "region": {
            "x": 383,
            "y": 492,
            "w": 81,
            "h": 81,
            "left_eye": [
                437,
                521
            ],
            "right_eye": [
                408,
                521
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.0525745153427124,
            "Man": 99.94742584228516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0023128145840018988,
            "indian": 0.16257451474666595,
            "black": 0.0007373913540504873,
            "white": 75.89990234375,
            "middle eastern": 20.507272720336914,
            "latino hispanic": 3.4272072315216064
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.021995915099978447,
            "disgust": 0.00015975073620211333,
            "fear": 0.16432465612888336,
            "happy": 89.17573547363281,
            "sad": 0.04630288854241371,
            "surprise": 0.9771418571472168,
            "neutral": 9.614341735839844
        },
        "dominant_emotion": "happy"
    }
]
let roofer_data5 = [
    {
        "age": 28,
        "region": {
            "x": 409,
            "y": 142,
            "w": 27,
            "h": 27,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 51.96217346191406,
            "Man": 48.03782272338867
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.41258910298347473,
            "indian": 1.1110504865646362,
            "black": 0.07551746815443039,
            "white": 66.2311782836914,
            "middle eastern": 21.005830764770508,
            "latino hispanic": 11.163836479187012
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.923529624938965,
            "disgust": 0.0010432566050440073,
            "fear": 2.245070457458496,
            "happy": 0.0481434166431427,
            "sad": 82.84197235107422,
            "surprise": 0.0006874100072309375,
            "neutral": 6.9395527839660645
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 24,
        "region": {
            "x": 586,
            "y": 163,
            "w": 35,
            "h": 35,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 1.7721046209335327,
            "Man": 98.22789764404297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9049499034881592,
            "indian": 0.5868505835533142,
            "black": 0.07060680538415909,
            "white": 73.8515853881836,
            "middle eastern": 14.251442909240723,
            "latino hispanic": 10.334569931030273
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0562050342559814,
            "disgust": 1.1579962801988586e-06,
            "fear": 8.225936889648438,
            "happy": 0.021655235439538956,
            "sad": 5.328840255737305,
            "surprise": 0.000942851067520678,
            "neutral": 85.36642456054688
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 324,
            "y": 175,
            "w": 39,
            "h": 39,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.9351864457130432,
            "Man": 99.06481170654297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.9701545238494873,
            "indian": 3.291788339614868,
            "black": 0.5746403336524963,
            "white": 47.41165542602539,
            "middle eastern": 29.771448135375977,
            "latino hispanic": 15.980319023132324
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.02596086636185646,
            "disgust": 8.716244792594807e-08,
            "fear": 0.009769588708877563,
            "happy": 0.012634397484362125,
            "sad": 1.1266061067581177,
            "surprise": 5.157518171472475e-05,
            "neutral": 98.82498168945312
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 214,
            "y": 181,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.09077619761228561,
            "Man": 99.90922546386719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.41894370317459106,
            "indian": 13.846002578735352,
            "black": 2.1243677139282227,
            "white": 14.660483360290527,
            "middle eastern": 56.52084732055664,
            "latino hispanic": 12.429349899291992
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.11399929970502853,
            "disgust": 3.2685927635611733e-06,
            "fear": 1.1035233736038208,
            "happy": 0.0107075534760952,
            "sad": 13.039155006408691,
            "surprise": 0.0006726708961650729,
            "neutral": 85.73194122314453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 0,
            "y": 231,
            "w": 36,
            "h": 36,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 2.1238718032836914,
            "Man": 97.87612915039062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.469665765762329,
            "indian": 3.46970272064209,
            "black": 0.5978233814239502,
            "white": 52.13416290283203,
            "middle eastern": 23.767187118530273,
            "latino hispanic": 17.561458587646484
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.118492364883423,
            "disgust": 2.9202110454207286e-05,
            "fear": 11.570552825927734,
            "happy": 0.6816746592521667,
            "sad": 11.929052352905273,
            "surprise": 1.6532255411148071,
            "neutral": 71.0469741821289
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 769,
            "y": 187,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 24.888914108276367,
            "Man": 75.111083984375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 49.84911346435547,
            "indian": 6.724050521850586,
            "black": 12.978164672851562,
            "white": 11.30776596069336,
            "middle eastern": 6.634764194488525,
            "latino hispanic": 12.506135940551758
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.2980899214744568,
            "disgust": 2.984970257080555e-11,
            "fear": 0.024522846564650536,
            "happy": 9.045935439644381e-05,
            "sad": 10.68344783782959,
            "surprise": 8.43233305403146e-09,
            "neutral": 88.99385070800781
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 273,
            "y": 220,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 1.183213233947754,
            "Man": 98.81678009033203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.927401542663574,
            "indian": 3.0765621662139893,
            "black": 0.5931531190872192,
            "white": 49.14133071899414,
            "middle eastern": 28.45235824584961,
            "latino hispanic": 15.80919361114502
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 16.551851272583008,
            "disgust": 0.021092671900987625,
            "fear": 14.28332805633545,
            "happy": 0.005387184210121632,
            "sad": 39.20067596435547,
            "surprise": 0.11829011887311935,
            "neutral": 29.81937599182129
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 34,
        "region": {
            "x": 436,
            "y": 153,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.1115838885307312,
            "Man": 99.88841247558594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0006329605239443481,
            "indian": 1.1593414545059204,
            "black": 0.0013554829638451338,
            "white": 2.1754062175750732,
            "middle eastern": 95.92570495605469,
            "latino hispanic": 0.7375620603561401
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.00012875812535639852,
            "disgust": 4.5018950373121314e-11,
            "fear": 0.04314000904560089,
            "happy": 0.02282591722905636,
            "sad": 3.208932399749756,
            "surprise": 2.240545704523811e-08,
            "neutral": 96.7249755859375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 968,
            "y": 241,
            "w": 43,
            "h": 43,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 8.833917617797852,
            "Man": 91.16608428955078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.03080184943974018,
            "indian": 0.014279043301939964,
            "black": 99.94119262695312,
            "white": 0.0006332200719043612,
            "middle eastern": 0.0008060011896304786,
            "latino hispanic": 0.01228812150657177
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 7.338204886764288e-05,
            "disgust": 8.812235168735149e-15,
            "fear": 3.089755409746431e-06,
            "happy": 1.0867520359170157e-05,
            "sad": 0.0008259685127995908,
            "surprise": 4.164370693615638e-06,
            "neutral": 99.99908447265625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 675,
            "y": 175,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 2.093759298324585,
            "Man": 97.90624237060547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.544280469417572,
            "indian": 0.43846338987350464,
            "black": 0.033544767647981644,
            "white": 79.9266128540039,
            "middle eastern": 10.549761772155762,
            "latino hispanic": 8.507339477539062
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.0989979765981843e-07,
            "disgust": 1.520624373666489e-23,
            "fear": 4.061876097694039e-06,
            "happy": 0.0008816916379146278,
            "sad": 0.015376544557511806,
            "surprise": 7.032686877295191e-09,
            "neutral": 99.9837417602539
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 38,
        "region": {
            "x": 714,
            "y": 243,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.12281019985675812,
            "Man": 99.87718200683594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.3647332191467285,
            "indian": 4.325062274932861,
            "black": 0.8140305876731873,
            "white": 48.01457595825195,
            "middle eastern": 27.129417419433594,
            "latino hispanic": 17.3521785736084
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.17986829578876495,
            "disgust": 7.258679346477948e-08,
            "fear": 0.3166818916797638,
            "happy": 2.4277031116071157e-05,
            "sad": 2.2010021209716797,
            "surprise": 7.523517706431448e-05,
            "neutral": 97.3023452758789
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 33,
            "y": 264,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 2.1071105003356934,
            "Man": 97.89288330078125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7787949442863464,
            "indian": 2.627770185470581,
            "black": 0.21018853783607483,
            "white": 55.524635314941406,
            "middle eastern": 29.198911666870117,
            "latino hispanic": 11.659695625305176
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0083768367767334,
            "disgust": 0.0005361539078876376,
            "fear": 22.584829330444336,
            "happy": 0.0491207130253315,
            "sad": 21.7808895111084,
            "surprise": 0.22712093591690063,
            "neutral": 54.349124908447266
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 156,
            "y": 204,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 40.99930953979492,
            "Man": 59.000694274902344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0020141624845564365,
            "indian": 0.00024079404829535633,
            "black": 1.1694282875396311e-06,
            "white": 99.73200988769531,
            "middle eastern": 0.1657639443874359,
            "latino hispanic": 0.09996458142995834
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.6817545890808105,
            "disgust": 5.68705843306816e-07,
            "fear": 0.09252681583166122,
            "happy": 0.0017019883962348104,
            "sad": 9.10778522491455,
            "surprise": 0.0005689410609193146,
            "neutral": 85.11566162109375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 384,
            "y": 203,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 14.964776039123535,
            "Man": 85.03523254394531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.023315122351050377,
            "indian": 0.14998356997966766,
            "black": 0.0033963005989789963,
            "white": 81.84870147705078,
            "middle eastern": 11.30960464477539,
            "latino hispanic": 6.665003299713135
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.9711172580718994,
            "disgust": 0.0010930132120847702,
            "fear": 0.2597065269947052,
            "happy": 40.59259796142578,
            "sad": 0.8485025763511658,
            "surprise": 6.133502960205078,
            "neutral": 50.1934814453125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 617,
            "y": 213,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.5825076699256897,
            "Man": 99.41748809814453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.43391793966293335,
            "indian": 0.9752285480499268,
            "black": 0.050808634608983994,
            "white": 67.4348373413086,
            "middle eastern": 20.683778762817383,
            "latino hispanic": 10.421433448791504
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 16.00845718383789,
            "disgust": 0.009450219571590424,
            "fear": 22.91461181640625,
            "happy": 3.544185346981976e-06,
            "sad": 60.635379791259766,
            "surprise": 6.164455953694414e-06,
            "neutral": 0.43209108710289
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 534,
            "y": 190,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 89.86184692382812,
            "Man": 10.138155937194824
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00042740433127619326,
            "indian": 0.00010369171650381759,
            "black": 8.558331501262728e-07,
            "white": 99.7550277709961,
            "middle eastern": 0.16859349608421326,
            "latino hispanic": 0.07585318386554718
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.4262526035308838,
            "disgust": 3.158448294016125e-07,
            "fear": 0.24101626873016357,
            "happy": 0.001664860057644546,
            "sad": 46.84497833251953,
            "surprise": 9.727406222737045e-07,
            "neutral": 51.48609161376953
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 102,
            "y": 170,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 96.90294647216797,
            "Man": 3.0970571041107178
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.490460395812988,
            "indian": 12.804715156555176,
            "black": 1.9083834886550903,
            "white": 26.581451416015625,
            "middle eastern": 23.94327163696289,
            "latino hispanic": 26.271724700927734
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.4279894232749939,
            "disgust": 1.597708354506011e-10,
            "fear": 0.0006141739431768656,
            "happy": 32.41132354736328,
            "sad": 0.025923902168869972,
            "surprise": 1.79641447175527e-05,
            "neutral": 67.1341323852539
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 299,
            "y": 262,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 36.317138671875,
            "Man": 63.682861328125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.004952461924403906,
            "indian": 0.10154545307159424,
            "black": 99.8653793334961,
            "white": 0.0004971112357452512,
            "middle eastern": 0.00014597825065720826,
            "latino hispanic": 0.027490898966789246
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 2.654209936281404e-07,
            "disgust": 9.638985443150005e-11,
            "fear": 8.179421229215222e-08,
            "happy": 99.99571990966797,
            "sad": 0.00010016043233918026,
            "surprise": 3.657703862014472e-10,
            "neutral": 0.004185957368463278
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 466,
            "y": 201,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 20.95650863647461,
            "Man": 79.04349517822266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.150234222412109,
            "indian": 3.1308817863464355,
            "black": 1.115233063697815,
            "white": 47.93601608276367,
            "middle eastern": 21.859838485717773,
            "latino hispanic": 20.80779266357422
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.22778518497943878,
            "disgust": 2.1540745365200564e-05,
            "fear": 2.1851232051849365,
            "happy": 2.004544973373413,
            "sad": 2.702442169189453,
            "surprise": 0.012301161885261536,
            "neutral": 92.86778259277344
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 550,
            "y": 272,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.8628280758857727,
            "Man": 99.13717651367188
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00786562915891409,
            "indian": 0.05500095337629318,
            "black": 0.0007774476544000208,
            "white": 88.62443542480469,
            "middle eastern": 8.62641716003418,
            "latino hispanic": 2.685506820678711
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.1850212812423706,
            "disgust": 0.004766310099512339,
            "fear": 4.100630283355713,
            "happy": 0.004975035320967436,
            "sad": 14.365440368652344,
            "surprise": 0.011569875292479992,
            "neutral": 80.32759094238281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 649,
            "y": 329,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.037000615149736404,
            "Man": 99.96299743652344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.8594785160530591e-06,
            "indian": 1.6152078387676738e-05,
            "black": 99.99998474121094,
            "white": 1.2976177077295148e-10,
            "middle eastern": 1.8508401408712238e-11,
            "latino hispanic": 2.4988048608065583e-07
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.005326966755092144,
            "disgust": 7.131343692651226e-12,
            "fear": 0.0002557514817453921,
            "happy": 5.523072488244907e-08,
            "sad": 0.24865221977233887,
            "surprise": 3.998354003442728e-08,
            "neutral": 99.74576568603516
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 277,
            "y": 200,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.36934566497802734,
            "Man": 99.63065338134766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0038348552770912647,
            "indian": 5.842043174197897e-05,
            "black": 7.610234661115101e-06,
            "white": 99.9276351928711,
            "middle eastern": 0.04846883937716484,
            "latino hispanic": 0.019995639100670815
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.006345901172608137,
            "disgust": 2.2300562704913318e-05,
            "fear": 0.3107123076915741,
            "happy": 0.0002217646688222885,
            "sad": 99.68045043945312,
            "surprise": 2.6710138545382733e-09,
            "neutral": 0.0022551026195287704
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 39,
        "region": {
            "x": 110,
            "y": 257,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 99.44139862060547,
            "Man": 0.5585982203483582
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.13144183158874512,
            "indian": 0.06160501390695572,
            "black": 0.0046449447982013226,
            "white": 90.58879852294922,
            "middle eastern": 4.174962520599365,
            "latino hispanic": 5.038549423217773
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 91.73302459716797,
            "disgust": 0.0019946410320699215,
            "fear": 0.4993748664855957,
            "happy": 0.016521204262971878,
            "sad": 6.1463303565979,
            "surprise": 0.016959235072135925,
            "neutral": 1.5858010053634644
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 30,
        "region": {
            "x": 873,
            "y": 295,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.5385969877243042,
            "Man": 99.4614028930664
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.187610149383545,
            "indian": 9.763887405395508,
            "black": 3.56524658203125,
            "white": 25.722187042236328,
            "middle eastern": 23.08746910095215,
            "latino hispanic": 31.673601150512695
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.2013818770647049,
            "disgust": 2.4219195893238066e-07,
            "fear": 1.9933100938796997,
            "happy": 1.2615784328318114e-07,
            "sad": 11.115656852722168,
            "surprise": 1.508358764112927e-05,
            "neutral": 86.68963623046875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 975,
            "y": 301,
            "w": 48,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 74.39734649658203,
            "Man": 25.602649688720703
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.439040184020996,
            "indian": 1.4058024883270264,
            "black": 0.2766624689102173,
            "white": 63.41183090209961,
            "middle eastern": 13.903769493103027,
            "latino hispanic": 18.562891006469727
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.45509180426597595,
            "disgust": 0.0017429185099899769,
            "fear": 41.013099670410156,
            "happy": 0.04505756497383118,
            "sad": 21.83165740966797,
            "surprise": 15.661048889160156,
            "neutral": 20.9923038482666
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 25,
        "region": {
            "x": 773,
            "y": 320,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.14990653097629547,
            "Man": 99.85009765625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.266242980957031,
            "indian": 5.267911434173584,
            "black": 1.8818063735961914,
            "white": 41.11968231201172,
            "middle eastern": 21.24230194091797,
            "latino hispanic": 24.2220516204834
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0728533267974854,
            "disgust": 0.0019199379021301866,
            "fear": 47.793521881103516,
            "happy": 0.13187871873378754,
            "sad": 24.685379028320312,
            "surprise": 0.3282930850982666,
            "neutral": 25.986164093017578
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 46,
        "region": {
            "x": 396,
            "y": 272,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.3058018982410431,
            "Man": 99.69419860839844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.843042016029358,
            "indian": 0.74994295835495,
            "black": 0.07787266373634338,
            "white": 83.79553985595703,
            "middle eastern": 8.757403373718262,
            "latino hispanic": 4.7762041091918945
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5262702107429504,
            "disgust": 0.0271601602435112,
            "fear": 71.90702819824219,
            "happy": 0.47667819261550903,
            "sad": 12.386333465576172,
            "surprise": 0.18443314731121063,
            "neutral": 14.492091178894043
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 34,
        "region": {
            "x": 804,
            "y": 213,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 50.33612060546875,
            "Man": 49.663883209228516
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 19.03377342224121,
            "indian": 30.475317001342773,
            "black": 12.571172714233398,
            "white": 8.925450325012207,
            "middle eastern": 8.619482040405273,
            "latino hispanic": 20.37480926513672
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 7.332390785217285,
            "disgust": 0.0015195147134363651,
            "fear": 1.3919320106506348,
            "happy": 0.07411275058984756,
            "sad": 4.942811012268066,
            "surprise": 0.08024787157773972,
            "neutral": 86.17698669433594
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 212,
            "y": 316,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0946197584271431,
            "Man": 99.90538024902344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1622454971075058,
            "indian": 0.6040983200073242,
            "black": 0.11159034073352814,
            "white": 75.46106719970703,
            "middle eastern": 14.910257339477539,
            "latino hispanic": 8.750748634338379
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.4884216785430908,
            "disgust": 4.776069317813381e-09,
            "fear": 0.013272847048938274,
            "happy": 0.0037962014321237803,
            "sad": 1.9563088417053223,
            "surprise": 0.000103348123957403,
            "neutral": 97.53809356689453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 88,
            "y": 346,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.0027705798856914043,
            "Man": 99.99723815917969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.5611597299575806,
            "indian": 5.964427471160889,
            "black": 0.539124071598053,
            "white": 36.952457427978516,
            "middle eastern": 34.887481689453125,
            "latino hispanic": 20.0953426361084
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.466518402099609,
            "disgust": 5.2413066441658884e-05,
            "fear": 0.7788140773773193,
            "happy": 0.07716888189315796,
            "sad": 8.727211952209473,
            "surprise": 0.12430142611265182,
            "neutral": 84.82593536376953
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 291,
            "y": 345,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.1997637301683426,
            "Man": 99.80023193359375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.2656846671308415e-10,
            "indian": 2.929218645419951e-09,
            "black": 100.0,
            "white": 1.8829326424061547e-15,
            "middle eastern": 1.1031547464385562e-15,
            "latino hispanic": 6.429594356927026e-11
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 7.738826752756722e-06,
            "disgust": 1.073766620696213e-15,
            "fear": 6.1451704823412e-05,
            "happy": 4.837963629711339e-08,
            "sad": 0.0049923923797905445,
            "surprise": 1.7803255332182744e-06,
            "neutral": 99.99494171142578
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 470,
            "y": 354,
            "w": 87,
            "h": 87,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.013265454210340977,
            "Man": 99.98673248291016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.004380206577479839,
            "indian": 0.10627732425928116,
            "black": 0.003954146057367325,
            "white": 88.67732238769531,
            "middle eastern": 8.413037300109863,
            "latino hispanic": 2.7950310707092285
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00017041062528733164,
            "disgust": 3.212512547645652e-11,
            "fear": 2.322949148947373e-05,
            "happy": 0.0003301348478998989,
            "sad": 0.003377512563019991,
            "surprise": 1.1847107998619322e-05,
            "neutral": 99.99609375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 370,
            "y": 423,
            "w": 95,
            "h": 95,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.00011124823504360393,
            "Man": 99.99989318847656
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.2642723321914673,
            "indian": 20.813201904296875,
            "black": 1.0043495893478394,
            "white": 28.99715805053711,
            "middle eastern": 33.739662170410156,
            "latino hispanic": 14.181358337402344
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 10.754188537597656,
            "disgust": 0.18157751858234406,
            "fear": 0.6436472535133362,
            "happy": 0.22724394500255585,
            "sad": 8.174276351928711,
            "surprise": 0.06862440705299377,
            "neutral": 79.95044708251953
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 739,
            "y": 433,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.00047157180961221457,
            "Man": 99.99952697753906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.10098662227392197,
            "indian": 11.41562557220459,
            "black": 2.1655006408691406,
            "white": 13.779631614685059,
            "middle eastern": 61.865943908691406,
            "latino hispanic": 10.672310829162598
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.714603841304779,
            "disgust": 7.198410003184108e-06,
            "fear": 1.1128345727920532,
            "happy": 0.20069117844104767,
            "sad": 3.853972911834717,
            "surprise": 0.008124211803078651,
            "neutral": 94.10977172851562
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 857,
            "y": 437,
            "w": 98,
            "h": 98,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.05361427366733551,
            "Man": 99.9463882446289
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.001478891121223569,
            "indian": 0.004521951079368591,
            "black": 5.070613042335026e-05,
            "white": 97.69511413574219,
            "middle eastern": 1.4444620609283447,
            "latino hispanic": 0.854368269443512
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.24858589470386505,
            "disgust": 6.1749841506753e-07,
            "fear": 11.42917537689209,
            "happy": 0.0027299553621560335,
            "sad": 71.45355987548828,
            "surprise": 0.002343925414606929,
            "neutral": 16.863611221313477
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 34,
        "region": {
            "x": 205,
            "y": 457,
            "w": 94,
            "h": 94,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.0042419591918587685,
            "Man": 99.99575805664062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.2692713737487793,
            "indian": 22.83191680908203,
            "black": 1.9130195379257202,
            "white": 29.09139060974121,
            "middle eastern": 27.303878784179688,
            "latino hispanic": 17.590518951416016
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 22.96778678894043,
            "disgust": 0.026502372696995735,
            "fear": 27.538898468017578,
            "happy": 0.00072106794686988,
            "sad": 47.96320343017578,
            "surprise": 0.0038766213692724705,
            "neutral": 1.4990088939666748
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 35,
        "region": {
            "x": 20,
            "y": 473,
            "w": 105,
            "h": 105,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.0965200737118721,
            "Man": 99.90347290039062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.5430843830108643,
            "indian": 5.201439380645752,
            "black": 0.7187023758888245,
            "white": 37.40598678588867,
            "middle eastern": 33.585655212402344,
            "latino hispanic": 21.545133590698242
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.6857667565345764,
            "disgust": 3.860272772726603e-05,
            "fear": 0.4423704743385315,
            "happy": 1.5736137628555298,
            "sad": 14.528749465942383,
            "surprise": 0.03580000251531601,
            "neutral": 82.73365783691406
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 42,
        "region": {
            "x": 554,
            "y": 472,
            "w": 121,
            "h": 121,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.3023202419281006,
            "Man": 99.69768524169922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.4156295264911023e-06,
            "indian": 3.169097180943936e-05,
            "black": 5.262566560304549e-08,
            "white": 99.77921295166016,
            "middle eastern": 0.17963339388370514,
            "latino hispanic": 0.041124377399683
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0033452054485678673,
            "disgust": 2.003841981235155e-09,
            "fear": 0.002549727912992239,
            "happy": 0.06857292354106903,
            "sad": 0.055883266031742096,
            "surprise": 0.007291384972631931,
            "neutral": 99.86235809326172
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 939,
            "y": 575,
            "w": 84,
            "h": 98,
            "left_eye": [
                1003,
                613
            ],
            "right_eye": [
                961,
                614
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.024257676675915718,
            "Man": 99.97574615478516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.4054417610168457,
            "indian": 6.690975189208984,
            "black": 3.1345181465148926,
            "white": 32.15266036987305,
            "middle eastern": 17.167558670043945,
            "latino hispanic": 37.44884490966797
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0012446079635992646,
            "disgust": 6.680724595753418e-08,
            "fear": 0.2702725827693939,
            "happy": 0.001583027420565486,
            "sad": 2.369951009750366,
            "surprise": 6.419970304705203e-06,
            "neutral": 97.35694122314453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 381,
            "y": 589,
            "w": 111,
            "h": 111,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.018327638506889343,
            "Man": 99.98167419433594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.056936800479888916,
            "indian": 0.6842203140258789,
            "black": 0.01620599254965782,
            "white": 67.30416107177734,
            "middle eastern": 21.482816696166992,
            "latino hispanic": 10.45565414428711
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.64627742767334,
            "disgust": 0.0005072206840850413,
            "fear": 0.9127191305160522,
            "happy": 1.8160234689712524,
            "sad": 3.2023510932922363,
            "surprise": 0.006578477565199137,
            "neutral": 84.41554260253906
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 702,
            "y": 600,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.2540484070777893,
            "Man": 99.74595642089844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.557881899934808e-14,
            "indian": 1.0054714005836018e-10,
            "black": 100.0,
            "white": 2.690100565712697e-20,
            "middle eastern": 1.4407357734624839e-21,
            "latino hispanic": 2.6415008757261528e-14
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 9.093000699067488e-05,
            "disgust": 2.018905658970893e-12,
            "fear": 8.037166844587773e-05,
            "happy": 0.379518985748291,
            "sad": 0.001529991626739502,
            "surprise": 0.0025198152288794518,
            "neutral": 99.61626434326172
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 136,
            "y": 630,
            "w": 98,
            "h": 98,
            "left_eye": [
                203,
                665
            ],
            "right_eye": [
                162,
                670
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.91605377197266,
            "Man": 0.08394887298345566
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.5629005432128906,
            "indian": 5.196434497833252,
            "black": 0.8773090243339539,
            "white": 30.14299201965332,
            "middle eastern": 15.554668426513672,
            "latino hispanic": 44.66569137573242
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 6.0092397724531565e-09,
            "disgust": 3.1580661696839485e-11,
            "fear": 2.205709279223811e-06,
            "happy": 94.92902374267578,
            "sad": 0.00016518912161700428,
            "surprise": 0.0007267926121130586,
            "neutral": 5.070082664489746
        },
        "dominant_emotion": "happy"
    }
]

console.log("Microsoft Results for Roofer:");
const data = roofer_data.concat(roofer_data2, roofer_data3, roofer_data4, roofer_data5);
console.log(processData(data));
