import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import DashboardHome from './DashboardPages/DashboardHome/DashboardHome';
import AllApplicant from './AllApplicant/AllApplicant';
import govt_logo from '../../assets/images/govt_logo.png';
import DateWiseApplicant from './DateWiseApplicant/DateWiseApplicant';
import AllApplicantPaid from './AllApplicantPaid/AllApplicantPaid';



const Dashboard = () => {
    return (
        <div className="flex h-screen flex-col">

            {/* Full Dashboard Header */}
            <header className="bg-slate-100 shadow-md w-full p-1  flex justify-between items-center  px-10">
                {/* Left side: Logo */}
                <div className="w-20 h-20">
                    <img src={govt_logo} alt="Logo" className='w-20 h-20' />

                </div>

                {/* Right side: Two lines */}
                <div className="text-right">
                    <div className="text-sm text-green-700 font-medium">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</div>
                    <div className="text-xl font-semibold text-purple-900">Directorate General of Nursing and Midwifery </div>
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
                                    to="/dashboard/admin"
                                    className="block p-1 pl-4 text-start bg-pink-200 text-gray-900 rounded-md hover:bg-pink-300 transition-colors"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/admin/dateApplicant"
                                    className="block p-1 pl-4 text-start bg-pink-200 text-gray-900 rounded-md hover:bg-pink-300 transition-colors"
                                >
                                    Date Wise Applicant
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/admin/applicant"
                                    className="block p-1 pl-4 text-start bg-pink-200 text-gray-900 rounded-md hover:bg-pink-300 transition-colors"
                                >
                                    All Applicant
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/admin/applicantPaid"
                                    className="block p-1 pl-4 text-start bg-pink-200 text-gray-900 rounded-md hover:bg-pink-300 transition-colors"
                                >
                                    All Applicant (Paid)
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 bg-white">
                    <Switch>
                        <Route exact path="/dashboard/admin" component={DashboardHome} />
                        <Route path="/dashboard/admin/applicant" component={AllApplicant} />
                        <Route path="/dashboard/admin/dateApplicant" component={DateWiseApplicant} />
                        <Route path="/dashboard/admin/applicantPaid" component={AllApplicantPaid} />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
