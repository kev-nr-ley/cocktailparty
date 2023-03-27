import React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Button,
  Link,
  VStack,
  HStack,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CocktailImageContainer from "./CocktailImageContainer";

export default function CocktailCard(props) {
  const cocktail = JSON.parse(props.cocktail);
  const [currentCategory, setCurrentCategory] = useState("All");
  
  return (
    <VStack
      alignItems='flex-start'
      w='100%'
      h='100%'
      minW='300px'
      maxW='32rem'
      key={cocktail.name}
      border='4px solid black'
      m='1rem'
      p='1rem'
      {...props}>
      <Heading as='h3' fontSize='1.5rem'>
        {cocktail.name}
      </Heading>

      <HStack justifyContent={"space-between"}>
        <Text>
          {cocktail.ingredients.map((ingredient, index) => {
            return (
              <Text as='span' key={index} m='0.25rem'>
                {ingredient.amount} {ingredient.unit} {ingredient.ingredient}
                {ingredient.special ? ingredient.special : null} <br />
              </Text>
            );
          })}
          <Text as='span' fontStyle={"italic"}>
            {cocktail.garnish}
          </Text>
        </Text>

        <CocktailImageContainer
          alignSelf='flex-start'
          justifySelf='flex-start'
          filename={cocktail.glass}
          w='50%'
        />
      </HStack>
      {/* Add new line on each preparation sentence */}

      {cocktail.preparation ? (
        <Text whiteSpace={"pre-line"}>{cocktail.preparation} </Text>
      ) : null}
    </VStack>
  );
}
