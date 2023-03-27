import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Link,
  VStack,
  List,
  ListItem,
  Select,
} from "@chakra-ui/react";

export default function CocktailList(props) {
  const { cocktaildata, setcocktail } = props;
  return (
    <VStack as={List} alignItems='flex-start' border='2px solid black' p='1rem'>
      {cocktaildata.map((cocktail) => {
        return (
          <Text
            as={Text}
            key={cocktail.name}
            w='100%'
            cursor='pointer'
            borderBottom='2px solid black'
            value={cocktail}
            onClick={(e) => {
              setcocktail(JSON.stringify(cocktail));
              console.log("@CocktailList: ", cocktail.name);
            }}>
            {cocktail.name}
          </Text>
        );
      })}
    </VStack>
  );
}
