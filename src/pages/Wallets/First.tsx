import { useState } from 'react';
import { Container, Text, Button, CopyButton, Tooltip, Modal, Timeline } from '@mantine/core';
import { IconCopy, IconPlus } from '@tabler/icons-react'; // Импортируем иконки

const FirstContainer = () => {
  const [modalOpen, setModalOpen] = useState(false); // Состояние для модального окна
  const walletAddress = "0x5eceb3cce2755156379f764ee713d4f33c03a11c";

  return (
    <>
      <Container
        className="bg-white p-4 mt-6 flex justify-between rounded-md w-full mx-auto"
        style={{ maxWidth: '100vw' }} // Убедитесь, что используется style вместо maxWidth в классе
      >
        <div>
          <Text size="lg">Metamask</Text>
          <CopyButton value={walletAddress}>
            {({ copied, copy }) => (
              <Tooltip label={copied ? "Copied" : "Click to copy"} withArrow position="right">
                <div className="flex items-center cursor-pointer" onClick={copy}>
                  <Text
                    size="xs"
                    color={copied ? "green" : "gray"}
                    className="mr-1"
                  >
                    {walletAddress}
                  </Text>
                  <IconCopy stroke={2} color={copied ? "green" : "gray"} />
                </div>
              </Tooltip>
            )}
          </CopyButton>
          <Text size="sm" color="gray" className="mt-5">No assets are associated with this wallet.</Text>
        </div>

        <Button
          variant="outline"
          color="blue"
          className="ml-4 flex items-center" // Заменяем стиль на класс
          onClick={() => setModalOpen(true)} // Открываем модальное окно при клике
        >
          Add Asset
          <IconPlus stroke={2} className="ml-2" /> {/* Добавляем иконку рядом с текстом */}
        </Button>
      </Container>

      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)} // Закрываем модальное окно
        title={<Text size="lg">Add Asset</Text>}
      >
        <div>
          <Timeline active={1} reverseActive lineWidth={1} className="mt-2">
            <Timeline.Item title="1. Asset" />
            <Timeline.Item title="2. Authorize" />
          </Timeline>

          <Text size="sm" color="gray" className="mt-2">
            You have no investments yet.
          </Text>
          <Text size="sm" color="gray" className="mt-2">
            If you want to authorize a wallet for a peer-to-peer transfer please contact the issuer of that asset.
          </Text>
        </div>
      </Modal>
    </>
  );
};

export default FirstContainer;
