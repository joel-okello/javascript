var Products  = [];
var tags_inclusive = "";


function loadsample()
{


}


function myFunction() {
    
 


    var x = document.getElementById("myform");
    var item_name_value = document.getElementById('item_name_id').value;
    var item_qty_value = document.getElementById('item_qty_id').value;
    var item_cost_value = document.getElementById('item_cost_id').value;

    document.getElementById('item_name_id').value = ""; 
    document.getElementById('item_qty_id').value = "";
    document.getElementById('item_cost_id').value ="";
    
    create_obj(item_name_value,item_qty_value,item_cost_value);

}


function edit_item(item_index){
    document.getElementById('item_name_id').value = Products[item_index-1].product_name; 
    document.getElementById('item_qty_id').value = Products[item_index-1].product_cost;
    document.getElementById('item_cost_id').value =Products[item_index-1].product_qty;
    Products.splice(item_index-1, 1);
    re_display_all();
}


function delete_obj(item_index){
    alert("You would like to delete :"+Products[item_index-1].product_name);
    Products.splice(item_index-1, 1);
    re_display_all();

  

}





function create_obj(name,qty,amt) {

	var product_object = {
    product_name:name,
    product_cost:qty,
    product_qty:amt,
    product_id:Products.length+1,
    }; 

    Products.push(product_object);
    addtags(product_object)   
}


function addtags(product_object1) {


     tags_inclusive += "<tr><td>"+product_object1.product_name+"</td><td>"+product_object1.product_cost+"</td><td>"+product_object1.product_qty+"</td><td><button onclick='edit_item("+product_object1.product_id+")'>Edit</button></td><td><button onclick='delete_obj("+product_object1.product_id+")'>Delete</button></td></tr>";
     display_data(tags_inclusive);

}



function display_data(text) {


    document.getElementById("demos").innerHTML = text;
}


function re_display_all() {

    tags_inclusive = "";
  
    for(i=1;i<=Products.length;i++)
    {
    
      addtags(Products[i]);
    }
    if(Products.length==0)
      display_data("");
}









