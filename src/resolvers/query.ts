import { Employee, QueryResolvers } from '../models/types';
import {
  getEmployeesDetails,
  getEmployeeData
} from '../services/employee.service';

export const queryResolvers: QueryResolvers = {
  async getEmployees(): Promise<Employee[]> {
    return getEmployeesDetails();
  },
  async getEmployee(__, args): Promise<Employee> {
    return getEmployeeData(args.id);
  }
};
