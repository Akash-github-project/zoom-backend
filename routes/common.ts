import { RequestInfo, RequestInit } from "node-fetch"
import {
  accountId,
  base_url,
  GRANT_TYPE,
  password,
  token_url,
  username,
} from "../constants"
export const fetch = (url: RequestInfo, init?: RequestInit) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url, init))

export const getOAuthToken = async () => {
  const z = await fetch(
    `${base_url}${token_url}?grant_type=${GRANT_TYPE.ACCOUNT_CRED}&account_id=${accountId}`,
    {
      method: "post",
      body: undefined,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${encode(username + ":" + password)}`,
      },
    }
  )
  const data = await z.json()
  return data
}

const encode = (String: string) => {
  return Buffer.from(String).toString("base64")
}
