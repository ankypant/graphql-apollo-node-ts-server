import { Resolvers } from "../models/types";

import { queryResolvers } from "./query";
import { mutationResolvers } from "./mutation";

export const resolvers: Resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers
};
