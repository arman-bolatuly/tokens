import { Text, Button, SimpleGrid } from '@mantine/core';
import { IconMathGreater } from '@tabler/icons-react';

function First() {
  return (
    <div>
      <Text size="md" className="text-white mt-6">Complete your account</Text>
      
      <SimpleGrid cols={3} spacing="lg" mt="lg">
        <Button variant="default" color="white" className="flex justify-between items-center" style={{ height: '96px' }}>
          <div className="flex flex-col">
            <Text className="text-black">Verify Your Identity</Text>
            <Text size="sm" className="text-black mt-1" style={{ textAlign: 'left' }}>Not Complete</Text>
          </div>
          <IconMathGreater stroke={2} className="text-black ml-40" />
        </Button>

        <Button variant="default" color="white" className="flex justify-between items-center" style={{ height: '96px' }}>
          <div className="flex flex-col">
            <Text className="text-black">Complete Investment Profile</Text>
            <Text size="sm" className="text-black mt-1" style={{ textAlign: 'left' }}>Not Complete</Text>
          </div>
          <IconMathGreater stroke={2} className="text-black ml-24" />
        </Button>

        <Button variant="default" color="white" className="flex justify-between items-center" style={{ height: '96px' }}>
          <div className="flex flex-col">
            <Text className="text-black">Qualification</Text>
            <Text size="sm" className="text-black mt-1" style={{ textAlign: 'left' }}>Not Complete</Text>
          </div>
          <IconMathGreater stroke={2} className="text-black ml-48"/>
        </Button>
      </SimpleGrid>
    </div>
  );
}

export default First;
