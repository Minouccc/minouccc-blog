'use client'

import React, { useEffect, useRef, useCallback } from 'react'

interface ClickText {
  id: number
  text: string
  x: number
  y: number
  color: string
}

const ClickEffect: React.FC = () => {
  const [clickTexts, setClickTexts] = React.useState<ClickText[]>([])
  const nextId = useRef(0)

  const phrases = [
    'TypeScript!',
    'JavaScript!',
    'TailwindCSS!',
    'UnoCSS!',
    'Less!',
    'Sass!',
    'Shadcn UI!',
    'Radix UI!',
    'React!',
    'Vue2!',
    'Vue3!',
    'UmiJs!',
    'Ant Design Pro!',
    'Taro!',
    'Uni-app!',
    'Uni-best!',
    'Nodejs!',
    'Nestjs!',
    'Nuxt!',
    'Nextjs!',
    'MySQL!',
    'Redis!',
    'MongoDB!',
    'Prisma!',
    'TypeORM!',
    'Linux!',
    'Docker!',
    'Nginx!',
    'PM2!',
    'Amazon S3!',
    'Cloudfare!',
    'Canvas!',
    'Fabric.js!',
    'Echarts!',
  ]

  const handleClick = (event: MouseEvent) => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
    const randomColor = `hsl(${Math.random() * 360}, 50%, 50%)`

    const newText: ClickText = {
      id: nextId.current++,
      text: randomPhrase,
      x: event.pageX,
      y: event.pageY,
      color: randomColor,
    }

    setClickTexts((prev) => [...prev, newText])

    setTimeout(() => {
      setClickTexts((prev) => prev.filter((text) => text.id !== newText.id))
    }, 1000)
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [handleClick])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {clickTexts.map((text) => (
        <div
          key={text.id}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 animate-rise-fade whitespace-nowrap text-xl font-bold"
          style={{
            left: text.x,
            top: text.y,
            color: text.color,
          }}
        >
          {text.text}
        </div>
      ))}
    </div>
  )
}

export default ClickEffect
