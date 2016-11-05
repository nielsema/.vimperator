hints.addMode(
  'h',
  'Yank header',
  function(element) {
	  util.copyToClipboard(element.innerText);
	  liberator.echomsg('yanked: ' + element.innerText);
  },
  function(){
	  return '//*[local-name()="h1" or local-name()="h2" or local-name()="h3"]'
  }
);
