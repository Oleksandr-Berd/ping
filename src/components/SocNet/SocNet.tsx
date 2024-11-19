import * as SC from "./SocNetStyled";

import { ReactComponent as FbImg } from "../../assets/images/fbsvg.svg";
import { ReactComponent as TwitterImg } from "../../assets/images/twitter.svg";
import { ReactComponent as InstImg } from "../../assets/images/inst.svg";

const SocNet: React.FC = () => {
  return (
    <SC.SocNetList>
      <li>
        <a href="https://www.facebook.com/sasha.berdichevsky">
          <FbImg />
        </a>
      </li>
      <li>
        <a href="https://x.com/home">
          <TwitterImg />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/berd__man/">
          {" "}
          <InstImg />
        </a>
      </li>
    </SC.SocNetList>
  );
};

export default SocNet;
