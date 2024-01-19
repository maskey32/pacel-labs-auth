const Button = ({ onClick, text }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="outline_btn hover:bg-black hover:text-white"
        >
            {text}
        </button>
    );
};

export default Button;