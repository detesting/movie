import React from 'react';
import { Tag } from 'antd';

import './ItemGenres.css';

const SearchPanel = ({ genresItem, genres }) => {
  const genresName = genres.genres.filter((item) => genresItem.includes(item.id));
  return (
    <div className="genres">
      {genresName.map((item) => {
        return (
          <Tag key={Math.random().toString(36).substr(2, 9)} color="magenta" className="genre">
            {item.name}
          </Tag>
        );
      })}
    </div>
  );
};

export default SearchPanel;
