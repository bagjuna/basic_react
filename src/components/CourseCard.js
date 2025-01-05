import './CourseCard.css';

function CourseCard({
                        img,
                        tags,
                        title,
                        startPrice,
                        types
                    }) {
    return <div className="CourseCard">
        <div className="cover">
            <img alt=""
                 src={img}
            />
        </div>
        <div className="info">
            <ul className="tags">
                {tags.map((item, i) =>
                    <li key={i} className="tag">
                        {item}
                    </li>
                )}

            </ul>
            <h4 className="name">{title}</h4>
            <div className="prices">
                <span className="price">{startPrice.toLocaleString()}원 부터</span>
            </div>
            <ul className="types">
                {types.map((item, i) =>
                    <li key={i} className="type">
                        {types}
                    </li>
                )}

            </ul>

        </div>
    </div>;
}

export default CourseCard;
