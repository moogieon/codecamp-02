import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function LayoutFooterUI() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#171717;",
          height: "150px",
          fontSize: "11px",
          color: "#ffffffd0",
          whiteSpace: "pre-wrap",
          fontFamily: "ruda",
          padding: "20px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "14px", fontWeight: "bold", color: "grey" }}>
            대표{" "}
            <span
              style={{ fontSize: "14px", fontWeight: "normal", color: "white" }}
            >
              이창묵
            </span>
          </div>
          <div style={{ fontSize: "14px", fontWeight: "bold", color: "grey" }}>
            고객문의{" "}
            <span
              style={{ fontSize: "14px", fontWeight: "normal", color: "white" }}
            >
              moogieon817@google.com
            </span>
          </div>
        </div>
        <div>
          <div>No.1 앨범 마켓</div>
          <div
            style={{ fontSize: "24px", fontWeight: "bold", color: "#ffcc01" }}
          >
            SHOP
          </div>
        </div>
      </div>
    </>
  );
}
