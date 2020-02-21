import { Employee } from '../models/types';

let employee: Employee[] = [
  {
    name: 'Ankit Pant',
    email: 'ankit12.pant@gmail.com'
  }
];

export async function getEmployeeDetails(): Promise<Employee[]> {
  return employee;
}

export async function updateEmployeeDetails(
  name: string,
  email: string
): Promise<Employee> {
  const newEmployee: Employee = {
    name,
    email
  };
  // push to global array
  employee.push(newEmployee);

  // return new employee details
  return newEmployee;
}
