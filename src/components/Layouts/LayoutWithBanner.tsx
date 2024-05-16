import React from 'react';

import Banner from '../Banner/Banner';

const LayoutWithBanner: React.FC<{ childComponent?: React.ReactNode }> = ({ childComponent }) => (
  <>
    <Banner />
    {childComponent}
  </>
);


export default LayoutWithBanner;
