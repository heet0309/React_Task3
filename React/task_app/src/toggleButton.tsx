import React, { useState } from "react";

const ToggleButton = () => {
  const [isToggled, setToggled] = useState<boolean>(false);

  const handleToggle = () => {
    setToggled((oldToggled) => !oldToggled);
  };

  
  return (
    <div>
      <h3>ToggleButton</h3>
      <button onClick={handleToggle}> {isToggled ? "clicked" : "clickme"}</button>
    </div>
  );
};

export default ToggleButton;
