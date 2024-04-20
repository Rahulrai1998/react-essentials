import React from "react";

const Tabs = ({ children, buttons, ButtonContainer = "menu" }) => {
  //   const ButtonCotainer = buttonConatiner;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
};

export default Tabs;
