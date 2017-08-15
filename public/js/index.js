import React from "react";
import {Component} from "react-dom";
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() {
        return <div>
            <AddTodo/>
            <TodoList/>
            <Footer/>
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

class TodoList extends React.Component {

    render() {
        let todoList = [1, 2, 3].map((element, index) => {
            return <div key={index}>
                <input type="checkbox"/>
                <span>{element}</span>
                <button type="button">删除</button>
            </div>
        });

        return <div>
            {todoList}
        </div>
    }
}

class Footer extends React.Component {
    render() {
        const filterName = ["ALL", "ACTIVE", "COMPLETED"].map((element, index) => {
            return <div key={index} style={{"display":"inline"}}>
                <a>{element}&nbsp;&nbsp;</a>
            </div>
        });
        return <div>
            {filterName}
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));



