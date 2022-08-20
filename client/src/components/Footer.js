export const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by <span className="has-text-info">Thamer Hamdi</span></p>
    )
  }
  
  const FooterStyle = {
    background: "#fff",
    fontSize: ".9rem",
    color:"#222" ,
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".6"
  }