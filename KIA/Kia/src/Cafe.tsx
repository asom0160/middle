type Desert = "bakery" | "cookie";
type Drink = "coffee" | "nonCoffee" | "ade" | "tea";

type Open24Hour = Omit<OperationTime, keyof OperationTime>;
type RegularOperation = Required<OperationTime>;

type Unit = { id: number; name: string };
type WithUnit<T> = Unit & T;

type CafeItem = WithUnit<Item>;
type Item = {
  price: number;
  stocks: number;
  category: Drink | Desert;
};

type Empolyee = WithUnit<Staff>;
type Staff = {
  rank: "Manager" | "PartTime" | "Owner";
  wage: number;
};

type OperationTime = {
  open?: string;
  close?: string;
};

type Branch = {
  operation: Open24Hour | RegularOperation;
  staffs: Empolyee[];
  menu: CafeItem[];
};
type Spot = WithUnit<Branch>;
