import { fv, Chrome, Subtitle, Rule, Label, Caption } from './_shared.jsx';

// Figma placed the isotipos with % insets of a 1920×1113 inner panel; converted to px here.
const imgLine1 = "https://www.figma.com/api/mcp/asset/eaafefad-7012-4221-a0fc-3eccd0cf16ab.svg";
const imgIsotipoRitwal = "https://www.figma.com/api/mcp/asset/de8266bf-93a1-403a-92ab-81bb3d41523c.svg";
const imgIsotipoRitwal1 = "https://www.figma.com/api/mcp/asset/78f500de-9b72-4db6-8d25-50dbd1fcf297.svg";
const imgIsotipoRitwal2 = "https://www.figma.com/api/mcp/asset/abd80b83-6e48-4812-97d2-0d6f88506447.svg";

const Line = ({ left }) => (
  <div className="absolute flex h-[270.32px] items-center justify-center top-[294.84px] w-[189.28px]" style={{ left }}>
    <div className="-rotate-55 flex-none">
      <div className="h-0 relative w-[330px]">
        <div className="absolute inset-[-2px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine1} /></div>
      </div>
    </div>
  </div>
);

// Rotated isotipo centred in a box (w×h); the unrotated mark is 146.8×200.
function Turned({ id, left, top, w, h, rot, src }) {
  return (
    <div className="absolute flex items-center justify-center" style={{ left, top, width: w, height: h }} data-node-id={id}>
      <div className="flex-none h-[200px] w-[146.8px]" style={{ transform: `rotate(${rot}deg)` }}>
        <div className="relative size-full" data-name="Isotipo Ritwal">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={src} />
        </div>
      </div>
    </div>
  );
}

export default function Component20IsotipoOrientacion() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="4022:394" data-name="20 - Isotipo orientación">
      <Chrome title="Isotipo" metaLeft={81} titleLeft={365} />
      <Subtitle>Orientación</Subtitle>
      <Label left={364} top={246}>CORRECTO</Label>
      <Label left={742} top={246}>INCORRECTO</Label>
      <Rule left={365} top={237} w={341} />
      <Rule left={742} top={237} w={1098} />
      <Rule left={81} top={237} w={247} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[81px] not-italic text-[#8b6f4b] text-[20px] top-[257px] w-[255px]" data-node-id="4022:506" style={fv}>
        El isotipo tiene una sola orientación válida: derecho, con la llama arriba. Cualquier rotación compromete su lectura y su reconocimiento.
      </p>
      <Caption light left={365} top={600} w={300} title="Derecho">Con la llama arriba. Es su única orientación válida.</Caption>
      <Caption light left={742} top={600} w={300} title="Girado 90°">Acostado, el isotipo deja de reconocerse.</Caption>
      <Caption light left={1320} top={600} w={300} title="Inclinado">Ningún ángulo intermedio es válido.</Caption>
      <Line left={905.36} />
      <Line left={1485.36} />
      <div className="absolute h-[200px] left-[461.6px] top-[330px] w-[146.9px]" data-node-id="4022:492" data-name="Isotipo Ritwal">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIsotipoRitwal} />
      </div>
      <Turned id="4022:498" left={900.1} top={356.6} w={199.9} h={146.8} rot={-90} src={imgIsotipoRitwal1} />
      <Turned id="4022:504" left={1455.9} top={311.9} w={248.1} h={236.3} rot={-126} src={imgIsotipoRitwal2} />
    </div>
  );
}
