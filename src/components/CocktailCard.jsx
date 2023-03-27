import React from "react";
import { Text, Heading, VStack, HStack } from "@chakra-ui/react";
import CocktailImageContainer from "./CocktailImageContainer";

export default function CocktailCard(props) {
  const cocktail = JSON.parse(props.cocktail);

  return (
    <VStack
      alignItems='flex-start'
      h='100%'
      minW='360px'
      w='360px'
      key={cocktail.name}
      border='4px solid black'
      m='1rem'
      p='1rem'
      {...props}>
      <Heading as='h3' fontSize='1.5rem'>
        {cocktail.name}
      </Heading>

      <HStack justifyContent={"space-between"} w='100%'>
        <Text alignSelf='flex-start' mt='1rem'>
          {cocktail.glass} glass <br />
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
          filename={cocktail.glass}
          w='8rem'
        />
      </HStack>

      {/* Add new line on each preparation sentence */}
      {cocktail.preparation ? (
        <Text whiteSpace={"pre-line"}>{cocktail.preparation} </Text>
      ) : null}
    </VStack>
  );
}
