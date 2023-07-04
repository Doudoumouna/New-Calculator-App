function appendOperation(operation) {
  document.getElementById('resultArea').innerHTML += operation;
}
// diese function wird immer aufgerufen, wenn wird auf ein td Element hier klicken

function calculateResult() {
  // um diese function zu benutzen, müssen erstmal eine variable zwischenspeichern erstellen wodurch wir leichter rechnen können
  let container = document.getElementById('resultArea');
  //zweite variable anlegen, um die Eingabetasten zu berechnen
  let result = eval(container.innerHTML);
  container.innerHTML = result;
}

function deleteLast() {
  let container = document.getElementById('resultArea');
  if (container.innerHTML.endsWith('')) {
    //wenn die Zahl mit einer leer zeichen endet
    container.innerHTML = container.innerHTML.slice(0, -3);
    //wenn den Fall ist, löschen wir drei Zeichen
  } else {
    container.innerHTML = container.innerHTML.slice(0, -1);
    // am sonsten löschen nur ein Zeichen
  }
  // hier wird mit slice(0, -1) die lezte Zahl gelöscht z.b 1236 => 123
}
