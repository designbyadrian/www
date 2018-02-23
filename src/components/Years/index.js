import React from 'react'

export default (props) => {
  const date = new Date();
  const years = date.getFullYear() - parseInt(props.since, 10);

  return (
    <span>{years}</span>
  )
}
