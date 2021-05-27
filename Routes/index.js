const express = require('express')
const router = express.Router();
const auth = require('../middlewares/auth')

router.get('/',auth,(req, res) =>{
    return res.send({mensagem:'Informação protegida pelo token'});

})
router.post('/',(req, res)=>{
    return res.send({mensagem:'Metodo POST da raiz em funcionamento'});
})
module.exports = router;