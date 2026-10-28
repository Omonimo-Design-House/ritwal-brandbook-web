import { fv, Chrome, Rule } from './_shared.jsx';

export default function Component08Voz() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="12:264" data-name="08- Voz">
      <Chrome title="Nuestra voz" metaLeft={81} titleLeft={365} />
      <Rule left={1018} top={275} w={349} />
      <Rule left={1403} top={275} w={437} />
      {/* Mixed tracking in Figma: heading 1.44px, body -0.48px — set per paragraph. */}
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light'] font-light leading-[0] left-[1025px] not-italic text-[#8b6f4b] text-[0px] top-[295px] w-[352px] whitespace-pre-wrap" data-node-id="12:285" style={fv}>
        <p className="font-['Google_Sans_Flex:Bold'] font-bold leading-[normal] mb-0 text-[36px] tracking-[1.44px]" style={fv}>UNA VOZ CERCANA Y ELEGANTE.</p>
        <p className="leading-[normal] mb-0 text-[24px]">​</p>
        <p className="leading-[normal] mb-0 text-[24px] tracking-[-0.48px]">Hablamos de cerca y con calma, con un aire bohemio.</p>
        <p className="leading-[normal] mb-0 text-[24px]">​</p>
        <p className="leading-[normal] text-[24px] tracking-[-0.48px]">Escribimos en español. El inglés entra cuando un nombre lo pide, como brunch o Espresso Martini, y con los turistas: la carta, las respuestas a sus reseñas y la pauta para quienes están de viaje.</p>
      </div>
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light'] font-light leading-[0] left-[1404px] not-italic text-[#8b6f4b] text-[24px] top-[295px] tracking-[-0.48px] w-[408px] whitespace-pre-wrap" data-node-id="12:296" style={fv}>
        <p className="leading-[normal] mb-0">{`Cada mensaje invita a algo concreto. No adornamos palabras ni gastamos adjetivos que ya no significan nada como elegante, mejor, o exclusivo.  Menos es más.`}</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">Hablamos desde dos arquetipos: el Mago, que convierte una comida en ritual, y el Sabio, que sabe de dónde viene cada ingrediente.</p>
      </div>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Google_Sans_Flex:Thin'] font-thin h-[650px] leading-[0] left-[512px] text-[#8b6f4b] text-[158px] text-center top-[229px] tracking-[-3.16px] w-[914px]" data-node-id="12:297" style={fv}>
        <p className="leading-[158px] mb-0">Una pausa.</p>
        <p className="leading-[158px] mb-0">Un gozo.</p>
        <p className="leading-[158px]">Un Ritwal.</p>
      </div>
    </div>
  );
}
