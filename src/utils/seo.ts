import type { ClinicConfig } from '../config/clinic';

export function getStructuredData(config: ClinicConfig) {
    const {
        name,
        url,
        phone,
        address,
        geo,
        hours,
        social,
        reviews,
        cityInfo
    } = config;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalBusiness",
                "@id": `${url}/#organization`,
                "name": name,
                "alternateName": config.shortName,
                "url": url,
                "logo": {
                    "@type": "ImageObject",
                    "url": `${url}/images/logo.png`
                },
                "image": `${url}/images/clinica.jpg`,
                "description": cityInfo.description || config.seo.description,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": `${address.street}${address.complement ? ` - ${address.complement}` : ''}`,
                    "addressLocality": address.city,
                    "addressRegion": address.state,
                    "postalCode": address.zipCode,
                    "addressCountry": "BR"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": geo.latitude,
                    "longitude": geo.longitude
                },
                "telephone": phone.raw,
                "priceRange": "$$",
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": hours.weekdays.open,
                        "closes": hours.weekdays.lunch?.start || "12:00"
                    },
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": hours.weekdays.lunch?.end || "13:00",
                        "closes": hours.weekdays.close
                    },
                    ...(hours.saturday ? [{
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": "Saturday",
                        "opens": hours.saturday.open,
                        "closes": hours.saturday.close
                    }] : [])
                ],
                "sameAs": [
                    social.instagram.url,
                    social.facebook.url,
                    social.youtube.url,
                    social.tiktok?.url,
                    social.linkedin?.url
                ].filter(Boolean),
                "parentOrganization": {
                    "@type": "Organization",
                    "name": "Emagrecentro",
                    "url": "https://emagrecentro.com.br"
                },
                "medicalSpecialty": ["WeightLossProgram", "Nutrition", "Aesthetics"],
                "availableService": [
                    {
                        "@type": "MedicalProcedure",
                        "name": "Método 4 Fases",
                        "description": "Protocolo de emagrecimento científico em 4 fases"
                    },
                    {
                        "@type": "MedicalProcedure",
                        "name": "Auriculoterapia",
                        "description": "Técnica para controle de apetite e ansiedade"
                    },
                    {
                        "@type": "MedicalProcedure",
                        "name": "Tratamentos Estéticos",
                        "description": "Radiofrequência, carboxiterapia, lipocavitação"
                    }
                ],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": reviews.googleRating.toString(),
                    "reviewCount": reviews.googleReviewCount.toString()
                },
                "areaServed": [
                    {
                        "@type": "City",
                        "name": address.city,
                        "sameAs": `https://pt.wikipedia.org/wiki/${address.city.replace(/ /g, '_')}`
                    }
                ]
            },
            {
                "@type": "WebSite",
                "@id": `${url}/#website`,
                "url": url,
                "name": name,
                "description": config.seo.description,
                "publisher": {
                    "@id": `${url}/#organization`
                },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": `${url}/blog?q={search_term_string}`,
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${url}/#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": url
                    }
                ]
            }
        ]
    };
}
