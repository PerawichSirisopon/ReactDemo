import React, { Component } from "react";

export default class StateInClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "1",
            name: props.name
        }
    }
    render() {
        return (
            <div>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}