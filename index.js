const express = require('express')
const app = express();
const chamadoRoutes = require('./routes/chamadoRoutes')

const PORT = 3000

app.use(express.json())

app.use('/chamado', chamadoRoutes);

app.listen(PORT, function(){
    console.log('servidor rodando na porta' + PORT)

})