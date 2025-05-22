import './css/SearchBar.css';

export const SearchBar = ({ value, onChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar usuarios..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
