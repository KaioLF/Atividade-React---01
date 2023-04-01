import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import Comments from './../components/Comments/index';

const filmes = [{
    "nome": "Questão de Tempo",
    "genero": "Romance/Ficção Científica",
    "descricao": "Depois de descobrir que ele pode viajar no tempo, o jovem Tim Lake usa sua habilidade para ganhar o coração da mulher dos seus sonhos e salvar seu amigo de um desastre profissional.",
    "nota": 5
},
{
    "nome": "A Vida Secreta de Walter Mitty",
    "genero": "Comédia/Aventura",
    "descricao": "Walter Mitty (Ben Stiller) é o responsável pelo departamento de arquivo e revelação de fotografias da tradicional revista Life. Ele é um homem tímido, levando uma vida simples, perdido em seus sonhos. Ao receber um pacote com negativos do importante fotógrafo Sean O'Connell (Sean Penn), ele percebe que está faltando uma foto.",
    "nota": 5
},
{
    "nome": "Senhor dos Anéis: A Sociedade do Anel",
    "genero": "Ação/Nerd",
    "descricao": "Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal.",
    "nota": 5
}
]


function Detalhes() {
    const { filme } = useParams();

    const filmeEscolhido = filmes.filter(f =>
        f.nome === filme
    );

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="" />
            <div className="container text-center">
                <p>Filme: {filmeEscolhido[0].nome}</p>
                <div>
                    <p>{filmeEscolhido[0].descricao}</p>
                    <p>{filmeEscolhido[0].genero}</p>
                </div>
                <Comments filme={filmeEscolhido[0].nome} />
            </div>
        </div>
    )
}

export default Detalhes;