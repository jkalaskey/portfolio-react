const Button = ({ children, className = '', ...props }) => {
    return (
      <button
        className={`
          bg-btn-ghost bg-no-repeat bg-[length:100%_100%]
          min-w-button
          text-fs-lg text-blue-600
          font-thinker-alt lh-base
          px-6 py-2
          transition-all duration-300
          hover:bg-btn-ghost-hover hover:text-neutral-100
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button; 