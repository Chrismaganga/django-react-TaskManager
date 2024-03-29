import "./App.css";
import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from 'axios';
import Footer from "./components/Footer";
import styled from 'styled-components';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes,   Route } from 'react-router-dom';

// create a class that extends the component
class App extends Component {

// add a constructor to take props
constructor(props) {
	super(props);
	
	// add the props here
	this.state = {
	
	// the viewCompleted prop represents the status
	// of the task. Set it to false by default
	viewCompleted: false,
	activeItem: {
		title: "",
		description: "",
		completed: false
	},
	
	// this list stores all the completed tasks
	taskList: []
	};
}

// Add componentDidMount()
componentDidMount() {
	this.refreshList();
}


refreshList = () => {
	axios //Axios to send and receive HTTP requests
	.get("http://127.0.0.1:8000/api/tasks/")
	.then(res => this.setState({ taskList: res.data }))
	.catch(err => console.log(err));
};

// this arrow function takes status as a parameter
// and changes the status of viewCompleted to true
// if the status is true, else changes it to false
displayCompleted = status => {
	if (status) {
	return this.setState({ viewCompleted: true });
	}
	return this.setState({ viewCompleted: false });
};

// this array function renders two spans that help control
// the set of items to be displayed(ie, completed or incomplete)
renderTabList = () => {
	return (
	<div className="my-5 tab-list">
		<span
		onClick={() => this.displayCompleted(true)}
		className={this.state.viewCompleted ? "active" : ""}
		>
		completed
			</span>
		<span
		onClick={() => this.displayCompleted(false)}
		className={this.state.viewCompleted ? "" : "active"}
		>
		Incompleted
			</span>
	</div>
	);
};
// Main variable to render items on the screen
renderItems = () => {
	const { viewCompleted } = this.state;
	const newItems = this.state.taskList.filter(
	(item) => item.completed === viewCompleted
	);
	return newItems.map((item) => (
	<li
		key={item.id}
		className="list-group-item d-flex justify-content-between align-items-center"
	>
		<span
		className={`todo-title mr-2 ${
			this.state.viewCompleted ? "completed-todo" : ""
		}`}
		title={item.description}
		>
		{item.title}
		</span>
		<span>
		<button
			onClick={() => this.editItem(item)}
			className="btn btn-secondary mr-2"
		>
			Edit
		</button>
		<button
			onClick={() => this.handleDelete(item)}
			className="btn btn-danger"
		>
			Delete
		</button>
		</span>
	</li>
	));
};

toggle = () => {
	//add this after modal creation
	this.setState({ modal: !this.state.modal });
};


// Submit an item
handleSubmit = (item) => {
	this.toggle();
	alert("save" + JSON.stringify(item));
	if (item.id) {
	// if old post to edit and submit
	axios
		.put(`http://localhost/api/tasks/${item.id}/`, item)
		.then((res) => this.refreshList());
	return;
	}
	// if new post to submit
	axios
	.post("http://localhost/api/tasks/", item)
	.then((res) => this.refreshList());
};

// Delete item
handleDelete = (item) => {
	alert("delete" + JSON.stringify(item));
	axios
	.delete(`http://localhost/api/tasks/${item.id}/`)
	.then((res) => this.refreshList());
};

// Create item
createItem = () => {
	const item = { title: "", description: "", completed: false };
	this.setState({ activeItem: item, modal: !this.state.modal });
};


editItem = (item) => {
	this.setState({ activeItem: item, modal: !this.state.modal });
};


render() {
	return (
		<>
		<Wrap>
      <Router>
        <Navbar/>
	
       
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/sign-up" element={ <SignUp/>} />
          <Route path="/Blog" element={ <Blog/>} />
          <Route path="/About" element={ <About/>} />
        
        </Routes>
      </Router>
	  
		<Main>
		<div className="row ">
		<div className="col-md-6 col-sm-10 mx-auto p-0">
			<div className="card p-3">
			<div className="">
				<button onClick={this.createItem} className="btn btn-info">
				Add task
				</button>
			</div>
			{this.renderTabList()}
			<ul className="list-group list-group-flush">
				{this.renderItems()}
			</ul>
			</div>
		</div>
		</div>
		{this.state.modal ? (
		<Modal
			activeItem={this.state.activeItem}
			toggle={this.toggle}
			onSave={this.handleSubmit}
		/>
		) : null}
		
	</Main>
	<Footer/>
	</Wrap>
	</>
	);
}
}
export default App;

const Main = styled.div`
width: 150vh;
height: 70vh;
background-color: lightyellow;
justify-content: flex-start;
-ms-content-zoom-limit-max

`

const Wrap = styled.div`
justify-content: flex-start;
flex: 1rem;
width: max-content;
height: max-content;
justify-content: baseline;


`