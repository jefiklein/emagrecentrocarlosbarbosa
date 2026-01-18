/**
 * EXEMPLO DE CONFIGURAÇÃO PARA GARIBALDI
 *
 * Este arquivo serve como template para criar o site da Emagrecentro Garibaldi.
 * Para usar:
 * 1. Copie este arquivo para o novo projeto
 * 2. Renomeie para clinic.ts
 * 3. Ajuste as informações abaixo
 *
 * O código do site é 100% reutilizável, apenas a configuração muda.
 */

export const clinicConfig = {
  // ============================================
  // IDENTIFICAÇÃO DA CLÍNICA
  // ============================================
  name: 'Emagrecentro Garibaldi',
  shortName: 'Emagrecentro Garibaldi',
  slug: 'garibaldi',
  city: 'Garibaldi',
  state: 'RS',
  region: 'Serra Gaúcha',

  // ============================================
  // DOMÍNIO E URLs
  // ============================================
  domain: 'emagrecentrogaribaldi.com.br',
  url: 'https://emagrecentrogaribaldi.com.br',

  // ============================================
  // CONTATO (ajustar para o número de Garibaldi)
  // ============================================
  phone: {
    display: '(54) XXXXX-XXXX',
    whatsapp: '55549XXXXXXXX',
    raw: '+55549XXXXXXXX',
  },

  // ============================================
  // ENDEREÇO (ajustar para Garibaldi)
  // ============================================
  address: {
    street: 'Rua XXXXX, XXX',
    complement: '',
    neighborhood: 'Centro',
    city: 'Garibaldi',
    state: 'RS',
    zipCode: '95720-000',
    country: 'Brasil',
    full: 'Rua XXXXX, XXX, Centro, Garibaldi - RS, 95720-000',
  },

  // ============================================
  // GEOLOCALIZAÇÃO (ajustar coordenadas)
  // ============================================
  geo: {
    latitude: -29.2553,
    longitude: -51.5339,
  },

  // ============================================
  // HORÁRIO DE FUNCIONAMENTO
  // ============================================
  hours: {
    weekdays: { open: '09:00', close: '18:00' },
    saturday: { open: '09:00', close: '12:00' },
    sunday: null,
    display: [
      { day: 'Segunda a Sexta', hours: '9h às 18h' },
      { day: 'Sábado', hours: '9h às 12h' },
      { day: 'Domingo', hours: 'Fechado' },
    ],
  },

  // ============================================
  // REDES SOCIAIS (criar novas para Garibaldi)
  // ============================================
  social: {
    instagram: {
      url: 'https://www.instagram.com/emagrecentrogaribaldi',
      handle: '@emagrecentrogaribaldi',
    },
    facebook: {
      url: 'https://www.facebook.com/emagrecentrogaribaldi',
      handle: 'emagrecentrogaribaldi',
    },
    youtube: {
      url: 'https://www.youtube.com/@emagrecentrogaribaldi',
      handle: '@emagrecentrogaribaldi',
    },
    tiktok: {
      url: 'https://www.tiktok.com/@emagrecentrogaribaldi',
      handle: '@emagrecentrogaribaldi',
    },
    linkedin: {
      url: 'https://www.linkedin.com/company/emagrecentro-garibaldi',
      handle: 'emagrecentro-garibaldi',
    },
  },

  // ============================================
  // ANALYTICS (criar novos para Garibaldi)
  // ============================================
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX',
    googleAdsId: 'AW-XXXXXXXXXXX',
    metaPixelId: 'XXXXXXXXXXXXXXX',
  },

  // ============================================
  // INFORMAÇÕES DA CIDADE
  // ============================================
  cityInfo: {
    population: '34.335',
    idh: '0,786',
    idhRank: 'Alto IDH',
    highlight: 'Capital Brasileira do Espumante',
    description:
      'Garibaldi é conhecida como a Capital Brasileira do Espumante. Cidade turística da Serra Gaúcha, com forte herança da imigração italiana e vinícolas renomadas. 80% do espumante brasileiro é produzido na região.',
    keyFacts: [
      { label: 'IDH Municipal', value: '0,786' },
      { label: 'Habitantes', value: '34k+' },
      { label: 'Espumante BR', value: '80%' },
      { label: 'Turismo', value: 'Forte' },
    ],
  },

  // ============================================
  // SEO E META TAGS
  // ============================================
  seo: {
    title: 'Emagrecentro Garibaldi | Centro de Emagrecimento e Estética',
    description:
      'Emagrecentro Garibaldi - Centro de Emagrecimento e Estética na Capital do Espumante. Método 4 Fases cientificamente comprovado. Agende sua avaliação gratuita.',
    keywords: [
      'emagrecimento garibaldi',
      'clínica de emagrecimento serra gaúcha',
      'emagrecentro garibaldi',
      'método 4 fases',
      'perder peso garibaldi',
      'estética garibaldi',
      'tratamento para emagrecer',
    ],
  },

  // ============================================
  // CORES (manter padrão Emagrecentro)
  // ============================================
  colors: {
    primary: '#e06455',
    secondary: '#eab308',
    accent: '#22c55e',
  },

  // ============================================
  // AVALIAÇÕES (ajustar conforme reviews)
  // ============================================
  reviews: {
    googleRating: 5.0,
    googleReviewCount: 0,
  },
};

// As funções utilitárias são as mesmas - copiar do clinic.ts original
