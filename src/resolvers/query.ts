import { QueryResolvers } from '../models/types';
import { getEmployeeDetails } from '../services/employee.service';

export const queryResolvers: QueryResolvers = {
  async employee(parent, args, context, info): Promise<any> {
    return await getEmployeeDetails();
  }
};
