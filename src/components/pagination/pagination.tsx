import './pagination.css';

type PaginationProps = {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map(number => (
        <a
          key={number}
          href="#"
          className={`pagination__link ${currentPage === number ? 'pagination__link--current' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            paginate(number);
          }}
        >
          {number}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
