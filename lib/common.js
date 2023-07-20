// Utility functions
export function CapitalizeWords(s) {
  return s
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
}

// Image path shortcuts
export function ImagePathBuilder(src) {
  return (image) => {
    return src + "/" + image;
  };
}

export const CentralCascadesWildernessPermit =
  "https://www.recreation.gov/permits/4675311";
export const CentralCascadesDayUse =
  "https://www.recreation.gov/ticket/facility/300009";

export function rawData(file) {
  return (
    "https://raw.githubusercontent.com/anders-swanson/data/master/data/" + file
  );
}

export function backgroundImageStyle(image, opacity = 0.1) {
  return {
    backgroundImage: `url(${image}), linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity}))`,
  };
}

export function floatyTextStyle() {
  return {
    fontFamily: "OpenSans,sans-serif",
    textShadow: "0px 2px 3px #F5F5F5",
    color: "rgb(255, 251, 242)",
  };
}
