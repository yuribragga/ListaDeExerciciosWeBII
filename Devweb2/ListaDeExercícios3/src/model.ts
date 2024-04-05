import mysql from 'mysql2';

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root' ,
    password : 'fatec',
    database : 'devwebll'
})

connection.connect((err)=>{
    if(err){
        console.log('Erro ao conectar ao banco de dados', err)
        return
    }
    console.log('Conexão bem sucedida com o banco de dados!')
})

export default connection
