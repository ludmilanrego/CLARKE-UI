import './styles.css';
import LogoText from '../../assets/logo-clarke.png'

export default function Logo() {

    return (
        <div className="logo">
            <img
                className="logo-img"
                src={LogoText}
                alt="logo"
            ></img>
        </div>
    )
}