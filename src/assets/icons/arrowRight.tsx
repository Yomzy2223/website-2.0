import React from "react";

const ArrowRightIcon = ({
  classNames,
}: {
  classNames?: { svg?: string; path?: string };
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      className={classNames?.svg}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 2C5.313 2 1.5 5.813 1.5 10.5C1.5 15.187 5.313 19 10 19C14.687 19 18.5 15.187 18.5 10.5C18.5 5.813 14.687 2 10 2ZM10 20.5C4.486 20.5 0 16.014 0 10.5C0 4.986 4.486 0.5 10 0.5C15.514 0.5 20 4.986 20 10.5C20 16.014 15.514 20.5 10 20.5Z"
        className={classNames?.path}
        fill="#00A2D4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.5587 14.721C8.3667 14.721 8.1737 14.648 8.0277 14.5C7.7357 14.206 7.7367 13.732 8.0297 13.44L10.9817 10.5L8.0297 7.56105C7.7367 7.26905 7.7357 6.79405 8.0277 6.50005C8.3197 6.20505 8.7937 6.20705 9.0877 6.49805L12.5737 9.96905C12.7147 10.11 12.7937 10.301 12.7937 10.5C12.7937 10.7 12.7147 10.891 12.5737 11.032L9.0877 14.502C8.9417 14.648 8.7497 14.721 8.5587 14.721Z"
        className={classNames?.path}
        fill="#00A2D4"
      />
    </svg>
  );
};

export default ArrowRightIcon;
