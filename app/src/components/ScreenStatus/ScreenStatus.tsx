import { Text } from "react-native";

type ScreenStatusProps = Readonly<{
  loading: boolean;
  error?: string | null;
  children: React.ReactNode;
}>;

export function ScreenStatus({ loading, error, children }: ScreenStatusProps) {
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return <>{children}</>;
}
