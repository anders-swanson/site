import Link from 'next/link'
import styles from './burger.module.css'
import { slide as Menu } from 'react-burger-menu'

const menuStyles = {
  bmBurgerButton: {
    zIndex: "9999",
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '10px',
    top: '10px',
    transition: 'top 0.3s',
  },
  bmBurgerBars: {
    border: '0.25px solid grey',
    borderRadius: '3px',
    background: '#FFF',
    height: '8px'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    backgroundColor: "rgb(26, 26, 26)",
    padding: '5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: 'rgb(26, 26, 26)'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default function Burger() {
    return (
      <Menu styles={menuStyles}>
        
        <image 
            className={styles.menuImage}
            src="/images/cover.jpeg"
        />
        <div className={styles.menu}>          
          <Link href="/">Home</Link>
          <br/>
          <Link href="/about">About</Link>
          <br/>
          <Link href="/links#info">Links</Link>
          <br/>
          
          <div className={styles.footer}>
            <p>© {new Date().getFullYear()}</p>
          </div>
        </div>        
      </Menu>
    )
}