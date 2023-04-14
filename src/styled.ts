import { Button, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Header } from 'antd/es/layout/layout'
import styled from 'styled-components'

export const HeaderStyled = styled(Header)`
  background: #FFFFFF;
  box-shadow: -3px -3px 20px rgba(36, 65, 93, 0.302);
  display:flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`
export const SectionLeft = styled.div`
  height:90%;
  width:100%;
  background: #F0F2F5;
  box-shadow: 3px 3px 20px rgba(36, 65, 93, 0.302);
  border-radius: 0px 0px 20px 0px;
`
export const SectionRight = styled(SectionLeft)`
  border-radius: 0px 0px 0px 20px;
`
export const MidColContainer = styled.div`
  height:90%;
  width:100%;
  overflow: scroll;
  overflow-x: hidden;
`

export const CardStyled = styled.div`
  width:80%;
  background: #FFFFFF;
  box-shadow: 3px 3px 20px rgba(36, 65, 93, 0.302);
  border-radius: 20px;
  margin-top: 2vh;
  margin-left: auto;
  margin-right: auto;
`

export const InputField = styled(Input.TextArea)`
  background: #F0F2F5;
  border-radius: 47px;
`

export const SendBtn = styled(Button)`
  background: #9834D6;
  border-radius: 47px;
  min-width:95px;
`

export const HateHeader = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 24px;
  color: #EA2B59;
`

export const HatePara = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #000000;
`