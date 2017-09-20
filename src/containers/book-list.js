// A container is a react component that has direct connection to the state managed by redux

// A container is smart component

// Most parent componenet that cares about particular piece of state can be treated as container.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
    
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title} 
                onClick = {() => this.props.selectBook(book)}
                className="list-group-item"> 
                {book.title} 
                </li> 
                );
        });
    };
    
    render() {
        // console.log(this.props.vik) => 123;
        return (
                 <ul className="list-group col-sm-4">
                    {this.renderList()}
                 </ul>
        );
    };
};

function mapStateToProps(state){
    // whatever returns from here will show up as props inside of BookList
    return {
        // vik : 123;
        books : state.books
    };
}


// ANything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    // whenever selectbook is called, the result should be passed to all our reducers
    return bindActionCreators({ selectBook : selectBook }, dispatch);
}


// promote bookList from a component to a container - it needs to know about this 
// new diaptch method, selectBook. Make it available as a prop
export default connect(mapStateToProps,mapDispatchToProps)(BookList);