import { Stack } from "@chakra-ui/react"
import { DashboardNavButton, DashboardNavButtonProps } from "dashboard-nav-button"

export interface DashboardNavMenuProps {
  buttons:DashboardNavButtonProps[],
  active:string
}
export const DashboardNavMenu = (props:DashboardNavMenuProps) => {
  const { active, buttons } = props;
  return (
    <Stack spacing="1">
    { buttons.map((btnProps:DashboardNavButtonProps, i)=><DashboardNavButton 
          key={`menu-bottom-${i}`}
          aria-current={ active === btnProps.href ? 'page' : undefined }
          { ...btnProps }
        />
      )}
    </Stack>
  )
}