"use client"
import React, { useState } from "react";



export default function Cadastro() {
    

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
