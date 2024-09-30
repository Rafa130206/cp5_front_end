import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li> <Link href="/venus">Vênus</Link> </li>
                <li> <Link href="/civilizações">Civilizações Antigas</Link> </li>
                <li> <Link href="/catastrofes">Ciclos de Catástrofes</Link> </li>
                <li> <Link href="/calculo">Cálculo</Link> </li>
            </ul>
        </nav>
    )
}