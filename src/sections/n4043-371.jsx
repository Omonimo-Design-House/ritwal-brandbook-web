import { PhotoPage } from './_foto.jsx';

export default function FotografiaPersonas() {
  return <PhotoPage id="4043:371" name="Fotografía · Personas" sub="Personas"
    note="Colaboradores y comensales, siempre dentro del restaurante."
    imgs={[
      "https://www.figma.com/api/mcp/asset/c6fe029d-c5cf-4986-b9fd-4a6d104910d2.png",
      "https://www.figma.com/api/mcp/asset/3e15c83a-344a-41ab-a7f8-ad8273eb886b.png",
      "https://www.figma.com/api/mcp/asset/5b8181cd-fd8d-4601-ac34-e77d2154c936.png",
      "https://www.figma.com/api/mcp/asset/de63ecb8-a215-4aa3-a6bb-52b7e1c0daa9.png",
    ]}
    blocks={[
      ['Colaboradores', 'Bien presentados y en su trabajo diario. Se alternan retratos o planos medios, que transmiten cercanía, con tomas espontáneas. En la cocina se evitan los planos amplios: el encuadre cierra sobre la acción o la persona.'],
      ['Clientes', 'Naturales, sin poses forzadas. Los grupos van en planos generales que muestren la vida social del lugar. Los detalles, en tomas cerradas de las personas comiendo o brindando.'],
    ]} />;
}
