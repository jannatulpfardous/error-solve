

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



import Header from './Components/Header/Header';

import Shop from './Components2/Shop';
import ShopConfirm from './Components2/ShopConfirm';

import Review from "./Components2/Review/Review";
import Pay from "./Components2/Pay/Pay";
import MyOrder from "./Components2/MyOrder/MyOrder";
import Dashboard from "./Components2/Dashboard/Dashboard";
import AddProduct from "./Components3/AddProduct/AddProduct";
import MakeAdmin from "./Components3/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Components3/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./Components3/ManageProducts/ManageProducts";
import Doc from "./Components/Doc/Doc"

import Private from "./Components4/privateRoute/PrivateRoute"

import Login from "./Components4/login/Login"
import LoggedOut from "./Components3/LoggedOut/LoggedOut"

import SignUp from "./Components4/createAccount/SignUp"



  let user = JSON.parse(localStorage.getItem("user"));




function App() {


//   const [data, setdata] = useState([]);

//   useEffect(() => {
//     fetch(`https://arcane-bayou-73846.herokuapp.com/nailpolishAdmin1`)
//       .then((response) => response.json())
//       .then((json) => setdata(json));
//   }, []);


//   const [data1, setdata1] = useState("");
  
   
     
//    useEffect(() => {
//    const newdata = data.filter(v=> v.email == user.email);
//    setdata1(newdata[0]?.email)
 
// }, [data1,user.email]);
  




  return (


    <div className="App">

      <Router>



        <div>
       

        

          <Switch>

          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>

          <Route exact path="/shop">
            <Shop></Shop>
          </Route>

          <Route exact path="/loggedOut">
            <LoggedOut></LoggedOut>
          </Route>
          <Route exact path="/Doc">
            <Doc></Doc>
          </Route>





          <Private exact path="/dashboard">
           <Dashboard></Dashboard>
          </Private> 


            <Private exact path="/shopConfirm/:id">
               <ShopConfirm></ShopConfirm>
          </Private>

          <Dashboard>

          <Private exact path="/myOrder">
            <MyOrder></MyOrder>
          </Private>

          <Private exact path="/review">
         <Review></Review>
          </Private>

         

          

         


          <Private exact path="/pay">
            <Pay></Pay>
          </Private>
 
     
         
       

       
         
          <Private exact path="/addProduct">
           <AddProduct></AddProduct>
          </Private>
          

          <Private exact path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
          </Private> 

            
          <Private exact path="/ManageAllOrders">
          <ManageAllOrders></ManageAllOrders>
          </Private>
          
          
          <Private exact path="/ManageProducts">
          <ManageProducts></ManageProducts>
          </Private>

         


          </Dashboard>

         
    
          

          



          </Switch>
        
        

        </div>



      </Router>




    </div>


  );


}

export default App;
