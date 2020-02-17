var angka1=document.getElementById("angka1");
var angka2=document.getElementById("angka2");
var angka3=document.getElementById("angka3");
var hasil=document.getElementById("hasil");
var nilai;
var a=0;
var b=0;
var c=0;

function ftambah(){
if(document.getElementById("c1").checked){
nilai=document.getElementById("angka1").value;
a=a+parseInt(nilai);}

if(document.getElementById("c2").checked){
nilai=document.getElementById("angka2").value;
b=b+parseInt(nilai);}

if(document.getElementById("c3").checked){
nilai=document.getElementById("angka3").value;
c=c+parseInt(nilai);}

hasil.value = a+b+c;
}

function fkurang(){
if(document.getElementById("c1").checked){
nilai=document.getElementById("angka1").value;
a=a+parseInt(nilai);}

if(document.getElementById("c2").checked){
nilai=document.getElementById("angka2").value;
b=b+parseInt(nilai);}

if(document.getElementById("c3").checked){
nilai=document.getElementById("angka3").value;
c=c+parseInt(nilai);}

hasil.value = a-b-c;
}

function fkali(){
if(document.getElementById("c1").checked){
nilai=document.getElementById("angka1").value;
hasil.value = "Error"
a=a+parseInt(nilai);}

if(document.getElementById("c2").checked){
nilai=document.getElementById("angka2").value;
b=b+parseInt(nilai);}

if(document.getElementById("c3").checked){
nilai=document.getElementById("angka3").value;
c=c+parseInt(nilai);}

hasil.value = a*b*c;
}

function fbagi(){
if(document.getElementById("c1").checked){
nilai=document.getElementById("angka1").value;
a=parseInt(nilai);}

if(document.getElementById("c2").checked){
nilai=document.getElementById("angka2").value;
b=parseInt(nilai);}

if(document.getElementById("c3").checked){
nilai=document.getElementById("angka3").value;
c=parseInt(nilai);}

hasil.value = a/b/c;
}
