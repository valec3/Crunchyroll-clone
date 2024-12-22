const ThumbsSlider = ({ currentIdx = 0 }) => {
    return (
        <div className="bg-blue-400 h-4 w-40">
            {Array.from({ length: 5 }).map((_, idx) => (
                <div
                    key={idx}
                    className={`w-16 h-4  ${
                        currentIdx === idx ? 'bg-white' : 'bg-gray-500'
                    }`}
                >
                    -
                </div>
            ))}
        </div>
    );
};

export default ThumbsSlider;
