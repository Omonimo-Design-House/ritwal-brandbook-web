// Template shared by the "Fotografía · …" pages: four borderless photos, side note and two text blocks.
import { fv, Chrome, Subtitle, Rule, PhotoRow } from './_shared.jsx';

export function PhotoPage({ id, name, sub, note, imgs, blocks, textTop = 711 }) {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id={id} data-name={name}>
      <Chrome title="Fotografía" metaLeft={81} titleLeft={365} />
      <Subtitle>{sub}</Subtitle>
      <PhotoRow srcs={imgs} top={234} border={false} />
      <Rule left={81} top={237} w={247} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[83px] not-italic text-[#8b6f4b] text-[20px] top-[257px] w-[240px]" style={fv}>{note}</p>
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light'] font-light leading-[0] left-[365px] not-italic text-[#8b6f4b] text-[24px] w-[1475px] whitespace-pre-wrap" style={{ ...fv, top: textTop }}>
        {blocks.map(([t, body], i) => (
          <div key={t}>
            {i > 0 && <p className="leading-[normal] mb-0">​</p>}
            <p className="font-['Google_Sans_Flex:Bold'] font-bold leading-[normal] mb-0" style={fv}>{t}</p>
            <p className="leading-[normal] mb-0">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
