
type CardProps = {
  children:React.ReactNode,
  isFeatured?:boolean,
  className?:string
}

export const Card:React.FC<CardProps> = ({children, isFeatured, className}) => {
  return (
    <div
      className={
        `card${isFeatured ? ' card--featured' : ''}${className ? ' ' + className : ''}`
      }
    >
      {children}
    </div>
  )
}
