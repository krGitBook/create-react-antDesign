import React from 'react';

import {
	Input
} from "antd"

export default class Initialize extends React.Component{
    constructor(props, context) {
        super(props, context);
        
    }

    render(){
        return (
            <div>
                 initialize
                <Input></Input>
            </div>
        )
    }
}