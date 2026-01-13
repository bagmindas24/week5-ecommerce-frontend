const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = ''
}) => {
  const base =
    'px-4 py-2 rounded transition font-medium'

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    outline: 'border border-gray-300 hover:bg-gray-100'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
