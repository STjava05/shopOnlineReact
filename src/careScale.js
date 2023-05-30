
const quantityLabel = {
	1: 'little',
	2: 'moderate',
	3: 'much'
}


function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? '☀️' : '💧'

    
    return (
        <div onClick={() => alert(
            `This plant requires ${quantityLabel[scaleValue]} ${
                careType === 'light' ? 'light' : "watering"
            }`
        )}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null)}
        </div>
    )
}

export default CareScale;