import { ApiContext, User } from 'types'
import { fetcher } from '@/utils'

export type GetUserParams = {
  id: number
}

const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  /**
  //ユーザーAPI
  //サンプルレスポンス
  {
    "id": "1",
    "username": "taketo",
    "displayName": "Taketo Yoshida",
    "email": "yoshida-taketo@gmail.com",
    "profileImageUrl": "/users/1.png",
    "description": "Lorem Ipsum is simplu du"
  }
    */
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,{
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getUser
