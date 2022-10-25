import PropTypes from 'prop-types';
import React from 'react';

function Container({ children }) {
  return (
    <div className="mx-auto w-[480px] min-w-[320px] sm:w-full md:max-w-screen-md xl:max-w-screen-xl">
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
