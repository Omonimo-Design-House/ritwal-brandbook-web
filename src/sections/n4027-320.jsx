import { Chrome, Subtitle, SideNote, PhotoRow } from './_shared.jsx';

const imgs = [
  "https://www.figma.com/api/mcp/asset/31006b6e-4a55-4c99-acac-fa3cb9f9cc48.png",
  "https://www.figma.com/api/mcp/asset/108771d8-319f-4691-a50d-7a120e3d63d6.png",
  "https://www.figma.com/api/mcp/asset/25b6eb2c-76e0-4796-ac7e-164423f60d89.png",
  "https://www.figma.com/api/mcp/asset/7582c0e5-58b5-4aa6-b654-fd3f67200521.png",
];

export default function LenguajeVisualGeometriaSagrada() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="4027:320" data-name="Lenguaje Visual · Geometría sagrada">
      <Chrome title="Lenguaje Visual" metaLeft={81} titleLeft={365} />
      <Subtitle>Geometría sagrada</Subtitle>
      <PhotoRow id="4027:332" srcs={imgs} />
      <SideNote left={88} w={231} ruleTop={229} paras={[
        'Usamos la geometría sagrada como recurso gráfico. Permite explorar diagramaciones y composiciones poco convencionales, sumar texturas y usar líneas como marcos, sin representar el concepto de forma literal. El resultado es un lenguaje visual dinámico y elegante.',
        'Para actividades o eventos especiales, el sistema puede integrar recursos de otras grafías, siempre con los colores, las proporciones y los elementos clave de Ritwal.',
      ]} />
    </div>
  );
}
