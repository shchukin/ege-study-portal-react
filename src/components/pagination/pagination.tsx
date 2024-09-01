import './pagination.css';

// type PaginationProps = {
//
// }

const Pagination: React.FC<PaginationProps> = () => {
  return (
    <div className="pagination">
      <a className="pagination__link pagination__link--disabled" href="#">1</a>
      <a className="pagination__link pagination__link--current" href="#">2</a>
      <a className="pagination__link" href="#">3</a>
      <div className="pagination__separator">...</div>
      <a className="pagination__link" href="#">10</a>
      <a className="pagination__link pagination__link--next" href="#">Далее →</a>
    </div>
  )
}

export default Pagination;
