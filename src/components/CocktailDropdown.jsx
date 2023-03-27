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
export default function CocktailDropdown(props) {
  const { cocktaildata, setcocktail } = props;

  return (
    <Select
      border='2px solid black'
      fontSize='1rem'
      m='1rem'
      bg='white'
      placeholder='Pick a Cocktail'
      p='1rem'
      onChange={(e) => {
        setcocktail(e.target.value);
      }}>
      {cocktaildata.map((cocktail) => {
        return (
          <option
            as={Text}
            fontWeight='500'
            fontSize='1.25rem'
            key={cocktail.name}
            value={JSON.stringify(cocktail)}>
            {cocktail.name}
          </option>
        );
      })}
    </Select>
  );
}
