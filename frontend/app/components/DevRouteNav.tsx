'use client'

import Link from 'next/link'
import { useState } from 'react'

const ROUTES = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/academics', label: 'Academics' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/alumni', label: 'Alumni' },
  { path: '/athletics', label: 'Athletics' },
  { path: '/clubs', label: 'Clubs' },
  { path: '/early-education', label: 'Early Education' },
  { path: '/elementary-school', label: 'Elementary School' },
  { path: '/family-home', label: 'Family Home' },
  { path: '/middle-school', label: 'Middle School' },
  { path: '/student-life', label: 'Student Life' },
  { path: '/support-orls', label: 'Support ORLS' },
  { path: '/tuition', label: 'Tuition' },
  { path: '/events/[slug]', label: 'Event (dynamic)', dynamic: true },
  { path: '[slug]', label: 'Page (dynamic)', dynamic: true },
] as const

export default function DevRouteNav() {
  const [isOpen, setIsOpen] = useState(false)

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed top-3 left-3 z-9998 flex items-center justify-center w-9 h-9 rounded-md bg-dark-blue text-white text-xs font-medium shadow-lg hover:bg-medium-blue transition-colors"
        title="Dev routes"
        aria-label="Open dev route navigation"
      >
        📍
      </button>

      {isOpen && (
        <>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsOpen(false)}
            onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false)}
            className="fixed inset-0 z-9997 bg-black/50"
            aria-label="Close modal"
          />
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-9999 w-full max-w-md max-h-[80vh] overflow-hidden rounded-lg bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-gray-200">
              <h2 className="text-sm font-semibold text-gray-900">Dev Routes</h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto p-4">
              <ul className="flex flex-col gap-0.5">
                {ROUTES.map((route) =>
                  ('dynamic' in route && route.dynamic) ? (
                    <li key={route.path} className="text-sm text-gray-500 py-2 px-3">
                      <span className="font-mono">{route.path}</span>
                      <span className="ml-2">— {route.label}</span>
                    </li>
                  ) : (
                    <li key={route.path}>
                      <Link
                        href={route.path}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 px-3 rounded hover:bg-light-blue text-dark-blue font-medium text-sm transition-colors"
                      >
                        {route.label}
                        <span className="ml-2 text-gray-400 font-mono text-xs">{route.path}</span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  )
}
