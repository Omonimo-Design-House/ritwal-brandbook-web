import { fv, Chrome, Subtitle, SideNote } from './_shared.jsx';

const imgLogoRitwal = "https://www.figma.com/api/mcp/asset/a3b93bea-7c50-4de3-8950-202122ae14be.svg";

const Sq = ({ left, top }) => <div className="absolute bg-[rgba(217,217,217,0.5)] size-[70px]" style={{ left, top }} />;
const Box = ({ left, top, w, h }) => <div className="absolute border-[1.5px] border-solid border-white" style={{ left, top, width: w, height: h }} data-name="Logo box" />;
const Pct = ({ left, top }) => (
  <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium h-[18.96px] leading-[normal] not-italic text-[#8b6f4b] text-[13px] w-[34.353px]" style={{ ...fv, left, top }}>50%</p>
);

export default function Component12LogotipoClearSpace() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="14:397" data-name="12.Logotipo Clear space">
      <Chrome title="Logotipo" metaLeft={81} titleLeft={365} />
      <Subtitle>Clear Space</Subtitle>
      <SideNote left={81} w={255} paras={[
        'El logo de Ritwal es ligero y se sostiene en trazos finos, así que necesita aire alrededor. Le damos un margen que ningún otro elemento (texto, imagen, borde) puede invadir. Ese espacio protege su legibilidad.',
        'Se calcula dejando un margen vacío equivalente al 50% de su altura.',
      ]} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light_Italic'] font-light italic leading-[normal] left-[734px] text-[16px] text-[rgba(139,111,75,0.45)] top-[554px] whitespace-nowrap" data-node-id="15:510" style={fv}>
        Clear Space: 50% de la altura del logo a cada lado
      </p>
      <Sq left={734} top={248} /><Sq left={734} top={458} /><Sq left={1305.56} top={458} /><Sq left={1305.56} top={248} />
      <Box left={804} top={318} w={501.557} h={140} />
      <Box left={734} top={248} w={641.557} h={70} />
      <Box left={734} top={458} w={641.557} h={70} />
      <Box left={734} top={388} w={641.557} h={70} />
      <Box left={1305.56} top={248} w={70} h={280} />
      <Box left={734} top={248} w={70} h={280} />
      <Pct left={1323.38} top={483.52} /><Pct left={1323.38} top={273.52} /><Pct left={751.82} top={273.52} /><Pct left={751.82} top={483.52} />
      <div className="-translate-y-1/2 absolute h-[140px] left-[804px] top-[calc(50%+31px)] w-[501.557px]" data-node-id="2013:766" data-name="Logo Ritwal">
        <img alt="Ritwal" className="absolute block inset-0 max-w-none size-full" src={imgLogoRitwal} />
      </div>
    </div>
  );
}
