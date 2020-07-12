import { useEffect, useRef } from "react"
import PropTypes from "prop-types"

const ScrollCheck = ({ onChange, scrollY }) => {
  const scrollRef = useRef()

  useEffect(() => {
    if (scrollRef.current > scrollY) {
      onChange(true)
    } else if (scrollRef.current < scrollY) {
      onChange(false)
    }
    scrollRef.current = scrollY
  }, [scrollY])

  useEffect(() => {
    scrollRef.current = scrollY
  }, [])

  return null
}

ScrollCheck.deefaultProps = {
  scrollY: 0,
}

ScrollCheck.propTypes = {
  onChange: PropTypes.func.isRequired,
  scrollY: PropTypes.number,
}

export default ScrollCheck
