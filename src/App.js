//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Emplist from './component/Emplist';
import ProductList from './component/Empdetails';
import ButtonOperation from './component/ButtonOpertation';
// import Form  from './Form/form';
// import ParentComponent from './component/ParentComponent';
// import PureClass from './component/PureClass';
// import RefsDemo from './component/RefsDemo';
// import RefComponent from './component/RefComponent ';
 //import HoverComp from './Viewall/HoverComp';
//  import EmpInfo from './Error/EmpInfo';
//  import ErrorMessage from './Error/ErrorMessage';
  // import Product from './HOC/Product';
  // import ProdDetails from './HOC/ProdDetails';   

//  import ParentContext from './Context/ParentContext';

// import UserGetData from './RestApi/UsersGetData';

// import UsersPostData from './RestApi/UsersPostData';

import FormEffect from './HooksApi/FormEffect ';

 //export const  Context = React.createContext()

  

//  const themes = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee"
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222"
//   }
// };

// export const ColorContext = React.createContext(themes.light);
function App() {
  return (
    <div >
      
             
      
     {/* <h3> Emplyee details List </h3> */}
      <Emplist empid= "1" rollno="2000" company="Sony" designation= "Dba developer"  Rating="4" />
      
      <ProductList/>
      <ButtonOperation/>
      {/* <Form/>    */}

       {/* <ParentComponent/> 
      <PureClass/> 
      <RefsDemo/>
      <RefComponent/> */}

    {/* <HoverComp/>  */}
      
     {/* <ErrorMessage>
        <EmpInfo EmpName="Ajay" />
      </ErrorMessage>
      <ErrorMessage>
        <EmpInfo EmpName="Aravind" />
      </ErrorMessage>
      <ErrorMessage>
        <EmpInfo EmpName="Ashik" />
      </ErrorMessage>
      <ErrorMessage>
        <EmpInfo EmpName="Anbu" />
      </ErrorMessage>     */}
  
       {/* <Product/>
      <ProdDetails/>  */}
   
   
    
        {/* <Context.Provider value={'Ashik'}> */}
          {/* <ColorContext.Provider value={themes.dark}>

          <ParentContext/> 

          </ColorContext.Provider>
          */}

        {/* </Context.Provider> */}


        {/* <UserGetData/> */}

        {/* <UsersPostData/> */}

        <FormEffect/>


    </div>

  );
}

export default App;
