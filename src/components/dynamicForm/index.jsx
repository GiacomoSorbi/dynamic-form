import React, { useState } from 'react'
import './DynamicForm.css'
import Button from '../button'

const DynamicForm = ({
  items = [],
  constantSubmit,
  displayOnlyLast,
  onSubmit,
}) => {
  const [currentItem, setCurrentItem] = useState(0)
  const [formInfo, setFormInfo] = useState({})
  const moveToPrev = () => setCurrentItem(currentItem - 1)
  const moveToNext = () => setCurrentItem(currentItem + 1)
  const onChangeFormInfo = event => {
    if (constantSubmit) {
      setFormInfo({ ...formInfo, [event.target.id]: event.target.value })
      return
    }
    setFormInfo({ ...formInfo, [event.target.id]: event.target.value })
  }
  const formSubmit = event => {
    event.preventDefault()
    console.log(event.target, event.target.value, formInfo)
    onSubmit()
  }

  return (
    <form className='form-container' onSubmit={formSubmit}>
      {items.map((item, i) => (
        <input
          key={item.id}
          id={item.id}
          className={`form-item${
            (displayOnlyLast && currentItem === i) || currentItem >= i
              ? ' active'
              : ''
          }`}
          onChange={onChangeFormInfo}
        />
      ))}
      {displayOnlyLast ? (
        <div className='form-options'>
          <Button onClick={moveToPrev} disabled={!currentItem}>
            Prev
          </Button>
          <Button
            onClick={currentItem === items.length - 1 ? formSubmit : moveToNext}
          >
            {currentItem === items.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </div>
      ) : (
        currentItem === items.length && (
          <Button onClick={formSubmit}>Submit</Button>
        )
      )}
    </form>
  )
}

export default DynamicForm
