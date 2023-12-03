import { FC } from "react";

const LoadingIcon: FC = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path
      d="M25.5 6V12C25.5 12.3978 25.342 12.7794 25.0607 13.0607C24.7794 13.342 24.3978 13.5 24 13.5C23.6022 13.5 23.2206 13.342 22.9393 13.0607C22.658 12.7794 22.5 12.3978 22.5 12V6C22.5 5.60218 22.658 5.22064 22.9393 4.93934C23.2206 4.65804 23.6022 4.5 24 4.5C24.3978 4.5 24.7794 4.65804 25.0607 4.93934C25.342 5.22064 25.5 5.60218 25.5 6ZM32.4844 17.0156C32.6815 17.0155 32.8768 16.9766 33.0589 16.901C33.241 16.8254 33.4064 16.7146 33.5456 16.575L37.7887 12.3337C38.0702 12.0523 38.2283 11.6705 38.2283 11.2725C38.2283 10.8745 38.0702 10.4927 37.7887 10.2112C37.5073 9.92979 37.1255 9.77167 36.7275 9.77167C36.3295 9.77167 35.9477 9.92979 35.6663 10.2112L31.425 14.4544C31.2151 14.664 31.0721 14.9313 31.014 15.2222C30.956 15.5132 30.9856 15.8148 31.099 16.0889C31.2124 16.3631 31.4045 16.5975 31.6511 16.7624C31.8977 16.9274 32.1877 17.0155 32.4844 17.0156ZM42 22.5H36C35.6022 22.5 35.2206 22.658 34.9393 22.9393C34.658 23.2206 34.5 23.6022 34.5 24C34.5 24.3978 34.658 24.7794 34.9393 25.0607C35.2206 25.342 35.6022 25.5 36 25.5H42C42.3978 25.5 42.7794 25.342 43.0607 25.0607C43.342 24.7794 43.5 24.3978 43.5 24C43.5 23.6022 43.342 23.2206 43.0607 22.9393C42.7794 22.658 42.3978 22.5 42 22.5ZM33.5456 31.425C33.262 31.1556 32.8844 31.0076 32.4933 31.0126C32.1021 31.0176 31.7284 31.1752 31.4518 31.4518C31.1752 31.7284 31.0176 32.1021 31.0126 32.4933C31.0076 32.8844 31.1556 33.262 31.425 33.5456L35.6663 37.7887C35.9477 38.0702 36.3295 38.2283 36.7275 38.2283C37.1255 38.2283 37.5073 38.0702 37.7887 37.7887C38.0702 37.5073 38.2283 37.1255 38.2283 36.7275C38.2283 36.3295 38.0702 35.9477 37.7887 35.6663L33.5456 31.425ZM24 34.5C23.6022 34.5 23.2206 34.658 22.9393 34.9393C22.658 35.2206 22.5 35.6022 22.5 36V42C22.5 42.3978 22.658 42.7794 22.9393 43.0607C23.2206 43.342 23.6022 43.5 24 43.5C24.3978 43.5 24.7794 43.342 25.0607 43.0607C25.342 42.7794 25.5 42.3978 25.5 42V36C25.5 35.6022 25.342 35.2206 25.0607 34.9393C24.7794 34.658 24.3978 34.5 24 34.5ZM14.4544 31.425L10.2112 35.6663C9.92979 35.9477 9.77167 36.3295 9.77167 36.7275C9.77167 37.1255 9.92979 37.5073 10.2112 37.7887C10.4927 38.0702 10.8745 38.2283 11.2725 38.2283C11.6705 38.2283 12.0523 38.0702 12.3337 37.7887L16.575 33.5456C16.8444 33.262 16.9924 32.8844 16.9874 32.4933C16.9824 32.1021 16.8248 31.7284 16.5482 31.4518C16.2716 31.1752 15.8979 31.0176 15.5067 31.0126C15.1156 31.0076 14.738 31.1556 14.4544 31.425ZM13.5 24C13.5 23.6022 13.342 23.2206 13.0607 22.9393C12.7794 22.658 12.3978 22.5 12 22.5H6C5.60218 22.5 5.22064 22.658 4.93934 22.9393C4.65804 23.2206 4.5 23.6022 4.5 24C4.5 24.3978 4.65804 24.7794 4.93934 25.0607C5.22064 25.342 5.60218 25.5 6 25.5H12C12.3978 25.5 12.7794 25.342 13.0607 25.0607C13.342 24.7794 13.5 24.3978 13.5 24ZM12.3337 10.2112C12.0523 9.92979 11.6705 9.77167 11.2725 9.77167C10.8745 9.77167 10.4927 9.92979 10.2112 10.2112C9.92979 10.4927 9.77167 10.8745 9.77167 11.2725C9.77167 11.6705 9.92979 12.0523 10.2112 12.3337L14.4544 16.575C14.738 16.8444 15.1156 16.9924 15.5067 16.9874C15.8979 16.9824 16.2716 16.8248 16.5482 16.5482C16.8248 16.2716 16.9824 15.8979 16.9874 15.5067C16.9924 15.1156 16.8444 14.738 16.575 14.4544L12.3337 10.2112Z"
      fill="#5C5C5C"
    />
  </svg>
);

export default LoadingIcon;
