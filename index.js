$('#submit').click(function (event) {
    event.preventDefault('')
    mostraImagem()
})

function mostraImagem() {
    const keyPessoal = 'kwfP9ISXQLFnixhVJoHZG8PMC0OMncBUFTEcsSYJ';
    const data = $('#data').val()
    const nomeDaFoto = $('#nomeDaFoto')
    const imagem = $('#imagem')
    const video = $('#video')
    const descricao = $('#descricao')

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${keyPessoal}&date=${data}`,
        success: function (resposta) {
                if (resposta.media_type == 'image') {
                    imagem.show();
                    video.hide();
                    $('#tituloEDescricao').css('visibility', 'visible')
                    nomeDaFoto.text(resposta.title)
                    descricao.text(resposta.explanation);
                    imagem.attr('src', resposta.url);
                } else {
                    imagem.hide();
                    video.show();
                    $('#tituloEDescricao').css('visibility', 'visible')
                    nomeDaFoto.text(resposta.title)
                    nomeDaFoto.text(resposta.title);
                    descricao.text(resposta.explanation);
                    video.attr('src', resposta.url);
                }
        }
    })
}
