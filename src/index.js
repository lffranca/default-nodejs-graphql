const express = require('express');
const {graphql, GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');
const graphqlHTTP = require('express-graphql');
const dotenv = require('dotenv');

dotenv.config({
	path: __dirname + '../.env'
});

const PORT = process.env.NODE_PORT || 4000;

const app = express();

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			hello: {
				type: GraphQLString,
				resolve() {
					return 'world';
				}
			}
		}
	})
});

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(3000, () => {
	console.log('< ---------------------------------------');
	console.log('< ---------------------------------------');
	console.log(`< Server Listen Port: ${PORT}`);
	console.log(`< http://localhost:${PORT}/`);
	console.log('< ---------------------------------------');
	console.log('< ---------------------------------------');
});
