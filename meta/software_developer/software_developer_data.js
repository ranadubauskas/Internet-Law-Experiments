const { processData } = require('../../data_processing.js');

let software_developer_data = [
    {
        "age": 23,
        "region": {
            "x": 863,
            "y": 174,
            "w": 34,
            "h": 34,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 3.076430320739746,
            "Man": 96.92356872558594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.462415337562561,
            "indian": 10.227334022521973,
            "black": 1.222029209136963,
            "white": 33.71156692504883,
            "middle eastern": 35.681556701660156,
            "latino hispanic": 17.695098876953125
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 55.72200393676758,
            "disgust": 0.011615167371928692,
            "fear": 22.6134033203125,
            "happy": 0.1589982658624649,
            "sad": 19.66053581237793,
            "surprise": 0.28892260789871216,
            "neutral": 1.5445153713226318
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 25,
        "region": {
            "x": 218,
            "y": 180,
            "w": 35,
            "h": 35,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.301122784614563,
            "Man": 98.6988754272461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 32.64491653442383,
            "indian": 5.736376762390137,
            "black": 2.0206522941589355,
            "white": 34.08814239501953,
            "middle eastern": 13.153952598571777,
            "latino hispanic": 12.355962753295898
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 16.666223526000977,
            "disgust": 0.5232064723968506,
            "fear": 81.61067962646484,
            "happy": 0.006266731768846512,
            "sad": 1.051510214805603,
            "surprise": 0.12508028745651245,
            "neutral": 0.017035195603966713
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 25,
        "region": {
            "x": 764,
            "y": 217,
            "w": 34,
            "h": 34,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 12.255714416503906,
            "Man": 87.7442855834961
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.5406287312507629,
            "indian": 1.1514986753463745,
            "black": 0.09643677622079849,
            "white": 72.62594604492188,
            "middle eastern": 13.774271011352539,
            "latino hispanic": 11.811223030090332
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.05629626661539078,
            "disgust": 8.642074611486805e-09,
            "fear": 90.88391876220703,
            "happy": 1.5905518679915076e-08,
            "sad": 7.255100250244141,
            "surprise": 0.0005008860025554895,
            "neutral": 1.804186224937439
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 29,
        "region": {
            "x": 843,
            "y": 261,
            "w": 44,
            "h": 44,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 10.707618713378906,
            "Man": 89.2923812866211
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.24420166015625,
            "indian": 9.772072792053223,
            "black": 2.086392641067505,
            "white": 26.338359832763672,
            "middle eastern": 25.80314826965332,
            "latino hispanic": 25.75582504272461
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.6262913942337036,
            "disgust": 0.03575729578733444,
            "fear": 1.1606806516647339,
            "happy": 47.78033447265625,
            "sad": 5.81906270980835,
            "surprise": 0.1649409830570221,
            "neutral": 44.412933349609375
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 666,
            "y": 270,
            "w": 40,
            "h": 40,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.8741751313209534,
            "Man": 99.12582397460938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.81083345413208,
            "indian": 8.541041374206543,
            "black": 0.6560524702072144,
            "white": 24.986291885375977,
            "middle eastern": 40.19575500488281,
            "latino hispanic": 23.810028076171875
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 3.8222718238830566,
            "disgust": 3.914241915481398e-06,
            "fear": 4.066338062286377,
            "happy": 1.0808100700378418,
            "sad": 26.199098587036133,
            "surprise": 0.0067746397107839584,
            "neutral": 64.82470703125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 379,
            "y": 198,
            "w": 44,
            "h": 44,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 4.042279243469238,
            "Man": 95.95772552490234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.980088710784912,
            "indian": 15.108731269836426,
            "black": 2.293238639831543,
            "white": 21.51392936706543,
            "middle eastern": 35.02407455444336,
            "latino hispanic": 24.079946517944336
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.0659303665161133,
            "disgust": 9.16073439327647e-09,
            "fear": 16.473995208740234,
            "happy": 1.626572156965267e-05,
            "sad": 77.90953826904297,
            "surprise": 1.1827426533272956e-05,
            "neutral": 4.550506591796875
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 22,
        "region": {
            "x": 520,
            "y": 276,
            "w": 42,
            "h": 42,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.41576334834098816,
            "Man": 99.58423614501953
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0021669832058250904,
            "indian": 0.028906093910336494,
            "black": 0.0002899858809541911,
            "white": 91.58656311035156,
            "middle eastern": 6.658166885375977,
            "latino hispanic": 1.7239123582839966
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.9393064379692078,
            "disgust": 0.00037308959872461855,
            "fear": 0.5631518959999084,
            "happy": 71.2295150756836,
            "sad": 1.744290828704834,
            "surprise": 0.2252386212348938,
            "neutral": 25.298131942749023
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 988,
            "y": 230,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.13277404010295868,
            "Man": 99.86722564697266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.05509966239333153,
            "indian": 2.1584715843200684,
            "black": 0.03127915412187576,
            "white": 33.66542434692383,
            "middle eastern": 50.250816345214844,
            "latino hispanic": 13.838911056518555
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 86.21620178222656,
            "disgust": 2.257008873129962e-06,
            "fear": 11.031158447265625,
            "happy": 0.7331997156143188,
            "sad": 1.444788932800293,
            "surprise": 0.002204997930675745,
            "neutral": 0.5724488496780396
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 25,
        "region": {
            "x": 256,
            "y": 237,
            "w": 44,
            "h": 44,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.8053052425384521,
            "Man": 98.19469451904297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7704713940620422,
            "indian": 11.601255416870117,
            "black": 0.17186114192008972,
            "white": 12.380146980285645,
            "middle eastern": 59.200199127197266,
            "latino hispanic": 15.876066207885742
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.37061768770217896,
            "disgust": 0.007435334846377373,
            "fear": 86.25404357910156,
            "happy": 0.001267826184630394,
            "sad": 8.6901273727417,
            "surprise": 2.784759044647217,
            "neutral": 1.8917474746704102
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 29,
        "region": {
            "x": 1120,
            "y": 135,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 14.444541931152344,
            "Man": 85.55545806884766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.719850778579712,
            "indian": 0.46063777804374695,
            "black": 0.306632399559021,
            "white": 80.42362976074219,
            "middle eastern": 11.269075393676758,
            "latino hispanic": 5.820181369781494
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.3705851137638092,
            "disgust": 1.3942088116891682e-05,
            "fear": 41.271244049072266,
            "happy": 3.072261333465576,
            "sad": 20.188247680664062,
            "surprise": 1.0931845903396606,
            "neutral": 34.00446319580078
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 25,
        "region": {
            "x": 944,
            "y": 302,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.7592617869377136,
            "Man": 99.24073791503906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.001929280930198729,
            "indian": 0.022984057664871216,
            "black": 0.00025090761482715607,
            "white": 90.89778137207031,
            "middle eastern": 7.250901222229004,
            "latino hispanic": 1.8261562585830688
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.9372775554656982,
            "disgust": 1.0576678732832079e-07,
            "fear": 3.382441759109497,
            "happy": 0.00047297097626142204,
            "sad": 86.53375244140625,
            "surprise": 1.3944882084615529e-06,
            "neutral": 7.146054267883301
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 145,
            "y": 309,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 5.484041213989258,
            "Man": 94.51596069335938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.05181884765625,
            "indian": 20.65561294555664,
            "black": 2.2752156257629395,
            "white": 17.696481704711914,
            "middle eastern": 25.573083877563477,
            "latino hispanic": 22.747793197631836
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.0788187980651855,
            "disgust": 0.017210667952895164,
            "fear": 0.1824686974287033,
            "happy": 6.5698699951171875,
            "sad": 91.91926574707031,
            "surprise": 0.0037573869340121746,
            "neutral": 0.22861036658287048
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 26,
        "region": {
            "x": 409,
            "y": 317,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 1.2417024374008179,
            "Man": 98.75830078125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0034124525263905525,
            "indian": 0.00035101926187053323,
            "black": 5.829755536979064e-06,
            "white": 99.66426086425781,
            "middle eastern": 0.18165023624897003,
            "latino hispanic": 0.1503244936466217
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5156656503677368,
            "disgust": 7.239244041556958e-06,
            "fear": 0.3177899420261383,
            "happy": 93.8891830444336,
            "sad": 0.12547577917575836,
            "surprise": 0.002817620988935232,
            "neutral": 5.149062156677246
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 22,
        "region": {
            "x": 680,
            "y": 333,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0021117073483765125,
            "Man": 99.99788665771484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 33.95640182495117,
            "indian": 51.15383529663086,
            "black": 4.670273780822754,
            "white": 3.142453670501709,
            "middle eastern": 0.9847689270973206,
            "latino hispanic": 6.0922675132751465
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 23.29585075378418,
            "disgust": 0.0008706276421435177,
            "fear": 20.18368911743164,
            "happy": 0.04220043495297432,
            "sad": 3.084050416946411,
            "surprise": 0.003365147393196821,
            "neutral": 53.38997268676758
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 0,
            "y": 44,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 3.220968008041382,
            "Man": 96.7790298461914
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.05380067601799965,
            "indian": 0.0008833156316541135,
            "black": 5.615493137156591e-06,
            "white": 98.78172302246094,
            "middle eastern": 1.0670368671417236,
            "latino hispanic": 0.0965571403503418
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.478128433227539,
            "disgust": 1.9444367893584058e-08,
            "fear": 76.78472137451172,
            "happy": 1.2744783163070679,
            "sad": 19.25357437133789,
            "surprise": 0.1338113248348236,
            "neutral": 0.07528703659772873
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 29,
        "region": {
            "x": 1105,
            "y": 276,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.00494611170142889,
            "Man": 99.99505615234375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.1449639797210693,
            "indian": 6.4509711265563965,
            "black": 1.0192328691482544,
            "white": 52.41972351074219,
            "middle eastern": 19.628087997436523,
            "latino hispanic": 18.337020874023438
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 28.521787643432617,
            "disgust": 3.4458980735507794e-06,
            "fear": 2.3239738941192627,
            "happy": 0.006059751380234957,
            "sad": 56.53262710571289,
            "surprise": 6.251846207305789e-05,
            "neutral": 12.615498542785645
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 30,
        "region": {
            "x": 375,
            "y": 420,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.014335374347865582,
            "Man": 99.98565673828125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.030004389584064484,
            "indian": 0.46180081367492676,
            "black": 0.009217721410095692,
            "white": 76.33777618408203,
            "middle eastern": 19.75678253173828,
            "latino hispanic": 3.4044253826141357
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 12.215083122253418,
            "disgust": 4.225563898785367e-08,
            "fear": 0.03720845282077789,
            "happy": 0.033967647701501846,
            "sad": 4.825523376464844,
            "surprise": 5.630985469906591e-05,
            "neutral": 82.8881607055664
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 131,
            "y": 429,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 1.1326332092285156,
            "Man": 98.86736297607422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.565476417541504,
            "indian": 5.36362361907959,
            "black": 0.42360472679138184,
            "white": 39.03618621826172,
            "middle eastern": 33.52837371826172,
            "latino hispanic": 18.082735061645508
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 95.72140502929688,
            "disgust": 0.0031556235626339912,
            "fear": 0.30775418877601624,
            "happy": 0.0007942059892229736,
            "sad": 3.655921697616577,
            "surprise": 0.0005088728503324091,
            "neutral": 0.31045854091644287
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 26,
        "region": {
            "x": 796,
            "y": 369,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.025546416640281677,
            "Man": 99.97444915771484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7697786688804626,
            "indian": 1.5645643472671509,
            "black": 0.13332891464233398,
            "white": 63.867435455322266,
            "middle eastern": 24.939367294311523,
            "latino hispanic": 8.725518226623535
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.2397051751613617,
            "disgust": 1.8231614847055655e-20,
            "fear": 0.19504477083683014,
            "happy": 4.67823504379794e-08,
            "sad": 46.313987731933594,
            "surprise": 7.871592266894822e-09,
            "neutral": 53.251258850097656
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 585,
            "y": 437,
            "w": 63,
            "h": 63,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.00012052500096615404,
            "Man": 99.9998779296875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.40238997770848e-10,
            "indian": 2.6749429338224218e-09,
            "black": 4.22520525511505e-13,
            "white": 99.99554443359375,
            "middle eastern": 0.00380752538330853,
            "latino hispanic": 0.0006551087717525661
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.534311056137085,
            "disgust": 3.4514931060783405e-13,
            "fear": 0.014599593356251717,
            "happy": 0.003041720949113369,
            "sad": 1.470362901687622,
            "surprise": 1.6275919278996298e-06,
            "neutral": 95.9776840209961
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 1061,
            "y": 489,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.03267970308661461,
            "Man": 99.96732330322266
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.000181111681740731,
            "indian": 0.00017581858264748007,
            "black": 5.497701067724847e-07,
            "white": 99.60256958007812,
            "middle eastern": 0.22809365391731262,
            "latino hispanic": 0.1689835637807846
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 39.0002555847168,
            "disgust": 0.003911870997399092,
            "fear": 6.362514019012451,
            "happy": 0.00015446566976606846,
            "sad": 27.26676368713379,
            "surprise": 3.920028120774077e-06,
            "neutral": 27.366390228271484
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 34,
        "region": {
            "x": 754,
            "y": 533,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.006992734968662262,
            "Man": 99.99300384521484
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.03078397922217846,
            "indian": 2.8788774013519287,
            "black": 0.03638714179396629,
            "white": 60.99607467651367,
            "middle eastern": 29.267972946166992,
            "latino hispanic": 6.789904594421387
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 14.746721267700195,
            "disgust": 0.00014778807235416025,
            "fear": 0.2094554305076599,
            "happy": 0.7839252352714539,
            "sad": 28.144100189208984,
            "surprise": 0.0017642943421378732,
            "neutral": 56.113887786865234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 463,
            "y": 579,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.010039709508419037,
            "Man": 99.98995971679688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.089024514541961e-06,
            "indian": 7.511179865105078e-05,
            "black": 9.071403184179871e-08,
            "white": 99.28601837158203,
            "middle eastern": 0.5216395854949951,
            "latino hispanic": 0.19226044416427612
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.072708606719971,
            "disgust": 8.954719188380977e-10,
            "fear": 1.316485047340393,
            "happy": 0.0018049897626042366,
            "sad": 46.3554801940918,
            "surprise": 2.0394921307342884e-08,
            "neutral": 47.25352096557617
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 424,
            "y": 810,
            "w": 121,
            "h": 121,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.00593432504683733,
            "Man": 99.99406433105469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.1852878617778515e-08,
            "indian": 2.047336420218926e-05,
            "black": 1.7797118223583652e-09,
            "white": 99.72029876708984,
            "middle eastern": 0.2714807391166687,
            "latino hispanic": 0.008203611709177494
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0010610814206302166,
            "disgust": 4.334622703614633e-21,
            "fear": 1.4895753519539312e-09,
            "happy": 3.2878507028044623e-08,
            "sad": 0.00026283899205736816,
            "surprise": 1.8061657855103497e-12,
            "neutral": 99.9986801147461
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 1069,
            "y": 776,
            "w": 138,
            "h": 138,
            "left_eye": [
                1149,
                832
            ],
            "right_eye": [
                1115,
                828
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.18001796305179596,
            "Man": 99.81998443603516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.005299974232912064,
            "indian": 0.5013533234596252,
            "black": 0.001669270102865994,
            "white": 67.32717895507812,
            "middle eastern": 28.172176361083984,
            "latino hispanic": 3.992316484451294
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.02824474312365055,
            "disgust": 1.1437134617153788e-07,
            "fear": 0.008853291161358356,
            "happy": 9.48160171508789,
            "sad": 0.24949288368225098,
            "surprise": 0.8510425686836243,
            "neutral": 89.38076782226562
        },
        "dominant_emotion": "neutral"
    }
]
let software_developer_data2 = [
    {
        "age": 30,
        "region": {
            "x": 829,
            "y": 9,
            "w": 100,
            "h": 100,
            "left_eye": [
                896,
                49
            ],
            "right_eye": [
                859,
                50
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.008130489848554134,
            "Man": 99.99186706542969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 65.77033233642578,
            "indian": 9.85919189453125,
            "black": 4.391249179840088,
            "white": 1.1943857669830322,
            "middle eastern": 0.3113595247268677,
            "latino hispanic": 18.47348403930664
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0290602445602417,
            "disgust": 7.058230977463609e-08,
            "fear": 0.5638291239738464,
            "happy": 44.089237213134766,
            "sad": 3.4093875885009766,
            "surprise": 0.0009193983860313892,
            "neutral": 51.907562255859375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 996,
            "y": 25,
            "w": 83,
            "h": 83,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 8.31635570526123,
            "Man": 91.68364715576172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 24.63945960998535,
            "indian": 20.430477142333984,
            "black": 15.048583030700684,
            "white": 9.757943153381348,
            "middle eastern": 9.94835090637207,
            "latino hispanic": 20.175186157226562
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.3923234939575195,
            "disgust": 0.00043120808550156653,
            "fear": 0.2031407654285431,
            "happy": 0.208868607878685,
            "sad": 95.48062133789062,
            "surprise": 0.000227918237214908,
            "neutral": 0.7143884301185608
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 28,
        "region": {
            "x": 600,
            "y": 30,
            "w": 100,
            "h": 100,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.009095890447497368,
            "Man": 99.99090576171875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.004566192626953,
            "indian": 9.790996551513672,
            "black": 4.726438522338867,
            "white": 16.846364974975586,
            "middle eastern": 8.658103942871094,
            "latino hispanic": 48.973533630371094
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.7079379558563232,
            "disgust": 7.808329200997832e-07,
            "fear": 0.37958022952079773,
            "happy": 0.11623203754425049,
            "sad": 10.458460807800293,
            "surprise": 0.0001362598268315196,
            "neutral": 88.33765411376953
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 324,
            "y": 38,
            "w": 105,
            "h": 105,
            "left_eye": [
                391,
                80
            ],
            "right_eye": [
                355,
                82
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.0019116081530228257,
            "Man": 99.99809265136719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.634672164916992,
            "indian": 9.759259223937988,
            "black": 3.7730872631073,
            "white": 9.6350736618042,
            "middle eastern": 5.0567240715026855,
            "latino hispanic": 56.141178131103516
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.7124255895614624,
            "disgust": 0.00016473897267132998,
            "fear": 10.135296821594238,
            "happy": 0.3498832881450653,
            "sad": 7.1874823570251465,
            "surprise": 0.008638083934783936,
            "neutral": 81.60610961914062
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 5,
            "y": 40,
            "w": 103,
            "h": 103,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.6166691780090332,
            "Man": 99.38333129882812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.302558898925781,
            "indian": 40.333335876464844,
            "black": 10.866216659545898,
            "white": 3.5003955364227295,
            "middle eastern": 2.599276304244995,
            "latino hispanic": 34.39821243286133
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 99.48480224609375,
            "disgust": 5.341408648718016e-09,
            "fear": 0.006036532577127218,
            "happy": 0.06122143194079399,
            "sad": 0.1776757687330246,
            "surprise": 6.994187060627155e-06,
            "neutral": 0.27026501297950745
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 33,
        "region": {
            "x": 1181,
            "y": 43,
            "w": 98,
            "h": 101,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.13554564118385315,
            "Man": 99.86445617675781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 26.99117660522461,
            "indian": 14.252911567687988,
            "black": 10.824734687805176,
            "white": 11.43712329864502,
            "middle eastern": 9.31032657623291,
            "latino hispanic": 27.183727264404297
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.6100455522537231,
            "disgust": 6.540080921269009e-09,
            "fear": 0.00034453862463124096,
            "happy": 0.3129231929779053,
            "sad": 6.050746440887451,
            "surprise": 7.121248586372531e-07,
            "neutral": 93.02593994140625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 450,
            "y": 70,
            "w": 91,
            "h": 91,
            "left_eye": [
                496,
                106
            ],
            "right_eye": [
                476,
                105
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.015321723185479641,
            "Man": 99.98468017578125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 18.586292266845703,
            "indian": 9.2136869430542,
            "black": 8.679215431213379,
            "white": 13.785354614257812,
            "middle eastern": 5.611719131469727,
            "latino hispanic": 44.12373352050781
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 38.94675064086914,
            "disgust": 0.012158938683569431,
            "fear": 8.840481758117676,
            "happy": 17.26142692565918,
            "sad": 15.449348449707031,
            "surprise": 1.800384759902954,
            "neutral": 17.689455032348633
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 39,
        "region": {
            "x": 0,
            "y": 208,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 1.01,
        "gender": {
            "Woman": 6.837780952453613,
            "Man": 93.16222381591797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.253363698720932,
            "indian": 0.7704330682754517,
            "black": 0.13596291840076447,
            "white": 72.51277160644531,
            "middle eastern": 20.479745864868164,
            "latino hispanic": 5.847729206085205
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.013187259435653687,
            "disgust": 9.4922290513888e-13,
            "fear": 26.614295959472656,
            "happy": 0.0062489924021065235,
            "sad": 65.49325561523438,
            "surprise": 0.00048571889055892825,
            "neutral": 7.872533321380615
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 688,
            "y": 75,
            "w": 112,
            "h": 112,
            "left_eye": [
                761,
                116
            ],
            "right_eye": [
                721,
                123
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0012429951457306743,
            "Man": 99.99876403808594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.348883867263794,
            "indian": 5.569348335266113,
            "black": 0.6838967204093933,
            "white": 40.452091217041016,
            "middle eastern": 29.559215545654297,
            "latino hispanic": 21.38656234741211
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0194973945617676,
            "disgust": 0.00011615614494075999,
            "fear": 0.016295695677399635,
            "happy": 7.256136417388916,
            "sad": 8.598801612854004,
            "surprise": 0.0033342987298965454,
            "neutral": 83.10581970214844
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 1108,
            "y": 105,
            "w": 91,
            "h": 91,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 17.69712257385254,
            "Man": 82.30287170410156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0100867236033082,
            "indian": 0.03069043718278408,
            "black": 0.001046295277774334,
            "white": 86.67647552490234,
            "middle eastern": 6.317647933959961,
            "latino hispanic": 6.964052200317383
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.007129373028874397,
            "disgust": 0.2837478816509247,
            "fear": 0.006105792708694935,
            "happy": 99.53873443603516,
            "sad": 0.002860319335013628,
            "surprise": 0.0002374749310547486,
            "neutral": 0.161187544465065
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 893,
            "y": 105,
            "w": 109,
            "h": 109,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.7635653018951416,
            "Man": 99.23644256591797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.027792930603027,
            "indian": 5.298314094543457,
            "black": 1.718404769897461,
            "white": 33.48208236694336,
            "middle eastern": 23.49945831298828,
            "latino hispanic": 30.97395133972168
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0009919583098962903,
            "disgust": 7.412380605142932e-12,
            "fear": 4.214503860566765e-06,
            "happy": 95.23577880859375,
            "sad": 0.0025117029435932636,
            "surprise": 8.629849617136642e-07,
            "neutral": 4.760721683502197
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 773,
            "y": 129,
            "w": 128,
            "h": 128,
            "left_eye": [
                856,
                181
            ],
            "right_eye": [
                813,
                184
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 0.013260914012789726,
            "Man": 99.98673248291016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 46.460514068603516,
            "indian": 12.42671012878418,
            "black": 4.295352458953857,
            "white": 7.871954917907715,
            "middle eastern": 3.5523362159729004,
            "latino hispanic": 25.393131256103516
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.1477345651655924e-05,
            "disgust": 8.936910655954478e-10,
            "fear": 0.09231194108724594,
            "happy": 96.49860382080078,
            "sad": 0.010346825234591961,
            "surprise": 7.141157402656972e-05,
            "neutral": 3.3986599445343018
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 1212,
            "y": 172,
            "w": 67,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 33.415550231933594,
            "Man": 66.5844497680664
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 14.335593223571777,
            "indian": 6.85640811920166,
            "black": 2.3942041397094727,
            "white": 38.6453971862793,
            "middle eastern": 13.048601150512695,
            "latino hispanic": 24.719799041748047
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.911423093290068e-05,
            "disgust": 6.277154351863601e-10,
            "fear": 0.0002142159064533189,
            "happy": 99.99821472167969,
            "sad": 1.3131120191189893e-08,
            "surprise": 4.58053509646561e-05,
            "neutral": 0.0014791797148063779
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 475,
            "y": 180,
            "w": 111,
            "h": 111,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.06135312095284462,
            "Man": 99.93864440917969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.70734977722168,
            "indian": 5.747871398925781,
            "black": 1.9210573434829712,
            "white": 29.66592025756836,
            "middle eastern": 15.168675422668457,
            "latino hispanic": 37.789127349853516
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 13.926756858825684,
            "disgust": 1.1165741852892097e-05,
            "fear": 3.9700677394866943,
            "happy": 0.12723059952259064,
            "sad": 50.0551872253418,
            "surprise": 7.166647992562503e-05,
            "neutral": 31.920679092407227
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 30,
        "region": {
            "x": 127,
            "y": 172,
            "w": 118,
            "h": 118,
            "left_eye": [
                207,
                216
            ],
            "right_eye": [
                161,
                225
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 73.42073059082031,
            "Man": 26.579267501831055
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 38.986148834228516,
            "indian": 13.658475875854492,
            "black": 10.127028465270996,
            "white": 5.98308801651001,
            "middle eastern": 4.375138282775879,
            "latino hispanic": 26.870113372802734
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 34.9252815246582,
            "disgust": 1.377441236627419e-07,
            "fear": 0.056044068187475204,
            "happy": 0.007757974322885275,
            "sad": 7.976879119873047,
            "surprise": 1.135969682763971e-06,
            "neutral": 57.03404235839844
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 1028,
            "y": 179,
            "w": 103,
            "h": 103,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 72.20040893554688,
            "Man": 27.799583435058594
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 20.024450302124023,
            "indian": 15.617205619812012,
            "black": 10.58708381652832,
            "white": 6.982170581817627,
            "middle eastern": 4.714598655700684,
            "latino hispanic": 42.074493408203125
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0037860043812543154,
            "disgust": 1.310820341160479e-08,
            "fear": 0.7404448986053467,
            "happy": 97.59295654296875,
            "sad": 0.029459644109010696,
            "surprise": 0.03951075300574303,
            "neutral": 1.5938292741775513
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 585,
            "y": 212,
            "w": 125,
            "h": 125,
            "left_eye": [
                669,
                262
            ],
            "right_eye": [
                624,
                262
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.005864061880856752,
            "Man": 99.99413299560547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.136984825134277,
            "indian": 11.942763328552246,
            "black": 4.7471022605896,
            "white": 10.367168426513672,
            "middle eastern": 5.516121864318848,
            "latino hispanic": 56.28985595703125
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.16460248827934265,
            "disgust": 7.946374580569682e-07,
            "fear": 1.2204382419586182,
            "happy": 7.70818567276001,
            "sad": 2.259042263031006,
            "surprise": 0.0025419150479137897,
            "neutral": 88.64519500732422
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 314,
            "y": 189,
            "w": 135,
            "h": 135,
            "left_eye": [
                406,
                241
            ],
            "right_eye": [
                357,
                243
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.02704170159995556,
            "Man": 99.97295379638672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.2274458408355713,
            "indian": 3.6076347827911377,
            "black": 0.6087883710861206,
            "white": 26.680910110473633,
            "middle eastern": 8.276378631591797,
            "latino hispanic": 58.598838806152344
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.003141080029308796,
            "disgust": 8.300197551838751e-13,
            "fear": 0.0001638560206629336,
            "happy": 21.0650691986084,
            "sad": 0.0011528166942298412,
            "surprise": 7.200862455647439e-06,
            "neutral": 78.93045806884766
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 1176,
            "y": 253,
            "w": 103,
            "h": 130,
            "left_eye": [
                1264,
                307
            ],
            "right_eye": [
                1216,
                302
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.034905385226011276,
            "Man": 99.96509552001953
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.4420972168445587,
            "indian": 7.6779279708862305,
            "black": 0.6961048245429993,
            "white": 12.667144775390625,
            "middle eastern": 60.79454803466797,
            "latino hispanic": 17.722171783447266
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 5.655912900692783e-05,
            "disgust": 1.4581408812675743e-16,
            "fear": 1.0593554478077749e-08,
            "happy": 97.01661682128906,
            "sad": 0.00045054202200844884,
            "surprise": 0.0006013815873302519,
            "neutral": 2.9822750091552734
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 903,
            "y": 245,
            "w": 134,
            "h": 134,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 6.777717113494873,
            "Man": 93.22228240966797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 16.488622665405273,
            "indian": 7.403625011444092,
            "black": 7.0259833335876465,
            "white": 21.692697525024414,
            "middle eastern": 13.61263370513916,
            "latino hispanic": 33.77643966674805
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0021822249982506037,
            "disgust": 3.978120943770591e-09,
            "fear": 0.661888599395752,
            "happy": 87.30924224853516,
            "sad": 0.6193611025810242,
            "surprise": 0.8980773687362671,
            "neutral": 10.509246826171875
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 439,
            "y": 311,
            "w": 142,
            "h": 142,
            "left_eye": [
                530,
                367
            ],
            "right_eye": [
                482,
                369
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.09423372149467468,
            "Man": 99.90576934814453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.403753280639648,
            "indian": 9.770133018493652,
            "black": 1.4111039638519287,
            "white": 17.749191284179688,
            "middle eastern": 18.46836280822754,
            "latino hispanic": 48.197452545166016
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.396489773876965e-05,
            "disgust": 6.445068367888496e-10,
            "fear": 0.0008839080110192299,
            "happy": 99.32650756835938,
            "sad": 0.0014716797741129994,
            "surprise": 0.0013404154451563954,
            "neutral": 0.6697614789009094
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 764,
            "y": 327,
            "w": 140,
            "h": 140,
            "left_eye": [
                856,
                381
            ],
            "right_eye": [
                807,
                380
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.035510752350091934,
            "Man": 99.96448516845703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7186725735664368,
            "indian": 2.6128697395324707,
            "black": 0.3475220501422882,
            "white": 36.90089416503906,
            "middle eastern": 30.94976234436035,
            "latino hispanic": 28.470277786254883
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.081923484802246,
            "disgust": 1.463516014155175e-06,
            "fear": 0.8790581226348877,
            "happy": 0.006901829969137907,
            "sad": 5.736166000366211,
            "surprise": 0.0002759037015493959,
            "neutral": 85.2956771850586
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 1033,
            "y": 319,
            "w": 144,
            "h": 144,
            "left_eye": [
                1132,
                378
            ],
            "right_eye": [
                1079,
                375
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.07350875437259674,
            "Man": 99.9264907836914
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.731840133666992,
            "indian": 27.990985870361328,
            "black": 9.682267189025879,
            "white": 4.872124195098877,
            "middle eastern": 4.230588912963867,
            "latino hispanic": 39.492191314697266
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.348742127418518,
            "disgust": 0.00026680808514356613,
            "fear": 0.9570456147193909,
            "happy": 8.389181137084961,
            "sad": 9.075685501098633,
            "surprise": 0.22792692482471466,
            "neutral": 80.00115203857422
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 46,
            "y": 339,
            "w": 137,
            "h": 137,
            "left_eye": [
                139,
                392
            ],
            "right_eye": [
                86,
                396
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 67.49494171142578,
            "Man": 32.50505828857422
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 93.56149291992188,
            "indian": 2.3819634914398193,
            "black": 0.02922666072845459,
            "white": 0.029602043330669403,
            "middle eastern": 0.0010731732472777367,
            "latino hispanic": 3.996649742126465
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.669189929962158,
            "disgust": 0.0026736182626336813,
            "fear": 11.382250785827637,
            "happy": 0.4307659864425659,
            "sad": 7.284306526184082,
            "surprise": 0.03447329252958298,
            "neutral": 76.19634246826172
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 227,
            "y": 382,
            "w": 152,
            "h": 152,
            "left_eye": [
                330,
                438
            ],
            "right_eye": [
                270,
                443
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.005051014479249716,
            "Man": 99.99494934082031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.1250860691070557,
            "indian": 13.304981231689453,
            "black": 1.2562825679779053,
            "white": 26.24826431274414,
            "middle eastern": 22.02943992614746,
            "latino hispanic": 34.035945892333984
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.2904043197631836,
            "disgust": 3.3199512028403433e-09,
            "fear": 0.001334731001406908,
            "happy": 3.2046573323896155e-05,
            "sad": 3.3342223167419434,
            "surprise": 1.804421145834567e-08,
            "neutral": 94.37400817871094
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 607,
            "y": 400,
            "w": 150,
            "h": 150,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.002168215112760663,
            "Man": 99.99783325195312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.012314796447754,
            "indian": 11.790178298950195,
            "black": 3.720991611480713,
            "white": 26.201169967651367,
            "middle eastern": 19.60292625427246,
            "latino hispanic": 32.672420501708984
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.8497890830039978,
            "disgust": 2.455621483932191e-07,
            "fear": 0.1043817475438118,
            "happy": 4.1142709960695356e-05,
            "sad": 4.5790696144104,
            "surprise": 1.2288414836802986e-06,
            "neutral": 94.46672058105469
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 828,
            "y": 494,
            "w": 176,
            "h": 176,
            "left_eye": [
                943,
                564
            ],
            "right_eye": [
                885,
                563
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.08975814282894135,
            "Man": 99.91024780273438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.594011306762695,
            "indian": 9.070162773132324,
            "black": 1.1777349710464478,
            "white": 7.86929178237915,
            "middle eastern": 2.536323070526123,
            "latino hispanic": 69.75247955322266
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.619890437927097e-05,
            "disgust": 2.177828577198948e-11,
            "fear": 3.70115981240815e-06,
            "happy": 90.98760986328125,
            "sad": 0.00096553610637784,
            "surprise": 0.001702132518403232,
            "neutral": 9.009693145751953
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 37,
            "y": 557,
            "w": 148,
            "h": 148,
            "left_eye": [
                141,
                617
            ],
            "right_eye": [
                82,
                613
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.97860717773438,
            "Man": 0.021388836205005646
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 96.83506774902344,
            "indian": 0.59316486120224,
            "black": 0.02015548013150692,
            "white": 0.022456713020801544,
            "middle eastern": 0.0016161586390808225,
            "latino hispanic": 2.5275328159332275
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.045371329586267e-11,
            "disgust": 9.805250347187272e-20,
            "fear": 3.918685688442114e-12,
            "happy": 99.87425994873047,
            "sad": 4.888307536532466e-09,
            "surprise": 0.00016349885845556855,
            "neutral": 0.12558282911777496
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 392,
            "y": 556,
            "w": 154,
            "h": 154,
            "left_eye": [
                497,
                615
            ],
            "right_eye": [
                439,
                616
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 100.0,
            "Man": 4.302518163967761e-08
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.334151744842529,
            "indian": 7.711835861206055,
            "black": 2.6686439514160156,
            "white": 16.021947860717773,
            "middle eastern": 6.64979362487793,
            "latino hispanic": 59.61362838745117
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 1.1044702432627673e-06,
            "disgust": 3.918038463113227e-11,
            "fear": 6.572067832166795e-06,
            "happy": 99.7627182006836,
            "sad": 4.8589699872536585e-06,
            "surprise": 0.00025342602748423815,
            "neutral": 0.23701190948486328
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 1148,
            "y": 566,
            "w": 131,
            "h": 164,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.9989013671875,
            "Man": 0.0011000995291396976
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 52.95916748046875,
            "indian": 7.123661994934082,
            "black": 3.2841012477874756,
            "white": 1.3517481088638306,
            "middle eastern": 0.5504240989685059,
            "latino hispanic": 34.730899810791016
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 8.559620789938549e-10,
            "disgust": 6.257005249843425e-17,
            "fear": 3.672944934307587e-11,
            "happy": 99.99368286132812,
            "sad": 4.20980548199168e-08,
            "surprise": 1.8919299460407046e-10,
            "neutral": 0.006315905135124922
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 557,
            "y": 733,
            "w": 174,
            "h": 174,
            "left_eye": [
                673,
                801
            ],
            "right_eye": [
                610,
                803
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 100.0,
            "Man": 5.212627911532763e-07
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 54.26187515258789,
            "indian": 4.640935897827148,
            "black": 0.8239486217498779,
            "white": 2.84294056892395,
            "middle eastern": 0.6242337822914124,
            "latino hispanic": 36.80607223510742
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.0635314666088995e-14,
            "disgust": 2.762540584739602e-20,
            "fear": 2.1018770220409405e-14,
            "happy": 99.44110107421875,
            "sad": 2.765941031768193e-09,
            "surprise": 2.618967869238986e-07,
            "neutral": 0.558901846408844
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 1017,
            "y": 718,
            "w": 180,
            "h": 180,
            "left_eye": [
                1141,
                792
            ],
            "right_eye": [
                1069,
                787
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.9999771118164,
            "Man": 2.209483864135109e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 10.076131820678711,
            "indian": 7.122353553771973,
            "black": 1.1376298666000366,
            "white": 11.703862190246582,
            "middle eastern": 4.32963752746582,
            "latino hispanic": 65.63038635253906
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.842173801338333e-11,
            "disgust": 1.876648849116384e-22,
            "fear": 1.2626446182500978e-16,
            "happy": 99.78645324707031,
            "sad": 7.911273858240975e-10,
            "surprise": 1.2136608518176217e-07,
            "neutral": 0.21354639530181885
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 175,
            "y": 689,
            "w": 187,
            "h": 187,
            "left_eye": [
                298,
                761
            ],
            "right_eye": [
                232,
                767
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 5.07339334487915,
            "Man": 94.92660522460938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.558961868286133,
            "indian": 7.579716205596924,
            "black": 2.1282827854156494,
            "white": 30.37757110595703,
            "middle eastern": 22.878427505493164,
            "latino hispanic": 21.477039337158203
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.4127360614679674e-08,
            "disgust": 9.48538025054787e-21,
            "fear": 5.572293321209898e-11,
            "happy": 99.99998474121094,
            "sad": 4.158477034943431e-11,
            "surprise": 8.298917997251465e-09,
            "neutral": 1.0802169526868965e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 117,
            "y": 806,
            "w": 55,
            "h": 55,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 48.71825408935547,
            "Man": 51.28174591064453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.6191068887710571,
            "indian": 0.8043261766433716,
            "black": 1.3887097835540771,
            "white": 77.72183990478516,
            "middle eastern": 7.684852123260498,
            "latino hispanic": 10.781171798706055
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.008855904452502728,
            "disgust": 3.022428245458286e-07,
            "fear": 0.01362929493188858,
            "happy": 8.179482392733917e-05,
            "sad": 99.89852142333984,
            "surprise": 1.454549591883847e-09,
            "neutral": 0.07891025394201279
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 0,
            "y": 895,
            "w": 193,
            "h": 193,
            "left_eye": [
                102,
                959
            ],
            "right_eye": [
                25,
                985
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.96891021728516,
            "Man": 0.03108895942568779
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 52.04240036010742,
            "indian": 10.175633430480957,
            "black": 6.3934326171875,
            "white": 5.055360317230225,
            "middle eastern": 2.4192593097686768,
            "latino hispanic": 23.91391372680664
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.05916304513812065,
            "disgust": 1.8894730073083787e-13,
            "fear": 0.07041313499212265,
            "happy": 1.4156031511447509e-06,
            "sad": 99.24363708496094,
            "surprise": 1.5947424587478554e-12,
            "neutral": 0.6267878413200378
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 24,
        "region": {
            "x": 818,
            "y": 974,
            "w": 206,
            "h": 206,
            "left_eye": [
                957,
                1057
            ],
            "right_eye": [
                881,
                1055
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.04461237043142319,
            "Man": 99.95538330078125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.344640254974365,
            "indian": 7.808326721191406,
            "black": 1.3176501989364624,
            "white": 24.039905548095703,
            "middle eastern": 15.507719993591309,
            "latino hispanic": 46.98176193237305
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.6063205599784851,
            "disgust": 3.134129755721915e-08,
            "fear": 0.012926933355629444,
            "happy": 0.003856710158288479,
            "sad": 0.30621373653411865,
            "surprise": 1.3644077625940554e-05,
            "neutral": 99.07067108154297
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 368,
            "y": 1008,
            "w": 213,
            "h": 213,
            "left_eye": [
                509,
                1088
            ],
            "right_eye": [
                432,
                1094
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.018757624551653862,
            "Man": 99.98123931884766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.39925479888916,
            "indian": 10.42227840423584,
            "black": 2.6550025939941406,
            "white": 24.675247192382812,
            "middle eastern": 20.288223266601562,
            "latino hispanic": 33.559993743896484
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.330165418446995e-05,
            "disgust": 1.3610549352395425e-20,
            "fear": 7.017329495262459e-10,
            "happy": 4.91625651193317e-05,
            "sad": 0.0008973779622465372,
            "surprise": 2.049474354671164e-15,
            "neutral": 99.9990234375
        },
        "dominant_emotion": "neutral"
    }
]
let software_developer_data3 = [
    {
        "age": 24,
        "region": {
            "x": 734,
            "y": 49,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 5.104763984680176,
            "Man": 94.8952407836914
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.616008758544922,
            "indian": 0.7239881753921509,
            "black": 0.04060351848602295,
            "white": 77.16703033447266,
            "middle eastern": 10.393462181091309,
            "latino hispanic": 8.058908462524414
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.06461337953805923,
            "disgust": 2.857040044546011e-07,
            "fear": 18.390058517456055,
            "happy": 0.07235468178987503,
            "sad": 6.061129093170166,
            "surprise": 0.12549255788326263,
            "neutral": 75.2863540649414
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 22,
        "region": {
            "x": 930,
            "y": 136,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.22565512359142303,
            "Man": 99.77434539794922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.006195110734552145,
            "indian": 0.028895888477563858,
            "black": 0.0010996764758601785,
            "white": 91.67367553710938,
            "middle eastern": 6.324542045593262,
            "latino hispanic": 1.965592384338379
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 10.613954544067383,
            "disgust": 0.0010151813039556146,
            "fear": 43.62330627441406,
            "happy": 0.1262907087802887,
            "sad": 30.6342716217041,
            "surprise": 11.106581687927246,
            "neutral": 3.894584894180298
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 22,
        "region": {
            "x": 343,
            "y": 139,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.030889831483364105,
            "Man": 99.9691162109375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.623656988143921,
            "indian": 4.587652683258057,
            "black": 0.4368355870246887,
            "white": 47.30290603637695,
            "middle eastern": 30.726696014404297,
            "latino hispanic": 13.322259902954102
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 29.049821853637695,
            "disgust": 4.9820624553831294e-05,
            "fear": 48.576534271240234,
            "happy": 0.004399536177515984,
            "sad": 15.0971040725708,
            "surprise": 0.5774946808815002,
            "neutral": 6.694591999053955
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 22,
        "region": {
            "x": 611,
            "y": 102,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.007055720314383507,
            "Man": 99.9929428100586
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.005099291913211346,
            "indian": 0.006161200348287821,
            "black": 0.0003724288835655898,
            "white": 98.45166778564453,
            "middle eastern": 0.9614237546920776,
            "latino hispanic": 0.5752769708633423
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 40.049102783203125,
            "disgust": 1.9963501927122707e-06,
            "fear": 3.6626105308532715,
            "happy": 0.0004795786808244884,
            "sad": 43.33672332763672,
            "surprise": 0.006250999867916107,
            "neutral": 12.944835662841797
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 22,
        "region": {
            "x": 495,
            "y": 108,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.16378836333751678,
            "Man": 99.83621215820312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.19766105711460114,
            "indian": 0.009657598100602627,
            "black": 0.0015870361821725965,
            "white": 97.2872314453125,
            "middle eastern": 1.1193259954452515,
            "latino hispanic": 1.384527564048767
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 63.201229095458984,
            "disgust": 9.81343418970937e-07,
            "fear": 2.6344456672668457,
            "happy": 0.0005563577287830412,
            "sad": 25.793712615966797,
            "surprise": 0.0020508533343672752,
            "neutral": 8.368002891540527
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 24,
        "region": {
            "x": 55,
            "y": 208,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.5690302848815918,
            "Man": 99.43096923828125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.04524923861026764,
            "indian": 1.6410460472106934,
            "black": 0.031950995326042175,
            "white": 43.04473876953125,
            "middle eastern": 49.91765594482422,
            "latino hispanic": 5.31935977935791
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 4.400008201599121,
            "disgust": 6.80565846733483e-12,
            "fear": 0.11535827070474625,
            "happy": 2.04286266125564e-06,
            "sad": 13.327169418334961,
            "surprise": 1.4491708943964454e-09,
            "neutral": 82.15746307373047
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 22,
        "region": {
            "x": 1159,
            "y": 218,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.06694050133228302,
            "Man": 99.93306732177734
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.8268322944641113,
            "indian": 2.704378843307495,
            "black": 0.21326693892478943,
            "white": 57.149253845214844,
            "middle eastern": 27.71005630493164,
            "latino hispanic": 11.396212577819824
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 23.554689407348633,
            "disgust": 2.9119994451320963e-06,
            "fear": 20.62253189086914,
            "happy": 0.004500343929976225,
            "sad": 54.50592041015625,
            "surprise": 0.07480593025684357,
            "neutral": 1.2375528812408447
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 24,
        "region": {
            "x": 205,
            "y": 173,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 1.3307148218154907,
            "Man": 98.66928100585938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.1750991344451904,
            "indian": 6.12018346786499,
            "black": 0.7163798809051514,
            "white": 43.68404006958008,
            "middle eastern": 29.085973739624023,
            "latino hispanic": 18.21832847595215
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 17.269481658935547,
            "disgust": 6.731342594434864e-09,
            "fear": 1.2947942018508911,
            "happy": 0.01537414826452732,
            "sad": 24.628570556640625,
            "surprise": 0.00011750558769563213,
            "neutral": 56.791664123535156
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 799,
            "y": 172,
            "w": 59,
            "h": 59,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.1171383336186409,
            "Man": 99.88285827636719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.614292621612549,
            "indian": 1.2015161514282227,
            "black": 0.11911492049694061,
            "white": 63.97330093383789,
            "middle eastern": 17.348608016967773,
            "latino hispanic": 12.74316120147705
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.634183883666992,
            "disgust": 1.813775634218473e-05,
            "fear": 41.14816665649414,
            "happy": 0.00046548928366973996,
            "sad": 42.868064880371094,
            "surprise": 3.2310409545898438,
            "neutral": 3.1180617809295654
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 23,
        "region": {
            "x": 458,
            "y": 180,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 1.8950161933898926,
            "Man": 98.10498046875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 34.70779037475586,
            "indian": 13.253421783447266,
            "black": 4.731287002563477,
            "white": 17.324010848999023,
            "middle eastern": 11.879267692565918,
            "latino hispanic": 18.104225158691406
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.5962511301040649,
            "disgust": 2.7575324565987103e-05,
            "fear": 2.4846386909484863,
            "happy": 0.4582589566707611,
            "sad": 8.22251033782959,
            "surprise": 0.0033256802707910538,
            "neutral": 88.23499298095703
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 978,
            "y": 198,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.2834736704826355,
            "Man": 99.7165298461914
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.532212734222412,
            "indian": 13.74828815460205,
            "black": 3.4610700607299805,
            "white": 29.589826583862305,
            "middle eastern": 22.583179473876953,
            "latino hispanic": 26.085420608520508
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 13.493180274963379,
            "disgust": 2.276651321153622e-05,
            "fear": 18.07406234741211,
            "happy": 0.3630152940750122,
            "sad": 15.640141487121582,
            "surprise": 1.3734617233276367,
            "neutral": 51.05611801147461
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 1054,
            "y": 286,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.029590969905257225,
            "Man": 99.97040557861328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.005355117842555046,
            "indian": 0.0010938330087810755,
            "black": 3.25182409142144e-05,
            "white": 99.07706451416016,
            "middle eastern": 0.6725530028343201,
            "latino hispanic": 0.24390392005443573
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5629299283027649,
            "disgust": 2.1986072624713415e-06,
            "fear": 6.157224655151367,
            "happy": 0.0031287025194615126,
            "sad": 92.62413787841797,
            "surprise": 7.918436313048005e-05,
            "neutral": 0.6524953246116638
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 23,
        "region": {
            "x": 601,
            "y": 226,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.7823073267936707,
            "Man": 99.21769714355469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 22.08329963684082,
            "indian": 7.095865249633789,
            "black": 2.6301064491271973,
            "white": 31.136215209960938,
            "middle eastern": 18.52192497253418,
            "latino hispanic": 18.532590866088867
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.2542269229888916,
            "disgust": 2.455986941640731e-05,
            "fear": 18.52661895751953,
            "happy": 0.12579654157161713,
            "sad": 77.02674102783203,
            "surprise": 0.0002941648126579821,
            "neutral": 4.066294193267822
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 28,
        "region": {
            "x": 292,
            "y": 249,
            "w": 70,
            "h": 70,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.003442814340814948,
            "Man": 99.99655151367188
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.900283813476562,
            "indian": 28.65790557861328,
            "black": 14.096794128417969,
            "white": 11.385225296020508,
            "middle eastern": 14.468332290649414,
            "latino hispanic": 21.491455078125
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 1.7422077655792236,
            "disgust": 3.802075661951676e-05,
            "fear": 20.48587989807129,
            "happy": 6.497123104054481e-05,
            "sad": 75.60163116455078,
            "surprise": 0.0004291861259844154,
            "neutral": 2.1697542667388916
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 28,
        "region": {
            "x": 465,
            "y": 250,
            "w": 80,
            "h": 80,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.001029954757541418,
            "Man": 99.99897766113281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.77595055103302,
            "indian": 9.129758834838867,
            "black": 3.195162296295166,
            "white": 31.47559928894043,
            "middle eastern": 39.699153900146484,
            "latino hispanic": 14.724380493164062
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 3.8020479679107666,
            "disgust": 2.2856959276396083e-06,
            "fear": 0.0127621591091156,
            "happy": 0.02056550793349743,
            "sad": 16.873247146606445,
            "surprise": 2.6721971153165214e-05,
            "neutral": 79.29134368896484
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 170,
            "y": 290,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0004811984545085579,
            "Man": 99.99952697753906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00028079934418201447,
            "indian": 0.002314002485945821,
            "black": 4.416003139340319e-05,
            "white": 96.41475677490234,
            "middle eastern": 2.862950325012207,
            "latino hispanic": 0.7196540236473083
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 30.34425163269043,
            "disgust": 1.3533166587365031e-08,
            "fear": 2.2013657093048096,
            "happy": 0.11989466100931168,
            "sad": 34.157711029052734,
            "surprise": 3.1902750379231293e-06,
            "neutral": 33.17677307128906
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 28,
        "region": {
            "x": 854,
            "y": 247,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0013936138711869717,
            "Man": 99.99860382080078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.6597051620483398,
            "indian": 1.6400208473205566,
            "black": 0.2245265692472458,
            "white": 51.07195281982422,
            "middle eastern": 25.95401382446289,
            "latino hispanic": 20.449777603149414
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.8244355916976929,
            "disgust": 7.676740096940193e-06,
            "fear": 3.3481197357177734,
            "happy": 6.872185707092285,
            "sad": 7.2059125900268555,
            "surprise": 1.1832239627838135,
            "neutral": 79.56611633300781
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 345,
            "y": 339,
            "w": 90,
            "h": 90,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 0.2614707350730896,
            "Man": 99.73853302001953
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.001005929778330028,
            "indian": 0.0006767031736671925,
            "black": 3.080874193983618e-06,
            "white": 98.87248229980469,
            "middle eastern": 0.8154860734939575,
            "latino hispanic": 0.3103325664997101
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.3580337762832642,
            "disgust": 1.0688120255508693e-06,
            "fear": 12.612895965576172,
            "happy": 1.8657501935958862,
            "sad": 24.951862335205078,
            "surprise": 0.011957896873354912,
            "neutral": 59.199501037597656
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 930,
            "y": 359,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.2371368408203125,
            "Man": 98.76285552978516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 23.202865600585938,
            "indian": 15.459203720092773,
            "black": 6.57271671295166,
            "white": 17.891582489013672,
            "middle eastern": 18.375476837158203,
            "latino hispanic": 18.498151779174805
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.24805039167404175,
            "disgust": 0.0018146031070500612,
            "fear": 0.2231774628162384,
            "happy": 0.09225457906723022,
            "sad": 0.012294769287109375,
            "surprise": 99.40499114990234,
            "neutral": 0.017417456954717636
        },
        "dominant_emotion": "surprise"
    },
    {
        "age": 25,
        "region": {
            "x": 728,
            "y": 381,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.0004802476323675364,
            "Man": 99.99952697753906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.08557610213756561,
            "indian": 0.45399829745292664,
            "black": 0.02507922239601612,
            "white": 68.7449951171875,
            "middle eastern": 21.288204193115234,
            "latino hispanic": 9.40214729309082
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 41.24705123901367,
            "disgust": 0.00193854293320328,
            "fear": 1.2023712396621704,
            "happy": 0.17891451716423035,
            "sad": 42.92073440551758,
            "surprise": 0.013632584363222122,
            "neutral": 14.43536376953125
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 37,
        "region": {
            "x": 434,
            "y": 400,
            "w": 109,
            "h": 109,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.0036550548393279314,
            "Man": 99.996337890625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.001761129591614008,
            "indian": 0.006398375146090984,
            "black": 4.712002555606887e-05,
            "white": 96.1343002319336,
            "middle eastern": 3.0993621349334717,
            "latino hispanic": 0.758134663105011
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 24.882919311523438,
            "disgust": 0.0005603030440397561,
            "fear": 0.4013593792915344,
            "happy": 0.05805531144142151,
            "sad": 44.65266418457031,
            "surprise": 0.00013262068387120962,
            "neutral": 30.004310607910156
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 43,
        "region": {
            "x": 597,
            "y": 348,
            "w": 91,
            "h": 91,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0010618523228913546,
            "Man": 99.99893951416016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.881045166868716e-05,
            "indian": 0.0014691281830891967,
            "black": 2.681604200915899e-06,
            "white": 97.76397705078125,
            "middle eastern": 1.9304633140563965,
            "latino hispanic": 0.3040076494216919
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 49.14529800415039,
            "disgust": 0.02639373391866684,
            "fear": 0.7006307244300842,
            "happy": 2.0941836833953857,
            "sad": 37.88377380371094,
            "surprise": 0.031211983412504196,
            "neutral": 10.118500709533691
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 25,
        "region": {
            "x": 1123,
            "y": 394,
            "w": 85,
            "h": 85,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.0012600551126524806,
            "Man": 99.99873352050781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.002022730652242899,
            "indian": 0.010446465574204922,
            "black": 0.00017157879483420402,
            "white": 95.895263671875,
            "middle eastern": 2.8266046047210693,
            "latino hispanic": 1.265486717224121
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 22.774982452392578,
            "disgust": 3.187350375810638e-05,
            "fear": 3.873304605484009,
            "happy": 0.014195449650287628,
            "sad": 63.26683044433594,
            "surprise": 0.0011833000462502241,
            "neutral": 10.069466590881348
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 140,
            "y": 396,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.0003913656109943986,
            "Man": 99.99960327148438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.7810051444565453e-15,
            "indian": 7.505580968476984e-15,
            "black": 1.5585998697592867e-18,
            "white": 100.0,
            "middle eastern": 2.8805225156247616e-06,
            "latino hispanic": 2.107860268552031e-07
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 54.33206558227539,
            "disgust": 1.950960948349234e-09,
            "fear": 0.03225735202431679,
            "happy": 0.015214597806334496,
            "sad": 7.566764831542969,
            "surprise": 4.1095771052823693e-07,
            "neutral": 38.05369186401367
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 25,
        "region": {
            "x": 236,
            "y": 441,
            "w": 100,
            "h": 100,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.02484254352748394,
            "Man": 99.97516632080078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.041444338858127594,
            "indian": 0.06434936076402664,
            "black": 0.005829505156725645,
            "white": 89.11283874511719,
            "middle eastern": 4.774287223815918,
            "latino hispanic": 6.001252174377441
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.743795394897461,
            "disgust": 0.0007344137411564589,
            "fear": 8.639087677001953,
            "happy": 11.017988204956055,
            "sad": 19.492616653442383,
            "surprise": 3.3340957164764404,
            "neutral": 49.77168273925781
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 0,
            "y": 467,
            "w": 107,
            "h": 107,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.0011990787461400032,
            "Man": 99.99879455566406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.2674794547251622e-09,
            "indian": 1.7553238862433318e-08,
            "black": 6.0192718864815475e-12,
            "white": 99.99066162109375,
            "middle eastern": 0.008364003151655197,
            "latino hispanic": 0.0009759684326127172
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 44.590660095214844,
            "disgust": 1.054347151807633e-07,
            "fear": 0.15554286539554596,
            "happy": 0.06223053112626076,
            "sad": 8.271825790405273,
            "surprise": 0.0010708048939704895,
            "neutral": 46.91866683959961
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 1061,
            "y": 617,
            "w": 114,
            "h": 114,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.011722187511622906,
            "Man": 99.98828125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.002474494744092226,
            "indian": 0.004093845374882221,
            "black": 1.3470528756442945e-05,
            "white": 97.65467834472656,
            "middle eastern": 1.9173675775527954,
            "latino hispanic": 0.4213732182979584
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 44.903621673583984,
            "disgust": 0.0005207656649872661,
            "fear": 21.381481170654297,
            "happy": 0.06850236654281616,
            "sad": 27.81968879699707,
            "surprise": 0.003008628962561488,
            "neutral": 5.82316780090332
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 28,
        "region": {
            "x": 542,
            "y": 586,
            "w": 138,
            "h": 138,
            "left_eye": [
                607,
                647
            ],
            "right_eye": [
                585,
                638
            ]
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.0070769595913589,
            "Man": 99.992919921875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.003967668395489454,
            "indian": 0.00454161548987031,
            "black": 0.00010076349281007424,
            "white": 96.1479263305664,
            "middle eastern": 2.4811813831329346,
            "latino hispanic": 1.3622722625732422
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.0483741760253906,
            "disgust": 1.6561210713916807e-06,
            "fear": 0.2398846447467804,
            "happy": 0.0013750765938311815,
            "sad": 7.437425136566162,
            "surprise": 2.3468841391149908e-05,
            "neutral": 89.27291870117188
        },
        "dominant_emotion": "neutral"
    }
]
let software_developer_data4 = [
    {
        "age": 33,
        "region": {
            "x": 554,
            "y": 52,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 7.215478420257568,
            "Man": 92.7845230102539
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2714802026748657,
            "indian": 0.4441712498664856,
            "black": 0.018664194270968437,
            "white": 73.706298828125,
            "middle eastern": 20.824357986450195,
            "latino hispanic": 4.735025882720947
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.38429132103919983,
            "disgust": 1.6743128981033806e-06,
            "fear": 0.0041571869514882565,
            "happy": 0.04929915443062782,
            "sad": 2.794070243835449,
            "surprise": 0.0011983172735199332,
            "neutral": 96.76698303222656
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 1027,
            "y": 74,
            "w": 67,
            "h": 67,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.2883531153202057,
            "Man": 99.7116470336914
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 40.83591079711914,
            "indian": 10.032809257507324,
            "black": 5.846001148223877,
            "white": 14.140000343322754,
            "middle eastern": 9.106866836547852,
            "latino hispanic": 20.038414001464844
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 62.094905853271484,
            "disgust": 1.475662543271028e-07,
            "fear": 0.14638355374336243,
            "happy": 0.04328837990760803,
            "sad": 2.6199824810028076,
            "surprise": 0.0012727912981063128,
            "neutral": 35.09416580200195
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 33,
        "region": {
            "x": 811,
            "y": 50,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 6.136268138885498,
            "Man": 93.86373138427734
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.259305715560913,
            "indian": 2.3223166465759277,
            "black": 0.28358227014541626,
            "white": 56.05432891845703,
            "middle eastern": 25.899309158325195,
            "latino hispanic": 13.181156158447266
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 11.924808502197266,
            "disgust": 4.978341530659236e-05,
            "fear": 0.052286915481090546,
            "happy": 49.88974380493164,
            "sad": 5.880466461181641,
            "surprise": 0.231705904006958,
            "neutral": 32.020938873291016
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 171,
            "y": 53,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 5.950544834136963,
            "Man": 94.0494613647461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.7138484716415405,
            "indian": 10.280180931091309,
            "black": 1.395625114440918,
            "white": 28.212987899780273,
            "middle eastern": 37.88279342651367,
            "latino hispanic": 20.514570236206055
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 20.645395278930664,
            "disgust": 0.0017661865567788482,
            "fear": 13.466060638427734,
            "happy": 0.002760830335319042,
            "sad": 37.52717208862305,
            "surprise": 0.02593407779932022,
            "neutral": 28.330913543701172
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 918,
            "y": 66,
            "w": 80,
            "h": 80,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 79.49383544921875,
            "Man": 20.506168365478516
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 28.75109100341797,
            "indian": 12.790068626403809,
            "black": 7.593570709228516,
            "white": 10.322376251220703,
            "middle eastern": 8.032452583312988,
            "latino hispanic": 32.510440826416016
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.1447533816099167,
            "disgust": 6.885698894620873e-06,
            "fear": 0.012060008011758327,
            "happy": 0.02663186378777027,
            "sad": 0.009517869912087917,
            "surprise": 0.0002805501571856439,
            "neutral": 99.80675506591797
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 443,
            "y": 81,
            "w": 79,
            "h": 79,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 23.516494750976562,
            "Man": 76.4834976196289
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 43.59616470336914,
            "indian": 5.456709861755371,
            "black": 2.0630874633789062,
            "white": 26.005176544189453,
            "middle eastern": 10.674482345581055,
            "latino hispanic": 12.20438003540039
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 62.69972229003906,
            "disgust": 0.0038547106087207794,
            "fear": 0.9824259281158447,
            "happy": 0.0021403643768280745,
            "sad": 34.207401275634766,
            "surprise": 0.0001455138117307797,
            "neutral": 2.104310989379883
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 36,
        "region": {
            "x": 1186,
            "y": 153,
            "w": 89,
            "h": 89,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.8319985866546631,
            "Man": 99.16799926757812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2094666212797165,
            "indian": 0.18132330477237701,
            "black": 0.01938106119632721,
            "white": 87.08354949951172,
            "middle eastern": 6.28080415725708,
            "latino hispanic": 6.2254767417907715
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.28765031695365906,
            "disgust": 0.00034356696414761245,
            "fear": 3.545145034790039,
            "happy": 25.493616104125977,
            "sad": 2.3691885471343994,
            "surprise": 0.07158994674682617,
            "neutral": 68.23246765136719
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 675,
            "y": 86,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 2.6164817810058594,
            "Man": 97.38351440429688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 21.66780662536621,
            "indian": 14.164237022399902,
            "black": 14.870197296142578,
            "white": 11.370600700378418,
            "middle eastern": 9.916433334350586,
            "latino hispanic": 28.010719299316406
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.009026878513395786,
            "disgust": 1.1908724006914895e-09,
            "fear": 5.394892468757462e-06,
            "happy": 92.7232894897461,
            "sad": 0.0003513488045427948,
            "surprise": 1.0266237040923443e-05,
            "neutral": 7.267314910888672
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 823,
            "y": 158,
            "w": 83,
            "h": 83,
            "left_eye": [
                880,
                191
            ],
            "right_eye": [
                850,
                188
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.61662292480469,
            "Man": 0.3833777904510498
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 8.011179630784682e-08,
            "indian": 2.8495414028384403e-08,
            "black": 2.6616287299163766e-11,
            "white": 99.98761749267578,
            "middle eastern": 0.004749177489429712,
            "latino hispanic": 0.007632816210389137
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.0733065605163574,
            "disgust": 4.222897769068368e-05,
            "fear": 5.684816360473633,
            "happy": 0.018680712208151817,
            "sad": 62.97671127319336,
            "surprise": 0.0012407507747411728,
            "neutral": 29.24520492553711
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 39,
        "region": {
            "x": 600,
            "y": 176,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 92.71670532226562,
            "Man": 7.283298015594482
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.578549385070801,
            "indian": 10.568018913269043,
            "black": 1.447432279586792,
            "white": 24.26886558532715,
            "middle eastern": 25.469030380249023,
            "latino hispanic": 31.66810417175293
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.01645754463970661,
            "disgust": 5.930191893099845e-09,
            "fear": 0.026022322475910187,
            "happy": 56.988304138183594,
            "sad": 0.04095737263560295,
            "surprise": 0.009915304370224476,
            "neutral": 42.9183349609375
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 467,
            "y": 180,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.86,
        "gender": {
            "Woman": 1.6706691980361938,
            "Man": 98.32933044433594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.208166122436523,
            "indian": 3.4339077472686768,
            "black": 1.2752076387405396,
            "white": 48.368534088134766,
            "middle eastern": 17.738689422607422,
            "latino hispanic": 18.975496292114258
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.001233656075783074,
            "disgust": 8.639873527727104e-08,
            "fear": 0.003641674295067787,
            "happy": 19.712778091430664,
            "sad": 0.012912689708173275,
            "surprise": 0.0003636931360233575,
            "neutral": 80.26907348632812
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 261,
            "y": 144,
            "w": 86,
            "h": 86,
            "left_eye": [
                318,
                175
            ],
            "right_eye": [
                289,
                181
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 14.785686492919922,
            "Man": 85.21431732177734
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 72.02494049072266,
            "indian": 2.155423641204834,
            "black": 0.27864184975624084,
            "white": 14.714204788208008,
            "middle eastern": 2.5814154148101807,
            "latino hispanic": 8.245372772216797
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.275310039520264,
            "disgust": 0.01482187956571579,
            "fear": 36.177886962890625,
            "happy": 0.04721147567033768,
            "sad": 21.761287689208984,
            "surprise": 7.050466537475586,
            "neutral": 29.673015594482422
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 32,
        "region": {
            "x": 356,
            "y": 104,
            "w": 82,
            "h": 82,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.1834486722946167,
            "Man": 98.8165512084961
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 9.851231575012207,
            "indian": 10.134681701660156,
            "black": 3.52643084526062,
            "white": 23.50772476196289,
            "middle eastern": 28.30379867553711,
            "latino hispanic": 24.676136016845703
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 91.52760314941406,
            "disgust": 0.00011672788969008252,
            "fear": 0.2060549408197403,
            "happy": 2.927172899246216,
            "sad": 1.9057420492172241,
            "surprise": 0.06491538137197495,
            "neutral": 3.3683998584747314
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 30,
        "region": {
            "x": 691,
            "y": 198,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.89303588867188,
            "Man": 0.10695577412843704
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 25.461286544799805,
            "indian": 13.848735809326172,
            "black": 8.278759956359863,
            "white": 16.87717056274414,
            "middle eastern": 15.37276840209961,
            "latino hispanic": 20.16128158569336
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.6414551734924316,
            "disgust": 2.1096122509334236e-05,
            "fear": 4.431033611297607,
            "happy": 0.036169495433568954,
            "sad": 17.73984718322754,
            "surprise": 0.0018811242189258337,
            "neutral": 74.14958953857422
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 386,
            "y": 197,
            "w": 92,
            "h": 92,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 94.30603790283203,
            "Man": 5.6939568519592285
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.05428227037191391,
            "indian": 0.35434550046920776,
            "black": 0.015220165252685547,
            "white": 65.78630828857422,
            "middle eastern": 21.006175994873047,
            "latino hispanic": 12.783675193786621
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 10.375121116638184,
            "disgust": 4.09128475189209,
            "fear": 76.72538757324219,
            "happy": 0.0023784872610121965,
            "sad": 1.7233401536941528,
            "surprise": 4.6362738609313965,
            "neutral": 2.4462316036224365
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 25,
        "region": {
            "x": 941,
            "y": 163,
            "w": 87,
            "h": 87,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.22983798384666443,
            "Man": 99.77015686035156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2566825747489929,
            "indian": 1.6921460628509521,
            "black": 0.09866752475500107,
            "white": 54.06635284423828,
            "middle eastern": 32.885169982910156,
            "latino hispanic": 11.000977516174316
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 32.02678680419922,
            "disgust": 4.221978088025935e-06,
            "fear": 0.29166123270988464,
            "happy": 0.014497268944978714,
            "sad": 6.0633416175842285,
            "surprise": 0.004537362139672041,
            "neutral": 61.599178314208984
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 91,
            "y": 157,
            "w": 100,
            "h": 100,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 56.700740814208984,
            "Man": 43.29926300048828
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.849925994873047,
            "indian": 2.339322090148926,
            "black": 0.4281255900859833,
            "white": 54.4158935546875,
            "middle eastern": 20.875131607055664,
            "latino hispanic": 14.091602325439453
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.7288196086883545,
            "disgust": 0.035921208560466766,
            "fear": 29.325992584228516,
            "happy": 0.006785763427615166,
            "sad": 66.67201232910156,
            "surprise": 6.0310554545139894e-05,
            "neutral": 0.23041260242462158
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 30,
        "region": {
            "x": 748,
            "y": 328,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 1.1057629585266113,
            "Man": 98.89424133300781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.591995894908905,
            "indian": 0.6556428670883179,
            "black": 0.07473757863044739,
            "white": 69.37968444824219,
            "middle eastern": 15.6480131149292,
            "latino hispanic": 13.649922370910645
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 82.76300811767578,
            "disgust": 0.11613091826438904,
            "fear": 7.402516841888428,
            "happy": 0.5434293150901794,
            "sad": 6.130259990692139,
            "surprise": 0.7202097773551941,
            "neutral": 2.3244454860687256
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 28,
        "region": {
            "x": 996,
            "y": 311,
            "w": 90,
            "h": 90,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.9268941283226013,
            "Man": 99.07310485839844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 19.19633674621582,
            "indian": 3.6193161010742188,
            "black": 1.456080675125122,
            "white": 39.05745315551758,
            "middle eastern": 16.305988311767578,
            "latino hispanic": 20.364824295043945
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 47.747989654541016,
            "disgust": 0.009443044662475586,
            "fear": 2.793764352798462,
            "happy": 0.0009891946101561189,
            "sad": 46.68941879272461,
            "surprise": 0.00021387265587691218,
            "neutral": 2.7581875324249268
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 37,
        "region": {
            "x": 301,
            "y": 311,
            "w": 100,
            "h": 100,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.7795939445495605,
            "Man": 99.22040557861328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.6321747899055481,
            "indian": 3.1132476329803467,
            "black": 0.24083015322685242,
            "white": 40.785884857177734,
            "middle eastern": 34.89724349975586,
            "latino hispanic": 20.330623626708984
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 93.9603500366211,
            "disgust": 0.005082740448415279,
            "fear": 3.3744595050811768,
            "happy": 0.020852813497185707,
            "sad": 1.6689059734344482,
            "surprise": 0.1755370944738388,
            "neutral": 0.7948132157325745
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 32,
        "region": {
            "x": 543,
            "y": 312,
            "w": 94,
            "h": 94,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 98.22868347167969,
            "Man": 1.7713143825531006
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 9.800775468971068e-11,
            "indian": 8.642887100451802e-11,
            "black": 1.635031086216765e-14,
            "white": 99.9993667602539,
            "middle eastern": 0.00028243486303836107,
            "latino hispanic": 0.0003602014621719718
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 68.26023864746094,
            "disgust": 0.002079664496704936,
            "fear": 2.9780936241149902,
            "happy": 0.0015212800353765488,
            "sad": 3.1543967723846436,
            "surprise": 0.39520764350891113,
            "neutral": 25.208463668823242
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 34,
        "region": {
            "x": 1105,
            "y": 310,
            "w": 86,
            "h": 86,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 34.709068298339844,
            "Man": 65.29092407226562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0004263464652467519,
            "indian": 0.00018753722542896867,
            "black": 5.395592324930476e-06,
            "white": 99.29651641845703,
            "middle eastern": 0.3089919686317444,
            "latino hispanic": 0.39386290311813354
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 29.482280731201172,
            "disgust": 0.0018287524580955505,
            "fear": 1.8936060667037964,
            "happy": 68.21311950683594,
            "sad": 0.30262285470962524,
            "surprise": 0.0122964046895504,
            "neutral": 0.0942426472902298
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 663,
            "y": 360,
            "w": 90,
            "h": 90,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 1.0997300148010254,
            "Man": 98.9002685546875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.055202171206474304,
            "indian": 0.0041596549563109875,
            "black": 0.00019928293477278203,
            "white": 99.18247985839844,
            "middle eastern": 0.5099685192108154,
            "latino hispanic": 0.24798409640789032
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 40.474727630615234,
            "disgust": 0.04895658418536186,
            "fear": 19.651466369628906,
            "happy": 13.969295501708984,
            "sad": 1.049232006072998,
            "surprise": 0.5157669186592102,
            "neutral": 24.290559768676758
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 39,
        "region": {
            "x": 1152,
            "y": 417,
            "w": 127,
            "h": 132,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.58377075195312,
            "Man": 0.4162350594997406
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.775895595550537,
            "indian": 0.2222784459590912,
            "black": 0.00973514188081026,
            "white": 88.51463317871094,
            "middle eastern": 5.657830715179443,
            "latino hispanic": 3.8196332454681396
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.8689784407615662,
            "disgust": 10.668511390686035,
            "fear": 0.01395010482519865,
            "happy": 88.01025390625,
            "sad": 0.14395420253276825,
            "surprise": 2.7869120458490215e-05,
            "neutral": 0.2943277060985565
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 872,
            "y": 413,
            "w": 95,
            "h": 95,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 2.5134806632995605,
            "Man": 97.48651885986328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.584754943847656,
            "indian": 0.25535279512405396,
            "black": 0.04422655701637268,
            "white": 87.0589828491211,
            "middle eastern": 3.33408260345459,
            "latino hispanic": 3.7226016521453857
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 50.46377182006836,
            "disgust": 0.3341127932071686,
            "fear": 0.40894952416419983,
            "happy": 0.000156388123286888,
            "sad": 29.831165313720703,
            "surprise": 8.217315553338267e-06,
            "neutral": 18.961841583251953
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 32,
        "region": {
            "x": 1031,
            "y": 479,
            "w": 90,
            "h": 90,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 1.602393627166748,
            "Man": 98.39759826660156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.383879661560059,
            "indian": 7.589883804321289,
            "black": 4.309779644012451,
            "white": 29.623064041137695,
            "middle eastern": 21.187767028808594,
            "latino hispanic": 21.90562629699707
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 73.5904541015625,
            "disgust": 0.08217060565948486,
            "fear": 25.920501708984375,
            "happy": 7.504233345834166e-10,
            "sad": 0.4043337106704712,
            "surprise": 1.0260329872835428e-05,
            "neutral": 0.0025325152091681957
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 27,
        "region": {
            "x": 37,
            "y": 437,
            "w": 104,
            "h": 104,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 2.7225029468536377,
            "Man": 97.2774887084961
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.000158804003149271,
            "indian": 9.904907346935943e-05,
            "black": 1.3454480267682811e-06,
            "white": 99.76426696777344,
            "middle eastern": 0.15956740081310272,
            "latino hispanic": 0.07591018080711365
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.4593563079833984,
            "disgust": 0.0006428583874367177,
            "fear": 95.54254150390625,
            "happy": 9.619412594474852e-05,
            "sad": 0.9190733432769775,
            "surprise": 0.0015895215328782797,
            "neutral": 0.07669341564178467
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 34,
        "region": {
            "x": 469,
            "y": 401,
            "w": 96,
            "h": 96,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 3.2742996215820312,
            "Man": 96.72570037841797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.00980804767459631,
            "indian": 0.022309063002467155,
            "black": 0.0005905686412006617,
            "white": 93.78328704833984,
            "middle eastern": 3.5190112590789795,
            "latino hispanic": 2.6649954319000244
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.323957443237305,
            "disgust": 0.011674840934574604,
            "fear": 35.98829650878906,
            "happy": 0.1668635755777359,
            "sad": 52.097084045410156,
            "surprise": 0.0020316157024353743,
            "neutral": 7.410091400146484
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 569,
            "y": 492,
            "w": 100,
            "h": 100,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 7.148725509643555,
            "Man": 92.85128021240234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0007817305740900338,
            "indian": 0.00030232619610615075,
            "black": 1.675571911619045e-05,
            "white": 99.47637176513672,
            "middle eastern": 0.3052414357662201,
            "latino hispanic": 0.21727831661701202
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 92.02722930908203,
            "disgust": 1.8781973267323337e-05,
            "fear": 0.32087498903274536,
            "happy": 0.07872462272644043,
            "sad": 1.2572141885757446,
            "surprise": 0.0007148216245695949,
            "neutral": 6.315219879150391
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 28,
        "region": {
            "x": 407,
            "y": 633,
            "w": 100,
            "h": 100,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 7.720174789428711,
            "Man": 92.27983093261719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.409489631652832,
            "indian": 2.5213747024536133,
            "black": 0.2695060968399048,
            "white": 56.35619354248047,
            "middle eastern": 23.83013343811035,
            "latino hispanic": 12.613301277160645
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 31.063493728637695,
            "disgust": 0.0035073247272521257,
            "fear": 17.784725189208984,
            "happy": 2.3281474113464355,
            "sad": 7.515606880187988,
            "surprise": 2.6435811519622803,
            "neutral": 38.66094207763672
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 726,
            "y": 521,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 3.696789264678955,
            "Man": 96.30321502685547
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.588284015655518,
            "indian": 0.117331862449646,
            "black": 0.023267541080713272,
            "white": 89.65715789794922,
            "middle eastern": 1.998628854751587,
            "latino hispanic": 3.615335702896118
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.03896170109510422,
            "disgust": 1.329949554929044e-07,
            "fear": 32.61973190307617,
            "happy": 3.901702802977525e-05,
            "sad": 67.09053802490234,
            "surprise": 2.138535819540266e-05,
            "neutral": 0.25070759654045105
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 30,
        "region": {
            "x": 209,
            "y": 653,
            "w": 100,
            "h": 100,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 4.5329999923706055,
            "Man": 95.46700286865234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.12444435805082321,
            "indian": 0.27213892340660095,
            "black": 0.013023975305259228,
            "white": 79.9797134399414,
            "middle eastern": 11.821767807006836,
            "latino hispanic": 7.78890323638916
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.4829471111297607,
            "disgust": 2.8005855967627724e-10,
            "fear": 0.48962318897247314,
            "happy": 3.904688696820813e-07,
            "sad": 1.6893748044967651,
            "surprise": 0.00010340825974708423,
            "neutral": 96.33795166015625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 558,
            "y": 656,
            "w": 97,
            "h": 97,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.9750699996948242,
            "Man": 98.0249252319336
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.956749150546557e-09,
            "indian": 1.6004551850468118e-10,
            "black": 6.820328264829645e-13,
            "white": 99.99934387207031,
            "middle eastern": 0.0004527880228124559,
            "latino hispanic": 0.0001999459054786712
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 95.01757049560547,
            "disgust": 0.004879148676991463,
            "fear": 1.5134162902832031,
            "happy": 0.969379186630249,
            "sad": 0.7467002868652344,
            "surprise": 0.05338851362466812,
            "neutral": 1.6946637630462646
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 27,
        "region": {
            "x": 902,
            "y": 665,
            "w": 102,
            "h": 102,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 6.004855632781982,
            "Man": 93.99514770507812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.042299386113882065,
            "indian": 0.00842736940830946,
            "black": 0.0003176181926392019,
            "white": 95.9759521484375,
            "middle eastern": 2.0407018661499023,
            "latino hispanic": 1.932304859161377
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 75.0786361694336,
            "disgust": 0.02195587381720543,
            "fear": 11.802351951599121,
            "happy": 0.0033140636514872313,
            "sad": 0.5748655200004578,
            "surprise": 0.11185109615325928,
            "neutral": 12.407032012939453
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 34,
        "region": {
            "x": 882,
            "y": 801,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 0.5306322574615479,
            "Man": 99.46936798095703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.011884757317602634,
            "indian": 0.018913939595222473,
            "black": 0.0007447855896316469,
            "white": 94.79702758789062,
            "middle eastern": 3.8911778926849365,
            "latino hispanic": 1.2802584171295166
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.749650001525879,
            "disgust": 4.098454155609943e-05,
            "fear": 2.9974985122680664,
            "happy": 0.13260067999362946,
            "sad": 56.16902160644531,
            "surprise": 0.025197934359312057,
            "neutral": 35.92599105834961
        },
        "dominant_emotion": "sad"
    }
]

console.log("Meta Results for Software Developer:");
const data = software_developer_data.concat(software_developer_data2, software_developer_data3, software_developer_data4);
console.log(processData(data));