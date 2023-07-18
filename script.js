
async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        consultaConvertida = await consultaCEP.json();
        console.log('consultaConvertida', consultaConvertida);
        if(consultaConvertida.erro){
            throw Error('CEP não existente!')
        }
        var cidade = document.getElementById('cidade');
        var endereco = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaConvertida.localidade;
        endereco.value = consultaConvertida.logradouro;
        estado.value = consultaConvertida.uf;
        bairro.value = consultaConvertida.bairro;
        return consultaConvertida;
    }catch (error) {
        mensagemErro.innerHTML = '<p class="erro__texto">CEP inválido</p>';
        console.log('error', error)
    }
}

//buscaEndereco('09951010');

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));