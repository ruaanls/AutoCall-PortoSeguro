// import React, { useState } from 'react';

import Image from 'next/image';
import imgLogin from '@/img/img-cadastro-veiculos.png';

export default function CadastroVeiculo() {
    // const [formData, setFormData] = useState({
    //     placa: '',
    //     marca: '',
    //     modelo: '',
    //     ano: ''
    // });

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log(formData);
    //     
    // // bota tua api do java aqui ruanzito (na teoria funfa)
    // // ou arruma pra encaixar nao sei exatamente como voce fez
    // };

    return (
        <main>
            <div className="cadastroMain">
                <div className="cadForm">
                    <h1>Cadastre seu Veículo</h1>
                    
                    <div className="conteudo-cad">
                        <p>
                            Com seu veículo cadastrado em nosso sistema você tem acesso liberado para agendar consertos e fazer um pré-diagnóstico com nossa IA.
                        </p>
                    </div>

                    <div className="containerForm-cad">
                        <h2>Cadastro de veículo</h2>
                        
                        <form className="form-cad">  
                            {/* onSubmit={handleSubmit} */}
                            <div className="linhaContainer-cad">
                                <div className="linha-cad">
                                    <input 
                                        type="text" 
                                        name="placa"
                                        // value={formData.placa}
                                        // onChange={handleChange}
                                        placeholder="Placa" 
                                        className="placa-cad"
                                        pattern="^(?:[A-Z]{3}-\d{4}|[A-Z]{3}[0-9][0-9A-Z][0-9]{2})$"
                                        required
                                    />
                                </div>
                                <div className="linha-cad">
                                    <input 
                                        type="text" 
                                        name="marca"
                                        // value={formData.marca}
                                        // onChange={handleChange}
                                        placeholder="Marca"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="linhaContainer-cad">
                                <div className="linha-cad">
                                    <input 
                                        type="text" 
                                        name="modelo"
                                        // value={formData.modelo}
                                        // onChange={handleChange}
                                        placeholder="Modelo"
                                        required
                                    />
                                </div>

                                <div className="linha-cad">
                                    <input 
                                        type="text" 
                                        name="ano"
                                        // value={formData.ano}
                                        // onChange={handleChange}
                                        placeholder="Ano"
                                        pattern="[0-9]+$"
                                        className="ano-cad"
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