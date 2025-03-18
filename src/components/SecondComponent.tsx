import React from "react";

interface Props {
  name: string;
}

const SecondComponent = (props: Props) => {
  return (
    <div>
      <p>Destructuring component</p>
      <p>O nome é {props.name}</p>
    </div>
  );
};

export default SecondComponent;
