//var a= parseFloat(document.getElementById("a").value);
//var b= parseFloat(document.getElementById("b").value);
//var c= parseFloat(document.getElementById("c").value);
//var x=(b**2) - 4*a*c;
//if (x > 0) {
//    var x1 = (-b + Math.sqrt(x)) / (2 * a);
 //   var x2 = (-b - Math.sqrt(x)) / (2 * a);
  //  alert("Las soluciones son: x1 = " + x1 + ", x2 = " + x2);
//} else if (x === 0) {
 //   var s = -b / (2 * a);
   // alert("La solución doble es: x = " + s);
//} else {
  //  alert("La ecuación no tiene soluciones reales.");
//}

document.getElementById('calcular').addEventListener('click', function() {

    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    var discriminante = b * b - 4 * a * c;

    if (discriminante > 0) {
        var x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        document.getElementById("res").innerHTML="Las soluciones son: x1 = " + x1 + ", x2 = " + x2;
    } else if (discriminante === 0) {
        var x = -b / (2 * a);
        document.getElementById("res").innerHTML="La solución es: x = " + x;
    } else {
        document.getElementById("res").innerHTML="La ecuación no tiene soluciones reales.";
    }
});

function iter(){
  var a=parseFloat(document.getElementById("sumatoria").value);
  var k=0;
  for (let n=1; n<=a; n++){
    k+=1/(n**2);
  }
  var r=(6*k)**(1/2);
  document.getElementById("res2").innerHTML=r;
}
