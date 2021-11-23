import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Header } from 'semantic-ui-react';

const App = () => {

  const [employees, setEmployees] = useState([]);

  const fetchEmployess = async () => {
    const response = await axios.get('http://reqres.in/api/users?pre-page=5')
    setEmployees(response.data.data)
    debugger
  }

  useEffect(() => {
    fetchEmployess ()     

  }, [])

  const employeeList = employees.map((employee) => {
    return (
      <li key={employee.id}>{`${employee.first_name} ${employee.last_name}`}</li>
    )
  })

  return (
    <Container>
      <Header size="huge" id="header">Employee List</Header>
      <ul data-cy='employee-list'>{employeeList}
      </ul>
    </Container>
  )
}
export default App