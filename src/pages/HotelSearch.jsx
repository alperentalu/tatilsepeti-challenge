import React, { useState, useEffect } from 'react'
import '../styles/hotelsearch.scss'
import HotelCard from '../components/HotelCard'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
const sortTypes = [{ label: 'En Popüler' }, { label: 'Fiyata Göre Artan' }, { label: 'Fiyata Göre Azalan' }, { label: 'Misafir Puanı' }]
function HotelSearch() {
    const [hotels, setHotels] = useState(null)
    const [selectedSortType, setSelectedSortType] = useState(0)
    const [hotelsIsReady, setHotelsIsReady] = useState(false)

    useEffect(() => {
        getHotels()
    }, [])
    const getHotels = async () => {
        axios.get('./hotels.json').then((res) => {
            setHotels(res.data.resultObject.hotelList)
            setTimeout(() => {
                setHotelsIsReady(true)
            },1000)
        }).catch((err) => {
            console.log(err)
        })
    }
    const sortTypesOnChange = (idx) => {
        setHotelsIsReady(false)
        let sortingHotels = [...hotels]
        if (idx === 1) {
            sortingHotels = hotels.sort((a, b) => a.discountPrice - b.discountPrice)
        } else if (idx === 2) {
            sortingHotels = hotels.sort((a, b) => b.discountPrice - a.discountPrice)
        } else {
            sortingHotels = hotels.sort((a, b) => b.customerScore - a.customerScore)

        }
        setSelectedSortType(idx)
        setHotels(sortingHotels)
        setTimeout(() => {
            setHotelsIsReady(true)
        },1000)
    }
    return (
        <>
            {hotels && <div className='hotel-search-main'>
                <div style={{ width: '100vw' }}>
                    <img style={{ width: '100vw' }} src="./navbar.png" alt="" />
                </div>
                <div className={window.innerWidth > 1500 ? 'large-screen-container' : 'normal-screen-container'}>
                    <div style={{ width: '15vw', minHeight: '100vh' }}>
                        <img style={{ width: '15vw', minHeight: '100vh' }} src="./sidebar.png" alt="" />
                    </div>
                    <div className="content-wrapper">
                        <div className="header">
                            <div className="header-info">
                                <span className="title">Antalya Otelleri</span>
                                <span className="subtitle">
                                    2 Yetişkin - 30.01.2024 ile 03.02.2024 tarihleri arasında Antalya otelleri araması için {hotels.length} otel bulunmuştur.
                                </span>
                            </div>
                            <div className="map-icon">
                                <img src="./map.png" alt="map" />
                            </div>
                        </div>
                        <div className="sort-section">
                            {sortTypes.map((type, idx) => (
                                <div onClick={() => sortTypesOnChange(idx)} key={idx} className={`sort-type ${idx === selectedSortType ? 'selected' : ''}`}>
                                    {type.label}
                                </div>
                            ))}
                        </div>
                        <div className="hotel-card-section">
                            {hotelsIsReady ?
                                <HotelCard hotels={hotels} />
                                :
                                <div>
                                    <div>
                                        {[...Array(3)].map((_, index) => (
                                            <div key={index} className="hotel-item">
                                                <div className="header">
                                                    <Skeleton width={200} height={20} />
                                                    <Skeleton width={100} height={20} style={{ marginLeft: '5px' }} />
                                                </div>
                                                <div className="content">
                                                    <div className="image-container">
                                                        <Skeleton width={256} height={150} />
                                                    </div>
                                                    <div className="info">
                                                        <div className="location">
                                                            <Skeleton width={150} height={20} />
                                                        </div>
                                                        <Skeleton width={150} height={20} style={{ marginTop: '5px' }} />
                                                        <div className="property-list">
                                                            {[...Array(3)].map((_, index) => (
                                                                <Skeleton key={index} width={100} height={15} style={{ margin: '5px' }} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="pricing">
                                                        <Skeleton width={100} height={20} />
                                                        <Skeleton width={100} height={20} style={{ marginTop: '5px' }} />
                                                        <Skeleton width={100} height={20} style={{ marginTop: '5px' }} />
                                                        <Skeleton width={100} height={20} style={{ marginTop: '5px' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default HotelSearch