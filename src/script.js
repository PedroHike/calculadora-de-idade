
function enviar(diaDeNascimento, mesDeNascimento, anoDeNascimento) {


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




    resultado[0].innerHTML = idadeEmAnos;
    resultado[1].innerHTML = idadeEmMeses;
    resultado[2].innerHTML = idadeEmDias;

    if (idadeEmMeses < 0 || idadeEmMeses === 0 && idadeEmDias < 0) {
        idadeEmAnos--;
        idadeEmMeses += 12;

        resultado[0].innerHTML = idadeEmAnos;
        resultado[1].innerHTML = idadeEmMeses;
        console.log("diminuiu 1 ano e somou 12 meses");

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

    if (idadeEmDias < 0 || idadeEmDias < 0 && idadeEmMeses > 0) {
        var ultimoDiaDoMesAnterior = new Date(anoAtual, mesAtual - 1, 0).getDate();
        idadeEmDias += ultimoDiaDoMesAnterior;
        idadeEmMeses--;
        resultado[1].innerHTML = idadeEmMeses;
        resultado[2].innerHTML = idadeEmDias;
        console.log("soma 30 dias e diminui 1 mes");

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

    if (anoDeNascimento === '') {
        inputAno.style.borderColor = 'hsl(0, 100%, 67%)'
        resultado[0].innerHTML = '- -'
        resultado[1].innerHTML = '- -'
        resultado[2].innerHTML = '- -'
        pano.style.color = 'hsl(0, 100%, 67%)'
        textoDeErro[2].innerHTML = 'preenchimento obrigatorio'
    }

    if (mesDeNascimento === '') {
        inputMes.style.borderColor = 'hsl(0, 100%, 67%)'
        resultado[0].innerHTML = '- -'
        resultado[1].innerHTML = '- -'
        resultado[2].innerHTML = '- -'
        pmes.style.color = 'hsl(0, 100%, 67%)'
        textoDeErro[1].innerHTML = 'preenchimento obrigatorio'
    }

    if (diaDeNascimento === '') {
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

    if (mesDeNascimento > 12 || (idadeEmAnos < 0)) {
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
