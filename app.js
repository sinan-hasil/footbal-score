let sayi = 0;
let sayi1 = 0;

let tsSpan = document.getElementById("ts-score");
let fbSpan = document.getElementById("fb-score");
let btn = document.getElementById("arttir");
let btn1 = document.getElementById("arttir1");
let azaltBtn = document.getElementById("azalt");
let azaltBtn1 = document.getElementById("azalt1");


function arttir(){
    sayi++;
    tsSpan.textContent = sayi;
}

btn.addEventListener("click", arttir);

function arttir1(){
    sayi1++;
    fbSpan.textContent = sayi1;
}

btn1.addEventListener("click", arttir1);

function azalt(){
    let eksilt = parseInt(tsSpan.textContent);
    eksilt--;
    tsSpan.textContent = eksilt;
}

azaltBtn.addEventListener("click", azalt);

function azalt1 (){
    let eksilt1 = parseInt(fbSpan.textContent);
    eksilt1--;
    fbSpan.textContent = eksilt1;
}

azaltBtn1.addEventListener("click", azalt1);

let name0 = document.getElementById("name");
let name1 = document.getElementById("name1");
let isimBtn = document.getElementById("isim-btn");
let isimBtn1 = document.getElementById("isim-btn1");

function nameA(){
    let isim = prompt("takım ismi giriniz");

        name0.textContent = isim;
}

isimBtn.addEventListener("click", nameA);

function nameB(){
    let isim1 = prompt("takım ismi giriniz");

    name1.textContent = isim1;
}

isimBtn1.addEventListener("click", nameB);