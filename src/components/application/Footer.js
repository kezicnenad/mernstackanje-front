import React from 'react';

function Footer() {

  return (
    <div className="footer text-center">
      <p>
        {new Date().getFullYear() + "."} Developed with ❤️ Full MERN Stack
        Application
      </p>
    </div>
  );
}

export default Footer;