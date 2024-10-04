import { useState, useEffect } from 'react'
import { Title, TextInput, Button, Table, Modal } from '@mantine/core'

const Cases = () => {
  const [cases, setCases] = useState<{ id: number; name: string }[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [modalOpened, setModalOpened] = useState(false)
  const [newCaseName, setNewCaseName] = useState('')

  useEffect(() => {
    const storedCases = localStorage.getItem('cases')
    if (storedCases) setCases(JSON.parse(storedCases))
  }, [])

  const addCase = () => {
    if (!newCaseName.trim()) return
    const updatedCases = [...cases, { id: cases.length + 1, name: newCaseName }]
    setCases(updatedCases)
    localStorage.setItem('cases', JSON.stringify(updatedCases))
    setNewCaseName('')
    setModalOpened(false)
  }

  const deleteCase = (id: number) => {
    const updatedCases = cases.filter(caseItem => caseItem.id !== id)
    setCases(updatedCases)
    localStorage.setItem('cases', JSON.stringify(updatedCases))
  }

  const filteredCases = cases.filter(caseItem =>
    caseItem.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col space-y-6">
      <Title order={3} c="#FFFFFF">
        Cases
      </Title>

      <div className="flex justify-between">
        <TextInput
          placeholder="Search Cases"
          value={searchTerm}
          onChange={e => setSearchTerm(e.currentTarget.value)}
        />
        <Button onClick={() => setModalOpened(true)}>Add</Button>
      </div>

      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Case Create"
      >
        <TextInput
          placeholder="Cases Name"
          value={newCaseName}
          onChange={e => setNewCaseName(e.currentTarget.value)}
        />
        <Button onClick={addCase} style={{ marginTop: '10px' }}>
          Add
        </Button>
      </Modal>

      <div className="overflow-auto border-solid border-[#EBEDF0] rounded-lg">
        <Table
          style={{
            marginTop: '20px',
            color: 'white',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: '10px',
                  textAlign: 'left',
                  backgroundColor: 'transparent',
                }}
              >
                ID
              </th>
              <th
                style={{
                  padding: '10px',
                  textAlign: 'left',
                  backgroundColor: 'transparent',
                }}
              >
                Cases Name
              </th>
              <th
                style={{
                  padding: '10px',
                  textAlign: 'left',
                  backgroundColor: 'transparent',
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCases?.length === 0 ? (
              <tr
                key={0}
                style={{ cursor: 'pointer', backgroundColor: 'transparent' }}
              >
                <td colSpan={3} className="text-center">
                  No Data
                </td>
              </tr>
            ) : (
              filteredCases.map(item => (
                <tr
                  key={item.id}
                  style={{ cursor: 'pointer', backgroundColor: 'transparent' }}
                >
                  <td
                    style={{
                      padding: '10px',
                      textAlign: 'left',
                      border: '1px solid #ccc',
                    }}
                  >
                    {item.id}
                  </td>
                  <td
                    style={{
                      padding: '10px',
                      textAlign: 'left',
                      border: '1px solid #ccc',
                    }}
                  >
                    {item.name}
                  </td>
                  <td
                    style={{
                      padding: '10px',
                      textAlign: 'left',
                      border: '1px solid #ccc',
                    }}
                  >
                    <Button color="red" onClick={() => deleteCase(item.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Cases
