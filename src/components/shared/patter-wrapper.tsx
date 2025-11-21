import { cn } from '@/lib/utils'
import React from 'react'

type DiagonalPosition = 'left' | 'right'
type BorderPosition = 'top' | 'bottom'
type StripeSide = 'first' | 'second'

// Reusable diagonal stripe pattern
const STRIPE_PATTERN_CLASSES =
  'bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed'

interface WrapperProps {
  className?: string
  children: React.ReactNode
  position?: DiagonalPosition
}

const DiagonalPatternWrapper: React.FC<WrapperProps> = ({
  children,
  className,
  position = 'left',
}) => {
  const baseClasses = cn(
    'relative min-h-dvh',
    '[--pattern-fg:var(--color-gray-950)]/5',
    'dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10',
    'grid grid-cols-1 sm:grid-cols-[4.5rem_2.5rem_auto_2.5rem_4.5rem]',
    'grid-rows-[1fr_1px_auto_1px_1fr]',
    className
  )

  return (
    <div className={baseClasses}>
      <DiagonalChildren>{children}</DiagonalChildren>
      <DiagonalStripes position={position} side="first" />
      <DiagonalStripes position={position} side="second" />
      {/* Borders are commented out but available for use */}
      {/* <DiagonalBorder position="top" />
      <DiagonalBorder position="bottom" /> */}
    </div>
  )
}

interface ChildrenProps {
  children: React.ReactNode
  className?: string
}

const DiagonalChildren: React.FC<ChildrenProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'col-start-1 row-start-3 sm:col-start-3',
        'flex max-w-full flex-col',
        className
      )}
    >
      {children}
    </div>
  )
}

interface StripesProps {
  position?: DiagonalPosition
  side?: StripeSide
  children?: React.ReactNode
  className?: string
}

/**
 * Renders diagonal striped patterns on the left or right side of the layout.
 * Can be used in pairs to create multiple stripe columns.
 */
const DiagonalStripes: React.FC<StripesProps> = ({
  position = 'left',
  side = 'first',
  children,
  className,
}) => {
  const getPositionClasses = () => {
    // For left position: first stripe is on col-2, second on col-4
    // For right position: first stripe is on col-4, second on col-2
    const isLeft = position === 'left'
    const isFirstSide = side === 'first'

    if (isLeft && isFirstSide) {
      return '-right-px col-start-2 row-span-full row-start-1 border-x'
    }

    if (isLeft && !isFirstSide) {
      return '-left-px col-start-4 row-span-full row-start-1 border-x'
    }

    if (!isLeft && isFirstSide) {
      return '-left-px col-start-4 row-span-full row-start-1 border-x'
    }

    return '-right-px col-start-2 row-span-full row-start-1 border-x'
  }

  return (
    <div
      className={cn(
        'relative hidden border-x-(--pattern-fg) sm:block',
        getPositionClasses(),
        STRIPE_PATTERN_CLASSES,
        className
      )}
    >
      {children}
    </div>
  )
}

interface BorderProps {
  position?: BorderPosition
  className?: string
}

/**
 * Renders horizontal borders at the top or bottom of the layout
 */
const DiagonalBorder: React.FC<BorderProps> = ({ position = 'bottom', className }) => {
  const borderClasses =
    position === 'bottom'
      ? '-bottom-px row-start-2 relative col-span-full bg-red-500 col-start-1 h-px'
      : '-top-px col-span-full col-start-1 row-start-4 h-px'

  return <div className={cn('bg-(--pattern-fg)', borderClasses, className)} />
}

// Export as a namespace object for cleaner imports
export const DiagonalPattern = {
  DiagonalPatternWrapper,
  DiagonalChildren,
  DiagonalStripes,
  DiagonalBorder,
}
