import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SignIn />
    </main>
  );
};
export default page;
