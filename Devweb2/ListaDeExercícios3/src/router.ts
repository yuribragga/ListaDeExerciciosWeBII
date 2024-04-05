import express, { Request, Response, Router } from 'express';
import connection from './model';

const router = Router();

router.get('/', (req, res)=>{
    connection.query('SELECT A.ID, B.NOME, A.PRODUTO, A.QUANTIDADE, A.TOTAL FROM PEDIDO A INNER JOIN CLIENTE B ON A.CLIENTE_ID = B.ID;',(err, results)=>{
        if(err){
            console.error('Erro em buscar os funcionarios: '+ err)
            res.status(500).send('Erro ao Buscar Usuários')
            return
        }
        res.render('index',{pedidos: results})
    })
})

export default router;
