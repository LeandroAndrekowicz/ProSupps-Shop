import React from 'react'
import './Carnitia.css'

const Carnitia = () => {
  return (
    <>
        <div className='container-carnitia'>
            <div className='container-texto-carnitia'>
                <h2><strong>PARA QUE SERVE A L-CARNITINA LÍQUIDA?</strong></h2>
                <p>A L-Carnitina, também chamada de Carnitina e Levocarnitina, é uma amina presente em nosso organismo que tem um papel importante no processo de fornecimento de energia. Estudos apontam que uma das ações executadas por este nutriente é o transporte de ácidos graxos para as mitocôndrias das células; estas mitocôndrias, por sua vez, queimam a gordura, gerando a energia que será utilizada pelo nosso organismo.</p>
                <p>Ao participar da formação de energia durante o exercício, podemos observar até mesmo uma melhora do desempenho dependendo do individuo e das características do treinamento que está sendo realizado.</p>
                <p>A suplementação de L-Carnitina líquida também pode ser uma estratégia interessante no processo de recuperação após a prática de exercícios físicos, já que ela pode ajudar na prevenção de lesões musculares porque ajuda na recuperação muscular.</p>
                <div className='imagens-tela-pequena'>
                    <img src="../carnitia.png" alt="" />
                </div>
            </div>
            <div className='container-imagem-carnitia'>
                <img src="../carnitia.png" alt="" className='imagens-tela-grande' />
            </div>
        </div>
        <div className='container-carnitia2'>
            <div className='container-imagem-carnitia'>
                <img src="../carnitia2.png" alt="" className='imagens-tela-grande' />
            </div>
            <div className='container-texto-carnitia'>
                <h2><strong>L-CARNITINA LÍQUIDA: BENEFÍCIOS PARA A SAÚDE</strong></h2>
                <p>A L-Carnitina líquida não se limita aos benefícios para os praticantes de atividades físicas. É notória a sua capacidade de gerar energia. O que pode auxiliar o desempenho dos atletas e na prevenção da incidência de lesões musculares, beneficiando a performance atlética.</p>
                <p>Pesquisas iniciais sugerem que a ingestão de carnitina pode ter relação com a Fadiga mental e física, relacionando-se com a saúde. Ela também auxilia no ganho de massa muscular e na redução de massa gorda em pessoas da terceira idade.</p>
                <p>Mas não são apenas os idosos que podem se favorecer com a perda de peso. Algumas pesquisas científicas apontam que a perda de peso em adultos pode estar associada ou pode ser melhorada com a suplementação de carnitina.</p>
                <p>Outro aspecto relevante é a sua capacidade de auxiliar na manutenção da saúde do coração. De acordo com pesquisas científicas envolvendo a substância, ela tem potencial para fazer parte da terapia dietética de redução de pressão arterial e combate ao processo inflamatório associado a doenças cardíacas, consulte seu médico.</p>
                <div className='imagens-tela-pequena'>
                    <img src="../carnitia2.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Carnitia