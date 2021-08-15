import Head from "next/head";

import { Map } from "./map.style";

export default function KakaomapUI() {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c8480d9609c41ac301d9f65c12de9e24"
        ></script>
      </Head>
      <Map id="map"></Map>
    </>
  );
}
