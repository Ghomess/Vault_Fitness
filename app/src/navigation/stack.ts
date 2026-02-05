import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../types/stackType";

export const AppStackNavigator =
  createNativeStackNavigator<AppStackParamList>();
