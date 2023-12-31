import { test,expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/signin-page";
import datajson from "../../../DataBase/AdminData/AdminUser/admin_userdata.json";
import DashboardPage from "../../../PageObjects/Dashboardpage/dashboard";
import AdminUsersPage from "../../../PageObjects/AdminPages/UsersPage/admin-userpage";


test("Verify that LIU should be able to add new users details by clicking + icon.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,datajson["Test1"].usernamefilter);
    await login.gotoLoginPage(datajson["Test1"].url);
    await login.loginToApp(datajson["Test1"].SuperUser, datajson["Test1"].companyCode,datajson["Test1"].Password);
    await login.ClickAcceptBtn();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await page.pause();
    await adminUserPage.clickOnAddBtnLandPage();
    await adminUserPage.addPasswordType(datajson["Test1"].passwordType);
    await adminUserPage.addFirstName(datajson["Test1"].firstName);
    await adminUserPage.addLastName(datajson["Test1"].lastName);
    await adminUserPage.addUsername(datajson["Test1"].username);
    await adminUserPage.addEmailAddess(datajson["Test1"].email);
    await adminUserPage.addPosition(datajson["Test1"].position);
    await adminUserPage.addPostcode(datajson["Test1"].postcode);
    // await adminUserPage.addUserRegion(datajson["Test1"].userRegion);
    // await adminUserPage.addUserDivision(datajson["Test1"].userDivision);
    await adminUserPage.addSecurityRole(datajson["Test1"].securityRole);
    await adminUserPage.addCountry(datajson["Test1"].country);
    await adminUserPage.addState(datajson["Test1"].state);
    await adminUserPage.addTimeZone(datajson["Test1"].timeZone);
    await adminUserPage.addSuburb(datajson["Test1"].subrub);
    // await adminUserPage.addGender(datajson["Test1"].gender);
    await adminUserPage.addNickName(datajson["Test1"].nickName);
    await adminUserPage.addAsset(datajson["Test1"].asset);
    await adminUserPage.clickOnSaveBtn();
    await adminUserPage.verifyConfirmationMessage(datajson["Test1"].expectedMessage);
    await adminUserPage.verifyIfUserCreated();
   

})