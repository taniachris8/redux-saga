export function Error() { 
    return (<>
        <div className="error-container">
            <div className="error-message">Произошла ошибка!</div>
            <button className="error-btn">Повторить запрос</button>
        </div>
    </>)
}