import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const CharacterCardSkeleton = () => {
  return (
    <div>
      <Skeleton
        height={"225px"}
        width={"225px"}
      />
      <h2><Skeleton height={"25px"}/></h2>
      <p><Skeleton height={"25px"}/></p>
    </div>
  )
}


