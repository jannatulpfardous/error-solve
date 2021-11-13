// import React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Divider from '@material-ui/core/Divider';
// import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
// import IconButton from '@material-ui/core/IconButton';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { createMuiTheme,ThemeProvider } from '@material-ui/core'
// import Footer from '../../Components/Footer/Footer';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// import {useHistory} from "react-router-dom"

// const drawerWidth = 240;





// const useStyles = makeStyles((theme) => ({

//   root: {
//     display: 'flex',
//   },
//   drawer: {
//     [theme.breakpoints.up('sm')]: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//   },

//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
//   // necessary for content to be below app bar
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,

//   },


//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// page:{
//       width: "100%",
//       marginTop:"100px",
//       marginLeft:"10px"

//   }




// }));



// function Dashboard({children}) {

//   const history= useHistory()



//   const classes = useStyles();
//   const theme = useTheme();
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };



//   const MyList = [

//     {
//       text : "Review",
//       icon :<InboxIcon />,
//       path :"/review"
//     },
//      {
//       text : "My Order",
//       icon :<InboxIcon />,
//       path :"/myOrder"
//     },
//     {
//       text : "Pay",
//       icon :<InboxIcon />,
//       path :"/pay"
//     },
//     {
//       text : "Manage Products",
//       icon :<InboxIcon />,
//       path :"/ManageProducts"
//     },
//     {
//       text : "Make ADMIN",
//       icon :<InboxIcon />,
//       path :"/makeAdmin"
//     },
//      {
//       text : "aDD pRODUCT",
//       icon :<InboxIcon />,
//       path :"/addProduct"
//     },



//      {
//       text : "Manage All Orders",
//       icon :<InboxIcon />,
//       path :"/ManageAllOrders"
//     },
//      {
//       text : "Log Out",
//       icon :<InboxIcon />,
//       path :"/loggedOut"
//     },






//   ]









//   const drawer = (
//     <div  className={classes.root}>
//       <div className={classes.toolbar} />

//       <List style={{marginTop:"60px"}}>
//         {MyList.map((text, index) => (


//           <ListItem button  onClick={()=>history.push(text.path)}>




//            <ListItemIcon>{text.icon}</ListItemIcon>



//            <ListItemText>{text.text}</ListItemText>

//           </ListItem>



//         ))}






//       </List>
//     </div>
//   );






//   return (
//     <div className={classes.root}>



//       <CssBaseline />
//       <AppBar position="fixed" className={classes.appBar}>


//        <Toolbar style={{backgroundColor:'#413b63'}}>

//          <MenuIcon />


//      </Toolbar>
//       </AppBar>

//       <nav className={classes.drawer} aria-label="mailbox folders">
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Hidden smUp implementation="css">
//           <Drawer

//             variant="temporary"
//             anchor={theme.direction === 'rtl' ? 'right' : 'left'}
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             classes={{
//               paper: classes.drawerPaper,
//             }}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//         <Hidden xsDown implementation="css">
//           <Drawer
//             classes={{
//               paper: classes.drawerPaper,
//             }}
//             variant="permanent"
//             open
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//       </nav>

//       <div className={classes.page}>
//       {children}
//        <Footer></Footer>

//       </div>




//     </div>
//   );
// }


// export default Dashboard






import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Footer from '../../Components/Footer/Footer';

import HomeIcon from '@material-ui/icons/Home';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import EvStationIcon from '@material-ui/icons/EvStation';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';


import { useHistory } from "react-router-dom"

const drawerWidth = 240;





const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,

  },


  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  page: {
    width: "100%",
    marginTop: "100px",
    marginLeft: "10px"

  }




}));



function Dashboard({ children }) {

  let user = JSON.parse(localStorage.getItem("user"));


  const history = useHistory()



  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(`https://arcane-bayou-73846.herokuapp.com/nailpolishAdmin1`)
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, []);


  const [data1, setdata1] = useState("");



  useEffect(() => {

    const newdata = data.filter(v => v.email == user.email);
    setdata1(newdata[0]?.email)

  }, [data]);






  const drawer = (
    <div className={classes.root}>
      <div className={classes.toolbar} />

      <List style={{ marginTop: "60px" }}>

        <ListItem button onClick={() => history.push("/")}>




          <ListItemIcon><HomeIcon /></ListItemIcon>



          <ListItemText>Home</ListItemText>

        </ListItem>





        {(user && user.email == data1) ? <div>






          <ListItem button onClick={() => history.push("/makeAdmin")}>




            <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>



            <ListItemText>Make Admin</ListItemText>

          </ListItem>


          <ListItem button onClick={() => history.push("/addProduct")}>




            <ListItemIcon><InboxIcon /></ListItemIcon>



            <ListItemText>Add Product</ListItemText>

          </ListItem>


          <ListItem button onClick={() => history.push("/ManageProducts")}>




            <ListItemIcon>< NoteAddIcon /></ListItemIcon>



            <ListItemText>Manage Products</ListItemText>

          </ListItem>


          <ListItem button onClick={() => history.push("/ManageAllOrders")}>




            <ListItemIcon><EvStationIcon /></ListItemIcon>



            <ListItemText>Manage All Orders</ListItemText>

          </ListItem>

        </div> : <div> <ListItem button onClick={() => history.push("/review")}>




          <ListItemIcon><InboxIcon /></ListItemIcon>



          <ListItemText>Review</ListItemText>

        </ListItem>




          <ListItem button onClick={() => history.push("/myOrder")}>




            <ListItemIcon><MailIcon /></ListItemIcon>



            <ListItemText>My Order</ListItemText>

          </ListItem>



          <ListItem button onClick={() => history.push("/pay")}>




            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>



            <ListItemText>Pay</ListItemText>

          </ListItem>
        </div>}


        <ListItem button onClick={() => history.push("/loggedOut")}>




          <ListItemIcon>< BubbleChartIcon /></ListItemIcon>



          <ListItemText>Log Out</ListItemText>

        </ListItem>








      </List>
    </div>
  );






  return (
    <div className={classes.root}>



      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>


        <Toolbar style={{ backgroundColor: '#413b63' }}>

          <MenuIcon />


        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer

            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <div className={classes.page}>




        {children}
        <Footer></Footer>

      </div>




    </div>
  );
}


export default Dashboard;