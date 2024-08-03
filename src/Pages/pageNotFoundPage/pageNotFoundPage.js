import { Header } from "../../Components/common/Header/Header"
import Footer from "../../Components/footer/footer"
import PageNotFound from "../../Components/pageNotFound/pageNotFound"

const PageNotFoundPage=()=>{
    const error='Looks like you landed'
return (
    <>
    <Header error={error}/>
    <PageNotFound/>
    <Footer/>
    </>
)
}
export default PageNotFoundPage