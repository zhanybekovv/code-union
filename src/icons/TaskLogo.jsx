import * as React from "react"
const TaskLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#9494A0"
      d="M17.5 0h-10C3.364 0 0 3.364 0 7.5v16.25A1.25 1.25 0 0 0 1.25 25H17.5c4.136 0 7.5-3.364 7.5-7.5v-10C25 3.364 21.636 0 17.5 0Zm5 17.5c0 2.758-2.242 5-5 5h-15v-15c0-2.758 2.242-5 5-5h10c2.758 0 5 2.242 5 5v10Z"
    />
    <path
      fill="#9494A0"
      d="M10 17H6v-2h4v2Zm5.5-4H6v-2h9.5v2ZM19 9H6V7h13v2Z"
    />
    <path
      fill="#9494A0"
      d="M14.492 18.828 11 15.5l1.5-1.5 1.992 2 5.008-5 1.411 1.417-6.419 6.411Z"
    />
  </svg>
)
export default TaskLogo;
