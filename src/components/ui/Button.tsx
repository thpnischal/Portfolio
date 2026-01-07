import React from 'react'
import { motion } from 'framer-motion'

type ButtonProps = {
  variant?: 'primary' | 'outline'
  as?: 'button' | 'a'
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function Button({ variant = 'primary', className = '', children, as = 'button', ...rest }: ButtonProps){
  const base = 'px-4 py-2 rounded-lg font-semibold focus:outline-none focus:ring-3 transition-all duration-200'
  const styles = variant === 'primary'
    ? 'bg-orange-500 text-black hover:bg-orange-600'
    : 'bg-transparent border border-white/8 text-gray-200 hover:text-orange-400 hover:border-orange-400/50'

  if (as === 'a'){
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${base} ${styles} ${className} inline-block`}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles} ${className}`}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </motion.button>
  )
}
