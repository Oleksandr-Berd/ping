import { useState } from "react";
import HeroContent from "./HeroContent";
import HeroForm from "./HeroForm";
import { Data } from "../../utils/interfaces";

const Hero:React.FC = () => {
    const [user, setUser] = useState<{} | null>(null)

    const handleSubmit = (data: Data) => setUser(user);

    return (
      <div>
        <HeroContent />
        <HeroForm handleSubmit={handleSubmit} />
      </div>
    );
}
 
export default Hero;