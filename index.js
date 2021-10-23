const pessoas = [];
const cores = ['#db1414', '#2ad111', '#2e36d1', '#e6e625'];

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

    const wrapper = document.querySelector('.pessoas');
    const p = document.createElement('p');
    p.innerHTML = `${pessoa.nome}`;
    p.style.color = `${pessoa.cor}`;
    wrapper.insertAdjacentElement('afterbegin', p);

    const h1 = document.querySelector('.quantidade');
    h1.innerHTML = `Já temos ${pessoas.length} pessoas na classe Hoje!`;

}