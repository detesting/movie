import React from 'react';
import { Input, Row, Col } from 'antd';
import debounce from 'lodash.debounce';

import './SearchPanel.css';

const SearchPanel = ({ onSearch }) => {
  let text = debounce(onSearch, 1000);

  const onSearchDebounce = (event) => {
    text(event.target.value);
  };

  return (
    <div>
      <Row>
        <Col offset={1} span={22}>
          <Input placeholder="Type to search..." onChange={onSearchDebounce} className="search__panel" />
        </Col>
      </Row>
    </div>
  );
};

export default SearchPanel;
