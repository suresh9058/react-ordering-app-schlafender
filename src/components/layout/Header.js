import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClickCartIcon={props.onShowCart}></HeaderCartButton>
            </header>
    )
}

export default Header;