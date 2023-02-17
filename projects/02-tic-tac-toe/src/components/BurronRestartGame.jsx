export const ButtonRestart = ({ children, functionAction }) => {
  
    return( 
      <button onClick={functionAction}>
        {children}
      </button>
    )
};
