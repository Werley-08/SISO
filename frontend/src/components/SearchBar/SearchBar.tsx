import './SearchBar.css'
import { ReactComponent as LupaIcon } from "../../assets/icons/Lupa-icon.svg"

type Props = {
  className?: string;
};

const SearchBar = ({className = "" }: Props) => {

    return (
        <div className={`searchbar-container ${className}`}>
            <div className='searchbar-container__icon'> <LupaIcon/> </div>
            <input type="search" name="Pesquisa" className="searchbar-container__input" placeholder='Pesquisar'/>
        </div>
    );
};

export default SearchBar