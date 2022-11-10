function Votar() //função do botão 
{
    var idade = document.getElementById("input") //var do input idade

    if (idade < 16) //condição menor de 16 não vota
    {
        alert("Você não possui idade suficiente");
    }
    
    else //senão for menor de 16
    {
        if (idade < 18) //condição menor de 18
        {
            alert("Seu voto é facultativo");
        }
    //conclusão: entre 16 e 18 
    }
    if(idade >= 18) //condição maior ou igual de 18 vota
    {
        alert("Seu voto é obrigatório");
    }
    else //senão for 
    {
        if(idade > 65) //condição maior de 65 não é obrigatório
        alert("Seu voto é facultativo");
    }
}

