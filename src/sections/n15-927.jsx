import { fv, Chrome, Subtitle, SideNote, Img, WrongNote, Strike, BoxTag } from './_shared.jsx';

const imgEspacioParaImagen = "https://www.figma.com/api/mcp/asset/174ae743-1d1c-4214-a909-00a4eca327da.png";
const imgLogoRitwal = "https://www.figma.com/api/mcp/asset/fc73bce2-0c74-471b-bd4b-7359d0b415e5.svg";
const imgLogoRitwal1 = "https://www.figma.com/api/mcp/asset/e023b1d5-c55b-4a88-9067-f11e2697e370.svg";
const imgLogoRitwal2 = "https://www.figma.com/api/mcp/asset/67e90933-236a-47d6-95c0-bfa0a73191a9.svg";
const imgLogoRitwal3 = "https://www.figma.com/api/mcp/asset/2b145b21-21da-4a39-b61d-f339cac06175.svg";
const imgLogoRitwal4 = "https://www.figma.com/api/mcp/asset/55a1b796-2530-4827-a516-737d4071f73b.svg";
const imgLogoRitwal5 = "https://www.figma.com/api/mcp/asset/e55d359d-4776-4fe4-8835-3ab3abd97546.svg";
const imgLine4 = "https://www.figma.com/api/mcp/asset/c0654b7a-00f4-4997-b13a-389649acdb70.svg";
const imgLine8 = "https://www.figma.com/api/mcp/asset/e21e5836-d298-4f61-beec-1c0489ed0854.svg";
const imgReglaLateral = "https://www.figma.com/api/mcp/asset/da050c5d-c8d7-4791-97e2-d2c028fb7cca.svg";

const Box = ({ left, top, bg = 'bg-white' }) => <div className={`absolute ${bg} rounded-[10px] size-[342px]`} style={{ left, top }} />;

export default function Component16LogotipoUsosIncorrectos() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="15:927" data-name="16-Logotipo usos incorrectos">
      <Chrome title="Logotipo" metaLeft={81} titleLeft={365} />
      <Subtitle>Usos Incorrectos</Subtitle>
      <SideNote left={81} paras={['Errores frecuentes que comprometen la legibilidad y el reconocimiento del logo.']} />
      <Box left={364} top={287} /><Box left={742} top={287} /><Box left={1120} top={287} /><Box left={1498} top={287} />
      <Box left={364} top={963} bg="bg-[#ddc9a3]" />
      <div className="absolute left-[742px] rounded-[10px] size-[342px] top-[963px]" data-node-id="17:1438" data-name="Espacio para imagen">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgEspacioParaImagen} />
      </div>
      <Img id="2013:814" cls="-translate-y-1/2 h-[7px] left-[525.67px] top-[calc(50%-286px)] w-[18.667px]" src={imgLogoRitwal} />
      <Img id="2013:820" cls="-translate-y-1/2 h-[59px] left-[455.83px] top-[calc(50%+384px)] w-[157.333px]" src={imgLogoRitwal1} />
      <Img id="2013:826" cls="-translate-y-1/2 h-[57px] left-[836.5px] top-[calc(50%+381px)] w-[152px]" src={imgLogoRitwal2} />
      <Img id="2013:832" cls="-translate-y-1/2 h-[40px] left-[1615.17px] top-[calc(50%-283.5px)] w-[106.667px]" src={imgLogoRitwal3} />
      <Img id="2013:838" cls="-translate-y-1/2 h-[45px] left-[1205px] top-[calc(50%-284px)] w-[180px]" src={imgLogoRitwal4} />
      <div className="-translate-y-1/2 absolute flex items-center justify-center left-[849.46px] size-[127.206px] top-[calc(50%-297.78px)]" data-node-id="2013:844">
        <div className="-rotate-45 flex-none">
          <div className="h-[49.063px] relative w-[130.834px]" data-name="Logo Ritwal">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoRitwal5} />
          </div>
        </div>
      </div>
      <BoxTag left={379} top={303}>Usar a escala muy pequeña</BoxTag>
      <BoxTag left={379} top={977}>Poco contraste</BoxTag>
      <BoxTag left={756} top={977} color="#f7f1e8">Imágenes muy pesadas</BoxTag>
      <BoxTag left={758} top={303}>Rotar 45°</BoxTag>
      <BoxTag left={1134} top={303}>Distorsionar</BoxTag>
      <BoxTag left={1512} top={303}>Cambiar color</BoxTag>
      <Strike left={379} top={303} src={imgLine4} />
      <Strike left={379} top={977} src={imgLine8} />
      <Strike left={756} top={303} src={imgLine4} />
      <Strike left={756} top={977} src={imgLine8} />
      <Strike left={1134} top={303} src={imgLine4} />
      <Strike left={1510} top={303} src={imgLine4} />
      {[364, 742, 1120, 1498].map(l => <Img key={l} cls="h-[2px] top-[237px] w-[342px]" style={{ left: l }} src={imgReglaLateral} />)}
      <WrongNote left={363} top={668} wrong="Por debajo del tamaño mínimo, los detalles se pierden y el logo deja de leerse con claridad." right="Respetar siempre el tamaño mínimo. Si el espacio no alcanza, se cambia el formato de la pieza." />
      <WrongNote left={363} top={1344} wrong="Sobre fondos de tono similar, el logo pierde presencia y legibilidad." right="Ubicarlo siempre sobre un fondo con contraste suficiente." />
      <WrongNote left={742} top={668} wrong="El logo nunca gira en un ángulo distinto a 90°." right="Siempre en posición horizontal o vertical (ver página de orientación)." />
      <WrongNote left={742} top={1344} wrong="Sobre fotografías cargadas de elementos, el logo compite y se diluye." right="Colocarlo en una zona limpia de la imagen o sobre un fondo sólido." />
      <WrongNote left={1121} top={668} wrong="Estirar o comprimir el logo altera sus proporciones y su carácter." right="Escalar siempre de forma proporcional, nunca solo en ancho o solo en alto." />
      <WrongNote left={1498} top={668} wrong="El logo no se adapta a colores fuera de la paleta de marca." right="Usar únicamente los colores oficiales definidos en este manual." />
    </div>
  );
}
