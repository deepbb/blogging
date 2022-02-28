import Footer from './Footer'
import Topbar from "./Topbar"

const  Layout = ({children}) => {
  return (
    <>
        <Topbar />
        {children}
        <Footer />
    </>
  )
}

export default Layout