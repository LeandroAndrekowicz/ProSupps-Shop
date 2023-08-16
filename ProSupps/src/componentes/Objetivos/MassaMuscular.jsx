import React from 'react'
import './Objetivos.css'
import Header from '../Header'
import {BiSolidSearchAlt2} from 'react-icons/bi'
import {MdAccountCircle} from 'react-icons/md'
import {BsFillCartFill} from 'react-icons/bs'
import Footer from '../Footer'


const MassaMuscular = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
          <div>
            <div>
              <div className='container-inicio'>
                  <div className='container-inicio-logo'>
                      <a href="/lancamentos">
                          <div className='img-logo' ></div>
                      </a>
                  </div>
                  <div className='container-inicio-input'>
                      <input type="text" className='input' placeholder='Digite o que deseja...'/>
                      <BiSolidSearchAlt2 className='icone-pesquisa'/>
                  </div>
                  <div className='container-inicio-login'>
                      <a href="/" className='container-conta'>
                          <MdAccountCircle className='conta' />
                          <span>Minha conta</span>
                      </a>
                      <a href="/" className='container-carrinho'>
                          <BsFillCartFill className='carrinho'/>
                      </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className='titulo'>
            <h2>SUPLEMENTOS PARA GANHAR MASSA MUSCULAR</h2>
            <div className='risco-centro'>
                <div className='risco'/>
            </div>
        </div>
        <div className='container-objetivo-especifico'>
            <div className='container-texto-objetivo-especifico'>
                <h3>QUAIS SÃO OS MELHORES SUPLEMENTOS PARA GANHO DE MASSA MUSCULAR? SAIBA QUAIS TOMAR!</h3>
                <p>Existem no mercado dezenas de opções de suplementos para ganhar massa muscular, seja para quem está iniciando no mundo fitness quanto para quem já tem anos de experiência com a musculação e afins.</p>
                <p>Mas as pessoas que conhecem pouco sobre esse tipo de produto podem ficar confusas com tantos termos: BCAA, Whey Protein, entre outros. Qual será que realmente faz o efeito esperado e qual você deve usar quando se trata da ideia de ganhar músculos, conseguir um resultado melhor e, claro, sem riscos para a saúde?</p>
                <p>Separamos no texto de hoje algumas opções relacionadas a esse tipo de suplementação e informações relevantes para quem ainda não sabe bem o que esses produtos fazem e se são ou não seguros. Veja abaixo as informações que trouxemos!</p>
                <h3>Devo tomar suplementos para ganhar massa muscular mais rápido ou procuro por alimentos?</h3>
                <p>Essa é uma dúvida bastante comum e que faz com que muitos iniciantes tenham receio de começar uma suplementação. Respondendo a ela, é válido dizer que sim, o suplemento é uma excelente opção, especialmente porque é natural e poderia ser encontrado em alimentos comuns do nosso dia-a-dia, como no soro do leite, por exemplo.</p>
                <p>Porém, as doses são mais concentradas, o que os tornam mais efetivos do que apenas a alimentação em si. Mas, veja: são suplementos e, como o nome indica, devem fazer parte de uma alimentação equilibrada, que seja observada por um nutricionista e que tenha todos as vitaminas e minerais necessários para o corpo.</p>
                <p>Então, <strong>suplementos são seguros</strong>, mas devem ser encarados com são, ou seja, como auxiliares do seu ganho de massa muscular e massa magra, aliados à uma alimentação caseira que seja muito completa e rica.</p>
                <p>Algumas dicas são legais para garantir a segurança da sua suplementação, como:</p>
                <p>- Evite doses exageradas e procure um nutricionista para que ele possa te auxiliar melhor nesse controle. Um treinador físico também é indicado para algumas dicas.</p>
                <p>- Não compre suplementos sem saber a qualidade deles. Evite compras em locais não seguros e de marcas duvidosas. Prefira aqueles que estejam devidamente autorizados para essa comercialização.</p>
                <p>- Em caso de dúvidas, procure um médico.</p>
                <p>No geral, suplementos são seguros, saudáveis e podem ser utilizados por qualquer pessoa. Mas se você ainda não sabe o que funciona para o seu corpo, procure ajuda profissional para ter mais segurança, inclusive na questão alimentar e nos próprios treinos.</p>
                <div className='imagens-tela-pequena'>
                    <img src="../imagensObjetivos/massamuscular1.webp" alt="" />
                </div>
            </div>
            <div className='container-imagem-especifica'>
                <img src="../imagensObjetivos/massamuscular1.webp" alt="" className='imagens-tela-grande' />
            </div>
        </div>
    </div>
  )
}

export default MassaMuscular