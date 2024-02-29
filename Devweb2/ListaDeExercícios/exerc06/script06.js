const data = prompt('Digite uma data: (Ex: 27/02/2024) ').split('/')
let mesDescricao
switch(data[1]){
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
    default:
        mesDescricao = 'dezembro'
        break
}
alert(`${data[0]} de ${mesDescricao} de ${data[2]}`)