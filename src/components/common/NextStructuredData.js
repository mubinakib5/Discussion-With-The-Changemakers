import Head from 'next/head';
import PropTypes from 'prop-types';

const NextStructuredData = ({ type, data }) => {
  let structuredData = {};

  switch (type) {
    case 'event':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: data.name,
        startDate: data.startDate,
        endDate: data.endDate,
        location: {
          '@type': 'Place',
          name: data.location.name,
          address: {
            '@type': 'PostalAddress',
            addressLocality: data.location.addressLocality,
            addressRegion: data.location.addressRegion,
            addressCountry: data.location.addressCountry
          }
        },
        image: data.image,
        description: data.description,
        organizer: {
          '@type': 'Organization',
          name: data.organizer.name,
          url: data.organizer.url
        }
      };
      break;
    case 'organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: data.name,
        url: data.url,
        logo: data.logo,
        sameAs: data.socialLinks,
        description: data.description
      };
      break;
    case 'article':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.headline,
        image: data.image,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        author: {
          '@type': 'Person',
          name: data.author.name
        },
        publisher: {
          '@type': 'Organization',
          name: data.publisher.name,
          logo: {
            '@type': 'ImageObject',
            url: data.publisher.logo
          }
        },
        description: data.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url || 'https://discussionwiththechangemakers.com'
        }
      };
      break;
    default:
      structuredData = {};
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

NextStructuredData.propTypes = {
  type: PropTypes.oneOf(['event', 'organization', 'article']).isRequired,
  data: PropTypes.object.isRequired
};

export default NextStructuredData;
