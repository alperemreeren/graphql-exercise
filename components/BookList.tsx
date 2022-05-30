import { FunctionComponent, useEffect } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from 'react-apollo';

const getBooksQuery = gql`
    {
        fetchBooks {
            title
            author
        }
    }
`;

const BookList: FunctionComponent = (client: any) => {
    const { loading, error, data } = useQuery(getBooksQuery);
    
    useEffect(() => {
        const queryBooks = async () => {
            console.log(loading)
            console.log(data)
            // if (!loading) {
            // }
        }
        queryBooks()
    }, [data])

    return (
        <div className="">
            <ul className="book-list">
                {loading && <div>Loading...</div>}
                {data && data.fetchBooks.map((book: any) => (
                    <li key={book._id}>{book.title} - {book.author}</li>
                ))}
            </ul>
        </div>
    )
}

export default BookList;