import React from 'react'
import '../styles/hotelcard.scss'

function HotelCard({hotels}) {

    return (
        <div className="hotel-list">
            {hotels && (
                <div>
                    {hotels.map((hotel) => (
                        <div key={hotel.hotelId} className="hotel-item">
                            <div className="header">
                                <div className="hotel-name">{hotel.hotelName}</div>
                                <div className="rating">
                                    <div style={{ marginRight: '5px' }}>
                                        <div style={{ backgroundColor: 'transparent', alignSelf: 'flex-end' }} className={hotel.customersPointCssName.replace('score ', '')}>{hotel.customersPointText}</div>
                                        <div className="review-count">{hotel.reviewCount} değerlendirme</div>
                                    </div>
                                    <div className={hotel.customersPointCssName}>
                                        {hotel.customerScore}
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="image-container">
                                    <img width={256} src={hotel.photoPath} alt="hotel-photo" />
                                    {hotel.isHotelPrePaid && (
                                        <div className="prepaid-badge">Ön Ödeme Fırsatı</div>
                                    )}
                                    <div className="favorite-icon">
                                        {hotel.isFavourite ? (
                                            <img width={20} src='./heart-fill.png' alt="favorite" />
                                        ) : (
                                            <img width={20} src='./heart.png' alt="not-favorite" />
                                        )}
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="location">
                                        <span>{hotel?.areaName} {`${hotel.subAreaName ? '- ' + hotel?.subAreaName : ''}`} {`${hotel?.subAreaDetailName ? ' | ' + hotel?.subAreaDetailName : ''}`}</span>
                                        <div className="recommend-icon">
                                            {hotel.isRecommend && <img width={20} src='./like.png' alt='recommend-icon' />}
                                        </div>
                                    </div>
                                    <span className="campaign">{hotel?.campaignName}</span>
                                    <div className="property-list">
                                        {hotel?.hotelPropertyList.map((property, index) => (
                                            <div key={index} className="property">{property.name}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className="pricing">
                                    <div className="accommodation">{hotel.accommodation}</div>
                                    <div className="original-price">
                                        <span className="strike-through">{hotel.price.toLocaleString('tr-TR', {
                                            style: 'decimal',
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })}<span style={{ fontSize: '12px' }}>{" "}{hotel.currency}</span></span>
                                    </div>
                                    <div className="discounted-price">
                                        {hotel.discountPrice.toLocaleString('tr-TR', {
                                            style: 'decimal',
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })}<span style={{ fontSize: '12px' }}>{" "}{hotel.currency}</span>
                                    </div>
                                    <div className="details-button">Detayları Incele</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default HotelCard