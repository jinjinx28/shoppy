export default function ProductAvatar({img}) {
console.log('img => ', img);

    return (
        <div className='product-avata'>
            <img src={img} alt="product-image" />
        </div>
    );
}

