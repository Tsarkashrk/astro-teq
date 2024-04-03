'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import Modal from '../Modal/Modal'

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="drop-down" onClick={toggleModal}>
      <button className="drop-down__button">
        <p className="drop-down__text">Каталог</p>
        {isOpen ? <ChevronUp strokeWidth={2} /> : <ChevronDown strokeWidth={2} />}
      </button>
      <div className="drop-down__modal">{isOpen && <Modal />}</div>
    </div>
  )
}

export default DropDown
