"use client"
import Link from "next/link";
import logo from "../../img/logo-porto.png"
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);

    useEffect(() => {
        const nome = localStorage.getItem("nomeUsuario"); // Obtém o nome do usuário do localStorage
        if (nome) {
            setNomeUsuario(nome); // Define o estado com o nome do usuário
        }
    }, []);

    return (
        <header className="header">
            <Link href={"/"}><Image src={logo} alt="Teste" className="img"/></Link>
            <nav className="menu">
                <Link href={"/agendamento"}><p>Agendar</p></Link>
                <Link href={"/cadastroVeiculo"}><p>Cadastrar Veículo</p></Link>
                <Link href={"/manutencao"}><p>Integrantes</p></Link>
            </nav>
            <div className="loginHeader">
                <button className="botao"><Link href={"/cadastro"}><p>Abra sua Conta</p></Link></button>
                {nomeUsuario ? (
                    <p>{nomeUsuario}</p> // Exibe o nome do usuário se ele estiver logado
                ) : (
                    <Link href={"/login"}><p>Login</p></Link> // Exibe "Login" caso não tenha usuário logado
                )}
                
            </div>
        </header>
    );
}
