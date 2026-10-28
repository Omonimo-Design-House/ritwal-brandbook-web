import { Page, Callout, Sheet } from './_contenido.jsx';

const imgAvatar = "https://www.figma.com/api/mcp/asset/06f89a0d-819c-48d8-8b45-006069ac2418.svg";
const imgFrame = "https://www.figma.com/api/mcp/asset/e1b75c5f-fba5-4280-896d-4eda9f4c4882.svg";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/0649caf1-65e3-4268-9001-d73e94dbac7e.svg";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/25fff71d-2739-4a86-8338-3db944b05b5f.svg";
const imgGuia = "https://www.figma.com/api/mcp/asset/2703a3f9-63bb-4efe-98e2-969023689d86.svg";
const imgPunto = "https://www.figma.com/api/mcp/asset/4c3ddc49-d1b0-49b6-aafb-d399097f7d00.svg";
const imgGuia1 = "https://www.figma.com/api/mcp/asset/dc5653ae-517e-4c98-aa7b-474ccdfbf0f2.svg";
const imgGuia2 = "https://www.figma.com/api/mcp/asset/1e39ed56-aa55-4ff5-aecc-88e153c19785.svg";

const Stat = ({ n, l }) => (
  <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[16px]">{n}</p>
    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px]">{l}</p>
  </div>
);
const Highlight = ({ src, l }) => (
  <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0">
    <div className="relative shrink-0 size-[62px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={src} /></div>
    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[11px] whitespace-nowrap">{l}</p>
  </div>
);
const Cell = () => <div className="bg-[rgba(221,201,163,0.35)] h-[189px] relative shrink-0 w-[142px]" data-name="Espacio para imagen" />;

export default function ContenidoInstagram() {
  return (
    <Page id="4061:568" name="Contenido · Instagram" title="Instagram" sub="Perfil y ritmo de publicación"
      note={['Con 163 mil seguidores, Instagram es la vitrina principal de Ritwal.', 'Muestra la vista, los templos, la cocina y los eventos de la semana, y lleva al enlace de reservas. Habla a la vez con locales y con turistas.']}>
      <div className="absolute bg-white content-stretch flex flex-col items-start left-[470px] overflow-clip pt-[16px] rounded-[48px] top-[236px] w-[430px]" data-node-id="4061:606" data-name="Celular · Perfil de Instagram">
        <div className="content-stretch flex h-[36px] items-center justify-between px-[30px] relative shrink-0 w-[430px]">
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[14px] whitespace-nowrap">9:41</p>
          <div className="bg-[#8b6f4b] h-[28px] relative rounded-[14px] shrink-0 w-[104px]" />
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[12px] whitespace-nowrap">100%</p>
        </div>
        <div className="content-stretch flex items-center pb-[10px] pt-[6px] px-[18px] relative shrink-0 w-full">
          <p className="font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[18px] whitespace-nowrap">ritwalmesamistica</p>
        </div>
        <div className="content-stretch flex gap-[20px] items-center px-[18px] relative shrink-0 w-full">
          <div className="relative shrink-0 size-[86px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} /></div>
          <div className="content-stretch flex flex-[1_0_0] items-start justify-between leading-[normal] min-w-px not-italic relative text-[#8b6f4b] whitespace-nowrap">
            <Stat n="452" l="publicaciones" /><Stat n="163 mil" l="seguidores" /><Stat n="32" l="seguidos" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[2px] items-start not-italic px-[18px] py-[12px] relative shrink-0 text-[14px] w-full whitespace-nowrap">
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] relative shrink-0 text-[#8b6f4b]">RITWAL | RESTAURANTE</p>
          <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[#8b6f4b]">
            <p className="leading-[19px] mb-0">Cocina de producto.</p>
            <p className="leading-[19px] mb-0">{`Mesa & Mística.`}</p>
            <p className="leading-[19px] mb-0">Alto de Los Balsos, Medellín.</p>
            <p className="leading-[19px]">Carta | Reservas</p>
          </div>
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] relative shrink-0 text-[#656636]">linktr.ee/ritwalmesamistica</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start px-[18px] relative shrink-0 w-full">
          <div className="bg-[#8b6f4b] content-stretch flex h-[34px] items-center justify-center relative rounded-[8px] shrink-0 w-[100px]">
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f7f1e8] text-[14px] whitespace-nowrap">Seguir</p>
          </div>
          <div className="bg-[rgba(221,201,163,0.35)] content-stretch flex h-[34px] items-center justify-center relative rounded-[8px] shrink-0 w-[100px]">
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[14px] whitespace-nowrap">Mensaje</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-start pb-[14px] pt-[16px] px-[18px] relative shrink-0 w-full">
          <Highlight src={imgFrame} l="Horarios" /><Highlight src={imgFrame1} l="Ubicación" /><Highlight src={imgFrame2} l="Brunch" />
          <Highlight src={imgFrame1} l="Cócteles" /><Highlight src={imgFrame} l="Wine Garden" />
        </div>
        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[2px] items-start relative shrink-0"><Cell /><Cell /><Cell /></div>
          <div className="content-stretch flex gap-[2px] items-start relative shrink-0"><Cell /><Cell /><Cell /></div>
        </div>
      </div>
      <Callout y={455} n="1" title="Perfil" guide={imgGuia} dot={imgPunto}>Qué es Ritwal, dónde queda y el enlace a carta y reservas. Cada canal lleva su propio enlace con UTM hacia Precompro.</Callout>
      <Callout y={606} n="2" title="Destacados" guide={imgGuia1} dot={imgPunto}>Lo que la gente pregunta antes de ir: horarios, ubicación, brunch, cócteles y Wine Garden.</Callout>
      <Callout y={767} n="3" title="Cuadrícula" guide={imgGuia2} dot={imgPunto}>Fotos verticales 4:5 o 3:4 con lo importante en el centro, porque la cuadrícula recorta los bordes.</Callout>
      <Sheet id="4061:683" left={1090} top={917} title="Ritmo" rows={[
        ['Publicaciones', '3 a 5 por semana'],
        ['Reels', '15 a 30 segundos. Lo más atractivo en el primer segundo'],
        ['Carruseles', 'Hasta 20 fotos: un menú, un evento, una preparación'],
        ['Lo que se mide', 'Envíos, guardados y que el video se vea completo'],
      ]} />
    </Page>
  );
}
