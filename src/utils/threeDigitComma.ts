import { THOUSAND_UNIT } from "src/constants/price";

export const threeDigitCommma = (value: string | number) => {
    return value.toString().replace(THOUSAND_UNIT, ",");
}