import React,{Component} from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

  renderList(){
      return this.props.books.map((book)=>{
        //console.log('book:-',book);
          return (
                <li
                    key={book.title}
                    onClick={()=>this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
          );
      });
  }
      render(){
      {/*console.log('value of hello:',this.props.hello)whatever key,value is there in mapStateToProps will act as prop in this container*/}
        return (
          <ul className="list-group col-sm-4">
              {this.renderList()}
            {/*console.log('value from redux:',this.props.selectBook)*/}

          </ul>
        )
      }
}

function mapStateToProps(state){
  {console.log('Our Applicaiton State:',state)}
//  {console.log('title first value:',state.books[0])}
  //what ever is returned from will show up as props inside this particular booklist
    return {
      hello:'123',
      books:state.books //this books(key on the left side) is the just the prop name and nothing to do with combine reducers books
                        //but state.books(R)-? is from the combine reducers
    };
}

//anything returned returned from this function will end up as  props on the booklist container
function mapDispathToProps(dispatch) {
//whenever the selectBook is called,the result should be passed to all of our reducers
    return bindActionCreators({
                                selectBook:selectBook,
                              },dispatch);
                }
//lhs is key selectBook and rhs is the value selectBook from the action creator selectBook.
//lhs selectBook will be a props in this container

//promote   BookList  from a component to a conatainer  -It needs know the about the this new dispatch method ,selectBook.
//make it avaiablee as a prop
export default connect(mapStateToProps,mapDispathToProps)(BookList);
