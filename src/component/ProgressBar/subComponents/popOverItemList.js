import React from "react";

export const PopOverItemList = ({ instructions }) => {
  return (
    <ul>
      {instructions.map((instruction) => (
        <li key={instruction}>{instruction}</li>
      ))}
    </ul>
  );
};
