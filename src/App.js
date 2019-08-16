import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { link } from 'fs';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {

	constructor(props){
		super(props);

		this.state={
			title: 'React Crud',
			act: 0,
			index: '',
			datas: [],
			clicks: 0,
			update: 0
		}
	}

	// componentDidMount(){
	// 	this.refs.title.focus();
	// }

	componentDidMount(){
		console.log('componentDidMount');
	}

	componentDidUpdate(){
		console.log('componentDidUpdate');
	}

	fSubmit = (e) => {
		e.preventDefault();

		let datas = this.state.datas;
		let title = this.refs.title.value;
		let content = this.refs.content.value;

		//this.setState({ title: 0 });
		if(this.state.act === 0){
			let i = this.state.clicks;
			
			let data = {
				title, content
			}

			datas.push(data);

			//console.log(datas[2]);

			this.setState({ clicks: this.state.clicks + 1 });

			//localStorage.setItem('postData-'+i, JSON.stringify(data))
			localStorage.setItem('postData', JSON.stringify(datas))
		}else{
			let index = this.state.index;
			datas[index].title = content;
			datas[index].content = content;
		}

		// this.setState({
		// 	datas: datas,
		// 	act: 0
		// });

		this.refs.myForm.reset();
		this.refs.myForm.focus();
	}

	// fRemove1 = (e) => {
	// 	//e.preventDefault();
		
	// }

	fRemove = (i,e) => {
		e.preventDefault();

		this.setState({ update : 1})
		
		localStorage.removeItem("postData-"+i);

		//this.refs.myForm.reset();
		//this.refs.title.focus();

	}

	fEdit = (i) => {
		let data = this.state.datas[i];
		// this.refs.title.value = data.title;
		// this.refs.content.value = data.content;

		// this.setState({
		// 	act: 1,
		// 	index: i
		// });

		// this.refs.title.focus();
		// datas.splice(i, 1);
		// this.setState({
		// 	datas : datas 
		// });

		// this.refs.myForm.reset();
		// this.refs.name.focus();

	}

	// loadData = () => {
	// 	const postData = Object.values(localStorage)
	// 	console.log(this.state.clicks);
	// 	const tableDetails = postData.map((key, i) => 
	// 		<tr key={i}>
	// 			<td>{i}</td>
	// 			<td>{JSON.parse(postData[i]).title}</td>
	// 			<td>{JSON.parse(postData[i]).content}</td>
	// 			<td>
	// 				<button onClick={(e) => this.fEdit(i,e)} className="btn btn-info btn-sm mr-1">edit</button>
	// 				<button type="submit" onClick={(e) => this.fRemove(i,e)} className="btn btn-danger btn-sm mr-1">remove</button>
	// 			</td>
	// 		</tr>
	// 	);

	// 	return tableDetails;
	// } 

	loadData = () => {
		//const postData = Object.values(localStorage)
		let postData = localStorage.getItem('postData');

		let testarr = '[{"title":"xzcxz","content":"zxcxz"},{"title":"ccc","content":"cc"}]'
		let test = JSON.parse(testarr).title


		//let postData1 = JSON.parse(array).title;

		//let testing = JSON.parse(postData);
	//	console.log(testing[0]);
		// const tableDetails = postData.map((value, i) => 
		// 	<tr key={i}>
		// 		<td>{i}</td>
		// 		<td>{JSON.parse(value).title}</td>
		// 		{/* <td>{JSON.parse(postData[i]).content}</td>
		// 		<td>
		// 			<button onClick={(e) => this.fEdit(i,e)} className="btn btn-info btn-sm mr-1">edit</button>
		// 			<button type="submit" onClick={(e) => this.fRemove(i,e)} className="btn btn-danger btn-sm mr-1">remove</button>
		// 		</td> */}
		// 	</tr>
		// );

		return test;
	} 

	render() {
		const datas = this.state.datas
		//let postData = JSON.parse(localStorage.getItem(''));
		const postData = Object.values(localStorage)

		const tableDetails = this.loadData();
		// const tableDetails = postData.map((key, i) => 
		// 	<tr key={i}>
		// 		<td>{i}</td>
		// 		<td>{JSON.parse(postData[i]).title}</td>
		// 		<td>{JSON.parse(postData[i]).content}</td>
		// 		<td>
		// 			<button onClick={(e) => this.fEdit(i,e)} className="btn btn-info btn-sm mr-1">edit</button>
		// 			<button onClick={() => this.fRemove(i,'testing')} className="btn btn-danger btn-sm mr-1">remove</button>
		// 		</td>
		// 	</tr>
		// );
		
		const testing_array = [
			{title: "test1", content: "test1"},
			{title: "test2", content: "test2"}
		]
		
		return (
			<div className="App">
				<div className="container ">
					<form ref="myForm" className="" >
						<div className="form-group">
							<label htmlFor="name" className="text-left">Title:</label>
							<input type="text" ref="title" placeholder="Title" className="form-control" id="name"/>
						</div>
						<div className="form-group">
							<label htmlFor="address">Content:</label>
							<input type="text" ref="content"  placeholder="Content" className="form-control" id="address"/>
						</div>
							<button onClick={(e) => this.fSubmit(e)} className="btn btn-primary">Submit</button>
							{/* <button onClick={this.IncrementItem} type="button" className="btn btn-primary">clcik</button> */}
						</form>
				</div>
				<br/>

				<table className="table table-striped">
					<thead>
						<tr>
							<th>#</th>
							<th>Title</th>
							<th>Content</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>		
						{tableDetails}
					</tbody>
				</table>
			</div>
		);
	}

	// componentWillUpdate(nextProps, nextState){
	// 	console.log('componentWillUpdate');
	// }

	
}

export default App;
