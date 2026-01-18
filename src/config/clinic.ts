/**
 * Configuração da Clínica
 *
 * Este arquivo centraliza todas as informações específicas da clínica.
 * Para criar um site para outra cidade (ex: Garibaldi), basta duplicar
 * este arquivo e alterar os dados abaixo.
 *
 * Estrutura pensada para fácil replicação:
 * - Carlos Barbosa: emagrecentrocarlosbarbosa.com.br
 * - Garibaldi: emagrecentrogaribaldi.com.br (futuro)
 */

export const clinicConfig = {
  // ============================================
  // IDENTIFICAÇÃO DA CLÍNICA
  // ============================================
  name: 'Emagrecentro Carlos Barbosa',
  shortName: 'Emagrecentro CB',
  slug: 'carlos-barbosa',
  city: 'Carlos Barbosa',
  state: 'RS',
  region: 'Serra Gaúcha',

  // ============================================
  // DOMÍNIO E URLs
  // ============================================
  domain: 'emagrecentrocarlosbarbosa.com.br',
  url: 'https://emagrecentrocarlosbarbosa.com.br',

  // ============================================
  // CONTATO
  // ============================================
  phone: {
    display: '(54) 98163-0905',
    whatsapp: '555481630905',
    raw: '+555481630905',
  },

  // ============================================
  // ENDEREÇO
  // ============================================
  address: {
    street: 'Rua Visconde de Pelotas, 583',
    complement: 'Sala 01',
    neighborhood: 'Centro',
    city: 'Carlos Barbosa',
    state: 'RS',
    zipCode: '95185-000',
    country: 'Brasil',
    full: 'Rua Visconde de Pelotas, 583 - Sala 01, Centro, Carlos Barbosa - RS, 95185-000',
  },

  // ============================================
  // GEOLOCALIZAÇÃO (para SEO local e mapa)
  // ============================================
  geo: {
    latitude: -29.2975,
    longitude: -51.5025,
  },

  // ============================================
  // HORÁRIO DE FUNCIONAMENTO
  // ============================================
  hours: {
    weekdays: { open: '09:00', close: '18:00' },
    saturday: { open: '09:00', close: '12:00' },
    sunday: null, // fechado
    display: [
      { day: 'Segunda a Sexta', hours: '9h às 18h' },
      { day: 'Sábado', hours: '9h às 12h' },
      { day: 'Domingo', hours: 'Fechado' },
    ],
  },

  // ============================================
  // REDES SOCIAIS
  // ============================================
  social: {
    instagram: {
      url: 'https://www.instagram.com/emagrecentrocarlosbarbosa',
      handle: '@emagrecentrocarlosbarbosa',
    },
    facebook: {
      url: 'https://www.facebook.com/emagrecentrocarlosbarbosa',
      handle: 'emagrecentrocarlosbarbosa',
    },
    youtube: {
      url: 'https://www.youtube.com/@emagrecentrocarlosbarbosa',
      handle: '@emagrecentrocarlosbarbosa',
    },
    tiktok: {
      url: 'https://www.tiktok.com/@emagrecentrocb',
      handle: '@emagrecentrocb',
    },
    linkedin: {
      url: 'https://www.linkedin.com/company/emagrecentro-carlos-barbosa',
      handle: 'emagrecentro-carlos-barbosa',
    },
  },

  // ============================================
  // ANALYTICS E TRACKING
  // ============================================
  analytics: {
    googleAnalyticsId: 'G-DG4GERJZX2',
    googleAdsId: 'AW-10775545574',
    metaPixelId: '602864245324270',
  },

  // ============================================
  // INFORMAÇÕES DA CIDADE (para conteúdo local)
  // ============================================
  cityInfo: {
    population: '30.420',
    idh: '0,796',
    idhRank: '2º melhor do RS',
    highlight: 'Terra da Tramontina e da Santa Clara',
    description:
      'Carlos Barbosa é uma das cidades com melhor qualidade de vida do Brasil, com o 2º melhor IDH do Rio Grande do Sul. Terra da Tramontina e da Cooperativa Santa Clara, valoriza a saúde e o bem-estar de seus moradores.',
    keyFacts: [
      { label: 'IDH Municipal', value: '0,796' },
      { label: 'Habitantes', value: '30k+' },
      { label: 'Ranking IDH RS', value: '2º' },
      { label: 'Classes A, B e C', value: '93%' },
    ],
  },

  // ============================================
  // SEO E META TAGS
  // ============================================
  seo: {
    title: 'Emagrecentro Carlos Barbosa | Centro de Emagrecimento e Estética',
    description:
      'Emagrecentro Carlos Barbosa - Centro de Emagrecimento e Estética na Serra Gaúcha. Método 4 Fases cientificamente comprovado. Agende sua avaliação gratuita.',
    keywords: [
      'emagrecimento carlos barbosa',
      'clínica de emagrecimento serra gaúcha',
      'emagrecentro',
      'método 4 fases',
      'perder peso carlos barbosa',
      'estética carlos barbosa',
      'tratamento para emagrecer',
      'dieta',
      'nutrição',
    ],
  },

  // ============================================
  // CORES (para personalização por cidade)
  // ============================================
  colors: {
    primary: '#e06455', // vermelho Emagrecentro
    secondary: '#eab308', // dourado
    accent: '#22c55e', // verde
  },

  // ============================================
  // AVALIAÇÕES
  // ============================================
  reviews: {
    googleRating: 4.9,
    googleReviewCount: 127,
  },
};

// ============================================
// FUNÇÕES UTILITÁRIAS
// ============================================

/**
 * Gera o link do WhatsApp com mensagem pré-definida
 */
export function getWhatsAppLink(message?: string): string {
  const defaultMessage =
    'Olá, vim pelo site e gostaria de saber mais sobre o tratamento';
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://api.whatsapp.com/send?phone=${clinicConfig.phone.whatsapp}&text=${encodedMessage}`;
}

/**
 * Gera o link do Google Maps
 */
export function getGoogleMapsLink(): string {
  const { latitude, longitude } = clinicConfig.geo;
  return `https://www.google.com/maps?q=${latitude},${longitude}`;
}

/**
 * Gera o link do Google Maps embed
 */
export function getGoogleMapsEmbed(): string {
  const { latitude, longitude } = clinicConfig.geo;
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.7!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(clinicConfig.name)}!5e0!3m2!1spt-BR!2sbr`;
}

// Exporta o tipo para uso em outros arquivos
export type ClinicConfig = typeof clinicConfig;
