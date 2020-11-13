var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
   var element = elements[i];
   var r = Math.floor(Math.random()*255);
   var g = Math.floor(Math.random()*2);
   var b = Math.floor(Math.random()*5);
   var c = "rgb(" + r + "," + g + "," + b +")";

   element.style.setProperty('background-color',c);
}
