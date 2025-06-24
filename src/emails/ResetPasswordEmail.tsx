import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Text,
    Link,
    Img,
    Section,
  } from "@react-email/components";
  import * as React from "react";
  
  export type ResetPasswordEmailProps = {
    email: string;
    session_id: string;
  };
  
  export default function ResetPasswordEmail({ email, session_id }: ResetPasswordEmailProps) {
    const resetUrl = `https://links.getgroceryguru.com/reset/${session_id}`;
  
    return (
      <Html>
        <Head />
        <Preview>Reset your GroceryGuru password. This link will expire in one hour.</Preview>
        <Body
          style={{
            backgroundColor: "#F8F9FA",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'SF Pro Display', Helvetica, Arial, sans-serif",
            margin: "0",
            padding: "40px 20px",
          }}
        >
          <Container
            style={{
              backgroundColor: "#EAEAE5",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(47, 79, 63, 0.1)",
              margin: "0 auto",
              maxWidth: "600px",
              overflow: "hidden",
            }}
          >
            <Section
              style={{ backgroundColor: "#FFBE72", padding: "32px 40px", textAlign: "center" }}
            >
              <Img
                src="https://gg-email-renderer.vercel.app/googleIcon_GroceryGuru_320x132.png"
                alt="GroceryGuru"
                width="160"
                height="66"
                style={{ display: "block", margin: "0 auto" }}
              />
            </Section>
  
            <Section style={{ padding: "40px" }}>
              <Text
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#2A3D2E",
                  marginBottom: "24px",
                  textAlign: "center",
                }}
              >
                Reset your password
              </Text>
  
              <Text style={{ fontSize: "16px", color: "#2A3D2E", margin: "16px 0" }}>
                A reset request was made for <strong>{email}</strong>. If this wasn’t you, feel free to ignore it.
              </Text>
  
              <Text style={{ fontSize: "16px", color: "#2A3D2E", margin: "16px 0" }}>
                Tap below to continue. If nothing happens, copy and paste this code into the GroceryGuru app.
              </Text>
  
              <Section style={{ textAlign: "center", margin: "32px 0" }}>
                <Link
                  href={resetUrl}
                  style={{
                    backgroundColor: "#2A3D2E",
                    color: "#ffffff",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: 600,
                    padding: "16px 32px",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Reset Password
                </Link>
              </Section>
  
              <Text style={{ fontSize: "14px", color: "#2A3D2E", textAlign: "center" }}>
                Reset Code:
              </Text>
  
              <Text
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  background: "#FFFFFF",
                  border: "2px solid #FFBE72",
                  padding: "12px 20px",
                  textAlign: "center",
                  display: "inline-block",
                  borderRadius: "8px",
                  margin: "16px auto",
                }}
              >
                {session_id}
              </Text>
  
              <Text style={{ fontSize: "14px", color: "#6D6D6D", marginTop: "24px" }}>
                This link expires in one hour.
              </Text>
            </Section>
  
            <Section
              style={{
                backgroundColor: "#F8F9FA",
                padding: "24px 40px",
                textAlign: "center",
                borderTop: "1px solid rgba(255, 190, 114, 0.2)",
              }}
            >
              <Text style={{ fontSize: "14px", color: "#6D6D6D", margin: 0 }}>
                © 2025 GroceryGuru. Smart lists made simple.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  }
  