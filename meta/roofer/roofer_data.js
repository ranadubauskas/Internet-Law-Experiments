const { processData } = require('../../data_processing.js');

let roofer_data = [
    {
        "age": 28,
        "region": {
            "x": 694,
            "y": 50,
            "w": 65,
            "h": 65,
            "left_eye": [
                736,
                72
            ],
            "right_eye": [
                715,
                77
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 47.99897003173828,
            "Man": 52.001033782958984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 42.0127067565918,
            "indian": 6.5904130935668945,
            "black": 3.0211381912231445,
            "white": 17.93295669555664,
            "middle eastern": 8.682385444641113,
            "latino hispanic": 21.760406494140625
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.2856225967407227,
            "disgust": 5.233936462900601e-06,
            "fear": 0.34689342975616455,
            "happy": 63.92503356933594,
            "sad": 0.8109708428382874,
            "surprise": 0.2768348753452301,
            "neutral": 33.354644775390625
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 870,
            "y": 95,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 0.18980590999126434,
            "Man": 99.8102035522461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.2294511795043945,
            "indian": 3.951507568359375,
            "black": 1.6009224653244019,
            "white": 36.57193374633789,
            "middle eastern": 17.401836395263672,
            "latino hispanic": 36.24435043334961
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.7902034521102905,
            "disgust": 0.0005301765049807727,
            "fear": 12.092369079589844,
            "happy": 35.545738220214844,
            "sad": 3.870821475982666,
            "surprise": 0.15156647562980652,
            "neutral": 47.54877471923828
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 540,
            "y": 65,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 8.217925071716309,
            "Man": 91.78207397460938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 43.755699157714844,
            "indian": 4.608307361602783,
            "black": 2.14667010307312,
            "white": 17.6363582611084,
            "middle eastern": 6.3255157470703125,
            "latino hispanic": 25.527442932128906
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 40.900211334228516,
            "disgust": 0.0003370047779753804,
            "fear": 4.109709739685059,
            "happy": 0.2694399654865265,
            "sad": 35.146732330322266,
            "surprise": 0.008743185549974442,
            "neutral": 19.564828872680664
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 33,
        "region": {
            "x": 932,
            "y": 124,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 2.8625714778900146,
            "Man": 97.13743591308594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.2782082557678223,
            "indian": 0.2151525318622589,
            "black": 0.032171767204999924,
            "white": 83.45835876464844,
            "middle eastern": 3.24019455909729,
            "latino hispanic": 9.775917053222656
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0002875898208003491,
            "disgust": 4.504947526129399e-10,
            "fear": 0.1137268990278244,
            "happy": 0.08105305582284927,
            "sad": 0.03251682594418526,
            "surprise": 0.11798487603664398,
            "neutral": 99.65442657470703
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 620,
            "y": 66,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 88.18411254882812,
            "Man": 11.815886497497559
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 37.13926696777344,
            "indian": 7.537503242492676,
            "black": 6.591434478759766,
            "white": 7.956334114074707,
            "middle eastern": 3.885687828063965,
            "latino hispanic": 36.889774322509766
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.6185290217399597,
            "disgust": 0.0003672909224405885,
            "fear": 0.19516406953334808,
            "happy": 79.27310180664062,
            "sad": 6.164245128631592,
            "surprise": 0.08041083812713623,
            "neutral": 13.668184280395508
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 327,
            "y": 44,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 98.89238739013672,
            "Man": 1.1076123714447021
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.485788822174072,
            "indian": 8.547091484069824,
            "black": 1.6158140897750854,
            "white": 25.349586486816406,
            "middle eastern": 28.859148025512695,
            "latino hispanic": 31.142574310302734
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 4.618252754211426,
            "disgust": 0.010740920901298523,
            "fear": 9.11311149597168,
            "happy": 0.11771543323993683,
            "sad": 79.36038970947266,
            "surprise": 0.08174999058246613,
            "neutral": 6.698044776916504
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 797,
            "y": 48,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.8851089477539,
            "Man": 0.11488839238882065
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 10.285045623779297,
            "indian": 43.845375061035156,
            "black": 11.914518356323242,
            "white": 2.588590145111084,
            "middle eastern": 2.2004587650299072,
            "latino hispanic": 29.166015625
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 0.06647981703281403,
            "disgust": 0.08433002978563309,
            "fear": 14.379274368286133,
            "happy": 52.0643424987793,
            "sad": 24.25086784362793,
            "surprise": 0.015667734667658806,
            "neutral": 9.139034271240234
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 467,
            "y": 122,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 0.7440241575241089,
            "Man": 99.2559814453125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.747228622436523,
            "indian": 4.331603527069092,
            "black": 1.3484466075897217,
            "white": 38.06047439575195,
            "middle eastern": 20.39372444152832,
            "latino hispanic": 27.118518829345703
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.8405299186706543,
            "disgust": 0.02160409837961197,
            "fear": 22.156633377075195,
            "happy": 0.23059804737567902,
            "sad": 63.81100845336914,
            "surprise": 0.011340283788740635,
            "neutral": 11.928277969360352
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 33,
        "region": {
            "x": 746,
            "y": 121,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.48078155517578,
            "Man": 0.5192189812660217
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 16.043685913085938,
            "indian": 10.379127502441406,
            "black": 10.908063888549805,
            "white": 9.242650985717773,
            "middle eastern": 5.378509998321533,
            "latino hispanic": 48.04796600341797
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.782313585281372,
            "disgust": 3.0888841138221323e-05,
            "fear": 21.660974502563477,
            "happy": 15.556581497192383,
            "sad": 14.579444885253906,
            "surprise": 1.6534875631332397,
            "neutral": 43.76716995239258
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 618,
            "y": 149,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99977111816406,
            "Man": 0.00022697898384649307
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 2.6753242015838623,
            "indian": 3.320626974105835,
            "black": 0.5435841679573059,
            "white": 50.52067184448242,
            "middle eastern": 21.402873992919922,
            "latino hispanic": 21.53691864013672
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.08220552653074265,
            "disgust": 0.00013544528337661177,
            "fear": 0.9288857579231262,
            "happy": 19.048629760742188,
            "sad": 3.487313985824585,
            "surprise": 0.1563539057970047,
            "neutral": 76.29647064208984
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 298,
            "y": 180,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 4.563807010650635,
            "Man": 95.43619537353516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.496166706085205,
            "indian": 3.3782870769500732,
            "black": 1.129213571548462,
            "white": 32.24934005737305,
            "middle eastern": 14.976493835449219,
            "latino hispanic": 40.770503997802734
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 4.360983848571777,
            "disgust": 0.0030929530039429665,
            "fear": 9.315561294555664,
            "happy": 0.08915302902460098,
            "sad": 74.9906997680664,
            "surprise": 0.03883509710431099,
            "neutral": 11.201675415039062
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 29,
        "region": {
            "x": 819,
            "y": 176,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 97.16810607910156,
            "Man": 2.831899642944336
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.6824486255645752,
            "indian": 5.157679557800293,
            "black": 0.960644543170929,
            "white": 36.752742767333984,
            "middle eastern": 30.27831268310547,
            "latino hispanic": 25.168174743652344
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.2519571781158447,
            "disgust": 0.00085275067249313,
            "fear": 79.50479125976562,
            "happy": 0.04063556715846062,
            "sad": 13.951876640319824,
            "surprise": 0.05505331605672836,
            "neutral": 6.194830894470215
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 30,
        "region": {
            "x": 383,
            "y": 187,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 68.1195297241211,
            "Man": 31.880477905273438
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 28.78445053100586,
            "indian": 9.967814445495605,
            "black": 3.8955395221710205,
            "white": 16.81451988220215,
            "middle eastern": 7.987802505493164,
            "latino hispanic": 32.54987716674805
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.1304188072681427,
            "disgust": 0.0002012786571867764,
            "fear": 0.7766291499137878,
            "happy": 21.388654708862305,
            "sad": 1.085556983947754,
            "surprise": 3.027169942855835,
            "neutral": 73.59136962890625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 693,
            "y": 191,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 63.908409118652344,
            "Man": 36.09159469604492
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 68.84920501708984,
            "indian": 6.530760288238525,
            "black": 2.1650092601776123,
            "white": 6.180282115936279,
            "middle eastern": 1.939863920211792,
            "latino hispanic": 14.334879875183105
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.31945568323135376,
            "disgust": 7.870677109167445e-06,
            "fear": 0.2574561536312103,
            "happy": 88.92483520507812,
            "sad": 1.1938525438308716,
            "surprise": 0.11523955315351486,
            "neutral": 9.189154624938965
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 506,
            "y": 194,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 24.36110496520996,
            "Man": 75.6388931274414
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.739828586578369,
            "indian": 3.415036678314209,
            "black": 1.5554124116897583,
            "white": 45.5682487487793,
            "middle eastern": 14.968250274658203,
            "latino hispanic": 29.753225326538086
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.8938910961151123,
            "disgust": 0.015240834094583988,
            "fear": 68.63323211669922,
            "happy": 0.07958856225013733,
            "sad": 20.08479118347168,
            "surprise": 0.05802091583609581,
            "neutral": 7.2352375984191895
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 30,
        "region": {
            "x": 983,
            "y": 209,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 89.42760467529297,
            "Man": 10.572391510009766
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 45.2762451171875,
            "indian": 9.00536823272705,
            "black": 23.275653839111328,
            "white": 2.8653295040130615,
            "middle eastern": 2.036907434463501,
            "latino hispanic": 17.540508270263672
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0332242026925087,
            "disgust": 5.0638562242966145e-05,
            "fear": 38.994964599609375,
            "happy": 25.81777572631836,
            "sad": 2.8601672649383545,
            "surprise": 0.027548402547836304,
            "neutral": 32.26626968383789
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 32,
        "region": {
            "x": 581,
            "y": 215,
            "w": 79,
            "h": 79,
            "left_eye": [
                633,
                243
            ],
            "right_eye": [
                606,
                246
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.83023071289062,
            "Man": 0.16976091265678406
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 29.233640670776367,
            "indian": 13.238424301147461,
            "black": 6.681504249572754,
            "white": 11.574440956115723,
            "middle eastern": 6.878981590270996,
            "latino hispanic": 32.39300537109375
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 6.9301629066467285,
            "disgust": 0.002741089556366205,
            "fear": 6.943288326263428,
            "happy": 36.2580680847168,
            "sad": 18.7629337310791,
            "surprise": 0.9160406589508057,
            "neutral": 30.186765670776367
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 870,
            "y": 221,
            "w": 79,
            "h": 79,
            "left_eye": [
                921,
                250
            ],
            "right_eye": [
                893,
                255
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 99.99917602539062,
            "Man": 0.0008278745808638632
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 10.912422180175781,
            "indian": 8.877716064453125,
            "black": 16.700952529907227,
            "white": 7.884084224700928,
            "middle eastern": 5.172482013702393,
            "latino hispanic": 50.45234680175781
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.6555277109146118,
            "disgust": 0.0005162282031960785,
            "fear": 14.787583351135254,
            "happy": 2.668839693069458,
            "sad": 12.989812850952148,
            "surprise": 1.2706838846206665,
            "neutral": 67.62702941894531
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 231,
            "y": 262,
            "w": 85,
            "h": 85,
            "left_eye": [
                287,
                296
            ],
            "right_eye": [
                259,
                296
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 22.23836326599121,
            "Man": 77.76163482666016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 18.18492317199707,
            "indian": 10.252872467041016,
            "black": 9.62497329711914,
            "white": 19.33113670349121,
            "middle eastern": 14.366256713867188,
            "latino hispanic": 28.239845275878906
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 18.187088012695312,
            "disgust": 0.0614037811756134,
            "fear": 26.757585525512695,
            "happy": 0.0866469070315361,
            "sad": 43.34097671508789,
            "surprise": 0.03800022229552269,
            "neutral": 11.528297424316406
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 750,
            "y": 233,
            "w": 84,
            "h": 84,
            "left_eye": [
                808,
                267
            ],
            "right_eye": [
                778,
                266
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.87027740478516,
            "Man": 0.12972256541252136
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 14.789020538330078,
            "indian": 12.065543174743652,
            "black": 12.085750579833984,
            "white": 12.162238121032715,
            "middle eastern": 8.283587455749512,
            "latino hispanic": 40.61385726928711
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.07748159021139145,
            "disgust": 2.668888555490412e-06,
            "fear": 0.5222404599189758,
            "happy": 68.44032287597656,
            "sad": 4.875010013580322,
            "surprise": 1.107073426246643,
            "neutral": 24.97787094116211
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 482,
            "y": 277,
            "w": 84,
            "h": 84,
            "left_eye": [
                538,
                309
            ],
            "right_eye": [
                508,
                311
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 23.532922744750977,
            "Man": 76.46707916259766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 31.32355308532715,
            "indian": 6.227203369140625,
            "black": 7.796354293823242,
            "white": 13.4697904586792,
            "middle eastern": 7.149115562438965,
            "latino hispanic": 34.03398895263672
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.578058958053589,
            "disgust": 0.0004003394569735974,
            "fear": 9.652493476867676,
            "happy": 0.003822192084044218,
            "sad": 70.30933380126953,
            "surprise": 0.010656052269041538,
            "neutral": 16.445236206054688
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 34,
        "region": {
            "x": 356,
            "y": 278,
            "w": 87,
            "h": 87,
            "left_eye": [
                411,
                310
            ],
            "right_eye": [
                383,
                312
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 92.0870590209961,
            "Man": 7.912937641143799
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 11.766434669494629,
            "indian": 12.799522399902344,
            "black": 5.660938739776611,
            "white": 15.807686805725098,
            "middle eastern": 12.780044555664062,
            "latino hispanic": 41.18537139892578
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.5934994220733643,
            "disgust": 0.001591512467712164,
            "fear": 4.831106185913086,
            "happy": 27.565353393554688,
            "sad": 7.538933277130127,
            "surprise": 0.13858740031719208,
            "neutral": 59.330928802490234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 1035,
            "y": 253,
            "w": 87,
            "h": 87,
            "left_eye": [
                1093,
                291
            ],
            "right_eye": [
                1063,
                289
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.94371795654297,
            "Man": 0.0562850683927536
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.793039798736572,
            "indian": 6.85280179977417,
            "black": 2.5071511268615723,
            "white": 24.090402603149414,
            "middle eastern": 12.774164199829102,
            "latino hispanic": 46.98244094848633
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.40534454584121704,
            "disgust": 0.005018596071749926,
            "fear": 76.13349151611328,
            "happy": 0.8254385590553284,
            "sad": 15.123903274536133,
            "surprise": 0.05490395054221153,
            "neutral": 7.451903820037842
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 33,
        "region": {
            "x": 629,
            "y": 288,
            "w": 89,
            "h": 89,
            "left_eye": [
                687,
                322
            ],
            "right_eye": [
                657,
                324
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 99.99964141845703,
            "Man": 0.00035464882967062294
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.362828254699707,
            "indian": 6.392623424530029,
            "black": 13.571977615356445,
            "white": 16.166439056396484,
            "middle eastern": 8.831250190734863,
            "latino hispanic": 46.67488479614258
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.650244951248169,
            "disgust": 0.005967427045106888,
            "fear": 78.25206756591797,
            "happy": 0.07900337129831314,
            "sad": 15.707206726074219,
            "surprise": 0.13521046936511993,
            "neutral": 4.170294284820557
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 32,
        "region": {
            "x": 903,
            "y": 326,
            "w": 91,
            "h": 91,
            "left_eye": [
                962,
                359
            ],
            "right_eye": [
                930,
                362
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99728393554688,
            "Man": 0.0027226426173001528
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 25.9458065032959,
            "indian": 16.479305267333984,
            "black": 3.7410552501678467,
            "white": 10.212250709533691,
            "middle eastern": 7.801474571228027,
            "latino hispanic": 35.82011032104492
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.32327672839164734,
            "disgust": 8.953053475124761e-05,
            "fear": 0.518499493598938,
            "happy": 2.8932230472564697,
            "sad": 1.2754038572311401,
            "surprise": 0.12868733704090118,
            "neutral": 94.8608169555664
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 791,
            "y": 317,
            "w": 93,
            "h": 93,
            "left_eye": [
                853,
                355
            ],
            "right_eye": [
                821,
                353
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.89826202392578,
            "Man": 0.10174094140529633
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 20.11476707458496,
            "indian": 11.518622398376465,
            "black": 11.826126098632812,
            "white": 5.845437049865723,
            "middle eastern": 2.6088497638702393,
            "latino hispanic": 48.08620071411133
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.6647217273712158,
            "disgust": 0.005610778462141752,
            "fear": 53.046966552734375,
            "happy": 1.5649011135101318,
            "sad": 10.554496765136719,
            "surprise": 0.05095211789011955,
            "neutral": 33.11235046386719
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 28,
        "region": {
            "x": 194,
            "y": 344,
            "w": 92,
            "h": 92,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 33.11860656738281,
            "Man": 66.88139343261719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 38.36341094970703,
            "indian": 5.794760704040527,
            "black": 35.00711441040039,
            "white": 2.927161455154419,
            "middle eastern": 1.1752240657806396,
            "latino hispanic": 16.73233413696289
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 10.404297828674316,
            "disgust": 0.0021500939037650824,
            "fear": 12.8450288772583,
            "happy": 1.2101489305496216,
            "sad": 72.69361114501953,
            "surprise": 0.04856974259018898,
            "neutral": 2.7961955070495605
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 1157,
            "y": 356,
            "w": 100,
            "h": 100,
            "left_eye": [
                1223,
                398
            ],
            "right_eye": [
                1188,
                397
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 87.42759704589844,
            "Man": 12.572404861450195
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 35.817867279052734,
            "indian": 12.451022148132324,
            "black": 8.498720169067383,
            "white": 5.2192816734313965,
            "middle eastern": 3.892831325531006,
            "latino hispanic": 34.120277404785156
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.010562422685325146,
            "disgust": 0.0006717455107718706,
            "fear": 77.45401763916016,
            "happy": 0.0031931502744555473,
            "sad": 22.294376373291016,
            "surprise": 9.706521268526558e-06,
            "neutral": 0.237174853682518
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 24,
        "region": {
            "x": 687,
            "y": 385,
            "w": 100,
            "h": 100,
            "left_eye": [
                753,
                423
            ],
            "right_eye": [
                718,
                425
            ]
        },
        "face_confidence": 0.86,
        "gender": {
            "Woman": 25.851654052734375,
            "Man": 74.1483383178711
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 17.520475387573242,
            "indian": 19.365745544433594,
            "black": 5.515511512756348,
            "white": 7.9400739669799805,
            "middle eastern": 6.177199840545654,
            "latino hispanic": 43.48099899291992
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.22801782190799713,
            "disgust": 0.0001292350934818387,
            "fear": 7.374557971954346,
            "happy": 0.08876944333314896,
            "sad": 4.444626808166504,
            "surprise": 0.25954046845436096,
            "neutral": 87.60436248779297
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 413,
            "y": 399,
            "w": 100,
            "h": 100,
            "left_eye": [
                479,
                436
            ],
            "right_eye": [
                446,
                439
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 80.81937408447266,
            "Man": 19.180627822875977
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.48020601272583,
            "indian": 17.162981033325195,
            "black": 3.348160743713379,
            "white": 6.969839572906494,
            "middle eastern": 7.232038974761963,
            "latino hispanic": 57.8067741394043
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0033185449428856373,
            "disgust": 5.843869985255878e-06,
            "fear": 0.013333442620933056,
            "happy": 60.836082458496094,
            "sad": 0.1497969627380371,
            "surprise": 0.4813852310180664,
            "neutral": 38.51607894897461
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 258,
            "y": 410,
            "w": 98,
            "h": 98,
            "left_eye": [
                321,
                446
            ],
            "right_eye": [
                287,
                449
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.69673919677734,
            "Man": 0.30326366424560547
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.510119438171387,
            "indian": 6.087615489959717,
            "black": 1.159706473350525,
            "white": 38.7327766418457,
            "middle eastern": 18.8564395904541,
            "latino hispanic": 30.653345108032227
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0029602607246488333,
            "disgust": 0.00017538318934384733,
            "fear": 0.0043473984114825726,
            "happy": 97.75287628173828,
            "sad": 0.08739122748374939,
            "surprise": 0.03652026504278183,
            "neutral": 2.115737199783325
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 145,
            "y": 431,
            "w": 99,
            "h": 99,
            "left_eye": [
                213,
                473
            ],
            "right_eye": [
                178,
                468
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.97843933105469,
            "Man": 0.0215607900172472
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.268473148345947,
            "indian": 6.549300193786621,
            "black": 9.334823608398438,
            "white": 20.44902801513672,
            "middle eastern": 10.984865188598633,
            "latino hispanic": 46.413509368896484
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.7630879878997803,
            "disgust": 0.0008171205990947783,
            "fear": 26.396026611328125,
            "happy": 2.0619590282440186,
            "sad": 57.901737213134766,
            "surprise": 0.16724003851413727,
            "neutral": 11.709123611450195
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 1031,
            "y": 431,
            "w": 107,
            "h": 107,
            "left_eye": [
                1098,
                473
            ],
            "right_eye": [
                1061,
                475
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.80592346191406,
            "Man": 0.19408024847507477
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.859853744506836,
            "indian": 21.07112693786621,
            "black": 7.475179672241211,
            "white": 11.073417663574219,
            "middle eastern": 15.10445785522461,
            "latino hispanic": 36.41596603393555
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.254143621234107e-07,
            "disgust": 2.0128794187002086e-09,
            "fear": 4.642395651899278e-06,
            "happy": 99.81155395507812,
            "sad": 5.147710180608556e-05,
            "surprise": 4.193565109744668e-05,
            "neutral": 0.18834222853183746
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 517,
            "y": 473,
            "w": 110,
            "h": 110,
            "left_eye": [
                591,
                515
            ],
            "right_eye": [
                555,
                516
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.68573760986328,
            "Man": 0.31426283717155457
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 22.4233455657959,
            "indian": 22.7413387298584,
            "black": 11.201069831848145,
            "white": 1.0047045946121216,
            "middle eastern": 0.4655870497226715,
            "latino hispanic": 42.16395950317383
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.25319766998291016,
            "disgust": 0.00028994487365707755,
            "fear": 0.09357991814613342,
            "happy": 82.65802001953125,
            "sad": 0.781800389289856,
            "surprise": 3.5745527744293213,
            "neutral": 12.638566017150879
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 98,
            "y": 548,
            "w": 95,
            "h": 95,
            "left_eye": [
                165,
                581
            ],
            "right_eye": [
                124,
                584
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 97.90006256103516,
            "Man": 2.0999414920806885
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 23.533681869506836,
            "indian": 10.582399368286133,
            "black": 26.680065155029297,
            "white": 7.724067687988281,
            "middle eastern": 5.516119003295898,
            "latino hispanic": 25.963666915893555
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.1310288906097412,
            "disgust": 5.313217479852028e-05,
            "fear": 0.7194184064865112,
            "happy": 88.96107482910156,
            "sad": 0.3705274760723114,
            "surprise": 1.0895777940750122,
            "neutral": 8.728316307067871
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 349,
            "y": 526,
            "w": 109,
            "h": 109,
            "left_eye": [
                421,
                568
            ],
            "right_eye": [
                383,
                571
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 98.76319885253906,
            "Man": 1.2368007898330688
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.235002517700195,
            "indian": 4.428167343139648,
            "black": 1.0448784828186035,
            "white": 35.545692443847656,
            "middle eastern": 16.15544319152832,
            "latino hispanic": 38.59081268310547
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 4.979270935058594,
            "disgust": 0.014535930007696152,
            "fear": 17.582712173461914,
            "happy": 0.916894793510437,
            "sad": 17.869367599487305,
            "surprise": 0.09486254304647446,
            "neutral": 58.5423583984375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 642,
            "y": 529,
            "w": 118,
            "h": 118,
            "left_eye": [
                717,
                575
            ],
            "right_eye": [
                679,
                578
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.11553955078125,
            "Man": 0.8844578862190247
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.191236972808838,
            "indian": 17.568817138671875,
            "black": 3.4749183654785156,
            "white": 10.958195686340332,
            "middle eastern": 6.862130165100098,
            "latino hispanic": 53.9447021484375
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 30.45532989501953,
            "disgust": 0.0062960367649793625,
            "fear": 10.555951118469238,
            "happy": 0.0031653479672968388,
            "sad": 46.217769622802734,
            "surprise": 0.0004127425199840218,
            "neutral": 12.761075019836426
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 1137,
            "y": 531,
            "w": 124,
            "h": 124,
            "left_eye": [
                1218,
                580
            ],
            "right_eye": [
                1175,
                582
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 2.571002244949341,
            "Man": 97.42899322509766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 32.69655990600586,
            "indian": 7.883764266967773,
            "black": 2.080695152282715,
            "white": 15.895269393920898,
            "middle eastern": 7.145114421844482,
            "latino hispanic": 34.29859924316406
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.020526327192783356,
            "disgust": 1.1340931450831704e-05,
            "fear": 0.3674062490463257,
            "happy": 87.21826171875,
            "sad": 0.7239972949028015,
            "surprise": 0.3266378343105316,
            "neutral": 11.343160629272461
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 814,
            "y": 509,
            "w": 106,
            "h": 106,
            "left_eye": [
                885,
                550
            ],
            "right_eye": [
                848,
                551
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 34.43193817138672,
            "Man": 65.56806182861328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.819685935974121,
            "indian": 8.0398530960083,
            "black": 2.158801794052124,
            "white": 5.406614303588867,
            "middle eastern": 1.815818428993225,
            "latino hispanic": 72.75923156738281
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.06997448205947876,
            "disgust": 0.0011680851457640529,
            "fear": 4.928045272827148,
            "happy": 71.98845672607422,
            "sad": 3.1437342166900635,
            "surprise": 0.17836922407150269,
            "neutral": 19.69025421142578
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 895,
            "y": 603,
            "w": 120,
            "h": 120,
            "left_eye": [
                977,
                655
            ],
            "right_eye": [
                934,
                648
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.85012817382812,
            "Man": 0.14986562728881836
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 16.118364334106445,
            "indian": 15.495406150817871,
            "black": 2.605483055114746,
            "white": 4.606362342834473,
            "middle eastern": 1.9326252937316895,
            "latino hispanic": 59.24176025390625
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.7681654691696167,
            "disgust": 0.08714380115270615,
            "fear": 18.891084671020508,
            "happy": 1.2302138805389404,
            "sad": 14.438660621643066,
            "surprise": 1.151043176651001,
            "neutral": 62.43368911743164
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 1156,
            "y": 717,
            "w": 123,
            "h": 142,
            "left_eye": [
                1252,
                777
            ],
            "right_eye": [
                1200,
                772
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 3.975490093231201,
            "Man": 96.02450561523438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.625299453735352,
            "indian": 14.976978302001953,
            "black": 1.449162244796753,
            "white": 5.7921977043151855,
            "middle eastern": 2.718834400177002,
            "latino hispanic": 66.43753814697266
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 16.139545440673828,
            "disgust": 0.01640966907143593,
            "fear": 15.177301406860352,
            "happy": 0.0007732289959676564,
            "sad": 56.929656982421875,
            "surprise": 0.0015432145446538925,
            "neutral": 11.734774589538574
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 28,
        "region": {
            "x": 196,
            "y": 697,
            "w": 121,
            "h": 121,
            "left_eye": [
                279,
                747
            ],
            "right_eye": [
                236,
                746
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.14828491210938,
            "Man": 0.8517172336578369
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 33.94322967529297,
            "indian": 25.144941329956055,
            "black": 5.9382734298706055,
            "white": 1.544721007347107,
            "middle eastern": 0.8554984927177429,
            "latino hispanic": 32.573341369628906
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 20.805896759033203,
            "disgust": 0.00012720191443804651,
            "fear": 21.05659294128418,
            "happy": 0.0002607945934869349,
            "sad": 34.401119232177734,
            "surprise": 0.015247251838445663,
            "neutral": 23.72075843811035
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 496,
            "y": 736,
            "w": 118,
            "h": 118,
            "left_eye": [
                576,
                779
            ],
            "right_eye": [
                533,
                785
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 97.95222473144531,
            "Man": 2.0477793216705322
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 11.437353134155273,
            "indian": 6.593709945678711,
            "black": 3.009945869445801,
            "white": 16.319713592529297,
            "middle eastern": 5.939795970916748,
            "latino hispanic": 56.699485778808594
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.43619921803474426,
            "disgust": 0.0014214286347851157,
            "fear": 0.995578408241272,
            "happy": 20.842586517333984,
            "sad": 1.8457658290863037,
            "surprise": 0.1529892534017563,
            "neutral": 75.72545623779297
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 22,
        "region": {
            "x": 746,
            "y": 726,
            "w": 129,
            "h": 129,
            "left_eye": [
                828,
                779
            ],
            "right_eye": [
                786,
                774
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.88929748535156,
            "Man": 0.11070838570594788
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.2410252094268799,
            "indian": 2.0743634700775146,
            "black": 0.3184840679168701,
            "white": 35.99116134643555,
            "middle eastern": 7.961235046386719,
            "latino hispanic": 52.413734436035156
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.7833216190338135,
            "disgust": 0.0017116558738052845,
            "fear": 9.232574462890625,
            "happy": 0.008007324300706387,
            "sad": 83.4775161743164,
            "surprise": 0.0008752159774303436,
            "neutral": 4.495987892150879
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 26,
        "region": {
            "x": 1002,
            "y": 1092,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 27.952852249145508,
            "Man": 72.04714965820312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 21.08551788330078,
            "indian": 0.4218881130218506,
            "black": 0.09687517583370209,
            "white": 71.19572448730469,
            "middle eastern": 4.063643932342529,
            "latino hispanic": 3.1363508701324463
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.1786631345748901,
            "disgust": 4.350786184659228e-05,
            "fear": 0.5203154683113098,
            "happy": 4.3089518547058105,
            "sad": 35.56031799316406,
            "surprise": 0.00282842293381691,
            "neutral": 58.42888259887695
        },
        "dominant_emotion": "neutral"
    }
]
let roofer_data2 = [
    {
        "age": 30,
        "region": {
            "x": 537,
            "y": 306,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.06692475080490112,
            "Man": 99.93307495117188
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 24.563358306884766,
            "indian": 3.32808780670166,
            "black": 1.4241878986358643,
            "white": 42.275779724121094,
            "middle eastern": 16.032852172851562,
            "latino hispanic": 12.375741958618164
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 82.52264404296875,
            "disgust": 0.00010615090286592022,
            "fear": 0.3247782289981842,
            "happy": 0.10328998416662216,
            "sad": 7.10524320602417,
            "surprise": 0.021845780313014984,
            "neutral": 9.922090530395508
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 25,
        "region": {
            "x": 1109,
            "y": 358,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.1744147092103958,
            "Man": 99.82557678222656
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.930405616760254,
            "indian": 8.840798377990723,
            "black": 56.950584411621094,
            "white": 3.1041853427886963,
            "middle eastern": 2.1374967098236084,
            "latino hispanic": 15.036531448364258
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 69.96692657470703,
            "disgust": 0.041403692215681076,
            "fear": 2.0507352352142334,
            "happy": 0.5203399062156677,
            "sad": 26.297700881958008,
            "surprise": 0.010226941667497158,
            "neutral": 1.1126708984375
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 24,
        "region": {
            "x": 104,
            "y": 393,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.09631609916687012,
            "Man": 99.90369415283203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.516546919650864e-05,
            "indian": 0.0006999344914220273,
            "black": 99.99920654296875,
            "white": 4.735207426165289e-08,
            "middle eastern": 1.1257704990441653e-08,
            "latino hispanic": 6.829680933151394e-05
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 74.93344116210938,
            "disgust": 0.002439572010189295,
            "fear": 17.857419967651367,
            "happy": 2.870800495147705,
            "sad": 4.042891979217529,
            "surprise": 0.11655092239379883,
            "neutral": 0.17645788192749023
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 27,
        "region": {
            "x": 769,
            "y": 412,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 2.56017804145813,
            "Man": 97.43982696533203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.2984040975570679,
            "indian": 2.8498895168304443,
            "black": 91.78852081298828,
            "white": 0.8862490653991699,
            "middle eastern": 0.3846651613712311,
            "latino hispanic": 2.792276382446289
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.47876593470573425,
            "disgust": 5.0135966489506245e-08,
            "fear": 0.20415864884853363,
            "happy": 0.0013952355366200209,
            "sad": 2.880364418029785,
            "surprise": 0.0005803396925330162,
            "neutral": 96.43473815917969
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 580,
            "y": 427,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.7269306182861328,
            "Man": 99.2730712890625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.0157618522644043,
            "indian": 1.4305678606033325,
            "black": 96.31358337402344,
            "white": 0.019065706059336662,
            "middle eastern": 0.003395001869648695,
            "latino hispanic": 0.2176278978586197
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.21756836771965027,
            "disgust": 3.328366560140239e-08,
            "fear": 0.0015969155356287956,
            "happy": 0.0332484245300293,
            "sad": 0.29337549209594727,
            "surprise": 0.00043106707744300365,
            "neutral": 99.45377349853516
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 292,
            "y": 426,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.3907015919685364,
            "Man": 99.60929870605469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.4081554412841797,
            "indian": 2.2689313888549805,
            "black": 95.55255889892578,
            "white": 0.0461902879178524,
            "middle eastern": 0.025665786117315292,
            "latino hispanic": 0.6985019445419312
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 18.38884162902832,
            "disgust": 0.04176130145788193,
            "fear": 7.38043212890625,
            "happy": 0.06869157403707504,
            "sad": 0.8142701387405396,
            "surprise": 72.25729370117188,
            "neutral": 1.0487056970596313
        },
        "dominant_emotion": "surprise"
    },
    {
        "age": 26,
        "region": {
            "x": 1041,
            "y": 431,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.2687145471572876,
            "Man": 99.73128509521484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.11833243817090988,
            "indian": 0.20392441749572754,
            "black": 99.6176528930664,
            "white": 0.0006626248359680176,
            "middle eastern": 0.00014962723071221262,
            "latino hispanic": 0.059281472116708755
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 21.405731201171875,
            "disgust": 9.958187001757324e-05,
            "fear": 0.6863484382629395,
            "happy": 7.745978355407715,
            "sad": 3.124617338180542,
            "surprise": 0.13371501863002777,
            "neutral": 66.90351104736328
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 22,
        "region": {
            "x": 865,
            "y": 366,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.1492109298706055,
            "Man": 98.85078430175781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.022601127624512,
            "indian": 12.296707153320312,
            "black": 16.12925910949707,
            "white": 14.19999885559082,
            "middle eastern": 11.736104011535645,
            "latino hispanic": 30.615325927734375
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 15.273754119873047,
            "disgust": 4.407620872370899e-05,
            "fear": 0.7580048441886902,
            "happy": 0.008215812966227531,
            "sad": 24.06975555419922,
            "surprise": 4.411037480167579e-06,
            "neutral": 59.890220642089844
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 166,
            "y": 446,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.015843652188777924,
            "Man": 99.9841537475586
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.042677510529756546,
            "indian": 0.09241219609975815,
            "black": 99.80194854736328,
            "white": 0.0008785187965258956,
            "middle eastern": 0.0006124936044216156,
            "latino hispanic": 0.06147375702857971
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 21.93292808532715,
            "disgust": 0.39422231912612915,
            "fear": 30.2993221282959,
            "happy": 1.1580517292022705,
            "sad": 27.62933921813965,
            "surprise": 0.4549763798713684,
            "neutral": 18.13117027282715
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 30,
        "region": {
            "x": 908,
            "y": 450,
            "w": 67,
            "h": 67,
            "left_eye": [
                953,
                473
            ],
            "right_eye": [
                930,
                473
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.3048669695854187,
            "Man": 99.69513702392578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 16.33809471130371,
            "indian": 23.578693389892578,
            "black": 36.89057540893555,
            "white": 2.9746615886688232,
            "middle eastern": 2.857175827026367,
            "latino hispanic": 17.360803604125977
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 18.93307876586914,
            "disgust": 0.004067784175276756,
            "fear": 3.3086917400360107,
            "happy": 0.16618050634860992,
            "sad": 26.94889259338379,
            "surprise": 0.0005899849929846823,
            "neutral": 50.63849639892578
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 1096,
            "y": 518,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.00970117375254631,
            "Man": 99.99029541015625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.0842460041167215e-05,
            "indian": 0.0006863771704956889,
            "black": 99.99925231933594,
            "white": 5.97425042769828e-09,
            "middle eastern": 6.962364018647804e-10,
            "latino hispanic": 1.410586901329225e-05
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 65.42073059082031,
            "disgust": 2.930455877958593e-09,
            "fear": 0.14847566187381744,
            "happy": 6.250724254641682e-06,
            "sad": 7.284119606018066,
            "surprise": 6.697378012177069e-07,
            "neutral": 27.146669387817383
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 30,
        "region": {
            "x": 1219,
            "y": 532,
            "w": 60,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.4952695369720459,
            "Man": 99.50473022460938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.004757419694215059,
            "indian": 0.002150653162971139,
            "black": 99.99259185791016,
            "white": 6.979607860557735e-07,
            "middle eastern": 1.2937229598719568e-07,
            "latino hispanic": 0.0005026477738283575
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 40.60084915161133,
            "disgust": 0.09324324876070023,
            "fear": 12.39821720123291,
            "happy": 0.06125329062342644,
            "sad": 24.144306182861328,
            "surprise": 0.34410762786865234,
            "neutral": 22.3580265045166
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 23,
        "region": {
            "x": 428,
            "y": 578,
            "w": 68,
            "h": 68,
            "left_eye": [
                475,
                601
            ],
            "right_eye": [
                449,
                600
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0163078922778368,
            "Man": 99.98368835449219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.004898380022495985,
            "indian": 0.004253384191542864,
            "black": 99.9889144897461,
            "white": 5.635507932311157e-06,
            "middle eastern": 1.6776285747255315e-06,
            "latino hispanic": 0.0019342092564329505
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.019012542441487312,
            "disgust": 6.742892022515434e-09,
            "fear": 0.0006054401164874434,
            "happy": 0.003688340773805976,
            "sad": 0.03457091003656387,
            "surprise": 0.0010793188121169806,
            "neutral": 99.94103240966797
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 843,
            "y": 678,
            "w": 73,
            "h": 73,
            "left_eye": [
                893,
                704
            ],
            "right_eye": [
                864,
                704
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 0.1755705624818802,
            "Man": 99.82443237304688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.02487361803650856,
            "indian": 0.4508236050605774,
            "black": 99.46104431152344,
            "white": 0.00019950370187871158,
            "middle eastern": 6.799447146477178e-05,
            "latino hispanic": 0.06299267709255219
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 15.904683113098145,
            "disgust": 0.0005208898801356554,
            "fear": 1.310011863708496,
            "happy": 2.9268054962158203,
            "sad": 27.976333618164062,
            "surprise": 0.0023275529965758324,
            "neutral": 51.87931823730469
        },
        "dominant_emotion": "neutral"
    }
]
let roofer_data3 = [
    {
        "age": 24,
        "region": {
            "x": 888,
            "y": 152,
            "w": 34,
            "h": 34,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.0455422401428223,
            "Man": 98.95446014404297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.74708092212677,
            "indian": 0.5700498819351196,
            "black": 0.07670896500349045,
            "white": 78.2271728515625,
            "middle eastern": 12.376413345336914,
            "latino hispanic": 8.002582550048828
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 11.96201229095459,
            "disgust": 0.006834857631474733,
            "fear": 56.939125061035156,
            "happy": 1.9719817638397217,
            "sad": 24.677085876464844,
            "surprise": 0.1910383701324463,
            "neutral": 4.251913547515869
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 27,
        "region": {
            "x": 1035,
            "y": 185,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.5952428579330444,
            "Man": 99.40475463867188
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 30.23464012145996,
            "indian": 8.6676025390625,
            "black": 4.189289569854736,
            "white": 17.248071670532227,
            "middle eastern": 11.564798355102539,
            "latino hispanic": 28.09559440612793
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.740755796432495,
            "disgust": 4.5301160156441256e-08,
            "fear": 0.004474413115531206,
            "happy": 0.43647798895835876,
            "sad": 2.752350330352783,
            "surprise": 3.423431917326525e-05,
            "neutral": 93.06591033935547
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 369,
            "y": 152,
            "w": 41,
            "h": 41,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 9.287431716918945,
            "Man": 90.71257019042969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0004642893036361784,
            "indian": 0.0009086625068448484,
            "black": 1.4351203390106093e-05,
            "white": 98.65852355957031,
            "middle eastern": 0.813405454158783,
            "latino hispanic": 0.5266732573509216
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.012917516753077507,
            "disgust": 0.00010377149737905711,
            "fear": 0.003982066176831722,
            "happy": 99.09967803955078,
            "sad": 0.004912292119115591,
            "surprise": 0.000466405414044857,
            "neutral": 0.8779287934303284
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 1180,
            "y": 159,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.13522498309612274,
            "Man": 99.86477661132812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0005826000706292689,
            "indian": 0.0012031744699925184,
            "black": 3.568966712919064e-05,
            "white": 98.36300659179688,
            "middle eastern": 0.8592228889465332,
            "latino hispanic": 0.7759360074996948
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.2976436614990234,
            "disgust": 0.002918530721217394,
            "fear": 49.6845817565918,
            "happy": 41.112510681152344,
            "sad": 4.373055458068848,
            "surprise": 0.43000078201293945,
            "neutral": 1.0992950201034546
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 26,
        "region": {
            "x": 278,
            "y": 169,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 99.71809387207031,
            "Man": 0.2819039523601532
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 58.070518493652344,
            "indian": 2.335662603378296,
            "black": 0.7689352035522461,
            "white": 9.11032772064209,
            "middle eastern": 1.743614673614502,
            "latino hispanic": 27.970949172973633
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 18.618846893310547,
            "disgust": 0.032341353595256805,
            "fear": 7.42280387878418,
            "happy": 43.17212677001953,
            "sad": 9.03637981414795,
            "surprise": 0.9369911551475525,
            "neutral": 20.780513763427734
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 497,
            "y": 179,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.841766595840454,
            "Man": 98.15824127197266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.799903869628906,
            "indian": 2.4515583515167236,
            "black": 0.6966716051101685,
            "white": 51.577430725097656,
            "middle eastern": 17.632862091064453,
            "latino hispanic": 22.841571807861328
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.20679126679897308,
            "disgust": 9.537258301861584e-05,
            "fear": 0.5452893972396851,
            "happy": 90.68677520751953,
            "sad": 0.823566198348999,
            "surprise": 0.001007524086162448,
            "neutral": 7.736477375030518
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 217,
            "y": 189,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 90.96500396728516,
            "Man": 9.034996032714844
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.002527212956920266,
            "indian": 0.0021420049015432596,
            "black": 0.0001211778653669171,
            "white": 97.12886047363281,
            "middle eastern": 1.4925708770751953,
            "latino hispanic": 1.3737683296203613
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.9643802967882493e-09,
            "disgust": 2.545864037365917e-15,
            "fear": 4.056487341586035e-07,
            "happy": 99.99579620361328,
            "sad": 0.004132938105612993,
            "surprise": 7.326221573844549e-11,
            "neutral": 6.995986041147262e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 609,
            "y": 199,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.057673454284668,
            "Man": 98.94232177734375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.859502792358398,
            "indian": 9.798047065734863,
            "black": 2.293412923812866,
            "white": 35.13942337036133,
            "middle eastern": 21.88701820373535,
            "latino hispanic": 21.022602081298828
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 87.60723876953125,
            "disgust": 0.00016658495587762445,
            "fear": 2.3910512924194336,
            "happy": 0.22282405197620392,
            "sad": 9.657557487487793,
            "surprise": 0.010928399860858917,
            "neutral": 0.11023428291082382
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 27,
        "region": {
            "x": 834,
            "y": 252,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 1.944460153579712,
            "Man": 98.05553436279297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2755752503871918,
            "indian": 0.2562601566314697,
            "black": 0.02173379808664322,
            "white": 84.99048614501953,
            "middle eastern": 6.829766750335693,
            "latino hispanic": 7.626170635223389
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.512208397500217e-05,
            "disgust": 5.4343129995970685e-09,
            "fear": 7.787573849782348e-06,
            "happy": 95.81013488769531,
            "sad": 0.002498031361028552,
            "surprise": 0.0005292951827868819,
            "neutral": 4.1867852210998535
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 69,
            "y": 232,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 1.2639515399932861,
            "Man": 98.73605346679688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00011081553384428844,
            "indian": 0.0005075066001154482,
            "black": 9.249853974324651e-06,
            "white": 99.37772369384766,
            "middle eastern": 0.4171881079673767,
            "latino hispanic": 0.20445184409618378
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00042549619683995843,
            "disgust": 2.5748533516889438e-05,
            "fear": 0.004466152284294367,
            "happy": 85.8154525756836,
            "sad": 0.7816447615623474,
            "surprise": 0.00014855843619443476,
            "neutral": 13.397838592529297
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 438,
            "y": 228,
            "w": 78,
            "h": 78,
            "left_eye": [
                487,
                255
            ],
            "right_eye": [
                467,
                256
            ]
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 2.700838565826416,
            "Man": 97.29915618896484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.05748829245567322,
            "indian": 0.09966634213924408,
            "black": 0.007092120125889778,
            "white": 85.18698120117188,
            "middle eastern": 8.632423400878906,
            "latino hispanic": 6.016350269317627
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2606351375579834,
            "disgust": 5.2462924941210076e-05,
            "fear": 0.00565737672150135,
            "happy": 81.57942962646484,
            "sad": 4.632368564605713,
            "surprise": 0.005228182766586542,
            "neutral": 12.516634941101074
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 523,
            "y": 258,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 10.404077529907227,
            "Man": 89.59591674804688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.01526460237801075,
            "indian": 0.014083132147789001,
            "black": 0.0009398147230967879,
            "white": 95.01593017578125,
            "middle eastern": 2.64098858833313,
            "latino hispanic": 2.3127951622009277
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.5058512687683105,
            "disgust": 0.0008407964487560093,
            "fear": 38.77532958984375,
            "happy": 0.27105844020843506,
            "sad": 50.74875259399414,
            "surprise": 0.02982415072619915,
            "neutral": 5.668342113494873
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 30,
        "region": {
            "x": 157,
            "y": 271,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.3842058479785919,
            "Man": 99.61579132080078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.3628556728363037,
            "indian": 7.366304874420166,
            "black": 3.305840015411377,
            "white": 41.0203971862793,
            "middle eastern": 25.920408248901367,
            "latino hispanic": 19.024194717407227
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.024803657084703445,
            "disgust": 6.499053597508464e-07,
            "fear": 0.002354969270527363,
            "happy": 93.80835723876953,
            "sad": 0.08340173959732056,
            "surprise": 0.006538549438118935,
            "neutral": 6.074547290802002
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 698,
            "y": 298,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 1.3079705238342285,
            "Man": 98.69202423095703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0011314252624288201,
            "indian": 0.0005883375415578485,
            "black": 4.768955477629788e-05,
            "white": 98.44427490234375,
            "middle eastern": 0.5382070541381836,
            "latino hispanic": 1.0157451629638672
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5729305148124695,
            "disgust": 2.399973527644761e-05,
            "fear": 0.7422966361045837,
            "happy": 50.52772903442383,
            "sad": 0.007339557632803917,
            "surprise": 46.99043273925781,
            "neutral": 1.1592479944229126
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 76,
            "y": 348,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.7149562239646912,
            "Man": 99.28504180908203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.44818115234375,
            "indian": 9.706295013427734,
            "black": 10.643328666687012,
            "white": 17.2359619140625,
            "middle eastern": 12.535726547241211,
            "latino hispanic": 34.430511474609375
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.18836313486099243,
            "disgust": 4.526768737633802e-09,
            "fear": 0.0016774674877524376,
            "happy": 99.79006958007812,
            "sad": 0.00034577000769786537,
            "surprise": 0.0005570414359681308,
            "neutral": 0.0189853236079216
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 491,
            "y": 351,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.2298556566238403,
            "Man": 98.77014923095703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2917409837245941,
            "indian": 0.2942890226840973,
            "black": 0.030261186882853508,
            "white": 82.46833038330078,
            "middle eastern": 9.223128318786621,
            "latino hispanic": 7.692253589630127
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.010869435966014862,
            "disgust": 0.002197191584855318,
            "fear": 2.727517604827881,
            "happy": 41.51568603515625,
            "sad": 0.02537691593170166,
            "surprise": 0.5293012857437134,
            "neutral": 55.189056396484375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 990,
            "y": 379,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.49586015939712524,
            "Man": 99.50414276123047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.645832359790802,
            "indian": 0.6396872401237488,
            "black": 0.0808127373456955,
            "white": 72.62840270996094,
            "middle eastern": 13.020721435546875,
            "latino hispanic": 12.984538078308105
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00031264068093150854,
            "disgust": 2.8424789189074318e-09,
            "fear": 0.0008292615530081093,
            "happy": 99.3574447631836,
            "sad": 0.0010874313302338123,
            "surprise": 0.000574046338442713,
            "neutral": 0.639754056930542
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 410,
            "y": 825,
            "w": 91,
            "h": 91,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.03972390666604042,
            "Man": 99.96027374267578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00016367387434002012,
            "indian": 0.00021558496518991888,
            "black": 1.6348665212717606e-06,
            "white": 99.13737487792969,
            "middle eastern": 0.5754651427268982,
            "latino hispanic": 0.2867845594882965
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0424894094467163,
            "disgust": 5.193729521124624e-06,
            "fear": 0.043891239911317825,
            "happy": 98.55362701416016,
            "sad": 0.011128123849630356,
            "surprise": 0.029340796172618866,
            "neutral": 0.3195187449455261
        },
        "dominant_emotion": "happy"
    }
]
let roofer_data4 = [
    {
        "age": 32,
        "region": {
            "x": 999,
            "y": 124,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.2527587413787842,
            "Man": 99.74723815917969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 31.576618194580078,
            "indian": 4.473175525665283,
            "black": 51.4478759765625,
            "white": 0.8974328637123108,
            "middle eastern": 0.4261029362678528,
            "latino hispanic": 11.178801536560059
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 3.0845818519592285,
            "disgust": 0.007318179123103619,
            "fear": 1.145413875579834,
            "happy": 0.03660590574145317,
            "sad": 13.620668411254883,
            "surprise": 0.026796754449605942,
            "neutral": 82.07862091064453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 1028,
            "y": 252,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.727470338344574,
            "Man": 99.27252197265625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.8178038597106934,
            "indian": 1.0539628267288208,
            "black": 0.2566705644130707,
            "white": 64.3723373413086,
            "middle eastern": 14.948143005371094,
            "latino hispanic": 17.55107879638672
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 10.239785194396973,
            "disgust": 0.12591470777988434,
            "fear": 3.2840421199798584,
            "happy": 0.00035943262628279626,
            "sad": 25.879465103149414,
            "surprise": 0.003465027781203389,
            "neutral": 60.46696090698242
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 1178,
            "y": 269,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.8910755515098572,
            "Man": 99.10892486572266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 23.23051643371582,
            "indian": 6.786411762237549,
            "black": 10.026533126831055,
            "white": 25.15279197692871,
            "middle eastern": 11.793474197387695,
            "latino hispanic": 23.01027488708496
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 90.29881286621094,
            "disgust": 0.27450796961784363,
            "fear": 4.210526943206787,
            "happy": 0.007870189845561981,
            "sad": 3.5745859146118164,
            "surprise": 0.1504562497138977,
            "neutral": 1.4832409620285034
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 27,
        "region": {
            "x": 227,
            "y": 280,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.0218835286796093,
            "Man": 99.97811889648438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 17.130037307739258,
            "indian": 9.421147346496582,
            "black": 6.807323455810547,
            "white": 19.840848922729492,
            "middle eastern": 17.397151947021484,
            "latino hispanic": 29.403486251831055
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.5633462071418762,
            "disgust": 0.001950117526575923,
            "fear": 0.07201117277145386,
            "happy": 0.0022860148455947638,
            "sad": 4.895205020904541,
            "surprise": 0.0005166430491954088,
            "neutral": 94.46468353271484
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 390,
            "y": 294,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.1486513465642929,
            "Man": 99.85134887695312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.199678421020508,
            "indian": 9.308246612548828,
            "black": 3.587993621826172,
            "white": 21.216075897216797,
            "middle eastern": 16.600645065307617,
            "latino hispanic": 34.08736038208008
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0595129020512104,
            "disgust": 0.020190907642245293,
            "fear": 2.418809413909912,
            "happy": 85.2432632446289,
            "sad": 2.9488253593444824,
            "surprise": 0.042959824204444885,
            "neutral": 9.266435623168945
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 807,
            "y": 106,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.8149782419204712,
            "Man": 99.18502044677734
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.631797790527344,
            "indian": 0.15127074718475342,
            "black": 0.04228776693344116,
            "white": 88.18556213378906,
            "middle eastern": 1.8176246881484985,
            "latino hispanic": 3.1714529991149902
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.38377827405929565,
            "disgust": 1.758570215315558e-05,
            "fear": 52.502323150634766,
            "happy": 18.714744567871094,
            "sad": 10.39593505859375,
            "surprise": 6.886654853820801,
            "neutral": 11.116548538208008
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 28,
        "region": {
            "x": 491,
            "y": 319,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.039179764688014984,
            "Man": 99.96082305908203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.051145553588867,
            "indian": 11.159113883972168,
            "black": 5.670402526855469,
            "white": 18.029294967651367,
            "middle eastern": 13.283920288085938,
            "latino hispanic": 36.80612564086914
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.6345589756965637,
            "disgust": 0.0013957828050479293,
            "fear": 0.03711190074682236,
            "happy": 0.0002064940199488774,
            "sad": 1.4433799982070923,
            "surprise": 0.010833270847797394,
            "neutral": 97.87251281738281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 886,
            "y": 183,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 2.786520004272461,
            "Man": 97.21348571777344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 34.39826965332031,
            "indian": 10.773436546325684,
            "black": 24.845693588256836,
            "white": 7.9321513175964355,
            "middle eastern": 5.278444766998291,
            "latino hispanic": 16.77200698852539
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.077642917633057,
            "disgust": 1.2394418716430664,
            "fear": 48.34951400756836,
            "happy": 0.0931888297200203,
            "sad": 44.981895446777344,
            "surprise": 0.022194571793079376,
            "neutral": 1.2361284494400024
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 28,
        "region": {
            "x": 757,
            "y": 247,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.2730957567691803,
            "Man": 99.72689819335938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 98.46641540527344,
            "indian": 0.6948595643043518,
            "black": 0.03846166282892227,
            "white": 0.26075565814971924,
            "middle eastern": 0.0020430819131433964,
            "latino hispanic": 0.5374607443809509
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.6206605434417725,
            "disgust": 0.9028646945953369,
            "fear": 5.568774700164795,
            "happy": 45.12590026855469,
            "sad": 30.111248016357422,
            "surprise": 0.1673911213874817,
            "neutral": 15.503162384033203
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 724,
            "y": 141,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 2.2909278869628906,
            "Man": 97.70906829833984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.871992111206055,
            "indian": 3.5080864429473877,
            "black": 1.0924679040908813,
            "white": 44.756649017333984,
            "middle eastern": 17.347209930419922,
            "latino hispanic": 25.423595428466797
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.24284107983112335,
            "disgust": 0.11876685917377472,
            "fear": 16.924179077148438,
            "happy": 2.712418794631958,
            "sad": 79.72380065917969,
            "surprise": 4.1648188926046714e-05,
            "neutral": 0.277953177690506
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 26,
        "region": {
            "x": 694,
            "y": 266,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.00850770529359579,
            "Man": 99.99148559570312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.704511642456055,
            "indian": 11.168975830078125,
            "black": 7.419839382171631,
            "white": 24.1055850982666,
            "middle eastern": 22.25895881652832,
            "latino hispanic": 28.34212875366211
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 32.260555267333984,
            "disgust": 0.01467703003436327,
            "fear": 5.022919654846191,
            "happy": 0.03974413126707077,
            "sad": 1.4037091732025146,
            "surprise": 3.24981951713562,
            "neutral": 58.008575439453125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 497,
            "y": 150,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.6849227547645569,
            "Man": 99.31507110595703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.560265064239502,
            "indian": 0.7098520398139954,
            "black": 98.5482177734375,
            "white": 0.0031859432347118855,
            "middle eastern": 0.004374118056148291,
            "latino hispanic": 0.17410169541835785
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.6014633178710938,
            "disgust": 0.010212153196334839,
            "fear": 0.10109646618366241,
            "happy": 71.46808624267578,
            "sad": 10.852836608886719,
            "surprise": 0.027516713365912437,
            "neutral": 16.93878746032715
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 592,
            "y": 289,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.11851783096790314,
            "Man": 99.88148498535156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.9450671672821045,
            "indian": 18.86664390563965,
            "black": 3.1932761669158936,
            "white": 12.225798606872559,
            "middle eastern": 19.227306365966797,
            "latino hispanic": 42.54191589355469
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 8.353926658630371,
            "disgust": 0.7785091400146484,
            "fear": 0.7827981114387512,
            "happy": 0.08008333295583725,
            "sad": 87.72807312011719,
            "surprise": 0.01148514449596405,
            "neutral": 2.2651278972625732
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 38,
        "region": {
            "x": 873,
            "y": 297,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.4122474789619446,
            "Man": 99.58775329589844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.233149528503418,
            "indian": 10.951868057250977,
            "black": 3.729933977127075,
            "white": 21.653587341308594,
            "middle eastern": 19.71670150756836,
            "latino hispanic": 34.714759826660156
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.2044599950313568,
            "disgust": 8.582352165831253e-06,
            "fear": 0.6635401248931885,
            "happy": 0.026389697566628456,
            "sad": 98.1141357421875,
            "surprise": 0.0034754546359181404,
            "neutral": 0.9879971146583557
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 33,
        "region": {
            "x": 161,
            "y": 346,
            "w": 62,
            "h": 62,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.04403471574187279,
            "Man": 99.9559555053711
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 34.05199432373047,
            "indian": 12.495050430297852,
            "black": 13.967723846435547,
            "white": 6.7887725830078125,
            "middle eastern": 5.083127975463867,
            "latino hispanic": 27.613332748413086
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.483043670654297,
            "disgust": 0.7032107710838318,
            "fear": 8.879287719726562,
            "happy": 0.10675925016403198,
            "sad": 58.10182189941406,
            "surprise": 0.021503085270524025,
            "neutral": 28.704368591308594
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 753,
            "y": 325,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0016215360956266522,
            "Man": 99.99838256835938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 29.929563522338867,
            "indian": 13.118444442749023,
            "black": 18.050783157348633,
            "white": 9.50438117980957,
            "middle eastern": 10.22378158569336,
            "latino hispanic": 19.17304229736328
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.9941686391830444,
            "disgust": 0.0030470413621515036,
            "fear": 1.7942440509796143,
            "happy": 0.003863240359351039,
            "sad": 8.911584854125977,
            "surprise": 0.0024982686154544353,
            "neutral": 87.29059600830078
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 1009,
            "y": 369,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.6134105920791626,
            "Man": 99.38658905029297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 14.340132713317871,
            "indian": 10.148195266723633,
            "black": 3.6128945350646973,
            "white": 20.32231903076172,
            "middle eastern": 14.338387489318848,
            "latino hispanic": 37.238075256347656
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.824259042739868,
            "disgust": 0.09127838164567947,
            "fear": 1.8043283224105835,
            "happy": 0.04777370020747185,
            "sad": 12.843073844909668,
            "surprise": 0.007914743386209011,
            "neutral": 81.38137817382812
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 292,
            "y": 415,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.6582770943641663,
            "Man": 99.34172821044922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 24.422748565673828,
            "indian": 8.16932201385498,
            "black": 4.5443243980407715,
            "white": 18.311748504638672,
            "middle eastern": 9.683125495910645,
            "latino hispanic": 34.86872863769531
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 17.363698959350586,
            "disgust": 3.708519458770752,
            "fear": 2.302229881286621,
            "happy": 0.011697158217430115,
            "sad": 62.52702331542969,
            "surprise": 0.0013673739740625024,
            "neutral": 14.08546257019043
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 26,
        "region": {
            "x": 324,
            "y": 351,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.015100506134331226,
            "Man": 99.98489379882812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.05114459991455,
            "indian": 9.714609146118164,
            "black": 6.4401373863220215,
            "white": 23.656644821166992,
            "middle eastern": 22.787090301513672,
            "latino hispanic": 22.35037612915039
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.06714097410440445,
            "disgust": 0.30287784337997437,
            "fear": 20.55591583251953,
            "happy": 55.6239128112793,
            "sad": 5.228821277618408,
            "surprise": 0.11625445634126663,
            "neutral": 18.105079650878906
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 1132,
            "y": 346,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.13839805126190186,
            "Man": 99.8615951538086
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 55.163841247558594,
            "indian": 4.961459636688232,
            "black": 2.9964592456817627,
            "white": 13.23896312713623,
            "middle eastern": 3.9365622997283936,
            "latino hispanic": 19.70270538330078
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.11067533493042,
            "disgust": 0.00017588792252354324,
            "fear": 0.25869572162628174,
            "happy": 0.017912043258547783,
            "sad": 22.488033294677734,
            "surprise": 0.005736307241022587,
            "neutral": 75.11876678466797
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 541,
            "y": 383,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.12234749644994736,
            "Man": 99.87764739990234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.888527870178223,
            "indian": 9.745142936706543,
            "black": 5.543371200561523,
            "white": 21.156414031982422,
            "middle eastern": 16.490449905395508,
            "latino hispanic": 33.176090240478516
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.850081205368042,
            "disgust": 0.0003769118047785014,
            "fear": 0.5619270205497742,
            "happy": 0.14411088824272156,
            "sad": 36.628055572509766,
            "surprise": 0.13113828003406525,
            "neutral": 59.68430709838867
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 702,
            "y": 414,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.5586792826652527,
            "Man": 99.44132232666016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 16.474380493164062,
            "indian": 8.766051292419434,
            "black": 6.34451150894165,
            "white": 11.377516746520996,
            "middle eastern": 7.274783611297607,
            "latino hispanic": 49.76275634765625
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.03448270633816719,
            "disgust": 2.7728589202524745e-08,
            "fear": 0.00013026905071455985,
            "happy": 6.162762019812362e-06,
            "sad": 0.05005800724029541,
            "surprise": 0.0005600624135695398,
            "neutral": 99.9147720336914
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 32,
            "y": 407,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.06732790172100067,
            "Man": 99.93267059326172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 38.097564697265625,
            "indian": 8.42703914642334,
            "black": 11.093951225280762,
            "white": 5.864192962646484,
            "middle eastern": 3.103505849838257,
            "latino hispanic": 33.41375732421875
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.6470625400543213,
            "disgust": 4.145985440118238e-05,
            "fear": 0.08551361411809921,
            "happy": 2.243769631604664e-05,
            "sad": 12.668111801147461,
            "surprise": 7.71680279285647e-05,
            "neutral": 85.59916687011719
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 387,
            "y": 371,
            "w": 108,
            "h": 108,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.014325877651572227,
            "Man": 99.98567199707031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1528005599975586,
            "indian": 1.86759352684021,
            "black": 0.22673504054546356,
            "white": 67.53817749023438,
            "middle eastern": 14.258492469787598,
            "latino hispanic": 15.956198692321777
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2248600721359253,
            "disgust": 1.4457472562789917,
            "fear": 0.6751166582107544,
            "happy": 0.024791860952973366,
            "sad": 95.5977554321289,
            "surprise": 6.228635902516544e-05,
            "neutral": 1.0316686630249023
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 30,
        "region": {
            "x": 874,
            "y": 413,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.04650483652949333,
            "Man": 99.95349884033203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 63.629112243652344,
            "indian": 4.835098743438721,
            "black": 11.17744255065918,
            "white": 1.7570089101791382,
            "middle eastern": 0.7966920733451843,
            "latino hispanic": 17.80463981628418
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 12.313957214355469,
            "disgust": 0.09610430896282196,
            "fear": 0.13938917219638824,
            "happy": 0.0008528949110768735,
            "sad": 10.66641616821289,
            "surprise": 0.11440064013004303,
            "neutral": 76.66888427734375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 38,
        "region": {
            "x": 614,
            "y": 474,
            "w": 92,
            "h": 92,
            "left_eye": [
                674,
                510
            ],
            "right_eye": [
                644,
                508
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.0010306219337508082,
            "Man": 99.99897766113281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.1813682317733765,
            "indian": 16.658870697021484,
            "black": 9.93115520477295,
            "white": 8.006346702575684,
            "middle eastern": 38.37098693847656,
            "latino hispanic": 25.851282119750977
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.6855567693710327,
            "disgust": 2.710683020268334e-07,
            "fear": 3.985319926869124e-05,
            "happy": 9.786940609046724e-06,
            "sad": 0.06980288028717041,
            "surprise": 3.413223021198064e-05,
            "neutral": 98.24456024169922
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 322,
            "y": 512,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.11964496225118637,
            "Man": 99.8803482055664
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 37.753082275390625,
            "indian": 7.704196453094482,
            "black": 15.848288536071777,
            "white": 5.053030967712402,
            "middle eastern": 2.4059693813323975,
            "latino hispanic": 31.23543357849121
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.1446518748998642,
            "disgust": 1.509535785260141e-08,
            "fear": 0.16279298067092896,
            "happy": 0.0024708083365112543,
            "sad": 0.5278432369232178,
            "surprise": 0.002579442225396633,
            "neutral": 99.15966033935547
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 777,
            "y": 535,
            "w": 94,
            "h": 94,
            "left_eye": [
                841,
                570
            ],
            "right_eye": [
                806,
                569
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.004532441962510347,
            "Man": 99.99546813964844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3345812559127808,
            "indian": 21.523929595947266,
            "black": 1.1483429670333862,
            "white": 11.453157424926758,
            "middle eastern": 30.187732696533203,
            "latino hispanic": 34.35226058959961
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.0347342491149902,
            "disgust": 0.003555033355951309,
            "fear": 0.3194366991519928,
            "happy": 0.785031795501709,
            "sad": 5.360747814178467,
            "surprise": 0.006229758728295565,
            "neutral": 91.49026489257812
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 1170,
            "y": 453,
            "w": 96,
            "h": 96,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.9973267912864685,
            "Man": 99.00267028808594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 37.567283630371094,
            "indian": 10.554455757141113,
            "black": 16.743778228759766,
            "white": 5.25799036026001,
            "middle eastern": 4.0482378005981445,
            "latino hispanic": 25.82825469970703
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.608128070831299,
            "disgust": 0.00011345851089572534,
            "fear": 0.12087598443031311,
            "happy": 0.0011684097116813064,
            "sad": 2.785494089126587,
            "surprise": 0.002296748338267207,
            "neutral": 93.48191833496094
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 172,
            "y": 456,
            "w": 99,
            "h": 99,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.01614515483379364,
            "Man": 99.98384857177734
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.805508613586426,
            "indian": 11.532318115234375,
            "black": 38.497276306152344,
            "white": 4.503966808319092,
            "middle eastern": 2.53570556640625,
            "latino hispanic": 29.125228881835938
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.01802646927535534,
            "disgust": 1.6876170150226244e-07,
            "fear": 0.08434832096099854,
            "happy": 0.08575230836868286,
            "sad": 1.574108362197876,
            "surprise": 0.006359168328344822,
            "neutral": 98.23139953613281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 486,
            "y": 552,
            "w": 113,
            "h": 113,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.378042608499527,
            "Man": 99.62195587158203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.061552047729492,
            "indian": 10.327742576599121,
            "black": 37.70452880859375,
            "white": 8.6922025680542,
            "middle eastern": 6.757574558258057,
            "latino hispanic": 23.456401824951172
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.08070511370897293,
            "disgust": 6.677312869296514e-11,
            "fear": 0.0014265826903283596,
            "happy": 0.003960035741329193,
            "sad": 3.743685245513916,
            "surprise": 4.481474320527923e-07,
            "neutral": 96.17021179199219
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 54,
            "y": 555,
            "w": 109,
            "h": 109,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.1899346560239792,
            "Man": 99.81006622314453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.458259105682373,
            "indian": 10.070564270019531,
            "black": 67.25029754638672,
            "white": 1.4740346670150757,
            "middle eastern": 1.313774585723877,
            "latino hispanic": 15.433065414428711
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.0014624365139752626,
            "disgust": 8.889858962087428e-15,
            "fear": 0.019728852435946465,
            "happy": 0.03439855948090553,
            "sad": 0.13614888489246368,
            "surprise": 0.00010171175381401554,
            "neutral": 99.80815124511719
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 1079,
            "y": 540,
            "w": 107,
            "h": 107,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.1338658332824707,
            "Man": 98.86614227294922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 16.93987464904785,
            "indian": 13.732935905456543,
            "black": 25.022247314453125,
            "white": 8.495981216430664,
            "middle eastern": 6.379670143127441,
            "latino hispanic": 29.429292678833008
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 14.092042922973633,
            "disgust": 0.00015526782954111695,
            "fear": 0.04740369692444801,
            "happy": 3.842034129775129e-05,
            "sad": 23.789087295532227,
            "surprise": 4.294376049074344e-05,
            "neutral": 62.07122802734375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 751,
            "y": 688,
            "w": 151,
            "h": 151,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 5.93242073059082,
            "Man": 94.06758117675781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 21.57718276977539,
            "indian": 7.2785420417785645,
            "black": 20.240615844726562,
            "white": 3.920964479446411,
            "middle eastern": 1.2742760181427002,
            "latino hispanic": 45.70841979980469
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.4159931540489197,
            "disgust": 2.3024512074698578e-08,
            "fear": 2.1263560483930632e-05,
            "happy": 0.10131829977035522,
            "sad": 0.17125263810157776,
            "surprise": 1.516473275842145e-07,
            "neutral": 99.31141662597656
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 231,
            "y": 665,
            "w": 95,
            "h": 95,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.02671293541789055,
            "Man": 99.9732894897461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.580533027648926,
            "indian": 18.431764602661133,
            "black": 15.062813758850098,
            "white": 8.629865646362305,
            "middle eastern": 7.073729515075684,
            "latino hispanic": 42.22129440307617
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.5172903537750244,
            "disgust": 0.032736413180828094,
            "fear": 0.8670324683189392,
            "happy": 0.5295796394348145,
            "sad": 23.73674201965332,
            "surprise": 1.0298922061920166,
            "neutral": 71.28672790527344
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 459,
            "y": 768,
            "w": 118,
            "h": 118,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.09197241812944412,
            "Man": 99.90802764892578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 16.70100975036621,
            "indian": 8.881752967834473,
            "black": 5.334590435028076,
            "white": 8.418938636779785,
            "middle eastern": 4.581443786621094,
            "latino hispanic": 56.08226013183594
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 7.76467752456665,
            "disgust": 5.605954811471747e-06,
            "fear": 0.0064760847017169,
            "happy": 0.01351234968751669,
            "sad": 4.5136003494262695,
            "surprise": 3.788972389884293e-05,
            "neutral": 87.70169067382812
        },
        "dominant_emotion": "neutral"
    }
]

console.log("Meta Results for Roofer:");
const data = roofer_data.concat(roofer_data2, roofer_data3, roofer_data4);
console.log(processData(data));