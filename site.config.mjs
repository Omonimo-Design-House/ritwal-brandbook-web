// Everything that changes between projects lives here. build.mjs reads it.
export default {
  // <head>
  lang: 'es',
  title: 'Ritwal® — Brand guidelines',
  description: 'Brand guidelines de Ritwal® Mesa & Mística por Omónimo Design House.',
  // One Google Fonts URL with every family/weight the design uses (incl. italics).
  googleFonts: 'https://fonts.googleapis.com/css2?family=Google+Sans+Flex:ital,opsz,wght@0,6..144,100..1000;1,6..144,100..1000&family=Inter:wght@400;500;600;700&display=swap',

  // Width of the Figma frame. The page is laid out at this width and scaled to the screen.
  designWidth: 1920,
  // Colour behind the page (visible only on overscroll).
  pageBackground: '#f7f1e8',

  // Figma family (as it appears in get_design_context, spaces -> "_") -> CSS font stack.
  fonts: {
    Google_Sans_Flex: "'Google Sans Flex', sans-serif",
    Inter: "'Inter', sans-serif",
    Continua_Online_Trial: "'Continua Online Trial', serif",
    Antarctican_Mono: "'Antarctican Mono', monospace",
    Roundhand: "'Roundhand', cursive",
    Casual_Human: "'Casual Human', sans-serif",
  },
  // Non-Google fonts served from src/fonts (copied to docs/fonts).
  fontFaces: [
    { family: 'Continua Online Trial', file: 'ContinuaOnlineTrial-Regular.ttf', weight: 400 },
    { family: 'Antarctican Mono', file: 'AntarcticanMono-Book.ttf', weight: 400 },
    { family: 'Antarctican Mono', file: 'AntarcticanMono-Medium.ttf', weight: 500 },
    { family: 'Roundhand', file: 'Roundhand-Regular.ttf', weight: 400 },
    { family: 'Casual Human', file: 'CasualHuman-Bold.otf', weight: 700 },
  ],

  // Prototype navigation: clicked node id -> target section node id (SCROLL_TO).
  // Index items: the whole row is clickable. In Figma the right-column rows point at Logotipo
  // while their labels point at their own chapter; the label is what the user means.
  nav: {
    '2:25': '2:86',        // Core Values
    '2:30': '13:208',      // Logotipo
    '4020:299': '4020:287', // Isotipo
    '2013:875': '19:2758', // Color
    '2:50': '27:485',      // Tipografía
    '2:58': '27:654',      // Lenguaje Visual
    '2:61': '29:776',      // Key Visuals
    '4045:598': '4043:310', // Fotografía
    '4045:593': '4044:375', // Contenido digital
    '4045:588': '4045:420', // Pauta
    '4045:583': '4045:516', // Impresos
    // "Volver al índice" pills
    '4073:598': '2:12',
    '4073:601': '2:12',
    '4073:604': '2:12',
    '4073:607': '2:12',
    '4073:610': '2:12',
    '4073:613': '2:12',
    '4073:616': '2:12',
    '4073:619': '2:12',
    '4073:622': '2:12',
    '4073:625': '2:12',
    '4073:628': '2:12',
  },
  navFallback: {},
  links: {},

  // Nodes with Figma's GLASS effect (CSS approximation is applied to them).
  glassNodes: ['41:453', '4073:598', '41:457', '13:287', '4073:601', '4073:604', '4073:607', '41:469',
    '4073:610', '4073:613', '4073:616', '4073:619', '4073:622', '4084:646', '4084:649', '4084:651',
    '4084:653', '4073:625', '4073:628', '41:477'],

  // Elements fixed on screen while scrolling (Figma "fixed" children of the root frame).
  // mix-blend-difference does not blend inside the fixed wrapper, so the text uses the solid colour Figma shows.
  floating: [
    { nodeId: '41:446', x: 1765, y: 196, w: 80, h: 80, radius: 47, navTo: '2:12', glass: true,
      html: `<div class="content-stretch drop-shadow-[0px_0px_3.9px_rgba(0,0,0,0.25)] flex items-center justify-center px-[22px] py-[10px] relative rounded-[47px] size-full cursor-pointer"><div class="[word-break:break-word] font-['Google_Sans_Flex:Bold'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0c0c] text-[13px] text-left tracking-[1.95px] whitespace-nowrap" data-node-id="41:445" style="font-variation-settings:'GRAD' 0, 'ROND' 0, 'wdth' 100"><p class="leading-[1.202]">MENÚ</p></div></div>` },
  ],

  favicon: { asset: 'ddd2dd5c-1ec4-4fed-9a35-bf241e5ef8e9.svg', touchBackground: '#f7f1e8' },
};
