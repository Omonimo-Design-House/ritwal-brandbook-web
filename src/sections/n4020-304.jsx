import { fv, Chrome, Subtitle, SideNote } from './_shared.jsx';

const imgIsotipoRitwal = "https://www.figma.com/api/mcp/asset/1778a899-b303-4e53-ae26-8df52c7d05f6.svg";

const Sq = ({ left, top }) => <div className="absolute bg-[rgba(217,217,217,0.5)] size-[70px]" style={{ left, top }} />;
const Box = ({ left, top, w, h }) => <div className="absolute border-[1.5px] border-solid border-white" style={{ left, top, width: w, height: h }} data-name="Logo box" />;
const Pct = ({ left, top }) => (
  <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium h-[18.96px] leading-[normal] not-italic text-[#8b6f4b] text-[13px] w-[34.353px]" style={{ ...fv, left, top }}>25%</p>
);

export default function Component19IsotipoClearSpace() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="4020:304" data-name="19 - Isotipo clear space">
      <Chrome title="Isotipo" metaLeft={81} titleLeft={365} />
      <Subtitle>Clear Space</Subtitle>
      <SideNote left={81} w={255} paras={[
        'El isotipo es más compacto que el logotipo y necesita menos aire alrededor para leerse con claridad. El principio es el mismo: nada invade ese margen.',
        'Se calcula dejando un espacio vacío equivalente al 25% de su altura a cada lado.',
      ]} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light_Italic'] font-light italic leading-[normal] left-[882px] text-[16px] text-[rgba(139,111,75,0.45)] top-[622px] whitespace-nowrap" data-node-id="4020:320" style={fv}>
        Clear Space: 25% de la altura del isotipo a cada lado
      </p>
      <Sq left={882} top={178} /><Sq left={882} top={528} /><Sq left={1157.56} top={528} /><Sq left={1157.56} top={178} />
      <Box left={952} top={248} w={205.56} h={280} />
      <Box left={882} top={178} w={345.56} h={70} />
      <Box left={882} top={528} w={345.56} h={70} />
      <Box left={882} top={388} w={345.56} h={140} />
      <Box left={1157.56} top={178} w={70} h={420} />
      <Box left={882} top={178} w={70} h={420} />
      <Pct left={1175.38} top={553.52} /><Pct left={1175.38} top={203.52} /><Pct left={899.82} top={203.52} /><Pct left={899.82} top={553.52} />
      <div className="absolute h-[280px] left-[952px] top-[248px] w-[205.56px]" data-node-id="4020:341" data-name="Isotipo Ritwal">
        <img alt="Isotipo Ritwal" className="absolute block inset-0 max-w-none size-full" src={imgIsotipoRitwal} />
      </div>
    </div>
  );
}
