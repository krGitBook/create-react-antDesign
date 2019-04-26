import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import {Menu} from'antd';
import {
 Welcome,
 Initialize
} from 'pages';
import './index.less'
var navs = [
  {textValue:'首页',router:'/',component:Welcome},
  {textValue:'关于',router:'/news',component:Initialize}
]
export default class DevRouter extends React.Component{
  constructor(props,context){
  super(props, context);
        this.state = {
          activeIndex:0,
        }
  }

  click = (index) =>{
    var activeIndex = index;
    this.setState({
      activeIndex
    })
  }
  
  renderLink=()=>{
    let {activeIndex} = this.state;
    var list = navs.map((item,index)=>{
          if(item.textValue){
            return (
                    <Menu.Item key = {index}>
                        <Link to={item.router}
                          onClick = {() =>{
                            this.click(index);
                          }}
                          style = {{color:activeIndex == index ? "#75C82B" : "#fff"}}
                        >
                          {item.textValue}
                        </Link>
                      </Menu.Item>
                   )
          }
      })
      return list;
  }
    
	render() {
	    return (
        <div className = "ui-react-box">
          <div className = "ui-react-left">
             <Menu 
              mode="inline"
              theme="dark"
              className = "router-list" >
                  {this.renderLink()}
              </Menu>
          </div> 
          <div className = "ui-react-content">
            <div className = "ui-react-right-content">
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/news" component={Initialize} />
              </Switch>
            </div>
          </div>
        </div>
	    );
	  }
}
