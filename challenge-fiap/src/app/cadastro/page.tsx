"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import imgCad from "../../img/img-login.png";
import { TipoCadastro } from "../types/types";
import { useState } from "react";

export default function Cadastro() {
    const navigate = useRouter();
    
    const [dadosResposta, setDadosResposta] = useState<TipoCadastro>();
    const [cadastro, setCadastro] = useState<TipoCadastro>({
        cpf: "",
        nome: "",
        email: "",
        cep: "",
        senha: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCadastro((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const resposta = await fetch("http://localhost:5000/cadastro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cadastro)
            });

            if (resposta.ok) {
                alert("PASSOU!!!! API DEU CERTO");
                const dados = await resposta.json(); // Pegando os dados da resposta
                setDadosResposta(dados);
                setCadastro({
                    cpf: "",
                    nome: "",
                    email: "",
                    cep: "",
                    senha: ""
                });
                setTimeout(()=>
                {
                    navigate.push("/")
                },3000)
                
            }
        } catch (error) {
            alert("DEU ERRADO F :( " + error);
        }
    };

    return (
        <main>
            <div className="cadastro-container">
                <div className="cadastro-img-container">
                    <Image src={imgCad} alt="Imagem de um mecânico com camisa azul" className="cadastro-img" />
                </div>

                <div className="cadastro-form-container">
                    <div className="conteiner-form-cad">
                        <h1>Crie sua conta Porto</h1>
                        

                        <form onSubmit={handleSubmit} className="cadastro-form">
                            <div className="cadastro-row">
                                <div className="cadastro-field">
                                    <input 
                                        type="text" 
                                        placeholder="CPF" 
                                        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                                        title="CPF INVÁLIDO, use este padrão: 111.111.111-11" 
                                        value={cadastro.cpf} 
                                        onChange={handleChange} 
                                        name="cpf" 
                                    />
                                </div>
                                <div className="cadastro-field">
                                    <input 
                                        type="text" 
                                        placeholder="Nome Completo" 
                                        value={cadastro.nome} 
                                        onChange={handleChange} 
                                        name="nome" 
                                    />
                                </div>
                            </div>
                            <div className="cadastro-row">
                                <div className="cadastro-field">
                                    <input 
                                        type="text" 
                                        placeholder="CEP" 
                                        value={cadastro.cep} 
                                        onChange={handleChange} 
                                        name="cep" 
                                    />
                                </div>
                                <div className="cadastro-field">
                                    <input 
                                        type="email" 
                                        placeholder="Email" 
                                        title="E-MAIL INVÁLIDO, use este padrão: aaaaa@aaaa.aaa.aa" 
                                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"  
                                        value={cadastro.email} 
                                        onChange={handleChange} 
                                        name="email" 
                                    />
                                </div>
                            </div>
                            <div className="cadastro-row">
                                <div className="cadastro-field">
                                    <input 
                                        type="password" 
                                        placeholder="Senha" 
                                        value={cadastro.senha} 
                                        onChange={handleChange} 
                                        name="senha" 
                                    />
                                </div>
                            </div>
                            <div className="cadastro-button-container">
                                <button type="submit" style={{ width: "50%" }} className="cadastro-button">Criar Conta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
