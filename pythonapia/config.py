import oracledb

config = {
    "user": "rm555413",
    "password": "011205",
    "dsn": "oracle.fiap.com.br:1521/ORCL"
}

def get_connection():
    try:
        connection = oracledb.connect(
            user=config["user"],
            password=config["password"],
            dsn=config["dsn"]
        )
        return connection
    except oracledb.Error as e:
        print(f"Erro ao conectar ao banco de dados: {e}")
        return None