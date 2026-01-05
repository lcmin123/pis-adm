import { mapUserSexToLabel } from '@src/entities/user';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

const columnHelper = createColumnHelper();

// TODO 필요 시 prop으로 받아오기
const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => info.getValue(),
    size: 200,
  }),
  columnHelper.accessor('name', {
    header: '이름',
    cell: (info) => info.getValue(),
    size: 200,
  }),
  columnHelper.accessor('birth', {
    header: '생년월일',
    cell: (info) => info.getValue(),
    size: 200,
  }),
  columnHelper.accessor('sex', {
    header: '성별',
    cell: (info) => {
      const val = info.getValue();
      return mapUserSexToLabel(val);
    },
    size: 100,
  }),
];

export function UserTable({ data = [], onRowClick }) {
  'use no memo';
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table style={{ width: `${table.getTotalSize()}px` }} className="max-w-full border-collapse">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                style={{ width: `${header.column.getSize()}px` }}
                className="bg-turquoise-500 border border-gray-300 p-2 text-white"
              >
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="text-center">
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            onClick={() => onRowClick && onRowClick(row.original)}
            style={{ cursor: onRowClick ? 'pointer' : 'default' }}
            className="hover:bg-gray-200"
          >
            {row.getVisibleCells().map((cell) => (
              <td className="border border-gray-300 p-2" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
