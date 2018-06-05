import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {}
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {}
    })
});