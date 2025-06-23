import './SearchBar.css'
import { ReactComponent as LupaIcon } from "../../assets/icons/Lupa-icon.svg"

type Props = {
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ className = "", value, onChange }: Props) => {

    return (
        <div className={`searchbar-container ${className}`}>
            <div className='searchbar-container__icon'> <LupaIcon/> </div>
            <input type="search" name="Pesquisa" className="searchbar-container__input" placeholder='Pesquisar' value={value} onChange={onChange}/>
        </div>
    );
};

export default SearchBar