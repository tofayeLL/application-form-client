import React from 'react';

import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import DashboardHome from './DashboardPages/DashboardHome/DashboardHome';
import AllApplicant from './AllApplicant/AllApplicant';


const Dashboard = () => {
    // const { path, url } = useRouteMatch();
    return (
        <div /* style={{ display: "flex", height: "100vh" }} */ className='flex h-[100vh] '>
            {/* Sidebar */}
            <div style={{ width: "250px", background: "#f4f4f4", padding: "20px" }}>
                <h2>Dashboard</h2>
                <nav>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li style={{ marginBottom: "10px" }}>
                            <Link to="/dashboard/home">Dashboard Home</Link>
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                            <Link to="/dashboard/applicant">All Applicant</Link>
                        </li>

                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 lg:px-4 px-0 bg-white ">

                <Switch >
                    <Route exact path="/dashboard/home" component={DashboardHome} />
                    <Route path="/dashboard/applicant" component={AllApplicant} />

                </Switch>
           
        </div>
        </div >
    );
};

export default Dashboard;