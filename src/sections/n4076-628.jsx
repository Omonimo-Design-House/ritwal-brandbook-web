import { fv, Img } from './_shared.jsx';
import { Page } from './_contenido.jsx';

const a = (id) => `https://www.figma.com/api/mcp/asset/${id}.svg`;
const imgAvatar = a('061518f3-4645-49b5-b36a-18977d0a5d29');
const ICONS = ['1f9a54b4-4fa7-4170-8a5c-36d8f9a17ad5', '59fc80fb-55ca-4424-98de-e7f177d7f3eb', '093b4751-bb7c-47a5-8f4e-b5bef16543fb'].map(a);
const imgIcono3 = a('b1500f88-060a-4afd-b45f-caeeafbb3ed1');
const imgPunto = a('d50529a3-0e3c-4f13-8064-66e49aefc159');

// Elbow guides from the caption lines in the phone to the numbered notes: [guide svg, top, height, inset, dotTop].
const NOTES = [
  [a('e7e3cb84-97c5-4eef-a85e-912cad05f448'), 488, 450, '-0.17%', 934, 470, 'Inicio', 'La primera línea es lo único que se ve antes de «más». Ahí va el dato más fuerte: el plato y cuánto pesa, el cóctel, el lugar o el momento.'],
  [a('9f62f810-a129-4260-a9bb-0f1500351dad'), 648, 340, '-0.22%', 984, 630, 'Mensaje', 'El dato que lo respalda: de dónde viene, cómo se prepara, cuándo pasa. Con las palabras que la gente busca.'],
  [a('44f1b770-0a9f-49d5-bf79-191ba627e181'), 808, 230, '-0.33%', 1034, 790, 'Acción', 'Un solo llamado. «Reserva tu mesa» o una pregunta que abra conversación.'],
  [a('41bc8b6f-8a3d-41cd-9c41-33a06d3c36cc'), 968, 100, '-0.75%', 1064, 950, 'Cierre', 'La ubicación. No usamos hashtags.'],
];
const Icon = ({ src }) => <div className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={src} /></div>;
const Line = ({ children }) => <p className="leading-[20px] relative shrink-0 text-[#8b6f4b] text-[14px] w-[398px]">{children}</p>;

export default function ContenidoCaptions() {
  return (
    <Page id="4076:628" name="Contenido · Captions" title="Captions" sub="Simulación en Instagram"
      note={['Un caption, una acción.', 'Contamos el dato concreto: cuánto pesa, de dónde viene, cómo se prepara. Sin adjetivos como «inigualable» o «único», y sin hashtags.']}>
      <div className="absolute bg-white content-stretch flex flex-col items-start left-[470px] overflow-clip pb-[24px] pt-[16px] rounded-[48px] top-[236px] w-[430px]" data-node-id="4076:666" data-name="Celular · Post de Instagram">
        <div className="content-stretch flex h-[36px] items-center justify-between px-[30px] relative shrink-0 w-[430px]">
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[14px] whitespace-nowrap">9:41</p>
          <div className="bg-[#8b6f4b] h-[28px] relative rounded-[14px] shrink-0 w-[104px]" />
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[12px] whitespace-nowrap">100%</p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center pl-[14px] pr-[16px] py-[10px] relative shrink-0 w-full">
          <div className="relative shrink-0 size-[36px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} /></div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-start leading-[normal] min-w-px not-italic relative text-[#8b6f4b] whitespace-nowrap">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[14px]">ritwalmesamistica</p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[12px]">Alto de Los Balsos, Medellín</p>
          </div>
          <p className="font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[12px] whitespace-nowrap">•••</p>
        </div>
        <div className="bg-[rgba(221,201,163,0.35)] h-[538px] relative shrink-0 w-[430px]" data-name="Espacio para imagen · Tomahawk" />
        <div className="content-stretch flex gap-[16px] items-center pb-[10px] pt-[12px] px-[14px] relative shrink-0 w-full">
          {ICONS.map(s => <Icon key={s} src={s} />)}
          <div className="flex-[1_0_0] h-[4px] min-w-px relative" />
          <Icon src={imgIcono3} />
        </div>
        <div className="content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[10px] items-start not-italic px-[16px] relative shrink-0 w-full" data-name="Caption">
          <p className="leading-[0] relative shrink-0 text-[#8b6f4b] text-[14px] w-[398px]">
            <span className="font-['Inter:Semi_Bold'] font-semibold leading-[20px]">ritwalmesamistica</span>
            <span className="leading-[20px]">{` Un kilo de tomahawk, con el hueso de la costilla.`}</span>
          </p>
          <Line>Certified Angus Beef de Estados Unidos, a la parrilla y en término tres cuartos, como lo recomienda la casa.</Line>
          <Line>Reserva tu mesa. Link en bio.</Line>
          <Line>Alto de Los Balsos, Medellín.</Line>
          <p className="leading-[normal] relative shrink-0 text-[12px] text-[rgba(139,111,75,0.45)] whitespace-nowrap">Hace 2 horas</p>
        </div>
      </div>
      {NOTES.map(([guide, gTop, gH, inset, dotTop, y, title, text], i) => (
        <div key={title} className="contents">
          <div className="absolute left-[914px] w-[168px]" style={{ top: gTop, height: gH }} data-name="Guía">
            <div className="absolute" style={{ inset: `${inset} 0` }}><img alt="" className="block max-w-none size-full" src={guide} /></div>
          </div>
          <Img style={{ left: 910, top: dotTop, width: 8, height: 8 }} src={imgPunto} />
          <div className="absolute border-[#8b6f4b] border-[1.5px] border-solid content-stretch flex items-center justify-center left-[1090px] rounded-[18px] size-[36px]" style={{ top: y }}>
            <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[16px] whitespace-nowrap" style={fv}>{i + 1}</p>
          </div>
          <p className="absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[1146px] not-italic text-[#8b6f4b] text-[18px] tracking-[4.14px] uppercase whitespace-nowrap" style={{ ...fv, top: y + 7 }}>{title}</p>
          <p className="absolute font-['Google_Sans_Flex:Light'] font-light leading-[normal] left-[1146px] not-italic text-[#8b6f4b] text-[20px] w-[600px]" style={{ ...fv, top: y + 40 }}>{text}</p>
        </div>
      ))}
      <div className="[word-break:break-word] absolute bg-white content-stretch flex flex-col gap-[8px] items-start left-[1090px] not-italic px-[24px] py-[18px] rounded-[20px] text-[14px] top-[290px]" data-node-id="4076:719" data-name="Así se ve antes de «más»">
        <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] relative shrink-0 text-[rgba(139,111,75,0.45)] tracking-[1.4px] uppercase whitespace-nowrap" style={fv}>Así se ve antes de tocar «más»</p>
        <p className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[#8b6f4b] w-[600px]">
          <span className="font-['Inter:Semi_Bold'] font-semibold leading-[20px]">ritwalmesamistica</span>
          <span className="leading-[20px]">{` Un kilo de tomahawk, con el hueso de la costilla. Certified Angus...`}</span>
          <span className="leading-[20px] text-[rgba(139,111,75,0.45)]">{` más`}</span>
        </p>
      </div>
    </Page>
  );
}
