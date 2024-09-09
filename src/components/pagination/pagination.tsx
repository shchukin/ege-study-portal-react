import './pagination.css';

type PaginationProps = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
   currentPage,
   itemsPerPage,
   totalItems,
   onPageChange,
 }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // @todo: выводится много страниц
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

    // @todo: не переключается активный элемент
    return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <a
          key={number}
          className={`pagination__link ${number === currentPage ? 'pagination__link--current' : ''}`}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPageChange(number);
          }}
        >
          {number}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
