import * as SC from "../Board/BoardStyled"

import boardImg from "../../assets/images/illustration-dashboard.png";

const Board: React.FC = () => {
  return (
    <SC.BoardCustom>
      <img src={boardImg} alt="dashboard" />
    </SC.BoardCustom>
  );
};

export default Board;
