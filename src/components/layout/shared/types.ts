export type TMenuListItemProps = {
  children: React.ReactNode
  open?: boolean,
  title: string,
  path: string,
  active: boolean
  handleDrawerClose?: () => void
}
