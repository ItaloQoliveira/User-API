const env = process.env.NODE_env || 'dev';

const config = () =>{
    switch(env){
        case 'dev':
            return{ 
                bdURL: 'mongodb+srv://admin:admin54012@clusterapi.7jaeg.mongodb.net/myDB?retryWrites=true&w=majority',
                tokenPass:'SenhaPadrao'
            }
        case 'prod':
            return{
                //informações diferentes viriam aqui, levando para banco de dado e token que seria utilizado para a aplicação em release
            }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);
module.exports = config();