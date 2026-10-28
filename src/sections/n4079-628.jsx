import { fv } from './_shared.jsx';
import { Page, TitleText } from './_contenido.jsx';

// The scenes and paper textures are thousands of vectors in Figma; they are exported as images.
const SCENES = [
  [365, "https://www.figma.com/api/mcp/asset/e4ae119d-68c8-4c9c-a8f6-1a9185ada52b.png", 'Carta de vinos'],
  [869, "https://www.figma.com/api/mcp/asset/ff2f987b-1639-4ecf-a641-00bcbe446ab7.png", 'Invitación con fotografía'],
  [1373, "https://www.figma.com/api/mcp/asset/0f60cc2d-fa6a-45a0-a595-88ad67315f7d.png", 'Bolsa'],
];
// [name, spec, use, swatch (colour or texture image)]
const PAPERS = [
  ['Folding 830PC Deep Black', '338 g · liso', 'Para: Cajas y empaques', '#2b2723'],
  ['Classic Linen Natural White', '216 g · textura lino', 'Para: Cartas y menús', "https://www.figma.com/api/mcp/asset/9ecdce60-e9d4-4f20-9d69-18ed75fe66c6.png"],
  ['Classic Stipple Natural White', '270 g · textura punteada', 'Para: Tarjetas e invitaciones', "https://www.figma.com/api/mcp/asset/a8e25234-bf11-4034-87cf-22f799a8ca54.png"],
  ['Estate Label N.º 8', '89 g · papel para etiquetas', 'Para: Etiquetas de café y botellas', "https://www.figma.com/api/mcp/asset/1c888680-8704-430b-a755-62e1e511a89d.png"],
  ['Superfine Eggshell Soft White', '216 g · textura cáscara de huevo', 'Para: Piezas con fotografía', "https://www.figma.com/api/mcp/asset/82d90e83-658e-4db7-8f84-df584549c69b.png"],
  ['Strathmore Premium Super Smooth', '216 g · liso, Natural White', 'Para: Piezas con fotografía e ilustración', '#f5f0e5'],
  ['Vía Lino Negro', '216 g · textura lino', 'Para: Portadas de carta', "https://www.figma.com/api/mcp/asset/f1527b7c-08b9-4e42-a32a-247f7b0225d9.png"],
  ['Vía Parchment Smooth', '216 g · liso, tipo pergamino', 'Para: Certificados y cartas', '#eee3cb'],
];
const Small = ({ left, top, children }) => (
  <p className="absolute font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic text-[17px] text-[rgba(139,111,75,0.45)] w-[468px]" style={{ ...fv, left, top }}>{children}</p>
);

export default function ImpresosPapeles() {
  return (
    <Page id="4079:628" name="Impresos · Papeles" title="Impresos" sub="Papeles"
      note={['Cada pieza elige su papel según lleve solo texto, lleve imagen o sea una pieza especial.', 'Evitar papeles brillantes o de baja calidad. Gramajes altos, salvo en piezas con plegado.']}>
      {SCENES.map(([left, src, alt]) => (
        <div key={left} className="absolute h-[440px] top-[250px] w-[468px]" style={{ left }}>
          <img alt={alt} className="absolute block inset-0 max-w-none size-full" src={src} />
        </div>
      ))}
      <TitleText left={365} top={720} w={468} title="Piezas de texto">Sin fotografía ni ilustración: papeles de color que remitan a la paleta de la marca.</TitleText>
      <Small left={365} top={816}>Carta de vinos, tarjetas de reserva, cartas de bienvenida.</Small>
      <TitleText left={869} top={720} w={468} title="Piezas con imagen">Papel crema, liso y sin textura marcada, para no afectar la impresión.</TitleText>
      <Small left={869} top={816}>Postales, invitaciones y menús con fotografía o ilustración.</Small>
      <TitleText left={1373} top={720} w={468} title="Piezas especiales">El papel puede ser protagonista, con texturas y gramajes altos. Las bolsas de comida van en papeles gruesos y resistentes, dentro de la paleta.</TitleText>
      <Small left={1373} top={841}>Empaques, bolsas, cajas de regalo.</Small>
      <div className="absolute bg-[rgba(139,111,75,0.45)] h-px left-[365px] top-[912px] w-[1476px]" />
      <p className="absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[365px] not-italic text-[#8b6f4b] text-[18px] top-[942px] tracking-[4.14px] uppercase whitespace-nowrap" style={fv}>Papeles recomendados</p>
      {PAPERS.map(([name, spec, use, sw], i) => (
        <div key={name} className="absolute bg-white content-stretch flex flex-col h-[263px] items-start overflow-clip rounded-[20px] w-[351px]" style={{ left: 365 + 375 * (i % 4), top: i < 4 ? 992 : 1279 }} data-name={`Papel · ${name}`}>
          <div className="h-[150px] relative shrink-0 w-[351px]" style={sw.startsWith('#') ? { background: sw } : undefined} data-name="Muestra">
            {!sw.startsWith('#') && <img alt="" className="absolute block inset-0 max-w-none size-full" src={sw} />}
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic pb-[18px] pt-[18px] px-[22px] relative shrink-0 w-full">
            <p className="font-['Google_Sans_Flex:Medium'] font-medium relative shrink-0 text-[#8b6f4b] text-[18px]" style={fv}>{name}</p>
            <p className="font-['Google_Sans_Flex:Light'] font-light relative shrink-0 text-[#8b6f4b] text-[16px]" style={fv}>{spec}</p>
            <p className="font-['Google_Sans_Flex:Light'] font-light relative shrink-0 text-[16px] text-[rgba(139,111,75,0.45)]" style={fv}>{use}</p>
          </div>
        </div>
      ))}
    </Page>
  );
}
