import { fv, Chrome, Subtitle, SideNote, Img } from './_shared.jsx';

// Isotipo positions were % insets of a 1920×1291 inner panel in Figma; converted to px.
const imgMonitor = "https://www.figma.com/api/mcp/asset/1067633d-f66c-45fd-9bd1-fc2c436313f2.svg";
const imgNavegador = "https://www.figma.com/api/mcp/asset/860ba806-77f8-487a-91c8-4db183a71df5.svg";
const imgPunto = "https://www.figma.com/api/mcp/asset/54816fc0-ec98-4e8e-abcb-c1d6c0ff3796.svg";
const imgCelular = "https://www.figma.com/api/mcp/asset/1f029931-132a-4ad6-8a58-df8246c4f6b8.svg";
const imgAvatar = "https://www.figma.com/api/mcp/asset/1df51402-06c7-4b70-a4ea-239ef4fead9a.svg";
const imgApp = "https://www.figma.com/api/mcp/asset/eadbf7a4-9557-459d-ad98-02d44d32362b.svg";
const imgPosavasos = "https://www.figma.com/api/mcp/asset/be055e80-add2-48b3-a4e3-d6182f99c93a.svg";
const imgIsotipoRitwal = "https://www.figma.com/api/mcp/asset/b9669147-cf6a-4a45-b1d7-af1d74b1ee54.svg";
const imgIsotipoRitwal1 = "https://www.figma.com/api/mcp/asset/f436e150-54b9-4c8e-9731-9723525e8a85.svg";
const imgIsotipoRitwal2 = "https://www.figma.com/api/mcp/asset/72eb142e-e8aa-4366-8e03-087208d2a3c5.svg";
const imgIsotipoRitwal3 = "https://www.figma.com/api/mcp/asset/7c75f6e3-4297-4094-9295-77bfe31a9814.svg";
const imgIsotipoRitwal4 = "https://www.figma.com/api/mcp/asset/aefbac6d-ad9d-48c5-803f-238300959cda.svg";

const Tag = ({ left, top, w = 223, children }) => (
  <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[#8b6f4b] text-[14px]" style={{ ...fv, left, top, width: w }}>{children}</p>
);

export default function Component21IsotipoEjemplosDeAplicacion() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="4023:320" data-name="21 - Isotipo ejemplos de aplicación">
      <Chrome title="Isotipo" metaLeft={81} titleLeft={365} />
      <Subtitle>Ejemplos de aplicación</Subtitle>
      <SideNote left={81} paras={['El isotipo trabaja mejor en espacios reducidos, donde el nombre completo no cabe o no hace falta: un favicon, el ícono de una app, una foto de perfil, un detalle grabado.']} />
      <Tag left={386} top={762}>Marca de agua</Tag>
      <Tag left={1172} top={1004}>Avatar en redes sociales</Tag>
      <Tag left={1634} top={716}>Posavasos</Tag>
      <Tag left={386} top={912}>Favicon</Tag>
      <Tag left={1634} top={410} w={192}>App</Tag>
      <Img id="4023:456" style={{ left: 374.89, top: 238, width: 730.5, height: 492.6 }} src={imgMonitor} />
      <Img id="4023:457" style={{ left: 365, top: 856.52, width: 756.4, height: 39.2 }} src={imgNavegador} />
      {[378.68, 388.78, 398.87].map(l => <Img key={l} style={{ left: l, top: 872.93, width: 7.56, height: 7.57 }} src={imgPunto} />)}
      <Img id="4023:461" style={{ left: 1171.8, top: 238, width: 396.1, height: 741 }} src={imgCelular} />
      <Img id="4023:462" style={{ left: 1207.98, top: 324.34, width: 66, height: 66 }} src={imgAvatar} />
      <Img id="4023:463" style={{ left: 1631.34, top: 238, width: 155.7, height: 155.8 }} src={imgApp} />
      <Img id="4023:464" style={{ left: 1631.34, top: 538, width: 156, height: 156 }} src={imgPosavasos} />
      <Img id="4023:470" style={{ left: 420.5, top: 582, width: 36.1, height: 49.1 }} src={imgIsotipoRitwal} />
      <Img id="4023:476" style={{ left: 457.5, top: 877, width: 11.9, height: 16 }} src={imgIsotipoRitwal1} />
      <Img id="4023:482" style={{ left: 1227.1, top: 338.4, width: 27.8, height: 38 }} src={imgIsotipoRitwal2} />
      <Img id="4023:488" style={{ left: 1678.3, top: 273.8, width: 61.6, height: 83.9 }} src={imgIsotipoRitwal3} />
      <Img id="4023:494" style={{ left: 1680, top: 576, width: 58.8, height: 79.9 }} src={imgIsotipoRitwal4} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[477px] not-italic text-[#8b6f4b] text-[8px] top-[880px] whitespace-nowrap" data-node-id="4023:495" style={fv}>Ritwal</p>
    </div>
  );
}
