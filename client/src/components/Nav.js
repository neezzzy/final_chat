import styles from './Nav.module.css'
function Nav(){
    return(
        <div className={styles.container_main_nav}>
        <div className={styles.topnav}>
  <a href="#home" className={styles.active}>Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  
</div>
</div>
    )

}
export default Nav;