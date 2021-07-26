import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: auto;

  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  section {
    height: auto;
    width: 100%;
    background: #60a8ce;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 40px;

    .product-content{
      display: grid;
      text-align: center;
      height: 300px;
      background: #fff;
      border-radius: 12px;
      padding: 30px;
      margin:45px;

    }
  }
`