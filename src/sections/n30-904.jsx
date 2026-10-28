import { fv, TopRules } from './_shared.jsx';

const imgIsotipo = "https://www.figma.com/api/mcp/asset/b0cf54a0-7c7d-45e1-a0b6-d5aec475d976.svg";

export default function Component07DivisorDeSeccionCierre() {
  return (
    <div className="bg-[#993921] relative size-full" data-node-id="30:904" data-name="07 · Divisor de sección">
      <TopRules color="#ddc9a3" />
      <div className="-translate-y-1/2 absolute h-[616px] left-[81px] top-[calc(50%+95px)] w-[1642.667px]" data-node-id="2013:686" data-name="Logo Ritwal · Mesa & Mística">
        <div className="absolute inset-[37.99%_44.18%_38.13%_49.25%]" data-name="Isotipo">
          <img alt="Isotipo Ritwal" className="absolute block inset-0 max-w-none size-full" src={imgIsotipo} />
        </div>
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-px items-start left-[365px] not-italic text-[#ddc9a3] top-[72px] whitespace-nowrap" data-name="Meta">
        <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] relative shrink-0 text-[32px]" style={fv}>Ritwal®</p>
        <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] relative shrink-0 text-[32px]" style={fv}>{`Brand guidelines `}</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[80px] not-italic text-[#ddc9a3] text-[15px] top-[74px] whitespace-nowrap" style={fv}>{`By Omónimo Design House `}</p>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[80px] not-italic text-[#ddc9a3] text-[15px] top-[93px] whitespace-nowrap" style={fv}>{`(2026)© `}</p>
    </div>
  );
}
