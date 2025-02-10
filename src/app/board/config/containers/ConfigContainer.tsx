'use client'
import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useActionState,
} from 'react'
import { updateBoard } from '../services/actions'
import ConfigForm from '../components/ConfigForm'
import useMenuCode from '@/app/global/hooks/useMenuCode'

const ConfigContainer = ({ bid }: { bid?: string } | undefined) => {
  useMenuCode('board', 'configWrite')

  return <ConfigForm />
}

export default React.memo(ConfigContainer)
