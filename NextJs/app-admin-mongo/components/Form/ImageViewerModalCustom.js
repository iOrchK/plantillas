import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

// npm i react-images
// Otra opción: npm i react-responsive-carousel, http://react-responsive-carousel.js.org/

const ImageViewerModalCustom = ({ open, setOpen, views }) => {
  const toggleViewer = () => {
    setOpen(false);
  };

  return (
    <ModalGateway>
      {open ? (
        <Modal onClose={toggleViewer}>
          <Carousel views={views} />
        </Modal>
      ) : null}
    </ModalGateway>
  );
};

export default ImageViewerModalCustom;
