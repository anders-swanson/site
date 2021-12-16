import Link from 'next/link'
import styles from './burger.module.css'
import { slide as Menu } from 'react-burger-menu'

const menuStyles = {
  bmBurgerButton: {
    zIndex: "9999",
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: 'rgb(26, 26, 26)'
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
          <Link href="/links">Links</Link>
          <br/>
        </div>          
      </Menu>
    )
}