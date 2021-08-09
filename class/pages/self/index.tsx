import styled from "@emotion/styled";
export const Swiper = styled.div`
  width: 500px;
  height: 300px;
  overflow: hidden;
  display: flex;
`;
export const Slick = styled.img`
  background-size: 100%;
`;
export default function SelfPage() {
  return (
    <>
      <Swiper>
        <Slick src="/homework-image/ic-40-kakao.png" />
        <Slick src="/homework-image/rectangle@3x.png" />
        <Slick src="/homework-image/rectangle@3x.png" />
      </Swiper>
    </>
  );
}
