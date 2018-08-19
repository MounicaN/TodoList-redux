import React from 'react';
import { connect } from 'react-redux';
import { addTask, deleteTask } from './actions';
import './App.css';

class AppItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
        this.EnterTask = this.EnterTask.bind(this);
        this.AddTask = this.AddTask.bind(this);
    }

    EnterTask(e) {
        this.setState({ task: e.target.value });
    }

    AddTask(e) {
        this.props.dispatch(addTask(this.props.index, this.state.task));
        this.setState({ task: '' })
        this.setState({ list: this.props.list })
    }

    DeleteTask(i) {
        this.setState({ list: this.props.list });
        this.props.dispatch(deleteTask(i, this.props.index));
    }

    render() {
        return (
            <div className="bottom">
                <br />
                <input type="text" placeholder="Add Item" onChange={this.EnterTask} value={this.state.task} />
                <button className="btn btn-success" onClick={this.AddTask}>Add</button>
                <ul>
                    {
                        this.props.list[this.props.index].tasks.map((item, i) =>
                            <li key={i} onDoubleClick={this.DeleteTask.bind(this, i)}><input type="checkbox" />{item}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppItem);