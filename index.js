$('#submit').click(function(event){
    event.preventDefault('')
    mostraImagem()
})

function mostraImagem() {
    const keyPessoal = 'kwfP9ISXQLFnixhVJoHZG8PMC0OMncBUFTEcsSYJ';
    const data = $('#data').val()

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${keyPessoal}&date=${data}`,
        success: function (resposta) {
            if (resposta.media_type == 'image') {
                console.log("Oi mundo")
            } else if (resposta.media_type == 'video') {
                console.log("Tchau mundo")
            }
        }
    })
}
