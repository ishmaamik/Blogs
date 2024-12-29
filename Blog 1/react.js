const { useState } = React;

const Fruits = () => {
    const [fruit, setFruit] = useState('');
    const [fruits, setFruits] = useState(['mango', 'guava', 'apple', 'orange']);

    return (
        <div className="container">
            <ul id="fruits">
                {fruits.sort().map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <br />
            <input
                type="text"
                value={fruit}
                onChange={(e) => setFruit(e.target.value)}
            />
            <button onClick={() => setFruits([...fruits, fruit])}>Add Item</button>
        </div>
    );
};

ReactDOM.render(<Fruits />, document.getElementById('root'));
