import { MutationResolvers } from '../models/types';
import { updateEmployeeDetails } from '../services/employee.service';

export const mutationResolvers: MutationResolvers = {
  async employeeDetails(parent, args, context) {
    return await updateEmployeeDetails(args.id, args.name, args.email);
  }
};
