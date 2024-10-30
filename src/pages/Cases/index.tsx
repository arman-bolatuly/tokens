import { Title, Button, Table, Input } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { IconSearch } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import debounce from 'lodash.debounce'

import CreateModal from './CreateModal'
import { getCases } from '../../apiService/casesService'

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
]

const Cases = () => {
  const [activePage, setActivePage] = useState(1)

  const [perPage, setPerPage] = useState<string | null>('10')

  const [search, setSearch] = useState<string>('')

  const [opened, { open, close }] = useDisclosure(false)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['adm/cases', search, activePage, perPage],
    queryFn: () =>
      getCases({
        name: search,
        page: activePage,
        limit: perPage,
      }),
  })

  console.log('data: ', data)

  const debouncedSearch = useMemo(() => {
    return debounce((e: any) => {
      setSearch(e.target.value)
      setActivePage(1)
    }, 1000)
  }, [])

  return (
    <div className="flex flex-col space-y-6">
      <Title order={3} c="#FFFFFF">
        Cases
      </Title>

      <div className="flex justify-between">
        <Input
          placeholder="Search Cases"
          rightSection={<IconSearch />}
          miw={300}
          rightSectionWidth={40}
          onChange={debouncedSearch}
        />

        <Button onClick={open}>Add</Button>
      </div>

      <div className="overflow-auto border-solid border-[#EBEDF0] rounded-lg text-[#FFFFFF]">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Element position</Table.Th>
              <Table.Th>Element name</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {elements.map((element: any) => (
              <Table.Tr key={element.name}>
                <Table.Td>{element.position}</Table.Td>
                <Table.Td>{element.name}</Table.Td>
                <Table.Td>{element.symbol}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>

      <CreateModal opened={opened} close={close} />
    </div>
  )
}

export default Cases
