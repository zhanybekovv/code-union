const ChartLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#9494A0"
      fillRule="evenodd"
      d="M25 11c0 .337-.016.67-.045 1H13V.045a11.1 11.1 0 0 1 1.617-.028l.307.021L15 0v.045C20.606.55 25 5.262 25 11Zm-1.968-1A9.09 9.09 0 0 0 15 1.968V10h8.032Z"
      clipRule="evenodd"
    />
    <path
      fill="#9494A0"
      fillRule="evenodd"
      d="M11.924 3.038 12 3v10h9.955c.03.33.045.663.045 1 0 6.075-4.925 11-11 11S0 20.075 0 14 4.925 3 11 3c.312 0 .62.013.924.038ZM20.032 15A9.087 9.087 0 1 1 10 4.968V15h10.032Z"
      clipRule="evenodd"
    />
  </svg>
)
export default ChartLogo;
