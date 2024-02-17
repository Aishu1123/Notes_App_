import React from 'react';
import { Flex, Box, Heading, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex align="center" justify="space-between" p="4" bg="black" color="white">
      <Box>
        <Heading size="md">NotesApp</Heading>
      </Box>
      <Center>
        <Box>
          <Link to="/" style={{ textDecoration: 'none', marginRight: '70px' }}>Home</Link>
          <Link to="/about" style={{ textDecoration: 'none',  marginRight: '70px' }}>About</Link>
          <Link to="/notes" style={{ textDecoration: 'none',  marginRight: '70px' }}>Notes</Link>
          <Link to="/login" style={{ textDecoration: 'none',  marginRight: '70px' }}>Login</Link>
          <Link to="/signup" style={{ textDecoration: 'none', marginRight: '70px' }}>Signup</Link>
        </Box>
      </Center>
    </Flex>
  );
}

export default Navbar;
