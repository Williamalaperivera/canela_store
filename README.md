# Guía de Uso - Más Canela Store (Versión HTML, CSS y JavaScript)

Esta versión de la tienda está construida con tecnologías web estándar (**HTML5, CSS3 y JavaScript moderno**), sin depender de Node.js, librerías complejas ni procesos de compilación.

---

## 📁 Estructura del Proyecto

```text
canela_store/
├── index.html          # Estructura principal de la tienda
├── css/
│   └── styles.css      # Colores, tipografías, diseño responsive y estilos
├── js/
│   ├── products.js     # Datos de los productos (precios, fotos, tallas, teléfono WhatsApp)
│   └── app.js          # Carrito de compras, slider, filtros y checkout por WhatsApp
├── images/             # Carpeta para colocar tus propias imágenes locales
│   └── favicon.png     # Ícono de la pestaña del navegador
└── README.md           # Esta guía de uso
```

---

## 🚀 ¿Cómo abrir y ver la tienda?

1. **Opción Directa (Doble clic):**
   - En tu carpeta `canela_store`, haz doble clic sobre el archivo `index.html`. Se abrirá de inmediato en tu navegador web favorito (Chrome, Edge, etc.).

2. **Opción con Live Server (Recomendada en VS Code):**
   - Si usas la extensión "Live Server" en tu editor, haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.

---

## 🖼️ ¿Cómo cambiar o agregar nuevas imágenes y productos?

Todo el catálogo se controla desde el archivo **`js/products.js`**.

### 1. Para agregar una nueva imagen local:
1. Guarda tu foto (por ejemplo `jean-azul.jpg`) dentro de la carpeta **`images/`**.
2. En `js/products.js`, en el campo `image`, coloca:
   ```javascript
   image: "images/jean-azul.jpg"
   ```
*(También puedes usar enlaces directos de internet que comiencen con `https://...`)*

### 2. Para agregar un nuevo producto:
Abre `js/products.js` y añade un nuevo bloque al arreglo `PRODUCTS_DATA`:

```javascript
{
  id: "prod-005",
  title: "Jean Cargo Dama Tiro Alto",
  category: "Dama", // 'Dama' o 'Caballero'
  price: 65000,
  priceFormatted: "$65.000 COP",
  description: "Bolsillos utilitarios y silueta moderna para un look casual con actitud.",
  image: "images/mi-nuevo-jean.jpg",
  sizes: ["6", "8", "10", "12", "14"],
  featured: true
}
```

---

## 📲 ¿Cómo cambiar el número de WhatsApp o los datos de contacto?

En la parte superior de **`js/products.js`**, encontrarás la configuración general:

```javascript
const STORE_CONFIG = {
  name: "Más Canela Store",
  slogan: "Moda para cada versión de ti",
  whatsappNumber: "573026027989", // Tu número aquí (código de país 57 + número sin espacios ni '+')
  email: "Mascanelacol@gmail.com",
  currency: "COP"
};
```

---

## ✨ Funcionalidades incluidas:

- **Catálogo dinámico** con filtrado por categoría (*Todos*, *Dama*, *Caballero*) y ordenamiento por precio o destacados.
- **Selector de tallas** específico para cada producto.
- **Carrito de compras interactivo** que guarda los productos en el navegador del cliente (`localStorage`).
- **Vista rápida (Modal)** al hacer clic en cualquier producto.
- **Botón directo a WhatsApp:** Genera automáticamente el mensaje detallado con el pedido, cantidades, tallas seleccionadas y total en Pesos Colombianos.
- **Diseño 100% responsivo** para teléfonos móviles, tablets y computadores.
