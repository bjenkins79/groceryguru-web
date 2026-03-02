// src/emails/ReEngagementEmail.tsx

import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Img,
  Link,
} from "@react-email/components";
import * as React from "react";

type Props = {
  first_name: string;
  user_email: string;
};

const ReEngagementEmail = ({ first_name, user_email }: Props) => {
  const ctaUrl = "https://links.getgroceryguru.com";

  return (
    <Html>
      <Head />
      {/* No Preview - first body line shows in inbox preview */}
      <Body
        style={{
          backgroundColor: "#EAEAE5",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
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
              padding: "32px 40px 40px 40px",
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
          <Section style={{ padding: "48px 40px 32px 40px" }}>
            {/* Opening */}
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#2A3D2E",
                margin: "0 0 16px 0",
                textAlign: "left",
              }}
            >
              It's been a few weeks since you downloaded GroceryGuru.
            </Text>

            {/* Acknowledgment */}
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#2A3D2E",
                margin: "0 0 16px 0",
                textAlign: "left",
              }}
            >
              Sometimes an app doesn't fit. Sometimes life gets in the way. Or maybe you realized pen and paper grocery lists are still the best.
            </Text>

            {/* Bridge */}
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#2A3D2E",
                margin: "0 0 32px 0",
                textAlign: "left",
              }}
            >
              If you haven't already, try it on your next shopping trip.
            </Text>

            {/* CTA Button */}
            <Section style={{ textAlign: "center", marginTop: "0", marginBottom: "32px" }}>
              <Link
                href={ctaUrl}
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
                Open GroceryGuru
              </Link>
            </Section>

            {/* Feedback ask */}
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#2A3D2E",
                margin: "0 0 24px 0",
                textAlign: "left",
              }}
            >
              If something didn't work for you, I'd love to hear about it. I read every email at{" "}
              <Link
                href="mailto:support@getgroceryguru.com"
                style={{ color: "#293D2E", textDecoration: "underline" }}
              >
                support@getgroceryguru.com
              </Link>
              .
            </Text>

            {/* Sign-off */}
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#2A3D2E",
                margin: "0",
                textAlign: "left",
              }}
            >
              Keep shopping smart,
              <br />
              Ben
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
              © 2026 GroceryGuru. Smart lists made simple.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ReEngagementEmail;
