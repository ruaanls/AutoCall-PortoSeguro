export type TipoAgendamento = {
    placa:string,
    agendamento:{
        tipoProblema:string,
        data:string,
        horario:string,
        centroAutomotivo:{
            id:number
        }
    }
}

export type TipoCadastroVeiculo = {
    cpf:string,
    veiculo:{
        placa:string,
        marca:string,
        modelo:string,
        ano:number,
        renavam:string
    }
}