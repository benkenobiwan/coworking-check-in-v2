import Link from 'next/link'

const Button = ({ href, children, style, className }) => {
  const commonStyles =
    'text-[var(--accent)] font-bold rounded-lg text-3xl text-center flex items-center justify-center transition-all p-2 shadow-md hover:shadow-lg'

  const styleVariants = {
    blue: 'bg-[hsl(163,30%,60%)] hover:bg-[hsl(163,26%,50%)]',
    brown: 'bg-[hsl(22,50%,60%)] hover:bg-[hsl(22,50%,52%)]',
    orange: 'bg-[hsl(29,59%,60%)] hover:bg-[hsl(29,59%,52%)]',
  }

  const styleClasses = style ? styleVariants[style] : styleVariants['blue']

  const buttonStyle = `${commonStyles} ${styleClasses} ${className}`

  return (
    <Link href={href} className={buttonStyle}>
      {children}
    </Link>
  )
}

export default Button
