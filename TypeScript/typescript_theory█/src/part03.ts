//제네릭스

type Champ<T> = {
  name: string;
  position: T;
};

const mini: Champ<string> = {
  name: "미니",
  position: "서폿",
};
type MacMoningHamberger =
  | "베이컨에그"
  | "치킨치즈"
  | "에그"
  | "베이컨 토마토 에그";
type MacMoningSide = "해쉬브라운";
type MacMoningDrink = "아메리카노" | "라떼" | "콜라";

// const a: MacdonaldSet<MacMoningHamberger, MacMoningSide, MacMoningDrink> = {
//   main: "베이컨에그",
//   side: "해쉬브라운",
//   drink: "콜라",
// };
