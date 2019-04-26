import React from 'react';
import { observer ,inject} from 'mobx-react'
import {
	Button
} from "antd"
import Http from 'plugins/http';

@observer
@inject('WelComeModel')
class Welcome extends React.Component{
    constructor(props, context) {
        super(props, context);
        
    }
    
    componentDidMount(){
        console.log('store--stqae',this.props.WelComeModel.name);
        Http.get('my-customer-list').then((data)=>{
            console.log('date--',data);
        }).catch((error)=>{
            console.log('error--',error);
        })
    }

    render(){
        return (
            <div>
                welcome home
                <Button type="primary">nihao</Button>
            </div>
        )
    }
}

export default Welcome