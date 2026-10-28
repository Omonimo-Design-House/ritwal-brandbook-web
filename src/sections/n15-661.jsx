import { fv, Chrome, Subtitle, SideNote } from './_shared.jsx';

const imgCapa1 = "https://www.figma.com/api/mcp/asset/ce412cec-5c63-4cab-822d-2d32fd698056.svg";

const Tag = ({ left, top, w = 223, children }) => (
  <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[#8b6f4b] text-[14px]" style={{ ...fv, left, top, width: w }}>{children}</p>
);

export default function Component15LogotipoEjemplosDeAplicacion() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="15:661" data-name="15-Logotipo ejemplos de aplicación">
      <Chrome title="Logotipo" metaLeft={81} titleLeft={365} />
      <Subtitle>Ejemplos de aplicación</Subtitle>
      <SideNote left={81} paras={[
        'El logotipo es la firma principal de Ritwal: la forma en que el nombre se escribe cuando hay espacio para hacerlo con claridad. ',
        'Va en papelería, señalética, web, publicidad y cualquier pieza donde el logotipo sea protagonista. El símbolo ® acompaña la firma en la mayoría de los casos. Si el espacio es reducido, se puede omitir.',
      ]} />
      <div className="absolute h-[841px] left-[365px] top-[197px] w-[1470px]" data-node-id="15:787" data-name="Capa_1">
        <img alt="Ejemplos de aplicación del logotipo" className="absolute block inset-0 max-w-none size-full" src={imgCapa1} />
      </div>
      <Tag left={365} top={1074}>Comunicación Corporativa</Tag>
      <Tag left={1123} top={1078}>Camiseta</Tag>
      <Tag left={1588} top={1074}>Lockscreen</Tag>
      <Tag left={1027} top={585}>Sobre</Tag>
      <Tag left={1619} top={333} w={192}>Tarjeta Personal</Tag>
      <Tag left={1619} top={619} w={88}>Regalo corporativo</Tag>
      <Tag left={1717} top={620} w={46}>ID</Tag>
    </div>
  );
}
