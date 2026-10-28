import { fv, Pill } from './_shared.jsx';
import { Page, TitleText } from './_contenido.jsx';

const THEMES = [
  ['Momentos', '5cf220fb-6f08-4d72-87b8-98aec6303c62', '22ae4a33-2a27-49e8-abca-f4ebafe7df8a', 344,
    'El Brunch del Sol, el Son Cubano de los jueves, las Noches frente al fuego, el Yoga Saludo al Sol y cumpleaños en los templos.',
    ['4084:646', '4084:647', 358, 'https://drive.google.com/drive/folders/1TpvPotyftmG6qJWuJYpcjP4zDyQKKACd?usp=drive_link']],
  ['Locación', 'ba408564-87a9-4b3c-a53d-3b320b76d23a', 'f96120f0-2b0d-4d56-ae46-17e5977fde81', 344,
    'Ritwal como balcón a Medellín; los 8 templos, el salón, el atardecer, el Wine Garden, Materiales, naturaleza, aves…',
    ['4084:649', '4084:650', 739, 'https://drive.google.com/drive/folders/1-IbqWqrCYerQAa6_HKLDfrKi1kmlplAc?usp=sharing']],
  ['Comida y bebida', '6b9a5ffe-af0a-45ed-b3e1-7980e35bbe2c', 'b406ff2d-61fa-4490-914d-9daf1026caf0', 354,
    'Cocina de producto y coctelería botánica. Resaltar las joyas de la corona: las muelas de cangrejo, la langosta y el tomahawk.',
    ['4084:651', '4084:652', 1113, 'https://drive.google.com/drive/folders/1J91PMm-R6CYhn2UBp4BZdWYKuvaQoLhe?usp=sharing']],
  ['Personas', 'bc4d2c79-d496-4b22-ad5b-87f9c861b367', 'd43ffa72-f712-499f-a0bc-0cd302a09e0c', 344,
    'Colaboradores y comensales: la cocina, la barra y los meseros que los clientes nombran en sus reseñas.',
    ['4084:653', '4084:654', 1487, 'https://drive.google.com/drive/folders/10d9yNhkycRc_jtmoiPP8OcY_SfZ4nZ1m?usp=sharing']],
];
const asset = (id, ext) => `https://www.figma.com/api/mcp/asset/${id}.${ext}`;
const MIX = '#993921 #8b6f4b #656636 #ddc9a3 #8b6f4b #993921 #656636 #ddc9a3 #993921 #8b6f4b #ddc9a3 #656636 #8b6f4b #993921 #656636 #ddc9a3 #993921 #8b6f4b #656636 #ddc9a3'.split(' ');

export default function ContenidoTematicasDeContenido() {
  return (
    <Page id="4064:930" name="Contenido · Temáticas de contenido" title="Temáticas de contenido" sub="20 publicaciones al mes, 5 por temática"
      note={['Cuatro temáticas que se repiten cada mes en partes iguales.', 'El color de cada una se usa también en el calendario.']}>
      {THEMES.map(([name, img, dot, w, text, [pid, lid, pl, href]], i) => {
        const left = 365 + 374 * i;
        return (
          <div key={name} className="contents">
            <div className="absolute h-[400px] rounded-[24px] top-[250px] w-[354px]" style={{ left }} data-name="Espacio para imagen">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={asset(img, 'png')} />
            </div>
            <div className="absolute bg-white content-stretch flex gap-[8px] items-center px-[14px] py-[7px] rounded-[20px] top-[268px]" style={{ left: left + 18 }}>
              <div className="relative shrink-0 size-[10px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={asset(dot, 'svg')} /></div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[13px] whitespace-nowrap">{name}</p>
            </div>
            <TitleText left={left} top={685} w={w} size={18} lh={21} gap={39} title={name}>{text}</TitleText>
            <Pill id={pid} linkId={lid} left={pl} top={808} h={50} href={href}>descargar plantillas</Pill>
          </div>
        );
      })}
      <div className="absolute bg-[rgba(139,111,75,0.45)] h-px left-[365px] top-[904px] w-[1476px]" data-name="Regla" />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium h-[49px] leading-[normal] left-[365px] not-italic text-[#8b6f4b] text-[18px] top-[934px] tracking-[4.14px] uppercase w-[273px]" style={fv}>{`¿Cómo deber ser el mix de contenido? `}</p>
      {MIX.map((c, i) => <div key={i} className="absolute rounded-[10px] size-[50px] top-[933px]" style={{ left: 665 + 58 * i, background: c }} />)}
    </Page>
  );
}
