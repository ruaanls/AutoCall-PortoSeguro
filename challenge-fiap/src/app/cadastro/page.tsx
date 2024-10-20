"use client"
import React, { useState } from "react";
/*import img from "../img/img-login.png";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { number, object, string } from "yup";
import { useNavigate } from "react-router-dom";*/


export default function Cadastro() {
    /*const navigate = useNavigate();
    const schema = object({
        cpf: string().required("Campo Obrigatório").min(11, "Seu CPF deve ter 11 dígitos ").max(14, "Seu CPF deve ter no máximo 14 dígitos"),
        nome: string().required("Campo Obrigatório").min(3, "Seu nome deve ter mais que 3 letras"),
        celular: string().required("Campo Obrigatório").min(11, "Seu celular deve ter 11 números"),
        email: string().required("Campo Obrigatório"),
        senha1: string().required("Campo Obrigatório").min(5, "Sua senha deve ter 5 dígitos ou mais"),
        senha2: string().required("Campo Obrigatório").min(5, "Sua senha deve ter 5 dígitos ou mais")
    });

    const { register, handleSubmit: onSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    const [criarDiv, setCriarDiv] = useState(false);
    const [criarDivSenhas, setDivSenhas] = useState(false);

    const handleSubmit = (dados: any) => {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const cpfInput = dados.cpf;

        const cpfExiste = storedUsers.some((user: { cpf: any; }) => user.cpf === cpfInput);
        const senhasIguais = storedUsers.some(() => dados.senha1 !== dados.senha2);
        console.log(senhasIguais);
        console.log(cpfExiste);

        if (cpfExiste || senhasIguais) {
            if (senhasIguais) {
                setDivSenhas(true);
            } else {
                setCriarDiv(true);
            }

            setTimeout(() => {
                window.location.reload();
            }, 3000);

        } else {
            storedUsers.push(dados);
            localStorage.setItem('users', JSON.stringify(storedUsers));
            setTimeout(() => {
                navigate("/");
            }, 1000);
        }
    };*/

    return (
        <main>
            <div>
                <div>
                    {/* <img src={img} alt="" /> */}
                </div>
                <div>
                    <div>
                        <h1>Crie sua conta Porto</h1>
                        {/*criarDiv && */<h1> Cpf Já Cadastrado em Sistema</h1>}
                        {/*criarDivSenhas && */<h1>Suas Senhas não são Iguais, Tente Novamente</h1>}

                        <form /*onSubmit={onSubmit(handleSubmit)}*/>
                            <div>
                                <div>
                                    <input type="text" placeholder="CPF" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="CPF INVÁLIDO, use este padrão: 111.111.111-11" /*{...register("cpf")}*/ />
                                    <p>{/*errors.cpf?.message*/}</p>
                                </div>
                                <div>
                                    <input type="text" placeholder="Nome Completo" /*{...register("nome")}*/ />
                                    <p>{/*errors.nome?.message*/}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input type="text" placeholder="Celular" /*{...register("celular")} *//>
                                    <p>{/*errors.celular?.message*/}</p>
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" title="E-MAIL INVÁLIDO, use este padrão: aaaaa@aaaa.aaa.aa" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" /*{...register("email")} *//>
                                    <p>{/*errors.email?.message*/}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input type="password" placeholder="Senha" /*{...register("senha1")} *//>
                                    <p>{/*errors.senha1?.message*/}</p>
                                </div>
                                <div>
                                    <input type="password" placeholder="Confirmar Senha" /*{...register("senha2")}*/ />
                                    <p>{/*errors.senha2?.message*/}</p>
                                </div>
                            </div>
                            <div>
                                <button type="submit">Criar Conta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
