import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import DashboardHome from './DashboardPages/DashboardHome/DashboardHome';
import AllApplicant from './AllApplicant/AllApplicant';

const Dashboard = () => {
    return (
        <div className="flex h-screen flex-col">

            {/* Full Dashboard Header */}
            <header className="bg-slate-100 shadow-md w-full p-4 flex justify-between items-center ">
                {/* Left side: Logo */}
                <div className="flex items-center space-x-2">
                    <img src="/path/to/logo.png" alt="Logo" className="h-8" />
                    <span className="text-2xl font-semibold text-gray-800"></span>
                </div>

                {/* Right side: Two lines */}
                <div className="text-right">
                    <div className="text-sm text-gray-600">Line 1: </div>
                    <div className="text-sm text-gray-600">Line 2: </div>
                </div>
            </header>

            {/* Flex container for Sidebar and Main Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="bg-yellow-100 p-6 w-56 h-full shadow-md">
                    {/* <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2> */}
                    <nav>
                        <ul className="space-y-2 ">
                            <li>
                                <Link
                                    to="/dashboard/home"
                                    className="block p-1 pl-4 text-start bg-pink-200 text-gray-900 rounded-md hover:bg-pink-300 transition-colors"
                                >
                                    Dashboard 
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/applicant"
                                    className="block p-1 pl-4 text-start bg-pink-200 text-gray-900 rounded-md hover:bg-pink-300 transition-colors"
                                >
                                    All Applicant
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 bg-white">
                    <Switch>
                        <Route exact path="/dashboard/home" component={DashboardHome} />
                        <Route path="/dashboard/applicant" component={AllApplicant} />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
