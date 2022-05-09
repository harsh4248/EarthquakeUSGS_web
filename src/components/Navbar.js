const Navbar = (prop) => {
  const navbarProps = prop.status;
  console.log(navbarProps.logStatus);
  return (
    <nav className="bg-slate-600 p-2 flex flex-row place-content-between fixed w-full top-0">
      <div className="flex flex-row ">
        <img
          src={process.env.PUBLIC_URL + "assets/earthquake-logo-2.png"}
          alt="Website Logo"
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
        />
        <h1 className="font-bold text-xl text-white">EARTHQUAKE LOGS</h1>
      </div>
      <div className=" ">
        <button
          className=""
          onClick={() => {
            navbarProps.logtoggle();
          }}
        >
          <svg
            viewBox="0 0 60 55"
            className={
              "hover:fill-teal-500 " + navbarProps.logStatus
                ? "fill-teal-500"
                : "fill-white"
            }
            xmlns="http://www.w3.org/2000/svg"
            height="38"
            width="38"
          >
            <path d="M7.5 36Q6.85 36 6.425 35.575Q6 35.15 6 34.5Q6 33.85 6.425 33.425Q6.85 33 7.5 33H40.5Q41.15 33 41.575 33.425Q42 33.85 42 34.5Q42 35.15 41.575 35.575Q41.15 36 40.5 36ZM7.5 25.5Q6.85 25.5 6.425 25.075Q6 24.65 6 24Q6 23.35 6.425 22.925Q6.85 22.5 7.5 22.5H40.5Q41.15 22.5 41.575 22.925Q42 23.35 42 24Q42 24.65 41.575 25.075Q41.15 25.5 40.5 25.5ZM7.5 15Q6.85 15 6.425 14.575Q6 14.15 6 13.5Q6 12.85 6.425 12.425Q6.85 12 7.5 12H40.5Q41.15 12 41.575 12.425Q42 12.85 42 13.5Q42 14.15 41.575 14.575Q41.15 15 40.5 15Z" />
          </svg>
        </button>
        <button
          onClick={() => {
            navbarProps.maptoggle();
          }}
        >
          {/* <img
            src={process.env.PUBLIC_URL + "assets/world-icon.png"}
            alt="map"
          /> */}
          <svg
            viewBox="0 0 60 55"
            className={
              "hover:fill-teal-500 " + navbarProps.mapStatus ? 'fill-teal-500' : 'fill-white'
            }
            xmlns="http://www.w3.org/2000/svg"
            height="38"
            width="38"
          >
            <path d="M24 44Q19.8 44 16.15 42.425Q12.5 40.85 9.8 38.15Q7.1 35.45 5.55 31.775Q4 28.1 4 23.9Q4 19.7 5.55 16.075Q7.1 12.45 9.8 9.75Q12.5 7.05 16.15 5.525Q19.8 4 24 4Q28.2 4 31.85 5.525Q35.5 7.05 38.2 9.75Q40.9 12.45 42.45 16.075Q44 19.7 44 23.9Q44 28.1 42.45 31.775Q40.9 35.45 38.2 38.15Q35.5 40.85 31.85 42.425Q28.2 44 24 44ZM31.9 16.5H39.4Q37.75 13.05 34.875 10.75Q32 8.45 28.25 7.5Q29.5 9.35 30.375 11.5Q31.25 13.65 31.9 16.5ZM19.2 16.5H28.9Q28.35 13.85 27.05 11.375Q25.75 8.9 24 7Q22.4 8.35 21.3 10.55Q20.2 12.75 19.2 16.5ZM7.6 28.45H15.55Q15.4 27.1 15.375 26.025Q15.35 24.95 15.35 23.9Q15.35 22.65 15.4 21.675Q15.45 20.7 15.6 19.5H7.6Q7.25 20.7 7.125 21.65Q7 22.6 7 23.9Q7 25.2 7.125 26.225Q7.25 27.25 7.6 28.45ZM19.75 40.5Q18.5 38.6 17.6 36.4Q16.7 34.2 16.1 31.45H8.6Q10.5 35 13 37.025Q15.5 39.05 19.75 40.5ZM8.6 16.5H16.15Q16.7 13.8 17.55 11.675Q18.4 9.55 19.7 7.55Q15.95 8.5 13.15 10.75Q10.35 13 8.6 16.5ZM24 41.1Q25.75 39.3 26.925 36.975Q28.1 34.65 28.85 31.45H19.2Q19.9 34.45 21.075 36.85Q22.25 39.25 24 41.1ZM18.65 28.45H29.4Q29.6 26.9 29.65 25.925Q29.7 24.95 29.7 23.9Q29.7 22.9 29.65 21.975Q29.6 21.05 29.4 19.5H18.65Q18.45 21.05 18.4 21.975Q18.35 22.9 18.35 23.9Q18.35 24.95 18.4 25.925Q18.45 26.9 18.65 28.45ZM28.3 40.45Q31.9 39.3 34.775 37Q37.65 34.7 39.4 31.45H31.95Q31.3 34.15 30.425 36.35Q29.55 38.55 28.3 40.45ZM32.4 28.45H40.4Q40.75 27.25 40.875 26.225Q41 25.2 41 23.9Q41 22.6 40.875 21.65Q40.75 20.7 40.4 19.5H32.45Q32.6 21.25 32.65 22.175Q32.7 23.1 32.7 23.9Q32.7 25 32.625 25.975Q32.55 26.95 32.4 28.45Z" />
          </svg>
        </button>
        <button
          className=""
          onClick={() => {
            navbarProps.settingtoggle();
          }}
        >
          {/* <img
            src={process.env.PUBLIC_URL + "assets/setting-icon.png"}
            alt="filter"
            className="fill-white"
          /> */}
          <svg
            viewBox="0 0 60 55"
            className={
              "hover:fill-teal-500 " + navbarProps.settingStatus
                ? "fill-teal-500"
                : "fill-white"
            }
            xmlns="http://www.w3.org/2000/svg"
            height="38"
            width="38"
          >
            <path d="M27.3 44H20.7Q20.15 44 19.725 43.65Q19.3 43.3 19.2 42.75L18.4 37.7Q17.45 37.35 16.4 36.75Q15.35 36.15 14.55 35.5L9.9 37.65Q9.35 37.9 8.8 37.725Q8.25 37.55 7.95 37L4.65 31.15Q4.35 30.65 4.5 30.1Q4.65 29.55 5.1 29.2L9.4 26.05Q9.3 25.6 9.275 25.025Q9.25 24.45 9.25 24Q9.25 23.55 9.275 22.975Q9.3 22.4 9.4 21.95L5.1 18.8Q4.65 18.45 4.5 17.9Q4.35 17.35 4.65 16.85L7.95 11Q8.25 10.45 8.8 10.275Q9.35 10.1 9.9 10.35L14.55 12.5Q15.35 11.85 16.4 11.25Q17.45 10.65 18.4 10.35L19.2 5.25Q19.3 4.7 19.725 4.35Q20.15 4 20.7 4H27.3Q27.85 4 28.275 4.35Q28.7 4.7 28.8 5.25L29.6 10.3Q30.55 10.65 31.625 11.225Q32.7 11.8 33.45 12.5L38.1 10.35Q38.65 10.1 39.2 10.275Q39.75 10.45 40.05 11L43.35 16.8Q43.65 17.3 43.525 17.875Q43.4 18.45 42.9 18.8L38.6 21.85Q38.7 22.35 38.725 22.925Q38.75 23.5 38.75 24Q38.75 24.5 38.725 25.05Q38.7 25.6 38.6 26.1L42.9 29.2Q43.35 29.55 43.5 30.1Q43.65 30.65 43.35 31.15L40.05 37Q39.75 37.55 39.2 37.725Q38.65 37.9 38.1 37.65L33.45 35.5Q32.65 36.15 31.625 36.775Q30.6 37.4 29.6 37.7L28.8 42.75Q28.7 43.3 28.275 43.65Q27.85 44 27.3 44ZM24 30.5Q26.7 30.5 28.6 28.6Q30.5 26.7 30.5 24Q30.5 21.3 28.6 19.4Q26.7 17.5 24 17.5Q21.3 17.5 19.4 19.4Q17.5 21.3 17.5 24Q17.5 26.7 19.4 28.6Q21.3 30.5 24 30.5Z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;