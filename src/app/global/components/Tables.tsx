import styled from 'styled-components'

export const TableCols = styled.table`
  border-spacing: 0;
  width: 100%;

  th {
    background: #e6e6e6;
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }

  td {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  tr:first-of-type {
    th,
    td {
      border-top: 1px solid #ccc;
    }
  }
`

export const TableRows = styled.table`
  border-spacing: 0;
  width: 100%;
  thead {
    th {
      background: #212121;
      color: #fff;
      padding: 7px 10px;
      font-size: 1.15rem;

      & + & {
        border-left: 1px solid #f8f8f8;
      }
    }
  }

  tbody {
    td {
      border-bottom: 1px solid #ccc;
      padding: 5px 10px;
    }

    tr:nth-of-type(2n) {
      td {
        background: #f8f8f8;
      }
    }
  }

  .no-data {
    padding: 150px 0;
    text-align: center;
    font-size: 1.15rem;
  }
`
