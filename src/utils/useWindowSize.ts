import {
  useWindowSize as useWindowSizeBase,
} from '@react-hook/window-size/throttled'

export const useWindowSize = () => {
  const [width, height] = useWindowSizeBase();


  return {
    size: {
      width,
      height
    },
    isPhone: width < 768,
    isIPhoneSE: width <= 375,
  }
}