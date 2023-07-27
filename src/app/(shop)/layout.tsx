import {ReactNode} from "react"

interface IProps {
  children: ReactNode
}

// shop's route group layout
function ShopLayout(props: IProps) {
  const {children} = props

  return (
    <div className={'bg-red-200 w-full flex flex-col items-center'}>
      <h1 className={'text-xl'}>ShopLayout</h1>
      {children}
    </div>
  )
}

export default ShopLayout
