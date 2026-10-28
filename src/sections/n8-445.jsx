import { fv, Chrome } from './_shared.jsx';

const B = ({ children }) => <span className="font-['Google_Sans_Flex:Bold'] font-bold leading-[normal]" style={fv}>{children}</span>;
const L = ({ children }) => <span className="font-['Google_Sans_Flex:Light'] font-light leading-[normal]" style={fv}>{children}</span>;

function Pillar({ left, w = 309, name, children }) {
  return (
    <>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium h-[52px] leading-[42px] not-italic text-[#8b6f4b] text-[36px] top-[344px] tracking-[8.28px] uppercase w-[309px]" style={{ ...fv, left }}>{name}</p>
      <p className="[word-break:break-word] absolute leading-[0] not-italic text-[#8b6f4b] text-[20px] top-[415px]" style={{ ...fv, left, width: w }}>{children}</p>
    </>
  );
}
const VRule = ({ left }) => <div className="absolute bg-[rgba(139,111,75,0.45)] h-[269px] top-[333px] w-[2px]" style={{ left }} data-name="Regla lateral" />;

export default function Component06Pilares() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="8:445" data-name="06-Pilares">
      <Chrome title="Pilares de marca" metaLeft={81} titleLeft={365} />
      <VRule left={714} /><VRule left={1103} /><VRule left={1492} />
      <Pillar left={365} w={259} name="ENCUENTRO"><L>{`Atendemos para que la gente se quede. `}</L><B>Clientes y colaboradores sienten que alguien los escucha.</B></Pillar>
      <Pillar left={754} name="BIENESTAR"><B>Ofrecemos meditación, yoga y acompañamiento psicológico</B><L>{` a clientes y al equipo. La comida es una parte del bienestar.`}</L></Pillar>
      <Pillar left={1143} name="RITUAL"><B>{`Nos enfocamos en construir una comunidad alrededor de nuestra experiencia. `}</B><L>Brunch del Sol los fines de semana, Son Cubano los jueves, Noches Ritwal frente al fuego.</L></Pillar>
      <Pillar left={1532} name="ORIGEN"><B>Para nosotros es importante contar nuestra historia,</B><L>{` por eso prestamos especial atención al origen de todo, desde nuestros ingredientes hasta nuestras preparaciones.`}</L></Pillar>
    </div>
  );
}
