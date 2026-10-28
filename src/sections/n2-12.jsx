import { fv, Chrome, Pill } from './_shared.jsx';

// Index row: rule + Thin 64px label. The whole row is the clickable node (nav in site.config).
function Item({ id, children }) {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-full" data-node-id={id} data-name="Item">
      <div className="bg-[#8b6f4b] h-[1.5px] relative shrink-0 w-full" data-name="Regla" />
      <div className="content-stretch flex items-start justify-between pb-[22px] pt-[18px] relative shrink-0 w-full" data-name="r">
        <div className="[word-break:break-word] font-['Google_Sans_Flex:Thin'] font-thin leading-[0] relative shrink-0 text-[#8b6f4b] text-[64px] text-left whitespace-nowrap" style={fv}>
          <p className="leading-[normal]">{children}</p>
        </div>
      </div>
    </button>
  );
}

export default function Component03Indice() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="2:12" data-name="03 · Índice">
      <Chrome title="Index" titleLeft={361} />
      <div className="absolute content-stretch flex gap-[36px] items-start left-[365px] top-[418px] w-[1475px]" data-node-id="2:23" data-name="Columnas">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[718px]" data-node-id="2:24" data-name="Columna 1">
          <Item id="2:25">Core Values</Item>
          <Item id="2:30">Logotipo</Item>
          <Item id="4020:299">Isotipo</Item>
          <Item id="2013:875">Color</Item>
          <Item id="2:50">Tipografía</Item>
          <Item id="2:58">Lenguaje Visual</Item>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="2:55" data-name="Columna 2">
          <Item id="2:61">Key Visuals</Item>
          <Item id="4045:598">Fotografía</Item>
          <Item id="4045:593">Contenido digital</Item>
          <Item id="4045:588">Pauta</Item>
          <Item id="4045:583">Impresos</Item>
        </div>
      </div>
      <Pill id="41:453" linkId="41:454" left={365} top={1218} href="https://drive.google.com/file/d/122nMc2vCp7L1FPpF3Q__2xCxeQ5cj1B5/view?usp=sharing">descargar EN PDF</Pill>
    </div>
  );
}
