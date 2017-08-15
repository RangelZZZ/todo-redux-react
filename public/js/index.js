import React from "react";
import {Component} from "react-dom";
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() {
        return <div>
            <AddTodo/>
            {/*<TodoList/>*/}
            {/*<Footer/>*/}
        </div>;
    }
}


class AddTodo extends React.Component {
    render() {
        return <div>
            <input type="text"/>
            <button type="butoon">添加</button>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));



