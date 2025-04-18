import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
          fontFamily: 'Poppins-SemiBold',
          fontSize: 20,
          color: '#1B5E20',
        },
        headerShadowVisible: true,
        headerTintColor: '#1B5E20',
        headerBackTitle: '',
      }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen 
          name="screens/about" 
          options={{ 
            title: 'About',
            animation: 'slide_from_right',
          }} 
        />
        <Stack.Screen 
          name="screens/contact" 
          options={{ 
            title: 'Contact',
            animation: 'slide_from_right',
          }} 
        />
        <Stack.Screen 
          name="screens/features" 
          options={{ 
            title: 'Features',
            animation: 'slide_from_right',
          }} 
        />
        <Stack.Screen 
          name="screens/innovation" 
          options={{ 
            title: 'Innovation',
            animation: 'slide_from_right',
          }} 
        />
        <Stack.Screen 
          name="screens/legacy" 
          options={{ 
            title: 'Legacy',
            animation: 'slide_from_right',
          }} 
        />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}