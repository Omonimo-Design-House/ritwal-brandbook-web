import { fv, Chrome, Subtitle, Rule } from './_shared.jsx';

const imgLogoRitwal = "https://www.figma.com/api/mcp/asset/dc88cded-5366-4652-91e1-ddcea06e7795.svg";
const imgLine15 = "https://www.figma.com/api/mcp/asset/bfcba7fc-99e3-449b-9da8-dfff965db8f5.svg";

function Spec({ top, title, font, size }) {
  return (
    <div className="[word-break:break-word] absolute leading-[0] left-[457px] not-italic text-[#8b6f4b] text-[0px] w-[248px]" style={{ top }}>
      <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[16px] mb-0 text-[16px]" style={fv}>{title}</p>
      <p className="font-['Google_Sans_Flex:Light'] font-light leading-[16px] mb-0 text-[16px]" style={fv}>{font}</p>
      <p className="font-['Google_Sans_Flex:Light'] font-light leading-[16px] mb-0 text-[16px]" style={fv}>{size}</p>
    </div>
  );
}
const Pointer = ({ top }) => (
  <div className="absolute flex h-0 items-center justify-center left-[457px] w-[455px]" style={{ top }}>
    <div className="flex-none rotate-180">
      <div className="h-0 relative w-[455px]">
        <div className="absolute inset-[-2.67px_0_-2.67px_-0.59%]"><img alt="" className="block max-w-none size-full" src={imgLine15} /></div>
      </div>
    </div>
  </div>
);

export default function Component37TipografiaJerarquiaVisual() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="33:1232" data-name="37 - Tipografía Jerarquía Visual">
      <Chrome title="Tipografía" metaLeft={81} titleLeft={365} />
      <Subtitle>Jerarquía Visual</Subtitle>
      <Rule left={81} top={229} w={248} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[88px] not-italic text-[#8b6f4b] text-[20px] top-[257px] w-[240px]" data-node-id="37:1366" style={fv}>
        Cada nivel de texto cumple una función: el título llama la atención, el subtítulo la sostiene y el cuerpo explica. Con esa jerarquía, una pieza se lee de un vistazo.
      </p>
      <Spec top={469} title="Título:" font="Continua Regular" size="110 pt" />
      <Spec top={678} title="Subtítulo" font="Antarctican Mono Medium" size="24 pt" />
      <Spec top={793} title="Texto corrido" font="Antarctican Mono Regular" size="14 pt" />
      <div className="absolute bg-white h-[835px] left-[834px] top-[229px] w-[1006px]" data-node-id="33:1261" />
      <div className="-translate-y-1/2 absolute h-[68px] left-[941px] top-[calc(50%-142.5px)] w-[182px]" data-node-id="2013:742" data-name="Logo Ritwal">
        <img alt="Ritwal" className="absolute block inset-0 max-w-none size-full" src={imgLogoRitwal} />
      </div>
      <p className="[word-break:break-word] absolute font-['Continua_Online_Trial:Regular'] leading-[90px] left-[930px] text-[#8b6f4b] text-[110px] top-[396px] tracking-[-4.4px] w-[831px]" data-node-id="33:1270">
        La magia está en el encuentro.
      </p>
      <p className="[word-break:break-word] absolute font-['Antarctican_Mono:Medium'] leading-[27px] left-[930px] not-italic text-[#8b6f4b] text-[24px] top-[647px] tracking-[8.64px] w-[831px]" data-node-id="33:1271">{`MESA & MÍSTICA`}</p>
      <p className="[word-break:break-word] absolute font-['Antarctican_Mono:Book'] leading-[16px] left-[930px] not-italic text-[#8b6f4b] text-[14px] top-[729px] w-[385px]" data-node-id="33:1272">
        Todos los jueves, de 7:30 a 9:30 p.m., suena el son cubano en vivo. Los fines de semana y festivos, el Brunch del Sol empieza a las 10:00 a.m. y llega a la mesa en sartén de hierro.
      </p>
      <p className="[word-break:break-word] absolute font-['Antarctican_Mono:Book'] leading-[16px] left-[1346px] not-italic text-[#8b6f4b] text-[14px] top-[729px] w-[385px]" data-node-id="33:1274">
        Cada evento puede tener una tipografía propia en el título. El texto corrido siempre va en Antarctican Mono, y así cualquier pieza se reconoce como Ritwal.
      </p>
      <Pointer top={439} /><Pointer top={660} /><Pointer top={769} />
    </div>
  );
}
