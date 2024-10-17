import { useState } from 'react'
import { Modal, ScrollArea, Select, Text } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

import { getCryptoCoinsChart } from '../../apiService/cryptoCoinsService'
import ModalLoadingComponent from '../../components/ui/ModalLoadingComponent'
import ModalErrorComponent from '../../components/ui/ModalErrorComponent'

const periods = [
  { value: '24h', label: '24 hour' },
  { value: '1w', label: '1 week' },
  { value: '1m', label: '1 month' },
  { value: '3m', label: '3 months' },
  { value: '6m', label: '6 months' },
  { value: '1y', label: '1 year' },
  { value: 'all', label: 'All' },
]

const ChartModal = ({ opened, close, coinId }: any) => {
  const [period, setPeriod] = useState<string>('24h')

  const { data, isLoading, isError } = useQuery({
    queryKey: [`/coins/${coinId}/charts`, period],
    queryFn: () => getCryptoCoinsChart({ coinId, period }),
    enabled: !!coinId && !!period && opened,
  })

  const chartData = data?.data

  const formattedData = (chartData: any[], period: '24h' | 'long') => {
    return chartData?.map(([timestamp, price]: any) => ({
      timestamp:
        period === '24h'
          ? new Date(timestamp * 1000).toLocaleTimeString() // Convert to readable time format for 24h
          : new Date(timestamp * 1000).toLocaleDateString(), // Convert to readable date format for longer periods
      price,
    }))
  }

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={'Статистика'}
      scrollAreaComponent={ScrollArea.Autosize}
      transitionProps={{
        transition: 'fade',
        duration: 250,
        timingFunction: 'linear',
      }}
      size={'100%'}
      // zIndex={1000000}
      centered
    >
      {isLoading && (
        <div className="my-[250px]">
          <ModalLoadingComponent />
        </div>
      )}

      {isError && (
        <div className="my-[250px]">
          <ModalErrorComponent />
        </div>
      )}

      {!isLoading && !isError && (
        <>
          <Select
            value={period}
            data={periods}
            // onChange={value => setPeriod(value)}
            onChange={value => setPeriod(value ?? '24h')}
            pb={32}
            label="Period"
            placeholder="Pick a period"
            w={250}
          />

          <div>
            <ResponsiveContainer height={500}>
              <BarChart
                width={1200}
                height={500}
                data={formattedData(
                  chartData,
                  period === '24h' ? '24h' : 'long',
                )}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip position={{ y: 40 }} content={<CustomTooltip />} />
                {/* <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
            <Legend
              verticalAlign="top"
              wrapperStyle={{
                position: 'absolute',
                lineHeight: '40px',
                top: 0,
              }}
              iconSize={10}
              iconType="circle"
              align="right"
            /> */}
                <ReferenceLine y={0} stroke="#000" />
                <Brush dataKey="timestamp" height={30} stroke="#8884d8" />
                <Bar dataKey="price" fill="#006400" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </Modal>
  )
}

export default ChartModal

export function CustomTooltip({ payload, active }: any) {
  if (active) {
    return (
      <div className="bg-[#1A2C47] rounded-md p-2">
        <Text className="text-white text-center text-lg">{`${payload[0]?.payload.timestamp}`}</Text>

        {payload.map((i: any) => {
          return (
            <div className="flex items-center text-white space-x-3 ml-2">
              <div className="flex justify-between w-full">
                <Text className="mr-1 capitalize">{i?.name}:</Text>

                <Text>{i?.value.toFixed(2)}$</Text>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return null
}
