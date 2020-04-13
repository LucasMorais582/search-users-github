const usuario = {
    nome: "Lucas Morais",
    idade: 23,
    endereco: {
        rua: "Correio do povo",
        numero: 59
    }
}

function mostraNome({ nome }){
    console.log(nome);
}

mostraNome(usuario);

const { nome, idade } = usuario;
console.log(nome, idade);

// *************************************************************************

class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    setAdmin() {
        this.admin = true;
    }

    isAdmin(perfil) {
        if(perfil.admin === true)
            console.log(`O perfil ${perfil.email} é administrador`);
        else
            console.log(`O perfil ${perfil.email} não é administrador`);
    }
}

class Admin extends Usuario {
    
}

const usuario = new Usuario("lucas@piroca", 123456);
const admin = new Admin("bernardo@piroca", 54321);
admin.setAdmin();

usuario.isAdmin(usuario);
admin.isAdmin(admin);

// *************************************************************************

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(element => {
    return element.idade;
});

const funcionarios = usuarios.filter(element => {
    if(element.idade > 18 && element.empresa === 'Rocketseat')
        return element;
});

const find = usuarios.find(element => {
    return element.empresa === 'Google';
})

const idadesDuplicadas = usuarios.map(element => {
     element.idade *= 2;
     return element;
})

const filterIdosos = idadesDuplicadas.filter(element => {
    if(element.idade < 50)
        return element;
})

// *************************************************************************

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }};

const { nome, endereco:{ cidade, estado }} = empresa;

const usuario = {
nome: "Lucas Morais",
idade: 23,
};

function mostraInfo({ nome, idade }) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
}

const response = mostraInfo(usuario);
console.log(response);

// *************************************************************************

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;
console.log(x);
console.log(y);

const usuario = {
        nome: 'Diego',
        idade: 23,
        endereco: {
            cidade: 'Rio do Sul',
            uf: 'SC',
            pais: 'Brasil',
        }
    };

console.log(usuario);

const usuario2 = ({ ...usuario, nome: "Lucas" });
console.log(usuario2);

// *************************************************************************

import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        const response = await axios.get(`https://api.github.com/users/${ username }`);
        console.log(response);
    }
}

Api.getUserInfo('LucasMorais582');