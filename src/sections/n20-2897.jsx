import { fv, Chrome, Subtitle, Rule } from './_shared.jsx';

const imgCombinacion = "https://www.figma.com/api/mcp/asset/4f463674-e9e6-4813-a756-4ad6786b2b13.svg";
const imgCombinacion1 = "https://www.figma.com/api/mcp/asset/a8d57769-e71f-42e6-9d9a-bebce760e3b4.svg";
const imgCombinacion2 = "https://www.figma.com/api/mcp/asset/23c115ba-9da4-42c9-8eff-75eac2e81a26.svg";

export default function Component30ColorArmoniasDeColor() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="20:2897" data-name="30- Color - Armonías de Color">
      <Chrome title="Color" metaLeft={81} titleLeft={365} />
      <Subtitle>Armonías de Color</Subtitle>
      <div className="absolute content-stretch flex gap-[20px] items-start left-[365px] top-[233px] w-[1496px]" data-node-id="20:3058" data-name="Fila">
        {[imgCombinacion, imgCombinacion1, imgCombinacion2].map(src => (
          <div key={src} className="h-[290px] relative shrink-0 w-[400px]" data-name="Combinación">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={src} />
          </div>
        ))}
      </div>
      <Rule left={81} top={237} w={247} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[88px] not-italic text-[#8b6f4b] text-[20px] top-[257px] w-[231px]" data-node-id="23:615" style={fv}>
        El fondo siempre es Sol Suave. Encima van Bosco, Eco de Mar o Sole Mio, en textos, íconos y logo. Son las únicas combinaciones permitidas.
      </p>
    </div>
  );
}
