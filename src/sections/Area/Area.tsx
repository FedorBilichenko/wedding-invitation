import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import cn from 'classnames';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import slide1 from './slides/slide1.png';
import slide2 from './slides/slide2.png';
import slide3 from './slides/slide3.png';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Area.module.scss';
import {useWindowSize} from "utils";

const coordinates = [55.935395, 37.334208];

const Area: React.FC =() => {
  const {isPhone} = useWindowSize();

  const size = isPhone ? { width: 310, height: 205 } : { width: 714, height: 520};
  return <div className={styles.area}>
    <div className={styles.area__title}>Свадебная площадка</div>
      <Carousel
        className={styles.area__swiper}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        autoPlay
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                className={cn(styles.area__indicator, styles.area__indicator_active)}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              className={styles.area__indicator}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {[slide1, slide2, slide3].map((slide, index) =>
            <img key={index} alt="slide" className={styles['area__slide-img']} src={slide}  />
        )}
      </Carousel>
      <div className={styles.area__location}>
        <span className={styles.area__location_semibold}>Panorama Wedding House</span><br/>
        МО, Химки, микрорайон Подрезково, 1В
      </div>
      <div className={styles.area__map}>
        <YMaps>
          <Map {...size} defaultState={{ center: coordinates, zoom: 15 }}>
            <Placemark options={
              {
                iconColor: '#4e6e51'
              }
            } defaultGeometry={coordinates} />
          </Map>
        </YMaps>
      </div>
  </div>
};

export default Area;
