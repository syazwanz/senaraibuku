import { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {

    const { books } = useContext(BookContext)

    return books.length ? (
        <div>
            <div className="book-list">

                <ul>
                    {books.map(book => {
                        return (
                            <BookDetails book={book} key={book.id} />
                        )
                    })}
                </ul>
            </div>
        </div>
    ) : (
            <div className="empty">No books on your list.</div>
        )
}

export default BookList
