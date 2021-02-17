import SocialList from "../_includes/social-list";
import profileJpg from "../_assets/images/profile.jpg?trace";

const UserInfo = () => (
  <div className="flex flex-col content-center items-center mt-24">
    <div>
      <img
        className="rounded-full"
        src={profileJpg.src}
        alt="Foto de perfil"
        width={160}
        height={160}
      />
    </div>
    <h1 className="text-blue-dark text-4xl">Uriel Infante</h1>
    <SocialList color="var(--blue-dark)" />
  </div>
);

export default UserInfo;
