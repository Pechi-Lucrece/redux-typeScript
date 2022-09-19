import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface User {
    name: string
}

export const userName = createApi({
    reducerPath : "apiName",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:3000/api",
        prepareHeaders(headers){
            return headers
        }
    }),
    endpoints(builder){
        return {
            nameFetch : builder.query<User,string>({
                query(page){
                    return `/${page}`
                }
            })
        }
    }
})

export const { useNameFetchQuery } = userName