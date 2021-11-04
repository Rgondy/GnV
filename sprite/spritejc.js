var canvas = document.querySelector('canvas');
var aa = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var img = [];
img.length = 9;

for(var i = 1 ; i < img.length ; i++){
    img[i] = new Image();
    img[i].src = 'Run (' + i.toString() + ').png';

}
var i = 1;
setInterval(function(){
    i++;
    if( i >= 9){
        i = 1;

    }
    aa.drawImage(img[i],300,350,200,200);
    aa.clearRect(300,350,200,200);
    aa.drawImage(img[i],300,350,200,200);
},150)
