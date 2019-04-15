var i, imgs, pic;
pic=document.getElementById("carousel1");
imgs=["carousel1.png","carousel2.png","carousel3.png"];

var preload= newArray();
for (i=0; i<imgs.length; i++)
{
  preload[ i ]= new Image();
  preload[ i ].src=imgs[ i ];
}

i=0;
rotate();

function rotate()
{
  pic.src = "images/carousel1.png" ; //assign an image url.
  (i === (imgs.length -1) ) ? i=0 : i++; //change counter.
  setTimeout( rotate, 1000);
}
