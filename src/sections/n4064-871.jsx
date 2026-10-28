import { fv, Img } from './_shared.jsx';
import { Page, TitleText } from './_contenido.jsx';

const imgs = ['af0923c3-26a7-4cfb-8441-5bb3b14080ba', '9eb29821-5f31-460b-92d8-ecf575384ff7', '97c1bfb7-56c4-4eb3-8c4b-e9d5d0a43f9a',
  'e0780a33-70b5-4eb6-b399-f8db70a5b285', 'd7eda6fc-b88e-47ea-b114-0ae34062cd43', 'be364be3-7572-4ca7-82ca-1fdfa79e3f4b',
  'adc1a960-3084-4b34-97f8-50094dac4d01', '26e32090-9fd1-470c-a9a8-3854f8483b06', 'b6437727-dc20-4fee-bf22-946369c8fe07']
  .map(id => `https://www.figma.com/api/mcp/asset/${id}.png`);
const imgPiezaDisenada = "https://www.figma.com/api/mcp/asset/19668675-0f09-42f3-bb70-a8cd966e2d70.svg";

const Big = ({ left, children }) => (
  <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Thin'] font-thin leading-[normal] text-[#8b6f4b] text-[96px] top-[495px] whitespace-nowrap" style={{ ...fv, left }}>{children}</p>
);

export default function ContenidoProporcion() {
  return (
    <Page id="4064:871" name="Contenido · Proporción" title="Proporción" sub="90 % fotos y videos, 10 % piezas diseñadas"
      note={['Las fotos y los videos sin diseño le dan cercanía a la comunicación diaria.', 'Las piezas diseñadas le dan consistencia a lo que la marca más necesita repetir.']}>
      {imgs.map((src, i) => (
        <div key={src} className="absolute h-[171px] rounded-[16px] top-[250px] w-[136.8px]" style={{ left: 365 + 148.8 * i }} data-name="Espacio para imagen">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={src} />
        </div>
      ))}
      <Img id="4064:918" style={{ left: 1704.2, top: 250, width: 136.8, height: 171 }} src={imgPiezaDisenada} />
      <div className="absolute bg-[rgba(221,201,163,0.35)] h-[14px] left-[365px] rounded-[7px] top-[451px] w-[1327.2px]" data-name="90 %" />
      <div className="absolute bg-[#993921] h-[14px] left-[1704.2px] rounded-[7px] top-[451px] w-[136.8px]" data-name="10 %" />
      <Big left={365}>90 %</Big>
      <TitleText left={365} top={613} w={620} title="Fotos y videos">Fotografías o videos sin diseño, que transmiten la esencia de la marca: el plato llegando a la mesa, el atardecer, el brindis.</TitleText>
      <Big left={1220}>10 %</Big>
      <TitleText left={1220} top={613} w={620} title="Piezas diseñadas">Campañas, mensajes clave e información institucional: horarios, eventos, menú. Siempre con las armonías de color del manual.</TitleText>
    </Page>
  );
}
