import { ReactNode } from "react";

interface IGridList<T> {
  records: T[];
  renderItem: (record: T) => ReactNode;
  text: string;
}

type HasId = { id?: number };

function GridList<T extends HasId>({
  records,
  renderItem,
  text,
}: IGridList<T>) {
  const GridListItem =
    records.length > 0 ? (
      records.map((record) => (
        <div className="flex justify-center mb-5 mt-2" key={record.id}>
          {renderItem(record)}
        </div>
      ))
    ) : (
      <span className="text-3xl m-10 bg-blue-200 items-center ">{text}</span>
    );

  return (
    <div className="flex justify-center h-full  ">
      <div
        className={`${
          !text.length
            ? "justify-center items-center m-auto h-full my-5 bg-red-500"
            : "grid  grid-cols-4 gap-y-6  w-full"
        }`}
      >
        {GridListItem}
      </div>
    </div>
  );
}

export default GridList;
