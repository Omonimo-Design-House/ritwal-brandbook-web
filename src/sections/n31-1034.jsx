import { fv, Chrome, Subtitle, Rule, Img, WrongNote, Strike, BoxTag } from './_shared.jsx';

const imgEspacioParaImagen = "https://www.figma.com/api/mcp/asset/210e40b9-34aa-432a-b107-e2cdda3ef8ca.png";
const imgCirculo = "https://www.figma.com/api/mcp/asset/d8be1dc4-2deb-4cd8-87fc-9f00f2deeedf.svg";
const imgCirculo1 = "https://www.figma.com/api/mcp/asset/3391a614-09e2-48ab-a527-3d0419f6ac27.svg";
const imgCirculo2 = "https://www.figma.com/api/mcp/asset/a986dce2-ae76-45fc-9e52-96749d85f0f6.svg";
const imgLogoRitwal = "https://www.figma.com/api/mcp/asset/410db489-f58e-465b-8f9e-78d2e783a022.svg";
const imgLine4 = "https://www.figma.com/api/mcp/asset/a1f33ebd-5ca1-4f58-abb7-b29b14ca2f8f.svg";
const imgLine5 = "https://www.figma.com/api/mcp/asset/f1121a0e-cfb4-44b1-862f-6787d0228d64.svg";
const imgReglaLateral = "https://www.figma.com/api/mcp/asset/6305eaa6-0508-496d-8f71-b511b1bc3ab4.svg";

const Box = ({ left, bg }) => <div className="absolute rounded-[10px] size-[342px] top-[329px]" style={{ left, background: bg }} />;
const C = '#f7f1e8';

export default function Component32ColorUsosIncorrectos() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="31:1034" data-name="32- Color usos incorrectos">
      <Chrome title="Color" metaLeft={81} titleLeft={365} />
      <Subtitle>Usos Incorrectos</Subtitle>
      <Rule left={81} top={237} w={247} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[88px] not-italic text-[#8b6f4b] text-[20px] top-[324px] w-[231px]" data-node-id="31:1051" style={fv}>
        El color también tiene sus límites: estas son las combinaciones y aplicaciones que rompen la identidad de la marca.
      </p>
      <Box left={364} bg="#993921" />
      <Box left={742} bg="#8b6f4b" />
      <Box left={1120} bg="#ffffff" />
      <div className="absolute left-[1498px] rounded-[10px] size-[342px] top-[329px]" data-node-id="31:1057" data-name="Espacio para imagen">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgEspacioParaImagen} />
      </div>
      <Img cls="size-[130px] left-[471px] top-[435px]" src={imgCirculo} />
      <Img cls="size-[130px] left-[848px] top-[435px]" src={imgCirculo1} />
      <Img cls="size-[130px] left-[1226px] top-[435px]" src={imgCirculo2} />
      <Img cls="size-[130px] left-[1610px] top-[435px]" src={imgCirculo} />
      <Img id="31:1072" cls="h-[57px] left-[808px] top-[1002px] w-[209px]" src={imgLogoRitwal} />
      <BoxTag left={379} top={345} color={C}>Armonía de color equivocada</BoxTag>
      <BoxTag left={379} top={871} color={C}>Poco contraste</BoxTag>
      <BoxTag left={756} top={871} color={C}>Imágenes muy pesadas</BoxTag>
      <BoxTag left={758} top={345} color={C}>Poco contraste</BoxTag>
      <BoxTag left={1134} top={345}>Colores fuera de paleta</BoxTag>
      <BoxTag left={1514} top={345} color={C}>Color sobre imagen</BoxTag>
      <BoxTag left={1512} top={303} color={C}>Color sobre fotografía</BoxTag>
      <Strike left={379} top={345} src={imgLine4} />
      <Strike left={379} top={871} src={imgLine4} />
      <Strike left={756} top={303} src={imgLine5} />
      <Strike left={756} top={871} src={imgLine4} />
      <Strike left={1134} top={345} src={imgLine4} />
      <Strike left={1510} top={345} src={imgLine4} />
      {[364, 742, 1120, 1498].map(l => <Img key={l} cls="h-[2px] top-[237px] w-[342px]" style={{ left: l }} src={imgReglaLateral} />)}
      <WrongNote left={363} top={749} wrong="Combinar colores de la paleta sin seguir las armonías ya definidas rompe la coherencia visual de la marca." right="Usar únicamente las combinaciones validadas en la sección de Armonías de Color." />
      <WrongNote left={742} top={749} wrong="Cuando el acento y el fondo tienen valores muy similares, el color pierde su función y se vuelve invisible." right="Elegir combinaciones con contraste suficiente para que el acento se distinga con claridad." />
      <WrongNote left={1121} top={749} wrong={<>Reemplazar Sol Suave por blanco puro o Bosco por un rojo más saturado.<br /><br /></>} right="Usar siempre los valores exactos de la paleta, en digital y en impreso." />
      <WrongNote left={1498} top={749} wrong="Un color sólido puesto directamente sobre una fotografía compite con la imagen y pierde su propia identidad." right="Aplicar el color sobre áreas limpias de la imagen, o dejar que la fotografía hable sola." />
    </div>
  );
}
