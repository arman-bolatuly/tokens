import {  Title } from '@mantine/core';

import FirstContainer from './First';
import ModalWallet from './ModalWallet';

function Wallets() {

  return (
    <div className="relative h-screen p-4">
      <Title order={3} c="#FFFFFF" className="mt-10">
        Wallets
      </Title>

      <ModalWallet />

      <FirstContainer />
    </div>
  );
}

export default Wallets;
