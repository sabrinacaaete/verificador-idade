function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#resultado')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radgenero')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'assets/criança-homem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'assets/jovem-homem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'assets/adulto-homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'assets/idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'assets/criança-mulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'assets/jovem-mulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'assets/adulto-mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'assets/idoso-mulher.png')
            }
        }
        res.innerHTML = `<p>Você é <strong> ${genero}</strong>, com <strong>${idade} anos</strong>.</p>`
        res.appendChild(img)

        //animações
        res.classList.remove('fade-in');
        void res.offsetWidth;
        res.classList.add('fade-in');
    }
}