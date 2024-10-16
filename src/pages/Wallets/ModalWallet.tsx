import { Modal, Title, Button } from '@mantine/core'; 
import { useDisclosure } from '@mantine/hooks';

function ModalWallet() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button
        className="mt-5"
        variant="filled"
        color="blue"
        onClick={open}
      >
        Connect Wallet
      </Button>

      <Modal opened={opened} onClose={close} title="Connect Wallet">
        <div className="flex flex-col items-center">
          <Title order={5} className="mt-4">Select the wallet you wish to connect:</Title>
          <Button variant="subtle" radius="lg" size="lg" fullWidth className="mt-4">Metamask</Button>
          <Button variant="subtle" radius="lg" size="lg" fullWidth className="mt-2">Coinbase Wallet</Button>
          <Button variant="subtle" radius="lg" size="lg" fullWidth className="mt-2">Wallet Connect</Button>
        </div>
      </Modal>
    </>
  );
}

export default ModalWallet;
