import icon from "../assets/icon.svg";
import cart from "../assets/cart.svg";

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 ml-3 text-white mr-5">
            <div className="flex items-center ml-1 mr-14">
                <img src={icon} alt="logo" className="mr-2" />
                <h1 className="text-2xl font-bold text-black ">E-Comm</h1>
            </div>
            <div className="flex text-black  space-x-26 text-xl font-light">
                <h1>HOME</h1>
                <h1>BAG</h1>
                <h1>SNEAKERS</h1>
                <h1>BELT</h1>
                <h1>CONTACT</h1>
            </div>
            <div className="flex items-center space-x-3">
                <img src={cart} alt="cart" className="mr-7 w-6 h-6" />
                <span className="text-black text-lg mr-3 ">Items</span>
                <span className="text-[#262626]/50 text-xl">$0.00</span>
            </div>
        </header>
    );
};

export default Header;

