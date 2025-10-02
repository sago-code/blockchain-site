import { Swiper, SwiperSlide } from 'swiper/react';

export default function SliderHome() {
  return (
    <div className="container my-4">
      <Swiper spaceBetween={16} slidesPerView={1} loop>
        <SwiperSlide>
          <div className="p-5 bg-dark text-white rounded-3">
            <h2 className="fw-bold">Blockchain, seguridad y transparencia</h2>
            <p className="mb-0">Registros inmutables para datos y transacciones.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5 bg-primary text-white rounded-3">
            <h2 className="fw-bold">Smart Contracts</h2>
            <p className="mb-0">Automatiza reglas de negocio con confianza.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5 bg-secondary text-white rounded-3">
            <h2 className="fw-bold">Casos de uso</h2>
            <p className="mb-0">Finanzas, supply chain, identidad, NFTs y más.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
