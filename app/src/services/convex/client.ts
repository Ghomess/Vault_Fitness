import { ConvexHttpClient } from "convex/browser";

export const convex = new ConvexHttpClient(process.env.EXPO_PUBLIC_CONVEX_URL!);
