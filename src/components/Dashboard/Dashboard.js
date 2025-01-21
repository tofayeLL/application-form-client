import React, { useContext } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import DashboardHome from './DashboardPages/DashboardHome/DashboardHome';
import AllApplicant from './AllApplicant/AllApplicant';
import govt_logo from '../../assets/images/govt_logo.png';
import DateWiseApplicant from './DateWiseApplicant/DateWiseApplicant';
import AllApplicantPaid from './AllApplicantPaid/AllApplicantPaid';
import ApplicantNursing from './ApplicantNursing/ApplicantNursing';
import { AdminContext } from '../../contexts/AdminProvider/AdminProvider';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ApplicantUnpaid from './ApplicantUnpaid/ApplicantUnpaid';
import ApplicantMidwifery from './ApplicantMidwifery/ApplicantMidwifery';
import IdTracking from './IdTracking/IdTracking';
import EditApplicantInfo from './IdTracking/EditApplicantInfo/EditApplicantInfo';
import SearchTransaction from './SearchTransaction/SearchTransaction';
import SearchPayment from './SearchPayment/SearchPayment';
import AttendanceSheet from './AttendanceSheet/AttendanceSheet';
import ViewProfile from './IdTracking/ViewProfile/ViewProfile';
import EditFullProfile from './IdTracking/EditFullProfile/EditFullProfile';
import EditPicture from './IdTracking/EditPicture/EditPicture';
import EditSignature from './IdTracking/EditSignature/EditSignature';
import AdmitCard from './IdTracking/AdmitCard/AdmitCard';



const Dashboard = () => {

    const { adminEmail, setAdminEmail } = useContext(AdminContext);
    const history = useHistory();

    const handleLogout = () => {
        setAdminEmail(null); // Clears user email from context and localStorage
        // console.log("User logged out successfully");
        toast.success("User logged out successfully");
        history.push("/login/admin"); // Redirect to the login page

    }
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
                <div className="bg-[#2a6b53] py-5 px-3 w-56 h-full shadow-md">
                    {/* <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2> */}
                    <nav>
                        <ul className="space-y-3 ">
                            <li>
                                <Link
                                    to="/dashboard/admin"
                                    className="block p-1 pl-4 text-start bg-[#e0f0d9] text-gray-900 rounded-md hover:bg-[#a2d4b6]  transition-colors"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/admin/dateApplicant"
                                    className="block p-1 pl-4 text-start bg-[#e0f0d9] text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors"
                                >
                                    Date Wise Applicant
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/admin/applicant"
                                    className="block p-1 pl-4 text-start bg-[#e0f0d9] text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors"
                                >
                                    All Applicant
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/admin/applicantPaid"
                                    className="block p-1 pl-4 text-start bg-[#e0f0d9] text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors"
                                >
                                    All Applicant (Paid)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/admin/applicantNursing"
                                    className="block p-1 pl-4 text-start bg-[#e0f0d9] text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors"
                                >
                                    All Applicant (Nursing)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/admin/applicantMidwifery"
                                    className="block p-1 pl-4 text-start bg-[#e0f0d9] text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors"
                                >
                                    All Applicant (Midwifery)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/admin/applicantUnpaid"
                                    className="block p-1 pl-4 text-start bg-[#e0f0d9] text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors"
                                >
                                    All Applicant (Unpaid)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/admin/IdTracking"
                                    className="block p-1 pl-4 text-start bg-[#e0f0d9] text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors"
                                >
                                   ID Tracking
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/admin/searchTransaction"
                                    className="block p-1 pl-4 text-start bg-[#e0f0d9] text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors"
                                >
                                   Search Transaction
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/admin/searchPayment"
                                    className="block p-1 pl-4 text-start bg-[#e0f0d9] text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors"
                                >
                                   Search Payment
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/admin/attendanceSheet"
                                    className="block p-1 pl-4 text-start bg-[#e0f0d9] text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors"
                                >
                                   Attendance Sheet
                                </Link>
                            </li>


                            <li>
                                {adminEmail && <button
                                  className="block p-1 pl-4 text-start bg-[#e0f0d9] text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors w-full"
                                    onClick={handleLogout}
                                   
                                >
                                    Logout
                                </button>}

                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-5 bg-white ">
                    <Switch>
                        <Route exact path="/dashboard/admin" component={DashboardHome} />
                        <Route path="/dashboard/admin/dateApplicant" component={DateWiseApplicant} />
                        <Route path="/dashboard/admin/applicant" component={AllApplicant} />
                        <Route path="/dashboard/admin/applicantPaid" component={AllApplicantPaid} />
                        <Route path="/dashboard/admin/applicantNursing" component={ApplicantNursing} />
                        <Route path="/dashboard/admin/applicantUnpaid" component={ApplicantUnpaid} />
                        <Route path="/dashboard/admin/applicantMidwifery" component={ApplicantMidwifery} />

                        <Route path="/dashboard/admin/IdTracking" component={IdTracking} />
                        {/* for edit applicant info */}
                        <Route path="/dashboard/admin/editApplicant/:id" component={EditApplicantInfo} />
                        <Route path="/dashboard/admin/viewProfile/:id" component={ViewProfile} />
                        <Route path="/dashboard/admin/editProfile/:id" component={EditFullProfile} />
                        <Route path="/dashboard/admin/editPicture/:id" component={EditPicture} />
                        <Route path="/dashboard/admin/editSignature/:id" component={EditSignature} />
                        <Route path="/dashboard/admin/admitCard/:id" component={AdmitCard} />

                        <Route path="/dashboard/admin/searchTransaction" component={SearchTransaction} />
                        <Route path="/dashboard/admin/searchPayment" component={SearchPayment} />
                        <Route path="/dashboard/admin/attendanceSheet" component={AttendanceSheet} />
                    </Switch>
                </div>
            </div>

            
        </div>
    );
};

export default Dashboard;
