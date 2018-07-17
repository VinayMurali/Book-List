import React,{Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class BookDetail extends Component{
      render(){

        if(!this.props.book){//if this.props.book dosen exits yet
            return <div>Select  a book to get started</div>

              }
          return (
                <div className="center">
                  <h3 className="center">The selected Book Is:</h3>
                  <div>
                    <div>Title:{this.props.book.title}</div>
                    <div>Pages:{this.props.book.pages}</div>
                  </div>
               </div>
          )
      }
}

function mapStateToProps(state) {
    return{
      book:state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);
