console.log('We are ready to replace the images!'); chrome.runtime.onMessage.addListener(replace);
function replace()
{
let filenames = [
"kitten.jpg"
//"kitten2.jpg",
//"kitten3.jpg",
//"kitten4.jpg",
];
let imgs = document.getElementsByTagName('img');
for(imgElt of imgs)
{
let r = Math.floor(Math.random() * filenames.length);
let file = 'images/' + filenames[r];
let url = chrome.extension.getURL(file);
imgElt.src = url;
console.log(url);
}
}
