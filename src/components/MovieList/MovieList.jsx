import React, { useEffect, useState } from 'react';
import { Row, Col, List, Pagination, Spin } from 'antd';
import Title from 'antd/es/typography/Text';

import MovieDB from '../../services/MovieDB';
import MovieCard from '../MovieCard/MovieCard';

import './MovieList.css';

const MovieList = ({ searchText, onChangeDataLocal, dataLocal }) => {
  const movieDB = new MovieDB();
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState({});
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    movieDB.getGenres().then((res) => setGenres(res));
  }, []);
  useEffect(() => {
    setStatus('loading');
    if (searchText.trim().length) {
      getData(searchText, currentPage).then((res) => {
        if (!res.length) {
          setStatus('noData');
        }
        setData(res);
      });
    } else {
      setStatus('empty');
    }
    return () => {
      setData([]);
    };
  }, [searchText, currentPage]);
  const getData = (searchText, page) => {
    return movieDB.getSearch(searchText, page).then((res) => {
      let { results, total_pages } = res;

      setTotalPages(total_pages);
      setStatus('download');
      return results;
    });
  };
  const onChangePage = (page = 1) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Row>
        <Col offset={1} span={22}>
          {status === 'loading' ? (
            <Spin size="large" className="spinner" />
          ) : status === 'empty' ? (
            <Title level={3} className="empty">
              Введите поисковый запрос
            </Title>
          ) : status === 'noData' ? (
            <Title level={3} className="empty">
              Ничего не найдено :-(
            </Title>
          ) : (
            <div>
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 1,
                  md: 1,
                  lg: 2,
                  xl: 2,
                  xxl: 2,
                }}
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <MovieCard item={item} genres={genres} onChangeDataLocal={onChangeDataLocal} dataLocal={dataLocal}>
                      Card content
                    </MovieCard>
                  </List.Item>
                )}
              />
              <Pagination
                defaultCurrent={1}
                total={totalPages * 20}
                pageSize={20}
                showSizeChanger={false}
                className="pagination"
                current={currentPage}
                onChange={onChangePage}
              />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default MovieList;
