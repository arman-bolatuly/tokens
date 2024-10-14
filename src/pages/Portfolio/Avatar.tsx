import React from 'react';
import { Avatar as MantineAvatar, Button, Modal, Text } from '@mantine/core';

interface AvatarProps {
  opened: boolean;
  onClose: () => void;
  userName: string; // Имя пользователя для отображения
  avatarSrc: string; // URL аватара
}

const UserAvatar: React.FC<AvatarProps> = ({ opened, onClose, userName, avatarSrc }) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose} // Закрыть модальное окно
      title={<Text size="lg">Individual Account</Text>}
    >
      <div className="flex flex-col items-center">
        <MantineAvatar // Обновленный компонент
          variant="filled"
          radius="xl"
          src={avatarSrc}
          size={100} 
        />
        <Text size="md" className="mt-4">{userName}</Text>
        
        <Button variant="subtle" color="black" radius="lg" fullWidth className="mt-5">Create Entity Account</Button>
        <Button variant="subtle" color="black" radius="lg" fullWidth className="mt-4">Account</Button>
        <Button variant="subtle" color="black" radius="lg" fullWidth className="mt-2">Settings</Button>
        <Button variant="subtle" color="black" radius="lg" fullWidth className="mt-2">Log out</Button>
      </div>
    </Modal>
  );
};

export default UserAvatar; // Обновленный экспорт
