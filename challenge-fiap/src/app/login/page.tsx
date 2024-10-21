import imgLogin from "../../img/img-login.png"
import Image from "next/image";

export default function Login() {
   /* SE PRECISAR DO CÓDIGO ANTIGO ELE ESTÁ NO LOGIN.TSX DO PROJETO REACT "challenge" */ 

    return (
        <main>
            <div className="cadastroGeral">
                <div className="containerImg">
                    <Image src={imgLogin} alt="Imagem de um mecânico" className="img-login"/>
                    
                </div>
                
                <div className="containerExternoForm" style={{height: "100% !important"}}>
                    <div className="containerForm">
                        <h1 className="text-[1.5rem] mb-[1rem]">Bem-vindo de volta :)</h1>
                        {/* <h1> CPF ou Senha Inválidos</h1> */}
                        <form className="form">
                            <div className="linha">
                                <input type="text" placeholder="CPF"   pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" className="cpf" />
                                
                            </div>
                            <div className="linha" >
                                <input type="password" placeholder="Senha"  />
                                <p></p>
                            </div>
                            <button type='submit'>Entrar</button>
                        </form>
                        
                        
                    </div>
                    
                </div>
            </div>
        </main>
    );
}
