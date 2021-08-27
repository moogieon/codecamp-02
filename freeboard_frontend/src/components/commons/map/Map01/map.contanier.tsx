import { useState } from "react";
import { useEffect } from "react";
import KakaomapUI from "./map.presenter";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function Kakaomap(props: any) {
  console.log(props.lating);
  const [isWrite, setIsWrite] = useState(false);
  useEffect(() => {
    if (!(props.lating.lat && props.lating.lang)) return;
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=c8480d9609c41ac301d9f65c12de9e24&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            props.lating?.lat,
            props.lating?.lang
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          props.lating?.lat,
          props.lating?.lang
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        // const infowindow = new kakao.maps.InfoWindow({ zindex: 1 });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
            props.setLating({ lat: latlng.Ma, lang: latlng.La });
            console.log(latlng);

            // const message = latlng.getLat();

            // latlng.getLng();

            // console.log(message);
            //   var resultDiv = document.getElementById("clickLatlng");
            //   resultDiv.innerHTML = message;
          }
        );
      });
    };
  }, [props.lating.lat, props.lating.lang]);

  return <KakaomapUI />;
}
