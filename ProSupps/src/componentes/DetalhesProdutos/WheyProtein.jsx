import React from 'react'
import './WheyProtein.css'

export const WheyProtein = () => {
  return (
    <>
        <div className='container-whey-protein'>
            <div className='container-texto-whey-protein'>
                <h2><strong>O QUE É WHEY PROTEIN?</strong></h2>
                <p>Whey Protein é um suplemento proteico feito a partir da proteína extraída do soro do leite, composta principalmente por alfa-globulina e beta-globulina. O produto possui aminoácidos essenciais que são rapidamente absorvidos pelo corpo, substâncias que participam de forma ativa na construção de músculos e tecidos.</p>
                <p>Para ser consumido, o Whey passa por um processo de industrialização que dá a consistência de pó. Como o seu gosto próprio não é lá muito saboroso, costuma-se adicionar sabores de chocolate, baunilha ou morango. Antes de consumir um produto que contém Whey, é importante ler a lista de ingredientes e checar as quantidades de açúcar refinados presente.</p>
            </div>
            <div className='container-imagem-whey-protein'>
                <img src="../scoop.png" alt="" />
            </div>
        </div>
        <div className='container-whey-protein'>
            <div className='container-imagem-whey-protein'>
                <img src="../suplemento-de-proteina.png" alt="" className='imagem-tela-grande'/>
            </div>
            <div className='container-texto-whey-protein'>
                <h2><strong>COMO TOMAR WHEY PROTEIN</strong></h2>
                <p>O Whey pode ser misturado à água ou ao leite e consumido como líquido, ou adicionado a iogurtes, cookies, bolos ou cereais.</p>
                <p>Importante reforçar que o Whey é um suplemento, portanto, não anula a importância de consumir proteína regularmente na dieta. Além disso, também é preciso ficar atento ao consumo adequado de proteínas, pois quando ingerida em excesso, pode causar danos aos rins. Por isso, nunca utilize um suplemento proteico sem recomendação médica -- principalmente se você já tem problemas renais, como pedras no rim.</p>
                <p>Portanto, tanto a quantidade a ser consumida, quanto a frequência e quando consumir devem ser orientados por um profissional de saúde de acordo com as condições de saúde, os objetivos e os hábitos da pessoa em questão.</p>
            </div>
            <div className='imagem-tela-pequena'>
                <img src="../suplemento-de-proteina.png" alt=""/>
            </div>
        </div>
        <div className='container-whey-protein-secondary'>
            <div className='container-texto-secondary'>
                <h2><strong>BENEFÍCIOS DO WHEY PROTEIN</strong></h2>
                <p>O whey protein isolado acaba sendo um dos suplementos mais escolhidos pelos atletas, e não é à toa. Veja aqui quais são os possíveis benefícios do whey protein isolado</p>
                <div className='container-lista'>
                    <div className='first-column'>
                        <ul>
                            <li>Fortalecimento do sistema imune</li>
                            <li>Ganho de massa muscular</li>
                            <li>Fortalecimento da saúde óssea</li>
                            <li>Favorecimento do emagrecimento</li>
                            <li>Recuperação do tecido muscular</li>
                        </ul>
                    </div>
                    <div className='secondary-column'>
                        <ul>
                            <li>Combate aos radicais livres</li>
                            <li>Auxílio na absorção do zinco</li>
                            <li>Melhora do humor</li>
                            <li>Redução do risco cardíaco</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container-imagem-secondary'>

            </div>
        </div>
    </>
  )
}
