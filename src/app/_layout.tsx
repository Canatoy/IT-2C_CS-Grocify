import { ClerkLoaded, ClerkProvider } from '@clerk/expo';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

export default function RootLayout() {
  const colorScheme = useColorScheme();

  if (!publishableKey) {
  
    console.error("Missing Publishable Key. Check Cloudflare Environment Variables.");
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}