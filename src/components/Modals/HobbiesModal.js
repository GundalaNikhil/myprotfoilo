import React from "react";
import {
  HobbiesModalContainer,
  HobbiesGrid,
  HobbyImage,
  HobbyItem,
  HobbyName,
  Title,
  CloseButton,
} from "./ModalStyles/HobbiesModalStyles";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import badminton_logo from "../../gallery/hobby/badminton_logo.png";
import carroms_logo from "../../gallery/hobby/carroms_logo.png";
import cricket_logo from "../../gallery/hobby/cricket_logo.png";
import swim_logo from "../../gallery/hobby/swim_logo.png";
import { motion } from "framer-motion";

const HobbiesModal = ({ onClose }) => {
  const hobbiesData = [
    { name: "Badminton", image: badminton_logo },
    { name: "Carrom", image: carroms_logo },
    { name: "Cricket", image: cricket_logo },
    { name: "Swimming", image: swim_logo },
    { name: "Listening to Music", icon: "🎵" },
    { name: "Cooking", icon: "🍳" },
    { name: "Designing Applications", icon: "💻" },
  ];

  return (
    <HobbiesModalContainer
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
      <Title variant="h3">HOBBIES</Title>
      <HobbiesGrid>
        {hobbiesData.map((hobby, index) => (
          <HobbyItem
            key={index}
            whileHover={{
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            {hobby.image ? (
              <HobbyImage
                src={hobby.image}
                alt={hobby.name}
                as={motion.img}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{
                  duration: 2,
                  repeat: 1,
                  repeatType: "reverse",
                }}
              />
            ) : (
              <Typography
                variant="h2"
                style={{ fontSize: "3rem", marginBottom: "1rem" }}
              >
                {hobby.icon}
              </Typography>
            )}
            <HobbyName variant="subtitle1">{hobby.name}</HobbyName>
          </HobbyItem>
        ))}
      </HobbiesGrid>
    </HobbiesModalContainer>
  );
};

export default HobbiesModal;

// const hobbiesData = [
//   {
//     name: "Cricket",
//     icon: (
//       <path d="M12.5 3.5c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9zm0 2c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm1 3v4h3v2h-3v4h-2v-4h-3v-2h3v-4h2z" />
//     ),
//   },
//   {
//     name: "Badminton",
//     icon: (
//       <path d="M12.5 2.5l-4.5 7 4.5 4.5 7-4.5-7-7zm-1 9.5l-2-2 1-1.5 2 2-1 1.5zm2 0l1-1.5 2 2-1 1.5-2-2zm-3 3l-2-2 1-1.5 2 2-1 1.5zm4 0l-1-1.5 2-2 1 1.5-2 2z" />
//     ),
//   },
//   {
//     name: "Swimming",
//     icon: (
//       <path d="M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.47-.27 1.09-.64 2.2-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.47-.27 1.09-.64 2.2-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2z" />
//     ),
//   },
//   {
//     name: "Carrom",
//     icon: (
//       <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-6-5h12V6H6v2z" />
//     ),
//   },
//   {
//     name: "Listening to Music",
//     icon: (
//       <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
//     ),
//   },
//   {
//     name: "Cooking",
//     icon: (
//       <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
//     ),
//   },
//   {
//     name: "Designing Applications",
//     icon: (
//       <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z" />
//     ),
//   },
// ];
