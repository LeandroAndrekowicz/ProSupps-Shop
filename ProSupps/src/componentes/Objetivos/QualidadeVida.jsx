import React from 'react'
import './Objetivos.css'
import Header from '../Header'
import Footer from '../Footer'


const QualidadeVida = () => {
  return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <div>
                    <div className='container-banner-qualidade-de-vida'>
                        <img src="../imagensObjetivos/banner-qualidade-de-vida.jpg" alt="Banner Qualidade de Vida" />
                    </div>
                    <div className='risco-centro'>
                        <div className='risco'/>
                    </div>
                    <div>
                        <div className='container-objetivo-especifico'>
                            <div className='container-texto-objetivo-especifico'>
                                <h3>Melhore seus habitos e aumente sua saúde</h3>
                                <p>De acordo com a Organização Mundial da Saúde, qualidade de vida é “a percepção do indivíduo de sua inserção na vida, no contexto da cultura e sistemas de valores nos quais ele vive e em relação aos seus objetivos, expectativas, padrões e preocupações”. Envolve o bem estar espiritual, físico, mental, psicológico e emocional, além de relacionamentos sociais, como família e amigos e, também, saúde, educação, habitação, saneamento básico e outras circunstâncias da vida.</p>
                                <p>- Alimente-se de maneira saudável</p>
                                <p>- Evite café e bebidas alcoólicas em excesso</p>
                                <p>- Procure dormir 8 horas diárias</p>
                                <p>- Faça atividades esportivas e de lazer regularmente</p>
                                <p>- Administre seu tempo realizando uma atividade de cada vez</p>
                                <h3>Alimentação</h3>
                                <p>- Faça, no mínimo, cinco refeições ao dia <strong>café da manhã, lanche, almoço, lanche e jantar</strong></p>
                                <p>- Coma frutas, legumes e verduras variados diariamente</p>
                                <p>- Evite refrigerantes e salgadinhos</p>
                                <p>- Beba pelo menos dois litros <strong>6 a 8 copos</strong> de água por dia</p>
                                <p>- Evite comer em excesso quando estiver nervoso ou ansioso</p>
                                <div className='imagem-tela-pequena'>
                                    <img src="../imagensObjetivos/qualidade-vida.png" alt=""/>
                                </div>
                            </div>
                            <div className='container-imagem-especifica'>
                                <img src="../imagensObjetivos/qualidade-vida.png" alt="" className='imagens-tela-grande' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
  )
}

export default QualidadeVida