import { Chrome, Subtitle, Rule, MeasureIcons, SpecList } from './_shared.jsx';

// Figma wraps the specimen per character; the browser would not, so the lines are fixed here.
const LINES = ['AaBbCcDd', 'EeFfGgHhI', 'iJjKkLlMm', 'NnÑñOoPp', 'QqRrSsTtU', 'uVvwXxYy', 'Zz1345', '67890!', '&@$%()*'];

export default function Component34TipografiaTitulos() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="27:498" data-name="34 - Tipografía Títulos">
      <Chrome title="Tipografía" metaLeft={81} titleLeft={365} />
      <Subtitle>Títulos</Subtitle>
      <Rule left={81} top={229} w={248} />
      <MeasureIcons y={384} ly={450} />
      <SpecList items={[['Familia:', 'Continua'], ['Peso:', 'Regular'], ['Caja:', 'Tipo Oración'],
        ['Margen de espaciado entre letras:', '-25 / +25'], ['Altura entre líneas:', 'Igual o hasta 4 puntos más que el puntaje de la tipografía.']]} />
      <div className="[word-break:break-word] absolute font-['Continua_Online_Trial:Regular'] leading-[0] left-[366px] text-[#8b6f4b] text-[246px] text-center top-[209px] w-[1470px]" data-node-id="27:622">
        {LINES.map(l => <p key={l} className="leading-[270px] whitespace-nowrap">{l}</p>)}
      </div>
    </div>
  );
}
