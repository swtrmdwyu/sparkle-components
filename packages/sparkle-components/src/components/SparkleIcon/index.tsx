interface SparkleIconsProps {
    fill?: string,
    size?: string
}

function  SparkleIcon ({ fill = "#0C1E22", size = "1rem" }: SparkleIconsProps) {
    return (
    <svg width={size} height={size} viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.52 47.58C27.9714 42.489 30.7076 37.8569 34.4657 34.1285C38.2239 30.4001 42.8777 27.7008 47.98 26.29L51.2 25.4L47.98 24.51C42.8777 23.0992 38.2239 20.3999 34.4657 16.6715C30.7076 12.9431 27.9714 8.31096 26.52 3.22L25.6 0L24.68 3.22C23.2286 8.31096 20.4924 12.9431 16.7343 16.6715C12.9761 20.3999 8.32234 23.0992 3.22 24.51L0 25.4L3.22 26.29C8.32234 27.7008 12.9761 30.4001 16.7343 34.1285C20.4924 37.8569 23.2286 42.489 24.68 47.58L25.6 50.8L26.52 47.58Z" fill={fill}/>
    </svg>
    );
}

export default SparkleIcon;