import * as React from "react"
const FileLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#9494A0"
      d="M0 0v17.308a3.845 3.845 0 0 0 3.846 3.846h17.308A3.845 3.845 0 0 0 25 17.308V6.73h-5.77V0H0Zm1.923 1.923h15.385v15.385c0 .702.211 1.355.541 1.923H3.846c-1.144 0-1.923-.78-1.923-1.923V1.923Zm1.923 1.923v4.808h11.539V3.846H3.846ZM5.5 5.77h7.961v.962H5.5v-.962Zm13.73 2.885h3.847v8.654c0 1.144-.779 1.923-1.923 1.923-1.144 0-1.923-.78-1.923-1.923V8.654Z"
    />
  </svg>
)
export default FileLogo;
