const pg = require('pg').Pool;

const pgConnection = new pg({
    host:'localhost',
    user:'postgres',    
    password:'301199',
    database:'Repository2',
    port: 5432
});

pgConnection.connect(err => {
    if(err){
        console.log('Erro: ',err);
        return;
    }else{
        console.log('Db ok');
    }
});

module.exports = pgConnection;