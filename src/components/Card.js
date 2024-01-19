import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box
      maxW='sm'
      backgroundColor='#FFFFFF'
      borderRadius='10'
    >
      <Box
      >
        <Image
          src={imageSrc}
          alt='Project Image'
          borderRadius='10'

        />
      </Box>
      <Heading
        color='black'
        p={2}
        paddingTop={4}
        as='h5' size='sm'
      >
        {title}
      </Heading>
      <Text
        color='black'
        p={2}
        fontSize='xs'
      >
        {description}
      </Text>
      <Text
        color='black'
        p={2}
        fontWeight="bold"
        fontSize='xs'
      >
        See More <FontAwesomeIcon icon={faArrowRight} />
      </Text>
    </Box>
  )
    ;
};

export default Card;
