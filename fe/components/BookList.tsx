import { FunctionComponent, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
// import { useQuery } from 'react-apollo';

const getBooksQuery = gql`
    {
        fetchBooks {
            _id
            title
            author
        }
    }
`;

const BookList: FunctionComponent = (client: any) => {
    const { loading, error, data } = useQuery(getBooksQuery);
    
    useEffect(() => {
        const logBooksQuery = async () => {
            console.log(loading)
            console.log(data)
            console.log(error)
            // if (!loading) {
            // }
        }
        logBooksQuery()
    }, [loading, data, error])

    return (
        <div className="">
            <ul className="book-list">
                {loading && <div>Loading...</div>}
                {error && <p className='error'>Error Occured: ${error.message}</p>}
                {data && data.fetchBooks.map((book: any) => (
                    <li key={book._id}>{book.title} - {book.author}</li>
                ))}
            </ul>
        </div>
    )
}

export default BookList;