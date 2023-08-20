export default function RecommendationSelection() {
    return(
        <div className="recommendation">
            <h1>Recommendation</h1>
            <p>Pick one from each row</p>
        <ul>
            <h3>Cuisine</h3>
                <ul className="options">
                    <li>American</li>
                    <li>Chinese</li>
                    <li>Italian</li>
                    <li>Middle Eastern</li>
                    <li>Fast Food</li>
                </ul>
            <h3>Protein</h3>
                <ul className="options">
                    <li>Meat</li>
                    <li>Chicken</li>
                </ul>
            <h3>Location</h3>    
                <ul className="options">
                    <li>Baker Street</li>
                    <li>Leicester Square</li>
                    <li>London Bridge</li>
                    <li>China Town</li>
                    <li>Camden Market</li>
                </ul>
        </ul>
        </div>
    ) 
}