import { fv } from './_shared.jsx';
import { Page, Dot } from './_contenido.jsx';

const imgStar = "https://www.figma.com/api/mcp/asset/9a507d56-149b-4a6d-8ad2-0f86ddfe77db.svg";
const imgStarHalf = "https://www.figma.com/api/mcp/asset/f9f27d43-55f3-407f-abb5-7c1924dd4ea9.svg";

const Head = ({ left, children }) => (
  <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[14px] text-[rgba(139,111,75,0.45)] top-[236px] tracking-[1.68px] uppercase whitespace-nowrap" style={{ ...fv, left }}>{children}</p>
);
const Chip = ({ fill, children }) => (
  <div className={`${fill ? 'bg-[#8b6f4b]' : 'border border-[rgba(139,111,75,0.45)] border-solid'} content-stretch flex items-center px-[16px] py-[8px] relative rounded-[20px] shrink-0`}>
    <p className={`[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] whitespace-nowrap ${fill ? 'text-[#f7f1e8]' : 'text-[#8b6f4b]'}`}>{children}</p>
  </div>
);
const Star = ({ src }) => <div className="relative shrink-0 size-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={src} /></div>;
function Point({ left, top, n, title, w, children }) {
  return (
    <>
      <Dot left={left} top={top}>{n}</Dot>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[#8b6f4b] text-[18px] tracking-[4.14px] uppercase whitespace-nowrap" style={{ ...fv, left: left + 50, top: top + 5 }}>{title}</p>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic text-[#8b6f4b] text-[20px]" style={{ ...fv, left: left + 50, top: top + 38, width: w }}>{children}</p>
    </>
  );
}

export default function ContenidoSeoYAeo() {
  return (
    <Page id="4062:492" name="Contenido · SEO y AEO" title="SEO y AEO" sub="Cómo encuentran a Ritwal en Google y en la IA"
      note={['Quien busca dónde comer en Medellín decide en Google, en Maps o preguntándole a una IA.', 'Las tres miran lo mismo: un perfil completo, reseñas recientes y una web que responde con claridad.']}>
      <Head left={365}>Perfil de Empresa en Google</Head>
      <div className="absolute bg-white content-stretch flex flex-col items-start left-[365px] overflow-clip rounded-[24px] top-[270px] w-[700px]" data-node-id="4062:531" data-name="Mock · Perfil de Google">
        <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
          <div className="bg-[rgba(221,201,163,0.35)] h-[170px] relative shrink-0 w-[350px]" />
          <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
            <div className="bg-[rgba(221,201,163,0.35)] h-[83px] relative shrink-0 w-[347px]" />
            <div className="bg-[rgba(221,201,163,0.35)] h-[84px] relative shrink-0 w-[347px]" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-start pb-[26px] pt-[22px] px-[28px] relative shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[26px] whitespace-nowrap">{`Ritwal Mesa & Mística`}</p>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
            <p className="font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[15px] whitespace-nowrap">4,6</p>
            <Star src={imgStar} /><Star src={imgStar} /><Star src={imgStar} /><Star src={imgStar} /><Star src={imgStarHalf} />
            <p className="font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[15px] text-[rgba(139,111,75,0.45)] whitespace-pre">{`(2.500)  ·  Restaurante  ·  $$$$`}</p>
          </div>
          <p className="font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[15px] whitespace-nowrap">Calle 16A Sur # 9E-190, Alto de Los Balsos, Medellín</p>
          <p className="font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#8b6f4b] text-[15px] whitespace-pre">
            <span className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] text-[#656636]">Abierto</span>
            <span className="leading-[normal]">{`  ·  Cierra a las 12 a.m.`}</span>
          </p>
          <div className="content-stretch flex gap-[10px] items-start pt-[8px] relative shrink-0">
            <Chip fill>Reservar</Chip><Chip>Menú</Chip><Chip>Cómo llegar</Chip><Chip>Llamar</Chip>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start not-italic pt-[14px] relative shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] relative shrink-0 text-[#8b6f4b] text-[15px] whitespace-nowrap">Preguntas y respuestas</p>
            <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#8b6f4b] text-[14px] w-[640px]">¿Se puede reservar un templo para un cumpleaños?</p>
            <p className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[14px] text-[rgba(139,111,75,0.45)] w-[640px]">
              <span className="font-['Inter:Semi_Bold'] font-semibold leading-[normal]">Respuesta del propietario:</span>
              <span className="leading-[normal]">{` Sí. Cada templo recibe hasta 18 personas. Escríbenos por WhatsApp y te ayudamos.`}</span>
            </p>
          </div>
        </div>
      </div>
      <Head left={1120}>Ejemplo de respuesta de un asistente de IA</Head>
      <div className="absolute bg-white content-stretch flex flex-col gap-[20px] items-start left-[1120px] overflow-clip p-[32px] rounded-[24px] top-[270px] w-[720px]" data-node-id="4062:568" data-name="Mock · Respuesta de IA">
        <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
          <div className="bg-[rgba(221,201,163,0.35)] content-stretch flex items-start px-[20px] py-[12px] relative rounded-[20px] shrink-0">
            <p className="font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[16px] whitespace-nowrap">¿Dónde comer con vista en Medellín?</p>
          </div>
        </div>
        <p className="font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#8b6f4b] text-[16px] w-[656px]">
          <span className="font-['Inter:Semi_Bold'] font-semibold leading-[25px]">{`Ritwal Mesa & Mística`}</span>
          <span className="leading-[25px]">, en el Alto de Los Balsos. Cocina de producto y coctelería botánica, con vista panorámica de la ciudad y templos privados para grupos. Tiene 4,6 en Google y se reserva en ritwalrestaurante.com.</span>
        </p>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
          <Chip>ritwalrestaurante.com</Chip><Chip>Google Maps</Chip><Chip>TripAdvisor</Chip>
        </div>
      </div>
      <Dot left={1015} top={595}>1</Dot>
      <Dot left={1015} top={497}>2</Dot>
      <Dot left={1788} top={363}>3</Dot>
      <Dot left={1788} top={462}>4</Dot>
      <Point left={365} top={830} n="1" title="Perfil de Google" w={650}>Completo: categoría, horarios, menú, enlace de reservas y fotos nuevas cada mes. Ahí se publican los eventos y se responden las preguntas.</Point>
      <Point left={365} top={958} n="2" title="Reseñas" w={650}>Se responden todas, con la voz de la marca y en el idioma en que llegan. Pedirlas siempre: Google y la IA miran la calificación y qué tan recientes son.</Point>
      <Point left={1120} top={830} n="3" title="AEO" w={670}>La IA recomienda lo que encuentra claro y consistente. La web responde en frases cortas dónde queda, qué cocina tiene, cómo se reserva y qué días hay música. Ritwal se describe siempre igual: cocina de producto y coctelería botánica.</Point>
      <Point left={1120} top={1008} n="4" title="Bases técnicas" w={670}>Mismo nombre, dirección y teléfono en la web, Google, Apple Maps, TripAdvisor y Precompro. Menú en texto en la web, en español y en inglés, además del flipbook. Datos estructurados de restaurante, menú, horarios y preguntas frecuentes.</Point>
    </Page>
  );
}
