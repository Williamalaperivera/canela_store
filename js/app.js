/**
 * ====================================================================
 * MÁS CANELA STORE - LÓGICA DE APLICACIÓN (VANILLA JAVASCRIPT)
 * ====================================================================
 */

// Estado global de la aplicación
const AppState = {
  cart: [],
  currentCategory: 'Dama',   // Carga inicial enfocada en Dama
  currentSilhouette: 'baggy', // Silueta destacada inicial: Baggy Rígido (optimiza peticiones y rendimiento)
  activeCardViews: {},       // { [productId]: 'front' | 'both' }
  modalActiveView: 'front',
  currentSort: 'featured',
  currentSlide: 0,
  sliderTimer: null,
  isSliderPaused: false
};

// Elemento pendiente de enfocar tras cerrar alerta
let pendingFocusElement = null;

// Formateador de moneda en Pesos Colombianos
function formatPrice(amount) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount);
}

/* ====================================================================
   LÓGICA DE PRECIOS Y MAYOREO (A PARTIR DE 6 UNIDADES)
   ==================================================================== */
function getCartPricing() {
  const totalQuantity = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const minWholesale = (typeof STORE_CONFIG !== 'undefined' && STORE_CONFIG.wholesaleMinUnits) || 6;
  const isWholesale = totalQuantity >= minWholesale;
  const retailPrice = (typeof STORE_CONFIG !== 'undefined' && STORE_CONFIG.retailPrice) || 70000;
  const wholesalePrice = (typeof STORE_CONFIG !== 'undefined' && STORE_CONFIG.wholesalePrice) || 60000;
  
  const unitPrice = isWholesale ? wholesalePrice : retailPrice;
  const subtotal = totalQuantity * unitPrice;
  const regularTotal = totalQuantity * retailPrice;
  const savings = isWholesale ? (regularTotal - subtotal) : 0;
  const itemsMissing = Math.max(0, minWholesale - totalQuantity);

  return {
    totalQuantity,
    isWholesale,
    unitPrice,
    retailPrice,
    wholesalePrice,
    subtotal,
    regularTotal,
    savings,
    itemsMissing,
    minWholesale
  };
}

// Cargar carrito desde localStorage y sincronizar precios
function loadCart() {
  try {
    const saved = localStorage.getItem('canela_store_cart');
    if (saved) {
      AppState.cart = JSON.parse(saved);
      // Sincronizar con catálogo actual
      AppState.cart.forEach(item => {
        const prod = PRODUCTS_DATA.find(p => p.id === item.id);
        if (prod) {
          item.price = prod.price;
          item.priceFormatted = prod.priceFormatted;
          item.title = prod.title;
          item.image = prod.image;
        }
      });
    }
  } catch (e) {
    console.error('Error cargando carrito:', e);
    AppState.cart = [];
  }
  updateCartUI();
}

// Guardar carrito en localStorage
function saveCart() {
  try {
    localStorage.setItem('canela_store_cart', JSON.stringify(AppState.cart));
  } catch (e) {
    console.error('Error guardando carrito:', e);
  }
  updateCartUI();
}

// Notificación flotante (Toast)
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* ====================================================================
   ALERTA CENTRAL PERSONALIZADA
   ==================================================================== */
function showCustomAlert({ title = 'Elige tu talla ideal', message = 'Por favor selecciona tu talla antes de continuar.', focusEl = null }) {
  const overlay = document.getElementById('customAlertOverlay');
  const titleEl = document.getElementById('customAlertTitle');
  const messageEl = document.getElementById('customAlertMessage');

  if (titleEl) titleEl.textContent = title;
  if (messageEl) messageEl.textContent = message;
  pendingFocusElement = focusEl;

  if (overlay) {
    overlay.classList.add('open');
  }
}

function closeCustomAlert() {
  const overlay = document.getElementById('customAlertOverlay');
  if (overlay) {
    overlay.classList.remove('open');
  }
  if (pendingFocusElement) {
    pendingFocusElement.focus();
    pendingFocusElement.classList.add('highlight-field');
    setTimeout(() => {
      pendingFocusElement?.classList.remove('highlight-field');
      pendingFocusElement = null;
    }, 1600);
  }
}

/* ====================================================================
   HERO SLIDER
   ==================================================================== */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const countEl = document.getElementById('slideIndicator');
  const pauseBtn = document.getElementById('pauseSlideBtn');

  if (!slides.length) return;

  function goToSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    AppState.currentSlide = index;
    if (countEl) {
      countEl.innerHTML = `0${index + 1} <small>/ 0${slides.length}</small>`;
    }
  }

  function nextSlide() {
    goToSlide((AppState.currentSlide + 1) % slides.length);
  }

  function prevSlide() {
    goToSlide((AppState.currentSlide - 1 + slides.length) % slides.length);
  }

  function startAutoplay() {
    stopAutoplay();
    AppState.sliderTimer = setInterval(() => {
      if (!AppState.isSliderPaused) {
        nextSlide();
      }
    }, 6500);
  }

  function stopAutoplay() {
    if (AppState.sliderTimer) {
      clearInterval(AppState.sliderTimer);
      AppState.sliderTimer = null;
    }
  }

  document.getElementById('nextSlideBtn')?.addEventListener('click', nextSlide);
  document.getElementById('prevSlideBtn')?.addEventListener('click', prevSlide);

  pauseBtn?.addEventListener('click', () => {
    AppState.isSliderPaused = !AppState.isSliderPaused;
    pauseBtn.textContent = AppState.isSliderPaused ? '▶' : '⏸';
  });

  const heroStage = document.querySelector('.hero-stage');
  heroStage?.addEventListener('mouseenter', () => { AppState.isSliderPaused = true; });
  heroStage?.addEventListener('mouseleave', () => { AppState.isSliderPaused = false; });

  startAutoplay();
}

/* ====================================================================
   SELECTOR VISUAL DE VISTAS (FRONTAL / AMBOS LADOS) - DAMA
   ==================================================================== */
function switchProductCardView(event, productId, view) {
  if (event) {
    if (typeof event.stopPropagation === 'function') event.stopPropagation();
    if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
    if (typeof event.preventDefault === 'function') event.preventDefault();
  }

  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product || !product.images) return;

  AppState.activeCardViews[productId] = view;

  const card = document.getElementById(`card-${productId}`);
  if (!card) return;

  const img = card.querySelector('.product-image-container img');
  const buttons = card.querySelectorAll('.card-view-switcher .view-btn');

  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-view') === view);
  });

  if (img) {
    img.style.opacity = '0.35';
    img.style.transform = 'scale(0.98)';
    setTimeout(() => {
      img.loading = 'lazy';
      img.decoding = 'async';
      img.src = view === 'both' ? product.images.both : product.images.front;
      const onLoaded = () => {
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
      };
      if (img.complete) {
        onLoaded();
      } else {
        img.onload = onLoaded;
      }
    }, 110);
  }
}

function switchProductModalView(productId, view) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product || !product.images) return;

  AppState.modalActiveView = view;

  const modalImg = document.getElementById('modalProductImg');
  const buttons = document.querySelectorAll('.modal-view-switcher .modal-view-btn');

  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-view') === view);
  });

  if (modalImg) {
    modalImg.style.opacity = '0.35';
    modalImg.style.transform = 'scale(0.98)';
    setTimeout(() => {
      modalImg.src = view === 'both' ? product.images.both : product.images.front;
      const onLoaded = () => {
        modalImg.style.opacity = '1';
        modalImg.style.transform = 'scale(1)';
      };
      if (modalImg.complete) {
        onLoaded();
      } else {
        modalImg.onload = onLoaded;
      }
    }, 110);
  }
}

// Cambiar filtro de silueta para Dama
function filterBySilhouette(silhouette) {
  AppState.currentCategory = 'Dama';
  AppState.currentSilhouette = silhouette;

  // Sincronizar botones de categoría principal
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === 'Dama');
  });

  // Sincronizar pills de silueta
  document.querySelectorAll('.silhouette-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-silhouette') === silhouette);
  });

  renderProducts();
}

// Generador de HTML para tarjeta de producto con Lazy Loading nativo
function createProductCardHtml(product) {
  const isDama = product.category === 'Dama';
  const hasMultipleViews = Boolean(product.images && product.images.both);
  const activeView = AppState.activeCardViews[product.id] || 'front';
  const displayImage = (hasMultipleViews && activeView === 'both') ? product.images.both : product.image;

  const sizeOptionsHtml = product.sizes.map(size => 
    `<option value="${size}">${size}</option>`
  ).join('');

  // Selector visual dinámico para Dama (frontal vs ambos lados)
  const viewSwitcherHtml = hasMultipleViews ? `
    <div class="card-view-switcher" onclick="event.stopPropagation(); event.stopImmediatePropagation();" role="group" aria-label="Selector de vista">
      <button type="button" class="view-btn ${activeView === 'front' ? 'active' : ''}" 
              data-view="front"
              onclick="event.stopPropagation(); event.stopImmediatePropagation(); switchProductCardView(event, '${product.id}', 'front')" 
              title="Ver foto frontal">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="7" r="4"></circle><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path></svg>
        <span>Frontal</span>
      </button>
      <button type="button" class="view-btn ${activeView === 'both' ? 'active' : ''}" 
              data-view="both"
              onclick="event.stopPropagation(); event.stopImmediatePropagation(); switchProductCardView(event, '${product.id}', 'both')" 
              title="Ver foto de ambos lados">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
        <span>Ambos lados</span>
      </button>
    </div>
  ` : '';

  const tagLabel = isDama && product.silhouetteName ? product.silhouetteName.toUpperCase() : 'DENIM EDIT';
  const eyebrowLabel = isDama 
    ? `PARA ELLA · ${product.refCode ? 'REF. ' + product.refCode : 'ZIROX LUXURY'}` 
    : 'PARA ÉL';

  return `
    <article class="product-card ${isDama ? 'card-dama' : ''}" id="card-${product.id}">
      <div class="product-image-container" onclick="openProductModal('${product.id}')">
        <img src="${displayImage}" 
             alt="${product.title}" 
             loading="lazy" 
             decoding="async">
        <span class="tag-denim">${tagLabel}</span>
        ${viewSwitcherHtml}
        <button class="quick-view-btn" title="Vista Rápida" aria-label="Ver detalles de ${product.title}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        </button>
      </div>
      <div class="product-info">
        <p class="eyebrow">${eyebrowLabel}</p>
        <div class="product-title">
          <h3 onclick="openProductModal('${product.id}')">${product.title}</h3>
          <div style="text-align: right;">
            <strong>${product.priceFormatted}</strong>
            <span style="display: block; font-size: 9.5px; color: var(--gold); font-weight: 700; letter-spacing: 0.3px;">6+ a $60.000 c/u</span>
          </div>
        </div>
        <div class="size-select-group">
          <label for="size-${product.id}">Talla</label>
          <select id="size-${product.id}">
            <option value="">Selecciona tu talla</option>
            ${sizeOptionsHtml}
          </select>
        </div>
        <div class="buy-row">
          <input type="number" id="qty-${product.id}" class="quantity-input" min="1" max="99" value="1" aria-label="Cantidad">
          <button class="add-to-cart-btn" onclick="handleAddFromCard('${product.id}')">
            <span>Añadir</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

/* ====================================================================
   RENDERIZADO DE CATÁLOGO & VITRINA ESTRUCTURADA
   ==================================================================== */
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const silhouetteToolbar = document.getElementById('damaSilhouetteToolbar');

  // Control de visualización del selector de siluetas de Dama
  const isDamaActive = AppState.currentCategory === 'Dama';
  if (silhouetteToolbar) {
    if (isDamaActive) {
      silhouetteToolbar.classList.add('visible');
    } else {
      silhouetteToolbar.classList.remove('visible');
    }
  }

  // Filtrado de categoría principal
  let filtered = PRODUCTS_DATA.filter(p => {
    if (AppState.currentCategory === 'Todos') return true;
    return p.category.toLowerCase() === AppState.currentCategory.toLowerCase();
  });

  // Filtrado por silueta si estamos en Dama y hay sub-filtro seleccionado
  if (isDamaActive && AppState.currentSilhouette !== 'all') {
    filtered = filtered.filter(p => p.silhouette === AppState.currentSilhouette);
  }

  // Ordenamiento
  if (AppState.currentSort === 'low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (AppState.currentSort === 'high') {
    filtered.sort((a, b) => b.price - a.price);
  } else {
    filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; padding: 40px;">No hay prendas disponibles en esta selección.</p>`;
    return;
  }

  // VISTA ESTRUCTURADA: TODAS LAS SILUETAS DE DAMA (Agrupadas para evitar scroll caótico)
  if (isDamaActive && AppState.currentSilhouette === 'all') {
    const baggyProducts = filtered.filter(p => p.silhouette === 'baggy');
    const palazzoProducts = filtered.filter(p => p.silhouette === 'palazzo');

    let html = `
      <!-- Encabezado Silueta Baggy Rígido (Destacados de entrada) -->
      <div class="silhouette-section-header">
        <div class="silhouette-section-info">
          <span class="silhouette-section-tag">DESTACADOS TENDENCIA</span>
          <h3>Baggy Rígido <em>(6 colores)</em></h3>
          <p>Denim 100% rígido con estructura clásica, horma noventera y tiro alto relajado.</p>
        </div>
        <button type="button" class="silhouette-filter-link" onclick="filterBySilhouette('baggy')">
          Ver solo Baggy (${baggyProducts.length}) →
        </button>
      </div>
      <div class="silhouette-subgrid">
        ${baggyProducts.map(p => createProductCardHtml(p)).join('')}
      </div>

      <!-- Encabezado Silueta Palazzo Licrado -->
      <div class="silhouette-section-header" style="margin-top: 45px;">
        <div class="silhouette-section-info">
          <span class="silhouette-section-tag">SILUETA EXCLUSIVA</span>
          <h3>Palazzo Licrado <em>(7 colores)</em></h3>
          <p>Tiro alto anatómico, pierna ancha y denim licrado de máxima comodidad.</p>
        </div>
        <button type="button" class="silhouette-filter-link" onclick="filterBySilhouette('palazzo')">
          Ver solo Palazzo (${palazzoProducts.length}) →
        </button>
      </div>
      <div class="silhouette-subgrid">
        ${palazzoProducts.map(p => createProductCardHtml(p)).join('')}
      </div>
    `;

    grid.innerHTML = html;
    return;
  }

  // VISTA POR SILUETA ESPECÍFICA (Carga inicial optimizada y enfocada)
  if (isDamaActive && AppState.currentSilhouette !== 'all') {
    const isBaggy = AppState.currentSilhouette === 'baggy';
    const currentName = isBaggy ? 'Baggy Rígido' : 'Palazzo Licrado';
    const tagText = isBaggy ? 'DESTACADOS · SILUETA TENDENCIA' : 'SILUETA EXCLUSIVA';
    const subtitle = isBaggy
      ? 'Denim 100% rígido estructurado con actitud noventera y tiro alto relajado.'
      : 'Silueta de pierna amplia en denim licrado con pretina alta y caída fluida.';

    // Banner de exploración progresiva hacia la otra silueta o todo el catálogo
    const nextSilhouette = isBaggy ? 'palazzo' : 'baggy';
    const nextSilhouetteName = isBaggy ? 'Palazzo Licrado (7 colores)' : 'Baggy Rígido (6 colores)';
    const nextSilhouetteDesc = isBaggy
      ? 'Descubre también nuestros 7 colores de Palazzo Licrado con tela elástica y pretina anatómica.'
      : 'Explora nuestros 6 colores de Baggy Rígido en denim estructurado 100% auténtico.';

    let html = `
      <div class="silhouette-active-banner">
        <div>
          <span class="silhouette-section-tag">${tagText}</span>
          <h3>Colección ${currentName} <em>(${filtered.length} colores)</em></h3>
          <p>${subtitle}</p>
        </div>
        <button type="button" class="silhouette-reset-btn" onclick="filterBySilhouette('all')">
          Ver todas las siluetas (13)
        </button>
      </div>
      <div class="silhouette-subgrid">
        ${filtered.map(p => createProductCardHtml(p)).join('')}
      </div>

      <!-- Tarjeta de Exploración Progresiva (Carga diferida bajo demanda) -->
      <div class="progressive-catalog-loader">
        <div class="progressive-loader-info">
          <span class="progressive-tag">EXPLORA MÁS DENIM</span>
          <h4>¿Deseas ver más estilos de dama?</h4>
          <p>${nextSilhouetteDesc}</p>
        </div>
        <div class="progressive-loader-btns">
          <button type="button" class="btn-progressive-cta" onclick="filterBySilhouette('${nextSilhouette}')">
            Ver ${nextSilhouetteName} →
          </button>
          <button type="button" class="btn-progressive-secondary" onclick="filterBySilhouette('all')">
            Ver todas las siluetas (13)
          </button>
        </div>
      </div>
    `;

    grid.innerHTML = html;
    return;
  }

  // Vista estándar para "Todos" o "Caballero" (con Lazy Loading nativo)
  grid.innerHTML = filtered.map(p => createProductCardHtml(p)).join('');
}

// Agregar al carrito desde la tarjeta
function handleAddFromCard(productId) {
  const sizeSelect = document.getElementById(`size-${productId}`);
  const qtyInput = document.getElementById(`qty-${productId}`);

  const size = sizeSelect ? sizeSelect.value : '';
  const quantity = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;

  if (!size) {
    showCustomAlert({
      title: 'Elige tu talla ideal',
      message: 'Para asegurar tu horma perfecta, por favor selecciona una talla antes de añadir este jean al carrito.',
      focusEl: sizeSelect
    });
    return;
  }

  addToCart(productId, size, quantity);
}

/* ====================================================================
   GESTIÓN DEL CARRITO
   ==================================================================== */
function addToCart(productId, size, quantity) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = AppState.cart.findIndex(
    item => item.id === productId && item.size === size
  );

  if (existingIndex > -1) {
    AppState.cart[existingIndex].quantity += quantity;
  } else {
    AppState.cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      priceFormatted: product.priceFormatted,
      image: product.image,
      size: size,
      quantity: quantity
    });
  }

  saveCart();
  showToast(`¡${product.title} (Talla: ${size}) añadido al carrito!`);
}

function updateCartQuantity(index, newQty) {
  if (newQty <= 0) {
    removeFromCart(index);
    return;
  }
  AppState.cart[index].quantity = Math.min(99, Math.max(1, newQty));
  saveCart();
}

function removeFromCart(index) {
  AppState.cart.splice(index, 1);
  saveCart();
}

function updateCartUI() {
  const counter = document.getElementById('cartCounter');
  const itemsContainer = document.getElementById('cartItems');
  const subtotalEl = document.getElementById('cartSubtotal');

  const pricing = getCartPricing();

  if (counter) {
    counter.textContent = pricing.totalQuantity;
  }

  if (subtotalEl) {
    subtotalEl.textContent = formatPrice(pricing.subtotal);
  }

  // Fila de ahorro por mayoreo en el footer
  let savingsEl = document.getElementById('cartSavingsRow');
  if (!savingsEl && subtotalEl && subtotalEl.parentElement) {
    savingsEl = document.createElement('div');
    savingsEl.id = 'cartSavingsRow';
    savingsEl.className = 'cart-savings-row';
    subtotalEl.parentElement.insertAdjacentElement('afterend', savingsEl);
  }

  if (savingsEl) {
    if (pricing.isWholesale) {
      savingsEl.style.display = 'flex';
      savingsEl.innerHTML = `<span>Ahorro por mayor aplicado:</span><strong style="color: #27ae60;">-${formatPrice(pricing.savings)}</strong>`;
    } else {
      savingsEl.style.display = 'none';
    }
  }

  if (!itemsContainer) return;

  if (AppState.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-cart-message">
        <p style="font-size: 15px; margin-bottom: 15px; opacity: 0.8;">Tu carrito está vacío.</p>
        <button class="button" onclick="closeCart()" style="padding: 12px 20px; font-size: 12px;">Explorar colección</button>
      </div>
    `;
    return;
  }

  // Banner dinámico de mayoreo
  let wholesaleBannerHtml = '';
  if (pricing.isWholesale) {
    wholesaleBannerHtml = `
      <div class="cart-wholesale-banner unlocked">
        <div class="badge-icon">🎉</div>
        <div>
          <strong>¡Precio al por mayor activado!</strong>
          <p>Llevas ${pricing.totalQuantity} prendas: cada una a solo <strong>$60.000 COP</strong> (Ahorras ${formatPrice(pricing.savings)}).</p>
        </div>
      </div>
    `;
  } else {
    const pct = Math.min(100, Math.round((pricing.totalQuantity / pricing.minWholesale) * 100));
    wholesaleBannerHtml = `
      <div class="cart-wholesale-banner locked">
        <div class="badge-icon">🏷️</div>
        <div style="flex: 1;">
          <strong>Precio por mayor: $60.000 c/u</strong>
          <p>Agrega <strong>${pricing.itemsMissing} prenda${pricing.itemsMissing > 1 ? 's' : ''} más</strong> (hombre o mujer) para pagar todo a precio mayorista.</p>
          <div class="wholesale-bar"><div class="wholesale-fill" style="width: ${pct}%;"></div></div>
        </div>
      </div>
    `;
  }

  const itemsHtml = AppState.cart.map((item, index) => {
    const lineTotal = pricing.unitPrice * item.quantity;
    const regularLineTotal = pricing.retailPrice * item.quantity;

    const priceDisplay = pricing.isWholesale
      ? `
        <div class="cart-item-price">
          <span style="text-decoration: line-through; opacity: 0.5; font-size: 11px; margin-right: 6px;">${formatPrice(regularLineTotal)}</span>
          <span style="color: var(--chocolate); font-weight: 700;">${formatPrice(lineTotal)}</span>
          <small style="display: block; font-size: 10px; color: var(--gold); font-weight: 700;">$60.000 c/u mayorista</small>
        </div>
      `
      : `
        <div class="cart-item-price">
          <span>${formatPrice(lineTotal)}</span>
          <small style="display: block; font-size: 10px; opacity: 0.7;">$70.000 c/u</small>
        </div>
      `;

    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-info">
          <h4>${item.title}</h4>
          <p>Talla: <strong>${item.size}</strong></p>
          ${priceDisplay}
          <div class="cart-qty-row">
            <button class="qty-btn" onclick="updateCartQuantity(${index}, ${item.quantity - 1})">−</button>
            <span style="font-weight: 700; font-size: 12px;">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity(${index}, ${item.quantity + 1})">+</button>
            <button class="remove-item-btn" onclick="removeFromCart(${index})">Eliminar</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  itemsContainer.innerHTML = wholesaleBannerHtml + itemsHtml;
}

function openCart() {
  const overlay = document.getElementById('cartDrawerOverlay');
  if (overlay) overlay.classList.add('open');
}

function closeCart() {
  const overlay = document.getElementById('cartDrawerOverlay');
  if (overlay) overlay.classList.remove('open');
}

/* ====================================================================
   PEDIDO POR WHATSAPP CON DETALLE DE MAYOREO
   ==================================================================== */
function checkoutWhatsApp() {
  if (AppState.cart.length === 0) {
    showCustomAlert({
      title: 'Tu carrito está vacío',
      message: 'Agrega tus jeans favoritos a tu carrito antes de enviar el pedido por WhatsApp.'
    });
    return;
  }

  const pricing = getCartPricing();
  
  let msg = `Hola, Más Canela Store. Quiero confirmar este pedido:\n\n`;

  AppState.cart.forEach((item, i) => {
    const lineTotal = pricing.unitPrice * item.quantity;
    msg += `${i + 1}. *${item.title}*\n   • Talla: ${item.size}\n   • Cantidad: ${item.quantity}\n   • Precio unitario: ${formatPrice(pricing.unitPrice)}\n   • Subtotal: ${formatPrice(lineTotal)}\n\n`;
  });

  msg += `*Total prendas:* ${pricing.totalQuantity} unidades\n`;
  if (pricing.isWholesale) {
    msg += `*Tarifa aplicada:* ⭐ ¡Precio al por mayor! ($60.000 c/u a partir de 6 prendas)\n`;
    msg += `*Ahorro obtenido:* ${formatPrice(pricing.savings)}\n`;
  } else {
    msg += `*Tarifa aplicada:* Precio al detal ($70.000 c/u)\n`;
  }
  msg += `*Total de referencia:* ${formatPrice(pricing.subtotal)}\n`;
  msg += `*Ciudad de entrega:* \n`;
  msg += `*Método de pago preferido:* (Contra entrega Bogotá / Transferencia)\n\n`;
  msg += `Por favor confirmen disponibilidad, costo de envío y pasos para completar mi compra. ¡Muchas gracias!`;

  const waNumber = (typeof STORE_CONFIG !== 'undefined' && STORE_CONFIG.whatsappNumber) ? STORE_CONFIG.whatsappNumber : "573026027989";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

/* ====================================================================
   MODAL VISTA RÁPIDA DE PRODUCTO
   ==================================================================== */
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById('productModalOverlay');
  const content = document.getElementById('productModalContent');
  if (!overlay || !content) return;

  const isDama = product.category === 'Dama';
  const hasMultipleViews = Boolean(product.images && product.images.both);
  const activeView = AppState.activeCardViews[productId] || 'front';
  const displayImage = (hasMultipleViews && activeView === 'both') ? product.images.both : product.image;

  const sizeOptionsHtml = product.sizes.map(size => 
    `<option value="${size}">${size}</option>`
  ).join('');

  // Selector visual dentro del modal para alternar frontal y ambos lados
  const modalSwitcherHtml = hasMultipleViews ? `
    <div class="modal-view-switcher" role="group" aria-label="Selector de fotos en detalle">
      <button type="button" class="modal-view-btn ${activeView === 'front' ? 'active' : ''}" 
              data-view="front"
              onclick="switchProductModalView('${product.id}', 'front')">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="7" r="4"></circle><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path></svg>
        <span>Foto Frontal</span>
      </button>
      <button type="button" class="modal-view-btn ${activeView === 'both' ? 'active' : ''}" 
              data-view="both"
              onclick="switchProductModalView('${product.id}', 'both')">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
        <span>Ambos Lados</span>
      </button>
    </div>
  ` : '';

  const eyebrowLabel = isDama 
    ? `EDICIÓN DAMA · ${product.refCode ? 'REF. ' + product.refCode : 'ZIROX LUXURY'}${product.silhouetteName ? ' · ' + product.silhouetteName.toUpperCase() : ''}` 
    : 'EDICIÓN CABALLERO';

  content.innerHTML = `
    <button class="modal-close-btn" onclick="closeProductModal()" aria-label="Cerrar">&times;</button>
    <div class="modal-media-col">
      <img src="${displayImage}" alt="${product.title}" id="modalProductImg" class="modal-img" loading="lazy" decoding="async">
      ${modalSwitcherHtml}
    </div>
    <div class="modal-details">
      <p class="eyebrow" style="color: var(--gold); margin-bottom: 8px;">${eyebrowLabel}</p>
      <h2>${product.title}</h2>
      <span class="modal-price">
        ${product.priceFormatted}
        <small style="display: block; font-size: 12px; color: var(--gold); font-weight: 700; margin-top: 5px;">
          🏷️ Lleva 6 o más prendas a solo $60.000 COP c/u (puedes mezclar hombre y mujer)
        </small>
      </span>
      <p class="modal-description">${product.description}</p>
      
      <div class="size-select-group" style="margin-bottom: 16px;">
        <label for="modal-size">Elige tu talla:</label>
        <select id="modal-size" style="padding: 10px;">
          <option value="">Selecciona tu talla</option>
          ${sizeOptionsHtml}
        </select>
      </div>

      <div class="buy-row" style="margin-top: 15px;">
        <input type="number" id="modal-qty" class="quantity-input" min="1" max="99" value="1" style="width: 60px; height: 46px;">
        <button class="button" style="flex: 1;" onclick="handleAddFromModal('${product.id}')">
          Añadir al carrito
        </button>
      </div>

      <p style="font-size: 11px; margin-top: 20px; opacity: 0.7;">
        ✓ Envíos a toda Colombia<br>
        ✓ Pago contra entrega exclusivo para Bogotá<br>
        ✓ Asesoría personalizada por WhatsApp
      </p>
    </div>
  `;

  overlay.classList.add('open');
}

function handleAddFromModal(productId) {
  const sizeSelect = document.getElementById('modal-size');
  const qtyInput = document.getElementById('modal-qty');

  const size = sizeSelect ? sizeSelect.value : '';
  const quantity = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;

  if (!size) {
    showCustomAlert({
      title: 'Elige tu talla ideal',
      message: 'Por favor selecciona una talla para continuar con tu pedido.',
      focusEl: sizeSelect
    });
    return;
  }

  addToCart(productId, size, quantity);
  closeProductModal();
}

function closeProductModal() {
  const overlay = document.getElementById('productModalOverlay');
  if (overlay) overlay.classList.remove('open');
}

/* ====================================================================
   ANIMACIÓN DE ENTRADA Y SALIDA - HERO SECTION (SECCIÓN 1)
   ==================================================================== */
function initHeroAnimation() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animación de entrada
        hero.classList.add('in-view');
      } else {
        // Animación de salida al hacer scroll hacia abajo
        hero.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -20px 0px'
  });

  observer.observe(hero);
}

/* ====================================================================
   ANIMACIÓN DE ENTRADA Y SALIDA - FRANJA DE VALOR (SECCIÓN 3)
   ==================================================================== */
function initValueBandAnimation() {
  const valueBand = document.querySelector('.value-band');
  if (!valueBand) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animación de entrada
        valueBand.classList.add('in-view');
      } else {
        // Animación de salida
        valueBand.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -30px 0px'
  });

  observer.observe(valueBand);
}

/* ====================================================================
   ANIMACIÓN DE ENTRADA Y SALIDA POR SCROLL (SECCIONES 4, 5 Y 6)
   ==================================================================== */
function initScrollSectionsAnimation() {
  const sectionsToAnimate = [
    { selector: '.story', threshold: 0.15 },
    { selector: '.logistics', threshold: 0.15 },
    { selector: '.faq-section', threshold: 0.1 },
    { selector: 'footer', threshold: 0.08 }
  ];

  sectionsToAnimate.forEach(({ selector, threshold }) => {
    const el = document.querySelector(selector);
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animación de entrada al scroll
          el.classList.add('in-view');
        } else {
          // Animación de salida al scroll
          el.classList.remove('in-view');
        }
      });
    }, {
      threshold: threshold,
      rootMargin: '0px 0px -25px 0px'
    });

    observer.observe(el);
  });
}

/* ====================================================================
   INICIALIZACIÓN DE LA PÁGINA
   ==================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Cargar datos
  loadCart();
  initHeroSlider();
  initHeroAnimation();
  initValueBandAnimation();
  initScrollSectionsAnimation();
  renderProducts();

  // Filtros de categoría principal
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      AppState.currentCategory = e.target.getAttribute('data-category');
      
      // Si entra a Dama y no tenía silueta seleccionada, aseguramos 'baggy'
      if (AppState.currentCategory === 'Dama') {
        if (!AppState.currentSilhouette) AppState.currentSilhouette = 'baggy';
        document.querySelectorAll('.silhouette-pill').forEach(pill => {
          pill.classList.toggle('active', pill.getAttribute('data-silhouette') === AppState.currentSilhouette);
        });
      }
      renderProducts();
    });
  });

  // Sub-filtros de Silueta de Dama
  document.querySelectorAll('.silhouette-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetBtn = e.currentTarget;
      const silhouette = targetBtn.getAttribute('data-silhouette');
      filterBySilhouette(silhouette);
    });
  });

  // Eventos Carrito
  document.getElementById('openCartBtn')?.addEventListener('click', openCart);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCart);
  document.getElementById('cartDrawerOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'cartDrawerOverlay') closeCart();
  });
  document.getElementById('btnWhatsappCheckout')?.addEventListener('click', checkoutWhatsApp);

  // Eventos Modal Producto
  document.getElementById('productModalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'productModalOverlay') closeProductModal();
  });

  // Eventos Alerta Personalizada (Centro de pantalla)
  document.getElementById('customAlertBtn')?.addEventListener('click', closeCustomAlert);
  document.getElementById('customAlertOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'customAlertOverlay') closeCustomAlert();
  });

  // Cerrar modales con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCustomAlert();
      closeProductModal();
      closeCart();
    }
  });

  // Menú móvil
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
    // Cerrar al hacer clic en un enlace del menú
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mainNav.classList.remove('open'));
    });
  }

  // Actualizar año en el footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Acordeón interactivo exclusivo para FAQ
  document.querySelectorAll('.faq-accordion details').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        document.querySelectorAll('.faq-accordion details').forEach((other) => {
          if (other !== item && other.open) {
            other.open = false;
          }
        });
      }
    });
  });

  // Enlace para volver al catálogo con desplazamiento suave
  const backToCatalogBtn = document.getElementById('backToCatalogBtn');
  if (backToCatalogBtn) {
    backToCatalogBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const catalogEl = document.getElementById('catalogo');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', '#catalogo');
      }
    });
  }
});
