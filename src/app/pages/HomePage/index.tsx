import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import TodoInput from 'app/components/TodoInput';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background: white;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.17);
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div``;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;

const TodoCheck = styled.input`
  margin-right: 15px;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>TO DO</Title>
          <TodoInput />
          <TodoList>
            <TodoItem>
              <TodoCheck type="checkbox" />i am todo
            </TodoItem>
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}