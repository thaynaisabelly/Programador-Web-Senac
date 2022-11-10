function media()
{
    var nome = window.prompt(`Qual é o nome do aluno?`)
    var n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    var n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    med = (n1 + n2)/2
    var msg  /* Criar uma variável e deixa ela vazia */
    if (med >= 6) 
    { // Se por acaso a média for 6 ou mais..
        msg = `Meus parabéns!`
    }
    else
    { // senão...
        msg = `Estude um pouco mais!`
    }
    var res = document.getElementById(`situação`)
    res.innerHTML = 
        `<p>
            Calculando a média final de <mark>${nome}</mark>.        
        </p>`
    res.innerHTML +=    
        `<p>
            As notas obtidas foram <mark>${n1} e ${n2}</mark>.
        </p>`
    res.innerHTML +=
        `<p>
            A média final será <mark>${med}</mark>.
        </p>`
    res.innerHTML +=
        `<p>
            A mensagem que temos é: <strong>${msg}</strong>
        </p>`
}