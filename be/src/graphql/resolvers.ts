import { Book } from "../models/Books.model";
// import { books } from "./temp_data";

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
    Query: {
    //   books: () => books,
      fetchBooks: async () => {
          return await Book.find();
      }
    },
};