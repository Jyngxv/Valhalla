import React, { useEffect } from 'react';
import '../App.css';
const Modal = ({ modalOption }) => {
  useEffect(() => {
    if (modalOption.show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalOption.show]);
  return (
    <div>
      {modalOption?.show && (
        <div className="z-[999]">
          <div className="overflow-y-hidden fixed top-0 left-0 z-[100] w-screen h-screen bg-black opacity-90" onClick={() => modalOption.onClose()}></div>
          <div className="fixed top-0 left-0 md:left-50% md:top-50% md:translate-x-[-50%] md:translate-y-[-50%] shadow-2xl z-[999] w-full h-screen md:w-80% lg:w-768 xl:w-960 md:h-auto overflow-y-hidden">
            <div className="relative flex flex-row">
              <div className="h-screen px-32 py-32 overflow-y-scroll md:h-auto rounded-16 md:rounded-none lg:px-72 gradient_01 basis-full md:px-48 md:py-48 lg:py-72 md:basis-full md:overflow-y-auto">
                <p className="mb-24 text-4xl font-bold md:text-6xl lg:text-7xl xl:text-3xl linear-wipe-5 font-Jakarta lg:mb-24 md:mb-24">
                  Algorithm Technology
                </p>
                <div className="overflow-y-scroll">
                  <p className="mb-32 text-base font-medium text-white md:text-md1">{modalOption?.title}</p>
                  {modalOption.element}
                </div>
                <div className="flex">
                  <div>
                    <ul>
                      <li>
                        <img className="mr-32 opacity-50 md:mr-40 pacity-50 h-36 md:h-64 xl:h-56 hover:opacity-100" src="img/logo-snu.png" alt="" />
                      </li>
                      <li>
                        <img className="mr-32 opacity-50 md:mr-40 h-36 md:h-64 xl:h-56 hover:opacity-100" src="img/logo-aafco.png" alt="" />
                      </li>
                      {/* <li>
                  <img className="mr-32 opacity-50 md:mr-40 h-36 md:h-64 xl:h-56 hover:opacity-100" src="img/logo-fediaf.png" alt="" />
                </li> */}
                      <li>
                        <img className="opacity-50 h-36 md:h-64 xl:h-56 hover:opacity-100" src="img/logo-nrc.png" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute text-white right-32 top-32 font-Oswald">
                <button className="" onClick={() => modalOption.onClose()}>
                  <img className="w-24 h-24 xl:h-32 xl:w-32 lg:w-24 lg:h-24" src="img/close.png" alt=""></img>
                </button>
              </div>
            </div>

            {/* <button
                className="w-100% py-16 text-center bg-secondary rounded-12 font-bold text-white text-sm2 hover:bg-[#1c51ff]"
                onClick={() => modalOption.onSubmit()}
              >
                확인
              </button> */}
            {/* <button className="" onClick={() => modalOption.onClose()}>
                닫기
              </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
