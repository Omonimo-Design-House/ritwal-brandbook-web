import { Chrome, Subtitle, SideNote, PhotoRow } from './_shared.jsx';

const imgs = [
  "https://www.figma.com/api/mcp/asset/be1061c3-05db-40f7-971a-0a858f67edcc.png",
  { src: "https://www.figma.com/api/mcp/asset/ba45257f-f343-4232-ab38-b318fd371646.png", crop: { height: '183.39%', top: '-33.15%' } },
  { src: "https://www.figma.com/api/mcp/asset/70924a18-db59-4330-b9de-df6ead3b8347.png", crop: { height: '183.39%', top: '-33.36%' } },
  { src: "https://www.figma.com/api/mcp/asset/5230d629-4628-4468-84cf-8185b4ba9843.png", crop: { height: '183.39%', top: '-34.75%' } },
];

export default function LenguajeVisualUsoTipografico() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="4027:389" data-name="Lenguaje Visual · Uso tipográfico">
      <Chrome title="Lenguaje Visual" metaLeft={81} titleLeft={365} />
      <Subtitle>Uso tipográfico</Subtitle>
      <PhotoRow id="4027:401" srcs={imgs} />
      <SideNote left={88} w={231} ruleTop={229} paras={[
        'El texto corrido va organizado y muy legible, con claridad y equilibrio en la composición.',
        'Se puede experimentar con la partición de palabras haciendo que los bloques de texto siempre sean una forma perfecta.',
      ]} />
    </div>
  );
}
