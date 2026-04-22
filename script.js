const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const navLinks = document.querySelectorAll('.nav-link');

function setSidebarOpen(isOpen) {
  if (!sidebar || !menuToggle) {
    return;
  }

  sidebar.classList.toggle('open', isOpen);
  document.body.classList.toggle('sidebar-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
}

if (menuToggle && sidebar) {
  menuToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.contains('open');
    setSidebarOpen(!isOpen);
  });
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener('click', () => {
    setSidebarOpen(false);
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setSidebarOpen(false);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    setSidebarOpen(false);
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    setSidebarOpen(false);
    document.querySelector('.nav-link.active')?.classList.remove('active');
    link.classList.add('active');
  });
});

const langToggle = document.getElementById('langToggle');
const langFlag = langToggle?.querySelector('.lang-flag');
const i18nElements = document.querySelectorAll('[data-i18n]');
const translations = {
  pt: {
    htmlLang: 'pt-BR',
    title: 'Portfólio Hugvo',
    brandSubtitle: 'Pixel Art Elegante',
    navHome: 'Início',
    navOutfits: 'Outfits',
    navItems: 'Items',
    navMonsters: 'Monsters',
    navPacks: 'Packs',
    navDecorations: 'Decorations',
    navContact: 'Contato',
    topHome: 'Início',
    topPortfolio: 'Portfólio',
    topContact: 'Contato',
    heroDescription: 'Artista profissional de Pixel Art, atuante em diversos estilos, com maior experiência em arte isométrica.',
    heroTitle: 'PORTFOLIO',
    heroBenefitsAria: 'Diferenciais',
    heroBenefit1: 'Criação de sprites para todas versões',
    heroBenefit2: 'Conteúdo pronta entrega',
    heroBenefit3: 'Conteúdo 100% exclusivo',
    heroButton: 'Ver trabalhos',
    heroCourse: 'Curso',
    heroCourseSoon: 'Não disponível no momento',
    carouselTitle: 'Servidores atendidos',
    faqLabel: 'FAQ',
    faqTitle: 'Perguntas Frequentes',
    faqSubtitle: 'Tudo que você precisa saber sobre nossos produtos.',
    faqQuestion1: 'Como funciona a contratação?',
    faqAnswer1Line1: '<strong>Processo de trabalho e pagamento</strong>',
    faqAnswer1Line2: '<strong>Definição do pedido:</strong> Primeiramente, preciso levantar todas as informações necessárias para compreender exatamente o que o cliente deseja.',
    faqAnswer1Line3: '<strong>Pagamento inicial:</strong> Após estabelecermos o pedido, será necessário o pagamento antecipado de 50% do valor total acordado.',
    faqAnswer1Line4: '<strong>Prazo de entrega:</strong> Informarei um prazo médio para conclusão do trabalho.',
    faqAnswer1Line5: '<strong>Acompanhamento:</strong> Durante o progresso, enviarei prints do processo. Nesta etapa, o cliente poderá solicitar alterações sem custo adicional.',
    faqAnswer1Line6: '<strong>Finalização e entrega:</strong> Após a conclusão do trabalho, para que eu envie o material final, será necessário o pagamento do valor restante.',
    faqAnswer1Line7: '<strong>Formas de pagamento aceitas:</strong> Pix, Revolut, Wise, Criptomoedas (Binance)',
    faqQuestion2: 'Faz sprites para todas versões?',
    faqAnswer2Line1: 'Sim, crio sprites personalizados para todas as versões do Tibia, adaptando fielmente ao estilo gráfico de cada versão. Meu trabalho garante qualidade, coerência estética e fidelidade ao universo do jogo, seja em itens, criaturas, personagens ou efeitos visuais. O objetivo é entregar sprites que valorizem seu projeto, tornando-o mais imersivo e profissional.',
    faqQuestion3: 'Como recebo meu trabalho?',
    faqAnswer3Line1: '<strong>Meio de envio:</strong> O cliente receberá os arquivos pelo mesmo canal em que estivermos nos comunicando, seja Discord, WhatsApp ou Instagram.',
    faqAnswer3Line2: '<strong>Formato dos arquivos:</strong> Sprite Sheet completo ou frames separados individualmente, conforme sua preferência.',
    faqAnswer3Line3: '<strong>Opções adicionais:</strong> Durante a comunicação, podemos combinar para que eu já forneça a sprite montada especificamente para sua versão, nos formatos OBD ou AEC, conforme acessibilidade e necessidade do projeto.',
    faqQuestion4: 'Qual a política de reembolso?',
    faqAnswer4Line1: 'Após a conclusão do trabalho e entrega dos arquivos, não há reembolso. Durante o processo, antes da finalização, alterações são realizadas sem custo adicional. Caso não esteja satisfeito antes do pagamento final, faremos ajustes até sua aprovação.',
    testimonialsLabel: 'Feedbacks',
    testimonialsTitle: 'Depoimentos',
    testimonialsSubtitle: 'Comunidade confiante no nosso trabalho',
    testimonialsPrevAria: 'Ver feedback anterior',
    testimonialsNextAria: 'Ver próximo feedback',
    testimonialsDotAria: 'Ir para o grupo de feedback',
    testimonialQuote1: '"Meu pedido foi feito num piscar de olhos. Ele ouve o que você quer e usa sua criatividade para criar algo verdadeiramente incrível. Recomendo o Hugvo 100%!"',
    testimonialName1: 'Optimum',
    testimonialRole1: 'Vanyria',
    testimonialQuote2: '"Profissional competente e dedicado! Recomendo muito! Preço justo, serviço honesto e rápido."',
    testimonialName2: 'Dohko',
    testimonialRole2: 'OlimpiaOT',
    testimonialQuote3: '"Cara gente boa, preço justo, trabalho rápido e estiloso! Recomendo o Hugo para quem quer elevar o nível visual do seu servidor."',
    testimonialName3: 'Mythh',
    testimonialRole3: 'Oldheart',
    testimonialQuote4: '"Hugvo é uma pessoa muito genuína, talentosa e trabalhadora ^^"',
    testimonialName4: 'Fifth',
    testimonialRole4: 'Empearl',
    testimonialQuote5: '"Muito obrigado Hugvo pelas sprites, ficaram incríveis. Você capturou exatamente o estilo que precisávamos e ainda superou as expectativas. Adorei o trabalho! Com certeza vou querer mais no futuro."',
    testimonialName5: 'jpaulooli',
    testimonialRole5: 'MazeOT',
    testimonialQuote6: '"Altamente recomendado. Definitivamente vale a pena conferir."',
    testimonialName6: 'A1Z3N',
    testimonialRole6: 'Blazera',
    testimonialQuote7: '"Estou muito satisfeito com os serviços do Hugvo. Recomendo pela excelente abordagem em seguir a visão e prestar atenção nos detalhes. Um cara muito talentoso!"',
    testimonialName7: 'mx',
    testimonialRole7: 'Giterna',
    testimonialQuote8: '"Estou extremamente satisfeito com o trabalho do Hugo. Foi entregue em tempo recorde e a qualidade é simplesmente incrível. Totalmente vale cada centavo. Ele criou uma mount e um outfit para o meu servidor e o resultado surpreendeu a todos — meus amigos, os jogadores, todo mundo adorou. Dá pra ver o quanto ele coloca habilidade e cuidado no que faz. Recomendo muito!"',
    testimonialName8: 'Sir Então',
    testimonialRole8: 'TyronOT',
    testimonialQuote9: '"O trabalho do Hugo é incrível, rápido e preciso. Já fiz duas compras e estou extremamente satisfeito com os resultados."',
    testimonialName9: 'BalanzinhoGG',
    testimonialRole9: 'LuminarisOT',
    testimonialVerified: 'Verificado',
    contactLabel: 'Contato',
    contactTitle: 'Vamos conversar',
    contactText: 'Para realizar um trabalho comigo, basta me chamar em qualquer rede. Estou pronto para começar o seu projeto e acrescentar ainda mais valor a ele.',
    footerLabel: 'Conecte-se',
    menuOpenAria: 'Abrir menu',
    videoCollapseAria: 'Reduzir vídeo',
    videoExpandAria: 'Expandir vídeo',
    videoPauseAria: 'Pausar vídeo',
    videoPlayAria: 'Reproduzir vídeo',
    videoUnmuteAria: 'Ativar som',
    videoMuteAria: 'Desativar som',
    videoFullscreenAria: 'Tela cheia',
    videoOpenYoutube: 'Abrir no YouTube',
    videoUnavailableHere: 'Este vídeo não pode ser reproduzido aqui.',
    videoOpenViaHttp: 'Abra via localhost/http para reproduzir embutido.',
    videoInvalidEmbed: 'Vídeo inválido para embed.',
    videoHtml5Fail: 'Falha no player HTML5 neste navegador.',
    videoRemovedPrivate: 'Vídeo removido ou privado.',
    videoEmbedBlocked: 'Este vídeo não permite incorporação.',
    videoPrivacyBlocked: 'Configuração de privacidade/referer bloqueou o player.',
    videoEmbedFail: 'Não foi possível reproduzir embutido.',
    playlistLoading: 'Carregando vídeos da playlist...',
    playlistNoVideos: 'Playlist sem vídeos',
    playlistFetchFail: 'Não foi possível obter feed da playlist',
    playlistLoadFail: 'Não foi possível carregar automaticamente agora. Tente recarregar a página.',
    contactWhatsapp: 'WhatsApp',
    contactInstagram: 'Instagram',
    contactEmail: 'Enviar e-mail',
    contactDiscord: 'Discord'
  },
  en: {
    htmlLang: 'en',
    title: 'Hugvo Portfolio',
    brandSubtitle: 'Elegant Pixel Art',
    navHome: 'Home',
    navOutfits: 'Outfits',
    navItems: 'Items',
    navMonsters: 'Monsters',
    navPacks: 'Packs',
    navDecorations: 'Decorations',
    navContact: 'Contact',
    topHome: 'Home',
    topPortfolio: 'Portfolio',
    topContact: 'Contact',
    heroDescription: 'Professional pixel art artist, specialized with extensive experience in isometric perspective',
    heroTitle: 'PORTFOLIO',
    heroBenefitsAria: 'Highlights',
    heroBenefit1: 'Sprite creation for all versions',
    heroBenefit2: 'Ready-to-deliver content',
    heroBenefit3: '100% exclusive content',
    heroButton: 'View work',
    heroCourse: 'Class',
    heroCourseSoon: 'Not available yet',
    carouselTitle: 'Servers served',
    faqLabel: 'FAQ',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Everything you need to know about our products.',
    faqQuestion1: 'How does hiring work?',
    faqAnswer1Line1: '<strong>Work process and payment</strong>',
    faqAnswer1Line2: '<strong>Order definition:</strong> First, I gather all required information to understand exactly what the client needs.',
    faqAnswer1Line3: '<strong>Initial payment:</strong> After we define the order, a 50% upfront payment of the agreed total is required.',
    faqAnswer1Line4: '<strong>Delivery timeframe:</strong> I will provide an estimated timeline to complete the work.',
    faqAnswer1Line5: '<strong>Follow-up:</strong> During production, I send progress screenshots. At this stage, adjustments can be requested at no extra cost.',
    faqAnswer1Line6: '<strong>Finalization and delivery:</strong> After completion, the remaining amount is required before final files are delivered.',
    faqAnswer1Line7: '<strong>Accepted payment methods:</strong> Pix, Revolut, Wise, Cryptocurrencies (Binance)',
    faqQuestion2: 'Do you make sprites for all versions?',
    faqAnswer2Line1: 'Yes. I create custom sprites for all Tibia versions, faithfully adapting to each visual style. My work ensures quality, aesthetic consistency, and fidelity to the game universe across items, creatures, characters, and visual effects. The goal is to deliver sprites that elevate your project and make it more immersive and professional.',
    faqQuestion3: 'How will I receive my work?',
    faqAnswer3Line1: '<strong>Delivery channel:</strong> Files are sent through the same channel we use to communicate, such as Discord, WhatsApp, or Instagram.',
    faqAnswer3Line2: '<strong>File format:</strong> Full sprite sheet or individually separated frames, according to your preference.',
    faqAnswer3Line3: '<strong>Additional options:</strong> During communication, we can agree that I also deliver the sprite already assembled for your version in OBD or AEC formats, according to project needs.',
    faqQuestion4: 'What is the refund policy?',
    faqAnswer4Line1: 'After the work is completed and files are delivered, refunds are not available. During production, before finalization, adjustments are made at no extra cost. If you are not satisfied before final payment, we keep refining until approval.',
    testimonialsLabel: 'Feedback',
    testimonialsTitle: 'Testimony',
    testimonialsSubtitle: 'A community that trusts our work',
    testimonialsPrevAria: 'View previous feedback',
    testimonialsNextAria: 'View next feedback',
    testimonialsDotAria: 'Go to feedback group',
    testimonialQuote1: '"My order was done in a heartbeat. He listens to what u want and he uses his creative skills to make something truly amazing. Recommend Hugvo 100%!"',
    testimonialName1: 'Optimum',
    testimonialRole1: 'Vanyria',
    testimonialQuote2: '"Competent and dedicated professional! I highly recommend him! Fair price, honest and fast service."',
    testimonialName2: 'Dohko',
    testimonialRole2: 'OlimpiaOT',
    testimonialQuote3: '"Fair guy, nice pricing, fast and stylish jobs! I recommend Hugo if you are looking for someone to boost your designs to a top level."',
    testimonialName3: 'Mythh',
    testimonialRole3: 'Oldheart',
    testimonialQuote4: '"Hugvo is a very genuine, skilled and hard working person ^^"',
    testimonialName4: 'Fifth',
    testimonialRole4: 'Empearl',
    testimonialQuote5: '"Thanks Hugvo for the sprites, they came out awesome. You captured exactly the style we needed and even went beyond what I expected. Really loved the work! And I\'ll definitely want more in the future."',
    testimonialName5: 'jpaulooli',
    testimonialRole5: 'MazeOT',
    testimonialQuote6: '"Highly recommended. Definitely worth checking out."',
    testimonialName6: 'A1Z3N',
    testimonialRole6: 'Blazera',
    testimonialQuote7: '"I am really satisfied with Hugvo\'s services. I definitely recommend him for his excellent approach in following the vision and paying close attention to every detail. He\'s a really talented guy!"',
    testimonialName7: 'mx',
    testimonialRole7: 'Giterna',
    testimonialQuote8: '"I\'m extremely happy with Hugo\'s work. Seriously, it was delivered in record time and the quality is just insane. Totally worth every penny. He made a mount and an outfit for my Tibia server and the result blew everyone away — my friends, the players, everyone loved it. You can really tell he puts a lot of skill and care into what he does. Highly recommend working with him!"',
    testimonialName8: 'Sir Entao',
    testimonialRole8: 'TyronOT',
    testimonialQuote9: '"Hugo\'s work is incredible, fast, and accurate. I\'ve already made two purchases and I\'m extremely satisfied with the results."',
    testimonialName9: 'BalanzinhoGG',
    testimonialRole9: 'LuminarisOT',
    testimonialVerified: 'Verified',
    contactLabel: 'Contact',
    contactTitle: "Let's talk",
    contactText: 'To hire me, just reach out on any platform. I am ready to start your project and add even more value to it.',
    footerLabel: 'Connect',
    menuOpenAria: 'Open menu',
    videoCollapseAria: 'Reduce video',
    videoExpandAria: 'Expand video',
    videoPauseAria: 'Pause video',
    videoPlayAria: 'Play video',
    videoUnmuteAria: 'Unmute',
    videoMuteAria: 'Mute',
    videoFullscreenAria: 'Fullscreen',
    videoOpenYoutube: 'Open on YouTube',
    videoUnavailableHere: 'This video cannot be played here.',
    videoOpenViaHttp: 'Open via localhost/http to play embedded.',
    videoInvalidEmbed: 'Invalid video for embed.',
    videoHtml5Fail: 'HTML5 player failed in this browser.',
    videoRemovedPrivate: 'Video removed or private.',
    videoEmbedBlocked: 'This video does not allow embedding.',
    videoPrivacyBlocked: 'Privacy/referrer settings blocked the player.',
    videoEmbedFail: 'Could not play embedded.',
    playlistLoading: 'Loading playlist videos...',
    playlistNoVideos: 'Playlist has no videos',
    playlistFetchFail: 'Could not fetch playlist feed',
    playlistLoadFail: 'Could not load automatically right now. Please reload the page.',
    contactWhatsapp: 'WhatsApp',
    contactInstagram: 'Instagram',
    contactEmail: 'Send email',
    contactDiscord: 'Discord'
  }
};
let currentLang = 'pt';
let appIsReady = false;

function t(key, fallback = '') {
  return translations[currentLang]?.[key] || translations.pt?.[key] || fallback;
}

function setLanguage(lang) {
  currentLang = lang;
  const dictionary = translations[lang];
  document.documentElement.lang = dictionary.htmlLang;
  document.title = dictionary.title;
  if (langFlag) {
    langFlag.src = lang === 'pt' ? 'images/br.png' : 'images/eua.png';
    langFlag.alt = lang === 'pt' ? 'Portuguese' : 'English';
  }
  langToggle.setAttribute('aria-label', lang === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese');

  i18nElements.forEach(el => {
    const key = el.dataset.i18n;
    if (dictionary[key]) {
      el.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.dataset.i18nAriaLabel;
    if (dictionary[key]) {
      el.setAttribute('aria-label', dictionary[key]);
    }
  });

  document.querySelectorAll('[data-i18n-tooltip]').forEach((el) => {
    const key = el.dataset.i18nTooltip;
    if (dictionary[key]) {
      el.setAttribute('data-tooltip', dictionary[key]);
      el.removeAttribute('title');
    }
  });

  if (appIsReady && typeof window.refreshTestimonialsI18n === 'function') {
    window.refreshTestimonialsI18n();
  }

  if (appIsReady && typeof window.refreshVideoI18n === 'function') {
    window.refreshVideoI18n();
  }
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'pt' ? 'en' : 'pt');
  });
}

setLanguage('pt');

// Panel tabs functionality
const panelTabs = document.querySelectorAll('.panel-tab');
const panelGrids = document.querySelectorAll('.panel-grid');
const portfolioSectionEl = document.getElementById('portfolio');

let hasEnteredPortfolio = false;
let youTubeApiPromise;
let expandedCard = null;
const playerRegistry = new Map();
const safeEmbedOrigin = window.location.origin && window.location.origin !== 'null'
  ? window.location.origin
  : '';
const shouldUseIframeEmbed = window.location.protocol !== 'file:';

function getYouTubeWatchUrl(videoId) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

function showCardFallback(card, reason = 'Este video nao pode ser reproduzido aqui.') {
  if (!card) {
    return;
  }

  card.classList.add('video-card-has-fallback');
  const fallback = card.querySelector('.video-embed-fallback');
  if (!fallback) {
    return;
  }

  const reasonEl = fallback.querySelector('.video-fallback-reason');
  if (reasonEl) {
    reasonEl.textContent = reason || t('videoUnavailableHere', 'Este video nao pode ser reproduzido aqui.');
  }

  const openLink = fallback.querySelector('.video-fallback-link');
  if (openLink && card.dataset.videoId) {
    openLink.href = getYouTubeWatchUrl(card.dataset.videoId);
    openLink.textContent = t('videoOpenYoutube', 'Abrir no YouTube');
  }
}

function applyPanelGridRowClamp(grid, maxRows = 3) {
  if (!grid || grid.classList.contains('hidden')) {
    return;
  }

  if (window.innerWidth <= 1024) {
    grid.style.maxHeight = 'none';
    grid.classList.remove('has-inner-scroll');
    return;
  }

  const cards = Array.from(grid.querySelectorAll('.video-card'));
  if (!cards.length) {
    grid.style.maxHeight = 'none';
    grid.classList.remove('has-inner-scroll');
    return;
  }

  const styles = window.getComputedStyle(grid);
  const templateColumns = styles.gridTemplateColumns
    .split(' ')
    .map((value) => value.trim())
    .filter(Boolean);
  const columnCount = Math.max(1, templateColumns.length);
  const totalRows = Math.ceil(cards.length / columnCount);

  if (totalRows <= maxRows) {
    grid.style.maxHeight = 'none';
    grid.classList.remove('has-inner-scroll');
    return;
  }

  const firstCardHeight = cards[0].getBoundingClientRect().height;
  if (!firstCardHeight) {
    return;
  }

  const rowGap = parseFloat(styles.rowGap || styles.gap || '0') || 0;
  const maxHeight = (firstCardHeight * maxRows) + (rowGap * (maxRows - 1));
  grid.style.maxHeight = `${Math.ceil(maxHeight)}px`;
  grid.classList.add('has-inner-scroll');
}

function refreshVisiblePanelGridClamp() {
  const visiblePanel = document.querySelector('.panel-grid:not(.hidden)');
  if (!visiblePanel) {
    return;
  }

  requestAnimationFrame(() => {
    applyPanelGridRowClamp(visiblePanel, 3);
  });
}

panelTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    collapseExpandedCard();
    const category = tab.dataset.category;
    
    // Remove active class from all tabs and grids
    panelTabs.forEach(t => t.classList.remove('active'));
    panelGrids.forEach(g => g.classList.add('hidden'));
    
    // Add active class to clicked tab
    tab.classList.add('active');
    
    // Show corresponding grid
    const targetGrid = document.getElementById(`${category}-panel`);
    if (targetGrid) {
      targetGrid.classList.remove('hidden');
      refreshVisiblePanelGridClamp();
      // Re-bind native video card expand for newly visible cards
      bindNativeVideoCardExpand();
    }

    if (hasEnteredPortfolio) {
      playVisiblePanelMuted();
    }
  });
});

// Dropdown portfolio navigation - hover only, but add click for mobile
const dropdownTrigger = document.querySelector('.dropdown-trigger');
const dropdownMenu = document.querySelector('.dropdown-menu');

function isCompactNavigation() {
  return window.matchMedia('(max-width: 1024px)').matches;
}

if (dropdownTrigger && dropdownMenu) {
  dropdownTrigger.addEventListener('click', (e) => {
    if (!isCompactNavigation()) {
      return;
    }

    e.preventDefault();
    dropdownMenu.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!dropdownTrigger.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove('open');
    }
  });

  window.addEventListener('resize', () => {
    if (!isCompactNavigation()) {
      dropdownMenu.classList.remove('open');
    }
  });
}

const dropdownLinks = document.querySelectorAll('.dropdown-link');

dropdownLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (isCompactNavigation()) {
      dropdownMenu?.classList.remove('open');
      setSidebarOpen(false);
    }
  });
});

const playlistByCategory = {
  items: 'PLy6tBXtSgT3Qd76FKySK_naOTh-Xr7h_t',
  monsters: 'PLy6tBXtSgT3S6VR5aJ5XhVcooEgEo_he1',
  outfits: 'PLy6tBXtSgT3TEO93yFIE75XbE9bd-BRku',
  packs: 'PLy6tBXtSgT3TZ1gvcado761VUX2WfE6PX',
  decorations: 'PLy6tBXtSgT3QCvpwKIypMRuUh1-S1amqY'
};

const minCachedEntriesByCategory = {
  outfits: 8,
  items: 5,
  monsters: 3,
  packs: 1,
  decorations: 1
};

const loadedPlaylists = new Set();
const playlistEntriesCache = new Map();
const playlistEntriesPromiseCache = new Map();
const PLAYLIST_VERSION_URL = 'playlist-version.json';
const PLAYLIST_VERSION_STORAGE_KEY = 'yt-playlist-version';
const PLAYLIST_FALLBACK_URL = 'playlist-fallback.json';
let playlistFallbackPromise;

function normalizeEntryList(entries) {
  if (!Array.isArray(entries)) {
    return [];
  }

  return entries
    .map((entry) => {
      const videoId = String(entry?.videoId || '').trim();
      const title = String(entry?.title || '').trim();
      if (!videoId) {
        return null;
      }
      return { videoId, title };
    })
    .filter(Boolean);
}

async function loadPlaylistFallbackData() {
  if (playlistFallbackPromise) {
    return playlistFallbackPromise;
  }

  playlistFallbackPromise = fetch(PLAYLIST_FALLBACK_URL, { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Fallback local indisponivel');
      }
      return response.json();
    })
    .then((data) => data || {})
    .catch(() => ({}));

  return playlistFallbackPromise;
}

async function getPlaylistEntries(category, feedUrl) {
  try {
    const xmlText = await fetchPlaylistFeed(feedUrl, category);
    const xml = new DOMParser().parseFromString(xmlText, 'application/xml');
    const rawEntries = Array.from(xml.getElementsByTagName('entry'));

    return rawEntries
      .map((entry) => ({
        videoId: getFirstTagText(entry, ['yt:videoId', 'videoId']),
        title: getFirstTagText(entry, ['title'])
      }))
      .filter((entry) => entry.videoId);
  } catch (remoteError) {
    const fallbackData = await loadPlaylistFallbackData();
    const fallbackEntries = normalizeEntryList(fallbackData?.[category]);
    if (fallbackEntries.length) {
      console.warn(`Usando fallback local para ${category} apos falha do feed remoto.`, remoteError);
      return fallbackEntries;
    }
    throw remoteError;
  }
}

function getFeedUrlByCategory(category) {
  const playlistId = playlistByCategory[category];
  if (!playlistId) {
    return '';
  }
  return `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`;
}

function clearPlaylistCache(category) {
  const feedUrl = getFeedUrlByCategory(category);
  if (!feedUrl) {
    return;
  }

  try {
    sessionStorage.removeItem(`yt-feed:${feedUrl}`);
  } catch {
    // ignore storage errors
  }

  playlistEntriesCache.delete(category);
  playlistEntriesPromiseCache.delete(category);
}

function clearAllPlaylistCaches() {
  Object.keys(playlistByCategory).forEach((category) => {
    clearPlaylistCache(category);
  });
  playlistEntriesCache.clear();
  playlistEntriesPromiseCache.clear();
}

async function getPlaylistEntriesCached(category) {
  if (playlistEntriesCache.has(category)) {
    return playlistEntriesCache.get(category);
  }

  if (playlistEntriesPromiseCache.has(category)) {
    return playlistEntriesPromiseCache.get(category);
  }

  const feedUrl = getFeedUrlByCategory(category);
  const promise = getPlaylistEntries(category, feedUrl)
    .then((entries) => {
      playlistEntriesCache.set(category, entries);
      return entries;
    })
    .finally(() => {
      playlistEntriesPromiseCache.delete(category);
    });

  playlistEntriesPromiseCache.set(category, promise);
  return promise;
}

function setupScrollReveal() {
  const revealTargets = Array.from(document.querySelectorAll(
    '.hero-copy, .hero-panel, .carousel-section, .portfolio-panel, .faq-section, .testimonials-section, .contact-section, .site-footer'
  ));

  revealTargets.forEach((el, index) => {
    el.classList.add('reveal-on-scroll');
    el.style.setProperty('--reveal-delay', `${Math.min(index * 60, 240)}ms`);
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  revealTargets.forEach((el) => revealObserver.observe(el));
}

function setupTestimonialsSlider() {
  const slider = document.querySelector('[data-testimonials-slider]');
  if (!slider) {
    return;
  }

  const track = slider.querySelector('[data-testimonials-track]');
  const cards = Array.from(track?.querySelectorAll('.testimonial-card') || []);
  const prevBtn = slider.querySelector('[data-testimonials-prev]');
  const nextBtn = slider.querySelector('[data-testimonials-next]');
  const dotsWrap = document.querySelector('[data-testimonials-dots]');

  if (!track || !cards.length || !prevBtn || !nextBtn || !dotsWrap) {
    return;
  }

  let pageIndex = 0;
  let cardsPerView = 3;
  let autoSlideTimer = null;
  const autoSlideDelay = 5000;

  function getDotAriaLabel(index) {
    const dictionary = translations[currentLang] || translations.pt;
    const prefix = dictionary.testimonialsDotAria || 'Ir para o grupo de feedback';
    return `${prefix} ${index + 1}`;
  }

  function resolveCardsPerView() {
    if (window.innerWidth < 768) {
      return 1;
    }
    if (window.innerWidth < 1080) {
      return 2;
    }
    return 3;
  }

  function getPageCount() {
    return Math.max(1, Math.ceil(cards.length / cardsPerView));
  }

  function renderDots() {
    const pageCount = getPageCount();
    dotsWrap.innerHTML = '';

    for (let i = 0; i < pageCount; i += 1) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `testimonials-dot${i === pageIndex ? ' is-active' : ''}`;
      dot.setAttribute('aria-label', getDotAriaLabel(i));
      dot.addEventListener('click', () => {
        pageIndex = i;
        update();
        restartAutoSlide();
      });
      dotsWrap.appendChild(dot);
    }
  }

  function updateNavState() {
    const lastPage = getPageCount() - 1;
    prevBtn.disabled = pageIndex <= 0;
    nextBtn.disabled = pageIndex >= lastPage;
  }

  function updateTransform() {
    const firstCardIndex = pageIndex * cardsPerView;
    const firstCard = cards[firstCardIndex];
    const offset = firstCard ? firstCard.offsetLeft : 0;
    track.style.transform = `translateX(-${offset}px)`;
  }

  function update() {
    cardsPerView = resolveCardsPerView();
    slider.style.setProperty('--cards-per-view', String(cardsPerView));

    const lastPage = getPageCount() - 1;
    pageIndex = Math.min(pageIndex, lastPage);
    pageIndex = Math.max(pageIndex, 0);

    updateTransform();
    updateNavState();
    renderDots();
  }

  prevBtn.addEventListener('click', () => {
    pageIndex = Math.max(0, pageIndex - 1);
    update();
    restartAutoSlide();
  });

  nextBtn.addEventListener('click', () => {
    const lastPage = getPageCount() - 1;
    pageIndex = Math.min(lastPage, pageIndex + 1);
    update();
    restartAutoSlide();
  });

  function stepAutoSlide() {
    const lastPage = getPageCount() - 1;
    pageIndex = pageIndex >= lastPage ? 0 : pageIndex + 1;
    update();
  }

  function startAutoSlide() {
    if (autoSlideTimer || getPageCount() <= 1) {
      return;
    }
    autoSlideTimer = window.setInterval(stepAutoSlide, autoSlideDelay);
  }

  function stopAutoSlide() {
    if (!autoSlideTimer) {
      return;
    }
    window.clearInterval(autoSlideTimer);
    autoSlideTimer = null;
  }

  function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  slider.addEventListener('mouseenter', stopAutoSlide);
  slider.addEventListener('mouseleave', startAutoSlide);
  slider.addEventListener('focusin', stopAutoSlide);
  slider.addEventListener('focusout', startAutoSlide);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoSlide();
      return;
    }
    startAutoSlide();
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      update();
      restartAutoSlide();
    }, 120);
  });

  window.refreshTestimonialsI18n = () => {
    renderDots();
  };

  update();
  startAutoSlide();
}

function setupFaqAccordion() {
  const items = Array.from(document.querySelectorAll('.faq-item'));
  if (!items.length) {
    return;
  }

  items.forEach((item, index) => {
    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!button || !answer) {
      return;
    }

    const answerId = answer.id || `faq-answer-${index + 1}`;
    answer.id = answerId;
    button.setAttribute('aria-controls', answerId);
    button.setAttribute('aria-expanded', 'false');

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      items.forEach((other) => {
        other.classList.remove('open');
        const otherBtn = other.querySelector('.faq-question');
        if (otherBtn) {
          otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isOpen) {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function getEntryCountFromXml(xmlText) {
  try {
    const xml = new DOMParser().parseFromString(xmlText, 'application/xml');
    const parserError = xml.getElementsByTagName('parsererror')[0];
    if (parserError) {
      return -1;
    }
    return xml.getElementsByTagName('entry').length;
  } catch {
    return -1;
  }
}

function isCacheHealthyForCategory(xmlText, category) {
  const entryCount = getEntryCountFromXml(xmlText);
  if (entryCount <= 0) {
    return false;
  }

  const minExpected = minCachedEntriesByCategory[category] || 1;
  return entryCount >= minExpected;
}

async function syncPlaylistCacheVersion() {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 1500);
    const response = await fetch(PLAYLIST_VERSION_URL, { cache: 'no-store', signal: controller.signal });
    clearTimeout(timer);

    if (!response.ok) {
      return;
    }

    const payload = await response.json();
    const remoteVersion = String(payload?.version || '').trim();
    if (!remoteVersion) {
      return;
    }

    const localVersion = localStorage.getItem(PLAYLIST_VERSION_STORAGE_KEY);
    if (localVersion !== remoteVersion) {
      clearAllPlaylistCaches();
      loadedPlaylists.clear();
      localStorage.setItem(PLAYLIST_VERSION_STORAGE_KEY, remoteVersion);
    }
  } catch {
    // If version check fails or times out, keep current cache and continue.
  }
}

function destroyPlayersForPanel(panel) {
  const keysToRemove = [];

  playerRegistry.forEach((entry, key) => {
    if (entry.panel === panel) {
      try {
        entry.player.destroy();
      } catch {
        // ignore destroy errors
      }
      keysToRemove.push(key);
    }
  });

  keysToRemove.forEach((key) => playerRegistry.delete(key));
}

async function refreshPlaylist(category) {
  if (!playlistByCategory[category]) {
    return;
  }

  clearPlaylistCache(category);
  loadedPlaylists.delete(category);

  const panel = document.getElementById(`${category}-panel`);
  if (panel) {
    if (expandedCard && panel.contains(expandedCard)) {
      collapseExpandedCard();
    }
    destroyPlayersForPanel(panel);
  }

  await loadPlaylistIntoPanel(category);
  if (hasEnteredPortfolio) {
    playVisiblePanelMuted();
  }
}

async function refreshAllPlaylists() {
  const categories = Object.keys(playlistByCategory);

  clearAllPlaylistCaches();
  loadedPlaylists.clear();

  categories.forEach((category) => {
    const panel = document.getElementById(`${category}-panel`);
    if (panel) {
      if (expandedCard && panel.contains(expandedCard)) {
        collapseExpandedCard();
      }
      destroyPlayersForPanel(panel);
    }
  });

  // Reload visible category first for instant UX, then warm remaining sections.
  const activeTab = document.querySelector('.panel-tab.active');
  const firstCategory = activeTab?.dataset.category || 'outfits';
  await loadPlaylistIntoPanel(firstCategory);

  const remainingCategories = categories.filter((category) => category !== firstCategory);
  for (const category of remainingCategories) {
    await loadPlaylistIntoPanel(category);
  }

  if (hasEnteredPortfolio) {
    playVisiblePanelMuted();
  }
}

window.refreshPlaylist = refreshPlaylist;
window.refreshAllPlaylists = refreshAllPlaylists;

function getFirstTagText(node, tagNames) {
  for (const tagName of tagNames) {
    const tag = node.getElementsByTagName(tagName)[0];
    if (tag?.textContent) {
      return tag.textContent.trim();
    }
  }
  return '';
}

const SVG_PLAY = `<svg width="14" height="14" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polygon points="2,1 9,5 2,9"/></svg>`;
const SVG_PAUSE = `<svg width="14" height="14" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="2" y="1.5" width="2.2" height="7" rx="0.4"/><rect x="5.8" y="1.5" width="2.2" height="7" rx="0.4"/></svg>`;
const SVG_SOUND_ON = `<svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polygon points="1,4 4.5,4 7,2 7,10 4.5,8 1,8"/><path d="M8.5 4.5 Q10.5 6 8.5 7.5" stroke="currentColor" stroke-width="1.1" fill="none" stroke-linecap="round"/></svg>`;
const SVG_MUTED = `<svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polygon points="1,4 4.5,4 7,2 7,10 4.5,8 1,8"/><line x1="9" y1="4" x2="11" y2="7.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/><line x1="11" y1="4" x2="9" y2="7.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg>`;
const SVG_FULLSCREEN = `<svg width="13" height="13" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 3.5V1h2.5M6.5 1H9v2.5M9 6.5V9H6.5M3.5 9H1V6.5" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="square"/></svg>`;
const SVG_FULLSCREEN_EXIT = `<svg width="13" height="13" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M3.5 1H1v2.5M6.5 1H9v2.5M9 6.5V9H6.5M1 6.5V9h2.5" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="square"/></svg>`;

function updateExpandButton(card, isExpanded) {
  const fsBtn = card.querySelector('.fullscreen-toggle');
  if (!fsBtn) {
    return;
  }

  fsBtn.innerHTML = isExpanded ? SVG_FULLSCREEN_EXIT : SVG_FULLSCREEN;
  fsBtn.setAttribute('aria-label', isExpanded ? t('videoCollapseAria', 'Reduzir video') : t('videoExpandAria', 'Expandir video'));
}

function syncPlayerSize(card, key) {
  const entry = playerRegistry.get(key);
  const frameWrap = card.querySelector('.video-frame-wrap');
  if (!entry || !frameWrap) {
    return;
  }

  const rect = frameWrap.getBoundingClientRect();
  if (rect.width > 0 && rect.height > 0) {
    entry.player.setSize(Math.round(rect.width), Math.round(rect.height));
  }
}

function collapseExpandedCard() {
  if (!expandedCard) {
    return;
  }

  const key = expandedCard.dataset.playerKey;
  expandedCard.classList.remove('video-card-expanded');
  updateExpandButton(expandedCard, false);
  document.body.classList.remove('video-expanded-open');

  if (key) {
    syncPlayerSize(expandedCard, key);
  }

  expandedCard = null;
}

function expandCard(card, key) {
  if (expandedCard && expandedCard !== card) {
    collapseExpandedCard();
  }

  expandedCard = card;
  card.classList.add('video-card-expanded');
  updateExpandButton(card, true);
  document.body.classList.add('video-expanded-open');
  syncPlayerSize(card, key);

  const entry = playerRegistry.get(key);
  if (entry) {
    entry.player.setPlaybackQuality('hd720');
    entry.player.setPlaybackQualityRange?.('hd720');
  }
}

function toggleExpandedCard(card, key) {
  if (expandedCard === card) {
    collapseExpandedCard();
    return;
  }

  expandCard(card, key);
}

function bindNativeVideoCardExpand() {
  const nativeCards = document.querySelectorAll('.panel-grid .video-card:not(.video-card-youtube)');

  nativeCards.forEach((card) => {
    if (card.dataset.expandBound === 'true') {
      return;
    }

    card.dataset.expandBound = 'true';
    card.style.cursor = 'zoom-in';

    let fsBtn = card.querySelector('.native-fullscreen-toggle');
    if (!fsBtn) {
      fsBtn = document.createElement('button');
      fsBtn.type = 'button';
      fsBtn.className = 'video-control-btn fullscreen-toggle native-fullscreen-toggle';
      fsBtn.innerHTML = SVG_FULLSCREEN;
      fsBtn.setAttribute('aria-label', t('videoExpandAria', 'Expandir video'));
      card.appendChild(fsBtn);

      fsBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleExpandedCard(card, card.dataset.playerKey || '');
      });

      card.addEventListener('dblclick', () => {
        toggleExpandedCard(card, card.dataset.playerKey || '');
      });
    }

    updateExpandButton(card, false);
  });
}

function createEmbedCard(videoId, title, category, index) {
  const card = document.createElement('article');
  card.className = 'video-card video-card-youtube';
  card.dataset.videoId = videoId;

  const frameId = `yt-player-${category}-${index}-${videoId}`;

  const frameWrap = document.createElement('div');
  frameWrap.className = 'video-frame-wrap';
  // Show YouTube thumbnail immediately while player loads
  frameWrap.style.backgroundImage = `url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg)`;
  frameWrap.style.backgroundSize = 'cover';
  frameWrap.style.backgroundPosition = 'center';

  const frame = document.createElement('div');
  frame.className = 'video-frame';
  frame.id = frameId;
  frameWrap.appendChild(frame);

  const fallback = document.createElement('div');
  fallback.className = 'video-embed-fallback';

  const fallbackTitle = document.createElement('p');
  fallbackTitle.className = 'video-fallback-title';
  fallbackTitle.textContent = title || 'Video';

  const fallbackReason = document.createElement('p');
  fallbackReason.className = 'video-fallback-reason';
  fallbackReason.textContent = t('videoUnavailableHere', 'Este video nao pode ser reproduzido aqui.');

  const fallbackLink = document.createElement('a');
  fallbackLink.className = 'video-fallback-link';
  fallbackLink.href = getYouTubeWatchUrl(videoId);
  fallbackLink.target = '_blank';
  fallbackLink.rel = 'noreferrer noopener';
  fallbackLink.textContent = t('videoOpenYoutube', 'Abrir no YouTube');

  fallback.append(fallbackTitle, fallbackReason, fallbackLink);
  frameWrap.appendChild(fallback);

  // Transparent cover blocks YouTube's native UI overlays (logo, title, watermark)
  const shield = document.createElement('div');
  shield.className = 'video-click-shield';
  frameWrap.appendChild(shield);

  const overlay = document.createElement('div');
  overlay.className = 'video-overlay-controls';

  const playBtn = document.createElement('button');
  playBtn.type = 'button';
  playBtn.className = 'video-control-btn play-toggle';
  playBtn.setAttribute('aria-label', t('videoPauseAria', 'Pausar video'));
  playBtn.innerHTML = SVG_PAUSE;

  const muteBtn = document.createElement('button');
  muteBtn.type = 'button';
  muteBtn.className = 'video-control-btn mute-toggle';
  muteBtn.setAttribute('aria-label', t('videoUnmuteAria', 'Ativar som'));
  muteBtn.innerHTML = SVG_MUTED;

  const fsBtn = document.createElement('button');
  fsBtn.type = 'button';
  fsBtn.className = 'video-control-btn fullscreen-toggle';
  fsBtn.setAttribute('aria-label', t('videoFullscreenAria', 'Tela cheia'));
  fsBtn.innerHTML = SVG_FULLSCREEN;

  overlay.append(playBtn, muteBtn, fsBtn);
  frameWrap.appendChild(overlay);
  card.appendChild(frameWrap);
  return card;
}

function createPlaylistStatus(message) {
  const status = document.createElement('p');
  status.className = 'playlist-status';
  status.textContent = message;
  return status;
}

function loadYouTubeIframeApi() {
  if (window.YT?.Player) {
    return Promise.resolve(window.YT);
  }

  if (youTubeApiPromise) {
    return youTubeApiPromise;
  }

  youTubeApiPromise = new Promise((resolve) => {
    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previousReady === 'function') {
        previousReady();
      }
      resolve(window.YT);
    };

    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://www.youtube.com/iframe_api';
    scriptTag.async = true;
    document.head.appendChild(scriptTag);
  });

  return youTubeApiPromise;
}

function updateCardState(card, playerState) {
  const playBtn = card.querySelector('.play-toggle');
  const muteBtn = card.querySelector('.mute-toggle');
  const entry = playerRegistry.get(card.dataset.playerKey);
  if (!entry || !playBtn || !muteBtn) {
    return;
  }

  const isPlaying = playerState === window.YT.PlayerState.PLAYING;
  playBtn.innerHTML = isPlaying ? SVG_PAUSE : SVG_PLAY;
  playBtn.setAttribute('aria-label', isPlaying ? t('videoPauseAria', 'Pausar video') : t('videoPlayAria', 'Reproduzir video'));

  const isMuted = entry.player.isMuted();
  muteBtn.innerHTML = isMuted ? SVG_MUTED : SVG_SOUND_ON;
  muteBtn.setAttribute('aria-label', isMuted ? t('videoUnmuteAria', 'Ativar som') : t('videoMuteAria', 'Desativar som'));
}

function refreshVideoI18n() {
  playerRegistry.forEach(({ card, player }) => {
    updateExpandButton(card, expandedCard === card);
    updateCardState(card, player.getPlayerState());

    const fallbackReason = card.querySelector('.video-fallback-reason');
    if (fallbackReason && card.classList.contains('video-card-has-fallback')) {
      fallbackReason.textContent = t('videoUnavailableHere', 'Este video nao pode ser reproduzido aqui.');
    }

    const fallbackLink = card.querySelector('.video-fallback-link');
    if (fallbackLink) {
      fallbackLink.textContent = t('videoOpenYoutube', 'Abrir no YouTube');
    }
  });
}

window.refreshVideoI18n = refreshVideoI18n;

function bindCardControls(card, key) {
  const playBtn = card.querySelector('.play-toggle');
  const muteBtn = card.querySelector('.mute-toggle');
  const fsBtn = card.querySelector('.fullscreen-toggle');
  if (!playBtn || !muteBtn) {
    return;
  }

  playBtn.addEventListener('click', () => {
    const entry = playerRegistry.get(key);
    if (!entry) {
      return;
    }

    const state = entry.player.getPlayerState();
    if (state === window.YT.PlayerState.PLAYING) {
      entry.player.pauseVideo();
    } else {
      entry.player.playVideo();
    }
  });

  muteBtn.addEventListener('click', () => {
    const entry = playerRegistry.get(key);
    if (!entry) {
      return;
    }

    if (entry.player.isMuted()) {
      entry.player.unMute();
      entry.player.setVolume(100);
    } else {
      entry.player.mute();
    }
    updateCardState(card, entry.player.getPlayerState());
  });

  if (fsBtn) {
    updateExpandButton(card, false);
    fsBtn.addEventListener('click', () => {
      toggleExpandedCard(card, key);
    });
  }
}

async function mountYouTubePlayers(panel, category) {
  if (!shouldUseIframeEmbed) {
    panel.querySelectorAll('.video-card-youtube').forEach((card) => {
      showCardFallback(card, t('videoOpenViaHttp', 'Abra via localhost/http para reproduzir embutido.'));
    });
    return;
  }

  await loadYouTubeIframeApi();

  const cards = panel.querySelectorAll('.video-card-youtube');

  const createPlayerForCard = (card) => {
    const frame = card.querySelector('.video-frame');
    if (!frame || playerRegistry.has(frame.id)) return;

    const key = frame.id;
    card.dataset.playerKey = key;

    const playerVars = {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      rel: 0,
      playsinline: 1,
      loop: 1,
      playlist: card.dataset.videoId,
      vq: 'hd720',
      enablejsapi: 1
    };
    if (safeEmbedOrigin) {
      playerVars.origin = safeEmbedOrigin;
      playerVars.widget_referrer = safeEmbedOrigin;
    }

    const player = new window.YT.Player(frame.id, {
      host: 'https://www.youtube.com',
      videoId: card.dataset.videoId,
      playerVars,
      events: {
        onReady: (event) => {
          event.target.mute();
          event.target.setPlaybackQuality('hd720');
          event.target.setPlaybackQualityRange?.('hd720');
          // Remove thumbnail once player is ready
          const wrap = card.querySelector('.video-frame-wrap');
          if (wrap) wrap.style.backgroundImage = 'none';
          const cardGrid = card.closest('.panel-grid');
          if (cardGrid) {
            applyPanelGridRowClamp(cardGrid, 3);
          }
          syncPlayerSize(card, key);
          updateCardState(card, event.target.getPlayerState());
          if (hasEnteredPortfolio && !panel.classList.contains('hidden')) {
            event.target.playVideo();
          }
        },
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            event.target.playVideo();
          }
          updateCardState(card, event.data);
        },
        onError: (event) => {
          // Common causes: embedding disabled (150/101), invalid ID (2), or origin/referrer/privacy blocks.
          console.error(`Erro YouTube no card ${card.dataset.videoId} (code ${event.data}).`);
          const reasonByCode = {
            2: t('videoInvalidEmbed', 'Video invalido para embed.'),
            5: t('videoHtml5Fail', 'Falha no player HTML5 neste navegador.'),
            100: t('videoRemovedPrivate', 'Video removido ou privado.'),
            101: t('videoEmbedBlocked', 'Este video nao permite incorporacao.'),
            150: t('videoEmbedBlocked', 'Este video nao permite incorporacao.'),
            153: t('videoPrivacyBlocked', 'Configuracao de privacidade/referer bloqueou o player.')
          };
          showCardFallback(card, reasonByCode[event.data] || t('videoEmbedFail', 'Nao foi possivel reproduzir embutido.'));
        }
      }
    });

    playerRegistry.set(key, { player, category, panel, card });
    bindCardControls(card, key);

    const shield = card.querySelector('.video-click-shield');
    if (shield) {
      shield.addEventListener('click', () => {
        const entry = playerRegistry.get(key);
        if (!entry) return;
        const state = entry.player.getPlayerState();
        if (state === window.YT.PlayerState.PLAYING) {
          entry.player.pauseVideo();
        } else {
          entry.player.playVideo();
        }
      });
    }
  };

  // Lazy: mount player only when each card is about to enter viewport
  const cardObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      obs.unobserve(entry.target);
      createPlayerForCard(entry.target);
    });
  }, { rootMargin: '250px 0px' });

  cards.forEach((card) => cardObserver.observe(card));
}

function playVisiblePanelMuted() {
  const visiblePanel = document.querySelector('.panel-grid:not(.hidden)');
  if (!visiblePanel) {
    return;
  }

  playerRegistry.forEach(({ player, panel, card }) => {
    if (panel === visiblePanel) {
      player.mute();
      player.playVideo();
      updateCardState(card, player.getPlayerState());
    } else {
      player.pauseVideo();
    }
  });
}

function pauseAllPlayers() {
  playerRegistry.forEach(({ player }) => {
    player.pauseVideo();
  });
}

function setupPortfolioAutoplay() {
  if (!portfolioSectionEl) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        hasEnteredPortfolio = true;
        playVisiblePanelMuted();
      } else {
        pauseAllPlayers();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(portfolioSectionEl);
}

async function fetchPlaylistFeed(feedUrl, category) {
  // Serve from sessionStorage cache for maximum speed until manual refresh
  const cacheKey = `yt-feed:${feedUrl}`;
  let cachedLegacyXml = '';
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      // Backward compatibility: older sessions may store JSON with { xml, timestamp }.
      if (cached.trim().startsWith('{')) {
        const parsed = JSON.parse(cached);
        if (parsed?.xml && parsed.xml.includes('<feed')) {
          cachedLegacyXml = parsed.xml;
          if (isCacheHealthyForCategory(parsed.xml, category)) {
            sessionStorage.setItem(cacheKey, parsed.xml);
            return parsed.xml;
          }
          sessionStorage.removeItem(cacheKey);
        }
      }

      if (cached.includes('<feed') && isCacheHealthyForCategory(cached, category)) {
        return cached;
      }

      sessionStorage.removeItem(cacheKey);
    }
  } catch { /* sessionStorage unavailable in some browsers */ }

  const endpoints = [
    feedUrl,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`,
    `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`,
    `https://corsproxy.io/?${encodeURIComponent(feedUrl)}`,
    `https://r.jina.ai/http://www.youtube.com/feeds/videos.xml?playlist_id=${encodeURIComponent(playlistByCategory[category] || '')}`
  ];

  const fetchWithTimeout = async (url, timeoutMs = 4500) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      return await fetch(url, { signal: controller.signal });
    } finally {
      clearTimeout(timer);
    }
  };

  for (const endpoint of endpoints) {
    try {
      const response = await fetchWithTimeout(endpoint);
      if (!response.ok) {
        continue;
      }
      let text = await response.text();
      if (endpoint.includes('/get?url=')) {
        try {
          const wrapped = JSON.parse(text);
          text = wrapped?.contents || '';
        } catch {
          // ignore parse errors and continue validation below
        }
      }
      if (text.includes('<feed') && text.includes('<entry')) {
        try { sessionStorage.setItem(cacheKey, text); } catch { /* quota exceeded */ }
        return text;
      }
    } catch {
      // Try next endpoint
    }
  }

  if (cachedLegacyXml && isCacheHealthyForCategory(cachedLegacyXml, category)) {
    return cachedLegacyXml;
  }

  throw new Error(t('playlistFetchFail', 'Nao foi possivel obter feed da playlist'));
}

async function loadPlaylistIntoPanel(category) {
  if (loadedPlaylists.has(category)) {
    return;
  }

  const playlistId = playlistByCategory[category];
  const panel = document.getElementById(`${category}-panel`);
  if (!playlistId || !panel) {
    return;
  }

  if (expandedCard && panel.contains(expandedCard)) {
    collapseExpandedCard();
  }
  // Only destroy existing players if panel already has video cards from a previous load
  if (panel.querySelector('.video-card-youtube')) {
    destroyPlayersForPanel(panel);
  }

  panel.innerHTML = '';
  panel.appendChild(createPlaylistStatus(t('playlistLoading', 'Carregando videos da playlist...')));

  try {
    const entries = await getPlaylistEntriesCached(category);

    const cards = entries
      .map((entry, index) => {
        const videoId = entry.videoId;
        const title = entry.title;
        if (!videoId) {
          return null;
        }
        return createEmbedCard(videoId, title, category, index);
      })
      .filter(Boolean);

    if (!cards.length) {
      throw new Error(t('playlistNoVideos', 'Playlist sem videos'));
    }

    panel.innerHTML = '';
    cards.forEach((card) => panel.appendChild(card));
    // mountYouTubePlayers uses IntersectionObserver — no need to await it
    mountYouTubePlayers(panel, category);
    requestAnimationFrame(() => applyPanelGridRowClamp(panel, 3));
    setTimeout(() => applyPanelGridRowClamp(panel, 3), 220);
    loadedPlaylists.add(category);
  } catch (error) {
    panel.innerHTML = '';
    panel.appendChild(createPlaylistStatus(t('playlistLoadFail', 'Nao foi possivel carregar automaticamente agora. Tente recarregar a pagina.')));
    console.error(`Erro ao carregar playlist ${category}:`, error);
  }
}

// Load the visible tab first, then remaining categories one by one in background
function initializePlaylistPanels() {
  const firstActiveTab = document.querySelector('.panel-tab.active');
  const firstCategory = firstActiveTab?.dataset.category || 'outfits';
  const remainingCategories = Object.keys(playlistByCategory).filter((category) => category !== firstCategory);

  // Prime all categories in memory so tab switches are immediate.
  getPlaylistEntriesCached(firstCategory);
  remainingCategories.forEach((category) => {
    getPlaylistEntriesCached(category);
  });

  // Render first category immediately, then warm remaining panels in background.
  loadPlaylistIntoPanel(firstCategory).then(async () => {
    for (const category of remainingCategories) {
      await loadPlaylistIntoPanel(category);
    }
  });
}

dropdownLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.dataset.section;
    const tabElement = document.querySelector(`[data-category="${section}"]`);
    if (tabElement) {
      tabElement.click();
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    if ('ontouchstart' in window) {
      dropdownMenu.classList.remove('open');
    }
  });
});

// Lazy-load playlist when switching tabs
panelTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    loadPlaylistIntoPanel(tab.dataset.category);
    // Re-bind native video card expand for newly visible cards
    setTimeout(() => bindNativeVideoCardExpand(), 50);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    collapseExpandedCard();
  }
});

document.addEventListener('click', (event) => {
  if (!expandedCard) {
    return;
  }

  if (!expandedCard.contains(event.target)) {
    collapseExpandedCard();
  }
});

window.addEventListener('resize', () => {
  if (expandedCard?.dataset.playerKey) {
    syncPlayerSize(expandedCard, expandedCard.dataset.playerKey);
  }
  refreshVisiblePanelGridClamp();
});

async function bootstrap() {
  if (window.location.protocol === 'file:') {
    console.warn('YouTube embed em file:// pode falhar com "Video indisponivel". Fallback com link para YouTube foi habilitado.');
  }

  // Start YT API and feed loading immediately — do NOT wait for version check
  loadYouTubeIframeApi();
  setupScrollReveal();
  setupFaqAccordion();
  setupTestimonialsSlider();
  bindNativeVideoCardExpand();
  initializePlaylistPanels();
  setupPortfolioAutoplay();
  appIsReady = true;

  // Version check runs in background after feeds have already started loading.
  // If remote version changed, it clears stale cache entries and re-fetches
  // only the categories that were invalidated.
  syncPlaylistCacheVersion().then(() => {
    const categories = Object.keys(playlistByCategory);
    const invalidated = categories.filter((cat) => !loadedPlaylists.has(cat));
    if (invalidated.length === 0) {
      return;
    }

    const firstActiveTab = document.querySelector('.panel-tab.active');
    const firstCategory = firstActiveTab?.dataset.category || 'outfits';
    const orderedInvalidated = [
      ...invalidated.filter((cat) => cat === firstCategory),
      ...invalidated.filter((cat) => cat !== firstCategory)
    ];

    (async () => {
      for (const cat of orderedInvalidated) {
        await loadPlaylistIntoPanel(cat);
      }
      if (hasEnteredPortfolio) {
        playVisiblePanelMuted();
      }
    })();
  });
}

bootstrap();
