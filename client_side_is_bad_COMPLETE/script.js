var result = [];
var split = 4;

function ss(start, end, words){
  
  for(let i = start, j = 0; i < end; i++, j++){
    result[i] = words[j];
  }
}

ss(split*7, split*8, "}");
ss(split*6, split*7, "17e9");
ss(split*5, split*6, "d_91");
ss(split*4, split*5, "s_ba");
ss(split*3, split*4, "nt_i");
ss(split*2, split*3, "clie");
ss(split, split*2, "CTF{");
ss(0, split, "pico");

console.log(result.join(""));