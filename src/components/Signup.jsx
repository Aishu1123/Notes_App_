import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  
  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://notes-app-usmj.onrender.com/users/register",
        {
          username,
          email,
          password,
          city,
        }
      );
      setShowModal(true);
      setModalMessage("Registration successful");
    } catch (error) {
      setShowModal(true);
      if (error.response && error.response.status === 400) {
        setModalMessage("Email already exists. Please try with another email.");
      } else {
        setModalMessage("Registration failed. Please try again later.");
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    if (modalMessage === "Registration successful") {
      navigate("/login"); 
    }
  };

  return (
    <Flex
      
      color="black"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        p={8}
        width="30%"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        mt={-10}
      >
        <form onSubmit={handleSubmit}>
          <Box textAlign="center" mb={4}>
            <h1 style={{ fontSize: "40px", fontWeight: "700" }}>Signup</h1>
          </Box>

          <FormControl id="username" mb={4}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsername}
            />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmail}
            />
          </FormControl>

          <FormControl id="password" mb={6}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePassword}
            />
          </FormControl>

          <FormControl id="city" mb={6}>
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              placeholder="Enter your city"
              value={city}
              onChange={handleCity}
            />
          </FormControl>

          <Button type="submit"  width="full">
            Sign Up
          </Button>
        </form>
      </Box>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registration Status</ModalHeader>
          <ModalBody>{modalMessage}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Signup;