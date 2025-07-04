import styles from './style.module.css';

export function SearchBar({ filter, setFilter, placeholder }) {
  return (
    <div className="row">
      <div className="col-12">
        <input
          className={`form-control form-control-lg ${styles.customInput}`}
          type="text"
          placeholder={placeholder}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </div>
  );
}
