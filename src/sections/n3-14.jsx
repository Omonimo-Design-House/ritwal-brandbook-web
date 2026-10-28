import { Chrome, Subtitle } from './_shared.jsx';

// Hidden template layers under the cream panel are omitted.
const imgLogoRitwal = "https://www.figma.com/api/mcp/asset/03488986-dcd0-4f08-8cb4-6ff56117cfe4.svg";

export default function Component10LogoStandard() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="3:14" data-name="10 · Logo · Standard">
      <Chrome title="Logotipo" metaLeft={81} titleLeft={365} />
      <Subtitle>Estándar</Subtitle>
      <div className="-translate-y-1/2 absolute h-[162px] left-[811px] top-[calc(50%+55px)] w-[432px]" data-node-id="2013:692" data-name="Logo Ritwal">
        <img alt="Ritwal" className="absolute block inset-0 max-w-none size-full" src={imgLogoRitwal} />
      </div>
    </div>
  );
}
