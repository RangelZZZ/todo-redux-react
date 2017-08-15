import React from "react";
import {Component} from "react-dom";
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import reducer from "./reducers/reducer";

const store = createStore(reducer);

class App extends React.Component {

    add(text) {
        store.dispatch({
            type: "ADD",
            text
        });
    }

    delete(index) {
        store.dispatch({
            type: "DELETE",
            text: index
        });
    }

    filter(filterName) {
        store.dispatch({
            type: "SET_FILTER",
            filterName
        });
    }

    filterTodo() {
        if (store.getState().filterName === "ALL") {
            return store.getState().todolist;
        }
        else if (store.getState().filterName === "ACTIVE") {
            return store.getState().todolist.filter(todo => !todo.completed);
        } else {
            return store.getState().todolist.filter(todo => todo.completed);
        }
    }

    changeState(index) {
        store.dispatch({
            type: "CHANGE_STATE",
            text: index
        });
    }

    render() {
        return <div>
            <AddTodo onAdd={this.add.bind(this)}/>
            <TodoList todos={this.filterTodo()} onChangeState={this.changeState.bind(this)}
                      onDelete={this.delete.bind(this)}/>
            <Footer onFilter={this.filter.bind(this)}/>
        </div>;
    }
}


class AddTodo extends React.Component {

    add() {
        const text = this.inputText.value;
        this.props.onAdd(text);
        this.inputText.value = "";
    }

    render() {
        return <div>
            <input type="text" ref={(text) => {
                this.inputText = text
            }}/>
            <button type="button" onClick={this.add.bind(this)}>添加</button>
        </div>
    }
}

class TodoList extends React.Component {

    delete(index) {
        this.props.onDelete(index);
    }

    changeState(index) {
        this.props.onChangeState(index);
    }


    render() {
        let todoList = this.props.todos.map((element, index) => {
            return <div key={index}>
                <input type="checkbox" onChange={this.changeState.bind(this, index)}
                       checked={element.completed === true ? "checked" : ""}/>
                <span>{element.value}</span>
                <button type="button" onClick={this.delete.bind(this, index)}>删除</button>
            </div>
        });

        return <div>
            {todoList}
        </div>
    }
}

class Footer extends React.Component {

    filter(element) {
        this.props.onFilter(element);
    }

    render() {
        const filterName = ["ALL", "ACTIVE", "COMPLETED"].map((element, index) => {
            return <div key={index} style={{"display": "inline"}}>
                <a onClick={this.filter.bind(this, element)}>{element}&nbsp;&nbsp;</a>
            </div>
        });
        return <div>
            {filterName}
        </div>
    }
}


const renderFunction = () => {
    ReactDOM.render(<App/>, document.getElementById("root"))
};

store.subscribe(renderFunction);

renderFunction();


