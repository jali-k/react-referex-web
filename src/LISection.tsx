import React, { useEffect, useState } from "react";

interface Props {
  BFColorClass: string; // Background forground color class
  imageUrl: string;
  imageWidth: string;
  imageHeight: string;
  pharagraphLayoutClass: string; // The section pharagraph padding
  pharagraphFontClass: string;
  pharagraphText: string;
  pharagraphFontSizeNLineheightClass: string;
}

const LISection = ({
  BFColorClass,
  imageUrl,
  imageWidth,
  imageHeight,
  pharagraphLayoutClass,
  pharagraphFontClass,
  pharagraphText,
  pharagraphFontSizeNLineheightClass,
}: Props) => {
  // Left image
  const [paddingclass, setPaddingClass] = useState("left-image-padding");

  useEffect(() => {
    if (window.innerWidth >= 1400) {
      setPaddingClass("left-image-padding");
    } else {
      setPaddingClass("padding-for-small");
    }
  }, [paddingclass]);

  const imageClasss = paddingclass + " col-xxl-6 text-center";
  console.log(imageClasss);

  return (
    <div className={"container-fluid " + BFColorClass}>
      {/* Bottom */}
      <div className="row">
        <div className={imageClasss}>
          <img src={imageUrl} width={imageWidth} height={imageHeight} alt="" />
        </div>
        <div className={pharagraphLayoutClass + " col-xxl-6"}>
          <h1 className="text-start line-height-3 outfit-bold">
            How Our Course Empowers You For Growth?
          </h1>
          <p
            className={
              "text-start " +
              pharagraphFontSizeNLineheightClass +
              pharagraphFontClass
            }
          >
            {pharagraphText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LISection;
