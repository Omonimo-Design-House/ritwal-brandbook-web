import { fv } from './_shared.jsx';

const imgLogoRitwalMesaMistica = "https://www.figma.com/api/mcp/asset/f151dec1-816d-4e6d-a0e8-5dc112c90f01.svg";

export default function Component01Portada() {
  return (
    <div className="bg-[#993921] relative size-full" data-node-id="2:2" data-name="01 · Portada">
      <div className="absolute bg-[#ddc9a3] h-[1.5px] left-[365px] top-[57px] w-[1475px]" data-node-id="8:190" data-name="Regla lateral" />
      <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Google_Sans_Flex:Medium'] font-medium gap-px items-start leading-[normal] left-[81px] not-italic text-[#ddc9a3] text-[15px] top-[72px] whitespace-nowrap" data-node-id="2:4" data-name="Meta">
        <p className="relative shrink-0" data-node-id="2:5" style={fv}>{`By Omónimo Design House `}</p>
        <p className="relative shrink-0" data-node-id="2:6" style={fv}>{`(2026)© `}</p>
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-px items-start left-[365px] not-italic text-[#ddc9a3] top-[72px] whitespace-nowrap" data-node-id="8:191" data-name="Meta">
        <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[0] relative shrink-0 text-[0px]" data-node-id="8:192" style={fv}>
          <span className="leading-[normal] text-[32px]">Ritwal</span>
          <span className="leading-[normal] text-[32px]" style={fv}>®</span>
        </p>
        <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] relative shrink-0 text-[32px]" data-node-id="8:193" style={fv}>{`Brand guidelines `}</p>
      </div>
      <div className="-translate-y-1/2 absolute h-[184px] left-[715px] top-[calc(50%+20px)] w-[490px]" data-node-id="2013:680" data-name="Logo Ritwal · Mesa & Mística">
        <img alt="Ritwal Mesa & Mística" className="absolute block inset-0 max-w-none size-full" src={imgLogoRitwalMesaMistica} />
      </div>
      <div className="absolute bg-[#ddc9a3] h-[2px] left-[80px] top-[57px] w-[248px]" data-node-id="17:1352" data-name="Regla lateral" />
    </div>
  );
}
