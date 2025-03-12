type Singer = "STRAY_KIDS" | "TWICE" | "NMIXX" | "ITZY";
type JYP = `${Singer} JYP`;
type JYPEntertainment = {
  [key in JYP]: string[];
};
type thema = "primary" | "secondary" | "waning";
type color = "black" | "white";
type mixcolor = `${thema}-${color}`;

function App() {
  const idol: JYPEntertainment = {
    "ITZY JYP": ["예지", "채령"],
    "NMIXX JYP": ["해원", "설윤"],
    "STRAY_KIDS JYP": ["필릭스", "방찬"],
    "TWICE JYP": ["사나", "모모"],
  };

  const blwh: mixcolor = "primary-black";
  return <></>;
}

export default App;
