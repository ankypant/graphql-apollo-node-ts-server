import axios from 'axios';
import { Employee } from '../models/types';

const API_URL = 'http://localhost:3000';

export async function getEmployeeDetails(): Promise<Employee[]> {
  return await (await axios.get(`${API_URL}/employees`)).data;
}

export async function updateEmployeeDetails(
  name: string,
  email: string
): Promise<Employee> {
  await axios.post(`${API_URL}/employees`, {
    name,
    email
  });

  return {
    name,
    email
  };
}
