import React from 'react';
import { Tag, Space } from 'antd';

import './ItemGenres.css';

const SearchPanel = ({ genresItem, genres }) => {
  const genresName = genres.genres.filter((item) => genresItem.includes(item.id));
  return (
    <Space className="genres">
      {genresName.map((item) => {
        return (
          <Tag key={Math.random().toString(36).substr(2, 9)} color="magenta" className="genre">
            {item.name}
          </Tag>
        );
      })}
    </Space>
  );
};

export default SearchPanel;
