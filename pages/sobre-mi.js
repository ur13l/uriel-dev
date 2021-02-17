import MainLayout from "../_layout/main-layout";
import UserInfo from "../_includes/user-info";
import Experience from "../_includes/experience";
import Community from "../_includes/community";

const AboutMe = () => (
  <MainLayout>
    <UserInfo />
    <Experience />
    <Community />
  </MainLayout>
);

export default AboutMe;
