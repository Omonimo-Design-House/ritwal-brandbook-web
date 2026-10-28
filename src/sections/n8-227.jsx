import { fv, Chrome } from './_shared.jsx';

export default function Component02Introduccion() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="8:227" data-name="02 · Introducción">
      <Chrome title="Introducción" />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Thin'] font-thin h-[726px] leading-[136px] left-[361px] text-[#8b6f4b] text-[130px] top-[361px] tracking-[-5.2px] w-[1464px]" data-node-id="8:249" style={fv}>
        {/* Line breaks as in Figma (browsers fit one more word on the first line). */}
        Este manual reúne la<br />identidad de Ritwal® y el<br />criterio para aplicarla: la marca,<br />la fotografía, el contenido<br />digital, la pauta y los impresos.
      </p>
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light'] font-light h-[92px] leading-[0] left-[366px] not-italic text-[32px] text-[rgba(139,111,75,0.45)] top-[1147px] w-[912px] whitespace-pre-wrap" data-node-id="8:251" style={fv}>
        <p className="leading-[19px] mb-0">{`Omónimo Design House `}</p>
        <p className="leading-[19px] mb-0">​</p>
        <p className="leading-[19px]">{`Medellín / Colombia -(2026)© `}</p>
      </div>
    </div>
  );
}
