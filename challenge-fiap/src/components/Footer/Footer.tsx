import Image from "next/image"
import logo from "../../img/logo-porto.png"
export default function Footer()
{
    return(
        <footer className="footer">
            <Image src={logo} alt="Teste" className="img"/>
            <h1> | Centro Automotivo <span>Porto</span></h1>
        </footer>
    )
}