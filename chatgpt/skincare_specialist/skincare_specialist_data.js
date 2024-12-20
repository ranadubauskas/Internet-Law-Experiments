const { processData } = require('../../data_processing.js');

let skincare_specialist_data = [
    {
        "age": 29,
        "region": {
            "x": 1167,
            "y": 119,
            "w": 35,
            "h": 35,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.2529124021530151,
            "Man": 98.7470932006836
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 37.309696197509766,
            "indian": 4.817563056945801,
            "black": 1.277925968170166,
            "white": 33.02313232421875,
            "middle eastern": 8.393815040588379,
            "latino hispanic": 15.177871704101562
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 8.087912559509277,
            "disgust": 2.9775245380392334e-08,
            "fear": 0.004496419802308083,
            "happy": 0.581474244594574,
            "sad": 1.2191675901412964,
            "surprise": 0.0005336874164640903,
            "neutral": 90.10641479492188
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 30,
        "region": {
            "x": 814,
            "y": 163,
            "w": 32,
            "h": 32,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.22036395967006683,
            "Man": 99.7796401977539
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 26.761316299438477,
            "indian": 26.56507110595703,
            "black": 5.304021835327148,
            "white": 9.525935173034668,
            "middle eastern": 9.85407543182373,
            "latino hispanic": 21.989585876464844
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 25.036563873291016,
            "disgust": 0.0014114681398496032,
            "fear": 2.3838534355163574,
            "happy": 0.21343722939491272,
            "sad": 48.94620895385742,
            "surprise": 0.01892830990254879,
            "neutral": 23.39959144592285
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 905,
            "y": 174,
            "w": 35,
            "h": 35,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.8729199171066284,
            "Man": 99.1270751953125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 25.089859008789062,
            "indian": 11.317610740661621,
            "black": 6.593752384185791,
            "white": 18.079574584960938,
            "middle eastern": 15.19664478302002,
            "latino hispanic": 23.722558975219727
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.144958019256592,
            "disgust": 0.15310245752334595,
            "fear": 34.708988189697266,
            "happy": 4.511794090270996,
            "sad": 43.27832794189453,
            "surprise": 0.03778316080570221,
            "neutral": 15.165045738220215
        },
        "dominant_emotion": "sad"
    },
    {
        "age": 27,
        "region": {
            "x": 716,
            "y": 203,
            "w": 31,
            "h": 31,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.9117125272750854,
            "Man": 99.0882797241211
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.321847915649414,
            "indian": 13.619460105895996,
            "black": 9.155255317687988,
            "white": 18.42515754699707,
            "middle eastern": 17.854368209838867,
            "latino hispanic": 27.62390899658203
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 16.318618774414062,
            "disgust": 0.23009081184864044,
            "fear": 3.1226389408111572,
            "happy": 20.105405807495117,
            "sad": 7.61865758895874,
            "surprise": 0.6615874171257019,
            "neutral": 51.9430046081543
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 21,
        "region": {
            "x": 1049,
            "y": 221,
            "w": 34,
            "h": 34,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.3882790803909302,
            "Man": 99.61172485351562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 26.548852920532227,
            "indian": 16.27840805053711,
            "black": 5.4521164894104,
            "white": 16.091466903686523,
            "middle eastern": 15.35370922088623,
            "latino hispanic": 20.275447845458984
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.5227145552635193,
            "disgust": 2.3003713067737408e-07,
            "fear": 0.012921432964503765,
            "happy": 0.08974925428628922,
            "sad": 3.071704149246216,
            "surprise": 0.0009046385530382395,
            "neutral": 96.30200958251953
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 25,
        "region": {
            "x": 626,
            "y": 242,
            "w": 34,
            "h": 34,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 29.966249465942383,
            "Man": 70.03375244140625
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.0844221115112305,
            "indian": 13.750876426696777,
            "black": 2.7066826820373535,
            "white": 19.396358489990234,
            "middle eastern": 41.13862228393555,
            "latino hispanic": 19.923038482666016
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.333369493484497,
            "disgust": 32.049522399902344,
            "fear": 0.16347834467887878,
            "happy": 47.512638092041016,
            "sad": 1.479854702949524,
            "surprise": 0.04495292529463768,
            "neutral": 17.41618537902832
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 1394,
            "y": 246,
            "w": 37,
            "h": 37,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.2047773152589798,
            "Man": 99.79521942138672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 48.25202941894531,
            "indian": 6.954669952392578,
            "black": 2.6881980895996094,
            "white": 13.690000534057617,
            "middle eastern": 4.178236484527588,
            "latino hispanic": 24.23686408996582
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.8187154531478882,
            "disgust": 0.002778510795906186,
            "fear": 0.5905844569206238,
            "happy": 89.93425750732422,
            "sad": 0.0074497126042842865,
            "surprise": 0.2025824338197708,
            "neutral": 8.443631172180176
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 40,
        "region": {
            "x": 440,
            "y": 232,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 2.6802620887756348,
            "Man": 97.31973266601562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 98.01605987548828,
            "indian": 0.17390850186347961,
            "black": 0.0022911084815859795,
            "white": 0.5494102835655212,
            "middle eastern": 0.00683149229735136,
            "latino hispanic": 1.251505970954895
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.024255670607089996,
            "disgust": 1.7237201745956554e-06,
            "fear": 0.0017270812531933188,
            "happy": 99.97081756591797,
            "sad": 0.0026758078020066023,
            "surprise": 1.6764363230947765e-09,
            "neutral": 0.0005253428826108575
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 1324,
            "y": 260,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.7956347465515137,
            "Man": 99.2043685913086
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.3051308393478394,
            "indian": 2.4316115379333496,
            "black": 0.1424577385187149,
            "white": 44.38298797607422,
            "middle eastern": 20.826478958129883,
            "latino hispanic": 30.911333084106445
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0690547227859497,
            "disgust": 4.6402103492937385e-08,
            "fear": 0.0006111168768256903,
            "happy": 90.92552185058594,
            "sad": 0.45486021041870117,
            "surprise": 6.222418051038403e-06,
            "neutral": 7.549948692321777
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 966,
            "y": 267,
            "w": 35,
            "h": 35,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 8.76978874206543,
            "Man": 91.23021697998047
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 41.167724609375,
            "indian": 10.816082954406738,
            "black": 3.2145378589630127,
            "white": 16.524803161621094,
            "middle eastern": 11.26869010925293,
            "latino hispanic": 17.00816535949707
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.302456259727478,
            "disgust": 0.03599113970994949,
            "fear": 32.529605865478516,
            "happy": 61.30732727050781,
            "sad": 0.05510544404387474,
            "surprise": 5.607705593109131,
            "neutral": 0.16180303692817688
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 1523,
            "y": 267,
            "w": 37,
            "h": 37,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 23.030107498168945,
            "Man": 76.96989440917969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.213766574859619,
            "indian": 8.66861343383789,
            "black": 1.6316845417022705,
            "white": 31.511247634887695,
            "middle eastern": 29.492929458618164,
            "latino hispanic": 24.48175811767578
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.1020747572183609,
            "disgust": 3.431658797126147e-06,
            "fear": 0.013205694034695625,
            "happy": 99.52546691894531,
            "sad": 0.04925812408328056,
            "surprise": 0.0042573390528559685,
            "neutral": 0.30573996901512146
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 799,
            "y": 278,
            "w": 34,
            "h": 34,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 96.17593383789062,
            "Man": 3.8240692615509033
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.5969612002372742,
            "indian": 0.6581767797470093,
            "black": 0.03302055224776268,
            "white": 75.30143737792969,
            "middle eastern": 16.752490997314453,
            "latino hispanic": 6.657924175262451
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.515255868434906,
            "disgust": 0.0029678139835596085,
            "fear": 0.4792103171348572,
            "happy": 77.50350952148438,
            "sad": 21.407424926757812,
            "surprise": 0.02287345565855503,
            "neutral": 0.06875678896903992
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 909,
            "y": 278,
            "w": 42,
            "h": 42,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 62.363826751708984,
            "Man": 37.63617706298828
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 37.606204986572266,
            "indian": 6.341385841369629,
            "black": 2.5139787197113037,
            "white": 20.238597869873047,
            "middle eastern": 10.56704330444336,
            "latino hispanic": 22.732786178588867
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.2966100573539734,
            "disgust": 1.1253547427259036e-06,
            "fear": 84.90544128417969,
            "happy": 14.667082786560059,
            "sad": 0.0008821028750389814,
            "surprise": 0.12494098395109177,
            "neutral": 0.005041103344410658
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 23,
        "region": {
            "x": 686,
            "y": 286,
            "w": 35,
            "h": 35,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.135331392288208,
            "Man": 99.86466979980469
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 26.227563858032227,
            "indian": 9.602149963378906,
            "black": 2.428149700164795,
            "white": 24.119449615478516,
            "middle eastern": 20.222917556762695,
            "latino hispanic": 17.3997745513916
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.032026324421167374,
            "disgust": 0.001257164403796196,
            "fear": 0.20176735520362854,
            "happy": 99.03295135498047,
            "sad": 0.12344740331172943,
            "surprise": 0.15732626616954803,
            "neutral": 0.45122918486595154
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 1028,
            "y": 304,
            "w": 39,
            "h": 39,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 1.0433441400527954,
            "Man": 98.95665740966797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 5.4812235832214355,
            "indian": 11.4087495803833,
            "black": 3.1111090183258057,
            "white": 24.584712982177734,
            "middle eastern": 33.019073486328125,
            "latino hispanic": 22.395130157470703
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.19341829419136047,
            "disgust": 0.0671701431274414,
            "fear": 94.0384521484375,
            "happy": 5.443121910095215,
            "sad": 0.20337212085723877,
            "surprise": 0.049914468079805374,
            "neutral": 0.004554966930299997
        },
        "dominant_emotion": "fear"
    },
    {
        "age": 26,
        "region": {
            "x": 1444,
            "y": 304,
            "w": 38,
            "h": 38,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.96,
        "gender": {
            "Woman": 0.7986936569213867,
            "Man": 99.20130157470703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.48712021112442017,
            "indian": 2.8351948261260986,
            "black": 0.17846661806106567,
            "white": 50.85437774658203,
            "middle eastern": 31.65627670288086,
            "latino hispanic": 13.988566398620605
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.108013153076172,
            "disgust": 0.08909844607114792,
            "fear": 5.351556301116943,
            "happy": 71.61033630371094,
            "sad": 13.37152099609375,
            "surprise": 0.08638715744018555,
            "neutral": 7.383094787597656
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 457,
            "y": 305,
            "w": 41,
            "h": 41,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 3.0787811279296875,
            "Man": 96.92121887207031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.1638684272766113,
            "indian": 2.312279224395752,
            "black": 0.10717862099409103,
            "white": 56.479652404785156,
            "middle eastern": 28.004199981689453,
            "latino hispanic": 11.932828903198242
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 10.323107719421387,
            "disgust": 0.15280063450336456,
            "fear": 7.334560871124268,
            "happy": 68.65431213378906,
            "sad": 4.311901092529297,
            "surprise": 0.1058000847697258,
            "neutral": 9.117520332336426
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 1116,
            "y": 291,
            "w": 36,
            "h": 36,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 2.18100643157959,
            "Man": 97.8189926147461
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 33.531185150146484,
            "indian": 6.016383171081543,
            "black": 2.5521187782287598,
            "white": 27.11876678466797,
            "middle eastern": 13.642923355102539,
            "latino hispanic": 17.13862419128418
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 54.49585723876953,
            "disgust": 5.927434904151596e-05,
            "fear": 0.32183247804641724,
            "happy": 16.751218795776367,
            "sad": 0.506548285484314,
            "surprise": 0.0921710804104805,
            "neutral": 27.832311630249023
        },
        "dominant_emotion": "angry"
    },
    {
        "age": 34,
        "region": {
            "x": 1213,
            "y": 293,
            "w": 41,
            "h": 41,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 40.46940231323242,
            "Man": 59.53059768676758
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.2831368446350098,
            "indian": 0.7592495083808899,
            "black": 0.12587082386016846,
            "white": 76.46321868896484,
            "middle eastern": 9.611234664916992,
            "latino hispanic": 10.757291793823242
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.5586975621317833e-07,
            "disgust": 1.2073048456068711e-17,
            "fear": 5.861854057709337e-11,
            "happy": 99.9721450805664,
            "sad": 1.0812769346557616e-08,
            "surprise": 1.9181134121026844e-06,
            "neutral": 0.027850745245814323
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 368,
            "y": 340,
            "w": 46,
            "h": 46,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 24.896133422851562,
            "Man": 75.10386657714844
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.8597890138626099,
            "indian": 2.5746092796325684,
            "black": 0.1958579123020172,
            "white": 49.81547164916992,
            "middle eastern": 30.583683013916016,
            "latino hispanic": 15.970589637756348
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 8.161165897035971e-05,
            "disgust": 5.474357425705456e-11,
            "fear": 1.8765243225971062e-07,
            "happy": 99.77906036376953,
            "sad": 0.0001830234396038577,
            "surprise": 7.902152901806403e-06,
            "neutral": 0.22066561877727509
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 753,
            "y": 346,
            "w": 41,
            "h": 41,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 1.305055022239685,
            "Man": 98.69493865966797
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 15.12681770324707,
            "indian": 17.717649459838867,
            "black": 4.402615070343018,
            "white": 12.842693328857422,
            "middle eastern": 26.93376350402832,
            "latino hispanic": 22.976465225219727
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 5.272741317749023,
            "disgust": 0.03921684995293617,
            "fear": 1.954240322113037,
            "happy": 67.60163116455078,
            "sad": 1.9961155652999878,
            "surprise": 0.10619138926267624,
            "neutral": 23.029857635498047
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 1272,
            "y": 347,
            "w": 43,
            "h": 43,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 12.54366683959961,
            "Man": 87.45633697509766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 3.77992844581604,
            "indian": 3.863478183746338,
            "black": 0.3039863109588623,
            "white": 49.45311737060547,
            "middle eastern": 26.3236083984375,
            "latino hispanic": 16.275880813598633
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.011270914226770401,
            "disgust": 7.820191967766732e-06,
            "fear": 0.5969462394714355,
            "happy": 99.35701751708984,
            "sad": 0.0016053065191954374,
            "surprise": 0.013215353712439537,
            "neutral": 0.01994275487959385
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 639,
            "y": 355,
            "w": 42,
            "h": 42,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 56.512664794921875,
            "Man": 43.48733901977539
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 36.87533950805664,
            "indian": 8.533376693725586,
            "black": 3.1188771724700928,
            "white": 18.811172485351562,
            "middle eastern": 15.780113220214844,
            "latino hispanic": 16.881118774414062
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.491604564307636e-07,
            "disgust": 3.128572748090086e-11,
            "fear": 4.461130083655007e-05,
            "happy": 99.99317932128906,
            "sad": 2.2717243552961008e-07,
            "surprise": 7.394362182822078e-05,
            "neutral": 0.006699127610772848
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 990,
            "y": 357,
            "w": 44,
            "h": 44,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 92.52175903320312,
            "Man": 7.478241443634033
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.550629734992981,
            "indian": 4.2912116050720215,
            "black": 0.15198762714862823,
            "white": 41.22111129760742,
            "middle eastern": 37.59250259399414,
            "latino hispanic": 16.192556381225586
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.0496795177459717,
            "disgust": 0.0028401794843375683,
            "fear": 5.006665229797363,
            "happy": 90.9049072265625,
            "sad": 1.6553623676300049,
            "surprise": 0.06842274218797684,
            "neutral": 0.3121281862258911
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 494,
            "y": 369,
            "w": 41,
            "h": 41,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 97.57482147216797,
            "Man": 2.425182819366455
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.3315718472003937,
            "indian": 0.7901322245597839,
            "black": 0.039867907762527466,
            "white": 67.5110855102539,
            "middle eastern": 22.12684440612793,
            "latino hispanic": 9.200498580932617
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.005155348218977451,
            "disgust": 3.61946877092123e-05,
            "fear": 8.384300231933594,
            "happy": 37.00291442871094,
            "sad": 0.183962881565094,
            "surprise": 1.5481436252593994,
            "neutral": 52.87548828125
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 39,
        "region": {
            "x": 1096,
            "y": 371,
            "w": 42,
            "h": 42,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 40.988224029541016,
            "Man": 59.011775970458984
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.05341409519314766,
            "indian": 5.313263416290283,
            "black": 0.022029196843504906,
            "white": 4.471524715423584,
            "middle eastern": 86.50138854980469,
            "latino hispanic": 3.6383883953094482
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.06615231186151505,
            "disgust": 0.01328501757234335,
            "fear": 0.04999056085944176,
            "happy": 92.79216003417969,
            "sad": 1.0401802062988281,
            "surprise": 0.05540626868605614,
            "neutral": 5.982825756072998
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 878,
            "y": 377,
            "w": 41,
            "h": 41,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 2.0141103267669678,
            "Man": 97.98588562011719
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.3254566788673401,
            "indian": 0.40954262018203735,
            "black": 0.019358960911631584,
            "white": 83.10614013671875,
            "middle eastern": 10.94841194152832,
            "latino hispanic": 5.19109582901001
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.031603071838617325,
            "disgust": 0.0005335478344932199,
            "fear": 24.591995239257812,
            "happy": 40.2881965637207,
            "sad": 0.00034178790519945323,
            "surprise": 35.07218933105469,
            "neutral": 0.015142735093832016
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 1366,
            "y": 376,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 63.20655822753906,
            "Man": 36.79344177246094
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 45.960079193115234,
            "indian": 8.203716278076172,
            "black": 1.38277268409729,
            "white": 12.838888168334961,
            "middle eastern": 13.960016250610352,
            "latino hispanic": 17.654523849487305
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 1.211642861366272,
            "disgust": 0.0033383420668542385,
            "fear": 0.0162932351231575,
            "happy": 89.68338012695312,
            "sad": 0.2382660061120987,
            "surprise": 0.0036183008924126625,
            "neutral": 8.843461036682129
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 1478,
            "y": 376,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 5.930985927581787,
            "Man": 94.06901550292969
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 64.14851379394531,
            "indian": 4.676111221313477,
            "black": 0.9304980039596558,
            "white": 9.168920516967773,
            "middle eastern": 3.3898723125457764,
            "latino hispanic": 17.686086654663086
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.009173315949738026,
            "disgust": 5.918806778026919e-07,
            "fear": 0.00706749502569437,
            "happy": 99.32483673095703,
            "sad": 0.0003478559956420213,
            "surprise": 0.012817096896469593,
            "neutral": 0.6457604169845581
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 271,
            "y": 382,
            "w": 44,
            "h": 44,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 43.30985641479492,
            "Man": 56.69015121459961
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.03172878548502922,
            "indian": 0.29820510745048523,
            "black": 0.006268947850912809,
            "white": 69.40264129638672,
            "middle eastern": 21.58769416809082,
            "latino hispanic": 8.67345905303955
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.2947252988815308,
            "disgust": 0.0015567425871267915,
            "fear": 0.3391886055469513,
            "happy": 96.13436889648438,
            "sad": 0.32306331396102905,
            "surprise": 0.018629929050803185,
            "neutral": 1.8884665966033936
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 710,
            "y": 413,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 4.115532398223877,
            "Man": 95.88446807861328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 13.054015159606934,
            "indian": 12.895973205566406,
            "black": 2.5597403049468994,
            "white": 19.117938995361328,
            "middle eastern": 31.48176383972168,
            "latino hispanic": 20.89057159423828
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.0031994874589145184,
            "disgust": 9.380172741657589e-06,
            "fear": 0.4367194175720215,
            "happy": 99.50177001953125,
            "sad": 0.00019156633061356843,
            "surprise": 0.01834711804986,
            "neutral": 0.03976625204086304
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 35,
        "region": {
            "x": 433,
            "y": 415,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.7392356395721436,
            "Man": 99.26077270507812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 64.98006439208984,
            "indian": 6.072141170501709,
            "black": 1.0317996740341187,
            "white": 8.32457160949707,
            "middle eastern": 2.9572460651397705,
            "latino hispanic": 16.63418197631836
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 6.667773723602295,
            "disgust": 0.0010521146468818188,
            "fear": 0.007627448532730341,
            "happy": 3.8192970752716064,
            "sad": 1.4520047903060913,
            "surprise": 0.0001588137383805588,
            "neutral": 88.05208587646484
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 20,
        "region": {
            "x": 558,
            "y": 413,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 12.552823066711426,
            "Man": 87.44717407226562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 94.40443420410156,
            "indian": 0.17307768762111664,
            "black": 0.0076077776029706,
            "white": 3.7334516048431396,
            "middle eastern": 0.02335968241095543,
            "latino hispanic": 1.6580758094787598
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.0037830721121281385,
            "disgust": 0.0003206996188964695,
            "fear": 0.03696658834815025,
            "happy": 80.6330795288086,
            "sad": 0.10152718424797058,
            "surprise": 0.004834775812923908,
            "neutral": 19.219499588012695
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 1163,
            "y": 415,
            "w": 54,
            "h": 54,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 2.3161776065826416,
            "Man": 97.68382263183594
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.859560966491699,
            "indian": 1.7119096517562866,
            "black": 0.11559458076953888,
            "white": 59.74864196777344,
            "middle eastern": 13.989928245544434,
            "latino hispanic": 17.57436180114746
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.12431470304727554,
            "disgust": 6.043155008228496e-05,
            "fear": 0.49180641770362854,
            "happy": 99.17284393310547,
            "sad": 0.06468935310840607,
            "surprise": 0.003414347069337964,
            "neutral": 0.1428731232881546
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 935,
            "y": 428,
            "w": 47,
            "h": 47,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 11.862404823303223,
            "Man": 88.13760375976562
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.18506082892417908,
            "indian": 3.7142536640167236,
            "black": 0.1391165852546692,
            "white": 33.022586822509766,
            "middle eastern": 46.85483169555664,
            "latino hispanic": 16.084152221679688
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.02922079712152481,
            "disgust": 5.845279520144686e-05,
            "fear": 0.001993718557059765,
            "happy": 99.4912338256836,
            "sad": 0.03377574682235718,
            "surprise": 0.0003423174493946135,
            "neutral": 0.4433748722076416
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 808,
            "y": 439,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 25.568819046020508,
            "Man": 74.4311752319336
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.096255302429199,
            "indian": 5.119154930114746,
            "black": 0.16874518990516663,
            "white": 27.865570068359375,
            "middle eastern": 36.82280731201172,
            "latino hispanic": 27.927471160888672
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.00011604010796872899,
            "disgust": 2.0265185085577286e-09,
            "fear": 6.880034675305069e-07,
            "happy": 99.96446228027344,
            "sad": 0.009391427040100098,
            "surprise": 8.655558758619009e-07,
            "neutral": 0.026021601632237434
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 330,
            "y": 464,
            "w": 48,
            "h": 48,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 28.049558639526367,
            "Man": 71.950439453125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 27.85828971862793,
            "indian": 3.7851619720458984,
            "black": 0.6444829702377319,
            "white": 36.921695709228516,
            "middle eastern": 12.597349166870117,
            "latino hispanic": 18.193023681640625
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.8800375477876514e-05,
            "disgust": 2.7680284730990934e-09,
            "fear": 5.291344132274389e-05,
            "happy": 99.69548797607422,
            "sad": 0.002032842254266143,
            "surprise": 5.704461000277661e-05,
            "neutral": 0.3023228049278259
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 1039,
            "y": 460,
            "w": 49,
            "h": 49,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 85.38973999023438,
            "Man": 14.610261917114258
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.38559845089912415,
            "indian": 0.07629343122243881,
            "black": 0.0028063529171049595,
            "white": 91.05644226074219,
            "middle eastern": 5.076957702636719,
            "latino hispanic": 3.40190052986145
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.0009046924533322453,
            "disgust": 6.299964638856181e-07,
            "fear": 0.021355295553803444,
            "happy": 99.92154693603516,
            "sad": 0.034394003450870514,
            "surprise": 0.0001436197926523164,
            "neutral": 0.02165345847606659
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 661,
            "y": 480,
            "w": 45,
            "h": 45,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 5.297298431396484,
            "Man": 94.70270538330078
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.429837226867676,
            "indian": 9.51913833618164,
            "black": 0.8611671924591064,
            "white": 26.3038330078125,
            "middle eastern": 32.7105827331543,
            "latino hispanic": 23.175439834594727
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 6.116645812988281,
            "disgust": 0.12154942750930786,
            "fear": 29.703594207763672,
            "happy": 62.883506774902344,
            "sad": 0.050036102533340454,
            "surprise": 0.37106257677078247,
            "neutral": 0.7535980343818665
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 37,
        "region": {
            "x": 1401,
            "y": 449,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 98.4922866821289,
            "Man": 1.5077052116394043
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.0560799203813076,
            "indian": 2.840488910675049,
            "black": 0.0040197232738137245,
            "white": 13.473060607910156,
            "middle eastern": 78.06041717529297,
            "latino hispanic": 5.565939903259277
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.26351112127304077,
            "disgust": 0.10504584014415741,
            "fear": 13.39468765258789,
            "happy": 68.64160919189453,
            "sad": 9.411725997924805,
            "surprise": 0.003379426198080182,
            "neutral": 8.180038452148438
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 219,
            "y": 454,
            "w": 50,
            "h": 50,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 0.5168034434318542,
            "Man": 99.48319244384766
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 53.02650451660156,
            "indian": 7.801734447479248,
            "black": 2.6269469261169434,
            "white": 8.79214096069336,
            "middle eastern": 2.9318490028381348,
            "latino hispanic": 24.82082176208496
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 7.734753131866455,
            "disgust": 0.16726338863372803,
            "fear": 0.24349761009216309,
            "happy": 86.43717956542969,
            "sad": 1.1891558170318604,
            "surprise": 0.01980065181851387,
            "neutral": 4.208357334136963
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 165,
            "y": 500,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 22.109346389770508,
            "Man": 77.89065551757812
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 58.736473083496094,
            "indian": 7.187905788421631,
            "black": 1.2135480642318726,
            "white": 2.3374183177948,
            "middle eastern": 0.473507821559906,
            "latino hispanic": 30.0511417388916
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.638571583446492e-10,
            "disgust": 1.0326797416924759e-19,
            "fear": 4.383388884596104e-16,
            "happy": 99.99984741210938,
            "sad": 2.5117553870135367e-11,
            "surprise": 3.741933499168404e-11,
            "neutral": 0.00015498753054998815
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 25,
        "region": {
            "x": 851,
            "y": 501,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 0.6356064081192017,
            "Man": 99.36438751220703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 53.37092208862305,
            "indian": 4.525726318359375,
            "black": 1.51068913936615,
            "white": 13.63715934753418,
            "middle eastern": 3.7812180519104004,
            "latino hispanic": 23.174280166625977
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 0.007552505005151033,
            "disgust": 0.0005758519982919097,
            "fear": 0.0525021068751812,
            "happy": 99.10592651367188,
            "sad": 0.00268633128143847,
            "surprise": 0.002868467243388295,
            "neutral": 0.8278883695602417
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 36,
        "region": {
            "x": 1292,
            "y": 455,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 26.54479217529297,
            "Man": 73.45520782470703
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.8564542531967163,
            "indian": 0.283018559217453,
            "black": 0.03348994255065918,
            "white": 80.6594009399414,
            "middle eastern": 8.54207992553711,
            "latino hispanic": 9.625556945800781
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.005655743647366762,
            "disgust": 1.020220441461106e-08,
            "fear": 6.476307316916063e-05,
            "happy": 99.96475982666016,
            "sad": 0.0005111036589369178,
            "surprise": 1.9844494090648368e-05,
            "neutral": 0.028979821130633354
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 26,
        "region": {
            "x": 255,
            "y": 537,
            "w": 56,
            "h": 56,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 11.949402809143066,
            "Man": 88.05059814453125
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 7.68047571182251,
            "indian": 2.444334030151367,
            "black": 0.44353270530700684,
            "white": 49.10686492919922,
            "middle eastern": 16.856164932250977,
            "latino hispanic": 23.468629837036133
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.135236978530884,
            "disgust": 0.013610943220555782,
            "fear": 41.172271728515625,
            "happy": 44.131160736083984,
            "sad": 0.6217480897903442,
            "surprise": 10.382462501525879,
            "neutral": 1.5435107946395874
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 382,
            "y": 560,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 84.14749145507812,
            "Man": 15.852507591247559
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.02609405294060707,
            "indian": 0.14641200006008148,
            "black": 0.0023653788957744837,
            "white": 84.88749694824219,
            "middle eastern": 10.453046798706055,
            "latino hispanic": 4.484587669372559
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 6.281690900777903e-08,
            "disgust": 1.059791445275288e-14,
            "fear": 7.220389841577912e-10,
            "happy": 99.99290466308594,
            "sad": 4.882614348389325e-07,
            "surprise": 1.9057910805031497e-09,
            "neutral": 0.007095860783010721
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 731,
            "y": 557,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 94.50933074951172,
            "Man": 5.490666389465332
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.5026575922966003,
            "indian": 2.0513241291046143,
            "black": 0.048856571316719055,
            "white": 43.84370803833008,
            "middle eastern": 38.89300537109375,
            "latino hispanic": 14.660446166992188
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.5076748728752136,
            "disgust": 0.023030180484056473,
            "fear": 0.6973223686218262,
            "happy": 98.0468978881836,
            "sad": 0.5227891206741333,
            "surprise": 0.0018847977044060826,
            "neutral": 0.20040123164653778
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 1084,
            "y": 561,
            "w": 51,
            "h": 51,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 91.76431274414062,
            "Man": 8.235684394836426
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.8075225353240967,
            "indian": 6.752053737640381,
            "black": 0.20279577374458313,
            "white": 24.148649215698242,
            "middle eastern": 46.486045837402344,
            "latino hispanic": 21.602933883666992
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.00011474983330117539,
            "disgust": 5.302669947582217e-08,
            "fear": 4.2987954657291993e-05,
            "happy": 99.99109649658203,
            "sad": 0.008406583219766617,
            "surprise": 1.6656480283927522e-06,
            "neutral": 0.0003407173207961023
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 1374,
            "y": 538,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 2.0055391788482666,
            "Man": 97.99446105957031
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 89.88323974609375,
            "indian": 0.6608632802963257,
            "black": 0.0487537756562233,
            "white": 2.3493385314941406,
            "middle eastern": 0.09739036858081818,
            "latino hispanic": 6.9604172706604
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 9.121615462959198e-09,
            "disgust": 1.359233558700739e-15,
            "fear": 4.576909518050343e-09,
            "happy": 99.97016906738281,
            "sad": 8.314272577081283e-07,
            "surprise": 4.395327323436504e-06,
            "neutral": 0.029828589409589767
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 500,
            "y": 562,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.94,
        "gender": {
            "Woman": 99.52367401123047,
            "Man": 0.47631949186325073
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.17933082580566406,
            "indian": 1.6931164264678955,
            "black": 0.05828510969877243,
            "white": 50.40251922607422,
            "middle eastern": 29.50112533569336,
            "latino hispanic": 18.165626525878906
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.001791523420251906,
            "disgust": 3.692191796744737e-07,
            "fear": 0.0002511959755793214,
            "happy": 99.81287384033203,
            "sad": 0.0034070489928126335,
            "surprise": 0.00033056235406547785,
            "neutral": 0.1813511997461319
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 968,
            "y": 558,
            "w": 52,
            "h": 52,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 98.6741943359375,
            "Man": 1.3258033990859985
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 18.06682014465332,
            "indian": 6.380763530731201,
            "black": 1.2805896997451782,
            "white": 25.57470703125,
            "middle eastern": 9.51276683807373,
            "latino hispanic": 39.18435287475586
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 4.422585964202881,
            "disgust": 0.0013711386127397418,
            "fear": 7.602627277374268,
            "happy": 84.86483001708984,
            "sad": 3.0531764030456543,
            "surprise": 0.0006083787302486598,
            "neutral": 0.054799407720565796
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 614,
            "y": 563,
            "w": 53,
            "h": 53,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.85993194580078,
            "Man": 0.140059694647789
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.991578459739685,
            "indian": 5.683498382568359,
            "black": 0.8522249460220337,
            "white": 30.87093734741211,
            "middle eastern": 12.821383476257324,
            "latino hispanic": 47.78037643432617
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.001162104425020516,
            "disgust": 9.510387855016234e-08,
            "fear": 0.00014349669800139964,
            "happy": 99.92981719970703,
            "sad": 0.005246131215244532,
            "surprise": 1.561803037475329e-05,
            "neutral": 0.06361337006092072
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 1500,
            "y": 467,
            "w": 58,
            "h": 58,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 5.738611698150635,
            "Man": 94.26138305664062
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 6.788896083831787,
            "indian": 3.9753854274749756,
            "black": 0.5575141310691833,
            "white": 43.52429962158203,
            "middle eastern": 15.966534614562988,
            "latino hispanic": 29.1873722076416
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 0.19623765349388123,
            "disgust": 1.7938952406870712e-11,
            "fear": 0.0001354629930574447,
            "happy": 95.31131744384766,
            "sad": 0.0003243241226300597,
            "surprise": 0.0010468841064721346,
            "neutral": 4.49094295501709
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 712,
            "y": 654,
            "w": 76,
            "h": 76,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.97,
        "gender": {
            "Woman": 21.104604721069336,
            "Man": 78.89539337158203
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.07094510644674301,
            "indian": 0.00613701157271862,
            "black": 0.00025728391483426094,
            "white": 98.0386962890625,
            "middle eastern": 1.1556487083435059,
            "latino hispanic": 0.7283040285110474
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.691265763132833e-06,
            "disgust": 8.122775455726705e-13,
            "fear": 1.0209584289100349e-08,
            "happy": 99.99797058105469,
            "sad": 1.561009810302494e-08,
            "surprise": 0.00016478277393616736,
            "neutral": 0.0018677649786695838
        },
        "dominant_emotion": "happy"
    }
];

let skincare_specialist_data2 = [
    {
        "age": 26,
        "region": {
            "x": 691,
            "y": 58,
            "w": 91,
            "h": 91,
            "left_eye": [
                754,
                95
            ],
            "right_eye": [
                721,
                93
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.00011719892063410953,
            "Man": 99.9998779296875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 25.939651489257812,
            "indian": 17.344629287719727,
            "black": 5.197310447692871,
            "white": 9.29181957244873,
            "middle eastern": 7.591575622558594,
            "latino hispanic": 34.635009765625
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 4.961679678672226e-06,
            "disgust": 1.5214855417222672e-11,
            "fear": 1.2547778169391677e-05,
            "happy": 89.67472839355469,
            "sad": 0.0005903446581214666,
            "surprise": 0.00844282004982233,
            "neutral": 10.316227912902832
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 872,
            "y": 57,
            "w": 84,
            "h": 84,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.0032056861091405153,
            "Man": 99.99679565429688
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.214538097381592,
            "indian": 15.771598815917969,
            "black": 9.656197547912598,
            "white": 21.155771255493164,
            "middle eastern": 20.917604446411133,
            "latino hispanic": 28.2842960357666
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 0.0012026847107335925,
            "disgust": 1.921878656219178e-09,
            "fear": 5.03254086652305e-05,
            "happy": 94.96257781982422,
            "sad": 0.0026077749207615852,
            "surprise": 0.001167744747363031,
            "neutral": 5.032397747039795
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 33,
        "region": {
            "x": 1048,
            "y": 69,
            "w": 89,
            "h": 89,
            "left_eye": [
                1108,
                105
            ],
            "right_eye": [
                1075,
                105
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 0.0007911474094726145,
            "Man": 99.99921417236328
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 1.321181058883667,
            "indian": 6.2204766273498535,
            "black": 0.7292105555534363,
            "white": 33.51677322387695,
            "middle eastern": 36.57608413696289,
            "latino hispanic": 21.636280059814453
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 0.00011883532715728506,
            "disgust": 1.3880122745613122e-11,
            "fear": 7.90380170201388e-08,
            "happy": 83.58519744873047,
            "sad": 0.00016346419579349458,
            "surprise": 2.340492937946692e-05,
            "neutral": 16.414501190185547
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 40,
        "region": {
            "x": 1254,
            "y": 72,
            "w": 96,
            "h": 96,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 0.0333794504404068,
            "Man": 99.96662139892578
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.7311621904373169,
            "indian": 4.320843696594238,
            "black": 0.19560982286930084,
            "white": 40.83162307739258,
            "middle eastern": 40.24256134033203,
            "latino hispanic": 13.678201675415039
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.129307746887207,
            "disgust": 0.0029454203322529793,
            "fear": 2.703376293182373,
            "happy": 0.1401968151330948,
            "sad": 12.590717315673828,
            "surprise": 0.005424875766038895,
            "neutral": 81.42803192138672
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 42,
        "region": {
            "x": 382,
            "y": 105,
            "w": 106,
            "h": 106,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 0.008146003820002079,
            "Man": 99.99185943603516
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.0036910197231918573,
            "indian": 6.996979713439941,
            "black": 0.007902370765805244,
            "white": 6.799964427947998,
            "middle eastern": 82.41259765625,
            "latino hispanic": 3.7788734436035156
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 1.1516595805005636e-05,
            "disgust": 6.195916413124277e-15,
            "fear": 1.2857704234647827e-07,
            "happy": 91.17866516113281,
            "sad": 2.2252697817748412e-05,
            "surprise": 2.390125700912904e-06,
            "neutral": 8.821294784545898
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 23,
        "region": {
            "x": 235,
            "y": 116,
            "w": 104,
            "h": 104,
            "left_eye": [
                308,
                159
            ],
            "right_eye": [
                272,
                157
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 0.001655431347899139,
            "Man": 99.99834442138672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.490509986877441,
            "indian": 15.804439544677734,
            "black": 1.7808341979980469,
            "white": 16.788942337036133,
            "middle eastern": 10.698287963867188,
            "latino hispanic": 44.43698501586914
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 2.4152543097563824e-14,
            "disgust": 4.330947288392441e-27,
            "fear": 1.0366345809368922e-14,
            "happy": 99.99921417236328,
            "sad": 4.4030196155731005e-12,
            "surprise": 3.249535438953899e-06,
            "neutral": 0.0007862733327783644
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 28,
        "region": {
            "x": 947,
            "y": 132,
            "w": 104,
            "h": 104,
            "left_eye": [
                1018,
                173
            ],
            "right_eye": [
                980,
                173
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 0.00019087287364527583,
            "Man": 99.99980926513672
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.2497609257698059,
            "indian": 1.6029473543167114,
            "black": 0.024169469252228737,
            "white": 61.6738395690918,
            "middle eastern": 26.67693519592285,
            "latino hispanic": 9.772354125976562
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.8472632038756274e-05,
            "disgust": 8.091759955228955e-14,
            "fear": 6.018275371388881e-07,
            "happy": 82.98484802246094,
            "sad": 4.299488864489831e-05,
            "surprise": 0.002936300588771701,
            "neutral": 17.012142181396484
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 778,
            "y": 159,
            "w": 87,
            "h": 87,
            "left_eye": [
                840,
                192
            ],
            "right_eye": [
                806,
                191
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.9995346069336,
            "Man": 0.00046041031600907445
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 9.973886489868164,
            "indian": 13.309182167053223,
            "black": 2.9479920864105225,
            "white": 28.30573844909668,
            "middle eastern": 12.561189651489258,
            "latino hispanic": 32.90200424194336
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 7.193693340665219e-13,
            "disgust": 1.0155847486516799e-27,
            "fear": 1.5918111242039959e-15,
            "happy": 99.9179458618164,
            "sad": 7.200898211046081e-10,
            "surprise": 3.250231017659644e-08,
            "neutral": 0.08206113427877426
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 1183,
            "y": 175,
            "w": 84,
            "h": 84,
            "left_eye": [
                1238,
                207
            ],
            "right_eye": [
                1206,
                208
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 19.73809814453125,
            "Man": 80.26190185546875
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 25.681167602539062,
            "indian": 18.812374114990234,
            "black": 9.77860164642334,
            "white": 8.178342819213867,
            "middle eastern": 7.408735752105713,
            "latino hispanic": 30.140775680541992
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 3.316581796752871e-06,
            "disgust": 2.4536720311801874e-12,
            "fear": 2.2947865829792136e-08,
            "happy": 98.10083770751953,
            "sad": 0.0002428901061648503,
            "surprise": 5.14587591169402e-05,
            "neutral": 1.898851990699768
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 42,
        "region": {
            "x": 1412,
            "y": 112,
            "w": 108,
            "h": 108,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.95,
        "gender": {
            "Woman": 0.03612413629889488,
            "Man": 99.96388244628906
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 10.350364685058594,
            "indian": 24.561614990234375,
            "black": 27.40069580078125,
            "white": 7.045421600341797,
            "middle eastern": 8.455085754394531,
            "latino hispanic": 22.186813354492188
        },
        "dominant_race": "black",
        "emotion": {
            "angry": 0.2642737030982971,
            "disgust": 1.7583122371434001e-06,
            "fear": 0.008418857119977474,
            "happy": 0.400749534368515,
            "sad": 2.7702999114990234,
            "surprise": 6.770801701350138e-05,
            "neutral": 96.55619049072266
        },
        "dominant_emotion": "neutral"
    },
    {
        "age": 31,
        "region": {
            "x": 1319,
            "y": 226,
            "w": 99,
            "h": 99,
            "left_eye": [
                1385,
                264
            ],
            "right_eye": [
                1348,
                264
            ]
        },
        "face_confidence": 0.92,
        "gender": {
            "Woman": 99.9399642944336,
            "Man": 0.0600314624607563
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 21.653478622436523,
            "indian": 5.147086143493652,
            "black": 1.2159385681152344,
            "white": 40.202083587646484,
            "middle eastern": 17.48896598815918,
            "latino hispanic": 14.292442321777344
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.512278124948807e-08,
            "disgust": 3.9678487197453464e-20,
            "fear": 2.0889724412082034e-12,
            "happy": 99.92071533203125,
            "sad": 4.441366741048114e-08,
            "surprise": 8.440446208624053e-07,
            "neutral": 0.0792752131819725
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 27,
        "region": {
            "x": 1515,
            "y": 212,
            "w": 115,
            "h": 115,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 0.3211188316345215,
            "Man": 99.67888641357422
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 2.353208541870117,
            "indian": 21.766271591186523,
            "black": 1.8596651554107666,
            "white": 18.85444450378418,
            "middle eastern": 27.45904541015625,
            "latino hispanic": 27.707359313964844
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 9.126052344377023e-12,
            "disgust": 4.0328400071310264e-28,
            "fear": 1.8571435182976644e-18,
            "happy": 99.9977798461914,
            "sad": 9.222494729704822e-14,
            "surprise": 5.6741742381072324e-12,
            "neutral": 0.0022200997918844223
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 31,
        "region": {
            "x": 481,
            "y": 218,
            "w": 107,
            "h": 107,
            "left_eye": [
                559,
                260
            ],
            "right_eye": [
                521,
                258
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.99765014648438,
            "Man": 0.0023530798498541117
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 60.24049758911133,
            "indian": 6.3010687828063965,
            "black": 0.47772642970085144,
            "white": 1.2484722137451172,
            "middle eastern": 0.4152562916278839,
            "latino hispanic": 31.316980361938477
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 8.681014349205818e-13,
            "disgust": 8.753941894767942e-28,
            "fear": 1.5820921093485224e-16,
            "happy": 99.97119140625,
            "sad": 2.9346903379634526e-11,
            "surprise": 2.620257610885801e-08,
            "neutral": 0.028812779113650322
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 313,
            "y": 225,
            "w": 113,
            "h": 113,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 14.933234214782715,
            "Man": 85.06676483154297
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 0.05207910016179085,
            "indian": 0.037209704518318176,
            "black": 0.0009090753155760467,
            "white": 96.38452911376953,
            "middle eastern": 2.0064632892608643,
            "latino hispanic": 1.5188075304031372
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.139383590731055e-13,
            "disgust": 2.4763354542922375e-25,
            "fear": 6.650371188666364e-16,
            "happy": 99.57650756835938,
            "sad": 3.769872192194157e-10,
            "surprise": 4.841975778657748e-11,
            "neutral": 0.42349883913993835
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 24,
        "region": {
            "x": 91,
            "y": 233,
            "w": 118,
            "h": 118,
            "left_eye": [
                175,
                281
            ],
            "right_eye": [
                132,
                277
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 1.6917610168457031,
            "Man": 98.30824279785156
        },
        "dominant_gender": "Man",
        "race": {
            "asian": 4.109408855438232,
            "indian": 11.034224510192871,
            "black": 1.335780382156372,
            "white": 28.20612144470215,
            "middle eastern": 22.296058654785156,
            "latino hispanic": 33.01840591430664
        },
        "dominant_race": "latino hispanic",
        "emotion": {
            "angry": 4.750951151585858e-13,
            "disgust": 1.617250752178594e-27,
            "fear": 2.9940732022365346e-17,
            "happy": 99.99799346923828,
            "sad": 1.191603890213222e-12,
            "surprise": 5.27303622988029e-09,
            "neutral": 0.0020104350987821817
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 30,
        "region": {
            "x": 655,
            "y": 249,
            "w": 117,
            "h": 117,
            "left_eye": [
                736,
                296
            ],
            "right_eye": [
                695,
                295
            ]
        },
        "face_confidence": 0.88,
        "gender": {
            "Woman": 99.82625579833984,
            "Man": 0.1737413853406906
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 50.412715911865234,
            "indian": 4.992047309875488,
            "black": 0.4533037543296814,
            "white": 2.148716926574707,
            "middle eastern": 0.4066416025161743,
            "latino hispanic": 41.586570739746094
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 7.721021599849109e-10,
            "disgust": 4.610493395378624e-22,
            "fear": 4.7288193495795706e-15,
            "happy": 97.4847183227539,
            "sad": 2.22989164910814e-08,
            "surprise": 6.28846919425996e-07,
            "neutral": 2.515287399291992
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 39,
        "region": {
            "x": 851,
            "y": 247,
            "w": 109,
            "h": 109,
            "left_eye": [
                926,
                286
            ],
            "right_eye": [
                887,
                291
            ]
        },
        "face_confidence": 0.93,
        "gender": {
            "Woman": 99.99954986572266,
            "Man": 0.00045573266106657684
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.042987607419490814,
            "indian": 0.2332351803779602,
            "black": 0.0026919383089989424,
            "white": 75.83116149902344,
            "middle eastern": 17.77430534362793,
            "latino hispanic": 6.115623950958252
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.7771615342526692e-12,
            "disgust": 3.259814454594992e-24,
            "fear": 1.184262439242451e-16,
            "happy": 99.9150619506836,
            "sad": 2.9181882604811804e-11,
            "surprise": 3.504129608700168e-08,
            "neutral": 0.0849383994936943
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 1103,
            "y": 253,
            "w": 101,
            "h": 101,
            "left_eye": [
                1174,
                290
            ],
            "right_eye": [
                1133,
                294
            ]
        },
        "face_confidence": 0.86,
        "gender": {
            "Woman": 99.98336029052734,
            "Man": 0.016644155606627464
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.6628747582435608,
            "indian": 3.2908260822296143,
            "black": 0.23690228164196014,
            "white": 46.29180908203125,
            "middle eastern": 31.626667022705078,
            "latino hispanic": 17.890920639038086
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 3.414640377741307e-05,
            "disgust": 1.9986637345148495e-11,
            "fear": 2.357134265551508e-09,
            "happy": 84.72913360595703,
            "sad": 8.953455107985064e-05,
            "surprise": 0.0003922799660358578,
            "neutral": 15.270345687866211
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 464,
            "y": 449,
            "w": 135,
            "h": 135,
            "left_eye": [
                555,
                502
            ],
            "right_eye": [
                507,
                500
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99959564208984,
            "Man": 0.0004071149742230773
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.14682745933532715,
            "indian": 12.60703182220459,
            "black": 0.06465243548154831,
            "white": 23.33778190612793,
            "middle eastern": 48.002769470214844,
            "latino hispanic": 15.840944290161133
        },
        "dominant_race": "middle eastern",
        "emotion": {
            "angry": 4.584205931523755e-11,
            "disgust": 1.955809589451247e-23,
            "fear": 8.620365705980237e-13,
            "happy": 99.95638275146484,
            "sad": 4.5845582885561953e-10,
            "surprise": 5.655424573092205e-09,
            "neutral": 0.043619174510240555
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 716,
            "y": 419,
            "w": 138,
            "h": 138,
            "left_eye": [
                813,
                472
            ],
            "right_eye": [
                762,
                474
            ]
        },
        "face_confidence": 0.89,
        "gender": {
            "Woman": 99.99906921386719,
            "Man": 0.0009280928643420339
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 65.71762084960938,
            "indian": 3.501009941101074,
            "black": 0.3603183925151825,
            "white": 2.0113978385925293,
            "middle eastern": 0.5077518224716187,
            "latino hispanic": 27.90190315246582
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 2.1018278941299998e-14,
            "disgust": 5.910556895365953e-27,
            "fear": 1.4410664175866018e-17,
            "happy": 99.6658706665039,
            "sad": 2.368207019376456e-10,
            "surprise": 3.3647216124421675e-09,
            "neutral": 0.33413028717041016
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 1407,
            "y": 402,
            "w": 118,
            "h": 118,
            "left_eye": null,
            "right_eye": null
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.96260070800781,
            "Man": 0.03739403188228607
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 7.218145370483398,
            "indian": 2.434770107269287,
            "black": 0.444013386964798,
            "white": 54.75001525878906,
            "middle eastern": 12.32184886932373,
            "latino hispanic": 22.831209182739258
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 5.811149774767373e-25,
            "disgust": 0.0,
            "fear": 1.742784539105393e-29,
            "happy": 99.99998474121094,
            "sad": 1.8261355294457496e-23,
            "surprise": 7.79999086674184e-21,
            "neutral": 1.2534501365735196e-05
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 1232,
            "y": 430,
            "w": 127,
            "h": 127,
            "left_eye": [
                1322,
                477
            ],
            "right_eye": [
                1269,
                480
            ]
        },
        "face_confidence": 0.9,
        "gender": {
            "Woman": 99.99807739257812,
            "Man": 0.0019163042306900024
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 1.6380923986434937,
            "indian": 6.166423320770264,
            "black": 0.5822519659996033,
            "white": 41.7358512878418,
            "middle eastern": 19.06017303466797,
            "latino hispanic": 30.817203521728516
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 1.0194228274029715e-11,
            "disgust": 3.8988531957151025e-26,
            "fear": 4.201380363949121e-17,
            "happy": 99.9315414428711,
            "sad": 7.927186684852927e-11,
            "surprise": 4.879666115620296e-10,
            "neutral": 0.06846302002668381
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 32,
        "region": {
            "x": 267,
            "y": 384,
            "w": 131,
            "h": 131,
            "left_eye": [
                355,
                439
            ],
            "right_eye": [
                309,
                433
            ]
        },
        "face_confidence": 0.87,
        "gender": {
            "Woman": 99.9996337890625,
            "Man": 0.0003744973218999803
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 0.042263660579919815,
            "indian": 0.23279666900634766,
            "black": 0.004163694102317095,
            "white": 73.09735107421875,
            "middle eastern": 14.5448579788208,
            "latino hispanic": 12.078570365905762
        },
        "dominant_race": "white",
        "emotion": {
            "angry": 2.54274596045434e-06,
            "disgust": 3.5533295750234117e-10,
            "fear": 3.3502064411550236e-07,
            "happy": 98.36407470703125,
            "sad": 7.415121945086867e-05,
            "surprise": 1.0429106623632833e-05,
            "neutral": 1.635848879814148
        },
        "dominant_emotion": "happy"
    },
    {
        "age": 29,
        "region": {
            "x": 1004,
            "y": 438,
            "w": 128,
            "h": 128,
            "left_eye": [
                1089,
                484
            ],
            "right_eye": [
                1041,
                490
            ]
        },
        "face_confidence": 0.91,
        "gender": {
            "Woman": 99.967529296875,
            "Man": 0.03247744217514992
        },
        "dominant_gender": "Woman",
        "race": {
            "asian": 38.820499420166016,
            "indian": 8.677922248840332,
            "black": 2.6675028800964355,
            "white": 13.400994300842285,
            "middle eastern": 5.390364646911621,
            "latino hispanic": 31.042715072631836
        },
        "dominant_race": "asian",
        "emotion": {
            "angry": 3.164339331605511e-16,
            "disgust": 2.3308544582454986e-30,
            "fear": 1.2085643508741053e-20,
            "happy": 99.8024673461914,
            "sad": 2.4528213661556553e-12,
            "surprise": 1.8392468104089232e-10,
            "neutral": 0.19753435254096985
        },
        "dominant_emotion": "happy"
    }
];

let skincare_specialist_data3 = [
   {
      "age":41,
      "region":{
         "x":306,
         "y":81,
         "w":56,
         "h":56,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.92,
      "gender":{
         "Woman":0.007992899976670742,
         "Man":99.99200439453125
      },
      "dominant_gender":"Man",
      "race":{
         "asian":16.76879119873047,
         "indian":18.148221969604492,
         "black":9.541374206542969,
         "white":10.737051010131836,
         "middle eastern":10.068342208862305,
         "latino hispanic":34.73622131347656
      },
      "dominant_race":"latino hispanic",
      "emotion":{
         "angry":0.011708796955645084,
         "disgust":6.032617534401652e-07,
         "fear":0.013178572058677673,
         "happy":46.2528190612793,
         "sad":1.3413232564926147,
         "surprise":4.8545894969720393e-05,
         "neutral":52.38092041015625
      },
      "dominant_emotion":"neutral"
   },
   {
      "age":33,
      "region":{
         "x":427,
         "y":81,
         "w":53,
         "h":53,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.97,
      "gender":{
         "Woman":0.31011563539505005,
         "Man":99.68988800048828
      },
      "dominant_gender":"Man",
      "race":{
         "asian":2.611248731613159,
         "indian":3.2301626205444336,
         "black":0.5622484683990479,
         "white":53.237388610839844,
         "middle eastern":22.316524505615234,
         "latino hispanic":18.04242515563965
      },
      "dominant_race":"white",
      "emotion":{
         "angry":0.0023574314545840025,
         "disgust":3.817073768175305e-09,
         "fear":7.817725418135524e-05,
         "happy":98.95575714111328,
         "sad":0.0004384712956380099,
         "surprise":0.00012827715545427054,
         "neutral":1.041233777999878
      },
      "dominant_emotion":"happy"
   },
   {
      "age":39,
      "region":{
         "x":529,
         "y":82,
         "w":54,
         "h":54,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.93,
      "gender":{
         "Woman":0.10977555066347122,
         "Man":99.89022064208984
      },
      "dominant_gender":"Man",
      "race":{
         "asian":3.076460838317871,
         "indian":8.41870403289795,
         "black":1.2923740148544312,
         "white":27.079137802124023,
         "middle eastern":34.69092559814453,
         "latino hispanic":25.442398071289062
      },
      "dominant_race":"middle eastern",
      "emotion":{
         "angry":4.628673195838928e-06,
         "disgust":3.1920660559237035e-11,
         "fear":9.714850079944881e-08,
         "happy":99.9755859375,
         "sad":2.0344155018392485e-06,
         "surprise":1.9624292690423317e-05,
         "neutral":0.024378838017582893
      },
      "dominant_emotion":"happy"
   },
   {
      "age":32,
      "region":{
         "x":639,
         "y":79,
         "w":53,
         "h":53,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.92,
      "gender":{
         "Woman":0.00021472814842127264,
         "Man":99.99978637695312
      },
      "dominant_gender":"Man",
      "race":{
         "asian":1.3656641244888306,
         "indian":7.7430949211120605,
         "black":1.6120165586471558,
         "white":28.251514434814453,
         "middle eastern":39.79728317260742,
         "latino hispanic":21.23043441772461
      },
      "dominant_race":"middle eastern",
      "emotion":{
         "angry":1.873105065897107e-05,
         "disgust":1.0953269541369437e-12,
         "fear":2.95391528197797e-05,
         "happy":99.95304107666016,
         "sad":7.247843996083247e-07,
         "surprise":0.006797339767217636,
         "neutral":0.04012102633714676
      },
      "dominant_emotion":"happy"
   },
   {
      "age":32,
      "region":{
         "x":868,
         "y":88,
         "w":48,
         "h":48,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.93,
      "gender":{
         "Woman":30.25737190246582,
         "Man":69.74263000488281
      },
      "dominant_gender":"Man",
      "race":{
         "asian":6.999999046325684,
         "indian":10.233141899108887,
         "black":2.140071392059326,
         "white":24.29193687438965,
         "middle eastern":21.08671760559082,
         "latino hispanic":35.248138427734375
      },
      "dominant_race":"latino hispanic",
      "emotion":{
         "angry":0.01092164870351553,
         "disgust":5.725364462705329e-05,
         "fear":0.05829819664359093,
         "happy":99.49017333984375,
         "sad":0.0007787820068188012,
         "surprise":0.0625046119093895,
         "neutral":0.37725529074668884
      },
      "dominant_emotion":"happy"
   },
   {
      "age":34,
      "region":{
         "x":196,
         "y":87,
         "w":50,
         "h":50,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.94,
      "gender":{
         "Woman":40.871910095214844,
         "Man":59.12808609008789
      },
      "dominant_gender":"Man",
      "race":{
         "asian":0.011256413534283638,
         "indian":0.01148761436343193,
         "black":0.00014993220975156873,
         "white":96.94756317138672,
         "middle eastern":2.3886778354644775,
         "latino hispanic":0.6408679485321045
      },
      "dominant_race":"white",
      "emotion":{
         "angry":0.0006671578157693148,
         "disgust":3.2960954854388547e-07,
         "fear":0.20422469079494476,
         "happy":99.5054931640625,
         "sad":0.00014463718980550766,
         "surprise":0.18883319199085236,
         "neutral":0.10064136981964111
      },
      "dominant_emotion":"happy"
   },
   {
      "age":39,
      "region":{
         "x":749,
         "y":79,
         "w":53,
         "h":53,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.92,
      "gender":{
         "Woman":0.019591908901929855,
         "Man":99.98040771484375
      },
      "dominant_gender":"Man",
      "race":{
         "asian":5.5487060546875,
         "indian":18.26430892944336,
         "black":6.2034735679626465,
         "white":13.07415771484375,
         "middle eastern":36.67555618286133,
         "latino hispanic":20.23379898071289
      },
      "dominant_race":"middle eastern",
      "emotion":{
         "angry":15.465108871459961,
         "disgust":0.00025459672906436026,
         "fear":1.0463052988052368,
         "happy":0.1780742108821869,
         "sad":79.80870056152344,
         "surprise":4.675447416957468e-05,
         "neutral":3.501514434814453
      },
      "dominant_emotion":"sad"
   },
   {
      "age":34,
      "region":{
         "x":657,
         "y":198,
         "w":49,
         "h":49,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.92,
      "gender":{
         "Woman":99.95682525634766,
         "Man":0.043171439319849014
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":6.66605806350708,
         "indian":0.14920680224895477,
         "black":0.01603883132338524,
         "white":82.15219116210938,
         "middle eastern":7.373463153839111,
         "latino hispanic":3.6430447101593018
      },
      "dominant_race":"white",
      "emotion":{
         "angry":1.0485679922567215e-05,
         "disgust":6.970311133835949e-11,
         "fear":8.595658982812893e-06,
         "happy":99.97891998291016,
         "sad":2.636048066051444e-06,
         "surprise":7.819217717042193e-05,
         "neutral":0.02098836936056614
      },
      "dominant_emotion":"happy"
   },
   {
      "age":28,
      "region":{
         "x":121,
         "y":133,
         "w":49,
         "h":49,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.9,
      "gender":{
         "Woman":26.473512649536133,
         "Man":73.5264892578125
      },
      "dominant_gender":"Man",
      "race":{
         "asian":1.7164170742034912,
         "indian":5.155596733093262,
         "black":0.7892273664474487,
         "white":34.15077209472656,
         "middle eastern":33.14844512939453,
         "latino hispanic":25.039541244506836
      },
      "dominant_race":"white",
      "emotion":{
         "angry":0.0016390359960496426,
         "disgust":0.00019959890050813556,
         "fear":0.001785067724995315,
         "happy":98.98954010009766,
         "sad":0.008907482028007507,
         "surprise":2.158867209800519e-05,
         "neutral":0.9979056119918823
      },
      "dominant_emotion":"happy"
   },
   {
      "age":32,
      "region":{
         "x":271,
         "y":133,
         "w":45,
         "h":45,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.94,
      "gender":{
         "Woman":99.99586486816406,
         "Man":0.004132636822760105
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":0.5437034964561462,
         "indian":0.36028143763542175,
         "black":0.027257151901721954,
         "white":77.4744644165039,
         "middle eastern":12.036416053771973,
         "latino hispanic":9.557877540588379
      },
      "dominant_race":"white",
      "emotion":{
         "angry":5.112855774314085e-07,
         "disgust":1.3811060585108836e-13,
         "fear":1.9145875285175862e-07,
         "happy":99.9997329711914,
         "sad":9.948864487796527e-08,
         "surprise":1.4478170051734907e-10,
         "neutral":0.0002689730317797512
      },
      "dominant_emotion":"happy"
   },
   {
      "age":35,
      "region":{
         "x":584,
         "y":135,
         "w":50,
         "h":50,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.94,
      "gender":{
         "Woman":99.99510955810547,
         "Man":0.004890878219157457
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":0.006418043281883001,
         "indian":0.09000939875841141,
         "black":0.0007531653391197324,
         "white":85.48332977294922,
         "middle eastern":9.054144859313965,
         "latino hispanic":5.365341663360596
      },
      "dominant_race":"white",
      "emotion":{
         "angry":0.002682893304154277,
         "disgust":0.000819134118501097,
         "fear":0.1102055236697197,
         "happy":99.82809448242188,
         "sad":0.04776937514543533,
         "surprise":2.7001405555893143e-08,
         "neutral":0.010431029833853245
      },
      "dominant_emotion":"happy"
   },
   {
      "age":34,
      "region":{
         "x":378,
         "y":140,
         "w":51,
         "h":51,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.95,
      "gender":{
         "Woman":99.1200180053711,
         "Man":0.8799817562103271
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":6.909575939178467,
         "indian":6.7558274269104,
         "black":1.988107681274414,
         "white":44.326202392578125,
         "middle eastern":21.194175720214844,
         "latino hispanic":18.826112747192383
      },
      "dominant_race":"white",
      "emotion":{
         "angry":1.3034533452582764e-09,
         "disgust":7.23433980810557e-23,
         "fear":2.3024852423975117e-12,
         "happy":99.99508666992188,
         "sad":3.6685855742124573e-11,
         "surprise":0.0028116872999817133,
         "neutral":0.0020977985113859177
      },
      "dominant_emotion":"happy"
   },
   {
      "age":33,
      "region":{
         "x":696,
         "y":138,
         "w":51,
         "h":51,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.91,
      "gender":{
         "Woman":99.8138198852539,
         "Man":0.18618221580982208
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":3.061922689084895e-05,
         "indian":0.00015043711755424738,
         "black":1.3274804189222777e-07,
         "white":99.46284484863281,
         "middle eastern":0.4401056468486786,
         "latino hispanic":0.09687713533639908
      },
      "dominant_race":"white",
      "emotion":{
         "angry":5.967316484695173e-12,
         "disgust":1.49706906592268e-24,
         "fear":2.0294496985706623e-11,
         "happy":100.0,
         "sad":1.7764404584928034e-13,
         "surprise":2.41995792293892e-07,
         "neutral":2.366276987686433e-07
      },
      "dominant_emotion":"happy"
   },
   {
      "age":34,
      "region":{
         "x":811,
         "y":138,
         "w":49,
         "h":49,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.94,
      "gender":{
         "Woman":36.69021224975586,
         "Man":63.30978775024414
      },
      "dominant_gender":"Man",
      "race":{
         "asian":10.427854537963867,
         "indian":3.199692726135254,
         "black":0.5767394304275513,
         "white":52.173858642578125,
         "middle eastern":20.950620651245117,
         "latino hispanic":12.671235084533691
      },
      "dominant_race":"white",
      "emotion":{
         "angry":0.0006206544931046665,
         "disgust":2.1439702322822995e-05,
         "fear":0.007768082898110151,
         "happy":99.55961608886719,
         "sad":0.006775339599698782,
         "surprise":0.003164267633110285,
         "neutral":0.4220333695411682
      },
      "dominant_emotion":"happy"
   },
   {
      "age":32,
      "region":{
         "x":476,
         "y":147,
         "w":55,
         "h":55,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.91,
      "gender":{
         "Woman":98.822021484375,
         "Man":1.1779803037643433
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":57.5181884765625,
         "indian":2.3306264877319336,
         "black":0.6405236124992371,
         "white":19.060579299926758,
         "middle eastern":13.439096450805664,
         "latino hispanic":7.010986804962158
      },
      "dominant_race":"asian",
      "emotion":{
         "angry":7.651616760995239e-05,
         "disgust":2.1576425979219493e-07,
         "fear":1.0967204616463277e-05,
         "happy":99.78020477294922,
         "sad":0.0029341757763177156,
         "surprise":2.3339627659879625e-05,
         "neutral":0.21674329042434692
      },
      "dominant_emotion":"happy"
   },
   {
      "age":33,
      "region":{
         "x":369,
         "y":255,
         "w":49,
         "h":49,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.96,
      "gender":{
         "Woman":99.99946594238281,
         "Man":0.0005358036723919213
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":22.797515869140625,
         "indian":11.01012134552002,
         "black":4.876633167266846,
         "white":28.03646469116211,
         "middle eastern":14.632705688476562,
         "latino hispanic":18.646564483642578
      },
      "dominant_race":"white",
      "emotion":{
         "angry":1.4768417031518766e-06,
         "disgust":3.278359707184833e-14,
         "fear":9.626108798954647e-09,
         "happy":99.99849700927734,
         "sad":7.907750187996498e-08,
         "surprise":2.5997969714808278e-05,
         "neutral":0.0014847508864477277
      },
      "dominant_emotion":"happy"
   },
   {
      "age":31,
      "region":{
         "x":315,
         "y":195,
         "w":51,
         "h":51,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.88,
      "gender":{
         "Woman":98.33101654052734,
         "Man":1.6689836978912354
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":15.951679229736328,
         "indian":0.29060614109039307,
         "black":0.03457191586494446,
         "white":72.22334289550781,
         "middle eastern":6.148061275482178,
         "latino hispanic":5.351741313934326
      },
      "dominant_race":"white",
      "emotion":{
         "angry":2.5602233222343784e-07,
         "disgust":1.924356534581742e-13,
         "fear":3.876144916148405e-08,
         "happy":99.99935150146484,
         "sad":5.9157500231776794e-08,
         "surprise":3.4606053134211834e-08,
         "neutral":0.0006502964533865452
      },
      "dominant_emotion":"happy"
   },
   {
      "age":34,
      "region":{
         "x":908,
         "y":169,
         "w":50,
         "h":50,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.94,
      "gender":{
         "Woman":98.6626205444336,
         "Man":1.3373796939849854
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":0.09631136804819107,
         "indian":4.908829212188721,
         "black":0.03699447959661484,
         "white":13.114264488220215,
         "middle eastern":75.4201431274414,
         "latino hispanic":6.423465251922607
      },
      "dominant_race":"middle eastern",
      "emotion":{
         "angry":1.1286353583273012e-05,
         "disgust":5.5854548416944816e-12,
         "fear":0.0004686259781010449,
         "happy":99.99848937988281,
         "sad":1.5951844716255437e-06,
         "surprise":0.00038338813465088606,
         "neutral":0.0006485158810392022
      },
      "dominant_emotion":"happy"
   },
   {
      "age":31,
      "region":{
         "x":757,
         "y":197,
         "w":52,
         "h":52,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.93,
      "gender":{
         "Woman":50.945884704589844,
         "Man":49.054115295410156
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":0.16777104139328003,
         "indian":3.6276047229766846,
         "black":0.019829899072647095,
         "white":11.973052024841309,
         "middle eastern":79.66754150390625,
         "latino hispanic":4.544205188751221
      },
      "dominant_race":"middle eastern",
      "emotion":{
         "angry":0.055044498294591904,
         "disgust":0.00023850967409089208,
         "fear":0.4986899197101593,
         "happy":99.18858337402344,
         "sad":0.10770079493522644,
         "surprise":0.0009817308746278286,
         "neutral":0.14875514805316925
      },
      "dominant_emotion":"happy"
   },
   {
      "age":29,
      "region":{
         "x":422,
         "y":213,
         "w":56,
         "h":56,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.94,
      "gender":{
         "Woman":99.89798736572266,
         "Man":0.10200697183609009
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":1.5698785781860352,
         "indian":0.32295849919319153,
         "black":0.03269844129681587,
         "white":80.65863037109375,
         "middle eastern":7.294336318969727,
         "latino hispanic":10.121504783630371
      },
      "dominant_race":"white",
      "emotion":{
         "angry":0.0018762315157800913,
         "disgust":9.939723355500973e-08,
         "fear":0.0036502040456980467,
         "happy":99.97664642333984,
         "sad":5.607049843092682e-06,
         "surprise":0.0006774736102670431,
         "neutral":0.017139069736003876
      },
      "dominant_emotion":"happy"
   },
   {
      "age":30,
      "region":{
         "x":959,
         "y":249,
         "w":51,
         "h":51,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.91,
      "gender":{
         "Woman":99.99523162841797,
         "Man":0.0047673191875219345
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":1.236894130706787,
         "indian":2.4061777591705322,
         "black":0.30610591173171997,
         "white":54.33655548095703,
         "middle eastern":24.766983032226562,
         "latino hispanic":16.94728660583496
      },
      "dominant_race":"white",
      "emotion":{
         "angry":7.269068191817496e-07,
         "disgust":3.546999282830199e-12,
         "fear":7.455961895175278e-05,
         "happy":99.4089126586914,
         "sad":5.010957465856336e-06,
         "surprise":0.0015131882391870022,
         "neutral":0.5894955396652222
      },
      "dominant_emotion":"happy"
   },
   {
      "age":33,
      "region":{
         "x":259,
         "y":260,
         "w":51,
         "h":51,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.94,
      "gender":{
         "Woman":99.99189758300781,
         "Man":0.008102045394480228
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":2.85599946975708,
         "indian":9.817902565002441,
         "black":1.953522801399231,
         "white":27.66119384765625,
         "middle eastern":39.13777160644531,
         "latino hispanic":18.5736141204834
      },
      "dominant_race":"middle eastern",
      "emotion":{
         "angry":1.7868815802013494e-11,
         "disgust":8.470251386693178e-17,
         "fear":1.4235404521834027e-10,
         "happy":99.99922180175781,
         "sad":6.134145968950122e-10,
         "surprise":6.94324242545008e-09,
         "neutral":0.0007761021261103451
      },
      "dominant_emotion":"happy"
   },
   {
      "age":33,
      "region":{
         "x":709,
         "y":265,
         "w":49,
         "h":49,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.93,
      "gender":{
         "Woman":99.92731475830078,
         "Man":0.07268597185611725
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":4.847822189331055,
         "indian":5.001622676849365,
         "black":0.7617615461349487,
         "white":40.323509216308594,
         "middle eastern":31.624549865722656,
         "latino hispanic":17.44072723388672
      },
      "dominant_race":"white",
      "emotion":{
         "angry":0.000563379842787981,
         "disgust":1.199711846311402e-06,
         "fear":0.004346403758972883,
         "happy":99.87042999267578,
         "sad":0.0006814465159550309,
         "surprise":0.005455907434225082,
         "neutral":0.11852466315031052
      },
      "dominant_emotion":"happy"
   },
   {
      "age":28,
      "region":{
         "x":838,
         "y":239,
         "w":55,
         "h":55,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.91,
      "gender":{
         "Woman":97.5920181274414,
         "Man":2.407980442047119
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":5.486988067626953,
         "indian":11.357091903686523,
         "black":1.60715651512146,
         "white":25.623023986816406,
         "middle eastern":21.234323501586914,
         "latino hispanic":34.6914176940918
      },
      "dominant_race":"latino hispanic",
      "emotion":{
         "angry":8.08796727369554e-08,
         "disgust":9.825567443000338e-12,
         "fear":7.822134193702368e-07,
         "happy":99.98406982421875,
         "sad":6.815719189035008e-07,
         "surprise":0.0021448025945574045,
         "neutral":0.013781478628516197
      },
      "dominant_emotion":"happy"
   },
   {
      "age":40,
      "region":{
         "x":13,
         "y":248,
         "w":51,
         "h":51,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.95,
      "gender":{
         "Woman":99.99871063232422,
         "Man":0.0012846131576225162
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":60.85302734375,
         "indian":1.3487508296966553,
         "black":0.3467990458011627,
         "white":21.33696174621582,
         "middle eastern":5.693144798278809,
         "latino hispanic":10.42131519317627
      },
      "dominant_race":"asian",
      "emotion":{
         "angry":0.004406217485666275,
         "disgust":2.7751576681112056e-07,
         "fear":0.01574394665658474,
         "happy":99.79462432861328,
         "sad":8.706522930879146e-05,
         "surprise":0.0006953746196813881,
         "neutral":0.18443913757801056
      },
      "dominant_emotion":"happy"
   },
   {
      "age":31,
      "region":{
         "x":594,
         "y":261,
         "w":52,
         "h":52,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.94,
      "gender":{
         "Woman":98.8592300415039,
         "Man":1.1407713890075684
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":3.15545654296875,
         "indian":2.3634212017059326,
         "black":0.2050519734621048,
         "white":61.237709045410156,
         "middle eastern":28.745454788208008,
         "latino hispanic":4.29290246963501
      },
      "dominant_race":"white",
      "emotion":{
         "angry":1.633320061955601e-05,
         "disgust":3.1685321033592118e-09,
         "fear":0.002509077312424779,
         "happy":99.99327087402344,
         "sad":0.003819203469902277,
         "surprise":1.8394484868622385e-06,
         "neutral":0.00038077274803072214
      },
      "dominant_emotion":"happy"
   },
   {
      "age":31,
      "region":{
         "x":69,
         "y":181,
         "w":58,
         "h":58,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.96,
      "gender":{
         "Woman":59.23662185668945,
         "Man":40.76337814331055
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":5.165000915527344,
         "indian":1.99932861328125,
         "black":0.058714523911476135,
         "white":51.023284912109375,
         "middle eastern":32.32728958129883,
         "latino hispanic":9.426374435424805
      },
      "dominant_race":"white",
      "emotion":{
         "angry":0.7323513627052307,
         "disgust":3.2548123272135854e-05,
         "fear":0.0019386389758437872,
         "happy":98.64677429199219,
         "sad":0.02078344114124775,
         "surprise":0.010951885022222996,
         "neutral":0.5871725678443909
      },
      "dominant_emotion":"happy"
   },
   {
      "age":35,
      "region":{
         "x":487,
         "y":280,
         "w":57,
         "h":57,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.94,
      "gender":{
         "Woman":2.669532060623169,
         "Man":97.33045959472656
      },
      "dominant_gender":"Man",
      "race":{
         "asian":6.275076884776354e-07,
         "indian":2.2161202650750056e-05,
         "black":1.2725053011308773e-07,
         "white":99.51637268066406,
         "middle eastern":0.434013307094574,
         "latino hispanic":0.049590811133384705
      },
      "dominant_race":"white",
      "emotion":{
         "angry":8.173024980351329e-06,
         "disgust":5.860164411293934e-15,
         "fear":0.00023831089492887259,
         "happy":0.0038325295317918062,
         "sad":0.009488705545663834,
         "surprise":1.1842500313719029e-08,
         "neutral":99.98643493652344
      },
      "dominant_emotion":"neutral"
   },
   {
      "age":41,
      "region":{
         "x":72,
         "y":322,
         "w":54,
         "h":54,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.93,
      "gender":{
         "Woman":99.92203521728516,
         "Man":0.07796625047922134
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":3.1179873943328857,
         "indian":4.885194778442383,
         "black":0.7821645140647888,
         "white":38.98322677612305,
         "middle eastern":24.989004135131836,
         "latino hispanic":27.24241828918457
      },
      "dominant_race":"white",
      "emotion":{
         "angry":4.800634201274079e-07,
         "disgust":4.456676947484084e-07,
         "fear":0.0006323716370388865,
         "happy":99.99773406982422,
         "sad":0.00012215960305184126,
         "surprise":2.304272106457006e-09,
         "neutral":0.0015168156241998076
      },
      "dominant_emotion":"happy"
   },
   {
      "age":37,
      "region":{
         "x":904,
         "y":322,
         "w":54,
         "h":54,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.94,
      "gender":{
         "Woman":99.8711929321289,
         "Man":0.1288100928068161
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":0.2241102010011673,
         "indian":0.4317792057991028,
         "black":0.017891179770231247,
         "white":79.83960723876953,
         "middle eastern":13.88931941986084,
         "latino hispanic":5.597291946411133
      },
      "dominant_race":"white",
      "emotion":{
         "angry":1.7134813070297241,
         "disgust":3.8578650674025994e-07,
         "fear":0.054204486310482025,
         "happy":98.20469665527344,
         "sad":0.0004526510019786656,
         "surprise":0.0037015732377767563,
         "neutral":0.023463638499379158
      },
      "dominant_emotion":"happy"
   },
   {
      "age":35,
      "region":{
         "x":167,
         "y":322,
         "w":58,
         "h":58,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.9,
      "gender":{
         "Woman":17.199268341064453,
         "Man":82.80073547363281
      },
      "dominant_gender":"Man",
      "race":{
         "asian":0.3666335344314575,
         "indian":0.03076581284403801,
         "black":0.0042286524549126625,
         "white":94.11911010742188,
         "middle eastern":1.7757647037506104,
         "latino hispanic":3.7034950256347656
      },
      "dominant_race":"white",
      "emotion":{
         "angry":3.243231105898303e-08,
         "disgust":2.622335908261577e-14,
         "fear":4.654250460589537e-06,
         "happy":99.98478698730469,
         "sad":9.121052357841108e-09,
         "surprise":0.0025477460585534573,
         "neutral":0.012662652879953384
      },
      "dominant_emotion":"happy"
   },
   {
      "age":35,
      "region":{
         "x":797,
         "y":329,
         "w":53,
         "h":53,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.9,
      "gender":{
         "Woman":99.83538055419922,
         "Man":0.16461804509162903
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":0.026178907603025436,
         "indian":0.24047653377056122,
         "black":0.0037955935113132,
         "white":82.59262084960938,
         "middle eastern":13.834357261657715,
         "latino hispanic":3.3025712966918945
      },
      "dominant_race":"white",
      "emotion":{
         "angry":0.00018258209456689656,
         "disgust":6.389508033777247e-09,
         "fear":8.546057506464422e-05,
         "happy":99.99858093261719,
         "sad":0.00019696771050803363,
         "surprise":3.0910999271327455e-07,
         "neutral":0.0009480661829002202
      },
      "dominant_emotion":"happy"
   },
   {
      "age":29,
      "region":{
         "x":142,
         "y":227,
         "w":59,
         "h":59,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.94,
      "gender":{
         "Woman":0.267097532749176,
         "Man":99.73290252685547
      },
      "dominant_gender":"Man",
      "race":{
         "asian":43.89041519165039,
         "indian":8.105060577392578,
         "black":3.1589255332946777,
         "white":16.88779067993164,
         "middle eastern":6.776878356933594,
         "latino hispanic":21.180931091308594
      },
      "dominant_race":"asian",
      "emotion":{
         "angry":0.0024564240593463182,
         "disgust":0.0002744878001976758,
         "fear":0.044494666159152985,
         "happy":99.5767822265625,
         "sad":0.002440215088427067,
         "surprise":0.007308713160455227,
         "neutral":0.366241455078125
      },
      "dominant_emotion":"happy"
   },
   {
      "age":33,
      "region":{
         "x":401,
         "y":347,
         "w":54,
         "h":54,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.91,
      "gender":{
         "Woman":98.98100280761719,
         "Man":1.0189990997314453
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":2.0561726093292236,
         "indian":1.9309744834899902,
         "black":0.0888170450925827,
         "white":62.15386962890625,
         "middle eastern":22.755775451660156,
         "latino hispanic":11.01439380645752
      },
      "dominant_race":"white",
      "emotion":{
         "angry":0.002338541205972433,
         "disgust":0.001021314412355423,
         "fear":0.3097495138645172,
         "happy":99.62254333496094,
         "sad":0.0009445876348763704,
         "surprise":0.00012149204849265516,
         "neutral":0.06328575313091278
      },
      "dominant_emotion":"happy"
   },
   {
      "age":32,
      "region":{
         "x":669,
         "y":350,
         "w":57,
         "h":57,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.9,
      "gender":{
         "Woman":1.4056289196014404,
         "Man":98.59436798095703
      },
      "dominant_gender":"Man",
      "race":{
         "asian":23.92820930480957,
         "indian":3.129889726638794,
         "black":0.8470755219459534,
         "white":37.338966369628906,
         "middle eastern":15.557435035705566,
         "latino hispanic":19.198427200317383
      },
      "dominant_race":"white",
      "emotion":{
         "angry":2.398187177732325e-07,
         "disgust":2.297455574309243e-13,
         "fear":1.8077356571666314e-06,
         "happy":99.99617004394531,
         "sad":8.952037333642693e-09,
         "surprise":0.0028669359162449837,
         "neutral":0.0009593411814421415
      },
      "dominant_emotion":"happy"
   },
   {
      "age":31,
      "region":{
         "x":537,
         "y":343,
         "w":58,
         "h":58,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.9,
      "gender":{
         "Woman":99.41814422607422,
         "Man":0.5818577408790588
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":0.03563129901885986,
         "indian":0.2640649676322937,
         "black":0.0051630898378789425,
         "white":79.09814453125,
         "middle eastern":17.03026580810547,
         "latino hispanic":3.566728115081787
      },
      "dominant_race":"white",
      "emotion":{
         "angry":0.32526764273643494,
         "disgust":0.0003994936996605247,
         "fear":14.310327529907227,
         "happy":83.16820526123047,
         "sad":0.00907041970640421,
         "surprise":1.1779632568359375,
         "neutral":1.0087682008743286
      },
      "dominant_emotion":"happy"
   },
   {
      "age":34,
      "region":{
         "x":284,
         "y":343,
         "w":63,
         "h":63,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.96,
      "gender":{
         "Woman":7.892067909240723,
         "Man":92.10792541503906
      },
      "dominant_gender":"Man",
      "race":{
         "asian":22.023639678955078,
         "indian":6.095681190490723,
         "black":1.521169900894165,
         "white":36.048439025878906,
         "middle eastern":21.22450828552246,
         "latino hispanic":13.086563110351562
      },
      "dominant_race":"white",
      "emotion":{
         "angry":0.0008415972115471959,
         "disgust":3.9139226259976567e-07,
         "fear":0.00022512266878038645,
         "happy":59.7503662109375,
         "sad":0.027591001242399216,
         "surprise":0.008004613220691681,
         "neutral":40.21296691894531
      },
      "dominant_emotion":"happy"
   },
   {
      "age":30,
      "region":{
         "x":286,
         "y":433,
         "w":55,
         "h":55,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.9,
      "gender":{
         "Woman":99.9991455078125,
         "Man":0.0008630758966319263
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":1.1864573955535889,
         "indian":0.15123480558395386,
         "black":0.004011730197817087,
         "white":86.24429321289062,
         "middle eastern":7.190407752990723,
         "latino hispanic":5.223597526550293
      },
      "dominant_race":"white",
      "emotion":{
         "angry":7.14493741948985e-10,
         "disgust":6.839932574511404e-20,
         "fear":3.9871236867661253e-10,
         "happy":99.99642181396484,
         "sad":5.4729887288829104e-11,
         "surprise":0.0008735123556107283,
         "neutral":0.002701035002246499
      },
      "dominant_emotion":"happy"
   },
   {
      "age":33,
      "region":{
         "x":408,
         "y":430,
         "w":57,
         "h":57,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.92,
      "gender":{
         "Woman":4.1986403465271,
         "Man":95.8013687133789
      },
      "dominant_gender":"Man",
      "race":{
         "asian":9.170707702636719,
         "indian":9.545151710510254,
         "black":2.127561092376709,
         "white":26.46194839477539,
         "middle eastern":23.00558853149414,
         "latino hispanic":29.689044952392578
      },
      "dominant_race":"latino hispanic",
      "emotion":{
         "angry":0.2651829719543457,
         "disgust":0.007796342018991709,
         "fear":0.5621790885925293,
         "happy":95.48462677001953,
         "sad":0.4817619323730469,
         "surprise":0.004749446641653776,
         "neutral":3.1937036514282227
      },
      "dominant_emotion":"happy"
   },
   {
      "age":33,
      "region":{
         "x":16,
         "y":434,
         "w":54,
         "h":54,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.93,
      "gender":{
         "Woman":99.93704223632812,
         "Man":0.06296077370643616
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":2.6669180393218994,
         "indian":2.3986427783966064,
         "black":0.3640957474708557,
         "white":54.26219177246094,
         "middle eastern":17.348209381103516,
         "latino hispanic":22.95994758605957
      },
      "dominant_race":"white",
      "emotion":{
         "angry":2.229786559837521e-07,
         "disgust":1.6747925068267763e-14,
         "fear":7.51321786083281e-05,
         "happy":99.99885559082031,
         "sad":2.0972718672851443e-08,
         "surprise":1.4606904130687326e-07,
         "neutral":0.0010686866007745266
      },
      "dominant_emotion":"happy"
   },
   {
      "age":34,
      "region":{
         "x":145,
         "y":434,
         "w":54,
         "h":54,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.92,
      "gender":{
         "Woman":99.82960510253906,
         "Man":0.1703885793685913
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":0.27497363090515137,
         "indian":1.942333698272705,
         "black":0.09166955202817917,
         "white":53.780982971191406,
         "middle eastern":36.37724304199219,
         "latino hispanic":7.5327959060668945
      },
      "dominant_race":"white",
      "emotion":{
         "angry":2.1192430722294375e-05,
         "disgust":8.708814114299912e-09,
         "fear":0.027742331847548485,
         "happy":99.95577239990234,
         "sad":1.126702272813418e-06,
         "surprise":0.0025126708205789328,
         "neutral":0.013935651630163193
      },
      "dominant_emotion":"happy"
   },
   {
      "age":28,
      "region":{
         "x":529,
         "y":434,
         "w":59,
         "h":59,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.92,
      "gender":{
         "Woman":98.83248901367188,
         "Man":1.1675130128860474
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":0.1627272367477417,
         "indian":0.029687415808439255,
         "black":0.0012810009066015482,
         "white":92.84143829345703,
         "middle eastern":2.8567681312561035,
         "latino hispanic":4.108096599578857
      },
      "dominant_race":"white",
      "emotion":{
         "angry":0.00026488196454010904,
         "disgust":1.7147071318390772e-08,
         "fear":0.004435136914253235,
         "happy":99.98625183105469,
         "sad":1.3240332918940112e-07,
         "surprise":0.006718580611050129,
         "neutral":0.0023230554070323706
      },
      "dominant_emotion":"happy"
   },
   {
      "age":39,
      "region":{
         "x":900,
         "y":405,
         "w":66,
         "h":66,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.95,
      "gender":{
         "Woman":0.34161555767059326,
         "Man":99.65837860107422
      },
      "dominant_gender":"Man",
      "race":{
         "asian":10.145062446594238,
         "indian":15.060616493225098,
         "black":13.73286247253418,
         "white":18.82463264465332,
         "middle eastern":26.79597282409668,
         "latino hispanic":15.440845489501953
      },
      "dominant_race":"middle eastern",
      "emotion":{
         "angry":0.0014057407388463616,
         "disgust":3.0032238712192902e-16,
         "fear":0.0018922587623819709,
         "happy":0.00048742597573436797,
         "sad":0.007612934801727533,
         "surprise":0.0005872671026736498,
         "neutral":99.9880142211914
      },
      "dominant_emotion":"neutral"
   },
   {
      "age":31,
      "region":{
         "x":896,
         "y":524,
         "w":55,
         "h":55,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.91,
      "gender":{
         "Woman":99.94812774658203,
         "Man":0.05187997594475746
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":0.517788827419281,
         "indian":1.774801254272461,
         "black":0.0897444561123848,
         "white":48.41357421875,
         "middle eastern":30.575254440307617,
         "latino hispanic":18.62883949279785
      },
      "dominant_race":"white",
      "emotion":{
         "angry":3.744928562809946e-06,
         "disgust":6.230152962416469e-07,
         "fear":1.0665460649761371e-05,
         "happy":99.92742156982422,
         "sad":0.0002458076924085617,
         "surprise":3.0504864412250754e-07,
         "neutral":0.07231934368610382
      },
      "dominant_emotion":"happy"
   },
   {
      "age":34,
      "region":{
         "x":736,
         "y":525,
         "w":56,
         "h":56,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.93,
      "gender":{
         "Woman":99.82764434814453,
         "Man":0.17234742641448975
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":11.95792293548584,
         "indian":16.14345932006836,
         "black":5.383581161499023,
         "white":16.786184310913086,
         "middle eastern":19.424549102783203,
         "latino hispanic":30.304304122924805
      },
      "dominant_race":"latino hispanic",
      "emotion":{
         "angry":8.243339379987447e-07,
         "disgust":5.908546985011753e-10,
         "fear":0.0003184341767337173,
         "happy":99.99911499023438,
         "sad":7.412855893562664e-07,
         "surprise":5.279242486722069e-06,
         "neutral":0.000558289815671742
      },
      "dominant_emotion":"happy"
   },
   {
      "age":36,
      "region":{
         "x":400,
         "y":529,
         "w":60,
         "h":60,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.9,
      "gender":{
         "Woman":11.198838233947754,
         "Man":88.80116271972656
      },
      "dominant_gender":"Man",
      "race":{
         "asian":7.043720870569814e-06,
         "indian":3.7222162063699216e-06,
         "black":9.734467454336482e-09,
         "white":99.929443359375,
         "middle eastern":0.0319613479077816,
         "latino hispanic":0.038587745279073715
      },
      "dominant_race":"white",
      "emotion":{
         "angry":3.6935041862307116e-05,
         "disgust":2.981690450098995e-10,
         "fear":0.03408999741077423,
         "happy":99.9658203125,
         "sad":1.159692692453973e-05,
         "surprise":6.462129498174818e-09,
         "neutral":3.432547964621335e-05
      },
      "dominant_emotion":"happy"
   },
   {
      "age":44,
      "region":{
         "x":58,
         "y":513,
         "w":68,
         "h":68,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.92,
      "gender":{
         "Woman":49.17506790161133,
         "Man":50.82493591308594
      },
      "dominant_gender":"Man",
      "race":{
         "asian":26.23990249633789,
         "indian":12.928387641906738,
         "black":13.563331604003906,
         "white":15.070499420166016,
         "middle eastern":14.51251220703125,
         "latino hispanic":17.685367584228516
      },
      "dominant_race":"asian",
      "emotion":{
         "angry":82.39572143554688,
         "disgust":0.001375124091282487,
         "fear":0.057342350482940674,
         "happy":2.0994672775268555,
         "sad":3.0246689319610596,
         "surprise":2.6427643299102783,
         "neutral":9.778668403625488
      },
      "dominant_emotion":"angry"
   },
   {
      "age":36,
      "region":{
         "x":233,
         "y":522,
         "w":60,
         "h":60,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.92,
      "gender":{
         "Woman":99.70850372314453,
         "Man":0.2915007174015045
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":0.1081882119178772,
         "indian":0.012970649637281895,
         "black":0.0007958339410834014,
         "white":96.2714614868164,
         "middle eastern":1.827619194984436,
         "latino hispanic":1.7789613008499146
      },
      "dominant_race":"white",
      "emotion":{
         "angry":3.231576920370571e-05,
         "disgust":1.7298292220857547e-07,
         "fear":0.03273652866482735,
         "happy":99.96073913574219,
         "sad":2.4579499950050376e-05,
         "surprise":1.1428623110987246e-05,
         "neutral":0.006456590723246336
      },
      "dominant_emotion":"happy"
   },
   {
      "age":35,
      "region":{
         "x":561,
         "y":526,
         "w":59,
         "h":59,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.91,
      "gender":{
         "Woman":99.99884033203125,
         "Man":0.0011556908721104264
      },
      "dominant_gender":"Woman",
      "race":{
         "asian":1.562481702421792e-05,
         "indian":7.477538588318566e-08,
         "black":3.5049693702937645e-10,
         "white":99.99630737304688,
         "middle eastern":0.0024089065846055746,
         "latino hispanic":0.0012742148246616125
      },
      "dominant_race":"white",
      "emotion":{
         "angry":1.0341925094081716e-09,
         "disgust":3.1114825566378213e-17,
         "fear":4.305744738530848e-08,
         "happy":100.0,
         "sad":3.714168972379639e-09,
         "surprise":4.6964615307842905e-07,
         "neutral":1.930213556988747e-06
      },
      "dominant_emotion":"happy"
   },
   {
      "age":34,
      "region":{
         "x":653,
         "y":438,
         "w":59,
         "h":59,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.92,
      "gender":{
         "Woman":1.4587485790252686,
         "Man":98.54125213623047
      },
      "dominant_gender":"Man",
      "race":{
         "asian":2.8897042274475098,
         "indian":5.768272876739502,
         "black":1.4205750226974487,
         "white":40.33496856689453,
         "middle eastern":26.397796630859375,
         "latino hispanic":23.18868637084961
      },
      "dominant_race":"white",
      "emotion":{
         "angry":0.00012548992526717484,
         "disgust":8.402452294831164e-06,
         "fear":0.000196434382814914,
         "happy":99.9663314819336,
         "sad":0.020686300471425056,
         "surprise":7.706046289968072e-08,
         "neutral":0.012651034630835056
      },
      "dominant_emotion":"happy"
   },
   {
      "age":28,
      "region":{
         "x":45,
         "y":873,
         "w":52,
         "h":52,
         "left_eye":null,
         "right_eye":null
      },
      "face_confidence":0.98,
      "gender":{
         "Woman":3.371528148651123,
         "Man":96.62847900390625
      },
      "dominant_gender":"Man",
      "race":{
         "asian":2.6485157012939453,
         "indian":0.06650732457637787,
         "black":0.012931860983371735,
         "white":93.01741027832031,
         "middle eastern":2.7509231567382812,
         "latino hispanic":1.5037130117416382
      },
      "dominant_race":"white",
      "emotion":{
         "angry":0.06885838508605957,
         "disgust":4.290481303570459e-09,
         "fear":19.81643295288086,
         "happy":4.9504044000059366e-05,
         "sad":80.1018295288086,
         "surprise":4.3821928557008505e-06,
         "neutral":0.01282608974725008
      },
      "dominant_emotion":"sad"
   }
]

console.log("ChatGPT Results for Skincare Specialist:");
const data = skincare_specialist_data.concat(skincare_specialist_data2, skincare_specialist_data3);
console.log(processData(data));
