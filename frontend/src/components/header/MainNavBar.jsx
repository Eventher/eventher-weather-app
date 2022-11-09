/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import MobileNavigation from "./MobileNavigation";
import ComputerNavigation from "./ComputerNavigation";

function MainNavBar() {
  return (
    <>
      <ComputerNavigation />
      <MobileNavigation />
    </>
  );
}

export default MainNavBar;
