//criando uma função em cima do botão enviar
function enviar(diaDeNascimento, mesDeNascimento, anoDeNascimento) {

    //criação das variaveis que seriam usadas

    var hoje = new Date();
    var diaAtual = hoje.getDate();
    var mesAtual = hoje.getMonth() + 1;
    var anoAtual = hoje.getFullYear();

    var diaDeNascimento = document.getElementById('dia').value;
    var mesDeNascimento = document.getElementById('mes').value;
    var anoDeNascimento = document.getElementById('ano').value;


    var inputDia = document.getElementById('dia');
    var inputMes = document.getElementById('mes');
    var inputAno = document.getElementById('ano');

    var p = document.querySelectorAll('p')
    

    var textoDeErro = document.querySelectorAll('p.erro')


    var idadeEmAnos = anoAtual - anoDeNascimento;
    var idadeEmMeses = mesAtual - mesDeNascimento;
    var idadeEmDias = diaAtual - diaDeNascimento;

    var resultado = document.querySelectorAll('.resultado span')


    // 'se' idade em meses menor que 0 'ou' idade em meses, 'em valor e tipo =' 0 'e' idade em dias menor que 0
    if (idadeEmMeses < 0 || (idadeEmMeses === 0 && idadeEmDias < 0)) {
        idadeEmAnos--;
        idadeEmMeses += 11;

        resultado[0].innerHTML = idadeEmAnos;
        resultado[1].innerHTML = idadeEmMeses;
        resultado[2].innerHTML = idadeEmDias;
        

        if (idadeEmDias < 0) {
            var ultimoDiaDoMesAnterior = new Date(anoAtual, mesAtual - 1, 0).getDate();
            idadeEmDias += ultimoDiaDoMesAnterior;

            resultado[2].innerHTML = idadeEmDias;
        }

        inputDia.style.borderColor = 'hsl(0, 0%, 86%)'
        inputMes.style.borderColor = 'hsl(0, 0%, 86%)'
        inputAno.style.borderColor = 'hsl(0, 0%, 86%)'
        p[0].style.color = 'black'
        p[2].style.color = 'black'
        p[4].style.color = 'black'
        textoDeErro[0].innerHTML = ''
        textoDeErro[1].innerHTML = ''
        textoDeErro[2].innerHTML = ''
    }

    if (idadeEmMeses === 0 && idadeEmDias === 0){
        resultado[0].innerHTML = idadeEmAnos;
        resultado[1].innerHTML = idadeEmMeses;
        resultado[2].innerHTML = idadeEmDias;
    }

    if (anoDeNascimento=== '') {
        inputAno.style.borderColor = 'hsl(0, 100%, 67%)'
        resultado[0].innerHTML = '- -'
        resultado[1].innerHTML = '- -'
        resultado[2].innerHTML = '- -'
        pano.style.color = 'hsl(0, 100%, 67%)'
        textoDeErro[2].innerHTML = 'preenchimento obrigatorio'
    }

    if (mesDeNascimento=== '') {
        inputMes.style.borderColor = 'hsl(0, 100%, 67%)'
        resultado[0].innerHTML = '- -'
        resultado[1].innerHTML = '- -'
        resultado[2].innerHTML = '- -'
        pmes.style.color = 'hsl(0, 100%, 67%)'
        textoDeErro[1].innerHTML = 'preenchimento obrigatorio'
    }

    if (diaDeNascimento=== '') {
        inputDia.style.borderColor = 'hsl(0, 100%, 67%)'
        resultado[0].innerHTML = '- -'
        resultado[1].innerHTML = '- -'
        resultado[2].innerHTML = '- -'
        pdia.style.color = 'hsl(0, 100%, 67%)'
        textoDeErro[0].innerHTML = 'preenchimento obrigatorio'
    }

    if (anoDeNascimento > anoAtual) {
        inputAno.style.borderColor = 'hsl(0, 100%, 67%)'
        pano.style.color = 'hsl(0, 100%, 67%)'
        textoDeErro[2].innerHTML = 'ano invalido'
        resultado[0].innerHTML = '- -'
        resultado[1].innerHTML = '- -'
        resultado[2].innerHTML = '- -'

    }

    if (mesDeNascimento > 12 || (idadeEmAnos<0)) {
        inputMes.style.borderColor = 'hsl(0, 100%, 67%)'
        pmes.style.color = 'hsl(0, 100%, 67%)'
        textoDeErro[1].innerHTML = 'mês invalido'
        resultado[0].innerHTML = '- -'
        resultado[1].innerHTML = '- -'
        resultado[2].innerHTML = '- -'
    }

    if (diaDeNascimento > 31) {
        inputDia.style.borderColor = 'hsl(0, 100%, 67%)'
        pdia.style.color = 'hsl(0, 100%, 67%)'
        textoDeErro[0].innerHTML = 'dia invalido'
        resultado[0].innerHTML = '- -'
        resultado[1].innerHTML = '- -'
        resultado[2].innerHTML = '- -'
    }




}


    // var ultimoDiaDoMesAnterior = new Date(anoAtual, mesAtual - 1, 0).getDate()

    // resultado[0].innerHTML = idadeEmAnos