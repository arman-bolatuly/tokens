import { useState, useEffect } from 'react';
import { Title, TextInput, Button, Table, Modal, Group } from '@mantine/core';

const Cases = () => {
  const [cases, setCases] = useState<{ id: number; name: string }[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [newCaseName, setNewCaseName] = useState('');

  useEffect(() => {
    const storedCases = localStorage.getItem('cases');
    if (storedCases) setCases(JSON.parse(storedCases));
  }, []);

  const addCase = () => {
    if (!newCaseName.trim()) return;
    const updatedCases = [...cases, { id: cases.length + 1, name: newCaseName }];
    setCases(updatedCases);
    localStorage.setItem('cases', JSON.stringify(updatedCases));
    setNewCaseName('');
    setModalOpened(false);
  };

  const deleteCase = (id: number) => {
    const updatedCases = cases.filter(caseItem => caseItem.id !== id);
    setCases(updatedCases);
    localStorage.setItem('cases', JSON.stringify(updatedCases));
  };

  const filteredCases = cases.filter(caseItem =>
    caseItem.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Define the number of empty rows you want
  const emptyRowsCount = 5; // Change this number as needed
  const emptyRows = Array.from({ length: emptyRowsCount }, (_, index) => ({
    id: index + filteredCases.length + 1, // ID should be unique
    name: '', // Empty name
  }));

  return (
    <div style={{ padding: '20px' }}>
      <Title order={3} c="#FFFFFF">Cases</Title>
      
      <Group position="apart" style={{ marginTop: '10px', marginBottom: '10px', width: '300px' }}>
        <TextInput
          placeholder="Search Cases"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
        />
        <Button onClick={() => setModalOpened(true)}>Add</Button>
      </Group>

      <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="Case Create">
        <TextInput
          placeholder="Cases Name"
          value={newCaseName}
          onChange={(e) => setNewCaseName(e.currentTarget.value)}
        />
        <Button onClick={addCase} style={{ marginTop: '10px' }}>Add</Button>
      </Modal>

      <div className="overflow-auto border-solid border-[#EBEDF0] rounded-lg">
        <Table style={{ marginTop: '20px', color: 'white', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', textAlign: 'left', backgroundColor: 'transparent' }}>ID</th>
              <th style={{ padding: '10px', textAlign: 'left', backgroundColor: 'transparent' }}>Cases Name</th>
              <th style={{ padding: '10px', textAlign: 'left', backgroundColor: 'transparent' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCases.map((item) => (
              <tr key={item.id} style={{ cursor: 'pointer', backgroundColor: 'transparent' }}>
                <td style={{ padding: '10px', textAlign: 'left', border: '1px solid #ccc' }}>{item.id}</td>
                <td style={{ padding: '10px', textAlign: 'left', border: '1px solid #ccc' }}>{item.name}</td>
                <td style={{ padding: '10px', textAlign: 'left', border: '1px solid #ccc' }}>
                  <Button color="red" onClick={() => deleteCase(item.id)}>Delete</Button>
                </td>
              </tr>
            ))}
            {/* Render empty rows if there are no filtered cases */}
            {filteredCases.length === 0 &&
              emptyRows.map((row) => (
                <tr key={row.id}>
                  <td style={{ padding: '10px', textAlign: 'left', border: '1px solid #ccc' }}>{row.id}</td>
                  <td style={{ padding: '10px', textAlign: 'left', border: '1px solid #ccc' }}>{row.name}</td>
                  <td style={{ padding: '10px', textAlign: 'left', border: '1px solid #ccc' }}></td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Cases;
