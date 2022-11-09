function Verificar()
{
    var idade = window.document.querySelector('input#idade');
    var krasi = window.document.querySelector('div#krasi');
    var idad = Number(idade.value)
    krasi.innerHTML = 
        `<p>
            <b>
                ${idad} anos
            </b>
        </p>`

        if (idad < 16)
        {
            krasi.innerHTML += `<p><b>Você não possui idade suficiente para votar<b></p>`
        } 
        else if (idad > 65 )
        {
            krasi.innerHTML +=  `<p>Seu voto é <strong>FACULTATIVO</strong>!</p>`
        }
        else if (idad >= 18)
        {
            krasi.innerHTML +=  `<p>Seu voto é <strong>OBRIGATÓRIO</strong>!</p>`
        }
        else
        {
            krasi.innerHTML += `<p>Seu voto é <strong>FACULTATIVO</strong>!</p>`
        }
  
 }       
 //menor de 16 não vota
 //16 e 17 vota facultativamente
 //maior de 18 vota obrigatóriamente
 //maior de 65 vota facultativamente
