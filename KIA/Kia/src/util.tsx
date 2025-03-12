type Top = "Tanker" | "Bruiser";
type Jg = "Tanker" | "Bruiser";
type Mid = "Utility" | "Bruiser" | "Magic";
type AD = "AD";
type SP = "Utility" | "Healer";

type LoL = {
  top: Top;
  jg: Jg;
  mid: Mid;
  ad: AD;
  sp: SP;
};
//1. 키오브
type Position = keyof LoL;
//2. 인덱스
type TopIndex = LoL["top"];
//3. 인텍스 시그니쳐
type Test = { [key: string]: string };
//4.
type Test1 = { [key in Mid]: string };

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};
//1. Pick 뽑기
type A = Pick<User, "id" | "name">;
//2. Omit 삭제
type B = Omit<User, "password">;
//3. Partail (모두 옵셔널)
type C = Partial<User>;
//Quiz~~~
type D = Partial<Pick<User, "name" | "email">>;
//4. Required (모두 필수)
type E = Required<Partial<User>>;
//5. Record ()
type Member = "User" | "Admin" | "SuperAdmin";
type F = Partial<Record<Member, number | string>>;
//Quiz2 ( User들의 Key,value는 boolean)
type boo = Partial<Record<keyof User, boolean>>;
//6. Exclude (빼기) | Extract (~만 가져오기)
type G = Exclude<number | boolean | string, boolean>;
type H = Extract<number | boolean | string, boolean>;
