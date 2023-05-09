import { Router } from "express"
import { base_url, listMeeingUrl } from "../constants"
import { fetch, getOAuthToken } from "./common"

const meetingListRouter = Router()

const getMeetingList = async (userId: string) => {
  return getOAuthToken().then(async (token_json) => {
    const token = token_json.access_token
    const meet_res = await fetch(`${base_url}${listMeeingUrl(userId)}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })

    const data = meet_res.json()
    console.log(data, "this is data")
    return data
  })
}

meetingListRouter.post("/list", (req, res) => {
  getMeetingList(req.body.id || "me").then((data) => {
    res.json({ list: data })
  })
})

export default meetingListRouter
