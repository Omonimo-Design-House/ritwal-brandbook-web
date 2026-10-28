import { fv } from './_shared.jsx';
import { Page, Checklist } from './_contenido.jsx';

const BIG = "https://www.figma.com/api/mcp/asset/ec022455-f013-4519-8763-e39ac8d032de.svg";
const SMALL = "https://www.figma.com/api/mcp/asset/dbfd258b-3450-4a9e-b4be-94c30a0dc6c3.svg";
const OTHER = "https://www.figma.com/api/mcp/asset/c7a40544-5f9a-49ba-b7f1-33f58ee5f863.svg";
const DOT = { B: BIG, s: SMALL, x: OTHER };

const COLS = ['Web y blog', 'Perfil de Google', 'Feed', 'Historias', 'Reels', 'TikTok'];
// B = big dot (sí), s = small dot (no). The "Eventos" row has an extra 7th cell in Figma, clipped by the row.
const ROWS = [
  ['Lo extenso: la cocina, los ingredientes y las preguntas frecuentes', 'Bsssss'],
  ['Respuestas a lo que la gente busca (AEO)', 'BBssss'],
  ['Eventos y novedades', 'sBBxBBs'],
  ['Fotografía profesional y storytelling', 'sBBsss'],
  ['Lo espontáneo y los procesos', 'sssBBB'],
  ['Tendencias y humor', 'ssssBB'],
];
const Line = () => <div className="bg-[rgba(139,111,75,0.45)] h-px relative shrink-0 w-[1476px]" data-name="Regla" />;
const H = ({ children }) => <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[18px] tracking-[4.14px] uppercase whitespace-nowrap" style={fv}>{children}</p>;
const T = ({ children }) => <p className="font-['Google_Sans_Flex:Light'] font-light relative shrink-0 text-[19px] w-[696px]" style={fv}>{children}</p>;

export default function ContenidoDondePublicar() {
  return (
    <Page id="4064:702" name="Contenido · Dónde publicar" title="Dónde publicar" sub="Qué va en cada canal"
      note={['Cada pieza va al canal donde mejor se entiende.', 'En la web vive lo extenso. En Instagram, la fotografía y el día a día. En TikTok, lo espontáneo.']}>
      <div className="absolute bg-white content-stretch flex flex-col items-start left-[365px] overflow-clip rounded-[24px] top-[250px] w-[1476px]" data-node-id="4064:740" data-name="Matriz de canales">
        <div className="content-stretch flex items-start pb-[18px] pt-[22px] relative shrink-0 w-full">
          <div className="h-[10px] relative shrink-0 w-[476px]" />
          {COLS.map(c => (
            <div key={c} className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[166.667px]">
              <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[15px] tracking-[1.8px] uppercase whitespace-nowrap" style={fv}>{c}</p>
            </div>
          ))}
        </div>
        {ROWS.map(([label, cells]) => (
          <div key={label} className="contents">
            <Line />
            <div className="content-stretch flex items-center overflow-clip py-[20px] relative shrink-0 w-full" data-name="Fila">
              <div className="content-stretch flex items-center pl-[32px] relative shrink-0 w-[476px]">
                <p className="[word-break:break-word] font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[19px] w-[420px]" style={fv}>{label}</p>
              </div>
              {[...cells].map((k, i) => (
                <div key={i} className="h-[24px] relative shrink-0 w-[166.667px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={DOT[k]} /></div>
              ))}
            </div>
          </div>
        ))}
        <div className="h-[12px] relative shrink-0 w-[10px]" />
      </div>
      <Checklist id="4064:852" cls="bg-white h-[244px] left-[365px] p-[30px] top-[780px] w-[700px]"
        items={['¿Qué tan largo es el mensaje?', '¿La imagen es cuidada o espontánea?', '¿Es urgente, una tendencia o un anuncio?', '¿Qué acción buscamos?']} />
      <div className="[word-break:break-word] absolute bg-white content-stretch flex flex-col gap-[14px] h-[244px] items-start leading-[normal] left-[1085px] not-italic overflow-clip p-[30px] rounded-[24px] text-[#8b6f4b] top-[780px] w-[756px]" data-node-id="4064:866" data-name="Blog">
        <H>Blog</H>
        <T>Mínimo dos artículos al mes, con respuestas a lo que la gente busca: dónde ver el atardecer en Medellín, qué incluye el Brunch del Sol, cómo reservar un templo.</T>
        <H>TikTok</H>
        <T>Videos cortos y tono divertido. Mezcla contenido que informa o inspira con contenido que entretiene o enseña.</T>
      </div>
    </Page>
  );
}
