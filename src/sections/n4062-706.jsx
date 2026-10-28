import { fv, Img } from './_shared.jsx';
import { Page } from './_contenido.jsx';

const a = (id) => `https://www.figma.com/api/mcp/asset/${id}.svg`;
const LEGEND = [['92448191-2c9e-4628-9297-8ea2aa2d85bd', 'Momentos'], ['5572f2b2-cccc-4abd-a196-02a1f901fc13', 'Locación'],
  ['4c900811-9498-4c30-9f3f-34bde8c5ebf3', 'Comida y bebida'], ['80379532-fa64-4505-ab58-4106f91f784c', 'Personas']];
// [day, n, bar colour, slot, text, theme, withPauta]
const DAYS = [
  ['Lun', '31', '#656636', 'Google · 10:00 a.m.', 'Fotos nuevas en el Perfil de Google', 'Locación'],
  ['Mar', '1', '#8b6f4b', 'Instagram · Carrusel · 5:00 p.m.', 'Espresso Martini clásico', 'Comida y bebida'],
  ['Mié', '2', '#ddc9a3', 'Instagram · Historia · 12:00 m.', 'Un día en la barra', 'Personas'],
  ['Jue', '3', '#993921', 'Instagram · Reel · 12:00 m.', 'Son Cubano esta noche', 'Momentos', true],
  ['Vie', '4', '#8b6f4b', 'TikTok · 6:00 p.m.', 'Así se prepara un cóctel botánico', 'Comida y bebida'],
  ['Sáb', '5', '#993921', 'Instagram · Historia · 9:00 a.m.', 'Brunch del Sol: hoy desde las 10', 'Momentos'],
  ['Dom', '6', '#656636', 'Instagram · Reel · 5:30 p.m.', 'Atardecer desde los templos', 'Locación'],
];
const SHEET = [['Fecha y hora', 'Jueves 3 de septiembre, 12:00 m.'], ['Plataforma', 'Instagram'], ['Formato', 'Reel'], ['Temática', 'Momentos'],
  ['Caption', '«Hoy, desde las 7:30 p.m., suena el son cubano en vivo con Medellín de fondo. Reserva tu mesa. Link en bio.»'],
  ['Pauta', 'Sí, a personas en Medellín y de viaje en la ciudad'], ['Notas', 'Usar video del son cubano del jueves anterior']];

export default function ContenidoCalendario() {
  return (
    <Page id="4062:706" name="Contenido · Calendario" title="Calendario" sub="Una semana tipo"
      note={['Planear con anticipación cómo se verá cada semana en redes.', 'Permite revisar el mix de formatos, las temáticas y las etapas del cliente: reconocimiento, consideración y reserva.']}>
      {DAYS.map(([d, n, bar, slot, text, theme, pauta], i) => (
        <div key={d} className="absolute bg-white content-stretch flex flex-col gap-[14px] h-[330px] items-start overflow-clip px-[14px] py-[16px] rounded-[20px] top-[250px] w-[200px]" style={{ left: 365 + 212.6 * i }} data-name={`Día ${d} ${n}`}>
          <div className="content-stretch flex gap-[8px] items-baseline leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
            <p className="font-['Google_Sans_Flex:Medium'] font-medium relative shrink-0 text-[15px] text-[rgba(139,111,75,0.45)] tracking-[1.8px] uppercase" style={fv}>{d}</p>
            <p className="font-['Google_Sans_Flex:Light'] font-light relative shrink-0 text-[#8b6f4b] text-[28px]" style={fv}>{n}</p>
          </div>
          <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
            <div className="relative rounded-[2px] self-stretch shrink-0 w-[4px]" style={{ background: bar }} />
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative">
              <p className="font-['Inter:Semi_Bold'] font-semibold leading-[16px] relative shrink-0 text-[#8b6f4b] text-[12px] w-[144px]">{slot}</p>
              <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#8b6f4b] text-[13px] w-[144px]">{text}</p>
              <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-[rgba(139,111,75,0.45)] whitespace-nowrap">{theme}</p>
              {pauta && (
                <div className="bg-[#8b6f4b] content-stretch flex items-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                  <p className="font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#f7f1e8] text-[13px] whitespace-nowrap">Con pauta</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="absolute content-stretch flex gap-[28px] items-start left-[365px] top-[610px]" data-name="Leyenda">
        {LEGEND.map(([id, l]) => (
          <div key={l} className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[12px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={a(id)} /></div>
            <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[16px] whitespace-nowrap" style={fv}>{l}</p>
          </div>
        ))}
      </div>
      <div className="[word-break:break-word] absolute bg-white content-stretch flex flex-col gap-[12px] items-start leading-[normal] left-[1080px] not-italic overflow-clip p-[32px] rounded-[24px] top-[690px] w-[760px]" data-node-id="4062:829" data-name="Ficha · Jueves 3">
        <p className="font-['Google_Sans_Flex:Medium'] font-medium relative shrink-0 text-[#8b6f4b] text-[16px] tracking-[3.68px] uppercase whitespace-nowrap" style={fv}>Cada publicación lleva</p>
        {SHEET.map(([k, v]) => (
          <div key={k} className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-['Google_Sans_Flex:Medium'] font-medium relative shrink-0 text-[16px] text-[rgba(139,111,75,0.45)] w-[150px]" style={fv}>{k}</p>
            <p className="font-['Google_Sans_Flex:Light'] font-light relative shrink-0 text-[#8b6f4b] text-[18px] w-[530px]" style={fv}>{v}</p>
          </div>
        ))}
      </div>
      <div className="absolute h-[148px] left-[1078px] top-[582px] w-[24.8px]" data-name="Guía">
        <div className="absolute inset-[0_-3.02%_-0.51%_0]"><img alt="" className="block max-w-none size-full" src={a('0216e4fc-c267-4e47-869f-7de32820c8ac')} /></div>
      </div>
      <Img style={{ left: 1098.8, top: 578, width: 8, height: 8 }} src={a('73dbddb7-c4a3-40a3-bf6d-4b570e80b189')} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light'] font-light leading-[normal] left-[365px] not-italic text-[#8b6f4b] text-[20px] top-[700px] w-[560px]" style={fv}>
        Cada semana mezcla formatos y temáticas, y deja la pauta para lo que lleva a reservar: el evento de la noche, el brunch del fin de semana.
      </p>
    </Page>
  );
}
