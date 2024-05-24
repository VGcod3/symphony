import {
  TokensRes,
  UserLoginReq,
  UserLoginRes,
  UserRegisterReq,
  UserRegisterRes,
} from '@/store/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'localhost:5000/auth';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation<UserLoginRes, UserLoginReq>({
      query: (dto) => ({
        url: '/login',
        method: 'POST',
        body: dto,
      }),
    }),
    getNewTokens: builder.mutation<TokensRes, string>({
      query: (dto) => ({
        url: '/login/access-token',
        method: 'POST',
        body: dto,
      }),
    }),
    register: builder.mutation<UserRegisterRes, UserRegisterReq>({
      query: (dto) => ({
        url: '/register',
        method: 'POST',
        body: dto,
      }),
    }),
  }),
});

export const { useLoginMutation, useGetNewTokensMutation, useRegisterMutation } = api;
