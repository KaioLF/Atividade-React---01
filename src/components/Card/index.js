import { useLocation } from "react-router-dom";
import "./card.css";



const filmes = [{
  "nome": "Questão de Tempo",
  "duracao": "2H03",
  "foto": "qdt.jpeg",
  "ano": 2013,
  "assistido": true,
  "genero": "Romance/Ficção Científica",
  "descricao": "Depois de descobrir que ele pode viajar no tempo, o jovem Tim Lake usa sua habilidade para ganhar o coração da mulher dos seus sonhos e salvar seu amigo de um desastre profissional.",
  "nota": 5
},
{
  "nome": "A Vida Secreta de Walter Mitty",
  "duracao": "1H54",
  "foto": "vswm.jpg",
  "ano": 2014,
  "assistido": true,
  "genero": "Comédia/Aventura",
  "descricao": "Walter Mitty (Ben Stiller) é o responsável pelo departamento de arquivo e revelação de fotografias da tradicional revista Life. Ele é um homem tímido, levando uma vida simples, perdido em seus sonhos. Ao receber um pacote com negativos do importante fotógrafo Sean O'Connell (Sean Penn), ele percebe que está faltando uma foto.",
  "nota": 5
},
{
  "nome": "Senhor dos Anéis: A Sociedade do Anel",
  "duracao": "2H58",
  "foto": "lotr.jpg",
  "ano": 2001,
  "assistido": false,
  "genero": "Ação/Nerd",
  "descricao": "Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. ",
  "nota": 5
}
]

const planos = [
  {
    nome: "Plano Standard",
    preco: "R$ 19,90/MÊS",
    detalhes: "Cancele quando quiser"
  },

  {
    nome: "Plano Plus",
    preco: "29,90/MÊS",
    detalhes: "Cancele quando quiser"
  },

  {
    nome: "Plano Premium+",
    preco: "49,90/MÊS",
    detalhes: "Cancele quando quiser"
  },
];


function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;

  }
  return <p className="item">Não assistido</p>;
  
}

export default function Card() {
  const url = useLocation();
  console.log(url.pathname);

  if(url.pathname==="/"){//caminho da home
    return (
      <div className="container text-center">
        <div className="row">
          {filmes.map((filme, i) => (
            <div className="col" key={i}>
              <div className="card">
                <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                  <p>Sinopse</p>
                  <p className="card-text">{filme.descricao}</p>
                  <p>{filme.duracao}</p>
                  <p>{filme.genero}</p>
                  <p>{filme.nota}</p>
                  <Assitido
                    javisto={filme.assistido}
                  />
                  <a
                    href={`/detalhes/${filme.nome}`}
                  >
                    <div className="btn btn-primary">
                      Detalhes
                    </div>
                  </a>
                </div>
              </div>
  
            </div>
          ))}
        </div>
      </div>
    )
  }
  else if(url.pathname==="/planos"){//caminho dos planos
    return (
      <div>
        {
          <div className="container text-center">
            <div className="row">
              {planos.map((plano, i) => (
                <div className="col" key={i}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        {plano.nome} {" "}
                      </h5>
                      <p>{plano.preco}</p>
                      <p className="card-text">{plano.detalhes}</p>
                      <a href={`/detalhes/${plano.nome}`}>
                        <div className="btn btn-primary">Adquirir</div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    );
  }
  
}