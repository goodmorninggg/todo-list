import React from 'react'

const Footer = () => {
  const footerStyle = {
    position: "absolute",
    top: "100vh",
    width: "100%"
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
        copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer
