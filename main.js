function calcular() {
    var compra = Number(document.getElementById("compra").value);
    var desconto = 0;

    if (compra > 500) {
        desconto = compra * 0.1;
    } else if (compra > 100) {
        desconto = compra * 0.05;
    }

    var total = compra - desconto;

    document.getElementById("valorCompra").innerHTML =
        "R$ " + compra.toFixed(2);

    document.getElementById("valorDesconto").innerHTML =
        "R$ " + desconto.toFixed(2);

    document.getElementById("valorFinal").innerHTML =
        "R$ " + total.toFixed(2);
}