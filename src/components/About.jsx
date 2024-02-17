import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
     
      color="black"
    >
      <Box p="4" maxWidth="800px" mx="auto">
        <Heading as="h1" size="xl" mb="4" textAlign="center">
          About Our Note App
        </Heading>
        <Text fontSize="lg" mb="8" textAlign="center">
          Welcome to our Note App! This app is designed to help you organize
          your notes efficiently.
        </Text>
        <Heading as="h2" size="lg" mb="4">
          Technologies Used:
        </Heading>
        <UnorderedList>
          <ListItem>Backend: Node.js, Express.js</ListItem>
          <ListItem>Deployment: Render</ListItem>
          <ListItem>Frontend: React, Chakra UI</ListItem>
          <ListItem>Languages: JavaScript, HTML</ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default About;