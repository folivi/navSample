// Define all your icons once,
// load them once,
// and use everywhere

import Ionicons from 'react-native-vector-icons/FontAwesome';

const icons = {
  "navicon": [24, "#000"],
  "bar-chart": [24, "#000"],
  "calendar": [24, "#000"],
  "shopping-cart": [24, "#000"],
  "gears": [24, "#000"],
  "search": [24, "#fff"],
  "location-arrow": [24, "#fff"],
  "user": [24, "#fff"],
}

let iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName =>
      Ionicons.getImageSource(
        iconName.replace('--active', ''),
        icons[iconName][0],
        icons[iconName][1]
      ))
  ).then(sources => {
    Object.keys(icons)
      .forEach((iconName, idx) => iconsMap[iconName] = sources[idx])

    // Call resolve (and we are done)
    resolve(true);
  })
});

export {
    iconsMap,
    iconsLoaded
};
