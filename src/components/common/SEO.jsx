"use client";

import { usePathname } from 'next/navigation';
import Head from 'next/head';
import PropTypes from "prop-types";

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  ogType = "website",
  twitterCard = "summary_large_image" 
}) => {
  const pathname = usePathname();
  const siteName = "Discussion With The Changemakers";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = "Discussion with the Changemakers is a youth-driven platform empowering young people to address urban challenges through innovation, dialogue, and collaboration with city leaders.";
  const defaultImage = "/images/dwc-social-share.jpg"; // Replace with your actual image path
  // Use a hardcoded base URL or get it from window.location in client components
  const baseUrl = typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.host}` : 'https://discussionwiththechangemakers.com';
  const canonicalUrl = `${baseUrl}${pathname}`;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  twitterCard: PropTypes.string
};

export default SEO;
