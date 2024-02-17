import React, { useState, useEffect } from "react";
import axios from "axios";
import Newnote from "./NewNote";
import Notecard from "./Notecard";
import { Flex, Spinner } from "@chakra-ui/react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not found in localStorage");
        return;
      }

      try {
        const response = await axios.get(
          "https://notes-app-usmj.onrender.com/notes",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setNotes(response.data.notes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching notes:", error);
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found in localStorage");
      return;
    }

    try {
      const response = await axios.get(
        "https://notes-app-usmj.onrender.com/notes",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNotes(response.data.notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  return (
    <Flex justify="center" align="center" minHeight="100vh">
      <div>
        <Newnote fetchNotes={fetchNotes} />
        {loading ? (
          <Spinner />
        ) : (
          notes.map((note) => (
            <Notecard
              mt="100px"
              key={note._id}
              noteID={note._id}
              title={note.title}
              body={note.body}
              fetchNotes={fetchNotes}
            />
          ))
        )}
      </div>
    </Flex>
  );
};

export default Notes;