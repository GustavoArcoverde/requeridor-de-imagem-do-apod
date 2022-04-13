$('#submit').click(function(event){
    event.preventDefault('')
    mostraImagem()
})

function mostraImagem() {
    const keyPessoal = 'kwfP9ISXQLFnixhVJoHZG8PMC0OMncBUFTEcsSYJ';
    const data = $('#data').val()
    const nomeDaFoto = $('#nomeDaFoto')
    const imagem = $('#imagem')
    const video = $('#video')

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${keyPessoal}&date=${data}`,
        success: function (resposta) {
            if (resposta.media_type == 'image') {
                imagem.show();
                video.hide()
                nomeDaFoto.text(resposta.title)
                imagem.attr('src', resposta.url);
            } else {
                imagem.hide();
                video.show();
                nomeDaFoto.text(resposta.title);
                video.attr('src', resposta.url);
            }
        }
    })
}
