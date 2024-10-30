// "use client"
// import Image from "next/image";

// import imgCad from "../../img/img-login.png"

// export default function Cadastro() {
    

//     return (
//         <main>
//             <div className="cadastroGeral">
//                 <div className="containerImg">
//                     <Image src={imgCad} alt="Imagem de um mecânico com camisa azul" className="img-login"/>
//                 </div>
//                 <div className="containerExternoForm">
//                     <div className="containerForm justify-normal w-[100%]">
//                         <h1 className="text-[2.3rem] mb-[3%]">Crie sua conta Porto</h1>

//                         <form /*onSubmit={onSubmit(handleSubmit)}*/ className="form">
//                             <div className="linha">
//                                 <div className="formulario">
//                                     <input type="text" placeholder="CPF" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="CPF INVÁLIDO, use este padrão: 111.111.111-11" /*{...register("cpf")}*/ />
//                                     <p>{/*errors.cpf?.message*/}</p>
//                                 </div>
//                                 <div className="formulario">
//                                     <input type="text" placeholder="Nome Completo" /*{...register("nome")}*/ />
//                                     <p>{/*errors.nome?.message*/}</p>
//                                 </div>
//                             </div>
//                             <div className="linha">
//                                 <div className="formulario">
//                                     <input type="text" placeholder="Celular" /*{...register("celular")} *//>
//                                     <p>{/*errors.celular?.message*/}</p>
//                                 </div>
//                                 <div className="formulario">
//                                     <input type="email" placeholder="Email" title="E-MAIL INVÁLIDO, use este padrão: aaaaa@aaaa.aaa.aa" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" /*{...register("email")} *//>
//                                     <p>{/*errors.email?.message*/}</p>
//                                 </div>
//                             </div>
//                             <div className="linha">
//                                 <div className="formulario">
//                                     <input type="password" placeholder="Senha" /*{...register("senha1")} *//>
//                                     <p>{/*errors.senha1?.message*/}</p>
//                                 </div>
//                                 <div className="formulario">
//                                     <input type="password" placeholder="Confirmar Senha" /*{...register("senha2")}*/ />
//                                     <p>{/*errors.senha2?.message*/}</p>
//                                 </div>
//                             </div>
//                             <div className="botao text-center w-[100%] " >
//                                 <button type="submit" style={{width: "50%"}}className="w-[100%] py-[20%]">Criar Conta</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }


"use client";
import Image from "next/image";

import imgCad from "../../img/img-login.png";

export default function Cadastro() {
    return (
        <main>
            <div className="cadastro-container">
                <div className="cadastro-img-container">
                    <Image src={imgCad} alt="Imagem de um mecânico com camisa azul" className="cadastro-img" />
                </div>
                <div className="cadastro-form-container">
                    <div className="cadastro-form-inner justify-normal w-[100%]">
                        <h1 className="cadastro-title text-[2.3rem] mb-[3%]">Crie sua conta Porto</h1>

                        <form /*onSubmit={onSubmit(handleSubmit)}*/ className="cadastro-form">
                            <div className="cadastro-row">
                                <div className="cadastro-field">
                                    <input type="text" placeholder="CPF" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="CPF INVÁLIDO, use este padrão: 111.111.111-11" /*{...register("cpf")}*/ />
                                    <p>{/*errors.cpf?.message*/}</p>
                                </div>
                                <div className="cadastro-field">
                                    <input type="text" placeholder="Nome Completo" /*{...register("nome")}*/ />
                                    <p>{/*errors.nome?.message*/}</p>
                                </div>
                            </div>
                            <div className="cadastro-row">
                                <div className="cadastro-field">
                                    <input type="text" placeholder="Celular" /*{...register("celular")}*/ />
                                    <p>{/*errors.celular?.message*/}</p>
                                </div>
                                <div className="cadastro-field">
                                    <input type="email" placeholder="Email" title="E-MAIL INVÁLIDO, use este padrão: aaaaa@aaaa.aaa.aa" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" /*{...register("email")}*/ />
                                    <p>{/*errors.email?.message*/}</p>
                                </div>
                            </div>
                            <div className="cadastro-row">
                                <div className="cadastro-field">
                                    <input type="password" placeholder="Senha" /*{...register("senha1")}*/ />
                                    <p>{/*errors.senha1?.message*/}</p>
                                </div>
                                <div className="cadastro-field">
                                    <input type="password" placeholder="Confirmar Senha" /*{...register("senha2")}*/ />
                                    <p>{/*errors.senha2?.message*/}</p>
                                </div>
                            </div>
                            <div className="cadastro-button-container text-center w-[100%]">
                                <button type="submit" style={{ width: "50%" }} className="cadastro-button w-[100%] py-[20%]">Criar Conta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

