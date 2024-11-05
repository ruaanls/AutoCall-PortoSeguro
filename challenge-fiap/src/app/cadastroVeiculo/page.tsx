// import React, { useState } from 'react';
"use client"
import Image from 'next/image';
import imgLogin from '@/img/img-cadastro-veiculos.png';
import { useState } from 'react';
/*import { useRouter } from 'next/navigation'*/
import { TipoCadastroVeiculo } from '../types/types';

export default function CadastroVeiculo() {
    /*const navigate = useRouter();*/
    const [cadastroVeiculo, setCadastroVeiculo] = useState<TipoCadastroVeiculo>({
        cpf:"",
        veiculo:{
            placa:"",
            marca:"",
            modelo:"",
            ano:0,
            renavam:"",
            
        }
     });

     const [dadosResposta, setDadosResposta] = useState<TipoCadastroVeiculo>();

     

     
     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCadastroVeiculo((prevState) => ({
            ...prevState,
            veiculo: {
                ...prevState.veiculo,
                [name.toLowerCase()]: name === 'ANO' ? Number(value) : value
            },
            cpf: name === 'T_CLIENTE_CPF' ? value : prevState.cpf
        }));
     };

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         try{
                const resposta = await fetch("http://localhost:8080/apiJava/cadastroVeiculo",{
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(cadastroVeiculo)
                })
                
                if (resposta.ok) {
                    alert("PASSOU!!!! API DEU CERTO");
                    const dados = await resposta.json(); // Pegando os dados da resposta
                    setDadosResposta(dados);
                    setCadastroVeiculo({cpf:"",
                        veiculo:{
                            placa:"",
                            marca:"",
                            modelo:"",
                            ano:0,
                            renavam:"",
                            
                        }})
                        
                    
                    
                }

            }
            catch(error)
            {
                alert("DEU ERRADO :/ "+ error);
            }

         
    
    }

    return (
        <main>
            <div className="cadastroMain">
                <div className="cadForm">
                    <h1>Cadastre seu Veículo</h1>
                    <h1>{dadosResposta?.cpf}</h1>
                    <h1>{dadosResposta?.veiculo.ano}</h1>
                    
                    <div className="conteudo-cad">
                        <p>
                            Com seu veículo cadastrado em nosso sistema você tem acesso liberado para agendar consertos e fazer um pré-diagnóstico com nossa IA.
                        </p>
                    </div>

                    <div className="containerForm-cad">
                        <h2>Cadastro de veículo</h2>
                        
                        <form className="form-cad" onSubmit={handleSubmit}>  
                            
                            <div className="linhaContainer-cad">
                                <div className="linha-cad">
                                    <input 
                                        type="text" 
                                        name="PLACA"
                                        value={cadastroVeiculo.veiculo.placa}
                                        onChange={(evento)=> handleChange(evento)}
                                        placeholder="Placa" 
                                        className="placa-cad"
                                        pattern="^(?:[A-Z]{3}-\d{4}|[A-Z]{3}[0-9][0-9A-Z][0-9]{2})$"
                                        required
                                    />
                                </div>
                                <div className="linha-cad">
                                    <input 
                                        type="text" 
                                        name="MARCA"
                                        value={cadastroVeiculo.veiculo.marca}
                                        onChange={(evento)=> handleChange(evento)}
                                        placeholder="Marca"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="linhaContainer-cad">
                                <div className="linha-cad">
                                    <input 
                                        type="text" 
                                        name="MODELO"
                                        value={cadastroVeiculo.veiculo.modelo}
                                        onChange={(evento)=> handleChange(evento)}
                                        placeholder="Modelo"
                                        required
                                    />
                                </div>

                                <div className="linha-cad">
                                    <input 
                                        type="text" 
                                        name="ANO"
                                        value={cadastroVeiculo.veiculo.ano}
                                        onChange={(evento)=> handleChange(evento)}
                                        placeholder="Ano"
                                        pattern="[0-9]+$"
                                        className="ano-cad"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="linhaContainer-cad">
                                <div className="linha-cad">
                                    <input 
                                        type="text" 
                                        name="RENAVAM"
                                        value={cadastroVeiculo.veiculo.renavam}
                                        onChange={(evento)=> handleChange(evento)}
                                        placeholder="Renavam"
                                        required
                                    />
                                </div>
                                <div className="linha-cad">
                                    <input 
                                        type="text" 
                                        name="T_CLIENTE_CPF"
                                        value={cadastroVeiculo.cpf}
                                        onChange={(evento)=> handleChange(evento)}
                                        placeholder="CPF"
                                        required
                                    />
                                </div>

                              
                            </div>

                            <button type="submit">
                                Cadastrar Veículo
                            </button>
                        </form>
                    </div>

                </div>
            <div className="cadastroImg">
                <Image 
                    src={imgLogin} 
                    alt="Imagem Login" 
                    className="img-cad"
                    priority
                />
            </div>
            </div>
        </main>
    );
}