//js
// 타스 첫 문법
// 어노테이션
const a: number = 12;
// const b: boolean = !"현서";
const c: string = "수임";
const d: string[] = ["현균", "형준"];
const e: number[] = [1, 2, 3, 4, 5];
const f: { name: string; age: number } = { name: "광녕", age: 30 };
const coffee: { price: number; shots: number; isCaffein: boolean }[] = [
  {
    price: 2000,
    shots: 2,
    isCaffein: true,
  },
  { price: 4000, shots: 4, isCaffein: false },
];
const g: { clothes: string; isFemale: boolean }[] = [
  { clothes: "에이블리", isFemale: true },
  { clothes: "무신사", isFemale: false },
];
const add = (x: number, y: number): string => {
  return String(x + y);
};

const h = (x: number[]): number => {
  return x[0];
};
const test: (x: number) => number = (x: number) => {
  return x;
};

// const onClick: (e:Event) => void;
