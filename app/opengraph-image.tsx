import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #071120 0%, #0d1b2e 46%, #143157 100%)",
          color: "white",
          fontFamily: "Georgia, Times New Roman, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(5,10,22,0.88), rgba(8,16,31,0.62))",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "56px 58px",
            gap: "38px",
          }}
        >
          <div
            style={{
              width: "56%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#7ec8ff",
                }}
              >
                Digital Product Studio
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: 72,
                  lineHeight: 1.02,
                  fontWeight: 700,
                  color: "#f8fbff",
                }}
              >
                <span>My Tech</span>
                <span>Academia</span>
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 28,
                  lineHeight: 1.42,
                  maxWidth: 560,
                  color: "rgba(236, 244, 255, 0.92)",
                }}
              >
                Practical products for language learning, guided ecommerce, and
                AI-powered education.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "16px",
              }}
            >
              {[
                "WorkJapaneseGO",
                "ZayCho",
                "Tech Academia",
              ].map((label) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    padding: "14px 18px",
                    borderRadius: 999,
                    border: "1px solid rgba(174,209,255,0.18)",
                    background: "rgba(255,255,255,0.08)",
                    color: "#f5f9ff",
                    fontSize: 20,
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              width: "44%",
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                borderRadius: 34,
                border: "1px solid rgba(182,220,255,0.18)",
                background: "linear-gradient(180deg, rgba(22,36,70,0.96), rgba(10,18,35,0.92))",
                boxShadow: "0 28px 80px rgba(6,12,28,0.34)",
                padding: "26px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 18,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#bfe7ff",
                }}
              >
                Featured Product Pillars
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: 118,
                    height: 118,
                    borderRadius: 28,
                    background: "linear-gradient(135deg, #e6f7ff, #7ec8ff)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#071120",
                    fontSize: 42,
                    fontWeight: 700,
                  }}
                >
                  W
                </div>
                <div
                  style={{
                    width: 172,
                    height: 118,
                    borderRadius: 28,
                    background: "linear-gradient(135deg, #fff7e6, #ffd166)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#071120",
                    fontSize: 42,
                    fontWeight: 700,
                  }}
                >
                  Z
                </div>
                <div
                  style={{
                    width: 118,
                    height: 118,
                    borderRadius: 28,
                    background: "linear-gradient(135deg, #eafff8, #3ddc97)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#071120",
                    fontSize: 42,
                    fontWeight: 700,
                  }}
                >
                  T
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 30,
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.18,
                  }}
                >
                  A premium umbrella brand for learning, commerce, and AI.
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 21,
                    color: "rgba(236,244,255,0.84)",
                    lineHeight: 1.45,
                  }}
                >
                  Explore the ecosystem at mytechacademia.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
