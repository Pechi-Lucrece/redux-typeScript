import React,{ useState, useEffect } from 'react'
import { NextPage } from 'next'
import ButtonSection from '../components/ButtonSection'
import CounterSection from '../components/CounterSection'
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks'
import { useNameFetchQuery } from '../features/api-slice'

 const Home : NextPage = () =>  {
 const userName = useAppSelector(state => state.page.value)
 const {data, isFetching, isSuccess} = useNameFetchQuery(userName)



  return (
    <div>
        <h1 className={"flex justify-content-center  font-bold"}>Counter by <span className={"text-blue-500"}>

          {  isFetching ? "Loading..." : data?.name}
          </span></h1>
        <CounterSection  />
        <ButtonSection />
    </div>
  )
}

export default Home
