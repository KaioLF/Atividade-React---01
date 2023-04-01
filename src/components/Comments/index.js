const commentarios = [{
    "filme": "Questão de Tempo", "comenatarios": [{
        "usuario": "Kaio",
        "comentario": "Top demais! Chorei muito."
    },
    {
        "usuario": "Kaio",
        "comentario": "Top demais! Chorei muito."
    },
    {
        "usuario": "Kaio",
        "comentario": "Nota 100000!!!!"
    }
    ]
},
{
    "filme": "A Vida Secreta de Walter Mitty", "comenatarios": [{
        "usuario": "Kaio",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "Kaio",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
},
{
    "filme": "Senhor dos Anéis: A Sociedade do Anel", "comenatarios": [{
        "usuario": "Kaio",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "Kaio",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
}
]

export default function Comments({ filme }) {
    const comentariosFilme = commentarios.filter(f =>
        f.filme === filme
    );
    return (
        <div className="container text-center">
            {comentariosFilme[0].comenatarios.map((comment, i) => (
                <div className="row">
                    <div className="col-md-3" key={i.toString()}>
                        {comment.usuario}
                    </div>
                    <div className="col-md-9" key={i.toString()}>
                        {comment.comentario}
                    </div>
                </div>
            ))}
        </div>
    )
}