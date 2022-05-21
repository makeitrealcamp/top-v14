import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (<>
    <Header />
    <main className={styles.container} >
      {children}
    </main>
    <Footer />
  </>
  )
}
export default Layout;