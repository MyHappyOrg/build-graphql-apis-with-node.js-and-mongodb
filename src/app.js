import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';

const app = express();
const PORT = 3000;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/gql_db', { useNewUrlParser: true });

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}));
app.get('/', (req, res) => {
    return res.json({
        msg: 'hello graphql'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})