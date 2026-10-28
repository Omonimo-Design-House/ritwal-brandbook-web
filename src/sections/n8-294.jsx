import { fv, Chrome, Rule } from './_shared.jsx';

// Question label (left) + Thin 64px answer (right).
function Row({ top, labelTop = top, h, q, children }) {
  return (
    <>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:SemiBold'] font-semibold leading-[27px] left-[81px] not-italic text-[#8b6f4b] text-[20px] uppercase whitespace-nowrap" style={{ ...fv, top: labelTop }}>{q}</p>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Thin'] font-thin leading-[64px] left-[360px] text-[#8b6f4b] text-[64px] w-[1330px]" style={{ ...fv, top, height: h }}>{children}</p>
    </>
  );
}

export default function Component04Adn() {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id="8:294" data-name="04 · ADN">
      <Chrome title="ADN" metaLeft={81} titleLeft={365} />
      <Row top={319.25} h={137} q="¿Quiénes somos?">Un restaurante en Los Balsos, Medellín, hecho para celebrar la mesa como ritual.</Row>
      <Row top={642.25} h={137} q="¿Qué hacemos?">Cocina de producto y coctelería botánica.</Row>
      <Row top={950} labelTop={950.25} h={144} q="¿Cómo lo hacemos?">Con un servicio cercano, un enfoque en la calidad de los ingredientes y las mejores vistas de Medellín.</Row>
      <Row top={1248.25} h={139} q="¿Por qué?">Porque la magia está en el encuentro, con nosotros mismos y con los demás.</Row>
      <Rule left={81} top={294} w={1759} />
      <Rule left={81} top={618} w={1759} />
      <Rule left={81} top={926} w={1759} />
      <Rule left={81} top={1223} w={1759} />
    </div>
  );
}
