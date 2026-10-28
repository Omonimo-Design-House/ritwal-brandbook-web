import { fv } from './_shared.jsx';
import { Page } from './_contenido.jsx';

const LEVELS = [
  ['Alcance', 'bg-[rgba(221,201,163,0.35)]', '#8b6f4b', 365, 250, 1000, 'Visualizaciones, cuentas alcanzadas y seguidores nuevos. Dicen si la marca llega a gente nueva.'],
  ['Interacción', 'bg-[#ddc9a3]', '#8b6f4b', 455, 416, 820, 'Envíos, guardados, comentarios y tiempo de visualización. Muestran interés real.'],
  ['Conversión', 'bg-[#8b6f4b]', '#f7f1e8', 545, 582, 640, 'Reservas en Precompro por canal, cotizaciones por WhatsApp, llamadas y rutas desde el Perfil de Google.'],
];
const CHECKS = ['Reservas y cotizaciones por canal', 'Calificación y reseñas nuevas en Google y TripAdvisor', 'Qué temáticas y formatos funcionaron', 'Qué se ajusta el mes siguiente'];

export default function ContenidoMedicion() {
  return (
    <Page id="4064:1014" name="Contenido · Medición" title="Medición" sub="Qué se mide y cada cuánto"
      note={['Los likes dicen poco. Lo que se sigue es si la marca llega a gente nueva, si esa gente se interesa y si termina reservando.']}>
      {LEVELS.map(([name, bg, color, left, top, w, text]) => (
        <div key={name} className={`[word-break:break-word] absolute ${bg} content-stretch flex flex-col gap-[10px] h-[150px] items-center leading-[normal] not-italic overflow-clip px-[40px] py-[26px] rounded-[24px]`} style={{ left, top, width: w, color }} data-name={`Nivel ${name}`}>
          <p className="font-['Google_Sans_Flex:Medium'] font-medium relative shrink-0 text-[18px] tracking-[4.14px] uppercase whitespace-nowrap" style={fv}>{name}</p>
          <p className="font-['Google_Sans_Flex:Light'] font-light relative shrink-0 text-[19px] text-center" style={{ ...fv, width: w - 80 }}>{text}</p>
        </div>
      ))}
      <div className="absolute bg-white content-stretch flex flex-col gap-[14px] items-start left-[1420px] overflow-clip p-[30px] rounded-[24px] top-[250px] w-[420px]" data-node-id="4064:1061" data-name="Revisión mensual">
        <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[18px] tracking-[4.14px] uppercase whitespace-nowrap" style={fv}>Revisión mensual</p>
        <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[18px] w-[360px]" style={fv}>Cada mes, con el calendario al lado:</p>
        {CHECKS.map(c => (
          <div key={c} className="content-stretch flex gap-[12px] items-start relative shrink-0">
            <div className="border-[#8b6f4b] border-[1.5px] border-solid relative rounded-[4px] shrink-0 size-[16px]" />
            <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[18px] w-[330px]" style={fv}>{c}</p>
          </div>
        ))}
      </div>
    </Page>
  );
}
