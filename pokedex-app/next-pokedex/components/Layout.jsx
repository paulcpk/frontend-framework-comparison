import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}
