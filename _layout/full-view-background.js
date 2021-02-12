const FullViewBackground = ({
  children,
  layerColor,
  opacity,
  backgroundImage,
}) => (
  <main
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
    className="h-screen w-screen my-auto bg-cover bg-img"
  >
    <div
      className={`flex-col flex w-screen h-screen ${layerColor} opacity-${opacity} white content-center justify-center`}
    >
      {children}
    </div>
  </main>
);

export default FullViewBackground;
