function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src="fotomanha.png"
        }else if (hora >= 12 && hora <= 18){
        img.src="fototarde.png"
    } else {
        img.src="fotnoite.png"

    }
}
