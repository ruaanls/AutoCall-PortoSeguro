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

export type TipoCentroAutomotivo = {
    cod:number,
    endereco:{
        bairro:string,
        cep:string,
        cidade:string,
        logradouro:string,
        numero:number,
        uf:string
    },
    id:number
}

export type TipoCadastro = {
    cpf:string,
    nome:string,
    email:string,
    cep:string,
    senha:string
}



export type TipoLogin = {
    cpf:string,
    senha:string
}