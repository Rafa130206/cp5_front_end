import Imagem from 'next/image'

export default function Venus() {
    return (
        <div>
            <p>Velikovsky afirma que Vênus não estava originalmente em sua órbita atual. Ele sugere que, há cerca de 3.500 anos, Vênus foi ejetado como um cometa da superfície de Júpiter, passando muito perto da Terra. Essa passagem causou uma série de desastres naturais, como terremotos, erupções vulcânicas, inundações e mudanças climáticas. Ele acredita que esse evento é a origem de muitos mitos de destruição ao redor do mundo, como o dilúvio bíblico e outras histórias de cataclismos em várias culturas.
            </p>
            <Imagem src="/assets/venus.jpeg" alt="Vênus" width={1920} height={934} />
        </div>
    )
}