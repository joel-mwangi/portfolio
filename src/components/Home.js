import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProfilePicture from './ProfilePicture'

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background: linear-gradient(to right, #4caf50, #81c784);
  color: white;
  text-align: center;
`;

const Button = styled(motion.button)`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #fff;
  color: #4caf50;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;

function Home() {
  return (
    <HeroSection>
      <ProfilePicture />
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Hi, I'm Joel Mwangi Gachihi, a passionate developer.
      </motion.p>
      <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Explore My Work
      </Button>
    </HeroSection>
  );
}

export default Home;
