import { Chrome, Subtitle, Rule, MeasureIcons, SpecList } from './_shared.jsx';

const TEXT = 'Ritwal nace para recordarnos que la magia está en el encuentro. Pasa cuando varias personas comparten una mesa y una conversación sin mirar el reloj. Los jueves suena el son cubano en vivo y los fines de semana el brunch empieza a las diez.';

export default function Component36TipografiaTextoCorrido() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="27:573" data-name="36 - Tipografía Texto Corrido">
      <Chrome title="Tipografía" metaLeft={81} titleLeft={365} />
      <Subtitle>Texto Corrido</Subtitle>
      <Rule left={81} top={229} w={248} />
      <MeasureIcons y={385} ly={449} />
      <SpecList items={[['Familia:', 'Antarctican Mono'], ['Peso:', 'Regular'], ['Caja:', 'Tipo oración'],
        ['Margen de espaciado entre letras:', '-25 / +25'], ['Altura entre líneas:', 'Igual o hasta 4 puntos más que el puntaje de la tipografía.']]} />
      <p className="[word-break:break-word] absolute font-['Antarctican_Mono:Book'] leading-[28px] left-[1119px] not-italic text-[#8b6f4b] text-[24px] top-[243px] w-[436px]" data-node-id="27:650">{TEXT}</p>
      <p className="[word-break:break-word] absolute font-['Antarctican_Mono:Book'] leading-[28px] left-[649px] not-italic text-[#8b6f4b] text-[24px] top-[251px] w-[434px]" data-node-id="27:649">{TEXT}</p>
    </div>
  );
}
