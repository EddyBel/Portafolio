import React, { Fragment } from "react";

export function ArrowRight({ width, height, color, classN }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        className={classN}
        fill={color}
        d="M7 24a1 1 0 01-.71-.29 1 1 0 010-1.42l8.17-8.17a3 3 0 000-4.24L6.29 1.71A1 1 0 017.71.29l8.17 8.17a5 5 0 010 7.08l-8.17 8.17A1 1 0 017 24z"
      ></path>
    </svg>
  );
}

export function ArrowLeft({ width, height, color, classN }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        className={classN}
        fill={color}
        d="M17.17 24a1 1 0 01-.71-.29l-8.17-8.17a5 5 0 010-7.08L16.46.29a1 1 0 111.42 1.42L9.71 9.88a3 3 0 000 4.24l8.17 8.17a1 1 0 010 1.42 1 1 0 01-.71.29z"
      ></path>
    </svg>
  );
}

export function PC({ width, height, color }) {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 34.418 34.418"
        version="1.1"
        viewBox="0 0 34.418 34.418"
        xmlSpace="preserve"
        width={width}
        height={height}
      >
        <path
          fill={color}
          d="M32.335 11.606h-6.533v-1.009h6.533v1.009zm0 .658h-6.533v1.011h6.533v-1.011zm-.004-4.577h-6.523V9.91h6.523V7.687zm2.087-2.39v23.827a.65.65 0 01-.65.648h-9.397a.649.649 0 01-.649-.649V5.297c0-.358.29-.65.649-.65h9.397a.65.65 0 01.65.65zm-1.299.647h-8.1v22.53h8.1V5.944zm-.784 7.988h-6.533v1.008h6.533v-1.008zm-1.063 7.518a2.097 2.097 0 11-2.097-2.098c1.158 0 2.097.941 2.097 2.098zm-.757 0a1.342 1.342 0 00-2.683 0 1.34 1.34 0 002.683 0zM21.937 9.218v13.505c0 .814-.655 1.473-1.461 1.473H13.18s-.414 2.948 2.212 2.948v1.475H6.546v-1.473c2.529 0 2.212-2.948 2.212-2.948H1.465A1.469 1.469 0 010 22.725V9.218c0-.814.656-1.47 1.465-1.47h19.01c.807 0 1.462.656 1.462 1.47zm-9.605 13.176a1.264 1.264 0 10-2.531.003 1.264 1.264 0 002.531-.003zm8.039-13.083H1.568v11.387h18.803V9.311zm-9.29 12.292a.785.785 0 100 1.57.785.785 0 000-1.57z"
        ></path>
      </svg>
    </Fragment>
  );
}

export function Mobile({ width, height, color }) {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
      >
        <path
          fill={color}
          d="M15 0H9a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h6a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zM9 2h6a3 3 0 013 3v11H6V5a3 3 0 013-3zm6 20H9a3 3 0 01-3-3v-1h12v1a3 3 0 01-3 3z"
        ></path>
        <circle fill={color} cx="12" cy="20" r="1"></circle>
      </svg>
    </Fragment>
  );
}

export function Web({ width, height, color }) {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
      >
        <path
          fill={color}
          d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm8.647 7h-3.221a19.676 19.676 0 00-2.821-4.644A10.031 10.031 0 0120.647 7zM16.5 12a10.211 10.211 0 01-.476 3H7.976a10.211 10.211 0 01-.476-3 10.211 10.211 0 01.476-3h8.048a10.211 10.211 0 01.476 3zm-7.722 5h6.444A19.614 19.614 0 0112 21.588 19.57 19.57 0 018.778 17zm0-10A19.614 19.614 0 0112 2.412 19.57 19.57 0 0115.222 7zM9.4 2.356A19.676 19.676 0 006.574 7H3.353A10.031 10.031 0 019.4 2.356zM2.461 9H5.9a12.016 12.016 0 00-.4 3 12.016 12.016 0 00.4 3H2.461a9.992 9.992 0 010-6zm.892 8h3.221A19.676 19.676 0 009.4 21.644 10.031 10.031 0 013.353 17zm11.252 4.644A19.676 19.676 0 0017.426 17h3.221a10.031 10.031 0 01-6.042 4.644zM21.539 15H18.1a12.016 12.016 0 00.4-3 12.016 12.016 0 00-.4-3h3.437a9.992 9.992 0 010 6z"
        ></path>
      </svg>
    </Fragment>
  );
}

export function Spinner({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 38 38"
    >
      <defs>
        <linearGradient id="a" x1="8.042%" x2="65.682%" y1="0%" y2="23.865%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="63.146%" stopColor="#fff" stopOpacity="0.631"></stop>
          <stop offset="100%" stopColor="#fff"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <path stroke="url(#a)" strokeWidth="2" d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            dur="0.9s"
            from="0 18 18"
            repeatCount="indefinite"
            to="360 18 18"
            type="rotate"
          ></animateTransform>
        </path>
        <circle cx="36" cy="18" r="1" fill="#fff">
          <animateTransform
            attributeName="transform"
            dur="0.9s"
            from="0 18 18"
            repeatCount="indefinite"
            to="360 18 18"
            type="rotate"
          ></animateTransform>
        </circle>
      </g>
    </svg>
  );
}

export function Check({ width, height, color }) {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        x="0"
        y="0"
        enableBackground="new 0 0 507.506 507.506"
        version="1.1"
        viewBox="0 0 507.506 507.506"
        xmlSpace="preserve"
      >
        <path
          fill={color}
          d="M163.865 436.934a54.228 54.228 0 01-38.4-15.915L9.369 304.966c-12.492-12.496-12.492-32.752 0-45.248 12.496-12.492 32.752-12.492 45.248 0l109.248 109.248L452.889 79.942c12.496-12.492 32.752-12.492 45.248 0 12.492 12.496 12.492 32.752 0 45.248L202.265 421.019a54.228 54.228 0 01-38.4 15.915z"
        ></path>
      </svg>
    </Fragment>
  );
}

export function Error({ width, height, color }) {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
      >
        <path fill={color} d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path>
        <path
          fill={color}
          d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 00.054 1.968A1.984 1.984 0 004.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 00.054-1.968L13.768 4.2zM4.661 19L12 5.137 19.344 19H4.661z"
        ></path>
      </svg>
    </Fragment>
  );
}

export function Alert({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 492.804 492.804"
      version="1.1"
      viewBox="0 0 492.804 492.804"
      xmlSpace="preserve"
      width={width}
      height={height}
    >
      <path
        fill={color}
        d="M482.592 381.614L288.863 69.966c-11.22-18.044-26.348-27.96-42.656-27.96-16.32 0-31.456 9.924-42.672 27.976L10.267 381.142c-11.216 18.04-13.316 35.268-5.94 48.564 7.432 13.38 23.36 20.728 44.864 20.752l394.608.3h-.336v.04c19.272 0 37.56-7.316 44.984-20.652 7.377-13.256 5.361-30.48-5.855-48.532zM256.96 388.59a15.28 15.28 0 01-10.792 4.484c-4.048 0-7.988-1.64-10.868-4.5-2.856-2.86-4.476-6.852-4.472-10.932.008-4.056.956-8.024 3.82-10.86 2.924-2.888 5.404-4.54 9.26-4.54l.72-.008c4.04 0 8.84 1.66 11.744 4.564 2.872 2.856 4.932 6.812 4.924 10.876-.004 4.088-1.444 8.068-4.336 10.916zm-10.744-57.192c-4.12 0-7.94-1.6-10.852-4.512-2.912-2.916-4.488-6.792-4.484-10.92l-1.616-139.068c.016-8.512 5.972-15.416 13.684-15.416h1.772c4.124 0 8.88 1.604 11.788 4.52 2.916 2.92 4.932 6.788 4.928 10.916l.1 139.068c-.008 8.496-6.812 15.412-15.32 15.412z"
      ></path>
    </svg>
  );
}

export function PaperPlaneSvg({ width, height, color }) {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width={width}
        height={height}
      >
        <path
          fill={color}
          d="M23.119.882a2.966,2.966,0,0,0-2.8-.8l-16,3.37a4.995,4.995,0,0,0-2.853,8.481L3.184,13.65a1,1,0,0,1,.293.708v3.168a2.965,2.965,0,0,0,.3,1.285l-.008.007.026.026A3,3,0,0,0,5.157,20.2l.026.026.007-.008a2.965,2.965,0,0,0,1.285.3H9.643a1,1,0,0,1,.707.292l1.717,1.717A4.963,4.963,0,0,0,15.587,24a5.049,5.049,0,0,0,1.605-.264,4.933,4.933,0,0,0,3.344-3.986L23.911,3.715A2.975,2.975,0,0,0,23.119.882ZM4.6,12.238,2.881,10.521a2.94,2.94,0,0,1-.722-3.074,2.978,2.978,0,0,1,2.5-2.026L20.5,2.086,5.475,17.113V14.358A2.978,2.978,0,0,0,4.6,12.238Zm13.971,7.17a3,3,0,0,1-5.089,1.712L11.762,19.4a2.978,2.978,0,0,0-2.119-.878H6.888L21.915,3.5Z"
        />
      </svg>
    </Fragment>
  );
}

export function IconDownload({ width, height, color }) {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width={width}
        height={height}
      >
        <path
          fill={color}
          d="M9.878,18.122a3,3,0,0,0,4.244,0l3.211-3.211A1,1,0,0,0,15.919,13.5l-2.926,2.927L13,1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l-.009,15.408L8.081,13.5a1,1,0,0,0-1.414,1.415Z"
        />
        <path
          fill={color}
          d="M23,16h0a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17A1,1,0,0,0,23,16Z"
        />
      </svg>
    </Fragment>
  );
}

export function IconProyect({ width, height, color }) {
  return (
    <Fragment>
      <svg
        id="Layer_1"
        height={height}
        viewBox="0 0 24 24"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
      >
        <path
          fill={color}
          d="m19 1h-14a5.006 5.006 0 0 0 -5 5v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-12a5.006 5.006 0 0 0 -5-5zm-14 2h14a3 3 0 0 1 3 3v1h-20v-1a3 3 0 0 1 3-3zm14 18h-14a3 3 0 0 1 -3-3v-9h20v9a3 3 0 0 1 -3 3zm0-8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1zm-4 4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-12-12a1 1 0 1 1 1 1 1 1 0 0 1 -1-1zm3 0a1 1 0 1 1 1 1 1 1 0 0 1 -1-1zm3 0a1 1 0 1 1 1 1 1 1 0 0 1 -1-1z"
        />
      </svg>
    </Fragment>
  );
}

export function Borla({ width, height, color }) {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        x="0"
        y="0"
        enableBackground="new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <path
          fill={color}
          d="M470.549 111.573L313.237 36.629c-34.628-20.684-77.728-21.051-112.704-.96L41.451 111.573c-.597.299-1.216.619-1.792.96-37.752 21.586-50.858 69.689-29.272 107.441a78.736 78.736 0 0031.064 30.266l43.883 20.907V375.68c.026 46.743 30.441 88.039 75.072 101.931a331.883 331.883 0 0095.595 13.056 331.9 331.9 0 0095.595-12.949c44.631-13.891 75.046-55.188 75.072-101.931V271.104l42.667-20.395v175.957c0 11.782 9.551 21.333 21.333 21.333 11.782 0 21.333-9.551 21.333-21.333v-256c.142-25.051-19.638-48.193-41.452-59.093zM384 375.787c.011 27.959-18.129 52.69-44.8 61.077A289.962 289.962 0 01256 448a289.962 289.962 0 01-83.2-11.136c-26.671-8.388-44.811-33.118-44.8-61.077v-84.309l70.763 33.707a112.47 112.47 0 0057.707 15.765 106.666 106.666 0 0054.976-14.805L384 291.477v84.31zm68.267-164.054l-160.896 76.8a70.272 70.272 0 01-72.32-.96l-157.419-74.88c-17.547-9.462-24.101-31.357-14.639-48.903a36.105 36.105 0 0113.85-14.201l159.893-76.373a70.4 70.4 0 0172.32.96l157.312 74.944a36.861 36.861 0 0118.965 31.787 36.266 36.266 0 01-17.066 30.826z"
        ></path>
      </svg>
    </Fragment>
  );
}

export function ArrowDown({ width, height, color }) {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width={width}
        height={height}
      >
        <path
          fill={color}
          d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"
        />
      </svg>
    </Fragment>
  );
}

export function BurguerNavBar({ width, height, color, classN }) {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        className={classN}
      >
        <path fill={color} d="M1,6H23a1,1,0,0,0,0-2H1A1,1,0,0,0,1,6Z" />
        <path fill={color} d="M23,9H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" />
        <path fill={color} d="M23,19H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" />
        <path fill={color} d="M23,14H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" />
      </svg>
    </Fragment>
  );
}

export function Instagram({ width, height, color }) {
  return (
    <Fragment>
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={height}
      >
        <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
      </svg>
    </Fragment>
  );
}

export function Linkedin({ width, height, color }) {
  return (
    <Fragment>
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width={width}
        height={height}
      >
        {" "}
        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z" />
      </svg>
    </Fragment>
  );
}

export function GitHub({ width, height, color }) {
  return (
    <Fragment>
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={height}
      >
        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
      </svg>
    </Fragment>
  );
}

export function ArrowDownTwo({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M18.71 8.21a1 1 0 00-1.42 0l-4.58 4.58a1 1 0 01-1.42 0L6.71 8.21a1 1 0 00-1.42 0 1 1 0 000 1.41l4.59 4.59a3 3 0 004.24 0l4.59-4.59a1 1 0 000-1.41z"
      ></path>
    </svg>
  );
}
