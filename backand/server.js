const_express = require('express');
const mysql = require('mysql2');
const cors = require('cors') 

const app = express();

app.use(cors());
app.use(express.json());

//Criar conexão com o banco
const conexão = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        database:'escola2'
    }
);
 
//Criar rota para aluno
app.post("/salvar", (req,res,)=>{
    let nome= req.body.name;
    let idade= req.body.idade;
    
}