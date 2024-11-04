import Link from "next/link";
import img from "../img/img-banner.png";
import bateria from "../img/img-bateria.png";
import revisao from "../img/img-revisao.png";
import oleo from "../img/img-troca-oleo.png";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import teste from "../img/img-fundo-inicio.png";
import Image from "next/image";

export default function PaginaInicial() {
  return (
    <main>
      <div
        className="containerInicio "
        style={{
          backgroundImage: "url('../img/img-fundo-inicio.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="inicial">
          <p>Centros Automotivos Porto</p>
          <h1>
            O <span>lugar perfeito para</span> quem ama <span>carros</span>
          </h1>
          <p className="textoHome">
            Manutenções, revisões e pequenos reparos para quem tem seguro auto
            quanto para quem não tem.
          </p>
          <button className="botaoHome">
            <Link href={"/manutencao"}>
              <h2>Agende um serviço</h2>
            </Link>
          </button>
        </div>
      </div>

      <div>
        <div className="txtOpcoes">
          <h2>O que você quer fazer hoje?</h2>
          <p>
            Resolva as questões referentes ao seu veículo
          </p>
        </div>

        <div className="opcaoPrincipal">
          <button>
            <Link href={"/manutencao"}>
              <h2>Marcar Conserto</h2>
              <p>
                Agende uma visita para consertar ou realizar pequenos reparos no
                seu veículo
              </p>
            </Link>
          </button>
          <button>
            <Link href={"/manutencao"}>
              <h2>Realizar pré-diagnóstico</h2>
              <p>Use nossa IA para ter um pré-diagnóstico e pré-orçamento</p>
            </Link>
          </button>
          <button>
            <Link href={"/cadastroVeiculo"}>
              <h2>Cadastrar Veículos</h2>
              <p>
                Cadastre o seu veículo para usar nossas outras funcionalidades
              </p>
            </Link>
          </button>
        </div>

        <div className="containerMapa">
          <div className="containerTxt">
            <h2 className="text-[2.8rem] leading-[1.3] mb-[1rem]">
              Encontre o{" "}
              <span className="bg-[#0076FC] p-[5px]">centro automotivo</span>{" "}
              mais próximo de você.
            </h2>
            <p className="text-[1.3rem] font-[300]">
              Possuímos centros automotivos e oficinas credenciadas em toda
              grande São Paulo, confira no mapa ao lado.
            </p>
          </div>
          <div className="mapa">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1_yvhH0-7oqZIQOjvno07EoN6m6mgxvg&ehbc=2E312F&noprof=1"
              width="800px"
              height="500px"
            ></iframe>
          </div>
        </div>
        <div className="containerGeral">
          <div className="bannerContainer">
            <div className="bannerTxt">
              <h2 className="text-[2.3rem] text-[#1F1F1F] mx-[15px] font-[500]">
                Tenha um <span>pré-diagnóstico</span> do seu problema com{" "}
                <span>orçamento</span> agora.
              </h2>
              <p className="text-[1.4rem] mx-[20px]">
                Conte com o nosso assistente virtual para ter um pré-diagnóstico
                com pré-orçamento
              </p>
              <button>
                <Link href={"/manutencao"}>
                  <h2>Fazer pré-análise agora.</h2>
                </Link>
              </button>
            </div>
            <Image src={img} alt="Teste" className="bannerImg" />
          </div>

          <h2 className="w-[100%] text-center text-[#1F1F1F] m-[10px] text-[1.9rem] font-[500]">
            Conheça alguns de nossos serviços
          </h2>
          <div className="cardsContainer">
            <div className="card">
              <Image src={oleo} alt="Teste" className="imagemCard" />
              <h2 className="text-[2rem]">Troca de Óleo</h2>
              <p className="text-[1.3rem] font-[300]">
                Troca de óleo, lubrificação e freios
              </p>
            </div>
            <div className="card">
              <Image src={revisao} alt="Teste" className="imagemCard" />
              <h2>Revisão Geral</h2>
              <p>Revisão completa para você viajar com segurança</p>
            </div>
            <div className="card">
              <Image src={bateria} alt="Teste" className="imagemCard" />
              <h2>Troca de Baterias</h2>
              <p>Troca de baterias e demais serviços elétricos</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
