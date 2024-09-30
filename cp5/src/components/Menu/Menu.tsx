import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
            <li> <Link href="/">Home</Link> </li>
                <li> <Link href="/venus">Vênus</Link> </li>
                <li> <Link href="/civilizacoes">Civilizações Antigas</Link> </li>
                <li> <Link href="/Catastrofe">Ciclos de Catástrofes</Link> </li>
                <li> <Link href="/Calculo">Cálculo</Link> </li>
            </ul>
        </nav>
    )
}