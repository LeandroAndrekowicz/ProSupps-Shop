import express, { json } from 'express';
export const app = express();
import { createConnection } from 'mysql';
import cors from 'cors';

export const db = createConnection({
    host: "localhost",
    user: "root",
    password: "nene2023",
    database: "Prosupps",
});

app.use(cors());
app.use(json());


//Busca todos produtos

app.get('/products/', (req, res) => {
    let SQL = 'SELECT * FROM Produtos';

    try {
        db.query(SQL, (err, result) =>{
            if(err){
                console.log(err);
            }
            else{
                return res.json(result);
            }
        })
    }
    catch {
        return false;
    }
});

//Busca todos produtos que são creatina

app.get('/products/creatina/', (req, res) =>{
    let SQL = "SELECT * FROM Produtos WHERE categoria = 'creatina';";

    try{
        db.query(SQL, (err, result) =>{
            if(err){
                console.log(err);
            }
            else{
                return res.json(result)
            }
        });
    }
    catch{
        return false;
    }
})

//Busca todos produtos que são prétreino

app.get('/products/pretreino/', (req, res) =>{
    let SQL = "SELECT * FROM Produtos WHERE categoria = 'pretreino';";

    try{
        db.query(SQL, (err, result) =>{
            if(err){
                console.log(err);
            }
            else{
                return res.json(result)
            }
        });
    }
    catch{
        return false;
    }
})

//Usuarios

app.post('/register/', (req, res) =>{
    const {nome} = req.body;
    const {usuario} = req.body;
    const {senha} = req.body;

    let SQL = "INSERT INTO Usuarios (nome, usuario, senha) VALUES (?, ?, MD5(?));"
    try{
        db.query(SQL, [nome, usuario, senha], (err, result) =>{
            if(err){
                console.log(err);
                return res.json(false);
            }
            else{
                return res.json(result)
            }
        },)
    }
    catch{
        return res.json(false);
    }
})


app.get('/users/', (req, res) =>{
    let SQL = "SELECT * FROM Usuarios;"

    db.query(SQL, (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            return res.json(result)
        }
    } )
})



app.listen(8080, () =>{
    console.log('servidor rodando');
})
