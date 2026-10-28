import { fv } from './_shared.jsx';
import { Page, Tag, TitleText } from './_contenido.jsx';

const imgAvatar = "https://www.figma.com/api/mcp/asset/4caefaa1-1875-4d9f-a6de-67388e368b26.svg";
const imgAvatar1 = "https://www.figma.com/api/mcp/asset/7aff3f8f-4907-48f8-8048-ab019cdd4a26.svg";
const Av = ({ src, s = 34 }) => <div className="relative shrink-0" style={{ width: s, height: s }}><img alt="" className="absolute block inset-0 max-w-none size-full" src={src} /></div>;
const Outline = ({ children }) => (
  <div className="border border-[rgba(139,111,75,0.45)] border-solid content-stretch flex items-center px-[14px] py-[7px] relative rounded-[20px] shrink-0">
    <p className="font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[13px] whitespace-nowrap">{children}</p>
  </div>
);

function Ad({ id, left, avatars, who, cta, user, text }) {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start overflow-clip rounded-[24px] top-[250px] w-[456px]" style={{ left }} data-node-id={id}>
      <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[14px] relative shrink-0 w-full">
        {avatars}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-start leading-[normal] min-w-px not-italic relative text-[#8b6f4b] whitespace-nowrap">
          <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[14px]">{who}</p>
          <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[12px]">Publicidad</p>
        </div>
      </div>
      <div className="bg-[rgba(221,201,163,0.35)] h-[570px] relative shrink-0 w-[456px]" data-name="Espacio para imagen" />
      <div className="bg-[#8b6f4b] content-stretch flex font-['Inter:Semi_Bold'] font-semibold items-center justify-between leading-[normal] not-italic px-[16px] py-[14px] relative shrink-0 text-[#f7f1e8] w-full whitespace-nowrap">
        <p className="relative shrink-0 text-[14px]">{cta}</p>
        <p className="relative shrink-0 text-[20px]">›</p>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[18px] pt-[12px] px-[16px] relative shrink-0 w-full">
        <p className="font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#8b6f4b] text-[14px] w-[424px]">
          <span className="font-['Inter:Semi_Bold'] font-semibold leading-[20px]">{user}</span>
          <span className="leading-[20px]">{` ${text}`}</span>
        </p>
      </div>
    </div>
  );
}

export default function PautaTiposDePauta() {
  return (
    <Page id="4066:637" name="Pauta · Tipos de pauta" title="Tipos de pauta" sub="Cómo se ve cada anuncio"
      note={['Tres frentes: anuncios propios en Meta y TikTok, alianzas con creadores y medios, y búsqueda paga en Google.']}>
      <Ad id="4066:675" left={365} avatars={<Av src={imgAvatar} />} who="ritwalmesamistica" cta="Reservar" user="ritwalmesamistica"
        text="Hoy suena el son cubano en vivo con Medellín de fondo. Reserva tu mesa." />
      <Ad id="4066:688" left={875} who="creador.local y ritwalmesamistica" cta="Más información" user="creador.local"
        text="Mi plan del domingo: Brunch del Sol en Ritwal, con todo Medellín a los pies."
        avatars={<div className="content-stretch flex items-start relative shrink-0"><div className="bg-[#ddc9a3] mr-[-12px] relative rounded-[17px] shrink-0 size-[34px]" /><Av src={imgAvatar} /></div>} />
      <div className="absolute bg-white content-stretch flex flex-col gap-[10px] items-start left-[1385px] overflow-clip p-[28px] rounded-[24px] top-[250px] w-[456px]" data-node-id="4066:703" data-name="Mock · Anuncio de búsqueda en Google">
        <div className="border border-[rgba(139,111,75,0.45)] border-solid content-stretch flex items-start px-[18px] py-[12px] relative rounded-[24px] shrink-0 w-full">
          <p className="font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[14px] whitespace-nowrap">restaurante con vista medellín</p>
        </div>
        <div className="h-[8px] relative shrink-0 w-[4px]" />
        <p className="font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[13px] whitespace-nowrap">Patrocinado</p>
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          <Av src={imgAvatar1} s={28} />
          <div className="content-stretch flex flex-col font-['Inter:Regular'] font-normal items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
            <p className="relative shrink-0 text-[#8b6f4b] text-[13px]">{`Ritwal Mesa & Mística`}</p>
            <p className="relative shrink-0 text-[12px] text-[rgba(139,111,75,0.45)]">ritwalrestaurante.com</p>
          </div>
        </div>
        <p className="font-['Inter:Medium'] font-medium leading-[25px] not-italic relative shrink-0 text-[#656636] text-[19px] w-[400px]">{`Restaurante con vista en Medellín | Ritwal Mesa & Mística`}</p>
        <p className="font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[#8b6f4b] text-[14px] w-[400px]">Cocina de producto y coctelería botánica en el Alto de Los Balsos. Templos privados para grupos. Reserva en línea.</p>
        <div className="content-start flex flex-wrap gap-[8px] items-start pt-[6px] relative shrink-0 w-full">
          <Outline>Menú</Outline><Outline>Reservas</Outline><Outline>Eventos privados</Outline><Outline>Brunch del Sol</Outline>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[1385px] top-[660px] w-[456px]" data-name="Palabras clave">
        <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(139,111,75,0.45)] tracking-[1.68px] uppercase whitespace-nowrap" style={fv}>Palabras clave</p>
        <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
          {['Ritwal Medellín', 'restaurante con vista Medellín', 'brunch Medellín', 'coctelería Medellín', 'eventos empresariales Medellín'].map(k => <Tag key={k}>{k}</Tag>)}
        </div>
      </div>
      <TitleText left={365} top={1044} w={456} size={19} title="Meta y TikTok">Ubicación en Medellín y el Valle de Aburrá, más personas de viaje en la ciudad. Con Advantage+, la pieza encuentra a la audiencia: cada anuncio muestra con claridad el plato, el cóctel o la experiencia. Antes de publicar, apagar las mejoras automáticas que alteren fotos, colores o tono.</TitleText>
      <TitleText left={875} top={1044} w={456} size={19} title="Alianzas">Micro y nanoinfluenciadores elegidos por su audiencia en Medellín. Su contenido se pauta desde su cuenta: anuncio de colaboración en Meta, Spark Ads en TikTok. Notas en medios de gastronomía y turismo. Toda colaboración pagada se marca como publicidad.</TitleText>
      <TitleText left={1385} top={1044} w={456} size={19} title="Google Ads">Palabras clave de marca y de categoría, más una campaña aparte para eventos empresariales. Perfil de Empresa vinculado para salir en Maps. Performance Max reparte entre Búsqueda, Maps, YouTube y Display. Al comienzo pesa más que el SEO y el AEO, que tardan en dar resultados.</TitleText>
    </Page>
  );
}
