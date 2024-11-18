import { useEffect, useState } from "react";
import HeroContent from "./HeroContent";
import HeroForm from "./HeroForm";
import { Data } from "../../utils/interfaces";
import { toast } from "react-toastify";

const Hero: React.FC = () => {
  const [user, setUser] = useState<Data | null>(null);


  const handleSubmit = (data: Data) => {
    setUser(data);
  };

  useEffect(() => {
    if (user && !toast.isActive("success-toast")) {
      toast.success(`We'll write you on ${user.email} ASAP`, {
        toastId: "success-toast",
      });

      const timer = setTimeout(() => setUser(null), 4000);

      return () => clearTimeout(timer);
    }
  }, [user]);

  return (
    <div>
      <HeroContent />
      <HeroForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Hero;
