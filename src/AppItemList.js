import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from './actions';
import './App.css';

class AppItemList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.list[this.props.index].tasks.length);
        //console.log(listItems.length);
        return (
            <ul>
                {
                    this.props.list[this.props.index].tasks.map((item, i) =>
                        <li key={i} ><input type="checkbox" />{item}</li>
                    )
                }
            </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(AppItemList);