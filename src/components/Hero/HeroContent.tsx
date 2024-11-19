import * as SC from "./HeroStyled"

const HeroContent:React.FC = () => {
    return (
      <SC.ContentCon>
        <SC.HeroTitle>
          We are launching <span>soon!</span>{" "}
        </SC.HeroTitle>
        <SC.Subscribe>Subscribe and get notified</SC.Subscribe>
      </SC.ContentCon>
    );
}
 
export default HeroContent