import oracledb
from config import config

def get_db_connection():
    try:
        connection = oracledb.connect(
            user=config["user"],
            password=config["password"],
            dsn=config["dsn"]
        )
        return connection
    except oracledb.DatabaseError as e:
        print(f"Erro ao conectar ao banco de dados Oracle: {e}")
        return None

# Função para inserir um cliente (Create)
def inserir_cliente(cpf, nome, email, cep, senha):
    conn = get_db_connection()
    if conn:
        try:
            with conn.cursor() as cursor:
                query = """INSERT INTO T_CLIENTE (cpf, nome, email, cep,senha)
                           VALUES (:cpf, :nome, :email, :cep, :senha)"""
                cursor.execute(query, {'cpf': cpf, 'nome': nome,  'email': email, 'cep': cep, "senha":senha})
                conn.commit()
                return True, "Deu certo"
        except oracledb.IntegrityError:
            return False, 'CPF já cadastrado'
        except oracledb.Error as e:
            return False, f'Erro ao cadastrar cliente: {e}'
        finally:
            conn.close()
    return False, 'Erro de conexão com o banco de dados'

def consultar_cliente(cpf, senha):
    conn = get_db_connection()
    if conn:
        try:
            with conn.cursor() as cursor:
                query = """SELECT nome FROM T_CLIENTE WHERE cpf = :cpf AND senha = :senha"""
                cursor.execute(query, {'cpf': cpf, 'senha': senha})
                result = cursor.fetchone()
                if result:
                    return True, result[0]
                else:
                    return False, 'CPF ou email incorretos'
        except oracledb.Error as e:
            return False, f'Erro ao consultar cliente: {e}'
        finally:
            conn.close()
    return False, 'Erro de conexão com o banco de dados'

def atualizar_cliente(cpf, nome, sobrenome, email, cep):
    conn = get_db_connection()
    if conn:
        try:
            with conn.cursor() as cursor:
                query = """UPDATE T_CLIENTE SET nome = :nome, sobrenome = :sobrenome, email = :email, cep = :cep
                           WHERE cpf = :cpf"""
                cursor.execute(query, {'cpf': cpf, 'nome': nome, 'sobrenome': sobrenome, 'email': email, 'cep': cep})
                conn.commit()
                return True
        except oracledb.Error as e:
            return False, f'Erro ao atualizar cliente: {e}'
        finally:
            conn.close()
    return False, 'Erro de conexão com o banco de dados'

def excluir_cliente(cpf):
    conn = get_db_connection()
    if conn:
        try:
            with conn.cursor() as cursor:
                query = """DELETE FROM T_CLIENTE WHERE cpf = :cpf"""
                cursor.execute(query, {'cpf': cpf})
                conn.commit()
                return True
        except oracledb.Error as e:
            return False, f'Erro ao excluir cliente: {e}'
        finally:
            conn.close()
    return False, 'Erro de conexão com o banco de dados'

def exportar_clientes_para_json():
    conn = get_db_connection()
    if conn:
        try:
            with conn.cursor() as cursor:
                query = """SELECT * FROM T_CLIENTE"""
                cursor.execute(query)
                result = cursor.fetchall()
                clientes = []
                for row in result:
                    clientes.append({
                        "cpf": row[0],
                        "nome": row[1],
                        "sobrenome": row[2],
                        "email": row[3],
                        "cep": row[4]
                    })
                with open('clientes.json', 'w') as json_file:
                    json.dump(clientes, json_file, indent=4)
                return True
        except oracledb.Error as e:
            return False, f'Erro ao exportar dados: {e}'
        finally:
            conn.close()
    return False, 'Erro de conexão com o banco de dados'