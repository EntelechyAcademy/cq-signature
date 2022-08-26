export interface User {
  first_name: string
  last_name: string
  created_at: string
  progress_title: string
  progress_desc: string
  strenghts: userStrength[]
  focuses: userFocuses[]
}

export interface userStrength {
  name: string
  verified: number
  thumb: string
  rating: number
  awarded: number
}

export interface userFocuses {
  name: string
  thumb: string
  status: string
  progress_tally: number
  progress_total: number
  awarded: number
}

export interface UserDetailsProps {
  memberSince: string
  progressTitle: string
  progressDesc: string
}
