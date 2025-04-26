import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  getPaginationRowModel
} from "@tanstack/react-table";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { OrdersTableData, AdvancedTableProps } from "../../types/prop_types";
import IconBtn from "../button/IconBtn";

export default function AdvancedTable({
  data,
  columns
}: AdvancedTableProps<OrdersTableData>): JSX.Element {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const navigate = useNavigate();

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true
  });

  return (
    <div>
      <table className="border-[1px] border-gray-500 dark:border-gray-300 rounded-md w-full cursor-default">
        <thead className="bg-theme-yellow">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-[10px] text-left text-gray-950"
                >
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler()
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{ asc: " ⬆️", desc: " ⬇️" }[
                        header.column.getIsSorted() as string
                      ] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              onClick={() => navigate(row.getValue("orderId"))}
              className="odd:bg-gray-100 dark:odd:bg-gray-800 cursor-pointer"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{ minWidth: "150px", padding: "5px 0 5px 10px" }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center gap-2 my-2 justify-end">
        <IconBtn
          btnIcon={<MdKeyboardDoubleArrowLeft size={20} color="#000" />}
          clickHandler={() => table.setPageIndex(0)}
          additionalStyles={["bg-theme-yellow"]}
          {...{ disabled: !table.getCanPreviousPage() }}
        />
        <IconBtn
          btnIcon={<MdKeyboardArrowLeft size={20} color="#000" />}
          clickHandler={() => table.previousPage()}
          additionalStyles={["bg-theme-yellow"]}
          {...{ disabled: !table.getCanPreviousPage() }}
        />
        <IconBtn
          btnIcon={<MdKeyboardArrowRight size={20} color="#000" />}
          clickHandler={() => table.nextPage()}
          additionalStyles={["bg-theme-yellow"]}
          {...{ disabled: !table.getCanNextPage() }}
        />
        <IconBtn
          btnIcon={<MdKeyboardDoubleArrowRight size={20} color="#000" />}
          clickHandler={() => table.setPageIndex(table.getPageCount() - 1)}
          additionalStyles={["bg-theme-yellow"]}
          {...{ disabled: !table.getCanNextPage() }}
        />
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <select
          className="bg-transparent text-gray-950 border-[2px] p-1 border-theme-yellow rounded"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 15, 20, 30].map((pageSize) => (
            <option key={pageSize} value={pageSize} className="text-gray-950">
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
