import PropTypes from "prop-types"

type StackProps = {
  children: React.ReactNode
  pos?: string
}

export const Stack: React.FC<StackProps> = ({ children, pos }) => {
  return (
    <div
      className="stack"
      style={{
        justifyContent: pos === "center" ? "center" : `flex-${pos}`,
      }}
    >
      {children}
    </div>
  )
}

Stack.propTypes = {
  children: PropTypes.node.isRequired,
}
