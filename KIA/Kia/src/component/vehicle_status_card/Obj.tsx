import { Status } from "../Car/CarStatus";
import { CoolGeryColors, SecondaryColors } from "../style/Color";

export const obj: { [key in Status]: string } = {
  대기: SecondaryColors.GreenLight,
  미완료: SecondaryColors.RedLight,
  완료: CoolGeryColors.CoolGrey5,
};
export const STATUS_TEXT_COLORS: Record<Status, string> = {
  대기: SecondaryColors.GreenDark,
  미완료: SecondaryColors.RedVariant,
  완료: CoolGeryColors.CoolGrey20,
};

export const STATUS_BG_COLORS: Record<Status, string> = {
  대기: SecondaryColors.GreenLight,
  미완료: SecondaryColors.RedLight,
  완료: CoolGeryColors.CoolGrey5,
};
