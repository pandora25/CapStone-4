var cart = [];
function Collecting1() {
    var x = document.getElementById("Coffee").value;
    document.getElementById("demo0").innerHTML = parseFloat(x);
    cart.push(x);
}
function Collecting2() {
    var y = document.getElementById("Brownrice").value;
    document.getElementById("demo0").innerHTML = parseFloat(y);
    cart.push(y);
}
function Collecting3() {
    var k = document.getElementById("Salmon").value;
    document.getElementById("demo0").innerHTML = parseFloat(k);
    cart.push(k);
}
function Collecting4() {
    var j = document.getElementById("Breads").value;
    document.getElementById("demo0").innerHTML = parseFloat(j);
    cart.push(j);
}
function Collecting5() {
    var r = document.getElementById("Groundturkey").value;
    document.getElementById("demo0").innerHTML = parseFloat(r);
    cart.push(r);
}

function DisplayCount() {
    window.alert(cart.length);
}
function DisplayPrice() {
    var sum = 0;
    for (var i in cart) {
        sum += parseInt(cart[i]);
        document.getElementById("Total").innerHTML = '$'+ parseFloat(sum).toFixed(2);
       // alert('$' + B.toFixed(2));
    }
}