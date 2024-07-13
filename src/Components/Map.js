// MapContainer.js
import React from "react";
import styled from "styled-components";
import KakaoMap from "./KakaoMap.js";

const MapContainer = () => {
  return (
    <MapWrapper>
      <KakaoMap />
    </MapWrapper>
  );
};

const MapWrapper = styled.div`
  width: 320px; /* 너비를 320px로 설정 */
  height: 230px;
  background-color: white; /* 임시 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0; /* 위 아래 15px씩 마진 */
  box-sizing: border-box; /* padding을 포함한 크기 설정 */
`;

export default MapContainer;
