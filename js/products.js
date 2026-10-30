/**
 * ====================================================================
 * CATÁLOGO DE PRODUCTOS - MÁS CANELA STORE
 * ====================================================================
 * Puedes modificar, agregar o eliminar productos fácilmente en este archivo.
 * 
 * POLÍTICA DE PRECIOS:
 * - Precio al detal: $70.000 COP por unidad
 * - Precio al por mayor: $60.000 COP por unidad (a partir de 6 unidades,
 *   pueden ser mezclados entre hombre y mujer)
 */

const STORE_CONFIG = {
  name: "Más Canela Store",
  slogan: "Moda para cada versión de ti",
  whatsappNumber: "573026027989", // Número sin '+' ni espacios
  email: "Mascanelacol@gmail.com",
  currency: "COP",
  retailPrice: 70000,          // Precio regular por unidad
  wholesalePrice: 60000,       // Precio por mayor por unidad
  wholesaleMinUnits: 6,        // Cantidad mínima para activar precio al por mayor
  heroImages: [
    "images/banner/banner-01.jpeg",
    "images/banner/banner-02.jpeg",
    "images/banner/banner-03.jpeg",
    "images/banner/banner-04.jpeg",
    "images/banner/banner-05.jpeg",
    "images/banner/banner-06.jpeg"
  ]
};

// ------------------------------------------------------------------
// SILUETAS DE DAMA (orden y textos de las secciones en la pestaña Dama)
// Para crear una silueta nueva: agrégala aquí y usa el mismo "key"
// en el campo "silhouette" de sus productos.
// ------------------------------------------------------------------
const DAMA_SILHOUETTES = [
  {
    key: "baggy",
    name: "Baggy Rígido",
    short: "Baggy",
    tag: "DESTACADOS TENDENCIA",
    bannerTag: "DESTACADOS · SILUETA TENDENCIA",
    desc: "Denim 100% rígido con estructura clásica, horma noventera y tiro alto relajado.",
    bannerDesc: "Denim 100% rígido estructurado con actitud noventera y tiro alto relajado.",
    sizeGuide: "images/guia_tallas/guia-tallas-baggy-rigido-dama.jpeg"
  },
  {
    key: "palazzo",
    name: "Palazzo Licrado",
    short: "Palazzo",
    tag: "SILUETA EXCLUSIVA",
    desc: "Tiro alto anatómico, pierna ancha y denim licrado de máxima comodidad.",
    bannerDesc: "Silueta de pierna amplia en denim licrado con pretina alta y caída fluida.",
    sizeGuide: "images/guia_tallas/guia-tallas-palazzo-licrado-dama.jpeg"
  },
  {
    key: "carpintero",
    name: "Baggy Carpintero Rígido",
    pill: "Baggy Carpintero",
    short: "Carpintero",
    tag: "NUEVA COLECCIÓN",
    desc: "Baggy en denim rígido con correa de carpintero y tiro alto relajado.",
    sizeGuide: "images/guia_tallas/guia-tallas-baggy-carpintero-dama.jpeg"
  },
  {
    key: "ochentero",
    name: "Ochentero Clásico",
    short: "Ochentero",
    tag: "NUEVA COLECCIÓN",
    desc: "Silueta ajustada de tiro alto con estilo ochentero que realza tu figura.",
    sizeGuide: "images/guia_tallas/guia-tallas-ochentero-dama.jpeg"
  },
  {
    key: "botones",
    name: "Clásico 4 Botones",
    short: "4 Botones",
    tag: "NUEVA COLECCIÓN",
    desc: "Tiro alto con pretina de 4 botones y ajuste ceñido que estiliza la cintura.",
    sizeGuide: "images/guia_tallas/guia-tallas-4-botones-dama.jpeg"
  }
];

// ------------------------------------------------------------------
// SILUETAS DE CABALLERO (misma estructura que las de Dama)
// sizeGuide: imagen de la guía de tallas de cada silueta (opcional; también sirve para Dama)
// ------------------------------------------------------------------
const CABALLERO_SILHOUETTES = [
  {
    key: "skinny",
    name: "Skinny Licrado",
    short: "Skinny",
    tag: "DESTACADOS TENDENCIA",
    desc: "Ajuste skinny en denim licrado con máxima libertad de movimiento y horma moderna.",
    sizeGuide: "images/guia_tallas/guia-tallas-skinny-hombre.jpeg"
  },
  {
    key: "baggy",
    name: "Baggy Rígido",
    short: "Baggy",
    tag: "ESTILO URBANO",
    desc: "Denim 100% rígido de pierna amplia con actitud streetwear y caída holgada.",
    sizeGuide: "images/guia_tallas/guia-tallas-baggy-rigido-hombre.jpeg"
  },
  {
    key: "bermuda",
    name: "Bermuda Rígida",
    short: "Bermuda",
    tag: "TEMPORADA",
    desc: "Bermudas en tela rígida con lavados y acabados desgastados para clima cálido.",
    sizeGuide: "images/guia_tallas/guia-tallas-bermuda-rigida-hombre.jpeg"
  }
];

// Siluetas disponibles por categoría (la pestaña Todos no usa sub-filtros)
const SILHOUETTES_BY_CATEGORY = {
  Dama: DAMA_SILHOUETTES,
  Caballero: CABALLERO_SILHOUETTES
};

const PRODUCTS_DATA = [
  // ------------------------------------------------------------------
  // COLECCIÓN DAMA (Zirox Jeans Luxury) - SILUETA PALAZZO LICRADO
  // ------------------------------------------------------------------
  {
    id: "prod-dama-z01",
    refCode: "Z01",
    title: "Jean Palazzo Licrado - Ref. Z01",
    category: "Dama",
    silhouette: "palazzo",
    silhouetteName: "Palazzo Licrado",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Silueta palazzo de pierna ancha en denim licrado con caída espectacular y pretina alta anatómica. Combina elegancia y comodidad para tu día a día.",
    image: "images/jeans_dama/palazo_licrado_dama/referencia-Z01/ref_z01.jpeg",
    images: {
      front: "images/jeans_dama/palazo_licrado_dama/referencia-Z01/ref_z01.jpeg",
      both: "images/jeans_dama/palazo_licrado_dama/referencia-Z01/ref_z01_ambas_caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14", "16"],
    featured: true
  },
  {
    id: "prod-dama-z02",
    refCode: "Z02",
    title: "Jean Palazzo Licrado - Ref. Z02",
    category: "Dama",
    silhouette: "palazzo",
    silhouetteName: "Palazzo Licrado",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Corte palazzo amplio con pretina alta estilizadora en tela licrada suave y de máxima flexibilidad. Horma perfecta que realza tu figura.",
    image: "images/jeans_dama/palazo_licrado_dama/referencia-Z02/ref-Z02.jpeg",
    images: {
      front: "images/jeans_dama/palazo_licrado_dama/referencia-Z02/ref-Z02.jpeg",
      both: "images/jeans_dama/palazo_licrado_dama/referencia-Z02/ref-Z02-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14", "16"],
    featured: true
  },
  {
    id: "prod-dama-z03",
    refCode: "Z03",
    title: "Jean Palazzo Licrado - Ref. Z03",
    category: "Dama",
    silhouette: "palazzo",
    silhouetteName: "Palazzo Licrado",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Denim licrado de caída sofisticada en diseño palazzo. Acabados premium, costuras reforzadas y ajuste cómodo para toda ocasión.",
    image: "images/jeans_dama/palazo_licrado_dama/referencia-Z03/ref-ZO3.jpeg",
    images: {
      front: "images/jeans_dama/palazo_licrado_dama/referencia-Z03/ref-ZO3.jpeg",
      both: "images/jeans_dama/palazo_licrado_dama/referencia-Z03/ref-ZO3-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14", "16"],
    featured: true
  },
  {
    id: "prod-dama-z04",
    refCode: "Z04",
    title: "Jean Palazzo Licrado - Ref. Z04",
    category: "Dama",
    silhouette: "palazzo",
    silhouetteName: "Palazzo Licrado",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Palazzo contemporáneo tiro alto que alarga visualmente tus piernas. Confeccionado en denim elástico de alta recuperación.",
    image: "images/jeans_dama/palazo_licrado_dama/referencia-Z04/ref-Z04.jpeg",
    images: {
      front: "images/jeans_dama/palazo_licrado_dama/referencia-Z04/ref-Z04.jpeg",
      both: "images/jeans_dama/palazo_licrado_dama/referencia-Z04/ref-Z04-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14", "16"],
    featured: true
  },
  {
    id: "prod-dama-z05",
    refCode: "Z05",
    title: "Jean Palazzo Licrado - Ref. Z05",
    category: "Dama",
    silhouette: "palazzo",
    silhouetteName: "Palazzo Licrado",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Diseño palazzo versátil y favorecedor con pretina anatómica. Denim con porcentaje de elongación ideal para moverte con total libertad.",
    image: "images/jeans_dama/palazo_licrado_dama/referencia-Z05/ref-Z05.jpeg",
    images: {
      front: "images/jeans_dama/palazo_licrado_dama/referencia-Z05/ref-Z05.jpeg",
      both: "images/jeans_dama/palazo_licrado_dama/referencia-Z05/ref-Z05-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14", "16"],
    featured: true
  },
  {
    id: "prod-dama-z06",
    refCode: "Z06",
    title: "Jean Palazzo Licrado - Ref. Z06",
    category: "Dama",
    silhouette: "palazzo",
    silhouetteName: "Palazzo Licrado",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Corte amplio y fluido en denim licrado con detalles de confección refinados. Ideal para looks casuales y elegantes de impacto.",
    image: "images/jeans_dama/palazo_licrado_dama/referencia-Z06/ref-Z06.jpeg",
    images: {
      front: "images/jeans_dama/palazo_licrado_dama/referencia-Z06/ref-Z06.jpeg",
      both: "images/jeans_dama/palazo_licrado_dama/referencia-Z06/ref-Z06-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14", "16"],
    featured: true
  },
  {
    id: "prod-dama-z07",
    refCode: "Z07",
    title: "Jean Palazzo Licrado - Ref. Z07",
    category: "Dama",
    silhouette: "palazzo",
    silhouetteName: "Palazzo Licrado",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Palazzo de tiro alto con ajuste preciso en cintura y caída amplia que estiliza cualquier silueta. Suavidad y flexibilidad todo el día.",
    image: "images/jeans_dama/palazo_licrado_dama/referencia-Z07/ref-Z07.jpeg",
    images: {
      front: "images/jeans_dama/palazo_licrado_dama/referencia-Z07/ref-Z07.jpeg",
      both: "images/jeans_dama/palazo_licrado_dama/referencia-Z07/ref-Z07-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14", "16"],
    featured: true
  },

  // ------------------------------------------------------------------
  // COLECCIÓN DAMA (Zirox Jeans Luxury) - SILUETA BAGGY RÍGIDO
  // ------------------------------------------------------------------
  {
    id: "prod-dama-z08",
    refCode: "Z08",
    title: "Jean Baggy Rígido - Ref. Z08",
    category: "Dama",
    silhouette: "baggy",
    silhouetteName: "Baggy Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Silueta baggy relajada en denim 100% rígido de máxima calidad y durabilidad. Estilo noventero auténtico y moderno con gran estructura.",
    image: "images/jeans_dama/baggy_rigido_dama/ref-Z08/ref-Z08.jpeg",
    images: {
      front: "images/jeans_dama/baggy_rigido_dama/ref-Z08/ref-Z08.jpeg",
      both: "images/jeans_dama/baggy_rigido_dama/ref-Z08/ref-Z08-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14"],
    featured: true
  },
  {
    id: "prod-dama-z09",
    refCode: "Z09",
    title: "Jean Baggy Rígido - Ref. Z09",
    category: "Dama",
    silhouette: "baggy",
    silhouetteName: "Baggy Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Corte baggy urbano con caída estructurada y tiro alto. Confeccionado en denim rígido resistente con horma impecable.",
    image: "images/jeans_dama/baggy_rigido_dama/ref-Z09/ref-Z09.jpeg",
    images: {
      front: "images/jeans_dama/baggy_rigido_dama/ref-Z09/ref-Z09.jpeg",
      both: "images/jeans_dama/baggy_rigido_dama/ref-Z09/ref-Z09-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14"],
    featured: true
  },
  {
    id: "prod-dama-z10",
    refCode: "Z10",
    title: "Jean Baggy Rígido - Ref. Z10",
    category: "Dama",
    silhouette: "baggy",
    silhouetteName: "Baggy Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Jean baggy con carácter y actitud. Denim rígido que no se deforma, diseño juvenil con bota amplia y ajuste cómodo en cintura.",
    image: "images/jeans_dama/baggy_rigido_dama/ref-Z10/ref-Z10.jpeg",
    images: {
      front: "images/jeans_dama/baggy_rigido_dama/ref-Z10/ref-Z10.jpeg",
      both: "images/jeans_dama/baggy_rigido_dama/ref-Z10/ref-Z10-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14"],
    featured: true
  },
  {
    id: "prod-dama-z11",
    refCode: "Z11",
    title: "Jean Baggy Rígido - Ref. Z11",
    category: "Dama",
    silhouette: "baggy",
    silhouetteName: "Baggy Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Estilo baggy streetwear en tela rígida de textura firme y acabado premium. Diseñado para un look relajado sin perder el toque chic.",
    image: "images/jeans_dama/baggy_rigido_dama/ref-Z11/ref-Z11.jpeg",
    images: {
      front: "images/jeans_dama/baggy_rigido_dama/ref-Z11/ref-Z11.jpeg",
      both: "images/jeans_dama/baggy_rigido_dama/ref-Z11/ref-Z11-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14"],
    featured: true
  },
  {
    id: "prod-dama-z12",
    refCode: "Z12",
    title: "Jean Baggy Rígido - Ref. Z12",
    category: "Dama",
    silhouette: "baggy",
    silhouetteName: "Baggy Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Baggy clásico en denim estructurado que resalta tu cintura con pierna holgada. Versátil para combinar con tenis, botas o tacones.",
    image: "images/jeans_dama/baggy_rigido_dama/ref-Z12/ref-Z12.jpeg",
    images: {
      front: "images/jeans_dama/baggy_rigido_dama/ref-Z12/ref-Z12.jpeg",
      both: "images/jeans_dama/baggy_rigido_dama/ref-Z12/ref-Z12-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14"],
    featured: true
  },
  {
    id: "prod-dama-z13",
    refCode: "Z13",
    title: "Jean Baggy Rígido - Ref. Z13",
    category: "Dama",
    silhouette: "baggy",
    silhouetteName: "Baggy Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Silueta baggy de máxima tendencia en denim rígido con acabados de alta costura. Horma cómoda que mantiene su forma en todo momento.",
    image: "images/jeans_dama/baggy_rigido_dama/ref-Z13/ref-Z13.jpeg",
    images: {
      front: "images/jeans_dama/baggy_rigido_dama/ref-Z13/ref-Z13.jpeg",
      both: "images/jeans_dama/baggy_rigido_dama/ref-Z13/ref-Z13-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14"],
    featured: true
  },

  // ------------------------------------------------------------------
  // COLECCIÓN DAMA (Zirox Jeans) - SILUETA BAGGY CARPINTERO RÍGIDO
  // ------------------------------------------------------------------
  {
    id: "prod-dama-z14",
    refCode: "Z14",
    title: "Jean Baggy Carpintero Rígido - Ref. Z14",
    category: "Dama",
    silhouette: "carpintero",
    silhouetteName: "Baggy Carpintero Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Baggy carpintero en denim rígido tono café con lavado desgastado. Correa lateral tipo carpintero y tiro alto relajado.",
    image: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z14/ref-Z14.jpeg",
    images: {
      front: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z14/ref-Z14.jpeg",
      both: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z14/ref-Z14-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12"],
    featured: true
  },
  {
    id: "prod-dama-z15",
    refCode: "Z15",
    title: "Jean Baggy Carpintero Rígido - Ref. Z15",
    category: "Dama",
    silhouette: "carpintero",
    silhouetteName: "Baggy Carpintero Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Baggy carpintero en denim rígido azul medio desgastado, con correa adicional en el bolsillo trasero y pierna amplia.",
    image: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z15/ref-Z15.jpeg",
    images: {
      front: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z15/ref-Z15.jpeg",
      both: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z15/ref-Z15-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12"],
    featured: true
  },
  {
    id: "prod-dama-z16",
    refCode: "Z16",
    title: "Jean Baggy Carpintero Rígido - Ref. Z16",
    category: "Dama",
    silhouette: "carpintero",
    silhouetteName: "Baggy Carpintero Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Baggy carpintero en denim rígido negro con lavado desgastado. Correa lateral, tiro alto y caída holgada.",
    image: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z16/ref-Z16.jpeg",
    images: {
      front: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z16/ref-Z16.jpeg",
      both: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z16/ref-Z16-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12"],
    featured: true
  },
  {
    id: "prod-dama-z17",
    refCode: "Z17",
    title: "Jean Baggy Carpintero Rígido - Ref. Z17",
    category: "Dama",
    silhouette: "carpintero",
    silhouetteName: "Baggy Carpintero Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Baggy carpintero en denim rígido azul claro intenso. Estilo urbano con correa lateral y pierna amplia.",
    image: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z17/ref-Z17.jpeg",
    images: {
      front: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z17/ref-Z17.jpeg",
      both: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z17/ref-Z17-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12"],
    featured: true
  },
  {
    id: "prod-dama-z18",
    refCode: "Z18",
    title: "Jean Baggy Carpintero Rígido - Ref. Z18",
    category: "Dama",
    silhouette: "carpintero",
    silhouetteName: "Baggy Carpintero Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Baggy carpintero en denim rígido azul medio con detalles desgastados. Correa lateral y tiro alto relajado.",
    image: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z18/ref-Z18.jpeg",
    images: {
      front: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z18/ref-Z18.jpeg",
      both: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z18/ref-Z18-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12"],
    featured: true
  },
  {
    id: "prod-dama-z19",
    refCode: "Z19",
    title: "Jean Baggy Carpintero Rígido - Ref. Z19",
    category: "Dama",
    silhouette: "carpintero",
    silhouetteName: "Baggy Carpintero Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Baggy carpintero en denim rígido gris claro con detalles desgastados. Correa lateral y caída amplia.",
    image: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z19/ref-Z19.jpeg",
    images: {
      front: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z19/ref-Z19.jpeg",
      both: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z19/ref-Z19-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12"],
    featured: true
  },
  {
    id: "prod-dama-z24",
    refCode: "Z24",
    title: "Jean Baggy Carpintero Rígido - Ref. Z24",
    category: "Dama",
    silhouette: "carpintero",
    silhouetteName: "Baggy Carpintero Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Baggy carpintero en denim rígido gris oscuro con lavado degradado. Correa lateral, tiro alto y pierna holgada.",
    image: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z24/ref-Z24.jpeg",
    images: {
      front: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z24/ref-Z24.jpeg",
      both: "images/jeans_dama/baggy_carpintero_rigido_dama/ref-Z24/ref-Z24-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12"],
    featured: true
  },

  // ------------------------------------------------------------------
  // COLECCIÓN DAMA (Zirox Jeans) - SILUETA OCHENTERO CLÁSICO
  // ------------------------------------------------------------------
  {
    id: "prod-dama-z20",
    refCode: "Z20",
    title: "Jean Ochentero Clásico - Ref. Z20",
    category: "Dama",
    silhouette: "ochentero",
    silhouetteName: "Ochentero Clásico",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Jean ochentero clásico azul oscuro de tiro alto y bota ajustada. Horma que realza tu figura con estilo atemporal.",
    image: "images/jeans_dama/ochentero_clasico_dama/ref-Z20/ref-Z20.jpeg",
    images: {
      front: "images/jeans_dama/ochentero_clasico_dama/ref-Z20/ref-Z20.jpeg",
      both: "images/jeans_dama/ochentero_clasico_dama/ref-Z20/ref-Z20-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14", "16"],
    featured: true
  },
  {
    id: "prod-dama-z21",
    refCode: "Z21",
    title: "Jean Ochentero Clásico - Ref. Z21",
    category: "Dama",
    silhouette: "ochentero",
    silhouetteName: "Ochentero Clásico",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Jean ochentero clásico azul medio de tiro alto y bota ajustada. Básico versátil para el día a día.",
    image: "images/jeans_dama/ochentero_clasico_dama/ref-Z21/ref-Z21.jpeg",
    images: {
      front: "images/jeans_dama/ochentero_clasico_dama/ref-Z21/ref-Z21.jpeg",
      both: "images/jeans_dama/ochentero_clasico_dama/ref-Z21/ref-Z21-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14", "16"],
    featured: true
  },

  // ------------------------------------------------------------------
  // COLECCIÓN DAMA (Zirox Jeans) - SILUETA CLÁSICO 4 BOTONES
  // ------------------------------------------------------------------
  {
    id: "prod-dama-z22",
    refCode: "Z22",
    title: "Jean Clásico 4 Botones - Ref. Z22",
    category: "Dama",
    silhouette: "botones",
    silhouetteName: "Clásico 4 Botones",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Jean clásico azul oscuro con pretina alta de 4 botones y ajuste ceñido que estiliza la cintura.",
    image: "images/jeans_dama/clasico_4_botones_dama/ref-Z22/ref-Z22.jpeg",
    images: {
      front: "images/jeans_dama/clasico_4_botones_dama/ref-Z22/ref-Z22.jpeg",
      both: "images/jeans_dama/clasico_4_botones_dama/ref-Z22/ref-Z22-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14", "16"],
    featured: true
  },
  {
    id: "prod-dama-z23",
    refCode: "Z23",
    title: "Jean Clásico 4 Botones - Ref. Z23",
    category: "Dama",
    silhouette: "botones",
    silhouetteName: "Clásico 4 Botones",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Jean clásico color medio claro en tela licrada, con pretina alta de 4 botones y ajuste ceñido.",
    image: "images/jeans_dama/clasico_4_botones_dama/ref-Z23/ref-Z23.jpeg",
    images: {
      front: "images/jeans_dama/clasico_4_botones_dama/ref-Z23/ref-Z23.jpeg",
      both: "images/jeans_dama/clasico_4_botones_dama/ref-Z23/ref-Z23-ambas-caras.jpeg"
    },
    sizes: ["6", "8", "10", "12", "14", "16"],
    featured: true
  },

  // ------------------------------------------------------------------
  // COLECCIÓN CABALLERO (Glass Jeans) - SILUETA SKINNY LICRADO
  // ------------------------------------------------------------------
  {
    id: "prod-caballero-g01",
    refCode: "G01",
    title: "Jean Skinny Licrado - Ref. G01",
    category: "Caballero",
    silhouette: "skinny",
    silhouetteName: "Skinny Licrado",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Skinny negro en denim licrado con ajuste moderno y gran elasticidad. El básico infaltable para cualquier ocasión.",
    image: "images/jeans_hombre/skinny_licrado_hombre/ref-G01/ref-G01.jpeg",
    images: {
      front: "images/jeans_hombre/skinny_licrado_hombre/ref-G01/ref-G01.jpeg",
      both: "images/jeans_hombre/skinny_licrado_hombre/ref-G01/ref-G01-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34", "36"],
    featured: true
  },
  {
    id: "prod-caballero-g02",
    refCode: "G02",
    title: "Jean Skinny Licrado - Ref. G02",
    category: "Caballero",
    silhouette: "skinny",
    silhouetteName: "Skinny Licrado",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Skinny negro intenso en denim licrado, horma ceñida y cómoda que acompaña cada movimiento.",
    image: "images/jeans_hombre/skinny_licrado_hombre/ref-G02/ref-G02.jpeg",
    images: {
      front: "images/jeans_hombre/skinny_licrado_hombre/ref-G02/ref-G02.jpeg",
      both: "images/jeans_hombre/skinny_licrado_hombre/ref-G02/ref-G02-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34", "36"],
    featured: true
  },
  {
    id: "prod-caballero-g03",
    refCode: "G03",
    title: "Jean Skinny Licrado - Ref. G03",
    category: "Caballero",
    silhouette: "skinny",
    silhouetteName: "Skinny Licrado",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Skinny azul medio en denim licrado con desgastes sutiles. Estilo casual y ajuste preciso.",
    image: "images/jeans_hombre/skinny_licrado_hombre/ref-G03/ref-G03.jpeg",
    images: {
      front: "images/jeans_hombre/skinny_licrado_hombre/ref-G03/ref-G03.jpeg",
      both: "images/jeans_hombre/skinny_licrado_hombre/ref-G03/ref-G03-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34", "36"],
    featured: true
  },
  {
    id: "prod-caballero-g04",
    refCode: "G04",
    title: "Jean Skinny Licrado - Ref. G04",
    category: "Caballero",
    silhouette: "skinny",
    silhouetteName: "Skinny Licrado",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Skinny gris carbón en denim licrado con lavado suave. Versátil para looks casuales y urbanos.",
    image: "images/jeans_hombre/skinny_licrado_hombre/ref-G04/ref-G04.jpeg",
    images: {
      front: "images/jeans_hombre/skinny_licrado_hombre/ref-G04/ref-G04.jpeg",
      both: "images/jeans_hombre/skinny_licrado_hombre/ref-G04/ref-G04-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34", "36"],
    featured: true
  },
  {
    id: "prod-caballero-g05",
    refCode: "G05",
    title: "Jean Skinny Licrado - Ref. G05",
    category: "Caballero",
    silhouette: "skinny",
    silhouetteName: "Skinny Licrado",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Skinny azul oscuro en denim licrado con lavado clásico. Ajuste cómodo y elegante.",
    image: "images/jeans_hombre/skinny_licrado_hombre/ref-G05/ref-G05.jpeg",
    images: {
      front: "images/jeans_hombre/skinny_licrado_hombre/ref-G05/ref-G05.jpeg",
      both: "images/jeans_hombre/skinny_licrado_hombre/ref-G05/ref-G05-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34", "36"],
    featured: true
  },
  {
    id: "prod-caballero-g06",
    refCode: "G06",
    title: "Jean Skinny Licrado - Ref. G06",
    category: "Caballero",
    silhouette: "skinny",
    silhouetteName: "Skinny Licrado",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Skinny gris medio en denim licrado con lavado degradado y horma moderna.",
    image: "images/jeans_hombre/skinny_licrado_hombre/ref-G06/ref-G06.jpeg",
    images: {
      front: "images/jeans_hombre/skinny_licrado_hombre/ref-G06/ref-G06.jpeg",
      both: "images/jeans_hombre/skinny_licrado_hombre/ref-G06/ref-G06-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34", "36"],
    featured: true
  },
  {
    id: "prod-caballero-g13",
    refCode: "G13",
    title: "Jean Skinny Licrado - Ref. G13",
    category: "Caballero",
    silhouette: "skinny",
    silhouetteName: "Skinny Licrado",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Skinny azul medio en denim licrado con rotos sutiles. Estilo juvenil con ajuste cómodo.",
    image: "images/jeans_hombre/skinny_licrado_hombre/ref-G13/ref-G13.jpeg",
    images: {
      front: "images/jeans_hombre/skinny_licrado_hombre/ref-G13/ref-G13.jpeg",
      both: "images/jeans_hombre/skinny_licrado_hombre/ref-G13/ref-G13-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34", "36"],
    featured: true
  },
  {
    id: "prod-caballero-g14",
    refCode: "G14",
    title: "Jean Skinny Licrado - Ref. G14",
    category: "Caballero",
    silhouette: "skinny",
    silhouetteName: "Skinny Licrado",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Skinny azul medio en denim licrado con rotos y desgastes. Look casual con actitud.",
    image: "images/jeans_hombre/skinny_licrado_hombre/ref-G14/ref-G14.jpeg",
    images: {
      front: "images/jeans_hombre/skinny_licrado_hombre/ref-G14/ref-G14.jpeg",
      both: "images/jeans_hombre/skinny_licrado_hombre/ref-G14/ref-G14-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34", "36"],
    featured: true
  },

  // ------------------------------------------------------------------
  // COLECCIÓN CABALLERO (Glass Jeans) - SILUETA BAGGY RÍGIDO
  // ------------------------------------------------------------------
  {
    id: "prod-caballero-g07",
    refCode: "G07",
    title: "Jean Baggy Rígido - Ref. G07",
    category: "Caballero",
    silhouette: "baggy",
    silhouetteName: "Baggy Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Baggy negro en denim 100% rígido de pierna amplia. Estilo streetwear con estructura firme.",
    image: "images/jeans_hombre/baggy_rigido_hombre/ref-G07/ref-G07.jpeg",
    images: {
      front: "images/jeans_hombre/baggy_rigido_hombre/ref-G07/ref-G07.jpeg",
      both: "images/jeans_hombre/baggy_rigido_hombre/ref-G07/ref-G07-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34"],
    featured: true
  },
  {
    id: "prod-caballero-g08",
    refCode: "G08",
    title: "Jean Baggy Rígido - Ref. G08",
    category: "Caballero",
    silhouette: "baggy",
    silhouetteName: "Baggy Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Baggy gris en denim rígido con lavado degradado y caída holgada de estilo urbano.",
    image: "images/jeans_hombre/baggy_rigido_hombre/ref-G08/ref-G08.jpeg",
    images: {
      front: "images/jeans_hombre/baggy_rigido_hombre/ref-G08/ref-G08.jpeg",
      both: "images/jeans_hombre/baggy_rigido_hombre/ref-G08/ref-G08-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34"],
    featured: true
  },
  {
    id: "prod-caballero-g09",
    refCode: "G09",
    title: "Jean Baggy Rígido - Ref. G09",
    category: "Caballero",
    silhouette: "baggy",
    silhouetteName: "Baggy Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Baggy azul medio en denim rígido con lavado clásico y pierna amplia.",
    image: "images/jeans_hombre/baggy_rigido_hombre/ref-G09/ref-G09.jpeg",
    images: {
      front: "images/jeans_hombre/baggy_rigido_hombre/ref-G09/ref-G09.jpeg",
      both: "images/jeans_hombre/baggy_rigido_hombre/ref-G09/ref-G09-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34"],
    featured: true
  },
  {
    id: "prod-caballero-g10",
    refCode: "G10",
    title: "Jean Baggy Rígido - Ref. G10",
    category: "Caballero",
    silhouette: "baggy",
    silhouetteName: "Baggy Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Baggy negro desgastado en denim rígido con costuras en contraste y caída holgada.",
    image: "images/jeans_hombre/baggy_rigido_hombre/ref-G10/ref-G10.jpeg",
    images: {
      front: "images/jeans_hombre/baggy_rigido_hombre/ref-G10/ref-G10.jpeg",
      both: "images/jeans_hombre/baggy_rigido_hombre/ref-G10/ref-G10-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34"],
    featured: true
  },
  {
    id: "prod-caballero-g11",
    refCode: "G11",
    title: "Jean Baggy Rígido - Ref. G11",
    category: "Caballero",
    silhouette: "baggy",
    silhouetteName: "Baggy Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Baggy azul claro en denim rígido con lavado vintage y silueta relajada.",
    image: "images/jeans_hombre/baggy_rigido_hombre/ref-G11/ref-G11.jpeg",
    images: {
      front: "images/jeans_hombre/baggy_rigido_hombre/ref-G11/ref-G11.jpeg",
      both: "images/jeans_hombre/baggy_rigido_hombre/ref-G11/ref-G11-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34"],
    featured: true
  },
  {
    id: "prod-caballero-g12",
    refCode: "G12",
    title: "Jean Baggy Rígido - Ref. G12",
    category: "Caballero",
    silhouette: "baggy",
    silhouetteName: "Baggy Rígido",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Baggy café desgastado en denim rígido de pierna amplia. Toque vintage con mucha actitud.",
    image: "images/jeans_hombre/baggy_rigido_hombre/ref-G12/ref-G12.jpeg",
    images: {
      front: "images/jeans_hombre/baggy_rigido_hombre/ref-G12/ref-G12.jpeg",
      both: "images/jeans_hombre/baggy_rigido_hombre/ref-G12/ref-G12-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34"],
    featured: true
  },

  // ------------------------------------------------------------------
  // COLECCIÓN CABALLERO (Glass Jeans) - SILUETA BERMUDA RÍGIDA
  // ------------------------------------------------------------------
  {
    id: "prod-caballero-g15",
    refCode: "G15",
    title: "Bermuda Rígida - Ref. G15",
    category: "Caballero",
    silhouette: "bermuda",
    silhouetteName: "Bermuda Rígida",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Bermuda en tela rígida azul medio con rotos. Fresca y cómoda para clima cálido.",
    image: "images/jeans_hombre/bermuda_rigida_hombre/ref-G15/ref-G15.jpeg",
    images: {
      front: "images/jeans_hombre/bermuda_rigida_hombre/ref-G15/ref-G15.jpeg",
      both: "images/jeans_hombre/bermuda_rigida_hombre/ref-G15/ref-G15-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34", "36"],
    featured: true
  },
  {
    id: "prod-caballero-g16",
    refCode: "G16",
    title: "Bermuda Rígida - Ref. G16",
    category: "Caballero",
    silhouette: "bermuda",
    silhouetteName: "Bermuda Rígida",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Bermuda en tela rígida azul claro con detalles deshilachados en las piernas.",
    image: "images/jeans_hombre/bermuda_rigida_hombre/ref-G16/ref-G16.jpeg",
    images: {
      front: "images/jeans_hombre/bermuda_rigida_hombre/ref-G16/ref-G16.jpeg",
      both: "images/jeans_hombre/bermuda_rigida_hombre/ref-G16/ref-G16-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34", "36"],
    featured: true
  },
  {
    id: "prod-caballero-g17",
    refCode: "G17",
    title: "Bermuda Rígida - Ref. G17",
    category: "Caballero",
    silhouette: "bermuda",
    silhouetteName: "Bermuda Rígida",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Bermuda en tela rígida gris con parches deshilachados en contraste. Estilo urbano.",
    image: "images/jeans_hombre/bermuda_rigida_hombre/ref-G17/ref-G17.jpeg",
    images: {
      front: "images/jeans_hombre/bermuda_rigida_hombre/ref-G17/ref-G17.jpeg",
      both: "images/jeans_hombre/bermuda_rigida_hombre/ref-G17/ref-G17-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34", "36"],
    featured: true
  },
  {
    id: "prod-caballero-g18",
    refCode: "G18",
    title: "Bermuda Rígida - Ref. G18",
    category: "Caballero",
    silhouette: "bermuda",
    silhouetteName: "Bermuda Rígida",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Bermuda en tela rígida gris con rotos y parches. Fresca, cómoda y con actitud.",
    image: "images/jeans_hombre/bermuda_rigida_hombre/ref-G18/ref-G18.jpeg",
    images: {
      front: "images/jeans_hombre/bermuda_rigida_hombre/ref-G18/ref-G18.jpeg",
      both: "images/jeans_hombre/bermuda_rigida_hombre/ref-G18/ref-G18-ambas-caras.jpeg"
    },
    sizes: ["28", "30", "32", "34", "36"],
    featured: true
  }
];
