import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>POKEMON-GALLERY</h1>
    </motion.header>
  );
}

export default Header;

