//selectBook is an ActionCreator,it needs to return  an action,
//selectBook has an object with the type prorerty
export function selectBook(book){
    console.log('A book has been selected',book.title);
    return {
        type:'BOOK_SELECTED',
        payload:book //desctibes the data which further decides action or more ingfo the action taken
    };
}
