/*
* 入口，路由
*/

import React from "react"
import { render } from "react-dom"
import { browserHistory, Router, Route,IndexRoute } from "react-router"

import Page from "./page";
let data = window.__DATA__ ? window.__DATA__ : "";

const Main = React.createClass({
  	render(){
    	return (
      		<Page data={ data }/>
    	)
  	}
});

export default Main;