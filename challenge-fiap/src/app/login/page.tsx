"use client"
import { useState } from "react";
import imgLogin from "../../img/img-login.png";
import Image from "next/image";
import { TipoLogin } from "../types/types";

export default function Login() {
    const [login, setLogin] = useState<TipoLogin>({
        cpf: "",
        senha: ""
    });

    const [erroLogin, setErroLogin] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLogin((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Formulário enviado"); // Verificar se a função é chamada
        console.log("Dados enviados:", login); // Verificar os dados enviados

        try {
            const resposta = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(login)
            });

            if (resposta.ok) {
                alert("PASSOU!!!! API DEU CERTO");
                const dados = await resposta.json();
                console.log(dados)
                setLogin({ cpf: "", senha: "" });
            } else {
                setErroLogin("CPF OU SENHA INVÁLIDOS: ")
                setTimeout(() => {
                    window.location.reload();  // Recarrega a página após 3 segundos
                }, 3000);
            }
        } catch (error) {
            alert("DEU ERRADO :/ " + error);
        }
    };

    return (
        <main>
            <div className="cadastroGeral">
                <div className="containerImg">
                    <Image src={imgLogin} alt="Imagem de um mecânico" className="img-login" />
                </div>
                <div className="containerExternoForm" style={{ height: "100% !important" }}>
                    <div className="containerForm">
                        <h1 className="text-[1.5rem] mb-[1rem]">Bem-vindo de volta :)</h1>
                        {erroLogin && <h1 style={{ color: 'red' }}>{erroLogin}</h1>}
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="linha">
                                <input
                                    type="text"
                                    placeholder="CPF"
                                    name="cpf"
                                    value={login.cpf}
                                    onChange={handleChange}
                                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                                    className="cpf"
                                />
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    name="senha"
                                    onChange={handleChange}
                                    value={login.senha}
                                />
                            </div>
                            <button type='submit'>Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
