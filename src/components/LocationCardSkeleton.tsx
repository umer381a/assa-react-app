import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const LocationCardSkeleton = () => {
  return (
    <div>
      <h1 className="text-overflow"><Skeleton height={"130px"} width={"370px"}/></h1>
    </div>
  )
}


