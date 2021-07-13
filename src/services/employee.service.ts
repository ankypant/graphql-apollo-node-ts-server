import axios from 'axios';
import { Employee } from '../models/types';

export async function getEmployeeDetails(): Promise<Employee[]> {
  return (await axios.get(`${process.env.API_URL}/employees`)).data;
}

export async function updateEmployeeDetails(
  name: string,
  email: string
): Promise<Employee> {
  await axios.post(`${process.env.API_URL}/employees`, {
    name,
    email
  });

  return {
    id: Math.random(),
    name,
    email
  };
}
