import React from 'react'

export default function cadastroVeiculo() {
    return (
        <main>
            <div>
                <div>
                    <h1>Cadastre seu Veículo</h1>
                    <div>
                        <p>
                            Com seu veículo cadastrado em nosso sistema você tem acesso liberado para agendar consertos e fazer um pré-diagnóstico com nossa IA.
                        </p>
                    </div>
                    
                    <div>
                        <h1>Cadastro de veículo</h1>
                        {/*criarDiv && */<h1>Placa já Existe</h1>}
                        
                        {/* Formulário de cadastro de veículo */}
                        {/* <form onSubmit={onSubmit(handleSubmit)}> */}
                        <form>
                            <div>
                                <div>
                                    {/* <input type="text" placeholder="Placa" pattern="^(?:[A-Z]{3}-\d{4}|[A-Z]{3}[0-9][0-9A-Z ][0-9]{2})$" title="PLACA INVÁLIDA, digite sua placa corretamente conforme o padrão detran/Mercosul" {...register("placa")}/> */}
                                    <input type="text" placeholder="Placa" pattern="^(?:[A-Z]{3}-\d{4}|[A-Z]{3}[0-9][0-9A-Z ][0-9]{2})$" title="PLACA INVÁLIDA, digite sua placa corretamente conforme o padrão detran/Mercosul" />
                                    {/* <p>{errors.placa?.message}</p> */}
                                </div>
                                <div>
                                    {/* <input type="text" placeholder="Marca" {...register("marca")}/> */}
                                    <input type="text" placeholder="Marca" />
                                    {/* <p>{errors.marca?.message}</p> */}
                                </div>
                            </div>
    
                            <div>
                                <div>
                                    {/* <input type="text" placeholder="Modelo" {...register("modelo")}/> */}
                                    <input type="text" placeholder="Modelo" />
                                    {/* <p>{errors.modelo?.message}</p> */}
                                </div>
                                <div>
                                    {/* <input type="text" placeholder="Ano" pattern="[0-9]+$" {...register("ano")}/> */}
                                    <input type="text" placeholder="Ano" pattern="[0-9]+$" />
                                    {/* <p>{errors.ano?.message}</p> */}
                                </div>
                            </div>
                            
                            <button type="submit">Cadastrar Veículo</button>
                        </form>
                    </div>
                </div>
    
                <div>
                    {/* <img src={img} alt="" /> */}
                </div>
            </div>
        </main>
    )
    
};
