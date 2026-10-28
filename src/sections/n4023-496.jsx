import { fv, Chrome, Subtitle, SideNote, Img, BoxTag } from './_shared.jsx';

const imgIsotipoRitwal = "https://www.figma.com/api/mcp/asset/34f6e841-3fc7-4841-a885-b556a9198ea8.svg";
const imgLine4 = "https://www.figma.com/api/mcp/asset/efff229a-4d20-42e9-9447-0d6c777b7c6e.svg";
const imgReglaLateral = "https://www.figma.com/api/mcp/asset/3285b95c-4f86-47df-a474-a9eab466371d.svg";

export default function Component22IsotipoUsosIncorrectos() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="4023:496" data-name="22 - Isotipo usos incorrectos">
      <Chrome title="Isotipo" metaLeft={81} titleLeft={365} />
      <Subtitle>Usos Incorrectos</Subtitle>
      <SideNote left={81} paras={['Los usos incorrectos del logotipo también aplican al isotipo: no se rota, no se deforma, no cambia de color y no pierde contraste. Además tiene una restricción propia.']} />
      <div className="absolute bg-white h-[650px] left-[364px] rounded-[10px] top-[287px] w-[1476px]" data-node-id="4023:512" />
      <BoxTag left={379} top={303}>Usar a gran escala</BoxTag>
      <Img id="4023:573" cls="inset-[22.63%_32.28%_41.63%_47.07%]" src={imgIsotipoRitwal} />
      <div className="absolute flex h-[650px] items-center justify-center left-[364px] top-[287px] w-[1476px]" data-node-id="4023:536">
        <div className="flex-none rotate-[-23.77deg]">
          <div className="h-0 relative w-[1612.785px]">
            <div className="absolute inset-[-2px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine4} /></div>
          </div>
        </div>
      </div>
      <Img cls="h-[2px] left-[364px] top-[237px] w-[1476px]" src={imgReglaLateral} />
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[0] left-[365px] not-italic text-[#8b6f4b] text-[20px] top-[973px] w-[560px] whitespace-pre-wrap" data-node-id="4023:546" style={fv}>
        <p className="font-['Google_Sans_Flex:Bold'] font-bold leading-[normal] mb-0" style={fv}>Incorrecto</p>
        <p className="leading-[normal] mb-0">{`Ampliado, el isotipo le quita el protagonismo al logotipo y no comunica el nombre de la marca. `}</p>
        <p className="font-['Google_Sans_Flex:Bold'] font-bold leading-[normal] mb-0" style={fv}>Correcto</p>
        <p className="leading-[normal]">Usarlo a escala reducida y dejar el logotipo para las piezas donde el nombre debe leerse.</p>
      </div>
    </div>
  );
}
