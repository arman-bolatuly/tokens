// Second.tsx
import { Title, Text, Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

function SecondPortfolio() {
  return (
    <div>
      <div className="mt-10 p-4 bg-white rounded-lg">
        <Title order={4} className="text-black">
          Portfolio Value
        </Title>
        <Text size="xl" className="text-black mt-2">
          $0.00 
        </Text>
      </div>

      <Button 
        variant="default" 
        radius="md" 
        size="xl" 
        className="flex justify-between items-center p-4 bg-white rounded-lg mt-4 w-full" // Added w-full
        style={{ height: 'auto', padding: '16px' }} 
      >
        <div className="flex flex-col items-start">
          <Text size="lg" className="text-black" style={{ textAlign: 'left' }}>
            Hamilton Lane's Record-Breaking $5.6B Secondaries Fund - Now Exclusively on Securitize
          </Text>
          <Text size="sm" className="text-black" style={{ textAlign: 'left', marginTop: '10px' }}>
            Access stability and quicker returns with a secondary fund that acquires mature private equity investments, often at prices below market value.
          </Text>
        </div>

        <div className="flex items-center ml-4">
          <Text size="md" className="text-blue" style={{ marginRight: '8px' }}>
            View the Fund
          </Text>
          <IconArrowRight stroke={2} className="text-blue" />
        </div>
      </Button>
    </div>
  );
}

export default SecondPortfolio;
