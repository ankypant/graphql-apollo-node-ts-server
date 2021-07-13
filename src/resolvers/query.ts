import { Employee, QueryResolvers } from '../models/types';
import { getEmployeeDetails } from '../services/employee.service';

export const queryResolvers: QueryResolvers = {
  async getEmployees(): Promise<Employee[]> {
    return getEmployeeDetails();
  }
};
