import express, { json } from "express"
import cors from "cors"
import createMeetRouter from "./routes/CreateMeeting"
import meetingListRouter from "./routes/ListMeeting"

const app = express()
app.use(cors())
app.use(json())

app.listen(4000)
app.use(express.static("public"))

app.use("/user/", createMeetRouter)
app.use("/meet/", meetingListRouter)

app.get("/", (req, res) => {
  res.send({ hello: "i am readable" })
})
