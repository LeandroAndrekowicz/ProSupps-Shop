import express, { json } from 'express';
const app = express();
import { createConnection } from 'mysql';
import cors from 'cors';

const db = createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "prosupps",
});

app.use(cors());
app.use(json());

app.post('/register/', (req, res) =>{
    const {nome} = req.body;
    const {usuario} = req.body;
    const {senha} = req.body;

    let SQL = "INSERT INTO Usuarios (nome, usuario, senha) VALUES (?, ?, ?);"
    try{
        db.query(SQL, [nome, usuario, senha], (err, result) =>{
            if(err){
                console.log(err);
                return res.status(422).json(err);
            }
            else{
                return res.json(result)
            }
        },)
    }
    catch{
        return false;
    }
})


app.get('/users/', (req, res) =>{
    let SQL = "SELECT * FROM Usuarios;"

    db.query(SQL, (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result)
        }
    } )
})

app.listen(8080, () =>{
    console.log('servidor rodando');
})