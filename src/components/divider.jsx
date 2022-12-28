export function Divider() {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="96px"
        viewBox="0 0 100 100"
        version="1.1"
        preserveAspectRatio="none"
        className="bg-none bg-[#0d2129] h-[6vw]"
        data-src="https://spotify.ax/assets/img/dividers/divider-2.svg"
        // data-src="/assets/img/dividers/divider-2.svg"
      >
        <path
          style={{ fill: "#f1f5f9" }}
          d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"
        ></path>
      </svg>
    </div>
  );
}
