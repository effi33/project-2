var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
   var element = elements[i];
   console.log( element );
   element.style.setProperty('background','linear-gradient(to top, red 0%, blue 100%)');
   element.style.setProperty('color','white');
}
