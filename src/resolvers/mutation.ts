import { MutationResolvers } from '../models/types';
import { addEmployeeDetails } from '../services/employee.service';

export const mutationResolvers: MutationResolvers = {
  async addEmployee(__, args) {
    return addEmployeeDetails(args.name, args.email);
  }
};
