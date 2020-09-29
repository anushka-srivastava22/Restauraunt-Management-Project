var i =0;
var images = [];
var time = 3000;
images[0] = 'p2.jpeg';
images[1] = 's12.jpeg';
images[2] = 'm2.jpeg';
images[3] = 's6.jpeg';

function changeImg()
{
    document.slide.src = images[i];

    if(i<images.length-1)
    {
        i++;
    }
    else{
        i=0;
    }

    setTimeout("changeImg()",time);
}
window.onload = changeImg;
