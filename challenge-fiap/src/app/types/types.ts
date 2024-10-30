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