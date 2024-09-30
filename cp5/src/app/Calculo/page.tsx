import Calculo1 from 'next/image'
import Calculo2 from 'next/image'

export default function Calculo() {
    return (
        <div>
            <p>
                No livro "Worlds in Collision", Immanuel Velikovsky faz várias afirmações e suposições sobre interações planetárias e suas consequências na Terra, mas ele não apresenta cálculos rigorosos no sentido matemático ou científico, como seriam usados em astrofísica tradicional. Em vez disso, suas hipóteses são baseadas em interpretações de textos antigos e mitos, com tentativas de relacioná-los a fenômenos astronômicos. Seu trabalho foi criticado exatamente por essa ausência de cálculos científicos precisos.
            </p>
            <p>
                No entanto, Velikovsky faz algumas inferências qualitativas sobre a força gravitacional entre planetas e as possíveis consequências dessas interações. Para entender o tipo de cálculo que ele teria proposto, é possível reconstruir uma situação em que a passagem de Vênus, ou de Marte, perto da Terra causasse perturbações significativas, como mudanças na rotação terrestre ou grandes marés.
            </p>
            <Calculo1 src="/assets/calculo1" alt='Lei da Gravitação Universal' width={187} height={71}/>
            <Calculo2 src="/assets/calculo2" alt='Força Gravitacional Hipotética' width={462} height={77}/>
            <p>
                Essa força seria incrivelmente massiva, e se um evento desse tipo tivesse realmente ocorrido, causaria perturbações devastadoras na Terra, como mudanças na órbita, marés gigantescas, e outros desastres naturais, como sugerido por Velikovsky em seu livro.
            </p>
        </div>
    )
}