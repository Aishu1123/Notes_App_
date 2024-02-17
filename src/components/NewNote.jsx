import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const Newnote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://notes-app-usmj.onrender.com/notes",
        {
          title,
          body,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("New note added successfully");
        setTitle("");
        setBody("");
      }
    } catch (error) {
      console.error("Error adding new note:", error);
    }
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      maxW="500px"
      w="100%"
    >
      <Heading as="h2" size="md" mb={4} textAlign="center">
        Add New Note
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Body</FormLabel>
          <Textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter body"
            rows={4}
            required
          />
        </FormControl>
        <Button type="submit"  width="100%">
          Add Note
        </Button>
      </form>
    </Box>
  );
};

export default Newnote;