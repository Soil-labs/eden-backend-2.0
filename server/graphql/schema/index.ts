const { gql } = require('apollo-server');
const query = require('./query.graphql');
const mutation = require('./mutation.graphql')
const memberType = require('./member.graphql');
const serverType = require('./server.graphql');
const skillType = require('./skill.graphql');
const skillCategory = require('./skillCategory.graphql');
const skillSubCategory = require('./skillSubCategory.graphql');
const project = require('./project.graphql');




const typeDefs = gql`
${query}
${mutation}
${memberType}
${serverType}
${skillType}
${skillCategory}
${skillSubCategory}
${project}
`;

export default typeDefs