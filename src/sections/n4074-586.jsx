import { fv, Chrome, Subtitle, SideNote, CardLabel } from './_shared.jsx';

// Hidden template chrome ([Título de la diapositiva], columna lateral) sits under the full-cover
// cream panel in Figma and is omitted.
const imgEscala = "https://www.figma.com/api/mcp/asset/881f3be1-74d3-4fcf-806a-4cf2e4b29e13.svg";
const imgEscala1 = "https://www.figma.com/api/mcp/asset/f3a3d948-444b-46e8-9a2e-590b77e78a8b.svg";
const imgEscala2 = "https://www.figma.com/api/mcp/asset/ff7342a6-37bb-4379-9ed2-1eaea40f1049.svg";
const imgEscala3 = "https://www.figma.com/api/mcp/asset/398aad2a-2fdf-4d26-a22a-365a3b1c9dfa.svg";
const imgEscala4 = "https://www.figma.com/api/mcp/asset/f1c33979-76b7-48d6-a8c5-02feedec15c8.svg";

const SCALES = [['Formal', 'Cercano', imgEscala], ['Apurado', 'Pausado', imgEscala1], ['Exagerado', 'Sobrio', imgEscala2],
  ['Técnico', 'Sensorial', imgEscala3], ['Serio', 'Juguetón', imgEscala4]];
const USE = ['mesa', 'encuentro', 'ritual', 'fuego', 'origen', 'tribu', 'pausa', 'atardecer', 'templo', 'brindis', 'cosecha', 'de la casa'];
const AVOID = ['elegante', 'exclusivo', 'el mejor', 'único', 'inigualable', 'experiencia inolvidable', 'lujo', 'gourmet', 'espectacular'];
const RULES = [
  ['Mostrar en lugar de calificar', '«El tomahawk llega humeando a la mesa.»', '«Un tomahawk espectacular.»'],
  ['Ser específicos: qué plato, qué música, qué hora', '«Son cubano en vivo, jueves 7:30 p.m.»', '«Música en vivo esta semana.»'],
  ['Voz activa', '«Te guardamos la mesa.»', '«La mesa será reservada.»'],
  ['Una idea y una invitación por mensaje', '«Brunch del Sol, sábado desde las 10:00 a.m. Reserva tu mesa.»', '«Ven a vivir todas nuestras experiencias.»'],
  ['Escribir para el celular', 'Frases cortas. Lo importante en la primera línea.', 'Párrafos largos y la información clave al final.'],
];

const strike = '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid line-through';
const Card = ({ id, cls, children }) => (
  <div className={`[word-break:break-word] absolute content-stretch flex flex-col items-start overflow-clip rounded-[24px] ${cls}`} data-node-id={id}>{children}</div>
);
const ColHead = ({ w, children }) => (
  <div className="content-stretch flex items-start relative shrink-0" style={{ width: w }}>
    <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(139,111,75,0.45)] tracking-[1.68px] uppercase whitespace-nowrap" style={fv}>{children}</p>
  </div>
);
const Line = () => <div className="bg-[rgba(139,111,75,0.45)] h-px opacity-50 relative shrink-0 w-[1412px]" />;

function Archetype({ id, left, color, name, tag, quote, note }) {
  return (
    <Card id={id} cls="bg-[#ddc9a3] gap-[18px] h-[373px] p-[40px] top-[1477px] w-[726px]">
      <div className="content-stretch flex gap-[14px] items-center leading-[normal] relative shrink-0 text-[18px] whitespace-nowrap" style={{ color }}>
        <p className="font-['Google_Sans_Flex:Medium'] font-medium not-italic relative shrink-0 tracking-[4.14px] uppercase" style={fv}>{name}</p>
        <p className="font-['Google_Sans_Flex:Light_Italic'] font-light italic relative shrink-0" style={fv}>{tag}</p>
      </div>
      <p className="font-['Google_Sans_Flex:Thin'] font-thin leading-[48px] relative shrink-0 text-[38px] w-[646px]" style={{ ...fv, color }}>{quote}</p>
      <div className="h-px opacity-40 relative shrink-0 w-[646px]" style={{ background: color }} />
      <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic relative shrink-0 text-[18px] w-[646px]" style={{ ...fv, color }}>{note}</p>
    </Card>
  );
}

export default function VozEnLaPractica() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="4074:586" data-name="Voz · En la práctica">
      <Chrome title="Nuestra voz" metaLeft={81} titleLeft={365} />
      <Subtitle>En la práctica</Subtitle>
      <SideNote paras={['Así suena Ritwal cuando escribe un caption, responde una reseña o anuncia un evento.', 'Aplica a redes, web, mensajes, carta y pauta.']} />

      <Card id="4074:624" cls="bg-white gap-[16px] h-[432px] left-[365px] p-[32px] text-[#8b6f4b] top-[250px] w-[620px]">
        <CardLabel>Quién habla</CardLabel>
        <p className="font-['Google_Sans_Flex:Thin'] font-thin leading-[42px] relative shrink-0 text-[34px] w-[556px]" style={fv}>
          Un anfitrión que conoce a cada invitado por su nombre, sabe de dónde viene cada ingrediente y nunca tiene afán.
        </p>
        <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic relative shrink-0 text-[19px] w-[556px]" style={fv}>
          Habla de cerca y con calma, con un aire bohemio. No exagera ni vende: describe lo que pasa en la mesa y te invita a algo concreto.
        </p>
      </Card>

      <Card id="4074:628" cls="bg-white gap-[22px] h-[432px] left-[1009px] p-[32px] top-[250px] w-[832px]">
        <CardLabel>Tono</CardLabel>
        {SCALES.map(([a, b, img]) => (
          <div key={a} className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex font-['Google_Sans_Flex:Light'] font-light items-start justify-between leading-[normal] not-italic relative shrink-0 text-[17px] text-[rgba(139,111,75,0.45)] w-full whitespace-nowrap">
              <p className="relative shrink-0" style={fv}>{a}</p>
              <p className="relative shrink-0" style={fv}>{b}</p>
            </div>
            <div className="h-[16px] relative shrink-0 w-[768px]" data-name="Escala">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
            </div>
          </div>
        ))}
      </Card>

      <Card id="4074:670" cls="bg-white gap-[16px] h-[253px] left-[365px] p-[32px] top-[706px] w-[726px]">
        <CardLabel>Palabras que usamos</CardLabel>
        <div className="content-start flex flex-wrap gap-[10px] items-start relative shrink-0 w-full">
          {USE.map(w => (
            <div key={w} className="bg-[#ddc9a3] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[20px] shrink-0">
              <p className="font-['Google_Sans_Flex:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[17px] whitespace-nowrap" style={fv}>{w}</p>
            </div>
          ))}
        </div>
        <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[18px] w-[662px]" style={fv}>
          Y los nombres propios: tomahawk, Espresso Martini, son cubano, Brunch del Sol. Lo concreto siempre gana.
        </p>
      </Card>

      <Card id="4074:698" cls="bg-white gap-[16px] h-[253px] left-[1115px] p-[32px] top-[706px] w-[726px]">
        <CardLabel>Palabras que evitamos</CardLabel>
        <div className="content-start flex flex-wrap gap-[10px] items-start relative shrink-0 w-full">
          {AVOID.map(w => (
            <div key={w} className="border border-[rgba(139,111,75,0.45)] border-solid content-stretch flex items-start px-[16px] py-[8px] relative rounded-[20px] shrink-0">
              <p className={`${strike} font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic relative shrink-0 text-[17px] text-[rgba(139,111,75,0.45)] whitespace-nowrap`} style={fv}>{w}</p>
            </div>
          ))}
        </div>
        <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[18px] w-[662px]" style={fv}>
          Tampoco usamos mayúsculas sostenidas, cadenas de emojis ni varios signos de exclamación seguidos.
        </p>
      </Card>

      <Card id="4074:720" cls="bg-white left-[365px] p-[32px] top-[983px] w-[1476px]">
        <CardLabel>Así escribimos</CardLabel>
        <div className="h-[20px] relative shrink-0 w-[10px]" />
        <div className="content-stretch flex items-start pb-[12px] relative shrink-0 w-full">
          <ColHead w={380}>Regla</ColHead><ColHead w={500}>Así sí</ColHead><ColHead w={500}>Así no</ColHead>
        </div>
        {RULES.map(([rule, yes, no]) => (
          <div key={rule} className="contents">
            <Line />
            <div className="content-stretch flex items-start py-[16px] relative shrink-0 w-full">
              <div className="content-stretch flex items-start pr-[24px] relative shrink-0 w-[380px]">
                <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[19px] w-[356px]" style={fv}>{rule}</p>
              </div>
              <div className="content-stretch flex items-start pr-[24px] relative shrink-0 w-[500px]">
                <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[19px] w-[476px]" style={fv}>{yes}</p>
              </div>
              <div className="content-stretch flex items-start pr-[24px] relative shrink-0 w-[500px]">
                <p className={`${strike} font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic relative shrink-0 text-[19px] text-[rgba(139,111,75,0.45)] w-[476px]`} style={fv}>{no}</p>
              </div>
            </div>
          </div>
        ))}
      </Card>

      <div className="absolute left-[365px] top-0"><Archetype id="4074:770" left={0} color="#993921" name="El Mago" tag="convierte una comida en ritual"
        quote="«A las seis el sol se esconde detrás de Medellín. Para ese momento te guardamos un templo, una vela encendida y el primer brindis.»"
        note="Para eventos, atardeceres, celebraciones y las Noches frente al fuego." /></div>
      <div className="absolute left-[1115px] top-0"><Archetype id="4074:777" left={0} color="#656636" name="El Sabio" tag="sabe de dónde viene cada ingrediente"
        quote="«El tomahawk pesa un kilo y es Certified Angus Beef. Sale de la parrilla entre 54 y 57 °C, término tres cuartos, como lo recomienda la casa.»"
        note="Para platos, ingredientes, coctelería botánica y respuestas a preguntas." /></div>
    </div>
  );
}
