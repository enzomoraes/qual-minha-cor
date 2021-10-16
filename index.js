const pessoas = [];
const cores = ['#000', '#FFF', '#888', '#444'];

function gerarCor() {
    let pessoa = {
        nome: '',
        cor: '#000000'
    }

    pessoa.nome = document.querySelector('#nome').value;
    pessoa.cor = cores[(pessoas.length % cores.length)];
    pessoas.push(pessoa);
    console.log(`Agora temos ${pessoas.length} pessoas na classe!!`)
    console.log(pessoas);

    let p = document.createElement('p');
    document.append(p);


}