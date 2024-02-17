import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";

const Notecard = ({ noteID, title, body, fetchNotes }) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedBody, setUpdatedBody] = useState(body);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://notes-app-usmj.onrender.com/notes/${noteID}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Note deleted successfully");

      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.patch(
        `https://notes-app-usmj.onrender.com/notes/${noteID}`,
        {
          title: updatedTitle,
          body: updatedBody,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Note updated successfully");
      setIsModalOpen(false);

      fetchNotes();
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      bg="white"
      maxW="400px"
      w="100%"
      mb={4}
    >
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        {title}
      </Text>
      <Text>{body}</Text>
      <Flex mt={4}>
        <Button  mr={2} onClick={handleEdit}>
          Edit
        </Button>
        <Button colorScheme="red" onClick={handleDelete}>
          Delete
        </Button>
      </Flex>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title:</FormLabel>
              <Input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Body:</FormLabel>
              <Textarea
                value={updatedBody}
                onChange={(e) => setUpdatedBody(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button  onClick={handleUpdate}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Notecard;