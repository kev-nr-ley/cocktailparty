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
  Grid,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function CocktailCategories(props) {
  const { cocktaildata, setcocktail } = props;
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentCategoryCocktails, setCurrentCategoryCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState({});

  const cocktailCategories = cocktaildata.map((cocktail) => {
    if (cocktail.category === undefined) {
      cocktail.category = "Anytime";
    }
    return cocktail.category;
  });

  const getCocktailsOfCategory = (category) => {
    const cocktailArray = [];

    cocktaildata.filter((cocktail) => {
      if (category === "All") {
        cocktailArray.push(cocktail);
      } else if (cocktail.category === category) {
        cocktailArray.push(cocktail);
      }

      setCurrentCategoryCocktails(cocktailArray);
    });
  };

  const uniqueCategories = [...new Set(cocktailCategories)];
  uniqueCategories.push("All");

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    getCocktailsOfCategory(category);
  };

  return (
    <Flex
      w='100%'
      alignItems='flex-start'
      justifyContent='flex-start'
      {...props}>
      <Grid gridTemplateColumns='repeat(1, 1fr)'>
        {uniqueCategories.map((category, index) => {
          return (
            <Box
              key={index}
              flexShrink='1'
              border='2px solid black'
              transition='all 200ms'
              bg={currentCategory === category ? "yellow.400" : "white"}
              position='relative'
              w='20ch'
              top='2px'
              left='2px'
              boxShadow='4px 4px black'
              onClick={() => handleCategoryClick(category)}
              _hover={{
                boxShadow: "8px 8px black",
                top: "-2px",
                left: "-2px",
                bg: "yellow.300",
              }}
              m='1rem'
              p='1'>
              <Heading fontSize='1.5rem'>{category}</Heading>
            </Box>
          );
        })}
      </Grid>
      <List
        as={Flex}
        flexWrap='wrap'
        alignItems='flex-start'
        justifyContent='flex-start'
        w='100%'>
        {currentCategoryCocktails.map((cocktail, index) => {
          return (
            <ListItem
              key={index}
              value={JSON.stringify(cocktail)}
              m='0.5rem'
              px='0.5rem'
              w='8rem'
              h='4rem'
              border='2px solid black'
              boxShadow='2px 2px black'
              position='relative'
              top='2px'
              left='2px'
              cursor='pointer'
              transition='all 200ms'
              bg={
                selectedCocktail.name === cocktail.name ? "yellow.400" : "white"
              }
              _hover={{
                boxShadow: "8px 8px black",
                top: "-2px",
                left: "-2px",
                bg: "yellow.300",
              }}
              onClick={(e) => {
                setcocktail(JSON.stringify(cocktail));
                setSelectedCocktail(cocktail);
                console.log("@CocktailCategories: ", cocktail.name);
              }}>
              {cocktail.name}
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
}
