import { fv, Chrome, Subtitle, Rule } from './_shared.jsx';

const imgIsotipoRitwal = "https://www.figma.com/api/mcp/asset/ddd2dd5c-1ec4-4fed-9a35-bf241e5ef8e9.svg";

export default function Component18IsotipoEstandar() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="4018:274" data-name="18 - Isotipo estándar">
      <Chrome title="Isotipo" metaLeft={81} titleLeft={365} />
      <Subtitle>Estándar</Subtitle>
      <Rule left={79} top={237} w={249} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[81px] not-italic text-[#8b6f4b] text-[20px] top-[257px] w-[247px]" data-node-id="4018:293" style={fv}>
        El isotipo resume la marca en la llama y la W. Va donde el logotipo no cabe: la foto de perfil en redes, el pie de página de la web o una tarjeta personal.
      </p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[161px] left-[calc(50%+81px)] top-[calc(50%+12.5px)] w-[644px]" data-node-id="4018:294" data-name="Isotipo Ritwal">
        <div className="absolute inset-[-12.5%_0]">
          <img alt="Isotipo Ritwal" className="block max-w-none size-full" src={imgIsotipoRitwal} />
        </div>
      </div>
    </div>
  );
}
