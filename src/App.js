import React from 'react';
import { connect } from 'react-redux';
import { addList, deleteList, toggleHidden, addTask } from './actions';
import './App.css';
import AppItem from './AppItem.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  addList() {
    this.setState({ list: this.props.list })
    this.props.dispatch(addList())
  }

  deleteList(i) {
    console.log('->', i);
    this.setState({ list: this.props.list })
    this.props.dispatch(deleteList(i));
  }

  toggleHidden(i) {
    this.setState({ list: this.props.list })
    this.props.dispatch(toggleHidden(i));
  }
  render() {
    return (
      <div className="container">
        <button className="btn btn-primary" onClick={this.addList.bind(this)}>Add</button>
        <div className="App">{
          this.props.list.map((item, i) => {
            return (
              <div className="box" key={i}>
                <div className="top">
                  <input type="text" className="title" placeholder="Add Title" />
                  <button className="btn btn-danger float-right" onClick={this.deleteList.bind(this, i)}>X{i}</button>
                  <button className="btn btn-primary float-right" onClick={this.toggleHidden.bind(this, i)}>__</button>
                </div>
                {
                  (this.props.list[i].isHidden === false) && <AppItem index={i} />
                }
              </div>
            )
          })
        }
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
