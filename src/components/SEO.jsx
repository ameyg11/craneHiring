import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title} | ARM Cranes</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="crane hiring, heavy lift, construction equipment, mobile cranes, tower cranes, crawler cranes" />
    </Helmet>
  );
};

export default SEO;