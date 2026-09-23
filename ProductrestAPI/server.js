import express from "express";
const app= express();
app.use(express.json());
let users=[{
    id:1,
    name:"A",
    email:"a@abes.ac.in"
},
{
    id:2,
    name:"B",
    email:"b@abes.ac.in"
}];
//GET request to fetch all users
app.get("/users",(req,res)=>{
    res.json(users);
});
//POST request to create a new user
app.post("/users",(req,res)=>{
    const user={
        id:users.length+1,
        name:req.body.name,
        email:req.body.email
    };
    users.push(user);
    res.json(user);
});
// PUT request to update a user by ID
app.put("/users/:id",(req,res)=>{
    let user=users.find(u=>u.id==req.params.id);
    user.name=req.body.name;
    user.email=req.body.email;
    res.json(user);
});
//Delete request to delete a user by ID
app.delete("/users/:id",(req,res)=>{
    users=users.filter(u=>u.id!=req.params.id);
    res.json({message:"User deleted successfully"});
})
app.listen(8000,()=>{
    console.log("Server is running on http://localhost:8000");
});
//Create RESTAPI for 100 products with id, name, price, description, category.
// Implement GET, POST, PUT, and DELETE requests for products.