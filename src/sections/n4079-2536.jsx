import { fv } from './_shared.jsx';
import { Page, TitleText } from './_contenido.jsx';

const a = (id) => `https://www.figma.com/api/mcp/asset/${id}.svg`;
const shadow = 'shadow-[0px_14px_30px_0px_rgba(89,69,46,0.16)]';
const Logo = ({ inset, src, inner }) => (
  <div className="absolute" style={{ inset }} data-name="Logotipo">
    {inner
      ? <div className="absolute" style={{ inset: inner }}><img alt="" className="block max-w-none size-full" src={src} /></div>
      : <img alt="" className="absolute block inset-0 max-w-none size-full" src={src} />}
  </div>
);
const Scene = ({ left, children }) => <div className="absolute bg-white h-[400px] overflow-clip rounded-[24px] top-[250px] w-[468px]" style={{ left }}>{children}</div>;
const PANTONES = [['#ddc9a3', '468 C', 'Sol Suave'], ['#8b6f4b', '4242 C', 'Eco de Mar'], ['#993921', '174 C', 'Bosco'], ['#656636', '7750 C', 'Sole Mio']];
const B = ({ size, children }) => <p className="font-['Google_Sans_Flex:Bold'] font-bold relative shrink-0 text-[#8b6f4b]" style={{ ...fv, fontSize: size }}>{children}</p>;

function Wide({ left, children, title, w, text }) {
  return (
    <div className="absolute bg-white content-stretch flex gap-[32px] h-[324px] items-center overflow-clip p-[32px] rounded-[24px] top-[1290px] w-[726px]" style={{ left }}>
      {children}
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start leading-[normal] min-w-px not-italic relative text-[#8b6f4b]">
        <p className="font-['Google_Sans_Flex:Medium'] font-medium relative shrink-0 text-[18px] tracking-[4.14px] uppercase whitespace-nowrap" style={fv}>{title}</p>
        <p className="font-['Google_Sans_Flex:Light'] font-light relative shrink-0 text-[20px]" style={{ ...fv, width: w }}>{text}</p>
      </div>
    </div>
  );
}

export default function ImpresosAcabadosYTintas() {
  return (
    <Page id="4079:2536" name="Impresos · Acabados y tintas" title="Impresos" sub="Acabados y tintas"
      note={['Los acabados se reservan para el logo y los detalles.', 'Nunca se usa tinta metálica: el brillo lo da el foil.']}>
      <Scene left={365}>
        <div className={`absolute bg-[#25211e] h-[300px] left-[114px] overflow-clip rounded-[4px] ${shadow} top-[50px] w-[240px]`} data-name="Portada con foil">
          <Logo inset="40% 18.75% 46.04% 18.75%" src={a('d62e0531-0b45-4397-b1de-c0e4991ab3e0')} />
        </div>
      </Scene>
      <Scene left={869}>
        <div className={`absolute bg-[#ddc9a3] h-[190px] left-[84px] overflow-clip rounded-[4px] ${shadow} top-[105px] w-[300px]`} data-name="Tarjeta con repujado">
          <Logo inset="36.84% 21.67% 38.18% 21.67%" inner="-4.21% -2.06% -7.38% -1.18%" src={a('f466554b-e86b-43db-b3bb-71ca7e3c31f6')} />
        </div>
      </Scene>
      <Scene left={1373}>
        <div className={`absolute bg-[#ddc9a3] h-[300px] left-[114px] overflow-clip rounded-[4px] ${shadow} top-[50px] w-[240px]`} data-name="Menú con laminado mate">
          <Logo inset="41.67% 20.83% 45.31% 20.83%" src={a('673edd5a-3744-4aec-b533-ff66d47028b6')} />
        </div>
      </Scene>
      <TitleText left={365} top={680} w={468} title="Foil dorado o cobre">Para logos y detalles en portadas e invitaciones.</TitleText>
      <p className="absolute font-['Google_Sans_Flex:Light'] font-light leading-[normal] left-[365px] not-italic text-[17px] text-[rgba(139,111,75,0.45)] top-[751px] w-[468px]" style={fv}>Nunca tinta metálica.</p>
      <TitleText left={869} top={680} w={468} title="Repujado">Embossing o debossing en el logo o en detalles gráficos.</TitleText>
      <TitleText left={1373} top={680} w={468} title="Laminado mate">Para menús, portadas e invitaciones.</TitleText>
      <div className="absolute bg-[rgba(139,111,75,0.45)] h-px left-[365px] top-[822px] w-[1476px]" />
      <p className="absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[365px] not-italic text-[#8b6f4b] text-[18px] top-[852px] tracking-[4.14px] uppercase whitespace-nowrap" style={fv}>Litografía · siempre los Pantone de la marca</p>
      {PANTONES.map(([c, code, name], i) => (
        <div key={code} className={`absolute bg-white content-stretch flex flex-col items-start overflow-clip rounded-[12px] ${shadow} top-[902px] w-[351px]`} style={{ left: 365 + 375 * i }} data-name={`Pantone ${code}`}>
          <div className="h-[220px] relative shrink-0 w-[351px]" style={{ background: c }} />
          <div className="content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic pb-[20px] pt-[16px] px-[22px] relative shrink-0 w-full whitespace-nowrap">
            <B size={16}>PANTONE®</B>
            <B size={22}>{code}</B>
            <p className="font-['Google_Sans_Flex:Light'] font-light relative shrink-0 text-[16px] text-[rgba(139,111,75,0.45)]" style={fv}>{name}</p>
          </div>
        </div>
      ))}
      <Wide left={365} title="Gran formato" w={510} text="Pendones, fachada y señalética. En impresión digital, siempre con prueba de color previa.">
        <div className="bg-[#ddc9a3] h-[260px] overflow-clip relative rounded-[2px] shrink-0 w-[120px]" data-name="Pendón">
          <div className="absolute bg-[rgba(221,201,163,0.35)] h-[140px] left-[10px] rounded-[2px] top-[10px] w-[100px]" />
          <Logo inset="71.15% 16.67% 20.26% 16.67%" src={a('0fe3656a-c1fd-4589-9f59-9fcdadc7533b')} />
        </div>
      </Wide>
      <Wide left={1115} title="Papeles oscuros" w={430} text="Tinta blanca o beige, o un color de la paleta de la marca.">
        <div className="bg-[#25211e] h-[260px] overflow-clip relative rounded-[4px] shrink-0 w-[200px]" data-name="Muestra papel oscuro">
          <Logo inset="36.54% 20% 50.58% 20%" src={a('4840934e-2f87-42d3-8231-96fbfdbe9090')} />
          <p className="absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[37px] not-italic text-[11px] text-white top-[150px] tracking-[2.53px] whitespace-nowrap" style={fv}>{`MESA & MÍSTICA`}</p>
        </div>
      </Wide>
    </Page>
  );
}
