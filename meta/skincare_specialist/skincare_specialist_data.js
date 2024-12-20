const { processData } = require('../../data_processing.js');

let skincare_specialist_data = [
    {
        "age": 28,
        "region": {
            "x": 1059,
            "y": 0,
            "w": 112,
            "h": 112,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 1.2746027708053589,
            "Man": 98.72539520263672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.81541442871094,
            "indian": 0.14612214267253876,
            "black": 0.0004365523927845061,
            "white": 0.009032977744936943,
            "middle eastern": 8.086689922492951e-05,
            "latino hispanic": 0.028916362673044205
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0019650666508823633,
            "disgust": 3.201888556267178e-14,
            "fear": 7.404987059089763e-07,
            "happy": 99.62373352050781,
            "sad": 0.0038190095219761133,
            "surprise": 3.463414941506926e-06,
            "neutral": 0.37046897411346436
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 870,
            "y": 0,
            "w": 95,
            "h": 95,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.617919921875,
            "Man": 0.38207265734672546
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.98302459716797,
            "indian": 0.0041424911469221115,
            "black": 4.4069889781894744e-07,
            "white": 0.0009678461938165128,
            "middle eastern": 3.5119765584568086e-07,
            "latino hispanic": 0.0118701858446002
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0014384504174813628,
            "disgust": 4.168246693983524e-13,
            "fear": 9.268476787838154e-06,
            "happy": 91.41346740722656,
            "sad": 4.895207530353218e-05,
            "surprise": 0.0002453331835567951,
            "neutral": 8.584794044494629
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 627,
            "y": 23,
            "w": 119,
            "h": 119,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 0.02448086440563202,
            "Man": 99.97551727294922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 97.79692077636719,
            "indian": 0.5738718509674072,
            "black": 0.010572814382612705,
            "white": 0.10772361606359482,
            "middle eastern": 0.0083191879093647,
            "latino hispanic": 1.5025924444198608
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0005130857462063432,
            "disgust": 3.072274857347298e-17,
            "fear": 7.442803706680934e-08,
            "happy": 0.00038952621980570257,
            "sad": 0.0011008735746145248,
            "surprise": 4.384389032385805e-11,
            "neutral": 99.99800109863281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 0,
            "y": 32,
            "w": 100,
            "h": 100,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 1.187030553817749,
            "Man": 98.81295776367188
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.99332427978516,
            "indian": 0.0022794166579842567,
            "black": 4.3287766260391436e-08,
            "white": 0.00017989099433179945,
            "middle eastern": 1.9775574955360753e-08,
            "latino hispanic": 0.004221069626510143
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.06820903718471527,
            "disgust": 8.082081876636948e-06,
            "fear": 0.08193527162075043,
            "happy": 1.683558702468872,
            "sad": 25.883079528808594,
            "surprise": 0.0022305836901068687,
            "neutral": 72.28097534179688
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 394,
            "y": 65,
            "w": 122,
            "h": 122,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.09027034044265747,
            "Man": 99.90973663330078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 100.0,
            "indian": 2.608256188807445e-08,
            "black": 6.779175253790589e-15,
            "white": 1.1388851817173418e-07,
            "middle eastern": 7.800074842479517e-15,
            "latino hispanic": 2.567923957030871e-06
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.1900696754455566,
            "disgust": 0.007383477874100208,
            "fear": 0.09424982964992523,
            "happy": 0.12646949291229248,
            "sad": 29.218494415283203,
            "surprise": 0.0008214832632802427,
            "neutral": 68.36251068115234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 167,
            "y": 53,
            "w": 108,
            "h": 108,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 1.6357958316802979,
            "Man": 98.36421203613281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.99007415771484,
            "indian": 0.0033173791598528624,
            "black": 2.643063680807245e-06,
            "white": 0.0014978047693148255,
            "middle eastern": 3.7964705370541196e-06,
            "latino hispanic": 0.005104767624288797
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 10.313299179077148,
            "disgust": 8.28992907306314e-13,
            "fear": 6.523469346575439e-05,
            "happy": 0.0011309214169159532,
            "sad": 0.07260379195213318,
            "surprise": 9.629349539963528e-10,
            "neutral": 89.61289978027344
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 22,
        "region": {
            "x": 988,
            "y": 156,
            "w": 122,
            "h": 122,
            "left_eye": [
                1067,
                205
            ],
            "right_eye": [
                1029,
                206
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.020857660099864006,
            "Man": 99.97914123535156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.99998474121094,
            "indian": 4.349711616669083e-06,
            "black": 5.389657768478315e-14,
            "white": 1.6041259698340582e-07,
            "middle eastern": 1.1356885619645887e-13,
            "latino hispanic": 8.284475370601285e-06
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.002188731450587511,
            "disgust": 1.2193157594708737e-08,
            "fear": 0.05950738117098808,
            "happy": 0.001366176875308156,
            "sad": 0.16981929540634155,
            "surprise": 0.00016551004955545068,
            "neutral": 99.76695251464844
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 0,
            "y": 180,
            "w": 117,
            "h": 117,
            "left_eye": [
                56,
                226
            ],
            "right_eye": [
                14,
                229
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.017909813672304153,
            "Man": 99.98208618164062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.99993133544922,
            "indian": 1.2216804861964192e-05,
            "black": 9.434529980173467e-13,
            "white": 1.5621984857716598e-05,
            "middle eastern": 1.858330113055362e-12,
            "latino hispanic": 4.6585730160586536e-05
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0015273550525307655,
            "disgust": 5.144970227632939e-09,
            "fear": 0.05799226462841034,
            "happy": 2.7661968488246202e-05,
            "sad": 1.0004395246505737,
            "surprise": 4.424146482051583e-06,
            "neutral": 98.94001007080078
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 1140,
            "y": 127,
            "w": 139,
            "h": 143,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 16.09746742248535,
            "Man": 83.90253448486328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.97852325439453,
            "indian": 0.0029077765066176653,
            "black": 1.1659307347144932e-05,
            "white": 0.006498124450445175,
            "middle eastern": 6.647624104516581e-05,
            "latino hispanic": 0.011994102969765663
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.6085400581359863,
            "disgust": 0.019380643963813782,
            "fear": 1.7188928127288818,
            "happy": 0.45159459114074707,
            "sad": 8.013340950012207,
            "surprise": 0.005513935815542936,
            "neutral": 88.18273162841797
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 767,
            "y": 199,
            "w": 132,
            "h": 132,
            "left_eye": [
                852,
                250
            ],
            "right_eye": [
                812,
                253
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.0057328082621097565,
            "Man": 99.9942626953125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.99950408935547,
            "indian": 7.509527495130897e-05,
            "black": 1.1298188773434248e-10,
            "white": 3.184106753906235e-05,
            "middle eastern": 1.9158478969938386e-10,
            "latino hispanic": 0.0003895454865414649
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.27544501423835754,
            "disgust": 1.5496920013902127e-07,
            "fear": 0.06001441553235054,
            "happy": 0.003569310763850808,
            "sad": 0.9667267799377441,
            "surprise": 1.5285562540157116e-06,
            "neutral": 98.69424438476562
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 581,
            "y": 200,
            "w": 122,
            "h": 122,
            "left_eye": [
                660,
                247
            ],
            "right_eye": [
                621,
                249
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.1572333574295044,
            "Man": 99.8427734375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.50971221923828,
            "indian": 0.18959476053714752,
            "black": 0.00010200268297921866,
            "white": 0.01834852807223797,
            "middle eastern": 1.5013089068816043e-05,
            "latino hispanic": 0.28223225474357605
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.7672048211097717,
            "disgust": 9.439069799555e-06,
            "fear": 0.9916984438896179,
            "happy": 0.007019872777163982,
            "sad": 4.519190311431885,
            "surprise": 0.00014088558964431286,
            "neutral": 93.71473693847656
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 226,
            "y": 205,
            "w": 127,
            "h": 127,
            "left_eye": [
                307,
                255
            ],
            "right_eye": [
                265,
                255
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.007608877029269934,
            "Man": 99.99239349365234
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.98921966552734,
            "indian": 0.0015803626738488674,
            "black": 2.0090203634026693e-07,
            "white": 0.001215110532939434,
            "middle eastern": 2.9130612233529973e-07,
            "latino hispanic": 0.007985401898622513
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.3028793931007385,
            "disgust": 1.9768859260693716e-07,
            "fear": 0.009012761525809765,
            "happy": 0.003140796907246113,
            "sad": 1.993147611618042,
            "surprise": 1.4348443073686212e-06,
            "neutral": 97.69181823730469
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 1106,
            "y": 300,
            "w": 138,
            "h": 138,
            "left_eye": [
                1194,
                356
            ],
            "right_eye": [
                1151,
                356
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.015639983117580414,
            "Man": 99.98435974121094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.9975357055664,
            "indian": 0.000764369557145983,
            "black": 1.2560439799358392e-08,
            "white": 4.726950282929465e-05,
            "middle eastern": 9.195375128001615e-09,
            "latino hispanic": 0.0016622727271169424
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.046077027916908264,
            "disgust": 1.3506044899599246e-16,
            "fear": 1.5525094568147324e-05,
            "happy": 1.952872480615042e-06,
            "sad": 0.02125316858291626,
            "surprise": 2.2662671739226425e-09,
            "neutral": 99.9326400756836
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 405,
            "y": 350,
            "w": 144,
            "h": 144,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.2661878168582916,
            "Man": 99.73381042480469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.75057220458984,
            "indian": 0.10109564661979675,
            "black": 0.0003658982168417424,
            "white": 0.012195764109492302,
            "middle eastern": 0.00013223600399214774,
            "latino hispanic": 0.1356430947780609
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.019790709018707275,
            "disgust": 6.730416649214843e-15,
            "fear": 0.0001666260213823989,
            "happy": 2.1197124624450225e-06,
            "sad": 0.057931989431381226,
            "surprise": 1.1512658187884384e-10,
            "neutral": 99.92211151123047
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 765,
            "y": 363,
            "w": 131,
            "h": 131,
            "left_eye": [
                855,
                416
            ],
            "right_eye": [
                805,
                416
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.007802623324096203,
            "Man": 99.99219512939453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 55.704994201660156,
            "indian": 9.783035278320312,
            "black": 1.3769105672836304,
            "white": 3.355483293533325,
            "middle eastern": 0.9345855712890625,
            "latino hispanic": 28.84499168395996
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.54362553358078,
            "disgust": 1.7460078538533708e-07,
            "fear": 0.13894930481910706,
            "happy": 2.308740840817336e-05,
            "sad": 18.26558494567871,
            "surprise": 3.7075089664995176e-08,
            "neutral": 81.05181884765625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 167,
            "y": 370,
            "w": 144,
            "h": 144,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.0675094872713089,
            "Man": 99.9324951171875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.99390411376953,
            "indian": 0.0005228703375905752,
            "black": 2.2400986665616074e-07,
            "white": 3.8881906220922247e-05,
            "middle eastern": 1.3487932548628123e-08,
            "latino hispanic": 0.0055233570747077465
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.006001895293593407,
            "disgust": 3.353403110750719e-10,
            "fear": 0.0012771475594490767,
            "happy": 0.0012299075024202466,
            "sad": 0.12950631976127625,
            "surprise": 2.6243151296512224e-07,
            "neutral": 99.86198425292969
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 279,
            "y": 409,
            "w": 132,
            "h": 132,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 13.027713775634766,
            "Man": 86.97228240966797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.0335867404937744,
            "indian": 1.3570144176483154,
            "black": 0.3726266920566559,
            "white": 65.41602325439453,
            "middle eastern": 21.506141662597656,
            "latino hispanic": 8.314616203308105
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.1607128232717514,
            "disgust": 5.37623626173378e-11,
            "fear": 0.08384585380554199,
            "happy": 1.4591847658157349,
            "sad": 0.05585785210132599,
            "surprise": 0.841006338596344,
            "neutral": 97.39938354492188
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 950,
            "y": 422,
            "w": 206,
            "h": 206,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 0.14729949831962585,
            "Man": 99.85269165039062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 100.0,
            "indian": 7.075213070207006e-33,
            "black": 0.0,
            "white": 6.028970034321901e-08,
            "middle eastern": 2.826634809193384e-25,
            "latino hispanic": 1.728821212726466e-20
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 8.36051050612241e-09,
            "disgust": 3.9332400261573015e-22,
            "fear": 2.1123746848927816e-11,
            "happy": 99.99993896484375,
            "sad": 6.0860162193421274e-05,
            "surprise": 1.2723233924760713e-12,
            "neutral": 5.299480676512758e-07
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 981,
            "y": 505,
            "w": 149,
            "h": 149,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 4.196128845214844,
            "Man": 95.80387115478516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 99.17906188964844,
            "indian": 0.36003804206848145,
            "black": 0.0022143220994621515,
            "white": 0.23938901722431183,
            "middle eastern": 0.035399314016103745,
            "latino hispanic": 0.1838979423046112
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.660313129425049,
            "disgust": 1.2948739303020318e-11,
            "fear": 0.0030894996598362923,
            "happy": 52.4063720703125,
            "sad": 0.00034661043900996447,
            "surprise": 0.17772774398326874,
            "neutral": 44.75215148925781
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 0,
            "y": 531,
            "w": 138,
            "h": 138,
            "left_eye": [
                84,
                584
            ],
            "right_eye": [
                37,
                586
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.92726135253906,
            "Man": 0.07273052632808685
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 91.38459014892578,
            "indian": 1.6030833721160889,
            "black": 0.06833040714263916,
            "white": 0.5158767700195312,
            "middle eastern": 0.030870001763105392,
            "latino hispanic": 6.397252559661865
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.032168224453926086,
            "disgust": 8.164243627106771e-05,
            "fear": 0.1972687840461731,
            "happy": 0.07202592492103577,
            "sad": 10.171134948730469,
            "surprise": 0.0006729678134433925,
            "neutral": 89.52664947509766
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 567,
            "y": 539,
            "w": 139,
            "h": 139,
            "left_eye": [
                657,
                595
            ],
            "right_eye": [
                611,
                592
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 98.0216064453125,
            "Man": 1.9783897399902344
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 98.201904296875,
            "indian": 0.7720653414726257,
            "black": 0.007328634615987539,
            "white": 0.10121345520019531,
            "middle eastern": 0.0076582469046115875,
            "latino hispanic": 0.9098194241523743
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.08322664350271225,
            "disgust": 2.6037048428406706e-06,
            "fear": 0.1548469364643097,
            "happy": 0.055331770330667496,
            "sad": 1.388865351676941,
            "surprise": 0.002086217515170574,
            "neutral": 98.31563568115234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 296,
            "y": 698,
            "w": 160,
            "h": 160,
            "left_eye": [
                400,
                762
            ],
            "right_eye": [
                349,
                762
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.07251981645822525,
            "Man": 99.92748260498047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 62.88862228393555,
            "indian": 19.408611297607422,
            "black": 1.1506201028823853,
            "white": 3.0215418338775635,
            "middle eastern": 1.069435715675354,
            "latino hispanic": 12.461172103881836
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0009016431868076324,
            "disgust": 5.637728131557829e-12,
            "fear": 0.0006508397636935115,
            "happy": 0.00020380099886097014,
            "sad": 0.012184076011180878,
            "surprise": 1.8330075590711203e-07,
            "neutral": 99.9860610961914
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 755,
            "y": 747,
            "w": 153,
            "h": 153,
            "left_eye": [
                855,
                803
            ],
            "right_eye": [
                804,
                805
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.012344541028141975,
            "Man": 99.9876480102539
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 78.86997985839844,
            "indian": 3.088660478591919,
            "black": 0.1860029101371765,
            "white": 0.8866684436798096,
            "middle eastern": 0.10613580048084259,
            "latino hispanic": 16.862550735473633
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.5604796409606934,
            "disgust": 5.138202686794102e-05,
            "fear": 0.06082196906208992,
            "happy": 0.002010517055168748,
            "sad": 8.50669002532959,
            "surprise": 0.00012287376739550382,
            "neutral": 88.86981964111328
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 1067,
            "y": 764,
            "w": 152,
            "h": 152,
            "left_eye": [
                1166,
                822
            ],
            "right_eye": [
                1116,
                823
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 86.67009735107422,
            "Man": 13.329906463623047
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.99262237548828,
            "indian": 0.004743906669318676,
            "black": 1.0183023135823532e-07,
            "white": 0.0012414996745064855,
            "middle eastern": 6.6023567342199385e-06,
            "latino hispanic": 0.0013886907836422324
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.009140878915786743,
            "disgust": 3.422427619081958e-10,
            "fear": 0.001807757536880672,
            "happy": 0.06296364963054657,
            "sad": 0.13678216934204102,
            "surprise": 4.0116257878253236e-05,
            "neutral": 99.78926849365234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 791,
            "y": 1039,
            "w": 146,
            "h": 146,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.09070560336112976,
            "Man": 99.90929412841797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 32.4501953125,
            "indian": 13.263197898864746,
            "black": 9.214888572692871,
            "white": 12.613204956054688,
            "middle eastern": 9.58229923248291,
            "latino hispanic": 22.8762149810791
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.200945854187012,
            "disgust": 1.014109443531197e-06,
            "fear": 0.03357375040650368,
            "happy": 0.010307074524462223,
            "sad": 1.3637464046478271,
            "surprise": 0.0007602761033922434,
            "neutral": 93.39067077636719
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 40,
        "region": {
            "x": 1103,
            "y": 1034,
            "w": 158,
            "h": 158,
            "left_eye": [
                1211,
                1093
            ],
            "right_eye": [
                1156,
                1093
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.2991999387741089,
            "Man": 99.7008056640625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 56.22031784057617,
            "indian": 16.610187530517578,
            "black": 3.0920262336730957,
            "white": 3.58083438873291,
            "middle eastern": 2.0574769973754883,
            "latino hispanic": 18.439165115356445
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 10.398387908935547,
            "disgust": 7.997313034024955e-09,
            "fear": 0.013852439820766449,
            "happy": 0.0005029714084230363,
            "sad": 5.525476455688477,
            "surprise": 5.49489016066218e-07,
            "neutral": 84.06177520751953
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 78,
            "y": 999,
            "w": 152,
            "h": 152,
            "left_eye": [
                179,
                1057
            ],
            "right_eye": [
                122,
                1060
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.049181655049324036,
            "Man": 99.95081329345703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 94.83915710449219,
            "indian": 0.6804574728012085,
            "black": 0.04459504783153534,
            "white": 0.07659293711185455,
            "middle eastern": 0.0020073282066732645,
            "latino hispanic": 4.357184886932373
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.468327522277832,
            "disgust": 0.00037992687430232763,
            "fear": 0.7962758541107178,
            "happy": 0.0015398222021758556,
            "sad": 49.30294418334961,
            "surprise": 0.00017221450980287045,
            "neutral": 48.43036651611328
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 448,
            "y": 1008,
            "w": 155,
            "h": 155,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.38275259733200073,
            "Man": 99.61724853515625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 90.39060974121094,
            "indian": 3.487700939178467,
            "black": 0.12451599538326263,
            "white": 1.7939958572387695,
            "middle eastern": 0.1251288652420044,
            "latino hispanic": 4.078054428100586
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 7.223180294036865,
            "disgust": 0.0005854105111211538,
            "fear": 0.1888364553451538,
            "happy": 0.004755327478051186,
            "sad": 23.452922821044922,
            "surprise": 1.3692813354282407e-06,
            "neutral": 69.12972259521484
        },
        "dominant_emotion": "neutral"
    }
]
let skincare_specialist_data2 = [
    {
        "age": 29,
        "region": {
            "x": 742,
            "y": 51,
            "w": 80,
            "h": 80,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.08674360811710358,
            "Man": 99.91325378417969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.038204550743103,
            "indian": 6.208224773406982,
            "black": 0.36241331696510315,
            "white": 21.805667877197266,
            "middle eastern": 50.78164291381836,
            "latino hispanic": 19.803848266601562
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.5529687404632568,
            "disgust": 2.2040927433408797e-05,
            "fear": 0.4062235951423645,
            "happy": 0.5999411344528198,
            "sad": 2.8330509662628174,
            "surprise": 0.013714198023080826,
            "neutral": 94.59408569335938
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 33,
        "region": {
            "x": 1233,
            "y": 63,
            "w": 46,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 1.3782745599746704,
            "Man": 98.6217269897461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.13712820410728455,
            "indian": 0.005546575877815485,
            "black": 0.00017682423640508205,
            "white": 98.44784545898438,
            "middle eastern": 0.9732417464256287,
            "latino hispanic": 0.43605732917785645
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 39.80247116088867,
            "disgust": 0.006582458037883043,
            "fear": 0.03348671644926071,
            "happy": 16.12660789489746,
            "sad": 43.24983596801758,
            "surprise": 5.284472081257263e-06,
            "neutral": 0.7810066938400269
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 34,
        "region": {
            "x": 1114,
            "y": 68,
            "w": 87,
            "h": 87,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.00798353087157011,
            "Man": 99.99201202392578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.002499580383301,
            "indian": 22.5096492767334,
            "black": 3.118746519088745,
            "white": 14.095133781433105,
            "middle eastern": 19.627357482910156,
            "latino hispanic": 36.64661407470703
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 4.473849773406982,
            "disgust": 2.3474862246075645e-05,
            "fear": 0.2358531355857849,
            "happy": 23.228527069091797,
            "sad": 7.127354145050049,
            "surprise": 0.0031365477479994297,
            "neutral": 64.93125915527344
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 246,
            "y": 75,
            "w": 93,
            "h": 93,
            "left_eye": [
                306,
                110
            ],
            "right_eye": [
                276,
                112
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.04805852845311165,
            "Man": 99.95195007324219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.9823248386383057,
            "indian": 10.215032577514648,
            "black": 1.8911666870117188,
            "white": 26.304548263549805,
            "middle eastern": 26.976993560791016,
            "latino hispanic": 30.629932403564453
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.9693058133125305,
            "disgust": 3.3349049743947035e-08,
            "fear": 0.0348200798034668,
            "happy": 0.017871703952550888,
            "sad": 2.17948055267334,
            "surprise": 3.5167446185369045e-05,
            "neutral": 96.7984848022461
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 1119,
            "y": 165,
            "w": 90,
            "h": 90,
            "left_eye": [
                1181,
                202
            ],
            "right_eye": [
                1151,
                196
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.03179728984832764,
            "Man": 99.96820831298828
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.030010223388672,
            "indian": 16.584951400756836,
            "black": 5.437023162841797,
            "white": 15.146474838256836,
            "middle eastern": 16.31517791748047,
            "latino hispanic": 36.48637008666992
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 61.912559509277344,
            "disgust": 0.12443886697292328,
            "fear": 10.079724311828613,
            "happy": 0.07848432660102844,
            "sad": 11.832408905029297,
            "surprise": 0.03676774352788925,
            "neutral": 15.935617446899414
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 24,
        "region": {
            "x": 924,
            "y": 51,
            "w": 98,
            "h": 98,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.004628765396773815,
            "Man": 99.99537658691406
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.260840654373169,
            "indian": 7.25093936920166,
            "black": 1.5745506286621094,
            "white": 23.407808303833008,
            "middle eastern": 37.223506927490234,
            "latino hispanic": 28.28235626220703
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.8575353622436523,
            "disgust": 2.4615468774413785e-08,
            "fear": 0.011408764868974686,
            "happy": 0.1196281760931015,
            "sad": 3.335522174835205,
            "surprise": 0.0037641096860170364,
            "neutral": 94.6721420288086
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 713,
            "y": 193,
            "w": 95,
            "h": 95,
            "left_eye": [
                777,
                232
            ],
            "right_eye": [
                742,
                228
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.75914001464844,
            "Man": 0.24086883664131165
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.013291835784912,
            "indian": 4.5052666664123535,
            "black": 0.843177855014801,
            "white": 35.36738967895508,
            "middle eastern": 22.09389877319336,
            "latino hispanic": 30.176977157592773
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.9903085231781006,
            "disgust": 0.00018899873248301446,
            "fear": 22.984655380249023,
            "happy": 0.03135193511843681,
            "sad": 8.87678050994873,
            "surprise": 0.061841800808906555,
            "neutral": 67.05487823486328
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 102,
            "y": 68,
            "w": 91,
            "h": 91,
            "left_eye": [
                162,
                102
            ],
            "right_eye": [
                128,
                103
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 95.2703857421875,
            "Man": 4.7296142578125
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 4.665816307067871,
            "indian": 7.992660045623779,
            "black": 1.4804494380950928,
            "white": 26.6209774017334,
            "middle eastern": 25.555461883544922,
            "latino hispanic": 33.68463134765625
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.033024549484253,
            "disgust": 6.810038757976145e-05,
            "fear": 0.046534113585948944,
            "happy": 0.04478363320231438,
            "sad": 14.570930480957031,
            "surprise": 3.618758273660205e-05,
            "neutral": 83.30462646484375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 374,
            "y": 223,
            "w": 103,
            "h": 103,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 12.928654670715332,
            "Man": 87.07134246826172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 50.5463981628418,
            "indian": 4.961153030395508,
            "black": 1.619714617729187,
            "white": 18.940603256225586,
            "middle eastern": 8.300076484680176,
            "latino hispanic": 15.63205337524414
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 99.98038482666016,
            "disgust": 7.2859727140439645e-09,
            "fear": 0.0012505539925768971,
            "happy": 0.008061977103352547,
            "sad": 0.00491376593708992,
            "surprise": 1.4370176586453454e-06,
            "neutral": 0.005388590507209301
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 25,
        "region": {
            "x": 196,
            "y": 184,
            "w": 106,
            "h": 106,
            "left_eye": [
                265,
                224
            ],
            "right_eye": [
                233,
                228
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 0.05657936632633209,
            "Man": 99.94342041015625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.03550434485077858,
            "indian": 6.110317707061768,
            "black": 0.03163640946149826,
            "white": 6.377397537231445,
            "middle eastern": 76.3458023071289,
            "latino hispanic": 11.099343299865723
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.6865806579589844,
            "disgust": 2.6970796170644462e-05,
            "fear": 0.022345496341586113,
            "happy": 5.74476432800293,
            "sad": 2.7628962993621826,
            "surprise": 0.0005433200276456773,
            "neutral": 90.78284454345703
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 0,
            "y": 57,
            "w": 87,
            "h": 87,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 3.134920358657837,
            "Man": 96.86508178710938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.922610759735107,
            "indian": 24.427038192749023,
            "black": 1.9203054904937744,
            "white": 11.71335506439209,
            "middle eastern": 19.7088565826416,
            "latino hispanic": 37.30783462524414
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0173476692289114,
            "disgust": 5.432969178709168e-12,
            "fear": 0.0002156227856175974,
            "happy": 1.1891687279330654e-07,
            "sad": 0.20769481360912323,
            "surprise": 1.67879200124732e-11,
            "neutral": 99.77474212646484
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 35,
        "region": {
            "x": 37,
            "y": 231,
            "w": 121,
            "h": 121,
            "left_eye": [
                110,
                275
            ],
            "right_eye": [
                73,
                279
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.016002340242266655,
            "Man": 99.98399353027344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.11531763523817062,
            "indian": 4.503807544708252,
            "black": 0.07165779173374176,
            "white": 32.296878814697266,
            "middle eastern": 47.96384811401367,
            "latino hispanic": 15.04848861694336
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.044246673583984375,
            "disgust": 1.1851011727515015e-08,
            "fear": 0.2655685544013977,
            "happy": 5.8307959989178926e-05,
            "sad": 3.67014479637146,
            "surprise": 7.466443548764801e-06,
            "neutral": 96.01997375488281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 489,
            "y": 219,
            "w": 119,
            "h": 119,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.07919064909219742,
            "Man": 99.92081451416016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.3454204499721527,
            "indian": 0.9027620553970337,
            "black": 0.11279258877038956,
            "white": 65.00141143798828,
            "middle eastern": 18.374296188354492,
            "latino hispanic": 15.263309478759766
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.420811414718628,
            "disgust": 0.0035196917597204447,
            "fear": 0.3228985667228699,
            "happy": 1.8013838529586792,
            "sad": 34.401947021484375,
            "surprise": 0.04598270729184151,
            "neutral": 60.00345230102539
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 814,
            "y": 233,
            "w": 109,
            "h": 109,
            "left_eye": [
                883,
                273
            ],
            "right_eye": [
                852,
                275
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.01874498277902603,
            "Man": 99.98125457763672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.3729136884212494,
            "indian": 6.302384376525879,
            "black": 0.15052756667137146,
            "white": 22.236757278442383,
            "middle eastern": 52.520347595214844,
            "latino hispanic": 18.417068481445312
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 3.6154165267944336,
            "disgust": 3.0275607059593312e-05,
            "fear": 0.12704336643218994,
            "happy": 0.052348315715789795,
            "sad": 4.778515338897705,
            "surprise": 0.0009976669680327177,
            "neutral": 91.42565155029297
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 1023,
            "y": 244,
            "w": 104,
            "h": 104,
            "left_eye": [
                1093,
                283
            ],
            "right_eye": [
                1050,
                284
            ]
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 90.2227783203125,
            "Man": 9.777217864990234
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.6988270878791809,
            "indian": 2.30094051361084,
            "black": 0.32720616459846497,
            "white": 50.846885681152344,
            "middle eastern": 28.28938865661621,
            "latino hispanic": 17.5367431640625
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 4.8464482205190507e-08,
            "disgust": 1.2620370706337898e-17,
            "fear": 1.6687975654128273e-11,
            "happy": 99.2651596069336,
            "sad": 9.042602755471307e-08,
            "surprise": 9.284424777433742e-06,
            "neutral": 0.7348200678825378
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 591,
            "y": 95,
            "w": 96,
            "h": 96,
            "left_eye": [
                653,
                130
            ],
            "right_eye": [
                621,
                131
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 42.972816467285156,
            "Man": 57.02717971801758
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 39.52372360229492,
            "indian": 10.26765251159668,
            "black": 2.420907974243164,
            "white": 14.526175498962402,
            "middle eastern": 11.975289344787598,
            "latino hispanic": 21.286251068115234
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 5.833613872528076,
            "disgust": 0.0011962077114731073,
            "fear": 29.348844528198242,
            "happy": 2.5735576152801514,
            "sad": 9.250323295593262,
            "surprise": 0.06723223626613617,
            "neutral": 52.925235748291016
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 420,
            "y": 95,
            "w": 92,
            "h": 92,
            "left_eye": [
                478,
                129
            ],
            "right_eye": [
                448,
                131
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 28.98276138305664,
            "Man": 71.0172348022461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2776171565055847,
            "indian": 2.3787341117858887,
            "black": 0.17020218074321747,
            "white": 34.7518310546875,
            "middle eastern": 35.07420349121094,
            "latino hispanic": 27.347415924072266
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 2.530844211578369,
            "disgust": 0.03000255860388279,
            "fear": 0.653574526309967,
            "happy": 0.2970612049102783,
            "sad": 18.024032592773438,
            "surprise": 0.0035880510695278645,
            "neutral": 78.46089172363281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 632,
            "y": 307,
            "w": 125,
            "h": 125,
            "left_eye": [
                711,
                354
            ],
            "right_eye": [
                674,
                355
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.02576150931417942,
            "Man": 99.97423553466797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.01480370108038187,
            "indian": 1.0738461017608643,
            "black": 0.01595422253012657,
            "white": 25.91050910949707,
            "middle eastern": 51.39848709106445,
            "latino hispanic": 21.58639907836914
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 49.39955139160156,
            "disgust": 0.21729832887649536,
            "fear": 6.550934314727783,
            "happy": 0.02121199294924736,
            "sad": 20.37261199951172,
            "surprise": 0.010005760937929153,
            "neutral": 23.42838478088379
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 22,
        "region": {
            "x": 231,
            "y": 317,
            "w": 131,
            "h": 131,
            "left_eye": [
                315,
                366
            ],
            "right_eye": [
                273,
                367
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 0.05276637524366379,
            "Man": 99.94723510742188
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.1747014820575714,
            "indian": 6.0735321044921875,
            "black": 0.07467996329069138,
            "white": 16.800304412841797,
            "middle eastern": 61.941898345947266,
            "latino hispanic": 14.934882164001465
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.0606343150138855,
            "disgust": 2.203628612917896e-09,
            "fear": 0.0008375079487450421,
            "happy": 0.22427137196063995,
            "sad": 0.18829521536827087,
            "surprise": 1.506094395153923e-05,
            "neutral": 99.52594757080078
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 26,
        "region": {
            "x": 1005,
            "y": 344,
            "w": 127,
            "h": 127,
            "left_eye": [
                1086,
                392
            ],
            "right_eye": [
                1041,
                394
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 76.69488525390625,
            "Man": 23.305118560791016
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.01646110787987709,
            "indian": 0.017364919185638428,
            "black": 0.0017475287895649672,
            "white": 93.83006286621094,
            "middle eastern": 2.658135414123535,
            "latino hispanic": 3.4762377738952637
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.6947135329246521,
            "disgust": 3.688847527882899e-06,
            "fear": 96.23706817626953,
            "happy": 0.0028230061288923025,
            "sad": 3.0592575073242188,
            "surprise": 0.0010982492240145802,
            "neutral": 0.005044911522418261
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 24,
        "region": {
            "x": 891,
            "y": 519,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.98,
        "gender": {
            "Woman": 9.39385986328125,
            "Man": 90.60613250732422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.07735449820756912,
            "indian": 0.028010960668325424,
            "black": 0.003885895013809204,
            "white": 94.88217163085938,
            "middle eastern": 4.253303050994873,
            "latino hispanic": 0.7552729249000549
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.1069087982177734,
            "disgust": 4.391230049805017e-06,
            "fear": 94.51834106445312,
            "happy": 0.12049151211977005,
            "sad": 0.6122639179229736,
            "surprise": 3.6018834114074707,
            "neutral": 0.040104106068611145
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 35,
        "region": {
            "x": 750,
            "y": 452,
            "w": 123,
            "h": 123,
            "left_eye": [
                829,
                497
            ],
            "right_eye": [
                786,
                499
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99960327148438,
            "Man": 0.0003973324492108077
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 3.671364311230718e-06,
            "indian": 1.0064959496958181e-06,
            "black": 7.907638099879932e-09,
            "white": 99.89189147949219,
            "middle eastern": 0.049518853425979614,
            "latino hispanic": 0.058589234948158264
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.06572908908128738,
            "disgust": 3.879903953674102e-09,
            "fear": 4.458733558654785,
            "happy": 0.6183253526687622,
            "sad": 11.378129959106445,
            "surprise": 0.004958074539899826,
            "neutral": 83.47412872314453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 430,
            "y": 461,
            "w": 147,
            "h": 147,
            "left_eye": [
                522,
                516
            ],
            "right_eye": [
                479,
                517
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.027160609140992165,
            "Man": 99.97283935546875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.018208276480436325,
            "indian": 0.1945231705904007,
            "black": 0.005145297385752201,
            "white": 70.27264404296875,
            "middle eastern": 20.89781951904297,
            "latino hispanic": 8.611655235290527
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.4638677835464478,
            "disgust": 1.6996233587196485e-10,
            "fear": 0.000792123144492507,
            "happy": 0.0004463109653443098,
            "sad": 0.818024218082428,
            "surprise": 4.861187790083932e-07,
            "neutral": 97.71686553955078
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 1211,
            "y": 445,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 11.034710884094238,
            "Man": 88.96528625488281
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.26270708441734314,
            "indian": 0.3014751970767975,
            "black": 0.04701311141252518,
            "white": 83.24684143066406,
            "middle eastern": 10.258031845092773,
            "latino hispanic": 5.883925914764404
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.8598545789718628,
            "disgust": 1.171118242382363e-06,
            "fear": 0.2563423216342926,
            "happy": 0.37530046701431274,
            "sad": 3.9274368286132812,
            "surprise": 3.741773616638966e-05,
            "neutral": 94.58102416992188
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 142,
            "y": 509,
            "w": 128,
            "h": 128,
            "left_eye": [
                228,
                558
            ],
            "right_eye": [
                182,
                559
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.86602020263672,
            "Man": 0.13398009538650513
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.07423682510852814,
            "indian": 1.5607848167419434,
            "black": 0.03298766538500786,
            "white": 41.687896728515625,
            "middle eastern": 41.97228240966797,
            "latino hispanic": 14.6718111038208
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.00028139198548160493,
            "disgust": 2.0547189194530802e-07,
            "fear": 0.016626909375190735,
            "happy": 88.62409973144531,
            "sad": 0.0152041707187891,
            "surprise": 0.017645355314016342,
            "neutral": 11.326144218444824
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 34,
        "region": {
            "x": 1139,
            "y": 543,
            "w": 130,
            "h": 130,
            "left_eye": [
                1225,
                594
            ],
            "right_eye": [
                1180,
                592
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.81623077392578,
            "Man": 0.18376976251602173
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.22567321360111237,
            "indian": 17.840700149536133,
            "black": 0.03722061961889267,
            "white": 6.889954090118408,
            "middle eastern": 63.2913818359375,
            "latino hispanic": 11.715068817138672
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 3.148000955581665,
            "disgust": 0.008546260185539722,
            "fear": 13.768847465515137,
            "happy": 18.94588851928711,
            "sad": 6.139707565307617,
            "surprise": 50.08062744140625,
            "neutral": 7.908377170562744
        },
        "dominant_emotion": "surprise"
    },
    {
        "age": 41,
        "region": {
            "x": 809,
            "y": 617,
            "w": 152,
            "h": 152,
            "left_eye": [
                904,
                672
            ],
            "right_eye": [
                860,
                672
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.002351639559492469,
            "Man": 99.99765014648438
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0006668922142125666,
            "indian": 0.7218210101127625,
            "black": 0.0012632479192689061,
            "white": 21.589603424072266,
            "middle eastern": 70.34954833984375,
            "latino hispanic": 7.337099075317383
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 38.132572174072266,
            "disgust": 7.320868911087075e-10,
            "fear": 0.00943133793771267,
            "happy": 49.66952896118164,
            "sad": 0.007456036284565926,
            "surprise": 0.00099855475127697,
            "neutral": 12.180013656616211
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 0,
            "y": 633,
            "w": 117,
            "h": 117,
            "left_eye": [
                63,
                679
            ],
            "right_eye": [
                20,
                675
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 85.32768249511719,
            "Man": 14.672318458557129
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.323016689042561e-06,
            "indian": 2.237242915725801e-05,
            "black": 1.6434086091976496e-07,
            "white": 99.74649810791016,
            "middle eastern": 0.1583048552274704,
            "latino hispanic": 0.09516206383705139
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.4452495276927948,
            "disgust": 0.00026160592096857727,
            "fear": 1.3607020378112793,
            "happy": 10.751840591430664,
            "sad": 8.546188354492188,
            "surprise": 0.32110852003097534,
            "neutral": 78.57465362548828
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 225,
            "y": 723,
            "w": 144,
            "h": 144,
            "left_eye": [
                320,
                777
            ],
            "right_eye": [
                270,
                780
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.9801254272461,
            "Man": 0.01987924799323082
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.118960757499735e-07,
            "indian": 3.155559898004867e-05,
            "black": 3.638556478335886e-08,
            "white": 99.36463928222656,
            "middle eastern": 0.5897912383079529,
            "latino hispanic": 0.04554056003689766
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.15331541001796722,
            "disgust": 0.008866121992468834,
            "fear": 5.009130001068115,
            "happy": 41.220943450927734,
            "sad": 1.568360447883606,
            "surprise": 0.009269445203244686,
            "neutral": 52.03011703491211
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 413,
            "y": 851,
            "w": 147,
            "h": 147,
            "left_eye": [
                511,
                906
            ],
            "right_eye": [
                460,
                908
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.99873352050781,
            "Man": 0.0012680258369073272
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0007282175938598812,
            "indian": 0.004733744543045759,
            "black": 2.496026354492642e-05,
            "white": 95.0299072265625,
            "middle eastern": 4.098170280456543,
            "latino hispanic": 0.8664353489875793
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.007405094336718321,
            "disgust": 1.57477586526511e-06,
            "fear": 0.06304125487804413,
            "happy": 1.5992077589035034,
            "sad": 0.16049155592918396,
            "surprise": 0.0016420719912275672,
            "neutral": 98.168212890625
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 36,
        "region": {
            "x": 969,
            "y": 773,
            "w": 149,
            "h": 149,
            "left_eye": [
                1066,
                830
            ],
            "right_eye": [
                1015,
                831
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99971008300781,
            "Man": 0.00028577083139680326
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.18834015727043152,
            "indian": 0.8543339371681213,
            "black": 0.04457777366042137,
            "white": 58.23152160644531,
            "middle eastern": 27.56555938720703,
            "latino hispanic": 13.115665435791016
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.7502899169921875,
            "disgust": 0.002797815715894103,
            "fear": 2.9851233959198,
            "happy": 3.105745792388916,
            "sad": 37.93549346923828,
            "surprise": 4.320249557495117,
            "neutral": 48.90029525756836
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 25,
            "y": 935,
            "w": 144,
            "h": 144,
            "left_eye": [
                121,
                983
            ],
            "right_eye": [
                69,
                993
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.94742584228516,
            "Man": 0.05257842689752579
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 6.262433771553333e-08,
            "indian": 4.3937184557307774e-08,
            "black": 8.310808291556171e-11,
            "white": 99.99658966064453,
            "middle eastern": 0.001762274419888854,
            "latino hispanic": 0.0016490052221342921
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.4478073120117188,
            "disgust": 0.41784918308258057,
            "fear": 1.3936153650283813,
            "happy": 0.2134876549243927,
            "sad": 7.8069353103637695,
            "surprise": 0.0023850291036069393,
            "neutral": 88.71792602539062
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 680,
            "y": 984,
            "w": 167,
            "h": 167,
            "left_eye": [
                796,
                1045
            ],
            "right_eye": [
                733,
                1047
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.95520782470703,
            "Man": 0.04479052871465683
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.00041157539817504585,
            "indian": 0.0013022273778915405,
            "black": 8.19898286863463e-06,
            "white": 97.58356475830078,
            "middle eastern": 1.9447121620178223,
            "latino hispanic": 0.47000232338905334
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5178152322769165,
            "disgust": 2.312526248715585e-06,
            "fear": 0.18839865922927856,
            "happy": 1.3047959804534912,
            "sad": 0.7184693813323975,
            "surprise": 0.0012373030185699463,
            "neutral": 97.269287109375
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 1109,
            "y": 1027,
            "w": 165,
            "h": 165,
            "left_eye": [
                1217,
                1086
            ],
            "right_eye": [
                1163,
                1087
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.02174672670662403,
            "Man": 99.9782485961914
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.04728551208972931,
            "indian": 6.457711219787598,
            "black": 0.04853026941418648,
            "white": 14.126803398132324,
            "middle eastern": 61.77185821533203,
            "latino hispanic": 17.547815322875977
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.046241771429777145,
            "disgust": 1.0010017988115738e-11,
            "fear": 0.001743821892887354,
            "happy": 70.01693725585938,
            "sad": 0.005522180814296007,
            "surprise": 0.011044682934880257,
            "neutral": 29.91851234436035
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 274,
            "y": 1152,
            "w": 136,
            "h": 127,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 10.593635559082031,
            "Man": 89.40635681152344
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.016162095591425896,
            "indian": 0.013892409391701221,
            "black": 0.0003390718484297395,
            "white": 96.03784942626953,
            "middle eastern": 1.9767714738845825,
            "latino hispanic": 1.9549893140792847
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 36.375545501708984,
            "disgust": 1.2596794366836548,
            "fear": 10.875767707824707,
            "happy": 0.10149575769901276,
            "sad": 47.817771911621094,
            "surprise": 0.13158725202083588,
            "neutral": 3.4381520748138428
        },
        "dominant_emotion": "sad"
    }
]
let skincare_specialist_data3 = [
    {
        "age": 30,
        "region": {
            "x": 244,
            "y": 0,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.087204709649086,
            "Man": 99.91279602050781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.472170352935791,
            "indian": 4.519933223724365,
            "black": 1.2480738162994385,
            "white": 45.847564697265625,
            "middle eastern": 20.792036056518555,
            "latino hispanic": 20.120227813720703
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.325864315032959,
            "disgust": 1.192697141050303e-07,
            "fear": 0.06139596551656723,
            "happy": 0.002017139457166195,
            "sad": 0.4922047555446625,
            "surprise": 0.0035545681603252888,
            "neutral": 96.11495208740234
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 1072,
            "y": 0,
            "w": 65,
            "h": 65,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 2.495668411254883,
            "Man": 97.50433349609375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.004056052770465612,
            "indian": 0.005533069837838411,
            "black": 0.0001280273136217147,
            "white": 95.87881469726562,
            "middle eastern": 2.572277545928955,
            "latino hispanic": 1.5391921997070312
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.24590298533439636,
            "disgust": 7.608790680846411e-11,
            "fear": 0.06605815887451172,
            "happy": 0.00024530605878680944,
            "sad": 3.743478775024414,
            "surprise": 4.185328634775942e-07,
            "neutral": 95.9443130493164
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 896,
            "y": 24,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.007625422440469265,
            "Man": 99.99237060546875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 42.41043472290039,
            "indian": 0.9676662087440491,
            "black": 0.34009820222854614,
            "white": 40.968963623046875,
            "middle eastern": 5.774761199951172,
            "latino hispanic": 9.538078308105469
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.2882027626037598,
            "disgust": 0.004801338072866201,
            "fear": 5.0977630615234375,
            "happy": 1.0055876970291138,
            "sad": 2.789933919906616,
            "surprise": 0.00681810500100255,
            "neutral": 88.80690002441406
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 214,
            "y": 71,
            "w": 69,
            "h": 69,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 89.03239440917969,
            "Man": 10.967608451843262
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 83.15758514404297,
            "indian": 0.5868634581565857,
            "black": 0.03948572278022766,
            "white": 9.466609001159668,
            "middle eastern": 0.4755502939224243,
            "latino hispanic": 6.2739081382751465
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 11.381275177001953,
            "disgust": 5.854377741343342e-05,
            "fear": 39.9322624206543,
            "happy": 0.0763770043849945,
            "sad": 35.857791900634766,
            "surprise": 0.45396721363067627,
            "neutral": 12.298269271850586
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 22,
        "region": {
            "x": 673,
            "y": 47,
            "w": 74,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.0011288011446595192,
            "Man": 99.99887084960938
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 17.582624435424805,
            "indian": 8.752960205078125,
            "black": 2.3559837341308594,
            "white": 29.24395179748535,
            "middle eastern": 17.128511428833008,
            "latino hispanic": 24.935970306396484
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.1032176986336708,
            "disgust": 9.842803905257824e-09,
            "fear": 0.0023266123607754707,
            "happy": 0.0004970670561306179,
            "sad": 0.5193986296653748,
            "surprise": 6.144561552900996e-07,
            "neutral": 99.37455749511719
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 1017,
            "y": 106,
            "w": 71,
            "h": 71,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.012912526726722717,
            "Man": 99.98709106445312
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0014568283222615719,
            "indian": 0.02429504320025444,
            "black": 0.0007483235094696283,
            "white": 92.1601333618164,
            "middle eastern": 5.469665050506592,
            "latino hispanic": 2.343705415725708
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 80.46023559570312,
            "disgust": 0.0025957736652344465,
            "fear": 0.6559543609619141,
            "happy": 0.3407309949398041,
            "sad": 3.747826099395752,
            "surprise": 0.07742416113615036,
            "neutral": 14.71523380279541
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 31,
        "region": {
            "x": 1199,
            "y": 125,
            "w": 68,
            "h": 68,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 10.43360710144043,
            "Man": 89.56639099121094
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.2538211345672607,
            "indian": 2.608128547668457,
            "black": 0.47816941142082214,
            "white": 49.173561096191406,
            "middle eastern": 17.171775817871094,
            "latino hispanic": 28.314542770385742
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 53.48978042602539,
            "disgust": 3.1416309411724797e-06,
            "fear": 13.791844367980957,
            "happy": 0.0061667016707360744,
            "sad": 31.911945343017578,
            "surprise": 0.0005949829937890172,
            "neutral": 0.7996588945388794
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 28,
        "region": {
            "x": 538,
            "y": 115,
            "w": 80,
            "h": 80,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.06646072119474411,
            "Man": 99.93353271484375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3419638733580541e-08,
            "indian": 6.703906318961117e-09,
            "black": 7.292075276943422e-11,
            "white": 99.9980239868164,
            "middle eastern": 0.0013753195526078343,
            "latino hispanic": 0.0006043841713108122
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 30.747209548950195,
            "disgust": 4.814843634903809e-09,
            "fear": 0.30728858709335327,
            "happy": 4.576459559757495e-06,
            "sad": 44.2158317565918,
            "surprise": 3.477287791042727e-09,
            "neutral": 24.729660034179688
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 25,
        "region": {
            "x": 779,
            "y": 60,
            "w": 81,
            "h": 81,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.009350226260721684,
            "Man": 99.99065399169922
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 66.46044158935547,
            "indian": 7.3221964836120605,
            "black": 1.6856348514556885,
            "white": 9.565954208374023,
            "middle eastern": 2.101145029067993,
            "latino hispanic": 12.864622116088867
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 4.525370121002197,
            "disgust": 3.4519389568998804e-09,
            "fear": 0.016093624755740166,
            "happy": 0.0002390761364949867,
            "sad": 8.277958869934082,
            "surprise": 1.8948168190036085e-06,
            "neutral": 87.18034362792969
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 38,
            "y": 150,
            "w": 75,
            "h": 75,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.6253452301025391,
            "Man": 99.37464904785156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 18.533512115478516,
            "indian": 0.86699378490448,
            "black": 0.24039745330810547,
            "white": 61.69706726074219,
            "middle eastern": 9.966851234436035,
            "latino hispanic": 8.695181846618652
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.00017531136109028012,
            "disgust": 4.1950797475602185e-22,
            "fear": 1.8426980830099637e-07,
            "happy": 4.413663555169478e-05,
            "sad": 0.265805721282959,
            "surprise": 8.785339702137898e-18,
            "neutral": 99.73397827148438
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 366,
            "y": 130,
            "w": 77,
            "h": 77,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 2.679607629776001,
            "Man": 97.32038879394531
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.429544404882524e-12,
            "indian": 1.927190611955565e-12,
            "black": 1.0821559526431749e-15,
            "white": 99.9999771118164,
            "middle eastern": 1.860305928857997e-05,
            "latino hispanic": 6.405898602679372e-06
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 82.41593170166016,
            "disgust": 1.8008448066098026e-08,
            "fear": 0.6939173936843872,
            "happy": 1.0217978954315186,
            "sad": 14.696730613708496,
            "surprise": 0.0003998753381893039,
            "neutral": 1.1712201833724976
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 21,
        "region": {
            "x": 662,
            "y": 248,
            "w": 90,
            "h": 90,
            "left_eye": [
                718,
                283
            ],
            "right_eye": [
                691,
                284
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.9315903186798096,
            "Man": 99.06841278076172
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 35.609283447265625,
            "indian": 14.196222305297852,
            "black": 8.375877380371094,
            "white": 8.825411796569824,
            "middle eastern": 7.920455455780029,
            "latino hispanic": 25.072750091552734
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.257291316986084,
            "disgust": 0.0006156896706670523,
            "fear": 1.2787643671035767,
            "happy": 0.0007856607553549111,
            "sad": 88.70215606689453,
            "surprise": 1.766260356816929e-05,
            "neutral": 6.760373592376709
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 568,
            "y": 268,
            "w": 78,
            "h": 78,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.91950225830078,
            "Man": 0.08049791306257248
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 78.32312774658203,
            "indian": 5.503976345062256,
            "black": 0.6261157989501953,
            "white": 3.1166181564331055,
            "middle eastern": 0.2455502301454544,
            "latino hispanic": 12.18461799621582
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.9100272059440613,
            "disgust": 0.011163830757141113,
            "fear": 93.58426666259766,
            "happy": 0.21244901418685913,
            "sad": 3.0345442295074463,
            "surprise": 0.11283691227436066,
            "neutral": 2.1347146034240723
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 35,
        "region": {
            "x": 247,
            "y": 284,
            "w": 73,
            "h": 73,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 9.585257530212402,
            "Man": 90.41474914550781
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 21.157615661621094,
            "indian": 10.3640775680542,
            "black": 5.092790603637695,
            "white": 24.24394416809082,
            "middle eastern": 13.948580741882324,
            "latino hispanic": 25.1929874420166
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.016278762370347977,
            "disgust": 4.191737018252595e-13,
            "fear": 0.003189700422808528,
            "happy": 0.020641770213842392,
            "sad": 0.10942001640796661,
            "surprise": 0.00425405940040946,
            "neutral": 99.84622192382812
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 22,
        "region": {
            "x": 839,
            "y": 297,
            "w": 88,
            "h": 88,
            "left_eye": [
                894,
                329
            ],
            "right_eye": [
                864,
                331
            ]
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 5.867986679077148,
            "Man": 94.13201141357422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.10531099885702133,
            "indian": 0.11080782860517502,
            "black": 0.004167368169873953,
            "white": 87.8556900024414,
            "middle eastern": 6.224761009216309,
            "latino hispanic": 5.699262619018555
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.4955078363418579,
            "disgust": 0.0030727488920092583,
            "fear": 0.13896708190441132,
            "happy": 2.173410654067993,
            "sad": 5.337811470031738,
            "surprise": 0.021621106192469597,
            "neutral": 91.8296127319336
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 375,
            "y": 291,
            "w": 83,
            "h": 83,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.6712712049484253,
            "Man": 99.32872772216797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.5028838333819294e-06,
            "indian": 8.332294854085376e-10,
            "black": 2.1723274221119304e-11,
            "white": 99.99974060058594,
            "middle eastern": 0.00014337952597998083,
            "latino hispanic": 0.00012333841004874557
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.005593280773609877,
            "disgust": 2.0694269568975678e-16,
            "fear": 4.001436900580302e-05,
            "happy": 0.0006515710265375674,
            "sad": 0.14339028298854828,
            "surprise": 1.0479995182777202e-07,
            "neutral": 99.8503189086914
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 37,
        "region": {
            "x": 11,
            "y": 298,
            "w": 72,
            "h": 72,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.0603216178715229,
            "Man": 99.93968200683594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.941396713256836,
            "indian": 43.99869918823242,
            "black": 8.082610130310059,
            "white": 5.607333660125732,
            "middle eastern": 4.343003273010254,
            "latino hispanic": 26.02695083618164
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 11.44114875793457,
            "disgust": 3.4644088812985085e-12,
            "fear": 0.029259687289595604,
            "happy": 9.345360012957826e-05,
            "sad": 15.958802223205566,
            "surprise": 1.0441011250028609e-10,
            "neutral": 72.5707015991211
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 34,
        "region": {
            "x": 29,
            "y": 488,
            "w": 93,
            "h": 93,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.1641436666250229,
            "Man": 99.83585357666016
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.004132031463086605,
            "indian": 1.961054113053251e-05,
            "black": 4.671940985190304e-07,
            "white": 99.90076446533203,
            "middle eastern": 0.05655689164996147,
            "latino hispanic": 0.038524776697158813
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.946810722351074,
            "disgust": 1.729495886781951e-11,
            "fear": 0.0028426821809262037,
            "happy": 0.016822662204504013,
            "sad": 20.589519500732422,
            "surprise": 2.457589118876058e-07,
            "neutral": 73.44400787353516
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 201,
            "y": 493,
            "w": 93,
            "h": 93,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 63.123069763183594,
            "Man": 36.876930236816406
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.3627510578317903e-11,
            "indian": 5.060895712921676e-12,
            "black": 3.924634410995076e-15,
            "white": 99.99990844726562,
            "middle eastern": 8.214642002712935e-05,
            "latino hispanic": 1.6722849977668375e-05
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.0689327716827393,
            "disgust": 4.201152847826961e-08,
            "fear": 0.21755613386631012,
            "happy": 0.0009649434359744191,
            "sad": 38.70965576171875,
            "surprise": 8.047633741625759e-07,
            "neutral": 59.00288772583008
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 705,
            "y": 487,
            "w": 93,
            "h": 93,
            "left_eye": [
                765,
                521
            ],
            "right_eye": [
                733,
                525
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 89.66248321533203,
            "Man": 10.337508201599121
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 99.92375946044922,
            "indian": 0.022446852177381516,
            "black": 7.996701242518611e-06,
            "white": 0.007231611292809248,
            "middle eastern": 2.815830612235004e-06,
            "latino hispanic": 0.04655560106039047
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0012059503933414817,
            "disgust": 9.770423758936886e-08,
            "fear": 0.00580021645873785,
            "happy": 1.385650634765625,
            "sad": 0.0994015783071518,
            "surprise": 0.001261014025658369,
            "neutral": 98.50668334960938
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 1143,
            "y": 471,
            "w": 94,
            "h": 94,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.03427203744649887,
            "Man": 99.96572875976562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 25.300413131713867,
            "indian": 45.83155822753906,
            "black": 5.273683547973633,
            "white": 4.082552433013916,
            "middle eastern": 2.7339255809783936,
            "latino hispanic": 16.77786636352539
        },
        "dominant_race": "indian",
        "emotion": {
            "angry": 48.9530143737793,
            "disgust": 1.4074083992454689e-05,
            "fear": 0.29757508635520935,
            "happy": 0.0002224672061856836,
            "sad": 34.552154541015625,
            "surprise": 1.201367467729142e-06,
            "neutral": 16.19701385498047
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 27,
        "region": {
            "x": 527,
            "y": 503,
            "w": 83,
            "h": 83,
            "left_eye": [
                584,
                534
            ],
            "right_eye": [
                552,
                531
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 98.9087905883789,
            "Man": 1.0912117958068848
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.33647167682647705,
            "indian": 0.05462450906634331,
            "black": 0.00559044536203146,
            "white": 91.05900573730469,
            "middle eastern": 3.388253927230835,
            "latino hispanic": 5.156052589416504
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.9174741506576538,
            "disgust": 9.591526031726971e-05,
            "fear": 0.9208418726921082,
            "happy": 2.2512850761413574,
            "sad": 5.561324119567871,
            "surprise": 0.04036162421107292,
            "neutral": 89.30862426757812
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 921,
            "y": 501,
            "w": 95,
            "h": 95,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.350834459066391,
            "Man": 99.64916229248047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 73.08112335205078,
            "indian": 0.3117162883281708,
            "black": 0.055264174938201904,
            "white": 23.298330307006836,
            "middle eastern": 1.6858551502227783,
            "latino hispanic": 1.5677094459533691
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.03764355927705765,
            "disgust": 1.7639591230831503e-13,
            "fear": 0.0001093475948437117,
            "happy": 2.4444376322207972e-05,
            "sad": 0.07215758413076401,
            "surprise": 1.0075675405119e-08,
            "neutral": 99.89006805419922
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 23,
        "region": {
            "x": 199,
            "y": 679,
            "w": 97,
            "h": 97,
            "left_eye": [
                263,
                715
            ],
            "right_eye": [
                231,
                719
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.061999935656785965,
            "Man": 99.93799591064453
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 91.61697387695312,
            "indian": 2.069211721420288,
            "black": 0.036930568516254425,
            "white": 0.6113556027412415,
            "middle eastern": 0.026134660467505455,
            "latino hispanic": 5.639399528503418
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 9.957493782043457,
            "disgust": 0.853459358215332,
            "fear": 1.7503350973129272,
            "happy": 0.07404732704162598,
            "sad": 72.15177154541016,
            "surprise": 0.002003626199439168,
            "neutral": 15.210892677307129
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 31,
        "region": {
            "x": 679,
            "y": 683,
            "w": 94,
            "h": 94,
            "left_eye": [
                738,
                716
            ],
            "right_eye": [
                707,
                723
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99307250976562,
            "Man": 0.0069278692826628685
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.846450955639739e-08,
            "indian": 1.3960011813196616e-07,
            "black": 1.3802614606817087e-10,
            "white": 99.97789001464844,
            "middle eastern": 0.014019390568137169,
            "latino hispanic": 0.008096934296190739
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 65.63603210449219,
            "disgust": 4.823730945587158,
            "fear": 1.4361217021942139,
            "happy": 0.2483195662498474,
            "sad": 13.0600004196167,
            "surprise": 0.06904728710651398,
            "neutral": 14.7267427444458
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 23,
        "region": {
            "x": 944,
            "y": 683,
            "w": 98,
            "h": 98,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.03559046611189842,
            "Man": 99.96440124511719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 11.075746536254883,
            "indian": 8.453704833984375,
            "black": 1.7758184671401978,
            "white": 22.511777877807617,
            "middle eastern": 11.380922317504883,
            "latino hispanic": 44.802032470703125
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 48.08832550048828,
            "disgust": 5.052561480312079e-09,
            "fear": 0.013455099426209927,
            "happy": 7.935874600661919e-05,
            "sad": 18.459854125976562,
            "surprise": 2.0335926276260352e-09,
            "neutral": 33.43828201293945
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 27,
        "region": {
            "x": 451,
            "y": 715,
            "w": 98,
            "h": 98,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 86.25437927246094,
            "Man": 13.745612144470215
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.848343375371769e-05,
            "indian": 1.4695805816700158e-07,
            "black": 7.511537170046267e-09,
            "white": 99.99699401855469,
            "middle eastern": 0.0015532379038631916,
            "latino hispanic": 0.0013775118859484792
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.8342888355255127,
            "disgust": 9.293789737796487e-09,
            "fear": 0.00018727158021647483,
            "happy": 0.03442596271634102,
            "sad": 4.387556552886963,
            "surprise": 3.31729040681239e-07,
            "neutral": 91.74353790283203
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 660,
            "y": 801,
            "w": 61,
            "h": 61,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 6.791876316070557,
            "Man": 93.20812225341797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.4916090965271,
            "indian": 0.3396870195865631,
            "black": 0.023214466869831085,
            "white": 82.74185943603516,
            "middle eastern": 7.009537220001221,
            "latino hispanic": 5.394094944000244
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.12824346125125885,
            "disgust": 4.296359817392015e-13,
            "fear": 60.58234405517578,
            "happy": 7.39353023249123e-09,
            "sad": 39.060176849365234,
            "surprise": 1.325441729704835e-07,
            "neutral": 0.2292330414056778
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 31,
        "region": {
            "x": 89,
            "y": 881,
            "w": 97,
            "h": 97,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 11.965276718139648,
            "Man": 88.03472900390625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 33.9771728515625,
            "indian": 0.8200049996376038,
            "black": 0.18670295178890228,
            "white": 56.122318267822266,
            "middle eastern": 4.221352577209473,
            "latino hispanic": 4.672457218170166
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.3953505754470825,
            "disgust": 1.2447850750163525e-08,
            "fear": 0.2063242644071579,
            "happy": 0.001986890798434615,
            "sad": 2.4487226009368896,
            "surprise": 0.0005784404347650707,
            "neutral": 96.94703674316406
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 1222,
            "y": 909,
            "w": 57,
            "h": 74,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 96.07232666015625,
            "Man": 3.927671432495117
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.3805814981460571,
            "indian": 1.3003296852111816,
            "black": 0.10985389351844788,
            "white": 66.05084228515625,
            "middle eastern": 19.288883209228516,
            "latino hispanic": 11.869515419006348
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.16039405763149261,
            "disgust": 2.0469526518240855e-08,
            "fear": 1.1102303266525269,
            "happy": 5.978721219435101e-06,
            "sad": 97.43852233886719,
            "surprise": 1.0741888445409131e-07,
            "neutral": 1.29085373878479
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 32,
        "region": {
            "x": 617,
            "y": 1008,
            "w": 111,
            "h": 111,
            "left_eye": [
                693,
                1049
            ],
            "right_eye": [
                648,
                1050
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99925994873047,
            "Man": 0.0007347618229687214
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 5.587714672088623,
            "indian": 8.737249374389648,
            "black": 68.1389389038086,
            "white": 1.7861580848693848,
            "middle eastern": 1.0831613540649414,
            "latino hispanic": 14.666779518127441
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 1.8830313682556152,
            "disgust": 9.456674160901457e-05,
            "fear": 0.44905003905296326,
            "happy": 0.15962538123130798,
            "sad": 4.646609783172607,
            "surprise": 0.010212122462689877,
            "neutral": 92.85137939453125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 984,
            "y": 1050,
            "w": 34,
            "h": 34,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.99,
        "gender": {
            "Woman": 22.6812686920166,
            "Man": 77.31873321533203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.3436596393585205,
            "indian": 3.413820266723633,
            "black": 4.63280725479126,
            "white": 56.458526611328125,
            "middle eastern": 19.153669357299805,
            "latino hispanic": 13.997513771057129
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 9.543923806631938e-05,
            "disgust": 4.39911778879476e-12,
            "fear": 68.22479248046875,
            "happy": 0.0635073184967041,
            "sad": 19.290586471557617,
            "surprise": 0.001080121612176299,
            "neutral": 12.419930458068848
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 27,
        "region": {
            "x": 338,
            "y": 1071,
            "w": 115,
            "h": 115,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.017152149230241776,
            "Man": 99.98284912109375
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.001861640834249556,
            "indian": 0.0040144468657672405,
            "black": 0.00014368019765242934,
            "white": 97.04558563232422,
            "middle eastern": 1.9620552062988281,
            "latino hispanic": 0.986338198184967
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.012853972613811493,
            "disgust": 2.9477097232685773e-23,
            "fear": 2.1606540556717846e-08,
            "happy": 6.419632700271904e-05,
            "sad": 0.00025858759181573987,
            "surprise": 7.904993933743887e-14,
            "neutral": 99.98682403564453
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 27,
        "region": {
            "x": 944,
            "y": 1114,
            "w": 92,
            "h": 92,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 19.965667724609375,
            "Man": 80.03433227539062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.250614166259766,
            "indian": 5.900086879730225,
            "black": 2.3228836059570312,
            "white": 39.783294677734375,
            "middle eastern": 19.25038719177246,
            "latino hispanic": 17.492733001708984
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.018097005784511566,
            "disgust": 1.884257905260256e-08,
            "fear": 13.789026260375977,
            "happy": 6.838422268629074e-05,
            "sad": 84.87406921386719,
            "surprise": 4.944676561535744e-07,
            "neutral": 1.3187403678894043
        },
        "dominant_emotion": "sad"
    }
]
let skincare_specialist_data4 = [
    {
        "age": 34,
        "region": {
            "x": 229,
            "y": 458,
            "w": 142,
            "h": 142,
            "left_eye": [
                328,
                512
            ],
            "right_eye": [
                277,
                512
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 100.0,
            "Man": 2.801770904170553e-07
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.165631056210259e-05,
            "indian": 1.631846680538729e-05,
            "black": 2.2583947156817885e-08,
            "white": 99.7287826538086,
            "middle eastern": 0.14407990872859955,
            "latino hispanic": 0.1271038055419922
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.8917479515075684,
            "disgust": 6.265621050260961e-05,
            "fear": 1.2128740549087524,
            "happy": 0.12430593371391296,
            "sad": 8.47216510772705,
            "surprise": 0.019516263157129288,
            "neutral": 88.27933502197266
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 29,
        "region": {
            "x": 865,
            "y": 448,
            "w": 160,
            "h": 160,
            "left_eye": [
                968,
                508
            ],
            "right_eye": [
                913,
                511
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99842834472656,
            "Man": 0.001578521216288209
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.4213353097438812,
            "indian": 0.7881911993026733,
            "black": 0.09075512737035751,
            "white": 55.39824676513672,
            "middle eastern": 13.52563190460205,
            "latino hispanic": 29.775833129882812
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.3297696113586426,
            "disgust": 0.003795437514781952,
            "fear": 47.32760238647461,
            "happy": 7.634429454803467,
            "sad": 6.726866722106934,
            "surprise": 0.8547923564910889,
            "neutral": 34.122745513916016
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 30,
        "region": {
            "x": 40,
            "y": 441,
            "w": 204,
            "h": 204,
            "left_eye": [
                177,
                520
            ],
            "right_eye": [
                104,
                520
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 100.0,
            "Man": 7.85260681368527e-07
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.10798165947198868,
            "indian": 0.2729271948337555,
            "black": 0.0068974667228758335,
            "white": 76.14962768554688,
            "middle eastern": 14.34182071685791,
            "latino hispanic": 9.120742797851562
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.04320373013615608,
            "disgust": 1.384557748451698e-07,
            "fear": 0.01318386010825634,
            "happy": 45.816856384277344,
            "sad": 0.06613925844430923,
            "surprise": 0.0010934739839285612,
            "neutral": 54.05952453613281
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 1008,
            "y": 440,
            "w": 209,
            "h": 209,
            "left_eye": [
                1148,
                520
            ],
            "right_eye": [
                1073,
                518
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.9999771118164,
            "Man": 2.4885406674002297e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.9577866792678833,
            "indian": 0.8024919033050537,
            "black": 0.08614790439605713,
            "white": 59.554237365722656,
            "middle eastern": 18.512414932250977,
            "latino hispanic": 20.086925506591797
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.456554114818573,
            "disgust": 1.6086059986264445e-05,
            "fear": 0.004722435958683491,
            "happy": 61.79203796386719,
            "sad": 0.9618649482727051,
            "surprise": 0.0013235642109066248,
            "neutral": 36.783485412597656
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 702,
            "y": 461,
            "w": 72,
            "h": 72,
            "left_eye": [
                747,
                487
            ],
            "right_eye": [
                722,
                491
            ]
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 4.792241096496582,
            "Man": 95.20775604248047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.3036763072013855,
            "indian": 3.476837158203125,
            "black": 0.1382157951593399,
            "white": 37.99406051635742,
            "middle eastern": 43.995765686035156,
            "latino hispanic": 14.091446876525879
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.712857186794281,
            "disgust": 2.1729088985011913e-05,
            "fear": 30.52043914794922,
            "happy": 0.3784133195877075,
            "sad": 38.85261535644531,
            "surprise": 0.012601747177541256,
            "neutral": 29.523056030273438
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 39,
        "region": {
            "x": 345,
            "y": 465,
            "w": 110,
            "h": 110,
            "left_eye": [
                420,
                507
            ],
            "right_eye": [
                375,
                508
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.9999771118164,
            "Man": 2.27163836825639e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.17515456676483154,
            "indian": 0.08532661199569702,
            "black": 0.00561470678076148,
            "white": 90.0687026977539,
            "middle eastern": 4.603012561798096,
            "latino hispanic": 5.062201499938965
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 7.655735015869141,
            "disgust": 0.016259416937828064,
            "fear": 57.18980026245117,
            "happy": 0.417371928691864,
            "sad": 8.41123104095459,
            "surprise": 0.021117307245731354,
            "neutral": 26.288488388061523
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 23,
        "region": {
            "x": 664,
            "y": 480,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 15.118363380432129,
            "Man": 84.88163757324219
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.15413779020309448,
            "indian": 0.5741857290267944,
            "black": 0.030403459444642067,
            "white": 71.8782958984375,
            "middle eastern": 15.115809440612793,
            "latino hispanic": 12.247172355651855
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.6955186724662781,
            "disgust": 5.143982093613886e-07,
            "fear": 4.836117744445801,
            "happy": 0.020139984786510468,
            "sad": 9.150078773498535,
            "surprise": 0.0005560451536439359,
            "neutral": 85.29759216308594
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 24,
        "region": {
            "x": 485,
            "y": 479,
            "w": 66,
            "h": 66,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.5440773963928223,
            "Man": 98.45592498779297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3895751237869263,
            "indian": 4.545371055603027,
            "black": 0.376662939786911,
            "white": 39.79515075683594,
            "middle eastern": 31.92963218688965,
            "latino hispanic": 21.963605880737305
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 17.196720123291016,
            "disgust": 40.00571823120117,
            "fear": 40.005950927734375,
            "happy": 0.006324981339275837,
            "sad": 2.6739485263824463,
            "surprise": 0.1031789481639862,
            "neutral": 0.008171570487320423
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 23,
        "region": {
            "x": 553,
            "y": 483,
            "w": 64,
            "h": 64,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 4.750256061553955,
            "Man": 95.24974822998047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 8.554383277893066,
            "indian": 3.87266206741333,
            "black": 1.0277268886566162,
            "white": 43.16324996948242,
            "middle eastern": 19.239126205444336,
            "latino hispanic": 24.142852783203125
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 17.89455795288086,
            "disgust": 1.1856940984725952,
            "fear": 45.054325103759766,
            "happy": 0.0596168227493763,
            "sad": 34.71623229980469,
            "surprise": 0.18595793843269348,
            "neutral": 0.903614342212677
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 23,
        "region": {
            "x": 613,
            "y": 493,
            "w": 60,
            "h": 60,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 5.431453704833984,
            "Man": 94.56854248046875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.9087709188461304,
            "indian": 0.4451718330383301,
            "black": 0.031102774664759636,
            "white": 78.41875457763672,
            "middle eastern": 10.30531120300293,
            "latino hispanic": 8.890889167785645
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.1441303789615631,
            "disgust": 1.648403485887684e-05,
            "fear": 39.9039421081543,
            "happy": 0.005895514041185379,
            "sad": 5.5586771965026855,
            "surprise": 0.055417705327272415,
            "neutral": 54.33192443847656
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 28,
        "region": {
            "x": 421,
            "y": 484,
            "w": 93,
            "h": 93,
            "left_eye": [
                482,
                519
            ],
            "right_eye": [
                451,
                519
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 1.034531831741333,
            "Man": 98.96546936035156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.024243256077170372,
            "indian": 0.04440326988697052,
            "black": 0.0017745381919667125,
            "white": 86.3153076171875,
            "middle eastern": 8.98934268951416,
            "latino hispanic": 4.624933242797852
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.455062389373779,
            "disgust": 0.000267760013230145,
            "fear": 10.898371696472168,
            "happy": 0.09664476662874222,
            "sad": 27.591886520385742,
            "surprise": 0.052566248923540115,
            "neutral": 54.90520477294922
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 32,
        "region": {
            "x": 793,
            "y": 477,
            "w": 121,
            "h": 121,
            "left_eye": [
                873,
                524
            ],
            "right_eye": [
                830,
                527
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99993896484375,
            "Man": 5.376460831030272e-05
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.1795634776353836,
            "indian": 0.6866809129714966,
            "black": 0.0153636010363698,
            "white": 74.26809692382812,
            "middle eastern": 14.686286926269531,
            "latino hispanic": 10.164012908935547
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0002834975311998278,
            "disgust": 3.642299309380981e-11,
            "fear": 0.06260989606380463,
            "happy": 0.009493288584053516,
            "sad": 0.04683671146631241,
            "surprise": 0.0002818525244947523,
            "neutral": 99.8804931640625
        },
        "dominant_emotion": "neutral"
    }
]


console.log("Meta Results for Skincare Specialist:");
const data = skincare_specialist_data.concat(skincare_specialist_data2, skincare_specialist_data3, skincare_specialist_data4);
console.log(processData(data));