import styles from './Footer.module.css';
function Footer(){
return(
    <footer className={styles.footerContainer}>
    <div className={styles.contentWrap}>
      <h2>Let's Keep in Touch!</h2>

     
      <ul className={styles.contactList}>
        <li><a href="mailto:email@example.com">ouremail@example.com</a></li>
        <li><a href="http://yourwebsite.com" target="_blank">ourwebsite.com</a></li>
        <li><a href="#" target="_blank">Twitter</a></li>
        <li><a href="#" target="_blank">LinkedIn</a></li>
        <li><a href="#" target="_blank">Facebook</a></li>
      </ul>
    </div>
  </footer>
)
}
export default Footer;