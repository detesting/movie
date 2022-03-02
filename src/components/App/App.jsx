import React, { useState } from 'react';
import { Tabs, Alert } from 'antd';
import { SearchOutlined, StarOutlined } from '@ant-design/icons';
import { Offline, Online } from 'react-detect-offline';

import './App.css';
import SearchPanel from '../SearchPanel';
import MovieList from '../MovieList';
import Rated from '../Rated';

const App = () => {
  const { TabPane } = Tabs;

  const [searchText, setSearchText] = useState('');
  const onSearch = (text) => setSearchText(text);

  const [dataLocal, setDataLocal] = useState();
  const onChangeDataLocal = () => setDataLocal(JSON.parse(localStorage.getItem('moviesRating')));

  return (
    <div className="app">
      <Online>
        <Tabs defaultActiveKey="Search" centered className="tabs" onChange={() => onChangeDataLocal()}>
          <TabPane
            tab={
              <span>
                <SearchOutlined />
                Search
              </span>
            }
            key="Search"
          >
            <SearchPanel onSearch={onSearch} searchText={searchText} />
            <MovieList searchText={searchText} onChangeDataLocal={onChangeDataLocal} dataLocal={dataLocal} />
          </TabPane>
          <TabPane
            tab={
              <span>
                <StarOutlined />
                Rated
              </span>
            }
            key="Rated"
          >
            <Rated dataLocal={dataLocal} onChangeDataLocal={onChangeDataLocal} />
          </TabPane>
        </Tabs>
      </Online>
      <Offline>
        <Alert message="Error" description="Отсутствует подключение к сети :-(" type="error" showIcon />
      </Offline>
    </div>
  );
};

export default App;
