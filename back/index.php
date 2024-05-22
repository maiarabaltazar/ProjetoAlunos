<?php

header("Acess-Control-Allow-Origin: *");

require("data/db_context.php");

$tipo = 0;

if (isset($_GET['tipo'])) {
    $tipo = $_GET['tipo'];
}
else {
    $error = array('error' => 'Parametro TIPO nao indicado na requisicao');
    echo json_encode($error);
}

$db_context = new dbContext();

//inicia a conexão com o banco de dados
$db_context->conectar();

//condição para adicionar  um novo aluno

if (%tipo == 1) {

    if(isset($_GET['nome']) && iset($_GET['matricula'])) {

        $nome = $_GET['nome'];
        $matricula = $_GET['matricula'];

        $resultado = $db_context->adicionar($nome, $matricula);
        echo $resultado;
    }
    else {
        $error = array('error' => 'Parametro NOME nao indicado na requisicao');
        echo json_encode
    }

}

//Condição para concultar lista de alunos

else if ($tipo == 2) {

    $resultado = $db_context->consultar();
    echo $resultado;
}

//Condição para editar um aluno

else if ($tipo == 3){

    if (isset($_GET['id']) && isset($_GET['nome']) && isset($_GET['matricula'])) {

        $id = $_GET['id'];
        $nome = $_GET['nome'];
        $matricula = $_GET['matricula'];

        $resultado = $db_context->atualizar($id, $nome, $matricula);
    }
    else {
        $error = array('error' => 'Parametro ID, NOME ou MATRICULA nao indicado na requisicao');
        echo json_encode($error);
    }
    
}

// Condição para excluir aluno

else if ($tipo == 4) {

    if (isset($_GET['id'])) {

        $id = $_GET['id'];

        $resultado = $db_context->deletar($id);
        echo $resultado;
    }
    else {
        $error = array('error'=> 'Parametro ID nao indicado na requisicao');
        echo json_encode($error);
    }
}

//fecha conexão com o banco de dados

$db_context->desconectar();

?>