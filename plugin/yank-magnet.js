hints.addMode(
  'm',
  'Yank magnet link',
  function(element) {
	  util.copyToClipboard(element.href);
	  liberator.echomsg('yanked: ' + element.href);
  },
  function(){ return '//*[contains(@href, "magnet:?")]' }
);
