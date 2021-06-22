import { gql } from '@apollo/client';

export const DELETE_TICKERS = gql`
  {
    tickers {
      name,
      symbol
    }
  }
`