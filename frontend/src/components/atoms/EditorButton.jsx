import React from 'react'

const EditorButton = ({isActive}) => {
  
  return (
   <button
      //onClick={handleClick}
      className={`
        outline-none
        text-sm
        h-7.5
        min-w-25
        px-1.75 py-0.75
        border-l-0 border-b-0
        ${isActive 
          ? 'bg-[#303242] text-white border-t-2 border-[#f7b9dd]' 
          : 'bg-[#4a4859] text-[#959eba] border-t-0'
        }
      `}
    >
      file.js
    </button>
  )
}

export default EditorButton