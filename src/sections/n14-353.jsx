import { fv, Chrome, Subtitle, Rule } from './_shared.jsx';

const imgLogoRitwalMesaMistica = "https://www.figma.com/api/mcp/asset/a5985963-155a-406c-b0ee-7f8997757e44.svg";

export default function Component11LogoConTagline() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="14:353" data-name="11. Logo con tagline">
      <Chrome title="Logotipo" metaLeft={81} titleLeft={365} />
      <Subtitle>Con Descriptor</Subtitle>
      <Rule left={79} top={237} w={249} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[81px] not-italic text-[#8b6f4b] text-[20px] top-[257px] w-[247px]" data-node-id="14:374" style={fv}>
        Esta versión le da al receptor más contexto sobre quiénes somos. Se usa cuando la pieza no lo explica por sí sola, o cuando ese contexto necesita reforzarse.
      </p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[161px] left-[calc(50%+81px)] top-[calc(50%+12.5px)] w-[644px]" data-node-id="2013:698" data-name="Logo Ritwal · Mesa & Mística">
        <img alt="Ritwal Mesa & Mística" className="absolute block inset-0 max-w-none size-full" src={imgLogoRitwalMesaMistica} />
      </div>
    </div>
  );
}
