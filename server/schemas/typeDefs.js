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
    addProfile(username: String!, email:String!, password: String!):Auth
    removeProfile(profileId: ID!): Profile
    login(email: String!, password: String!):Auth
  }
`;

module.exports = typeDefs;
