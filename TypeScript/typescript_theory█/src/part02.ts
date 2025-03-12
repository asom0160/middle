//타입 조합 연산자
//1. union type [or(|)]
const a: number | string = "10";
const b: (number | boolean)[] = [true, 12, false];
const c: { name: string; price: number; shots?: number; origin?: string }[] = [
  { name: "아아", price: 2000, shots: 2 },
  { name: "아아", price: 2000, origin: "미국" },
];

//2. intersection type[and(&)]
// const d: number & string
const coffee: { name: string; price: number } & { shots: number } = {
  name: "아아",
  price: 2000,
  shots: 2,
};

//타입 알리아스(type Alias)
//type 별명
// type Umm = number | string;
// const d: Umm = 1;
// type person = { age: number; name: string };
// type student = { major: string; id: number; courses: string[] };
// type Academic = person & student;

// type CoffeeBean = { origin: string; color: string; flaver: string };
// type Ade = { sparkling: boolean; kcal: number };
// type Bread = { ingrident: string[]; yeast: number };
// type Product = { name: string; price: number };

// const saltBread: Bread & Product = {
//   ingrident: ["밀가루", "소금"],
//   yeast: 1,
//   name: "소금빵",
//   price: 3000,
// };
// const lemon: Ade & Product = {
//   sparkling: true,
//   kcal: 200,
//   name: "레몬에이드",
//   price: 3000,
// };
// const restuffCoffee: CoffeeBean & Product = {
//   origin: "미국",
//   color: "검은색",
//   flaver: "많음",
//   name: "아아",
//   price: 2000,
// };

//리터럴 타입 알리아스
type Num = 1 | 2 | 3;
type ShesBeagle = "아메리카노" | "라떼" | "민트";

type Bread = "플랫브래드" | "허니오트" | "오레가노" | "위트" | "화이트";
type Cheese = "슈레드" | "아메리칸" | "모짜렐라";
type Vegitable = "양파" | "피망" | "양상추" | "할라피뇨" | "올리브" | "토마토";
type Source = "허니머스타드" | "소금" | "후추" | "스위트 어니언" | "핫칠리";
type Sudway = {
  bread: Bread;
  cheese: Cheese;
  vegitable: Vegitable[];
  source: Source;
};
const myOrder: Sudway = {
  bread: "플랫브래드",
  cheese: "모짜렐라",
  vegitable: ["양상추", "양파", "토마토"],
  source: "허니머스타드",
};

type Hamberger = "불고기버거" | "상하이버거" | "빅맥버거" | "콰트로치즈버거";
type Side = "초코 츄러스" | "감자튀김" | "애플파이" | "선데이 아이스크림";
type Drink = "콜라" | "제로콜라" | "사이다" | "환타" | "오렌지쥬스";
type SetMenu = {
  main: Hamberger;
  side: Side;
  drink: Drink;
};
// type MacdonaldSet<T extends Hamberger | MacMoningHamberger, U, V> = {
//   main: T;
//   side: U;
//   drink: V;
// };
