import ReactPaginate from "react-paginate";

type Props = {
  page: number; // first page will always be 1 but react-paginate use 0 as first page
  pages?: number; // total available result items
  onPageChange?: (nextPage: number) => void;
};

export const Pagination = ({ page, onPageChange, pages = 1 }: Props) => {
  const handlePageChange = ({ selected }: { selected: number }) => {
    onPageChange?.(selected + 1);
  };

  return (
    <div className="paginate-container">
      <ReactPaginate
        containerClassName="paginate"
        breakLabel="..."
        nextLabel=">"
        forcePage={page - 1}
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={pages}
        activeClassName="active-page"
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
