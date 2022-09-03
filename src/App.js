
import Login from './Component2.js/Login/Login'
import Main from './Component2.js/Main'
import { Outlet, Route, Routes } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Home from './Component2.js/Home'
import NavBar from './Component2.js/NavBar'
import NotMatch from './Component2.js/NotMatch'
import DashBoardContent from './Component2.js/MenuItems/DashBoard/DashBoardContent'
import BasicSiteSetting from './Component2.js/MenuItems/SiteSetting/SiteSettingItem/BasicSiteSetting'
import Email from './Component2.js/MenuItems/SiteSetting/SiteSettingItem/Email'
import LogoFavicon from './Component2.js/MenuItems/SiteSetting/SiteSettingItem/LogoFavicon'
import MetriPrefix from './Component2.js/MenuItems/SiteSetting/SiteSettingItem/MetriPrefix'
import SeoPage from './Component2.js/MenuItems/SiteSetting/SiteSettingItem/SeoPage'
import SocialMedia from './Component2.js/MenuItems/SiteSetting/SiteSettingItem/SocialMedia'
import ChangePassword from './Component2.js/MenuItems/SiteSetting/SiteSettingItem/ChangePassword'
import CurrencyManagement from './Component2.js/MenuItems/SiteSetting/SiteSettingItem/CurrencyManagement'
import SiteColor from './Component2.js/MenuItems/SiteSetting/SiteSettingItem/SiteColor'
import AppLink from './Component2.js/MenuItems/SiteSetting/SiteSettingItem/AppLink'
import HomePageText from './Component2.js/MenuItems/SiteSetting/SiteSettingItem/HomePageText'
import HomePageBannerText from './Component2.js/MenuItems/SiteSetting/SiteSettingItem/HomePageBannerText'
import ReasonWhyChoose from './Component2.js/MenuItems/SiteSetting/SiteSettingItem/ReasonWhyChoose'
import GenerateSiteMap from './Component2.js/MenuItems/SiteSetting/SiteSettingItem/GenerateSiteMap'
import AddNewDetail from './Component2.js/MenuItems/AddNewDetail/AddNewDetail'
import Religion from './Component2.js/MenuItems/AddNewDetail/AddNewDatailItem/Religion'
import Caste from './Component2.js/MenuItems/AddNewDetail/AddNewDatailItem/Caste'
import State from './Component2.js/MenuItems/AddNewDetail/AddNewDatailItem/State'
import City from './Component2.js/MenuItems/AddNewDetail/AddNewDatailItem/City'
import Occupation from './Component2.js/MenuItems/AddNewDetail/AddNewDatailItem/Occupation'
import MotheTongue from './Component2.js/MenuItems/AddNewDetail/AddNewDatailItem/MotheTongue'
import Education from './Component2.js/MenuItems/AddNewDetail/AddNewDatailItem/Education'
import Designation from './Component2.js/MenuItems/AddNewDetail/AddNewDatailItem/Designation'
import Star from './Component2.js/MenuItems/AddNewDetail/AddNewDatailItem/Star'
import Moonsing from './Component2.js/MenuItems/AddNewDetail/AddNewDatailItem/Moonsing'
import FAQs from './Component2.js/MenuItems/AddNewDetail/AddNewDatailItem/FAQs'
import HomePageBanner from './Component2.js/MenuItems/AddNewDetail/AddNewDatailItem/HomePageBanner'
import MatrinonyData from './Component2.js/MenuItems/AddNewDetail/AddNewDatailItem/MatrinonyData'
import AllMember from './Component2.js/MenuItems/Member/MemberItems/AllMember'
import UnApprovedmember from './Component2.js/MenuItems/Member/MemberItems/UnApprovedmember'
import ApprovedToPaidMember from './Component2.js/MenuItems/Member/MemberItems/ApprovedToPaidMember'
import PaidToSpotLite from './Component2.js/MenuItems/Member/MemberItems/PaidToSpotLite'
import Text from './Check/Text'
import DetailPage from './Component2.js/MenuItems/Member/MemberItems/DetailPage'
import AddNew from './Component2.js/MenuItems/Member/MemberItems/AddNew'
import Filter from './Component2.js/MenuItems/Member/MemberItems/Filter'
import ManualProfileMatchMaking from './Component2.js/MenuItems/MatchMaking/Match Making/ManualProfileMatchMaking'
import AutoProfileMatch from './Component2.js/MenuItems/MatchMaking/Match Making/AutoProfileMatch'
import LeadGeneration from './Component2.js/MenuItems/LeadGeneration/LeadGeneration'
import LeadGenerationpage from './Component2.js/MenuItems/LeadGeneration/Lead Generation/LeadGenerationpage'
import LeadfollowupDataReport from './Component2.js/MenuItems/LeadGeneration/Lead Generation/LeadfollowupDataReport'
import AssignmentMembers from './Component2.js/MenuItems/StaffAssiReport/StaffAssignment Report/AssignmentMembers'
import UnassignedMembers from './Component2.js/MenuItems/StaffAssiReport/StaffAssignment Report/UnassignedMembers'
import AssingedLeadGeneration from './Component2.js/MenuItems/StaffAssiReport/StaffAssignment Report/AssingedLeadGeneration'
import UnassignedLeadGeneration from './Component2.js/MenuItems/StaffAssiReport/StaffAssignment Report/UnassignedLeadGeneration'
import MemberReport from './Component2.js/MenuItems/FollowUpSystem/Followed Up System/MemberReport'
import LeadGenerationReport from './Component2.js/MenuItems/FollowUpSystem/Followed Up System/LeadGenerationReport'
import Plan from './Component2.js/MenuItems/MemberPlan/MemberPlan/Plan'
import StaffPage from './Component2.js/MenuItems/Staff/Staff/StaffPage'
import StaffRoles from './Component2.js/MenuItems/Staff/Staff/StaffRoles'
import StaffStatus from './Component2.js/MenuItems/Staff/Staff/StaffStatus'
import CuponCodePage from './Component2.js/MenuItems/CuponCode/CuponCode/CuponCodePage'
import WeddingVendors from './Component2.js/MenuItems/Wedding Vendors/WeddingVendors'
import WeddingVendorsReview from './Component2.js/MenuItems/Approval/Approval/WeddingVendorsReview'
import SuccessStrory from './Component2.js/MenuItems/Approval/Approval/SuccessStrory'
import Video from './Component2.js/MenuItems/Approval/Approval/Video'
import CoverPhotos from './Component2.js/MenuItems/Approval/Approval/CoverPhotos'
import Horoscope from './Component2.js/MenuItems/Approval/Approval/Horoscope'
import Photo1 from './Component2.js/MenuItems/Approval/Approval/Photo1'
import Photo2 from './Component2.js/MenuItems/Approval/Approval/Photo2'
import Photo3 from './Component2.js/MenuItems/Approval/Approval/Photo3'
import Photo4 from './Component2.js/MenuItems/Approval/Approval/Photo4'
import Photo5 from './Component2.js/MenuItems/Approval/Approval/Photo5'
import Photo6 from './Component2.js/MenuItems/Approval/Approval/Photo6'
import ExpressInterest from './Component2.js/MenuItems/UserActivity/UserActivity/ExpressInterest'
import Message from './Component2.js/MenuItems/UserActivity/UserActivity/Message'
import UserLoginHistory from './Component2.js/MenuItems/UserActivity/UserActivity/UserLoginHistory'
import PaymentMethodpage from './Component2.js/MenuItems/Payment Option/Payment Option/PaymentMethodpage'
import SalesReportPage from './Component2.js/MenuItems/SalesReport/Sales Reports/SalesReportPage'
import FinanceSalesReport from './Component2.js/MenuItems/SalesReport/Sales Reports/FinanceSalesReport'
import EventList from './Component2.js/MenuItems/Event Management/Event Management/EventList'
import AddEvent from './Component2.js/MenuItems/Event Management/Event Management/AddEvent'
import CmsPagess from './Component2.js/MenuItems/Content Managenent/Content Management/CmsPagess'
import TicketManagement from './Component2.js/MenuItems/Developer Tools/Developer Tools/TicketManagement'
import BlogManagementPage from './Component2.js/MenuItems/Blog Management/Blog Management/BlogManagementPage'
import ReligionEdit from './Component2.js/MenuItems/AddNewDetail/Edit/ReligionEdit'
import ReligionDelete from './Component2.js/MenuItems/AddNewDetail/AddNewDatailItem/Delete/ReligionDelete'
import CasteEdit from './Component2.js/MenuItems/AddNewDetail/Edit/CasteEdit'
import StateEdit from './Component2.js/MenuItems/AddNewDetail/Edit/StateEdit'
import StaffPanel from './Full Staff/StaffPanel/StaffPanel'
import StaffLogin from './Full Staff/Login.js/StaffLogin'
import StaffDashBoardContent from './Full Staff/StaffMenus/StaffDashboard/StaffDashBoardContent'
import StaffMember from './Full Staff/StaffMenus/Member/StaffMember'
import StaffAllMember from './Full Staff/StaffMenus/Member/MemberContents/StaffAllMember'
import StaffAdvanceSearch from './Full Staff/StaffMenus/Member/MemberContents/StaffAdvanceSearch'
import StaffActivetoPaid from './Full Staff/StaffMenus/Member/MemberContents/StaffActivetoPaid'
import StaffManualProfileMatchMaking from './Full Staff/StaffMenus/MatchMaking/ManualProfileMatch Making/StaffManualProfileMatchMaking'
import StaffLeadGenerationContent from './Full Staff/StaffMenus/LeadGeneration.js/LeadGenerationjContent/StaffLeadGenerationContent'
import StaffLeadGeneration from './Full Staff/StaffMenus/LeadGeneration.js/StaffLeadGeneration'
import StaffLeadFollowupDateReport from './Full Staff/StaffMenus/LeadGeneration.js/LeadGenerationjContent/StaffLeadFollowupDateReport'
import StaffAssignmentReportContent from './Full Staff/StaffMenus/AssgnmentReport.js/Assignment Report of Staff/StaffAssignmentReportContent'
import LeadGeneratonAssignedToMe from './Full Staff/StaffMenus/AssgnmentReport.js/Assignment Report of Staff/LeadGeneratonAssignedToMe'
import StaffMemberReport from './Full Staff/StaffMenus/FollowUpSystme/StaffFollowUp/StaffMemberReport'
import StaffLeadGenerationReport from './Full Staff/StaffMenus/FollowUpSystme/StaffFollowUp/StaffLeadGenerationReport'
import StaffSendBulkEmail from './Full Staff/StaffMenus/SendBulkEmail And SMS/Send Bulk Email and SMS Staff/StaffSendBulkEmail'
import StaffBulkEmailandSms from './Full Staff/StaffMenus/SendBulkEmail And SMS/StaffBulkEmailandSms'
import StaffSendBulkSMS from './Full Staff/StaffMenus/SendBulkEmail And SMS/Send Bulk Email and SMS Staff/StaffSendBulkSMS'
import StaffIDProof from './Full Staff/StaffMenus/Approval/Staff Approval/StaffIDProof'
import StaffPhoto1 from './Full Staff/StaffMenus/Approval/Staff Approval/StaffPhoto1'
import StaffPhoto2 from './Full Staff/StaffMenus/Approval/Staff Approval/StaffPhoto2'
import StaffPhoto3 from './Full Staff/StaffMenus/Approval/Staff Approval/StaffPhoto3'
import StaffPhoto4 from './Full Staff/StaffMenus/Approval/Staff Approval/StaffPhoto4'
import StaffPhoto5 from './Full Staff/StaffMenus/Approval/Staff Approval/StaffPhoto5'
import StaffPhoto6 from './Full Staff/StaffMenus/Approval/Staff Approval/StaffPhoto6'
import Online from './Full Staff/StaffMenus/Online/Online'
import EmailTemplates from './Component2.js/MenuItems/Email Templates/EmailTemplates'
import AddEmailTemplates from './Component2.js/MenuItems/Email Templates/Add Email Templates/AddEmailTemplates'
import SMSTemplatePage from './Component2.js/MenuItems/SMS Templates/SMSTemplate/SMSTemplatePage'
import FAQsDelete from './Component2.js/MenuItems/AddNewDetail/AddNewDatailItem/Delete/FAQsDelete'
import FAQsEdit from './Component2.js/MenuItems/AddNewDetail/Edit/FAQsEdit'
import PopUpPage from './PopUp/PopUpPage'
import PageToggles from './PagesToggle/PageToggles'
import PopUpFreshTask from './PopUp/PopUpFreshTask'
import StaffMemberAssignedToMe from './Full Staff/StaffMenus/AssgnmentReport.js/Assignment Report of Staff/StaffMemberAssignedToMe'
import Flex from './Flex'
import PopUpFollowUp from './PopUp/PopUpFollowUp'
import SuspendedMember from './Component2.js/MenuItems/Member/MemberItems/SuspendedMember'
import AboutUs from './Component2.js/MenuItems/SiteSetting/SiteSettingItem/AboutUs'
import GetMaleUser from './Component2.js/MenuItems/Member/MemberItems/GetMaleUser'
import GetFemaleuser from './Component2.js/MenuItems/Member/MemberItems/GetFemaleuser'
import GetAllPaidmember from './Component2.js/MenuItems/Member/MemberItems/GetAllPaidmember'
import GetAllActiveUsers from './Component2.js/MenuItems/Member/MemberItems/GetAllActiveUsers'

// npx json-server --watch data/db.json --port 8000

const queryClient = new QueryClient()

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>

        <NavBar />

        <Routes>
          <Route path='filter' element={<Filter />} />
          <Route exact path='test' element={<Text />} />
          <Route exact path='/' element={<Home />} />
          {/* PopUps */}
          <Route exact path='/staff_panel_page/Staff_Lead_followup_date_report/:PopId' element={<PopUpFollowUp />} />


          {/* Staff All files route Start */}
          <Route exact path='staff_panel' element={<StaffLogin />} />
          <Route exact path='staff_panel_page' element={<StaffPanel />
          } >
            <Route exact path='Staff_all_member' element={<StaffAllMember />} />
            <Route exact path='Staff_Active_to_paid' element={<StaffActivetoPaid />} />
            <Route exact path='Staff_advance_search' element={<StaffAdvanceSearch />} />
            <Route exact path='Staff_manual_profile_file_match_making' element={<StaffManualProfileMatchMaking />} />
            <Route exact path='Staff_LeadGeneration' element={<StaffLeadGenerationContent />} />
            <Route exact path='Staff_Lead_followup_date_report' element={<StaffLeadFollowupDateReport />} />

            {/* <Route exact path='/staff_panel_page/Staff_Lead_followup_date_report/:PopId' element={<PopUpFollowUp />} /> */}


            <Route exact path='Staff_Member_Assigned_to_Me' element={<StaffMemberAssignedToMe />} />
            <Route exact path='Staff_Generation_assigned_tome' element={<LeadGeneratonAssignedToMe />} />
            <Route exact path='Staff_member_report' element={<StaffMemberReport />} />
            <Route exact path='Staff_Lead_generation_report' element={<StaffLeadGenerationReport />} />
            <Route exact path='Staff_Send_buld_email' element={<StaffSendBulkEmail />} />
            <Route exact path='Staff_bulk_email_sms' element={<StaffSendBulkSMS />} />
            <Route exact path='Staff_ID_Proff' element={<StaffIDProof />} />
            <Route exact path='Staff_horoscope' element={<Horoscope />} />
            <Route exact path='Staff_Photo1' element={<StaffPhoto1 />} />
            <Route exact path='Staff_Photo2' element={<StaffPhoto2 />} />
            <Route exact path='Staff_Photo3' element={<StaffPhoto3 />} />
            <Route exact path='Staff_Photo4' element={<StaffPhoto4 />} />
            <Route exact path='Staff_Photo5' element={<StaffPhoto5 />} />
            <Route exact path='Staff_Photo6' element={<StaffPhoto6 />} />
            <Route exact path='Staff_Online' element={<Online />} />



            <Route exact path='Staff_Dashboard' element={<StaffDashBoardContent />} />
          </Route>
          {/* Staff All files route End */}




          <Route exact path='dash' element={<Main />} >

            <Route exact path='dashitem' element={<DashBoardContent />} />

            {/*  Site Setting Start*/}
            <Route exact path='setting' element={<BasicSiteSetting />} />
            <Route exact path='email' element={<Email />} />
            <Route exact path='logofavicon' element={<LogoFavicon />} />
            <Route exact path='metriprefix' element={<MetriPrefix />} />
            <Route exact path='seopage' element={<SeoPage />} />
            <Route exact path='socialmedia' element={<SocialMedia />} />
            <Route exact path='changepassword' element={<ChangePassword />} />
            <Route exact path='currency_management' element={<CurrencyManagement />} />
            <Route exact path='site_color' element={<SiteColor />} />
            <Route exact path='app_link' element={<AppLink />} />
            <Route exact path='home_page_text' element={<HomePageText />} />
            <Route exact path='home_page_banner_text' element={<HomePageBannerText />} />
            <Route exact path='reason_why_choose' element={<ReasonWhyChoose />} />
            <Route exact path='genetate_site_map' element={<GenerateSiteMap />} />
            <Route exact path='about_us' element={<AboutUs />} />

            {/* SiteSetting End */}


            {/* Add New Detail Start Here */}
            <Route exact path='new_detail' element={<Religion />} />
            <Route exact path='religion' element={<Religion />} />
            {/* <Route exact path='/dash/religion/edit/:RId' element={<ReligionEdit />} /> */}
            <Route exact path={`/dash/religion/CasteEdit/:CId`} element={<CasteEdit />} />
            <Route exact path={`/dash/religion/StateEdit/:SId`} element={<StateEdit />} />
            {/* <Route exact path={`/dash/FAQs/delete/:FId`} element={<FAQsDelete />} /> */}
            <Route exact path={`/dash/FAQs/edit/:FId`} element={<FAQsEdit />} />


            <Route exact path='/dash/religion/delete/:RDId' element={<ReligionDelete />} />

            <Route exact path='caste' element={<Caste />} />
            <Route exact path='state' element={<State />} />
            <Route exact path='city' element={<City />} />
            <Route exact path='occupation' element={<Occupation />} />
            <Route exact path='education' element={<Education />} />
            <Route exact path='mother_tongue' element={<MotheTongue />} />
            <Route exact path='designation' element={<Designation />} />
            <Route exact path='star' element={<Star />} />
            <Route exact path='moonsing' element={<Moonsing />} />
            <Route exact path='faqs' element={<FAQs />} />
            <Route exact path='home_page_banner' element={<HomePageBanner />} />
            <Route exact path='matrinony_data' element={<MatrinonyData />} />

            {/* Add new detail end here */}


            {/* Member */}

            <Route path='/dash/all_member/detail/:memberid' element={<DetailPage />} />
            <Route path='/dash/all_member/add_data' element={<AddNew />} />
            <Route exact path='all_member' element={<AllMember />} />
            <Route exact path='unapproved' element={<UnApprovedmember />} />
            <Route exact path='suspended' element={<SuspendedMember />} />
            <Route exact path='approved_paid' element={
              <ApprovedToPaidMember />} />
            <Route exact path='paid_spot' element={

              <PaidToSpotLite />} />
            <Route exact path='/dash/all_member/maleusers' element={<GetMaleUser />} />
            <Route exact path='/dash/all_member/femaleuser' element={<GetFemaleuser />} />
            <Route exact path='/dash/all_member/paiduser' element={<GetAllPaidmember />} />
            <Route exact path='/dash/all_member/allactiveusers' element={<GetAllActiveUsers />} />


            {/* Member End here */}



            {/*Match Making Start  */}
            <Route exact path='manual_profile_match_making' element={<ManualProfileMatchMaking />} />
            <Route exact path='auto_profile_match' element={<AutoProfileMatch />} />
            {/* Match making End Here */}



            {/* Lead Generation Start */}
            <Route exact path='lead_generation_page' element={<LeadGenerationpage />} />
            <Route exact path='lead_followup_data_report' element={<LeadfollowupDataReport />} />
            {/* Lead Generation StarEnd */}

            {/* Staff Assignment Report Start */}
            <Route exact path='assignment_members' element={<AssignmentMembers />} />
            <Route exact path='unassignment_members' element={<UnassignedMembers />} />
            <Route exact path='assinged_lead_generation' element={<AssingedLeadGeneration />} />
            <Route exact path='unassinged_lead_generation' element={<UnassignedLeadGeneration />} />
            {/* Staff Assignment Report end */}



            {/* Follow Up System Start */}
            <Route exact path='member_report' element={<MemberReport />} />
            <Route exact path='lead_generation_report' element={<LeadGenerationReport />} />
            {/* Follow Up System End */}


            {/* Member plan */}
            <Route exact path='plan' element={<Plan />} />
            {/* Member plan */}


            {/* Staff Page Start */}
            <Route exact path='staff_page' element={<StaffPage />} />
            <Route exact path='staff_Roles' element={<StaffRoles />} />
            <Route exact path='staff_Status' element={<StaffStatus />} />
            {/* Staff Page End */}






            {/* CuponCode */}
            <Route exact path='cupon_code_page' element={<CuponCodePage />} />
            {/* CuponCode */}

            {/* Approval */}
            <Route exact path='wedding_vendor_review' element={<WeddingVendorsReview />} />
            <Route exact path='success_stroy' element={<SuccessStrory />} />
            <Route exact path='video' element={<Video />} />
            <Route exact path='cover_photos' element={<CoverPhotos />} />
            <Route exact path='horoscope' element={<Horoscope />} />
            <Route exact path='photo1' element={<Photo1 />
            } />
            <Route exact path='photo2' element={<Photo2 />} />
            <Route exact path='photo3' element={<Photo3 />} />
            <Route exact path='photo4' element={<Photo4 />} />
            <Route exact path='photo5' element={<Photo5 />} />
            <Route exact path='photo6' element={<Photo6 />} />
            {/* Approval */}


            {/* User Activity */}
            <Route exact path='express_interest' element={<ExpressInterest />} />
            <Route exact path='message' element={<Message />} />
            <Route exact path='user_login_history' element={<UserLoginHistory />} />
            {/* User Activity */}


            {/* Payment Method */}
            <Route exact path='payment_method' element={<PaymentMethodpage />} />
            {/* Payment Method */}

            {/* SaleReport */}
            <Route exact path='sales_report_page' element={<SalesReportPage />} />
            <Route exact path='finance_sale_report' element={<FinanceSalesReport />} />
            {/* SaleReport */}

            {/* Event Management */}
            <Route exact path='event_list' element={<EventList />} />
            <Route exact path='add_event' element={<AddEvent />} />
            {/* Event Management */}


            {/* content Management */}
            <Route exact path='Csm' element={<CmsPagess />} />
            {/* content Management */}

            {/* Developer Tools */}
            <Route exact path='ticket_management' element={<TicketManagement />} />
            {/* Developer Tools */}


            {/* BlogManagement */}
            <Route exact path='blog_management' element={<BlogManagementPage />} />
            {/* BlogManagement */}

            {/* Email Templates */}
            <Route exact path='email_templates' element={<AddEmailTemplates />
            } />
            {/* Email Templates */}

            {/* SMS Template */}

            <Route exact path='sms_template_page' element={<SMSTemplatePage />} />

            {/* SMS Template */}


          </Route>

          <Route exact path='login' element={<Login />} />
          <Route exact path='*' element={<NotMatch />} />

        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>


      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dash' element={<Main />} >

        </Route>
        <Route path='/login' element={<Login />} />
      </Routes> */}


    </>
  )
}

export default App
