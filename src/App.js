import { Component } from 'react';
import './App.css';
import Prod from './Prod';
import Todo from './Todo';

class App extends Component{

  constructor(props){
    super(props)
    this.state=
     ({
      newItem:"",
      newBody:"",
      list:[
        {
          id: 1 ,
        value: "to read a book",
        body: "Read a specific genre of your interest"
        },
        {
          id:2,
          value: "to go for a walk",
          body:"Exercising for atleast 15 minutes"
        }
      ]
    })
  }
  // state= ({
  //   newItem:"",
  //   newBody:"",
  //   list:[
  //     {
  //       id: 1 ,
  //     value: "to read a book",
  //     body: "Read a specific genre of your interest"
  //     },
  //     {
  //       id:2,
  //       value: "to go for a walk",
  //       body:"Exercising for atleast 15 minutes"
  //     }
  //   ]
  // })

  changehandler =(e)=>{
    this.setState({
      newItem: e.target.value,
      
    })
  }
  changeBody =(e)=>{
    this.setState({
      newBody: e.target.value,
      
    })
  }

  addTask = ()=>{
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
      body: this.state.newBody.slice()
    }

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem:"",
      newBody:""
    })

    // const addbtn = document.getElementById("addbtn");
    
       
    //      addbtn.innerHTML="Add Task";
  }
 
  ondelete = (id)=>{
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);
    this.setState({
      list: updatedList
    })
  }
  
  onupdate =(id)=>{
    const list = [...this.state.list];
    const updatedItem = list.find((item) =>{ return(item.id === id)});
    const updatedList = list.filter(item => item.id !== id);
    
    this.setState({
      newItem: updatedItem.value,
      newBody: updatedItem.body,
      list:updatedList
    })

  }
  ontoggle = ()=>{
    const addbtn = document.getElementById("addbtn");
    const updatebtn =document.getElementById("updatebtn");
    updatebtn.addEventListener("mouseover", ()=>{
       console.log( addbtn.innerHTML);

         addbtn.innerHTML="Update"
       
    })
    
  }

  
  render(){

  return (
   <>

        <div>
            <div className="add_item container my-3">
                <h1 className="add_item_head text-center">Add Todo Item</h1>
               
                  <Todo itemValue = {this.state.newItem} itemBody={this.state.newBody} changed={this.changehandler} changedBody={this.changeBody}/>
              
                  <button onClick={this.addTask} id="addbtn" className=" btn-style " >Add Task</button>         
            </div>
        </div>

        <div className="todos_div">
            <h1 className="">Todos List :-</h1>
            <table border="1">
                <thead>
                  <tr>
                    {/* <td>S.no</td> */}
                      <td>Title</td>
                      <td>Body</td>                  
                      <td colSpan="2">Action</td>
                  </tr>
                </thead>
                <tbody>
                      {this.state.list.map((item)=>{
                        return(
                            <tr key={item.id}>
                                {/* <td>{item.id}</td> */}
                                <td>{item.value}</td>
                                <td>{item.body}</td>
                                <td><button className="btn btn-danger btn-sm" onClick={()=>{this.ondelete(item.id)}}>Delete</button></td>
                                <td><button className="btn btn-success btn-sm" onClick={()=>{this.onupdate(item.id)}}>Update</button></td>
                            </tr>
                        );
                    })}
                    
                </tbody>
            </table>
        </div>
   </>
  );
}}

export default App;
