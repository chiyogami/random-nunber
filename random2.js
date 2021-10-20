'use script';

(function (){ // 即時関数で囲んでグローバル変数を消すため、この行はこのままで

  // 流れる文字の指定。文字を順番に"●",と区切って、いくつでも並べる。最後の]の前には,(カンマ)無し
  var Fnt = ["A","B","C","D","E","a","b","c","d","e"];        
  
  // 流れる文字の変化する色指定。色を順番に"●",と区切って、いくつでも並べる。最後の]の前には,(カンマ)無し
  var Colors = ["#fffded"];
  
  var rota = [0,45,-45];// 文字の回転角度  90で右回りの90度。マイナス指定で左回り。増減可能。不要ならvar rota = [0];で
  var Zx = "1";          // 文章の上に文字が流れるか？　上に流れる：1   下に隠れる：-1
  var num = 10;           // 表示する流れる文字の数
  var minSize = 50;       // １番小さい流れる文字のサイズ。■注意：ブラウザChromeとOperaでは10px未満の文字は全部10pxで表示される
  var maxSize = 100;       // １番大きい流れる文字のサイズ
  var spd = 100;           // 原本100。流れる速さ。小さくするほど速い
  var maxOp = 0.9;        // 透過の最大値。ランダム変化です。0.1から1の間で指定。miniOpより同じか大きくする
  var miniOp = 0.7;       // 透過の最小値。ランダム変化です。0.1から1の間で指定。maxOpより同じか小さくする
  
  // 流れる文字の影指定をCSS形式で記述。白のボカシ指定。好みで変更可。ただし指定するとPC全体が遅くなる。不要なら var ts = ""; で
  var ts = "text-shadow:0px 0px 10px #fffded;";
  
  // 指定ここまで--------------------------------------------------------------------------
  var sx = [],sy = [],sp = [],sz = [], opa = [];// 追加有り
  var len = Fnt.length, i = 0;
  var w = window.innerWidth + maxSize; var h = window.innerHeight + maxSize;
  var sss = "";
  for(i = 0; i < num; i++){
  sx[i] = Math.floor(Math.random() * w);
  sy[i] = Math.floor(Math.random() * h);
  sp[i] = Math.floor(Math.random() * 6) + 2;// 修正
  sz[i] = Math.floor(Math.random() * (maxSize - minSize) + minSize);
  opa[i] = Math.random() * (maxOp - miniOp) + miniOp;// 追加
  var rrd = rota[Math.floor(Math.random() * rota.length)];// 追加
  sss += "<span id='fn"+i+"' class='font1' style='transform:rotate("+rrd+"deg); "+ts+"'>" + Fnt[i%len] + "</span>";
  }
  document.write(sss);
  function moveShow(){
  for(i = 0; i < num; i++){
  sy[i] += sp[i];
  if(sy[i] > h){sy[i] = 0;}// ■-10を0へ
  var clr = Colors[Math.floor(Math.random() * Colors.length)];
  var ob = document.getElementById("fn"+i).style; 
  ob.top = -maxSize + sy[i] + "px"; ob.left = -maxSize + sx[i] + "px"; // ■-maxSizeを追加
  ob.color = clr; ob.fontSize = sz[i] + "px"; ob.zIndex = Zx; ob.opacity = opa[i]; ob.position = "fixed";
  }
  setTimeout(moveShow,spd)
  }
  moveShow();
  
  for(i = 0; i < 26; i++){
    const font = document.getElementById('fn'+i);
    var btn = document.getElementById('font-button');
    btn.addEventListener('click', () => {
      font.classList.toggle('font2');
    });
  }

  randomColor();

}());// 即時関数終了

function randomColor() {
  let test = Math.ceil(10 * Math.random());
  if(test >= 10) {
    //夜に駆ける
    document.documentElement.style.setProperty('--test1-color','#99cccc');
    document.documentElement.style.setProperty('--test2-color','#a8bdc2');
    document.documentElement.style.setProperty('--test3-color','#b8aeb8');
    document.documentElement.style.setProperty('--test4-color','#c79ead');
    document.documentElement.style.setProperty('--test5-color','#d78fa3');
  }else if(test >= 9) {
    //ネオン
    document.documentElement.style.setProperty('--test1-color','#66ffff');
    document.documentElement.style.setProperty('--test2-color','#8cbfe6');
    document.documentElement.style.setProperty('--test3-color','#b380cc');
    document.documentElement.style.setProperty('--test4-color','#d940b3');
    document.documentElement.style.setProperty('--test5-color','#ff0099');
  }else if(test >= 8) {
    //緑
    document.documentElement.style.setProperty('--test1-color','#aadead');
    document.documentElement.style.setProperty('--test2-color','#bbdead');
    document.documentElement.style.setProperty('--test3-color','#ccdead');
    document.documentElement.style.setProperty('--test4-color','#dddead');
    document.documentElement.style.setProperty('--test5-color','#eedead');
  }else if(test >= 7) {
    //草原
    document.documentElement.style.setProperty('--test1-color','#93c5cf');
    document.documentElement.style.setProperty('--test2-color','#99cBc6');
    document.documentElement.style.setProperty('--test3-color','#a0d2be');
    document.documentElement.style.setProperty('--test4-color','#a6d8b5');
    document.documentElement.style.setProperty('--test5-color','#addfad');
  } else if(test >= 6) {
    //虹
    document.documentElement.style.setProperty('--test1-color','#ffbd87');
    document.documentElement.style.setProperty('--test2-color','#ffd791');
    document.documentElement.style.setProperty('--test3-color','#f7e8a6');
    document.documentElement.style.setProperty('--test4-color','#d9e8ae');
    document.documentElement.style.setProperty('--test5-color','#bfe3c0');
  } else if(test >= 5) {
    //快晴
    document.documentElement.style.setProperty('--test1-color','#88abf2');
    document.documentElement.style.setProperty('--test2-color','#8db9f2');
    document.documentElement.style.setProperty('--test3-color','#8dc3f2');
    document.documentElement.style.setProperty('--test4-color','#a0dbf2');
    document.documentElement.style.setProperty('--test5-color','#c9ebf2');
  } else if(test >= 4) {
    //梅雨
    document.documentElement.style.setProperty('--test1-color','#c5c5fc');
    document.documentElement.style.setProperty('--test2-color','#a1bbf0');
    document.documentElement.style.setProperty('--test3-color','#a5e8e6');
    document.documentElement.style.setProperty('--test4-color','#b0f5d9');
    document.documentElement.style.setProperty('--test5-color','#d4fcca');
  }else if(test >= 3) {
    //カラフル
    document.documentElement.style.setProperty('--test1-color','#ef4335');
    document.documentElement.style.setProperty('--test2-color','#f68b36');
    document.documentElement.style.setProperty('--test3-color','#f2cd4f');
    document.documentElement.style.setProperty('--test4-color','#cae081');
    document.documentElement.style.setProperty('--test5-color','#88eed0');
  }else if(test >= 2) {
    //夕焼け
    document.documentElement.style.setProperty('--test1-color','#fd7285');
    document.documentElement.style.setProperty('--test2-color','#fd8b7e');
    document.documentElement.style.setProperty('--test3-color','#fca378');
    document.documentElement.style.setProperty('--test4-color','#fcbc71');
    document.documentElement.style.setProperty('--test5-color','#fcd56a');
  }else {
    //夕暮れ
    document.documentElement.style.setProperty('--test1-color','#ff7a24');
    document.documentElement.style.setProperty('--test2-color','#ff6d54');
    document.documentElement.style.setProperty('--test3-color','#f76d75');
    document.documentElement.style.setProperty('--test4-color','#e8728f');
    document.documentElement.style.setProperty('--test5-color','#c97ba5');
  }
}

function copy0() {
  let target = document.getElementById("1").value;
  navigator.clipboard.writeText(target);
}
function copy1() {
  let target = document.getElementById("2").value;
  navigator.clipboard.writeText(target);
}
function copy2() {
  let target = document.getElementById("3").value;
  navigator.clipboard.writeText(target);
}
function copy3() {
  let target = document.getElementById("4").value;
  navigator.clipboard.writeText(target);
}
function copy4() {
  let target = document.getElementById("5").value;
  navigator.clipboard.writeText(target);
}
function copy5() {
  let target = document.getElementById("log").value;
  navigator.clipboard.writeText(target);
}

var empty1 = []
var empty2 = []
var empty3 = []
var empty4 = []
var empty5 = []

function one() {
  var noun1 = noun[Math.floor(Math.random() * noun.length)];
  document.getElementById("1").value = noun1;
  empty1.shift();
  empty1.push(noun1);
  document.getElementById("log").value = empty1.concat(empty2,empty3,empty4,empty5);
}

function two() {
  var ads1 = ads[Math.floor(Math.random() * ads.length)];
  document.getElementById("2").value = ads1;
  empty2.shift();
  empty2.push(ads1);
  document.getElementById("log").value = empty1.concat(empty2,empty3,empty4,empty5);
}

function three() {
  var emo1 = emo[Math.floor(Math.random() * emo.length)];
  document.getElementById("3").value = emo1;
  empty3.shift();
  empty3.push(emo1);
  document.getElementById("log").value = empty1.concat(empty2,empty3,empty4,empty5);
}

function four() {
  var patt1 = patt[Math.floor(Math.random() * patt.length)];
  document.getElementById("4").value = patt1;
  empty4.shift();
  empty4.push(patt1);
  document.getElementById("log").value = empty1.concat(empty2,empty3,empty4,empty5);
}

function five() {
  var color1 = color[Math.floor(Math.random() * color.length)];
  document.getElementById("5").value = color1;
  empty5.shift();
  empty5.push(color1);
  document.getElementById("log").value = empty1.concat(empty2,empty3,empty4,empty5);
}
