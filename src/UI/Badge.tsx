import {MouseEventHandler} from "react"
import { ReactComponent as Remove } from "../assets/images/icon-remove.svg"

type BadgeProps = {
  variant?: "basic" | "clearable" | "rounded"
  colorScheme?: "light" | "primary" | "dark"
  children: React.ReactNode
  onClear?: MouseEventHandler
  onClick?: MouseEventHandler
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "basic",
  colorScheme = "light",
  children,
  onClear,
  onClick,
}) => {
  return (
    <div
      className={`badge badge--${variant} badge--${colorScheme}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {variant === "clearable" && (
        <div className="badge-remover" onClick={onClear}>
          <Remove />
        </div>
      )}
    </div>
  )
}
