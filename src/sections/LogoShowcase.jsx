import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
      <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
              Check This Nice Logo Showcase
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
              want a similar one? get in touch with me!
          </p>
          </div>
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-40 mb-50">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
