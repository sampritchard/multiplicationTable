function multiplicationTable() {
  var result = '\n';
for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        result += (i*j) + ' ';
    }
    result += '\n'
}
return result;
}

window.onload = function() {
var formMultiplication = document.getElementById("form");

 formMultiplication.onclick = function(evt) {
   evt.preventDefault();
  //  var num = document.getElementById("number").value;
   document.getElementById('output').innerHTML = multiplicationTable();
 }
 }
