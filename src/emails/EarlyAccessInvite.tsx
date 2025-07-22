import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Section,
    Text,
    Img,
    Link,
  } from "@react-email/components";
  import * as React from "react";
  
  type Props = {
    email: string;
    testflightUrl: string;
  };
  
  const EarlyAccessInvite = ({ email, testflightUrl }: Props) => {
    return (
      <Html>
        <Head />
        <Preview>Join GroceryGuru on TestFlight</Preview>
  
        <Body
          style={{
            backgroundColor: "#EAEAE5",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
            margin: "0",
            padding: "40px 20px",
            color: "#293D2E",
          }}
        >
          <Container
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(47, 79, 63, 0.1)",
              margin: "0 auto",
              maxWidth: "600px",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <Section
              style={{
                backgroundColor: "#FFBE72",
                padding: "32px 40px",
                textAlign: "center",
              }}
            >
              <Img
                src="https://gg-email-renderer.vercel.app/googleIcon_GroceryGuru_320x132.png"
                alt="GroceryGuru"
                width="160"
                height="66"
                style={{ display: "block", margin: "0 auto" }}
              />
            </Section>
  
            {/* Content */}
            <Section style={{ padding: "40px" }}>
              <Text
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#2A3D2E",
                  marginBottom: "16px",
                  textAlign: "center",
                }}
              >
                You're invited to test GroceryGuru
              </Text>
  
              <Text
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#2A3D2E",
                  margin: "16px 0",
                }}
              >
                Thanks for signing up for early access. We’re excited to have you try GroceryGuru before launch.
              </Text>
  
              <Text
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#2A3D2E",
                  margin: "16px 0",
                }}
              >
                Tap below to install the app via TestFlight. You’ll be redirected to the App Store if needed.
              </Text>
  
              <Section style={{ textAlign: "center", margin: "32px 0" }}>
                <Link
                  href={testflightUrl}
                  style={{
                    backgroundColor: "#293D2E",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    display: "inline-block",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "20px",
                    padding: "16px 32px",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  Join TestFlight
                </Link>
              </Section>
  
              <Text
                style={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: "#6D6D6D",
                  textAlign: "center",
                }}
              >
                This is a public link. Access is limited and may close once we reach our tester limit.
              </Text>
            </Section>
  
            {/* Footer */}
            <Section
              style={{
                backgroundColor: "#F8F9FA",
                padding: "24px 40px",
                textAlign: "center",
                borderTop: "1px solid rgba(255, 190, 114, 0.2)",
              }}
            >
              <Text
                style={{
                  fontSize: "14px",
                  color: "#6D6D6D",
                  margin: "0",
                }}
              >
                © 2025 GroceryGuru. Smart lists made simple.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  export default EarlyAccessInvite;
  