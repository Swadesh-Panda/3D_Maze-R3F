import { Environment } from "@react-three/drei"
import React from "react"

const EnvMap = () => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Environment
        background={true}
        files={[
          "bluecloud_rt.jpg",
          "bluecloud_lf.jpg",
          "bluecloud_up.jpg",
          "bluecloud_dn.jpg",
          "bluecloud_bk.jpg",
          "bluecloud_ft.jpg",
        ]}
        path="/envMap/"
      />
    </>
  )
}

export default EnvMap
