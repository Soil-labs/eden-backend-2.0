const { gql } = require('apollo-server');
const query = require('./query.graphql');
const mutation = require('./mutation.graphql')
const memberType = require('./member.graphql');


const typeDefs = gql`
${query}
${mutation}
${memberType}
`;

export default typeDefs