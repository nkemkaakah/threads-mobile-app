import { HStack } from '@/components/ui/hstack';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function HomeScreen() {
  return (
    <SafeAreaView>
      <HStack>
        <Text className='text-sxl font-bold'>Home</Text>
      </HStack>
    </SafeAreaView>
  );
}


