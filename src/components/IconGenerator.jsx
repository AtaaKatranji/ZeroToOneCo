import React from 'react';

import { StarRate } from '../assets';

const IconGenerator = ({ numberOfIcons }) => {
  const icons = Array.from({ length: numberOfIcons }, (_, index) => (
    <img 
      src={StarRate}
      key={index} className="h-5 w-5 mx-2 mb-7 " />
  ));

  return <div className="flex">{icons}</div>;
};

export default IconGenerator;
