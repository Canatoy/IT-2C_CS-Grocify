import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";

import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import * as Sentry from '@sentry/react-native';
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";


// @ts-ignore:
import "../../global.css";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("Missing Publishable Key. Check Cloudflare Environment Variables.");
}


Sentry.init({
  dsn: 'https://6bdc1ead45e3dbbd5a46c989c07052e8@o4511428416241664.ingest.us.sentry.io/4511428417748992',
  integrations: [Sentry.feedbackIntegration()],
});

export default Sentry.wrap (function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
          <Stack screenOptions={{ headerShown: false }} />
        </ThemeProvider>

    </ClerkProvider>
  );
});
