from flask import Flask, request, jsonify
import requests
import json
from dbcrud import inserir_cliente, consultar_cliente, atualizar_cliente, excluir_cliente, exportar_clientes_para_json
from flask import Flask
from flask_cors import CORS
app = Flask(__name__)



# Habilita CORS para todas as rotas
CORS(app)
# API EXTERNA
def buscar_endereco_por_cep(cep):
    try:
        response = requests.get(f"https://viacep.com.br/ws/{cep}/json/", timeout=5)
        response.raise_for_status()  # Levanta exceção para status codes de erro
        dados = response.json()
        
        if "erro" in dados:
            return None
            
        return {
            "endereco": dados.get("logradouro"),
            "bairro": dados.get("bairro"),
            "cidade": dados.get("localidade"),
            "estado": dados.get("uf")
        }
    except requests.exceptions.RequestException:
        return None

# CREATE
@app.route('/cadastro', methods=['POST'])
def cadastrar_cliente():
    data = request.json
    if not data:
        return jsonify({"error": "Dados não fornecidos"}), 400

    cpf = data.get('cpf')
    nome = data.get('nome')
    email = data.get('email')
    cep = data.get('cep')
    senha = data.get('senha')  # Obtendo a senha do corpo da requisição

    # Incluindo a verificação da senha
    if not all([cpf, nome, email, cep, senha]):
        return jsonify({"error": "Campos obrigatórios não fornecidos"}), 400

    endereco_data = buscar_endereco_por_cep(cep)
    if not endereco_data:
        return jsonify({"error": "CEP inválido"}), 400

    # Passando a senha como argumento na chamada da função
    sucesso, mensagem = inserir_cliente(cpf, nome, email, cep, senha)

    if sucesso:
        return jsonify({'message': 'Cliente cadastrado com sucesso!'}), 201
    else:
        return jsonify({'error': mensagem}), 406

#READ
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    if not data:
        return jsonify({"error": "Dados não fornecidos"}), 400

    cpf = data.get('cpf')
    senha = data.get('senha')

    if not all([cpf, senha]):
        return jsonify({"error": "Campos obrigatórios não fornecidos"}), 400

    sucesso, mensagem = consultar_cliente(cpf, senha)
    if sucesso:
        return jsonify({"message": f"Bem-vindo, {mensagem}!"}), 200
    else:
        return jsonify({"error": mensagem}), 401

#UPDATE
@app.route('/atualizar', methods=['PUT'])
def atualizar_cliente_endpoint():
    data = request.json
    if not data:
        return jsonify({"error": "Dados não fornecidos"}), 400

    cpf = data.get('cpf')
    nome = data.get('nome')
    sobrenome = data.get('sobrenome')
    email = data.get('email')
    cep = data.get('cep')

    if not all([cpf, nome, sobrenome, email, cep]):
        return jsonify({"error": "Campos obrigatórios não fornecidos"}), 400

    sucesso, mensagem = atualizar_cliente(cpf, nome, sobrenome, email, cep)
    if sucesso:
        return jsonify({'message': 'Cliente atualizado com sucesso!'}), 200
    else:
        return jsonify({'error': mensagem}), 500

#DELETE
@app.route('/excluir', methods=['DELETE'])
def excluir_cliente_endpoint():
    data = request.json
    if not data:
        return jsonify({"error": "Dados não fornecidos"}), 400

    cpf = data.get('cpf')

    if not cpf:
        return jsonify({"error": "CPF não fornecido"}), 400

    sucesso, mensagem = excluir_cliente(cpf)
    if sucesso:
        return jsonify({'message': 'Cliente excluído com sucesso!'}), 200
    else:
        return jsonify({'error': mensagem}), 500

#EXPORT
@app.route('/exportar', methods=['GET'])
def exportar_para_json():
    sucesso, mensagem = exportar_clientes_para_json()
    if sucesso:
        return jsonify({'message': 'Dados exportados para JSON com sucesso!'}), 200
    else:
        return jsonify({'error': mensagem}), 500


if __name__ == '__main__':
    app.run(debug=True)