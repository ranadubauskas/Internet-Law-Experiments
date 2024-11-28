const { processData } = require('../../data_processing.js');

let skincare_specialist_data = [
    {
        "age": 28,
        "region": {
            "x": 677,
            "y": 134,
            "w": 110,
            "h": 110,
            "left_eye": [
                751,
                174
            ],
            "right_eye": [
                708,
                174
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.052927713841199875,
            "Man": 99.94707489013672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.08835912495851517,
            "indian": 1.2397366762161255,
            "black": 0.01882927305996418,
            "white": 57.59272003173828,
            "middle eastern": 28.31267738342285,
            "latino hispanic": 12.747676849365234
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.862343608661666e-12,
            "disgust": 7.891542926133524e-19,
            "fear": 3.7000875453829796e-12,
            "happy": 99.98347473144531,
            "sad": 5.763469146380373e-10,
            "surprise": 2.463700923271972e-07,
            "neutral": 0.01652468554675579
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 154,
            "y": 105,
            "w": 107,
            "h": 107,
            "left_eye": [
                225,
                144
            ],
            "right_eye": [
                185,
                146
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.01799425296485424,
            "Man": 99.98200225830078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.019084591418504715,
            "indian": 0.16915585100650787,
            "black": 0.009262706153094769,
            "white": 80.5396728515625,
            "middle eastern": 15.359705924987793,
            "latino hispanic": 3.90311598777771
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6575782524341776e-07,
            "disgust": 9.976750328655193e-13,
            "fear": 1.124879247527133e-07,
            "happy": 99.79143524169922,
            "sad": 9.544028580421582e-05,
            "surprise": 8.44995793158887e-06,
            "neutral": 0.208465114235878
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 392,
            "y": 111,
            "w": 113,
            "h": 113,
            "left_eye": [
                466,
                154
            ],
            "right_eye": [
                428,
                155
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.03898234665393829,
            "Man": 99.96102142333984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.27440202236175537,
            "indian": 16.048900604248047,
            "black": 0.16114288568496704,
            "white": 15.101136207580566,
            "middle eastern": 45.681907653808594,
            "latino hispanic": 22.73250961303711
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.9986856614195858e-07,
            "disgust": 3.046596655509326e-11,
            "fear": 2.6713621537055587e-06,
            "happy": 91.28866577148438,
            "sad": 0.0003254976763855666,
            "surprise": 0.0032952509354799986,
            "neutral": 8.707717895507812
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 259,
            "y": 116,
            "w": 112,
            "h": 112,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.06519941985607147,
            "Man": 99.93479919433594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9347822070121765,
            "indian": 12.599453926086426,
            "black": 2.0949950218200684,
            "white": 29.53422737121582,
            "middle eastern": 30.492446899414062,
            "latino hispanic": 24.344099044799805
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 5.57605504989624,
            "disgust": 4.594154223713787e-11,
            "fear": 0.0073302676901221275,
            "happy": 0.7609438300132751,
            "sad": 0.07189923524856567,
            "surprise": 0.0001761635357979685,
            "neutral": 93.5835952758789
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 536,
            "y": 127,
            "w": 112,
            "h": 112,
            "left_eye": [
                610,
                169
            ],
            "right_eye": [
                571,
                168
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.014372424222528934,
            "Man": 99.98562622070312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.11350849270820618,
            "indian": 8.395259857177734,
            "black": 0.04085853323340416,
            "white": 26.689455032348633,
            "middle eastern": 53.56468963623047,
            "latino hispanic": 11.196228981018066
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.002689870772883296,
            "disgust": 4.317730883940385e-07,
            "fear": 0.001593147055245936,
            "happy": 94.66278839111328,
            "sad": 0.020303931087255478,
            "surprise": 0.0309971384704113,
            "neutral": 5.281630039215088
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 0,
            "y": 128,
            "w": 115,
            "h": 115,
            "left_eye": [
                66,
                172
            ],
            "right_eye": [
                27,
                170
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.007164370734244585,
            "Man": 99.99283599853516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.391872713924386e-06,
            "indian": 0.0008304757648147643,
            "black": 4.222538336762227e-07,
            "white": 93.2518539428711,
            "middle eastern": 6.386472225189209,
            "latino hispanic": 0.3608376085758209
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.84052547939018e-09,
            "disgust": 5.301988841997958e-14,
            "fear": 4.006096432362938e-08,
            "happy": 99.66632843017578,
            "sad": 6.582192781934282e-06,
            "surprise": 1.7971082115764148e-06,
            "neutral": 0.3336659371852875
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 916,
            "y": 132,
            "w": 107,
            "h": 116,
            "left_eye": [
                990,
                174
            ],
            "right_eye": [
                949,
                178
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.015293185599148273,
            "Man": 99.98470306396484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.004840875510126352,
            "indian": 0.8450683951377869,
            "black": 0.0013720979914069176,
            "white": 43.48870086669922,
            "middle eastern": 48.27386474609375,
            "latino hispanic": 7.386154651641846
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.000902138947879e-09,
            "disgust": 3.9027172746661936e-16,
            "fear": 3.7031460120573456e-09,
            "happy": 99.785400390625,
            "sad": 1.9650178728625178e-07,
            "surprise": 0.000704047444742173,
            "neutral": 0.21389880776405334
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 124,
            "y": 257,
            "w": 123,
            "h": 123,
            "left_eye": [
                205,
                307
            ],
            "right_eye": [
                158,
                309
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 84.49329376220703,
            "Man": 15.506699562072754
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00012704766413662583,
            "indian": 0.003433774458244443,
            "black": 99.99628448486328,
            "white": 3.5249860275143874e-07,
            "middle eastern": 2.2194184623458568e-07,
            "latino hispanic": 0.00016226738807745278
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 6.235796263354132e-06,
            "disgust": 7.133913414430343e-14,
            "fear": 3.1285583190765465e-07,
            "happy": 16.656217575073242,
            "sad": 5.7279095926787704e-05,
            "surprise": 0.057140108197927475,
            "neutral": 83.28657531738281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 432,
            "y": 287,
            "w": 123,
            "h": 123,
            "left_eye": [
                514,
                334
            ],
            "right_eye": [
                467,
                333
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99819946289062,
            "Man": 0.00180559023283422
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.84815216064453,
            "indian": 0.026598405092954636,
            "black": 0.00020467450667638332,
            "white": 0.011533061973750591,
            "middle eastern": 0.0004066698020324111,
            "latino hispanic": 0.11311972141265869
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.7360228810048284e-08,
            "disgust": 2.3932003839592653e-13,
            "fear": 4.987149964108539e-07,
            "happy": 98.18115234375,
            "sad": 2.0985886294511147e-05,
            "surprise": 0.0008506132871843874,
            "neutral": 1.817961573600769
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 805,
            "y": 147,
            "w": 106,
            "h": 106,
            "left_eye": [
                876,
                186
            ],
            "right_eye": [
                836,
                186
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99954986572266,
            "Man": 0.0004482364747673273
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.1824091672897339,
            "indian": 0.2809349000453949,
            "black": 0.011371858417987823,
            "white": 78.86949157714844,
            "middle eastern": 12.723331451416016,
            "latino hispanic": 7.932468414306641
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.17878460884094238,
            "disgust": 0.0004806693468708545,
            "fear": 0.5065761804580688,
            "happy": 46.14878463745117,
            "sad": 1.5633039474487305,
            "surprise": 0.6790358424186707,
            "neutral": 50.923030853271484
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 270,
            "y": 316,
            "w": 123,
            "h": 123,
            "left_eye": [
                353,
                363
            ],
            "right_eye": [
                306,
                363
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99998474121094,
            "Man": 1.7609228962101042e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0004895620513707399,
            "indian": 0.0005322351935319602,
            "black": 4.1349367165821604e-06,
            "white": 98.21205139160156,
            "middle eastern": 1.1627708673477173,
            "latino hispanic": 0.6241419911384583
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.2115621567972994e-07,
            "disgust": 6.44430619978209e-11,
            "fear": 2.3533697458333336e-05,
            "happy": 97.33855438232422,
            "sad": 0.00010057301551569253,
            "surprise": 0.0032057208009064198,
            "neutral": 2.6581177711486816
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 600,
            "y": 320,
            "w": 120,
            "h": 120,
            "left_eye": [
                680,
                364
            ],
            "right_eye": [
                637,
                364
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 99.99979400634766,
            "Man": 0.0001977727224584669
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.11091876775026321,
            "indian": 0.16238342225551605,
            "black": 0.003318323753774166,
            "white": 77.98504638671875,
            "middle eastern": 12.815753936767578,
            "latino hispanic": 8.92258358001709
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.1823918839581893e-06,
            "disgust": 5.082397350197887e-11,
            "fear": 7.624688441865146e-05,
            "happy": 98.34680938720703,
            "sad": 0.0001233755610883236,
            "surprise": 0.0044009629637002945,
            "neutral": 1.6485939025878906
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 777,
            "y": 313,
            "w": 111,
            "h": 111,
            "left_eye": [
                855,
                354
            ],
            "right_eye": [
                809,
                353
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 100.0,
            "Man": 5.501100531546399e-06
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0001099886794690974,
            "indian": 0.003774754237383604,
            "black": 5.3220610425341874e-06,
            "white": 96.06173706054688,
            "middle eastern": 3.5465359687805176,
            "latino hispanic": 0.3878249526023865
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.1521712243762785e-12,
            "disgust": 3.375826669611908e-21,
            "fear": 3.171420417946713e-11,
            "happy": 99.99656677246094,
            "sad": 1.2202738819411252e-10,
            "surprise": 1.1375360372767318e-05,
            "neutral": 0.0034215489868074656
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 702,
            "y": 465,
            "w": 136,
            "h": 136,
            "left_eye": [
                795,
                515
            ],
            "right_eye": [
                740,
                514
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 100.0,
            "Man": 9.984701954124375e-09
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00010931043652817607,
            "indian": 0.00018235015159007162,
            "black": 1.1101625432274886e-06,
            "white": 98.94674682617188,
            "middle eastern": 0.7987551689147949,
            "latino hispanic": 0.2542117238044739
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.4066694095381536e-06,
            "disgust": 2.3276958138751525e-09,
            "fear": 3.22649757436011e-05,
            "happy": 99.48725128173828,
            "sad": 8.884133421815932e-05,
            "surprise": 0.0017707317601889372,
            "neutral": 0.5108550190925598
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 929,
            "y": 455,
            "w": 94,
            "h": 126,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 99.82283782958984,
            "Man": 0.1771698296070099
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 87.78958129882812,
            "indian": 0.7052193284034729,
            "black": 0.10618988424539566,
            "white": 3.9597151279449463,
            "middle eastern": 0.7654703855514526,
            "latino hispanic": 6.673827648162842
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0006186788086779416,
            "disgust": 5.271108690988651e-21,
            "fear": 7.955492975497691e-08,
            "happy": 0.0007974780164659023,
            "sad": 0.7395131587982178,
            "surprise": 1.4321635489094062e-20,
            "neutral": 99.25907135009766
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 0,
            "y": 464,
            "w": 132,
            "h": 132,
            "left_eye": [
                81,
                512
            ],
            "right_eye": [
                31,
                514
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 99.99913024902344,
            "Man": 0.0008667065994814038
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.1363826990127563,
            "indian": 3.337057113647461,
            "black": 0.052261389791965485,
            "white": 69.32852172851562,
            "middle eastern": 16.15372085571289,
            "latino hispanic": 9.99205207824707
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00015924632316455245,
            "disgust": 5.620972487463405e-08,
            "fear": 0.005028405226767063,
            "happy": 55.982723236083984,
            "sad": 0.019587501883506775,
            "surprise": 0.05407463014125824,
            "neutral": 43.93843078613281
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 494,
            "y": 459,
            "w": 141,
            "h": 141,
            "left_eye": [
                587,
                513
            ],
            "right_eye": [
                534,
                515
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99576568603516,
            "Man": 0.004237358924001455
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 100.0,
            "indian": 1.3145149750926066e-06,
            "black": 1.6547455679999379e-12,
            "white": 1.3629448858409887e-07,
            "middle eastern": 1.5509506656394279e-12,
            "latino hispanic": 5.702080670744181e-06
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.346198700957757e-06,
            "disgust": 3.882505428265404e-11,
            "fear": 0.00012734181655105203,
            "happy": 0.023250916972756386,
            "sad": 0.00999156292527914,
            "surprise": 4.27741952080396e-06,
            "neutral": 99.96662902832031
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 199,
            "y": 466,
            "w": 136,
            "h": 136,
            "left_eye": [
                292,
                516
            ],
            "right_eye": [
                239,
                519
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 100.0,
            "Man": 1.2581574537762208e-06
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.28381094336509705,
            "indian": 0.10858497023582458,
            "black": 0.0018541448516771197,
            "white": 87.50868225097656,
            "middle eastern": 5.8217620849609375,
            "latino hispanic": 6.2753095626831055
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.6608409573091194e-05,
            "disgust": 2.004004429068118e-08,
            "fear": 0.019396698102355003,
            "happy": 41.10529327392578,
            "sad": 0.03584668040275574,
            "surprise": 0.03304480388760567,
            "neutral": 58.8063850402832
        },
        "dominant_emotion": "neutral"
    }
]
let skincare_specialist_data2 = [
    {
        "age": 23,
        "region": {
            "x": 16,
            "y": 162,
            "w": 118,
            "h": 118,
            "left_eye": [
                95,
                211
            ],
            "right_eye": [
                51,
                210
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.004697755444794893,
            "Man": 99.99530029296875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.48920315504074097,
            "indian": 7.051281929016113,
            "black": 0.440362811088562,
            "white": 31.613649368286133,
            "middle eastern": 33.00039291381836,
            "latino hispanic": 27.405115127563477
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.00018734087643679231,
            "disgust": 2.5578927420610853e-08,
            "fear": 36.90066909790039,
            "happy": 59.42973709106445,
            "sad": 0.1289299726486206,
            "surprise": 2.2749245166778564,
            "neutral": 1.2655571699142456
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 317,
            "y": 163,
            "w": 127,
            "h": 127,
            "left_eye": [
                402,
                213
            ],
            "right_eye": [
                357,
                211
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 0.023952465504407883,
            "Man": 99.97604370117188
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.01303904689848423,
            "indian": 3.9473681449890137,
            "black": 0.025104891508817673,
            "white": 28.986907958984375,
            "middle eastern": 59.68561935424805,
            "latino hispanic": 7.341969013214111
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.33945634961128235,
            "disgust": 5.223197874215657e-09,
            "fear": 0.10690522193908691,
            "happy": 0.37816184759140015,
            "sad": 0.9609456658363342,
            "surprise": 0.02020658552646637,
            "neutral": 98.19432830810547
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 777,
            "y": 170,
            "w": 120,
            "h": 120,
            "left_eye": [
                857,
                216
            ],
            "right_eye": [
                816,
                217
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.004890164360404015,
            "Man": 99.99510955810547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.005214637611061335,
            "indian": 0.8442173004150391,
            "black": 0.0034351961221545935,
            "white": 35.447357177734375,
            "middle eastern": 54.38772964477539,
            "latino hispanic": 9.312045097351074
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.07852069288492203,
            "disgust": 6.759329984618034e-09,
            "fear": 0.02014753967523575,
            "happy": 93.6836929321289,
            "sad": 0.015202795155346394,
            "surprise": 0.9405874013900757,
            "neutral": 5.2618560791015625
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 171,
            "y": 180,
            "w": 109,
            "h": 109,
            "left_eye": [
                243,
                222
            ],
            "right_eye": [
                204,
                223
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.005991608370095491,
            "Man": 99.99400329589844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.04472837224602699,
            "indian": 12.437633514404297,
            "black": 0.138071671128273,
            "white": 16.180139541625977,
            "middle eastern": 57.659767150878906,
            "latino hispanic": 13.53965950012207
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.4946962594985962,
            "disgust": 0.0006156578892841935,
            "fear": 43.13945007324219,
            "happy": 24.679277420043945,
            "sad": 5.875242710113525,
            "surprise": 20.780899047851562,
            "neutral": 5.029823303222656
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 31,
        "region": {
            "x": 594,
            "y": 170,
            "w": 132,
            "h": 132,
            "left_eye": [
                681,
                222
            ],
            "right_eye": [
                634,
                221
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.02331329509615898,
            "Man": 99.97669219970703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.18916964530944824,
            "indian": 3.772186279296875,
            "black": 0.24639029800891876,
            "white": 32.95892333984375,
            "middle eastern": 39.47173309326172,
            "latino hispanic": 23.36160659790039
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.015617022290825844,
            "disgust": 1.0660882177049302e-09,
            "fear": 0.17552436888217926,
            "happy": 0.054874446243047714,
            "sad": 1.8960366249084473,
            "surprise": 0.0030178611632436514,
            "neutral": 97.85492706298828
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 933,
            "y": 192,
            "w": 90,
            "h": 101,
            "left_eye": [
                1005,
                234
            ],
            "right_eye": [
                960,
                233
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.49737548828125,
            "Man": 0.5026174187660217
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.5013160558379946e-24,
            "indian": 5.704170006227695e-17,
            "black": 100.0,
            "white": 2.885621635011554e-31,
            "middle eastern": 3.297718994827383e-33,
            "latino hispanic": 1.7407662177596145e-20
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.623376135739818e-07,
            "disgust": 3.5943454159206856e-13,
            "fear": 3.418183041503653e-05,
            "happy": 85.10688018798828,
            "sad": 5.0616046792129055e-05,
            "surprise": 0.9912802577018738,
            "neutral": 13.901758193969727
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 453,
            "y": 313,
            "w": 127,
            "h": 127,
            "left_eye": [
                538,
                366
            ],
            "right_eye": [
                491,
                364
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.98703002929688,
            "Man": 0.012966284528374672
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.269257068634033,
            "indian": 4.985779285430908,
            "black": 84.78441619873047,
            "white": 0.35126593708992004,
            "middle eastern": 0.20922903716564178,
            "latino hispanic": 7.400054454803467
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 2.3505295132508763e-07,
            "disgust": 6.198142043015165e-13,
            "fear": 2.2539208544003486e-07,
            "happy": 96.30860137939453,
            "sad": 2.131734072463587e-05,
            "surprise": 0.018164170905947685,
            "neutral": 3.6732163429260254
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 730,
            "y": 323,
            "w": 121,
            "h": 121,
            "left_eye": [
                811,
                367
            ],
            "right_eye": [
                768,
                368
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99972534179688,
            "Man": 0.00027497782139107585
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.6256640239807894e-07,
            "indian": 1.9209183221846615e-07,
            "black": 5.567000194162119e-10,
            "white": 99.97127532958984,
            "middle eastern": 0.015711961314082146,
            "latino hispanic": 0.013008962385356426
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.7477195797255263e-05,
            "disgust": 5.260880273083579e-11,
            "fear": 0.0004987050779163837,
            "happy": 99.48444366455078,
            "sad": 6.681349623249844e-05,
            "surprise": 0.029904663562774658,
            "neutral": 0.48506903648376465
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 227,
            "y": 328,
            "w": 118,
            "h": 118,
            "left_eye": [
                308,
                374
            ],
            "right_eye": [
                261,
                373
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 99.99991607666016,
            "Man": 8.15706152934581e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00044671609066426754,
            "indian": 0.0010996432974934578,
            "black": 7.289655513886828e-06,
            "white": 96.59561157226562,
            "middle eastern": 1.064621925354004,
            "latino hispanic": 2.3382136821746826
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00023437994241248816,
            "disgust": 2.7758552789691748e-08,
            "fear": 0.032683223485946655,
            "happy": 98.65643310546875,
            "sad": 0.01996142417192459,
            "surprise": 0.1483093947172165,
            "neutral": 1.1423660516738892
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 0,
            "y": 335,
            "w": 123,
            "h": 123,
            "left_eye": [
                76,
                382
            ],
            "right_eye": [
                30,
                382
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 100.0,
            "Man": 1.6966344995594795e-09
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00010897631000261754,
            "indian": 0.0005430234014056623,
            "black": 1.7615556089367601e-06,
            "white": 97.9053955078125,
            "middle eastern": 1.1007652282714844,
            "latino hispanic": 0.9931887984275818
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.8480511221905545e-08,
            "disgust": 4.202068109703666e-13,
            "fear": 7.520690996898338e-05,
            "happy": 99.99957275390625,
            "sad": 4.329377389922229e-08,
            "surprise": 6.83599355397746e-05,
            "neutral": 0.00028717220993712544
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 489,
            "y": 500,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.99,
        "gender": {
            "Woman": 6.475856304168701,
            "Man": 93.5241470336914
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.677086591720581,
            "indian": 2.430638313293457,
            "black": 33.33129119873047,
            "white": 27.227584838867188,
            "middle eastern": 15.354137420654297,
            "latino hispanic": 19.979265213012695
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.3360747175283905e-08,
            "disgust": 1.0562802773184707e-17,
            "fear": 0.01778668537735939,
            "happy": 99.98163604736328,
            "sad": 7.439535693265498e-06,
            "surprise": 3.9677983121322313e-13,
            "neutral": 0.0005723237991333008
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 622,
            "y": 470,
            "w": 129,
            "h": 129,
            "left_eye": [
                709,
                520
            ],
            "right_eye": [
                661,
                518
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 100.0,
            "Man": 7.87834721904801e-08
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.003733873600140214,
            "indian": 0.011451189406216145,
            "black": 0.0001531085290480405,
            "white": 90.99940490722656,
            "middle eastern": 4.891491889953613,
            "latino hispanic": 4.0937724113464355
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.7099311428755227e-14,
            "disgust": 9.719874147226877e-27,
            "fear": 3.6018689065537993e-16,
            "happy": 99.99907684326172,
            "sad": 1.1823338532182537e-13,
            "surprise": 6.651698640780523e-07,
            "neutral": 0.0009254493052139878
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 854,
            "y": 501,
            "w": 134,
            "h": 134,
            "left_eye": [
                944,
                551
            ],
            "right_eye": [
                895,
                552
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9998550415039,
            "Man": 0.00014645265764556825
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.04900648444890976,
            "indian": 0.16092577576637268,
            "black": 0.0019660855177789927,
            "white": 63.98820114135742,
            "middle eastern": 30.51186180114746,
            "latino hispanic": 5.288039684295654
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.4040245745541857e-12,
            "disgust": 1.0361049959377847e-22,
            "fear": 1.716014212237854e-14,
            "happy": 99.984375,
            "sad": 1.2818864025820886e-10,
            "surprise": 6.832366672426815e-09,
            "neutral": 0.015625612810254097
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 298,
            "y": 512,
            "w": 138,
            "h": 138,
            "left_eye": [
                394,
                567
            ],
            "right_eye": [
                338,
                566
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 100.0,
            "Man": 8.413970817855443e-07
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.3325245678424835,
            "indian": 1.5519742965698242,
            "black": 0.07947270572185516,
            "white": 45.51681137084961,
            "middle eastern": 13.432015419006348,
            "latino hispanic": 39.08720397949219
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.1223488805001125e-10,
            "disgust": 1.6626889354061044e-15,
            "fear": 8.519864280742695e-08,
            "happy": 99.33721160888672,
            "sad": 5.88212174079672e-07,
            "surprise": 0.0009853194933384657,
            "neutral": 0.6618053913116455
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 95,
            "y": 499,
            "w": 138,
            "h": 138,
            "left_eye": [
                189,
                551
            ],
            "right_eye": [
                133,
                553
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 100.0,
            "Man": 3.8967277760093566e-07
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0019130103755742311,
            "indian": 0.006362954620271921,
            "black": 2.5927050955942832e-05,
            "white": 94.67655181884766,
            "middle eastern": 3.005575656890869,
            "latino hispanic": 2.309570789337158
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.3362406492233276,
            "disgust": 1.772044379322324e-05,
            "fear": 22.605703353881836,
            "happy": 0.04818127676844597,
            "sad": 3.127263307571411,
            "surprise": 25.58347511291504,
            "neutral": 47.29912185668945
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 0,
            "y": 596,
            "w": 125,
            "h": 125,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 99.99681854248047,
            "Man": 0.003187314374372363
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.858471834902957e-08,
            "indian": 3.3114705644265996e-08,
            "black": 1.5839816958074238e-10,
            "white": 99.99430084228516,
            "middle eastern": 0.0016387351788580418,
            "latino hispanic": 0.004057243000715971
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.016811512410640717,
            "disgust": 1.389091437431489e-07,
            "fear": 99.3775863647461,
            "happy": 0.23761475086212158,
            "sad": 0.2892208397388458,
            "surprise": 0.0015269182622432709,
            "neutral": 0.07724656909704208
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 30,
        "region": {
            "x": 718,
            "y": 599,
            "w": 143,
            "h": 143,
            "left_eye": [
                814,
                654
            ],
            "right_eye": [
                761,
                655
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99998474121094,
            "Man": 1.2319722372922115e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.39212238788604736,
            "indian": 0.5018867254257202,
            "black": 0.041455477476119995,
            "white": 62.71933364868164,
            "middle eastern": 9.54770565032959,
            "latino hispanic": 26.797496795654297
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.751748398732161e-08,
            "disgust": 6.34441230020627e-15,
            "fear": 0.005441767629235983,
            "happy": 0.23694047331809998,
            "sad": 0.0003263777762185782,
            "surprise": 0.6959088444709778,
            "neutral": 99.0613784790039
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 74,
            "y": 709,
            "w": 139,
            "h": 139,
            "left_eye": [
                168,
                761
            ],
            "right_eye": [
                115,
                762
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 100.0,
            "Man": 2.163236985097683e-07
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.8088486194610596,
            "indian": 2.699965238571167,
            "black": 0.22776226699352264,
            "white": 39.209171295166016,
            "middle eastern": 22.518152236938477,
            "latino hispanic": 34.53609848022461
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.000495655911209e-09,
            "disgust": 7.159150930500374e-14,
            "fear": 3.431620370974997e-06,
            "happy": 99.85748291015625,
            "sad": 1.7498840634289081e-06,
            "surprise": 0.0010777183342725039,
            "neutral": 0.14142759144306183
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 424,
            "y": 714,
            "w": 143,
            "h": 143,
            "left_eye": [
                520,
                768
            ],
            "right_eye": [
                469,
                769
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9996566772461,
            "Man": 0.00035031524021178484
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7335646152496338,
            "indian": 0.7279132604598999,
            "black": 0.03125632181763649,
            "white": 61.73355484008789,
            "middle eastern": 16.22807502746582,
            "latino hispanic": 20.545635223388672
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.281826769172767e-07,
            "disgust": 7.617972225260061e-12,
            "fear": 0.0002621717576403171,
            "happy": 97.21842956542969,
            "sad": 0.0002069168258458376,
            "surprise": 0.001796546159312129,
            "neutral": 2.779305934906006
        },
        "dominant_emotion": "happy"
    }
]
let skincare_specialist_data3 = [
    {
        "age": 31,
        "region": {
            "x": 329,
            "y": 65,
            "w": 117,
            "h": 117,
            "left_eye": [
                404,
                111
            ],
            "right_eye": [
                364,
                109
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.012551882304251194,
            "Man": 99.9874496459961
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0038465354591608047,
            "indian": 1.0397334098815918,
            "black": 0.001403084141202271,
            "white": 32.23143005371094,
            "middle eastern": 61.521244049072266,
            "latino hispanic": 5.202340126037598
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.7445269406834996e-07,
            "disgust": 2.1104755923016978e-14,
            "fear": 3.55904354876202e-08,
            "happy": 99.79459381103516,
            "sad": 2.3742201449294953e-07,
            "surprise": 0.0002473147469572723,
            "neutral": 0.205163836479187
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 544,
            "y": 75,
            "w": 110,
            "h": 110,
            "left_eye": [
                617,
                120
            ],
            "right_eye": [
                580,
                116
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.003919974900782108,
            "Man": 99.99607849121094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.010523391887545586,
            "indian": 2.0463755130767822,
            "black": 0.0015899508725851774,
            "white": 27.313764572143555,
            "middle eastern": 63.859806060791016,
            "latino hispanic": 6.767939567565918
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.00010049474076367915,
            "disgust": 6.621582429033879e-07,
            "fear": 0.07557085901498795,
            "happy": 93.95081329345703,
            "sad": 0.014141732826828957,
            "surprise": 0.10330499708652496,
            "neutral": 5.856067180633545
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 923,
            "y": 78,
            "w": 100,
            "h": 112,
            "left_eye": [
                996,
                120
            ],
            "right_eye": [
                955,
                121
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.001457432983443141,
            "Man": 99.99854278564453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.004696241579949856,
            "indian": 0.14846383035182953,
            "black": 0.0004764170153066516,
            "white": 78.32882690429688,
            "middle eastern": 18.00821876525879,
            "latino hispanic": 3.509314775466919
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0022656035143882036,
            "disgust": 1.0424194130109754e-07,
            "fear": 0.011628925800323486,
            "happy": 85.12076568603516,
            "sad": 0.006017274223268032,
            "surprise": 0.40853288769721985,
            "neutral": 14.450797080993652
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 108,
            "y": 81,
            "w": 110,
            "h": 110,
            "left_eye": [
                180,
                123
            ],
            "right_eye": [
                139,
                123
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0018978031584993005,
            "Man": 99.99810791015625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.012511998414993286,
            "indian": 1.0056837797164917,
            "black": 0.018361249938607216,
            "white": 67.47696685791016,
            "middle eastern": 22.11264991760254,
            "latino hispanic": 9.373833656311035
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00042485090671107173,
            "disgust": 2.7175133254786488e-06,
            "fear": 0.08538991957902908,
            "happy": 87.82182312011719,
            "sad": 0.020011641085147858,
            "surprise": 0.08671662956476212,
            "neutral": 11.985628128051758
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 732,
            "y": 89,
            "w": 105,
            "h": 105,
            "left_eye": [
                800,
                128
            ],
            "right_eye": [
                761,
                129
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9994888305664,
            "Man": 0.000515769119374454
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.9116388506954536e-05,
            "indian": 0.00013016223965678364,
            "black": 4.416479839619569e-07,
            "white": 99.6711196899414,
            "middle eastern": 0.29272112250328064,
            "latino hispanic": 0.03599737957119942
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.494607815288873e-08,
            "disgust": 1.3563053674961467e-12,
            "fear": 4.509568540811415e-08,
            "happy": 99.48103332519531,
            "sad": 3.306634243926965e-05,
            "surprise": 0.00017392024165019393,
            "neutral": 0.5187513828277588
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 461,
            "y": 176,
            "w": 117,
            "h": 117,
            "left_eye": [
                538,
                221
            ],
            "right_eye": [
                495,
                222
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.0005322559736669064,
            "Man": 99.99946594238281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.017044488340616226,
            "indian": 6.190877914428711,
            "black": 0.015474535524845123,
            "white": 15.077723503112793,
            "middle eastern": 70.39433288574219,
            "latino hispanic": 8.304553031921387
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 7.165430471189893e-09,
            "disgust": 1.6302086633737667e-12,
            "fear": 8.172653309657107e-08,
            "happy": 99.31675720214844,
            "sad": 3.441217813815456e-06,
            "surprise": 0.0003629506682045758,
            "neutral": 0.6828704476356506
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 9,
            "y": 192,
            "w": 115,
            "h": 115,
            "left_eye": [
                87,
                238
            ],
            "right_eye": [
                43,
                235
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99995422363281,
            "Man": 4.93743245897349e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.3599249124526978,
            "indian": 1.025040864944458,
            "black": 0.15114688873291016,
            "white": 73.21956634521484,
            "middle eastern": 9.838006019592285,
            "latino hispanic": 14.40632438659668
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.7497820687116814e-10,
            "disgust": 1.7632864857494062e-15,
            "fear": 1.350390688159564e-09,
            "happy": 99.93209838867188,
            "sad": 2.9082556807225046e-07,
            "surprise": 3.472099706414156e-05,
            "neutral": 0.06786952167749405
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 640,
            "y": 191,
            "w": 114,
            "h": 114,
            "left_eye": [
                714,
                235
            ],
            "right_eye": [
                671,
                236
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99737548828125,
            "Man": 0.0026262146420776844
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0007437740569002926,
            "indian": 0.001552022178657353,
            "black": 1.6017987945815548e-05,
            "white": 98.61148834228516,
            "middle eastern": 0.9544745087623596,
            "latino hispanic": 0.4317307472229004
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.1318819065928594e-11,
            "disgust": 2.4314730914896158e-17,
            "fear": 2.957328548713889e-10,
            "happy": 99.9587173461914,
            "sad": 4.1218395807618435e-08,
            "surprise": 1.239822267962154e-05,
            "neutral": 0.04127134755253792
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 212,
            "y": 142,
            "w": 103,
            "h": 103,
            "left_eye": [
                282,
                185
            ],
            "right_eye": [
                241,
                182
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99105834960938,
            "Man": 0.008938640356063843
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0035544822458177805,
            "indian": 0.03928887099027634,
            "black": 0.0007127402350306511,
            "white": 89.54318237304688,
            "middle eastern": 4.311188697814941,
            "latino hispanic": 6.102077960968018
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.4884460691517756e-12,
            "disgust": 1.6984013548941442e-18,
            "fear": 3.274552851095791e-11,
            "happy": 99.9958267211914,
            "sad": 3.320247632387918e-09,
            "surprise": 5.85843963563093e-06,
            "neutral": 0.0041663311421871185
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 808,
            "y": 203,
            "w": 117,
            "h": 117,
            "left_eye": [
                889,
                251
            ],
            "right_eye": [
                844,
                250
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.05281626433134079,
            "Man": 99.94718170166016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.809151035558898e-05,
            "indian": 0.014792297035455704,
            "black": 99.98494720458984,
            "white": 2.9070241325257484e-08,
            "middle eastern": 9.097715469863488e-09,
            "latino hispanic": 0.00024564514751546085
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 2.0600049666086306e-08,
            "disgust": 1.540200997339867e-25,
            "fear": 3.8114525424681744e-10,
            "happy": 3.837347939406044e-10,
            "sad": 3.1044930892676348e-06,
            "surprise": 8.66397886767345e-09,
            "neutral": 100.0
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 417,
            "y": 357,
            "w": 128,
            "h": 128,
            "left_eye": [
                502,
                407
            ],
            "right_eye": [
                453,
                406
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9998550415039,
            "Man": 0.00014419449144043028
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99966430664062,
            "indian": 5.081378185423091e-05,
            "black": 1.1439114100397774e-09,
            "white": 3.5888515412807465e-06,
            "middle eastern": 8.020985958756555e-11,
            "latino hispanic": 0.00027090514777228236
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.244711221103531e-15,
            "disgust": 3.7673393592368294e-23,
            "fear": 2.1482471292307015e-13,
            "happy": 99.8879165649414,
            "sad": 6.011373065994974e-10,
            "surprise": 1.3125250575285463e-07,
            "neutral": 0.1120859906077385
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 273,
            "y": 364,
            "w": 111,
            "h": 111,
            "left_eye": [
                347,
                408
            ],
            "right_eye": [
                303,
                407
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.99739837646484,
            "Man": 0.0026005918625742197
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 23.46748924255371,
            "indian": 12.517297744750977,
            "black": 6.127005100250244,
            "white": 16.843887329101562,
            "middle eastern": 11.03309440612793,
            "latino hispanic": 30.01123046875
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.684197114051102e-10,
            "disgust": 1.5596195311644778e-16,
            "fear": 1.2670928195568365e-10,
            "happy": 99.42570495605469,
            "sad": 2.3673393911849416e-07,
            "surprise": 0.0002918695972766727,
            "neutral": 0.5740103125572205
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 651,
            "y": 374,
            "w": 128,
            "h": 128,
            "left_eye": [
                735,
                422
            ],
            "right_eye": [
                689,
                427
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 100.0,
            "Man": 9.782125971469213e-07
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.3453061658074148e-05,
            "indian": 0.0002665396605152637,
            "black": 1.3852642268830095e-06,
            "white": 98.85812377929688,
            "middle eastern": 0.41558849811553955,
            "latino hispanic": 0.725998044013977
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.4445423761043374e-15,
            "disgust": 1.0008903846584914e-25,
            "fear": 3.0643393828588317e-18,
            "happy": 99.98851776123047,
            "sad": 2.2245209146953826e-12,
            "surprise": 4.033425113902922e-07,
            "neutral": 0.011483401991426945
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 21,
            "y": 433,
            "w": 127,
            "h": 127,
            "left_eye": [
                104,
                481
            ],
            "right_eye": [
                56,
                483
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99989318847656,
            "Man": 0.00010423678759252653
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00012402739957906306,
            "indian": 0.00033690198324620724,
            "black": 2.3455954760720488e-06,
            "white": 98.89459991455078,
            "middle eastern": 0.5921818614006042,
            "latino hispanic": 0.5127483010292053
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.01367194950580597,
            "disgust": 0.003045267192646861,
            "fear": 0.2698978781700134,
            "happy": 91.27934265136719,
            "sad": 0.20611576735973358,
            "surprise": 2.3302454948425293,
            "neutral": 5.897687911987305
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 48,
        "region": {
            "x": 507,
            "y": 464,
            "w": 141,
            "h": 141,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 37.2465705871582,
            "Man": 62.75343322753906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7917775511741638,
            "indian": 2.1215152740478516,
            "black": 0.6639814972877502,
            "white": 69.2759780883789,
            "middle eastern": 14.195079803466797,
            "latino hispanic": 12.95167064666748
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.134292561910115e-06,
            "disgust": 5.344601714321606e-13,
            "fear": 3.81400968763046e-05,
            "happy": 1.266438364982605,
            "sad": 0.29020261764526367,
            "surprise": 1.460256981999919e-07,
            "neutral": 98.44331359863281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 45,
        "region": {
            "x": 165,
            "y": 471,
            "w": 146,
            "h": 146,
            "left_eye": [
                259,
                527
            ],
            "right_eye": [
                207,
                528
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.7581022381782532,
            "Man": 99.24189758300781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.8628195650526322e-05,
            "indian": 6.394814408849925e-05,
            "black": 5.396622668740747e-07,
            "white": 99.85993194580078,
            "middle eastern": 0.08932820707559586,
            "latino hispanic": 0.050638679414987564
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00017236697021871805,
            "disgust": 7.510710702263168e-07,
            "fear": 0.0027578824665397406,
            "happy": 95.98107147216797,
            "sad": 0.00868760421872139,
            "surprise": 0.3588777780532837,
            "neutral": 3.6484248638153076
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 356,
            "y": 574,
            "w": 156,
            "h": 156,
            "left_eye": [
                458,
                634
            ],
            "right_eye": [
                398,
                635
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.97126770019531,
            "Man": 0.02872900851070881
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99998474121094,
            "indian": 2.202981704613194e-06,
            "black": 5.7317648891053175e-12,
            "white": 1.0425737855257466e-06,
            "middle eastern": 2.2663950577372916e-11,
            "latino hispanic": 1.601261828909628e-05
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.9562849118415215e-08,
            "disgust": 5.595801599866945e-13,
            "fear": 3.080972192037734e-06,
            "happy": 98.04388427734375,
            "sad": 5.509361017175252e-06,
            "surprise": 0.05030060559511185,
            "neutral": 1.9058102369308472
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 855,
            "y": 631,
            "w": 135,
            "h": 135,
            "left_eye": [
                944,
                683
            ],
            "right_eye": [
                888,
                684
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.99713897705078,
            "Man": 0.0028629391454160213
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.1367678940296173,
            "indian": 2.985104560852051,
            "black": 96.24337768554688,
            "white": 0.0045890212059021,
            "middle eastern": 0.004020580556243658,
            "latino hispanic": 0.626139760017395
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.2409520026152032e-12,
            "disgust": 3.554679435475925e-22,
            "fear": 7.215815444144261e-17,
            "happy": 99.31806182861328,
            "sad": 3.145706473084431e-10,
            "surprise": 6.418646307793097e-07,
            "neutral": 0.6819393634796143
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 0,
            "y": 644,
            "w": 139,
            "h": 139,
            "left_eye": [
                62,
                698
            ],
            "right_eye": [
                14,
                700
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99984741210938,
            "Man": 0.00015625287778675556
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 87.51594543457031,
            "indian": 1.9588702917099,
            "black": 0.23289725184440613,
            "white": 1.2706726789474487,
            "middle eastern": 0.15708890557289124,
            "latino hispanic": 8.864530563354492
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.0763580955172074e-07,
            "disgust": 7.400742518814951e-11,
            "fear": 1.1372704648238141e-05,
            "happy": 70.28395080566406,
            "sad": 0.0007661560084670782,
            "surprise": 0.001030801679007709,
            "neutral": 29.714237213134766
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 649,
            "y": 696,
            "w": 141,
            "h": 141,
            "left_eye": [
                742,
                753
            ],
            "right_eye": [
                690,
                746
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.9999771118164,
            "Man": 2.3718390366411768e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.004145130515098572,
            "indian": 0.003919339273124933,
            "black": 6.042107634129934e-05,
            "white": 97.97541809082031,
            "middle eastern": 0.8753297924995422,
            "latino hispanic": 1.141135334968567
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.840082112878008e-08,
            "disgust": 5.067002047977331e-13,
            "fear": 3.667828707420995e-07,
            "happy": 99.90315246582031,
            "sad": 1.607146600690612e-06,
            "surprise": 1.0625494724081364e-05,
            "neutral": 0.09683623909950256
        },
        "dominant_emotion": "happy"
    }
]
let skincare_specialist_data4 = [
    {
        "age": 31,
        "region": {
            "x": 736,
            "y": 100,
            "w": 126,
            "h": 126,
            "left_eye": [
                815,
                152
            ],
            "right_eye": [
                775,
                153
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.08741619437932968,
            "Man": 99.91259002685547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.027276337146759033,
            "indian": 26.043399810791016,
            "black": 0.19412893056869507,
            "white": 17.498592376708984,
            "middle eastern": 50.51441192626953,
            "latino hispanic": 5.722189426422119
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 2.7867882224086316e-08,
            "disgust": 3.6479490870712093e-16,
            "fear": 2.482606987541658e-06,
            "happy": 99.99238586425781,
            "sad": 5.655551582606222e-09,
            "surprise": 0.00016931831487454474,
            "neutral": 0.007449938915669918
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 577,
            "y": 80,
            "w": 107,
            "h": 107,
            "left_eye": [
                646,
                122
            ],
            "right_eye": [
                610,
                121
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.0008864428382366896,
            "Man": 99.99911499023438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.444222627673298e-05,
            "indian": 0.20434053242206573,
            "black": 1.3098904219077667e-06,
            "white": 37.149497985839844,
            "middle eastern": 61.9173583984375,
            "latino hispanic": 0.7287768721580505
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 7.343451397894663e-18,
            "disgust": 2.5746190489910203e-26,
            "fear": 2.4739034533594214e-16,
            "happy": 99.99989318847656,
            "sad": 1.2104188907690466e-13,
            "surprise": 2.7591351078881665e-11,
            "neutral": 0.00011188886128365993
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 375,
            "y": 99,
            "w": 112,
            "h": 112,
            "left_eye": [
                449,
                143
            ],
            "right_eye": [
                409,
                143
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0014206231571733952,
            "Man": 99.99858093261719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.013398914597928524,
            "indian": 51.83962631225586,
            "black": 0.0535937137901783,
            "white": 12.000282287597656,
            "middle eastern": 30.753358840942383,
            "latino hispanic": 5.3397440910339355
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 1.8486771141690284e-11,
            "disgust": 5.260566774913674e-19,
            "fear": 1.386799442643083e-11,
            "happy": 99.94410705566406,
            "sad": 1.9880632251556563e-08,
            "surprise": 1.5538115860636026e-07,
            "neutral": 0.055892061442136765
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 885,
            "y": 107,
            "w": 108,
            "h": 108,
            "left_eye": [
                955,
                148
            ],
            "right_eye": [
                916,
                151
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.0011227760696783662,
            "Man": 99.9988784790039
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2127518653869629,
            "indian": 14.838464736938477,
            "black": 10.780084609985352,
            "white": 39.92117691040039,
            "middle eastern": 24.346086502075195,
            "latino hispanic": 9.901442527770996
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.3789505481801596e-12,
            "disgust": 6.0638543764473035e-22,
            "fear": 2.4806681231739902e-14,
            "happy": 99.99896240234375,
            "sad": 1.323922959109436e-12,
            "surprise": 9.366335120830627e-07,
            "neutral": 0.0010380643652752042
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 184,
            "y": 152,
            "w": 99,
            "h": 99,
            "left_eye": [
                251,
                193
            ],
            "right_eye": [
                213,
                191
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99968719482422,
            "Man": 0.0003121658228337765
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.039355698972940445,
            "indian": 0.17232882976531982,
            "black": 0.00669474434107542,
            "white": 71.8560562133789,
            "middle eastern": 12.297410011291504,
            "latino hispanic": 15.628155708312988
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.337765940031711e-13,
            "disgust": 5.067268107444986e-19,
            "fear": 3.0971663493410684e-13,
            "happy": 99.99983215332031,
            "sad": 8.147573282712983e-08,
            "surprise": 1.2795055015502044e-09,
            "neutral": 0.00016553132445551455
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 0,
            "y": 135,
            "w": 108,
            "h": 108,
            "left_eye": [
                57,
                177
            ],
            "right_eye": [
                14,
                177
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99652099609375,
            "Man": 0.003479152685031295
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.86762535572052,
            "indian": 14.6959810256958,
            "black": 0.8909558653831482,
            "white": 21.629043579101562,
            "middle eastern": 23.966136932373047,
            "latino hispanic": 36.950252532958984
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.5838662128961284e-14,
            "disgust": 1.1522501855771793e-19,
            "fear": 6.013515830042768e-14,
            "happy": 99.96337127685547,
            "sad": 1.7022582232684158e-09,
            "surprise": 1.1315924552945944e-07,
            "neutral": 0.036626189947128296
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 453,
            "y": 232,
            "w": 109,
            "h": 109,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.0013944713864475489,
            "Man": 99.99860382080078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.03734369948506355,
            "indian": 1.1820358037948608,
            "black": 0.005560614634305239,
            "white": 50.22006607055664,
            "middle eastern": 38.00714111328125,
            "latino hispanic": 10.547847747802734
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.269799180362966e-11,
            "disgust": 5.719671969123957e-14,
            "fear": 1.3017790401192997e-08,
            "happy": 99.9695053100586,
            "sad": 1.1955638910876587e-05,
            "surprise": 4.1636059222582844e-07,
            "neutral": 0.030476517975330353
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 646,
            "y": 269,
            "w": 100,
            "h": 100,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99815368652344,
            "Man": 0.0018527721986174583
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.465195655822754,
            "indian": 8.365741729736328,
            "black": 5.0197224617004395,
            "white": 22.963199615478516,
            "middle eastern": 13.938501358032227,
            "latino hispanic": 44.24763870239258
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.2160197978769438e-12,
            "disgust": 2.1731792450569712e-20,
            "fear": 3.649032465080637e-12,
            "happy": 99.998779296875,
            "sad": 1.3545644605983398e-08,
            "surprise": 1.2677892868850904e-07,
            "neutral": 0.0012220765929669142
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 288,
            "y": 306,
            "w": 114,
            "h": 114,
            "left_eye": [
                366,
                354
            ],
            "right_eye": [
                320,
                353
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.97222137451172,
            "Man": 0.027785420417785645
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.756503105163574,
            "indian": 30.102882385253906,
            "black": 31.767974853515625,
            "white": 3.2408015727996826,
            "middle eastern": 3.1746456623077393,
            "latino hispanic": 23.957197189331055
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 8.015488967005879e-11,
            "disgust": 4.234262646182676e-15,
            "fear": 7.749347274987883e-10,
            "happy": 98.7723617553711,
            "sad": 1.2437907344065025e-06,
            "surprise": 0.00010499842028366402,
            "neutral": 1.2275390625
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 868,
            "y": 322,
            "w": 108,
            "h": 108,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.9983901977539,
            "Man": 0.0016144107794389129
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.080219745635986,
            "indian": 29.788558959960938,
            "black": 3.172776460647583,
            "white": 11.74921989440918,
            "middle eastern": 10.90068531036377,
            "latino hispanic": 40.30854415893555
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 9.256840294291635e-10,
            "disgust": 3.6781358801795186e-14,
            "fear": 1.9379645110895183e-10,
            "happy": 99.9752426147461,
            "sad": 1.7862930690171197e-07,
            "surprise": 4.5156124173217904e-08,
            "neutral": 0.024753406643867493
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 554,
            "y": 332,
            "w": 116,
            "h": 116,
            "left_eye": [
                633,
                382
            ],
            "right_eye": [
                586,
                380
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.0197982788086,
            "Man": 0.9802048206329346
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.3168214569047052e-10,
            "indian": 1.2120601695642108e-06,
            "black": 100.0,
            "white": 1.7097274278242143e-15,
            "middle eastern": 1.1030910733837243e-16,
            "latino hispanic": 2.533017129380255e-09
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 9.685208191001493e-11,
            "disgust": 3.4075688790509724e-17,
            "fear": 7.666834528352595e-11,
            "happy": 97.15685272216797,
            "sad": 7.982609417922504e-07,
            "surprise": 7.117072527762502e-05,
            "neutral": 2.8430798053741455
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 109,
            "y": 354,
            "w": 99,
            "h": 99,
            "left_eye": [
                177,
                397
            ],
            "right_eye": [
                141,
                388
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99976348876953,
            "Man": 0.00023767870152369142
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.29019895195961,
            "indian": 1.1360925436019897,
            "black": 0.1019505187869072,
            "white": 76.13106536865234,
            "middle eastern": 14.529417037963867,
            "latino hispanic": 7.811276912689209
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.254163261761942e-15,
            "disgust": 2.2942700166341223e-27,
            "fear": 6.787234060908387e-20,
            "happy": 99.99813079833984,
            "sad": 3.0529149087216156e-13,
            "surprise": 6.062175206267284e-10,
            "neutral": 0.0018714765319600701
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 0,
            "y": 501,
            "w": 109,
            "h": 109,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 99.9930648803711,
            "Man": 0.006935041397809982
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.024171503260731697,
            "indian": 0.5333666205406189,
            "black": 0.008580516092479229,
            "white": 64.41764068603516,
            "middle eastern": 24.646196365356445,
            "latino hispanic": 10.370043754577637
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.06741384416818619,
            "disgust": 6.930835017016079e-09,
            "fear": 42.70612335205078,
            "happy": 25.68805503845215,
            "sad": 3.690810203552246,
            "surprise": 2.3842614609748125e-05,
            "neutral": 27.847579956054688
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 29,
        "region": {
            "x": 445,
            "y": 509,
            "w": 123,
            "h": 123,
            "left_eye": [
                526,
                559
            ],
            "right_eye": [
                479,
                559
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.94328308105469,
            "Man": 0.05670693889260292
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 96.45388793945312,
            "indian": 0.611880898475647,
            "black": 0.015382624231278896,
            "white": 0.04810773581266403,
            "middle eastern": 0.002133600413799286,
            "latino hispanic": 2.868605613708496
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.2861292354781357e-13,
            "disgust": 2.3868203678957415e-21,
            "fear": 8.806520237440024e-14,
            "happy": 99.3897705078125,
            "sad": 2.131016918482942e-09,
            "surprise": 3.444739604674396e-06,
            "neutral": 0.6102210879325867
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 169,
            "y": 524,
            "w": 117,
            "h": 117,
            "left_eye": [
                246,
                567
            ],
            "right_eye": [
                203,
                570
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99650573730469,
            "Man": 0.0034871846437454224
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.24790483713150024,
            "indian": 1.2975341081619263,
            "black": 0.0687701478600502,
            "white": 57.13909912109375,
            "middle eastern": 22.248821258544922,
            "latino hispanic": 18.99787712097168
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.1806791095091427e-10,
            "disgust": 2.0095812998471933e-16,
            "fear": 1.93757054844923e-09,
            "happy": 99.9998550415039,
            "sad": 8.623821656783548e-09,
            "surprise": 4.780357087952325e-08,
            "neutral": 0.00015190590056590736
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 688,
            "y": 525,
            "w": 112,
            "h": 112,
            "left_eye": [
                763,
                569
            ],
            "right_eye": [
                718,
                570
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.92652893066406,
            "Man": 0.07347871363162994
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.6668986082077026,
            "indian": 2.474886417388916,
            "black": 0.29290491342544556,
            "white": 46.672332763671875,
            "middle eastern": 18.289594650268555,
            "latino hispanic": 30.603378295898438
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.347865972751606e-07,
            "disgust": 2.7703758731512096e-10,
            "fear": 7.74126237956807e-05,
            "happy": 96.75944519042969,
            "sad": 0.001306435326114297,
            "surprise": 0.0016741511644795537,
            "neutral": 3.2375056743621826
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 916,
            "y": 516,
            "w": 107,
            "h": 122,
            "left_eye": [
                999,
                568
            ],
            "right_eye": [
                951,
                568
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 80.09306335449219,
            "Man": 19.906940460205078
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.402687915905837e-13,
            "indian": 2.2789890807839441e-10,
            "black": 100.0,
            "white": 5.647782427358935e-19,
            "middle eastern": 4.1816378788331953e-19,
            "latino hispanic": 7.555976786095819e-13
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 2.2167338765369943e-13,
            "disgust": 6.895963287065173e-24,
            "fear": 3.1497772139682088e-18,
            "happy": 99.97589111328125,
            "sad": 2.089394351978413e-10,
            "surprise": 1.3599724013602099e-08,
            "neutral": 0.02410973608493805
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 338,
            "y": 848,
            "w": 90,
            "h": 90,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 58.0228157043457,
            "Man": 41.97718811035156
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 30.482759475708008,
            "indian": 4.758016586303711,
            "black": 1.6267272233963013,
            "white": 28.02959632873535,
            "middle eastern": 23.100000381469727,
            "latino hispanic": 12.002900123596191
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.005694529972970486,
            "disgust": 3.8864331145305187e-05,
            "fear": 29.98450469970703,
            "happy": 51.11164474487305,
            "sad": 2.3485922813415527,
            "surprise": 0.0024527981877326965,
            "neutral": 16.547077178955078
        },
        "dominant_emotion": "happy"
    }
]
let skincare_specialist_data5 = [
    {
        "age": 25,
        "region": {
            "x": 565,
            "y": 172,
            "w": 84,
            "h": 84,
            "left_eye": [
                621,
                204
            ],
            "right_eye": [
                592,
                205
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.20657268166542053,
            "Man": 99.7934341430664
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.11192063242197037,
            "indian": 35.82756805419922,
            "black": 0.09386666119098663,
            "white": 32.031394958496094,
            "middle eastern": 23.756227493286133,
            "latino hispanic": 8.179020881652832
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 0.00047006539534777403,
            "disgust": 9.471590622922577e-09,
            "fear": 0.2732633352279663,
            "happy": 98.50580596923828,
            "sad": 0.0027204949874430895,
            "surprise": 0.05875495448708534,
            "neutral": 1.1589908599853516
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 437,
            "y": 183,
            "w": 79,
            "h": 79,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.05584956333041191,
            "Man": 99.94414520263672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.711870592975174e-06,
            "indian": 0.00011777498730225489,
            "black": 3.897514844197758e-08,
            "white": 99.58470153808594,
            "middle eastern": 0.3224186599254608,
            "latino hispanic": 0.09275222569704056
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.787569559994154e-05,
            "disgust": 2.609700921075292e-13,
            "fear": 8.878889161678671e-07,
            "happy": 71.49292755126953,
            "sad": 0.00012085750495316461,
            "surprise": 7.312876732612494e-06,
            "neutral": 28.50690269470215
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 864,
            "y": 186,
            "w": 72,
            "h": 72,
            "left_eye": [
                911,
                213
            ],
            "right_eye": [
                885,
                213
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.04305550083518028,
            "Man": 99.95694732666016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.661934771225788e-06,
            "indian": 3.875070615322329e-05,
            "black": 2.0898637842492462e-07,
            "white": 99.46025085449219,
            "middle eastern": 0.350475549697876,
            "latino hispanic": 0.1892283707857132
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.184057514881715e-05,
            "disgust": 3.126809033915379e-08,
            "fear": 0.00015989229723345488,
            "happy": 87.03008270263672,
            "sad": 0.007123206276446581,
            "surprise": 0.0027383659034967422,
            "neutral": 12.95981216430664
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 46,
            "y": 192,
            "w": 71,
            "h": 71,
            "left_eye": [
                93,
                218
            ],
            "right_eye": [
                65,
                218
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.048619240522384644,
            "Man": 99.95138549804688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9209210276603699,
            "indian": 1.5625797510147095,
            "black": 0.09724600613117218,
            "white": 58.278900146484375,
            "middle eastern": 21.31123924255371,
            "latino hispanic": 17.829111099243164
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.251893402506539e-07,
            "disgust": 2.9717575067422786e-09,
            "fear": 3.464396286290139e-06,
            "happy": 98.60582733154297,
            "sad": 0.0012048627249896526,
            "surprise": 0.0008112512296065688,
            "neutral": 1.3921452760696411
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 990,
            "y": 198,
            "w": 33,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.99,
        "gender": {
            "Woman": 0.018063703551888466,
            "Man": 99.98193359375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0016347152413800359,
            "indian": 0.5578529238700867,
            "black": 0.0030219051986932755,
            "white": 92.86304473876953,
            "middle eastern": 4.169577598571777,
            "latino hispanic": 2.4048736095428467
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.9297476582287345e-06,
            "disgust": 4.658436397048105e-12,
            "fear": 1.147076432062022e-06,
            "happy": 0.0022366794291883707,
            "sad": 89.59585571289062,
            "surprise": 7.378187954363766e-16,
            "neutral": 10.401907920837402
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 29,
        "region": {
            "x": 392,
            "y": 271,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.93193054199219,
            "Man": 0.06806652247905731
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 61.953392028808594,
            "indian": 2.414959192276001,
            "black": 0.9105682373046875,
            "white": 16.56321144104004,
            "middle eastern": 4.273927688598633,
            "latino hispanic": 13.88393783569336
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.00045816347119398415,
            "disgust": 7.592064775963081e-06,
            "fear": 0.0221130158752203,
            "happy": 78.43585968017578,
            "sad": 0.054583221673965454,
            "surprise": 0.04786662012338638,
            "neutral": 21.439115524291992
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 298,
            "y": 201,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.008228189311921597,
            "Man": 99.99177551269531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.23936352133750916,
            "indian": 3.1823713779449463,
            "black": 0.20095287263393402,
            "white": 53.23503112792969,
            "middle eastern": 25.458202362060547,
            "latino hispanic": 17.68407440185547
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.3211389482021332,
            "disgust": 0.0006176095339469612,
            "fear": 1.118082046508789,
            "happy": 97.10494232177734,
            "sad": 0.00044164288556203246,
            "surprise": 1.404817819595337,
            "neutral": 0.04995976760983467
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 633,
            "y": 365,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 6.754759788513184,
            "Man": 93.24524688720703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 42.78080749511719,
            "indian": 4.656902313232422,
            "black": 2.0024847984313965,
            "white": 22.867469787597656,
            "middle eastern": 7.076730728149414,
            "latino hispanic": 20.615610122680664
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.008142644539475441,
            "disgust": 1.423961862201395e-06,
            "fear": 0.004308479838073254,
            "happy": 0.0055585019290447235,
            "sad": 0.2733575403690338,
            "surprise": 2.1897159967920743e-05,
            "neutral": 99.70861053466797
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 778,
            "y": 376,
            "w": 68,
            "h": 68,
            "left_eye": [
                824,
                401
            ],
            "right_eye": [
                798,
                400
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 70.0149154663086,
            "Man": 29.985082626342773
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.004107693675905466,
            "indian": 0.0046919346787035465,
            "black": 0.00014832605666015297,
            "white": 98.10516357421875,
            "middle eastern": 0.5856003761291504,
            "latino hispanic": 1.3002959489822388
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.7896788348443806e-05,
            "disgust": 1.0088271551467187e-08,
            "fear": 0.0028722253628075123,
            "happy": 98.22724914550781,
            "sad": 0.0007447742973454297,
            "surprise": 1.645961880683899,
            "neutral": 0.12310919910669327
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 717,
            "y": 216,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.7658761739730835,
            "Man": 99.234130859375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0014407284324988723,
            "indian": 0.045472051948308945,
            "black": 99.94783782958984,
            "white": 6.752909393981099e-05,
            "middle eastern": 2.976834548462648e-05,
            "latino hispanic": 0.005144765134900808
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0004804902710020542,
            "disgust": 6.591752144124996e-11,
            "fear": 2.5747982363100164e-05,
            "happy": 75.78009033203125,
            "sad": 0.015706731006503105,
            "surprise": 7.065586032695137e-06,
            "neutral": 24.203685760498047
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 246,
            "y": 288,
            "w": 66,
            "h": 66,
            "left_eye": [
                289,
                317
            ],
            "right_eye": [
                264,
                314
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.3627339005470276,
            "Man": 99.63726806640625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.248384531337559e-14,
            "indian": 5.495219390638795e-09,
            "black": 100.0,
            "white": 3.568104059829778e-19,
            "middle eastern": 5.691098257123157e-20,
            "latino hispanic": 1.7480732573266211e-12
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 6.160073340311101e-09,
            "disgust": 5.679878954185013e-15,
            "fear": 9.11843434092674e-10,
            "happy": 99.91154479980469,
            "sad": 1.3865096661902498e-06,
            "surprise": 0.0008069978794082999,
            "neutral": 0.08765632659196854
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 179,
            "y": 224,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99798583984375,
            "Man": 0.0020093615166842937
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.551812485762639e-06,
            "indian": 4.591804099618457e-06,
            "black": 2.7621288367640773e-08,
            "white": 99.88927459716797,
            "middle eastern": 0.05711765214800835,
            "latino hispanic": 0.05360075831413269
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.668417455532818e-11,
            "disgust": 1.0506267459858545e-17,
            "fear": 3.947647897462048e-08,
            "happy": 99.99847412109375,
            "sad": 5.43724898438569e-10,
            "surprise": 7.876555901020765e-05,
            "neutral": 0.0014485082356259227
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 110,
            "y": 290,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9881591796875,
            "Man": 0.011830628849565983
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.028996020555496216,
            "indian": 0.04193812608718872,
            "black": 0.0007677090470679104,
            "white": 88.35582733154297,
            "middle eastern": 6.686100959777832,
            "latino hispanic": 4.886366367340088
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.05274131026556e-10,
            "disgust": 9.308123804971821e-17,
            "fear": 1.3293902090261156e-10,
            "happy": 99.99402618408203,
            "sad": 9.928729838293293e-09,
            "surprise": 8.51528238854371e-05,
            "neutral": 0.005893242079764605
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 697,
            "y": 294,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.99991607666016,
            "Man": 8.061659900704399e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.06901729106903076,
            "indian": 0.30018436908721924,
            "black": 0.004650638904422522,
            "white": 82.58685302734375,
            "middle eastern": 11.43676471710205,
            "latino hispanic": 5.6025238037109375
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0006335238576866686,
            "disgust": 3.203118467354216e-05,
            "fear": 0.23297163844108582,
            "happy": 99.57282257080078,
            "sad": 0.030327139422297478,
            "surprise": 0.0029416268225759268,
            "neutral": 0.16027452051639557
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 820,
            "y": 292,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 91.23151397705078,
            "Man": 8.76848316192627
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.6490561962127686,
            "indian": 1.415777564048767,
            "black": 0.16970472037792206,
            "white": 64.34416961669922,
            "middle eastern": 13.37783145904541,
            "latino hispanic": 19.0434627532959
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.418763753870735e-06,
            "disgust": 1.6820200787748263e-09,
            "fear": 0.0006214308086782694,
            "happy": 99.91846466064453,
            "sad": 0.0002930463233496994,
            "surprise": 0.03222612291574478,
            "neutral": 0.048385974019765854
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 554,
            "y": 303,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99156951904297,
            "Man": 0.00843130238354206
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7240170836448669,
            "indian": 0.2295949012041092,
            "black": 0.015078762546181679,
            "white": 82.60023498535156,
            "middle eastern": 7.530162334442139,
            "latino hispanic": 8.900921821594238
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.7044541184295667e-06,
            "disgust": 5.931411473092396e-10,
            "fear": 0.0021857533138245344,
            "happy": 99.69345092773438,
            "sad": 2.6136000087717548e-05,
            "surprise": 0.027140868827700615,
            "neutral": 0.2772059142589569
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 477,
            "y": 354,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 98.83991241455078,
            "Man": 1.1600799560546875
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.23758739233016968,
            "indian": 0.47295427322387695,
            "black": 0.01795887015759945,
            "white": 65.23847198486328,
            "middle eastern": 16.720582962036133,
            "latino hispanic": 17.31243896484375
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.1942443961743265e-05,
            "disgust": 6.687622455814335e-09,
            "fear": 0.00011653060937533155,
            "happy": 98.99205017089844,
            "sad": 0.000247996678808704,
            "surprise": 0.0031867052894085646,
            "neutral": 1.0043785572052002
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 30,
            "y": 366,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.49214172363281,
            "Man": 0.5078668594360352
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 45.63735580444336,
            "indian": 2.8781211376190186,
            "black": 1.303066372871399,
            "white": 27.855716705322266,
            "middle eastern": 6.3895087242126465,
            "latino hispanic": 15.936234474182129
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 7.42668930797663e-07,
            "disgust": 5.229258692729388e-10,
            "fear": 0.00020345218945294619,
            "happy": 93.00421142578125,
            "sad": 0.008603353053331375,
            "surprise": 0.00018511216330807656,
            "neutral": 6.986796855926514
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 194,
            "y": 366,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 44.42994689941406,
            "Man": 55.57004928588867
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.2165644047712476e-09,
            "indian": 5.134855873833999e-10,
            "black": 3.9826426661768166e-13,
            "white": 99.9991455078125,
            "middle eastern": 0.0006408112240023911,
            "latino hispanic": 0.00021587083756458014
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.779995727702044e-06,
            "disgust": 3.797100481262028e-11,
            "fear": 0.00012062330642947927,
            "happy": 99.96763610839844,
            "sad": 8.287541959361988e-07,
            "surprise": 0.0005372133455239236,
            "neutral": 0.03170568868517876
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 932,
            "y": 365,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99606323242188,
            "Man": 0.0039325072430074215
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.002854190766811371,
            "indian": 0.0009934339905157685,
            "black": 6.4506953094678465e-06,
            "white": 99.3425064086914,
            "middle eastern": 0.5254989862442017,
            "latino hispanic": 0.12813922762870789
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0005701613263227046,
            "disgust": 4.430697799762129e-07,
            "fear": 0.16380393505096436,
            "happy": 95.85791015625,
            "sad": 0.22385521233081818,
            "surprise": 0.0035135247744619846,
            "neutral": 3.750349998474121
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 921,
            "y": 250,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.07648143917322159,
            "Man": 99.92351531982422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.016025889664888382,
            "indian": 0.2883564233779907,
            "black": 0.0029504233971238136,
            "white": 65.08161163330078,
            "middle eastern": 27.824609756469727,
            "latino hispanic": 6.78645133972168
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.4326149428155475e-10,
            "disgust": 1.6917281166614033e-17,
            "fear": 3.2011893136285607e-09,
            "happy": 96.06269073486328,
            "sad": 2.1443005607579835e-05,
            "surprise": 8.42250003074696e-09,
            "neutral": 3.9372854232788086
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 344,
            "y": 362,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 97.83438110351562,
            "Man": 2.1656296253204346
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.8575264372630045e-05,
            "indian": 0.00010361547174397856,
            "black": 1.6306426005030517e-06,
            "white": 99.45018005371094,
            "middle eastern": 0.4282878339290619,
            "latino hispanic": 0.12137142568826675
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.1077920134994201e-05,
            "disgust": 5.51739376408733e-10,
            "fear": 4.2360763472970575e-05,
            "happy": 67.07418060302734,
            "sad": 0.0042412420734763145,
            "surprise": 1.5149636055866722e-05,
            "neutral": 32.92150115966797
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 5,
            "y": 477,
            "w": 84,
            "h": 84,
            "left_eye": [
                60,
                511
            ],
            "right_eye": [
                30,
                510
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.05109485983848572,
            "Man": 99.94890594482422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0769670382142067,
            "indian": 6.018746376037598,
            "black": 0.05562552437186241,
            "white": 17.85256004333496,
            "middle eastern": 54.021419525146484,
            "latino hispanic": 21.974687576293945
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 9.863977174973115e-05,
            "disgust": 8.402374618299291e-08,
            "fear": 0.010669085197150707,
            "happy": 41.485321044921875,
            "sad": 0.05094665661454201,
            "surprise": 0.4303811490535736,
            "neutral": 58.0225830078125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 206,
            "y": 496,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99974060058594,
            "Man": 0.00026422785595059395
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.000937004282604903,
            "indian": 0.0010168282315135002,
            "black": 1.7568912880960852e-05,
            "white": 97.90784454345703,
            "middle eastern": 1.1764155626296997,
            "latino hispanic": 0.9137657284736633
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.7542141073079165e-09,
            "disgust": 2.198592810969389e-15,
            "fear": 1.0186637155129574e-05,
            "happy": 99.99881744384766,
            "sad": 1.8060376305584214e-08,
            "surprise": 0.00011861953680636361,
            "neutral": 0.001054289285093546
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 404,
            "y": 501,
            "w": 70,
            "h": 70,
            "left_eye": [
                450,
                528
            ],
            "right_eye": [
                423,
                526
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.98219299316406,
            "Man": 0.017803704366087914
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99307250976562,
            "indian": 0.0004309103242121637,
            "black": 1.1472063476958283e-07,
            "white": 0.0001912681618705392,
            "middle eastern": 4.14989216324102e-08,
            "latino hispanic": 0.006308257579803467
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0016871480038389564,
            "disgust": 1.630398429597335e-07,
            "fear": 0.026760732755064964,
            "happy": 0.8519114255905151,
            "sad": 0.3483005464076996,
            "surprise": 0.012847116217017174,
            "neutral": 98.75849151611328
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 588,
            "y": 507,
            "w": 73,
            "h": 73,
            "left_eye": [
                635,
                535
            ],
            "right_eye": [
                608,
                534
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99512481689453,
            "Man": 0.0048793344758450985
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 98.18197631835938,
            "indian": 0.12749436497688293,
            "black": 0.002996694529429078,
            "white": 0.10492617636919022,
            "middle eastern": 0.00493036862462759,
            "latino hispanic": 1.5776780843734741
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.00013465614756569266,
            "disgust": 7.793864220673186e-09,
            "fear": 0.0034986103419214487,
            "happy": 78.61776733398438,
            "sad": 0.036309342831373215,
            "surprise": 0.0033886029850691557,
            "neutral": 21.338895797729492
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 764,
            "y": 499,
            "w": 74,
            "h": 74,
            "left_eye": [
                812,
                528
            ],
            "right_eye": [
                786,
                527
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.96683502197266,
            "Man": 0.03316537290811539
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.9993896484375,
            "indian": 0.00018816158990375698,
            "black": 9.83343961813432e-10,
            "white": 9.6962321549654e-06,
            "middle eastern": 2.4081396876596273e-09,
            "latino hispanic": 0.0004056108882650733
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 6.031423254171386e-06,
            "disgust": 3.2165943242290496e-09,
            "fear": 0.0007754781399853528,
            "happy": 0.6045873165130615,
            "sad": 0.04959360510110855,
            "surprise": 1.7842316083260812e-05,
            "neutral": 99.34502410888672
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 948,
            "y": 477,
            "w": 75,
            "h": 75,
            "left_eye": [
                997,
                506
            ],
            "right_eye": [
                967,
                506
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 95.13311767578125,
            "Man": 4.866885185241699
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.2397663593292236,
            "indian": 3.338695526123047,
            "black": 0.5758787989616394,
            "white": 47.26384735107422,
            "middle eastern": 19.657878875732422,
            "latino hispanic": 26.923938751220703
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0122532501100068e-07,
            "disgust": 7.159070558593328e-11,
            "fear": 4.0214320051745744e-07,
            "happy": 99.9831314086914,
            "sad": 4.993625566385163e-07,
            "surprise": 0.0017987550236284733,
            "neutral": 0.015071624889969826
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 0,
            "y": 577,
            "w": 86,
            "h": 86,
            "left_eye": [
                41,
                609
            ],
            "right_eye": [
                11,
                611
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 1.9643266201019287,
            "Man": 98.03567504882812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.013421018607914448,
            "indian": 0.10344965755939484,
            "black": 0.004552579019218683,
            "white": 84.09310913085938,
            "middle eastern": 10.855222702026367,
            "latino hispanic": 4.930247783660889
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.016886716708540916,
            "disgust": 8.060615800786763e-05,
            "fear": 0.14967337250709534,
            "happy": 25.937265396118164,
            "sad": 1.1349250078201294,
            "surprise": 0.005306966137140989,
            "neutral": 72.75586700439453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 934,
            "y": 589,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.85626220703125,
            "Man": 0.14374426007270813
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 16.358074188232422,
            "indian": 4.718549728393555,
            "black": 1.215267539024353,
            "white": 42.208885192871094,
            "middle eastern": 19.244625091552734,
            "latino hispanic": 16.254608154296875
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.938593162207792e-12,
            "disgust": 4.878442319877004e-16,
            "fear": 1.3820332434022475e-08,
            "happy": 99.72534942626953,
            "sad": 1.1438488201065411e-07,
            "surprise": 1.1650802207441302e-06,
            "neutral": 0.2746522128582001
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 755,
            "y": 607,
            "w": 74,
            "h": 74,
            "left_eye": [
                807,
                635
            ],
            "right_eye": [
                777,
                633
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9263916015625,
            "Man": 0.07360465079545975
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.945425510406494,
            "indian": 8.893796920776367,
            "black": 1.4275623559951782,
            "white": 28.435699462890625,
            "middle eastern": 18.77555274963379,
            "latino hispanic": 36.52195739746094
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.14897727346397e-06,
            "disgust": 9.211400531228264e-10,
            "fear": 7.408437522826716e-05,
            "happy": 99.47993469238281,
            "sad": 0.00011117966641904786,
            "surprise": 0.03162762150168419,
            "neutral": 0.48824840784072876
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 182,
            "y": 605,
            "w": 82,
            "h": 82,
            "left_eye": [
                238,
                636
            ],
            "right_eye": [
                209,
                636
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.9998779296875,
            "Man": 0.00011862724932143465
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0025991478469222784,
            "indian": 0.00981560256332159,
            "black": 9.403147851116955e-05,
            "white": 93.99034118652344,
            "middle eastern": 4.199809551239014,
            "latino hispanic": 1.7973406314849854
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.934647949994542e-05,
            "disgust": 1.5769690264733072e-07,
            "fear": 0.0006269544828683138,
            "happy": 99.99085235595703,
            "sad": 0.0017085970612242818,
            "surprise": 0.0027229972183704376,
            "neutral": 0.00403999537229538
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 564,
            "y": 609,
            "w": 74,
            "h": 74,
            "left_eye": [
                611,
                637
            ],
            "right_eye": [
                582,
                638
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99893951416016,
            "Man": 0.0010654249927029014
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 82.87932586669922,
            "indian": 0.9160306453704834,
            "black": 0.17100310325622559,
            "white": 1.1802730560302734,
            "middle eastern": 0.17685618996620178,
            "latino hispanic": 14.676509857177734
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.002228490309789777,
            "disgust": 1.4245006241253577e-05,
            "fear": 0.7678593993186951,
            "happy": 53.72703552246094,
            "sad": 0.197621688246727,
            "surprise": 0.07639621943235397,
            "neutral": 45.228843688964844
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 388,
            "y": 615,
            "w": 76,
            "h": 76,
            "left_eye": [
                437,
                643
            ],
            "right_eye": [
                408,
                646
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.95909118652344,
            "Man": 0.040904540568590164
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 16.443906784057617,
            "indian": 10.589066505432129,
            "black": 3.5577292442321777,
            "white": 22.6329288482666,
            "middle eastern": 17.411376953125,
            "latino hispanic": 29.364988327026367
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 7.842502647292804e-09,
            "disgust": 1.826897940110199e-14,
            "fear": 9.747222584621795e-09,
            "happy": 99.79696655273438,
            "sad": 8.614577495791309e-07,
            "surprise": 0.00012725974374916404,
            "neutral": 0.20290401577949524
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 699,
            "y": 884,
            "w": 100,
            "h": 100,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 56.14488220214844,
            "Man": 43.85511779785156
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.09585431218147278,
            "indian": 0.07074958086013794,
            "black": 0.004603822715580463,
            "white": 94.36283874511719,
            "middle eastern": 3.27763295173645,
            "latino hispanic": 2.1883208751678467
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.34944766759872437,
            "disgust": 5.9078062442097234e-09,
            "fear": 71.85966491699219,
            "happy": 27.79048728942871,
            "sad": 1.2100952062610304e-06,
            "surprise": 0.000402883772039786,
            "neutral": 6.604309321645019e-10
        },
        "dominant_emotion": "fear"
    }
]

console.log("Microsoft Results for Skincare Specialist:");
const data = skincare_specialist_data.concat(skincare_specialist_data2, skincare_specialist_data3, skincare_specialist_data4, skincare_specialist_data5);
console.log(processData(data));
