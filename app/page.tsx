import Header from "./layout/header"
import Footer from "./layout/footer"
import Main from "./layout/main"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Main/>
      <Footer/>
    </div>
  )
}
