import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import db from "./_db.js";

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        game(_, args) {
            return db.games.find(review => review.id === args.id)
        },
        authors() {
            return db.authors
        },
        author(_, args) {
            return db.authors.find(review => review.id === args.id)
        },
        reviews() {
            return db.reviews
        },
        review(_, args) {
            return db.reviews.find(review => review.id === args.id)
        }
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter(r => r.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter(r => r.author_id === parent.id)
        }
    },
    Review: {
        game(parent) {
            return db.games.find(g => g.id === parent.game_id)
        },
        author(parent) {
            return db.authors.find(a => a.id === parent.author_id);
        },
        // game: (review) => games.find(g => g.id === review.game_id),
        // author: (review) => authors.find(a => a.id === review.author_id)
    }
}

//server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Serve ready at port ', 4000);