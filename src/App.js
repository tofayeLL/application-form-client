import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import './App.css';
import './index.css';
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
import { Toaster } from "react-hot-toast";
import CheckTailwind from "./components/CheckTailwind/CheckTailwind";
import Dashboard from "./components/Dashboard/Dashboard";

// Component to check if it's a dashboard route
const AppContent = withRouter(({ location }) => {
  // Check if the current route is a dashboard route
  const isDashboardRoute = location.pathname.includes('/dashboard');

  return (
    <div>
      {/* Conditionally render Header */}
      {!isDashboardRoute && <Header />}

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/adevertisement">
          <Advertisement></Advertisement>
        </Route>
        <Route path="/signature">
          <SignatureValidator></SignatureValidator>
        </Route>
        {/*    <PrivateRoute path="/adminRoute">
                <AdminRoute></AdminRoute>
              </PrivateRoute> */}

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

        <Route path="/login2">
          <Login2></Login2>
        </Route>
        <Route path="/login3">
          <Login3></Login3>
        </Route>
        <Route path="/tailwind">
          <CheckTailwind></CheckTailwind>
        </Route>

        <Route path="/userDashboard">
          <UserDashboard></UserDashboard>
        </Route>

        <Route path="/adminRoute">
          <AdminRoute></AdminRoute>
        </Route>
        <Route path="/applicant">
          <Applicant></Applicant>
        </Route>
      </Switch>
    </div>
  );
});

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <UserProvider>
          <Router>
            <AppContent />
          </Router>
        </UserProvider>
      </AuthProvider>
      <Toaster />
    </div>
  );
}

export default App;
