import { fv, Chrome, Subtitle, Label, Img } from './_shared.jsx';

const imgReglaLateral = "https://www.figma.com/api/mcp/asset/6c4d6895-99db-49dc-8db9-6ad5d076383d.svg";
const imgReglaLateral1 = "https://www.figma.com/api/mcp/asset/7cf77f5e-121e-4b14-9cd4-27e503e4d8d3.svg";
const imgRectangle4 = "https://www.figma.com/api/mcp/asset/88feddf0-63ab-409f-b85e-0c43727d8970.svg";
const imgLogoRitwal = "https://www.figma.com/api/mcp/asset/e07a8047-bd0f-437d-a4e6-f11e7991a8bb.svg";
const imgLogoRitwal1 = "https://www.figma.com/api/mcp/asset/3d3e9b6c-2c47-45e4-a792-9f9900c41def.svg";

export default function Component14LogotipoTamanos() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="17:1225" data-name="14. Logotipo Tamaños">
      <Chrome title="Logotipo" metaLeft={81} titleLeft={365} />
      <Subtitle>Tamaños Permitidos</Subtitle>
      <Label left={365} top={255}>Tamaño mínimo</Label>
      <Label left={1120} top={255}>Tamaño máximo</Label>
      <Img cls="h-[2px] left-[364px] top-[237px] w-[718px]" src={imgReglaLateral} />
      <Img cls="h-[2px] left-[1121px] top-[237px] w-[719px]" src={imgReglaLateral1} />
      <Img cls="h-[2px] left-[364px] top-[627px] w-[718px]" src={imgReglaLateral} />
      <Img cls="h-[2px] left-[1121px] top-[627px] w-[719px]" src={imgReglaLateral1} />
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[0] left-[363px] not-italic text-[#8b6f4b] text-[20px] top-[660px] w-[342px] whitespace-pre-wrap" data-node-id="17:1291" style={fv}>
        <p className="leading-[normal] mb-0">Por debajo de este tamaño, los detalles de la llama y la textura del trazo se empastan y el logo pierde su forma.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">— Mínimo impresión: 10 mm<br aria-hidden /><br aria-hidden /></p>
        <p className="leading-[normal]">— Mínimo digital: 32 px</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[1120px] not-italic text-[#8b6f4b] text-[20px] top-[660px] w-[340px]" data-node-id="17:1292" style={fv}>
        No tiene límite superior. Está construido para sostenerse a cualquier escala sin perder proporción ni presencia, de una tarjeta a una fachada. La única condición es respetar siempre su clear space.
      </p>
      <Img id="17:1342" cls="h-[264px] left-[364px] top-[302px] w-[720px]" src={imgRectangle4} />
      <div className="absolute bg-white h-[264px] left-[1120px] top-[302px] w-[720px]" data-node-id="17:1343" />
      <Img id="2013:730" cls="-translate-y-1/2 h-[173px] left-[1248.33px] top-[433.5px] w-[461.333px]" src={imgLogoRitwal} />
      <Img id="2013:736" cls="-translate-y-1/2 h-[27px] left-[685px] top-[438.5px] w-[72px]" src={imgLogoRitwal1} />
    </div>
  );
}
