function criardata(){
    var datastring = document.getElementById("data").value;
    let partes = datastring.split("/")
    let mesDescricao
    switch(partes[1]){
        case '01':
            mesDescricao = 'janeiro'
            break
        case '02':
            mesDescricao ='fevereiro'
            break
        case '03':
            mesDescricao ='março'
            break
        case '04':
            mesDescricao ='abril'
            break
        case '05':
            mesDescricao ='maio'
            break
        case '06':
            mesDescricao ='junho'
            break
        case '07':
            mesDescricao = 'julho'
            break
        case '08':
            mesDescricao = 'agosto'
            break
        case '09':
            mesDescricao = 'setembro'
            break
        case '10':
            mesDescricao ='outubro'
            break
        case '11':
            mesDescricao ='novembro'
            break
        case '12':
            mesDescricao = 'dezembro'
            break
        default:
            document.getElementById('resultado').innerText = "Inválido";
            return;
    }
    document.getElementById('resultado').innerText = partes[0] + " de " + mesDescricao + " de " + partes[2];
}