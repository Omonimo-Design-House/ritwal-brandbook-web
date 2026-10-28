import { fv } from './_shared.jsx';
import { Page } from './_contenido.jsx';

const imgLine = "https://www.figma.com/api/mcp/asset/3abd016d-5ee7-4ebb-9625-df4bcff308d9.svg";
const M = ({ cls = '', style, children }) => <p className={`font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic ${cls}`} style={{ ...fv, ...style }}>{children}</p>;
const L = ({ cls = '', style, children }) => <p className={`font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic ${cls}`} style={{ ...fv, ...style }}>{children}</p>;
const Cap = ({ left, top, title, sub, w }) => (
  <>
    <M cls="absolute text-[#8b6f4b] text-[16px] whitespace-nowrap" style={{ left, top }}>{title}</M>
    <L cls={`absolute text-[16px] text-[rgba(139,111,75,0.45)]${w ? '' : ' whitespace-nowrap'}`} style={{ left, top: top + 25, width: w }}>{sub}</L>
  </>
);
const Small = ({ children }) => <M cls="relative shrink-0 text-[14px] text-[rgba(139,111,75,0.45)] tracking-[1.68px] uppercase whitespace-nowrap">{children}</M>;
const Hint = ({ w = 388, size = 15, children }) => <L cls="relative shrink-0 text-[rgba(139,111,75,0.45)]" style={{ width: w, fontSize: size }}>{children}</L>;
const DashLine = ({ top }) => (
  <div className="absolute h-0 left-0 w-[300px]" style={{ top }} data-name="Line">
    <div className="absolute inset-[-1.5px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine} /></div>
  </div>
);
function GRow({ k, v, n }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[8px] relative shrink-0 w-full">
      <M cls="relative shrink-0 text-[15px] text-[rgba(139,111,75,0.45)] w-[120px]">{k}</M>
      <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#8b6f4b] text-[14px] w-[440px]">{v}</p>
      <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[13px] text-[rgba(139,111,75,0.45)] whitespace-nowrap">{n}</p>
    </div>
  );
}
const VIDEO = [['Formato', 'Vertical 9:16 como principal; 4:5 para feed'], ['Duración', 'Entre 6 y 15 segundos para pauta'],
  ['Primer segundo', 'Abrir con el cóctel servido, el fuego o el plato llegando a la mesa. Sin logos ni intros'], ['Sonido', 'Subtítulos siempre. En TikTok, audio en tendencia o voz real']];
const Spaced = ({ children }) => <M cls="relative shrink-0 text-[#8b6f4b] text-[18px] tracking-[4.14px] uppercase whitespace-nowrap">{children}</M>;

export default function PautaFormatosDePauta() {
  return (
    <Page id="4066:744" name="Pauta · Formatos de pauta" title="Formatos de pauta" sub="Medidas y zonas seguras"
      note={['Las medidas cambian con las plataformas. Estas son las vigentes en 2026 para Meta, TikTok y Google.']}>
      <div className="absolute bg-[rgba(221,201,163,0.35)] h-[375px] left-[365px] rounded-[20px] top-[250px] w-[300px]" data-name="Feed 4:5" />
      <Cap left={365} top={645} title="Feed · 4:5" sub="1080 × 1350 px" />
      <div className="absolute bg-[rgba(221,201,163,0.35)] h-[533px] left-[705px] overflow-clip rounded-[20px] top-[250px] w-[300px]" data-name="Historias y Reels 9:16">
        <div className="absolute bg-[#993921] h-[75px] left-0 opacity-16 top-0 w-[300px]" />
        <div className="absolute bg-[#993921] h-[187px] left-0 opacity-16 top-[346px] w-[300px]" />
        <DashLine top={75} /><DashLine top={346} />
        <M cls="absolute left-[16px] text-[#993921] text-[14px] top-[26px] whitespace-nowrap">14 % libre</M>
        <M cls="absolute left-[16px] text-[#993921] text-[14px] top-[362px] whitespace-nowrap">35 % libre</M>
        <L cls="absolute left-[16px] text-[#993921] text-[14px] top-[384px] w-[260px]">Perfil, texto y botones de la app</L>
        <M cls="-translate-x-1/2 absolute left-[146px] text-[#8b6f4b] text-[14px] text-center top-[240px] w-[260px]">Zona segura para el mensaje</M>
      </div>
      <Cap left={705} top={803} title="Historias y Reels · 9:16" sub="1080 × 1920 px" />
      <div className="absolute bg-[rgba(221,201,163,0.35)] h-[300px] left-[1113px] rounded-[18px] top-[282px] w-[240px]" />
      <div className="absolute bg-[rgba(221,201,163,0.5)] h-[300px] left-[1079px] rounded-[18px] top-[266px] w-[240px]" />
      <div className="absolute bg-[rgba(221,201,163,0.65)] h-[300px] left-[1045px] rounded-[18px] top-[250px] w-[240px]" />
      <div className="absolute bg-white content-stretch flex items-start left-[1225px] px-[10px] py-[4px] rounded-[12px] top-[264px]">
        <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[12px] whitespace-nowrap">1/10</p>
      </div>
      <Cap left={1045} top={645} w={320} title="Carrusel · hasta 10 tarjetas" sub="Varios platos, una receta o el paso a paso de un cóctel" />
      <div className="absolute bg-white content-stretch flex flex-col gap-[12px] items-start left-[1400px] overflow-clip p-[26px] rounded-[24px] top-[250px] w-[440px]" data-node-id="4066:803" data-name="Ficha · Texto del anuncio">
        <Small>Texto principal</Small>
        <p className="font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#8b6f4b] text-[14px] w-[388px]">
          <span className="leading-[20px]">Hoy suena el son cubano en vivo con Medellín de fondo. Cócteles botánicos y cocina de producto en el Alto de Los Balsos. Rese</span>
          <span className="leading-[20px] text-[rgba(139,111,75,0.45)]">... más</span>
        </p>
        <Hint>Lo importante en los primeros 125 caracteres</Hint>
        <Small>Titular</Small>
        <div className="content-stretch flex items-start justify-between leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap">
          <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#8b6f4b] text-[15px]">Son Cubano esta noche en Ritwal</p>
          <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[rgba(139,111,75,0.45)]">31/40</p>
        </div>
        <Small>Botón</Small>
        <div className="bg-[#8b6f4b] content-stretch flex items-start justify-center py-[10px] relative rounded-[10px] shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f7f1e8] text-[14px] whitespace-nowrap">Reservar</p>
        </div>
        <Hint>Un solo llamado por anuncio: Reservar, Más información o Enviar mensaje.</Hint>
      </div>
      <div className="[word-break:break-word] absolute bg-white content-stretch flex flex-col gap-[10px] h-[378px] items-start left-[365px] not-italic overflow-clip p-[28px] rounded-[24px] top-[860px] w-[720px]" data-node-id="4066:815" data-name="Ficha · Anuncio de búsqueda adaptable">
        <Small>Google · Anuncio de búsqueda adaptable</Small>
        <GRow k="Titular 1" v={`Ritwal Mesa & Mística`} n="21/30" />
        <GRow k="Titular 2" v="Restaurante con vista" n="21/30" />
        <GRow k="Titular 3" v="Brunch del Sol en Medellín" n="26/30" />
        <Hint w={660} size={16}>Hasta 15 titulares. Cargar al menos 10 distintos: marca, ubicación, propuesta, evento y llamado a la acción.</Hint>
        <GRow k="Descripción 1" v="Cocina de producto y coctelería botánica en el Alto de Los Balsos. Reserva en línea." n="84/90" />
        <Hint w={660} size={16}>Hasta 4 descripciones. Cada anuncio lleva a la página que responde a la búsqueda: menú, reservas o evento.</Hint>
      </div>
      <div className="[word-break:break-word] absolute bg-white content-stretch flex flex-col gap-[14px] h-[378px] items-start leading-[normal] left-[1104px] not-italic overflow-clip p-[28px] rounded-[24px] top-[860px] w-[736px]" data-node-id="4066:835" data-name="Ficha · Video">
        <Spaced>Video</Spaced>
        {VIDEO.map(([k, v]) => (
          <div key={k} className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
            <M cls="relative shrink-0 text-[16px] text-[rgba(139,111,75,0.45)] w-[150px]">{k}</M>
            <L cls="relative shrink-0 text-[#8b6f4b] text-[18px] w-[510px]">{v}</L>
          </div>
        ))}
        <Spaced>Texto sobre la imagen</Spaced>
        <L cls="relative shrink-0 text-[#8b6f4b] text-[18px] w-[680px]">Meta ya no aplica la regla del 20 %, pero las piezas con poco texto rinden mejor. El mensaje va en el copy.</L>
      </div>
    </Page>
  );
}
