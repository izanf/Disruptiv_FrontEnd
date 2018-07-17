import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.h1`
margin: 3rem 0 5rem;`

const Table = styled.table`
border-spacing: 0;

@media (max-width: 568px) {
  width: 100%;
}
`

const TableHeader = styled.thead`
background: #CCC;
`

const TableBody = styled.tbody``

const TR = styled.tr`
&:nth-child(2n) {
  background: #EEE;
}
`

const TH = styled.th`
text-align: left;
padding: .3rem .5rem;

@media (max-width: 768px) {
  &:nth-child(4) {
    display: none;
  }
}

@media (max-width: 568px) {
  display: none;

  &:first-child,
  &:nth-child(2) {
    display: block;
  }
}
`

const TD = styled.td`
padding: .3rem .5rem;

@media (max-width: 768px) {
  &:nth-child(4) {
    display: none;
  }
}

@media (max-width: 568px) {
  display: none;

  &:first-child,
  &:nth-child(2) {
    display: block;
  }
}
`

export default {
  Wrapper,
  Title,
  Table,
  TableHeader,
  TableBody,
  TR,
  TH,
  TD
}