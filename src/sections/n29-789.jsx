import { Chrome } from './_shared.jsx';

// The Figma frame is 2349px wide; everything visible sits inside the 1920px page.
const img0 = "https://www.figma.com/api/mcp/asset/035b587c-d113-44a8-aa62-cf97ac318ecd.png";
const img1 = "https://www.figma.com/api/mcp/asset/b8813d48-04ea-400a-b6c7-b8082531863f.png";
const img2 = "https://www.figma.com/api/mcp/asset/4612a0e5-6420-487a-989a-30e822ae935f.png";
const img3 = "https://www.figma.com/api/mcp/asset/2f717f46-f8a8-4a25-9af1-c1c7426c1af1.png";
const imgKeyVisual = "https://www.figma.com/api/mcp/asset/1b9edf7a-ee14-4898-bafb-c3f90e5e4c70.png";
const img4 = "https://www.figma.com/api/mcp/asset/4d6ddf3e-c6b8-4d44-b552-989f2a73efda.png";
const img5 = "https://www.figma.com/api/mcp/asset/bf6260be-073b-4c71-850a-36d158580892.png";

const Card = ({ h, border = '#8b6f4b', src, crop }) => (
  <div className="border-[1.5px] border-solid flex-[1_0_0] min-w-px relative rounded-[24px]" style={{ height: h, borderColor: border }} data-name="Espacio para imagen">
    {crop
      ? <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]"><img alt="" className="absolute left-0 max-w-none w-full" style={crop} src={src} /></div>
      : <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={src} />}
  </div>
);
const Row = ({ children }) => <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Fila">{children}</div>;

export default function KeyVisualsPiezas() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="29:789" data-name="Key Visuals · Piezas">
      <Chrome title="Key Visuals" metaLeft={81} titleLeft={365} />
      <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[79px] top-[228px] w-[1761px]" data-node-id="29:850">
        <Row>
          <div className="bg-[rgba(221,201,163,0.35)] border-[#993921] border-[1.5px] border-solid content-stretch flex flex-[1_0_0] h-[900px] items-center justify-center min-w-px overflow-clip relative rounded-[24px]" data-name="KEY VISUAL">
            <div className="bg-[rgba(221,201,163,0.35)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Sala · logo">
              <div className="aspect-[2048/1168] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img0} />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <Card h={760} src={img1} crop={{ height: '139.22%', top: '-34.78%' }} />
          <Card h={760} src={img2} />
        </Row>
        <Row><Card h={620} src={img3} /></Row>
        <Row><Card h={900} border="#993921" src={imgKeyVisual} /></Row>
        <Row>
          <Card h={520} src={img4} />
          <Card h={520} src={img5} />
        </Row>
      </div>
    </div>
  );
}
