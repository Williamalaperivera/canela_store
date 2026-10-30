# Más Canela Store

Tienda online de jeans para dama y caballero, con catálogo por colecciones y siluetas, carrito de compras y pedido final por WhatsApp.

Está hecha solo con **HTML, CSS y JavaScript**: no necesita Node.js, librerías ni procesos de compilación. Se abre directamente en el navegador.

---

## Cómo abrir la tienda

- **Doble clic:** abre `index.html` desde la carpeta `canela_store`.
- **Live Server (recomendado en VS Code):** clic derecho sobre `index.html` → **Open with Live Server**. Así los cambios se ven al guardar.

> Si no ves un cambio de diseño, recarga con `Ctrl + F5`. El `index.html` ya carga `styles.css` con un parámetro de versión para evitar la caché, pero el navegador puede guardar imágenes o el JavaScript.

---

## Estructura del proyecto

```text
canela_store/
├── index.html              # Estructura de la página (secciones, banners, modales)
├── css/
│   └── styles.css          # Todo el diseño: colores, tipografías, animaciones y versión móvil
├── js/
│   ├── products.js         # Configuración de la tienda, siluetas y catálogo de productos
│   └── app.js              # Catálogo, filtros, carrito, modal, guía de tallas y WhatsApp
├── images/
│   ├── banner/             # banner-01.jpeg … banner-06.jpeg (carrusel principal)
│   ├── categorias/         # categoria-dama.jpeg, categoria-caballero.jpeg (círculos)
│   ├── esencia/            # Fotos de la sección "Nuestra esencia"
│   ├── guia_tallas/        # Guías de tallas por silueta
│   ├── jeans_dama/         # Fotos de productos de dama, por silueta y referencia
│   ├── jeans_hombre/       # Fotos de productos de caballero, por silueta y referencia
│   └── favicon.png         # Ícono de la pestaña
└── README.md
```

---

## Recorrido de la página

| Sección | Qué hace |
|---|---|
| **Banner principal** | Carrusel de 6 banners de borde a borde, con flechas, pausa e indicador `01 / 06`. Se ajusta a la primera pantalla en computador y celular. |
| **Catálogo Exclusivo Premium** (`#catalogo`) | Título, subtítulo y los círculos de **Dama** y **Caballero**. Al entrar no se muestran productos: el cliente elige primero una colección. |
| **Franja de valores** (`#filosofia`) | Bloque café con parche de cuero y los valores de la marca. |
| **Nuestra esencia** (`#nosotros`) | Galería de tres arcos con misión, visión y enlace a WhatsApp. |
| **De Bogotá a tu clóset** (`#envios`) | Ruta del pedido, envíos y pagos. |
| **Preguntas frecuentes** (`#faq`) | Temas (por mayor, pagos, tallas, envíos) sincronizados con su imagen; en celular inician cerradas. Incluye el botón para volver al catálogo. |
| **Footer** | Marca, eslogan, contacto y ubicación. |

Las secciones aparecen con una animación suave al llegar a ellas con el scroll.

---

## Cómo funciona el catálogo

1. **Elegir colección.** El cliente toca el círculo de **Dama** o **Caballero**.
   - La foto del círculo se activa y un pespunte dorado se dibuja a su alrededor; el otro círculo se atenúa.
   - Debajo se despliegan las **píldoras de silueta** (por ejemplo *Baggy Rígido*, *Palazzo Licrado*, *Skinny Licrado*), con el número de referencias de cada una. La primera siempre es **Ver todas las referencias**.
   - **Cuando termina la animación del pespunte**, la página baja sola, con desplazamiento suave, hasta las siluetas y los productos. Si el dispositivo tiene activado "reducir movimiento", el salto es directo.
2. **Filtrar por silueta.** Cada píldora muestra un banner de la silueta y sus productos. En caballero, el banner incluye el botón **Guía de tallas**.
3. **Tarjetas de producto.** Cada tarjeta tiene:
   - Botones **Frontal / Ambos lados** debajo de la foto para cambiar de vista.
   - Zoom al pasar el cursor (computador).
   - Selector de talla, cantidad y botón **Añadir**.
   - Al tocar la foto o el nombre se abre la **vista de detalle**.

Cada colección recuerda la última silueta elegida.

### Vista de detalle (modal)

Muestra cada dato una sola vez, en este orden: colección, nombre de la prenda, precio con la etiqueta de referencia, nota de precio por mayor, descripción, talla (con enlace a la guía si existe), cantidad + **Añadir al carrito** y garantías (envíos, contraentrega en Bogotá, asesoría).

- **Computador:** foto a la izquierda con zoom de lupa; ficha a la derecha.
- **Celular:** hoja a pantalla completa; la foto va de borde a borde (cerca del 70 % de la pantalla), los botones Frontal / Ambos lados flotan sobre la foto, la ficha queda debajo y el botón de compra se mantiene fijo abajo. Tocar la foto activa o quita el zoom.

### Guía de tallas

Se abre en un visor propio desde el banner de la silueta o desde el modal del producto. Se cierra con la **×**, tocando fuera o con `Esc`. Hoy existen guías para las tres siluetas de caballero.

---

## Precios y carrito

| Concepto | Valor |
|---|---|
| Precio al detal | **$70.000 COP** por unidad |
| Precio por mayor | **$60.000 COP** por unidad, desde **6 unidades** |
| Combinación | Las 6 unidades pueden mezclar dama y caballero |

- El carrito calcula el precio automáticamente: al llegar a 6 prendas en total, **todas** pasan a $60.000 y se muestra el ahorro. Mientras tanto, una barra indica cuántas prendas faltan.
- Cada línea del carrito muestra foto, talla y cantidad; tocar la foto abre de nuevo el producto.
- El carrito se guarda en el navegador del cliente (`localStorage`, clave `canela_store_cart`), así que no se pierde al recargar.
- Mientras el carrito, el modal o la guía de tallas están abiertos, la página de fondo no se desplaza; solo se desplaza el panel.
- **Finalizar por WhatsApp** arma el mensaje con cada referencia, talla, cantidad, precio aplicado y total, y abre el chat de la tienda.

Los valores se configuran en `js/products.js`:

```javascript
const STORE_CONFIG = {
  name: "Más Canela Store",
  slogan: "Moda para cada versión de ti",
  whatsappNumber: "573026027989", // 57 + número, sin '+' ni espacios
  email: "Mascanelacol@gmail.com",
  currency: "COP",
  retailPrice: 70000,      // precio al detal
  wholesalePrice: 60000,   // precio por mayor
  wholesaleMinUnits: 6,    // unidades para activar el precio por mayor
  ...
};
```

> La lógica del carrito y de WhatsApp está en `js/app.js` (`getCartPricing`, `addToCart`, `updateCartUI`, `checkoutWhatsApp`). Para cambiar precios o el número basta con editar `STORE_CONFIG`; no hace falta tocar esas funciones.

---

## Imágenes: nombres y carpetas

Cada referencia tiene su propia carpeta con dos fotos:

```text
images/jeans_dama/baggy_rigido_dama/ref-Z08/ref-Z08.jpeg              ← foto frontal
images/jeans_dama/baggy_rigido_dama/ref-Z08/ref-Z08-ambas-caras.jpeg  ← vista "ambos lados"
```

- **Dama** usa la letra **Z** (Z01 – Z24) y **Caballero** la letra **G** (G01 – G18).
- Carpetas de silueta actuales:
  - Dama: `palazo_licrado_dama` (en esta, las carpetas se llaman `referencia-ZNN`), `baggy_rigido_dama`, `baggy_carpintero_rigido_dama`, `ochentero_clasico_dama`, `clasico_4_botones_dama`.
  - Caballero: `skinny_licrado_hombre`, `baggy_rigido_hombre`, `bermuda_rigida_hombre`.
- Formato recomendado: `.jpeg` vertical (proporción 2:3), para que las fotos se vean completas en tarjetas y modal.

---

## Agregar un producto

1. Crea la carpeta de la referencia y guarda las dos fotos con el formato de arriba.
2. En `js/products.js`, añade un bloque a `PRODUCTS_DATA` (puedes copiar uno existente):

```javascript
{
  id: "prod-dama-z25",
  refCode: "Z25",
  title: "Jean Baggy Rígido - Ref. Z25",
  category: "Dama",            // "Dama" o "Caballero"
  silhouette: "baggy",         // debe coincidir con un "key" de las siluetas
  silhouetteName: "Baggy Rígido",
  price: 70000,
  priceFormatted: "$70.000 COP",
  description: "Descripción corta de la prenda.",
  image: "images/jeans_dama/baggy_rigido_dama/ref-Z25/ref-Z25.jpeg",
  images: {
    front: "images/jeans_dama/baggy_rigido_dama/ref-Z25/ref-Z25.jpeg",
    both: "images/jeans_dama/baggy_rigido_dama/ref-Z25/ref-Z25-ambas-caras.jpeg"
  },
  sizes: ["6", "8", "10", "12", "14", "16"],   // caballero: ["28", "30", "32", "34", "36"]
  featured: true
}
```

Los contadores de los círculos y de las píldoras se actualizan solos. En el modal, el nombre se muestra sin el “- Ref. Z25” del título y la referencia aparece en su etiqueta, junto al precio.

## Agregar o editar una silueta

Las siluetas están en `DAMA_SILHOUETTES` y `CABALLERO_SILHOUETTES` (en `js/products.js`):

```javascript
{
  key: "baggy",                 // identificador que usan los productos
  name: "Baggy Rígido",         // nombre del banner
  pill: "Baggy Carpintero",     // (opcional) texto más corto para la píldora
  short: "Baggy",
  tag: "DESTACADOS TENDENCIA",
  desc: "Texto del banner de la silueta.",
  sizeGuide: "images/guia_tallas/guia-tallas-baggy-rigido-hombre.jpeg" // (opcional)
}
```

El orden del arreglo es el orden de las píldoras. Si una silueta tiene `sizeGuide`, aparece el botón **Guía de tallas** en su banner y en el modal de sus productos. Para agregar guías de dama, guarda la imagen en `images/guia_tallas/` y añade `sizeGuide` a la silueta correspondiente.

---

## Cambiar banners, círculos y fotos de secciones

- **Banners del carrusel:** reemplaza `images/banner/banner-01.jpeg` … `banner-06.jpeg` manteniendo los nombres. Para agregar o quitar banners, edita los bloques `<div class="hero-slide">` en `index.html` (cada uno define también los colores de borde `--edge-l` y `--edge-r`).
- **Círculos de colección:** `images/categorias/categoria-dama.jpeg` y `categoria-caballero.jpeg` (foto cuadrada, de la cabeza a las rodillas).
- **Nuestra esencia:** `images/esencia/esencia-dama.jpeg`, `esencia-pareja.jpeg`, `esencia-caballero.jpeg`.

---

## Identidad visual

| Elemento | Valor |
|---|---|
| Crema (fondo) | `#FDFBF7` |
| Chocolate (texto y botones) | `#3B2219` |
| Caramelo (acentos y pespunte) | `#C68B59` |
| Dorado (detalles) | `#AA7C11` |
| Fondo suave | `#F3EEE6` |
| Títulos | *Libre Caslon Display* |
| Texto | *Manrope* |
| Letra caligráfica | *Pinyon Script* |

El motivo de la marca es el **pespunte**: una costura punteada en caramelo o dorado que aparece en los círculos, el parche de cuero y varios separadores.

Todo el diseño es responsive (computador, tablet y celular), respeta la opción de "reducir movimiento" del sistema y no genera scroll horizontal.

---

## Notas de mantenimiento

- Las fotos sueltas en la raíz de `images/` (`hero1.jpg`, `4_botones.jpeg`, `palazo_licra_*`, `bagui_*`) y las de la raíz de `images/jeans_hombre/` ya no se usan; se pueden borrar cuando quieras.
- `heroImages` en `STORE_CONFIG` es solo una referencia; los banners que se muestran son los de `index.html`.
- Si editas `index.html` o `styles.css` con el archivo abierto desde antes, recárgalo en el editor antes de guardar para no sobrescribir cambios recientes.
