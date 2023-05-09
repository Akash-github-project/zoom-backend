import { Router } from "express"
//@ts-ignore

import {
  base_url,
  meeting_config,
  Time,
  create_meeting_url,
} from "../constants"
import { getOAuthToken, fetch } from "./common"

const createMeetRouter = Router()

createMeetRouter.post("/create", (req, res) => {
  getOAuthToken().then(async (oauthToken) => {
    const bodyreq = req.body
    const token = oauthToken.access_token
    const time: Time = {
      hh: bodyreq?.hour,
      mm: bodyreq?.minutes,
      ss: bodyreq?.seconds,
    }
    const new_meeting_config = getMeetingConfig(
      bodyreq?.topic,
      time,
      new Date(bodyreq?.date),
      bodyreq?.password,
      bodyreq?.agenda,
      bodyreq?.duration
    )
    console.log(new_meeting_config, "meeting_Config")

    const meet_res = await fetch(`${base_url}${create_meeting_url}`, {
      method: "POST",
      body: JSON.stringify(new_meeting_config),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })

    const meet_data = await meet_res.json()
    res.status(200).json({ data: meet_data })
  })
})

function getMeetingConfig(
  topic: string,
  time: Time,
  date: Date,
  password: string,
  agenda: string,
  duration: number
): typeof meeting_config {
  const new_config = { ...meeting_config }
  new_config.topic = topic
  new_config.start_time = `${date.getDay()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}T${time.hh}:${time.mm}:${time.ss}IN`
  new_config.agenda = agenda
  new_config.password = password
  new_config.duration = duration

  return { ...new_config }
}

export default createMeetRouter
