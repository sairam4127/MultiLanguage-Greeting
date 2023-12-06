import styled from 'styled-components'

export const MultiLangGreetingBgCont = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`
export const MultiLangGreetingHead = styled.h1``

export const MultiLangGreetingUl = styled.ul`
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  width: 300px;
  margin-top: 30px;
`
export const MultiLangGreetingLitem = styled.li``

export const MultiLangGreetingBtn = styled.button`
  border: 1px solid #db1c48;
  background-color: ${props => props.active};
  color: ${props => props.activecolor};
  cursor: pointer;
  padding: 7px;
  border-radius: 12px;
`

export const MultiLangGreetingImg = styled.img`
  margin-top: 30px;
  height: 450px;
  width: 450px;
`
