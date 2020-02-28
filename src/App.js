import React from 'react';
import './App.css';

function App() {
  return (
    <main>
  <header>
    
    
    <div id='lista-do-header'>
      <div ><img id="logo1" onClick={girar} class="menor"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABi0lEQVRIie2XPUvDQBiA39T6URBc7KBtB4eCg2u3Kh30P+ioQ3+Hiv9B6aCgUHBwE/0DKopOLYibiooKBV0cy+PQROOZXC9nkskHbsi9791zvbuEtyL/GABkgU23ZdOSZoAm3zSBTBriNX6zmrS0CnQDxF2gmpQ0C7QCpB6tRM4bWNJIPRaTEJ8ZiE/jlpYVwSFQAIrAkRIrxymuK5MXfbGSEqubzGn6/tUirNMo11Ssbl/D3eaSiDT65NoD3BtcLI87kzlNf/F4hHXmYxEDUyKSiyDOuWPsAaaBhwjb7PEMzNhKC8CrhdTjBZi0Ee//QepxEDa/oxG/i8hY5BX/5MNxnNGggO5yPQb0dTX5QbHbsGSdWP3gb4vIniZ/V0R2lL4TTX4wQM13VufAMFDRnGcFGAEufH1zNmIHuHZvZ7H/iK9xE8ATcINtLQasoJQ0QBuY9z0vAG0lZxZYtpJqFtMBLoG8266ATqySEPG6e35vbgPYSEM8QK8C8TgmxaJ+kN6/iC1gKBVpXHwCOJj5vRY22EoAAAAASUVORK5CYII="></img></div>
      <div ><h1 id='logo' >Frontfy</h1></div>
      <div ><img class="menor" id="logo2" onClick={ficaDark}src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAABxklEQVRYhe2XMWsUQRhA35yKiKkkQVOlslELYwrFH2BjIYg/wEq0t1UEJY1YieYPCAqxELQR2xMLUQyIliLCIZrOoAiez+I2eNzt7d3uzN4p7Gtn5vvezrf7zQ40NPxnqPPqzll7jETdVFdn7TGEuqyu2eOduvpP7aR6Se36l6/q/Ky9hsgk12btMZJsJ49OK19IGUzdBawAJ4FOCOFByviVURfUG9l7uc21FLGjv0L1HHAXWBgY2oyNDdCKWaxeBtYZlgOYi4k9LvEB9WpRn1MvWMztuuTm1JdZknsj5hxRv48RfJvCp2qJbwJ7xsw5rB6qGL+YrMRX8kqcHXmT8rAWwTHy10sI/lbPTlvwRQlB1S31xDQFOyUFVX+o56cl+LOC4DbP1dPq7knzlT6L1c/A/rLrBvgGvAE+AV16jf5OCOFJZFxQX0fsYBErefmq9MF25DPmsQVs5A1UEXwU55LL4xDCrySR1Jb6KnF5jyeR65M8lVDuflK5PslbCeQ+qvvqEtyhrkfIddSDtcj1Sbbs/ep3i12GaKtLtcoNiC6rTycQ+6BetMSFP/Wtbgk4AxwDFoG9wBfgPfAMaCdrJw0NDQ1p+APzCwYhudj4sQAAAABJRU5ErkJggg=="></img></div>
    </div>
    
    
  </header>
  <section id='container-branco'>
    <h1 id='titulo'>Minhas músicas</h1>
    
    <div id='container-bolinha'>
      <div class="bola">
       
        
         <img id="imagem"src="https://s2.glbimg.com/4wr8yIL0mVk4NGHp_3zSOJsuAbg=/0x0:1700x1135/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/t/I/Kd7bCcT9ufb3MzBojlHQ/imagine-dragons.jpg"></img>
       </div>
    </div>
    <h1 id='nomemusica'>Believer</h1>
    <h1 id='banda'>Imagine Dragons</h1>
    <div id='lista-do-player'>
      <div id='seta1'><img class="menor"id="setacomeco"src="https://img.icons8.com/ios-glyphs/30/000000/skip-to-start.png" onClick={backSong}></img></div>
      <div id='play' class="menor" onClick={girar}><img id="imgplay"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAAhklEQVRIie3VPQoCMRCA0cVS8eeqi62KpYfyDJ5DWBFsbCyejYOiIqzsLIJ5B8hHQjKpqqL4BEvsUGOYGTq722OOUUbo4lWDNSbZoefgNDsUDrfgLDsUTth8FWwZCkesMM4Ohe27NQett9ulXz269MuQfr0jkPZgu5sID6HehupCH99E8Z+uV3tWlymg8/IAAAAASUVORK5CYII="></img></div>
      <div id='seta2'><img  class="menor"id="setafim"src="https://img.icons8.com/ios-glyphs/30/000000/end.png" onClick={nextSong}></img></div>

                

    </div>
  
  </section>
</main>
  );
}



/* <audio controls="controls" name="media">
            <a src="https://drive.google.com/file/d/1XQSeW0P7LdyYQYym79in9AQbmsAq0qCW/view"><source url="https://drive.google.com/file/d/1XQSeW0P7LdyYQYym79in9AQbmsAq0qCW/view" type="audio/mp3"></source></a>
       </audio>*/ 
//JS

const playlist = [
  {
    nome: "Believer",
    artista:"Imagine Dragons",
    capa:"https://s2.glbimg.com/4wr8yIL0mVk4NGHp_3zSOJsuAbg=/0x0:1700x1135/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/t/I/Kd7bCcT9ufb3MzBojlHQ/imagine-dragons.jpg"
  },
  {
    nome: "Good As Gold",
    artista:"Moon Taxi",
    capa:"https://i.pinimg.com/originals/ec/f7/e9/ecf7e95188510e5d376e9f19ee244ee1.jpg"
  },
    {
    nome: "Closer",
    artista:"Lemaitre",
    capa:"https://i.ytimg.com/vi/W7S1cZVLdr4/maxresdefault.jpg"
  },
    {
    nome: "Dancin",
    artista:"Aaron Smith",
    capa:"https://i.ytimg.com/vi/8pm_KoguqPM/maxresdefault.jpg"
  },
    {
    nome: "Já que me ensinou a beber",
    artista:"Barões da Pisadinha",
    capa:"https://img.imirante.com.br/2019/11/30/1575111627-311445061-810x471.JPG"
  }
]

let musicaAtual = 0

const nextSong =() =>{
  
  if((musicaAtual + 1) >= playlist.length)
    musicaAtual = -1
  const titulo = document.querySelector('#banda')
  const subtitulo = document.querySelector('#nomemusica')
  const albumCover = document.querySelector('#imagem')

  musicaAtual = musicaAtual + 1
  let nextSong = playlist[musicaAtual] 

  titulo.innerHTML = nextSong.nome
  subtitulo.innerHTML = nextSong.artista
  albumCover.src = nextSong.capa
}



const backSong = () => {

  const titulo = document.querySelector('#banda')
  const subtitulo = document.querySelector('#nomemusica')
  const albumCover = document.querySelector('#imagem')
  
  if((musicaAtual - 1) < 0)
    return
  
  musicaAtual = musicaAtual - 1
  let backSong = playlist[musicaAtual]
  
  titulo.innerHTML = backSong.nome
  subtitulo.innerHTML = backSong.artista
  albumCover.src = backSong.capa
}






function ficaDark(){

  let pnbranco = document.querySelector('#container-branco')
  let tit = document.querySelector('#titulo')
  let nom = document.querySelector('#nomemusica')
  let band = document.querySelector('#banda')
  let pnplayer = document.querySelector('#lista-do-player')
  let seta2 = document.querySelector('#setafim')
  let seta1 = document.querySelector('#setacomeco')
  let var1 = document.querySelector('#logo2')

  const sol ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABgElEQVRIidWWS07DMBCGJxWIdgErWonSFeImvQEqx4A78LgH3KEcAEjLY9GC0hvAjhUtSDwW/VjElZIosR07UPFL3iTzzzeeKPaI/DcBd8DNMsAAuPprVRbjDQa2gYZvcmAVaNsGt4FPYAK0NHEhcK153wIi4APYsgHXlQET3ACdqBwRsOZiLNyVxh+aCs/9xkEQvIhIV0SGIvKcKegUeADe1RoDJxnAk/J2VS53AfvAjGLNgJ4XpAA610AXmlcGV+3V7TSrKdA05bU5QA5FZL1ErRsiclAiPl/AY4ndLjQ25a2p5GHGGCZidhzq3U0Unpu7qNXOh7+F3y438T/7O6026MKqwrT6Dp60KP87vQKb3mAF72F/gOxVAs3Ap4ad+kNVi4fAWeJZEzgGRsCbWiPgKNle4BwYUPZKJX0tXjoUfaW89vc50EhAqxoEzGMU8bz1rQy60eceuDXAI+CLEnNXB6gbYgD9eEs8RnWsoLayAeu0tLl6xcM7EP/L5O/1AzM0BnlHGDx/AAAAAElFTkSuQmCC"
  const lua ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAABxklEQVRYhe2XMWsUQRhA35yKiKkkQVOlslELYwrFH2BjIYg/wEq0t1UEJY1YieYPCAqxELQR2xMLUQyIliLCIZrOoAiez+I2eNzt7d3uzN4p7Gtn5vvezrf7zQ40NPxnqPPqzll7jETdVFdn7TGEuqyu2eOduvpP7aR6Se36l6/q/Ky9hsgk12btMZJsJ49OK19IGUzdBawAJ4FOCOFByviVURfUG9l7uc21FLGjv0L1HHAXWBgY2oyNDdCKWaxeBtYZlgOYi4k9LvEB9WpRn1MvWMztuuTm1JdZknsj5hxRv48RfJvCp2qJbwJ7xsw5rB6qGL+YrMRX8kqcHXmT8rAWwTHy10sI/lbPTlvwRQlB1S31xDQFOyUFVX+o56cl+LOC4DbP1dPq7knzlT6L1c/A/rLrBvgGvAE+AV16jf5OCOFJZFxQX0fsYBErefmq9MF25DPmsQVs5A1UEXwU55LL4xDCrySR1Jb6KnF5jyeR65M8lVDuflK5PslbCeQ+qvvqEtyhrkfIddSDtcj1Sbbs/ep3i12GaKtLtcoNiC6rTycQ+6BetMSFP/Wtbgk4AxwDFoG9wBfgPfAMaCdrJw0NDQ1p+APzCwYhudj4sQAAAABJRU5ErkJggg=="

  let fimbranco ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAwUlEQVRIie3WsU0DMRhAYQcpVUo2oGcFyswQVoA1CD0rwALZASUKEkxBQwkC6aBIvjS4Pe6/O85C3Kv99CxL9u+URkb+DVjjCact3Gt8YNkmnKlwiUnA/fp2P7uEMyscR90+wvCCeYkw7HGD6dDhzANOSoThDeclwplbzEqEYRMJH4V3VLPXyOK+wncppR+vWSMaHu8rFnXub4S3Br5OOwUekGecRdw+woMPiQoXQbfTWLzHo3YfgSXecRUOj4z8WQ64VKhvwWRA/wAAAABJRU5ErkJggg=="
  let comecobranco ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAxUlEQVRIie3WvY3CMBgGYAsaOiZgBHpqJoA1mILioOemuDWAgooV2IAKJDgJ6aEAGos/R05O6PK2/l49SRTZDqFOnX8TTLHHpEC3izWWReBflxwTeyMcrl1FYClltPEjSqkwetjEaGkwmhjjdA8tBUYHi0dgKTCG2L5Cs8FoYfYOmBtepaDP4Ebq8yS/QSa4H0L4zoXfzbPPhYEqf65ovYN55fB1pvoNJJqtdsuM5rMdEn92LE6ww1eB7u0isEiG69T52JwB6u+ks06P3zMAAAAASUVORK5CYII="
  if(var1.src ==lua){
    pnbranco.style = "background-color: black"
    let bolapreta = document.querySelector(".bola")
    bolapreta.style="background-color:white;box-shadow: 0px 0px 20px  rgba(255,255,255,1.0);"
    tit.style = "color:white;"
    nom.style ="color:white"
    band.style = "color:white" 
    pnplayer.style = "background-color:black"
    seta2.src = fimbranco
    seta1.src = comecobranco

    var1.src =sol


  }else{
    pnbranco.style = "background-color: white"
    let bolapreta = document.querySelector(".bola")
    bolapreta.style="background-color:black;box-shadow: 0px 0px 20px  rgba(0,0,0,1.0);;"
    tit.style = "color:black"
    nom.style ="color:black"
    band.style = "color:black" 
    pnplayer.style = "background-color:white"
    seta2.src = "https://img.icons8.com/ios-glyphs/30/000000/end.png"
    seta1.src = "https://img.icons8.com/ios-glyphs/30/000000/skip-to-start.png"

    var1.src =lua

  }

}
function girar(){

  const play = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAAhklEQVRIie3VPQoCMRCA0cVS8eeqi62KpYfyDJ5DWBFsbCyejYOiIqzsLIJ5B8hHQjKpqqL4BEvsUGOYGTq722OOUUbo4lWDNSbZoefgNDsUDrfgLDsUTth8FWwZCkesMM4Ohe27NQett9ulXz269MuQfr0jkPZgu5sID6HehupCH99E8Z+uV3tWlymg8/IAAAAASUVORK5CYII="
  const pausa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAXklEQVRIie2WQQqAMAwEG19n8f8faPqP8ShoWhAiiO4cwyRzTSnitwAb0DlwoGb5s7BzpWX5NjlEuGAW7tz1l1H4aRRWWGGFFVZY4XeHezDzRD8GqKc/qgFrli++zw7+A5QkY6wawQAAAABJRU5ErkJggg=="
  let foto = document.querySelector(".bola")
  //let cssdafoto = "animation: spin 1000ms infinite linear"

  let imgplay = document.querySelector("#imgplay")

  if(imgplay.src == play){
    // foto.style=cssdafoto
    foto.classList.toggle('capagir');
    imgplay.src=pausa;
  }
  else{
    //foto.style.remove=cssdafoto
    imgplay.src=play
    foto.classList.toggle('capagir');
  }
}



export default App;
