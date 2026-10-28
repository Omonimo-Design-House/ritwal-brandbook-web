import { Chrome, Subtitle, SideNote, PhotoRow } from './_shared.jsx';

const imgs = [
  "https://www.figma.com/api/mcp/asset/c4b4a406-a7d1-4442-95bc-6119b927630c.png",
  "https://www.figma.com/api/mcp/asset/13b9052c-e8aa-4e15-ac35-b300e76a8f8b.png",
  "https://www.figma.com/api/mcp/asset/a79e3b0c-6eb4-4fb8-a7e5-1448433b0608.png",
  "https://www.figma.com/api/mcp/asset/51f3b6a4-f273-4201-a9c0-a3e99fec6364.png",
].map(src => ({ src, opacity: 0.35 }));

export default function LenguajeVisualTexturas() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="28:667" data-name="Lenguaje Visual · Texturas">
      <Chrome title="Lenguaje Visual" metaLeft={81} titleLeft={365} />
      <Subtitle>Texturas</Subtitle>
      <PhotoRow id="28:696" srcs={imgs} />
      <SideNote left={88} w={231} ruleTop={229} paras={[
        'Usamos texturas de papel con fibras naturales, como el yute, el algodón o el papel reciclado, siempre de forma sutil. Le dan a la pieza un carácter orgánico y cercano, y ayudan a que la gente conecte con la marca de forma genuina.',
      ]} />
    </div>
  );
}
