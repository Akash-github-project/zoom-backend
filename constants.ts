export const accountId = "kicuq7yDSbGRZnvu8CuDOw"
export const GRANT_TYPE = {
  ACCOUNT_CRED: "account_credentials",
}

/**client id*/
export const username = "KnYXqsbR9KEOLBkUB61w"
/**client secret*/
export const password = "FjtzKI2GsGUydlHvEyC7kDtKNNSTDnpw"
/**base url*/
export const listMeeingUrl = (id: string) => `v2/users/${id}/meetings`
export const base_url = "https://zoom.us/"
export const token_url = "oauth/token"
export const create_meeting_url = "v2/users/me/meetings"

export const meeting_config: meeting_config_type = {
  agenda: "My Meeting",
  default_password: false,
  duration: 60,
  password: "123456",
  pre_schedule: false,
  settings: {
    allow_multiple_devices: true,
    approval_type: 2,
    audio: "telephony",
    encryption_type: "enhanced_encryption",
    focus_mode: true,
    host_video: false,
    jbh_time: 0,
    join_before_host: false,
    meeting_authentication: true,
    mute_upon_entry: false,
    participant_video: false,
    private_meeting: false,
    registration_type: 1,
    show_share_button: true,
    use_pmi: false,
    waiting_room: false,
    watermark: false,
    host_save_video_order: true,
    alternative_host_update_polls: true,
  },
  start_time: "2022-11-24T07:32:55Z",
  timezone: "Asia/Kolkata",
  topic: "My Meeting",
  type: 2,
}

type meeting_config_type = {
  agenda: string
  default_password: boolean
  duration: number
  password: string
  pre_schedule: boolean
  settings: {
    allow_multiple_devices: boolean
    approval_type: number
    audio: string
    encryption_type: string
    focus_mode: boolean
    host_video: boolean
    jbh_time: number
    join_before_host: boolean
    meeting_authentication: boolean
    mute_upon_entry: boolean
    participant_video: boolean
    private_meeting: boolean
    registration_type: number
    show_share_button: boolean
    use_pmi: boolean
    waiting_room: boolean
    watermark: boolean
    host_save_video_order: boolean
    alternative_host_update_polls: boolean
  }
  /**start_time fomat yyyy-MM-ddTHH:mm:ss{IN}
   * here IN is a timezone an example would be 2022-11-24T12:11:63IN
   */
  start_time: string
  timezone: string
  topic: string
  type: number
}

export type Time = {
  hh: number
  mm: number
  ss: number
}
