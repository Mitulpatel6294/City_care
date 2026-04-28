import { Helmet } from 'react-helmet-async';

const DEFAULTS = {
  title: 'City Care Hospital Surat | Best Hospital in Surat | 24/7 Emergency',
  description:
    'Top-rated hospital in Surat with expert doctors, 24/7 emergency care, and affordable treatment. Book your appointment today.',
  keywords:
    'hospital in surat, best doctor surat, emergency hospital surat, children hospital surat, heart specialist surat',
  canonical: 'https://yourhospital.com',
  ogTitle: 'Best Hospital in Surat — Quality Care You Can Trust',
  ogDescription: 'Expert doctors, modern facilities, 24/7 emergency care in Surat.',
};

export function Seo({
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  keywords = DEFAULTS.keywords,
  canonical = DEFAULTS.canonical,
  ogTitle = DEFAULTS.ogTitle,
  ogDescription = DEFAULTS.ogDescription,
  robots = 'index, follow',
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}

