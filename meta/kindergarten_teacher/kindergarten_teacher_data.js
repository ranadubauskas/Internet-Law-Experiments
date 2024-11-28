const { processData } = require('../../data_processing.js');

let kindergarten_teacher_data = [
    {
        "age": 24,
        "region": {
            "x": 535,
            "y": 141,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 40.369537353515625,
            "Man": 59.630470275878906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.24838268756866455,
            "indian": 0.10465163737535477,
            "black": 0.009554346092045307,
            "white": 87.95499420166016,
            "middle eastern": 6.484576225280762,
            "latino hispanic": 5.1978440284729
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.410152539297997e-07,
            "disgust": 2.4168301041016527e-11,
            "fear": 0.02371574006974697,
            "happy": 99.97252655029297,
            "sad": 1.3835488971380983e-05,
            "surprise": 0.0018697060877457261,
            "neutral": 0.0018761703977361321
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 394,
            "y": 172,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 71.19139862060547,
            "Man": 28.808597564697266
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.32208988070487976,
            "indian": 0.2928403913974762,
            "black": 0.04142742231488228,
            "white": 78.16207885742188,
            "middle eastern": 7.929529666900635,
            "latino hispanic": 13.252029418945312
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.569769301568158e-05,
            "disgust": 4.969790623476911e-08,
            "fear": 1.5081799030303955,
            "happy": 98.4870834350586,
            "sad": 0.0028855190612375736,
            "surprise": 0.0006172695429995656,
            "neutral": 0.0012183813378214836
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 285,
            "y": 177,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 1.2152984142303467,
            "Man": 98.78469848632812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 38.68337631225586,
            "indian": 6.394576549530029,
            "black": 2.577446460723877,
            "white": 20.765167236328125,
            "middle eastern": 7.3183393478393555,
            "latino hispanic": 24.261098861694336
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.00017059253877960145,
            "disgust": 1.783889924666937e-09,
            "fear": 0.00020507254521362484,
            "happy": 99.91094207763672,
            "sad": 0.0006536350701935589,
            "surprise": 0.052959442138671875,
            "neutral": 0.03506916016340256
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 679,
            "y": 151,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.82831573486328,
            "Man": 0.17168211936950684
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 16.80374526977539,
            "indian": 5.308460235595703,
            "black": 2.670210123062134,
            "white": 27.394136428833008,
            "middle eastern": 9.036078453063965,
            "latino hispanic": 38.787376403808594
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.7851221602759324e-05,
            "disgust": 2.9885065533363786e-09,
            "fear": 0.8688510060310364,
            "happy": 99.11827850341797,
            "sad": 0.00016033356951083988,
            "surprise": 0.003398772096261382,
            "neutral": 0.009274591691792011
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 990,
            "y": 278,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 97.59419250488281,
            "Man": 2.405815601348877
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.886295795440674,
            "indian": 4.5320281982421875,
            "black": 64.71139526367188,
            "white": 5.787880897521973,
            "middle eastern": 1.410075306892395,
            "latino hispanic": 15.67232894897461
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.9365816115168855e-05,
            "disgust": 1.7382852102176827e-10,
            "fear": 0.0003454604302532971,
            "happy": 99.74237823486328,
            "sad": 0.004598655737936497,
            "surprise": 0.03516954928636551,
            "neutral": 0.21748971939086914
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 807,
            "y": 192,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 8.636295318603516,
            "Man": 91.36370086669922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.2724745273590088,
            "indian": 0.5232187509536743,
            "black": 0.07325857132673264,
            "white": 75.02120971679688,
            "middle eastern": 12.905155181884766,
            "latino hispanic": 10.204681396484375
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.280319677083753e-06,
            "disgust": 2.2557975452863754e-12,
            "fear": 7.367863145191222e-05,
            "happy": 99.79344940185547,
            "sad": 1.4159860256768297e-05,
            "surprise": 0.15202191472053528,
            "neutral": 0.054443761706352234
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 1188,
            "y": 208,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 6.342849254608154,
            "Man": 93.65715026855469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.346659660339355,
            "indian": 4.812070846557617,
            "black": 7.667471885681152,
            "white": 27.91590690612793,
            "middle eastern": 14.38990592956543,
            "latino hispanic": 31.86798095703125
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.000646547763608396,
            "disgust": 2.7322829762588263e-11,
            "fear": 0.03546849638223648,
            "happy": 99.77803802490234,
            "sad": 0.0031332718208432198,
            "surprise": 0.17680396139621735,
            "neutral": 0.005905003286898136
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 948,
            "y": 176,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 95.76714324951172,
            "Man": 4.2328572273254395
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 12.306256294250488,
            "indian": 17.199941635131836,
            "black": 15.915820121765137,
            "white": 9.442362785339355,
            "middle eastern": 7.292403221130371,
            "latino hispanic": 37.84321975708008
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 6.370235894337384e-09,
            "disgust": 5.2411091959470024e-14,
            "fear": 5.622765456791967e-05,
            "happy": 99.99977111816406,
            "sad": 0.0001816354924812913,
            "surprise": 2.9424736425198716e-08,
            "neutral": 1.879632236523321e-06
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 174,
            "y": 243,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 98.20067596435547,
            "Man": 1.7993285655975342
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.41110730171203613,
            "indian": 0.8006420135498047,
            "black": 0.058536347001791,
            "white": 65.74646759033203,
            "middle eastern": 14.376251220703125,
            "latino hispanic": 18.60699462890625
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.844689011600622e-09,
            "disgust": 5.086496375733118e-15,
            "fear": 5.507092282641679e-06,
            "happy": 99.99995422363281,
            "sad": 4.680858910433017e-05,
            "surprise": 2.9925209532599695e-10,
            "neutral": 5.612756925899021e-09
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 879,
            "y": 254,
            "w": 82,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.94873046875,
            "Man": 0.0512663796544075
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 51.640113830566406,
            "indian": 3.7744340896606445,
            "black": 4.644800186157227,
            "white": 18.452062606811523,
            "middle eastern": 3.8937737941741943,
            "latino hispanic": 17.594816207885742
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.005502745043486357,
            "disgust": 2.1659056073985994e-05,
            "fear": 0.27449867129325867,
            "happy": 99.23993682861328,
            "sad": 0.03395356982946396,
            "surprise": 0.015201189555227757,
            "neutral": 0.43088585138320923
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 696,
            "y": 254,
            "w": 89,
            "h": 89,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 85.1023941040039,
            "Man": 14.897603034973145
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.22449596226215363,
            "indian": 0.4021267294883728,
            "black": 0.038476862013339996,
            "white": 74.5406723022461,
            "middle eastern": 10.764555931091309,
            "latino hispanic": 14.029669761657715
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 84.36782836914062,
            "disgust": 1.094950221158797e-05,
            "fear": 12.142927169799805,
            "happy": 0.12652862071990967,
            "sad": 2.6303718090057373,
            "surprise": 4.626480949809775e-05,
            "neutral": 0.7322869896888733
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 34,
        "region": {
            "x": 407,
            "y": 282,
            "w": 82,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 3.8094751834869385,
            "Man": 96.19052124023438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9719067811965942,
            "indian": 0.6704551577568054,
            "black": 0.03815437853336334,
            "white": 74.50525665283203,
            "middle eastern": 10.320016860961914,
            "latino hispanic": 13.494217872619629
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.4198350224178284e-07,
            "disgust": 4.788951353529303e-12,
            "fear": 0.0007395498687401414,
            "happy": 99.99925231933594,
            "sad": 2.1815390027768444e-07,
            "surprise": 4.2114052689612436e-08,
            "neutral": 1.500713187851943e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 508,
            "y": 284,
            "w": 90,
            "h": 90,
            "left_eye": [
                566,
                317
            ],
            "right_eye": [
                532,
                321
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99996185302734,
            "Man": 3.529620516928844e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 37.6464958190918,
            "indian": 4.08993673324585,
            "black": 1.7735182046890259,
            "white": 21.974285125732422,
            "middle eastern": 5.71652364730835,
            "latino hispanic": 28.79924964904785
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.497629220637009e-08,
            "disgust": 1.8252380943467594e-14,
            "fear": 4.792333356817835e-07,
            "happy": 99.98127746582031,
            "sad": 2.0329574908828363e-05,
            "surprise": 0.0024085422046482563,
            "neutral": 0.016294455155730247
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 247,
            "y": 290,
            "w": 96,
            "h": 96,
            "left_eye": [
                313,
                326
            ],
            "right_eye": [
                277,
                325
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 80.89765167236328,
            "Man": 19.102340698242188
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.017081936821341515,
            "indian": 0.00198516808450222,
            "black": 2.188189682783559e-05,
            "white": 98.84759521484375,
            "middle eastern": 0.440435528755188,
            "latino hispanic": 0.6928825378417969
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6588990092714084e-07,
            "disgust": 7.339486006799345e-13,
            "fear": 0.00016063974180724472,
            "happy": 99.99750518798828,
            "sad": 1.0398059202998411e-05,
            "surprise": 7.26104699424468e-05,
            "neutral": 0.002242626855149865
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 1239,
            "y": 325,
            "w": 40,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 4.032777309417725,
            "Man": 95.96722412109375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.000626068445853889,
            "indian": 0.0015733534237369895,
            "black": 2.0216113625792786e-05,
            "white": 99.38013458251953,
            "middle eastern": 0.3789934515953064,
            "latino hispanic": 0.2386508733034134
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0010582231916487217,
            "disgust": 1.4460574071506471e-08,
            "fear": 2.196145260313642e-06,
            "happy": 0.4320670962333679,
            "sad": 5.932988166809082,
            "surprise": 3.559771144523438e-09,
            "neutral": 93.63388061523438
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 38,
        "region": {
            "x": 20,
            "y": 341,
            "w": 88,
            "h": 88,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 7.340534210205078,
            "Man": 92.65946960449219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.07389497756958,
            "indian": 0.9698826670646667,
            "black": 0.2174621820449829,
            "white": 64.8073501586914,
            "middle eastern": 10.936883926391602,
            "latino hispanic": 20.994525909423828
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.04514722526073456,
            "disgust": 0.0018259690841659904,
            "fear": 47.340030670166016,
            "happy": 52.572792053222656,
            "sad": 0.001893297303467989,
            "surprise": 0.0308477021753788,
            "neutral": 0.007459540385752916
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 1031,
            "y": 352,
            "w": 89,
            "h": 89,
            "left_eye": [
                1093,
                384
            ],
            "right_eye": [
                1056,
                385
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99344635009766,
            "Man": 0.006560825742781162
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.019807469099760056,
            "indian": 0.007404899224638939,
            "black": 0.00021969617228023708,
            "white": 96.46533966064453,
            "middle eastern": 1.0914766788482666,
            "latino hispanic": 2.4157562255859375
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.237987098562826e-09,
            "disgust": 6.986110167365143e-16,
            "fear": 5.60560238227481e-08,
            "happy": 99.92768859863281,
            "sad": 9.63774618867319e-06,
            "surprise": 0.00021170612308196723,
            "neutral": 0.07207663357257843
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 826,
            "y": 379,
            "w": 99,
            "h": 99,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99525451660156,
            "Man": 0.00475011533126235
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 54.01284408569336,
            "indian": 0.8162785172462463,
            "black": 0.33357876539230347,
            "white": 29.051002502441406,
            "middle eastern": 3.3167033195495605,
            "latino hispanic": 12.469597816467285
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.007860394194722176,
            "disgust": 2.7202397632208886e-06,
            "fear": 0.10527858883142471,
            "happy": 99.74771118164062,
            "sad": 0.0006157829193398356,
            "surprise": 0.007592197507619858,
            "neutral": 0.13093674182891846
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 634,
            "y": 412,
            "w": 105,
            "h": 105,
            "left_eye": [
                706,
                452
            ],
            "right_eye": [
                661,
                453
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.38407135009766,
            "Man": 0.6159234642982483
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.6293458581203595e-05,
            "indian": 1.423640514985891e-05,
            "black": 4.7317641360677953e-08,
            "white": 99.55078125,
            "middle eastern": 0.10068035870790482,
            "latino hispanic": 0.3484836220741272
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.2139849065183625e-08,
            "disgust": 2.8427825008283183e-14,
            "fear": 3.155021659040358e-06,
            "happy": 99.99763488769531,
            "sad": 1.3215472449701338e-07,
            "surprise": 9.007745575217996e-06,
            "neutral": 0.0023382639046758413
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 203,
            "y": 456,
            "w": 112,
            "h": 112,
            "left_eye": [
                280,
                498
            ],
            "right_eye": [
                236,
                498
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.98607635498047,
            "Man": 0.013927610591053963
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00018444123270455748,
            "indian": 4.2432078771525994e-05,
            "black": 1.6514616163476603e-07,
            "white": 99.9090805053711,
            "middle eastern": 0.037808485329151154,
            "latino hispanic": 0.05288880318403244
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2991751008328833e-09,
            "disgust": 1.4559366434584675e-17,
            "fear": 1.0254240123686031e-08,
            "happy": 99.91107940673828,
            "sad": 3.6038264283888566e-07,
            "surprise": 0.0006630041752941906,
            "neutral": 0.08826345205307007
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 407,
            "y": 473,
            "w": 103,
            "h": 103,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.9999771118164,
            "Man": 1.9380533558432944e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.6343974241171964e-05,
            "indian": 2.0862804376520216e-05,
            "black": 3.3172494084965365e-08,
            "white": 99.70008850097656,
            "middle eastern": 0.09493079036474228,
            "latino hispanic": 0.20493711531162262
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.288956910793786e-09,
            "disgust": 4.321042018661826e-15,
            "fear": 1.1544136668817373e-07,
            "happy": 99.98326110839844,
            "sad": 5.2278945076977834e-05,
            "surprise": 0.00031400530133396387,
            "neutral": 0.01636797934770584
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 1098,
            "y": 538,
            "w": 104,
            "h": 104,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 99.99796295166016,
            "Man": 0.00203823228366673
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 11.741214752197266,
            "indian": 0.8676952123641968,
            "black": 0.3680349290370941,
            "white": 59.40153884887695,
            "middle eastern": 9.053072929382324,
            "latino hispanic": 18.568445205688477
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.375800199341029e-05,
            "disgust": 6.224593729342587e-09,
            "fear": 0.00012708107533399016,
            "happy": 89.94681549072266,
            "sad": 0.0002391557500232011,
            "surprise": 0.005984707735478878,
            "neutral": 10.04679012298584
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 387,
            "y": 677,
            "w": 113,
            "h": 113,
            "left_eye": [
                464,
                719
            ],
            "right_eye": [
                419,
                723
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99979400634766,
            "Man": 0.0002024894201895222
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.176032259943895e-05,
            "indian": 9.672015949035995e-06,
            "black": 1.497054924470831e-08,
            "white": 99.86632537841797,
            "middle eastern": 0.038354407995939255,
            "latino hispanic": 0.09527251869440079
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.255933552281931e-05,
            "disgust": 2.464617177011519e-09,
            "fear": 0.0011915486538782716,
            "happy": 98.57098388671875,
            "sad": 0.005877544637769461,
            "surprise": 0.011196291074156761,
            "neutral": 1.410721778869629
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 591,
            "y": 686,
            "w": 121,
            "h": 121,
            "left_eye": [
                672,
                732
            ],
            "right_eye": [
                629,
                731
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.5618667602539,
            "Man": 0.43812859058380127
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.005013855639845133,
            "indian": 0.005418272688984871,
            "black": 0.00012626258831005543,
            "white": 92.18814849853516,
            "middle eastern": 1.7189422845840454,
            "latino hispanic": 6.08235502243042
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.651010390763986e-06,
            "disgust": 5.367397082345349e-10,
            "fear": 1.566068567626644e-05,
            "happy": 99.08049774169922,
            "sad": 0.0002473996428307146,
            "surprise": 0.0018006698228418827,
            "neutral": 0.9174259901046753
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 821,
            "y": 727,
            "w": 118,
            "h": 118,
            "left_eye": [
                905,
                772
            ],
            "right_eye": [
                858,
                771
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.9619369506836,
            "Man": 0.03805995360016823
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.2136119157075882,
            "indian": 0.12398015707731247,
            "black": 0.006674165837466717,
            "white": 83.91006469726562,
            "middle eastern": 5.602621555328369,
            "latino hispanic": 10.143051147460938
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.521409886962033e-09,
            "disgust": 2.2227840256208575e-18,
            "fear": 9.003608414381858e-10,
            "happy": 99.99921417236328,
            "sad": 2.592689396507808e-09,
            "surprise": 5.442705514724366e-06,
            "neutral": 0.0007843403145670891
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 154,
            "y": 796,
            "w": 135,
            "h": 135,
            "left_eye": [
                243,
                849
            ],
            "right_eye": [
                192,
                851
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.97957611083984,
            "Man": 0.020433053374290466
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.5946871318183184e-09,
            "indian": 2.182833691577457e-09,
            "black": 1.3019094266195075e-12,
            "white": 99.99402618408203,
            "middle eastern": 0.0024107820354402065,
            "latino hispanic": 0.0035634213127195835
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6644017275524448e-09,
            "disgust": 1.7148156606174893e-14,
            "fear": 7.637029142415486e-08,
            "happy": 99.91263580322266,
            "sad": 2.913531034209882e-06,
            "surprise": 3.7354061532823835e-07,
            "neutral": 0.08736822754144669
        },
        "dominant_emotion": "happy"
    }
]


let kindergarten_teacher_data2 = [
    {
        "age": 27,
        "region": {
            "x": 188,
            "y": 280,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 94.35712432861328,
            "Man": 5.642868518829346
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 42.5518798828125,
            "indian": 9.66655445098877,
            "black": 18.215091705322266,
            "white": 2.6754627227783203,
            "middle eastern": 1.5967603921890259,
            "latino hispanic": 25.294252395629883
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.0392154914384832e-09,
            "disgust": 2.5965421774188193e-16,
            "fear": 1.9734127665316237e-09,
            "happy": 99.95122528076172,
            "sad": 4.163946343282987e-08,
            "surprise": 0.0011696324218064547,
            "neutral": 0.047607313841581345
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 546,
            "y": 210,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 98.00047302246094,
            "Man": 1.9995344877243042
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.1284637451171875,
            "indian": 4.806834697723389,
            "black": 1.278710126876831,
            "white": 30.830482482910156,
            "middle eastern": 13.05188274383545,
            "latino hispanic": 45.903621673583984
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 5.8562644511539474e-08,
            "disgust": 5.1455036554541676e-15,
            "fear": 6.451097578974441e-05,
            "happy": 99.99254608154297,
            "sad": 5.797032827103976e-07,
            "surprise": 0.00033555214758962393,
            "neutral": 0.0070540509186685085
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 752,
            "y": 225,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.98905944824219,
            "Man": 0.010946118272840977
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.0836501121521,
            "indian": 1.5166610479354858,
            "black": 0.6485876441001892,
            "white": 56.176231384277344,
            "middle eastern": 12.62192153930664,
            "latino hispanic": 21.952951431274414
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.160179716767743e-05,
            "disgust": 1.1811716049692222e-09,
            "fear": 0.04053704813122749,
            "happy": 99.71971130371094,
            "sad": 0.0005546461325138807,
            "surprise": 0.03428582474589348,
            "neutral": 0.20485366880893707
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 42,
        "region": {
            "x": 939,
            "y": 242,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 2.118088722229004,
            "Man": 97.88191223144531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.483409881591797,
            "indian": 4.361850261688232,
            "black": 2.6587884426116943,
            "white": 33.978267669677734,
            "middle eastern": 14.938586235046387,
            "latino hispanic": 28.579099655151367
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00011200564767932519,
            "disgust": 3.165044723703325e-13,
            "fear": 8.542473551642615e-06,
            "happy": 99.93010711669922,
            "sad": 0.0001403600035700947,
            "surprise": 8.743455691728741e-05,
            "neutral": 0.06954639405012131
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 1199,
            "y": 250,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99826049804688,
            "Man": 0.0017364234663546085
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 20.737812042236328,
            "indian": 14.430281639099121,
            "black": 5.328095436096191,
            "white": 15.111457824707031,
            "middle eastern": 11.971882820129395,
            "latino hispanic": 32.420467376708984
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.01750043034553528,
            "disgust": 7.89163532317616e-05,
            "fear": 0.1304854154586792,
            "happy": 99.63404083251953,
            "sad": 0.023059409111738205,
            "surprise": 0.00029524584533646703,
            "neutral": 0.19454242289066315
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 1027,
            "y": 276,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 97.93502807617188,
            "Man": 2.064972400665283
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 26.302431106567383,
            "indian": 5.842735290527344,
            "black": 52.52933120727539,
            "white": 0.4973023533821106,
            "middle eastern": 0.22606785595417023,
            "latino hispanic": 14.602131843566895
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 2.830678624832217e-08,
            "disgust": 6.563283496194413e-16,
            "fear": 2.0274960377264506e-07,
            "happy": 99.98473358154297,
            "sad": 2.605138149647246e-08,
            "surprise": 0.001746293273754418,
            "neutral": 0.013517369516193867
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 369,
            "y": 296,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.0909368991851807,
            "Man": 98.90906524658203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.27889373898506165,
            "indian": 0.46968039870262146,
            "black": 0.08326070010662079,
            "white": 75.01124572753906,
            "middle eastern": 8.389372825622559,
            "latino hispanic": 15.767545700073242
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.620264597107962e-08,
            "disgust": 7.897306398239878e-13,
            "fear": 0.00013971526641398668,
            "happy": 99.9981918334961,
            "sad": 0.00017737047164700925,
            "surprise": 4.893158347840654e-06,
            "neutral": 0.001482628402300179
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 634,
            "y": 307,
            "w": 85,
            "h": 85,
            "left_eye": [
                688,
                340
            ],
            "right_eye": [
                658,
                340
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.91895294189453,
            "Man": 0.08103968948125839
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.006837844848633,
            "indian": 1.1847989559173584,
            "black": 0.3030085563659668,
            "white": 56.96868133544922,
            "middle eastern": 11.88084888458252,
            "latino hispanic": 25.655818939208984
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.667217356451147e-07,
            "disgust": 4.355258341470769e-12,
            "fear": 0.00044964038534089923,
            "happy": 99.98868560791016,
            "sad": 3.952940824092366e-05,
            "surprise": 2.4619244868517853e-05,
            "neutral": 0.010807662270963192
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 825,
            "y": 302,
            "w": 89,
            "h": 89,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.9836654663086,
            "Man": 0.016324179247021675
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.020913124084473,
            "indian": 1.3606175184249878,
            "black": 0.4556841552257538,
            "white": 59.52005386352539,
            "middle eastern": 9.86801815032959,
            "latino hispanic": 20.77471351623535
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00013142888201400638,
            "disgust": 3.0698228670189565e-07,
            "fear": 0.6866937279701233,
            "happy": 98.96026611328125,
            "sad": 0.004186889156699181,
            "surprise": 0.0006028197822161019,
            "neutral": 0.3481247127056122
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 465,
            "y": 334,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.05602988600730896,
            "Man": 99.94396209716797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 20.425222396850586,
            "indian": 10.484129905700684,
            "black": 9.8847074508667,
            "white": 22.914867401123047,
            "middle eastern": 11.245033264160156,
            "latino hispanic": 25.04604721069336
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 97.3954086303711,
            "disgust": 0.001010083477012813,
            "fear": 1.4584468603134155,
            "happy": 0.011899064294993877,
            "sad": 1.0634177923202515,
            "surprise": 0.00010548794671194628,
            "neutral": 0.06971091777086258
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 33,
        "region": {
            "x": 1094,
            "y": 332,
            "w": 83,
            "h": 83,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99978637695312,
            "Man": 0.00021409591136034578
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.572742223739624,
            "indian": 0.3854321837425232,
            "black": 0.04416242241859436,
            "white": 71.21862030029297,
            "middle eastern": 9.208023071289062,
            "latino hispanic": 18.57101821899414
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.554070258208867e-09,
            "disgust": 2.3986686634953143e-16,
            "fear": 2.513211029508966e-06,
            "happy": 99.98619842529297,
            "sad": 5.801874181088351e-07,
            "surprise": 4.8505908125662245e-06,
            "neutral": 0.013802737928926945
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 72,
            "y": 346,
            "w": 82,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 91.40514373779297,
            "Man": 8.59486198425293
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 15.468852996826172,
            "indian": 9.329036712646484,
            "black": 4.634465217590332,
            "white": 21.740989685058594,
            "middle eastern": 14.263736724853516,
            "latino hispanic": 34.56291580200195
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.741629430147441e-07,
            "disgust": 3.1502671497363015e-15,
            "fear": 1.145300211646827e-05,
            "happy": 99.99472045898438,
            "sad": 1.0734169109127834e-06,
            "surprise": 9.369355211674701e-06,
            "neutral": 0.005261140875518322
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 932,
            "y": 352,
            "w": 90,
            "h": 90,
            "left_eye": [
                992,
                387
            ],
            "right_eye": [
                959,
                386
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99998474121094,
            "Man": 1.5968409570632502e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.4986669719219208,
            "indian": 0.6270840764045715,
            "black": 0.16095823049545288,
            "white": 67.3005599975586,
            "middle eastern": 13.325638771057129,
            "latino hispanic": 18.087085723876953
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.884236402106893e-11,
            "disgust": 3.972072084233192e-18,
            "fear": 2.669473906280473e-05,
            "happy": 99.99569702148438,
            "sad": 6.622001080813789e-08,
            "surprise": 1.1204117072338704e-05,
            "neutral": 0.004265749827027321
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 0,
            "y": 370,
            "w": 79,
            "h": 79,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 1.0539683103561401,
            "Man": 98.94603729248047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 37.27336120605469,
            "indian": 5.67744779586792,
            "black": 4.264472007751465,
            "white": 23.85464859008789,
            "middle eastern": 8.827285766601562,
            "latino hispanic": 20.10279083251953
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.764791488647461,
            "disgust": 2.6636367692844942e-05,
            "fear": 76.60678100585938,
            "happy": 16.125192642211914,
            "sad": 2.0302376747131348,
            "surprise": 0.007934220135211945,
            "neutral": 1.4650325775146484
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 34,
        "region": {
            "x": 703,
            "y": 457,
            "w": 90,
            "h": 90,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99717712402344,
            "Man": 0.002827123273164034
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.5200468301773071,
            "indian": 0.3199136555194855,
            "black": 0.047685589641332626,
            "white": 77.07868957519531,
            "middle eastern": 8.449695587158203,
            "latino hispanic": 12.58397102355957
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.5820218379758444e-07,
            "disgust": 1.5927007840843208e-14,
            "fear": 3.2580882702859526e-07,
            "happy": 99.90090942382812,
            "sad": 8.445221411079729e-09,
            "surprise": 2.945949518107227e-06,
            "neutral": 0.09909221529960632
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 272,
            "y": 363,
            "w": 93,
            "h": 93,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.9442138671875,
            "Man": 0.055783700197935104
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.453294277191162,
            "indian": 4.9492669105529785,
            "black": 2.3737499713897705,
            "white": 34.002899169921875,
            "middle eastern": 20.11312484741211,
            "latino hispanic": 31.1076602935791
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.5759176015853882,
            "disgust": 4.211918712826446e-05,
            "fear": 9.561518669128418,
            "happy": 88.7768783569336,
            "sad": 0.037927377969026566,
            "surprise": 0.015340950340032578,
            "neutral": 0.03237184137105942
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 1049,
            "y": 470,
            "w": 99,
            "h": 99,
            "left_eye": [
                1113,
                507
            ],
            "right_eye": [
                1077,
                511
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.99241638183594,
            "Man": 0.007584290113300085
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.4466249871911714e-06,
            "indian": 2.181814306823071e-05,
            "black": 4.0255983435599774e-08,
            "white": 99.75382232666016,
            "middle eastern": 0.11643492430448532,
            "latino hispanic": 0.12972122430801392
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2871714716311544e-06,
            "disgust": 3.707245353258039e-14,
            "fear": 1.957176039013575e-07,
            "happy": 99.99029541015625,
            "sad": 1.5683102674302063e-06,
            "surprise": 0.003663156181573868,
            "neutral": 0.006041724234819412
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 198,
            "y": 478,
            "w": 94,
            "h": 94,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99995422363281,
            "Man": 4.446654565981589e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.45271435379981995,
            "indian": 0.9086335897445679,
            "black": 0.07272090762853622,
            "white": 61.125858306884766,
            "middle eastern": 13.223041534423828,
            "latino hispanic": 24.217031478881836
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.1600733646209846e-08,
            "disgust": 1.7921797536681397e-14,
            "fear": 0.012708657421171665,
            "happy": 99.98721313476562,
            "sad": 3.859429853037e-05,
            "surprise": 4.8863539632293396e-06,
            "neutral": 3.6591256503015757e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 477,
            "y": 446,
            "w": 101,
            "h": 101,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.4896240234375,
            "Man": 0.5103731751441956
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.024851910769939423,
            "indian": 0.0393759049475193,
            "black": 0.001641177455894649,
            "white": 84.25928497314453,
            "middle eastern": 5.975846290588379,
            "latino hispanic": 9.699005126953125
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.425571918487549,
            "disgust": 6.530290193040855e-07,
            "fear": 0.008793645538389683,
            "happy": 95.54438781738281,
            "sad": 0.01807304657995701,
            "surprise": 8.129143679980189e-06,
            "neutral": 0.0031653165351599455
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 897,
            "y": 482,
            "w": 101,
            "h": 101,
            "left_eye": [
                959,
                520
            ],
            "right_eye": [
                923,
                522
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99881744384766,
            "Man": 0.001179264858365059
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.5182067676942097e-06,
            "indian": 3.060556537093362e-06,
            "black": 2.576802060616501e-08,
            "white": 99.91323852539062,
            "middle eastern": 0.043595317751169205,
            "latino hispanic": 0.043158214539289474
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0009183264337480068,
            "disgust": 7.684048597411675e-08,
            "fear": 0.0034442513715475798,
            "happy": 99.99327850341797,
            "sad": 7.022339559625834e-05,
            "surprise": 1.1482955414976459e-05,
            "neutral": 0.0022741719149053097
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 0,
            "y": 644,
            "w": 99,
            "h": 99,
            "left_eye": [
                56,
                683
            ],
            "right_eye": [
                17,
                682
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99707794189453,
            "Man": 0.0029229221399873495
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.15258990228176117,
            "indian": 0.07944992184638977,
            "black": 0.008144323714077473,
            "white": 82.22319030761719,
            "middle eastern": 4.607019424438477,
            "latino hispanic": 12.929609298706055
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.365310297080928e-13,
            "disgust": 2.2345296801263807e-19,
            "fear": 1.2891002154624687e-10,
            "happy": 99.98650360107422,
            "sad": 1.7488436254708972e-09,
            "surprise": 2.0563375073834322e-06,
            "neutral": 0.01349254697561264
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 990,
            "y": 641,
            "w": 102,
            "h": 102,
            "left_eye": [
                1056,
                679
            ],
            "right_eye": [
                1018,
                681
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.74559020996094,
            "Man": 0.25440606474876404
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0001392249541822821,
            "indian": 0.00023218183196149766,
            "black": 9.608256732462905e-07,
            "white": 98.82109069824219,
            "middle eastern": 0.663337230682373,
            "latino hispanic": 0.5151987671852112
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.529128652095096e-06,
            "disgust": 2.955005684590617e-11,
            "fear": 9.262499816031777e-07,
            "happy": 99.99844360351562,
            "sad": 3.3637405749686877e-07,
            "surprise": 1.9329809219925664e-05,
            "neutral": 0.0015303539112210274
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 756,
            "y": 676,
            "w": 102,
            "h": 102,
            "left_eye": [
                819,
                715
            ],
            "right_eye": [
                786,
                717
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.99993133544922,
            "Man": 6.575582665391266e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.0388343334198,
            "indian": 1.9625242948532104,
            "black": 0.4141641855239868,
            "white": 44.134857177734375,
            "middle eastern": 16.84168815612793,
            "latino hispanic": 34.607933044433594
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.35251431855022e-10,
            "disgust": 1.100464543328297e-16,
            "fear": 1.5964994604100724e-10,
            "happy": 99.91194915771484,
            "sad": 4.4422389322562594e-08,
            "surprise": 4.724238169728778e-05,
            "neutral": 0.08800891041755676
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 264,
            "y": 634,
            "w": 94,
            "h": 94,
            "left_eye": [
                323,
                669
            ],
            "right_eye": [
                286,
                672
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 90.4907455444336,
            "Man": 9.509254455566406
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 9.323073027189821e-05,
            "indian": 2.7861184207722545e-05,
            "black": 9.418259594440315e-08,
            "white": 99.71492767333984,
            "middle eastern": 0.08323944360017776,
            "latino hispanic": 0.20171359181404114
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0065985433757305145,
            "disgust": 0.0002445185964461416,
            "fear": 0.10035563260316849,
            "happy": 99.7155532836914,
            "sad": 0.007159208878874779,
            "surprise": 0.00017189270874951035,
            "neutral": 0.1699148267507553
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 472,
            "y": 693,
            "w": 97,
            "h": 97,
            "left_eye": [
                535,
                730
            ],
            "right_eye": [
                496,
                729
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99798583984375,
            "Man": 0.0020159510895609856
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.332558631896973,
            "indian": 2.947824478149414,
            "black": 0.5028091073036194,
            "white": 41.002933502197266,
            "middle eastern": 14.533207893371582,
            "latino hispanic": 36.680667877197266
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.1243471271833485e-12,
            "disgust": 8.182158875681194e-19,
            "fear": 1.0733981481436672e-09,
            "happy": 99.99998474121094,
            "sad": 2.3353289080318973e-08,
            "surprise": 1.601405813511647e-10,
            "neutral": 1.1234343219257426e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 543,
            "y": 1069,
            "w": 121,
            "h": 121,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 1.0,
        "gender": {
            "Woman": 7.840534210205078,
            "Man": 92.15946960449219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.2800536155700684,
            "indian": 0.4788680672645569,
            "black": 0.03127767890691757,
            "white": 82.79580688476562,
            "middle eastern": 8.091280937194824,
            "latino hispanic": 7.322704792022705
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.6109572647546884e-06,
            "disgust": 1.4743852526602377e-15,
            "fear": 2.293091050376006e-08,
            "happy": 99.94293212890625,
            "sad": 1.613018874024874e-08,
            "surprise": 0.054178107529878616,
            "neutral": 0.0028877451550215483
        },
        "dominant_emotion": "happy"
    }
]

let kindergarten_teacher_data3 = [
    {
        "age": 46,
        "region": {
            "x": 787,
            "y": 62,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.05312971770763397,
            "Man": 99.9468765258789
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.15344202518463135,
            "indian": 0.8844364285469055,
            "black": 0.0441443957388401,
            "white": 72.13436889648438,
            "middle eastern": 19.73958969116211,
            "latino hispanic": 7.04401969909668
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.020646026358008385,
            "disgust": 9.770508313522441e-08,
            "fear": 0.0020975281950086355,
            "happy": 99.29983520507812,
            "sad": 0.009982546791434288,
            "surprise": 0.003615780035033822,
            "neutral": 0.6638164520263672
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 484,
            "y": 72,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.44314590096473694,
            "Man": 99.55685424804688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0241591427475214,
            "indian": 0.15695106983184814,
            "black": 0.005659257527440786,
            "white": 84.34127807617188,
            "middle eastern": 10.6737060546875,
            "latino hispanic": 4.798241138458252
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00301060127094388,
            "disgust": 4.412119114505231e-09,
            "fear": 0.0020503574050962925,
            "happy": 3.087496519088745,
            "sad": 0.11053251475095749,
            "surprise": 5.174243779038079e-05,
            "neutral": 96.79686737060547
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 671,
            "y": 118,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.010352810844779015,
            "Man": 99.98963928222656
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.0051217079162598,
            "indian": 6.004552364349365,
            "black": 1.2692525386810303,
            "white": 34.2780647277832,
            "middle eastern": 29.648632049560547,
            "latino hispanic": 26.79438018798828
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.343588829040527,
            "disgust": 4.3095078581245616e-05,
            "fear": 0.02707403525710106,
            "happy": 19.783018112182617,
            "sad": 6.5378031730651855,
            "surprise": 0.00010039303742814809,
            "neutral": 69.30838012695312
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 260,
            "y": 158,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.015411673113703728,
            "Man": 99.98458862304688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.6004078388214111,
            "indian": 1.1471493244171143,
            "black": 0.15349790453910828,
            "white": 66.0394515991211,
            "middle eastern": 16.65876007080078,
            "latino hispanic": 15.400738716125488
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.2984554767608643,
            "disgust": 0.0008638639701530337,
            "fear": 5.8201212882995605,
            "happy": 0.10181359201669693,
            "sad": 54.58846664428711,
            "surprise": 0.0056319828145205975,
            "neutral": 36.18465042114258
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 23,
        "region": {
            "x": 1129,
            "y": 161,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.05608411878347397,
            "Man": 99.94391632080078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00015345522842835635,
            "indian": 0.0008219011942856014,
            "black": 6.678746558463899e-06,
            "white": 99.04113006591797,
            "middle eastern": 0.6874635815620422,
            "latino hispanic": 0.270425945520401
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.1360582113265991,
            "disgust": 0.019872039556503296,
            "fear": 8.434657096862793,
            "happy": 0.09848003834486008,
            "sad": 31.185468673706055,
            "surprise": 0.01477778796106577,
            "neutral": 59.110679626464844
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 383,
            "y": 82,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.05915059149265289,
            "Man": 99.94084930419922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.12307434529066086,
            "indian": 0.6287267208099365,
            "black": 0.04378869757056236,
            "white": 67.34583282470703,
            "middle eastern": 20.280344009399414,
            "latino hispanic": 11.578237533569336
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.027901804074645042,
            "disgust": 6.217497866600752e-05,
            "fear": 0.0701630562543869,
            "happy": 93.8793716430664,
            "sad": 0.314870148897171,
            "surprise": 0.22267235815525055,
            "neutral": 5.4849653244018555
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 139,
            "y": 223,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.5118894577026367,
            "Man": 99.48811340332031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.052396032959222794,
            "indian": 0.052502021193504333,
            "black": 0.002685470739379525,
            "white": 91.21197509765625,
            "middle eastern": 3.7727746963500977,
            "latino hispanic": 4.907665252685547
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.01862822100520134,
            "disgust": 3.788199319387786e-05,
            "fear": 0.1094249039888382,
            "happy": 55.82218933105469,
            "sad": 2.6917014122009277,
            "surprise": 0.00692410534247756,
            "neutral": 41.351097106933594
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 38,
        "region": {
            "x": 1002,
            "y": 124,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.006622609216719866,
            "Man": 99.99337005615234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.014563469216227531,
            "indian": 0.29520294070243835,
            "black": 0.0014089462347328663,
            "white": 75.55775451660156,
            "middle eastern": 21.031898498535156,
            "latino hispanic": 3.099165439605713
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.36236345767974854,
            "disgust": 6.726710853399709e-05,
            "fear": 0.01191391795873642,
            "happy": 6.790523529052734,
            "sad": 6.668817520141602,
            "surprise": 0.0017696099821478128,
            "neutral": 86.16455078125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 42,
        "region": {
            "x": 537,
            "y": 153,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.26669225096702576,
            "Man": 99.73330688476562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.5664873123168945,
            "indian": 12.341370582580566,
            "black": 2.407219171524048,
            "white": 29.794082641601562,
            "middle eastern": 29.1496639251709,
            "latino hispanic": 20.74117660522461
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.012181758880615,
            "disgust": 0.014836259186267853,
            "fear": 7.759462356567383,
            "happy": 0.005243460647761822,
            "sad": 85.4613037109375,
            "surprise": 0.0011191986268386245,
            "neutral": 0.7458560466766357
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 37,
        "region": {
            "x": 277,
            "y": 84,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 2.596104860305786,
            "Man": 97.40390014648438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.434173107147217,
            "indian": 12.952850341796875,
            "black": 1.855897068977356,
            "white": 19.790895462036133,
            "middle eastern": 41.81486511230469,
            "latino hispanic": 18.151317596435547
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.641943633556366,
            "disgust": 1.2106134818168357e-05,
            "fear": 0.04192347824573517,
            "happy": 3.5250208377838135,
            "sad": 5.040400981903076,
            "surprise": 0.0005473251803778112,
            "neutral": 90.75015258789062
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 155,
            "y": 134,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.7133252620697021,
            "Man": 99.28667449951172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.743450403213501,
            "indian": 4.188981056213379,
            "black": 0.572223961353302,
            "white": 44.31725311279297,
            "middle eastern": 35.45100021362305,
            "latino hispanic": 13.727097511291504
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.093289375305176,
            "disgust": 5.634532863041386e-05,
            "fear": 2.473466396331787,
            "happy": 2.4366416931152344,
            "sad": 6.049553871154785,
            "surprise": 0.04614835977554321,
            "neutral": 80.90084838867188
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 434,
            "y": 211,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.0004648739704862237,
            "Man": 99.9995346069336
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 29.684587478637695,
            "indian": 8.66220474243164,
            "black": 9.78444766998291,
            "white": 15.536323547363281,
            "middle eastern": 10.48006820678711,
            "latino hispanic": 25.852371215820312
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.006017142906785011,
            "disgust": 0.0020346310921013355,
            "fear": 0.049628421664237976,
            "happy": 83.57061004638672,
            "sad": 1.1750004291534424,
            "surprise": 0.08762020617723465,
            "neutral": 15.109099388122559
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 47,
            "y": 214,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 49.48381042480469,
            "Man": 50.51618194580078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.8550972938537598,
            "indian": 9.663297653198242,
            "black": 1.0420212745666504,
            "white": 26.26276397705078,
            "middle eastern": 31.5301513671875,
            "latino hispanic": 28.646669387817383
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.0001170474715763703,
            "disgust": 5.490570401889272e-06,
            "fear": 0.001120355213060975,
            "happy": 98.43826293945312,
            "sad": 0.017504356801509857,
            "surprise": 0.008196775801479816,
            "neutral": 1.534784197807312
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 895,
            "y": 99,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.15619954466819763,
            "Man": 99.84380340576172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.7452380657196045,
            "indian": 9.818964004516602,
            "black": 1.5666784048080444,
            "white": 30.549640655517578,
            "middle eastern": 37.130367279052734,
            "latino hispanic": 18.189115524291992
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 5.20590353012085,
            "disgust": 0.00015075822011567652,
            "fear": 5.424277305603027,
            "happy": 1.4975999593734741,
            "sad": 24.69451141357422,
            "surprise": 0.036423541605472565,
            "neutral": 63.141136169433594
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 787,
            "y": 343,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.4973044991493225,
            "Man": 99.50270080566406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.7714545726776123,
            "indian": 2.1258885860443115,
            "black": 0.6899659037590027,
            "white": 43.10782241821289,
            "middle eastern": 15.279860496520996,
            "latino hispanic": 35.02500534057617
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.08416314914939e-06,
            "disgust": 1.915431013799207e-08,
            "fear": 0.04600302875041962,
            "happy": 99.86710357666016,
            "sad": 0.0005342725198715925,
            "surprise": 0.005495501682162285,
            "neutral": 0.08085247874259949
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 659,
            "y": 347,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.3624885082244873,
            "Man": 98.63751220703125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00999233964830637,
            "indian": 0.029967114329338074,
            "black": 0.0005918568931519985,
            "white": 90.7051010131836,
            "middle eastern": 5.759887218475342,
            "latino hispanic": 3.4944517612457275
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.035222653299570084,
            "disgust": 7.978163921507075e-05,
            "fear": 1.9825167655944824,
            "happy": 10.76391315460205,
            "sad": 1.4637207984924316,
            "surprise": 0.11543228477239609,
            "neutral": 85.63911437988281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 48,
        "region": {
            "x": 860,
            "y": 228,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.09627926349639893,
            "Man": 99.90372467041016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.012250608764588833,
            "indian": 0.012695345096290112,
            "black": 0.000481672293972224,
            "white": 96.27019500732422,
            "middle eastern": 1.5038408041000366,
            "latino hispanic": 2.2005374431610107
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.3876001834869385,
            "disgust": 0.0002789850695990026,
            "fear": 0.050868093967437744,
            "happy": 43.84067153930664,
            "sad": 0.9316737055778503,
            "surprise": 0.038119520992040634,
            "neutral": 53.750789642333984
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 757,
            "y": 259,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.60636138916016,
            "Man": 0.39363476634025574
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.940065860748291,
            "indian": 1.0736709833145142,
            "black": 0.48196789622306824,
            "white": 63.07319259643555,
            "middle eastern": 9.344061851501465,
            "latino hispanic": 21.0870361328125
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.164668204495683e-06,
            "disgust": 1.7006001051811381e-09,
            "fear": 0.0027501964941620827,
            "happy": 98.61954498291016,
            "sad": 8.573092782171443e-05,
            "surprise": 0.1372443288564682,
            "neutral": 1.2403682470321655
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 355,
            "y": 248,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.12631087005138397,
            "Man": 99.87369537353516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.587315559387207,
            "indian": 3.176485776901245,
            "black": 2.9171626567840576,
            "white": 43.33072280883789,
            "middle eastern": 14.961009979248047,
            "latino hispanic": 24.027297973632812
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.646829843521118,
            "disgust": 0.0005265615764074028,
            "fear": 6.293577194213867,
            "happy": 8.912888526916504,
            "sad": 40.12314224243164,
            "surprise": 0.013982705771923065,
            "neutral": 42.00905227661133
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 45,
        "region": {
            "x": 997,
            "y": 232,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0007519852952100337,
            "Man": 99.99925231933594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.0528404712677,
            "indian": 7.583353519439697,
            "black": 0.9407358169555664,
            "white": 31.770341873168945,
            "middle eastern": 30.81338119506836,
            "latino hispanic": 26.839345932006836
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 30.283668518066406,
            "disgust": 1.1889317647728603e-05,
            "fear": 0.013266559690237045,
            "happy": 5.66322135925293,
            "sad": 20.297897338867188,
            "surprise": 0.0058391219936311245,
            "neutral": 43.73609161376953
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 1196,
            "y": 248,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.017902182415127754,
            "Man": 99.98210144042969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.010833028703927994,
            "indian": 0.04511773958802223,
            "black": 0.0014515015063807368,
            "white": 89.93599700927734,
            "middle eastern": 5.934195041656494,
            "latino hispanic": 4.0724077224731445
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 87.63184356689453,
            "disgust": 1.1359727380977347e-07,
            "fear": 0.0010060257045552135,
            "happy": 0.020042262971401215,
            "sad": 0.8289041519165039,
            "surprise": 8.507868187734857e-05,
            "neutral": 11.518117904663086
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 28,
        "region": {
            "x": 606,
            "y": 257,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.7250608205795288,
            "Man": 98.27493286132812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.13637885451316833,
            "indian": 0.185103178024292,
            "black": 0.015779675915837288,
            "white": 86.29103088378906,
            "middle eastern": 8.585304260253906,
            "latino hispanic": 4.786407947540283
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.217623311182251e-06,
            "disgust": 1.0071460998517523e-08,
            "fear": 0.0006206650286912918,
            "happy": 98.7618408203125,
            "sad": 9.218220657203346e-05,
            "surprise": 0.003034737193956971,
            "neutral": 1.234413504600525
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 256,
            "y": 309,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.2979766130447388,
            "Man": 98.7020263671875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.020732879638672,
            "indian": 9.797935485839844,
            "black": 3.436013698577881,
            "white": 28.219837188720703,
            "middle eastern": 25.781679153442383,
            "latino hispanic": 22.74380111694336
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.02842346951365471,
            "disgust": 8.299676665046718e-06,
            "fear": 0.16179998219013214,
            "happy": 26.083866119384766,
            "sad": 0.7706589102745056,
            "surprise": 0.012423832900822163,
            "neutral": 72.94281768798828
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 511,
            "y": 310,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.33203694224357605,
            "Man": 99.66796875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.983977317810059,
            "indian": 4.956573963165283,
            "black": 1.7035083770751953,
            "white": 37.434268951416016,
            "middle eastern": 18.96097755432129,
            "latino hispanic": 28.960693359375
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.1204018592834473,
            "disgust": 0.08664807677268982,
            "fear": 49.65605545043945,
            "happy": 42.872859954833984,
            "sad": 2.7422049045562744,
            "surprise": 0.04429274797439575,
            "neutral": 3.4775328636169434
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 25,
        "region": {
            "x": 899,
            "y": 332,
            "w": 82,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.05650874227285385,
            "Man": 99.94348907470703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0023176120594143867,
            "indian": 0.0006689755828119814,
            "black": 7.130766607588157e-05,
            "white": 99.03688049316406,
            "middle eastern": 0.36141344904899597,
            "latino hispanic": 0.5986496210098267
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.310659408569336,
            "disgust": 0.005388825200498104,
            "fear": 69.28561401367188,
            "happy": 0.0007293615490198135,
            "sad": 29.377809524536133,
            "surprise": 0.00010542599920881912,
            "neutral": 0.019695380702614784
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 34,
        "region": {
            "x": 93,
            "y": 335,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0350174754858017,
            "Man": 99.96497344970703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.986563682556152,
            "indian": 12.179315567016602,
            "black": 7.2342610359191895,
            "white": 20.446880340576172,
            "middle eastern": 15.494550704956055,
            "latino hispanic": 28.65843391418457
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.4257311820983887,
            "disgust": 1.9167934656143188,
            "fear": 59.66167449951172,
            "happy": 0.2878574728965759,
            "sad": 32.71905517578125,
            "surprise": 0.7423428893089294,
            "neutral": 1.2465484142303467
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 32,
        "region": {
            "x": 372,
            "y": 334,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.23993854224681854,
            "Man": 99.76006317138672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 20.751359939575195,
            "indian": 11.709842681884766,
            "black": 7.088058948516846,
            "white": 17.14430046081543,
            "middle eastern": 21.43229103088379,
            "latino hispanic": 21.874149322509766
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 12.638988494873047,
            "disgust": 0.21072888374328613,
            "fear": 17.603527069091797,
            "happy": 0.04926902800798416,
            "sad": 53.02487564086914,
            "surprise": 0.03182598203420639,
            "neutral": 16.440786361694336
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 34,
        "region": {
            "x": 1014,
            "y": 340,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.20582692325115204,
            "Man": 99.7941665649414
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.188323020935059,
            "indian": 4.960048198699951,
            "black": 1.9047409296035767,
            "white": 36.37601089477539,
            "middle eastern": 19.8448543548584,
            "latino hispanic": 28.72602081298828
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.2661631405353546,
            "disgust": 0.004069192335009575,
            "fear": 3.0211856365203857,
            "happy": 45.57849884033203,
            "sad": 2.573160409927368,
            "surprise": 0.06829233467578888,
            "neutral": 48.48863220214844
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 1166,
            "y": 365,
            "w": 75,
            "h": 75,
            "left_eye": [
                1215,
                392
            ],
            "right_eye": [
                1188,
                391
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.08852943778038025,
            "Man": 99.91146850585938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 27.07004165649414,
            "indian": 7.862999439239502,
            "black": 5.942611217498779,
            "white": 19.07809066772461,
            "middle eastern": 13.75760555267334,
            "latino hispanic": 26.28864860534668
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 6.9824538230896,
            "disgust": 4.227760314941406,
            "fear": 22.96775245666504,
            "happy": 3.497375249862671,
            "sad": 45.401771545410156,
            "surprise": 0.5119151473045349,
            "neutral": 16.41097640991211
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 0,
            "y": 421,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.99,
        "gender": {
            "Woman": 13.628928184509277,
            "Man": 86.3710708618164
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.21316081285476685,
            "indian": 0.21378394961357117,
            "black": 0.01573122665286064,
            "white": 85.55726623535156,
            "middle eastern": 9.50658130645752,
            "latino hispanic": 4.493471622467041
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 59.796112060546875,
            "disgust": 0.06323565542697906,
            "fear": 4.539373397827148,
            "happy": 0.8701033592224121,
            "sad": 8.490738868713379,
            "surprise": 0.05482663959264755,
            "neutral": 26.18561363220215
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 31,
        "region": {
            "x": 580,
            "y": 424,
            "w": 85,
            "h": 85,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0027007339522242546,
            "Man": 99.9972915649414
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.766199111938477,
            "indian": 8.455703735351562,
            "black": 3.3849666118621826,
            "white": 24.76317596435547,
            "middle eastern": 25.413013458251953,
            "latino hispanic": 29.216951370239258
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.3500719666481018,
            "disgust": 0.07401301711797714,
            "fear": 14.12161922454834,
            "happy": 0.8747332096099854,
            "sad": 30.53158187866211,
            "surprise": 0.010945749469101429,
            "neutral": 54.03703308105469
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 40,
        "region": {
            "x": 465,
            "y": 427,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0012863760348409414,
            "Man": 99.99871063232422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.5032920837402344,
            "indian": 17.995946884155273,
            "black": 2.661179304122925,
            "white": 16.41312026977539,
            "middle eastern": 41.74164581298828,
            "latino hispanic": 18.684816360473633
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.9761704802513123,
            "disgust": 2.6372450520284474e-05,
            "fear": 0.08314130455255508,
            "happy": 79.31458282470703,
            "sad": 2.2487587928771973,
            "surprise": 0.031841833144426346,
            "neutral": 17.345481872558594
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 38,
        "region": {
            "x": 94,
            "y": 440,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.20002229511737823,
            "Man": 99.79997253417969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 64.08496856689453,
            "indian": 6.648317813873291,
            "black": 1.5488327741622925,
            "white": 12.985880851745605,
            "middle eastern": 2.907050609588623,
            "latino hispanic": 11.82495403289795
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.6432127356529236,
            "disgust": 0.02074779011309147,
            "fear": 55.622711181640625,
            "happy": 17.012893676757812,
            "sad": 11.136248588562012,
            "surprise": 0.7272023558616638,
            "neutral": 14.836991310119629
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 33,
        "region": {
            "x": 335,
            "y": 442,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.09226749837398529,
            "Man": 99.90773010253906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.345040321350098,
            "indian": 4.479335784912109,
            "black": 8.59830093383789,
            "white": 49.138912200927734,
            "middle eastern": 13.269671440124512,
            "latino hispanic": 16.168743133544922
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.05033136531710625,
            "disgust": 0.0037882335018366575,
            "fear": 1.9311772584915161,
            "happy": 93.95894622802734,
            "sad": 0.3626145124435425,
            "surprise": 2.3235509395599365,
            "neutral": 1.3695869445800781
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 979,
            "y": 454,
            "w": 85,
            "h": 85,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 77.16272735595703,
            "Man": 22.8372745513916
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 13.502378463745117,
            "indian": 3.4108235836029053,
            "black": 0.8576200604438782,
            "white": 47.20188522338867,
            "middle eastern": 13.799886703491211,
            "latino hispanic": 21.22740364074707
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.862722224885374e-09,
            "disgust": 8.464059734667427e-15,
            "fear": 1.2788265166818746e-06,
            "happy": 100.0,
            "sad": 1.4454701613431098e-06,
            "surprise": 6.9673480318499514e-09,
            "neutral": 4.514174918313074e-07
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 219,
            "y": 475,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.4050896465778351,
            "Man": 99.59490203857422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 29.55719757080078,
            "indian": 3.216322898864746,
            "black": 1.4721393585205078,
            "white": 38.668853759765625,
            "middle eastern": 9.909041404724121,
            "latino hispanic": 17.176448822021484
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.64656254981233e-11,
            "disgust": 2.404980323009442e-24,
            "fear": 2.921886690931963e-11,
            "happy": 99.99991607666016,
            "sad": 2.872143856080811e-09,
            "surprise": 2.358542527947094e-11,
            "neutral": 8.597803389420733e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 400,
            "y": 514,
            "w": 79,
            "h": 79,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 6.516721725463867,
            "Man": 93.48328399658203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1821964681148529,
            "indian": 1.7265300750732422,
            "black": 0.22271175682544708,
            "white": 60.382789611816406,
            "middle eastern": 18.776403427124023,
            "latino hispanic": 18.70936393737793
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0010606563882902265,
            "disgust": 5.154240749483119e-12,
            "fear": 0.00014741654740646482,
            "happy": 99.99571990966797,
            "sad": 5.168402822164353e-06,
            "surprise": 7.797753823979292e-06,
            "neutral": 0.0030601120088249445
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 825,
            "y": 444,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.17667078971862793,
            "Man": 99.82333374023438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.026406412944197655,
            "indian": 0.106207475066185,
            "black": 0.0038950652815401554,
            "white": 83.53753662109375,
            "middle eastern": 8.221753120422363,
            "latino hispanic": 8.104206085205078
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.58109103521565e-06,
            "disgust": 9.103667508725266e-08,
            "fear": 4.863666254095733e-05,
            "happy": 99.97801208496094,
            "sad": 0.006136885844171047,
            "surprise": 5.819358557346277e-05,
            "neutral": 0.01573159731924534
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 704,
            "y": 508,
            "w": 92,
            "h": 92,
            "left_eye": [
                764,
                542
            ],
            "right_eye": [
                733,
                542
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.3482365012168884,
            "Man": 99.65176391601562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.012412077747285366,
            "indian": 0.5045033693313599,
            "black": 0.006643244531005621,
            "white": 68.81330871582031,
            "middle eastern": 19.055463790893555,
            "latino hispanic": 11.607664108276367
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.1383829107435304e-07,
            "disgust": 3.346533770584581e-12,
            "fear": 8.698297193632243e-08,
            "happy": 98.56620788574219,
            "sad": 2.0261261397536146e-06,
            "surprise": 0.0020692460238933563,
            "neutral": 1.4317293167114258
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 5,
            "y": 515,
            "w": 89,
            "h": 89,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 98.86457061767578,
            "Man": 1.1354341506958008
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 9.472590446472168,
            "indian": 6.656498432159424,
            "black": 1.8209829330444336,
            "white": 37.5611457824707,
            "middle eastern": 24.792390823364258,
            "latino hispanic": 19.696386337280273
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0004187867452856153,
            "disgust": 4.099597397666521e-11,
            "fear": 6.372045027092099e-05,
            "happy": 99.62352752685547,
            "sad": 0.0003614808083511889,
            "surprise": 8.158311857187073e-07,
            "neutral": 0.37562328577041626
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 1078,
            "y": 567,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 69.83526611328125,
            "Man": 30.164735794067383
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00013018415484111756,
            "indian": 0.00013307960762176663,
            "black": 2.9584693947981577e-06,
            "white": 99.71519470214844,
            "middle eastern": 0.22351336479187012,
            "latino hispanic": 0.061017896980047226
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 65.23138427734375,
            "disgust": 4.982360124472507e-08,
            "fear": 0.09369425475597382,
            "happy": 34.668701171875,
            "sad": 0.0022123530507087708,
            "surprise": 1.639479523873888e-05,
            "neutral": 0.0039961370639503
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 34,
        "region": {
            "x": 1185,
            "y": 471,
            "w": 87,
            "h": 87,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 75.79563903808594,
            "Man": 24.204360961914062
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.24654483795166,
            "indian": 7.869277000427246,
            "black": 0.7357434034347534,
            "white": 49.27254104614258,
            "middle eastern": 22.016582489013672,
            "latino hispanic": 16.85931968688965
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 61.569091796875,
            "disgust": 3.354520217158097e-08,
            "fear": 0.01963229663670063,
            "happy": 38.089622497558594,
            "sad": 0.029752217233181,
            "surprise": 0.0006510658422484994,
            "neutral": 0.29124146699905396
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 22,
        "region": {
            "x": 888,
            "y": 550,
            "w": 88,
            "h": 88,
            "left_eye": [
                946,
                583
            ],
            "right_eye": [
                915,
                583
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 43.99766159057617,
            "Man": 56.00233840942383
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.0022356510162354,
            "indian": 1.968785047531128,
            "black": 0.07332579791545868,
            "white": 59.431182861328125,
            "middle eastern": 20.819026947021484,
            "latino hispanic": 16.705442428588867
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0076826129079564e-06,
            "disgust": 1.912863313927038e-12,
            "fear": 1.029450345413352e-06,
            "happy": 99.96369171142578,
            "sad": 1.782579602149781e-05,
            "surprise": 0.0001660774723859504,
            "neutral": 0.03612741082906723
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 41,
        "region": {
            "x": 584,
            "y": 587,
            "w": 89,
            "h": 89,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 12.87270450592041,
            "Man": 87.12728881835938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.7534515857696533,
            "indian": 0.9775168895721436,
            "black": 0.20122520625591278,
            "white": 78.05731964111328,
            "middle eastern": 12.429176330566406,
            "latino hispanic": 5.581303119659424
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00013550053699873388,
            "disgust": 5.4411831505897303e-17,
            "fear": 6.299483601424072e-09,
            "happy": 99.98800659179688,
            "sad": 1.5078633452958456e-07,
            "surprise": 4.702196676475978e-08,
            "neutral": 0.011852010153234005
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 38,
        "region": {
            "x": 968,
            "y": 691,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 6.376669406890869,
            "Man": 93.62332916259766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 37.039886474609375,
            "indian": 4.997809886932373,
            "black": 2.9107728004455566,
            "white": 25.320281982421875,
            "middle eastern": 12.65417766571045,
            "latino hispanic": 17.077068328857422
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.23536686599254608,
            "disgust": 3.406359246582724e-05,
            "fear": 57.630611419677734,
            "happy": 22.88812255859375,
            "sad": 18.619775772094727,
            "surprise": 0.0013506226241588593,
            "neutral": 0.6247334480285645
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 27,
        "region": {
            "x": 1045,
            "y": 739,
            "w": 91,
            "h": 91,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.043278470635414124,
            "Man": 99.95671844482422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.72676157951355,
            "indian": 0.9810339212417603,
            "black": 0.18741914629936218,
            "white": 65.35307312011719,
            "middle eastern": 14.18301010131836,
            "latino hispanic": 16.568693161010742
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 11.785865783691406,
            "disgust": 6.087132930755615,
            "fear": 23.55563735961914,
            "happy": 0.007002446334809065,
            "sad": 45.9732551574707,
            "surprise": 0.1382160782814026,
            "neutral": 12.452889442443848
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 40,
        "region": {
            "x": 64,
            "y": 748,
            "w": 89,
            "h": 89,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 4.443232536315918,
            "Man": 95.55677032470703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 20.085668563842773,
            "indian": 13.848551750183105,
            "black": 6.638895511627197,
            "white": 16.720922470092773,
            "middle eastern": 15.730630874633789,
            "latino hispanic": 26.97532844543457
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.2028193473815918,
            "disgust": 2.1536679106759493e-09,
            "fear": 0.0016920368652790785,
            "happy": 79.6430892944336,
            "sad": 0.027218623086810112,
            "surprise": 7.750851364107803e-05,
            "neutral": 20.125104904174805
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 794,
            "y": 710,
            "w": 102,
            "h": 102,
            "left_eye": [
                860,
                749
            ],
            "right_eye": [
                825,
                752
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0076416558586061,
            "Man": 99.99235534667969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.09250638633966446,
            "indian": 0.6086986660957336,
            "black": 0.031602535396814346,
            "white": 67.49855041503906,
            "middle eastern": 21.560096740722656,
            "latino hispanic": 10.208550453186035
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.14276687800884247,
            "disgust": 0.001468793605454266,
            "fear": 0.13631591200828552,
            "happy": 25.900720596313477,
            "sad": 15.401200294494629,
            "surprise": 0.006797061767429113,
            "neutral": 58.41073226928711
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 276,
            "y": 806,
            "w": 90,
            "h": 90,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 66.28487396240234,
            "Man": 33.71513366699219
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 10.112696647644043,
            "indian": 11.072070121765137,
            "black": 3.341198682785034,
            "white": 26.86711311340332,
            "middle eastern": 27.378522872924805,
            "latino hispanic": 21.22840118408203
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 9.235920117589558e-08,
            "disgust": 9.93893438708272e-17,
            "fear": 2.3123140735492598e-08,
            "happy": 99.97624206542969,
            "sad": 1.97626278009011e-07,
            "surprise": 3.6950041248928756e-08,
            "neutral": 0.02376035787165165
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 475,
            "y": 817,
            "w": 91,
            "h": 91,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.033880386501550674,
            "Man": 99.96611785888672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00010772560199256986,
            "indian": 0.00028001144528388977,
            "black": 5.796268851554487e-06,
            "white": 99.12297821044922,
            "middle eastern": 0.6504338979721069,
            "latino hispanic": 0.2261958122253418
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 36.131439208984375,
            "disgust": 8.560485653674732e-09,
            "fear": 0.00422242283821106,
            "happy": 11.001962661743164,
            "sad": 0.13609488308429718,
            "surprise": 0.0020834780298173428,
            "neutral": 52.72419357299805
        },
        "dominant_emotion": "neutral"
    }
]

console.log("Meta Results for Kindergarten Teacher:");
const data = kindergarten_teacher_data.concat(kindergarten_teacher_data2, kindergarten_teacher_data3);
console.log(processData(data));