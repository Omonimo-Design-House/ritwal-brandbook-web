// Pieces shared by the "Contenido · …" / "Pauta · …" / "Impresos · …" pages.
import { fv, Chrome, Subtitle, SideNote } from './_shared.jsx';

// Page shell: chrome with its own title, italic subtitle and left note.
export function Page({ id, name, title, sub, note, children }) {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id={id} data-name={name}>
      <Chrome title={title} metaLeft={81} titleLeft={365} />
      <Subtitle>{sub}</Subtitle>
      {note && <SideNote paras={note} />}
      {children}
    </div>
  );
}

// White pill tag (Inter Medium 13).
export const Tag = ({ children, bg = 'bg-white' }) => (
  <div className={`${bg} content-stretch flex items-center px-[14px] py-[7px] relative rounded-[20px] shrink-0`}>
    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[13px] whitespace-nowrap">{children}</p>
  </div>
);

// Numbered callout: guide line + dot + circled number + spaced title + body (Instagram/TikTok pages).
export function Callout({ y, n, title, guide, dot, children, lineLeft = 914, lineW = 168, x = 1090, w = 600 }) {
  return (
    <>
      <div className="absolute h-0" style={{ left: lineLeft, top: y + 18, width: lineW }} data-name="Guía">
        <div className="absolute inset-[-0.75px_0]"><img alt="" className="block max-w-none size-full" src={guide} /></div>
      </div>
      <div className="absolute size-[8px]" style={{ left: lineLeft - 4, top: y + 14 }} data-name="Punto">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={dot} />
      </div>
      <div className="absolute border-[#8b6f4b] border-[1.5px] border-solid content-stretch flex items-center justify-center rounded-[18px] size-[36px]" style={{ left: x, top: y }}>
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[16px] whitespace-nowrap" style={fv}>{n}</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[#8b6f4b] text-[18px] tracking-[4.14px] uppercase whitespace-nowrap" style={{ ...fv, left: x + 56, top: y + 7 }}>{title}</p>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic text-[#8b6f4b] text-[20px]" style={{ ...fv, left: x + 56, top: y + 40, width: w }}>{children}</p>
    </>
  );
}

// White fact sheet: spaced label + [key, value] rows.
export function Sheet({ id, left, top, w = 656, title, rows, keyW = 150, valW = 434, cls = '' }) {
  return (
    <div className={`[word-break:break-word] absolute bg-white content-stretch flex flex-col gap-[14px] items-start leading-[normal] not-italic px-[28px] py-[24px] rounded-[24px] ${cls}`} style={{ left, top, width: w }} data-node-id={id}>
      <p className="font-['Google_Sans_Flex:Medium'] font-medium relative shrink-0 text-[#8b6f4b] text-[16px] tracking-[3.68px] uppercase whitespace-nowrap" style={fv}>{title}</p>
      {rows.map(([k, v]) => (
        <div key={k} className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Google_Sans_Flex:Medium'] font-medium relative shrink-0 text-[16px] text-[rgba(139,111,75,0.45)]" style={{ ...fv, width: keyW }}>{k}</p>
          <p className="font-['Google_Sans_Flex:Light'] font-light relative shrink-0 text-[#8b6f4b] text-[18px]" style={{ ...fv, width: valW }}>{v}</p>
        </div>
      ))}
    </div>
  );
}

// Card with a spaced title and empty checkboxes ("Antes de publicar").
export function Checklist({ id, cls, title = 'Antes de publicar', items, size = 19, textW }) {
  return (
    <div className={`absolute content-stretch flex flex-col gap-[14px] items-start overflow-clip rounded-[24px] ${cls}`} data-node-id={id}>
      <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#8b6f4b] text-[18px] tracking-[4.14px] uppercase whitespace-nowrap" style={fv}>{title}</p>
      {items.map(c => (
        <div key={c} className="content-stretch flex gap-[14px] items-center relative shrink-0">
          <div className="border-[#8b6f4b] border-[1.5px] border-solid relative rounded-[4px] shrink-0 size-[18px]" />
          <p className={`[word-break:break-word] font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic relative shrink-0 text-[#8b6f4b]${textW ? '' : ' whitespace-nowrap'}`} style={{ ...fv, fontSize: size, width: textW }}>{c}</p>
        </div>
      ))}
    </div>
  );
}

// Filled round number marker (SEO page).
export const Dot = ({ left, top, children }) => (
  <div className="absolute bg-[#8b6f4b] content-stretch flex items-center justify-center rounded-[16px] size-[32px]" style={{ left, top }}>
    <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#f7f1e8] text-[15px] whitespace-nowrap" style={fv}>{children}</p>
  </div>
);

// Small grey spaced heading above a block (14px Medium, tracking 1.68).
export const Head = ({ left, top, children }) => (
  <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[14px] text-[rgba(139,111,75,0.45)] tracking-[1.68px] uppercase whitespace-nowrap" style={{ ...fv, left, top }}>{children}</p>
);

// Spaced title + Light body at absolute positions.
export function TitleText({ left, top, title, w, size = 20, lh, gap = 36, children }) {
  return (
    <>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[#8b6f4b] text-[18px] tracking-[4.14px] uppercase whitespace-nowrap" style={{ ...fv, left, top }}>{title}</p>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light'] font-light not-italic text-[#8b6f4b]" style={{ ...fv, left, top: top + gap, width: w, fontSize: size, lineHeight: lh ? `${lh}px` : 'normal' }}>{children}</p>
    </>
  );
}
