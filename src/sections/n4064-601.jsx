import { fv, Img } from './_shared.jsx';
import { Page, Tag } from './_contenido.jsx';

const imgIcono = "https://www.figma.com/api/mcp/asset/88579fff-69ce-443d-b5d8-43ed976c34a1.svg";
const imgFlecha = "https://www.figma.com/api/mcp/asset/7eacf029-9093-41cd-8000-655b9789ddfa.svg";
const imgIcono1 = "https://www.figma.com/api/mcp/asset/5c8629b1-ec88-4861-8efc-40b2dd1d279b.svg";
const imgIcono2 = "https://www.figma.com/api/mcp/asset/a75a4a31-97d5-4419-8d06-8d89731980ab.svg";
const imgIcono3 = "https://www.figma.com/api/mcp/asset/7b1f19da-7536-41e7-b479-3888b86fc100.svg";

const STATIONS = [
  ['01', 'Descubre', imgIcono, ['Instagram', 'TikTok', 'Pauta en Meta y TikTok']],
  ['02', 'Busca', imgIcono1, ['Google', 'Maps', 'ChatGPT y Gemini']],
  ['03', 'Reserva', imgIcono2, ['ritwalrestaurante.com', 'Precompro', 'WhatsApp']],
  ['04', 'Vuelve', imgIcono3, ['Reseñas', 'Comunidad', 'Eventos fijos']],
];

export default function ContenidoCanales() {
  return (
    <Page id="4064:601" name="Contenido · Canales" title="Canales" sub="El recorrido hasta la mesa"
      note={['Todos los canales llevan al mismo lugar: una mesa reservada en Precompro.', 'La web es el centro al que apuntan las redes, Google y la pauta.']}>
      <div className="absolute bg-[rgba(139,111,75,0.45)] h-[2px] left-[549.5px] top-[359px] w-[1109px]" data-name="Recorrido" />
      {STATIONS.map(([num, name, icon, tags], i) => (
        <div key={num} className="contents">
          <div className="absolute bg-white border-[#8b6f4b] border-[1.5px] border-solid content-stretch flex items-center justify-center rounded-[40px] size-[80px] top-[320px]" style={{ left: 509.5 + 369 * i }} data-name={`Estación ${name}`}>
            <div className="relative shrink-0 size-[34px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} /></div>
          </div>
          {i < 3 && <Img style={{ left: 727 + 369 * i, top: 353, width: 14, height: 14 }} src={imgFlecha} />}
          <div className="absolute content-stretch flex flex-col gap-[16px] items-center top-[432px] w-[319px]" style={{ left: 390 + 369 * i }} data-name={`Detalle ${name}`}>
            <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[15px] text-[rgba(139,111,75,0.45)] tracking-[1.8px] whitespace-nowrap" style={fv}>{num}</p>
            <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[22px] tracking-[5.06px] uppercase whitespace-nowrap" style={fv}>{name}</p>
            <div className="content-start flex flex-wrap gap-[8px] items-start justify-center relative shrink-0 w-full">
              {tags.map(t => <Tag key={t}>{t}</Tag>)}
            </div>
          </div>
        </div>
      ))}
    </Page>
  );
}
