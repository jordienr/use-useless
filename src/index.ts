import { useState, useEffect } from "react";

/**
 * A completely useless React hook that does absolutely nothing useful
 * @returns An object containing useless information
 */
export const useUseless = () => {
  const [uselessCount, setUselessCount] = useState(0);
  const [uselessMessage, setUselessMessage] = useState("This is useless");

  useEffect(() => {
    const interval = setInterval(() => {
      setUselessCount((prev) => prev + 1);
      if (uselessCount % 10 === 0) {
        setUselessMessage("This is still useless");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [uselessCount]);

  const doUselessThing = () => {
    console.log("Did something useless");
    return null;
  };

  return {
    uselessCount,
    uselessMessage,
    doUselessThing,
    uselessBoolean: Math.random() > 0.5,
    uselessObject: { why: "Because", what: "Nothing" },
  };
};
