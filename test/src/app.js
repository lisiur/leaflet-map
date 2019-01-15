// @ts-ignore
// import leafletMap from '../../../leaflet-layer'
// import { PointStyles, RasterStyles } from 'leaflet-layer'
import { StandardGrid, WfsCql } from 'leaflet-layer'
const convert = require('xml-js')

// @ts-ignore
const L = window.L

const position = new L.LatLng(31.1953349914293, 121.447382657192)
// var position = new L.LatLng(39.90778, 116.401216)
const map = L.map('map', {
  // crs: L.CRS.EPSG4326
  crs: L.CRS.EPSG3857,
}).setView(position, 13)
L.tileLayer
  .chinaProvider('GaoDe.Normal.Map', { maxZoom: 18, minZoom: 3 })
  .addTo(map)
// const tile = L.tileLayer.wms(
//   'http://192.168.1.54:8090/geoserver/workspace_dev/wms',
//   {
//     layers: 'workspace_dev:t_grid',
//     transparent: true,
//     format: 'image/png',
//     crs: L.CRS.EPSG4326,
//   }
// )

// const json =
//   '[[118.98532735554552,31.401239085033488],[118.98532728679919,31.401238062752544],[118.98525642597194,31.400737309927134],[118.98524136366655,31.400488901998198],[118.98524344313508,31.40043444948575],[118.98525136949847,31.400350271416947],[118.98529217894209,31.400197982460792],[118.98537803763969,31.399921417531893],[118.9855659078832,31.399468760062625],[118.98556597793429,31.399468584981324],[118.98565784924301,31.39923013847729],[118.98570706533121,31.399147649943455],[118.98575515936338,31.399101355745252],[118.98575625095087,31.39910007076249],[118.98575702930184,31.399098627805444],[118.98575746450473,31.399097082326143],[118.9857575398349,31.399095493716487],[118.98575725239755,31.399093923025866],[118.98575661323875,31.39909243061502],[118.98575564692094,31.39909107383647],[118.98575439057926,31.399089904830426],[118.9857528924942,31.399088968521152],[118.98575121023633,31.399088300890476],[118.98574940845381,31.399087927595048],[118.98574755638818,31.399087862980426],[118.98574572521323,31.39908810952969],[118.9857439853,31.39908865776811],[118.98574240351233,31.399089486627172],[118.98574104063745,31.399090564254333],[118.98569214063639,31.39913763425169],[118.98569078275771,31.39913933508741],[118.98564068275181,31.3992233050844],[118.98564012208719,31.39922445502354],[118.98554805592698,31.399463407134498],[118.98536009207841,31.3999162899254],[118.98535986283632,31.39991692305268],[118.98527386281066,31.400193943047675],[118.98527378471022,31.40019421317894],[118.9852327846957,31.400347213176627],[118.98523257508798,31.400348377076035],[118.9852245750795,31.40043333707579],[118.98522454945774,31.40043372447716],[118.98522244945221,31.40048871447724],[118.98522245714601,31.400489401245284],[118.98523755712125,31.400738431247415],[118.98523761324917,31.400738987239585],[118.98530844113333,31.40123950797119],[118.98530734443736,31.401408914966446],[118.98530751588042,31.401410498074398],[118.98530804410697,31.401412022075025],[118.98530890881763,31.401413428401813],[118.98531007678204,31.40141466301044],[118.98531150311597,31.401415678455567],[118.98531313300626,31.401416435714193],[118.9853149038171,31.4014169056853],[118.98531674749718,31.40141707030815],[118.98531859319493,31.40141692325637],[118.98532036998118,31.4014164701811],[118.98532200957501,31.401415728493763],[118.98532344896775,31.401414726696995],[118.98532463284434,31.401413503289277],[118.98532551570909,31.401412105285512],[118.98532606363398,31.401410586410197],[118.98532625556263,31.40140900503286],[118.98532735554552,31.401239085033488]]'
// const latlngs = JSON.parse(json).map(([a, b]) => [b, a])
// L.polygon(latlngs).addTo(map)

function tdGrid() {
  const latlngs1 = [
    [31.1953349914293, 121.447382657192],
    [31.2020068468886, 121.446274438124],
    [31.2020123557601, 121.442947694754],
    [31.2020049117006, 121.44738323504],
    [31.1920019527958, 121.446273571174],
    [31.1953330076833, 121.448491396541],
    [31.1942374131254, 121.43851051735],
    [31.2020205190144, 121.437401913132],
    [31.1942213507426, 121.448491300273],
    [31.1953424355233, 121.442947116313],
    [31.1975621235596, 121.445165197392],
    [31.1975691666719, 121.440729180323],
    [31.203125741233, 121.441838757233],
    [31.1908992220986, 121.440728601706],
    [31.1920091974173, 121.441837792974],
    [31.2031321687832, 121.437402009661],
    [31.2020140914587, 121.441838660789],
    [31.2020008962473, 121.449600656358],
    [31.1920140962528, 121.4385103244],
    [31.2009057583347, 121.43962031383],
    [31.2031274258398, 121.440729662614],
    [31.2053455156508, 121.444056957787],
    [31.1975542868065, 121.449600271324],
    [31.1986756139161, 121.444056379416],
    [31.2008932608849, 121.447383138722],
    [31.190900855186, 121.439619445657],
    [31.1997835442298, 121.44627424544],
    [31.1953309759585, 121.449600078831],
    [31.1997924734223, 121.440729373227],
    [31.1931225409787, 121.440728794562],
  ]

  const res = {
    code: 1001,
    data: {
      allCountSum: 116513,
      workCountSum: 87063,
      gridCountVos: [
        {
          homeCount: 193,
          locationBean: {
            lng: '121.440729662614',
            gridHash: 'a18g5tcvd',
            lat: '31.2031274258398',
          },
          allCount: 299,
          workCount: 194,
        },
        {
          homeCount: 432,
          locationBean: {
            lng: '121.439619349213',
            gridHash: 'a18g22qzc',
            lat: '31.1897891942529',
          },
          allCount: 946,
          workCount: 660,
        },
        {
          homeCount: 207,
          locationBean: {
            lng: '121.439619445657',
            gridHash: 'a18g2dmdc',
            lat: '31.190900855186',
          },
          allCount: 565,
          workCount: 430,
        },
        {
          homeCount: 287,
          locationBean: {
            lng: '121.438510227932',
            gridHash: 'a18g2dmdb',
            lat: '31.190902436316',
          },
          allCount: 2319,
          workCount: 2138,
        },
        {
          homeCount: 206,
          locationBean: {
            lng: '121.439619735012',
            gridHash: 'a18g3b8mc',
            lat: '31.1942358319995',
          },
          allCount: 767,
          workCount: 613,
        },
        {
          homeCount: 674,
          locationBean: {
            lng: '121.448491300273',
            gridHash: 'a18g3b8mm',
            lat: '31.1942213507426',
          },
          allCount: 1012,
          workCount: 605,
        },
        {
          homeCount: 626,
          locationBean: {
            lng: '121.450708608537',
            gridHash: 'a18g3b8mp',
            lat: '31.1942172399022',
          },
          allCount: 1245,
          workCount: 862,
        },
        {
          homeCount: 136,
          locationBean: {
            lng: '121.44738323504',
            gridHash: 'a18g5ggfk',
            lat: '31.2020049117006',
          },
          allCount: 251,
          workCount: 174,
        },
        {
          homeCount: 647,
          locationBean: {
            lng: '121.447382464608',
            gridHash: 'a18g30d6k',
            lat: '31.1931116765439',
          },
          allCount: 1086,
          workCount: 712,
        },
        {
          homeCount: 219,
          locationBean: {
            lng: '121.442947501924',
            gridHash: 'a18g4vqnf',
            lat: '31.1997890531099',
          },
          allCount: 420,
          workCount: 280,
        },
        {
          homeCount: 189,
          locationBean: {
            lng: '121.442947116313',
            gridHash: 'a18g3n50f',
            lat: '31.1953424355233',
          },
          allCount: 521,
          workCount: 398,
        },
        {
          homeCount: 83,
          locationBean: {
            lng: '121.441838371481',
            gridHash: 'a18g4ju7e',
            lat: '31.198679135946',
          },
          allCount: 241,
          workCount: 183,
        },
        {
          homeCount: 192,
          locationBean: {
            lng: '121.444055993915',
            gridHash: 'a18g3b8mg',
            lat: '31.194228992257',
          },
          allCount: 426,
          workCount: 313,
        },
        {
          homeCount: 250,
          locationBean: {
            lng: '121.449600367577',
            gridHash: 'a18g4ju7n',
            lat: '31.1986659407044',
          },
          allCount: 1432,
          workCount: 1258,
        },
        {
          homeCount: 77,
          locationBean: {
            lng: '121.444056957787',
            gridHash: 'a18g6e4pg',
            lat: '31.2053455156508',
          },
          allCount: 210,
          workCount: 158,
        },
        {
          homeCount: 284,
          locationBean: {
            lng: '121.441838950132',
            gridHash: 'a18g6e4pe',
            lat: '31.2053490376637',
          },
          allCount: 460,
          workCount: 300,
        },
        {
          homeCount: 418,
          locationBean: {
            lng: '121.448492166825',
            gridHash: 'a18g6388m',
            lat: '31.2042262264911',
          },
          allCount: 822,
          workCount: 461,
        },
        {
          homeCount: 85,
          locationBean: {
            lng: '121.440728698132',
            gridHash: 'a18g2qgtd',
            lat: '31.1920108820381',
          },
          allCount: 360,
          workCount: 299,
        },
        {
          homeCount: 770,
          locationBean: {
            lng: '121.447382368322',
            gridHash: 'a18g2qgtk',
            lat: '31.1920000175948',
          },
          allCount: 1470,
          workCount: 994,
        },
        {
          homeCount: 177,
          locationBean: {
            lng: '121.446274438124',
            gridHash: 'a18g5ggfj',
            lat: '31.2020068468886',
          },
          allCount: 322,
          workCount: 221,
        },
        {
          homeCount: 228,
          locationBean: {
            lng: '121.448491492813',
            gridHash: 'a18g3y1em',
            lat: '31.1964446636132',
          },
          allCount: 671,
          workCount: 537,
        },
        {
          homeCount: 87,
          locationBean: {
            lng: '121.440729373227',
            gridHash: 'a18g4vqnd',
            lat: '31.1997924734223',
          },
          allCount: 194,
          workCount: 139,
        },
        {
          homeCount: 150,
          locationBean: {
            lng: '121.440729759084',
            gridHash: 'a18g6388d',
            lat: '31.2042390745747',
          },
          allCount: 294,
          workCount: 211,
        },
        {
          homeCount: 146,
          locationBean: {
            lng: '121.43962021735',
            gridHash: 'a18g4vqnc',
            lat: '31.1997941064986',
          },
          allCount: 371,
          workCount: 283,
        },
        {
          homeCount: 340,
          locationBean: {
            lng: '121.439619831472',
            gridHash: 'a18g3n50c',
            lat: '31.1953474889288',
          },
          allCount: 1438,
          workCount: 1152,
        },
        {
          homeCount: 208,
          locationBean: {
            lng: '121.449600560094',
            gridHash: 'a18g55m1n',
            lat: '31.2008892454287',
          },
          allCount: 446,
          workCount: 324,
        },
        {
          homeCount: 240,
          locationBean: {
            lng: '121.442948080461',
            gridHash: 'a18g6r12f',
            lat: '31.2064589486195',
          },
          allCount: 409,
          workCount: 263,
        },
        {
          homeCount: 256,
          locationBean: {
            lng: '121.441837792974',
            gridHash: 'a18g2qgte',
            lat: '31.1920091974173',
          },
          allCount: 784,
          workCount: 614,
        },
        {
          homeCount: 199,
          locationBean: {
            lng: '121.437401623571',
            gridHash: 'a18g4ju79',
            lat: '31.1986855635184',
          },
          allCount: 442,
          workCount: 316,
        },
        {
          homeCount: 49,
          locationBean: {
            lng: '121.442947405515',
            gridHash: 'a18g4ju7f',
            lat: '31.1986774002432',
          },
          allCount: 112,
          workCount: 83,
        },
        {
          homeCount: 97,
          locationBean: {
            lng: '121.44183885368',
            gridHash: 'a18g6388e',
            lat: '31.2042373899693',
          },
          allCount: 179,
          workCount: 118,
        },
        {
          homeCount: 727,
          locationBean: {
            lng: '121.45181717882',
            gridHash: 'a18g3b8mq',
            lat: '31.1942151140109',
          },
          allCount: 1348,
          workCount: 868,
        },
        {
          homeCount: 206,
          locationBean: {
            lng: '121.442947984028',
            gridHash: 'a18g6e4pf',
            lat: '31.2053473019694',
          },
          allCount: 355,
          workCount: 243,
        },
        {
          homeCount: 316,
          locationBean: {
            lng: '121.43629257088',
            gridHash: 'a18g5ggf8',
            lat: '31.2020219950353',
          },
          allCount: 758,
          workCount: 574,
        },
        {
          homeCount: 477,
          locationBean: {
            lng: '121.438510131467',
            gridHash: 'a18g22qzb',
            lat: '31.1897907753842',
          },
          allCount: 1055,
          workCount: 739,
        },
        {
          homeCount: 243,
          locationBean: {
            lng: '121.444056668583',
            gridHash: 'a18g5ggfg',
            lat: '31.2020105694372',
          },
          allCount: 527,
          workCount: 355,
        },
        {
          homeCount: 254,
          locationBean: {
            lng: '121.446273571174',
            gridHash: 'a18g2qgtj',
            lat: '31.1920019527958',
          },
          allCount: 567,
          workCount: 406,
        },
        {
          homeCount: 250,
          locationBean: {
            lng: '121.448491781651',
            gridHash: 'a18g4vqnm',
            lat: '31.1997796252987',
          },
          allCount: 554,
          workCount: 390,
        },
        {
          homeCount: 90,
          locationBean: {
            lng: '121.440729083877',
            gridHash: 'a18g3y1ed',
            lat: '31.1964575117668',
          },
          allCount: 283,
          workCount: 212,
        },
        {
          homeCount: 178,
          locationBean: {
            lng: '121.44183808221',
            gridHash: 'a18g3n50e',
            lat: '31.1953441712303',
          },
          allCount: 1146,
          workCount: 1024,
        },
        {
          homeCount: 171,
          locationBean: {
            lng: '121.448491396541',
            gridHash: 'a18g3n50m',
            lat: '31.1953330076833',
          },
          allCount: 660,
          workCount: 552,
        },
        {
          homeCount: 69,
          locationBean: {
            lng: '121.441838564349',
            gridHash: 'a18g55m1e',
            lat: '31.2009024406501',
          },
          allCount: 131,
          workCount: 88,
        },
        {
          homeCount: 116,
          locationBean: {
            lng: '121.440729469685',
            gridHash: 'a18g55m1d',
            lat: '31.2009041252598',
          },
          allCount: 206,
          workCount: 130,
        },
        {
          homeCount: 245,
          locationBean: {
            lng: '121.44405657219',
            gridHash: 'a18g55m1g',
            lat: '31.2008989186259',
          },
          allCount: 547,
          workCount: 362,
        },
        {
          homeCount: 476,
          locationBean: {
            lng: '121.449599982591',
            gridHash: 'a18g3b8mn',
            lat: '31.1942193190163',
          },
          allCount: 943,
          workCount: 639,
        },
        {
          homeCount: 430,
          locationBean: {
            lng: '121.439620024403',
            gridHash: 'a18g47xuc',
            lat: '31.197570799751',
          },
          allCount: 931,
          workCount: 644,
        },
        {
          homeCount: 148,
          locationBean: {
            lng: '121.436292474336',
            gridHash: 'a18g55m18',
            lat: '31.2009103442337',
          },
          allCount: 303,
          workCount: 208,
        },
        {
          homeCount: 279,
          locationBean: {
            lng: '121.439619542105',
            gridHash: 'a18g2qgtc',
            lat: '31.1920125151242',
          },
          allCount: 2186,
          workCount: 2022,
        },
        {
          homeCount: 234,
          locationBean: {
            lng: '121.448491877939',
            gridHash: 'a18g55m1m',
            lat: '31.2008912771461',
          },
          allCount: 463,
          workCount: 338,
        },
        {
          homeCount: 404,
          locationBean: {
            lng: '121.446273763802',
            gridHash: 'a18g3b8mj',
            lat: '31.1942252696882',
          },
          allCount: 914,
          workCount: 663,
        },
        {
          homeCount: 64,
          locationBean: {
            lng: '121.442947694754',
            gridHash: 'a18g5ggff',
            lat: '31.2020123557601',
          },
          allCount: 152,
          workCount: 110,
        },
        {
          homeCount: 261,
          locationBean: {
            lng: '121.445164908346',
            gridHash: 'a18g3b8mh',
            lat: '31.1942271557869',
          },
          allCount: 514,
          workCount: 340,
        },
        {
          homeCount: 753,
          locationBean: {
            lng: '121.449600271324',
            gridHash: 'a18g47xun',
            lat: '31.1975542868065',
          },
          allCount: 1347,
          workCount: 905,
        },
        {
          homeCount: 258,
          locationBean: {
            lng: '121.447383331362',
            gridHash: 'a18g5tcvk',
            lat: '31.2031165614821',
          },
          allCount: 506,
          workCount: 320,
        },
        {
          homeCount: 381,
          locationBean: {
            lng: '121.448491589088',
            gridHash: 'a18g47xum',
            lat: '31.1975563185283',
          },
          allCount: 1735,
          workCount: 1488,
        },
        {
          homeCount: 407,
          locationBean: {
            lng: '121.44516539011',
            gridHash: 'a18g4vqnh',
            lat: '31.1997854303213',
          },
          allCount: 809,
          workCount: 535,
        },
        {
          homeCount: 359,
          locationBean: {
            lng: '121.441837985794',
            gridHash: 'a18g3b8me',
            lat: '31.1942325142982',
          },
          allCount: 966,
          workCount: 713,
        },
        {
          homeCount: 289,
          locationBean: {
            lng: '121.445165486474',
            gridHash: 'a18g55m1h',
            lat: '31.2008970821645',
          },
          allCount: 833,
          workCount: 617,
        },
        {
          homeCount: 409,
          locationBean: {
            lng: '121.438510903296',
            gridHash: 'a18g4ju7b',
            lat: '31.1986840347564',
          },
          allCount: 856,
          workCount: 601,
        },
        {
          homeCount: 913,
          locationBean: {
            lng: '121.450708704749',
            gridHash: 'a18g3n50p',
            lat: '31.1953288968458',
          },
          allCount: 1473,
          workCount: 935,
        },
        {
          homeCount: 256,
          locationBean: {
            lng: '121.448491685368',
            gridHash: 'a18g4ju7m',
            lat: '31.1986679724248',
          },
          allCount: 2108,
          workCount: 1935,
        },
        {
          homeCount: 259,
          locationBean: {
            lng: '121.438511385818',
            gridHash: 'a18g6388b',
            lat: '31.2042422887587',
          },
          allCount: 570,
          workCount: 403,
        },
        {
          homeCount: 409,
          locationBean: {
            lng: '121.449600175076',
            gridHash: 'a18g3y1en',
            lat: '31.1964426318899',
          },
          allCount: 1003,
          workCount: 723,
        },
        {
          homeCount: 157,
          locationBean: {
            lng: '121.444056090284',
            gridHash: 'a18g3n50g',
            lat: '31.1953406491919',
          },
          allCount: 394,
          workCount: 283,
        },
        {
          homeCount: 365,
          locationBean: {
            lng: '121.437402009661',
            gridHash: 'a18g5tcv9',
            lat: '31.2031321687832',
          },
          allCount: 713,
          workCount: 477,
        },
        {
          homeCount: 201,
          locationBean: {
            lng: '121.438511289306',
            gridHash: 'a18g5tcvb',
            lat: '31.2031306400266',
          },
          allCount: 433,
          workCount: 311,
        },
        {
          homeCount: 311,
          locationBean: {
            lng: '121.43851051735',
            gridHash: 'a18g3b8mb',
            lat: '31.1942374131254',
          },
          allCount: 953,
          workCount: 741,
        },
        {
          homeCount: 378,
          locationBean: {
            lng: '121.444055704831',
            gridHash: 'a18g2dmdg',
            lat: '31.1908940154266',
          },
          allCount: 975,
          workCount: 730,
        },
        {
          homeCount: 228,
          locationBean: {
            lng: '121.43962031383',
            gridHash: 'a18g55m1c',
            lat: '31.2009057583347',
          },
          allCount: 406,
          workCount: 269,
        },
        {
          homeCount: 273,
          locationBean: {
            lng: '121.438510710315',
            gridHash: 'a18g3y1eb',
            lat: '31.1964607259704',
          },
          allCount: 1051,
          workCount: 845,
        },
        {
          homeCount: 415,
          locationBean: {
            lng: '121.447382849792',
            gridHash: 'a18g47xuk',
            lat: '31.1975583022714',
          },
          allCount: 1221,
          workCount: 962,
        },
        {
          homeCount: 290,
          locationBean: {
            lng: '121.438511096293',
            gridHash: 'a18g55m1b',
            lat: '31.2009073394521',
          },
          allCount: 468,
          workCount: 304,
        },
        {
          homeCount: 352,
          locationBean: {
            lng: '121.43851061383',
            gridHash: 'a18g3n50b',
            lat: '31.1953490700533',
          },
          allCount: 2231,
          workCount: 1964,
        },
        {
          homeCount: 265,
          locationBean: {
            lng: '121.440728794562',
            gridHash: 'a18g30d6d',
            lat: '31.1931225409787',
          },
          allCount: 1617,
          workCount: 1431,
        },
        {
          homeCount: 266,
          locationBean: {
            lng: '121.445164812005',
            gridHash: 'a18g30d6h',
            lat: '31.1931154978437',
          },
          allCount: 567,
          workCount: 395,
        },
        {
          homeCount: 605,
          locationBean: {
            lng: '121.449599886354',
            gridHash: 'a18g30d6n',
            lat: '31.1931076610673',
          },
          allCount: 1338,
          workCount: 932,
        },
        {
          homeCount: 151,
          locationBean: {
            lng: '121.441838660789',
            gridHash: 'a18g5ggfe',
            lat: '31.2020140914587',
          },
          allCount: 332,
          workCount: 251,
        },
        {
          homeCount: 153,
          locationBean: {
            lng: '121.44627434178',
            gridHash: 'a18g55m1j',
            lat: '31.2008951960743',
          },
          allCount: 369,
          workCount: 276,
        },
        {
          homeCount: 242,
          locationBean: {
            lng: '121.446274052773',
            gridHash: 'a18g47xuj',
            lat: '31.1975602374652',
          },
          allCount: 902,
          workCount: 755,
        },
        {
          homeCount: 161,
          locationBean: {
            lng: '121.444056283035',
            gridHash: 'a18g47xug',
            lat: '31.1975639600254',
          },
          allCount: 376,
          workCount: 277,
        },
        {
          homeCount: 142,
          locationBean: {
            lng: '121.444056861382',
            gridHash: 'a18g6388g',
            lat: '31.2042338679535',
          },
          allCount: 333,
          workCount: 257,
        },
        {
          homeCount: 179,
          locationBean: {
            lng: '121.446274149105',
            gridHash: 'a18g4ju7j',
            lat: '31.1986718913588',
          },
          allCount: 1088,
          workCount: 980,
        },
        {
          homeCount: 264,
          locationBean: {
            lng: '121.437401720087',
            gridHash: 'a18g4vqn9',
            lat: '31.1997972163781',
          },
          allCount: 471,
          workCount: 317,
        },
        {
          homeCount: 108,
          locationBean: {
            lng: '121.447382657192',
            gridHash: 'a18g3n50k',
            lat: '31.1953349914293',
          },
          allCount: 427,
          workCount: 357,
        },
        {
          homeCount: 448,
          locationBean: {
            lng: '121.44738275349',
            gridHash: 'a18g3y1ek',
            lat: '31.1964466473577',
          },
          allCount: 728,
          workCount: 448,
        },
        {
          homeCount: 242,
          locationBean: {
            lng: '121.445165197392',
            gridHash: 'a18g47xuh',
            lat: '31.1975621235596',
          },
          allCount: 752,
          workCount: 574,
        },
        {
          homeCount: 568,
          locationBean: {
            lng: '121.446273667486',
            gridHash: 'a18g30d6j',
            lat: '31.1931136117435',
          },
          allCount: 1179,
          workCount: 815,
        },
        {
          homeCount: 358,
          locationBean: {
            lng: '121.440728505284',
            gridHash: 'a18g22qzd',
            lat: '31.189787561164',
          },
          allCount: 849,
          workCount: 614,
        },
        {
          homeCount: 126,
          locationBean: {
            lng: '121.448492070526',
            gridHash: 'a18g5tcvm',
            lat: '31.2031145777462',
          },
          allCount: 240,
          workCount: 162,
        },
        {
          homeCount: 420,
          locationBean: {
            lng: '121.445165293749',
            gridHash: 'a18g4ju7h',
            lat: '31.1986737774518',
          },
          allCount: 1069,
          workCount: 818,
        },
        {
          homeCount: 128,
          locationBean: {
            lng: '121.440729276773',
            gridHash: 'a18g4ju7d',
            lat: '31.1986808205584',
          },
          allCount: 306,
          workCount: 228,
        },
        {
          homeCount: 227,
          locationBean: {
            lng: '121.442947598337',
            gridHash: 'a18g55m1f',
            lat: '31.2009007049502',
          },
          allCount: 541,
          workCount: 368,
        },
        {
          homeCount: 171,
          locationBean: {
            lng: '121.440728987435',
            gridHash: 'a18g3n50d',
            lat: '31.195345855847',
          },
          allCount: 862,
          workCount: 737,
        },
        {
          homeCount: 406,
          locationBean: {
            lng: '121.44294701992',
            gridHash: 'a18g3b8mf',
            lat: '31.1942307785898',
          },
          allCount: 815,
          workCount: 555,
        },
        {
          homeCount: 645,
          locationBean: {
            lng: '121.44183769657',
            gridHash: 'a18g2dmde',
            lat: '31.1908975374763',
          },
          allCount: 1350,
          workCount: 949,
        },
        {
          homeCount: 243,
          locationBean: {
            lng: '121.439620410314',
            gridHash: 'a18g5ggfc',
            lat: '31.2020174091404',
          },
          allCount: 472,
          workCount: 348,
        },
        {
          homeCount: 776,
          locationBean: {
            lng: '121.447382560898',
            gridHash: 'a18g3b8mk',
            lat: '31.19422333449',
          },
          allCount: 1258,
          workCount: 821,
        },
        {
          homeCount: 433,
          locationBean: {
            lng: '121.437401237544',
            gridHash: 'a18g3b8m9',
            lat: '31.1942389418929',
          },
          allCount: 2714,
          workCount: 2430,
        },
        {
          homeCount: 271,
          locationBean: {
            lng: '121.44516500469',
            gridHash: 'a18g3n50h',
            lat: '31.1953388127233',
          },
          allCount: 2016,
          workCount: 1816,
        },
        {
          homeCount: 247,
          locationBean: {
            lng: '121.447383042408',
            gridHash: 'a18g4vqnk',
            lat: '31.1997816090389',
          },
          allCount: 455,
          workCount: 303,
        },
        {
          homeCount: 486,
          locationBean: {
            lng: '121.441837889382',
            gridHash: 'a18g30d6e',
            lat: '31.1931208563592',
          },
          allCount: 1151,
          workCount: 833,
        },
        {
          homeCount: 326,
          locationBean: {
            lng: '121.440729566147',
            gridHash: 'a18g5ggfd',
            lat: '31.2020157760669',
          },
          allCount: 541,
          workCount: 358,
        },
        {
          homeCount: 362,
          locationBean: {
            lng: '121.438510806803',
            gridHash: 'a18g47xub',
            lat: '31.1975723808727',
          },
          allCount: 804,
          workCount: 522,
        },
        {
          homeCount: 214,
          locationBean: {
            lng: '121.447382946098',
            gridHash: 'a18g4ju7k',
            lat: '31.1986699561664',
          },
          allCount: 876,
          workCount: 730,
        },
        {
          homeCount: 313,
          locationBean: {
            lng: '121.438510999792',
            gridHash: 'a18g4vqnb',
            lat: '31.1997956876175',
          },
          allCount: 583,
          workCount: 413,
        },
        {
          homeCount: 146,
          locationBean: {
            lng: '121.439619927935',
            gridHash: 'a18g3y1ec',
            lat: '31.1964591448473',
          },
          allCount: 517,
          workCount: 428,
        },
        {
          homeCount: 638,
          locationBean: {
            lng: '121.437401334045',
            gridHash: 'a18g3n509',
            lat: '31.1953505988194',
          },
          allCount: 2272,
          workCount: 1783,
        },
        {
          homeCount: 172,
          locationBean: {
            lng: '121.442947791175',
            gridHash: 'a18g5tcvf',
            lat: '31.2031240055359',
          },
          allCount: 290,
          workCount: 198,
        },
        {
          homeCount: 74,
          locationBean: {
            lng: '121.44294730911',
            gridHash: 'a18g47xuf',
            lat: '31.1975657463539',
          },
          allCount: 159,
          workCount: 116,
        },
        {
          homeCount: 355,
          locationBean: {
            lng: '121.446273860121',
            gridHash: 'a18g3n50j',
            lat: '31.195336926626',
          },
          allCount: 991,
          workCount: 772,
        },
        {
          homeCount: 252,
          locationBean: {
            lng: '121.44627424544',
            gridHash: 'a18g4vqnj',
            lat: '31.1997835442298',
          },
          allCount: 635,
          workCount: 482,
        },
        {
          homeCount: 1071,
          locationBean: {
            lng: '121.449600078831',
            gridHash: 'a18g3n50n',
            lat: '31.1953309759585',
          },
          allCount: 1772,
          workCount: 1073,
        },
        {
          homeCount: 439,
          locationBean: {
            lng: '121.442946730765',
            gridHash: 'a18g2dmdf',
            lat: '31.1908958017637',
          },
          allCount: 944,
          workCount: 653,
        },
        {
          homeCount: 98,
          locationBean: {
            lng: '121.439620603293',
            gridHash: 'a18g6388c',
            lat: '31.2042407076454',
          },
          allCount: 184,
          workCount: 124,
        },
        {
          homeCount: 386,
          locationBean: {
            lng: '121.444056186657',
            gridHash: 'a18g3y1eg',
            lat: '31.196452305116',
          },
          allCount: 715,
          workCount: 474,
        },
        {
          homeCount: 529,
          locationBean: {
            lng: '121.445165101039',
            gridHash: 'a18g3y1eh',
            lat: '31.1964504686488',
          },
          allCount: 1327,
          workCount: 985,
        },
        {
          homeCount: 408,
          locationBean: {
            lng: '121.445164715668',
            gridHash: 'a18g2qgth',
            lat: '31.1920038388975',
          },
          allCount: 719,
          workCount: 449,
        },
        {
          homeCount: 473,
          locationBean: {
            lng: '121.450708800966',
            gridHash: 'a18g3y1ep',
            lat: '31.1964405527786',
          },
          allCount: 1068,
          workCount: 771,
        },
        {
          homeCount: 370,
          locationBean: {
            lng: '121.445165679216',
            gridHash: 'a18g5tcvh',
            lat: '31.2031203827559',
          },
          allCount: 690,
          workCount: 450,
        },
        {
          homeCount: 441,
          locationBean: {
            lng: '121.442946923531',
            gridHash: 'a18g30d6f',
            lat: '31.1931191206494',
          },
          allCount: 1058,
          workCount: 769,
        },
        {
          homeCount: 496,
          locationBean: {
            lng: '121.439620120875',
            gridHash: 'a18g4ju7c',
            lat: '31.1986824536361',
          },
          allCount: 862,
          workCount: 569,
        },
        {
          homeCount: 304,
          locationBean: {
            lng: '121.445165582843',
            gridHash: 'a18g5ggfh',
            lat: '31.2020087329773',
          },
          allCount: 515,
          workCount: 337,
        },
        {
          homeCount: 209,
          locationBean: {
            lng: '121.449600656358',
            gridHash: 'a18g5ggfn',
            lat: '31.2020008962473',
          },
          allCount: 477,
          workCount: 335,
        },
        {
          homeCount: 777,
          locationBean: {
            lng: '121.44849120401',
            gridHash: 'a18g30d6m',
            lat: '31.193109692795',
          },
          allCount: 1222,
          workCount: 763,
        },
        {
          homeCount: 47,
          locationBean: {
            lng: '121.44183817863',
            gridHash: 'a18g3y1ee',
            lat: '31.1964558271516',
          },
          allCount: 145,
          workCount: 115,
        },
        {
          homeCount: 281,
          locationBean: {
            lng: '121.437401913132',
            gridHash: 'a18g5ggf9',
            lat: '31.2020205190144',
          },
          allCount: 468,
          workCount: 302,
        },
        {
          homeCount: 179,
          locationBean: {
            lng: '121.437401816608',
            gridHash: 'a18g55m19',
            lat: '31.2009088682114',
          },
          allCount: 317,
          workCount: 201,
        },
        {
          homeCount: 298,
          locationBean: {
            lng: '121.442946827146',
            gridHash: 'a18g2qgtf',
            lat: '31.192007461706',
          },
          allCount: 829,
          workCount: 617,
        },
        {
          homeCount: 179,
          locationBean: {
            lng: '121.4385103244',
            gridHash: 'a18g2qgtb',
            lat: '31.1920140962528',
          },
          allCount: 953,
          workCount: 819,
        },
        {
          homeCount: 270,
          locationBean: {
            lng: '121.440728601706',
            gridHash: 'a18g2dmdd',
            lat: '31.1908992220986',
          },
          allCount: 533,
          workCount: 348,
        },
        {
          homeCount: 291,
          locationBean: {
            lng: '121.440728890997',
            gridHash: 'a18g3b8md',
            lat: '31.1942341989163',
          },
          allCount: 1122,
          workCount: 914,
        },
        {
          homeCount: 100,
          locationBean: {
            lng: '121.440729180323',
            gridHash: 'a18g47xud',
            lat: '31.1975691666719',
          },
          allCount: 237,
          workCount: 156,
        },
        {
          homeCount: 269,
          locationBean: {
            lng: '121.444055801189',
            gridHash: 'a18g2qgtg',
            lat: '31.1920056753703',
          },
          allCount: 515,
          workCount: 342,
        },
        {
          homeCount: 143,
          locationBean: {
            lng: '121.441838467913',
            gridHash: 'a18g4vqne',
            lat: '31.1997907888113',
          },
          allCount: 253,
          workCount: 180,
        },
        {
          homeCount: 132,
          locationBean: {
            lng: '121.439620506801',
            gridHash: 'a18g5tcvc',
            lat: '31.2031290589119',
          },
          allCount: 242,
          workCount: 165,
        },
        {
          homeCount: 552,
          locationBean: {
            lng: '121.451817275004',
            gridHash: 'a18g3n50q',
            lat: '31.195326770956',
          },
          allCount: 992,
          workCount: 649,
        },
        {
          homeCount: 223,
          locationBean: {
            lng: '121.437401527058',
            gridHash: 'a18g47xu9',
            lat: '31.1975739096361',
          },
          allCount: 1000,
          workCount: 834,
        },
        {
          homeCount: 82,
          locationBean: {
            lng: '121.44405676498',
            gridHash: 'a18g5tcvg',
            lat: '31.2031222192144',
          },
          allCount: 260,
          workCount: 211,
        },
        {
          homeCount: 211,
          locationBean: {
            lng: '121.438511192797',
            gridHash: 'a18g5ggfb',
            lat: '31.2020189902565',
          },
          allCount: 429,
          workCount: 310,
        },
        {
          homeCount: 325,
          locationBean: {
            lng: '121.44405589755',
            gridHash: 'a18g30d6g',
            lat: '31.1931173343151',
          },
          allCount: 933,
          workCount: 720,
        },
        {
          homeCount: 426,
          locationBean: {
            lng: '121.446274534471',
            gridHash: 'a18g5tcvj',
            lat: '31.2031184966686',
          },
          allCount: 688,
          workCount: 441,
        },
        {
          homeCount: 80,
          locationBean: {
            lng: '121.441838275054',
            gridHash: 'a18g47xue',
            lat: '31.1975674820581',
          },
          allCount: 188,
          workCount: 137,
        },
        {
          homeCount: 109,
          locationBean: {
            lng: '121.441838757233',
            gridHash: 'a18g5tcve',
            lat: '31.203125741233',
          },
          allCount: 205,
          workCount: 140,
        },
        {
          homeCount: 333,
          locationBean: {
            lng: '121.444056475801',
            gridHash: 'a18g4vqng',
            lat: '31.1997872667842',
          },
          allCount: 671,
          workCount: 447,
        },
        {
          homeCount: 744,
          locationBean: {
            lng: '121.446273956445',
            gridHash: 'a18g3y1ej',
            lat: '31.196448582553',
          },
          allCount: 1204,
          workCount: 755,
        },
        {
          homeCount: 176,
          locationBean: {
            lng: '121.440729855558',
            gridHash: 'a18g6e4pd',
            lat: '31.2053507222677',
          },
          allCount: 421,
          workCount: 314,
        },
        {
          homeCount: 119,
          locationBean: {
            lng: '121.447383138722',
            gridHash: 'a18g55m1k',
            lat: '31.2008932608849',
          },
          allCount: 251,
          workCount: 173,
        },
        {
          homeCount: 183,
          locationBean: {
            lng: '121.44294721271',
            gridHash: 'a18g3y1ef',
            lat: '31.196454091446',
          },
          allCount: 399,
          workCount: 269,
        },
        {
          homeCount: 257,
          locationBean: {
            lng: '121.442947887599',
            gridHash: 'a18g6388f',
            lat: '31.2042356542736',
          },
          allCount: 487,
          workCount: 343,
        },
        {
          homeCount: 254,
          locationBean: {
            lng: '121.439619638556',
            gridHash: 'a18g30d6c',
            lat: '31.1931241740633',
          },
          allCount: 1365,
          workCount: 1178,
        },
        {
          homeCount: 220,
          locationBean: {
            lng: '121.449600463833',
            gridHash: 'a18g4vqnn',
            lat: '31.1997775935798',
          },
          allCount: 673,
          workCount: 542,
        },
        {
          homeCount: 248,
          locationBean: {
            lng: '121.444056379416',
            gridHash: 'a18g4ju7g',
            lat: '31.1986756139161',
          },
          allCount: 494,
          workCount: 346,
        },
        {
          homeCount: 154,
          locationBean: {
            lng: '121.44849197423',
            gridHash: 'a18g5ggfm',
            lat: '31.2020029279633',
          },
          allCount: 333,
          workCount: 233,
        },
      ],
      gridCount: 153,
      homeCountSum: 45922,
    },
    success: true,
    message: 'success',
  }

  const latlngs = res.data.gridCountVos.map((it) => [
    it.locationBean.lat,
    it.locationBean.lng,
  ])

  latlngs.forEach((latlng) => {
    const [lat, lng] = latlng
    L.circleMarker(L.latLng(lat, lng), { radius: 1 }).addTo(map)
  })

  const data = latlngs.map((latlng) => {
    const [lat, lng] = latlng
    return {
      geometry: {
        type: 'Point',
        coordinates: [lng, lat],
      },
    }
  })
  const layer = new StandardGrid(map, data, {}, console.log)
  layer.draw()
  layer.fitBounds()

  const polygons = {
    properties: {},
    geometry: {
      type: 'MultiPolygon',
      coordinates: [
        [
          [
            [121.448902, 31.204737],
            [121.448935, 31.204602],
            [121.44904, 31.204212],
            [121.449146, 31.203771],
            [121.449167, 31.203683],
            [121.449174, 31.203653],
            [121.449236, 31.203421],
            [121.449568, 31.202159],
            [121.450021, 31.200843],
            [121.450287, 31.200069],
            [121.450346, 31.199914],
            [121.450365, 31.199811],
            [121.45036, 31.199669],
            [121.450461, 31.199166],
            [121.450504, 31.198786],
            [121.450558, 31.197955],
            [121.450917, 31.196968],
            [121.451341, 31.196225],
            [121.452452, 31.194504],
            [121.452448, 31.194491],
            [121.452296, 31.194432],
            [121.45208, 31.194339],
            [121.451648, 31.194107],
            [121.451466, 31.194003],
            [121.451255, 31.193896],
            [121.451049, 31.193786],
            [121.45083, 31.19367],
            [121.450418, 31.193452],
            [121.450304, 31.193386],
            [121.449693, 31.193054],
            [121.449473, 31.192929],
            [121.449228, 31.19279],
            [121.449107, 31.192721],
            [121.448726, 31.192503],
            [121.447213, 31.191636],
            [121.44701, 31.191543],
            [121.446329, 31.191311],
            [121.446066, 31.191219],
            [121.445869, 31.191147],
            [121.4458, 31.191122],
            [121.445703, 31.19109],
            [121.445637, 31.191062],
            [121.445406, 31.190985],
            [121.445167, 31.190903],
            [121.44491, 31.190821],
            [121.444699, 31.190754],
            [121.44409, 31.190536],
            [121.443996, 31.190504],
            [121.443902, 31.190475],
            [121.443628, 31.19038],
            [121.443229, 31.190239],
            [121.443181, 31.190224],
            [121.442685, 31.190068],
            [121.44218, 31.189907],
            [121.442068, 31.189882],
            [121.441892, 31.189839],
            [121.441507, 31.189764],
            [121.441469, 31.189756],
            [121.441439, 31.189754],
            [121.441099, 31.189683],
            [121.440754, 31.189621],
            [121.440527, 31.189579],
            [121.440187, 31.189521],
            [121.439447, 31.189391],
            [121.439277, 31.189358],
            [121.43909, 31.189322],
            [121.438438, 31.189198],
            [121.438419, 31.189195],
            [121.438192, 31.189151],
            [121.437906, 31.189105],
            [121.437406, 31.189039],
            [121.437541, 31.189442],
            [121.437881, 31.190451],
            [121.438109, 31.191244],
            [121.438177, 31.191479],
            [121.438213, 31.191531],
            [121.438235, 31.191576],
            [121.438248, 31.191615],
            [121.438292, 31.191746],
            [121.438292, 31.191747],
            [121.438446, 31.192204],
            [121.438447, 31.192209],
            [121.438552, 31.192524],
            [121.438647, 31.192808],
            [121.438652, 31.192824],
            [121.438823, 31.193336],
            [121.43866, 31.193781],
            [121.43845, 31.193885],
            [121.436615, 31.193525],
            [121.436126, 31.195248],
            [121.438084, 31.195714],
            [121.438043, 31.195861],
            [121.437919, 31.196269],
            [121.437841, 31.196467],
            [121.437774, 31.196665],
            [121.437716, 31.196836],
            [121.437661, 31.197009],
            [121.437609, 31.197101],
            [121.437562, 31.197189],
            [121.437516, 31.197295],
            [121.437437, 31.19744],
            [121.437411, 31.197492],
            [121.437183, 31.197894],
            [121.436961, 31.198306],
            [121.436896, 31.198466],
            [121.436831, 31.198639],
            [121.43678, 31.198774],
            [121.436768, 31.198799],
            [121.43673, 31.198945],
            [121.436708, 31.199028],
            [121.436684, 31.199125],
            [121.436611, 31.199403],
            [121.436551, 31.199663],
            [121.436534, 31.199747],
            [121.43649, 31.199967],
            [121.436376, 31.200466],
            [121.436354, 31.200567],
            [121.436328, 31.20062],
            [121.436322, 31.200672],
            [121.436286, 31.200835],
            [121.436278, 31.200835],
            [121.43627, 31.200844],
            [121.436264, 31.200862],
            [121.436253, 31.200899],
            [121.436237, 31.200945],
            [121.436178, 31.201037],
            [121.436151, 31.201166],
            [121.436121, 31.201253],
            [121.436096, 31.2013],
            [121.436071, 31.201353],
            [121.436036, 31.201408],
            [121.436, 31.201472],
            [121.435952, 31.201537],
            [121.435904, 31.201607],
            [121.435823, 31.201701],
            [121.435782, 31.201738],
            [121.435765, 31.201771],
            [121.435722, 31.201859],
            [121.435704, 31.201856],
            [121.435625, 31.201944],
            [121.435606, 31.201956],
            [121.435597, 31.201978],
            [121.435588, 31.201982],
            [121.435569, 31.202007],
            [121.435522, 31.202058],
            [121.435522, 31.20207],
            [121.435501, 31.202091],
            [121.435454, 31.202132],
            [121.435326, 31.202283],
            [121.43573, 31.202511],
            [121.435741, 31.202517],
            [121.436773, 31.203171],
            [121.437043, 31.203338],
            [121.437044, 31.203338],
            [121.437946, 31.203917],
            [121.438418, 31.204219],
            [121.438905, 31.204529],
            [121.439192, 31.204715],
            [121.439515, 31.204922],
            [121.439962, 31.205203],
            [121.440093, 31.205288],
            [121.440397, 31.205486],
            [121.440577, 31.205602],
            [121.441052, 31.205909],
            [121.441569, 31.206237],
            [121.441607, 31.206266],
            [121.44189, 31.206445],
            [121.44211, 31.206583],
            [121.443418, 31.207439],
            [121.443506, 31.207315],
            [121.44354, 31.207249],
            [121.443587, 31.207159],
            [121.443902, 31.206547],
            [121.443948, 31.206457],
            [121.444143, 31.206075],
            [121.444529, 31.205314],
            [121.444977, 31.204453],
            [121.445094, 31.204224],
            [121.445238, 31.20394],
            [121.445438, 31.203548],
            [121.445459, 31.203501],
            [121.445473, 31.203461],
            [121.445486, 31.203354],
            [121.445491, 31.20331],
            [121.445529, 31.203358],
            [121.445669, 31.203541],
            [121.445916, 31.203589],
            [121.446037, 31.203621],
            [121.446158, 31.203657],
            [121.446897, 31.203924],
            [121.447298, 31.204069],
            [121.447541, 31.204147],
            [121.447635, 31.204182],
            [121.447754, 31.204233],
            [121.44786, 31.204274],
            [121.44795, 31.204311],
            [121.448085, 31.204366],
            [121.448133, 31.204386],
            [121.448306, 31.204463],
            [121.448469, 31.204541],
            [121.448811, 31.204696],
            [121.448902, 31.204737],
          ],
        ],
      ],
    },
  }

  L.geoJSON(polygons.geometry)
    .getLayers()[0]
    .addTo(map)
}

function wfsXML() {
  const xml = new WfsCql({
    workspace: 'workspace',
    layerName: 'layerName',
    conditions: [
      {
        type: WfsCql.QUERY_CONDITION_TYPE.CROSS_LAYER_QUERY,
        layerName: 'polygon_id',
        rangeString: 'INCLUDE',
      },
      {
        type: WfsCql.QUERY_CONDITION_TYPE.CROSS_LAYER_QUERY,
        layerName: 'polygon_id2',
        rangeString: '1,2,3',
      },
      {
        type: WfsCql.QUERY_CONDITION_TYPE.BUFFER_QUERY,
        bufferType: 'Point',
        wkt: '110 50',
        radius: 100,
      },
      {
        type: WfsCql.QUERY_CONDITION_TYPE.BUFFER_QUERY,
        bufferType: 'LineString',
        wkt: '110 50',
        radius: 100,
      },
      {
        type: WfsCql.QUERY_CONDITION_TYPE.POLYGON_QUERY,
        bufferType: 'Polygon',
        wkt: '110 50',
      },
      {
        type: WfsCql.QUERY_CONDITION_TYPE.ATTR_QUERY,
        property: 'name',
        operation: 'in',
        values: [1, 2, 3],
      },
      {
        type: WfsCql.QUERY_CONDITION_TYPE.ATTR_QUERY,
        property: 'value',
        operation: 'between',
        values: [1, 3],
      },
    ],
  })
  console.log(xml.toXMLStr())
}

wfsXML()
