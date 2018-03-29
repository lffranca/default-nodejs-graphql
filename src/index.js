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

app.get('/', (req, res) => {
	return res.status(200).json();
})

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

const server = app.listen(PORT, () => {
	console.log('< ---------------------------------------');
	console.log('< ---------------------------------------');
	console.log(`< Server Listen Port: ${PORT}`);
	console.log(`< http://localhost:${PORT}/`);
	console.log('< ---------------------------------------');
	console.log('< ---------------------------------------');
});

module.exports = server;