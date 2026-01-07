import React from 'react'

export default function Footer(){
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-6 sm:py-8 text-center text-sm sm:text-base text-gray-200 border-t border-white/15 mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div>© {currentYear} Designed and Built by Nischal Thapa </div>
      </div>
    </footer>
  )
}
