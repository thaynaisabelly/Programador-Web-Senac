function contagem()
{
    var saída = document.getElementById
    var n1 = Number(document.getElementById('fn1').value)
    var n2 = Number(document.getElementById('fn2').value)
    var cont
    saída.innerHTML += 
        `<h2>
            Contando de ${n1} até ${n2}        
        </h2>`
    if (n1<n2)
    {
        cont = n1
        while (cont <= n2)
        {
            saída.innerHTML += `${cont} &#x1F449;` //https://graphemica.com
            cont ++ //cont = cont + 1
        }
    }
    else if (n2<n21)
    {
        cont = n1
        while (cont >= n2)
        {
            saída.innerHTML += `${cont} &#x1F449;` //https://graphemica.com
            cont --
        }
    }
    else
    {
        saída.innerHTML += `Não é possivel contar, pois os números são iguais`
    }
    saída.innerHTML += `&#x1F3C1`
}