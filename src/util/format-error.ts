import { UserInputError } from 'apollo-server';
import { formatError as formatErrorGraphQL } from 'graphql';

/**
 * Format all 400 responses from REST service to return the error message.
 * @param err Apollo server error input
 */
export function formatError(err: any) {
  if (
    err.extensions.exception.response &&
    err.extensions.exception.response.data &&
    err.extensions.exception.response.data.status >= 400 &&
    err.extensions.exception.response.data.status < 500
  ) {
    return new UserInputError(err.extensions.exception.response.data.message, {
      response: err.extensions.exception.response.data
    });
  } else {
    return formatErrorGraphQL(err);
  }
}
