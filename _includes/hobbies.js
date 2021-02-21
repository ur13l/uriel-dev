import Strings from "../_data/strings-es";
import InfoSection from "./info-section";
import { useBrowserInfo } from "../_hooks/use-browser-info";
import catJpg from "../_assets/images/cat.jpg?trace";

const Community = () => {
  const {
    HOBBIES: { HOBBIES, HOBBIES_PARAGRAPH_1 },
  } = Strings;

  const { screenSize } = useBrowserInfo();
  return (
    <div className="relative">
      <InfoSection
        title={HOBBIES}
        paragraphs={[HOBBIES_PARAGRAPH_1]}
        color={"black"}
        image={{
          src: catJpg,
          width: "385px",
          alt: "Gato programador",
          height: "29px",
        }}
      />
    </div>
  );
};

export default Community;
