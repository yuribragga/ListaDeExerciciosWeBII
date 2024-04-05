import express from "express"
import router from './router'

const app = express()

app.set('view engine', 'ejs')

app.use('/', router)

const port = 3000
app.listen(port, ()=>{
 console.log(`Servidor está rodando na porta ${port}`)
})

export default app