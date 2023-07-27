import {ReactNode} from "react"

interface IProps {
  children: ReactNode
}

// layout need a props which includes children
// If layout component don't have children, it will render layout component only, not the page component
function DashBoardLayout(props: IProps) {
  const {children} = props

  return (
    <div className={'bg-amber-200 p-4 w-full flex flex-col items-center'}>
      <h1>DashBoardLayout</h1>
      <p>When you are in /dashboard/settings, it will also appear. That means layout component will influence child component.</p>
      {children}
    </div>
  )
}

export default DashBoardLayout
