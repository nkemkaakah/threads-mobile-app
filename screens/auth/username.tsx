import { HStack } from '@/components/ui/hstack';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default () =>{
  return (
    <SafeAreaView>
      <HStack>
        <Text className='text-sxl font-bold'>Username</Text>
        <Text className='text-sxl font-bold'>Home</Text>
      </HStack>
    </SafeAreaView>
  );
}


