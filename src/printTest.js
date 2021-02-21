import $ from "jquery";
export function printDiv() {
  var newWin = window.open("", "列印視窗");
  newWin.document.open();
  newWin.document.write(
    "<html>" +
      "<head>" +
      '<link rel="stylesheet" href="css/style.css">' +
      "</head>" +
      '<body onload="window.print()">' +
      $("#DivIdToPrint").html() +
      "</body>" +
      "</html>"
  );
  newWin.document.close();
  setTimeout(function () {
    newWin.close();
  }, 10);
}

export function printScreen(printlist) {
  var value = printlist.innerHTML;
  var printPage = window.open("", "Printing...", "");
  printPage.document.open();
  printPage.document.write(
    "<HTML><head></head><BODY onload='window.print();window.close()'>"
  );
  printPage.document.write("<PRE>");
  printPage.document.write(value);
  printPage.document.write("</PRE>");
  printPage.document.close("</BODY></HTML>");
}
