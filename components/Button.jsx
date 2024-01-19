const Button = ({ onClick, text, type }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="outline_btn hover:bg-black hover:text-white"
        >
            {text}
        </button>
    );
};

export default Button;