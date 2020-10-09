import React from "react"
import ContentLoader from "react-content-loader";


const UserLoader = (props) => (
    <ContentLoader 
    className="UserLoader"
      speed={2}
      width={800}
      height={160}
      viewBox="0 0 800 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="100" y="-3" rx="3" ry="3" width="800" height="88" /> 
      <circle cx="40" cy="40" r="40" />
    </ContentLoader>
  )

export default UserLoader