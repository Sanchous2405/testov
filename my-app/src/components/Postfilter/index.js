import React from "react";
import { Myinput } from "../UI/Muinput/index";
import { Myselect } from "../UI/Myselect/index";

export const Postfilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Myinput
        type="text"
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <Myselect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка по"
        option={[
          {
            value: "title",
            name: "По названию",
          },
          {
            value: "body",
            name: "По описанию",
          },
        ]}
      />
    </div>
  );
};
