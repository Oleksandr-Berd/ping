import * as SC from "./SharedLayoutStyled"

import Hero from "../../components/Hero/Hero";
import Board from "../../components/Board/Board";

const SharedLayout = () => {
   
  return (
    <SC.SharedLayoutCustom>
      <Hero />
      <Board/>
    </SC.SharedLayoutCustom>
  );
};

export default SharedLayout;
