import React from 'react'
import ConfigContainer from '../../containers/ConfigContainer'
import { MainTitle } from '@/app/global/components/StyledTitle'

const EditPage = ({ params }) => {
  const { bid } = params
  return (
    <>
      <MainTitle>게시판 설정 수정</MainTitle>
      <ConfigContainer bid={bid} />
    </>
  )
}

export default React.memo(EditPage)
