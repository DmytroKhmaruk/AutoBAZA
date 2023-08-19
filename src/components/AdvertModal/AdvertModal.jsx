import { ModalOverlay, ModalContent } from './StyledAdvertModal';

function AdvertModal({ advert, onClose }) {
    console.log('Advert data:', advert);
    return (
        <ModalOverlay>
            <ModalContent>
                <button onClick={onClose}>x</button>
                <img src={advert.img} alt={`${advert.make} ${advert.model}`} />
                            <h2>{advert.make} {advert.model} {advert.year}</h2>
                            <p>{advert.rentalPrice}</p>
            </ModalContent>
        </ModalOverlay>
    )
}

export default AdvertModal;