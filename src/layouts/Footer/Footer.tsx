import * as SC from "./FooterStyled"

import SocNet from "../../components/SocNet/SocNet";

const Footer:React.FC = () => {
    return (
      <SC.FooterCustom>
        <SocNet/>
        <p>© Copyright Ping. All rights reserved.</p>
      </SC.FooterCustom>
    );
}
 
export default Footer;