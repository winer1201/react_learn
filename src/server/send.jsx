import { renderToString } from 'react-dom/server';
import React from 'react';
import posts from './../controller/posts';
import Page from './../view/page';
import template from './template';


export default (req, res, next) => {
	let data = "hello world";
	res.status(200).send(
		template(
			renderToString(<Page data={ data }/>),
			data
		)
	);
}