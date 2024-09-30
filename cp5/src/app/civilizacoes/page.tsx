import Imagem from "next/image"

export default function Civilizacoes() {
    return (
        <div>
            <p>
                Velikovsky argumenta que esses cataclismos astronômicos foram observados e registrados por civilizações antigas em mitos, textos religiosos e relatos históricos. Ele sugere que histórias como as pragas do Egito, a travessia do Mar Vermelho, e as batalhas descritas no Livro de Josué na Bíblia foram, na verdade, descrições de eventos causados por perturbações cósmicas. O "sol parado" no céu, por exemplo, seria uma referência a uma alteração no movimento da Terra devido a uma interação com outro corpo celeste.
            </p>
            <Imagem src="/assets/civilizacao.jpg" alt="Vênus" width={629} height={473} />
        </div>
    )
}