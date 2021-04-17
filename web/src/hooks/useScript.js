import { useEffect } from 'react'

function useScript(script) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.async = true
      s.innerHTML = script
      document.head.appendChild(s)
      return () => {
        document.head.removeChild(s)
      }
    }
  }, [script])
}

export default useScript
