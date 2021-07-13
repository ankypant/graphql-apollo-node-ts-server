import { MutationResolvers } from '../models/types';
import { updateEmployeeDetails } from '../services/employee.service';

export const mutationResolvers: MutationResolvers = {
  async employeeDetails(__, args) {
    return updateEmployeeDetails(args.name, args.email);
  }
};
