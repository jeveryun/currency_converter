import React, {ReactNode} from 'react'
import {Provider} from 'react-redux'
import { configureStore } from './redux/store'

interface IProviderProps {
  children: ReactNode
}

export default function Providers({children}: IProviderProps) {
  return (
    <Provider store={store}></Provider>
  )
}