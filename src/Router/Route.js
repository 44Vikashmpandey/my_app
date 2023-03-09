import { Route, Routes } from "react-router-dom"
import PageNotFound from "../component/pageNotFound"
import TestRouting from "./path"
// import PageNotFound from "../component/pageNotFound"


const Rounting = () => {
    const test  = TestRouting
    return (
        <>
        <Routes>
        {/* <Route path="/" element={<Home />}/>
        <Route path="/admin" element={<Amdin />}/>
        <Route path="/home" element={ <Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/dashboard" element={<DashBoard />}/> */}
        {test.map((data, index) => {
            return (
                <Route exact  path={data.path} element={data.component} key={index} />
            )
        })}
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="users" element={<Users />}>
          <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} />
        </Route> */}
      </Routes>
        </>
    )
}

export default Rounting