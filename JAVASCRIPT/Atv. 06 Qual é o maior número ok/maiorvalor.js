function Maior()
{
    var n1 = Number(window.prompt('Digíte um número: '))
    var n2 = Number(window.prompt('Digíte um segundo número: '))

    var res = document.querySelector('section#Resultado')
    
    if (n1 > n2)
    {
        res.innerHTML = 
        `<p>
            Analizando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}</strong>
        </p>`
    }
    else if (n1 < n2)
    {
        res.innerHTML =
        `<p>
            Analizando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}</strong>
        </p>`
    }
    else
    {
        res.innerHTML =
        `<p>
            Analizando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são <strong>IGUAIS</strong>
        </p>`
    }
}