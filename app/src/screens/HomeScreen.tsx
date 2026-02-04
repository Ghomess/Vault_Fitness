import React from "react";
import { Button, Text, View } from "react-native";
import { useAuth } from "../hooks/useAuth";

export const HomeScreen = () => {
  const { logout } = useAuth();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Logout"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
};
