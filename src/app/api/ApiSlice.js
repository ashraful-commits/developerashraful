import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ApiSclice = createApi({

    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000"}),
    endpoints:(builder)=>({
        getAllMessage:builder.query({
            query:()=>"/api/v1/message",
        }),
        createMessage:builder.mutation({
            query:(data)=>({
                url:"/api/v1/message",
                method:"POST",
                body:data
            })
        })
    })
})


export const {useGetAllMessageQuery,useCreateMessageMutation} = ApiSclice
export default ApiSclice