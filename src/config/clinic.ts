/**
 * ============================================================================
 * CONFIGURAÇÃO DA CLÍNICA - EMAGRECENTRO CARLOS BARBOSA
 * ============================================================================
 *
 * INSTRUÇÕES PARA CRIAR SITE DE OUTRA CIDADE (ex: Garibaldi):
 * -----------------------------------------------------------
 * 1. Copie todo este repositório para um novo repositório
 * 2. Altere APENAS este arquivo (clinic.ts) com os dados da nova cidade
 * 3. O resto do código permanece IGUAL - não precisa mudar nada
 *
 * O QUE MUDAR PARA CADA CIDADE:
 * - name, shortName, slug, city → Nome e identificação
 * - domain, url → Domínio do novo site
 * - phone → Número de WhatsApp da clínica
 * - address, geo → Endereço e coordenadas do Google Maps
 * - social → Redes sociais da clínica (criar novas para cada cidade)
 * - analytics → IDs do Google Analytics/Ads/Meta Pixel (criar novos)
 * - cityInfo → IMPORTANTE: Dados únicos da cidade (IDH, destaques, descrição)
 * - seo → Keywords específicas da cidade
 * - reviews → Avaliações do Google da clínica
 *
 * O QUE NÃO MUDAR:
 * - colors → Manter as cores da marca Emagrecentro
 * - O visual/layout do site → Identidade da franquia
 *
 * ============================================================================
 */

export const clinicConfig = {
  // ============================================
  // IDENTIFICAÇÃO DA CLÍNICA
  // ============================================
  // MUDAR: Ajuste para o nome da sua cidade
  name: 'Emagrecentro Carlos Barbosa',
  shortName: 'Emagrecentro CB',
  slug: 'carlos-barbosa', // usado em URLs, sem espaços ou acentos
  city: 'Carlos Barbosa',
  state: 'RS',
  region: 'Serra Gaúcha',

  // ============================================
  // DOMÍNIO E URLs
  // ============================================
  // MUDAR: Coloque o domínio da nova clínica
  domain: 'emagrecentrocarlosbarbosa.com.br',
  url: 'https://emagrecentrocarlosbarbosa.com.br',

  // ============================================
  // CONTATO
  // ============================================
  // MUDAR: Número de WhatsApp da clínica
  phone: {
    display: '(54) 99338-8577', // formato para exibição
    whatsapp: '5554993388577', // formato para link (sem +, sem -)
    raw: '+5554993388577', // formato internacional
  },

  // ============================================
  // ENDEREÇO
  // ============================================
  // MUDAR: Endereço completo da clínica
  address: {
    street: 'Rua Valter Jobim, 523',
    complement: 'Sala 06', // deixe vazio '' se não tiver
    neighborhood: 'Centro',
    city: 'Carlos Barbosa',
    state: 'RS',
    zipCode: '95185-000',
    country: 'Brasil',
    full: 'Rua Valter Jobim, 523 - Sala 06, Centro, Carlos Barbosa - RS, 95185-000',
  },

  // ============================================
  // GEOLOCALIZAÇÃO (para SEO local e mapa)
  // ============================================
  // MUDAR: Coordenadas do Google Maps da clínica
  // Como encontrar: Abra Google Maps, clique com botão direito no local, copie as coordenadas
  geo: {
    latitude: -29.2975,
    longitude: -51.5025,
  },

  // ============================================
  // HORÁRIO DE FUNCIONAMENTO
  // ============================================
  // MUDAR: Se os horários forem diferentes
  hours: {
    weekdays: { open: '08:00', close: '20:00', lunch: { start: '12:00', end: '13:00' } },
    saturday: { open: '08:00', close: '12:00' },
    sunday: null, // null = fechado
    display: [
      { day: 'Segunda a Sexta', hours: '8h às 12h e 13h às 20h' },
      { day: 'Sábado', hours: '8h às 12h' },
      { day: 'Domingo', hours: 'Fechado' },
    ],
  },

  // ============================================
  // REDES SOCIAIS
  // ============================================
  // MUDAR: Criar redes sociais específicas para cada clínica
  // IMPORTANTE: Cada cidade deve ter suas próprias redes sociais
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
  // MUDAR: Criar novos IDs para cada clínica no Google Analytics, Google Ads e Meta
  // Cada clínica deve ter seus próprios IDs para rastrear separadamente
  analytics: {
    googleAnalyticsId: 'G-DG4GERJZX2', // Google Analytics 4
    googleAdsId: 'AW-10775545574', // Google Ads
    metaPixelId: '602864245324270', // Meta/Facebook Pixel
  },

  // ============================================
  // INFORMAÇÕES DA CIDADE
  // ============================================
  // MUDAR: Este é o conteúdo que diferencia cada site!
  // Pesquise sobre a cidade e coloque informações únicas
  //
  // Para CARLOS BARBOSA: Terra da Tramontina, alto IDH
  // Para GARIBALDI: Capital do Espumante, turismo, vinícolas
  //
  cityInfo: {
    population: '30.420',
    idh: '0,796',
    idhRank: '2º melhor do RS',
    highlight: 'Terra da Tramontina e da Santa Clara', // Frase de destaque da cidade
    description:
      'Carlos Barbosa é uma das cidades com melhor qualidade de vida do Brasil, com o 2º melhor IDH do Rio Grande do Sul. Terra da Tramontina e da Cooperativa Santa Clara, nossa cidade valoriza a saúde e o bem-estar de seus moradores.',
    // keyFacts: 4 cards que aparecem na seção "Orgulho de estar em [cidade]"
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
  // MUDAR: Keywords específicas para cada cidade
  seo: {
    title: 'Emagrecentro Carlos Barbosa | Centro de Emagrecimento e Estética',
    description:
      'Emagrecentro Carlos Barbosa - Centro de Emagrecimento e Estética na Serra Gaúcha. Método 4 Fases cientificamente comprovado. Agende sua avaliação gratuita.',
    keywords: [
      'emagrecimento carlos barbosa',
      'clínica de emagrecimento serra gaúcha',
      'emagrecentro carlos barbosa', // MUDAR nome da cidade
      'método 4 fases',
      'perder peso carlos barbosa', // MUDAR nome da cidade
      'estética carlos barbosa', // MUDAR nome da cidade
      'tratamento para emagrecer',
      'dieta',
      'nutrição',
    ],
  },

  // ============================================
  // CORES DA MARCA
  // ============================================
  // NÃO MUDAR: Manter as cores da marca Emagrecentro para todas as clínicas
  colors: {
    primary: '#e06455', // vermelho Emagrecentro
    secondary: '#eab308', // dourado
    accent: '#22c55e', // verde
  },

  // ============================================
  // AVALIAÇÕES DO GOOGLE
  // ============================================
  // MUDAR: Coloque as avaliações reais do Google Meu Negócio da clínica
  reviews: {
    googleRating: 4.9,
    googleReviewCount: 127,
  },
};

// ============================================================================
// FUNÇÕES UTILITÁRIAS - NÃO PRECISA MUDAR
// ============================================================================

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
