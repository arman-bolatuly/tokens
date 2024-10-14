import { useState } from 'react'; 
import { Avatar as MantineAvatar, SegmentedControl, Title } from '@mantine/core';
import UserAvatar from './Avatar';
import First from './First';
import SecondPortfolio from './SecondPortfolio';

function Portfolio() {
  const [opened, setOpened] = useState(false);
  const avatarSrc = ""; 
  const userName = "Erlan Ibatulliev";

  const openModal = () => {
    setOpened(true);
  };

  return (
    <div className="relative h-screen p-4">
      <div className="flex items-center absolute top-4 right-4 cursor-pointer">
        <MantineAvatar
          variant="filled"
          radius="xl"
          src={avatarSrc}
          onClick={openModal}
          className="cursor-pointer"
        />
        <div onClick={openModal} className="ml-3 text-white text-lg font-medium">
          {userName}
        </div>
      </div>

      <Title order={3} className="text-white mt-10">
        Portfolio
      </Title>

      <UserAvatar 
        opened={opened}
        onClose={() => setOpened(false)}
        userName={userName}
        avatarSrc={avatarSrc}
      />

      <First /> 

      <SecondPortfolio />

      <SegmentedControl data={['My Assets','In Progres']} className='mt-4' />;
    </div>
  );
}

export default Portfolio;
