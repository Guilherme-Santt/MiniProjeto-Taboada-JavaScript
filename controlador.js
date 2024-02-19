function buttonverify(){
    n = document.getElementById("number").value;
    verify = document.getElementById("number").value;

    document.getElementById("View").innerHTML = "";

    if(n == "" || null ){
        document.getElementById("alert").innerHTML = "Digite um número para visualização da taboada";
    }else{
        document.getElementById("alert").innerHTML = "";
        for(m = 1; m <= 10; m++){
            p = document.getElementById("View");
            p.innerHTML += "<th value='" + m * n + "'>" + m + "x" + n +" : "+ m * n + "</th>";
            p.style.fontSize = "35px";
            console.log(m*n)
        }
    }
}
function limpar() {
    document.getElementById("View").innerHTML = "";
}