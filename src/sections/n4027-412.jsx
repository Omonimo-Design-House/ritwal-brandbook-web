import { Chrome, Subtitle, SideNote, PhotoRow } from './_shared.jsx';

const imgs = [
  "https://www.figma.com/api/mcp/asset/bc5346e7-73ed-40ad-83fa-6858aac91317.png",
  "https://www.figma.com/api/mcp/asset/05ed8f57-8c31-4882-b8b7-3f3781a211c0.png",
  "https://www.figma.com/api/mcp/asset/189caf1c-bf0b-476a-ade6-d8cbc7bb124c.png",
  "https://www.figma.com/api/mcp/asset/1bb49367-4aca-440d-9e70-7a9e17bbad18.png",
];

export default function LenguajeVisualSistemaDeIconos() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="4027:412" data-name="Lenguaje Visual · Sistema de íconos">
      <Chrome title="Lenguaje Visual" metaLeft={81} titleLeft={365} />
      <Subtitle>Sistema de íconos</Subtitle>
      <PhotoRow id="4027:424" srcs={imgs} />
      <SideNote left={88} w={231} ruleTop={229} paras={[
        'Nuestros íconos salen de los elementos de la naturaleza: fuego, tierra, agua y aire. Están construidos con trazos orgánicos que generan contraste en las piezas.',
        'Sirven de apoyo gráfico para los textos de la marca o como elementos estéticos de menor tamaño.',
      ]} />
    </div>
  );
}
