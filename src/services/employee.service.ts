import axios from 'axios';
import { Employee } from '../models/types';

const API_URL = 'http://localhost:3000';

export async function getEmployeeDetails(): Promise<Employee[]> {
  const response = await axios.get(`${API_URL}/employees`);
  return response.data;
}

export async function updateEmployeeDetails(
  id: number,
  name: string,
  email: string
): Promise<Employee> {
  return (
    await axios.post(`${API_URL}/employees`, {
      id,
      name,
      email
    })
  ).data;
}
