import { Platform } from "react-native";
import { colors } from "./Contant";

export const shadow = {
  shadowColor: colors.COLOR_DARK,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.1,
  shadowRadius: 7,
  elevation: Platform.OS === "android" ? 2 : 0,
};
