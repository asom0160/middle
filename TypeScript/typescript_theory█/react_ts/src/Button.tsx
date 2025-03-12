import { CSSProperties } from "react";
// type MainColor = "#2379ff" | "#002765" | "#d8f3ff";
type ButtonProps = {
  text: string;
  backgroundColor: "blue01" | "blue02" | "blue03";
};
const Button = ({ backgroundColor, text }: ButtonProps) => {
  const blueColor = {
    blue01: "#2379ff",
    blue02: "#002765",
    blue03: "#d8f3ff",
  };
  const buttonstyle: CSSProperties = {
    border: "1px solid #efefef",
    backgroundColor: blueColor[backgroundColor],
    borderRadius: "10px",
    padding: "10px",
  };
  return <button style={buttonstyle}>{text}</button>;
};

export default Button;
