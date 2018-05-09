import React from "react";


function ListBookContent(props) {
    var bookItems = props.bookItems
    return (
        <div className="list-books-content">
            <div>
                <BookShelf bookItems={bookItems} category="Currently Reading"/>
                <BookShelf bookItems={bookItems} category="Want to Read"/>
                <BookShelf bookItems={bookItems} category="Read"/>
            </div>
        </div>
    )
}

function ListBooksTitle(props) {
    return (
        <div className="list-books-title">
            <h1>{props.title}</h1>
        </div>
    );
}

function BookShelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.category}</h2>
            <div className="bookshelf-books">
                <BookGrid bookItems={props.bookItems}/>
            </div>
        </div>
    )
}

function BookGrid(props) {
    if (props.bookItems) {
        return (
            <ol className="books-grid">
                {
                    props.bookItems.map((bookItem) => (
                        // Need a unique id
                        <li key={bookItem.id}>
                            <Book bookItem={bookItem}/>
                        </li>
                    ))}
            </ol>
        )
    } else {
        return (
            <p>
                Not Ready!!!
            </p>
        )
    }

}

class BookShelfChanger extends React.Component {
    render() {
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

/**
 * One book
 * @param {} props
 */
function Book(props) {
    var bookItem = props.bookItem
    console.log("book", bookItem)
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${bookItem.imageLinks['thumbnail']})`
                }}></div>
                <BookShelfChanger/>
            </div>
            <div className="book-title">{bookItem.title}</div>
            <div className="book-authors">{bookItem.authors[0]}</div>
        </div>
    )
}
// 导出的写法
export {ListBooksTitle, ListBookContent}
