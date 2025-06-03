import Head from 'next/head';
import PropTypes from 'prop-types';

/**
 * NextSEO component for pages that need additional SEO beyond the metadata API
 * This is used for dynamic content where the metadata API can't be used
 */
const NextSEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  ogType = "website",
  twitterCard = "summary_large_image" 
}) => {
  const siteName = "Discussion With The Changemakers";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = "Discussion with the Changemakers is a youth-driven platform empowering young people to address urban challenges through innovation, dialogue, and collaboration with city leaders.";
  const defaultImage = "/images/dwc-social-share.jpg";
  
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
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Head>
  );
};

NextSEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  twitterCard: PropTypes.string
};

export default NextSEO;
