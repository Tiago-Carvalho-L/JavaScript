function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }
    else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);     
        var genenro = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked){
            genenro = 'Homem';
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imagens/bebeMenino.png');
            }
            else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'imagens/adolescenteHomem.png');
            }
            else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'imagens/adultoHomem.png');
            }
            else {
                // Idoso
                img.setAttribute('src', 'imagens/idosoHomem.png');
            }
        }
        else if (fsex[1].checked){
            genenro = 'Homem';
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imagens/bebeMenina.png');
            }
            else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'imagens/adolescenteMulher.png');
            }
            else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'imagens/adultoMulher.png');
            }
            else {
                // Idoso
                img.setAttribute('src', 'imagens/idosoMulher.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genenro} com ${idade} anos.`;
        res.appendChild(img);
    }
}