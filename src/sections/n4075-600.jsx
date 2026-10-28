import { fv, Chrome, Subtitle, SideNote, WrongNote, CardLabel } from './_shared.jsx';

function Bad({ left, top, src, tag }) {
  return (
    <div className="absolute h-[330px] overflow-clip rounded-[24px] w-[468px]" style={{ left, top }} data-name={`Espacio para imagen · ${tag}`}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={src} />
      <div className="absolute bg-white content-stretch flex items-start left-[18px] px-[14px] py-[8px] rounded-[16px] top-[18px]">
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[14px] whitespace-nowrap" style={fv}>{tag}</p>
      </div>
      <div className="absolute bg-[#993921] content-stretch flex items-center justify-center left-[414px] rounded-[18px] size-[36px] top-[18px]">
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic relative shrink-0 text-[#ddc9a3] text-[24px] whitespace-nowrap" style={fv}>×</p>
      </div>
    </div>
  );
}
const CHECKS = ['¿El lugar se ve vivo?', '¿Mesa, barra y cocina están en orden?', '¿Las personas que salen dieron permiso?', '¿El plato se ve apetitoso?', '¿La luz es cálida y sin brillos?'];

export default function FotografiaUsosIncorrectos() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="4075:600" data-name="Fotografía · Usos incorrectos">
      <Chrome title="Fotografía" metaLeft={81} titleLeft={365} />
      <Subtitle>Usos Incorrectos</Subtitle>
      <SideNote paras={['Estas fotos no se publican, ni en redes ni en la web.', 'Antes de subir una foto, revisa la lista del final.']} />
      <Bad left={365} top={250} tag="Restaurante vacío" src="https://www.figma.com/api/mcp/asset/ec62aefd-fc78-4810-8ea5-2ec219835ce7.png" />
      <Bad left={869} top={250} tag="Desorden" src="https://www.figma.com/api/mcp/asset/d210aa97-041a-48ee-82fd-72cf75123dad.png" />
      <Bad left={1373} top={250} tag="Actividades que no nos representan" src="https://www.figma.com/api/mcp/asset/40d542b0-0575-41c4-8947-224835a350e4.png" />
      <Bad left={365} top={868} tag="Comensales sin permiso" src="https://www.figma.com/api/mcp/asset/8046fc27-9b1d-4838-b9fb-b46c1139acf7.png" />
      <Bad left={869} top={868} tag="Platos mal presentados" src="https://www.figma.com/api/mcp/asset/7c0a7b4b-db83-4f9b-b01e-74fa2e91d615.png" />
      <WrongNote left={365} top={608} w={468} wrong="Mesas vacías y salones sin gente. El lugar se ve apagado." right="Planos amplios solo con comensales y el lugar en plena actividad. Sin gente, solo detalles: materiales, plantas, luz." />
      <WrongNote left={869} top={608} w={468} wrong="Platos sucios, servilletas usadas, mesas sin recoger o una cocina desordenada al fondo." right="Revisar el encuadre antes de disparar: mesa limpia, barra y cocina en orden." />
      <WrongNote left={1373} top={608} w={468} wrong="Gente fumando, ruido, algarabía o excesos." right="Momentos de encuentro: el brindis, la conversación, la música en vivo." />
      <WrongNote left={365} top={1226} w={468} wrong="Mostrar la cara o el cuerpo completo de un comensal sin su autorización." right="Manos, detalles y planos donde no se reconozca a nadie. Caras solo en eventos especiales o con permiso." />
      <WrongNote left={869} top={1226} w={468} wrong="Platos derretidos, desarmados, con el borde sucio o que se ven fríos." right="El plato recién servido, limpio y apetitoso. Si no se ve bien, se vuelve a emplatar o no se publica." />
      <div className="absolute bg-[#ddc9a3] content-stretch flex flex-col gap-[16px] h-[330px] items-start left-[1373px] overflow-clip p-[32px] rounded-[24px] top-[868px] w-[468px]" data-node-id="4075:668" data-name="Antes de publicar una foto">
        <CardLabel>Antes de publicar</CardLabel>
        {CHECKS.map(c => (
          <div key={c} className="content-stretch flex gap-[14px] items-center relative shrink-0">
            <div className="border-[#8b6f4b] border-[1.5px] border-solid relative rounded-[4px] shrink-0 size-[18px]" />
            <p className="[word-break:break-word] font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[20px] w-[372px]" style={fv}>{c}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
