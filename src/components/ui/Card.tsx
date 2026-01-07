import React from 'react'

export default function Card({ children, className = '' }: { children: React.ReactNode, className?: string }){
  return (
    <div className={`bg-white/12 border border-white/25 rounded-xl p-4 shadow-card-md ${className}`}>{children}</div>
  )
}
