import { useState } from 'react';
import { Avatar as MantineAvatar, SegmentedControl, Table as MantineTable, TextInput, Button } from '@mantine/core';
import TradeFirst from './TradeFirst';
import TradeAvatar from './TradeAvatar';

const data = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    lastPrice: '$30,000',
    change24h: '2.5%',
    volume: '$100M',
    marketCap: '$600B',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    lastPrice: '$2,000',
    change24h: '1.8%',
    volume: '$50M',
    marketCap: '$200B',
  },
  {
    name: 'Litecoin',
    symbol: 'LTC',
    lastPrice: '$150',
    change24h: '3.0%',
    volume: '$10M',
    marketCap: '$10B',
  },
];

function Trade() {
  const [opened, setOpened] = useState(false);
  const avatarSrc = ""; 
  const userName = "Erlan Ibatulliev";
  const [search, setSearch] = useState(''); 

  const openModal = () => setOpened(true);
  const closeModal = () => setOpened(false);

  return (
    <>
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

        <TradeAvatar
          opened={opened}
          onClose={closeModal}
          userName={userName}
          avatarSrc={avatarSrc}
        />

        <TradeFirst />

        <SegmentedControl data={['Asset Catalog', 'My Orders']} className="mt-4" />

        <div className="mt-8">
          <h1 className="text-2xl font-semibold text-white">All investment opportunities</h1>
        </div>

        <div className="flex mt-4 space-x-4">
          <TextInput
            className="w-full"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
          <Button>Search</Button>
        </div>

        <div className="overflow-auto border border-gray-300 rounded-lg mt-4">
          <MantineTable striped highlightOnHover>
            <thead className="bg-gray-800">
              <tr className="text-left text-white">
                <th className="p-4">Name</th>
                <th className="p-4">Symbol</th>
                <th className="p-4">Last Price</th>
                <th className="p-4">Change (24H)</th>
                <th className="p-4">Volume</th>
                <th className="p-4">Market Cap</th>
              </tr>
            </thead>
            <tbody className="bg-gray-700">
              {data
                .filter((d) => d.name.toLowerCase().includes(search.toLowerCase())) // Поиск по имени
                .map((d) => (
                  <tr>
                    <td className="p-4 text-white">{d.name}</td>
                    <td className="p-4 text-white">{d.symbol}</td>
                    <td className="p-4 text-white">{d.lastPrice}</td>
                    <td className="p-4 text-white">{d.change24h}</td>
                    <td className="p-4 text-white">{d.volume}</td>
                    <td className="p-4 text-white">{d.marketCap}</td>
                  </tr>
              ))}
            </tbody>
          </MantineTable>
        </div>
      </div>
    </>
  );
}

export default Trade;
