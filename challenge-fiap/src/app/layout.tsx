import type { Metadata } from "next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './globals.css';



export const metadata: Metadata = {
  title: "Challenge FIAP",
  description: "Finalização do website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
