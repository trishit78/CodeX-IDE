import React from "react"
import { Route, Routes } from "react-router-dom"
import { PingComponent } from "./components/atoms/PingComponent"
import CreateProject from "./pages/CreateProject"
import ProjectPlayground from "./pages/ProjectPlayground"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<CreateProject />}
      />
      <Route path="/project/:projectId"  element={<ProjectPlayground/>} />
    </Routes>
    </>
  )
}

export default App
