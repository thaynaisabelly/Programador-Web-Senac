function calcular()
{
    var testeV = window.document.querySelector('input#testeV');
    var CalcularM = window.document.querySelector('div#CalcularM');
    var vel = Number(testeV.value)
    CalcularM.innerHTML = 
        `<p>
            Sua velocidade atual é de <strong>${vel} km/h</strong>
        </p>`

        if (vel > 70) 
        {
            CalcularM.innerHTML +=  `<p>Você está <strong>Multado</strong> por excesso de velocidade</p>`
        }
        else /* if (vel <= 70) */
        {
            CalcularM.innerHTML += `<p>Parabéns você está na velocidade correta!</p>`
        }
    CalcularM.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
 }            
