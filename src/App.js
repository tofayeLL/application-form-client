import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import ApplicationForm from "./components/ApplicationForm/ApplicationForm";
import Home from "./components/Home/Home";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import Users from "./components/Users/Users";
import Header from './components/Header/Header';
import SignatureValidator from "./components/SignatureValidator/SignatureValidator";
import AdmitCard from "./components/AdmitCard/AdmitCard";
import PaymentStatus from "./components/PaymentStatus/PaymentStatus";
import Instructions from "./components/Home/Instructions/Instructions";
import Advertisement from "./components/Advertisement/Advertisement";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import Login from "./components/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Applicant from "./components/Applicant/Applicant";
import Login2 from "./components/Login/Login2";
import Login3 from "./components/Login/Login3";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import UserProvider from "./contexts/UserProvider/UserProvider";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <UserProvider>
          <Router>
            <div>
              <Header></Header>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/adevertisement">
                  <Advertisement></Advertisement>
                </Route>
                <Route path="/signature">
                  <SignatureValidator></SignatureValidator>
                </Route>

                <ProtectedRoute path="/payment">
                  <PaymentStatus></PaymentStatus>
                </ProtectedRoute>



                <Route path="/instruction">
                  <Instructions></Instructions>
                </Route>
                <Route path='/admitCard/:id'>
                  <AdmitCard></AdmitCard>
                </Route>
                <Route exact path="/users">
                  <Users></Users>
                </Route>
                <Route path="/applicationForm">
                  <ApplicationForm></ApplicationForm>
                </Route>
                {/* <Route path="/userCollection/update/:id">
                <UpdateUser></UpdateUser>
              </Route>
              <PrivateRoute path="/adminRoute">
                <AdminRoute></AdminRoute>
              </PrivateRoute> */}
                {/*    <Route path="/login">
                <Login></Login>
              </Route> */}
                <Route path="/login2">
                  <Login2></Login2>
                </Route>
                <Route path="/login3">
                  <Login3></Login3>
                </Route>


                <ProtectedRoute path="/userDashboard">
                  <UserDashboard></UserDashboard>
                </ProtectedRoute>



                {/* <PrivateRoute path="/applicant">
                <Applicant></Applicant>
              </PrivateRoute> */}
                <Route path="/adminRoute">
                  <AdminRoute></AdminRoute>
                </Route>
                <Route path="/applicant">
                  <Applicant></Applicant>
                </Route>
              </Switch>
            </div>
          </Router>
        </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
