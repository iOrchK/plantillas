import React from "react";

// npm i react-images-viewer

const ImagesViewerCustom = ({ imgs, open, setOpen, ...others }) => {
  const [sources, setSources] = React.useState([]);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (imgs?.length > 0) {
      setSources(imgs);
    }
  }, []);

  const handleOnClose = () => {
    setOpen(false);
  };

  const handleOnClickNext = () => {
    if (index < sources?.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleOnClickPrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleOnClickThumbnail = (val) => {
    setIndex(val);
  };

  const handleOnClickImg = () => {
    if (index === sources?.length - 1) {
      setIndex(0);
    } else {
      handleOnClickNext();
    }
  };

  return (
    <ImgsViewer
      isOpen={open}
      imgs={sources}
      currImg={index}
      showThumbnails={true}
      backdropCloseable={false}
      onClose={handleOnClose}
      onClickNext={handleOnClickNext}
      onClickPrev={handleOnClickPrev}
      onClickImg={handleOnClickImg}
      onClickThumbnail={handleOnClickThumbnail}
      {...others}
    />
  );
};

export default ImagesViewerCustom;
