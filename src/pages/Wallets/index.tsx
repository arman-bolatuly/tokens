import { useState } from 'react';
import { Avatar, Button, Modal, Text, Title } from '@mantine/core';
import AvatarModal from './AvatarModal';
import FirstContainer from './First';

function Wallets() {
  const [opened, setOpened] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const avatarSrc = "";
  const userName = "Erlan Ibatulliev";

  const openModal = () => {
    setOpened(true);
  };

  return (
    <div className="relative h-screen p-4">
      <div className="flex items-center absolute top-4 right-4 cursor-pointer">
        <Avatar
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

      <Title order={3} c="#FFFFFF" className="mt-10">
        Wallets
      </Title>

      <Button
        className="mt-5"
        variant="filled"
        color="blue"
        onClick={() => setModalOpen(true)}
      >
        Connect Wallet
      </Button>

      <AvatarModal
        opened={opened}
        onClose={() => setOpened(false)}
        userName={userName}
        avatarSrc={avatarSrc}
      />

      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title={<Text size="lg">Connect Wallet</Text>}
      >
        <div className="flex flex-col items-center">
          <Text size="md" className="mt-4">Select the wallet you wish to connect:</Text>
          <Button variant="subtle" color="black" radius="lg" size="lg" fullWidth className="mt-4">Metamask</Button>
          <Button variant="subtle" color="black" radius="lg" size="lg" fullWidth className="mt-2">Coinbase Wallet</Button>
          <Button variant="subtle" color="black" radius="lg" size="lg" fullWidth className="mt-2">Wallet Connect</Button>
        </div>
      </Modal>

      <FirstContainer />
    </div>
  );
}

export default Wallets;
