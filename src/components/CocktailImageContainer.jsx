import React from "react";

import { Image } from "@chakra-ui/react";
export default function CocktailImageContainer(props) {
  const path = "/glasses/";
  const type = ".png";

  return <Image src={path + props.filename + type} alt='cocktail' {...props} />;
}

