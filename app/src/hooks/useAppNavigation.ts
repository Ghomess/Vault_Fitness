import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../types/stackType";

export const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<AppStackParamList>>();
