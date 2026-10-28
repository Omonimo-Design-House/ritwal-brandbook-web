import { fv } from './_shared.jsx';
import { Page, Head } from './_contenido.jsx';

// [label, bg, text colour, left, width, how, goal, measure]
const STAGES = [
  ['01   Reconocimiento', 'bg-[rgba(221,201,163,0.35)]', '#8b6f4b', 385, 560,
    'Reels y TikTok en video vertical: el atardecer desde los templos, la coctelería botánica, los platos insignia y adelantos de los eventos. Ubicación: Medellín y personas de viaje en la ciudad.',
    'Llegar a locales y turistas nuevos.', 'Alcance, costo por mil y retención del video.'],
  ['02   Consideración', 'bg-[#ddc9a3]', '#8b6f4b', 425, 480,
    'Contenido de creadores como anuncio de colaboración en Meta y Spark Ads en TikTok. Retargeting a quien vio buena parte de un video o interactuó con el perfil.',
    'Generar deseo con la credibilidad de terceros.', 'Visitas al perfil, guardados, compartidos y clics a la web.'],
  ['03   Investigación', 'bg-[#656636]', '#f7f1e8', 465, 400,
    'Google Ads en Búsqueda y Maps para quien busca restaurante con vista, brunch o coctelería en Medellín. Perfil de Empresa completo y con reseñas recientes.',
    'Aparecer con información clara cuando la persona decide.', 'Clics a reservar, llamadas y rutas.'],
  ['04   Reserva', 'bg-[#8b6f4b]', '#f7f1e8', 505, 320,
    'Conversión para el Brunch del Sol, el Son Cubano y las Noches frente al fuego, con fecha y cupo. Botón a WhatsApp para cotizar eventos privados. Retargeting a quien visitó la web o Precompro.',
    'Que la persona reserve o pida cotización.', 'Reservas, cotizaciones y costo de cada una.'],
];
const Cell = ({ left, top, w, children }) => (
  <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic text-[#8b6f4b] text-[18px]" style={{ ...fv, left, top, width: w }}>{children}</p>
);

export default function PautaEtapasDeLaPauta() {
  return (
    <Page id="4066:573" name="Pauta · Etapas de la pauta" title="Etapas de la pauta" sub="Del primer video a la reserva"
      note={['Cada etapa tiene su formato, su objetivo y su métrica.', 'Para medir la reserva: Pixel y API de Conversiones de Meta, conversiones de Google Ads en la web y enlaces con UTM hacia Precompro.']}>
      <Head left={1000} top={250}>Cómo</Head>
      <Head left={1450} top={250}>Objetivo</Head>
      <Head left={1660} top={250}>Mide</Head>
      {STAGES.map(([label, bg, color, left, w, how, goal, measure], i) => {
        const top = 296 + 136 * i;
        return (
          <div key={label} className="contents">
            <div className={`absolute ${bg} content-stretch flex h-[124px] items-center justify-center overflow-clip rounded-[20px]`} style={{ left, top, width: w }}>
              <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[20px] tracking-[4px] uppercase whitespace-pre" style={{ ...fv, color }}>{label}</p>
            </div>
            {i > 0 && <div className="absolute bg-[rgba(139,111,75,0.45)] h-px left-[1000px] w-[840px]" style={{ top: top - 6 }} data-name="Regla" />}
            <Cell left={1000} top={top + 16} w={420}>{how}</Cell>
            <Cell left={1450} top={top + 16} w={180}>{goal}</Cell>
            <Cell left={1660} top={top + 16} w={180}>{measure}</Cell>
          </div>
        );
      })}
    </Page>
  );
}
