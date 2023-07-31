import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className="container">
        <nav className={`${styles.navigation}`}>
            <div className="logo">
                <img src="/images/logo.png" alt="logo" />
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation

