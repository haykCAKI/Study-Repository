class Produto {

    constructor() {
        //contagem do ID começa no 1
        this.id = 1;
        //array que vai guardar os valores
        this.arrayProdutos = [];
        //array para ser transformado em objeto
        this.editID = null;
    }

    lerDados() {
        let produto = {};

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valorPreco = document.getElementById('preco').value;
        console.log(produto);
        return produto;

    }

    validarCampos(produto) {
        try {
            let msg = '' //msg = '' == true
            if (produto.nomeProduto == '') {
                msg += 'Nome do Produto está vazio \n'
            }
            if (produto.valorPreco == '') {
                msg += 'Preço do Produto está vazio \n'
            }
            if (msg != '') {
                alert(msg)
                return false
            }
            return true
        }
        catch (err) {
            console.error(err)
        }

    }

    listarTabela() {

        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        /*
            <tbody>

            </tbody>
        */

        for (let i = 0; i < this.arrayProdutos.length; i++) {

            //criação da tabela
            /*
            <tbody>
                <tr>
                    <td> ID </td>
                    <td> produto </td>
                    <td> preço </td>
                    <td> ações </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td> 1 </td>
                    <td> Giulia </td>
                    <td> 12  </td>
                    <td> editar, lixo </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td> 2 </td>
                    <td> Herick</td>
                    <td> 123 </td>
                    <td> editar, lixo </td>
                </tr>
            </tbody>


            */

            //insertRow() e insertCell() métodos JS mara o manipulamento de tabelas em HTML.
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_acoes = tr.insertCell();

            //innerText usado para acessar e modificar os conteúdos dentro do HTML;
            //usado para acessar ou definir um texto visivel dentro de um elemento.
            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].valorPreco;

            //classList - método para acessar uma classe dentro do JS
            td_id.classList.add('center');


            let imgEdit = document.createElement('img');
            let imgDelet = document.createElement('img');

            //O método setAttribute é usado para definir ou modificar os atributos de um elemento HTML. Ele aceita dois argumentos: o nome do atributo que você deseja definir/modificar e o valor desse atributo.
            imgEdit.src = 'img/edit.svg';
            imgEdit.setAttribute('onclick', 'produto.preparaEditcao(' + JSON.stringify(this.arrayProdutos[i]) + ')')

            imgDelet.src = 'img/delete.svg';
            imgDelet.setAttribute('onclick', 'produto.delete(' + this.arrayProdutos[i].id + ')');


            //<td><img><td>
            //O método appendChild é usado para adicionar um novo nó (geralmente um elemento HTML) como um filho de outro nó. Ele adiciona o nó ao final da lista de filhos do nó de destino.
            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelet);
        }
    }


    adicionar(produto) {
        produto.valorPreco = parseFloat(produto.valorPreco);
        this.arrayProdutos.push(produto);
        this.id++;
    }

    salvar() {
        let produto = this.lerDados();

        if (this.validarCampos(produto)) {
            if (this.editID == null) {
                this.adicionar(produto)
            } else {
                this.atualizar(this.editID, produto);
            }

        };

        this.listarTabela();
        this.cancelar();

    }

    atualizar(id, produto) {
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].valorPreco = produto.valorPreco;
            }
        }
    }

    preparaEditcao(dados) {
        this.editID = dados.id;

        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('preco').value = dados.valorPreco;

        document.getElementById('btn1').innerText = 'Atualizar';
    }

    cancelar() {
        //value = '' limpa os valores que não gostaríamos de acessar 
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';

        document.getElementById('btn1').innerText = 'Salvar';
        this.editID = null;

    }

    delete(id) {

        if (confirm('Deseja realmente deletar o produto do ID ' + id)) {
            //acessar o tbody
            let tbody = document.getElementById('tbody');
            for (let i = 0; i < this.arrayProdutos.length; i++) {
                //procurar dentro do arrayProdutos o id que vai ser deletado
                if (this.arrayProdutos[i].id == id) {
                    //usando o método splice() = emendar() para mudar o contéudo de uma array dentro do i == arrayProdutos.length
                    //porém ele vai acessar o ID que vai ser deletado, dentro do [i] e sendo apenas 1 elemento por vez para ser deletado. 
                    this.arrayProdutos.splice(i, 1);
                    //deleteRow() = deletarLinha(), método do HTMLtableElement usado para excluir linhas dentro do HTML. 
                    tbody.deleteRow(i);
                }
            }
        }

    }
}


var produto = new Produto();