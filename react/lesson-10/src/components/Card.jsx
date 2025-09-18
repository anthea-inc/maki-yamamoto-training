// src/components/Card.jsx

import { styled } from "../styled-system/jsx";

const CardContainer = styled("div");
const CardTitle = styled("h2");
const CardBody = styled("div");

const Card = ({ title, children }) => {
  return (
    <CardContainer
      border="1px solid"
      borderColor="gray.200"
      borderRadius="lg"
      boxShadow="md"
      p="4"
      bg="white"
      maxW="lg"
      mx="auto"
      my="4"
    >
      <CardTitle fontSize="xl" mb="2" fontWeight="bold">
        {title}
      </CardTitle>
      <CardBody fontSize="md" color="gray.700">
        {children}
      </CardBody>
    </CardContainer>
  );
};

export default Card;
