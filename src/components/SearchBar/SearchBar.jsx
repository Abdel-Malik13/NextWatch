export function SearchBar({ filter, setFilter, placeholder }) {
  return (
    <div className="row">
      <div className="col-12">
        <input
          className="form-control form-control-lg"
          style={{ marginTop: 30, marginBottom: 30 }}
          type="text"
          placeholder={placeholder}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </div>
  );
}
