import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | NexusItera`;

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || 'NexusItera - Innovative Software Solutions for Businesses and Banks.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description || 'NexusItera - Innovative Software Solutions for Businesses and Banks.';
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
};