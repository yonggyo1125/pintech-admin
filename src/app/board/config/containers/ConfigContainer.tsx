'use client'
import React from 'react'
import ConfigForm from '../components/ConfigForm'
import useMenuCode from '@/app/global/hooks/useMenuCode'

const ConfigContainer = ({ bid }: { bid?: string } | undefined) => {
  useMenuCode('board')

  return <ConfigForm />
}

export default React.memo(ConfigContainer)
