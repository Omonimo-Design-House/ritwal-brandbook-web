import { Chrome, Subtitle, Rule, Label, Caption } from './_shared.jsx';

const imgLogoRitwal = "https://www.figma.com/api/mcp/asset/2c3246df-6730-4909-9948-893e8313fce7.svg";
const imgLogoRitwal1 = "https://www.figma.com/api/mcp/asset/a4e2f6f0-bb75-4fec-9bed-05cbc59a9114.svg";
const imgLogoRitwal2 = "https://www.figma.com/api/mcp/asset/9ae2d5b6-7281-4ff1-8193-481c3b61dce1.svg";
const imgLine1 = "https://www.figma.com/api/mcp/asset/080f2b85-1b2d-4991-b421-ed2a3b0c16c0.svg";

export default function Component13LogotipoOrientacion() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="15:511" data-name="13. Logotipo orientacion">
      <Chrome title="Logotipo" metaLeft={81} titleLeft={365} />
      <Subtitle>Orientación</Subtitle>
      <Label left={364} top={246}>CORRECTO</Label>
      <Label left={1402} top={246}>INCORRECTO</Label>
      <Rule left={364} top={237} w={1003} />
      <Rule left={1403} top={237} w={437} />
      <Caption left={365} top={486} title="Horizontal">Esta es nuestra orientación por defecto.</Caption>
      <Caption left={1023} top={835} w={250} title="Vertical">Girado 90°, el logo se lee de abajo hacia arriba. Úsalo así en lomos, bordes y piezas angostas.</Caption>
      <Caption left={1498} top={835} w={248} title="Espejado">Reflejar el logo pone las letras al revés y RITWAL deja de leerse.</Caption>
      <div className="-translate-y-1/2 absolute h-[137px] left-[424.33px] top-[389.5px] w-[365.333px]" data-node-id="2013:748" data-name="Logo Ritwal">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoRitwal} />
      </div>
      <div className="-translate-y-1/2 absolute flex h-[365.333px] items-center justify-center left-[1071px] top-[571px] w-[137px]" data-node-id="2013:754">
        <div className="-rotate-90 flex-none">
          <div className="h-[137px] relative w-[365.333px]" data-name="Logo Ritwal">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoRitwal1} />
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[365.333px] items-center justify-center left-[1545px] top-[571px] w-[137px]" data-node-id="2013:760">
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="h-[137px] relative w-[365.333px]" data-name="Logo Ritwal">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoRitwal2} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[500.298px] items-center justify-center left-[1531px] top-[311px] w-[175px]" data-node-id="17:1141">
        <div className="flex-none rotate-[-70.72deg]">
          <div className="h-0 relative w-[530.022px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
