function Todoitem(){

let todoName ='Buy milk';
let tododate='4/07/2022';






 return<div class="container">
 <div class="row sk-row">
 <div class="col-6">{todoName}</div>
 <div class="col-4">0{tododate}</div>
 <div class="col-2">
 <button type="button" class="btn btn-danger sk-button">Delete</button>
 </div>
</div>
</div>
}

export default Todoitem;