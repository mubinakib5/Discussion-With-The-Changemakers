import NextLink from 'next/link';
import PropTypes from 'prop-types';

const Link = ({ href, children, className, onClick, ...rest }) => {
  // Handle external links
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a 
        href={href} 
        className={className}
        onClick={onClick}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  // Handle internal links
  return (
    <NextLink 
      href={href} 
      className={className} 
      onClick={onClick}
      {...rest}
    >
      {children}
    </NextLink>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Link;
