// Visible top-level frames of the Figma page, in order: [node id, height in px].
// Frames hidden in Figma are left out: 07-Personalidad (10:208), 24/25 Submarcas (18:2245, 18:2257),
// Contenido · Objetivos de marketing (4064:519). "Frame 7" (41:446) is the floating MENÚ button.
export const sections = [
  ['2:2', 696],         // 01 · Portada
  ['8:227', 1420],      // 02 · Introducción
  ['2:12', 1428],       // 03 · Índice
  ['2:86', 1080],       // 03 · Core Values
  ['8:294', 1655],      // 04 · ADN
  ['8:410', 1269],      // 05 · Nuestra Misión
  ['8:445', 749],       // 06-Pilares
  ['12:264', 1135],     // 08- Voz
  ['4074:586', 1960],   // Voz · En la práctica
  ['13:208', 1080],     // 09 · Logotipo
  ['3:14', 678],        // 10 · Logo · Standard
  ['14:353', 678],      // 11. Logo con tagline
  ['14:397', 714],      // 12. Logotipo Clear space
  ['15:511', 1081],     // 13. Logotipo orientación
  ['17:1225', 989],     // 14. Logotipo Tamaños
  ['15:661', 1221],     // 15-Logotipo ejemplos de aplicación
  ['15:927', 1639],     // 16-Logotipo usos incorrectos
  ['4020:287', 1080],   // 17 - Isotipo
  ['4018:274', 678],    // 18 - Isotipo estándar
  ['4020:304', 714],    // 19 - Isotipo clear space
  ['4022:394', 800],    // 20 - Isotipo orientación
  ['4023:320', 1080],   // 21 - Isotipo ejemplos de aplicación
  ['4023:496', 1243],   // 22 - Isotipo usos incorrectos
  ['19:2758', 1080],    // 28 - Color
  ['20:2771', 1779],    // 29 - Color Paleta Principal
  ['20:2897', 811],     // 30- Color - Armonías de Color
  ['31:1034', 1157],    // 32- Color usos incorrectos
  ['27:485', 1080],     // 33- Tipografía
  ['27:498', 2928],     // 34 - Tipografía Títulos
  ['27:597', 685],      // 35-Tipografía Subtitulos
  ['27:573', 686],      // 36 - Tipografía Texto Corrido
  ['33:1232', 919],     // 37 - Tipografía Jerarquía Visual
  ['4027:435', 958],    // 37b - Tipografía Uso especial para eventos
  ['31:1142', 1678],    // 38 - Tipografía Usos Incorrectos
  ['27:654', 1080],     // 07 · Divisor de sección (Lenguaje visual)
  ['4027:320', 898],    // Lenguaje Visual · Geometría sagrada
  ['4027:389', 898],    // Lenguaje Visual · Uso tipográfico
  ['4027:412', 898],    // Lenguaje Visual · Sistema de íconos
  ['28:667', 898],      // Lenguaje Visual · Texturas
  ['29:776', 1080],     // Divisor · Key Visuals
  ['29:789', 4230],     // Key Visuals · Piezas (2349 wide in Figma, clipped at 1920)
  ['4043:310', 1080],   // Divisor · Fotografía
  ['23:471', 1031],     // Fotografía · Principios
  ['4043:333', 1001],   // Fotografía · Comida y bebida
  ['4043:371', 1031],   // Fotografía · Personas
  ['4043:409', 971],    // Fotografía · Eventos
  ['4043:447', 1031],   // Fotografía · Espacios
  ['4075:600', 1546],   // Fotografía · Usos incorrectos
  ['4044:375', 1080],   // Divisor · Contenido digital
  ['4064:601', 811],    // Contenido · Canales
  ['4061:568', 1303],   // Contenido · Instagram
  ['4061:700', 1487],   // Contenido · TikTok
  ['4062:492', 1256],   // Contenido · SEO y AEO
  ['4064:702', 1134],   // Contenido · Dónde publicar
  ['4064:871', 809],    // Contenido · Proporción
  ['4064:930', 1030],   // Contenido · Temáticas de contenido
  ['4075:685', 1653],   // Contenido · Eventos
  ['4076:628', 1237],   // Contenido · Captions
  ['4062:604', 1247],   // Contenido · Community management
  ['4062:706', 1152],   // Contenido · Calendario
  ['4064:1014', 858],   // Contenido · Medición
  ['4045:420', 1080],   // Divisor · Pauta
  ['4066:573', 944],    // Pauta · Etapas de la pauta
  ['4066:637', 1334],   // Pauta · Tipos de pauta
  ['4066:744', 1348],   // Pauta · Formatos de pauta
  ['4045:516', 1080],   // Divisor · Impresos
  ['4079:628', 1652],   // Impresos · Papeles
  ['4079:2536', 1724],  // Impresos · Acabados y tintas
  ['30:867', 937],      // Descargar manual
  ['30:904', 846],      // 07 · Divisor de sección (cierre)
].map(([node, h]) => ({ node, h, id: `n${node.replace(':', '-')}`, file: `n${node.replace(':', '-')}` }));
