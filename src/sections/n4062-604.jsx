import { fv } from './_shared.jsx';
import { Page, TitleText } from './_contenido.jsx';

const imgAvatar = "https://www.figma.com/api/mcp/asset/672cc51a-e023-43a4-a351-7bcdb219bfc4.svg";
const imgStar = "https://www.figma.com/api/mcp/asset/c2eadd31-b045-4681-af5d-91470217aca1.svg";
const imgStarOff = "https://www.figma.com/api/mcp/asset/2290d667-a32c-418c-8e24-30eb22ed882b.svg";
const SEARCH = ['#CocteleriaMedellin', '#BrunchMedellin', '#MedellinFoodie', '#QueHacerEnMedellin', 'restaurante con vista Medellín', 'atardecer en Medellín'];

function Comment({ avatar, user, text, w, when, indent }) {
  return (
    <div className={`content-stretch flex gap-[12px] items-start relative shrink-0 w-full${indent ? ' pl-[46px]' : ''}`}>
      {avatar}
      <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[4px] items-start min-w-px not-italic relative">
        <p className="leading-[0] relative shrink-0 text-[#8b6f4b] text-[14px] whitespace-pre-wrap" style={{ width: w }}>
          <span className="font-['Inter:Semi_Bold'] font-semibold leading-[20px]">{user}</span>
          <span className="leading-[20px]">{`  ${text}`}</span>
        </p>
        <p className="leading-[normal] relative shrink-0 text-[12px] text-[rgba(139,111,75,0.45)] whitespace-pre">{`${when}   Responder`}</p>
      </div>
    </div>
  );
}
const Star = ({ src }) => <div className="relative shrink-0 size-[15px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={src} /></div>;

export default function ContenidoCommunityManagement() {
  return (
    <Page id="4062:604" name="Contenido · Community management" title="Community management" sub="Cómo responde Ritwal"
      note={['La comunidad debe sentirse escuchada en redes, igual que dentro del restaurante.', 'Los comentarios, guardados y envíos le dicen al algoritmo que la publicación vale la pena, y así llega a más gente.']}>
      <div className="absolute bg-white content-stretch flex flex-col gap-[18px] items-start left-[365px] overflow-clip p-[26px] rounded-[24px] top-[250px] w-[470px]" data-node-id="4062:642" data-name="Mock · Comentarios">
        <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[15px] text-center w-[418px]">Comentarios</p>
        <Comment avatar={<div className="bg-[rgba(221,201,163,0.35)] relative rounded-[17px] shrink-0 size-[34px]" />} user="laura.r" w={360} when="2 h"
          text="¿Hay que reservar para el brunch del domingo?" />
        <Comment indent avatar={<div className="relative shrink-0 size-[28px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} /></div>}
          user="ritwalmesamistica" w={320} when="1 h"
          text="¡Hola, Laura! Sí, te recomendamos reservar. El Brunch del Sol va de 10:00 a.m. a 2:00 p.m. Reservas en el link de la bio." />
      </div>
      <div className="absolute bg-white h-[534px] left-[885px] overflow-clip rounded-[28px] top-[250px] w-[300px]" data-node-id="4062:655" data-name="Mock · Historia con pregunta">
        <div className="absolute bg-[rgba(221,201,163,0.35)] h-[534px] left-0 top-0 w-[300px]" />
        <div className="absolute bg-white content-stretch flex flex-col items-start left-[32px] overflow-clip rounded-[18px] top-[190px] w-[236px]" data-name="Sticker de pregunta">
          <div className="bg-[#993921] content-stretch flex items-start justify-center p-[18px] relative shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f7f1e8] text-[15px] text-center w-[200px]">¿En qué templo te tocó el mejor atardecer?</p>
          </div>
          <div className="content-stretch flex items-start justify-center px-[16px] py-[14px] relative shrink-0 w-full">
            <p className="font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(139,111,75,0.45)] whitespace-nowrap">Escribe algo...</p>
          </div>
        </div>
        <div className="absolute bg-white h-[3px] left-[16px] rounded-[2px] top-[14px] w-[268px]" />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[14px] items-start left-[1370px] overflow-clip p-[26px] rounded-[24px] top-[250px] w-[470px]" data-node-id="4062:663" data-name="Mock · Reseña en Google">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <div className="bg-[rgba(221,201,163,0.35)] relative rounded-[17px] shrink-0 size-[34px]" />
          <div className="content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#8b6f4b] text-[14px]">Mark D.</p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[12px] text-[rgba(139,111,75,0.45)]">Local Guide · hace una semana</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
          <Star src={imgStar} /><Star src={imgStar} /><Star src={imgStar} /><Star src={imgStar} /><Star src={imgStarOff} />
        </div>
        <p className="font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[#8b6f4b] text-[14px] w-[418px]">Amazing sunset view and great cocktails. Service was a bit slow.</p>
        <div className="bg-[rgba(221,201,163,0.35)] content-stretch flex flex-col gap-[6px] items-start not-italic px-[16px] py-[14px] relative rounded-[14px] shrink-0 text-[#8b6f4b] w-full">
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] relative shrink-0 text-[13px] whitespace-nowrap">Respuesta del propietario</p>
          <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] w-[386px]">Thank you, Mark! We are glad you enjoyed the sunset. We shared your note on service times with our team. See you again soon.</p>
        </div>
      </div>
      <TitleText left={365} top={820} w={470} title="Atención al cliente">Todos los comentarios y mensajes se responden, idealmente el mismo día, con información clara sobre reservas. Las cotizaciones de eventos pasan a WhatsApp.</TitleText>
      <TitleText left={885} top={820} w={430} title="Iniciar conversaciones">Preguntas a la audiencia, recuerdos de celebraciones y contenido de clientes y creadores, republicado con permiso y crédito.</TitleText>
      <TitleText left={1370} top={820} w={470} title="Reseñas">Se agradecen todas, positivas o negativas, en Google, TripAdvisor y redes, en el idioma en que llegan, e invitando siempre a volver.</TitleText>
      <div className="absolute bg-[rgba(139,111,75,0.45)] h-px left-[365px] top-[996px] w-[1476px]" data-name="Regla" />
      <TitleText left={365} top={1026} w={620} title="Unirse a conversaciones">Buscar hashtags y palabras clave de gastronomía, mixología y turismo en Medellín. Comentar en cuentas afines de lifestyle, viajes y celebraciones, y en contenido de aliados y creadores locales.</TitleText>
      <div className="absolute content-start flex flex-wrap gap-[10px] h-[100px] items-start left-[1080px] overflow-clip top-[1030px] w-[760px]" data-name="Ejemplos de búsqueda">
        {SEARCH.map(s => (
          <div key={s} className="border border-[rgba(139,111,75,0.45)] border-solid content-stretch flex items-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
            <p className="font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[13px] whitespace-nowrap">{s}</p>
          </div>
        ))}
      </div>
    </Page>
  );
}
