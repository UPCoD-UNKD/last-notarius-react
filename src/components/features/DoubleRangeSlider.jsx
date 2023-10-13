import React, { useState, useEffect, useRef } from "react";

const DoubleRangeSlider = () => {
  const sliderRef = useRef(null);
  const minValueRef = useRef(null);
  const maxValueRef = useRef(null);
  const minValueDragRef = useRef(null);
  const maxValueDragRef = useRef(null);
 

  const [sliderWidth, setSliderWidth] = useState(0);
  const [offsetSliderWidth, setOffsetSliderWidth] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(200);
  const [minValueBetween] = useState(10);
  const [currentMin, setCurrentMin] = useState(55);
  const [inputMin, setInputMin] = useState(55);
  const [currentMax, setCurrentMax] = useState(100);
  const [inputMax, setInputMax] = useState(100);
 

  const maxForMin = () => currentMax - minValueBetween;
  const minForMax = () => currentMin + minValueBetween;

  const handleSetMin = (e) => {
    const inputMin = e.target.value;
    setInputMin(inputMin);

    if (inputMin >= min && inputMin <= currentMax - minValueBetween) {
      setCurrentMin(parseInt(inputMin));
      minValueRef.current.style.width = `${(inputMin * 100) / max}%`;
    }
  };

  const handleMinValueChange = (e) => {
    e.preventDefault();

    document.addEventListener("mousemove", handleMouseMoveMin);
    document.addEventListener("mouseup", handleMouseUpMin);

    document.addEventListener("touchmove", handleMouseMoveMin);
    document.addEventListener("touchend", handleMouseUpMin);
  };

  const handleMouseMoveMin = (e) => {
    const dragedWidth = e.clientX - offsetSliderWidth;
    const dragedWidthInPercent = (dragedWidth * 100) / sliderWidth;
    const newCurrentMin = parseInt((max * dragedWidthInPercent) / 100);

    if (newCurrentMin >= min && newCurrentMin <= currentMax - minValueBetween) {
      minValueRef.current.style.width = `${dragedWidthInPercent}%`;
      minValueRef.current.dataset.content = newCurrentMin;

      setCurrentMin(newCurrentMin);
      setInputMin(newCurrentMin);
    }
  };

  const handleMouseUpMin = () => {
    document.removeEventListener("mouseup", handleMouseUpMin);
    document.removeEventListener("mousemove", handleMouseMoveMin);

    document.removeEventListener("touchend", handleMouseUpMin);
    document.removeEventListener("touchmove", handleMouseMoveMin);
  };

  const handleSetMax = (e) => {
    const inputMax = e.target.value;
    setInputMax(inputMax);

    if (inputMax >= currentMin + minValueBetween && inputMax <= max) {
      setCurrentMax(parseInt(inputMax));
      maxValueRef.current.style.width = `${(inputMax * 100) / max}%`;
    }
  };

  const handleMaxValueChange = (e) => {
    e.preventDefault();

    document.addEventListener("mousemove", handleMouseMoveMax);
    document.addEventListener("mouseup", handleMouseUpMax);

    document.addEventListener("touchmove", handleMouseMoveMax);
    document.addEventListener("touchend", handleMouseUpMax);
  };

  const handleMouseMoveMax = (e) => {
    const dragedWidth = e.clientX - offsetSliderWidth;
    const dragedWidthInPercent = (dragedWidth * 100) / sliderWidth;
    const newCurrentMax = Math.abs(parseInt((max * dragedWidthInPercent) / 100));

    if (
      newCurrentMax >= currentMin + minValueBetween &&
      newCurrentMax <= max
    ) {
      maxValueRef.current.style.width = `${dragedWidthInPercent}%`;
      maxValueRef.current.dataset.content = newCurrentMax;
      setCurrentMax(newCurrentMax);
      setInputMax(newCurrentMax);
    }
  };

  const handleMouseUpMax = () => {
    document.removeEventListener("mouseup", handleMouseUpMax);
    document.removeEventListener("mousemove", handleMouseMoveMax);

    document.removeEventListener("touchend", handleMouseUpMax);
    document.removeEventListener("touchmove", handleMouseMoveMax);
  };

  useEffect(() => {
    // const { currentMin, currentMax, max } = this.state;

    minValueRef.current.style.width = `${(currentMin * 100) / max}%`;
    maxValueRef.current.style.width = `${(currentMax * 100) / max}%`;

    setSliderWidth(sliderRef.current.offsetWidth);
    setOffsetSliderWidth(sliderRef.current.offsetLeft);
  }, [currentMin, currentMax, max]);

  return (
    <div className="card flex flex-col justify-center items-center p-[50px] pt-[25px] mt-[40px] rounded-[20px] shadow-lg bg-slate-200  overflow-hidden ">
      <h2>Double range slider</h2>
      <div className="current-value w-full">
        <label htmlFor="min-input">Min: </label>
        <input
        class="m-0 max-w-[40px] mb-[5px] font-[16px] text-white p-[5px] pl-[15px] w-20 border-none rounded-[20px] bg-sky-900 "
          id="min-input"
          type="number"
          onChange={handleSetMin}
          value={inputMin}
          min={min}
          max={maxForMin()}
        />

        <br />
        <label htmlFor="max-input">Max: </label>
        <input
        class="m-0 max-w-[40px] mb-[5px] font-[16px] text-white p-[5px] pl-[15px] w-20 border-none rounded-[20px] bg-sky-900"
          id="max-input"
          type="number"
          onChange={handleSetMax}
          value={inputMax}
          min={minForMax()}
          max={max}
        />
      </div>

      <div className="values flex justify-between font-semibold mt-[30px] mb-[10px] w-[200px]">
        <div>{min}</div>
        <div>{max}</div>
      </div>

      <div ref={sliderRef} id="slider" class=" relative mr-auto w-10 h-[5px] bg-black rounded-full cursor-pointer ">
        
        <div ref={minValueRef} id="min" data-content={currentMin}>
          <div
            ref={minValueDragRef}
            id="min-drag"
            onMouseDown={handleMinValueChange}
            onTouchStart={handleMinValueChange}
          ></div>
        </div>

        <div ref={maxValueRef} id="max" data-content={currentMax}>
          <div
            ref={maxValueDragRef}
            id="max-drag"
            onMouseDown={handleMaxValueChange}
            onTouchStart={handleMaxValueChange}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DoubleRangeSlider;