 var html = document.querySelector('html');
 var walker = document.createTreeWalker(html,NodeFilter.SHOW_TEXT);

 var node;
 while (node = walker.nextNode()) {
   node.nodeValue = node.nodeValue.replace(/trump/gi,'Dingus #1');
   node.nodeValue = node.nodeValue.replace(/biden/gi,'Dingus #2');
   node.nodeValue = node.nodeValue.replace(/news/gi,'bullshit, but our lifeline');
   node.nodeValue = node.nodeValue.replace(/good/gi,'insert your own opinion');
   node.nodeValue = node.nodeValue.replace(/bad/gi,'insert your own opinion');
   node.nodeValue = node.nodeValue.replace(/people/gi,'us');
   node.nodeValue = node.nodeValue.replace(/my/gi,'our');
   node.nodeValue = node.nodeValue.replace(/your/gi,'our');
 }
