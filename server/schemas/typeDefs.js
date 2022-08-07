const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!): Profile
    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;
