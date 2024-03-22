import { Link } from "react-router-dom";

type Props = {
  totalPage: number;
  currentPage: number;
};

const Pagination = ({ totalPage, currentPage }: Props) => {
  const pageNumbers = Array.from(
    { length: totalPage },
    (_, index) => index + 1
  );
  return (
    <nav>
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          {currentPage === 1 ? (
            <span className="cursor-not-allowed flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
              Previous
            </span>
          ) : (
            <Link
              to={`/products?page=${currentPage - 1}`}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Previous
            </Link>
          )}
        </li>
        {pageNumbers.map((page, index) => (
          <li key={index}>
            <Link
              to={`/products?page=${page}`}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                currentPage === page ? "bg-gray-300" : "bg-white"
              }`}
            >
              {page}
            </Link>
          </li>
        ))}
        <li>
          {currentPage === totalPage ? (
            <span className="cursor-not-allowed flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
              Next
            </span>
          ) : (
            <Link
              to={`/products?page=${currentPage + 1}`}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Next
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
