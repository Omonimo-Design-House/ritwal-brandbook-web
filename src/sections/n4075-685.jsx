import { fv } from './_shared.jsx';
import { Page, Head } from './_contenido.jsx';

const DOT_PUB = "https://www.figma.com/api/mcp/asset/c019b0e3-e9f7-42cc-8747-4c2ceb0941bc.svg";
const DOT_EVT = "https://www.figma.com/api/mcp/asset/067d9f83-3c2c-4517-9eef-ff3b5b073eba.svg";
const Dot = ({ src }) => <div className="relative shrink-0 size-[10px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={src} /></div>;

// [day, items]; item = [text, isEvent]
const WEEK = [
  ['Lun', [['Café Ritwal · post 9:00 a.m., cada dos semanas']]],
  ['Mar', null],
  ['Mié', [['Historia · adelanto del Son Cubano']]],
  ['Jue', [['Son Cubano · 7:30 a 9:30 p.m.', true], ['Reel · 12:00 m.'], ['Historias en vivo · 8:00 p.m.']]],
  ['Vie', [['Reel o carrusel del Brunch del Sol · 6:00 p.m.']]],
  ['Sáb', [['Brunch del Sol · 10:00 a.m. a 2:00 p.m.', true], ['Historia · 9:00 a.m.']]],
  ['Dom', [['Brunch del Sol · 10:00 a.m. a 2:00 p.m.', true], ['Historia · 9:00 a.m.']]],
];
const EVENTS = [
  ['Café Ritwal', 'Todos los días, en la carta y en empaque para llevar.', 'Post en la mañana, 9:00 a.m.', 'Cada dos semanas, dentro de Comida y bebida.'],
  ['Brunch del Sol', 'Sábados, domingos y festivos, de 10:00 a.m. a 2:00 p.m.', 'Viernes 6:00 p.m. en el feed. Sábado y domingo 9:00 a.m. en historias.', 'Cada dos semanas, turnándose con el Son Cubano.'],
  ['Jueves de Son Cubano', 'Jueves, de 7:30 a 9:30 p.m.', 'Miércoles, adelanto en historias. Jueves 12:00 m., reel. Jueves en la noche, historias en vivo.', 'Cada dos semanas, turnándose con el Brunch del Sol.'],
  ['Noches frente al fuego', 'Según programación.', 'Tres días antes en el feed. El mismo día en historias.', 'Cada vez que hay fecha.'],
  ['Yoga Saludo al Sol', 'Yoga y brunch, según programación.', 'Una semana antes en el feed. El día anterior en historias.', 'Cada vez que hay fecha.'],
  ['Fechas especiales', 'Día del Padre, Feria de las Flores, Amor y Amistad, fin de año.', 'Dos semanas antes en el feed y en pauta. La semana del evento, en historias.', 'Tienen prioridad la semana en que ocurren.'],
];
const MIX = [['Semana 1', 'Son Cubano'], ['Semana 2', 'Brunch del Sol'], ['Semana 3', 'Son Cubano'], ['Semana 4', 'Brunch del Sol'], ['Cuando haya fecha', 'Evento especial']];
const RULES = ['En el feed, nunca dos publicaciones seguidas del mismo evento.', 'Los eventos semanales salen todas las semanas en historias. En el feed se turnan.',
  'Un evento con fecha toma el lugar del evento fijo esa semana.', 'Así salen cinco publicaciones de Momentos al mes: cuatro de eventos fijos y una de evento con fecha.'];
const small = "font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(139,111,75,0.45)] tracking-[1.68px] uppercase whitespace-nowrap";

export default function ContenidoEventos() {
  return (
    <Page id="4075:685" name="Contenido · Eventos" title="Eventos" sub="Cuándo ocurren y cuándo se publican"
      note={['Los eventos se mezclan con el resto del contenido para que el feed no se vuelva una cartelera.', 'En el feed cuentan dentro de la temática Momentos.']}>
      <Head left={365} top={250}>Una semana tipo</Head>
      {WEEK.map(([day, items], i) => (
        <div key={day} className="[word-break:break-word] absolute bg-white content-stretch flex flex-col gap-[10px] h-[186px] items-start overflow-clip p-[16px] rounded-[24px] top-[286px] w-[200.571px]" style={{ left: 365 + 212.571 * i }} data-name={`Día ${day}`}>
          <p className={small} style={fv}>{day}</p>
          {!items && <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] relative shrink-0 text-[15px] text-[rgba(139,111,75,0.45)] whitespace-nowrap" style={fv}>Sin eventos</p>}
          {items && items.map(([t, ev]) => ev ? (
            <div key={t} className="bg-[#ddc9a3] content-stretch flex gap-[8px] items-start px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-full">
              <Dot src={DOT_EVT} />
              <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[18px] not-italic relative shrink-0 text-[#8b6f4b] text-[14px] w-[130.571px]" style={fv}>{t}</p>
            </div>
          ) : (
            <div key={t} className="content-stretch flex gap-[8px] items-start pl-[10px] relative shrink-0 w-full">
              <Dot src={DOT_PUB} />
              <p className="font-['Google_Sans_Flex:Light'] font-light leading-[18px] not-italic relative shrink-0 text-[#8b6f4b] text-[14px] w-[140.571px]" style={fv}>{t}</p>
            </div>
          ))}
        </div>
      ))}
      <div className="absolute content-stretch flex gap-[28px] items-start left-[365px] top-[490px]">
        {[[DOT_EVT, 'Evento'], [DOT_PUB, 'Publicación']].map(([d, l]) => (
          <div key={l} className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <Dot src={d} />
            <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[16px] whitespace-nowrap" style={fv}>{l}</p>
          </div>
        ))}
      </div>
      {EVENTS.map(([name, ...vals], i) => (
        <div key={name} className="[word-break:break-word] absolute bg-white content-stretch flex flex-col gap-[12px] h-[323px] items-start overflow-clip p-[30px] rounded-[24px] w-[476px]" style={{ left: 365 + 500 * (i % 3), top: i < 3 ? 560 : 907 }} data-name={`Evento · ${name}`}>
          <p className="font-['Google_Sans_Flex:Thin'] font-thin leading-[48px] relative shrink-0 text-[#8b6f4b] text-[40px] w-[416px]" style={fv}>{name}</p>
          {['Ocurre', 'Se publica', 'En el feed'].map((k, j) => (
            <div key={k} className="content-stretch flex gap-[14px] items-start leading-[normal] not-italic pt-[6px] relative shrink-0 w-full">
              <p className="font-['Google_Sans_Flex:Medium'] font-medium relative shrink-0 text-[15px] text-[rgba(139,111,75,0.45)] w-[110px]" style={fv}>{k}</p>
              <p className="font-['Google_Sans_Flex:Light'] font-light relative shrink-0 text-[#8b6f4b] text-[18px] w-[292px]" style={fv}>{vals[j]}</p>
            </div>
          ))}
        </div>
      ))}
      <div className="[word-break:break-word] absolute bg-[#ddc9a3] content-stretch flex flex-col gap-[18px] items-start leading-[normal] left-[365px] not-italic overflow-clip p-[32px] rounded-[24px] top-[1278px] w-[1476px]" data-node-id="4075:842" data-name="Cómo se mezclan">
        <p className="font-['Google_Sans_Flex:Medium'] font-medium relative shrink-0 text-[#8b6f4b] text-[18px] tracking-[4.14px] uppercase whitespace-nowrap" style={fv}>Cómo se mezclan</p>
        <div className="content-stretch flex font-['Google_Sans_Flex:Medium'] font-medium gap-[12px] items-start relative shrink-0 w-full whitespace-nowrap">
          {MIX.map(([w, e]) => (
            <div key={w} className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px px-[18px] py-[14px] relative rounded-[16px]">
              <p className="relative shrink-0 text-[14px] text-[rgba(139,111,75,0.45)] tracking-[1.68px] uppercase" style={fv}>{w}</p>
              <p className="relative shrink-0 text-[#8b6f4b] text-[18px]" style={fv}>{e}</p>
            </div>
          ))}
        </div>
        <div className="content-stretch flex font-['Google_Sans_Flex:Light'] font-light gap-[40px] items-start relative shrink-0 text-[#8b6f4b] text-[18px] w-full">
          {RULES.map(r => <p key={r} className="relative shrink-0 w-[323px]" style={fv}>{r}</p>)}
        </div>
      </div>
    </Page>
  );
}
