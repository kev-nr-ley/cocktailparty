import { useState, useEffect } from "react";
import cocktailDataJSON from "/src/assets/iba-cocktails.json";
import CocktailCard from "./components/CocktailCard";
import CocktailDropdown from "./components/CocktailDropdown";
import CocktailCategories from "./components/CocktailCategories";
import CocktailList from "./components/CocktailList";

import { Flex, Heading, VStack } from "@chakra-ui/react";

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
    <VStack>
      <Heading>Cocktail Party</Heading>

      <Flex
        m=' 0 auto'
        overflowX='hidden'
        overflowY='hidden'
        minW='100vw'
        maxW='100%'
        p='2rem'
        justifyContent={"space-between"}
        flexDirection={["column", "column", "row", "row"]}
        alignItems={["center", "center", "flex-start", "flex-start"]}>
        <VStack>
          {/* <CocktailList cocktaildata={cocktailData} setcocktail={setCocktail} /> */}
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
    </VStack>
  );
}

export default App;
