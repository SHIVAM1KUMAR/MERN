function AddTodo(){
 return(
       
          
           <div class="container text-center">
 
  <div class="row sk-row">
    <div class="col-6">
      <input type="text" placeholder="Enter Todo here"></input>
    </div>
    <div class="col-4">
      <input type="date" ></input>
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success sk-button">
          Add
    </button>
    </div>
  </div>
  </div>
 );
}

export default AddTodo;