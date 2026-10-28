// Pieces repeated on almost every brandbook page in Figma (same classes as the exported layers).
export const fv = { fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' };

// Brand colours (Figma styles).
export const ECO = '#8b6f4b';            // Eco de Mar
export const ECO45 = 'rgba(139,111,75,0.45)';

// The two top rules at y=57 (the long one is exported as an SVG of a solid 1476×2 box).
export function TopRules({ color = ECO }) {
  return (
    <>
      <div className="absolute h-[2px] left-[364px] top-[57px] w-[1476px]" style={{ background: color }} data-name="Regla lateral" />
      <div className="absolute h-[2px] left-[80px] top-[57px] w-[248px]" style={{ background: color }} data-name="Regla lateral" />
    </>
  );
}

// "Ritwal® / Brand Guidelines" meta block, top left.
export function Meta({ left = 79, color = ECO, dim = ECO45 }) {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Google_Sans_Flex:Medium'] font-medium gap-px items-start leading-[normal] not-italic text-[15px] top-[72px] whitespace-nowrap" style={{ left }} data-name="Meta">
      <p className="relative shrink-0" style={{ ...fv, color }}>Ritwal®</p>
      <p className="relative shrink-0" style={{ ...fv, color: dim }}>Brand Guidelines</p>
    </div>
  );
}

// Section title next to the meta block (32px Medium).
export function Title({ left = 362, color = ECO, children }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start top-[72px]" style={{ left }} data-name="Meta">
      <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[32px] whitespace-nowrap" style={{ ...fv, color }}>
        {children}
      </p>
    </div>
  );
}

// Full chrome: rules + meta + optional title.
export function Chrome({ title, metaLeft, titleLeft, color, dim }) {
  return (
    <>
      <TopRules color={color} />
      <Meta left={metaLeft} color={color} dim={dim} />
      {title && <Title left={titleLeft} color={color}>{title}</Title>}
    </>
  );
}

// Glass pill with an underlined uppercase Drive link (download buttons).
export function Pill({ id, linkId, left, top, h, href, color = ECO, children }) {
  return (
    <div className="absolute content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center p-[25px] rounded-[37px]" style={{ left, top, height: h }} data-node-id={id}>
      <a className="[word-break:break-word] block font-['Google_Sans_Flex:Medium'] font-medium leading-[0] not-italic relative shrink-0 text-[16px] tracking-[4.16px] uppercase whitespace-nowrap" href={href} data-node-id={linkId} style={{ ...fv, color }} target="_blank" rel="noopener">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">{children}</p>
      </a>
    </div>
  );
}

// Two-line meta used on chapter openers (absolute <p>s instead of a flex column).
export function OpenerMeta({ color = ECO, dim = ECO45 }) {
  return (
    <>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[81px] not-italic text-[15px] top-[72px] whitespace-nowrap" style={{ ...fv, color }}>Ritwal®</p>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[81px] not-italic text-[15px] top-[91px] whitespace-nowrap" style={{ ...fv, color: dim }}>Brand Guidelines</p>
    </>
  );
}

// Big thin chapter word (Core Values, Logotipo, …) at y=151.
export function ChapterWord({ color = ECO, children }) {
  return (
    <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Thin'] font-thin h-[286px] leading-[275px] left-[364px] not-italic text-[315px] top-[151px] tracking-[-12.6px] w-[1493px]" style={{ ...fv, color }}>
      {children}
    </p>
  );
}

// Grey divider rule (rgba 0.45) used inside pages.
export function Rule({ left, top, w, h = 2, color = ECO45 }) {
  return <div className="absolute" style={{ left, top, width: w, height: h, background: color }} data-name="Regla lateral" />;
}

// Chapter subtitle: italic grey line under the section title (y=116).
export function Subtitle({ left = 365, children }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start top-[116px]" style={{ left }} data-name="Subtitle">
      <p className="[word-break:break-word] font-['Google_Sans_Flex:Light_Italic'] font-light italic leading-[normal] relative shrink-0 text-[24px] text-[rgba(139,111,75,0.45)] whitespace-nowrap" style={fv}>
        {children}
      </p>
    </div>
  );
}

// Left column note: grey rule at y=237 and ExtraLight 20px paragraphs at y=257.
export function SideNote({ left = 83, w = 247, top = 257, ruleTop = 237, paras }) {
  return (
    <>
      <Rule left={81} top={ruleTop} w={247} />
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[0] not-italic text-[#8b6f4b] text-[20px] whitespace-pre-wrap" style={{ ...fv, left, top, width: w }}>
        {paras.map((t, i) => (
          <div key={i}>
            {i > 0 && <p className="leading-[normal] mb-0">​</p>}
            <p className={`leading-[normal]${i < paras.length - 1 ? ' mb-0' : ''}`}>{t}</p>
          </div>
        ))}
      </div>
    </>
  );
}

// Spaced uppercase card label (18px Medium, tracking 4.14).
export function CardLabel({ color = ECO, children }) {
  return (
    <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] tracking-[4.14px] uppercase whitespace-nowrap" style={{ ...fv, color }}>
      {children}
    </p>
  );
}

// Opener page for a chapter: meta, giant word, top rules and optional download pill.
// The MENÚ button is only the floating one (site.config > floating); per-chapter copies duplicated it.
export function Opener({ id, name, word, pill }) {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id={id} data-name={name}>
      <OpenerMeta />
      <ChapterWord>{word}</ChapterWord>
      <TopRules />
      {pill && <Pill {...pill}>descargar</Pill>}
    </div>
  );
}

// Spaced uppercase label (CORRECTO / INCORRECTO / TAMAÑO…), 13px.
export function Label({ left, top, children }) {
  return (
    <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[#8b6f4b] text-[13px] tracking-[5.46px] uppercase whitespace-nowrap" style={{ ...fv, left, top }}>
      {children}
    </p>
  );
}

// Bold title + ExtraLight description (20px), used under logo examples.
export function Caption({ left, top, w, title, light, children }) {
  return (
    <div className={`[word-break:break-word] absolute ${light ? "font-['Google_Sans_Flex:Light'] font-light" : "font-['Google_Sans_Flex:ExtraLight'] font-extralight"} leading-[0] not-italic text-[#8b6f4b] text-[0px] ${w ? '' : 'whitespace-nowrap'}`} style={{ ...fv, left, top, width: w }}>
      <p className="font-['Google_Sans_Flex:Bold'] font-bold leading-[normal] mb-0 text-[20px]" style={fv}>{title}</p>
      <p className="leading-[normal] text-[20px]">{children}</p>
    </div>
  );
}

// Plain image box (Figma exports every vector/photo as an <img> filling its box).
export function Img({ id, cls = '', style, src, alt = '' }) {
  return (
    <div className={`absolute ${cls}`} style={style} data-node-id={id}>
      <img alt={alt} className="absolute block inset-0 max-w-none size-full" src={src} />
    </div>
  );
}

// "Incorrecto / Correcto" note under a wrong-use example (20px ExtraLight, bold labels).
export function WrongNote({ left, top, w = 342, wrong, right }) {
  const B = ({ children }) => <p className="font-['Google_Sans_Flex:Bold'] font-bold leading-[normal] mb-0" style={fv}>{children}</p>;
  return (
    <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[0] not-italic text-[#8b6f4b] text-[20px] whitespace-pre-wrap" style={{ ...fv, left, top, width: w }}>
      <B>Incorrecto</B>
      <p className="leading-[normal] mb-0">{wrong}</p>
      <p className="leading-[normal] mb-0">​</p>
      <B>Correcto</B>
      <p className="leading-[normal]">{right}</p>
    </div>
  );
}

// Diagonal strike line across a 315px example box (Figma: a -45° line exported as SVG).
export function Strike({ left, top, src, size = 315, len = 445.477 }) {
  return (
    <div className="absolute flex items-center justify-center" style={{ left, top, width: size, height: size }}>
      <div className="-rotate-45 flex-none">
        <div className="h-0 relative" style={{ width: len }}>
          <div className="absolute inset-[-2px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Small label in the corner of an example box (10px Medium).
export function BoxTag({ left, top, color = ECO, children }) {
  return (
    <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[10px] w-[130px]" style={{ ...fv, left, top, color }}>{children}</p>
  );
}

// Line-height / letter-spacing glyphs beside the typography spec lists (1px grey ticks + "A").
// `y` = top of the letter-spacing glyph, `ly` = top of the line-height glyph.
export function MeasureIcons({ y, ly }) {
  const tick = { background: ECO45 };
  const A = (left, top, size) => (
    <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[16px] not-italic whitespace-nowrap" style={{ ...fv, left, top, fontSize: size, color: ECO45 }}>A</p>
  );
  return (
    <>
      <div className="absolute h-[1px] left-[57px] w-[15px]" style={{ ...tick, top: ly - 1 }} />
      <div className="absolute h-[1px] left-[57px] w-[15px]" style={{ ...tick, top: ly + 14 }} />
      {A(60, ly, 14)}
      <div className="absolute h-[15px] left-[56.5px] w-[1px]" style={{ ...tick, top: y + 1 }} />
      <div className="absolute h-[15px] left-[71.5px] w-[1px]" style={{ ...tick, top: y + 1 }} />
      {A(61, y, 10)}
    </>
  );
}

// Typography spec list: [label, value] pairs separated by blank lines (20px, 22px leading).
export function SpecList({ items, top = 249 }) {
  return (
    <div className="[word-break:break-word] absolute leading-[0] left-[80px] not-italic text-[#8b6f4b] text-[0px] w-[248px] whitespace-pre-wrap" style={{ top }}>
      {items.map(([k, v], i) => (
        <div key={k}>
          {i > 0 && <p className="leading-[22px] mb-0 text-[20px]">​</p>}
          <p className="mb-0 text-[20px]">
            <span className="font-['Google_Sans_Flex:Medium'] font-medium leading-[22px]" style={fv}>{k}</span>
            <span className="font-['Google_Sans_Flex:Light'] font-light leading-[22px]" style={fv}>{` ${v}`}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

// Row of bordered photo cards (equal widths, 420px tall, object-cover) — Lenguaje Visual / Fotografía.
export function PhotoRow({ id, srcs, top = 230, gap = 20, h = 420, left = 364, w = 1478, border = true }) {
  return (
    <div className="absolute content-stretch flex items-start" style={{ left, top, width: w, gap, height: h + 13 }} data-node-id={id} data-name="Fotos">
      {srcs.map((it, i) => {
        // An item is a URL, or { src, crop: { height, top } } for Figma's manual crops, or { src, opacity }.
        const { src, crop, opacity } = typeof it === 'string' ? { src: it } : it;
        return (
          <div key={i} className={`${border ? 'border-[#8b6f4b] border-[1.5px] border-solid ' : ''}flex-[1_0_0] min-w-px relative rounded-[24px]`} style={{ height: h }} data-name="Espacio para imagen">
            {crop
              ? <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]"><img alt="" className="absolute left-0 max-w-none w-full" style={crop} src={src} /></div>
              : <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" style={{ opacity }} src={src} />}
          </div>
        );
      })}
    </div>
  );
}

// Chapter divider: meta, optional intro note at y=154, big word and top rules.
// `big` = the two-line variant (left 347, top 123) used by Lenguaje Visual / Fotografía / …
export function Divider({ id, name, word, intro, introRight, big }) {
  return (
    <div className="bg-[#f7f1e8] relative size-full" data-node-id={id} data-name={name}>
      {intro && (
        <p className={`[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[81px] not-italic text-[#8b6f4b] text-[20px] top-[154px] w-[250px]${introRight ? ' text-right' : ''}`} style={fv}>{intro}</p>
      )}
      <OpenerMeta />
      <TopRules />
      {big
        ? <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Thin'] font-thin h-[549px] leading-[275px] left-[347px] text-[#8b6f4b] text-[315px] top-[123px] tracking-[-12.6px] w-[1493px]" style={fv}>{word}</p>
        : <ChapterWord>{word}</ChapterWord>}
    </div>
  );
}
