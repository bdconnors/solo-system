import { As } from "@chakra-ui/react"

export interface DashboardUser {
  photoURL?:string,
  name?:string,
  email?:string,
}

export interface DashboardMenu {
  top:DashboardButton[],
  bottom:DashboardButton[]
}

export interface DashboardButton {
  href:string, 
  label:string, 
  icon: As 
}
export interface DashboardSearch {
  icon:As | null,
  onSubmit:(e:any)=> void
}
export interface DashboardConfig {
  brand:string,
  search?:As,
  menu:DashboardMenu
}