require('dotenv').config();

function getEnvVariable(){
    const envVariable = process.env.root;
    console.log('root in .env is = '+envVariable);
}

function helloWorld() {
    const content = 'Hello World!!';
    console.log(content);
}
// helloWorld();
getEnvVariable();