import React from "react";

const Map = ({ width, height, regions, enterHandler, leaveHandler, clickHandler }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      x="0"
      y="0"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      version="1.1"
      viewBox="0 0 1850 3220"
      xmlSpace="preserve"
    >
      <g display="inline">
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='lappi'
          fill={regions.lappi}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M794.593 431.122l-27.543 9.73-29.164 13.143-6.94-14.352-32.071-3.328-30.669-22.204-17.71 7.449 2.038-34.405-70.007-141.933-41.385-14.376-25.771 12.677-17.275 20.645 10.144 26.789-5.201 18.099-32.653-25.286-23.136 22.638 29.661 38.358 1.763 26.327 22.722 6.127 32.563 67.603 23.755 7.378 8.727 21.918 22.203 10.864 9.007 26.051 32.526 7.416 43.308 19.857 47.04 43.345.086 28.886 6.202 16.995 14.348-2.015 5.986 28.5 26.428 27.515-10.997 13.072-8.7 14.664-.4 18.456 1.19 56.709-15.065 38.725 11.623 20.925 27.565 4.754-7.028 15.869 5.327 18.259-23.72 12.329-1.096 31.449 47.498 109.766-17.498 19.34-3.409 56.202-17.689 15.338-4.738 15.46-5.99 18.52 4.17 16.74-4.599 11.95 7.845 38.93 20.167 19.562 1.079 20.598 16.783 27.391 1.479 19.75 10.151 27.341.258 21.968 11.08-1.28 7.745-12.34 9.676 11.62 20.89 7.73 6.523 9.66-7.339 15.4 5.289 6.12 10.14-6.62 3.94 12.702 8.247-.842 6.981-5.698 13.914 2.068 8.288 10.722 8.874-.822 6.53 6.692-.603.558 14.973-15.181 21.272-11.048 3.187-14.761 53.352 3.05 46.469-29.27 3.5 29.981 91.841 7.949 31.14-10.608 42.46-69.182 13.548 6.17 10.302-4.88 13.85 34.38 67.42 10.66 29.8-13.02 1.128-19.02-14.728-22.199 18.33-8.869 18.108 5.138 5.472-4.45-.36-16.79-12.53-9.13.32-17.34 9.37-1.46 4.54-31.27-18.45-7.76-12.64-27.2 4.88-18.33 14.98-5.93-.49-16.63 74.24 17.41 45.23-5.81-11.97-32.05-64.45-108.83 7.45-24.571 98.09-183.965 3.71-45.026-46.13-34.518-47.27-96.504-72.282-29.403-24.46-101.983 28.79-51.896 6.472-46.476-8.132-13.774-32.778.115 53.91-45.357-10.302-36.104 3.492-33.712 51.849-67.375-29.289-74.69-87.25-42.991-2.03-18.954-26.7-16.798-27.67-38.538-15.6 9.832-15.42-5.003-10.69 15.525-42.75 33.895-49.362-12.859-28.378 9.947-17.31 41.213-29.21 25.991-14.37 23.035 5.518 15.969-9.388 17.1-18.3 104.68 3.699 62.153-9.979 34.994-20.333-5.209-18.446 11.084-25.144 36.985 2.815 35.746-17.256-.108-6.169 12.6-24.128-29.705-43.631-19.086-41.214-30.534-20.843 10.942z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='kainuu'
          fill={regions.kainuu}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M1266.448 1570.11l-14.489 10.812-27.869-.12-12.69 20.848 17.13 14.33 2.46 40.85-5.71 15.39-30.44-7.008-.84 7.38-25.89 12.338-10.01 29.032-28.36 13.829-4.92 15.929-13.21 3.872-25.05 25.568 13.21 8.67 7.4 16.382-2.27 14.17 14.48 12.688 11.72-1.62 15.598 10.37-.01 70.04 10.84 13.63 43.168 16.352 51.082 3.888 61.65 39.46 40.17 46.34 26.7-61.52 67.358 12.46 100.242-17.9 20.79 52.92 13.508-14.73 25.182 2.25-1.79-1.76 32.238-22.99 34.131-89.07-10.579-49.21-54.092-37.098-15.438-41.54-.09-22.722 11-9.658.648-20.022-10.58-13.24 4.452-15.95-50.4-10.35-14.83-57.058 5.358-20.072 19.242-6.41 7.59-15.72-6.99-9.28 8.53-17.5-8.14-9.42-26.11-2.41 10.918-36.95 2.152-32.4 3.43-11.54-36.86 7.651-34.95-1.651-6.03-5-12.43 26.64-14.77 4.44-8.69-7.088-40.892 19.298-3.37 33.55-72.258 12.97-14.88 9.06-6.112 37.51-14.198-9.8z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='pohjoisPohjanmaa'
          fill={regions.pohjoisPohjanmaa}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M1389.004 1144.27l.492 16.636-14.978 5.932-4.887 18.328 12.642 27.197 18.448 7.766-4.543 31.27-9.368 1.46-.316 17.33 12.533 9.135.354 16.79-5.467 4.456-18.105-5.148-18.338 8.875 14.736 22.2-1.133 19.02-29.799 13.02-67.425-10.664-13.852-34.377-10.293 4.877-13.557-6.166-42.457 69.174-31.138 10.611-91.844-7.947-3.502-29.982-46.467 29.275-53.353-3.05-3.186 14.757-21.271 11.045-14.352 14.63c.613.638 1.229 1.27 1.842 1.897l.568 13.06 6.953.034 4.647-4.278 18.676 33.229-1.014 12.42-8.164 8.67.025 14.603-6.29 7.694 5.439 10.03-.098 31.138-8.678 11.63 4.383 9.555 12.4 7.158 5.288 9.68 3.142 20.752 9.406 9.588-.777 5.685-6.402-.3-14.397-11.647-13.388-1.156-2.354 6.676 1.156 8.527 19.522 19.6 3.93 11.767-5.135 4.65-8.969-.779-1.77-10.478-19.591-11.375-18.303-.147-9.465 7.368-21.418.218-7.164 6.37-4.226 7.662-12.356 1.43-5.123 26.486-19.121 13.296-10.166 43.018-12.633 9.758-.883 6.984-17.422 11.541-20.212 21.666-3.016 7.172-7.682 12.604-.228 14.683-6.117 3.309-7.512-4.977-8.963 13.563-7.426 5.98-7.422 11.309 57.93 38.51 9.424 37.625 10.789 5.609 4.98 20.951 14.756 5.813 16.446 49.441 61.857 75.332 17.484-2.318 6.479-40.237 14.72-6.113 46.667 32.016 23.586.072 9.486 7.912 8.912 18.816 30.854-.218 16.136-45.65 8.272-4.962-7.451-75.603 49.736-45.955 34.396-11.586-10.836-13.63.01-70.04-15.595-10.377-11.723 1.629-14.486-12.694 2.275-14.175-7.396-16.38-13.217-8.67 25.055-25.566 13.21-3.875 4.922-15.92 28.358-13.834 10.01-29.027 25.886-12.342.84-7.384 30.442 7.011 5.714-15.386-2.464-40.856-17.131-14.33 12.695-20.846 27.86.123 14.497-10.812 16.141 2.105 14.201 9.805 6.104-37.518 14.883-9.058 72.263-12.975 3.364-33.547 40.896-19.298 8.684 7.095 14.773-4.445 12.434-26.643 6.03 5.006 34.95 1.649 36.713-7.133 5.56-18.758-10.677-17.678 28.22-18.793 19.19-1.804-8.717-61.194-29.515-84.177-24.76-36.5-18.717-50.383-45.23 5.81zm-452.861 428.34l-3.454 6.04 6.473 5.62h6.91l-1.209-8.36zm-41.446 6.482l-33.244 7.767-6.043 11.24 10.363 24.192 11.381-2.908 10.606 6.566 8.713-6.25-7.121-22.67 9.92-2.646 12.41 8.226 12.254-5.029.218-6.01-5.142-4.67-5.866 3.01-9.156.131zM719.422 1845.65l-7.772 3.022-.623 3.369 7.664 4.52 2.543-4.58z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='pohjoisKarjala'
          fill={regions.pohjoisKarjala}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M1409.408 2106.371l15.242 8.989.37 21.601-13.572 24.819 10.88 9.761 23.162 48.659 32.4 16.7-21.681 15.732 17.601 23.768-18.522 25.45-24.848-10.83-4.032 12.12-13.018 3.46 17.8 39.271 12.16 3.739 27.8 25.55 1.9 10.57 14.3 12.061-6.03 14.279 14.008 10.03 14.142-8.62 8.398 10.33.012 16.63 18.69 30.49 11.088 60.76 19.192 8.39 7.7 17.64-6.341 7.991 11.261 22.849-12.7 36.84 89.54-48.439 17.72-18.34 39.89-69.861 28.72-44.01 18.898-7.39 35.072-65.228 41.508-131.662-12.108-30.57-35-28.46-11.58-39.83-24.94-17.22-31.74-25.008-44.78-20.33-18.03-25.46-52.822-56.38-25.048-2.262-13.51 14.722-20.79-52.892-100.24 17.892-67.36-12.452-15.7 35.94 19.55 21.762 15.45 1.17 3.938 31.908 8.67 7.041-6.588 9.629z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='pohjoisSavo'
          fill={regions.pohjoisSavo}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M1073.4 1975.11l7.44 75.53-8.27 4.96-16.13 45.65-7.04 25.94 10.6 14.45 3.34 53.01 20.46 28.17-12.182 8.141 9.642 9.539-8.02 13.51-29.31 3.81 41.72 52.16 12.29-3.03 17.75 27.102 4.888 28.678-19.578 20.95.038 8.49 22.29 14.27 10.83-1.388 6.652 7.688 15.808-8.57 14.872 6.49 5.52-8.289 21.35-5.319 10.56 13.409 24.448-16.561 50.92 44.28 14.692 25.63 25.5 1.51 17.37 15.32 28.46-3.25 45.79 17.86 7.228-17.72-22.869-28.478-16.599 4.058-1.242-15-17.67.692 6.232-12.761-10.812-8.199 9.382-15.551 11.86 1.469-.04-29.32 13.65-.01 25.96-25.639 10.01-2.92-17.8-39.271 13.018-3.46 4.032-12.12 24.848 10.83 18.522-25.45-17.601-23.768 21.681-15.732-32.4-16.7-23.162-48.659-10.88-9.761 13.572-24.819-.37-21.601-15.242-8.989-3.918-36.701 6.588-9.629-8.67-7.041-3.938-31.908-15.45-1.17-19.55-21.762-10.91 25.32-40.13-46.29-61.65-39.46-51.082-3.888-43.168-16.352-34.4 11.59z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='etelaSavo'
          fill={regions.etelaSavo}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M1208.92 2410.461l-10.56-13.409-21.35 5.319-5.52 8.289-14.872-6.49-15.808 8.57-10.5 7.28 16.558 18.282-14.659 5.188-8.659 36.75-17.591-8.938-24.469 15.178-13.81 28.19 22.14 40.632-6.5 9.798 5.15 54 21.188 31.21-5.218 19.26-18.68-5.97-2.63 7.05-9.98 26.7-3.47 31.941 9.5 6.739.71 12.591 14.42 13.5 8.63 1.25 1.16 15.549 10.82-4.35 16.07 25.471 15.07-7.771.26-15.55 20.12.412.06 26.739 27.908 13.829 16.182-5.48 21.43-5.15-7-14.21 6.08-11.78-17.82-19.05-18.18 2.64-18.79-11.24 6.49-9.92 15.278 1.26 3.71-6.979 37.87.179 23.832 14.29 21.14-8.668 33.04 6.79 49.55-4.322 25.31-31.28 7.548-18.7 14.192 10.82 37.308-.23 4.822-16.93 30.45 1.37 30.7-9.819 18.96-31.461 24.17-8.17 5.63-16.02.46-.24 12.7-36.84-11.261-22.849 6.341-7.991-7.7-17.64-19.192-8.39-11.088-60.76-18.69-30.49-.012-16.63-8.398-10.33-14.142 8.62-14.008-10.03 6.03-14.279-14.3-12.061-1.9-10.57-27.8-25.55-12.16-3.739-10.01 2.92-25.96 25.639-13.65.01.04 29.32-11.86-1.469-9.382 15.551 10.812 8.199-6.232 12.761 17.67-.692 1.242 15 16.599-4.058 22.869 28.478-7.228 17.72-45.79-17.86-28.46 3.25-17.37-15.32-25.5-1.51-14.692-25.63-50.92-44.28z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='etelaKarjala'
          fill={regions.etelaKarjala}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M1451.709 2707l4.821-16.94 30.45 1.37 30.7-9.83 18.96-31.479 24.17-8.181 5.63-16.03 89.32-47.96-2.9 2.96-11.94 33.78-30 27.62-20.18 42.36-25.42 18.01-5.742 17.76-37.738 63.63-44.17 30.65-15.802 6.43-18.968 32.49-2.4 21.3-20.41 4.55-38.24 33.471-7.34 19.619-37.99 36.53-17.96-9.18-7.84-19.29-16.23-2.41-7.292-14.78-21.648.53-19.12-10.178-6.892-12.102-25.558-7.46-7.652-13.07 7.992-4.77-14.43-17.609 5.1-17.211 15.878-5.91-10.148-23.038 21.43-5.152-7-14.22 6.08-11.79-17.822-19.07-18.178 2.652-18.79-11.25 6.49-9.942 15.279 1.272 3.711-6.992 37.868.18 23.83 14.301 21.142-8.671 33.04 6.79 49.55-4.32 25.308-31.31 7.551-18.71 14.191 10.83z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='kymenlaakso'
          fill={regions.kymenlaakso}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M1115.05 2774.95l-10.82 4.36-9.26 5.14-7.9 20.73-21.04 14.24-21.8-.07-3.7 13.39 5.82 12.59 4.38 22.45-12.443-.76-5.396 10.3 16.039 6.88-7.74 14.69.597 16.952 13.572 8.988 2.23 15.711 3.84 1.842 16.25 7.797 7.971 20.13 9.54.3 5.28 13.023 13.608 1.297 6.232-12.047 10.54.67 6.187 16.387-13.447.32-20.7 21.701-1.4 23.069 13.35.13 6.63-4.6 6.26 6.61 10.01-.35 7.82-7.12 13.387 13.36 11.67.36 4.153-7.449-.34-18.57 11.517-11.58 28.461 9.3 23.473 2.762 9.049 13.42 7.05-6.633 5.848-3.93 6.37 3.52 9.732-1.41 8.029-.25 5.31-8.68 3.75-16.828 4.81-3.691 12.052 7.89 10.34-6.841.488-10.13 15.81-15.21-17.958-9.18-7.84-19.29-16.23-2.41-7.294-14.78-21.646.53-19.121-10.177-6.893-12.104-25.556-7.459-7.653-13.07 7.992-4.77-14.43-17.609 5.1-17.21 15.877-5.91-10.127-23-16.203 5.439-27.906-13.84-.061-26.75-20.123-.42-.258 15.56-15.072 7.78zm68.5 258.32l-4.08 13.64 5.28 12.473 6.037-.152v-23.39zm-38.52 23.3l-9.4 7.801 5.42 3.71 6.567 3.83 3.453-5.77zm58.65 22.733l-4.59 4.507-.19 7.6 8.73.37 7.34-4.47-3.19-2.33-5.88-5.51z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='keskiSuomi'
          fill={regions.keskiSuomi}
          fillOpacity="1"
          stroke="#8c8c60"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M897.721 2091.041l-12.247 2.091-24 25.568-2.542 69.45-22.901-4.99-26.271 9.69-6.154 4.04-10.086 14.202 4.708 38.178 13.162 17.66-9.04 7.08 22.392 61.02-5.515 7.852 7.539 10.298-5.686 38.622-22.132.338-6.083 11.17-26.294-3.81-20.456 23.27.102 28.14 21.356 12.77 11.21-2.11 7.713 22.03 20.537 4.08 12.815-4.6 22.393 23.78 7.127 26.15-14.38 22.99-4.278-7.61-13.394 19.412 34.075 42.569 7.015 1.229-.084 6.38-7.177.45-2.186-6.1-5.503 3.68 2.861 9.72-1.122 12.03 7.546 4.531 2.422-1.371 9.933 5.91-9.685 6.77-4.286 9.441 2.149 12.779 18.385 15.17-1.188 23.392 77.005-7.232 15.574-56.07 23.388-10.73 12.409 5.9 16.283-28.15 18.158 9.13 20.772 32 29.2 11.72 2.63-7.05 18.68 5.982 5.218-19.282-21.188-31.24-5.152-54.04 6.5-9.8-22.138-40.66 13.808-28.21 24.472-15.2 17.59 8.95 8.66-36.768 14.66-5.192-16.56-18.3 10.5-7.28-6.652-7.7-10.829 1.4-22.289-14.29-.04-8.49 19.579-20.97-4.889-28.7-17.75-27.12-12.29 3.03-41.72-52.19 29.308-3.82 8.022-13.52-9.64-9.54 12.18-8.148-20.46-28.192-3.47-52.97-10.47-14.54 6.91-25.85-30.862.22-8.908-18.82-9.49-7.91-23.581-.07-46.666-32.02-14.721 6.12-6.475 40.23z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='keskiPohjanmaa'
          fill={regions.keskiPohjanmaa}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M711.027 1852.041l-1.537 8.3 7.338-.43 1.863-3.35zm10.9 6.229l-9.67 14.734-1.202 23.49-9.487 1.652-11.824-11.283-7.988 5.696-1.053 45.74-47.807 2.162-5.847 8.547-6.596.146-5.969-7.19-13.052-.073c-.33.49-.404.039-.733.531l14.274 39.262 6.222-8.43 32.694 24.414 23.091-11.26 6.047 8.997 10.623-8.239 36.776 29.569-8.373 8.976-17.264.397-10.754-8.768-13.74 8.889 9.068 16.031 8.416-2.396 20.42 37.058-7.795 26.014 27.172 35.13 24.576 7.385 25.293 31.961-12.99 5.362 29.432 13.912 5.875-3.832 26.27-9.694 22.9 4.99 2.54-69.452 24-25.569 12.249-2.088-61.328-75.05-16.446-49.444-14.754-5.81-4.982-20.952-10.79-5.611-9.425-37.625z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='pohjanmaa'
          fill={regions.pohjanmaa}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M600.863 1942.74l-9.142 13.682-9.87 6.527 2.749 16.104-1.563 11.789-12.058 7.699-1.834 8.658-6.666 2.881-9.579 8.25-1.005 4.87-8.97 6.55-3.77 16.51-6.553-8.6-6.82 3.74-4.954 21.45-7.598.453-3.955 5.238 2.387 7.738 5.504 5.532 12.074 27.1-4.414 10.73-11.064.218-8.106 15.381-12.94 3.03-34.564-12.387-24.605 10.357-11.469.25-4.836-14.449-8.027 8.149-.768 21.67-8.386 10.42 1.226 7.853 9.899 8.617 3.127 7.74-5.131 1.99-9.137-2.427-6.32 2.056-9.954-6.609-4.64 7.541 10.465 7.979 4.465 9.601-1.059 11.729-10.482 9.953 1.304 10.377-4.267 4.361-11.244 1.28-.713-5.5-10.954 3.77-2.976 18.06-5.703 6.099-11.283-.59-1.194 4.82 6.692 7.62-.967 8.68-6.385 5.79-4.898 5.75-3.227 20.551 3.818 4.6 6.786-5.711 5.168 3.873 1.015 6.508-9.865 16.129-2.197 18.64 4.605 4.893-5.978 23.818 6.443 9.988 21.674 1.07-.647 7.08-10.172 13.561.038 11.26 14.918 5.83 1.574 8.07-11.889 12.71.457 11.23-7.707 12.621-7.21 27.379 7.831 13 .649 2.4 15.129-13.79 30.566-3.59 3.236-28.68 8.207-6.49-2.795-14.42 15.108-9.64-7.2-10.5-6.628-2.85-.57-28.25-10.977-3.62-7.633-18.857 19.422-57.443 24.275-26.33-7.459-7.53 3.53-36.41 6.638-7.75 23.463 24.48 36.65 12.192 29.424-30.932-2.515-16.98 34.209-59.29 16.31.202-6.361-27.932-7.998-.27.361-24.38 31.12-15.16 32.784-5.77 17.303 4.98 12.002-10.54 9.076-26.63 23.948.33 17.539 8.44 14.175 17.36 7.844-25.35-20.418-37.05-8.416 2.39-9.07-16.03 13.738-8.888 10.758 8.767 17.262-.396 8.373-8.973-36.776-29.568-10.623 8.238-6.048-9-23.09 11.262-32.696-24.412-6.22 8.43zm-32.974 16.102l-5.184 16.847 4.75 9.5 6.149-6.347 1.193-13.951zm-113.11 106.28l-9.066 2.589 4.75 11.672 7.873-2.041.326-8.332zm-88.07 15.548l-5.182 9.94-3.455 9.07h8.205l6.147-9.377-.145-9.604zm16.404 8.64l-10.36 8.21 4.749 8.21h10.361l6.147-8.09-3.602-8.298zm94.116 2.6l-9.93 15.98 4.75.43 6.578-5.06 9.867-.5 3.37-5.639-5.57-5.21zm-111.868 13.17l-9.035 9.053-5.162-5.813-6.473 2.16 9.498 36.29 6.909.44 6.142 5.73 8.922 2.07 6.408-10.02 11.225 3.95 4.111-10.7-6.802-14.8-8.368-2.28-3.9 8.3-10.15-.327-3.266-5.693 6.215-5.96-.18-7zm66.537 3.24l-7.771 9.08v10.36l5.613 1.3 4.852-10.677 7.277 6.848 2.074-6.51zm53.534.87l-12.952 8.21 3.885 8.641 11.326-.31 13.325 6.41 5.527-10.391-.82-9.97-6.453 3.273zm-181.754 86.402l-6.043 9.078 3.453 6.48h6.045l2.69-5.5.288-7.43zm46.627.869l-5.614 3.45v13.83l5.614 4.75 5.715.118 2.011-9.16-.95-7.478zm-2.633 46.25l-9.024 4.289-5.181 8.64 7.34 4.32 5.18-4.32 5.712-4.19zm-18.996 35l-3.846.83-.861 9.94 2.16 4.322 6.475-.432 1.83-2.9zm-5.614 56.16l-3.019 4.27-2.117 6.07 5.18 5.19 6.908-3.891-.33-4.2z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='etelaPohjanmaa'
          fill={regions.etelaPohjanmaa}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M408.268 2441.211l7.199 10.5-15.108 9.639 2.796 14.42-8.207 6.49-3.237 28.68 13.366 12.24 33.338 5.912 38.44-32.692 11.775-.05 20.651-31.7 15.547-.529 13.325-27.191 18.313 9.1 11.261.091 28.768.099 31.449-17.168 14.337-25.292 27.707 10.82 3.873-9.8 20.879 2.98 25.748-21.2 11.517 7.33 2.943 24.231 11.337 4.709 20.286-23.33 26.294 3.81 6.083-11.17 22.132-.338 5.686-38.622-7.539-10.298 5.515-7.852-22.392-61.02 9.04-7.08-13.162-17.66-4.708-38.178 10.365-14.412-29.43-13.91 12.991-5.36-25.292-31.96-24.579-7.38-27.22-35.8-14.176-17.36-17.538-8.44-23.947-.33-9.077 26.63-12.002 10.54-17.302-4.98-32.785 5.77-31.12 15.16-.361 24.38 7.997.27 6.362 27.932-16.31-.202-34.209 59.29 2.515 16.98-29.424 30.932-36.65-12.192-23.463-24.48-6.639 7.75-3.528 36.41 7.459 7.53-24.276 26.33-19.422 57.442 7.633 18.858 10.977 3.62.569 28.25z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='paijatHame'
          fill={regions.paijatHame}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M913.982 2827.14l-2.187-37.37-14.746-11.388-11.534 5.448 3.196-11.97-24.673-9.87-2.195-52.6 8.628 4.992 77.005-7.232 15.574-56.07 23.388-10.73 12.409 5.9 16.283-28.15 18.158 9.13 20.772 32 29.3 11.6-10.08 26.84-3.47 31.962 9.5 6.758.71 12.59 14.42 13.51 8.63 1.25 1.16 15.57-9.26 5.14-7.9 20.73-21.04 14.24-21.8-.07-3.7 13.39 5.82 12.59 4.38 22.45-12.442-.76-5.398 10.3 16.04 6.88-7.74 14.69.598 16.952 13.572 8.988 2.23 15.711 4.29 2.139-1.65 13.9-13.21 7.08-12.68-11.38-19.892 4.341-.768-13.75-13.34 9.42-8.567-1.409-28.14 8.718-8.494-7.96-7.001-25.4-4.732-4.22-15.835 16.58-20.428-24.84-10.718 2.46-9.849-12.64 10.055-8.488-17.527-21.312 7.412-30.27z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='pirkanmaa'
          fill={regions.pirkanmaa}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M870.471 2714.382l1.188-23.392-18.385-15.17-2.149-12.779 4.286-9.441 9.685-6.77-9.933-5.91-2.422 1.371-7.546-4.531 1.122-12.04-2.861-9.71 5.503-3.68 2.186 6.1 7.177-.45.084-6.38-7.015-1.229-34.075-42.569 13.394-19.412 4.278 7.61 14.38-22.99-7.127-26.15-22.393-23.78-12.815 4.6-20.537-4.08-7.713-22.03-11.21 2.11-21.356-12.77.068-28.08-11.337-4.709-2.943-24.231-11.517-7.33-25.748 21.2-20.879-2.98-3.873 9.8-27.707-10.82-14.337 25.292-31.449 17.168-28.639-.24.009 30.28-15.51 7.48-.877 26.131-18.094 1.75-9.187 15.389 13.806 6.781.015 13.729 15.388 11.51 6.123 21.74-8.665 30.282-13.066-4.25-4.453 23.048 11.183 10.782-13.79 11.638-9.352 28.83 19.376 13.55-2.644 13.061-24.317 3.559-9.223 7 .899 13.38 13.073 31.95 26.148 8.68 8.556-9.31 14.943 15.25-6.832 23.97 12.316 21.28-10.109 1.59 11.69 13.76 19.387-3.779-1.346 10.469 7.931-1.51 10.286-6.3 14.263 10.82 2.28 10 14.462-.218 29.912-11.402 20.474 22.37 5.114-5.01-4.223-32.378 68.785-26.102 8.819-10.5-3.317-3.909-.372-6.481 3.453-5.42 4.769 3.61 28.545-22.38 24.791 9.642 5.416-12.242 11.768 11.76 17.579-7.87-2.195-52.6z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='kantaHame'
          fill={regions.kantaHame}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M767.717 2784.89l.372 6.481 3.317 3.909-8.819 10.5-68.785 26.102 4.223 32.378-5.114 5.01-20.474-22.37-29.912 11.402-14.462.218-2.28-10-14.263-10.82-10.286 6.3-.212 8.26 12.191 7.292-8.15 19-14.566 2.968-1.392 13.91 8.24 9.63-6.804 6.09.761 11.93 25.332 13 19.19-9.58 35.463 27.22 31.437 10.412 45.646 7.858 5.63 12.471 10.808-8.281 11.115 5.3 2.72 10.362 27.92-5.492-1.216-14.34 7.855-10.58 17.561 2.611 39.79-8.221 16.37 5.67 10.365-18.91-10.881-3.698 10.022-22.682-9.853-12.62 10.055-8.488-17.527-21.312 7.412-30.27 27.466-16.37-2.187-37.37-14.746-11.388-11.534 5.448 3.196-11.97-24.673-9.87-17.579 7.87-11.768-11.76-5.416 12.242-24.791-9.642-28.545 22.38-4.769-3.61z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='varsinaisSuomi'
          fill={regions.varsinaisSuomi}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M325.227 2798.21l-8.286 4.62 4.334 23.791 10.92 11.328-2.25 7.72-6.824-5.4-6.443-12.958-7.313.48-3.818 4 6.486 6.94-.455 7.81-13.3 2.68.853 5.65 15.182 9.2-1.573 5.05-3.215 2.2-1.84 5.4 2.419 9.15.535 13.12 5.093 8.08-.322 17.97 10.983 28.79 14.277 12.552 4.346 18.637 11.154-1 4.955-21.479 20.15-10.81 6.764 3.038-6.883 17.772-7.89-.762-7.258 10.202-.764 7.98 16.611-4.06 21.274-.66 8.01 7.74-.397 7.91-7.433-.372-3.207 3.981 10.89 9.94 8.834-5.69 3.492 2.74-1.672 20.97 8.026.51 9.906 9.401 37.664-7.262 5.596-4.85 8.963 6.821-14.72 23.52.038 9.63 15.692-.38 9.837 8.9 22.909-6.75 35.433-27.39 5.582 9.3-8.482 10.34-20.885 25.45 3.986 21.091 6.692 4.03 9.148 5.51-.531 4.54 24.986-.46 18.813-19.69 9.62 7.65 28.612-14.21 16.016 7.5-1.1-34.161 14.903-5.129 2.949-19.75 9.851-1.04-3.191-19.21-10.166-4.13 1.322-13.77 23.184-3.18 11.06-24.75-5.505-9.441 4.87-6.967-31.437-10.412-35.463-27.221-19.19 9.58-25.331-13-.762-11.93 6.805-6.09-8.24-9.63 1.39-13.91 14.567-2.967 8.15-19-12.192-7.293.11-7.76-7.828 1.01 1.345-10.469-19.386 3.78-11.69-13.76-15.556-5.22L546 2846.78l-24.941-6.83-23.508 7.131 5.146 6.49-26.437 7.022-18.93-3.563-15.822 14.24-5.559-8.177-26.857-2.602-10.45-29.39-11.468-10.35-20.957 15.14-1.086-25.88-13.026 9.81-11.158.86-11.213-15.809-4.507-6.66zm-23.514 132.07l-9.631 6.86 1.193 10.6 2.631 2.75 6.477 6.77 6.906-6.91-.363-6.39-.498-8.73-6.715-4.95zm-7.772 25.062l-3.586 2.968 2.489 19.243 1.51 2 3.712 4.928h8.631V2974.54l-12.756-19.2zm22.014 2.588l-4.445 3.83-.104 12.332 11.725 14.937 6.883 1.5 1.246-3.75 3.068-9.209-6.867-6.517-.2-.711-.27-.983-11.036-11.43zm65.06 36.23l-4.376 3.711-1.729 12.53 8 18.029 9.272 7.63-1.957 10.65-.573 6.47 9.588 1.611 7.252-7.22.219-2.5.53-6.16 1.976-8.93-7.197-10.282-9.84-14.049-1.106-5.38-10.058-6.11zm-96.14 3.09l-5.313 3.39-.392 2.952-.963 7.238 7.34 5.62 1.797-3.99 2.455-5.45-4.924-9.76zm67.78.43l-15.245 9.441-.058 8.03 2.16 2.16 1.94-.061 4.782-.15 2.573-4.66 2.457-3.42 3.355-4.67-1.965-6.67zm-34.97 6.05l-7.04.8-1.356 12.78 1.246 1.75 3.072 4.3 2.84-4.53 1.354-.459 1.851-.63-1.966-14.01zm-16.837 13.391l-6.608.809-2.65 7.162 1.248 1.619 3.07 4 9.067-.87.882-1.61 1.211-2.212-6.22-8.898zm55.992 6.42l-2.838 4.238-1.107 5.952 2.619 2.369 6.447 5.84 10.156-2.28-.277-2.318-.385-3.182-1.101-6.24-13.514-4.379zm119.717 16.908l-27.762 6.854-10.424 1.117-11.953-2.99-7.47 14.22 2.407 9.221 11.098 3.19-1.623 9.072 1.94 2.197 4.761 5.4 9.479-.82 14.588-16.68 19.949-22.81-4.99-7.97zm-156.282 7.342l-7.47 1.238-5.674 5.871-.615 2.33-3.272 3.29 1.3.89 3.192 2.223 5.44 1.209 2.553-2.922 3.492-4 1.054-10.129zm17.27.87l-5.744 3.4-.145 5.939-.347 14.61 5.613 4.32 4.808-2.57 6.579-3.518-10.764-22.182zm-40.582 12.089l-6.608.81-3.082 17.97 19.86 6.91 6.207-2.637 5.693-1.863.301-2.24.736-5.52.446-7.18-7.504.21-10.26.28-5.79-6.74zm246.51 13.4l-57.164 13.66-9.073-6.33-4.265 4.27-.063 5.871-5.908 5.22 5.908 7.31 1.117 6.628-16.96 13.121-2.919 14.26 8.13 12.27 15.36.93 9.99-6.3 15.526 6.311 12.524-1.932 6.021-8.398-.07-2.8-.174-6.891 15.283-16.45-3.62-8.19-4.944-11.2 15.3-21.36zm-162.327 3.45l-17.89.203-2.602 10.437-2.416 16.73 7.854 2.89 2.722-3.989 6.698-9.818 11.355-2.903 1.854-2.69 2.533-3.69-10.108-7.17zm-31.082 1.3l-10.494.81-10.287 11.7-1 1.94-7.767 7.783 5.773 7.297 13.035-.57 6.215-4.307.68-1.123 1.662-2.77.566-5.91.754-3.25 1.04-4.43-.177-7.17zm62.838.192l-4.37 2.398-10.75 5.893.171 10.25 6.387-.791 8.73-1.073 5.38-13.16-5.548-3.517zm47.92 7.777l-9.076.512-13.21 15.857 4.753 5.063h2.23l5.489.01 5.693-6.641.584.27.805.37 8.28-11.92-5.548-3.52zm-78.138 10.8l-2.748 2.642-6.76 6.51 3.191 5.49 10.217.138 13.967.172 1.928-5.38-19.795-9.571zm159.722 20.384l-7.595 7.658.925 1.889 1.266 2.58 8.725-1.52 3.595-8.09-1.998-.728-4.918-1.79zm-8.203 15.988l-4.119 3.408-5.637 4.684 4.012 11.588 7.621-3.5 1.83-1.08 4.508-2.65-8.215-12.45zm-173.478 16.342l-4.327 6.947-4.79 5.461 3.431 10.02 2.504.218 6.154.551 2.979-4.26-.028-5.62-.037-7.68-5.886-5.637zm96.203 2.67l-3.41 2.908-.875.488-1.207 1.111-2.97 2.71 2.165 10.68 4.752.11 6.5.16 1.387-6.27.576-7.659-6.918-4.238zm22.88 3.887l-1.322 1.08-3.252 2.68 5.184 11.11 6.03 1.21 8.245 1.66 3.545-4.97-7.627-11.118-10.802-1.653zm-13.816 26.78l-12.775 13.27 4.924 2.143 6.736 2.92 12.209-8.582.572-8.961-3.37-.23-8.296-.56zm-135.92 4.24l-10.414 11.12 7.752 3.973 1.752-1.403 4.318-3.45 7.721-5.108-.57-1.97-.785-2.702-9.774-.46z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='satakunta'
          fill={regions.satakunta}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M328.242 2758.132l5.848 3.664.887 4.104.648 3.002-3.886 5.186-3.991.307-1.621.125-2.632-9.955 1.442-2.769zm21.156-140.843l4.895 1.389 5.677 10.41 4.149 7.611-4.684 5.209-7.107-.018-2.887-.01-6.908-7.345 5.141-5.202 1.724-12.046zm-19.561 187.734l6.857-13.778 7.341-41.897 7.526 5.013 3.814-4.844-.79-6.586 4.718-24.388-10.263-24.057 1.938-3.021 4.691-1.531 7.021 2.747 5.406-.987-3.634-8.882-11.228-5.921-.873-7.918 7.563.298 11.917 3.514-.339-4.484-6.584-5.322-7.066-14.347 2.982-5.663 5.583.398 8.876 10.121 6.66.231-12.902-28.973.012-26.275-13.398-17.35 2.691-5.937 7.846-.831.509-4.659-6.019-4.682-3.698-23.582-8.925-5.476-2.057-7.632 15.129-13.787 30.566-3.592 13.367 12.237 33.339 5.915 38.438-32.691 11.774-.056 20.651-31.696 15.547-.531 13.324-27.186 18.313 9.094 11.39-.048.011 30.278-15.512 7.486-.877 26.12-18.094 1.76-9.188 15.384 13.807 6.782.016 13.729 15.387 11.516 6.123 21.737-8.664 30.274-13.065-4.247-4.453 23.052 11.184 10.777-13.791 11.637-9.352 28.832 19.376 13.557-2.643 13.058-24.318 3.563-9.222 6.994.896 13.382 13.073 31.948 26.147 8.677 8.556-9.304 14.942 15.252-6.829 23.966 12.314 21.278-10.109 1.593-15.557-5.22-2.016 26.938-24.94-6.832-23.51 7.138 5.149 6.49-26.439 7.013-18.928-3.552-15.825 14.238-5.556-8.184-26.859-2.597-10.449-29.393-11.468-10.349-20.958 15.142-1.087-25.88-13.023 9.803-11.157.862z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='uusimaa'
          fill={regions.uusimaa}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M907.143 2913.76l-10.713 2.44-10.024 22.683 10.881 3.697-10.363 18.91-16.371-5.67-39.79 8.221-17.562-2.611-7.853 10.58 1.215 14.34-27.92 5.492-2.72-10.361-11.114-5.301-10.809 8.28-5.63-12.47-45.645-7.857-4.871 6.967 5.505 9.441-11.06 24.75-23.184 3.18-1.322 13.77 10.166 4.13 3.191 19.21-9.851 1.04-2.95 19.75-14.902 5.129 1.1 34.16-16.016-7.5-28.611 14.211-9.621-7.65-18.813 19.69-24.988.474-4.152 35.418-9.065-4.682-11.22.488-2.4 11.75 9.72 12.84 17.72 3.092 4.739-4.621.418-15.82 5.607-4.52 4.764 7.37-2.584 19.28-5.61 6.76-27.638 9.75-6.477 7.301 6.918 8.738 20.723-8.61 25.04.202 12.946-11.06.002-7.178 9.926-11 12.078 1.557 7.787 5.55 15.96-3.41 12.54 2.723 6.447-4.932-2.548-9.31 18.101-1.66 36.688-15.721 30.224-.66 22.07-12.2-.921 19.16 4.73.05 6.932-6.04 6.017 3.48-12.937 16.97 9.51.74 29.36-36.889-.038-9.89 2.148-5.122 5.21 5.221 26.757-9.4 10.045 6.85 14.121.2 4.766-7.558 2.115 11.658 10.809-9.14-1.696-12.54 10.8 3.34 7.745-10.51 2.252-6.96 5.666-1.557 13.63-3.762 24.247-.63 6.125-7.542.362-13.27 15.92-1.796 3.957 14.637 12.619 15.68 5 .95 7.42-8 8.207 5.12 4.25-5.49-4.66-14.93 4.177-3.4 8.354 17.19 5.1-2.03-.93-12.51 4.937-1.717 7.592 3.767 5.59-2.44-9.352-16.56-2.629-10.529-9.52-12.852 1.358-8.1 15.524 14.821 10.879 11.2 5.13 11.45 6.047-.48 5.223-8.45-1.1-14.63 9.94-.56 5.187 11.22 7.453.27 16.11-15.83h.79l1.34-23.22 20.7-21.7 13.447-.32-6.187-16.387-10.54-.67-6.232 12.047-13.607-1.297-5.282-13.024-9.539-.298-7.97-20.131-15.995-7.674-1.455 14.074-13.21 7.08-12.68-11.38-19.893 4.341-.767-13.75-13.34 9.42-8.567-1.408-28.14 8.717-8.494-7.96-7-25.4-4.733-4.22-15.836 16.58-20.427-24.84zm209.828 125.531l-10.701 11.262 7.58 6.726 13.05-10-2.16-7.92-7.77-.068zm-25.471 14.69l-4.22 5.64 4.12 6.738 15.21 2.524.427-7.063-15.537-7.84zm-31.422 13.74l-7 .09-2.068 6.93 1.107 2.85 6.572 3.82 6.041-3.17-4.652-10.52zm-94.545 10.36l-4.793 1.519.477 17.61.459 13.132 4.623 3.898 5.105-5.31.106-3.627 1.484-1.623.21-7.73-5.565-6.608-2.106-11.262zm80.307 2.599l-12.96 6.59 6.38 6.24 9.06-1.877-2.48-10.953zm-125.637 14.691l-4.795 4.11 2.205 2.48 2.29 3.87 10.255-.67 3.252-3.57 2.444-4.51-5.733-.35-3.049-1.36h-6.869zm31.084 2.158l-6.09 5.4.043 9.401 1.754 3.63 6.277-.98-1.984-17.45zm54.83 0l-3.386 2.971-5.725 1.57-1.252 6.37.459 4.5 12.824 1.74 6.402-6.61-2.52-5.21-6.802-5.33zm-306.951 66.532l-6.951 4.109-5.44 9.81 8.327 4.26 8.837-7.52 10.444-8.95-5.639.072-3.142-1.782h-6.436zm-69.973 30.378l-9.502 2.461-7.345-1.51-5.44 6.36 4.094 2.77 5.53 1.48 4.952-2.77 4.399-1.17 3.312-7.62z"
          className="map-region"
        ></path>
        <path
          onMouseEnter={enterHandler}
          onMouseOutCapture={leaveHandler}
          onClick={clickHandler}
          id='ahvenanmaa'
          fill={regions.ahvenanmaa}
          fillOpacity="1"
          stroke="#0c0c01"
          strokeOpacity="1"
          strokeWidth="1.701"
          d="M267.605 2961.82l-6.175.37 1.668 31.79 8.203 1.73 6.906-18.14zm-21.154 16.42l-7.902 5.12-1.356 8.03 6.477 14.69 7.771-4.32 2.526-11.6zm-166.21 6.48l-12.28 5.372-12.52 16.418 14.256 2.043 4.573 7.818.043 6.139 1.921 4.39-5.228 5.983-6.123-1.563 2.267-14.82-8.273-5.27-7.453 9.53-9.31 1.42-8.71-2.75-19.164 8.17-3.289 8.66 5.291 5.67-2.949 12.953 5.47 12.238 7.467-.41 2.774-9.578 5.303 1.209 6.591-.102 9.682 11.12 1.625 12.17 5.656 6.353 9.448.967 4.718 5.992 1.692 10.449 12.199-2.691 13.852 9.89 4.615 10.52 6.375-1.219 2.484 10.488 9.844-6.798 1.035-7.551-5.969-6.18 3.389-7.59-.078-6.67-16.176-8.73-5.037 3.31-8.293-.228-2.1-3.432 8.422-19.91-10.02-7.58 5.725-9.91 6.7.66 11.037 12.213 17.533-2.842 7.348-21.512-9.956-12.11-1.31-10.41-8.387-3.609-6.38-10.73-14.56-2.67zm183.048 15.55l-10.494 9.021 2.963 14.5 6.476 3.889 5.18-4.75 2.527-14.627zm-116.994 9.51l-5.805 4.511-.431 6.908 22.457 1.611-.02-5.1zm68.387 5.87l-5.79 4.06-2.78 8.843v.427l2.599 3.33 7.328-1.6 3.887-9.94zm14.933.17l-3.215 10.13 5.182 5.62 7.772-2.16-.065-9.44zm-73.824 14.69l-5.805 4.52-6.906 6.91 6.049 6.2-.86 14.85 5.16.08 8.005-11.21-5.069-7.739 3.18-7.371zm61.912 9.76l-8.81 4.072.24 8.828.863 4.32 4.758 3.34 9.92-8.947-1.727-4.33zm-22.625 13.572l-3.215 5.379 3.024 12.1 9.937-.122-1.314-6.396.01-4.284-2.22-5.558zm-64.326 17.28l-9.686 11.589 1.733 15.27 10.771.09-3.22-7.33 5.724-10.76-1.568-8.23zm54.396 0l-5.804 8.407 5.494 6.104 2.709 12.037 11.666.74.41-5.09 1.307-2.99-6.108-13.33zm-19.859 19.01l-4.504 5.098 5.186 5.78 12.066 1.38-.2-4.74-6.792-6.43zm-11.225 17.278l-7.53 5.81-13.811 11.39 3.027 4.91 15.09.521 20.521-6.031 6.59-8.168-5.023-6.082zm75.551 35.432l-13.57 6.398-2.586 7.5 12.932 9.59 5.191-8.16 5.883.172 1.77-5.432 2.066-3.41-7.658-3.85z"
          className="map-region"
        ></path>
      </g>
    </svg>
  );
}

export default Map;
