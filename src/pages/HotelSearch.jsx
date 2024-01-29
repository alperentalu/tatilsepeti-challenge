import React from 'react'
import HotelCard from '../components/HotelCard'
const sortTypes = [{ label: 'a' }, { label: 'b' },{ label: 'b' },{ label: 'b' }]
function HotelSearch() {
    return (
        //media screen width
        <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', alignItems:'center' }}>
            <div style={{ width: '100vw'}}>
                <img style={{width: '100vw'}} src="./navbar.png" alt="" />
            </div>
            <div style={window.innerWidth > 1500 ? { display: 'flex', flexDirection: 'row', width: '60vw', } : { display: 'flex', flexDirection: 'row', width: '80vw', }}>
                <div style={{ width: '15vw', minHeight: '100vh'}}>
                    <img style={{ width: '15vw', minHeight: '100vh'}} src="./sidebar.png" alt="" />
                </div>
                <div style={{ flex: 1,display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                    <div style={{ alignSelf: 'flex-start' }}>
                        <div>Antalya Tatilleri</div>
                        <div>açıklama</div>
                    </div>
                    <div style={{ minWidth: '100%',display: 'flex', flexDirection: 'row'}}>
                            {sortTypes.map((type) => {
                                return  <div style={{ width: '25%', textAlign: 'center'}}>{type.label}</div>
                            })}
                        
                    </div>
                    <div style={{ minWidth: '100%'}}>
                        <HotelCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelSearch