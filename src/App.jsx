import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cocktailDataJSON from "/src/assets/iba-cocktails.json";
import CocktailCard from "./components/CocktailCard";
import CocktailDropdown from "./components/CocktailDropdown";
import CocktailCategories from "./components/CocktailCategories";
import CocktailList from "./components/CocktailList";

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

function App() {
  const cocktailData = cocktailDataJSON;
  const [cocktail, setCocktail] = useState("");
  const [showCocktailCard, setShowCocktailCard] = useState(false);

  useEffect(() => {
    if (cocktail !== "") {
      setShowCocktailCard(true);
    } else {
      setShowCocktailCard(false);
    }
  }, [cocktail]);

  return (
    <Flex
      m=' 0 auto'
      minH='fit-content'
      overflowX='hidden'
      minW='100vw'
      maxW='100%'
      p='2rem'
      flexDirection={["column", "column", "row", "row"]}
      alignItems={["center", "center", "flex-start", "flex-start"]}>
      <VStack w='100%'>
        <Heading>Cocktail Party</Heading>
        {/* <CocktailDropdown
          cocktaildata={cocktailData}
          setcocktail={setCocktail}
          w='100%'
        /> */}
        <CocktailCategories
          cocktaildata={cocktailData}
          setcocktail={setCocktail}
          gap='1rem'
        />
      </VStack>

      {/* Cocktail Display */}
      {showCocktailCard ? <CocktailCard cocktail={cocktail} /> : null}

      {/* ---------------------------- */}
    </Flex>
  );
}

export default App;
