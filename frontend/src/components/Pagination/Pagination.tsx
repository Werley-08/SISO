import './Pagination.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    return (
        <div className="pagination">
            <button 
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="pagination-button"
            >
                Anterior
            </button>
            
            <span className="pagination-info">
                Página {currentPage} de {totalPages}
            </span>

            <button 
                onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="pagination-button"
            >
                Próxima
            </button>
        </div>
    );
};

export default Pagination; 