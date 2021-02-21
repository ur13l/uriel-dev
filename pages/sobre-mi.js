import MainLayout from "../_layout/main-layout";
import UserInfo from "../_includes/user-info";
import Experience from "../_includes/experience";
import Community from "../_includes/community";
import Hobbies from "../_includes/hobbies";

const AboutMe = () => (
  <MainLayout>
    <UserInfo />
    <Experience />
    <Community />
    <Hobbies />
  </MainLayout>
);

export default AboutMe;
