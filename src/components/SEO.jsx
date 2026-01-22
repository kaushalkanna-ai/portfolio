import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url, type = 'website' }) => {
    const siteTitle = 'Kaushal Dontula | Engineering & Product';
    const siteDescription = 'Senior Engineering Executive architecting scalable AI & Cloud solutions. View my portfolio for projects in Machine Learning, Microservices, and Strategic Leadership.';
    const siteUrl = 'https://dontula.com';
    const defaultImage = 'https://dontula.com/images/social-preview.webp';

    const fullTitle = title ? `${title} | Kaushal Dontula` : siteTitle;
    const metaDescription = description || siteDescription;
    const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image.replace(/^\//, '')}`) : defaultImage;
    const metaUrl = url ? `${siteUrl}${url.replace(/^\//, '')}` : siteUrl;

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Kaushal Dontula",
        "jobTitle": "Engineering & Product",
        "description": metaDescription,
        "url": siteUrl,
        "image": metaImage,
        "sameAs": [
            "https://www.linkedin.com/in/kaushaldontula/",
            "https://github.com/kaushalkanna-ai"
        ],
        "knowsAbout": [
            "Artificial Intelligence",
            "Machine Learning",
            "Cloud Architecture",
            "Microservices",
            "Product Strategy",
            "Engineering Leadership"
        ]
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={metaUrl} />
            <meta name="author" content="Kaushal Dontula" />
            <meta name="robots" content="index, follow" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:site_name" content="Kaushal Dontula Portfolio" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={metaImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(personSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
