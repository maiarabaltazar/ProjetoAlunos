document.getElementById('cadastrar').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var matricula = document.getElementById('matricula').value;

fazerRequisicao(1, undefined, nome, matricula);
fazerRequisicao(2, undefined, undefined, undefined);

});


document.getElementById('listar').addEventListener('click', function() {
    fazerRequisicao(2, undefined, undefined, undefined);
});


document.getElementById('cadastrar').addEventListener('click', function() {
    var id = document.getElementById('id').value;
    var nome = document.getElementById('nome').value;
    var matricula = document.getElementById('matricula').value;

fazerRequisicao(3, id, nome, matricula);
fazerRequisicao(2, undefined, undefined, undefined);

});


document.getElementById('cadastrar').addEventListener('click', function() {
    var id = document.getElementById('id').value;

    fazerRequisicao(4, id, undefined, undefined);
    fazerRequisicao(2, undefined, undefined, undefined);

});

function fazerRequisicao(tipo, id, nome, matricula) {
    var url ='http://localhost/ProjetoAlunos/back/index.php?tipo=$(tipo)&'

    if (id != undefined) {
        url += 'id=${id}&';
        
    }

    if (nome != undefined) {
        url += 'nome=${nome}&';
    }

    if (matricula != undefined) {
        url +='matricula=${matricula}&';
    }

    fetch(url, { method: 'get'}).then(function(response) {
        if (tipo == 2) {
            return response.json();
        }
    }).then(function (data) {

        let alunos = data;

        let table = document.getElementsByTagName("table");

        let linhas = "";

        for (var i = 0; i < alunos.length; i++) {
        linhas += "<tr>"
        +       '<td>${alunos[i].id}</td>'
        +       '<td>${alunos[i].nome}</td>'
        +       '<td>${alunos[i].matricula}</td>'
        +   "</tr>"
        }

        table[0].innerHTML = ""

        table[0].innerHTML = "<tr>"
        + "<th>Id</th>"
        + "<th>Nome</th>"
        + "<th>Matricula</th>"
        + "</tr>"
        + linhas;

    }).catch(function(error) {
        console.log(error);
    });

    document.getElementById('id').value = "";
    document.getElementById('nome').value = "";
    document.getElementById('matricula').value = "";

}