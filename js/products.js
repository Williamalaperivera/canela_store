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
  // ----------------------------------------------------
  // COLECCIÓN DAMA (Zirox Jeans Luxury)
  // ----------------------------------------------------
  {
    id: "prod-001",
    title: "Jean 4 Botones - Azul Industrial",
    category: "Dama",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Jean tiro alto con pretina anatómica de 4 botones que estiliza tu figura y realza tu silueta. Color azul industrial en tela de excelente calidad y ajuste.",
    image: "images/4_botones.jpeg",
    sizes: ["6", "8", "10", "12", "14", "16"],
    featured: true
  },
  {
    id: "prod-003",
    title: "Jean Palazzo Licrado - Azul Clásico",
    category: "Dama",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Silueta palazzo de pierna ancha en denim licrado con caída espectacular y pretina alta. Combina elegancia y comodidad para tu día a día.",
    image: "images/palazo_licra_azul_mujer.jpeg",
    sizes: ["6", "8", "10", "12", "14", "16"],
    featured: true
  },
  {
    id: "prod-005",
    title: "Jean 4 Botones - Azul Medio Claro",
    category: "Dama",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Referencia pretina alta de 4 botones en tela licrada suave y flexible. Tono azul medio claro que estiliza y se adapta cómodamente a tu cuerpo.",
    image: "images/4_botones_licrado_claro.jpeg",
    sizes: ["6", "8", "10", "12", "14", "16"],
    featured: true
  },
  {
    id: "prod-006",
    title: "Jean Palazzo Licrado - Negro",
    category: "Dama",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Corte palazzo amplio en tono negro profundo. Pretina alta y tela licrada premium que brinda un look sofisticado, estilizado y muy versátil.",
    image: "images/palazo_licra_negro_mujer.jpeg",
    sizes: ["6", "8", "10", "12", "14", "16"],
    featured: true
  },
  {
    id: "prod-007",
    title: "Jean Baggy Dama - Azul Medio Desgastado",
    category: "Dama",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Silueta baggy relajada y moderna en tela denim rígida de alta durabilidad con efecto desgastado. Horma cómoda y juvenil.",
    image: "images/bagui_dama_desgastado_rigido_color_medio.jpeg",
    sizes: ["6", "8", "10", "12", "14"],
    featured: true
  },
  {
    id: "prod-008",
    title: "Jean Baggy Dama - Gris Froz",
    category: "Dama",
    price: 70000,
    priceFormatted: "$70.000 COP",
    description: "Corte baggy urbano en tono gris froz con desgastado sutil. Confeccionado en tela rígida de primera calidad para un estilo auténtico.",
    image: "images/bagui_dama_desgastado_rigido_gris_froz.jpeg",
    sizes: ["6", "8", "10", "12", "14"],
    featured: true
  },

  // ----------------------------------------------------
  // COLECCIÓN CABALLERO
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
  }
];
