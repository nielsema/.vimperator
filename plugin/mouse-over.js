hints.addMode(
  'M',
  'mouse over',
  function (elem, count) {
    let evt = elem.ownerDocument.createEvent('MouseEvents');
    evt.initMouseEvent(
      'mouseover',
      true, true,
      elem.ownerDocument.defaultView,
      0, 0, 0, 0, 0,
      false, false, false, false, 0, null
    );
    elem.dispatchEvent(evt);
  },
  function () options.get('hinttags').get()
);

