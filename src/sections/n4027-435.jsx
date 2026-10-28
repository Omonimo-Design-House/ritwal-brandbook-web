import { fv, Chrome, Subtitle, SideNote } from './_shared.jsx';

const imgSonCubano = "https://www.figma.com/api/mcp/asset/71c72b24-7781-4287-b893-f6ac235da0ed.png";
const imgCafeRitwal = "https://www.figma.com/api/mcp/asset/02e00d12-36d0-483f-8eda-595e0f7a8462.png";
const imgBrunchDelSol = "https://www.figma.com/api/mcp/asset/c0fdc070-b582-4903-96d5-bff5790cb9a4.png";

function Example({ left, title, fontCls, fontName }) {
  return (
    <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light'] font-light leading-[0] not-italic text-[#8b6f4b] text-[20px] top-[842px] w-[470px]" style={{ ...fv, left }}>
      <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] mb-0" style={fv}>{title}</p>
      <p>
        <span className="leading-[normal]">{`Tipografía: `}</span>
        <span className={`${fontCls} leading-[normal] not-italic`}>{fontName}</span>
      </p>
    </div>
  );
}

export default function Component37BTipografiaUsoEspecialParaEventos() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="4027:435" data-name="37b - Tipografía Uso especial para eventos">
      <Chrome title="Tipografía" metaLeft={81} titleLeft={365} />
      <Subtitle>Uso especial para eventos</Subtitle>
      <SideNote left={88} w={231} ruleTop={229} paras={[
        'Cada evento especial puede tener su propia tipografía en el título. Así la gente lo identifica y lo distingue de los demás.',
        'La variación aplica solo a los títulos. El texto corrido siempre va en Antarctican Mono.',
      ]} />
      <div className="absolute content-stretch flex gap-[34px] h-[588px] items-start left-[364px] top-[230px] w-[1478px]" data-node-id="4027:447" data-name="Fotos">
        {[[imgSonCubano, 'Evento Son Cubano'], [imgCafeRitwal, 'Puesta de Sol'], [imgBrunchDelSol, 'Ritwal Café']].map(([src, alt]) => (
          <div key={src} className="border-[#8b6f4b] border-[1.5px] border-solid h-[588px] relative rounded-[24px] shrink-0 w-[470px]">
            <img alt={alt} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={src} />
          </div>
        ))}
      </div>
      <Example left={364} title="EVENTO SON CUBANO" fontCls="font-['Roundhand:Regular']" fontName="Roundhand Regular" />
      <Example left={868} title="PUESTA DE SOL" fontCls="font-['Roundhand:Regular']" fontName="Roundhand Regular" />
      <Example left={1372} title="Ritwal Café" fontCls="font-['Casual_Human:Bold']" fontName="Casual Human" />
    </div>
  );
}
