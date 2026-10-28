import { fv, Chrome, Subtitle, Rule, Img, WrongNote, Strike, BoxTag } from './_shared.jsx';

const imgLine9 = "https://www.figma.com/api/mcp/asset/a97de828-575d-444e-ac73-09f878b77335.svg";
const imgLine4 = "https://www.figma.com/api/mcp/asset/ea762643-1d25-4a43-a536-a8aa9a693ed6.svg";
const imgReglaLateral = "https://www.figma.com/api/mcp/asset/06dcf3b3-0967-4913-a9ec-d19ad1321808.svg";

const Box = ({ left, top = 287, w = 342 }) => <div className="absolute bg-white h-[342px] rounded-[10px]" style={{ left, top, width: w }} />;
const Long = ({ left }) => (
  <div className="absolute flex h-[311px] items-center justify-center top-[981px] w-[692px]" style={{ left }}>
    <div className="flex-none rotate-[-24.2deg]">
      <div className="h-0 relative w-[758.673px]">
        <div className="absolute inset-[-2px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine9} /></div>
      </div>
    </div>
  </div>
);
const M = ({ cls, style, children }) => (
  <p className={`[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[#8b6f4b] text-[32px] ${cls}`} style={{ ...fv, ...style }}>{children}</p>
);
const R = ({ cls, children }) => (
  <p className={`-translate-x-1/2 [word-break:break-word] absolute font-['Google_Sans_Flex:Regular'] font-normal h-[48px] leading-[normal] not-italic text-[#8b6f4b] text-center w-[197px] ${cls}`} style={fv}>{children}</p>
);

export default function Component38TipografiaUsosIncorrectos() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="31:1142" data-name="38 - Tipografía Usos Incorrectos">
      <Chrome title="Tipografía" metaLeft={81} titleLeft={365} />
      <Subtitle>Usos Incorrectos</Subtitle>
      <Rule left={81} top={237} w={247} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[88px] not-italic text-[#8b6f4b] text-[20px] top-[257px] w-[231px]" data-node-id="31:1159" style={fv}>
        Estos son los errores más frecuentes al aplicar la tipografía de la marca, y por qué comprometen su lectura.
      </p>
      <Box left={364} /><Box left={742} /><Box left={1120} /><Box left={1498} />
      <Box left={364} top={963} w={720} /><Box left={1120} top={963} w={720} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[379px] not-italic text-[#8b6f4b] text-[10px] top-[981px] w-[163px]" style={fv}>
        Composiciones sin jerarquía visual o que se salgan de los lineamientos para cada tipo de texto.
      </p>
      <BoxTag left={1134} top={981}>Texto ilegible</BoxTag>
      <BoxTag left={379} top={303}>Mala partición de palabras</BoxTag>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[758px] not-italic text-[#8b6f4b] text-[10px] top-[303px] w-[168px]" style={fv}>Sustituir por una tipografía similar</p>
      <BoxTag left={1134} top={303}>Alterar el interletrado fuera del margen permitido</BoxTag>
      <BoxTag left={1512} top={303}>Aplicar efectos no autorizados</BoxTag>
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[0] left-[440px] not-italic text-[#8b6f4b] text-[32px] top-[404px] w-[191px]" style={fv}>
        <p className="leading-[normal] mb-0">{`MESA & MÍS`}</p>
        <p className="leading-[normal]">TICA</p>
      </div>
      <M cls="left-[473px] top-[1073px] w-[502px]">{`MESA & MÍSTICA`}</M>
      <M cls="left-[473px] top-[1123px] w-[502px]">{`RITWAL `}</M>
      <M cls="left-[473px] top-[1173px] w-[502px]">Los Balsos, Medellín</M>
      <R cls="left-[912.5px] text-[20px] top-[441px]">{`MESA & MÍSTICA`}</R>
      <R cls="left-[1472.5px] text-[5px] top-[1134px]">{`MESA & MÍSTICA`}</R>
      <R cls="left-[1669.5px] text-[20px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] top-[441px]">{`MESA & MÍSTICA`}</R>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Google_Sans_Flex:Regular'] font-normal h-[95px] leading-[0] left-[1290.5px] not-italic text-[#8b6f4b] text-[20px] text-center top-[441px] tracking-[-2.4px] w-[197px] whitespace-pre-wrap" style={fv}>
        <p className="leading-[1.347] mb-0">{`MESA &`}</p>
        <p className="leading-[1.347] mb-0">​</p>
        <p className="leading-[1.347]">MÍSTICA</p>
      </div>
      <Strike left={379} top={303} src={imgLine4} />
      <Strike left={756} top={303} src={imgLine4} />
      <Strike left={1134} top={303} src={imgLine4} />
      <Strike left={1510} top={303} src={imgLine4} />
      <Long left={379} /><Long left={1134} />
      {[364, 742, 1120, 1498].map(l => <Img key={l} cls="h-[2px] top-[237px] w-[342px]" style={{ left: l }} src={imgReglaLateral} />)}
      <WrongNote left={363} top={668} wrong={<>Cortar una palabra a la mitad entre líneas dificulta la lectura y se ve descuidado.<br /><br /></>} right="Partir siempre por palabra completa, nunca a mitad de una." />
      <WrongNote left={742} top={668} wrong={`Usar una tipografía "parecida" cuando la oficial no está disponible diluye el carácter de la marca.`} right="Usar siempre las tipografías oficiales: Continua y Antarctican Mono." />
      <WrongNote left={1121} top={668} wrong="Forzar el espaciado entre letras más allá de lo definido rompe el ritmo del texto." right="Mantener el tracking dentro de los valores definidos para cada nivel tipográfico." />
      <WrongNote left={1498} top={668} wrong="Sombras, contornos o cualquier efecto decorativo no pertenecen al sistema tipográfico de la marca." right="Usar el texto siempre plano, sin efectos añadidos." />
      <WrongNote left={363} top={1333} wrong="Dar el mismo peso a título, nombre y ubicación elimina la jerarquía y confunde la lectura." right="Respetar los tres niveles definidos (título, subtítulo y texto corrido) y su diferencia de peso." />
      <WrongNote left={1121} top={1333} wrong="Reducir el texto por debajo de un tamaño legible vuelve la información inutilizable." right="Respetar el tamaño mínimo de lectura en cada aplicación." />
    </div>
  );
}
