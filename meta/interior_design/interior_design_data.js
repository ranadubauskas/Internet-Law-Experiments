const { processData } = require('../../data_processing.js');

let interior_design_data = [
    {
        "age": 28,
        "region": {
            "x": 525,
            "y": 0,
            "w": 80,
            "h": 80,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 2.53110933303833,
            "Man": 97.46888732910156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 81.64608764648438,
            "indian": 0.10233620554208755,
            "black": 0.012659987434744835,
            "white": 15.797455787658691,
            "middle eastern": 0.9390266537666321,
            "latino hispanic": 1.502436876296997
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.5889829397201538,
            "disgust": 1.320661828818277e-22,
            "fear": 5.6221194366656846e-11,
            "happy": 0.017974669113755226,
            "sad": 0.000745164230465889,
            "surprise": 4.932113029099128e-07,
            "neutral": 99.39229583740234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 1129,
            "y": 0,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 89.8619155883789,
            "Man": 10.138087272644043
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.489581108093262,
            "indian": 3.9519805908203125,
            "black": 1.7681405544281006,
            "white": 37.295562744140625,
            "middle eastern": 20.19111442565918,
            "latino hispanic": 30.303627014160156
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5272797346115112,
            "disgust": 7.9548163967047e-07,
            "fear": 0.5892890691757202,
            "happy": 0.5691016316413879,
            "sad": 2.802295207977295,
            "surprise": 0.002311438787728548,
            "neutral": 95.50972747802734
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 0,
            "y": 15,
            "w": 84,
            "h": 84,
            "left_eye": [
                49,
                49
            ],
            "right_eye": [
                18,
                47
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 3.198683738708496,
            "Man": 96.80130767822266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.684625625610352,
            "indian": 33.39723205566406,
            "black": 9.577534675598145,
            "white": 9.303023338317871,
            "middle eastern": 10.425539016723633,
            "latino hispanic": 29.612049102783203
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 2.8033246053382754e-05,
            "disgust": 9.927780125762453e-11,
            "fear": 0.0009548834641464055,
            "happy": 82.94088745117188,
            "sad": 0.003532750764861703,
            "surprise": 0.0079983901232481,
            "neutral": 17.046602249145508
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 139,
            "y": 25,
            "w": 102,
            "h": 102,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.009540955536067486,
            "Man": 99.99046325683594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.050573818385601044,
            "indian": 2.8234591484069824,
            "black": 0.04933001101016998,
            "white": 22.405088424682617,
            "middle eastern": 65.04474639892578,
            "latino hispanic": 9.626810073852539
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.013834970071911812,
            "disgust": 2.103719759158351e-12,
            "fear": 0.0014071271289139986,
            "happy": 0.00030959310242906213,
            "sad": 0.11759734153747559,
            "surprise": 6.84622023072734e-07,
            "neutral": 99.86685180664062
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 1043,
            "y": 26,
            "w": 85,
            "h": 85,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 28.11054801940918,
            "Man": 71.88945007324219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.1234776973724365,
            "indian": 1.3315696716308594,
            "black": 0.23199643194675446,
            "white": 66.38729858398438,
            "middle eastern": 14.017406463623047,
            "latino hispanic": 16.908254623413086
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.6867499351501465,
            "disgust": 0.006558684166520834,
            "fear": 0.7772247195243835,
            "happy": 5.025564670562744,
            "sad": 77.60870361328125,
            "surprise": 0.0014684717170894146,
            "neutral": 15.893733024597168
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 35,
        "region": {
            "x": 436,
            "y": 39,
            "w": 93,
            "h": 93,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 41.442222595214844,
            "Man": 58.557777404785156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.9468327760696411,
            "indian": 9.080924034118652,
            "black": 1.4184393882751465,
            "white": 31.055986404418945,
            "middle eastern": 31.6777400970459,
            "latino hispanic": 24.82008171081543
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.6659308671951294,
            "disgust": 8.742927803950806e-08,
            "fear": 0.03027850203216076,
            "happy": 37.815582275390625,
            "sad": 0.8295155167579651,
            "surprise": 0.001977692823857069,
            "neutral": 60.656715393066406
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 669,
            "y": 167,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.17530059814453,
            "Man": 0.8247019648551941
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.05953094735741615,
            "indian": 0.06719095259904861,
            "black": 0.0015650591813027859,
            "white": 85.18299865722656,
            "middle eastern": 4.715693473815918,
            "latino hispanic": 9.97301959991455
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0003768246388062835,
            "disgust": 1.587434697580825e-11,
            "fear": 2.9381950298557058e-05,
            "happy": 92.97074890136719,
            "sad": 0.004205532371997833,
            "surprise": 0.3382911682128906,
            "neutral": 6.6863484382629395
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 559,
            "y": 91,
            "w": 81,
            "h": 81,
            "left_eye": [
                616,
                124
            ],
            "right_eye": [
                584,
                123
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 98.87214660644531,
            "Man": 1.1278616189956665
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.05085393041372299,
            "indian": 0.36759820580482483,
            "black": 0.015333998948335648,
            "white": 71.23420715332031,
            "middle eastern": 15.774166107177734,
            "latino hispanic": 12.557840347290039
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.670581340789795,
            "disgust": 0.0011613378301262856,
            "fear": 7.312359809875488,
            "happy": 29.46213150024414,
            "sad": 7.498511791229248,
            "surprise": 0.0946909561753273,
            "neutral": 53.960567474365234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 924,
            "y": 33,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 9.965914726257324,
            "Man": 90.03408813476562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 30.175193786621094,
            "indian": 4.506828308105469,
            "black": 3.0854642391204834,
            "white": 34.126800537109375,
            "middle eastern": 10.795604705810547,
            "latino hispanic": 17.31011390686035
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.2819405198097229,
            "disgust": 3.0389783205464482e-06,
            "fear": 30.976512908935547,
            "happy": 0.02050778828561306,
            "sad": 55.79586410522461,
            "surprise": 0.00010788226063596085,
            "neutral": 12.92505931854248
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 774,
            "y": 48,
            "w": 87,
            "h": 87,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.00035930288140662014,
            "Man": 99.99964141845703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.009418632835149765,
            "indian": 0.8742778301239014,
            "black": 0.014319849200546741,
            "white": 55.93307876586914,
            "middle eastern": 37.73871994018555,
            "latino hispanic": 5.430187225341797
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5413207411766052,
            "disgust": 8.34245565783931e-06,
            "fear": 0.1318601369857788,
            "happy": 0.06871344894170761,
            "sad": 23.916259765625,
            "surprise": 6.44462343188934e-05,
            "neutral": 75.3417739868164
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 554,
            "y": 189,
            "w": 95,
            "h": 95,
            "left_eye": [
                620,
                227
            ],
            "right_eye": [
                583,
                227
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.07293135672807693,
            "Man": 99.92707061767578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 16.80769920349121,
            "indian": 13.264785766601562,
            "black": 6.407742023468018,
            "white": 12.636025428771973,
            "middle eastern": 8.261613845825195,
            "latino hispanic": 42.622135162353516
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.014941755682229996,
            "disgust": 1.287501618207898e-05,
            "fear": 0.07320819050073624,
            "happy": 96.62435913085938,
            "sad": 0.29865020513534546,
            "surprise": 0.038520727306604385,
            "neutral": 2.9503111839294434
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 167,
            "y": 139,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 18.414554595947266,
            "Man": 81.58544158935547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.4720996022224426,
            "indian": 0.3143497109413147,
            "black": 0.042409516870975494,
            "white": 90.98170471191406,
            "middle eastern": 4.130431652069092,
            "latino hispanic": 4.059001922607422
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.36823520064353943,
            "disgust": 1.882987689383331e-12,
            "fear": 0.18007253110408783,
            "happy": 96.37371063232422,
            "sad": 0.06112314760684967,
            "surprise": 4.7550702930720945e-08,
            "neutral": 3.0168540477752686
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 874,
            "y": 121,
            "w": 79,
            "h": 79,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 55.51445388793945,
            "Man": 44.48554992675781
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.9437947273254395,
            "indian": 4.570052146911621,
            "black": 1.1799460649490356,
            "white": 45.634212493896484,
            "middle eastern": 21.032012939453125,
            "latino hispanic": 24.639978408813477
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5869234800338745,
            "disgust": 2.028495327976998e-05,
            "fear": 0.00158183672465384,
            "happy": 70.32709503173828,
            "sad": 21.430362701416016,
            "surprise": 0.00011284017818979919,
            "neutral": 7.653907775878906
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 1064,
            "y": 140,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 49.52116394042969,
            "Man": 50.47883224487305
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.70401930809021,
            "indian": 5.336893081665039,
            "black": 1.9557826519012451,
            "white": 31.737598419189453,
            "middle eastern": 20.9528751373291,
            "latino hispanic": 37.31283187866211
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.023580940440297127,
            "disgust": 1.851612751124776e-06,
            "fear": 0.8700042963027954,
            "happy": 68.37869262695312,
            "sad": 2.813058614730835,
            "surprise": 0.0010728129418566823,
            "neutral": 27.91358757019043
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 1236,
            "y": 55,
            "w": 43,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 2.016538619995117,
            "Man": 97.98345947265625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.8400564739713445e-06,
            "indian": 1.768813126545865e-05,
            "black": 3.717823560123179e-08,
            "white": 99.84188842773438,
            "middle eastern": 0.12205951660871506,
            "latino hispanic": 0.036031294614076614
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.15904724597930908,
            "disgust": 0.0004832721606362611,
            "fear": 0.00950305163860321,
            "happy": 0.006446615792810917,
            "sad": 80.86470031738281,
            "surprise": 1.054363019648008e-05,
            "neutral": 18.959810256958008
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 38,
        "region": {
            "x": 626,
            "y": 52,
            "w": 94,
            "h": 94,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.013652260415256023,
            "Man": 99.9863510131836
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.3497198820114136,
            "indian": 1.9255261421203613,
            "black": 0.21303783357143402,
            "white": 56.43756866455078,
            "middle eastern": 30.232423782348633,
            "latino hispanic": 10.841723442077637
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 10.048853874206543,
            "disgust": 3.866646147798747e-05,
            "fear": 0.49360284209251404,
            "happy": 0.011823139153420925,
            "sad": 9.885751724243164,
            "surprise": 0.00040205774712376297,
            "neutral": 79.55953216552734
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 48,
            "y": 145,
            "w": 85,
            "h": 85,
            "left_eye": [
                107,
                177
            ],
            "right_eye": [
                73,
                179
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 97.59838104248047,
            "Man": 2.401623010635376
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.859410285949707,
            "indian": 7.176636695861816,
            "black": 6.166364669799805,
            "white": 9.353880882263184,
            "middle eastern": 4.8794684410095215,
            "latino hispanic": 63.56423568725586
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0001311357191298157,
            "disgust": 3.82715283075985e-11,
            "fear": 0.00025315769016742706,
            "happy": 86.73670196533203,
            "sad": 0.02184302546083927,
            "surprise": 1.8624321222305298,
            "neutral": 11.378643035888672
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 260,
            "y": 62,
            "w": 84,
            "h": 84,
            "left_eye": [
                318,
                95
            ],
            "right_eye": [
                286,
                96
            ]
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 99.99781799316406,
            "Man": 0.002178796799853444
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.07280880957841873,
            "indian": 0.011052403599023819,
            "black": 0.0005515287048183382,
            "white": 97.43206787109375,
            "middle eastern": 0.8435384035110474,
            "latino hispanic": 1.6399794816970825
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0001742643362376839,
            "disgust": 9.3059273394841e-13,
            "fear": 1.334426760673523,
            "happy": 97.3794937133789,
            "sad": 1.0280743837356567,
            "surprise": 0.0035692753735929728,
            "neutral": 0.2542515993118286
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 237,
            "y": 141,
            "w": 106,
            "h": 106,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.04648416489362717,
            "Man": 99.95352172851562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.065871238708496,
            "indian": 8.260631561279297,
            "black": 2.2664878368377686,
            "white": 29.878150939941406,
            "middle eastern": 28.35019302368164,
            "latino hispanic": 27.178674697875977
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.3177555956644937e-05,
            "disgust": 1.108998309851117e-12,
            "fear": 7.784614730610429e-09,
            "happy": 99.5009765625,
            "sad": 0.0004776569548994303,
            "surprise": 1.9102595615549944e-05,
            "neutral": 0.49852144718170166
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 377,
            "y": 134,
            "w": 104,
            "h": 104,
            "left_eye": [
                449,
                175
            ],
            "right_eye": [
                412,
                173
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.027310749515891075,
            "Man": 99.97268676757812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.015228260308504105,
            "indian": 1.3266421556472778,
            "black": 0.009155871346592903,
            "white": 39.86550521850586,
            "middle eastern": 51.88705825805664,
            "latino hispanic": 6.896420955657959
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.00336260674521327,
            "disgust": 3.9605048407498344e-11,
            "fear": 2.7791868433268974e-06,
            "happy": 34.480743408203125,
            "sad": 0.036854155361652374,
            "surprise": 0.0006134838331490755,
            "neutral": 65.47842407226562
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 981,
            "y": 357,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.99,
        "gender": {
            "Woman": 10.0786771774292,
            "Man": 89.92131805419922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.086033821105957,
            "indian": 0.6738109588623047,
            "black": 0.2690533995628357,
            "white": 72.51287078857422,
            "middle eastern": 16.94267463684082,
            "latino hispanic": 5.515558242797852
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.6627516746521,
            "disgust": 6.211300933500752e-05,
            "fear": 35.481021881103516,
            "happy": 6.919520378112793,
            "sad": 0.9305834770202637,
            "surprise": 11.299992561340332,
            "neutral": 39.70606994628906
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 965,
            "y": 225,
            "w": 109,
            "h": 109,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.93201446533203,
            "Man": 0.06798503547906876
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.062372270971536636,
            "indian": 4.839503162656911e-05,
            "black": 1.1977392659900943e-06,
            "white": 99.77812957763672,
            "middle eastern": 0.04583923518657684,
            "latino hispanic": 0.11359463632106781
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.019207797944545746,
            "disgust": 1.541424580864259e-06,
            "fear": 96.4679946899414,
            "happy": 0.6852056980133057,
            "sad": 0.5650424957275391,
            "surprise": 0.007463003508746624,
            "neutral": 2.2550854682922363
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 33,
        "region": {
            "x": 107,
            "y": 233,
            "w": 112,
            "h": 112,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 36.92658233642578,
            "Man": 63.07341384887695
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.196934223175049,
            "indian": 2.7851040363311768,
            "black": 3.876187324523926,
            "white": 46.33758544921875,
            "middle eastern": 14.996610641479492,
            "latino hispanic": 27.807579040527344
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00036691047716885805,
            "disgust": 1.5391993235525092e-09,
            "fear": 0.0007906823884695768,
            "happy": 98.70490264892578,
            "sad": 0.005613388027995825,
            "surprise": 0.024551402777433395,
            "neutral": 1.263770341873169
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 437,
            "y": 239,
            "w": 111,
            "h": 111,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 97.37288665771484,
            "Man": 2.6271142959594727
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.00742938622534e-08,
            "indian": 1.6112205969420756e-07,
            "black": 5.959557153323303e-11,
            "white": 99.98237609863281,
            "middle eastern": 0.012900064699351788,
            "latino hispanic": 0.004730730317533016
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.003912799060344696,
            "disgust": 2.0601819983312453e-07,
            "fear": 0.19519148766994476,
            "happy": 6.348058700561523,
            "sad": 1.5293326377868652,
            "surprise": 0.0014224877813830972,
            "neutral": 91.92208099365234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 821,
            "y": 201,
            "w": 97,
            "h": 97,
            "left_eye": [
                890,
                241
            ],
            "right_eye": [
                851,
                238
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 67.9775619506836,
            "Man": 32.02244186401367
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.4395895302295685,
            "indian": 0.6024909615516663,
            "black": 0.06532880663871765,
            "white": 79.2900390625,
            "middle eastern": 6.951815605163574,
            "latino hispanic": 12.650736808776855
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.0362443923950195,
            "disgust": 0.0015544489724561572,
            "fear": 8.885327339172363,
            "happy": 0.06294222921133041,
            "sad": 87.57877349853516,
            "surprise": 0.0021677264012396336,
            "neutral": 0.4329901933670044
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 49,
        "region": {
            "x": 655,
            "y": 244,
            "w": 121,
            "h": 121,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.013812297023832798,
            "Man": 99.9861831665039
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.812075975583866e-06,
            "indian": 6.329295865725726e-05,
            "black": 2.0889345364594192e-07,
            "white": 99.47007751464844,
            "middle eastern": 0.4489624500274658,
            "latino hispanic": 0.08089208602905273
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.02506249211728573,
            "disgust": 1.581305919540199e-10,
            "fear": 0.06237539276480675,
            "happy": 1.8134409189224243,
            "sad": 1.4982414245605469,
            "surprise": 2.8737946195178665e-05,
            "neutral": 96.60084533691406
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 44,
        "region": {
            "x": 302,
            "y": 289,
            "w": 124,
            "h": 124,
            "left_eye": [
                382,
                335
            ],
            "right_eye": [
                342,
                335
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.025228675454854965,
            "Man": 99.97476959228516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2950282096862793,
            "indian": 1.1024599075317383,
            "black": 0.0597660169005394,
            "white": 68.90779113769531,
            "middle eastern": 14.099397659301758,
            "latino hispanic": 15.535554885864258
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.1828969419002533,
            "disgust": 2.182295233410514e-08,
            "fear": 0.012759724631905556,
            "happy": 18.56632423400879,
            "sad": 0.059089336544275284,
            "surprise": 0.009803627617657185,
            "neutral": 81.16912841796875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 836,
            "y": 311,
            "w": 108,
            "h": 108,
            "left_eye": [
                914,
                354
            ],
            "right_eye": [
                867,
                358
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.84188079833984,
            "Man": 0.1581200510263443
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.5263491868972778,
            "indian": 6.0270514488220215,
            "black": 2.108621120452881,
            "white": 35.663917541503906,
            "middle eastern": 23.45369529724121,
            "latino hispanic": 31.220365524291992
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.8681706933421083e-05,
            "disgust": 4.001976805501073e-10,
            "fear": 0.0007989623118191957,
            "happy": 99.7152099609375,
            "sad": 0.0004555445339065045,
            "surprise": 0.023847317323088646,
            "neutral": 0.25967302918434143
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 1156,
            "y": 314,
            "w": 112,
            "h": 112,
            "left_eye": [
                1230,
                355
            ],
            "right_eye": [
                1190,
                362
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 17.880165100097656,
            "Man": 82.11984252929688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.05792655795812607,
            "indian": 0.052119091153144836,
            "black": 0.0032762123737484217,
            "white": 92.5028076171875,
            "middle eastern": 3.149679183959961,
            "latino hispanic": 4.234195709228516
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.883289588837215e-08,
            "disgust": 7.590624240272348e-10,
            "fear": 2.9989828931320517e-07,
            "happy": 98.00521087646484,
            "sad": 7.828908564988524e-05,
            "surprise": 0.0001090416481019929,
            "neutral": 1.9946019649505615
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 543,
            "y": 352,
            "w": 136,
            "h": 136,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.09050756692886353,
            "Man": 99.90950012207031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0006122660124674439,
            "indian": 0.03263479471206665,
            "black": 0.00017237737483810633,
            "white": 81.29007720947266,
            "middle eastern": 16.24492645263672,
            "latino hispanic": 2.431579828262329
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.3438715934753418,
            "disgust": 8.743949365452863e-06,
            "fear": 1.05641770362854,
            "happy": 0.0023409444838762283,
            "sad": 16.033199310302734,
            "surprise": 0.0003387319156900048,
            "neutral": 81.56382751464844
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 3,
            "y": 382,
            "w": 142,
            "h": 142,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 97.52882385253906,
            "Man": 2.4711835384368896
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.114558219909668,
            "indian": 0.1925755888223648,
            "black": 0.024012748152017593,
            "white": 84.24928283691406,
            "middle eastern": 4.521840572357178,
            "latino hispanic": 7.897731304168701
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0046248468570411205,
            "disgust": 3.144229043794411e-10,
            "fear": 0.012173036113381386,
            "happy": 0.5022120475769043,
            "sad": 0.01008207630366087,
            "surprise": 9.650210267864168e-05,
            "neutral": 99.4708023071289
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 1050,
            "y": 410,
            "w": 118,
            "h": 118,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 91.22525787353516,
            "Man": 8.774739265441895
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.7962433048523962e-05,
            "indian": 7.859907782403752e-06,
            "black": 2.765754913980345e-08,
            "white": 99.95079040527344,
            "middle eastern": 0.032368920743465424,
            "latino hispanic": 0.016819637268781662
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.09550300240516663,
            "disgust": 7.240482204906584e-07,
            "fear": 0.0047125061973929405,
            "happy": 39.93976974487305,
            "sad": 0.3469906151294708,
            "surprise": 0.0004342774045653641,
            "neutral": 59.61258316040039
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 897,
            "y": 450,
            "w": 129,
            "h": 129,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.95344543457031,
            "Man": 0.04655202850699425
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.292306599040785e-08,
            "indian": 7.816696268037049e-08,
            "black": 7.0852572940649505e-12,
            "white": 99.9927749633789,
            "middle eastern": 0.006206738296896219,
            "latino hispanic": 0.0010197879746556282
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0012047627242282033,
            "disgust": 1.0113145638577983e-14,
            "fear": 6.172520983227514e-08,
            "happy": 96.32382202148438,
            "sad": 5.336675530998036e-05,
            "surprise": 1.3175297226553084e-06,
            "neutral": 3.6749165058135986
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 386,
            "y": 462,
            "w": 144,
            "h": 144,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.1735725849866867,
            "Man": 99.82642364501953
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.7587008476257324,
            "indian": 6.218749046325684,
            "black": 0.9661917090415955,
            "white": 35.66775131225586,
            "middle eastern": 18.937572479248047,
            "latino hispanic": 34.45103454589844
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.450026273727417,
            "disgust": 0.00012044022150803357,
            "fear": 10.809394836425781,
            "happy": 0.0038973409682512283,
            "sad": 79.03629302978516,
            "surprise": 0.0006081965984776616,
            "neutral": 6.699669361114502
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 30,
        "region": {
            "x": 153,
            "y": 491,
            "w": 150,
            "h": 150,
            "left_eye": [
                249,
                546
            ],
            "right_eye": [
                202,
                548
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 2.738591194152832,
            "Man": 97.26141357421875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.3424941897392273,
            "indian": 0.9515774250030518,
            "black": 0.10386291146278381,
            "white": 74.72098541259766,
            "middle eastern": 11.30785083770752,
            "latino hispanic": 12.57323169708252
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.372465968132019,
            "disgust": 1.1552240408718717e-07,
            "fear": 0.1592300981283188,
            "happy": 0.0590163879096508,
            "sad": 7.392247200012207,
            "surprise": 1.6095591490739025e-05,
            "neutral": 91.01702880859375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 724,
            "y": 489,
            "w": 128,
            "h": 128,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 8.429572105407715,
            "Man": 91.5704345703125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00015133421402424574,
            "indian": 0.002599552972242236,
            "black": 9.128561032412108e-06,
            "white": 95.0615005493164,
            "middle eastern": 3.870558738708496,
            "latino hispanic": 1.0651805400848389
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.01743282750248909,
            "disgust": 1.6062413124018349e-06,
            "fear": 0.23133067786693573,
            "happy": 71.82667541503906,
            "sad": 0.5180656909942627,
            "surprise": 0.011994223110377789,
            "neutral": 27.39450454711914
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 768,
            "y": 613,
            "w": 132,
            "h": 132,
            "left_eye": [
                858,
                662
            ],
            "right_eye": [
                808,
                664
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.2048274278640747,
            "Man": 99.79518127441406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.02699158526957035,
            "indian": 0.02676108293235302,
            "black": 0.001865028403699398,
            "white": 93.1604995727539,
            "middle eastern": 4.270336627960205,
            "latino hispanic": 2.5135512351989746
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0021232853177934885,
            "disgust": 2.1394177451838914e-07,
            "fear": 0.07927996665239334,
            "happy": 38.933937072753906,
            "sad": 0.45700696110725403,
            "surprise": 0.00827829074114561,
            "neutral": 60.51937484741211
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 997,
            "y": 624,
            "w": 125,
            "h": 125,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 39.034664154052734,
            "Man": 60.965335845947266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.05937489494681358,
            "indian": 0.17556282877922058,
            "black": 0.013601557351648808,
            "white": 80.8115234375,
            "middle eastern": 8.115887641906738,
            "latino hispanic": 10.82404899597168
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.577821854923059e-08,
            "disgust": 2.6542702497717174e-12,
            "fear": 2.3076704991353836e-09,
            "happy": 99.82178497314453,
            "sad": 0.0001317407441092655,
            "surprise": 3.867346094921231e-05,
            "neutral": 0.17804330587387085
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 501,
            "y": 622,
            "w": 138,
            "h": 138,
            "left_eye": [
                597,
                676
            ],
            "right_eye": [
                547,
                674
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 98.21931457519531,
            "Man": 1.7806848287582397
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.21630629897117615,
            "indian": 0.5580688118934631,
            "black": 0.02953789010643959,
            "white": 73.53130340576172,
            "middle eastern": 16.536367416381836,
            "latino hispanic": 9.128412246704102
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0014341481728479266,
            "disgust": 2.2123953710706523e-11,
            "fear": 0.0026936400681734085,
            "happy": 0.8979443311691284,
            "sad": 0.038775380700826645,
            "surprise": 0.00019401664030738175,
            "neutral": 99.0589599609375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 295,
            "y": 648,
            "w": 150,
            "h": 150,
            "left_eye": [
                396,
                708
            ],
            "right_eye": [
                344,
                704
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.25045469403266907,
            "Man": 99.74954986572266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.011753298342227936,
            "indian": 0.01989785023033619,
            "black": 0.0006436312105506659,
            "white": 95.14535522460938,
            "middle eastern": 2.949810743331909,
            "latino hispanic": 1.8725318908691406
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0005145029863342643,
            "disgust": 3.0591641575483663e-07,
            "fear": 0.013065306469798088,
            "happy": 42.79692077636719,
            "sad": 0.2773757576942444,
            "surprise": 0.001759201637469232,
            "neutral": 56.91036605834961
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 91,
            "y": 716,
            "w": 147,
            "h": 147,
            "left_eye": [
                189,
                772
            ],
            "right_eye": [
                140,
                773
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.82901000976562,
            "Man": 0.17098619043827057
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.71426391601562,
            "indian": 0.06634531915187836,
            "black": 6.427673361031339e-05,
            "white": 0.052113860845565796,
            "middle eastern": 2.244658571726177e-05,
            "latino hispanic": 0.1671903282403946
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.5469179153442383,
            "disgust": 0.007416796870529652,
            "fear": 33.170719146728516,
            "happy": 5.4618024826049805,
            "sad": 9.083459854125977,
            "surprise": 0.23787862062454224,
            "neutral": 50.49180221557617
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 1050,
            "y": 899,
            "w": 93,
            "h": 93,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 6.648617744445801,
            "Man": 93.35137939453125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.07097262144088745,
            "indian": 0.05852634087204933,
            "black": 0.003443607361987233,
            "white": 95.76092529296875,
            "middle eastern": 2.374422073364258,
            "latino hispanic": 1.7317123413085938
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.29524287581443787,
            "disgust": 1.2335123756201938e-05,
            "fear": 0.21666057407855988,
            "happy": 0.17777206003665924,
            "sad": 1.787777066230774,
            "surprise": 0.003046129597350955,
            "neutral": 97.51948547363281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 496,
            "y": 1049,
            "w": 208,
            "h": 208,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 16.278608322143555,
            "Man": 83.72138977050781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.891096591949463,
            "indian": 1.4775629043579102,
            "black": 0.17550191283226013,
            "white": 47.041656494140625,
            "middle eastern": 43.355125427246094,
            "latino hispanic": 4.059059143066406
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.03748280927538872,
            "disgust": 1.1337592909024954e-16,
            "fear": 3.1146583557128906,
            "happy": 1.2162548728156253e-06,
            "sad": 96.8478012084961,
            "surprise": 3.7300153508113e-06,
            "neutral": 4.211402119835839e-05
        },
        "dominant_emotion": "sad"
    }
]

let interior_design_data2 = [
    {
        "age": 33,
        "region": {
            "x": 528,
            "y": 131,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.03668849915266037,
            "Man": 99.96331024169922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.393241882324219,
            "indian": 11.578481674194336,
            "black": 19.087228775024414,
            "white": 13.961021423339844,
            "middle eastern": 14.314122200012207,
            "latino hispanic": 27.665897369384766
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.11176976561546326,
            "disgust": 0.0018530539236962795,
            "fear": 0.4029809832572937,
            "happy": 3.046820878982544,
            "sad": 3.0837275981903076,
            "surprise": 0.45409026741981506,
            "neutral": 92.89876556396484
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 731,
            "y": 123,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.1690838634967804,
            "Man": 99.83091735839844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0016103838570415974,
            "indian": 0.0014107071328908205,
            "black": 3.6164212360745296e-05,
            "white": 98.97119903564453,
            "middle eastern": 0.6787325143814087,
            "latino hispanic": 0.3470190465450287
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.823979106229672e-07,
            "disgust": 5.9393522936402706e-24,
            "fear": 9.685220447863685e-08,
            "happy": 4.204494871373754e-06,
            "sad": 0.0002849851152859628,
            "surprise": 2.0294717986766957e-14,
            "neutral": 99.99971008300781
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 966,
            "y": 142,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.12595148384571075,
            "Man": 99.8740463256836
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.12785530090332,
            "indian": 7.756106376647949,
            "black": 1.8171501159667969,
            "white": 35.96705627441406,
            "middle eastern": 35.25172424316406,
            "latino hispanic": 15.080114364624023
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.2385587726603262e-05,
            "disgust": 6.41374491155435e-15,
            "fear": 5.089155456516892e-05,
            "happy": 76.26835632324219,
            "sad": 0.00048574976972304285,
            "surprise": 3.6919143894920126e-05,
            "neutral": 23.731050491333008
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 234,
            "y": 152,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.2735153138637543,
            "Man": 99.72648620605469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.008532524108887,
            "indian": 10.298710823059082,
            "black": 4.3098249435424805,
            "white": 24.56186866760254,
            "middle eastern": 21.573993682861328,
            "latino hispanic": 29.2470760345459
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.2877829968929291,
            "disgust": 1.9398581230234413e-07,
            "fear": 0.017049089074134827,
            "happy": 0.09987853467464447,
            "sad": 0.8481171131134033,
            "surprise": 0.00014096095401328057,
            "neutral": 98.74703216552734
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 874,
            "y": 157,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.59874725341797,
            "Man": 0.40125373005867004
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 34.37989807128906,
            "indian": 8.945028305053711,
            "black": 6.296784400939941,
            "white": 13.422752380371094,
            "middle eastern": 9.040836334228516,
            "latino hispanic": 27.914690017700195
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.42167022824287415,
            "disgust": 0.0028859563171863556,
            "fear": 7.635798454284668,
            "happy": 87.8344497680664,
            "sad": 3.360987901687622,
            "surprise": 0.2354990392923355,
            "neutral": 0.5087153315544128
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 368,
            "y": 129,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.23902352154254913,
            "Man": 99.76097106933594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.9189842939376831,
            "indian": 2.195847511291504,
            "black": 0.22586235404014587,
            "white": 56.564605712890625,
            "middle eastern": 24.807157516479492,
            "latino hispanic": 15.2875394821167
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.07733239978551865,
            "disgust": 4.215173349253476e-12,
            "fear": 2.7624312224361347e-06,
            "happy": 0.014425702393054962,
            "sad": 0.0656544417142868,
            "surprise": 3.792426817028627e-09,
            "neutral": 99.84258270263672
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 618,
            "y": 133,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 1.1822843551635742,
            "Man": 98.81771087646484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.608435869216919,
            "indian": 2.330448627471924,
            "black": 0.5686426162719727,
            "white": 73.28974914550781,
            "middle eastern": 11.716673851013184,
            "latino hispanic": 9.486048698425293
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.010122126899659634,
            "disgust": 3.6262053981772624e-07,
            "fear": 0.0019346773624420166,
            "happy": 0.014457909390330315,
            "sad": 1.0877529382705688,
            "surprise": 3.626744558005157e-07,
            "neutral": 98.88573455810547
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 109,
            "y": 177,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 33.95228576660156,
            "Man": 66.04771423339844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 37.09360122680664,
            "indian": 8.266244888305664,
            "black": 6.603477954864502,
            "white": 15.126649856567383,
            "middle eastern": 9.88387393951416,
            "latino hispanic": 23.026153564453125
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.28117915987968445,
            "disgust": 3.2389177704317262e-06,
            "fear": 0.0072394199669361115,
            "happy": 0.961632251739502,
            "sad": 24.92165756225586,
            "surprise": 4.132681351620704e-05,
            "neutral": 73.8282470703125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 46,
        "region": {
            "x": 1070,
            "y": 147,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.13764217495918274,
            "Man": 99.86235809326172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.04336421564221382,
            "indian": 0.03301893174648285,
            "black": 0.001486642169766128,
            "white": 96.61149597167969,
            "middle eastern": 1.9320592880249023,
            "latino hispanic": 1.3785837888717651
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.6875896453857422,
            "disgust": 0.0011197231942787766,
            "fear": 0.5479005575180054,
            "happy": 0.0020875101909041405,
            "sad": 2.5973422527313232,
            "surprise": 0.0005483926506713033,
            "neutral": 95.16341400146484
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 464,
            "y": 196,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.09812017530202866,
            "Man": 99.9018783569336
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.79621958732605,
            "indian": 12.226943969726562,
            "black": 6.929972171783447,
            "white": 27.2725830078125,
            "middle eastern": 29.091413497924805,
            "latino hispanic": 20.682876586914062
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 85.55189514160156,
            "disgust": 7.589486631331965e-05,
            "fear": 0.8864763975143433,
            "happy": 0.017266403883695602,
            "sad": 1.7915877103805542,
            "surprise": 0.001817740616388619,
            "neutral": 11.750876426696777
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 28,
        "region": {
            "x": 49,
            "y": 219,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 9.601526260375977,
            "Man": 90.39847564697266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 35.59511184692383,
            "indian": 7.586658000946045,
            "black": 8.129652976989746,
            "white": 14.290714263916016,
            "middle eastern": 9.67309856414795,
            "latino hispanic": 24.724763870239258
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 12.406702041625977,
            "disgust": 5.295235633850098,
            "fear": 9.02199649810791,
            "happy": 27.992355346679688,
            "sad": 5.094457149505615,
            "surprise": 7.793488025665283,
            "neutral": 32.39577102661133
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 809,
            "y": 222,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.13394193351268768,
            "Man": 99.86605834960938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 12.360102653503418,
            "indian": 15.187573432922363,
            "black": 10.036130905151367,
            "white": 17.934814453125,
            "middle eastern": 18.189876556396484,
            "latino hispanic": 26.29150390625
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 22.56808853149414,
            "disgust": 3.0592893836001167e-06,
            "fear": 0.12116574496030807,
            "happy": 1.851616621017456,
            "sad": 0.7249565124511719,
            "surprise": 4.228038596920669e-05,
            "neutral": 74.734130859375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 40,
        "region": {
            "x": 1025,
            "y": 230,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.03104991838335991,
            "Man": 99.96895599365234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.040042128413915634,
            "indian": 0.029067758470773697,
            "black": 0.0016385151538997889,
            "white": 94.8749008178711,
            "middle eastern": 3.086822509765625,
            "latino hispanic": 1.9675257205963135
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.20599360764026642,
            "disgust": 5.326538689287563e-12,
            "fear": 0.00027821524417959154,
            "happy": 0.009041953831911087,
            "sad": 0.35751476883888245,
            "surprise": 1.2010090699732245e-07,
            "neutral": 99.42717742919922
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 705,
            "y": 234,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.81644439697266,
            "Man": 0.18355585634708405
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.6614742279052734,
            "indian": 2.455299139022827,
            "black": 0.637009859085083,
            "white": 56.052459716796875,
            "middle eastern": 15.990350723266602,
            "latino hispanic": 21.203405380249023
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.49805331230163574,
            "disgust": 0.08028366416692734,
            "fear": 16.877464294433594,
            "happy": 81.16114807128906,
            "sad": 0.1718200296163559,
            "surprise": 0.39280611276626587,
            "neutral": 0.8184162378311157
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 584,
            "y": 241,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 5.400557041168213,
            "Man": 94.59944152832031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.998539447784424,
            "indian": 6.779684543609619,
            "black": 0.8464133739471436,
            "white": 33.1116943359375,
            "middle eastern": 27.73429298400879,
            "latino hispanic": 27.52937889099121
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 19.847801208496094,
            "disgust": 0.4671449661254883,
            "fear": 0.23945428431034088,
            "happy": 0.024533070623874664,
            "sad": 54.0938606262207,
            "surprise": 0.0004862544301431626,
            "neutral": 25.326723098754883
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 34,
        "region": {
            "x": 424,
            "y": 295,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.035704292356967926,
            "Man": 99.96429443359375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 12.692967414855957,
            "indian": 7.678304672241211,
            "black": 2.4787979125976562,
            "white": 33.44490051269531,
            "middle eastern": 20.795215606689453,
            "latino hispanic": 22.909812927246094
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.993183135986328,
            "disgust": 0.0003914390108548105,
            "fear": 0.3288212716579437,
            "happy": 0.0052651348523795605,
            "sad": 9.433073997497559,
            "surprise": 0.00015279378567356616,
            "neutral": 80.2391128540039
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 359,
            "y": 381,
            "w": 78,
            "h": 78,
            "left_eye": [
                407,
                411
            ],
            "right_eye": [
                380,
                411
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.86888885498047,
            "Man": 0.13111507892608643
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 33.07662582397461,
            "indian": 9.458303451538086,
            "black": 4.67315673828125,
            "white": 7.120042324066162,
            "middle eastern": 4.423899173736572,
            "latino hispanic": 41.24797821044922
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.5036192710103933e-06,
            "disgust": 8.911197335592647e-10,
            "fear": 0.0002894000499509275,
            "happy": 99.97614288330078,
            "sad": 0.00034545865491963923,
            "surprise": 0.003586897626519203,
            "neutral": 0.019635869190096855
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 514,
            "y": 347,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 48.83387756347656,
            "Man": 51.16612243652344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 63.405799865722656,
            "indian": 1.3400397300720215,
            "black": 0.23433494567871094,
            "white": 15.152510643005371,
            "middle eastern": 1.969237208366394,
            "latino hispanic": 17.89807891845703
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.3330019414424896,
            "disgust": 0.013728335499763489,
            "fear": 0.4644858241081238,
            "happy": 30.392534255981445,
            "sad": 1.0239207744598389,
            "surprise": 1.254488468170166,
            "neutral": 66.5178451538086
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 1150,
            "y": 246,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 91.38629913330078,
            "Man": 8.613700866699219
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.7874919772148132,
            "indian": 2.709043502807617,
            "black": 0.2671167850494385,
            "white": 45.41260528564453,
            "middle eastern": 31.498905181884766,
            "latino hispanic": 19.3248348236084
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0007281632861122489,
            "disgust": 2.2303343118765598e-15,
            "fear": 5.3269850752712955e-08,
            "happy": 4.7468743324279785,
            "sad": 0.0006748636951670051,
            "surprise": 3.2914698522290564e-08,
            "neutral": 95.25172424316406
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 324,
            "y": 260,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.627236008644104,
            "Man": 99.37277221679688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 25.723526000976562,
            "indian": 16.759368896484375,
            "black": 8.905778884887695,
            "white": 10.636045455932617,
            "middle eastern": 8.033409118652344,
            "latino hispanic": 29.94188117980957
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.45848459005355835,
            "disgust": 3.2562020351178944e-05,
            "fear": 0.3018663227558136,
            "happy": 0.00561218848451972,
            "sad": 1.3263131380081177,
            "surprise": 0.00016224992577917874,
            "neutral": 97.90753173828125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 136,
            "y": 272,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.006543573457747698,
            "Man": 99.99345397949219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.44957050681114197,
            "indian": 2.2268946170806885,
            "black": 0.7064951062202454,
            "white": 56.84052658081055,
            "middle eastern": 15.580683708190918,
            "latino hispanic": 24.195823669433594
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.607052803039551,
            "disgust": 9.88047759165056e-07,
            "fear": 0.2534923851490021,
            "happy": 0.007937037386000156,
            "sad": 10.119568824768066,
            "surprise": 0.00016123984823934734,
            "neutral": 82.01178741455078
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 625,
            "y": 322,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 5.236733913421631,
            "Man": 94.76325988769531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.010235616005957127,
            "indian": 0.024962810799479485,
            "black": 0.0005411656456999481,
            "white": 93.96663665771484,
            "middle eastern": 4.775287628173828,
            "latino hispanic": 1.2223402261734009
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.608101371125997e-10,
            "disgust": 3.1357906718919715e-30,
            "fear": 6.585555804025991e-14,
            "happy": 6.481495802290738e-05,
            "sad": 1.6078038242994808e-05,
            "surprise": 3.385497735754103e-20,
            "neutral": 99.99991607666016
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 962,
            "y": 283,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.982269287109375,
            "Man": 99.01773071289062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3112537860870361,
            "indian": 2.53364634513855,
            "black": 4.9879560470581055,
            "white": 48.50241470336914,
            "middle eastern": 31.00448226928711,
            "latino hispanic": 11.660248756408691
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 10.355204582214355,
            "disgust": 0.0027553141117095947,
            "fear": 27.335742950439453,
            "happy": 1.7701972723007202,
            "sad": 8.909235954284668,
            "surprise": 4.069673538208008,
            "neutral": 47.55718994140625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 784,
            "y": 331,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.09798891842365265,
            "Man": 99.90200805664062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.21232129633426666,
            "indian": 0.7302175164222717,
            "black": 0.030041195452213287,
            "white": 73.45357513427734,
            "middle eastern": 16.252042770385742,
            "latino hispanic": 9.321797370910645
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.31037789583206177,
            "disgust": 1.39324515466277e-11,
            "fear": 0.0022948335390537977,
            "happy": 1.6347376003977843e-05,
            "sad": 0.3533989489078522,
            "surprise": 5.937080004514428e-06,
            "neutral": 99.33390808105469
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 704,
            "y": 386,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.5138036012649536,
            "Man": 99.48619079589844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 21.88827896118164,
            "indian": 6.508284568786621,
            "black": 3.3806233406066895,
            "white": 29.510324478149414,
            "middle eastern": 15.927122116088867,
            "latino hispanic": 22.785364151000977
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5457127094268799,
            "disgust": 0.002637731609866023,
            "fear": 3.13962984085083,
            "happy": 0.8470363616943359,
            "sad": 3.1815717220306396,
            "surprise": 0.005062539596110582,
            "neutral": 92.27835083007812
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 224,
            "y": 350,
            "w": 72,
            "h": 72,
            "left_eye": [
                270,
                376
            ],
            "right_eye": [
                242,
                379
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 91.2324447631836,
            "Man": 8.767557144165039
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 45.149810791015625,
            "indian": 9.081415176391602,
            "black": 5.628332614898682,
            "white": 4.873434066772461,
            "middle eastern": 2.3864586353302,
            "latino hispanic": 32.88054275512695
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 10.2223482131958,
            "disgust": 2.5919177532196045,
            "fear": 0.9906308650970459,
            "happy": 16.219255447387695,
            "sad": 0.8938946723937988,
            "surprise": 11.102950096130371,
            "neutral": 57.97900390625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 904,
            "y": 344,
            "w": 80,
            "h": 80,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.07451606541872025,
            "Man": 99.92547607421875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.012299031019210815,
            "indian": 0.034427858889102936,
            "black": 0.0007662317366339266,
            "white": 93.87133026123047,
            "middle eastern": 4.226000785827637,
            "latino hispanic": 1.8551785945892334
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.19605541229248,
            "disgust": 2.066461775029893e-07,
            "fear": 1.784484624862671,
            "happy": 48.69239044189453,
            "sad": 5.751004695892334,
            "surprise": 3.885450860252604e-05,
            "neutral": 34.57601547241211
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 997,
            "y": 343,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 90.42115783691406,
            "Man": 9.578836441040039
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.6477669477462769,
            "indian": 4.818245887756348,
            "black": 0.47258472442626953,
            "white": 37.15061950683594,
            "middle eastern": 31.172578811645508,
            "latino hispanic": 24.738197326660156
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.08939152210950851,
            "disgust": 0.04566458612680435,
            "fear": 6.299330711364746,
            "happy": 46.47584533691406,
            "sad": 9.761181831359863,
            "surprise": 0.008565629832446575,
            "neutral": 37.32001876831055
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 36,
            "y": 450,
            "w": 85,
            "h": 85,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 98.42728424072266,
            "Man": 1.572714924812317
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 13.299570083618164,
            "indian": 26.914527893066406,
            "black": 7.506792068481445,
            "white": 8.79392147064209,
            "middle eastern": 7.240376949310303,
            "latino hispanic": 36.244808197021484
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0012603169307112694,
            "disgust": 6.06130697633489e-07,
            "fear": 1.8938135326607153e-05,
            "happy": 99.36882019042969,
            "sad": 0.006777042523026466,
            "surprise": 0.005332175642251968,
            "neutral": 0.617795467376709
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 200,
            "y": 450,
            "w": 87,
            "h": 87,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 38.718116760253906,
            "Man": 61.281883239746094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 21.966928482055664,
            "indian": 9.777477264404297,
            "black": 7.313988208770752,
            "white": 16.7540283203125,
            "middle eastern": 11.815943717956543,
            "latino hispanic": 32.371639251708984
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 4.001396656036377,
            "disgust": 0.06834163516759872,
            "fear": 0.03814978152513504,
            "happy": 81.55628204345703,
            "sad": 0.016509611159563065,
            "surprise": 0.07156836986541748,
            "neutral": 14.247756004333496
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 1136,
            "y": 422,
            "w": 88,
            "h": 88,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.34694719314575195,
            "Man": 99.65306091308594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.054564476013184,
            "indian": 11.546053886413574,
            "black": 57.51903533935547,
            "white": 3.6084420680999756,
            "middle eastern": 4.2953619956970215,
            "latino hispanic": 12.976544380187988
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.47853943705558777,
            "disgust": 0.042268913239240646,
            "fear": 1.711631178855896,
            "happy": 44.019351959228516,
            "sad": 3.4442896842956543,
            "surprise": 0.00010700593702495098,
            "neutral": 50.303810119628906
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 878,
            "y": 467,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.4365757703781128,
            "Man": 98.56342315673828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.01758037880063057,
            "indian": 0.04959743097424507,
            "black": 0.0034390930086374283,
            "white": 89.44634246826172,
            "middle eastern": 4.409513473510742,
            "latino hispanic": 6.073520183563232
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 41.72153854370117,
            "disgust": 2.001254023609178e-10,
            "fear": 0.00010087544796988368,
            "happy": 42.70509338378906,
            "sad": 0.13410446047782898,
            "surprise": 4.0654081203683745e-06,
            "neutral": 15.439157485961914
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 525,
            "y": 478,
            "w": 88,
            "h": 88,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 2.6192610263824463,
            "Man": 97.38074493408203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.3839871883392334,
            "indian": 4.550151348114014,
            "black": 1.0526517629623413,
            "white": 39.830745697021484,
            "middle eastern": 23.497692108154297,
            "latino hispanic": 28.684770584106445
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.000900008890312165,
            "disgust": 2.0725895026369075e-14,
            "fear": 5.669713800671161e-07,
            "happy": 0.24602332711219788,
            "sad": 0.01845869980752468,
            "surprise": 5.245165723977152e-08,
            "neutral": 99.734619140625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 346,
            "y": 506,
            "w": 93,
            "h": 93,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.9198989868164,
            "Man": 0.08010070025920868
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 73.79448699951172,
            "indian": 8.648518562316895,
            "black": 1.496278166770935,
            "white": 5.3400044441223145,
            "middle eastern": 1.0545681715011597,
            "latino hispanic": 9.6661376953125
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 65.84000396728516,
            "disgust": 0.020027518272399902,
            "fear": 9.568267822265625,
            "happy": 0.1587686836719513,
            "sad": 12.694339752197266,
            "surprise": 0.0008772531291469932,
            "neutral": 11.717720985412598
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 33,
        "region": {
            "x": 1066,
            "y": 536,
            "w": 83,
            "h": 83,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.97737884521484,
            "Man": 0.022623002529144287
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 20.55974769592285,
            "indian": 15.651732444763184,
            "black": 10.561065673828125,
            "white": 13.197502136230469,
            "middle eastern": 14.401371002197266,
            "latino hispanic": 25.62858009338379
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.032309260219335556,
            "disgust": 1.4943392009914014e-11,
            "fear": 9.481094457441941e-05,
            "happy": 0.4967323839664459,
            "sad": 0.43743976950645447,
            "surprise": 2.0016199187011807e-07,
            "neutral": 99.03341674804688
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 656,
            "y": 523,
            "w": 77,
            "h": 77,
            "left_eye": [
                709,
                554
            ],
            "right_eye": [
                681,
                551
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.9964599609375,
            "Man": 0.0035367109812796116
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 16.64556884765625,
            "indian": 7.086105823516846,
            "black": 3.608255386352539,
            "white": 22.792909622192383,
            "middle eastern": 10.407596588134766,
            "latino hispanic": 39.45956039428711
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.10714634507894516,
            "disgust": 8.383691238122992e-06,
            "fear": 0.010656188242137432,
            "happy": 0.019139988347887993,
            "sad": 2.141411304473877,
            "surprise": 0.0002051753253908828,
            "neutral": 97.721435546875
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 864,
            "y": 584,
            "w": 92,
            "h": 92,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 61.747867584228516,
            "Man": 38.252140045166016
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.0086716413497925,
            "indian": 0.414784699678421,
            "black": 0.039279792457818985,
            "white": 82.56047058105469,
            "middle eastern": 9.429499626159668,
            "latino hispanic": 6.547301769256592
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.013499433174729347,
            "disgust": 1.9526168182348869e-10,
            "fear": 4.066893666276883e-07,
            "happy": 0.447730153799057,
            "sad": 1.9874205589294434,
            "surprise": 8.018427068157141e-12,
            "neutral": 97.55135345458984
        },
        "dominant_emotion": "neutral"
    }
]

let interior_design_data3 = [
    {
        "age": 29,
        "region": {
            "x": 660,
            "y": 130,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 9.767471313476562,
            "Man": 90.23253631591797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.027110619470477104,
            "indian": 0.05006781220436096,
            "black": 0.0019043267238885164,
            "white": 89.67237091064453,
            "middle eastern": 6.118574619293213,
            "latino hispanic": 4.129967212677002
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0010951511794701219,
            "disgust": 3.573352387320483e-06,
            "fear": 0.050220079720020294,
            "happy": 99.53533172607422,
            "sad": 0.014227080158889294,
            "surprise": 0.011643363162875175,
            "neutral": 0.3874771296977997
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 580,
            "y": 172,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.17049674689769745,
            "Man": 99.82949829101562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.922182083129883,
            "indian": 13.474712371826172,
            "black": 3.688765525817871,
            "white": 24.82659912109375,
            "middle eastern": 29.313024520874023,
            "latino hispanic": 17.774721145629883
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 95.06930541992188,
            "disgust": 0.4241066873073578,
            "fear": 0.4801919460296631,
            "happy": 0.1909412294626236,
            "sad": 2.508039951324463,
            "surprise": 0.0021861372515559196,
            "neutral": 1.3252254724502563
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 29,
        "region": {
            "x": 408,
            "y": 173,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.033255383372306824,
            "Man": 99.96674346923828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.121284008026123,
            "indian": 4.531378269195557,
            "black": 1.101783037185669,
            "white": 60.67286682128906,
            "middle eastern": 15.203291893005371,
            "latino hispanic": 13.369401931762695
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 96.97144317626953,
            "disgust": 5.942803909420036e-06,
            "fear": 0.00033039608388207853,
            "happy": 2.8130812644958496,
            "sad": 0.044911887496709824,
            "surprise": 0.00027051090728491545,
            "neutral": 0.16996414959430695
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 27,
        "region": {
            "x": 285,
            "y": 183,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 98.8248291015625,
            "Man": 1.1751686334609985
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.28449395298957825,
            "indian": 0.02352389320731163,
            "black": 99.68341827392578,
            "white": 1.5636320313205943e-05,
            "middle eastern": 2.043607992163743e-06,
            "latino hispanic": 0.00854236725717783
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.3289167881011963,
            "disgust": 0.0014493705239146948,
            "fear": 5.261900424957275,
            "happy": 90.17478942871094,
            "sad": 1.549511194229126,
            "surprise": 0.17719995975494385,
            "neutral": 2.506230115890503
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 949,
            "y": 188,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.24995224177837372,
            "Man": 99.75004577636719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.22823914885520935,
            "indian": 0.5286478996276855,
            "black": 0.10917717218399048,
            "white": 64.92603302001953,
            "middle eastern": 14.139886856079102,
            "latino hispanic": 20.06801986694336
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.237436203562538e-06,
            "disgust": 1.7419131026485957e-08,
            "fear": 0.0006053134566172957,
            "happy": 99.87326049804688,
            "sad": 0.0020702597685158253,
            "surprise": 0.0001475560711696744,
            "neutral": 0.12391854077577591
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 837,
            "y": 199,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.40816161036491394,
            "Man": 99.59184265136719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 28.493867874145508,
            "indian": 13.57136344909668,
            "black": 27.63678550720215,
            "white": 6.045697212219238,
            "middle eastern": 5.512022972106934,
            "latino hispanic": 18.740264892578125
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.8932484535034746e-05,
            "disgust": 1.0433422126254754e-08,
            "fear": 7.258808909682557e-05,
            "happy": 99.96944427490234,
            "sad": 8.226327918237075e-05,
            "surprise": 0.000515328545589,
            "neutral": 0.029831871390342712
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 740,
            "y": 209,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.81153869628906,
            "Man": 0.1884615123271942
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.22756707668304443,
            "indian": 0.1723194271326065,
            "black": 0.007771953474730253,
            "white": 82.09540557861328,
            "middle eastern": 7.23380708694458,
            "latino hispanic": 10.263132095336914
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.341779544058232e-12,
            "disgust": 5.256456721245051e-19,
            "fear": 1.0006552031427418e-08,
            "happy": 99.99982452392578,
            "sad": 6.829874998892649e-10,
            "surprise": 4.027579052490182e-06,
            "neutral": 0.00017548754112794995
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 150,
            "y": 205,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 11.099656105041504,
            "Man": 88.90034484863281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7574976682662964,
            "indian": 1.4290839433670044,
            "black": 96.31912994384766,
            "white": 0.08893012255430222,
            "middle eastern": 0.11559070646762848,
            "latino hispanic": 1.2897727489471436
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 7.509576789743733e-06,
            "disgust": 1.519232739610743e-08,
            "fear": 0.00014785995881538838,
            "happy": 99.55062103271484,
            "sad": 0.005014357622712851,
            "surprise": 0.0022513647563755512,
            "neutral": 0.4419594407081604
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 386,
            "y": 237,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.61576080322266,
            "Man": 0.3842397928237915
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 44.60541534423828,
            "indian": 19.93939971923828,
            "black": 9.365645408630371,
            "white": 1.4815165996551514,
            "middle eastern": 0.699816882610321,
            "latino hispanic": 23.908201217651367
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.32879912853240967,
            "disgust": 0.0014633367536589503,
            "fear": 0.12005998939275742,
            "happy": 99.05867767333984,
            "sad": 0.05697280168533325,
            "surprise": 0.003957167733460665,
            "neutral": 0.43007320165634155
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 622,
            "y": 218,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.9140793085098267,
            "Man": 99.08592224121094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 38.1851806640625,
            "indian": 11.703739166259766,
            "black": 6.7942609786987305,
            "white": 13.503442764282227,
            "middle eastern": 10.160818099975586,
            "latino hispanic": 19.65255355834961
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 6.892328383401036e-05,
            "disgust": 5.605723529811257e-08,
            "fear": 0.02008075639605522,
            "happy": 99.96015167236328,
            "sad": 0.011445151641964912,
            "surprise": 0.0009774737991392612,
            "neutral": 0.007277145981788635
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 497,
            "y": 216,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 89.67257690429688,
            "Man": 10.327421188354492
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 56.32585906982422,
            "indian": 14.810425758361816,
            "black": 4.668353080749512,
            "white": 3.180992603302002,
            "middle eastern": 1.8820326328277588,
            "latino hispanic": 19.1323299407959
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 8.90448791324161e-05,
            "disgust": 1.4557768963641138e-06,
            "fear": 0.007593204267323017,
            "happy": 98.51972961425781,
            "sad": 0.008011392317712307,
            "surprise": 2.688577296794392e-05,
            "neutral": 1.4645445346832275
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 904,
            "y": 267,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 98.7717514038086,
            "Man": 1.228247046470642
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 25.601970672607422,
            "indian": 8.348174095153809,
            "black": 6.714419364929199,
            "white": 13.820574760437012,
            "middle eastern": 6.824557304382324,
            "latino hispanic": 38.6903076171875
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 4.6408885623350216e-07,
            "disgust": 8.67438967877554e-11,
            "fear": 0.006321663036942482,
            "happy": 99.97007751464844,
            "sad": 8.54099853313528e-05,
            "surprise": 0.0002512578503228724,
            "neutral": 0.02325892634689808
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 1041,
            "y": 266,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 12.135716438293457,
            "Man": 87.86428833007812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.486533164978027,
            "indian": 16.820796966552734,
            "black": 4.246577262878418,
            "white": 13.218884468078613,
            "middle eastern": 38.67787170410156,
            "latino hispanic": 16.549341201782227
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 4.198856353759766,
            "disgust": 0.001313015236519277,
            "fear": 3.1058473587036133,
            "happy": 82.7000732421875,
            "sad": 2.0843796730041504,
            "surprise": 0.005246298387646675,
            "neutral": 7.904282569885254
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 64,
            "y": 278,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 7.933431625366211,
            "Man": 92.06655883789062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 97.10934448242188,
            "indian": 0.40026405453681946,
            "black": 0.1307164579629898,
            "white": 0.07360757142305374,
            "middle eastern": 0.0034078892786055803,
            "latino hispanic": 2.2826638221740723
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0004644491127692163,
            "disgust": 8.648041216474667e-07,
            "fear": 0.4305221140384674,
            "happy": 99.18850708007812,
            "sad": 0.00026719053857959807,
            "surprise": 0.009536826983094215,
            "neutral": 0.3706970810890198
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 803,
            "y": 296,
            "w": 57,
            "h": 57,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.1076091080904007,
            "Man": 99.89238739013672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.83645248413086,
            "indian": 8.46519660949707,
            "black": 3.8376290798187256,
            "white": 27.3350772857666,
            "middle eastern": 19.226837158203125,
            "latino hispanic": 30.298809051513672
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 5.8694047927856445,
            "disgust": 0.0007527392590418458,
            "fear": 5.904770851135254,
            "happy": 11.911179542541504,
            "sad": 67.72463989257812,
            "surprise": 0.011952050030231476,
            "neutral": 8.577305793762207
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 24,
        "region": {
            "x": 585,
            "y": 299,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.011525923386216164,
            "Man": 99.98847198486328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 17.416364669799805,
            "indian": 7.718887805938721,
            "black": 3.409224271774292,
            "white": 26.95733642578125,
            "middle eastern": 19.25508689880371,
            "latino hispanic": 25.24309730529785
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.5482986529823393e-06,
            "disgust": 1.2735750225690429e-14,
            "fear": 1.185546860682507e-08,
            "happy": 99.99956512451172,
            "sad": 2.753848207248666e-07,
            "surprise": 1.7828875797931687e-07,
            "neutral": 0.00043790534255094826
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 658,
            "y": 299,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.17946024239063263,
            "Man": 99.82054138183594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.654911994934082,
            "indian": 6.379859924316406,
            "black": 1.1340351104736328,
            "white": 29.18941307067871,
            "middle eastern": 28.062482833862305,
            "latino hispanic": 28.57929801940918
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.011892464011907578,
            "disgust": 0.0001373323902953416,
            "fear": 0.0445767343044281,
            "happy": 8.874058723449707,
            "sad": 1.554422378540039,
            "surprise": 0.014286180958151817,
            "neutral": 89.50062561035156
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 465,
            "y": 304,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.011034989729523659,
            "Man": 99.98896026611328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.003840923309326,
            "indian": 4.629383087158203,
            "black": 1.3395808935165405,
            "white": 39.635276794433594,
            "middle eastern": 26.45501136779785,
            "latino hispanic": 22.936908721923828
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0016367466887459159,
            "disgust": 0.00014454731717705727,
            "fear": 0.01090136170387268,
            "happy": 99.79507446289062,
            "sad": 0.001249305671080947,
            "surprise": 0.00647306302562356,
            "neutral": 0.18452134728431702
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 284,
            "y": 318,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.009226896800100803,
            "Man": 99.99077606201172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.005855168215930462,
            "indian": 0.0136954914778471,
            "black": 0.0005002331454306841,
            "white": 93.17833709716797,
            "middle eastern": 3.034341335296631,
            "latino hispanic": 3.7672717571258545
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.913451910018921,
            "disgust": 0.0005731007549911737,
            "fear": 12.47598648071289,
            "happy": 85.43473815917969,
            "sad": 0.16248659789562225,
            "surprise": 1.519821034889901e-05,
            "neutral": 0.012748204171657562
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 38,
        "region": {
            "x": 355,
            "y": 302,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 93.03263092041016,
            "Man": 6.967369556427002
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 15.730772972106934,
            "indian": 20.129682540893555,
            "black": 13.425243377685547,
            "white": 7.014735221862793,
            "middle eastern": 4.18193244934082,
            "latino hispanic": 39.51763916015625
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0003660376532934606,
            "disgust": 3.0637452255177777e-06,
            "fear": 0.051644060760736465,
            "happy": 99.9084701538086,
            "sad": 0.03758269175887108,
            "surprise": 8.165553566641393e-08,
            "neutral": 0.0019390537636354566
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 188,
            "y": 352,
            "w": 83,
            "h": 83,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.002998671028763056,
            "Man": 99.99699401855469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 19.163190841674805,
            "indian": 7.440926551818848,
            "black": 4.213433265686035,
            "white": 28.590085983276367,
            "middle eastern": 20.917577743530273,
            "latino hispanic": 19.67479133605957
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0002599600702524185,
            "disgust": 3.4277868275829935e-17,
            "fear": 2.0404739586865617e-07,
            "happy": 99.9968032836914,
            "sad": 2.37734002439538e-06,
            "surprise": 3.409338660276262e-07,
            "neutral": 0.0029306933283805847
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 1038,
            "y": 340,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 98.17217254638672,
            "Man": 1.8278237581253052
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 23.860254287719727,
            "indian": 17.215778350830078,
            "black": 22.213043212890625,
            "white": 6.653408527374268,
            "middle eastern": 6.584309101104736,
            "latino hispanic": 23.473203659057617
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 7.708287739660591e-06,
            "disgust": 4.2262632389046654e-19,
            "fear": 5.387035706405641e-09,
            "happy": 99.89085388183594,
            "sad": 3.873517016472761e-06,
            "surprise": 6.455767920243716e-09,
            "neutral": 0.10913670808076859
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 1103,
            "y": 406,
            "w": 71,
            "h": 71,
            "left_eye": [
                1146,
                430
            ],
            "right_eye": [
                1118,
                435
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 66.35018157958984,
            "Man": 33.649818420410156
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 14.962729454040527,
            "indian": 13.01767635345459,
            "black": 11.455709457397461,
            "white": 13.724976539611816,
            "middle eastern": 14.906122207641602,
            "latino hispanic": 31.932788848876953
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.00026092224288731813,
            "disgust": 1.552125428183615e-09,
            "fear": 0.0002769467537291348,
            "happy": 99.88089752197266,
            "sad": 2.8124026357545517e-05,
            "surprise": 0.00046301583643071353,
            "neutral": 0.11807651817798615
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 1158,
            "y": 282,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 16.092256546020508,
            "Man": 83.90774536132812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.373060464859009,
            "indian": 5.471479892730713,
            "black": 83.96117401123047,
            "white": 0.5130155682563782,
            "middle eastern": 0.40214839577674866,
            "latino hispanic": 7.279116630554199
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 3.441232299117303e-10,
            "disgust": 7.985182356413941e-19,
            "fear": 3.302968731855316e-10,
            "happy": 99.99996948242188,
            "sad": 2.8220661079103593e-06,
            "surprise": 5.1110150833810764e-11,
            "neutral": 2.9917586289229803e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 851,
            "y": 368,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.444021075963974,
            "Man": 99.55598449707031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.024546505883336067,
            "indian": 0.04876665025949478,
            "black": 0.002271743258461356,
            "white": 86.51349639892578,
            "middle eastern": 6.057334899902344,
            "latino hispanic": 7.353583812713623
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.249875118489399e-09,
            "disgust": 7.815971528918273e-24,
            "fear": 3.921497729406781e-13,
            "happy": 99.34597778320312,
            "sad": 6.199335444989629e-08,
            "surprise": 1.0949570139473508e-09,
            "neutral": 0.6540250182151794
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 0,
            "y": 327,
            "w": 77,
            "h": 77,
            "left_eye": [
                47,
                356
            ],
            "right_eye": [
                17,
                358
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99516296386719,
            "Man": 0.004835025407373905
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 91.28050231933594,
            "indian": 3.618936538696289,
            "black": 0.16966645419597626,
            "white": 0.5673261880874634,
            "middle eastern": 0.01998576894402504,
            "latino hispanic": 4.343581199645996
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.061523604075411e-11,
            "disgust": 8.39445503838687e-20,
            "fear": 1.933593285485813e-09,
            "happy": 99.99847412109375,
            "sad": 2.661868503395226e-10,
            "surprise": 0.0010939753847196698,
            "neutral": 0.00042792962631210685
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 511,
            "y": 372,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 2.5572597223799676e-05,
            "Man": 99.9999771118164
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.08378422260284424,
            "indian": 1.7612026929855347,
            "black": 0.07369992136955261,
            "white": 45.038204193115234,
            "middle eastern": 36.19359588623047,
            "latino hispanic": 16.84952163696289
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.022197723388672,
            "disgust": 4.6121974150992173e-07,
            "fear": 0.008208123035728931,
            "happy": 0.24336792528629303,
            "sad": 1.6098790168762207,
            "surprise": 0.0003975199069827795,
            "neutral": 90.1159439086914
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 735,
            "y": 340,
            "w": 80,
            "h": 80,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.9438508388702758e-05,
            "Man": 99.9999771118164
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.11340812593698502,
            "indian": 0.44817784428596497,
            "black": 0.037347882986068726,
            "white": 71.7073974609375,
            "middle eastern": 16.939834594726562,
            "latino hispanic": 10.753837585449219
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.851750373840332,
            "disgust": 2.060407133797071e-08,
            "fear": 0.001109972014091909,
            "happy": 0.4408871531486511,
            "sad": 0.4860931932926178,
            "surprise": 0.00969757977873087,
            "neutral": 90.21045684814453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 658,
            "y": 396,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0001548424334032461,
            "Man": 99.99984741210938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.311664581298828,
            "indian": 11.198857307434082,
            "black": 30.825523376464844,
            "white": 8.633903503417969,
            "middle eastern": 6.040524005889893,
            "latino hispanic": 31.989526748657227
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.610576331615448,
            "disgust": 0.0006960186874493957,
            "fear": 0.0015114682028070092,
            "happy": 54.365787506103516,
            "sad": 1.4740654230117798,
            "surprise": 0.001312457607127726,
            "neutral": 43.54605484008789
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 370,
            "y": 410,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99336242675781,
            "Man": 0.006645264569669962
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 14.556903839111328,
            "indian": 6.362990856170654,
            "black": 2.3556017875671387,
            "white": 28.30416488647461,
            "middle eastern": 17.06789779663086,
            "latino hispanic": 31.352436065673828
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 4.70453580606045e-12,
            "disgust": 2.0409968254185692e-16,
            "fear": 2.368455209733611e-09,
            "happy": 99.99769592285156,
            "sad": 3.8754632836202063e-10,
            "surprise": 1.3772181262083905e-07,
            "neutral": 0.002304260851815343
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 952,
            "y": 400,
            "w": 96,
            "h": 96,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.0024732197634875774,
            "Man": 99.9975357055664
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.7093677520751953,
            "indian": 3.0785744190216064,
            "black": 1.2346028089523315,
            "white": 43.22561264038086,
            "middle eastern": 19.21828842163086,
            "latino hispanic": 31.533550262451172
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 95.21057891845703,
            "disgust": 5.251141033113527e-07,
            "fear": 0.4951373040676117,
            "happy": 0.00391934672370553,
            "sad": 0.12135167419910431,
            "surprise": 1.4722084415552672e-05,
            "neutral": 4.169005870819092
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 27,
        "region": {
            "x": 1202,
            "y": 359,
            "w": 77,
            "h": 92,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.1014833450317383,
            "Man": 98.89852142333984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 43.99370574951172,
            "indian": 12.824891090393066,
            "black": 6.1040167808532715,
            "white": 7.353286266326904,
            "middle eastern": 5.803709030151367,
            "latino hispanic": 23.920391082763672
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 20.256134033203125,
            "disgust": 1.4864562913885493e-09,
            "fear": 0.32212337851524353,
            "happy": 0.005957700777798891,
            "sad": 35.30172348022461,
            "surprise": 9.459370630793273e-05,
            "neutral": 44.11397171020508
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 817,
            "y": 474,
            "w": 85,
            "h": 85,
            "left_eye": [
                869,
                507
            ],
            "right_eye": [
                841,
                505
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.9681625366211,
            "Man": 0.03184616565704346
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 94.54698181152344,
            "indian": 1.6167492866516113,
            "black": 0.11563871055841446,
            "white": 0.12524549663066864,
            "middle eastern": 0.010500566102564335,
            "latino hispanic": 3.584878444671631
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.2107014280005046e-09,
            "disgust": 9.564086176673536e-15,
            "fear": 7.963891768270059e-10,
            "happy": 99.84233093261719,
            "sad": 4.986545718566049e-07,
            "surprise": 8.212741704483051e-07,
            "neutral": 0.1576697677373886
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 85,
            "y": 540,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 45.371238708496094,
            "Man": 54.628761291503906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.9911880493164,
            "indian": 0.005945863202214241,
            "black": 1.5062468605719914e-07,
            "white": 5.90110503253527e-05,
            "middle eastern": 1.8006433011308332e-09,
            "latino hispanic": 0.0028085866943001747
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.00023214769316837192,
            "disgust": 5.2187084514931925e-11,
            "fear": 0.11393434554338455,
            "happy": 99.8689193725586,
            "sad": 0.001267169718630612,
            "surprise": 0.01541951484978199,
            "neutral": 0.00022154411999508739
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 272,
            "y": 552,
            "w": 86,
            "h": 86,
            "left_eye": [
                331,
                584
            ],
            "right_eye": [
                296,
                585
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.95811462402344,
            "Man": 0.04188266023993492
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 94.22685241699219,
            "indian": 0.8729802370071411,
            "black": 0.1426161527633667,
            "white": 0.35382866859436035,
            "middle eastern": 0.02787286601960659,
            "latino hispanic": 4.375853061676025
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.9171990886291133e-13,
            "disgust": 1.0632961680113783e-20,
            "fear": 7.56217755082389e-10,
            "happy": 99.98346710205078,
            "sad": 3.2132724259170686e-10,
            "surprise": 2.1906194888288155e-05,
            "neutral": 0.016512177884578705
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 515,
            "y": 561,
            "w": 89,
            "h": 89,
            "left_eye": [
                575,
                592
            ],
            "right_eye": [
                541,
                596
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.9188461303711,
            "Man": 0.08115217834711075
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.9993896484375,
            "indian": 0.0001366434444207698,
            "black": 3.6216455612247955e-08,
            "white": 1.2558272828755435e-05,
            "middle eastern": 1.9541848139681406e-09,
            "latino hispanic": 0.0004576774954330176
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.271857901803287e-08,
            "disgust": 8.795735136329225e-14,
            "fear": 1.1336780517012812e-05,
            "happy": 99.89712524414062,
            "sad": 1.1561508017621236e-06,
            "surprise": 0.012231049127876759,
            "neutral": 0.09064055979251862
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 1075,
            "y": 600,
            "w": 98,
            "h": 98,
            "left_eye": [
                1137,
                638
            ],
            "right_eye": [
                1101,
                638
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99993133544922,
            "Man": 7.121063390513882e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 52.96506118774414,
            "indian": 7.162773609161377,
            "black": 4.101385593414307,
            "white": 3.0326530933380127,
            "middle eastern": 1.1799238920211792,
            "latino hispanic": 31.558204650878906
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.0244418667280115e-05,
            "disgust": 5.938726843623954e-09,
            "fear": 3.468294016784057e-05,
            "happy": 99.86530303955078,
            "sad": 0.0002737281029112637,
            "surprise": 0.00037088533281348646,
            "neutral": 0.1339908391237259
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 818,
            "y": 606,
            "w": 84,
            "h": 84,
            "left_eye": [
                874,
                638
            ],
            "right_eye": [
                840,
                638
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.9975357055664,
            "Man": 0.0024668690748512745
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 26.463539123535156,
            "indian": 11.211161613464355,
            "black": 3.8189780712127686,
            "white": 9.685051918029785,
            "middle eastern": 5.432719707489014,
            "latino hispanic": 43.3885498046875
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.347870425329802e-09,
            "disgust": 4.088051630475901e-15,
            "fear": 9.85059614322381e-07,
            "happy": 99.99960327148438,
            "sad": 1.8614613509271294e-05,
            "surprise": 0.00011278038437012583,
            "neutral": 0.0002690239925868809
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 530,
            "y": 679,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 1.8798524141311646,
            "Man": 98.1201400756836
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 14.580477714538574,
            "indian": 6.908699989318848,
            "black": 24.64115333557129,
            "white": 35.473270416259766,
            "middle eastern": 8.613608360290527,
            "latino hispanic": 9.782794952392578
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 99.76910400390625,
            "disgust": 4.2926988186309245e-08,
            "fear": 0.003341380739584565,
            "happy": 4.975863248546375e-06,
            "sad": 0.22167780995368958,
            "surprise": 4.673447850933599e-09,
            "neutral": 0.005872285924851894
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 24,
        "region": {
            "x": 922,
            "y": 848,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 38.49609375,
            "Man": 61.50390625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.292779445648193,
            "indian": 1.4927664995193481,
            "black": 0.3019533157348633,
            "white": 57.556243896484375,
            "middle eastern": 17.121187210083008,
            "latino hispanic": 16.23507308959961
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.02331363596022129,
            "disgust": 1.6491905063809043e-10,
            "fear": 9.809539794921875,
            "happy": 0.007462409324944019,
            "sad": 15.71233081817627,
            "surprise": 0.0036515225656330585,
            "neutral": 74.44369506835938
        },
        "dominant_emotion": "neutral"
    }
]

console.log("Meta Results for Interior Designer:");
const data = interior_design_data.concat(interior_design_data2, interior_design_data3);
console.log(processData(data));