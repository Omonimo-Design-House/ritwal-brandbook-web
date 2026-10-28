import { Page, Callout, Sheet } from './_contenido.jsx';

const imgAvatar = "https://www.figma.com/api/mcp/asset/3cb67d32-ed6c-417c-8aa8-57092b1ca681.svg";
const icons = [
  "https://www.figma.com/api/mcp/asset/07a52d99-7e46-45bc-a095-2712ea6a9c6e.svg",
  "https://www.figma.com/api/mcp/asset/2d7b2bca-f20f-4dd2-8370-b984e9bee94f.svg",
  "https://www.figma.com/api/mcp/asset/40583d54-54c7-471c-866f-bfd15df4b227.svg",
  "https://www.figma.com/api/mcp/asset/0de453b2-1f00-471f-9895-f213981b4ed6.svg",
];
const imgIcono4 = "https://www.figma.com/api/mcp/asset/95e51a5c-e879-4275-af3a-5bcaf091bdb3.svg";
const imgGuia = "https://www.figma.com/api/mcp/asset/e1793689-a036-461d-8705-ed38cb9bd9d5.svg";
const imgPunto = "https://www.figma.com/api/mcp/asset/57e66474-7761-4891-9e5b-aa68c71b3ebf.svg";
const imgGuia1 = "https://www.figma.com/api/mcp/asset/511e416a-2574-452f-a606-c4aef1305804.svg";
const imgGuia2 = "https://www.figma.com/api/mcp/asset/93f60ae9-cf3f-4c9d-81ac-9fd231f092a3.svg";

export default function ContenidoTikTok() {
  return (
    <Page id="4061:700" name="Contenido · TikTok" title="TikTok" sub="Cómo se ve un video de Ritwal"
      note={['TikTok da a conocer la marca rápido y la humaniza.', 'El tono es más relajado que en Instagram: las tendencias y los retos se adaptan a la filosofía de Ritwal.']}>
      <div className="absolute bg-white h-[880px] left-[470px] overflow-clip rounded-[48px] top-[236px] w-[430px]" data-node-id="4061:738" data-name="Celular · Video de TikTok">
        <div className="absolute bg-[rgba(221,201,163,0.35)] h-[880px] left-0 top-0 w-[430px]" data-name="Espacio para video" />
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[0] left-[140px] not-italic text-[#8b6f4b] text-[16px] top-[64px] whitespace-pre">
          <span className="font-['Inter:Regular'] font-normal leading-[normal]">Siguiendo</span>
          <span className="leading-[normal]">{`     Para ti`}</span>
        </p>
        <div className="absolute bg-[#8b6f4b] h-[3px] left-[254px] rounded-[2px] top-[90px] w-[40px]" />
        <div className="absolute bg-white content-stretch flex items-start left-[42.5px] px-[18px] py-[12px] rounded-[12px] top-[210px]" data-name="Texto en pantalla">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[20px] whitespace-nowrap">Coctelería botánica en Medellín</p>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[22px] items-center left-[362px] top-[430px]" data-name="Barra lateral">
          <div className="relative shrink-0 size-[48px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} /></div>
          {icons.map(src => (
            <div key={src} className="bg-white content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]">
              <div className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={src} /></div>
            </div>
          ))}
        </div>
        <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[22px] top-[728px]" data-name="Caption">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[16px] whitespace-nowrap">@ritwalmesamistica</p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[#8b6f4b] text-[14px] w-[320px]">Así se prepara un cóctel botánico en Ritwal, en el Alto de Los Balsos, Medellín.</p>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcono4} /></div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[13px] whitespace-nowrap">Sonido original · Ritwal</p>
          </div>
        </div>
        <div className="absolute bg-white h-[3px] left-[22px] rounded-[2px] top-[846px] w-[386px]" />
        <div className="absolute bg-[#8b6f4b] h-[3px] left-[22px] rounded-[2px] top-[846px] w-[40px]" />
      </div>
      <Callout y={454} n="1" title="Texto en pantalla" guide={imgGuia} dot={imgPunto}>TikTok también es buscador. Las palabras clave van en pantalla y en el caption, como «coctelería en Medellín».</Callout>
      <Callout y={738} n="2" title="Primer segundo" guide={imgGuia1} dot={imgPunto}>Decide si el video se ve. Abre con el cóctel servido, el fuego o el plato llegando a la mesa. Nada de logos ni intros.</Callout>
      <Callout y={988} n="3" title="Caption" guide={imgGuia2} dot={imgPunto}>Palabras clave en el caption y en pantalla, como «coctelería en Medellín». No usamos hashtags.</Callout>
      <Sheet id="4061:786" left={1090} top={1138} title="Ritmo" rows={[
        ['Videos', '3 a 5 por semana'],
        ['Mezcla', '70 a 80 % espontáneo, 20 a 30 % con montaje más cuidado'],
        ['Series', 'Formatos repetibles, como «Un día en Ritwal»'],
        ['Comentarios', 'Se responden en las primeras horas, a veces en video'],
      ]} />
    </Page>
  );
}
