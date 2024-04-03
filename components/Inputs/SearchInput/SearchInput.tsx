import DropDown from '@/components/DropDown/DropDown'

const SearchInput = () => {
  return (
    <div className="search-input">
      <DropDown />
      <input className="search-input__input" type="text" placeholder="Найди свой товар" />
    </div>
  )
}

export default SearchInput
