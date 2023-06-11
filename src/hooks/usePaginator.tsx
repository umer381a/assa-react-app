import { useCallback, useEffect, useMemo, useState } from "react";

type Props<T> = {
  items?: T[];
  perPage?: number;
  initialPage?: number;
};

export function usePaginator<T = any>({
  initialPage,
  items = [],
  perPage = 14,
}: Props<T>) {
  const [page, _setPage] = useState(initialPage || 1);

  const getItemsByPage = useCallback(
    (page: number) => {
      const startingIndex = (page - 1) * perPage;
      return items.slice(startingIndex, startingIndex + perPage);
    },
    [items, perPage]
  );

  const [pageItems, setPageItems] = useState<T[]>(() => {
    return getItemsByPage(initialPage || 1);
  });

  useEffect(() => {
    _setPage(initialPage || 1);
    setPageItems(getItemsByPage(initialPage || 1));
  }, [items, getItemsByPage, initialPage]);

  const totalPages = useMemo(() => {
    const count = items.length / perPage;
    return Number.isInteger(count) ? count : Math.floor(count) + 1;
  }, [items, perPage]);

  const setPage = useCallback(
    (nextPage: number) => {
      const nextPageItems = getItemsByPage(nextPage);
      _setPage(nextPage);
      setPageItems(nextPageItems);
    },
    [getItemsByPage]
  );

  return {
    page,
    setPage,
    pageItems,
    totalPages,
  };
}
