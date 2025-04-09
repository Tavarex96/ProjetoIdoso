import { Slot } from 'expo-router';
import { IdosoProvider } from './(tabs)/context/IdosoProvider';

export default function Layout() {
  return (
    <IdosoProvider>
      <Slot />
    </IdosoProvider>
  );
}