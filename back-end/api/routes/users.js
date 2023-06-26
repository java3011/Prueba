const express = require('express');
const router = express.Router();
const pgConnection = require('../connection/connection');
const jwt = require('jsonwebtoken');

router.get('/', (req,res)=> {
    pgConnection.query('select * from users', (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.post('/signin', (req,res)=>{
    const { userpassword, email } = req.body;
    pgConnection.query('select userpassword,email from users WHERE userpassword=? and email=?', 
    [userpassword,email], 
    (err,rows,fields)=>{
        if(!err){
            if(rows.length > 0){
                let dato = JSON.stringify(rows[0]);
                const token = jwt.sign(dato, 'prueba1');
                res.json({token});
            }else{
                res.json('User not found');
            }      
        }else{
            console.log(err);
        }
    })
})

router.post('/test',verifyToken,(req,res)=>{
    console.log(req.dato);
    res.json('Bad info');
})

function verifyToken(req, res, next){
   if(!req.headers.authorization) return res.status(401).json('No autorizado');

  const token = req.headers.authorization.substr(7);
  if(token !== ''){  
    const content = jwt.verify(token, 'prueba1');   
    req.dato = content;
    next();
 }else{
    res.status(401).json('Token vacio');
 }
}

module.exports = router;