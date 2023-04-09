import * as React from 'react';
import { motion } from 'framer-motion';

type Props = {
  size?: {
    width: number;
    height: number;
  }
}

const Names: React.FC<Props> = ({ size }) => {
  return <svg width={size?.width || '530'} height={size?.height || '141'} viewBox="0 0 530 141" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M59.0771 37.2524C57.0246 40.2456 54.1682 42.7428 50.4738 44.7269C46.7793 46.7109 42.5204 48.0108 37.7142 48.6266V49.6357C37.7142 50.9185 37.9024 51.9105 38.2958 52.6118C38.6891 53.3131 39.4588 53.8433 40.6048 54.2025C41.7508 54.5616 43.444 54.7498 45.6847 54.7498C45.7873 54.7498 45.8557 54.9208 45.8557 55.2458C45.8557 55.5708 45.8044 55.7418 45.6847 55.7418L40.5535 55.6563C37.5261 55.5366 34.9776 55.4853 32.908 55.4853C31.0095 55.4853 28.5465 55.5366 25.5191 55.6563L20.234 55.7418C20.0629 55.7418 19.9774 55.5708 19.9774 55.2458C19.9774 54.9208 20.0629 54.7498 20.234 54.7498C22.4746 54.7498 24.1679 54.5616 25.3139 54.2025C26.4598 53.8433 27.2466 53.3131 27.6571 52.6118C28.0847 51.9105 28.2899 50.9185 28.2899 49.6357V48.7976C23.3127 48.4042 19.0025 47.2583 15.3594 45.3597C11.7162 43.4612 8.94538 40.9982 7.01264 37.9708C5.07989 34.9434 4.12207 31.6423 4.12207 28.0676C4.12207 24.0995 5.21672 20.6274 7.40603 17.6513C9.59533 14.6923 12.5201 12.3149 16.1804 10.5532C19.8406 8.79148 23.8942 7.62841 28.307 7.06398V6.63638C28.307 5.06281 28.1018 3.89975 27.6742 3.14717C27.2637 2.3946 26.494 1.88148 25.4165 1.59071C24.3218 1.31705 22.6114 1.16312 20.2511 1.16312C20.0801 1.16312 19.9945 1.00918 19.9945 0.701309C19.9945 0.393437 20.0801 0.239502 20.2511 0.239502C22.4917 0.239502 24.2534 0.27371 25.5362 0.325022L32.9251 0.410541L40.6561 0.325022C41.8876 0.27371 43.5638 0.239502 45.7018 0.239502C45.8044 0.239502 45.8728 0.393437 45.8728 0.701309C45.8728 1.00918 45.8215 1.16312 45.7018 1.16312C43.4098 1.16312 41.6994 1.31705 40.5706 1.62492C39.4417 1.93279 38.6891 2.48012 38.2958 3.2669C37.9024 4.05368 37.7142 5.23385 37.7142 6.79031V6.87583C42.8625 7.26922 47.2924 8.4665 50.9869 10.4506C54.6813 12.4346 57.4693 14.9318 59.3336 17.925C61.215 20.9182 62.1387 24.1166 62.1387 27.5374C62.1387 30.9582 61.1124 34.2421 59.0771 37.2353V37.2524ZM17.9763 41.0666C20.3366 44.419 23.7745 46.5228 28.307 47.3609V8.15863C23.7745 8.94541 20.3366 10.9637 17.9763 14.2134C15.633 17.4632 14.4529 21.8589 14.4529 27.4006C14.4529 32.9422 15.633 37.7314 17.9763 41.0837V41.0666ZM48.2845 14.3674C45.8728 11.015 42.3494 8.9112 37.6971 8.07311V47.4464C42.3494 46.6596 45.8728 44.6242 48.2845 41.3232C50.6961 38.0221 51.8934 33.5751 51.8934 27.965C51.8934 22.3549 50.679 17.7197 48.2845 14.3674Z" fill="currentColor"/>
    <path d="M109.91 40.7417C110.081 40.7417 110.235 40.793 110.372 40.8614C110.509 40.947 110.577 41.0154 110.577 41.0667C110.013 45.4282 109.739 49.4134 109.739 52.9881C109.739 53.4328 109.654 53.7578 109.483 53.946C109.312 54.1512 108.987 54.2367 108.474 54.2367H71.3581C71.1871 54.2367 71.1016 54.0657 71.1016 53.7407C71.1016 53.4157 71.1871 53.2447 71.3581 53.2447C73.154 53.2447 74.4539 53.1079 75.2578 52.8171C76.0617 52.5434 76.609 51.9961 76.8998 51.1751C77.1735 50.3712 77.3274 49.1226 77.3274 47.4464V8.58629C77.3274 6.9101 77.1906 5.67862 76.8998 4.89183C76.6261 4.10505 76.0617 3.55773 75.2236 3.24986C74.3855 2.94198 73.1027 2.78805 71.3581 2.78805C71.1871 2.78805 71.1016 2.61701 71.1016 2.29204C71.1016 1.96706 71.1871 1.79602 71.3581 1.79602H106.969C107.533 1.79602 107.807 2.05258 107.807 2.54859L107.978 13.7175C107.978 13.8372 107.824 13.9227 107.516 13.974C107.208 14.0253 107.02 13.974 106.969 13.803C106.079 10.5532 104.557 8.14158 102.436 6.58513C100.315 5.01156 97.5101 4.24188 94.038 4.24188H91.5237C89.8475 4.24188 88.616 4.60107 87.8292 5.33654C87.0424 6.07201 86.649 7.18376 86.649 8.68891V25.81H93.6275C96.8772 25.81 99.3573 25.2455 101.102 24.1338C102.829 23.022 103.702 21.4485 103.702 19.4302C103.702 19.2591 103.856 19.1736 104.163 19.1736C104.471 19.1736 104.625 19.2591 104.625 19.4302L104.54 26.9901L104.625 31.0267C104.745 32.9252 104.796 34.4475 104.796 35.5592C104.796 35.6789 104.625 35.7303 104.3 35.7303C103.975 35.7303 103.804 35.6789 103.804 35.5592C103.804 33.2673 102.915 31.4543 101.153 30.1373C99.3915 28.8203 96.8601 28.1703 93.559 28.1703H86.6662V47.1386C86.6662 48.7635 86.974 49.9607 87.5898 50.7475C88.2055 51.5343 89.1804 51.9277 90.5316 51.9277H93.3025C97.664 51.9277 101.17 51.0383 103.804 49.2424C106.438 47.4465 108.371 44.6756 109.603 40.9299C109.603 40.8101 109.722 40.7588 109.945 40.7588L109.91 40.7417Z" fill="currentColor"/>
    <path d="M173.006 53.3815C173.006 53.3815 173.126 53.7578 173.126 54.2709C173.126 55.109 173.04 56.1524 172.869 57.3839C172.424 61.5914 172.202 65.7819 172.202 69.9724C172.202 70.246 172.031 70.4 171.706 70.4C171.381 70.4 171.21 70.2631 171.21 69.9724C171.21 64.8754 169.79 60.9928 166.968 58.3075C164.146 55.6221 160.041 54.2709 154.671 54.2709H133.513C130.041 54.2709 127.304 54.7669 125.286 55.7761C123.268 56.7852 121.797 58.4272 120.873 60.6849C119.95 62.9597 119.488 66.0384 119.488 69.9552C119.488 70.2289 119.317 70.3829 118.992 70.3829C118.667 70.3829 118.496 70.246 118.496 69.9552C118.496 65.0806 118.137 60.4626 117.401 56.1011C117.23 55.0919 117.145 54.3051 117.145 53.7407C117.145 53.2447 117.179 52.9368 117.264 52.8684C117.35 52.7829 117.641 52.7487 118.154 52.7487C123.524 52.7487 127.715 49.7213 130.708 43.6836C133.701 37.6288 135.206 28.8203 135.206 17.2409C135.206 13.3754 134.864 10.3993 134.197 8.29552C133.53 6.19174 132.538 4.755 131.221 3.96822C129.904 3.18144 128.177 2.78805 126.056 2.78805C125.936 2.78805 125.885 2.61701 125.885 2.29204C125.885 1.96706 125.936 1.79602 126.056 1.79602H170.56C170.731 1.79602 170.817 1.96706 170.817 2.29204C170.817 2.61701 170.731 2.78805 170.56 2.78805C168.662 2.78805 167.259 2.94199 166.353 3.24986C165.446 3.55773 164.847 4.10505 164.505 4.89183C164.163 5.67862 164.009 6.9101 164.009 8.58629V47.4636C164.009 49.6529 164.129 51.0725 164.351 51.7395C164.574 52.4066 165.172 52.8342 166.164 53.0052C167.139 53.1763 169.141 53.2618 172.168 53.2618C172.664 53.2618 172.972 53.296 173.057 53.3815H173.006ZM154.653 8.75733C154.653 7.02983 154.585 5.86676 154.448 5.26812C154.311 4.68659 153.986 4.3103 153.49 4.17347C152.994 4.03664 151.985 3.96822 150.463 3.96822H142.578C140.731 3.96822 139.517 4.07085 138.918 4.25899C138.336 4.46424 137.96 4.92604 137.789 5.67862C137.618 6.43119 137.532 7.95344 137.532 10.2625C137.532 18.6605 137.225 25.5192 136.609 30.8385C135.993 36.1578 134.933 40.5023 133.41 43.8546C131.905 47.207 129.801 49.9265 127.116 51.9961H152.344C153.542 51.9961 154.226 51.6711 154.397 51.0383C154.568 50.4054 154.653 49.1397 154.653 47.3096V8.75733Z" fill="currentColor"/>
    <path d="M193.412 51.6196C189.358 49.1909 186.211 45.8898 184.005 41.7164C181.798 37.5431 180.687 32.9934 180.687 28.0675C180.687 22.3035 182.14 17.3604 185.048 13.2384C187.956 9.11631 191.701 6.0376 196.251 3.96802C200.818 1.89844 205.47 0.855103 210.225 0.855103C215.544 0.855103 220.214 2.10369 224.25 4.58376C228.287 7.08094 231.366 10.3649 233.521 14.4527C235.676 18.5406 236.753 22.885 236.753 27.4688C236.753 32.5658 235.402 37.2352 232.717 41.4941C230.031 45.753 226.44 49.1053 221.924 51.5683C217.426 54.0313 212.534 55.2628 207.266 55.2628C201.998 55.2628 197.431 54.0484 193.378 51.6025L193.412 51.6196ZM218.52 50.4394C221.018 48.6264 222.95 45.9582 224.353 42.469C225.755 38.9798 226.457 34.7893 226.457 29.9147C226.457 24.7664 225.67 20.1655 224.096 16.0947C222.523 12.024 220.265 8.85975 217.289 6.56782C214.33 4.27589 210.858 3.12993 206.873 3.12993C201.776 3.12993 197.859 5.04557 195.122 8.87685C192.386 12.7081 191 18.0788 191 24.9546C191 30.3765 191.821 35.234 193.48 39.5271C195.122 43.8031 197.397 47.1555 200.288 49.5671C203.178 51.9788 206.428 53.1761 210.071 53.1761C213.201 53.1761 216.023 52.2696 218.503 50.4566L218.52 50.4394Z" fill="currentColor"/>
    <path d="M261.297 51.0211C261.691 51.825 262.426 52.4066 263.521 52.7486C264.616 53.0907 266.36 53.2447 268.772 53.2447C268.943 53.2447 269.028 53.4157 269.028 53.7407C269.028 54.0656 268.943 54.2367 268.772 54.2367C266.48 54.2367 264.684 54.2025 263.401 54.1512L256.098 54.0657L249.975 54.1512C248.846 54.2025 247.341 54.2367 245.442 54.2367C245.271 54.2367 245.186 54.0656 245.186 53.7407C245.186 53.4157 245.271 53.2447 245.442 53.2447C247.238 53.2447 248.538 53.1078 249.342 52.8171C250.146 52.5434 250.693 51.9961 250.984 51.1751C251.257 50.3712 251.411 49.1226 251.411 47.4464V8.58626C251.411 6.91007 251.275 5.67858 250.984 4.8918C250.71 4.10502 250.146 3.55769 249.308 3.24982C248.469 2.94195 247.187 2.78802 245.442 2.78802C245.271 2.78802 245.186 2.61698 245.186 2.292C245.186 1.96703 245.271 1.79599 245.442 1.79599L249.889 1.88151C252.455 2.00124 254.507 2.05255 256.012 2.05255C257.364 2.05255 258.954 1.96703 260.801 1.79599C261.52 1.74468 262.443 1.67626 263.572 1.62495C264.684 1.57364 265.984 1.53943 267.438 1.53943C273.15 1.53943 277.649 2.73671 280.95 5.11415C284.251 7.4916 285.91 11.1689 285.91 16.1633C285.91 19.6354 285.021 22.5773 283.225 24.9889C281.429 27.4006 279.12 29.2136 276.298 30.4451C273.475 31.6766 270.568 32.2923 267.609 32.2923C266.104 32.2923 264.787 32.1555 263.658 31.8647C263.538 31.8647 263.487 31.7279 263.487 31.4371C263.487 31.2661 263.538 31.095 263.606 30.9411C263.692 30.7701 263.795 30.7188 263.897 30.7701C264.735 30.9924 265.693 31.1122 266.754 31.1122C269.319 31.1122 271.474 29.9149 273.185 27.5032C274.895 25.0916 275.75 21.6879 275.75 17.258C275.75 12.828 274.81 9.42435 272.945 7.01269C271.064 4.60104 268.344 3.40376 264.752 3.40376C263.179 3.40376 262.118 3.76294 261.554 4.49841C260.99 5.23388 260.716 6.65351 260.716 8.7744V47.1557C260.716 48.9516 260.904 50.2515 261.297 51.0554V51.0211Z" fill="currentColor"/>
    <path d="M342 54.1053C341.979 54.2947 341.925 54.3895 341.817 54.3895H333.167C332.178 54.3895 330.491 53.5474 328.105 51.8526C325.462 53.9579 322.109 55 318.025 55C315.597 55 313.555 54.6526 311.911 53.9684C310.256 53.2842 309.031 52.3684 308.214 51.2316C307.408 50.0947 307 48.8947 307 47.6105C307 45.9579 307.58 44.4737 308.741 43.1684C309.901 41.8632 311.664 40.3474 314.017 38.6211C313.458 37.8947 312.91 37.0737 312.384 36.1368C311.889 35.1684 311.513 34.2632 311.245 33.4C310.976 32.5368 310.847 31.5895 310.847 30.5579C310.847 27.7684 311.75 25.4737 313.566 23.6842C315.382 21.8947 317.843 21 320.981 21C323.162 21 324.881 21.4526 326.15 22.3684C327.418 23.2842 328.052 24.5474 328.052 26.1684C328.052 27.5158 327.654 28.7474 326.859 29.8632C326.064 30.9789 325.161 31.9263 324.14 32.6737C323.119 33.4316 321.539 34.5158 319.39 35.9263C321.926 39.6105 325.462 43.2316 329.997 46.7789C330.308 45.5684 330.469 44.2105 330.469 42.6947C330.469 40.6947 330.136 39.2421 329.47 38.3263C328.804 37.4105 327.708 36.9579 326.203 36.9579C326.128 36.9579 326.085 36.8526 326.074 36.6526C326.064 36.4526 326.107 36.3474 326.203 36.3474L338.755 36.2947C338.862 36.2947 338.916 36.4 338.916 36.6C338.916 36.8 338.862 36.9053 338.755 36.9053C337.702 36.9053 336.917 37.0211 336.401 37.2421C335.896 37.4632 335.509 37.8316 335.241 38.3579C334.972 38.8737 334.682 39.7053 334.37 40.8421C333.983 42.2211 333.575 43.4737 333.156 44.6105C332.737 45.7474 332.189 46.8526 331.523 47.9158C333.811 49.6 335.842 50.9263 337.616 51.8947C339.389 52.8632 340.786 53.4842 341.807 53.7579C341.946 53.7895 342.011 53.9053 341.989 54.0947L342 54.1053ZM327.149 51.1368C326.59 50.7579 325.827 50.1895 324.881 49.4316C323.087 48.0211 321.282 46.4421 319.476 44.7053C317.66 42.9684 316.07 41.2526 314.705 39.5684C313.125 41.1895 312.33 42.8947 312.33 44.6842C312.33 46.0316 312.728 47.2947 313.512 48.4842C314.297 49.6737 315.436 50.6421 316.919 51.3789C318.402 52.1158 320.121 52.4947 322.088 52.4947C324.054 52.4947 325.816 52.0526 327.149 51.1474V51.1368ZM318.713 34.8632C321.206 32.4842 322.464 29.9579 322.464 27.2632C322.464 25.7474 322.098 24.5579 321.378 23.6947C320.658 22.8316 319.713 22.4 318.552 22.4C317.563 22.4 316.865 22.7053 316.446 23.3263C316.027 23.9474 315.812 24.8737 315.812 26.1158C315.812 28.8 316.779 31.7158 318.713 34.8526V34.8632Z" fill="currentColor"/>
    <path d="M61.3005 138.627C61.3005 138.969 61.1637 139.123 60.8729 139.123C59.7441 139.123 58.0166 139.072 55.6733 138.952C53.2104 138.85 51.4487 138.781 50.3882 138.781C48.9857 138.781 47.2753 138.832 45.2741 138.952C43.3756 139.072 41.8534 139.123 40.7416 139.123C40.5192 139.123 40.3995 138.952 40.3995 138.627C40.3995 138.302 40.5192 138.131 40.7416 138.131C42.1954 138.131 43.2388 137.977 43.8887 137.669C44.5387 137.362 44.8465 136.814 44.8465 136.027C44.8465 135.07 44.2821 133.479 43.1704 131.238L34.4302 114.032H19.4814L13.5292 127.219C12.7938 128.844 12.4346 130.349 12.4346 131.751C12.4346 133.77 13.1529 135.326 14.5726 136.455C15.9922 137.584 17.9249 138.131 20.3195 138.131C20.5932 138.131 20.73 138.302 20.73 138.627C20.73 138.952 20.5932 139.123 20.3195 139.123C19.3104 139.123 17.8565 139.072 15.958 138.952C13.82 138.85 11.9899 138.781 10.4163 138.781C8.84274 138.781 7.08103 138.832 4.96014 138.952C3.06161 139.072 1.52225 139.123 0.342079 139.123C0.119728 139.123 0 138.952 0 138.627C0 138.302 0.119728 138.131 0.342079 138.131C1.91564 138.131 3.21554 137.806 4.29309 137.173C5.35354 136.523 6.41398 135.377 7.49153 133.735C8.55197 132.076 9.81767 129.631 11.2715 126.381L29.4872 86.3233C29.6069 86.1523 29.8464 86.0668 30.2398 86.0668C30.6845 86.0668 30.941 86.1523 30.9924 86.3233L51.9789 127.629C53.9287 131.597 55.5536 134.351 56.8535 135.856C58.1363 137.362 59.4875 138.131 60.89 138.131C61.1637 138.131 61.3176 138.302 61.3176 138.627H61.3005ZM33.2501 111.671L26.5282 98.3987L20.5589 111.671H33.233H33.2501Z" fill="currentColor"/>
    <path d="M124.192 138.627C124.192 138.969 124.107 139.123 123.935 139.123C121.969 139.123 120.412 139.089 119.232 139.038L112.767 138.952L105.207 139.038C104.198 139.089 102.829 139.123 101.085 139.123C100.914 139.123 100.828 138.952 100.828 138.627C100.828 138.302 100.914 138.131 101.085 138.131C103.154 138.131 104.659 137.994 105.617 137.704C106.575 137.43 107.208 136.9 107.55 136.113C107.892 135.326 108.046 134.078 108.046 132.333V113.023H80.9191V132.333C80.9191 134.009 81.0901 135.258 81.4151 136.062C81.7572 136.865 82.39 137.413 83.3478 137.704C84.3056 137.977 85.8108 138.131 87.8804 138.131C88.0001 138.131 88.0514 138.302 88.0514 138.627C88.0514 138.952 88.0001 139.123 87.8804 139.123C85.9134 139.123 84.357 139.089 83.1768 139.038L75.8734 138.952L69.5791 139.038C68.4503 139.089 66.928 139.123 64.9611 139.123C64.8413 139.123 64.79 138.952 64.79 138.627C64.79 138.302 64.8413 138.131 64.9611 138.131C66.928 138.131 68.3477 137.994 69.2371 137.704C70.1265 137.43 70.7422 136.883 71.0843 136.062C71.4264 135.258 71.5803 134.009 71.5803 132.333V93.4557C71.5803 91.7795 71.4093 90.548 71.0843 89.7612C70.7422 88.9744 70.1436 88.4271 69.2713 88.1192C68.399 87.8114 67.0135 87.6574 65.115 87.6574C64.944 87.6574 64.8584 87.4864 64.8584 87.1614C64.8584 86.8364 64.944 86.6654 65.115 86.6654L69.6476 86.7509C72.2132 86.8707 74.2998 86.922 75.8563 86.922C77.9772 86.922 80.4401 86.8707 83.2452 86.7509L87.8633 86.6654C87.983 86.6654 88.0343 86.8364 88.0343 87.1614C88.0343 87.4864 87.983 87.6574 87.8633 87.6574C85.845 87.6574 84.357 87.8285 83.4162 88.1534C82.4584 88.4955 81.8085 89.06 81.4493 89.8809C81.0901 90.6848 80.902 91.9334 80.902 93.6096V110.662H108.029V93.6096C108.029 91.9334 107.858 90.6848 107.533 89.8809C107.191 89.0771 106.558 88.4955 105.6 88.1534C104.642 87.8114 103.137 87.6574 101.068 87.6574C100.896 87.6574 100.811 87.4864 100.811 87.1614C100.811 86.8364 100.896 86.6654 101.068 86.6654L105.19 86.7509C107.995 86.8707 110.509 86.922 112.75 86.922C114.255 86.922 116.41 86.8707 119.215 86.7509L123.918 86.6654C124.089 86.6654 124.175 86.8364 124.175 87.1614C124.175 87.4864 124.089 87.6574 123.918 87.6574C122.02 87.6574 120.6 87.8114 119.677 88.1192C118.753 88.4271 118.137 88.9744 117.829 89.7612C117.522 90.548 117.368 91.7795 117.368 93.4557V132.333C117.368 134.009 117.522 135.258 117.829 136.062C118.137 136.865 118.736 137.413 119.625 137.704C120.515 137.977 121.951 138.131 123.901 138.131C124.072 138.131 124.158 138.302 124.158 138.627H124.192Z" fill="currentColor"/>
    <path d="M188.93 138.627C188.93 138.969 188.793 139.123 188.502 139.123C187.373 139.123 185.646 139.072 183.303 138.952C180.84 138.85 179.078 138.781 178.018 138.781C176.615 138.781 174.905 138.832 172.904 138.952C171.005 139.072 169.483 139.123 168.371 139.123C168.149 139.123 168.029 138.952 168.029 138.627C168.029 138.302 168.149 138.131 168.371 138.131C169.825 138.131 170.868 137.977 171.518 137.669C172.168 137.362 172.476 136.814 172.476 136.027C172.476 135.07 171.912 133.479 170.8 131.238L162.06 114.032H147.111L141.142 127.219C140.406 128.844 140.047 130.349 140.047 131.751C140.047 133.77 140.765 135.326 142.185 136.455C143.604 137.584 145.537 138.131 147.932 138.131C148.205 138.131 148.359 138.302 148.359 138.627C148.359 138.952 148.223 139.123 147.932 139.123C146.923 139.123 145.469 139.072 143.57 138.952C141.449 138.85 139.602 138.781 138.029 138.781C136.455 138.781 134.693 138.832 132.572 138.952C130.674 139.072 129.135 139.123 127.954 139.123C127.732 139.123 127.612 138.952 127.612 138.627C127.612 138.302 127.732 138.131 127.954 138.131C129.528 138.131 130.845 137.806 131.905 137.173C132.966 136.523 134.026 135.377 135.104 133.735C136.164 132.076 137.43 129.631 138.884 126.381L157.1 86.3233C157.219 86.1523 157.459 86.0668 157.852 86.0668C158.297 86.0668 158.553 86.1523 158.605 86.3233L179.591 127.629C181.558 131.597 183.166 134.351 184.466 135.856C185.749 137.362 187.1 138.131 188.502 138.131C188.776 138.131 188.93 138.302 188.93 138.627ZM160.879 111.671L154.158 98.3987L148.188 111.671H160.862H160.879Z" fill="currentColor"/>
    <path d="M232.168 86.3577C234.854 86.7853 236.957 87.3155 238.463 87.9997C238.959 88.1707 239.284 88.376 239.42 88.6325C239.557 88.8891 239.694 89.3167 239.797 89.9324L240.806 101.597C240.806 101.768 240.669 101.871 240.378 101.939C240.105 101.991 239.934 101.905 239.882 101.683C237.984 97.27 235.435 93.8492 232.237 91.4376C229.038 89.0259 225.344 87.8286 221.153 87.8286C215.612 87.8286 211.336 89.864 208.308 93.9518C205.281 98.0397 203.776 103.53 203.776 110.406C203.776 115.554 204.597 120.258 206.256 124.517C207.898 128.775 210.224 132.145 213.234 134.642C216.227 137.139 219.631 138.371 223.428 138.371C227.003 138.371 230.219 137.174 233.041 134.796C235.863 132.419 238.394 128.793 240.635 123.918C240.686 123.696 240.874 123.61 241.182 123.661C241.49 123.713 241.644 123.832 241.644 124.003L240.378 135.429C240.259 136.096 240.139 136.541 240.002 136.729C239.865 136.934 239.54 137.139 239.044 137.362C234.067 139.209 228.936 140.133 223.685 140.133C216.86 140.133 211.148 138.781 206.547 136.062C201.963 133.342 198.576 129.904 196.421 125.731C194.266 121.558 193.188 117.213 193.188 112.681C193.188 107.361 194.625 102.658 197.516 98.5699C200.406 94.4821 204.238 91.3178 209.027 89.0772C213.816 86.8366 218.947 85.7249 224.437 85.7249C226.9 85.7249 229.483 85.9301 232.168 86.3577Z" fill="currentColor"/>
    <path d="M251.222 101.597C251.171 101.768 251 101.837 250.726 101.803C250.453 101.768 250.299 101.683 250.299 101.512C250.521 99.2712 250.778 96.3806 251.051 92.823C251.325 89.2654 251.479 86.5972 251.479 84.8013C251.479 84.5276 251.633 84.3737 251.941 84.3737C252.249 84.3737 252.403 84.5105 252.403 84.8013C252.403 86.0328 253.993 86.6485 257.192 86.6485C261.998 86.8195 267.625 86.9051 274.073 86.9051C277.374 86.9051 280.881 86.8537 284.575 86.734L290.288 86.6485C292.409 86.6485 293.965 86.5117 294.94 86.2209C295.915 85.9472 296.548 85.3828 296.822 84.5447C296.873 84.3224 297.061 84.2026 297.369 84.2026C297.677 84.2026 297.831 84.3224 297.831 84.5447C297.66 86.2209 297.472 88.9062 297.283 92.6007C297.078 96.2951 296.993 99.2712 296.993 101.495C296.993 101.666 296.856 101.751 296.565 101.751C296.274 101.751 296.12 101.666 296.069 101.495C295.231 97.1845 293.657 93.9519 291.365 91.7968C289.073 89.6417 286.251 88.5641 282.882 88.5641C281.257 88.5641 280.179 88.9233 279.649 89.6075C279.119 90.3087 278.845 91.6428 278.845 93.5927V132.299C278.845 134.026 279.016 135.292 279.341 136.079C279.683 136.866 280.316 137.396 281.274 137.67C282.232 137.943 283.737 138.097 285.807 138.097C285.978 138.097 286.063 138.268 286.063 138.593C286.063 138.918 285.978 139.089 285.807 139.089C283.788 139.089 282.198 139.055 281.018 139.004L274.039 138.918L267.232 139.004C266.052 139.055 264.427 139.089 262.357 139.089C262.186 139.089 262.101 138.918 262.101 138.593C262.101 138.268 262.186 138.097 262.357 138.097C264.375 138.097 265.863 137.96 266.855 137.67C267.83 137.396 268.497 136.849 268.874 136.028C269.233 135.224 269.421 133.975 269.421 132.299V93.4217C269.421 91.5231 269.164 90.2232 268.668 89.5562C268.172 88.8891 267.129 88.547 265.556 88.547C258.885 88.547 254.113 92.8914 251.205 101.563L251.222 101.597Z" fill="currentColor"/>
    <path d="M357.353 138.627C357.353 138.969 357.216 139.123 356.925 139.123C355.796 139.123 354.069 139.072 351.726 138.952C349.263 138.85 347.501 138.781 346.44 138.781C345.038 138.781 343.328 138.832 341.326 138.952C339.428 139.072 337.906 139.123 336.794 139.123C336.572 139.123 336.452 138.952 336.452 138.627C336.452 138.302 336.572 138.131 336.794 138.131C338.248 138.131 339.291 137.977 339.941 137.669C340.591 137.362 340.899 136.814 340.899 136.027C340.899 135.07 340.334 133.479 339.223 131.238L330.483 114.032H315.534L309.564 127.219C308.829 128.844 308.47 130.349 308.47 131.751C308.47 133.77 309.188 135.326 310.608 136.455C312.027 137.584 313.96 138.131 316.355 138.131C316.628 138.131 316.782 138.302 316.782 138.627C316.782 138.952 316.645 139.123 316.355 139.123C315.346 139.123 313.892 139.072 311.993 138.952C309.872 138.85 308.025 138.781 306.451 138.781C304.878 138.781 303.116 138.832 300.995 138.952C299.097 139.072 297.557 139.123 296.377 139.123C296.155 139.123 296.035 138.952 296.035 138.627C296.035 138.302 296.155 138.131 296.377 138.131C297.951 138.131 299.268 137.806 300.328 137.173C301.389 136.523 302.449 135.377 303.527 133.735C304.587 132.076 305.853 129.631 307.307 126.381L325.522 86.3233C325.642 86.1523 325.882 86.0668 326.275 86.0668C326.72 86.0668 326.976 86.1523 327.028 86.3233L348.014 127.629C349.981 131.597 351.589 134.351 352.889 135.856C354.171 137.362 355.523 138.131 356.925 138.131C357.199 138.131 357.353 138.302 357.353 138.627ZM329.302 111.671L322.58 98.3987L316.611 111.671H329.285H329.302Z" fill="currentColor"/>
    <path d="M400.609 86.3577C403.294 86.7853 405.398 87.3155 406.903 87.9997C407.399 88.1707 407.724 88.376 407.861 88.6325C407.998 88.8891 408.135 89.3167 408.237 89.9324L409.246 101.597C409.246 101.768 409.109 101.871 408.819 101.939C408.545 101.991 408.374 101.905 408.323 101.683C406.424 97.27 403.876 93.8492 400.677 91.4376C397.479 89.0259 393.784 87.8286 389.594 87.8286C384.052 87.8286 379.776 89.864 376.749 93.9518C373.721 98.0397 372.216 103.53 372.216 110.406C372.216 115.554 373.037 120.258 374.696 124.517C376.338 128.775 378.664 132.145 381.675 134.642C384.668 137.139 388.072 138.371 391.869 138.371C395.443 138.371 398.659 137.174 401.481 134.796C404.303 132.419 406.835 128.793 409.075 123.918C409.127 123.696 409.315 123.61 409.623 123.661C409.93 123.713 410.084 123.832 410.084 124.003L408.819 135.429C408.699 136.096 408.579 136.541 408.442 136.729C408.306 136.934 407.981 137.139 407.485 137.362C402.507 139.209 397.376 140.133 392.125 140.133C385.301 140.133 379.588 138.781 374.987 136.062C370.403 133.342 367.017 129.904 364.862 125.731C362.706 121.558 361.629 117.213 361.629 112.681C361.629 107.361 363.066 102.658 365.956 98.5699C368.847 94.4821 372.678 91.3178 377.467 89.0772C382.256 86.8366 387.387 85.7249 392.878 85.7249C395.341 85.7249 397.923 85.9301 400.609 86.3577Z" fill="currentColor"/>
    <path d="M476.088 138.627C476.088 138.969 476.003 139.123 475.832 139.123C473.865 139.123 472.308 139.089 471.128 139.038L464.663 138.952L457.103 139.038C456.094 139.089 454.725 139.123 452.981 139.123C452.81 139.123 452.724 138.952 452.724 138.627C452.724 138.302 452.81 138.131 452.981 138.131C455.05 138.131 456.555 137.994 457.513 137.704C458.471 137.43 459.104 136.9 459.446 136.113C459.788 135.326 459.942 134.078 459.942 132.333V100.502L433.824 128.467V132.333C433.824 134.009 433.995 135.258 434.32 136.062C434.662 136.865 435.295 137.413 436.253 137.704C437.211 137.977 438.716 138.131 440.786 138.131C440.905 138.131 440.957 138.302 440.957 138.627C440.957 138.952 440.905 139.123 440.786 139.123C438.819 139.123 437.262 139.089 436.082 139.038L428.779 138.952L422.484 139.038C421.356 139.089 419.833 139.123 417.866 139.123C417.747 139.123 417.695 138.952 417.695 138.627C417.695 138.302 417.747 138.131 417.866 138.131C419.833 138.131 421.253 137.994 422.142 137.704C423.032 137.43 423.647 136.883 423.99 136.062C424.332 135.258 424.486 134.009 424.486 132.333V93.4557C424.486 91.7795 424.315 90.548 423.99 89.7612C423.647 88.9744 423.049 88.4271 422.177 88.1192C421.304 87.8114 419.919 87.6574 418.02 87.6574C417.849 87.6574 417.764 87.4864 417.764 87.1614C417.764 86.8364 417.849 86.6654 418.02 86.6654L422.553 86.7509C425.118 86.8707 427.205 86.922 428.762 86.922C430.882 86.922 433.345 86.8707 436.15 86.7509L440.769 86.6654C440.888 86.6654 440.94 86.8364 440.94 87.1614C440.94 87.4864 440.888 87.6574 440.769 87.6574C438.75 87.6574 437.262 87.8285 436.322 88.1534C435.364 88.4955 434.714 89.06 434.355 89.8809C433.995 90.6848 433.807 91.9334 433.807 93.6096V125.012L459.925 97.133V93.6096C459.925 91.9334 459.754 90.6848 459.429 89.8809C459.087 89.0771 458.454 88.4955 457.496 88.1534C456.538 87.8114 455.033 87.6574 452.964 87.6574C452.793 87.6574 452.707 87.4864 452.707 87.1614C452.707 86.8364 452.793 86.6654 452.964 86.6654L457.086 86.7509C459.891 86.8707 462.405 86.922 464.646 86.922C466.151 86.922 468.306 86.8707 471.111 86.7509L475.815 86.6654C475.986 86.6654 476.071 86.8364 476.071 87.1614C476.071 87.4864 475.986 87.6574 475.815 87.6574C473.916 87.6574 472.513 87.8114 471.607 88.1192C470.7 88.4271 470.102 88.9744 469.76 89.7612C469.418 90.548 469.264 91.7795 469.264 93.4557V132.333C469.264 134.009 469.435 135.258 469.76 136.062C470.102 136.865 470.718 137.413 471.607 137.704C472.496 137.977 473.899 138.131 475.815 138.131C475.986 138.131 476.071 138.302 476.071 138.627H476.088Z" fill="currentColor"/>
    <path d="M530 138.627C530 138.969 529.949 139.123 529.829 139.123C527.811 139.123 526.221 139.089 525.04 139.038L518.575 138.952L512.281 139.038C511.22 139.089 509.767 139.123 507.919 139.123C507.748 139.123 507.663 138.952 507.663 138.627C507.663 138.302 507.748 138.131 507.919 138.131C509.715 138.131 511.015 137.994 511.819 137.704C512.623 137.43 513.17 136.9 513.461 136.113C513.735 135.326 513.889 134.078 513.889 132.333V112.185C511.819 112.629 509.869 113.775 508.056 115.622C506.243 117.47 504.088 120.6 501.625 125.03C498.769 130.007 496.768 133.428 495.622 135.275C494.476 137.122 493.672 138.234 493.227 138.593C492.782 138.952 492.167 139.14 491.38 139.14H480.382C480.262 139.14 480.211 138.969 480.211 138.644C480.211 138.319 480.262 138.148 480.382 138.148C482.109 138.097 483.512 137.498 484.572 136.387C485.633 135.275 487.087 133.12 488.934 129.921L492.97 123.371C495.211 119.625 497.469 116.922 499.778 115.263C502.07 113.621 504.789 112.51 507.919 111.945C502.497 111.449 498.341 110.098 495.485 107.909C492.628 105.719 491.209 102.863 491.209 99.3395C491.209 96.8253 491.978 94.5846 493.518 92.6177C495.057 90.6507 497.178 89.1285 499.863 88.0338C502.549 86.9392 505.576 86.3918 508.928 86.3918C510.16 86.3918 511.614 86.4774 513.29 86.6484C513.957 86.6997 514.744 86.7681 515.633 86.8194C516.523 86.8708 517.515 86.905 518.575 86.905C520.303 86.905 522.458 86.8537 525.04 86.7339L529.829 86.6484C529.949 86.6484 530 86.8194 530 87.1444C530 87.4694 529.949 87.6404 529.829 87.6404C527.76 87.6404 526.272 87.7944 525.382 88.1022C524.493 88.4101 523.894 88.9403 523.621 89.6929C523.347 90.4455 523.193 91.6941 523.193 93.4216V132.299C523.193 134.026 523.33 135.292 523.621 136.079C523.894 136.866 524.493 137.396 525.382 137.669C526.272 137.943 527.76 138.097 529.829 138.097C529.949 138.097 530 138.268 530 138.593V138.627ZM503.883 106.797C505.901 109.14 508.843 110.32 512.708 110.32H513.889V93.6097C513.889 89.5219 512.178 87.4865 508.757 87.4865C503.489 87.4865 500.872 90.7363 500.872 97.2186C500.872 101.255 501.882 104.437 503.9 106.797H503.883Z" fill="currentColor"/>
  </svg>
};

export default Names;
