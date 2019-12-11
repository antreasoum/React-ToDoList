import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);         
    }
    createTasks(item) {
        return <ul onClick={() => this.delete(item.key)}
            key={item.key}>{item.text}</ul>
    }

    delete(key) {
        console.log("Key is: " + key);
        this.props.delete(key);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul class="container-fluid" className="theList">
                {listItems}
            </ul>

        );
    }
}

export default TodoItems;