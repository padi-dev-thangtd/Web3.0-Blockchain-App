import React from "react";
import PrimarySearchAppBar from "src/common/AppBar/AppBar";
import WelcomeWeb3 from "../components/WelcomeWeb3/WelcomeWeb3";
import YouTube from "../components/Youtube/Youtube";

export default function HomeView() {
  return (
    <div>
      <PrimarySearchAppBar />
      <div className="flex flex-col items-center p-[20px]">
        <WelcomeWeb3 />
        <YouTube />
      </div>
    </div>
  );
}
