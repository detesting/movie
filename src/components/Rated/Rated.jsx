import React from 'react';
import { Col, List, Row } from 'antd';

import MovieCard from '../MovieCard/MovieCard';

const Rated = ({ dataLocal, OnChangeDataLocal }) => {
  let itemClient = [];
  if (dataLocal) {
    dataLocal.forEach(({ item, genres }) => {
      item.genres = genres;
      itemClient.push(item);
    });
  }
  return itemClient.length ? (
    <div>
      <Row>
        <Col offset={1} span={22}>
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
              dataSource={itemClient}
              renderItem={(item) => (
                <List.Item>
                  <MovieCard
                    item={item}
                    genres={item.genres}
                    dataLocal={dataLocal}
                    OnChangeDataLocal={OnChangeDataLocal}
                  >
                    Card content
                  </MovieCard>
                </List.Item>
              )}
            />
          </div>
        </Col>
      </Row>
    </div>
  ) : null;
};

export default Rated;
