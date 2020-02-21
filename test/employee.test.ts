// import axios from 'axios';
import { query, mutation } from './common';

describe('employee', () => {
  it('should query employees', async () => {
    const response = await query(`
        {
          employee {
            name
            email
          }
        }`);
    const { employee } = response.body.data;
    expect(employee).toMatchSnapshot();
  });

  it('should add employee', async () => {
    const response = await mutation(`
    employeeDetails(name: "test", email: "test@test.com") {
      name
      email
    }`);
    const { employee } = response.body.data;
    expect(employee).toMatchSnapshot();
  });
});
