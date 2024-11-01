"use client"
import React, { useState } from 'react'
import { TipoAgendamento } from '../types/types'
import { useRouter } from 'next/navigation'

export default function Agendamento() {

    const navigate = useRouter();
    const [agendamento, setagendamento] = useState<TipoAgendamento>({
        placa:"",
        agendamento:{
            tipoProblema:"",
            data:"",
            horario:"",
            centroAutomotivo:{
                id:0
            }
        }
    })

    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evento.target;

        if (name === 'PROBLEMA_AG') {
            setagendamento({
                ...agendamento,
                agendamento: {
                    ...agendamento.agendamento,
                    tipoProblema: value
                }
            });
        } else if (name === 'DATA_AGENDAMENTO') {
            setagendamento({
                ...agendamento,
                agendamento: {
                    ...agendamento.agendamento,
                    data: value
                }
            });
        } else if (name === 'HORA_AGENDAMENTO') {
            setagendamento({
                ...agendamento,
                agendamento: {
                    ...agendamento.agendamento,
                    horario: value
                }
            });
        } else if (name === 'T_VEICULO_PLACA') {
            setagendamento({
                ...agendamento,
                placa: value
            });
        } else if (name === 'T_CENTRO_AUTOMOTIVO_ID_CA') {
            setagendamento({
                ...agendamento,
                agendamento: {
                    ...agendamento.agendamento,
                    centroAutomotivo: {
                        ...agendamento.agendamento.centroAutomotivo,
                        id: parseInt(value)
                    }
                }
            });
        }
    }

    const handleSubmit = async(evento:React.FormEvent<HTMLFormElement>)=>{
        evento.preventDefault();
        try{
            const resposta = await fetch("http://localhost:8080/apiJava/agendamento", {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(agendamento)
            })

            if (resposta.ok) {
                alert("PASSOU!!!! API DEU CERTO");
                setagendamento({ placa:"",
                    agendamento:{
                        tipoProblema:"",
                        data:"",
                        horario:"",
                        centroAutomotivo:{
                            id:0
                        }
                    }});
                    
                navigate.push("/");
                
            }
            
        }
        catch(error)
        {
            alert("DEU ERRADO :/ "+ error);
        }
    }

    return (
        <div className="agendamento-container">
            <div className="form-container-agenda">
                <h1>Agendamento de Conserto</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="idProblema">Problema</label>
                        <input
                            type="text"
                            name="PROBLEMA_AG"
                            id="idProblema"
                            value={agendamento.agendamento.tipoProblema}
                            placeholder="Digite o motivo do agendamento"
                            required
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="idData">Data do Agendamento</label>
                        <input
                            type="date"
                            name="DATA_AGENDAMENTO"
                            id="idData"
                            value={agendamento.agendamento.data}
                            required
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="idHora">Hora do Agendamento</label>
                        <input
                            type="time"
                            name="HORA_AGENDAMENTO"
                            id="idHora"
                            value={agendamento.agendamento.horario}
                            placeholder="Digite o horário do agendamento"
                            required
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="idPlaca">Placa</label>
                        <input
                            type="text"
                            name="T_VEICULO_PLACA"
                            id="idPlaca"
                            value={agendamento.placa}
                            placeholder="Digite a placa do seu veículo"
                            required
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="idCentro">ID do Centro Automotivo</label>
                        <input
                            type="text"
                            name="T_CENTRO_AUTOMOTIVO_ID_CA"
                            id="idCentro"
                            value={agendamento.agendamento.centroAutomotivo.id}
                            placeholder="Digite o ID do centro automotivo"
                            required
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <button type="submit" className="submit-button">Agendar</button>
                </form>
            </div>
        </div>
    );
}
