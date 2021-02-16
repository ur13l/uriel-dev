import Image from "next/image";
import SocialList from "../_includes/social-list";

const UserInfo = () => (
  <div className="flex flex-col content-center items-center mt-24">
    <div className="inline ">
      <Image
        className="rounded-full"
        src="/images/profile.jpg"
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
