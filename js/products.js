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
    "https://images.hostinger.com/341ae631-588a-4b77-8282-0c3e95f11582.png",
    "https://images.hostinger.com/93df33b4-e26f-4670-86a9-7d4b9b634ee9.png"
  ]
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

  // ----------------------------------------------------
  // COLECCIÓN CABALLERO (INTACTA)
  // ----------------------------------------------------
  {
    id: "prod-002",
    title: "Jean Straight Caballero",
    category: "Caballero",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Corte recto y denim azul resistente para acompañar tu ritmo diario. Estilo clásico sin complicaciones.",
    image: "images/jeans_hombre/bermuda_hombre_negro.jpeg",
    sizes: ["28", "30", "32", "34", "36", "38"],
    featured: true
  },
  {
    id: "prod-004",
    title: "Jean Cargo Caballero",
    category: "Caballero",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Un toque urbano con amplios bolsillos cargo y silueta relajada. Cómodo, funcional y con mucha personalidad.",
    image: "images/jeans_hombre/bermuda_hombre_azul.jpeg",
    sizes: ["28", "30", "32", "34", "36", "38"],
    featured: true
  },
  {
    id: "prod-009",
    title: "Jean Skinny Caballero - Azul",
    category: "Caballero",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Silueta skinny moderna con ajuste preciso y denim elástico para máxima libertad de movimiento y comodidad.",
    image: "images/jeans_hombre/skinny_hombre_azul.jpeg",
    sizes: ["28", "30", "32", "34", "36", "38"],
    featured: true
  },
  {
    id: "prod-010",
    title: "Jean Skinny Caballero - Negro",
    category: "Caballero",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Diseño skinny en tono negro clásico con confección flexible de alta durabilidad. El básico imprescindible de tu armario.",
    image: "images/jeans_hombre/skinny_hombre_negro.jpeg",
    sizes: ["28", "30", "32", "34", "36", "38"],
    featured: true
  }
];
