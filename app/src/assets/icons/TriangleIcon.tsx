const TriangleIcon = ({
    className = '',
    ...props
}: React.SVGProps<SVGSVGElement>) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-t="dropdown-svg"
        aria-labelledby="dropdown-svg"
        aria-hidden="true"
        color="white"
    >
        <title id="dropdown-svg">Menú desplegable</title>
        <path fill="#fff" color="#fff" d="M7 10h10l-5 5z"></path>
    </svg>
);
export default TriangleIcon;
