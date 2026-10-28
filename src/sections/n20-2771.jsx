import { fv, Chrome, Subtitle } from './_shared.jsx';

function Swatch({ bg, text, name, hex, print }) {
  const U = ({ children }) => <p className="[text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline whitespace-nowrap" style={fv}>{children}</p>;
  return (
    <div className="border-[1.5px] border-solid content-stretch flex flex-[1_0_0] flex-col h-[699px] items-start justify-between min-w-px overflow-clip pb-[30px] pt-[26px] px-[30px] relative rounded-[24px]" style={{ background: bg, borderColor: bg, color: text }}>
      <p className="relative shrink-0 whitespace-nowrap" style={fv}>{name}</p>
      <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
          <U>Digital:</U>
          <p className="relative shrink-0 whitespace-pre" style={fv}>{hex}</p>
        </div>
        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full whitespace-nowrap">
          <U>Impreso:</U>
          <p className="relative shrink-0" style={fv}>{print}</p>
        </div>
      </div>
    </div>
  );
}
const Row = ({ top, children }) => (
  <div className="[word-break:break-word] absolute content-stretch flex font-['Google_Sans_Flex:Light'] font-light gap-[24px] h-[699px] items-start leading-[33px] left-[364px] not-italic text-[25px] w-[1454px]" style={{ top }} data-name="Swatches">{children}</div>
);

export default function Component29ColorPaletaPrincipal() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="20:2771" data-name="29 - Color Paleta Principal">
      <Chrome title="Color" metaLeft={81} titleLeft={365} />
      <Subtitle>Paleta Principal</Subtitle>
      <Row top={230}>
        <Swatch bg="#ddc9a3" text="#993921" name="Sol Suave (70%)" hex="#DDC9A3  ·  RGB 221 · 201 · 163" print="C:0 M:9 Y:26 K:13 · Pantone 468 C" />
        <Swatch bg="#8b6f4b" text="#f7f1e8" name="Eco de Mar (10%)" hex="#8B6F4B  ·  RGB 139 · 111 · 75" print="C:0 M:20 Y:46 K:45 · Pantone 4242 C" />
      </Row>
      <Row top={954}>
        <Swatch bg="#993921" text="#f7f1e8" name="Bosco (10%)" hex="#993921  ·  RGB 153 · 57 · 33" print="C:0 M:63 Y:78 K:40 · Pantone 174 C" />
        <Swatch bg="#656636" text="#f7f1e8" name="Sole Mio (10%)" hex="#656636  ·  RGB 101 · 102 · 54" print="C:1 M:0 Y:47 K:60 · Pantone 7750 C" />
      </Row>
    </div>
  );
}
