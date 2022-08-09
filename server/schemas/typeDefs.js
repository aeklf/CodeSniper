const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    username: String
    email: String
    userPosts: [Post]
  }
  
  type Post {
    _id: ID
    title: String
    topic: String
    content: String
  }
  
  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    me: Profile
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!): Profile
    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;
